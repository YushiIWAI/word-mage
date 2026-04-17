#!/usr/bin/env python3
"""
高品質ドット絵変換スクリプト v2

パイプライン:
  1. バイラテラルフィルタ（エッジ保持ノイズ除去）
  2. エッジ検出 → アウトライン抽出
  3. Lanczosリサイズ（目標サイズへ縮小）
  4. LAB色空間でカラー量子化（ベイズGMM or k-means）
  5. アウトライン合成（キャラ用）
  6. Floyd-Steinbergディザリング（オプション）
  7. インデックスカラーPNG保存

使い方:
    python3 pixelize.py input.png -o output.png --width 64 --height 96 --colors 16
    python3 pixelize.py input.png --preset witch
    python3 pixelize.py --batch
"""

import argparse
from pathlib import Path

import cv2
import numpy as np
from PIL import Image
from sklearn.cluster import MiniBatchKMeans
from sklearn.mixture import GaussianMixture


# ── プリセット定義（ドット絵サイズ、2倍拡大でゲーム表示） ──
# 追加パラメータ:
#   crop_top_frac, crop_bottom_frac: raw画像の上端/下端を指定割合でクロップ（0.0〜1.0）
#   例: crop_top_frac=0.50 → 上半分を切り捨て、下半分だけ使う
PRESETS = {
    # キャラ: 64x64ドット → 128x128表示（2倍拡大）
    "witch": {
        "width": 64, "height": 64, "colors": 32,
        "outline": True, "outline_strength": 0.7,
        "dither": False, "bilateral": True,
        "chromakey": True, "chromakey_fuzz": 40.0,
    },
    # 背景: ドット感を出すサイズ → 2倍拡大表示
    "bg-far": {
        "width": 512, "height": 96, "colors": 14,
        "outline": False, "outline_strength": 0,
        "dither": False, "bilateral": True,
    },
    # bg-mid (標準): 単純なシーン用
    "bg-mid": {
        "width": 400, "height": 96, "colors": 14,
        "outline": True, "outline_strength": 0.3,
        "dither": False, "bilateral": True,
    },
    # bg-mid-complex: 情報量が多い複雑なシーン（森・山）用
    "bg-mid-complex": {
        "width": 400, "height": 96, "colors": 18,
        "outline": True, "outline_strength": 0.15,
        "dither": False, "bilateral": True,
    },
    "road": {
        "width": 400, "height": 16, "colors": 8,
        "outline": False, "outline_strength": 0,
        "dither": False, "bilateral": True,
    },
    # bg-near は scene 別にクロップ範囲を変えるため個別定義する
    # crop_top_frac: raw画像のここから下を使う（空部分を捨てる）
    "bg-near-forest": {
        "width": 480, "height": 32, "colors": 14,
        "outline": True, "outline_strength": 0.4,
        "dither": False, "bilateral": True,
        "chromakey": True, "chromakey_fuzz": 55.0,
        "crop_top_frac": 0.50, "crop_bottom_frac": 0.02,
    },
    # valley/mountain/castle の near は左上が空の単色でないため chromakey 不可。
    # crop で空を切り捨て、地面ごと不透明で描画する
    "bg-near-valley": {
        "width": 480, "height": 32, "colors": 14,
        "outline": True, "outline_strength": 0.4,
        "dither": False, "bilateral": True,
        "crop_top_frac": 0.60, "crop_bottom_frac": 0.0,
    },
    "bg-near-mountain": {
        "width": 480, "height": 32, "colors": 14,
        "outline": True, "outline_strength": 0.4,
        "dither": False, "bilateral": True,
        "crop_top_frac": 0.50, "crop_bottom_frac": 0.0,
    },
    "bg-near-castle": {
        "width": 480, "height": 32, "colors": 14,
        "outline": True, "outline_strength": 0.4,
        "dither": False, "bilateral": True,
        "crop_top_frac": 0.50, "crop_bottom_frac": 0.0,
    },
    "bg-near-tower": {
        "width": 480, "height": 32, "colors": 14,
        "outline": True, "outline_strength": 0.4,
        "dither": False, "bilateral": True,
        "chromakey": True, "chromakey_fuzz": 55.0,
        "crop_top_frac": 0.55, "crop_bottom_frac": 0.0,
    },
    # UIアイコン
    "icon": {
        "width": 48, "height": 16, "colors": 10,
        "outline": True, "outline_strength": 0.6,
        "dither": False, "bilateral": True,
    },
}

