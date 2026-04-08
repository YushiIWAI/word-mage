# ノードR01「小さな泉」Outcome一覧

- **文構成**: [mod][subj]が 泉に 浮かんでいる
- **可変スロット**: mod + subj
- **固定**: 目的語「泉」(に格) + 述語「浮かんでいる」
- **ノードの文脈**: 澄んだ泉。水面に何かが浮かんでいる。穏やかな休息地点
- **nodeType**: rest
- **格歪みなし**（「浮かんでいる」はに格自動詞）
- **全187パターン**: 11 mod × 17 subj
- **初期値**: 透き通った蝶（damage: -1、HP回復）

---

## 子猫

### 小さな × 子猫
- **ID**: r01_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 小さな子猫が泉に浮かんでいる。水面に仰向けで漂っている。溺れているわけではなく、気持ちよさそうだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 子猫
- **ID**: r01_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が泉に浮かんでいる。近づくと水辺に上がり、濡れた頭を膝に擦りつけてきた。服が湿る。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: r01_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 燃え盛る子猫が泉に浮かんでいる。水面が沸騰している。泉が温泉になっている。猫は平然としている。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '温泉の結晶', description: '沸いた泉の底にあった石。ほんのり温かい', sellPrice: 8 }

### 堅い × 子猫
- **ID**: r01_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 堅い子猫が泉に浮かんでいる。陶器の招き猫だ。水面に浮いているのが不思議だが、目だけが動いている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 子猫
- **ID**: r01_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 鋭い子猫が泉に浮かんでいる。硝子のような爪で水面を引っ掻いている。泉に細い傷がつく。水は傷から漏れていく。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 子猫
- **ID**: r01_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: 壊れた子猫が泉に浮かんでいる。ぬいぐるみだ。綿が水を吸って重くなっている。引き上げて絞ってやった。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 屈強な × 子猫
- **ID**: r01_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 屈強な子猫が泉に浮かんでいる。虎の体格の子猫が仰向けで水浴びしている。水しぶきが顔にかかる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 子猫
- **ID**: r01_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 凍てついた子猫が泉に浮かんでいる。氷の猫。泉の水面が猫の周りから凍っていく。水が飲めない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 子猫
- **ID**: r01_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 透き通った子猫が泉に浮かんでいる。硝子の猫。泉の水と見分けがつかない。心臓だけがかすかに脈打っている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '水底の鼓動', description: '硝子猫の心音を閉じ込めた水滴。耳に当てると聞こえる', sellPrice: 10 }

### 呪われた × 子猫
- **ID**: r01_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が泉に浮かんでいる。拾い上げると降ろせない。泉で洗って戻しても、気づけば腕の中にいる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 眠い × 子猫
- **ID**: r01_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が泉に浮かんでいる。蓮の葉の上で丸くなっている。水面の揺れが心地よいらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: r01_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 小さな蛇が泉に浮かんでいる。指ほどの蛇が水面を滑っている。波紋も立たない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 蛇
- **ID**: r01_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 優しい蛇が泉に浮かんでいる。腕に巻きつくと温かい。泉で冷えた体を温めてくれる。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 蛇
- **ID**: r01_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 燃え盛る蛇が泉に浮かんでいる。泉が沸き立ち、蒸気が上がっている。水に手を入れたら火傷した。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 蛇
- **ID**: r01_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 堅い蛇が泉に浮かんでいる。鉄の鱗が水面に浮くわけがない。だが浮いている。沈む気配もない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 蛇
- **ID**: r01_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 鋭い蛇が泉に浮かんでいる。牙から毒が垂れ、泉の水が黒ずんでいく。飲めそうにない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 蛇
- **ID**: r01_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 壊れた蛇が泉に浮かんでいる。脱皮の途中で力尽きたらしい。古い皮が水面に広がっている。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '蛇の抜け殻', description: '水に浸った脱皮殻。薄く透けている', sellPrice: 5 }

### 屈強な × 蛇
- **ID**: r01_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 屈強な蛇が泉に浮かんでいる。大蛇がとぐろを巻いて泉を占拠している。近づけない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 蛇
- **ID**: r01_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 凍てついた蛇が泉に浮かんでいる。氷の螺旋が水面で回っている。泉の水が冷たくなり、手が痺れた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 蛇
- **ID**: r01_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が泉に浮かんでいる。水と同化して見えない。骨格だけがかすかに光っている。美しい。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '透明蛇の脊椎', description: '水に溶けかけた骨。光を通すと虹が見える', sellPrice: 10 }

