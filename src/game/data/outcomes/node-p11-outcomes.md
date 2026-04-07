# ノードP11「灯台の灯」Outcome一覧

- **文構成**: [mod*]炎が 灯台で [pred*]
- **可変スロット**: mod + pred
- **固定**: 主語「炎」(subj_flame) + 目的語「灯台」(で格)
- **ノードの文脈**: 海辺の灯台。炎が灯っているが様子がおかしい。修飾語で炎の性質を変え、述語で灯台の運命を変える
- **プール**: 序盤 | AP: 3
- **有効110パターン**: 11 mod × 10 pred（で格で有効な述語）
- **歪み77パターン**: 11 mod × 7 pred（で格+不適合述語）→ defaultOutcomeで一括処理

### で格で有効な述語（10種）
- pred_shine（輝く）
- pred_sing（歌っている）
- pred_dance（踊っている）
- pred_laugh（笑っている）
- pred_sleep（眠っている）
- pred_melt（溶けている）
- pred_flee（逃げていく）
- pred_gaze（見つめている）
- pred_wait（待っている）
- pred_whisper（囁いている）

### で格で歪みとなる述語（7種）
- pred_block（塞いでいる）:「灯台で塞いでいる」不自然 → 歪み
- pred_guard（守っている）:「灯台で守っている」不自然 → 歪み
- pred_chase（追いかけてくる）:「灯台で追いかけてくる」不自然 → 歪み
- pred_hide（隠している）:「灯台で隠している」不自然 → 歪み
- pred_crush（砕く）:「灯台で砕く」不自然 → 歪み
- pred_entangle（絡みついている）:「灯台で絡みついている」不自然 → 歪み
- pred_rain（降り注いでいる）:「灯台で降り注いでいる」不自然 → 歪み

---

# 有効パターン

---

## 輝く（pred_shine）

### 小さな × 輝く
- **ID**: p11_small_shine
- **conditions**: { s1: 'mod_small', s4: 'pred_shine' }
- **text**: 蝋燭ほどの小さな炎が灯台で輝いている。頼りないが、港の船がひとつ、方向を変えた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '小さな灯', description: '指先ほどの光。暗闇でだけ頼りになる', sellPrice: 8 }

### 優しい × 輝く
- **ID**: p11_gentle_shine
- **conditions**: { s1: 'mod_gentle', s4: 'pred_shine' }
- **text**: 優しい炎が灯台で輝いている。暖炉のような光が海面を柔らかく照らす。波の音が穏やかになった。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '凪の光', description: '持っているだけで波が静まるらしい', sellPrice: 10 }

### 燃え盛る × 輝く
- **ID**: p11_fire_shine
- **conditions**: { s1: 'mod_fire', s4: 'pred_shine' }
- **text**: 燃え盛る炎が灯台で輝いている。光が強すぎて船乗りの目を灼く。灯台が道標でなく脅威になっている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 輝く
- **ID**: p11_hard_shine
- **conditions**: { s1: 'mod_hard', s4: 'pred_shine' }
- **text**: 消えない炎が灯台で輝いている。風も雨も関係ない。何百年も、同じ明るさで灯り続けている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 鋭い × 輝く
- **ID**: p11_sharp_shine
- **conditions**: { s1: 'mod_sharp', s4: 'pred_shine' }
- **text**: 鋭い炎が灯台で輝いている。光の筋が海面を切り裂くように走る。照らされた魚が腹を見せて浮いた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 輝く
- **ID**: p11_broken_shine
- **conditions**: { s1: 'mod_broken', s4: 'pred_shine' }
- **text**: 色のおかしい炎が灯台で輝いている。緑と紫の光が交互に海を染める。船乗りは混乱するだろう。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '壊れた光', description: '緑と紫に明滅する光の欠片。温かくない', sellPrice: 7 }

### 屈強な × 輝く
- **ID**: p11_mighty_shine
- **conditions**: { s1: 'mod_mighty', s4: 'pred_shine' }
- **text**: 火柱のような炎が灯台で輝いている。灯台の天辺から空を衝く光の柱。水平線の果てまで照らしている。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '灯台の残照', description: '光の柱の欠片。暗い場所で空に向かって伸びる', sellPrice: 12 }

