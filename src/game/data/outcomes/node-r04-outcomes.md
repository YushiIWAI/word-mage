# ノードR04「花畑」Outcome一覧

- **文構成**: [mod]蝶が 花畑で [pred]
- **可変スロット**: mod + pred
- **固定**: 主語「蝶」(subj_butterfly) + 目的語「花畑」(で格)
- **ノードの文脈**: 色とりどりの花畑。蝶が舞っている。穏やかな休息地点
- **nodeType**: rest
- **で格有効述語(10)**: 輝く, 歌っている, 踊っている, 笑っている, 眠っている, 溶けている, 逃げていく, 見つめている, 待っている, 囁いている
- **で格歪み述語(7)**: 塞いでいる, 守っている, 追いかけてくる, 隠している, 砕く, 絡みついている, 降り注いでいる
- **有効パターン**: 11 mod × 10 pred = 110
- **歪みパターン**: 11 mod × 7 pred = 77 → defaultOutcome
- **初期値**: 優しい × 踊っている（damage: -1、HP回復）

---

## defaultOutcome（格歪み）

- **defaultOutcome**:
  - text: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
  - damage: 4
  - quill: 0

---

## 輝く (pred_shine)

### 小さな × 輝く
- **ID**: r04_small_shine
- **conditions**: { s1: 'mod_small', s2: 'pred_shine' }
- **text**: 小さな蝶が花畑で輝いている。花びらと見間違うほど小さい。鱗粉がきらきら光っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 輝く
- **ID**: r04_gentle_shine
- **conditions**: { s1: 'mod_gentle', s2: 'pred_shine' }
- **text**: 優しい蝶が花畑で輝いている。羽の模様が笑顔に見える。柔らかな光で花畑が温かく照らされている。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 輝く
- **ID**: r04_fire_shine
- **conditions**: { s1: 'mod_fire', s2: 'pred_shine' }
- **text**: 燃え盛る蝶が花畑で輝いている。炎の羽が花を照らしている。美しいが、花が焦げ始めている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 輝く
- **ID**: r04_hard_shine
- **conditions**: { s1: 'mod_hard', s2: 'pred_shine' }
- **text**: 堅い蝶が花畑で輝いている。金属の羽が日光を反射して眩しい。目がくらむ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 輝く
- **ID**: r04_sharp_shine
- **conditions**: { s1: 'mod_sharp', s2: 'pred_shine' }
- **text**: 鋭い蝶が花畑で輝いている。刃の羽が光を反射して、花畑に鋭い光線が走る。頬を切られた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 輝く
- **ID**: r04_broken_shine
- **conditions**: { s1: 'mod_broken', s2: 'pred_shine' }
- **text**: 壊れた蝶が花畑で輝いている。片羽がちぎれた蝶。それでも鱗粉は光を放っている。最後の輝きだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '最後の鱗粉', description: '壊れた蝶が残した光る粉。指先で光り続ける', sellPrice: 10 }

### 屈強な × 輝く
- **ID**: r04_mighty_shine
- **conditions**: { s1: 'mod_mighty', s2: 'pred_shine' }
- **text**: 屈強な蝶が花畑で輝いている。羽ばたきのたびに光の波が広がる。花畑全体が眩く照らされた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 輝く
- **ID**: r04_frozen_shine
- **conditions**: { s1: 'mod_frozen', s2: 'pred_shine' }
- **text**: 凍てついた蝶が花畑で輝いている。霜の結晶が日光を受けてプリズムのように光る。花が氷で覆われていく。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '氷蝶のプリズム', description: '霜の結晶。光を当てると虹を作る', sellPrice: 10 }

### 透き通った × 輝く
- **ID**: r04_clear_shine
- **conditions**: { s1: 'mod_clear', s2: 'pred_shine' }
- **text**: 透き通った蝶が花畑で輝いている。透明な羽が光を集めて虹を作っている。花畑が七色に染まった。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '虹の花びら', description: '虹色に染まった花びら。光に透かすと蝶の形が見える', sellPrice: 15 }