### 呪われた × 蛇
- **ID**: r01_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が泉に浮かんでいる。脱皮を繰り返すたびに大きくなっている。泉が狭くなっていく。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: r01_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が泉に浮かんでいる。とぐろを巻いて水面に漂っている。踏まなければ無害だ。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: r01_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 小さな竜が泉に浮かんでいる。手のひらサイズの竜が羽を広げて浮いている。水浴びが好きらしい。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '竜の水しぶき', description: '小さな竜が浴びた聖水。一滴だけ瓶に入っている', sellPrice: 10 }

### 優しい × 竜
- **ID**: r01_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 優しい竜が泉に浮かんでいる。穏やかな老竜が水面に顎を載せている。近づいても目を細めるだけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 竜
- **ID**: r01_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 燃え盛る竜が泉に浮かんでいる。泉が丸ごと湯気に包まれた。視界がゼロ。熱風で肌がひりつく。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 竜
- **ID**: r01_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 堅い竜が泉に浮かんでいる。城壁のような鱗。泉の底に沈んでいるのかと思ったが、浮かんでいる。竜も不思議そうだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 竜
- **ID**: r01_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 鋭い竜が泉に浮かんでいる。金色の目がこちらを射る。泉の水を飲もうとしたが、竜が先に飲み干した。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 竜
- **ID**: r01_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 壊れた竜が泉に浮かんでいる。折れた翼が水面に広がっている。泉の水で傷を癒しているらしい。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '竜の剥がれ鱗', description: '泉で洗われて綺麗になった鱗。虹色が残っている', sellPrice: 8 }

### 屈強な × 竜
- **ID**: r01_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 屈強な竜が泉に浮かんでいる。翼を広げると泉が影に沈む。泉が竜の水たまりに見える。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 竜
- **ID**: r01_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 凍てついた竜が泉に浮かんでいる。白い竜の息が泉を凍らせていく。水面が鏡になった。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 竜
- **ID**: r01_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 透き通った竜が泉に浮かんでいる。水晶の竜が泉と一体化している。竜なのか泉なのか判然としない。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '泉の竜鱗', description: '水晶の欠片。角度によって竜の形が見える', sellPrice: 12 }

### 呪われた × 竜
- **ID**: r01_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が泉に浮かんでいる。目に理性がない。泉の水が黒く濁り始めている。飲むべきではない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 眠い × 竜
- **ID**: r01_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 眠い竜が泉に浮かんでいる。いびきのたびに波紋が広がる。起こさなければ安全だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: r01_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 小さな蝶が泉に浮かんでいる。花びらかと思った。羽ばたきに音がない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: r01_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が泉に浮かんでいる。指を差し出すと止まった。羽の模様が笑顔に見える。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 蝶
- **ID**: r01_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 燃え盛る蝶が泉に浮かんでいる。炎の羽が水面に触れるたび、蒸気が上がる。泉がぬるくなっている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 蝶
- **ID**: r01_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 堅い蝶が泉に浮かんでいる。金属の羽。水面に浮いたまま沈まない。風が吹くと金属音が鳴る。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 蝶
- **ID**: r01_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 鋭い蝶が泉に浮かんでいる。羽の縁が刃。泉に落ちた葉を切り刻んでいる。水に手を入れづらい。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 蝶
- **ID**: r01_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 壊れた蝶が泉に浮かんでいる。片羽がちぎれて、水面で螺旋を描いている。泉が最後の着地点だ。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '蝶の片羽', description: 'ちぎれた羽。水を含んで重い', sellPrice: 5 }