### 凍てついた × 輝く
- **ID**: p11_frozen_shine
- **conditions**: { s1: 'mod_frozen', s4: 'pred_shine' }
- **text**: 青白い炎が灯台で輝いている。霜を纏った冷たい光。灯台の窓ガラスが内側から凍っている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 輝く
- **ID**: p11_clear_shine
- **conditions**: { s1: 'mod_clear', s4: 'pred_shine' }
- **text**: ほぼ見えない炎が灯台で輝いている。空気の揺らぎだけが光を証明する。船は気づかないかもしれない。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 輝く
- **ID**: p11_cursed_shine
- **conditions**: { s1: 'mod_cursed', s4: 'pred_shine' }
- **text**: 呪われた炎が灯台で輝いている。光の中に燃えた町の幻が見える。この灯台に導かれた船は二度と戻らない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 輝く
- **ID**: p11_sleepy_shine
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_shine' }
- **text**: 今にも消えそうな炎が灯台で輝いている。赤い明滅が、灯台ごと眠りに落ちかけている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 歌っている（pred_sing）

### 小さな × 歌っている
- **ID**: p11_small_sing
- **conditions**: { s1: 'mod_small', s4: 'pred_sing' }
- **text**: 蝋燭の火ほどの小さな炎が灯台で歌っている。パチパチと弾ける音が、小さな旋律に聞こえる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌っている
- **ID**: p11_gentle_sing
- **conditions**: { s1: 'mod_gentle', s4: 'pred_sing' }
- **text**: 優しい炎が灯台で歌っている。揺れるたびに違う音が鳴る。海風が伴奏になっている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '炎の子守唄', description: '瓶に閉じ込めた炎の歌声。眠くなる', sellPrice: 10 }

### 燃え盛る × 歌っている
- **ID**: p11_fire_sing
- **conditions**: { s1: 'mod_fire', s4: 'pred_sing' }
- **text**: 燃え盛る炎が灯台で歌っている。轟音だ。歌というより咆哮に近い。窓ガラスが共振で割れた。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 歌っている
- **ID**: p11_hard_sing
- **conditions**: { s1: 'mod_hard', s4: 'pred_sing' }
- **text**: 消えない炎が灯台で歌っている。何百年も同じ歌を繰り返している。灯台守は皆この歌を知っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 鋭い × 歌っている
- **ID**: p11_sharp_sing
- **conditions**: { s1: 'mod_sharp', s4: 'pred_sing' }
- **text**: 鋭い炎が灯台で歌っている。高周波の金属音。耳の奥が痛い。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 歌っている
- **ID**: p11_broken_sing
- **conditions**: { s1: 'mod_broken', s4: 'pred_sing' }
- **text**: 色のおかしい炎が灯台で歌っている。音程が狂っている。聴いていると方角の感覚がなくなる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 屈強な × 歌っている
- **ID**: p11_mighty_sing
- **conditions**: { s1: 'mod_mighty', s4: 'pred_sing' }
- **text**: 火柱の炎が灯台で歌っている。地鳴りのような低音が海峡を渡り、対岸の灯台が呼応するように瞬いた。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '共鳴の火種', description: '別の炎に近づけると音が鳴る', sellPrice: 9 }

### 凍てついた × 歌っている
- **ID**: p11_frozen_sing
- **conditions**: { s1: 'mod_frozen', s4: 'pred_sing' }
- **text**: 青白い炎が灯台で歌っている。凍った旋律が空気中で結晶化して落ちる。足元にガラスのような音の破片が散った。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '音の結晶', description: '溶けると微かに歌声が聞こえる氷', sellPrice: 10 }

### 透き通った × 歌っている
- **ID**: p11_clear_sing
- **conditions**: { s1: 'mod_clear', s4: 'pred_sing' }
- **text**: ほぼ見えない炎が灯台で歌っている。声だけが聞こえる。穢れのない旋律が灯台を満たしている。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 歌っている
- **ID**: p11_cursed_sing
- **conditions**: { s1: 'mod_cursed', s4: 'pred_sing' }
- **text**: 呪われた炎が灯台で歌っている。一度聴くと頭から離れない歌だ。三日後もまだ口ずさんでいる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 歌っている
- **ID**: p11_sleepy_sing
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_sing' }
- **text**: 消えかけの炎が灯台で歌っている。歌うたびに小さくなる。自分への子守唄だ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

## 踊っている（pred_dance）

