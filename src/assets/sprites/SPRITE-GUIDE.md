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

- ドット絵: **32×48px**
- ゲーム内表示: **64×96px**（2倍拡大、pixelated）

### デザイン

- 右向き（左→右に歩く）
- **6頭身**（アニメ調、デフォルメしすぎない）
- 大きな三角帽子（リボンバンド付き、やや傾き） + 流れるローブ/ドレス + 木の杖（先端に小さな光る玉）
- 髪は帽子の下から長く流れる
- 色味: 帽子=バーガンディ/ワインレッド、ローブ=クリーム/ウォームベージュ、ブーツとベルト=茶革、髪=栗色+オーバーン系ハイライト
- **2-3段階のセルシェーディング**: 影は青紫方向にシフト、ハイライトは暖色ゴールデン方向

### nano banana proプロンプト

```
aspect_ratio: 1:1
```

**idle:**
```
A young witch girl character sprite for a 2D side-scrolling indie game, standing still, facing right. Full body visible from head to feet, single character only.

Character design:
- About 6-head proportion (anime-inspired, NOT super-deformed/chibi)
- Age around 12-14, small but not stubby
- Large pointed witch hat with a ribbon or band, slightly tilted
- Flowing robe/dress with visible fabric folds and movement
- Holding a wooden staff with a small glowing orb or crystal at the top
- Long hair flowing from under the hat
- Confident, curious expression

Art style — clean anime cel-shaded illustration (DO NOT render as pixel art):
- Rich cel-shading with 2-3 levels of shadow per color area
- Shadows shift toward cool purple/blue tones (NOT just darker versions of base color)
- Highlights shift toward warm golden/cream tones
- Strong dark outlines with varied line weight (thicker on outer silhouette, thinner on inner details)
- Smooth clean lines, NOT pixelated or blocky — pixel conversion is done separately
- Warm color palette: burgundy/wine red hat, cream/warm beige robe, brown leather boots and belt
- Hair in rich chestnut brown with auburn highlights
- Staff in warm wood tones with a soft amber glow at the tip

Lighting: soft directional light from upper-left, creating clear shadow on the right side of the body and under the hat brim.

Background: solid bright green (#00FF00) for easy chroma key removal.
No text, no UI elements, no other characters or objects.
```

**walk frame 1/2:** idle画像を参照画像として渡し、ポーズ変更のみ指示

### 変換パイプライン（pixelize.py v3）

1. バイラテラルフィルタ（エッジ保持平滑化）
2. Area samplingで32×48にリサイズ（大幅縮小に最適）
3. LAB色空間でGMM量子化（16色）
4. 近似色マージ（ΔE < 8.0 の色を統合、色面フラット化）
5. AA除去（全ピクセルをパレット最近傍にスナップ）
6. 色相シフト（影→青紫、ハイライト→暖色）
7. Bayer 2×2ディザリング（strength 0.3）
8. LAB色差ベースでアウトライン検出（縮小後1pxスケール）
9. セルアウト（アウトライン色をパレット内の暗色近似色に）
10. インデックスカラーPNG保存
11. **Asepriteで顔・目を手描き修正**（自動化不可。必須工程）

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

### 変換パイプライン（pixelize.py v3）

1. バイラテラルフィルタ（エッジ保持平滑化）
2. Area samplingで目標サイズにリサイズ
3. LAB色空間でGMM量子化
4. 近似色マージ（ΔE閾値で統合、色面フラット化）
5. AA除去（パレットスナップ）
6. 色相シフト（影→青紫、ハイライト→暖色）
7. Bayerディザリング（遠景: 4×4、中景/道/前景: 2×2）
8. アウトライン検出+セルアウト（中景・前景のみ）
9. インデックスカラーPNG保存

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

## pixelize.py v3 プリセット一覧

| プリセット | サイズ | 色数 | アウトライン | セルアウト | ディザ | 色マージΔE | 色相シフト |
|-----------|-------|------|------------|----------|--------|----------|----------|
| witch | 32×48 | 16 | ○ (0.7) | ○ | bayer2 (0.3) | 8.0 | ○ |
| bg-far | 512×96 | 14 | × | × | bayer4 (0.4) | 8.0 | ○ |
| bg-mid | 400×96 | 14 | ○ (0.5) | ○ | bayer2 (0.35) | 6.0 | ○ |
| road | 400×16 | 8 | × | × | bayer2 (0.3) | 10.0 | × |
| bg-near | 480×32 | 10 | ○ (0.5) | ○ | bayer2 (0.35) | 6.0 | ○ |
| icon | 48×16 | 10 | ○ (0.6) | ○ | × | 6.0 | × |

### v2→v3の主な改善
- **Lanczos4 → Area sampling**: 大幅縮小でのリンギング除去、情報欠落軽減
- **アウトライン: 縮小前→縮小後**: 1pxスケールで制御、太さの不均一解消
- **セルアウト追加**: 固定色アウトライン → 隣接色の暗色版で自然な馴染み
- **Bayerディザ追加**: 写真的グラデ → ドット絵的な規則的パターン遷移
- **AA除去追加**: 中間色ピクセルをパレットにスナップ、ピクセル境界の明確化
- **近似色マージ追加**: 色面のフラット化、ドット絵らしい明確な色分け
- **色相シフト追加**: 影→青紫、ハイライト→暖色のドット絵的シェーディング

## Aseprite手動修正チェックリスト

### 魔女（必須・自動化不可）
- [ ] 顔・目の再描画（目は縦2-3px×横2-3px、白目+黒瞳+1pxハイライト）
- [ ] アウトライン統一（全周1px、内部境界は省略またはセルアウト色）
- [ ] 歩行フレーム間でサイズ・位置がブレていないか
- [ ] 歩行中は顔固定（体のみ1px上下）
- [ ] 背景の透過が綺麗か確認

### 背景
- [ ] 左右端のタイル接続を確認（2枚並べてつなぎ目チェック）
- [ ] パレットがセピア紙面と馴染むか確認
- [ ] Bayerディザのパターンが不自然な箇所がないか（空の広い面積等）

### 共通
- [ ] 実寸（100%）表示で確認。拡大時によく見えても実寸でノイズに見えないか
- [ ] 全素材をpng保存（インデックスカラー推奨）

## 組み込み時

素材ができたら `src/assets/sprites/` に配置し、`StageView.svelte` の既存SVG/CSS表現を画像に差し替える。
`image-rendering: pixelated` で2倍拡大、ドット感を維持。