### 屈強な × 蝶
- **ID**: r01_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 屈強な蝶が泉に浮かんでいる。羽ばたきで泉が波立つ。蝶のくせに風圧がある。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 蝶
- **ID**: r01_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 凍てついた蝶が泉に浮かんでいる。霜の結晶の羽。泉の水面が薄く凍り始めている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 蝶（初期値）
- **ID**: r01_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透き通った蝶が泉に浮かんでいる。羽が水と溶け合い、光だけが揺れている。泉の水を掬って飲んだ。澄んでいて冷たい。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 呪われた × 蝶
- **ID**: r01_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が泉に浮かんでいる。追いかけたくなる。足が勝手に泉へ向かう。水に入る前に我慢した。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 蝶
- **ID**: r01_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が泉に浮かんでいる。羽を閉じて水面に漂っている。こちらも眠くなってきた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: r01_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 小さな風が泉に浮かんでいる。水面にかすかな波紋。そよ風が泉の上で遊んでいる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 風
- **ID**: r01_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 優しい風が泉に浮かんでいる。温かい追い風が水面を撫でている。花の匂いがする。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 風
- **ID**: r01_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 燃え盛る風が泉に浮かんでいる。熱風が水面から湯気を立てている。泉の水が温まって飲めたものではない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 堅い × 風
- **ID**: r01_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 堅い風が泉に浮かんでいる。同じ方向に吹き続ける風が水面を押している。泉が一方向に偏っている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 風
- **ID**: r01_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 鋭い風が泉に浮かんでいる。水面を切り裂くような風。泉の水が細い筋になって宙に舞っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 風
- **ID**: r01_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 壊れた風が泉に浮かんでいる。方向の定まらない乱気流。水面があちこちで渦を巻いている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 風
- **ID**: r01_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 屈強な風が泉に浮かんでいる。泉の水が巻き上げられている。近づくと体ごと持っていかれそうだ。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 風
- **ID**: r01_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍てついた風が泉に浮かんでいる。吹雪を伴う冷気が泉の表面を凍らせた。氷を割って水を飲んだ。歯が痛い。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 風
- **ID**: r01_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 透き通った風が泉に浮かんでいる。空気が澄み渡り、泉の底まで見通せる。深呼吸すると頭が冴えた。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '澄風の水', description: '透き通った風に触れた泉の水。瓶に入れると光る', sellPrice: 10 }

### 呪われた × 風
- **ID**: r01_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が泉に浮かんでいる。風に吹かれると帰り道を忘れそうになる。泉から離れられない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 風
- **ID**: r01_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 眠い風が泉に浮かんでいる。生温い微風が水面を撫でている。まぶたが重い。泉のほとりで少し眠った。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 炎

### 小さな × 炎
- **ID**: r01_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 小さな炎が泉に浮かんでいる。蝋燭ほどの火が水面で揺れている。消えそうで消えない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: r01_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 優しい炎が泉に浮かんでいる。暖炉のような温もり。泉のほとりが心地よい。少し休んでいく。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 炎
- **ID**: r01_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 燃え盛る炎が泉に浮かんでいる。水面が炎に覆われている。泉が火の池になった。近づけない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 炎
- **ID**: r01_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 堅い炎が泉に浮かんでいる。水をかけても消えない。風を当てても揺らがない。泉と炎が共存している。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 炎
- **ID**: r01_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が泉に浮かんでいる。一点集中の火。水面に触れた葉が一瞬で灰になった。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 炎
- **ID**: r01_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 壊れた炎が泉に浮かんでいる。緑や紫に明滅する炎。温かくない。泉の水が変な色になっている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 炎
- **ID**: r01_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 屈強な炎が泉に浮かんでいる。火柱が泉から天を衝く。泉の水が蒸発していく。休息どころではない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 凍てついた × 炎
- **ID**: r01_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 凍てついた炎が泉に浮かんでいる。青白い炎が霜を纏っている。泉の水は冷たいが、不思議と身体が温まる。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '凍炎の雫', description: '冷たくて温かい水滴。瓶の中で青白く光っている', sellPrice: 12 }

### 透き通った × 炎
- **ID**: r01_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 透き通った炎が泉に浮かんでいる。見えない炎。空気の揺らぎだけがわかる。泉の水がほんのり温かい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 炎
- **ID**: r01_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が泉に浮かんでいる。泉に映る景色が燃えている。幻だが、目を逸らせない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 炎
- **ID**: r01_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 眠い炎が泉に浮かんでいる。熾火が水面で赤く明滅している。催眠的な揺れ。泉のほとりでうとうとした。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: r01_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷が泉に浮かんでいる。掌に収まる氷の欠片。泉の水で溶けかけている。飲むとひんやりする。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 氷
- **ID**: r01_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 優しい氷が泉に浮かんでいる。額に当てると熱が引く。泉の水も程よく冷えて美味しい。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 氷
- **ID**: r01_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 燃え盛る氷が泉に浮かんでいる。炎を放つ氷。泉の水が沸騰と凍結を繰り返している。手を入れるのは危険だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 氷
- **ID**: r01_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 堅い氷が泉に浮かんでいる。万年氷だ。泉の中央を占拠して水が減っている。水を掬うのに苦労した。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 氷
- **ID**: r01_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 鋭い氷が泉に浮かんでいる。氷柱が水面から突き出している。手を切りそうだ。慎重に水を汲んだ。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 壊れた × 氷
- **ID**: r01_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: 壊れた氷が泉に浮かんでいる。ひび割れた氷の破片が水面に散らばっている。溶けかけてカラカラ鳴る。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 屈強な × 氷
- **ID**: r01_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 屈強な氷が泉に浮かんでいる。山のような氷塊が泉を塞いでいる。水面が見えない。回り込んだ。
- **damage**: 2
- **quill**: 2
- **reward**: なし