### 小さな × 踊っている
- **ID**: p11_small_dance
- **conditions**: { s1: 'mod_small', s4: 'pred_dance' }
- **text**: 小さな炎が灯台で踊っている。風が吹くたびに揺れる。消えそうで消えない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 踊っている
- **ID**: p11_gentle_dance
- **conditions**: { s1: 'mod_gentle', s4: 'pred_dance' }
- **text**: 優しい炎が灯台で踊っている。影が壁に映り、二人分の踊りになっている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 踊っている
- **ID**: p11_fire_dance
- **conditions**: { s1: 'mod_fire', s4: 'pred_dance' }
- **text**: 燃え盛る炎が灯台で踊っている。狂ったように旋回し、灯台の内壁を焦がしている。止まる気配がない。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 踊っている
- **ID**: p11_hard_dance
- **conditions**: { s1: 'mod_hard', s4: 'pred_dance' }
- **text**: 消えない炎が灯台で踊っている。同じ振り付けを延々と繰り返している。飽きることがない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 踊っている
- **ID**: p11_sharp_dance
- **conditions**: { s1: 'mod_sharp', s4: 'pred_dance' }
- **text**: 鋭い炎が灯台で踊っている。跳ねるたびに火花が散り、床に焦げ跡の模様を刻んでいく。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 踊っている
- **ID**: p11_broken_dance
- **conditions**: { s1: 'mod_broken', s4: 'pred_dance' }
- **text**: 色のおかしい炎が灯台で踊っている。緑、紫、また緑。拍子がずれている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 踊っている
- **ID**: p11_mighty_dance
- **conditions**: { s1: 'mod_mighty', s4: 'pred_dance' }
- **text**: 火柱の炎が灯台で踊っている。灯台が揺れている。踊りに合わせて海面が波立つ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 踊っている
- **ID**: p11_frozen_dance
- **conditions**: { s1: 'mod_frozen', s4: 'pred_dance' }
- **text**: 青白い炎が灯台で踊っている。踊るたびに足元から霜が広がる。美しいが、近寄れない。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '霜の舞', description: '炎が踊った跡に残った霜の結晶。模様が美しい', sellPrice: 8 }

### 透き通った × 踊っている
- **ID**: p11_clear_dance
- **conditions**: { s1: 'mod_clear', s4: 'pred_dance' }
- **text**: 見えない炎が灯台で踊っている。空気の歪みだけが踊る。壁に映る影だけが相手を知っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 踊っている
- **ID**: p11_cursed_dance
- **conditions**: { s1: 'mod_cursed', s4: 'pred_dance' }
- **text**: 呪われた炎が灯台で踊っている。見つめていると体が勝手に動き出す。足が止められない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 踊っている
- **ID**: p11_sleepy_dance
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_dance' }
- **text**: 消えかけの炎が灯台で踊っている。ゆらゆらと。踊りなのか、ただ倒れかけているだけなのか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 笑っている（pred_laugh）

### 小さな × 笑っている
- **ID**: p11_small_laugh
- **conditions**: { s1: 'mod_small', s4: 'pred_laugh' }
- **text**: 小さな炎が灯台で笑っている。パチッ、パチッと弾ける。薪が何かおかしかったらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 笑っている
- **ID**: p11_gentle_laugh
- **conditions**: { s1: 'mod_gentle', s4: 'pred_laugh' }
- **text**: 優しい炎が灯台で笑っている。揺れる光が暖かい。灯台守がいなくても、炎だけで十分もてなしてくれる。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 笑っている
- **ID**: p11_fire_laugh
- **conditions**: { s1: 'mod_fire', s4: 'pred_laugh' }
- **text**: 燃え盛る炎が灯台で笑っている。ゴウゴウと轟く笑い声。灯台そのものを燃やし尽くす気だ。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 笑っている
- **ID**: p11_hard_laugh
- **conditions**: { s1: 'mod_hard', s4: 'pred_laugh' }
- **text**: 消えない炎が灯台で笑っている。水をかけても笑い続ける。何が面白いのかは教えてくれない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 鋭い × 笑っている
- **ID**: p11_sharp_laugh
- **conditions**: { s1: 'mod_sharp', s4: 'pred_laugh' }
- **text**: 鋭い炎が灯台で笑っている。甲高い笑い声が、硝子を引っ掻くような音だ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 笑っている
- **ID**: p11_broken_laugh
- **conditions**: { s1: 'mod_broken', s4: 'pred_laugh' }
- **text**: 色のおかしい炎が灯台で笑っている。温かくない笑い。緑と紫の光が明滅するだけだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 笑っている
- **ID**: p11_mighty_laugh
- **conditions**: { s1: 'mod_mighty', s4: 'pred_laugh' }
- **text**: 火柱の炎が灯台で笑っている。灯台の石壁にひびが入った。笑い声に建物が耐えられない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 笑っている
- **ID**: p11_frozen_laugh
- **conditions**: { s1: 'mod_frozen', s4: 'pred_laugh' }
- **text**: 青白い炎が灯台で笑っている。吐息のように冷気が漏れ、笑うたびに窓が曇る。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 笑っている
- **ID**: p11_clear_laugh
- **conditions**: { s1: 'mod_clear', s4: 'pred_laugh' }
- **text**: 見えない炎が灯台で笑っている。声だけが螺旋階段を降りてくる。姿はない。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '笑い声の瓶', description: '蓋を開けると見えない何かが笑う', sellPrice: 9 }