### 呪われた × 輝く
- **ID**: r04_cursed_shine
- **conditions**: { s1: 'mod_cursed', s2: 'pred_shine' }
- **text**: 呪われた蝶が花畑で輝いている。不吉な光。追いかけたくなるが、花畑の奥で道が消えている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 輝く
- **ID**: r04_sleepy_shine
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_shine' }
- **text**: 眠い蝶が花畑で輝いている。羽を閉じかけているが、鱗粉がぼんやり光っている。夕暮れの花畑のようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 歌っている (pred_sing)

### 小さな × 歌っている
- **ID**: r04_small_sing
- **conditions**: { s1: 'mod_small', s2: 'pred_sing' }
- **text**: 小さな蝶が花畑で歌っている。花びらほどの蝶から、かすかな旋律が聞こえる。耳を澄ますと心地よい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌っている
- **ID**: r04_gentle_sing
- **conditions**: { s1: 'mod_gentle', s2: 'pred_sing' }
- **text**: 優しい蝶が花畑で歌っている。子守唄のような旋律。花が歌に合わせて揺れている。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '花畑の子守唄', description: '蝶が歌った旋律。聴くと花の匂いがする', sellPrice: 10 }

### 燃え盛る × 歌っている
- **ID**: r04_fire_sing
- **conditions**: { s1: 'mod_fire', s2: 'pred_sing' }
- **text**: 燃え盛る蝶が花畑で歌っている。戦の歌のような激しい旋律。花が炎に照らされて赤く揺れる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 歌っている
- **ID**: r04_hard_sing
- **conditions**: { s1: 'mod_hard', s2: 'pred_sing' }
- **text**: 堅い蝶が花畑で歌っている。金属の羽が震えて奇妙な旋律を奏でている。止まらない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 歌っている
- **ID**: r04_sharp_sing
- **conditions**: { s1: 'mod_sharp', s2: 'pred_sing' }
- **text**: 鋭い蝶が花畑で歌っている。金切り声のような高音。花が震えて花弁を落としている。耳が痛い。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 歌っている
- **ID**: r04_broken_sing
- **conditions**: { s1: 'mod_broken', s2: 'pred_sing' }
- **text**: 壊れた蝶が花畑で歌っている。片羽の蝶の歌は途切れ途切れだ。続きを花畑の風が埋めている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 歌っている
- **ID**: r04_mighty_sing
- **conditions**: { s1: 'mod_mighty', s2: 'pred_sing' }
- **text**: 屈強な蝶が花畑で歌っている。大合唱のような声量。蝶一匹とは思えない。花畑が振動している。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 歌っている
- **ID**: r04_frozen_sing
- **conditions**: { s1: 'mod_frozen', s2: 'pred_sing' }
- **text**: 凍てついた蝶が花畑で歌っている。凍った旋律が結晶になって降っている。花が霜で飾られていく。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 歌っている
- **ID**: r04_clear_sing
- **conditions**: { s1: 'mod_clear', s2: 'pred_sing' }
- **text**: 透き通った蝶が花畑で歌っている。純粋な旋律。花畑の空気が澄んでいく。聴いていると雑念が消えた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 呪われた × 歌っている
- **ID**: r04_cursed_sing
- **conditions**: { s1: 'mod_cursed', s2: 'pred_sing' }
- **text**: 呪われた蝶が花畑で歌っている。頭から離れない歌。花畑を去っても旋律がずっと鳴っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 歌っている
- **ID**: r04_sleepy_sing
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_sing' }
- **text**: 眠い蝶が花畑で歌っている。子守唄だ。花畑に横になると、花の香りと旋律に包まれた。深く眠った。
- **damage**: -1
- **quill**: 5
- **reward**: なし

---

## 踊っている (pred_dance)