### 凍てついた × 氷
- **ID**: r01_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 凍てついた氷が泉に浮かんでいる。泉が完全に凍結している。近づくだけで息が白くなる。水は飲めない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 透き通った × 氷
- **ID**: r01_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透き通った氷が泉に浮かんでいる。完全に透明な氷。泉の水と区別がつかない。触れると指先が冷える。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 氷
- **ID**: r01_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 呪われた氷が泉に浮かんでいる。溶けない氷が永遠の冬を広げている。泉の周りの草が霜に覆われた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 氷
- **ID**: r01_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: 眠い氷が泉に浮かんでいる。ゆっくり溶けている。しずくの音が子守唄のようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 影

### 小さな × 影
- **ID**: r01_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が泉に浮かんでいる。水面に黒い染みが揺れている。何の影かわからない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 優しい × 影
- **ID**: r01_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 優しい影が泉に浮かんでいる。木陰のような涼しい影が水面を覆っている。心地よい。
- **damage**: -1
- **quill**: 4
- **reward**: なし

### 燃え盛る × 影
- **ID**: r01_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 燃え盛る影が泉に浮かんでいる。黒い炎が水面で燃えている。触れると灼ける。泉の水は無事だが、手を入れる気にはならない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 影
- **ID**: r01_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 堅い影が泉に浮かんでいる。水面に貼りついた黒い板。剥がせない。水を汲むときに影ごと掬ってしまう。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 影
- **ID**: r01_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 鋭い影が泉に浮かんでいる。輪郭がくっきりした影。水面に手を入れたら影の縁で指を切った。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 影
- **ID**: r01_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 壊れた影が泉に浮かんでいる。立体的にめくれ上がった影が水面でもがいている。水に戻れないらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 影
- **ID**: r01_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 屈強な影が泉に浮かんでいる。泉全体を覆う巨大な影。何を映しているか見上げたが、空には何もない。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '影の水', description: '影が溶けた泉の水。黒いが冷たくて清潔だ', sellPrice: 8 }

### 凍てついた × 影
- **ID**: r01_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍てついた影が泉に浮かんでいる。水面に張りついて動けない影。本体はとっくにいない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 影
- **ID**: r01_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 透き通った影が泉に浮かんでいる。薄い影が水面に溶けかけている。泉の底の模様と重なって、不思議な紋様を作っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 影
- **ID**: r01_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が泉に浮かんでいる。水面に手を入れた瞬間、自分の影が泉に引きずり込まれた。慌てて抜いた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 影
- **ID**: r01_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 眠い影が泉に浮かんでいる。正午の影だ。小さく縮んで水面の真ん中で動かない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 歌

### 小さな × 歌
- **ID**: r01_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 小さな歌が泉に浮かんでいる。水面から鼻歌が聞こえる。耳を澄ますと、泉の底から響いている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: r01_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 優しい歌が泉に浮かんでいる。子守唄が水面に漂っている。傷がじんわり温かくなった。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '子守唄の泡', description: '歌を含んだ泡。割ると旋律が聞こえる', sellPrice: 10 }

### 燃え盛る × 歌
- **ID**: r01_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 燃え盛る歌が泉に浮かんでいる。戦の歌だ。水面が震え、泉の水が跳ねている。血が沸く。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 歌
- **ID**: r01_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 堅い歌が泉に浮かんでいる。一度始まると止まらない旋律。泉の水が歌に合わせて振動している。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 歌
- **ID**: r01_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 鋭い歌が泉に浮かんでいる。金切り声のような高音。泉の水面に亀裂が走った。耳を塞いだ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 歌
- **ID**: r01_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 壊れた歌が泉に浮かんでいる。途中で途切れる旋律が水面に波紋を残す。続きを誰も知らない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 歌
- **ID**: r01_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 屈強な歌が泉に浮かんでいる。大合唱が水面を震わせている。足元が揺れる。泉の底が割れそうだ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 歌
- **ID**: r01_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が泉に浮かんでいる。旋律が凍って結晶になっている。触れると音が弾けて消える。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '凍った旋律', description: '氷の結晶。振ると微かに音がする', sellPrice: 8 }

