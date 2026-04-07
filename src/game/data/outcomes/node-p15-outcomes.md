# ノードP15「砂丘の眠り」Outcome一覧

- **文構成**: [subj*]が 砂丘に 眠っている
- **可変スロット**: subj のみ（17主語 = 17パターン）
- **固定**: 目的語「砂丘」(に格) + 述語「眠っている」(pred_sleep)
- **修飾語**: なし（主語の素の性質で展開が決まる）
- **ノードの文脈**: 砂丘の下に何かが眠っている。起こすと何が起きるか——主語次第
- **プール**: 序盤 | AP: 2
- **格歪み**: なし（述語固定・に格で整合）

### rewardItems集計
有効17パターン中、3個（17.6%）にrewardItems付与

---

# 有効パターン

---

### 子猫
- **ID**: p15_kitten
- **conditions**: { s2: 'subj_kitten' }
- **text**: 子猫が砂丘に眠っている。丸くなって砂に埋もれかけている。鼻先の砂粒を払い、起こさずに通り過ぎた。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 蛇
- **ID**: p15_snake
- **conditions**: { s2: 'subj_snake' }
- **text**: 蛇が砂丘に眠っている。砂の下にとぐろの輪郭が透けている。踏まぬよう足元を選びながら、慎重に通り過ぎた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 竜
- **ID**: p15_dragon
- **conditions**: { s2: 'subj_dragon' }
- **text**: 竜が砂丘に眠っている。砂丘だと思っていたものが竜の背中だった。いびきで大地が揺れる中、息を殺して後退した。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '竜鱗の砂', description: '竜の鱗が砂に混じっている。微かに熱い', sellPrice: 15 }

### 蝶
- **ID**: p15_butterfly
- **conditions**: { s2: 'subj_butterfly' }
- **text**: 蝶が砂丘に眠っている。羽を閉じたまま、風に吹かれても動かない。花のない砂漠で、何の夢を見ているのか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 風
- **ID**: p15_wind
- **conditions**: { s2: 'subj_wind' }
- **text**: 風が砂丘に眠っている。空気が完全に凪いで、砂の一粒も動かない。不自然なほどの静寂が広がっている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 炎
- **ID**: p15_flame
- **conditions**: { s2: 'subj_flame' }
- **text**: 炎が砂丘に眠っている。砂の表面が微かに熱い。掘ると、硝子になった砂の層が現れた。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '硝子の砂', description: '炎で焼かれて硝子になった砂。透き通っている', sellPrice: 12 }

### 氷
- **ID**: p15_ice
- **conditions**: { s2: 'subj_ice' }
- **text**: 氷が砂丘に眠っている。灼熱の砂漠の地下に、溶けない氷の塊がある。掘り出した掌に冷気が染みる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 影
- **ID**: p15_shadow
- **conditions**: { s2: 'subj_shadow' }
- **text**: 影が砂丘に眠っている。日差しの真下なのに、砂丘の一角だけが暗い。足を踏み入れると、影が足首を掴む。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 歌
- **ID**: p15_song
- **conditions**: { s2: 'subj_song' }
- **text**: 歌が砂丘に眠っている。耳を砂に当てると、遠い旋律が聞こえる。砂の中に封じられた誰かの声だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 沈黙
- **ID**: p15_silence
- **conditions**: { s2: 'subj_silence' }
- **text**: 沈黙が砂丘に眠っている。この丘に近づくと足音が消える。声を出しても、砂が吸い込む。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 騎士
- **ID**: p15_knight
- **conditions**: { s2: 'subj_knight' }
- **text**: 騎士が砂丘に眠っている。剣を胸に抱いたまま、甲冑姿で横たわっている。砂が風紋を描いて鎧を覆い始めている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 魔女
- **ID**: p15_witch
- **conditions**: { s2: 'subj_witch' }
- **text**: 魔女が砂丘に眠っている。杖を抱いたまま横たわっている。寝息に合わせて、周囲の砂が微かに浮いては落ちる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 王
- **ID**: p15_king
- **conditions**: { s2: 'subj_king' }
- **text**: 王が砂丘に眠っている。玉座ごと砂に沈みかけている。傾いた王冠の向こうに、かつての王国はもうない。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '砂まみれの王冠', description: '砂に埋もれた王冠。もう誰も被らない', sellPrice: 18 }

### 亡霊
- **ID**: p15_ghost
- **conditions**: { s2: 'subj_ghost' }
- **text**: 亡霊が砂丘に眠っている。砂の下に透けた輪郭が見える。踏むと、足元から冷たい風が這い上がってきた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鏡
- **ID**: p15_mirror
- **conditions**: { s2: 'subj_mirror' }
- **text**: 鏡が砂丘に眠っている。砂を払うと、鏡面に空ではなく地底の闇が映っている。覗き込みすぎないほうがいい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 人形
- **ID**: p15_doll
- **conditions**: { s2: 'subj_doll' }
- **text**: 人形が砂丘に眠っている。横たわった人形の上を、砂が少しずつ流れている。掘り出すと、閉じていた目がゆっくり開いた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 雨
- **ID**: p15_rain
- **conditions**: { s2: 'subj_rain' }
- **text**: 雨が砂丘に眠っている。乾いた砂の奥に、古い雨の記憶が染みている。掌で掘ると、指の間から水が滲んだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

# 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| rewardItem数 | 3 |
| reward率 | 17.6% |
| damage平均 | 1.18 |
| quill平均 | 4.71 |
| damage=0の割合 | 29.4%（5/17） |
| damage≥4の割合 | 0%（0/17） |
| quill≥6の割合 | 17.6%（3/17） |