### 小さな × 踊っている
- **ID**: r04_small_dance
- **conditions**: { s1: 'mod_small', s2: 'pred_dance' }
- **text**: 小さな蝶が花畑で踊っている。花びらと一緒にくるくる舞っている。どちらが蝶かわからない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 踊っている（初期値）
- **ID**: r04_gentle_dance
- **conditions**: { s1: 'mod_gentle', s2: 'pred_dance' }
- **text**: 優しい蝶が花畑で踊っている。花から花へ、ゆったりと舞っている。見ているだけで心が和む。花畑のほとりで休んだ。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 踊っている
- **ID**: r04_fire_dance
- **conditions**: { s1: 'mod_fire', s2: 'pred_dance' }
- **text**: 燃え盛る蝶が花畑で踊っている。炎の羽が弧を描くたびに火の粉が散る。花が燃え始めた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 踊っている
- **ID**: r04_hard_dance
- **conditions**: { s1: 'mod_hard', s2: 'pred_dance' }
- **text**: 堅い蝶が花畑で踊っている。金属の羽がぎこちなく動いている。カチカチと音がする。不器用な踊りだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 踊っている
- **ID**: r04_sharp_dance
- **conditions**: { s1: 'mod_sharp', s2: 'pred_dance' }
- **text**: 鋭い蝶が花畑で踊っている。刃の羽が舞うたびに花が切られていく。踊りは美しいが、花畑が荒れていく。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 踊っている
- **ID**: r04_broken_dance
- **conditions**: { s1: 'mod_broken', s2: 'pred_dance' }
- **text**: 壊れた蝶が花畑で踊っている。片羽で螺旋を描いている。踊りというより落ちていく最中だ。花が受け止めた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 踊っている
- **ID**: r04_mighty_dance
- **conditions**: { s1: 'mod_mighty', s2: 'pred_dance' }
- **text**: 屈強な蝶が花畑で踊っている。羽ばたきで花が吹き飛んでいる。力強い踊りだが、花畑が台無しだ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 踊っている
- **ID**: r04_frozen_dance
- **conditions**: { s1: 'mod_frozen', s2: 'pred_dance' }
- **text**: 凍てついた蝶が花畑で踊っている。飛んだ跡に霜が降りる。花が凍ったまま咲いている。不思議な美しさだ。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '霜の花束', description: '凍ったまま咲き続ける花。溶けない', sellPrice: 12 }

### 透き通った × 踊っている
- **ID**: r04_clear_dance
- **conditions**: { s1: 'mod_clear', s2: 'pred_dance' }
- **text**: 透き通った蝶が花畑で踊っている。景色に溶けて、花だけが風もないのに揺れている。見えない蝶の踊り。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 踊っている
- **ID**: r04_cursed_dance
- **conditions**: { s1: 'mod_cursed', s2: 'pred_dance' }
- **text**: 呪われた蝶が花畑で踊っている。つられて体が動き出す。止まらない。蝶が止まるまで踊り続けた。足が痛い。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 踊っている
- **ID**: r04_sleepy_dance
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_dance' }
- **text**: 眠い蝶が花畑で踊っている。ゆっくりと、ふらふらと。花の上に止まっては、また飛ぶ。催眠的な動きだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 笑っている (pred_laugh)