### 透き通った × 歌
- **ID**: r01_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 透き通った歌が泉に浮かんでいる。純粋な旋律。雑念が洗い流される。泉の水を飲むより効いた。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '純粋な響き', description: '歌が染み込んだ泉の水。飲むと耳の奥で旋律が鳴る', sellPrice: 15 }

### 呪われた × 歌
- **ID**: r01_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が泉に浮かんでいる。聴くと頭から離れない。泉を去った後もずっと鳴っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 歌
- **ID**: r01_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 眠い歌が泉に浮かんでいる。子守唄だ。泉のほとりで抗えない眠りに落ちた。目覚めると体が軽い。
- **damage**: -1
- **quill**: 5
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: r01_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 小さな沈黙が泉に浮かんでいる。ふと音が消える瞬間。水面が鏡のように静まった。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 沈黙
- **ID**: r01_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 優しい沈黙が泉に浮かんでいる。言葉がなくても安らぐ静けさ。泉のほとりでしばらく黙って座った。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 沈黙
- **ID**: r01_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 燃え盛る沈黙が泉に浮かんでいる。空気が焦げるような無音。泉の水を飲んでも喉の渇きが消えない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 沈黙
- **ID**: r01_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 堅い沈黙が泉に浮かんでいる。音が吸い込まれて消える。自分の足音すら聞こえない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 沈黙
- **ID**: r01_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 鋭い沈黙が泉に浮かんでいる。無言の圧力。泉の水面が張り詰めている。一滴垂らすのも躊躇われる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 沈黙
- **ID**: r01_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 壊れた沈黙が泉に浮かんでいる。静寂のはずなのにノイズが混じる。水面がざわついている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 沈黙
- **ID**: r01_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 屈強な沈黙が泉に浮かんでいる。圧倒的な無音。泉の水も波紋を立てるのを恐れている。息を殺して水を飲んだ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: r01_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が泉に浮かんでいる。息も凍る冷たい静寂。泉が時間ごと止まったように見える。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 沈黙
- **ID**: r01_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 透き通った沈黙が泉に浮かんでいる。泉のように澄んだ無音。思考が透き通っていく。疲れが遠のいた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 呪われた × 沈黙
- **ID**: r01_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が泉に浮かんでいる。口を開いても声が出ない。泉の水を飲もうとしたが、飲み込む音すらしない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 沈黙
- **ID**: r01_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠い沈黙が泉に浮かんでいる。午後の図書館のような静けさ。泉のほとりで意識が遠のいた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 騎士

### 小さな × 騎士
- **ID**: r01_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 小さな騎士が泉に浮かんでいる。子供の騎士だ。大きすぎる兜を脱いで水遊びしている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 騎士
- **ID**: r01_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が泉に浮かんでいる。剣を置き、鎧を脱いで水浴びしている。こちらに気づくと手を振った。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 燃え盛る × 騎士
- **ID**: r01_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 燃え盛る騎士が泉に浮かんでいる。鎧ごと炎に包まれた騎士が泉で火を消そうとしている。泉が湯気に包まれた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 騎士
- **ID**: r01_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 堅い騎士が泉に浮かんでいる。分厚い鎧のまま仰向けで浮いている。重くないのか。表情は兜で見えない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 騎士
- **ID**: r01_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 鋭い騎士が泉に浮かんでいる。冷たい目でこちらを見ている。泉を使いたいなら先に行けと剣で示した。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 壊れた × 騎士
- **ID**: r01_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 壊れた騎士が泉に浮かんでいる。へこんだ鎧、折れた剣。泉で傷を洗っている。目は虚ろだが、まだ立てる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 騎士
- **ID**: r01_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 屈強な騎士が泉に浮かんでいる。巨体が泉の水をほとんど押し出している。水かさが減っている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 騎士
- **ID**: r01_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 凍てついた騎士が泉に浮かんでいる。氷に閉じ込められた騎士。剣を振り上げた姿勢のまま泉を漂っている。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '氷騎士の欠片', description: '騎士を包む氷の破片。中で何かが光っている', sellPrice: 8 }