# ── バッチ定義 ──────────────────────────────────────
# mid 層: 複雑シーン(森・山)は bg-mid-complex、単純シーン(谷・城・塔)は bg-mid
MID_PRESET_BY_STAGE = {
    "forest": "bg-mid-complex",
    "valley": "bg-mid",
    "mountain": "bg-mid-complex",
    "castle": "bg-mid",
    "tower": "bg-mid",
}

BATCH_JOBS = []
for name in ["witch-idle-v7", "witch-walk-1-v7", "witch-walk-2-v7"]:
    out_name = name.replace("-v7", "")
    BATCH_JOBS.append((f"raw/{name}-raw.png", f"{out_name}.png", "witch"))
for stage in ["forest", "valley", "mountain", "castle", "tower"]:
    BATCH_JOBS.append((f"bg-{stage}-far-raw.png", f"bg-{stage}-far.png", "bg-far"))
    BATCH_JOBS.append((f"bg-{stage}-mid-raw.png", f"bg-{stage}-mid.png", MID_PRESET_BY_STAGE[stage]))
    BATCH_JOBS.append((f"road-{stage}-raw.png", f"road-{stage}.png", "road"))
    BATCH_JOBS.append((f"bg-{stage}-near-raw.png", f"bg-{stage}-near.png", f"bg-near-{stage}"))
BATCH_JOBS.append(("ui-icons-raw.png", "ui-icons.png", "icon"))


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 1: バイラテラルフィルタ（エッジ保持平滑化）
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def bilateral_smooth(img_cv: np.ndarray) -> np.ndarray:
    """
    バイラテラルフィルタでエッジを保持しつつノイズ・細部を除去。
    ドット絵変換の前処理として、不要なテクスチャ詳細を消し
    色の面を均一にする。2パスで強めに適用。
    """
    result = cv2.bilateralFilter(img_cv, d=9, sigmaColor=75, sigmaSpace=75)
    result = cv2.bilateralFilter(result, d=9, sigmaColor=50, sigmaSpace=50)
    return result


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 2: アウトライン抽出
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def extract_outline(img_cv: np.ndarray, strength: float = 0.7) -> np.ndarray:
    """
    Cannyエッジ検出でアウトラインを抽出。
    strength (0.0-1.0) でアウトラインの太さ・濃さを制御。

    Returns: グレースケール画像（0=アウトライン, 255=背景）
    """
    gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)

    # ガウシアンブラーで微細ノイズ除去
    blurred = cv2.GaussianBlur(gray, (3, 3), 0)

    # Cannyエッジ検出（閾値は画像の中央値ベース）
    median_val = np.median(blurred)
    low = int(max(0, (1.0 - strength) * median_val))
    high = int(min(255, (1.0 + strength) * median_val))
    edges = cv2.Canny(blurred, low, high)

    # エッジを少し膨張させて太くする（strengthに応じて）
    if strength > 0.5:
        kernel = np.ones((2, 2), np.uint8)
        edges = cv2.dilate(edges, kernel, iterations=1)

    # 反転（0=黒線, 255=背景）
    outline = 255 - edges
    return outline


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 3: リサイズ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def resize_cv(img_cv: np.ndarray, width: int, height: int) -> np.ndarray:
    """Lanczos4リサイズ（OpenCV）。エッジの保持に優れる。"""
    return cv2.resize(img_cv, (width, height), interpolation=cv2.INTER_LANCZOS4)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 4: LAB色空間カラー量子化
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def rgb_to_lab(rgb: np.ndarray) -> np.ndarray:
    """RGB (0-255) → CIELAB。OpenCVのcvtColorを使用。"""
    # OpenCVはBGRなので変換
    bgr = rgb[:, :, ::-1] if len(rgb.shape) == 3 else rgb.reshape(-1, 1, 3)[:, :, ::-1]
    lab = cv2.cvtColor(bgr.astype(np.uint8), cv2.COLOR_BGR2LAB)
    return lab.astype(np.float32)


def lab_to_rgb(lab: np.ndarray) -> np.ndarray:
    """CIELAB → RGB (0-255)。"""
    bgr = cv2.cvtColor(lab.astype(np.uint8), cv2.COLOR_LAB2BGR)
    return bgr[:, :, ::-1] if len(bgr.shape) == 3 else bgr