### 小さな × 笑っている
- **ID**: r04_small_laugh
- **conditions**: { s1: 'mod_small', s2: 'pred_laugh' }
- **text**: 小さな蝶が花畑で笑っている。花びらほどの蝶の羽模様が笑顔に見える。花も一緒に笑っているようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 笑っている
- **ID**: r04_gentle_laugh
- **conditions**: { s1: 'mod_gentle', s2: 'pred_laugh' }
- **text**: 優しい蝶が花畑で笑っている。温かな羽模様。指に止まってくすくすと揺れた。釣られて笑った。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 笑っている
- **ID**: r04_fire_laugh
- **conditions**: { s1: 'mod_fire', s2: 'pred_laugh' }
- **text**: 燃え盛る蝶が花畑で笑っている。炎の羽がパチパチと弾けている。笑い声か、それとも花が燃える音か。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 笑っている
- **ID**: r04_hard_laugh
- **conditions**: { s1: 'mod_hard', s2: 'pred_laugh' }
- **text**: 堅い蝶が花畑で笑っている。金属の羽がカタカタと鳴っている。蝶の笑い方はこういうものらしい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 笑っている
- **ID**: r04_sharp_laugh
- **conditions**: { s1: 'mod_sharp', s2: 'pred_laugh' }
- **text**: 鋭い蝶が花畑で笑っている。刃の羽がきらりと光る。嘲笑うような動き。近づくと頬を切られそうだ。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 笑っている
- **ID**: r04_broken_laugh
- **conditions**: { s1: 'mod_broken', s2: 'pred_laugh' }
- **text**: 壊れた蝶が花畑で笑っている。片羽がちぎれているのに楽しそうだ。花の上で揺れている。強い蝶だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 笑っている
- **ID**: r04_mighty_laugh
- **conditions**: { s1: 'mod_mighty', s2: 'pred_laugh' }
- **text**: 屈強な蝶が花畑で笑っている。豪快な羽ばたきで花びらが宙を舞う。笑い飛ばしている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 笑っている
- **ID**: r04_frozen_laugh
- **conditions**: { s1: 'mod_frozen', s2: 'pred_laugh' }
- **text**: 凍てついた蝶が花畑で笑っている。霜の結晶の羽が揺れている。笑っているのか震えているのか。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 笑っている
- **ID**: r04_clear_laugh
- **conditions**: { s1: 'mod_clear', s2: 'pred_laugh' }
- **text**: 透き通った蝶が花畑で笑っている。透明な蝶の笑い声だけが花畑に響いている。姿は見えない。声だけが明るい。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 笑っている
- **ID**: r04_cursed_laugh
- **conditions**: { s1: 'mod_cursed', s2: 'pred_laugh' }
- **text**: 呪われた蝶が花畑で笑っている。不吉な笑い。追いかけると花畑の奥に迷い込む。引き返した。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 眠い × 笑っている
- **ID**: r04_sleepy_laugh
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_laugh' }
- **text**: 眠い蝶が花畑で笑っている。半分眠りながら笑っている。寝言のような笑い。穏やかだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 眠っている (pred_sleep)

### 小さな × 眠っている
- **ID**: r04_small_sleep
- **conditions**: { s1: 'mod_small', s2: 'pred_sleep' }
- **text**: 小さな蝶が花畑で眠っている。花びらの上で羽を閉じている。花びらと見分けがつかない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 眠っている
- **ID**: r04_gentle_sleep
- **conditions**: { s1: 'mod_gentle', s2: 'pred_sleep' }
- **text**: 優しい蝶が花畑で眠っている。笑顔の模様の羽を閉じて、花に包まれて眠っている。起こすのが忍びない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 眠っている
- **ID**: r04_fire_sleep
- **conditions**: { s1: 'mod_fire', s2: 'pred_sleep' }
- **text**: 燃え盛る蝶が花畑で眠っている。炎の羽が揺れている。周りの花が焦げているが、蝶は平和に眠っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 眠っている
- **ID**: r04_hard_sleep
- **conditions**: { s1: 'mod_hard', s2: 'pred_sleep' }
- **text**: 堅い蝶が花畑で眠っている。金属の羽を閉じて石のように動かない。琥珀に閉じ込められたようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 眠っている
- **ID**: r04_sharp_sleep
- **conditions**: { s1: 'mod_sharp', s2: 'pred_sleep' }
- **text**: 鋭い蝶が花畑で眠っている。刃の羽を閉じている。眠っている間は安全だ。起こさずに通り過ぎた。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 壊れた × 眠っている
- **ID**: r04_broken_sleep
- **conditions**: { s1: 'mod_broken', s2: 'pred_sleep' }
- **text**: 壊れた蝶が花畑で眠っている。片羽の蝶が花の中で動かない。眠っているのか、力尽きたのか。花が布団のようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 眠っている
- **ID**: r04_mighty_sleep
- **conditions**: { s1: 'mod_mighty', s2: 'pred_sleep' }
- **text**: 屈強な蝶が花畑で眠っている。大きな蝶が花を押し潰して寝床にしている。寝息で花が揺れる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 凍てついた × 眠っている
- **ID**: r04_frozen_sleep
- **conditions**: { s1: 'mod_frozen', s2: 'pred_sleep' }
- **text**: 凍てついた蝶が花畑で眠っている。氷の蝶が花の中で凍りついている。永遠の眠りに見える。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 眠っている
- **ID**: r04_clear_sleep
- **conditions**: { s1: 'mod_clear', s2: 'pred_sleep' }
- **text**: 透き通った蝶が花畑で眠っている。透明な蝶が花に溶けて見えなくなっている。花だけがそっと揺れる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 眠っている
- **ID**: r04_cursed_sleep
- **conditions**: { s1: 'mod_cursed', s2: 'pred_sleep' }
- **text**: 呪われた蝶が花畑で眠っている。鱗粉が催眠作用を持つ。近づいたら眠ってしまった。目覚めると日が暮れていた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 眠い × 眠っている
- **ID**: r04_sleepy_sleep
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_sleep' }
- **text**: 眠い蝶が花畑で眠っている。当然の帰結だ。花の香りと穏やかな空気。隣で一緒に眠った。
- **damage**: -1
- **quill**: 4
- **reward**: なし