### 透き通った × 騎士
- **ID**: r01_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 透き通った騎士が泉に浮かんでいる。影の薄い騎士。泉に映っているのか実体なのか区別がつかない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 騎士
- **ID**: r01_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士が泉に浮かんでいる。兜の奥の目が赤く光っている。泉の水が黒ずんでいく。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 騎士
- **ID**: r01_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が泉に浮かんでいる。鎧のまま泉で居眠りしている。いびきが水面を震わせている。平和な光景だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: r01_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 小さな魔女が泉に浮かんでいる。少女の魔女が帽子を船にして水面を漂っている。楽しそうだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '帽子の水滴', description: '魔女の帽子から垂れた水。微かに魔力を帯びている', sellPrice: 8 }

### 優しい × 魔女
- **ID**: r01_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 優しい魔女が泉に浮かんでいる。薬草を泉に浸している。飲んでみろと勧められた。傷の痛みが和らいだ。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 魔女
- **ID**: r01_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 燃え盛る魔女が泉に浮かんでいる。炎の魔法で全身を包んだ魔女。泉で冷やそうとしているが、水がすぐ蒸発する。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 魔女
- **ID**: r01_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 堅い魔女が泉に浮かんでいる。頑固な老魔女が泉を占有している。話しかけても無視される。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 魔女
- **ID**: r01_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鋭い魔女が泉に浮かんでいる。鉤鼻の魔女が泉の水で何かを占っている。こちらを見て首を横に振った。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 魔女
- **ID**: r01_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 壊れた魔女が泉に浮かんでいる。魔力が暴走した魔女。泉の水が不規則に沸いたり凍ったりしている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 屈強な × 魔女
- **ID**: r01_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 屈強な魔女が泉に浮かんでいる。杖ではなく拳で水面を叩いている。泉が揺れて波が立つ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 魔女
- **ID**: r01_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 凍てついた魔女が泉に浮かんでいる。氷の魔法で泉を凍らせている。霜が広がっていく。水を飲むには氷を砕くしかない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 魔女
- **ID**: r01_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 透き通った魔女が泉に浮かんでいる。老いて存在が希薄な魔女。泉に溶けかけている。向こうの景色が透けている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 魔女
- **ID**: r01_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪われた魔女が泉に浮かんでいる。自分の呪いに蝕まれた魔女。泉の水が呪いを吸って変色している。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 魔女
- **ID**: r01_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 眠い魔女が泉に浮かんでいる。大釜の代わりに泉で薬を煮ようとしたが、先に眠ってしまったらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: r01_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 小さな王が泉に浮かんでいる。子供が王冠をかぶって水浴びしている。王冠が頭から滑り落ちそうだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 王
- **ID**: r01_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 優しい王が泉に浮かんでいる。質素な衣の王が泉の水を手ですくい、こちらに差し出した。旅人をもてなしているのだ。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 王
- **ID**: r01_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 燃え盛る王が泉に浮かんでいる。炎の冠の王。泉の水が沸騰している。王は平然と浮かんでいる。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 王
- **ID**: r01_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 堅い王が泉に浮かんでいる。石の玉座ごと沈みかけている。だが微動だにしない。威厳がある。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 王
- **ID**: r01_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鋭い王が泉に浮かんでいる。鷹のような目で泉の底を見据えている。何かを探しているらしい。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 壊れた × 王
- **ID**: r01_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 壊れた王が泉に浮かんでいる。歪んだ王冠、虚ろな目。泉の水に自分の顔を映して、誰だか分からないようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 王
- **ID**: r01_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 屈強な王が泉に浮かんでいる。戦士王が水浴びしている。泉が狭い。水を分けてもらえる気配がない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 王
- **ID**: r01_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 凍てついた王が泉に浮かんでいる。氷の玉座ごと凍った王。泉の水がその周りだけ冷え切っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 王
- **ID**: r01_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が泉に浮かんでいる。存在が希薄な王。泉に映っているだけかもしれない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 王
- **ID**: r01_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 呪われた王が泉に浮かんでいる。触れたものが金になる王。泉の水が金色に輝いている。飲んだら自分も金になりそうだ。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '金の水滴', description: '呪いの王が触れた泉の水。金色に凝固している', sellPrice: 15 }