### 呪われた × 笑っている
- **ID**: p11_cursed_laugh
- **conditions**: { s1: 'mod_cursed', s4: 'pred_laugh' }
- **text**: 呪われた炎が灯台で笑っている。燃えた町の幻が炎の中で笑っている。笑い声が耳にこびりつく。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 眠い × 笑っている
- **ID**: p11_sleepy_laugh
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_laugh' }
- **text**: 消えかけの炎が灯台で笑っている。クスクスと。もう殆ど聞こえない。寝言のような笑い。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 眠っている（pred_sleep）

### 小さな × 眠っている
- **ID**: p11_small_sleep
- **conditions**: { s1: 'mod_small', s4: 'pred_sleep' }
- **text**: 小さな炎が灯台で眠っている。熾火が赤く明滅している。灯台の光は消えている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 優しい × 眠っている
- **ID**: p11_gentle_sleep
- **conditions**: { s1: 'mod_gentle', s4: 'pred_sleep' }
- **text**: 優しい炎が灯台で眠っている。暖炉の残り火のような安らぎがある。灯台全体が温かい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 眠っている
- **ID**: p11_fire_sleep
- **conditions**: { s1: 'mod_fire', s4: 'pred_sleep' }
- **text**: 燃え盛る炎が灯台で眠っている。眠っていてもなお大火だ。寝返りのたびに柱が燃える。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 眠っている
- **ID**: p11_hard_sleep
- **conditions**: { s1: 'mod_hard', s4: 'pred_sleep' }
- **text**: 消えない炎が灯台で眠っている。眠っても灯り続けている。灯台守が不要な理由がわかった。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '不眠の火種', description: '眠ったまま燃え続ける小さな炭。消えない', sellPrice: 10 }

### 鋭い × 眠っている
- **ID**: p11_sharp_sleep
- **conditions**: { s1: 'mod_sharp', s4: 'pred_sleep' }
- **text**: 鋭い炎が灯台で眠っている。近づくと火花が飛ぶ。寝相が悪い。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 眠っている
- **ID**: p11_broken_sleep
- **conditions**: { s1: 'mod_broken', s4: 'pred_sleep' }
- **text**: 色のおかしい炎が灯台で眠っている。緑色の寝息が立ち上る。温かくはないが、妙に落ち着く。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 眠っている
- **ID**: p11_mighty_sleep
- **conditions**: { s1: 'mod_mighty', s4: 'pred_sleep' }
- **text**: 火柱の炎が灯台で眠っている。いびきのように熱風が吹き出す。目覚めたら灯台ごと吹き飛ぶだろう。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 眠っている
- **ID**: p11_frozen_sleep
- **conditions**: { s1: 'mod_frozen', s4: 'pred_sleep' }
- **text**: 青白い炎が灯台で眠っている。灯台の内部が霜で白い。鬼火が夜明けを待っている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 眠っている
- **ID**: p11_clear_sleep
- **conditions**: { s1: 'mod_clear', s4: 'pred_sleep' }
- **text**: 見えない炎が灯台で眠っている。空気の揺らぎが止まっている。灯台は暗いが、かすかに温かい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 眠っている
- **ID**: p11_cursed_sleep
- **conditions**: { s1: 'mod_cursed', s4: 'pred_sleep' }
- **text**: 呪われた炎が灯台で眠っている。炎の中に燃えた町の夢が見える。起こしてはいけない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 眠っている
- **ID**: p11_sleepy_sleep
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_sleep' }
- **text**: 眠い炎が灯台で眠っている。熾火が赤く明滅し、やがてそれも止まった。灯台が暗くなった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