---

## 溶けている (pred_melt)

### 小さな × 溶けている
- **ID**: r04_small_melt
- **conditions**: { s1: 'mod_small', s2: 'pred_melt' }
- **text**: 小さな蝶が花畑で溶けている。花びらほどの蝶が花の色に溶け込んでいく。消えていく。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 溶けている
- **ID**: r04_gentle_melt
- **conditions**: { s1: 'mod_gentle', s2: 'pred_melt' }
- **text**: 優しい蝶が花畑で溶けている。笑顔の模様が花に溶けていく。蝶がいた場所に新しい花が咲いた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '蝶の花', description: '蝶が溶けた場所に咲いた花。羽の模様がある', sellPrice: 10 }

### 燃え盛る × 溶けている
- **ID**: r04_fire_melt
- **conditions**: { s1: 'mod_fire', s2: 'pred_melt' }
- **text**: 燃え盛る蝶が花畑で溶けている。炎が花畑に溶け広がっていく。花が燃えながら咲いている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 溶けている
- **ID**: r04_hard_melt
- **conditions**: { s1: 'mod_hard', s2: 'pred_melt' }
- **text**: 堅い蝶が花畑で溶けている。金属が液体になって花の根元に溜まっている。花が金属色に光り始めた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 鋭い × 溶けている
- **ID**: r04_sharp_melt
- **conditions**: { s1: 'mod_sharp', s2: 'pred_melt' }
- **text**: 鋭い蝶が花畑で溶けている。刃が溶けて花に染み込んでいる。花びらの縁が鋭くなった。触ると切れそうだ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 溶けている
- **ID**: r04_broken_melt
- **conditions**: { s1: 'mod_broken', s2: 'pred_melt' }
- **text**: 壊れた蝶が花畑で溶けている。ちぎれた羽が花の色に溶けていく。蝶だったものが花になる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 溶けている
- **ID**: r04_mighty_melt
- **conditions**: { s1: 'mod_mighty', s2: 'pred_melt' }
- **text**: 屈強な蝶が花畑で溶けている。大きな蝶が溶けて花畑を塗り替えていく。蝶の色の花畑になった。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 溶けている
- **ID**: r04_frozen_melt
- **conditions**: { s1: 'mod_frozen', s2: 'pred_melt' }
- **text**: 凍てついた蝶が花畑で溶けている。霜が溶けて水になり、花に吸われていく。花が潤っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 溶けている
- **ID**: r04_clear_melt
- **conditions**: { s1: 'mod_clear', s2: 'pred_melt' }
- **text**: 透き通った蝶が花畑で溶けている。透明な蝶が完全に花畑に溶け込んだ。蝶がいた痕跡が光の残像だけになった。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 溶けている
- **ID**: r04_cursed_melt
- **conditions**: { s1: 'mod_cursed', s2: 'pred_melt' }
- **text**: 呪われた蝶が花畑で溶けている。蝶が溶けた花に触れると指が痺れた。呪いが花に移っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 溶けている
- **ID**: r04_sleepy_melt
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_melt' }
- **text**: 眠い蝶が花畑で溶けている。眠りながら溶けていく。夢の中で花になっているのかもしれない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 逃げていく (pred_flee)