### 眠い × 王
- **ID**: r01_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 眠い王が泉に浮かんでいる。王冠がずれたまま居眠りしている。泉のほとりで一緒にうとうとした。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 亡霊

### 小さな × 亡霊
- **ID**: r01_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 小さな亡霊が泉に浮かんでいる。子供の霊だ。水面で水切りをしている。石が透き通っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: r01_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 優しい亡霊が泉に浮かんでいる。穏やかな霊。泉の水を手ですくうが、すり抜けてしまう。微笑んでいる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: r01_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 燃え盛る亡霊が泉に浮かんでいる。火に焼かれた死の記憶。泉の水が温まっているが、飲む気にはならない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 亡霊
- **ID**: r01_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 堅い亡霊が泉に浮かんでいる。何百年もこの泉に立っている霊。動く気配がない。泉の水は飲めるが、視線が痛い。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 亡霊
- **ID**: r01_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 鋭い亡霊が泉に浮かんでいる。こちらの罪を見透かす目。泉の水を飲もうとしたが、目が合って手が止まった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 亡霊
- **ID**: r01_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 壊れた亡霊が泉に浮かんでいる。自分が何者か思い出せない霊。泉に映る自分の顔を不思議そうに見ている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 亡霊
- **ID**: r01_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 屈強な亡霊が泉に浮かんでいる。鎧武者の霊。死んで枷が外れている。泉を守っているのか、占有しているのか。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: r01_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍てついた亡霊が泉に浮かんでいる。冷気を纏った霊。通った跡に霜が浮く。泉の水が冷えすぎている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 亡霊
- **ID**: r01_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 透き通った亡霊が泉に浮かんでいる。成仏しかけている霊。泉の光に溶けていく。最後に一度だけ振り返った。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '未練の雫', description: '亡霊が泉に残した最後の一滴。温かい', sellPrice: 10 }

### 呪われた × 亡霊
- **ID**: r01_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪われた亡霊が泉に浮かんでいる。呪いで成仏できない霊。苦しみの表情のまま泉を漂っている。水が呪いを帯びている。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 亡霊
- **ID**: r01_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: 眠い亡霊が泉に浮かんでいる。うつらうつらしている霊。存在感が薄れたり戻ったりしている。害はない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 鏡

### 小さな × 鏡
- **ID**: r01_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 小さな鏡が泉に浮かんでいる。手鏡だ。覗くと泉の底が映っている。自分の顔は映らない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 鏡
- **ID**: r01_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が泉に浮かんでいる。覗くと自分が少しだけ元気に見える。泉の水と鏡の効果で、疲れが紛れた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: r01_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 燃え盛る鏡が泉に浮かんでいる。鏡面に炎が映っている。だが周囲に火はない。鏡の中だけが燃えている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 鏡
- **ID**: r01_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 堅い鏡が泉に浮かんでいる。傷も曇りもない鏡。泉の水面と鏡面が合わさって、無限に深く見える。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 鏡
- **ID**: r01_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 鋭い鏡が泉に浮かんでいる。割れた鏡の破片。縁が刃物のように鋭い。水を汲むとき指を切った。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 鏡
- **ID**: r01_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: 壊れた鏡が泉に浮かんでいる。ひび割れた鏡面に自分の顔が何人にも分裂して映っている。泉の水面もざわつく。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 鏡
- **ID**: r01_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 屈強な鏡が泉に浮かんでいる。巨大な姿見。泉全体を覆っている。鏡に映る空がやけに広い。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 鏡
- **ID**: r01_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍てついた鏡が泉に浮かんでいる。霜で覆われた鏡面。泉の水が凍り始めている。鏡に触ると手が張りつきそうだ。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 鏡
- **ID**: r01_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透き通った鏡が泉に浮かんでいる。透明な鏡。泉と鏡の境目がわからない。覗き込むと、泉の底に別の空が見えた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '泉底の空', description: '鏡が映した別の空の欠片。瓶の中で青く光る', sellPrice: 15 }

### 呪われた × 鏡
- **ID**: r01_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が泉に浮かんでいる。覗いた自分の顔が鏡に残った。泉を去っても、鏡の中の自分がこちらを見ている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 鏡
- **ID**: r01_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 眠い鏡が泉に浮かんでいる。鏡面がぼんやり曇っている。映像がゆっくり遅れて映る。自分の寝顔が見えた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 人形