def quantize_colors(img_cv: np.ndarray, n_colors: int, use_gmm: bool = True) -> tuple:
    """
    LAB色空間でカラー量子化。

    use_gmm=True: ベイズGMM（高品質、アクセントカラーを自然に保持）
    use_gmm=False: MiniBatchKMeans（高速）

    Returns: (量子化済み画像, パレット配列)
    """
    h, w = img_cv.shape[:2]

    # BGR → LAB
    lab = cv2.cvtColor(img_cv, cv2.COLOR_BGR2LAB).astype(np.float32)
    pixels_lab = lab.reshape(-1, 3)

    unique_colors = len(np.unique(pixels_lab.astype(np.int32).view(np.dtype((np.void, 12)))))
    actual_n = min(n_colors, unique_colors)

    if use_gmm and actual_n >= 3:
        # ベイズGMM: 小さなクラスタも生き残りやすい
        try:
            gmm = GaussianMixture(
                n_components=actual_n,
                covariance_type="tied",
                random_state=42,
                max_iter=200,
                n_init=3,
                reg_covar=1e-4,
            )
            labels = gmm.fit_predict(pixels_lab)
            centers_lab = gmm.means_.astype(np.float32)
        except ValueError:
            # GMMが失敗した場合はk-meansにフォールバック
            use_gmm = False
    if not use_gmm or actual_n < 3:
        kmeans = MiniBatchKMeans(
            n_clusters=actual_n,
            random_state=42,
            batch_size=min(1024, len(pixels_lab)),
            n_init=5,
        )
        labels = kmeans.fit_predict(pixels_lab)
        centers_lab = kmeans.cluster_centers_.astype(np.float32)

    # ラベル → 量子化LAB → BGR → RGB
    quantized_lab = centers_lab[labels].reshape(h, w, 3)
    quantized_bgr = cv2.cvtColor(quantized_lab.astype(np.uint8), cv2.COLOR_LAB2BGR)

    # パレットをRGBで返す
    palette_bgr = np.array([
        cv2.cvtColor(c.reshape(1, 1, 3).astype(np.uint8), cv2.COLOR_LAB2BGR).flatten()
        for c in centers_lab
    ])
    palette_rgb = palette_bgr[:, ::-1]

    return quantized_bgr, palette_rgb


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 5: アウトライン合成
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def composite_outline(
    img_cv: np.ndarray,
    outline: np.ndarray,
    outline_color: tuple = (30, 20, 15),
    strength: float = 0.7,
) -> np.ndarray:
    """
    アウトラインを画像に合成。
    outline: グレースケール（0=線, 255=背景）
    """
    # アウトラインを0-1のマスクに（0=背景, 1=線）
    mask = (1.0 - outline.astype(np.float32) / 255.0) * strength

    result = img_cv.astype(np.float32)
    for c in range(3):
        # BGR順でoutline_colorを適用
        oc = outline_color[2 - c]  # RGB → BGR
        result[:, :, c] = result[:, :, c] * (1 - mask) + oc * mask

    return np.clip(result, 0, 255).astype(np.uint8)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 6: Floyd-Steinbergディザリング
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def floyd_steinberg_dither(
    img_cv: np.ndarray,
    palette_rgb: np.ndarray,
    strength: float = 1.0,
) -> np.ndarray:
    """
    Floyd-Steinbergディザリング。
    パレット内の最近傍色に量子化しつつ誤差を拡散。
    strength < 1.0 で誤差拡散を弱める（軽めディザ）。
    """
    # BGR → RGB for processing
    img_rgb = img_cv[:, :, ::-1].astype(np.float32)
    h, w, _ = img_rgb.shape
    palette = palette_rgb.astype(np.float32)

    for y in range(h):
        for x in range(w):
            old = img_rgb[y, x].copy()
            # 最近傍パレット色
            dists = np.sum((palette - old) ** 2, axis=1)
            nearest_idx = np.argmin(dists)
            new = palette[nearest_idx]
            img_rgb[y, x] = new

            error = (old - new) * strength
            # 誤差拡散
            if x + 1 < w:
                img_rgb[y, x + 1] += error * 7 / 16
            if y + 1 < h:
                if x - 1 >= 0:
                    img_rgb[y + 1, x - 1] += error * 3 / 16
                img_rgb[y + 1, x] += error * 5 / 16
                if x + 1 < w:
                    img_rgb[y + 1, x + 1] += error * 1 / 16

    result = np.clip(img_rgb, 0, 255).astype(np.uint8)
    return result[:, :, ::-1]  # RGB → BGR


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# メインパイプライン
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def remove_background(img_cv: np.ndarray, fuzz: float = 40.0) -> np.ndarray:
    """
    左上ピクセルの色を基準に背景を除去。
    HSV空間で距離がfuzz以内のピクセルを透過にする。

    Returns: アルファマスク (h, w) uint8 0-255
    """
    hsv = cv2.cvtColor(img_cv, cv2.COLOR_BGR2HSV).astype(np.float32)
    bg_hsv = hsv[0, 0]
    h_diff = np.abs(hsv[:, :, 0] - bg_hsv[0])
    h_diff = np.minimum(h_diff, 180 - h_diff)
    s_diff = np.abs(hsv[:, :, 1] - bg_hsv[1])
    v_diff = np.abs(hsv[:, :, 2] - bg_hsv[2])
    dist = np.sqrt(h_diff ** 2 + (s_diff * 0.5) ** 2 + (v_diff * 0.5) ** 2)
    return np.where(dist < fuzz, 0, 255).astype(np.uint8)