### 小さな × 逃げていく
- **ID**: r04_small_flee
- **conditions**: { s1: 'mod_small', s2: 'pred_flee' }
- **text**: 小さな蝶が花畑で逃げていく。花びらかと思ったら蝶だった。追いかけると花畑の奥に消えた。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 優しい × 逃げていく
- **ID**: r04_gentle_flee
- **conditions**: { s1: 'mod_gentle', s2: 'pred_flee' }
- **text**: 優しい蝶が花畑で逃げていく。こちらを振り返りながら飛んでいく。ついてこいという合図だろうか。安全な道に出た。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 逃げていく
- **ID**: r04_fire_flee
- **conditions**: { s1: 'mod_fire', s2: 'pred_flee' }
- **text**: 燃え盛る蝶が花畑で逃げていく。飛んだ跡に火の粉が散り、花畑に火の道ができた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 堅い × 逃げていく
- **ID**: r04_hard_flee
- **conditions**: { s1: 'mod_hard', s2: 'pred_flee' }
- **text**: 堅い蝶が花畑で逃げていく。金属の羽がカチカチ鳴りながら飛んでいく。落ちた鱗粉が金属片だった。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '金属の鱗粉', description: '堅い蝶が落とした粉。指で潰せない', sellPrice: 5 }

### 鋭い × 逃げていく
- **ID**: r04_sharp_flee
- **conditions**: { s1: 'mod_sharp', s2: 'pred_flee' }
- **text**: 鋭い蝶が花畑で逃げていく。すれ違いざまに頬を切られた。花も切り裂きながら去っていく。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 逃げていく
- **ID**: r04_broken_flee
- **conditions**: { s1: 'mod_broken', s2: 'pred_flee' }
- **text**: 壊れた蝶が花畑で逃げていく。片羽で螺旋を描きながら逃げている。花の間に落ちた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 逃げていく
- **ID**: r04_mighty_flee
- **conditions**: { s1: 'mod_mighty', s2: 'pred_flee' }
- **text**: 屈強な蝶が花畑で逃げていく。風圧で花が薙ぎ倒されている。蝶の通った跡が道になった。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 逃げていく
- **ID**: r04_frozen_flee
- **conditions**: { s1: 'mod_frozen', s2: 'pred_flee' }
- **text**: 凍てついた蝶が花畑で逃げていく。飛んだ跡に霜が降りる。逃げた先の花畑が凍った。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 逃げていく
- **ID**: r04_clear_flee
- **conditions**: { s1: 'mod_clear', s2: 'pred_flee' }
- **text**: 透き通った蝶が花畑で逃げていく。透明な蝶が景色に溶けて消えた。最初からいなかったように見える。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 呪われた × 逃げていく
- **ID**: r04_cursed_flee
- **conditions**: { s1: 'mod_cursed', s2: 'pred_flee' }
- **text**: 呪われた蝶が花畑で逃げていく。追いかけたくなる。足が勝手に動く。花畑の奥で道を見失った。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 眠い × 逃げていく
- **ID**: r04_sleepy_flee
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_flee' }
- **text**: 眠い蝶が花畑で逃げていく。ふらふらと。すぐに花の上に止まって眠ってしまった。逃げ切れていない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 見つめている (pred_gaze)