### 小さな × 人形
- **ID**: r01_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 小さな人形が泉に浮かんでいる。指人形ほどの大きさ。誰かが落としたのだろう。水面でくるくる回っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 人形
- **ID**: r01_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 優しい人形が泉に浮かんでいる。笑顔が縫ってある人形。くたくたになっている。誰かに大事にされていたのだ。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '泉の人形', description: 'くたくたの人形。乾かすと笑顔が見えた', sellPrice: 5 }

### 燃え盛る × 人形
- **ID**: r01_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃え盛る人形が泉に浮かんでいる。藁人形が水面で燃えている。泉の水でも消えない。煙が立ちのぼる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 人形
- **ID**: r01_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 堅い人形が泉に浮かんでいる。木彫りの人形。表情がない。水面に仰向けで漂っている。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 鋭い × 人形
- **ID**: r01_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 鋭い人形が泉に浮かんでいる。関節が刃になっている操り人形。糸が見えない。水面を這うように動いている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 人形
- **ID**: r01_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 壊れた人形が泉に浮かんでいる。首がもげかけた人形。残った片目でこちらを見ている。水に浮かぶ姿が不気味だ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 人形
- **ID**: r01_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 屈強な人形が泉に浮かんでいる。等身大の木彫り人形。丸太のような腕が水面から突き出している。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 凍てついた × 人形
- **ID**: r01_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 凍てついた人形が泉に浮かんでいる。氷でできた人形。繊細な造形。泉の水が周囲だけ冷えている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 人形
- **ID**: r01_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 透き通った人形が泉に浮かんでいる。硝子の人形。中に泉の水が入っている。光を受けてきらきら光る。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '水入り硝子人形', description: '泉の水を内蔵した人形。傾けると水が揺れる', sellPrice: 12 }

### 呪われた × 人形
- **ID**: r01_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が泉に浮かんでいる。拾い上げると手から離れない。泉に戻しても浮かんで戻ってくる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 人形
- **ID**: r01_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 眠い人形が泉に浮かんでいる。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。水面で揺れて、開いたり閉じたり。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: r01_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 小さな雨が泉に浮かんでいる。霧雨が泉の上だけに降っている。波紋が細かく広がる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 雨
- **ID**: r01_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 優しい雨が泉に浮かんでいる。温かい慈雨。泉の水かさがゆっくり増している。傷を洗うと痛みが引いた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 雨
- **ID**: r01_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 燃え盛る雨が泉に浮かんでいる。火の雨が泉に降り注いでいる。水面が跳ね、蒸気が上がる。近づけない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 雨
- **ID**: r01_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 堅い雨が泉に浮かんでいる。雹だ。氷の粒が泉を叩いている。頭を打たれた。痛い。
- **damage**: 2
- **quill**: 2
- **reward**: なし

### 鋭い × 雨
- **ID**: r01_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 鋭い雨が泉に浮かんでいる。針のような雨粒。泉の水面が無数の穴だらけに見える。肌に刺さる。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 壊れた × 雨
- **ID**: r01_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 壊れた雨が泉に浮かんでいる。途切れ途切れの雨。リズムがおかしい。上に向かって降る滴もある。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 雨
- **ID**: r01_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 屈強な雨が泉に浮かんでいる。豪雨。泉が溢れて足元が水浸しだ。休息どころではない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 雨
- **ID**: r01_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍てついた雨が泉に浮かんでいる。凍雨が泉の水面を氷の膜で覆っていく。世界が氷の鏡になった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 雨
- **ID**: r01_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 透き通った雨が泉に浮かんでいる。異常なほど澄んだ雨。泉の水が浄化されていく。一口飲むと体の芯まで清まった。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 呪われた × 雨
- **ID**: r01_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が泉に浮かんでいる。浴びるとその場から動けなくなる雨。泉のほとりに根が生えたように立ち尽くした。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 雨
- **ID**: r01_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 眠い雨が泉に浮かんでいる。しとしとと降る雨音が子守唄のようだ。泉のほとりで深く眠った。
- **damage**: -1
- **quill**: 4
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 30 |
| reward率 | 16.0% |
| damage平均 | 1.2 |
| quill平均 | 4.1 |
| damage=0の割合 | 35.8% |
| damage≥4の割合 | 4.8% |
| quill≥6の割合 | 12.3% |