def pixelize(
    input_path: str,
    output_path: str,
    width: int,
    height: int,
    colors: int,
    outline: bool = False,
    outline_strength: float = 0.7,
    dither=False,
    bilateral: bool = True,
    chromakey: bool = False,
    chromakey_fuzz: float = 40.0,
    crop_top_frac: float = 0.0,
    crop_bottom_frac: float = 0.0,
) -> None:
    # 読み込み（OpenCV BGR）
    img = cv2.imread(input_path, cv2.IMREAD_COLOR)
    if img is None:
        print(f"  ERROR: {input_path} を読み込めません")
        return

    print(f"    入力: {img.shape[1]}x{img.shape[0]}", end="", flush=True)

    # ── Step -1: クロップ（raw画像の上端/下端を切り捨て） ──
    if crop_top_frac > 0 or crop_bottom_frac > 0:
        h_src = img.shape[0]
        top = int(h_src * crop_top_frac)
        bottom = int(h_src * (1.0 - crop_bottom_frac))
        img = img[top:bottom, :]
        print(f" → crop[{img.shape[1]}x{img.shape[0]}]", end="", flush=True)

    # ── Step 0: 背景除去 ──
    alpha_mask = None
    if chromakey:
        alpha_mask = remove_background(img, chromakey_fuzz)
        print(" → chromakey", end="", flush=True)

    # ── Step 1: バイラテラルフィルタ ──
    if bilateral:
        img = bilateral_smooth(img)
        print(" → bilateral", end="", flush=True)

    # ── Step 2: アウトライン抽出（リサイズ前の高解像度で） ──
    outline_map = None
    if outline and outline_strength > 0:
        outline_map = extract_outline(img, outline_strength)
        print(" → outline", end="", flush=True)

    # ── Step 3: リサイズ ──
    img = resize_cv(img, width, height)
    if alpha_mask is not None:
        alpha_mask = cv2.resize(alpha_mask, (width, height), interpolation=cv2.INTER_LANCZOS4)
        _, alpha_mask = cv2.threshold(alpha_mask, 128, 255, cv2.THRESH_BINARY)
    if outline_map is not None:
        outline_map = cv2.resize(outline_map, (width, height), interpolation=cv2.INTER_LANCZOS4)
        # リサイズ後にアウトラインを二値化して鮮明に
        _, outline_map = cv2.threshold(outline_map, 180, 255, cv2.THRESH_BINARY)
    print(f" → {width}x{height}", end="", flush=True)

    # ── Step 4: カラー量子化（LAB空間） ──
    quantized, palette = quantize_colors(img, colors, use_gmm=(colors <= 24))
    print(f" → {len(palette)}色", end="", flush=True)

    # ── Step 5: アウトライン合成 ──
    if outline_map is not None:
        quantized = composite_outline(quantized, outline_map, strength=outline_strength)
        print(" → outline合成", end="", flush=True)

    # ── Step 6: ディザリング ──
    if dither:
        dither_strength = 0.4 if dither == "light" else 1.0
        quantized = floyd_steinberg_dither(quantized, palette, dither_strength)
        print(f" → dither({dither})", end="", flush=True)

    # ── 保存 ──
    rgb = cv2.cvtColor(quantized, cv2.COLOR_BGR2RGB)
    if alpha_mask is not None:
        rgba = np.dstack([rgb, alpha_mask])
        pil_img = Image.fromarray(rgba, "RGBA")
        pil_img.save(output_path, "PNG", optimize=True)
        opaque = rgb[alpha_mask > 0]
        actual_colors = len(set(map(tuple, opaque))) if len(opaque) > 0 else 0
        print(f" => {output_path} ({width}x{height}, {actual_colors}色 RGBA)")
    else:
        pil_img = Image.fromarray(rgb)
        pil_img = pil_img.convert("P", palette=Image.ADAPTIVE, colors=colors)
        pil_img.save(output_path, "PNG", optimize=True)
        actual_colors = len(set(Image.fromarray(rgb).convert("RGB").getdata()))
        print(f" => {output_path} ({width}x{height}, {actual_colors}色)")