### 小さな × 見つめている
- **ID**: r04_small_gaze
- **conditions**: { s1: 'mod_small', s2: 'pred_gaze' }
- **text**: 小さな蝶が花畑で見つめている。花びらほどの蝶がじっとこちらを見ている。視線が痒い。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 見つめている
- **ID**: r04_gentle_gaze
- **conditions**: { s1: 'mod_gentle', s2: 'pred_gaze' }
- **text**: 優しい蝶が花畑で見つめている。指に止まって、じっとこちらを見ている。温かい視線。見守られている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 見つめている
- **ID**: r04_fire_gaze
- **conditions**: { s1: 'mod_fire', s2: 'pred_gaze' }
- **text**: 燃え盛る蝶が花畑で見つめている。炎の視線が肌を焦がすようだ。目が合ったまま動けない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 見つめている
- **ID**: r04_hard_gaze
- **conditions**: { s1: 'mod_hard', s2: 'pred_gaze' }
- **text**: 堅い蝶が花畑で見つめている。金属の蝶の複眼が光っている。視線が外れない。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 見つめている
- **ID**: r04_sharp_gaze
- **conditions**: { s1: 'mod_sharp', s2: 'pred_gaze' }
- **text**: 鋭い蝶が花畑で見つめている。狙いすました軌道で旋回している。獲物を見定めるような動き。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 見つめている
- **ID**: r04_broken_gaze
- **conditions**: { s1: 'mod_broken', s2: 'pred_gaze' }
- **text**: 壊れた蝶が花畑で見つめている。片羽の蝶が花の上からじっとこちらを見ている。飛べないから見ているのだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 見つめている
- **ID**: r04_mighty_gaze
- **conditions**: { s1: 'mod_mighty', s2: 'pred_gaze' }
- **text**: 屈強な蝶が花畑で見つめている。大きな蝶の存在感のある視線。花畑の番人のようだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 見つめている
- **ID**: r04_frozen_gaze
- **conditions**: { s1: 'mod_frozen', s2: 'pred_gaze' }
- **text**: 凍てついた蝶が花畑で見つめている。凍った複眼がこちらを映している。寒気がする。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 透き通った × 見つめている
- **ID**: r04_clear_gaze
- **conditions**: { s1: 'mod_clear', s2: 'pred_gaze' }
- **text**: 透き通った蝶が花畑で見つめている。透明な蝶の視線を感じるが、姿が見えない。花畑のどこかから見られている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 見つめている
- **ID**: r04_cursed_gaze
- **conditions**: { s1: 'mod_cursed', s2: 'pred_gaze' }
- **text**: 呪われた蝶が花畑で見つめている。不吉な視線。目を逸らせない。蝶が飛び去るまで動けなかった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 見つめている
- **ID**: r04_sleepy_gaze
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_gaze' }
- **text**: 眠い蝶が花畑で見つめている。半分閉じた複眼でぼんやりとこちらを見ている。すぐに目を閉じた。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 待っている (pred_wait)

### 小さな × 待っている
- **ID**: r04_small_wait
- **conditions**: { s1: 'mod_small', s2: 'pred_wait' }
- **text**: 小さな蝶が花畑で待っている。花の上でじっとしている。何を待っているのだろう。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 優しい × 待っている
- **ID**: r04_gentle_wait
- **conditions**: { s1: 'mod_gentle', s2: 'pred_wait' }
- **text**: 優しい蝶が花畑で待っている。旅人を待っていたようだ。指に止まって案内してくれた。花畑の奥に泉があった。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 待っている
- **ID**: r04_fire_wait
- **conditions**: { s1: 'mod_fire', s2: 'pred_wait' }
- **text**: 燃え盛る蝶が花畑で待っている。炎の蝶が花の上で待ち構えている。近づくと花ごと燃え上がった。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 待っている
- **ID**: r04_hard_wait
- **conditions**: { s1: 'mod_hard', s2: 'pred_wait' }
- **text**: 堅い蝶が花畑で待っている。金属の蝶が微動だにせず花の上にいる。置物のようだ。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 鋭い × 待っている
- **ID**: r04_sharp_wait
- **conditions**: { s1: 'mod_sharp', s2: 'pred_wait' }
- **text**: 鋭い蝶が花畑で待っている。刃の羽の蝶が獲物を待ち構えている。花に触ろうとした手を引っ込めた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 待っている
- **ID**: r04_broken_wait
- **conditions**: { s1: 'mod_broken', s2: 'pred_wait' }
- **text**: 壊れた蝶が花畑で待っている。片羽の蝶が花の上で動けない。飛べるようになるのを待っているのだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 待っている
- **ID**: r04_mighty_wait
- **conditions**: { s1: 'mod_mighty', s2: 'pred_wait' }
- **text**: 屈強な蝶が花畑で待っている。花畑の門番のように構えている。通るには蝶の許可がいるらしい。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 待っている
- **ID**: r04_frozen_wait
- **conditions**: { s1: 'mod_frozen', s2: 'pred_wait' }
- **text**: 凍てついた蝶が花畑で待っている。霜の蝶が花の上で凍りついている。春を待っているのだろう。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 待っている
- **ID**: r04_clear_wait
- **conditions**: { s1: 'mod_clear', s2: 'pred_wait' }
- **text**: 透き通った蝶が花畑で待っている。見えない蝶。花だけがそっと揺れている。何かを待っている気配がある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 待っている
- **ID**: r04_cursed_wait
- **conditions**: { s1: 'mod_cursed', s2: 'pred_wait' }
- **text**: 呪われた蝶が花畑で待っている。待ち伏せだ。近づくと羽の模様に吸い込まれそうになった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 待っている
- **ID**: r04_sleepy_wait
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_wait' }
- **text**: 眠い蝶が花畑で待っている。待っているというより、眠くて動けないだけだ。一緒に休んだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 囁いている (pred_whisper)