---

## 溶けている（pred_melt）

### 小さな × 溶けている
- **ID**: p11_small_melt
- **conditions**: { s1: 'mod_small', s4: 'pred_melt' }
- **text**: 小さな炎が灯台で溶けている。蝋燭ごと溶けて、床に蝋の水溜まりを作っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 溶けている
- **ID**: p11_gentle_melt
- **conditions**: { s1: 'mod_gentle', s4: 'pred_melt' }
- **text**: 優しい炎が灯台で溶けている。光がゆっくりと流れ落ちて、灯台の壁を温かい色に染めている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 溶けている
- **ID**: p11_fire_melt
- **conditions**: { s1: 'mod_fire', s4: 'pred_melt' }
- **text**: 燃え盛る炎が灯台で溶けている。炎の熱で灯台のレンズが歪み始めた。光の焦点がずれていく。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 溶けている
- **ID**: p11_hard_melt
- **conditions**: { s1: 'mod_hard', s4: 'pred_melt' }
- **text**: 消えない炎が灯台で溶けている。溶けても消えない。床に広がった炎が新しい灯台になろうとしている。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '溶けない蝋', description: '液体なのに燃え続ける蝋。瓶で持ち運べる', sellPrice: 10 }

### 鋭い × 溶けている
- **ID**: p11_sharp_melt
- **conditions**: { s1: 'mod_sharp', s4: 'pred_melt' }
- **text**: 鋭い炎が灯台で溶けている。溶けた先から文字だけ残す。灯台の壁に焼き付いた光の文字列が読めない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 壊れた × 溶けている
- **ID**: p11_broken_melt
- **conditions**: { s1: 'mod_broken', s4: 'pred_melt' }
- **text**: 色のおかしい炎が灯台で溶けている。緑の液体が床を伝う。炎なのか毒なのかわからない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 溶けている
- **ID**: p11_mighty_melt
- **conditions**: { s1: 'mod_mighty', s4: 'pred_melt' }
- **text**: 火柱の炎が灯台で溶けている。灯台の石壁が飴のように垂れ始めた。灯台が形を失いつつある。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 溶けている
- **ID**: p11_frozen_melt
- **conditions**: { s1: 'mod_frozen', s4: 'pred_melt' }
- **text**: 青白い炎が灯台で溶けている。溶けた先が凍る。灯台の床が氷と炎のまだら模様になっている。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '炎氷の欠片', description: '半分が炎で半分が氷。持つと不思議な感触', sellPrice: 12 }

### 透き通った × 溶けている
- **ID**: p11_clear_melt
- **conditions**: { s1: 'mod_clear', s4: 'pred_melt' }
- **text**: 見えない炎が灯台で溶けている。灯台の空気が歪んで揺れている。溶けているのは炎か、それとも空間か。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 溶けている
- **ID**: p11_cursed_melt
- **conditions**: { s1: 'mod_cursed', s4: 'pred_melt' }
- **text**: 呪われた炎が灯台で溶けている。溶けたものが二度と冷めない。灯台の床が永遠に熱い。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 溶けている
- **ID**: p11_sleepy_melt
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_melt' }
- **text**: 消えかけの炎が灯台で溶けている。蝋のしずくが一滴ずつ落ちる音。催眠的だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 逃げていく（pred_flee）

### 小さな × 逃げていく
- **ID**: p11_small_flee
- **conditions**: { s1: 'mod_small', s4: 'pred_flee' }
- **text**: 小さな炎が灯台で逃げていく。風が吹くたびに階段を転げ落ちるように下へ下へ。追いかけても追いつかない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 逃げていく
- **ID**: p11_gentle_flee
- **conditions**: { s1: 'mod_gentle', s4: 'pred_flee' }
- **text**: 優しい炎が灯台で逃げていく。去り際に壁を温めていった。しばらく灯台は温かいだろう。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '温もりの残り火', description: '消えた炎の温かさだけが残っている', sellPrice: 8 }

