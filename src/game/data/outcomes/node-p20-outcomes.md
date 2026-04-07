# ノードP20「城壁の番」Outcome一覧

- **文構成**: [subj*]が 城壁を 守っている
- **可変スロット**: subj のみ（17主語 = 17パターン）
- **固定**: 目的語「城壁」(を格) + 述語「守っている」(pred_guard)
- **修飾語**: なし（主語の素の性質で展開が決まる）
- **ノードの文脈**: 城壁に何かが陣取っている。主語の性質だけで展開が決まるシンプルなパズル
- **プール**: 中盤 | AP: 2
- **格歪み**: なし（述語固定・を格他動詞）

### rewardItems集計
有効17パターン中、3個（17.6%）にrewardItems付与

---

# 有効パターン

---

### 子猫
- **ID**: p20_kitten
- **conditions**: { s2: 'subj_kitten' }
- **text**: 子猫が城壁を守っている。小さな体で石壁にしがみつき、通る者を威嚇している。鳴き声が可愛らしすぎて誰も止まらない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 蛇
- **ID**: p20_snake
- **conditions**: { s2: 'subj_snake' }
- **text**: 蛇が城壁を守っている。石の隙間という隙間に蛇が棲みついている。手をかける場所がない。壁沿いに別の入口を探した。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 竜
- **ID**: p20_dragon
- **conditions**: { s2: 'subj_dragon' }
- **text**: 竜が城壁を守っている。翼を広げ、城壁そのものが竜の体に見える。これを突破する手段はない。引き返した。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 蝶
- **ID**: p20_butterfly
- **conditions**: { s2: 'subj_butterfly' }
- **text**: 蝶が城壁を守っている。蝶の群れが壁面を覆い、近づくと一斉に舞い上がって視界を塞ぐ。鱗粉が目に沁みる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 風
- **ID**: p20_wind
- **conditions**: { s2: 'subj_wind' }
- **text**: 風が城壁を守っている。壁に沿って烈風が吹き、近づく者を押し返す。体を低くして壁際を這い、なんとか通り抜けた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 炎
- **ID**: p20_flame
- **conditions**: { s2: 'subj_flame' }
- **text**: 炎が城壁を守っている。城壁の上に火の帳が揺れている。石が赤く焼けて、近づくだけで肌がひりつく。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 氷
- **ID**: p20_ice
- **conditions**: { s2: 'subj_ice' }
- **text**: 氷が城壁を守っている。壁面が分厚い氷に覆われ、手がかりを掴めばすぐ凍傷する。迂回路を探すしかない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 影
- **ID**: p20_shadow
- **conditions**: { s2: 'subj_shadow' }
- **text**: 影が城壁を守っている。壁に張りついた巨大な影が、通る者の影を飲み込もうとする。自分の影が引っ張られる。走って抜けた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 歌
- **ID**: p20_song
- **conditions**: { s2: 'subj_song' }
- **text**: 歌が城壁を守っている。壁から旋律が響き、聴く者の足を止める。耳を塞いで歩いたが、骨に振動が伝わる。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '城壁の旋律', description: '壁に刻まれた楽譜の拓本。読むと頭の中で鳴る', sellPrice: 10 }

### 沈黙
- **ID**: p20_silence
- **conditions**: { s2: 'subj_silence' }
- **text**: 沈黙が城壁を守っている。音が消える。足音も息遣いも吸い込まれる。圧倒的な無音の中、方向感覚が狂い始めた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 騎士
- **ID**: p20_knight
- **conditions**: { s2: 'subj_knight' }
- **text**: 騎士が城壁を守っている。正門に立ちはだかり、通行を許さない。剣を構える姿に隙がない。交渉の余地もない。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 魔女
- **ID**: p20_witch
- **conditions**: { s2: 'subj_witch' }
- **text**: 魔女が城壁を守っている。壁の上に座り、下を覗き込んでいる。近づくと呪文が一言。足が一歩だけ動かなくなった。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '魔女の城壁札', description: '壁に貼られていた護符。まだ微かに力がある', sellPrice: 8 }

### 王
- **ID**: p20_king
- **conditions**: { s2: 'subj_king' }
- **text**: 王が城壁を守っている。王自ら城壁に立つとは、よほどの事態だ。王冠を陽に光らせ、城門を背に微動だにしない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 亡霊
- **ID**: p20_ghost
- **conditions**: { s2: 'subj_ghost' }
- **text**: 亡霊が城壁を守っている。かつてここで死んだ兵士だろうか。壁を通り抜けようとすると、冷たい手が肩を掴む。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '番兵の記章', description: '亡霊が落とした錆びた記章。名前が読めない', sellPrice: 7 }

### 鏡
- **ID**: p20_mirror
- **conditions**: { s2: 'subj_mirror' }
- **text**: 鏡が城壁を守っている。壁面が鏡になっている。自分の姿が映り、向こう側が見えない。入口がどこかわからない。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 人形
- **ID**: p20_doll
- **conditions**: { s2: 'subj_doll' }
- **text**: 人形が城壁を守っている。等身大の人形が城門の前に並んでいる。風で首がゆっくり動く。目が合った。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 雨
- **ID**: p20_rain_subj
- **conditions**: { s2: 'subj_rain' }
- **text**: 雨が城壁を守っている。城壁の周囲だけ豪雨が降っている。一歩踏み込んだだけで全身がずぶ濡れになった。視界がきかない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| rewardItem数 | 3 |
| reward率 | 17.6% |
| damage平均 | 2.59 |
| quill平均 | 4.12 |
| damage=0の割合 | 5.9%（1/17） |
| damage≧4の割合 | 23.5%（4/17） |
| quill≧6の割合 | 11.8%（2/17） |
