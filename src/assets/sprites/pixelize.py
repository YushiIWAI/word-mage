#!/usr/bin/env python3
"""
高品質ドット絵変換スクリプト v3

ドッターの手法を自動化で再現するパイプライン:
  1. バイラテラルフィルタ（エッジ保持ノイズ除去）
  2. Area samplingリサイズ（大幅縮小に最適、情報欠落が少ない）
  3. LAB色空間でカラー量子化（GMM or k-means）
  4. 近似色マージ（ΔE閾値で統合、色面をフラット化）
  5. AA除去（全ピクセルをパレット最近傍にスナップ）
  6. 色相シフト後処理（影→青紫、ハイライト→暖色）
  7. Bayerオーダードディザリング（ドット絵的なパターンディザ）
  8. アウトライン抽出+セルアウト（縮小後の1pxスケールで制御）
  9. インデックスカラーPNG保存

v2からの変更:
  - Lanczos4 → INTER_AREA（大幅縮小向け）
  - アウトライン処理を縮小前→縮小後に移動（1px精度で制御可能に）
  - Bayerディザリング追加（ドット絵らしい規則的パターン）
  - AA除去ステップ追加（中間色ピクセルをパレット色にスナップ）
  - 近似色マージ追加（ΔE < 閾値の色を統合、色面フラット化）
  - 色相シフト後処理追加（影を青紫、ハイライトを暖色に）
  - セルアウト追加（アウトライン色を隣接色の暗色版に）
  - Floyd-Steinbergディザも残存（選択可能）

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
PRESETS = {
    # キャラ: 32x48ドット → 64x96表示
    # 32×48ではアウトラインを入れない（下絵のアウトラインが量子化で暗色として残る）
    # 顔・目はAseprite手描き修正必須
    "witch": {
        "width": 32, "height": 48, "colors": 16,
        "outline": False, "outline_strength": 0,
        "selout": False,
        "dither": "bayer2",
        "dither_strength": 0.2,
        "bilateral": True,
        "merge_threshold": 0,
        "hue_shift": True,
        "chromakey": True,
        "chromakey_fuzz": 40.0,
    },
    # 背景: ドット感を出すサイズ → 2倍拡大表示
    "bg-far": {
        "width": 512, "height": 96, "colors": 14,
        "outline": False, "outline_strength": 0,
        "selout": False,
        "dither": "bayer4",
        "dither_strength": 0.4,
        "bilateral": True,
        "merge_threshold": 8.0,
        "hue_shift": True,
    },
    "bg-mid": {
        "width": 400, "height": 96, "colors": 14,
        "outline": True, "outline_strength": 0.5,
        "selout": True,
        "dither": "bayer2",
        "dither_strength": 0.35,
        "bilateral": True,
        "merge_threshold": 6.0,
        "hue_shift": True,
        "chromakey": True,
        "chromakey_fuzz": 35.0,
    },
    "road": {
        "width": 400, "height": 16, "colors": 8,
        "outline": False, "outline_strength": 0,
        "selout": False,
        "dither": "bayer2",
        "dither_strength": 0.3,
        "bilateral": True,
        "merge_threshold": 10.0,
        "hue_shift": False,
    },
    "bg-near": {
        "width": 480, "height": 32, "colors": 10,
        "outline": True, "outline_strength": 0.5,
        "selout": True,
        "dither": "bayer2",
        "dither_strength": 0.35,
        "bilateral": True,
        "merge_threshold": 6.0,
        "hue_shift": True,
        "chromakey": True,
        "chromakey_fuzz": 35.0,
    },
    # UIアイコン
    "icon": {
        "width": 48, "height": 16, "colors": 10,
        "outline": True, "outline_strength": 0.6,
        "selout": True,
        "dither": False,
        "dither_strength": 0,
        "bilateral": True,
        "merge_threshold": 6.0,
        "hue_shift": False,
    },
}

# ── バッチ定義 ──────────────────────────────────────
BATCH_JOBS = []
# 魔女（v5素材、rawサブディレクトリ）
for name in ["witch-idle-v5", "witch-walk-1-v5", "witch-walk-2-v5"]:
    out_name = name.replace("-v5", "")
    BATCH_JOBS.append((f"raw/{name}-raw.png", f"{out_name}.png", "witch"))
# 背景（rawサブディレクトリ）
for stage in ["forest", "valley", "mountain", "castle", "tower"]:
    BATCH_JOBS.append((f"raw/bg-{stage}-far-raw.png", f"bg-{stage}-far.png", "bg-far"))
    BATCH_JOBS.append((f"raw/bg-{stage}-mid-raw.png", f"bg-{stage}-mid.png", "bg-mid"))
    BATCH_JOBS.append((f"raw/road-{stage}-raw.png", f"road-{stage}.png", "road"))
    BATCH_JOBS.append((f"raw/bg-{stage}-near-raw.png", f"bg-{stage}-near.png", "bg-near"))
# UI（rawサブディレクトリ）
BATCH_JOBS.append(("raw/ui-icons-raw.png", "ui-icons.png", "icon"))


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
# Step 2: Area samplingリサイズ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def resize_area(img_cv: np.ndarray, width: int, height: int) -> np.ndarray:
    """
    INTER_AREAリサイズ。大幅縮小に最適。
    全入力ピクセルが出力に寄与するため情報欠落が少ない。
    Lanczos4のリンギングアーティファクトも発生しない。
    """
    return cv2.resize(img_cv, (width, height), interpolation=cv2.INTER_AREA)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 3: LAB色空間カラー量子化
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def quantize_colors(
    img_cv: np.ndarray,
    n_colors: int,
    use_gmm: bool = True,
    alpha_mask: np.ndarray = None,
) -> tuple:
    """
    LAB色空間でカラー量子化。
    alpha_maskが指定された場合、不透明ピクセルのみでクラスタリングし、
    背景がパレット枠を食い潰すのを防ぐ。

    Returns: (量子化済み画像BGR, パレット配列RGB, ラベル配列, centers_lab)
    """
    h, w = img_cv.shape[:2]

    # BGR → LAB
    lab = cv2.cvtColor(img_cv, cv2.COLOR_BGR2LAB).astype(np.float32)
    all_pixels_lab = lab.reshape(-1, 3)

    # マスクがある場合、不透明ピクセルのみでクラスタリング
    if alpha_mask is not None:
        fg_mask = alpha_mask.reshape(-1) > 0
        fg_pixels_lab = all_pixels_lab[fg_mask]
        if len(fg_pixels_lab) == 0:
            fg_pixels_lab = all_pixels_lab  # フォールバック
    else:
        fg_pixels_lab = all_pixels_lab
        fg_mask = None

    unique_colors = len(np.unique(fg_pixels_lab.astype(np.int32).view(np.dtype((np.void, 12)))))
    actual_n = min(n_colors, unique_colors)

    if use_gmm and actual_n >= 3:
        try:
            gmm = GaussianMixture(
                n_components=actual_n,
                covariance_type="tied",
                random_state=42,
                max_iter=200,
                n_init=3,
                reg_covar=1e-4,
            )
            fg_labels = gmm.fit_predict(fg_pixels_lab)
            centers_lab = gmm.means_.astype(np.float32)
        except ValueError:
            use_gmm = False
    if not use_gmm or actual_n < 3:
        kmeans = MiniBatchKMeans(
            n_clusters=actual_n,
            random_state=42,
            batch_size=min(1024, len(fg_pixels_lab)),
            n_init=5,
        )
        fg_labels = kmeans.fit_predict(fg_pixels_lab)
        centers_lab = kmeans.cluster_centers_.astype(np.float32)

    # 全ピクセルにラベルを割り当て（背景含む → 最近傍で割り当て）
    if fg_mask is not None:
        labels = np.zeros(len(all_pixels_lab), dtype=np.int32)
        labels[fg_mask] = fg_labels
        # 背景ピクセルも最近傍で割り当て（アウトライン検出等で参照されるため）
        bg_pixels = all_pixels_lab[~fg_mask]
        if len(bg_pixels) > 0:
            dists = np.sum((bg_pixels[:, None, :] - centers_lab[None, :, :]) ** 2, axis=2)
            labels[~fg_mask] = np.argmin(dists, axis=1)
    else:
        labels = fg_labels

    # ラベル → 量子化LAB → BGR
    quantized_lab = centers_lab[labels].reshape(h, w, 3)
    quantized_bgr = cv2.cvtColor(quantized_lab.astype(np.uint8), cv2.COLOR_LAB2BGR)

    # パレットをRGBで返す
    palette_bgr = np.array([
        cv2.cvtColor(c.reshape(1, 1, 3).astype(np.uint8), cv2.COLOR_LAB2BGR).flatten()
        for c in centers_lab
    ])
    palette_rgb = palette_bgr[:, ::-1]

    return quantized_bgr, palette_rgb, labels.reshape(h, w), centers_lab


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 4: 近似色マージ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def merge_similar_colors(
    img_bgr: np.ndarray,
    palette_rgb: np.ndarray,
    centers_lab: np.ndarray,
    labels: np.ndarray,
    threshold: float = 8.0,
) -> tuple:
    """
    LAB色空間でΔE < thresholdの近似パレット色を統合。
    色面をフラット化し、ドット絵らしい明確な色分けを実現。

    Returns: (更新済み画像BGR, 更新済みパレットRGB, 更新済みラベル, 更新済みcenters_lab)
    """
    n = len(centers_lab)
    # マージマッピング: merge_to[i] = iが統合される先のインデックス
    merge_to = list(range(n))

    # 色差行列を計算
    for i in range(n):
        if merge_to[i] != i:
            continue  # 既にマージ済み
        for j in range(i + 1, n):
            if merge_to[j] != j:
                continue
            delta_e = np.sqrt(np.sum((centers_lab[i] - centers_lab[j]) ** 2))
            if delta_e < threshold:
                # jをiにマージ（iの方がインデックスが若い = 先に見つかった色を残す）
                # ピクセル数が多い方に統合する
                count_i = np.sum(labels == i)
                count_j = np.sum(labels == j)
                if count_i >= count_j:
                    merge_to[j] = i
                else:
                    merge_to[i] = j
                    break  # iが消えたのでiのループを抜ける

    # マージチェーン解決（a→b→cをa→cに）
    for i in range(n):
        root = i
        while merge_to[root] != root:
            root = merge_to[root]
        merge_to[i] = root

    # 新しいラベルとパレットを構築
    unique_targets = sorted(set(merge_to))
    remap = {old: new for new, old in enumerate(unique_targets)}

    new_centers_lab = centers_lab[unique_targets]
    new_labels = np.vectorize(lambda x: remap[merge_to[x]])(labels)

    # 新パレットRGB
    new_palette_bgr = np.array([
        cv2.cvtColor(c.reshape(1, 1, 3).astype(np.uint8), cv2.COLOR_LAB2BGR).flatten()
        for c in new_centers_lab
    ])
    new_palette_rgb = new_palette_bgr[:, ::-1]

    # 画像を再構築
    h, w = labels.shape
    new_lab = new_centers_lab[new_labels].reshape(h, w, 3)
    new_bgr = cv2.cvtColor(new_lab.astype(np.uint8), cv2.COLOR_LAB2BGR)

    merged_count = n - len(unique_targets)
    if merged_count > 0:
        print(f" → {n}→{len(unique_targets)}色マージ", end="", flush=True)

    return new_bgr, new_palette_rgb, new_labels, new_centers_lab


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 5: AA除去（パレットスナップ）
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def remove_aa(img_bgr: np.ndarray, palette_rgb: np.ndarray) -> np.ndarray:
    """
    全ピクセルをパレット内最近傍色に強制スナップ。
    リサイズやアウトライン合成で生じた中間色ピクセルを除去し、
    ドット絵らしい明確なピクセル境界を作る。
    """
    h, w = img_bgr.shape[:2]
    # BGR → RGB
    img_rgb = img_bgr[:, :, ::-1].reshape(-1, 3).astype(np.float32)
    palette = palette_rgb.astype(np.float32)

    # 各ピクセルの最近傍パレット色を見つける
    # ブロードキャスト: (N,1,3) - (1,P,3) → (N,P,3) → (N,P) → argmin
    dists = np.sum((img_rgb[:, None, :] - palette[None, :, :]) ** 2, axis=2)
    nearest = np.argmin(dists, axis=1)
    snapped_rgb = palette[nearest].astype(np.uint8).reshape(h, w, 3)

    return snapped_rgb[:, :, ::-1]  # RGB → BGR


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 6: 色相シフト後処理
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def apply_hue_shift(palette_rgb: np.ndarray) -> np.ndarray:
    """
    パレットの暗い色を青紫方向に、明るい色を暖色方向にシフト。
    ドッターが手動で行う「色相シフトしたシェーディング」を自動化。

    明度に応じてHue/Saturationを微調整:
    - 暗い色 (L < 40%): Hue を青方向に +8〜+12度、Sat微増
    - 明るい色 (L > 70%): Hue を黄方向に -5〜-8度、Sat微増
    - 中間色: 変更なし
    """
    shifted = palette_rgb.copy().astype(np.float32)
    n = len(shifted)

    for i in range(n):
        r, g, b = shifted[i]
        # HSV変換
        pixel = np.array([[[b, g, r]]], dtype=np.float32) / 255.0
        hsv = cv2.cvtColor(pixel, cv2.COLOR_BGR2HSV)[0, 0]
        h, s, v = hsv

        # 明度に応じたシフト量
        if v < 0.40:
            # 暗い色 → 青紫方向にシフト
            h = (h + 10) % 180  # OpenCVのHueは0-180
            s = min(1.0, s * 1.08)
        elif v > 0.70:
            # 明るい色 → 黄色/暖色方向にシフト
            h = (h - 6) % 180
            s = min(1.0, s * 1.05)
        # 中間色はそのまま

        hsv_shifted = np.array([[[h, s, v]]], dtype=np.float32)
        bgr = cv2.cvtColor(hsv_shifted, cv2.COLOR_HSV2BGR)[0, 0] * 255.0
        shifted[i] = [bgr[2], bgr[1], bgr[0]]  # BGR → RGB

    return np.clip(shifted, 0, 255).astype(np.uint8)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 7: Bayerオーダードディザリング
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Bayer行列定義
BAYER_2X2 = np.array([
    [0, 2],
    [3, 1],
], dtype=np.float32) / 4.0 - 0.5  # -0.5〜+0.5にスケール

BAYER_4X4 = np.array([
    [ 0,  8,  2, 10],
    [12,  4, 14,  6],
    [ 3, 11,  1,  9],
    [15,  7, 13,  5],
], dtype=np.float32) / 16.0 - 0.5


def bayer_dither(
    img_bgr: np.ndarray,
    palette_rgb: np.ndarray,
    matrix: np.ndarray,
    strength: float = 0.5,
) -> np.ndarray:
    """
    Bayerオーダードディザリング。
    ドッターが2色のドットを規則的に交互配置するパターンを自動化。
    strengthで閾値のオフセット量を制御（0=ディザなし、1=最大）。
    """
    h, w = img_bgr.shape[:2]
    mh, mw = matrix.shape

    # BGR → RGB
    img_rgb = img_bgr[:, :, ::-1].astype(np.float32)
    palette = palette_rgb.astype(np.float32)

    # Bayer行列をタイル状に画像全体に展開
    threshold_map = np.tile(matrix, (h // mh + 1, w // mw + 1))[:h, :w]

    # 閾値オフセットを各ピクセルに適用
    # strength * 閾値 * 色差の幅 を加算してから最近傍を取る
    offset = threshold_map * strength * 50  # LAB空間で50程度の幅

    # LAB空間で処理（知覚的に均等な色差）
    img_lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB).astype(np.float32)
    palette_lab = np.array([
        cv2.cvtColor(
            np.array([[[c[2], c[1], c[0]]]], dtype=np.uint8),
            cv2.COLOR_BGR2LAB
        ).flatten().astype(np.float32)
        for c in palette_rgb  # RGB入力 → BGR変換 → LAB
    ])

    result = np.zeros_like(img_rgb, dtype=np.uint8)
    pixels_lab = img_lab.reshape(-1, 3)
    offsets_flat = offset.reshape(-1)

    # L成分にオフセットを適用してから最近傍を見つける
    shifted_l = pixels_lab[:, 0] + offsets_flat
    shifted_pixels = pixels_lab.copy()
    shifted_pixels[:, 0] = np.clip(shifted_l, 0, 255)

    # バッチで最近傍パレット色を計算
    dists = np.sum(
        (shifted_pixels[:, None, :] - palette_lab[None, :, :]) ** 2,
        axis=2,
    )
    nearest = np.argmin(dists, axis=1)
    result_flat = palette_rgb[nearest].astype(np.uint8)

    return result_flat.reshape(h, w, 3)[:, :, ::-1]  # RGB → BGR


def floyd_steinberg_dither(
    img_bgr: np.ndarray,
    palette_rgb: np.ndarray,
    strength: float = 1.0,
) -> np.ndarray:
    """Floyd-Steinbergディザリング（誤差拡散）。写真的な減色向け。"""
    img_rgb = img_bgr[:, :, ::-1].astype(np.float32)
    h, w, _ = img_rgb.shape
    palette = palette_rgb.astype(np.float32)

    for y in range(h):
        for x in range(w):
            old = img_rgb[y, x].copy()
            dists = np.sum((palette - old) ** 2, axis=1)
            nearest_idx = np.argmin(dists)
            new = palette[nearest_idx]
            img_rgb[y, x] = new
            error = (old - new) * strength
            if x + 1 < w:
                img_rgb[y, x + 1] += error * 7 / 16
            if y + 1 < h:
                if x - 1 >= 0:
                    img_rgb[y + 1, x - 1] += error * 3 / 16
                img_rgb[y + 1, x] += error * 5 / 16
                if x + 1 < w:
                    img_rgb[y + 1, x + 1] += error * 1 / 16

    result = np.clip(img_rgb, 0, 255).astype(np.uint8)
    return result[:, :, ::-1]


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 8: アウトライン抽出 + セルアウト（縮小後処理）
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def extract_outline_post_resize(
    img_bgr: np.ndarray,
    strength: float = 0.7,
) -> np.ndarray:
    """
    縮小後のドット絵スケールでアウトラインを抽出。
    隣接ピクセル間の色差が大きい箇所をエッジとして検出。
    Cannyではなく、LAB色差ベースで1px精度の制御が可能。

    Returns: エッジマスク (h, w) bool配列。Trueがアウトラインピクセル
    """
    h, w = img_bgr.shape[:2]
    lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB).astype(np.float32)

    # 上下左右の隣接ピクセルとの色差を計算
    edge_mask = np.zeros((h, w), dtype=bool)

    # 色差の閾値（strengthに応じて調整）
    # strength 0.7 → 閾値25程度（LABのΔE）
    threshold = 45 - strength * 30  # strength 0→45, 0.5→30, 1.0→15

    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        # シフトしたLAB画像との差分
        shifted = np.roll(np.roll(lab, -dy, axis=0), -dx, axis=1)
        delta_e = np.sqrt(np.sum((lab - shifted) ** 2, axis=2))
        edge_mask |= delta_e > threshold

    # 画像の端はエッジとしない（rollの折り返しアーティファクト除去）
    edge_mask[0, :] = False
    edge_mask[-1, :] = False
    edge_mask[:, 0] = False
    edge_mask[:, -1] = False

    return edge_mask


def apply_selout(
    img_bgr: np.ndarray,
    edge_mask: np.ndarray,
    palette_rgb: np.ndarray,
    strength: float = 0.7,
) -> np.ndarray:
    """
    セルアウト（Selective Outlining）。
    アウトラインの各ピクセルを、隣接する内側ピクセルの色に基づいて
    パレット内の最も暗い近似色にスナップする。
    パレット外の色を生成しないため、色数が爆発しない。
    """
    h, w = img_bgr.shape[:2]
    result = img_bgr.copy()

    # パレットをLAB空間に変換（近傍検索用）
    palette_lab = np.array([
        cv2.cvtColor(
            np.array([[[c[2], c[1], c[0]]]], dtype=np.uint8),
            cv2.COLOR_BGR2LAB,
        ).flatten().astype(np.float32)
        for c in palette_rgb
    ])
    palette_bgr = palette_rgb[:, ::-1]  # RGB → BGR

    # パレットを明度順にソート（暗い順）
    lightness = palette_lab[:, 0]

    # 各エッジピクセルについて、隣接する非エッジピクセルの色を取得
    for y in range(h):
        for x in range(w):
            if not edge_mask[y, x]:
                continue

            # 隣接する非エッジピクセルの色を集める
            neighbors = []
            for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and not edge_mask[ny, nx]:
                    neighbors.append(img_bgr[ny, nx].astype(np.float32))

            if neighbors:
                # 隣接色の平均をLABに変換
                avg_bgr = np.mean(neighbors, axis=0).astype(np.uint8)
                avg_lab = cv2.cvtColor(
                    avg_bgr.reshape(1, 1, 3), cv2.COLOR_BGR2LAB,
                ).flatten().astype(np.float32)

                # 目標: 隣接色と色相が近く、明度が低いパレット色を選ぶ
                # 明度を下げた目標色を作成
                target_lab = avg_lab.copy()
                target_lab[0] = target_lab[0] * (0.35 + 0.15 * (1.0 - strength))

                # パレット内で最近傍を探す
                dists = np.sum((palette_lab - target_lab) ** 2, axis=1)
                nearest_idx = np.argmin(dists)
                result[y, x] = palette_bgr[nearest_idx]
            else:
                # 全隣接がエッジ → パレット内で最も暗い色
                darkest_idx = np.argmin(lightness)
                result[y, x] = palette_bgr[darkest_idx]

    return result


def apply_simple_outline(
    img_bgr: np.ndarray,
    edge_mask: np.ndarray,
    outline_color: tuple = (30, 20, 15),
    strength: float = 0.7,
) -> np.ndarray:
    """
    単色アウトライン（セルアウトなしの場合）。
    """
    result = img_bgr.copy()
    bgr_color = np.array([outline_color[2], outline_color[1], outline_color[0]], dtype=np.uint8)
    result[edge_mask] = bgr_color
    return result


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Step 0: 背景除去（クロマキー）
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def remove_background(img_cv: np.ndarray, fuzz: float = 40.0) -> tuple:
    """
    左上ピクセルの色を基準に背景を除去。
    HSV空間で色相・彩度・明度の距離がfuzz以内のピクセルを透過にする。
    緑系背景（nano banana出力）に対応。fuzzを大きくすると許容範囲が広がる。

    Returns: (BGR画像, アルファマスク uint8 0-255)
    """
    h, w = img_cv.shape[:2]
    # 左上ピクセルを背景色とする
    bg_color = img_cv[0, 0].copy()

    # HSV空間で比較（色相の循環を考慮）
    hsv = cv2.cvtColor(img_cv, cv2.COLOR_BGR2HSV).astype(np.float32)
    bg_hsv = cv2.cvtColor(bg_color.reshape(1, 1, 3), cv2.COLOR_BGR2HSV).astype(np.float32)[0, 0]

    # 色相の循環距離
    h_diff = np.abs(hsv[:, :, 0] - bg_hsv[0])
    h_diff = np.minimum(h_diff, 180 - h_diff)  # 循環
    s_diff = np.abs(hsv[:, :, 1] - bg_hsv[1])
    v_diff = np.abs(hsv[:, :, 2] - bg_hsv[2])

    # 総合距離
    dist = np.sqrt(h_diff ** 2 + (s_diff * 0.5) ** 2 + (v_diff * 0.5) ** 2)

    # 背景マスク
    alpha = np.where(dist < fuzz, 0, 255).astype(np.uint8)

    return img_cv, alpha


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# メインパイプライン
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def pixelize(
    input_path: str,
    output_path: str,
    width: int,
    height: int,
    colors: int,
    outline: bool = False,
    outline_strength: float = 0.7,
    selout: bool = True,
    dither=False,
    dither_strength: float = 0.5,
    bilateral: bool = True,
    merge_threshold: float = 8.0,
    hue_shift: bool = True,
    chromakey: bool = False,
    chromakey_fuzz: float = 40.0,
) -> None:
    # 読み込み（OpenCV BGR）
    img = cv2.imread(input_path, cv2.IMREAD_COLOR)
    if img is None:
        print(f"  ERROR: {input_path} を読み込めません")
        return

    print(f"    入力: {img.shape[1]}x{img.shape[0]}", end="", flush=True)

    # ── Step 0: 背景除去 ──
    alpha_mask = None
    if chromakey:
        img, alpha_mask = remove_background(img, chromakey_fuzz)
        print(" → chromakey", end="", flush=True)

    # ── Step 1: バイラテラルフィルタ ──
    if bilateral:
        img = bilateral_smooth(img)
        print(" → bilateral", end="", flush=True)

    # ── Step 2: Area samplingリサイズ ──
    img = resize_area(img, width, height)
    if alpha_mask is not None:
        alpha_mask = cv2.resize(alpha_mask, (width, height), interpolation=cv2.INTER_AREA)
        # リサイズ後のアルファを二値化（半透明は不要）
        _, alpha_mask = cv2.threshold(alpha_mask, 128, 255, cv2.THRESH_BINARY)
    print(f" → area {width}x{height}", end="", flush=True)

    # ── Step 3: カラー量子化（LAB空間） ──
    quantized, palette_rgb, labels, centers_lab = quantize_colors(
        img, colors, use_gmm=(colors <= 24), alpha_mask=alpha_mask,
    )
    print(f" → {len(palette_rgb)}色", end="", flush=True)

    # ── Step 4: 近似色マージ ──
    if merge_threshold > 0:
        quantized, palette_rgb, labels, centers_lab = merge_similar_colors(
            quantized, palette_rgb, centers_lab, labels, merge_threshold,
        )

    # ── Step 5: AA除去 ──
    quantized = remove_aa(quantized, palette_rgb)
    print(" → AA除去", end="", flush=True)

    # ── Step 6: 色相シフト ──
    if hue_shift:
        palette_rgb = apply_hue_shift(palette_rgb)
        # シフト後のパレットで画像を再マッピング
        quantized = remove_aa(quantized, palette_rgb)
        print(" → 色相シフト", end="", flush=True)

    # ── Step 7: ディザリング ──
    if dither == "bayer2":
        quantized = bayer_dither(quantized, palette_rgb, BAYER_2X2, dither_strength)
        print(f" → bayer2x2({dither_strength})", end="", flush=True)
    elif dither == "bayer4":
        quantized = bayer_dither(quantized, palette_rgb, BAYER_4X4, dither_strength)
        print(f" → bayer4x4({dither_strength})", end="", flush=True)
    elif dither == "floyd" or dither == "full":
        quantized = floyd_steinberg_dither(quantized, palette_rgb, dither_strength)
        print(f" → floyd({dither_strength})", end="", flush=True)

    # ── Step 8: アウトライン（縮小後処理） ──
    if outline and outline_strength > 0:
        edge_mask = extract_outline_post_resize(quantized, outline_strength)
        if selout:
            quantized = apply_selout(quantized, edge_mask, palette_rgb, outline_strength)
            print(" → selout", end="", flush=True)
        else:
            quantized = apply_simple_outline(quantized, edge_mask, strength=outline_strength)
            print(" → outline", end="", flush=True)

    # ── 保存 ──
    rgb = cv2.cvtColor(quantized, cv2.COLOR_BGR2RGB)

    if alpha_mask is not None:
        # RGBA保存（透過付き）
        rgba = np.dstack([rgb, alpha_mask])
        pil_img = Image.fromarray(rgba, "RGBA")
        pil_img.save(output_path, "PNG", optimize=True)
        # 不透明ピクセルのみで色数カウント
        opaque_pixels = rgb[alpha_mask > 0]
        actual_colors = len(set(map(tuple, opaque_pixels))) if len(opaque_pixels) > 0 else 0
    else:
        pil_img = Image.fromarray(rgb)
        pil_img = pil_img.convert("P", palette=Image.ADAPTIVE, colors=len(palette_rgb))
        pil_img.save(output_path, "PNG", optimize=True)
        rgb_img = Image.fromarray(rgb).convert("RGB")
        try:
            actual_colors = len(set(rgb_img.get_flattened_data()))
        except AttributeError:
            actual_colors = len(set(rgb_img.getdata()))

    alpha_info = " RGBA" if alpha_mask is not None else ""
    print(f" => {output_path} ({width}x{height}, {actual_colors}色{alpha_info})")


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
            preset.get("selout", False),
            preset["dither"], preset.get("dither_strength", 0.5),
            preset["bilateral"],
            preset.get("merge_threshold", 0),
            preset.get("hue_shift", False),
            preset.get("chromakey", False),
            preset.get("chromakey_fuzz", 40.0),
        )
        success += 1
    print(f"\n完了: {success}件変換, {skip}件スキップ")


def main():
    parser = argparse.ArgumentParser(description="高品質ドット絵変換スクリプト v3")
    parser.add_argument("input", nargs="?", help="入力画像パス")
    parser.add_argument("-o", "--output", help="出力画像パス")
    parser.add_argument("--width", type=int, default=64)
    parser.add_argument("--height", type=int, default=96)
    parser.add_argument("--colors", type=int, default=16)
    parser.add_argument("--outline", action="store_true", default=False)
    parser.add_argument("--outline-strength", type=float, default=0.7)
    parser.add_argument("--selout", action="store_true", default=False,
                        help="セルアウト（アウトライン色を隣接色の暗色版にする）")
    parser.add_argument("--dither", nargs="?", const="bayer2", default=False,
                        choices=["bayer2", "bayer4", "floyd", "light", "full"],
                        help="ディザリング方式")
    parser.add_argument("--dither-strength", type=float, default=0.5)
    parser.add_argument("--no-bilateral", action="store_true")
    parser.add_argument("--merge-threshold", type=float, default=8.0,
                        help="近似色マージのΔE閾値（0で無効）")
    parser.add_argument("--hue-shift", action="store_true", default=False,
                        help="影を青紫、ハイライトを暖色方向にシフト")
    parser.add_argument("--chromakey", action="store_true", default=False,
                        help="左上ピクセル色で背景除去（透過PNG出力）")
    parser.add_argument("--chromakey-fuzz", type=float, default=40.0,
                        help="クロマキーの許容範囲")
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
        args.selout = p.get("selout", False)
        args.dither = p["dither"]
        args.dither_strength = p.get("dither_strength", 0.5)
        args.merge_threshold = p.get("merge_threshold", 0)
        args.hue_shift = p.get("hue_shift", False)
        args.chromakey = p.get("chromakey", False)
        args.chromakey_fuzz = p.get("chromakey_fuzz", 40.0)
        bilateral = p["bilateral"]
    else:
        bilateral = not args.no_bilateral

    output = args.output or args.input.replace("-raw", "").replace(".png", "-pixel.png")

    pixelize(
        args.input, output,
        args.width, args.height, args.colors,
        args.outline, args.outline_strength,
        args.selout,
        args.dither, args.dither_strength,
        bilateral,
        args.merge_threshold, args.hue_shift,
        args.chromakey, args.chromakey_fuzz,
    )


if __name__ == "__main__":
    main()