### 燃え盛る × 逃げていく
- **ID**: p11_fire_flee
- **conditions**: { s1: 'mod_fire', s4: 'pred_flee' }
- **text**: 燃え盛る炎が灯台で逃げていく。逃げた跡が火の道になっている。灯台が燃え上がった。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 逃げていく
- **ID**: p11_hard_flee
- **conditions**: { s1: 'mod_hard', s4: 'pred_flee' }
- **text**: 消えない炎が灯台で逃げていく。消えないくせに逃げる。海岸沿いを走る灯りが遠ざかっていく。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 鋭い × 逃げていく
- **ID**: p11_sharp_flee
- **conditions**: { s1: 'mod_sharp', s4: 'pred_flee' }
- **text**: 鋭い炎が灯台で逃げていく。通り道の壁に切り傷が残る。炎が去った後、冷たい風が傷口から入ってくる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 逃げていく
- **ID**: p11_broken_flee
- **conditions**: { s1: 'mod_broken', s4: 'pred_flee' }
- **text**: 色のおかしい炎が灯台で逃げていく。緑の光が窓から飛び出し、海の上を走っていった。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '逃げた光の残像', description: '壁に焼きついた緑色の光の跡', sellPrice: 6 }

### 屈強な × 逃げていく
- **ID**: p11_mighty_flee
- **conditions**: { s1: 'mod_mighty', s4: 'pred_flee' }
- **text**: 火柱の炎が灯台で逃げていく。灯台の屋根を突き破って空に昇った。夜空に一瞬、二つ目の太陽が見えた。
- **damage**: 3
- **quill**: 7
- **reward**: { name: '焦げた灯台の石', description: '火柱が抜けた穴の縁の石。まだ熱い', sellPrice: 7 }

### 凍てついた × 逃げていく
- **ID**: p11_frozen_flee
- **conditions**: { s1: 'mod_frozen', s4: 'pred_flee' }
- **text**: 青白い炎が灯台で逃げていく。通った跡が凍りついている。階段が氷の滑り台になった。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 逃げていく
- **ID**: p11_clear_flee
- **conditions**: { s1: 'mod_clear', s4: 'pred_flee' }
- **text**: 見えない炎が灯台で逃げていく。逃げたことすら気づかなかった。灯台がいつの間にか暗い。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 呪われた × 逃げていく
- **ID**: p11_cursed_flee
- **conditions**: { s1: 'mod_cursed', s4: 'pred_flee' }
- **text**: 呪われた炎が灯台で逃げていく。逃げた先で別の何かを燃やすだろう。止める術はない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 逃げていく
- **ID**: p11_sleepy_flee
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_flee' }
- **text**: 消えかけの炎が灯台で逃げていく。のろのろと。逃げるというより、消える場所を探している。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

## 見つめている（pred_gaze）

### 小さな × 見つめている
- **ID**: p11_small_gaze
- **conditions**: { s1: 'mod_small', s4: 'pred_gaze' }
- **text**: 小さな炎が灯台でこちらを見つめている。蝋燭の芯の奥に、目のような光がある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 見つめている
- **ID**: p11_gentle_gaze
- **conditions**: { s1: 'mod_gentle', s4: 'pred_gaze' }
- **text**: 優しい炎が灯台でこちらを見つめている。暖炉のそばにいるような安心感がある。見守られている。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '灯台守の眼差し', description: '温かい光の粒。持っていると少し安心する', sellPrice: 10 }

### 燃え盛る × 見つめている
- **ID**: p11_fire_gaze
- **conditions**: { s1: 'mod_fire', s4: 'pred_gaze' }
- **text**: 燃え盛る炎が灯台でこちらを見つめている。大火の中心に瞳がある。睨まれている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 見つめている
- **ID**: p11_hard_gaze
- **conditions**: { s1: 'mod_hard', s4: 'pred_gaze' }
- **text**: 消えない炎が灯台でこちらを見つめている。何百年もの間、この灯台を通る者を見てきた目だ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 鋭い × 見つめている
- **ID**: p11_sharp_gaze
- **conditions**: { s1: 'mod_sharp', s4: 'pred_gaze' }
- **text**: 鋭い炎が灯台でこちらを見つめている。光の焦点が自分に合っている。肌がじりじりと焼ける。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 見つめている
- **ID**: p11_broken_gaze
- **conditions**: { s1: 'mod_broken', s4: 'pred_gaze' }
- **text**: 色のおかしい炎が灯台でこちらを見つめている。焦点が合っていない。何を見ているのかわからない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 見つめている
- **ID**: p11_mighty_gaze
- **conditions**: { s1: 'mod_mighty', s4: 'pred_gaze' }
- **text**: 火柱の炎が灯台でこちらを見つめている。天を衝く炎の中に巨大な瞳がある。見下ろされている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 見つめている
- **ID**: p11_frozen_gaze
- **conditions**: { s1: 'mod_frozen', s4: 'pred_gaze' }
- **text**: 青白い炎が灯台でこちらを見つめている。鬼火の目。見つめ返すと足元から冷気が昇ってくる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 見つめている
- **ID**: p11_clear_gaze
- **conditions**: { s1: 'mod_clear', s4: 'pred_gaze' }
- **text**: 見えない炎が灯台でこちらを見つめている。視線だけが確かにある。炎ではなく、空間そのものが見ている。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 見つめている
- **ID**: p11_cursed_gaze
- **conditions**: { s1: 'mod_cursed', s4: 'pred_gaze' }
- **text**: 呪われた炎が灯台でこちらを見つめている。炎の中に町の亡霊が見える。彼らもこちらを見ている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 見つめている
- **ID**: p11_sleepy_gaze
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_gaze' }
- **text**: 消えかけの炎が灯台でこちらを見つめている。瞼が落ちかけている目。見つめているというより、寝落ちの直前だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 待っている（pred_wait）