def run_batch(base_dir: str) -> None:
    """全素材を一括変換"""
    base = Path(base_dir)
    success = 0
    skip = 0
    for src, dst, preset_name in BATCH_JOBS:
        src_path = base / src
        dst_path = base / dst
        if not src_path.exists():
            print(f"  SKIP: {src} (not found)")
            skip += 1
            continue
        preset = PRESETS[preset_name]
        print(f"  {src} -> {dst} [{preset_name}]")
        pixelize(
            str(src_path), str(dst_path),
            preset["width"], preset["height"], preset["colors"],
            preset["outline"], preset["outline_strength"],
            preset["dither"], preset["bilateral"],
            preset.get("chromakey", False), preset.get("chromakey_fuzz", 40.0),
            preset.get("crop_top_frac", 0.0), preset.get("crop_bottom_frac", 0.0),
        )
        success += 1
    print(f"\n完了: {success}件変換, {skip}件スキップ")


def main():
    parser = argparse.ArgumentParser(description="高品質ドット絵変換スクリプト v2")
    parser.add_argument("input", nargs="?", help="入力画像パス")
    parser.add_argument("-o", "--output", help="出力画像パス")
    parser.add_argument("--width", type=int, default=64)
    parser.add_argument("--height", type=int, default=96)
    parser.add_argument("--colors", type=int, default=16)
    parser.add_argument("--outline", action="store_true", default=False)
    parser.add_argument("--outline-strength", type=float, default=0.7)
    parser.add_argument("--dither", nargs="?", const="full", default=False,
                        choices=["light", "full"])
    parser.add_argument("--no-bilateral", action="store_true")
    parser.add_argument("--preset", choices=list(PRESETS.keys()))
    parser.add_argument("--batch", action="store_true", help="全素材一括変換")

    args = parser.parse_args()

    if args.batch:
        script_dir = str(Path(__file__).parent)
        print(f"バッチ変換: {script_dir}")
        run_batch(script_dir)
        return

    if not args.input:
        parser.error("入力ファイルを指定してください（または --batch を使用）")

    if args.preset:
        p = PRESETS[args.preset]
        args.width = p["width"]
        args.height = p["height"]
        args.colors = p["colors"]
        args.outline = p["outline"]
        args.outline_strength = p["outline_strength"]
        args.dither = p["dither"]
        bilateral = p["bilateral"]
        chromakey = p.get("chromakey", False)
        chromakey_fuzz = p.get("chromakey_fuzz", 40.0)
        crop_top_frac = p.get("crop_top_frac", 0.0)
        crop_bottom_frac = p.get("crop_bottom_frac", 0.0)
    else:
        bilateral = not args.no_bilateral
        chromakey = False
        chromakey_fuzz = 40.0
        crop_top_frac = 0.0
        crop_bottom_frac = 0.0

    output = args.output or args.input.replace("-raw", "").replace(".png", "-pixel.png")

    pixelize(args.input, output, args.width, args.height, args.colors,
             args.outline, args.outline_strength, args.dither, bilateral,
             chromakey, chromakey_fuzz, crop_top_frac, crop_bottom_frac)


if __name__ == "__main__":
    main()
