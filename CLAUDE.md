# Word Mage（言葉の魔法使い）

## コンセプト
Slay the Spire的ノード進行 × 自然言語書き換え × 手札管理パズルゲーム。
プレイヤーは「校正者（リヴァイザー）」として、文章のスロット（主語・述語・修飾語等）を手札の語と入れ替え、世界を書き換えながら進む。

## 技術スタック
- **フレームワーク**: Svelte 5 + TypeScript
- **ビルド**: Vite（base: '/word-mage/'）
- **データ**: 静的TypeScript（ノード定義、語彙、タグはnodes.ts内）
- **描画**: HTML/CSS（古い本の見開きUI）
- **デプロイ**: GitHub Pages（gh-pagesブランチ、`npx gh-pages -d dist`で更新）
- **将来**: Tauri でデスクトップ/Steam対応

## デプロイ
```bash
npm run build && npx gh-pages -d dist
```
URL: https://yushiiwai.github.io/word-mage/

## ディレクトリ構成
```
src/
  components/
    BookSpread.svelte   # 見開き本レイアウト
    SlotWord.svelte     # スロット（助詞自動生成、D&Dドロップ領域）
    HandCard.svelte     # 手札カード（ドラッグ可能）
    NodeMap.svelte      # 分岐マップ（ホバープレビュー付き）
  game/
    data/
      nodes.ts          # 全ノード定義（通常・バトル・ショップ・宝箱）、マップ、手札
    engine/
      types.ts          # 全型定義（SlotCategory、Outcome、BattleNodeDef等）
      evaluate.ts       # 組み合わせ定義ベース判定エンジン
      state.ts          # GameState操作（HP、ゴールド、手札、ショップ売買）
      battle.ts         # ターン制バトルエンジン
  App.svelte            # メイン画面（マップ/パズル/バトル/ショップ/宝箱/ゲームオーバー）
  app.css               # グローバルCSS（Noto Serif JP、古い本の色彩）
  main.ts               # エントリ（右クリック無効化）
```

## ゲーム設計

### ノードタイプ
| タイプ | 構造 | 説明 |
|--------|------|------|
| puzzle | 1文 | 環境/危機を書き換えて突破 |
| elite | 1文 | 高難度・高報酬 |
| rest | 1文 | 泉。書き換えなければHP回復、書き換えると面白いイベント |
| battle/boss | 2文・複数ターン | 敵行動文+プレイヤー行動文。敵HPあり |
| shop | 専用UI | 語カード購入・手札売却・アイテム売却 |
| treasure | 専用UI | カードプールからランダムで語カード獲得 |

### 1文構成ノード（puzzle/elite/rest）
- スロット最大4（読みやすさのため）
- 助詞はスロットカテゴリから自動生成（subject→が、object→を、object_ni→に等）
- 判定: Outcome配列を先頭から走査、最初にマッチした結果を適用
- マッチしない場合 → defaultOutcome（文の歪み: 高ダメージ、ゴールド0）
- 「書き換えなかった場合」も明示的にOutcomeとして定義

### 2文構成バトル（battle/boss）
- 敵行動文: 毎ターン新しい攻撃パターン（ローテーション）
- プレイヤー行動文: 毎ターンリセット。手札で強化して敵にダメージ
- APは両文で共有 → 攻防のAP配分がStSの攻撃/ブロック振り分けに相当
- 敵HPが0になれば勝利

### 判定方式: 組み合わせ定義ベース
- 各Outcomeに`conditions`（スロットID→必要タグのAND条件）
- 配置順: 複合条件（具体的）→ 単体条件 → 元テキスト条件
- defaultOutcome = 「文の歪み」（未定義の組み合わせ = 文法破綻とみなす）
- LLMで組み合わせパターンとテキストを大量生成 → 人間がキュレーション

### リソース
- **HP 20/20**: ダメージ/回復。0でゲームオーバー
- **ゴールド**: 戦闘報酬で獲得、ショップで消費
- **手札**: 初期5枚、上限7（永続カードで+2可）。同カテゴリのスロットにのみ入る
- **アイテム**: 換金アイテム（ショップで売れる）。うまい書き換えで入手
- **永続カード**: 手札枠を使ってパッシブ効果（AP+1、手札上限+2、毎ノード+2G）

### マップ
- 5層分岐マップ: puzzle → puzzle/treasure → puzzle/rest/elite → shop → boss
- ノードホバーで右ページにプレビュー（タイプ、名前、スロット構成、AP）
- ノードタイプ別アイコン・色

### 画面設計
- 全画面が「古い童話の本の見開き」
- 左ページ: イベント文 / バトル（敵文+自文）/ マップ / ショップ商品
- 右ページ: 結果テキスト / プレビュー / 売却UI
- 本の下（机上）: 手札エリア
- 上部: HPバー + ゴールド表示（バトル時はプレイヤーセクション内に移動）

### 質感・演出
- ブラウザ臭を排除（テキスト選択無効、右クリック無効）
- 紙のクリーム色 + セピアのグラデーション
- ドラッグ中: 全スロットが微かに光る（drag-ready）、ドロップ先は1.1倍拡大+金色光
- 助詞の自動表示で自然な日本語
- 文の歪み = defaultOutcomeで高ダメージ処理

### 世界観・トーン
- 「書かれた世界」：世界は一冊の書物として存在
- 文体: 乾いた寓話体、三人称現在形
- 物語性はフレーバー程度。「魔法＝言葉のハック」という哲学が通底
- 童話のような古い物語の質感

## 現在の語カード一覧

### 初期手札
小さな(修,[size:small,weaken]), 優しい(修,[gentle,weaken,positive]), 子猫(主,[animal,small,harmless]), 逃げていく(述,[flee,retreat,safe]), 静かに(副,[calm,weaken,peaceful])

### ショップ
燃え盛る(修,[fire,intense,threat:high]), 堅い(修,[hard,durable,defend]), 竜(主,[dragon,threat:high,fire]), 砕く(述,[destroy,combat,force]), 消え去る(述,[vanish,retreat,safe])

### 宝箱プール
鋭い(修,[sharp,weapon,threat:high]), 守る(述,[defend,guard,safe]), 風(主,[wind,nature,harmless]), 穏やかに(副,[calm,gentle,peaceful]), 壊れた(修,[broken,weaken,size:small]), 輝く(述,[light,magic,illuminate])

### 永続カード
魔法の羽根ペン(AP+1), 底なしの袋(手札+2), 幸運の硬貨(+2G/ノード)

## 開発方針
- Web簡易版を公開済み → 製品版はTauriでSteam販売
- LLMはコンテンツ生成パイプライン（Outcome大量生成）に活用、ランタイムでは使わない
- コード更新後のデプロイ: `npm run build && npx gh-pages -d dist`