### 小さな × 待っている
- **ID**: p11_small_wait
- **conditions**: { s1: 'mod_small', s4: 'pred_wait' }
- **text**: 小さな炎が灯台で待っている。誰かが油を足しに来るのを。もう長いこと、誰も来ない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 待っている
- **ID**: p11_gentle_wait
- **conditions**: { s1: 'mod_gentle', s4: 'pred_wait' }
- **text**: 優しい炎が灯台で待っている。帰ってこない船をずっと照らしている。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 燃え盛る × 待っている
- **ID**: p11_fire_wait
- **conditions**: { s1: 'mod_fire', s4: 'pred_wait' }
- **text**: 燃え盛る炎が灯台で待っている。近づく船を待ち構えている。灯台が罠になっている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 待っている
- **ID**: p11_hard_wait
- **conditions**: { s1: 'mod_hard', s4: 'pred_wait' }
- **text**: 消えない炎が灯台で待っている。灯台守が去り、港が廃れても、まだ待っている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '不滅の灯心', description: '何百年も燃え続けた灯心の欠片', sellPrice: 12 }

### 鋭い × 待っている
- **ID**: p11_sharp_wait
- **conditions**: { s1: 'mod_sharp', s4: 'pred_wait' }
- **text**: 鋭い炎が灯台で待っている。獲物を狙う目で海を睨んでいる。船が来たら焼くつもりだ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 待っている
- **ID**: p11_broken_wait
- **conditions**: { s1: 'mod_broken', s4: 'pred_wait' }
- **text**: 色のおかしい炎が灯台で待っている。何を待っているのか、炎自身もわかっていない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 待っている
- **ID**: p11_mighty_wait
- **conditions**: { s1: 'mod_mighty', s4: 'pred_wait' }
- **text**: 火柱の炎が灯台で待っている。天まで届く光の柱が、全ての船を招いている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 待っている
- **ID**: p11_frozen_wait
- **conditions**: { s1: 'mod_frozen', s4: 'pred_wait' }
- **text**: 青白い炎が灯台で待っている。灯台に近づくほど気温が下がる。誘い込まれている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 待っている
- **ID**: p11_clear_wait
- **conditions**: { s1: 'mod_clear', s4: 'pred_wait' }
- **text**: 見えない炎が灯台で待っている。灯台は暗く見えるが、中に入ると確かに温かい。誰かがいる。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 待っている
- **ID**: p11_cursed_wait
- **conditions**: { s1: 'mod_cursed', s4: 'pred_wait' }
- **text**: 呪われた炎が灯台で待っている。この灯台に導かれた船は帰らない。炎はそれを知っていて待っている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 待っている
- **ID**: p11_sleepy_wait
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_wait' }
- **text**: 消えかけの炎が灯台で待っている。待っているが、もう殆ど起きていられない。最後の船を待っている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '最後の灯', description: '消える直前の炎の欠片。切実な光', sellPrice: 8 }

---

## 囁いている（pred_whisper）

