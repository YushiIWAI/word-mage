# ドット絵素材制作ガイド

## 制作フロー

1. **nano banana pro** — 高解像度でイラスト下絵を生成（21:9 or 1:1）
   - 「pixel art」指示は入れない（ドット絵変換はローカルで行う）
   - キャラ: アニメ調セル画シェーディング（2-3段階の陰影、色相シフトした影）
   - 背景: フラット塗り・明快な形状・シンプルな構図
2. **pixelize.py** — ローカルでドット絵変換
   - バイラテラルフィルタ → アウトライン焼き込み → Lanczosリサイズ → LAB空間GMM量子化 → AA除去
   - `python3 pixelize.py --batch` で全素材一括変換
3. **Aseprite** — 微調整（透過確認、左右端接続修正、色調整、アニメフレーム作成）

## 下絵として最適な画像の条件

- **キャラ**: 2-3段階の明確なセル画シェーディング。影は青紫方向に色相シフト、ハイライトは暖色方向に。太い主線。緑背景(#00FF00)
- **背景**: フラット塗り + 明確な形状。グラデーション控えめ。単色の空領域（透過用）
- **共通**: 「pixel art」をプロンプトに入れない。偶数解像度推奨

## アートスタイル方針

参考タイトル: **Little Witch in the Woods**, **Eastward**, **Owlboy**, **Sea of Stars**

NES時代のフラットなドット絵ではなく、モダンなインディーゲームの高品質ドット絵を目指す:
- **色相シフトした影**（影=暗いだけではなく青紫寄りに）
- **暖色系ハイライト**（クリーム、薄い金）
- **太さにメリハリのあるアウトライン**（外側太く、内側細く）
- **限定パレット内での深み**（16色以内で立体感を出す）

## 配置先

全素材: `/src/assets/sprites/` に配置

## ゲーム画面の参考サイズ

- 本全体: 960×600px
- 左ページ（歩行シーン）: 約400×500px
- 歩行シーンの構成: 上部70%=背景+魔女、下部30%=進行バー
- 背景描画領域: 約400×350px

## 拡大方式

全素材 `image-rendering: pixelated` で2倍拡大。アンチエイリアスなし。

---

## 1. 魔女（主人公）

### ファイル

| ファイル名 | 用途 |
|-----------|------|
| `witch-idle.png` | 立ち止まり（ノード到着時） |
| `witch-walk-1.png` | 歩行フレーム1（右足前） |
| `witch-walk-2.png` | 歩行フレーム2（左足前） |

### サイズ

- ドット絵: **64×64px**
- ゲーム内表示: **128×128px**（2倍拡大、pixelated）

### デザイン（v7）

- 右向き（左→右に歩く）
- **3頭身**（スタイライズだがちびではない）
- 大きなとんがり帽子（深紫/インディゴ、月の飾り付き）+ 紺のローブ/クローク（広袖、膝下丈）+ 木の杖
- 短めのプラチナブロンドの髪
- 色味: 帽子=深紫、ローブ=紺/ダークネイビー、襟=淡黄、ブーツ=茶、髪=プラチナ
- **各パーツが異なる色相**（ドット絵で色面分離するため）
- **3-4段階のリッチなセルシェーディング**: 影は青紫方向にシフト、ハイライトは暖色ゴールデン方向

### nano banana proプロンプト

```
aspect_ratio: 1:1
```

**idle (v7):**
```
A young witch girl character for a 2D side-scrolling fairy tale game. IDLE POSE, facing right. Full body head to feet, single character, centered.

PROPORTIONS: 3-head tall. Stylized but not chibi.

CHARACTER: Large pointed witch hat (DEEP PURPLE/INDIGO, moon ornament), short messy PALE BLONDE/PLATINUM hair, dark purple/navy robe with wide sleeves, pale yellow collar accent, brown boots, wooden staff.

COLOR STRATEGY (each part = different hue): Hat=deep purple, Hair=pale gold, Robe=dark navy, Skin=warm peach, Boots=warm brown, Accent=pale yellow.

ART STYLE — RICHLY SHADED ANIME ILLUSTRATION (NOT pixel art): 3-4 shadow levels per surface, bold shapes. Will be downscaled to 64x64 pixels.

Background: solid bright green (#00FF00). No text, no UI.
```

**walk frame 1/2:** idle画像を参照画像として渡し、ポーズ変更のみ指示。足の開きを大きく（EXAGGERATED stride）。

### 変換パイプライン（pixelize.py v2）

1. バイラテラルフィルタ（エッジ保持平滑化）
2. Cannyエッジ検出 → アウトライン抽出（高解像度で）
3. Lanczos4で64×64にリサイズ
4. LAB色空間でGMM量子化（32色）
5. アウトライン合成（暗紫セピア）
6. インデックスカラーPNG保存

---

## 2. 背景レイヤー（5面 × 4レイヤー = 20ファイル）

### レイヤー構造（奥→手前）

| レイヤー | 速度 | 配置 | 内容 |
|---------|------|------|------|
| 層1: 空 | 0倍（静止） | 全体背景 | CSSグラデーションで処理。素材不要 |
| 層2: 遠景 | 0.2倍 | シーン上部 | 山並み、建物のシルエット |
| 層3: 中景 | 0.5倍 | シーン中央 | 木、岩、柱 |
| 層4: 道 | 1.0倍 | 道の位置 | 地面テクスチャ |
| 層5: 前景 | 1.2倍 | シーン最下部 | 草、花、瓦礫 |

### ファイル名

```
bg-{面名}-far.png    遠景（層2）
bg-{面名}-mid.png    中景（層3）
road-{面名}.png      道（層4）
bg-{面名}-near.png   前景（層5）
```

面名: `forest` / `valley` / `mountain` / `castle` / `tower`

### サイズ（ドット絵 → 2倍拡大で表示）

| レイヤー | ドット絵サイズ | 表示サイズ | 色数 |
|---------|-------------|----------|------|
| 遠景 | 512×96 | 1024×192 | 14 |
| 中景 | 400×96 | 800×192 | 14 |
| 道 | 400×16 | 800×32 | 8 |
| 前景 | 480×32 | 960×64 | 10 |

### サイズの考え方

- 遠景/前景: 画面幅の約2.5倍（スクロール分の余裕）
- 中景/道: 画面幅の約2倍
- **左右ループ可能**に作る（左端と右端がつながる）
- 全て `image-rendering: pixelated` で2倍拡大表示

### 背景プロンプト共通指示

```
aspect_ratio: 21:9
```

- `seamless tileable horizontal` で左右ループ指示
- `flat coloring with clean shapes, no gradients, no soft shading` でフラット塗り指示
- 面ごとのカラーパレット指示
- `solid single-color sky area at top` で透過処理用の単色領域指示
- `no characters, no text` で不要要素排除

### 変換パイプライン（pixelize.py v2）

1. バイラテラルフィルタ（エッジ保持平滑化）
2. Cannyエッジ検出 → アウトライン抽出（中景・前景のみ）
3. Lanczos4で目標サイズにリサイズ
4. LAB色空間でGMM量子化
5. アウトライン合成
6. インデックスカラーPNG保存

---

## 3. UI素材

| ファイル名 | ドット絵サイズ | 表示サイズ | 用途 |
|-----------|-------------|----------|------|
| `ui-icons.png` | 48×16px | 96×32px | HP/Quill/APアイコン一括 |

### nano banana proプロンプト

```
aspect_ratio: 1:1
```

```
Three small game UI icons arranged in a row on a solid green background (#00FF00).
Each icon is simple and bold:
1) A red heart (HP)
2) A golden quill/feather pen (currency)
3) A blue diamond or star (action points)
Flat coloring with clean dark outlines. Bold colors, simple shapes.
No gradients, no soft shading, no text, no borders.
```

---

## pixelize.py v2 プリセット一覧

| プリセット | サイズ | 色数 | アウトライン |
|-----------|-------|------|------------|
| witch | 64×64 | 32 | ○ (0.7) |
| bg-far | 512×96 | 14 | × |
| bg-mid | 400×96 | 14 | ○ (0.3) |
| road | 400×16 | 8 | × |
| bg-near | 480×32 | 10 | ○ (0.4) |
| icon | 48×16 | 10 | ○ (0.6) |

## Aseprite微調整チェックリスト

- [ ] 魔女: 背景の透過が綺麗か確認
- [ ] 魔女: 歩行フレーム間でサイズ・位置がブレていないか
- [ ] 背景: 左右端のタイル接続を確認（2枚並べてつなぎ目チェック）
- [ ] 背景: パレットがセピア紙面と馴染むか確認
- [ ] 全素材をpng保存（インデックスカラー推奨）

## 組み込み時

素材ができたら `src/assets/sprites/` に配置し、`StageView.svelte` の既存SVG/CSS表現を画像に差し替える。
`image-rendering: pixelated` で2倍拡大、ドット感を維持。
