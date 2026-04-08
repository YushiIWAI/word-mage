# ノードR03「木陰」Outcome一覧

- **文構成**: [subj]が 木陰で 笑っている
- **可変スロット**: subj のみ
- **固定**: 目的語「木陰」(で格) + 述語「笑っている」+ 修飾語なし
- **ノードの文脈**: 大きな木の木陰。何かが笑っている。穏やかな笑いか不気味な笑いかは主語次第
- **nodeType**: rest
- **格歪みなし**（「笑っている」は無格自動詞、で格も許容）
- **全17パターン**: 17 subj
- **初期値**: 蝶（damage: 0）

---

### 子猫
- **ID**: r03_kitten
- **conditions**: { s1: 'subj_kitten' }
- **text**: 子猫が木陰で笑っている。口の形がそう見えるだけかもしれない。ごろごろと喉を鳴らしている。穏やかだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 蛇
- **ID**: r03_snake
- **conditions**: { s1: 'subj_snake' }
- **text**: 蛇が木陰で笑っている。ちろちろと舌を出す姿が笑みに見える。不気味だが、害はない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 竜
- **ID**: r03_dragon
- **conditions**: { s1: 'subj_dragon' }
- **text**: 竜が木陰で笑っている。木が小さく見えるほどの巨体。低い笑い声が地面を震わせる。機嫌がいいらしい。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '竜の吐息石', description: '笑う竜の息で温められた石。ずっとぬくい', sellPrice: 10 }

### 蝶（初期値）
- **ID**: r03_butterfly
- **conditions**: { s1: 'subj_butterfly' }
- **text**: 蝶が木陰で笑っている。羽の模様が笑顔に見える。木漏れ日の中をひらひらと舞っている。安らぐ光景だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 風
- **ID**: r03_wind
- **conditions**: { s1: 'subj_wind' }
- **text**: 風が木陰で笑っている。葉擦れの音がくすくす笑いに聞こえる。涼しい風が頬を撫でた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 炎
- **ID**: r03_flame
- **conditions**: { s1: 'subj_flame' }
- **text**: 炎が木陰で笑っている。木の根元に小さな焚き火。パチパチと爆ぜる音が笑い声のようだ。木は平気らしい。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 氷
- **ID**: r03_ice
- **conditions**: { s1: 'subj_ice' }
- **text**: 氷が木陰で笑っている。溶けていく氷がぽたぽたと音を立てている。しずくの連なりが笑い声に聞こえる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 影
- **ID**: r03_shadow
- **conditions**: { s1: 'subj_shadow' }
- **text**: 影が木陰で笑っている。木陰の中で別の影がくすくすと揺れている。木の影なのか、別の何かの影なのか。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 歌
- **ID**: r03_song
- **conditions**: { s1: 'subj_song' }
- **text**: 歌が木陰で笑っている。陽気な旋律が葉の間から降ってくる。聴いていると口元が緩む。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '木漏れ日の旋律', description: '木陰で聞こえた歌の断片。口ずさむと気分がいい', sellPrice: 8 }

### 沈黙
- **ID**: r03_silence
- **conditions**: { s1: 'subj_silence' }
- **text**: 沈黙が木陰で笑っている。音のない笑い。不気味だが、木陰の涼しさは本物だ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 騎士
- **ID**: r03_knight
- **conditions**: { s1: 'subj_knight' }
- **text**: 騎士が木陰で笑っている。鎧を脱いで木にもたれている。兜の下の顔は意外と若い。楽しそうだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 魔女
- **ID**: r03_witch
- **conditions**: { s1: 'subj_witch' }
- **text**: 魔女が木陰で笑っている。しわくちゃの顔で声を上げて笑っている。怖い顔だが、笑い方は温かい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 王
- **ID**: r03_king
- **conditions**: { s1: 'subj_king' }
- **text**: 王が木陰で笑っている。王冠を脇に置いて、ただの人間のように笑っている。側近の目がない場所では自由らしい。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '王の木の葉', description: '王が笑っていた木の葉。王冠の形をしている', sellPrice: 10 }

### 亡霊
- **ID**: r03_ghost
- **conditions**: { s1: 'subj_ghost' }
- **text**: 亡霊が木陰で笑っている。半透明の霊がくすくすと笑っている。生前の楽しい記憶を見ているのかもしれない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鏡
- **ID**: r03_mirror
- **conditions**: { s1: 'subj_mirror' }
- **text**: 鏡が木陰で笑っている。木にかけられた鏡に自分の顔が映っている。なぜか笑顔だ。本当は笑っていないのに。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 人形
- **ID**: r03_doll
- **conditions**: { s1: 'subj_doll' }
- **text**: 人形が木陰で笑っている。笑顔が縫い付けてある人形。木にもたれかかっている。誰かが忘れていったのだろう。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 雨
- **ID**: r03_rain
- **conditions**: { s1: 'subj_rain' }
- **text**: 雨が木陰で笑っている。木の葉に当たる雨粒がぱたぱたと音を立てている。木陰にいれば濡れない。雨は楽しそうだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| rewardItem数 | 3 |
| reward率 | 17.6% |
| damage平均 | 0.3 |
| quill平均 | 4.6 |
| damage=0の割合 | 70.6% |
| damage≥4の割合 | 0.0% |
| quill≥6の割合 | 5.9% |