### 小さな × 囁いている
- **ID**: r04_small_whisper
- **conditions**: { s1: 'mod_small', s2: 'pred_whisper' }
- **text**: 小さな蝶が花畑で囁いている。かすかな羽音が言葉に聞こえる。聞き取れない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 囁いている
- **ID**: r04_gentle_whisper
- **conditions**: { s1: 'mod_gentle', s2: 'pred_whisper' }
- **text**: 優しい蝶が花畑で囁いている。耳元に止まって何かを伝えている。花の蜜の在処を教えてくれた。甘い。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '花蜜の瓶', description: '蝶が教えてくれた蜜。とろりと甘い', sellPrice: 8 }

### 燃え盛る × 囁いている
- **ID**: r04_fire_whisper
- **conditions**: { s1: 'mod_fire', s2: 'pred_whisper' }
- **text**: 燃え盛る蝶が花畑で囁いている。炎の蝶の囁きが耳を焼く。聞き取れたが、忘れたほうがいい言葉だった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 囁いている
- **ID**: r04_hard_whisper
- **conditions**: { s1: 'mod_hard', s2: 'pred_whisper' }
- **text**: 堅い蝶が花畑で囁いている。金属の羽が擦れる音が言葉のように聞こえる。同じことを繰り返している。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 鋭い × 囁いている
- **ID**: r04_sharp_whisper
- **conditions**: { s1: 'mod_sharp', s2: 'pred_whisper' }
- **text**: 鋭い蝶が花畑で囁いている。刃のような言葉。花畑の毒草の場所を教えている。親切なのか脅しなのか。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 壊れた × 囁いている
- **ID**: r04_broken_whisper
- **conditions**: { s1: 'mod_broken', s2: 'pred_whisper' }
- **text**: 壊れた蝶が花畑で囁いている。途切れ途切れの言葉。何を伝えたいのかわからない。風が続きをさらっていった。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 囁いている
- **ID**: r04_mighty_whisper
- **conditions**: { s1: 'mod_mighty', s2: 'pred_whisper' }
- **text**: 屈強な蝶が花畑で囁いている。囁きなのに声量がある。花畑全体に響いている。内緒話が苦手らしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 凍てついた × 囁いている
- **ID**: r04_frozen_whisper
- **conditions**: { s1: 'mod_frozen', s2: 'pred_whisper' }
- **text**: 凍てついた蝶が花畑で囁いている。冷たい声。聴いていると体が冷えてくる。花も霜を被った。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 囁いている
- **ID**: r04_clear_whisper
- **conditions**: { s1: 'mod_clear', s2: 'pred_whisper' }
- **text**: 透き通った蝶が花畑で囁いている。声だけが聞こえる。姿は見えない。花の名前を一つずつ教えてくれた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 囁いている
- **ID**: r04_cursed_whisper
- **conditions**: { s1: 'mod_cursed', s2: 'pred_whisper' }
- **text**: 呪われた蝶が花畑で囁いている。聞いてはいけない声。頭から離れない。花畑を出ても耳の奥に残っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 囁いている
- **ID**: r04_sleepy_whisper
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_whisper' }
- **text**: 眠い蝶が花畑で囁いている。寝言のような囁き。聞いていると眠くなる。花畑で一眠りした。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 110 |
| defaultOutcome | 格歪み77パターン (damage: 4, quill: 0) |
| rewardItem数 | 17 |
| reward率 | 15.5% |
| damage平均 | 0.8 |
| quill平均 | 4.3 |
| damage=0の割合 | 49.1% |
| damage≥4の割合 | 0.0% |
| quill≥6の割合 | 10.9% |