### 小さな × 囁いている
- **ID**: p11_small_whisper
- **conditions**: { s1: 'mod_small', s4: 'pred_whisper' }
- **text**: 小さな炎が灯台で囁いている。パチパチという音の合間に、かすかな声がする。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 囁いている
- **ID**: p11_gentle_whisper
- **conditions**: { s1: 'mod_gentle', s4: 'pred_whisper' }
- **text**: 優しい炎が灯台で囁いている。「もう少し先だよ」と。道案内の灯台だ。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 囁いている
- **ID**: p11_fire_whisper
- **conditions**: { s1: 'mod_fire', s4: 'pred_whisper' }
- **text**: 燃え盛る炎が灯台で囁いている。囁きのはずが、轟音で何も聞き取れない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 囁いている
- **ID**: p11_hard_whisper
- **conditions**: { s1: 'mod_hard', s4: 'pred_whisper' }
- **text**: 消えない炎が灯台で囁いている。同じ言葉を何百年も繰り返している。灯台守だけが意味を知っていた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 鋭い × 囁いている
- **ID**: p11_sharp_whisper
- **conditions**: { s1: 'mod_sharp', s4: 'pred_whisper' }
- **text**: 鋭い炎が灯台で囁いている。耳朶を切るような声だ。内容は正しいが、聞くのが痛い。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 囁いている
- **ID**: p11_broken_whisper
- **conditions**: { s1: 'mod_broken', s4: 'pred_whisper' }
- **text**: 色のおかしい炎が灯台で囁いている。言葉が途切れ途切れで意味をなさない。でたらめな航路を教えている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 囁いている
- **ID**: p11_mighty_whisper
- **conditions**: { s1: 'mod_mighty', s4: 'pred_whisper' }
- **text**: 火柱の炎が灯台で囁いている。囁きが地鳴りのように海を渡る。遠くの漁師が耳を澄ませた。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 凍てついた × 囁いている
- **ID**: p11_frozen_whisper
- **conditions**: { s1: 'mod_frozen', s4: 'pred_whisper' }
- **text**: 青白い炎が灯台で囁いている。囁きが白い息のように凍って落ちる。言葉の形をした氷が足元に散らばる。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '凍った囁き', description: '溶かすと声が聞こえる氷の粒。何語かわからない', sellPrice: 11 }

### 透き通った × 囁いている
- **ID**: p11_clear_whisper
- **conditions**: { s1: 'mod_clear', s4: 'pred_whisper' }
- **text**: 見えない炎が灯台で囁いている。声だけが壁を通り抜けて海に出ていく。浄化の声だ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 囁いている
- **ID**: p11_cursed_whisper
- **conditions**: { s1: 'mod_cursed', s4: 'pred_whisper' }
- **text**: 呪われた炎が灯台で囁いている。「こちらへ」と。この声に従った船は岩礁に乗り上げる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 囁いている
- **ID**: p11_sleepy_whisper
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_whisper' }
- **text**: 消えかけの炎が灯台で囁いている。もう聞き取れないほど小さな声。子守唄かもしれない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

# 歪みパターン

---

## 塞いでいる — 歪み

（で格+他動詞のため歪み。「灯台で塞いでいる」は非文。defaultOutcomeで処理）
該当: 11 mod × pred_block = 11パターン

---

## 守っている — 歪み

（で格+他動詞のため歪み。「灯台で守っている」は非文。defaultOutcomeで処理）
該当: 11 mod × pred_guard = 11パターン

---

## 追いかけてくる — 歪み

（で格+他動詞のため歪み。「灯台で追いかけてくる」は非文。defaultOutcomeで処理）
該当: 11 mod × pred_chase = 11パターン

---

## 隠している — 歪み

（で格+他動詞のため歪み。「灯台で隠している」は非文。defaultOutcomeで処理）
該当: 11 mod × pred_hide = 11パターン

---

## 砕く — 歪み

（で格+他動詞のため歪み。「灯台で砕く」は非文。defaultOutcomeで処理）
該当: 11 mod × pred_crush = 11パターン

---

## 絡みついている — 歪み

（で格+自動詞だが「灯台で絡みついている」は不自然。defaultOutcomeで処理）
該当: 11 mod × pred_entangle = 11パターン

---

## 降り注いでいる — 歪み

（で格+自動詞だが「灯台で降り注いでいる」は不自然。defaultOutcomeで処理）
該当: 11 mod × pred_rain = 11パターン

---

- **defaultOutcome**:
  - text: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
  - damage: 4
  - quill: 0

---

# 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 110 |
| rewardItem数 | 19 |
| reward率 | 17.3% |
| damage平均 | 1.45 |
| quill平均 | 5.09 |
| damage=0の割合 | 35.5% (39/110) |
| damage≥4の割合 | 12.7% (14/110) |
| quill≥6の割合 | 34.5% (38/110) |
