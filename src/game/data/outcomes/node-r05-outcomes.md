# ノードR05「星空の丘」Outcome一覧

- **文構成**: [mod][subj]が 星空に 輝いている
- **可変スロット**: mod + subj
- **固定**: 目的語「星空」(に格) + 述語「輝いている」
- **ノードの文脈**: 丘の上。星空に何かが輝いている。旅の疲れを癒す場所
- **nodeType**: rest
- **格歪みなし**（「輝いている」はに格自動詞）
- **全187パターン**: 11 mod × 17 subj
- **初期値**: 小さな炎（damage: -1、HP回復）

---

## 子猫

### 小さな × 子猫
- **ID**: r05_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 小さな子猫が星空に輝いている。親指ほどの子猫が丘の上で星明かりに照らされている。目が星のように光る。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 子猫
- **ID**: r05_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が星空に輝いている。人懐っこい猫の毛並みが星明かりで銀色に光っている。膝に乗ってきた。温かい。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: r05_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 燃え盛る子猫が星空に輝いている。炎をまとった猫が星空と競うように光っている。丘が昼のように明るい。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 子猫
- **ID**: r05_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 堅い子猫が星空に輝いている。陶器の招き猫が月光で白く光っている。目だけがこちらを追っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 子猫
- **ID**: r05_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 鋭い子猫が星空に輝いている。硝子の爪が星明かりを反射して光っている。美しいが近づけない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 壊れた × 子猫
- **ID**: r05_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: 壊れた子猫が星空に輝いている。ぬいぐるみだ。綿が星明かりで白く光っている。誰かが丘に忘れたらしい。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '星屑の綿', description: '星明かりを吸った綿。暗闇でほんのり光る', sellPrice: 5 }

### 屈強な × 子猫
- **ID**: r05_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 屈強な子猫が星空に輝いている。虎の体格の子猫が丘の頂上に立っている。月を背に受けて影が大きい。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 子猫
- **ID**: r05_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 凍てついた子猫が星空に輝いている。氷の猫が星明かりで青白く光っている。寒いが美しい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 子猫
- **ID**: r05_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 透き通った子猫が星空に輝いている。硝子の猫の中に星が映っている。猫ごと星座になったようだ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '猫の星座', description: '硝子猫に閉じ込められた星の光。回すと星が動く', sellPrice: 15 }

### 呪われた × 子猫
- **ID**: r05_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が星空に輝いている。拾い上げたら降ろせない。星空を見上げながら猫を抱いていた。悪くはない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 眠い × 子猫
- **ID**: r05_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が星空に輝いている。丘の草の上で丸くなっている。星明かりに照らされた寝顔が穏やかだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: r05_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 小さな蛇が星空に輝いている。指ほどの蛇が星明かりの下で鱗を光らせている。天の川のようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蛇
- **ID**: r05_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 優しい蛇が星空に輝いている。腕に巻きついてきた。蛇の体温と星空の冷気。ちょうどいい温かさだ。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 蛇
- **ID**: r05_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 燃え盛る蛇が星空に輝いている。炎の軌跡を残して丘を這っている。流れ星のように見える。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 蛇
- **ID**: r05_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 堅い蛇が星空に輝いている。鉄の鱗が月光で銀に光っている。鎖が蛇の形をしたように見える。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 蛇
- **ID**: r05_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 鋭い蛇が星空に輝いている。牙が星明かりを反射している。丘の上で睨まれている。星を見る余裕がない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 蛇
- **ID**: r05_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 壊れた蛇が星空に輝いている。脱皮の途中で力尽きた蛇。古い皮が月光で銀色に光っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 蛇
- **ID**: r05_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 屈強な蛇が星空に輝いている。大蛇が丘にとぐろを巻いている。体が星空を遮って、蛇の形の暗闇ができた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 蛇
- **ID**: r05_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 凍てついた蛇が星空に輝いている。霜に覆われた蛇が月光で白銀に輝いている。冬の星座のようだ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 蛇
- **ID**: r05_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が星空に輝いている。透明な蛇の中に星が映っている。体内に天の川が流れているように見える。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '蛇腹の星図', description: '透き通った蛇の脱皮殻。星の配置が透けて見える', sellPrice: 15 }

### 呪われた × 蛇
- **ID**: r05_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が星空に輝いている。脱皮するたびに大きくなる蛇。星空の下で膨らみ続けている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: r05_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が星空に輝いている。とぐろを巻いて星を見上げながら眠っている。踏まなければ安全だ。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: r05_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 小さな竜が星空に輝いている。手のひらサイズの竜が翼を広げて星に向かって飛んでいる。雀ほどの翼で星を追う。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '星追いの竜鱗', description: '星を追った小竜が落とした鱗。暗闇で光る', sellPrice: 10 }

### 優しい × 竜
- **ID**: r05_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 優しい竜が星空に輝いている。穏やかな老竜が翼を広げて星空に浮かんでいる。翼の下に入ると温かい。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 竜
- **ID**: r05_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 燃え盛る竜が星空に輝いている。炎に包まれた竜が星空を焦がしている。星が見えないほど明るい。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 竜
- **ID**: r05_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 堅い竜が星空に輝いている。城壁のような鱗が月光を反射している。丘に山がもう一つあるようだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 竜
- **ID**: r05_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 鋭い竜が星空に輝いている。金色の目が星のように光っている。こちらを見ている。品定めされている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 竜
- **ID**: r05_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 壊れた竜が星空に輝いている。折れた翼を広げて星空を仰いでいる。もう飛べない竜が、空を見上げている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '星を見た竜の涙', description: '壊れた竜が流した涙。月光で銀色に光る', sellPrice: 12 }

### 屈強な × 竜
- **ID**: r05_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 屈強な竜が星空に輝いている。翼を広げると星空が覆い隠される。竜の体に星が映って、竜が宇宙になった。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 竜
- **ID**: r05_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 凍てついた竜が星空に輝いている。白い竜の吐息が星空に霜を散らしている。丘が凍りついた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 竜
- **ID**: r05_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 透き通った竜が星空に輝いている。水晶の竜の中に星空が映っている。竜を通して見る星は歪んで、新しい星座に見える。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '水晶竜の星座', description: '竜の体を通して見た新しい星座の記録。紙に写した', sellPrice: 20 }

### 呪われた × 竜
- **ID**: r05_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が星空に輝いている。暴走した竜の目が赤く光っている。星空が血の色に染まった。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 眠い × 竜
- **ID**: r05_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 眠い竜が星空に輝いている。丘の上でいびきをかいて眠っている。地鳴りのようだが、起こさなければ安全だ。星は綺麗だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: r05_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 小さな蝶が星空に輝いている。星の光を鱗粉に受けて、蝶自体が星のようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: r05_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が星空に輝いている。指に止まった蝶の羽が星明かりで模様を変える。笑顔の模様が見えた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 蝶
- **ID**: r05_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 燃え盛る蝶が星空に輝いている。炎の羽が星空に舞い上がる。流れ星かと思ったら蝶だった。火の粉が降ってくる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 蝶
- **ID**: r05_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 堅い蝶が星空に輝いている。金属の羽が月光で銀色に光っている。飛ぶたびに金属音が星空に響く。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 蝶
- **ID**: r05_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 鋭い蝶が星空に輝いている。刃の羽が星明かりで鋭く光る。美しいが、近くを飛ぶと頬が切れそうだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 壊れた × 蝶
- **ID**: r05_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 壊れた蝶が星空に輝いている。片羽の蝶が螺旋を描いて星空に向かっている。最後の飛行のようだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '星降る鱗粉', description: '壊れた蝶が星空に散らした鱗粉。瓶に入れると光る', sellPrice: 10 }

### 屈強な × 蝶
- **ID**: r05_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 屈強な蝶が星空に輝いている。力強い羽ばたきで星空の風が変わった。丘の上に強い風が吹く。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 蝶
- **ID**: r05_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 凍てついた蝶が星空に輝いている。霜の結晶の羽が星光でプリズムのように輝く。冬の星空にふさわしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 蝶
- **ID**: r05_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透き通った蝶が星空に輝いている。透明な羽に星が映り込んで、蝶が星空を纏っている。どこまでが蝶でどこからが空か。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '星纏いの羽片', description: '透き通った蝶の羽の欠片。中に星空が映り続ける', sellPrice: 15 }

### 呪われた × 蝶
- **ID**: r05_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が星空に輝いている。追いかけたくなる。丘の崖まで誘い出された。足元に気をつけた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 眠い × 蝶
- **ID**: r05_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が星空に輝いている。草の上で羽を閉じて眠っている。星明かりが蝶の夜灯になっている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: r05_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 小さな風が星空に輝いている。そよ風が星の光を運んでくる。草がきらきらと揺れた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 風
- **ID**: r05_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 優しい風が星空に輝いている。温かい追い風が星空の下を吹いている。花の匂いがする。旅の疲れが遠のく。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 風
- **ID**: r05_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 燃え盛る風が星空に輝いている。熱風が星空を歪ませている。丘の草が焦げ始めた。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 堅い × 風
- **ID**: r05_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 堅い風が星空に輝いている。一方向に吹き続ける風。雲が一切なく、星がくっきり見える。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 風
- **ID**: r05_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 鋭い風が星空に輝いている。真空の刃のような風。丘の上は寒くて肌が痛い。星はよく見える。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 風
- **ID**: r05_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 壊れた風が星空に輝いている。乱気流が星明かりを散らしている。星が瞬いているように見えるが、風のせいだ。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 風
- **ID**: r05_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 屈強な風が星空に輝いている。嵐のような風が丘を吹き抜けていく。立っていられない。星だけは動じない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 風
- **ID**: r05_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍てついた風が星空に輝いている。吹雪が星空に舞っている。息が凍る。だが雪の隙間から見える星は美しい。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 風
- **ID**: r05_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 透き通った風が星空に輝いている。空気が澄み渡り、見たことのないほど多くの星が見える。深呼吸すると体が軽くなった。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '星空の息', description: '澄んだ風を瓶に閉じ込めた。開けると星の匂いがする', sellPrice: 10 }

### 呪われた × 風
- **ID**: r05_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が星空に輝いている。帰り道を忘れさせる風。丘から降りられなくなった。星だけが道標だ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 風
- **ID**: r05_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 眠い風が星空に輝いている。生温い夜風が顔を撫でる。星を数えているうちに眠ってしまった。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 炎

### 小さな × 炎（初期値）
- **ID**: r05_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 小さな炎が星空に輝いている。蝋燭ほどの火が丘の上で揺れている。星と火と、二つの光に挟まれて温かい。旅の疲れが癒えた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: r05_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 優しい炎が星空に輝いている。暖炉のような温もりの火が丘に灯っている。星空と優しい火で最高の休息だ。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 炎
- **ID**: r05_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 燃え盛る炎が星空に輝いている。大火が星空を塗り潰している。星が見えない。丘が燃えている。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 炎
- **ID**: r05_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 堅い炎が星空に輝いている。消えない炎が丘の上で揺らがずに燃えている。風にも負けない。道標になる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 炎
- **ID**: r05_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が星空に輝いている。一点集中の火が星に向かって伸びている。光の柱のようだ。近づくと熱い。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 炎
- **ID**: r05_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 壊れた炎が星空に輝いている。緑や紫に明滅する炎。温かくないが、星空と合わさって幻想的だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 炎
- **ID**: r05_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 屈強な炎が星空に輝いている。火柱が天を衝く。星空に穴が開いたように明るい。暑くて近寄れない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 凍てついた × 炎
- **ID**: r05_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 凍てついた炎が星空に輝いている。青白い炎が霜を纏って星空の下で燃えている。冷たい温もりで疲れが和らぐ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '星霜の火', description: '凍った炎の欠片。星明かりの下でだけ温かく光る', sellPrice: 12 }

### 透き通った × 炎
- **ID**: r05_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 透き通った炎が星空に輝いている。見えない炎。空気の揺らぎだけが星の光を歪めている。体がほんのり温かい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 炎
- **ID**: r05_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が星空に輝いている。炎の中に燃えた景色の幻が見える。星空まで燃えているように見える。目が離せない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 炎
- **ID**: r05_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 眠い炎が星空に輝いている。熾火が赤く明滅している。星と熾火の点滅に誘われて、深い眠りに落ちた。
- **damage**: -1
- **quill**: 4
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: r05_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷が星空に輝いている。掌の氷に星が映っている。溶ける前に握りしめた。冷たくて目が覚める。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 氷
- **ID**: r05_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 優しい氷が星空に輝いている。額に当てると星を見ながら熱が引いていく。冷たくて気持ちいい。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 氷
- **ID**: r05_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 燃え盛る氷が星空に輝いている。炎と氷が同時に星空を照らしている。丘の上が蒸気で覆われた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 氷
- **ID**: r05_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 堅い氷が星空に輝いている。万年氷が丘の上で月光を反射している。鏡のように星が二重に見える。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 氷
- **ID**: r05_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 鋭い氷が星空に輝いている。氷柱が星明かりを反射して刃のように光っている。足元に気をつけた。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 壊れた × 氷
- **ID**: r05_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: 壊れた氷が星空に輝いている。ひび割れた氷の破片が星明かりで宝石のように散らばっている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 氷
- **ID**: r05_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 屈強な氷が星空に輝いている。山のような氷塊が丘を占領している。月光で白銀に輝き、寒くて近づけない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 氷
- **ID**: r05_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 凍てついた氷が星空に輝いている。絶対零度に近い氷。空気が結晶化して降っている。星空が凍ったようだ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 氷
- **ID**: r05_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透き通った氷が星空に輝いている。完全に透明な氷がレンズになって、星を大きく映している。天体観測だ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '星のレンズ', description: '星を拡大する透明な氷。溶けても効果が残る不思議な欠片', sellPrice: 12 }

### 呪われた × 氷
- **ID**: r05_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 呪われた氷が星空に輝いている。溶けない氷が丘に永遠の冬を広げている。星は綺麗だが、足が凍える。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 氷
- **ID**: r05_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: 眠い氷が星空に輝いている。ゆっくり溶ける音が子守唄のようだ。星を見ながら眠りに落ちた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 影

### 小さな × 影
- **ID**: r05_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が星空に輝いている。丘の上に小さな黒い染み。月明かりで影が星の形をしている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 影
- **ID**: r05_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 優しい影が星空に輝いている。誰かが隣にいるかのような影。一緒に星を見上げた。孤独が和らぐ。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 影
- **ID**: r05_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 燃え盛る影が星空に輝いている。黒い炎で燃える影が星空を背に立っている。星が影越しに赤く揺れる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 影
- **ID**: r05_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 堅い影が星空に輝いている。地面に張りついた影が月光で黒く光っている。踏むと硬い。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 影
- **ID**: r05_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 鋭い影が星空に輝いている。月明かりで長く鋭い影が伸びている。何を指しているのか。星の方角だった。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 壊れた × 影
- **ID**: r05_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 壊れた影が星空に輝いている。めくれ上がった影が星空に向かって伸びている。影が星に手を伸ばしている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 影
- **ID**: r05_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 屈強な影が星空に輝いている。巨大な影が丘全体を覆っている。星明かりが遮られて暗闇に沈んだ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 影
- **ID**: r05_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍てついた影が星空に輝いている。凍りついた影が月光で黒い氷のように光っている。本体はもういない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 影
- **ID**: r05_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 透き通った影が星空に輝いている。半透明の影が星光を通している。影なのに光を遮らない。不思議だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 影
- **ID**: r05_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が星空に輝いている。自分の影が勝手に動き出した。星空に向かって手を伸ばしている。制御できない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 影
- **ID**: r05_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 眠い影が星空に輝いている。影が縮んで動かない。月が真上にあるからだ。影と一緒に休んだ。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 歌

### 小さな × 歌
- **ID**: r05_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 小さな歌が星空に輝いている。どこからか聞こえる鼻歌。星空に溶けていく旋律。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: r05_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 優しい歌が星空に輝いている。子守唄が星空から降ってくる。傷がじんわり温かくなった。体が楽になる。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '星の子守唄', description: '星空の下で聴いた旋律。口ずさむと眠くなる', sellPrice: 10 }

### 燃え盛る × 歌
- **ID**: r05_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 燃え盛る歌が星空に輝いている。戦の歌が星空に轟いている。血が騒ぐ。星まで揺れているように見える。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 歌
- **ID**: r05_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 堅い歌が星空に輝いている。止まらない旋律が夜空に響き渡っている。星の配置が変わらないように、歌も変わらない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 歌
- **ID**: r05_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 鋭い歌が星空に輝いている。金切り声のような高音が星空を切り裂く。耳が痛い。星が震えている気がする。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 歌
- **ID**: r05_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 壊れた歌が星空に輝いている。途中で止まる旋律。星空の静寂が続きを埋めている。それもまた音楽だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 歌
- **ID**: r05_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 屈強な歌が星空に輝いている。大合唱が丘を震わせている。足元が揺れる。星空まで振動している。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 歌
- **ID**: r05_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が星空に輝いている。旋律が凍って結晶になり、星と一緒に降ってくる。触れると音が弾けた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 歌
- **ID**: r05_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 透き通った歌が星空に輝いている。純粋な旋律が星空に昇っていく。聴いていると心が洗われる。疲れが遠のいた。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '星歌の結晶', description: '透き通った歌が星に触れてできた結晶。音と光が同時に出る', sellPrice: 15 }

### 呪われた × 歌
- **ID**: r05_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が星空に輝いている。頭から離れない旋律。星を見るたびにこの歌を思い出すことになる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 歌
- **ID**: r05_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 眠い歌が星空に輝いている。子守唄と星空。最強の組み合わせだ。星を数える前に眠っていた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: r05_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 小さな沈黙が星空に輝いている。ふと音が消えた。星明かりだけの世界。一瞬の完璧な静寂。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 沈黙
- **ID**: r05_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 優しい沈黙が星空に輝いている。言葉がなくても満ちている。星空と静けさだけで十分だ。深く休めた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 沈黙
- **ID**: r05_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 燃え盛る沈黙が星空に輝いている。怒りで焦げた無音。星空なのに息が詰まる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 沈黙
- **ID**: r05_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 堅い沈黙が星空に輝いている。音が吸い込まれる。自分の呼吸すら聞こえない。星だけが音のない世界で輝いている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 鋭い × 沈黙
- **ID**: r05_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 鋭い沈黙が星空に輝いている。刺すような静寂。星の光すら音を立てているような気がする。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 壊れた × 沈黙
- **ID**: r05_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 壊れた沈黙が星空に輝いている。静寂のはずなのに、どこからかノイズが混じる。星が瞬くたびに音がする気がする。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 沈黙
- **ID**: r05_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 屈強な沈黙が星空に輝いている。圧倒的な無音が丘を支配している。星空と沈黙の中に、自分だけがいる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: r05_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が星空に輝いている。冷たい静寂。息も凍る。時間が止まったように星が動かない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 沈黙
- **ID**: r05_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 透き通った沈黙が星空に輝いている。完全な静寂と完全な星空。世界が澄み切っている。体の奥まで休まった。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 呪われた × 沈黙
- **ID**: r05_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が星空に輝いている。声が出ない。星に向かって叫んでも、音が生まれない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 沈黙
- **ID**: r05_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠い沈黙が星空に輝いている。静かすぎて意識が遠のく。星を見上げたまま眠りに落ちた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 騎士

### 小さな × 騎士
- **ID**: r05_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 小さな騎士が星空に輝いている。子供の騎士が丘の上で星を指さしている。兜越しに見えているのだろうか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 騎士
- **ID**: r05_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が星空に輝いている。剣を地に刺し、星空を見上げている。隣に座れと鎧の肩を叩いた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 騎士
- **ID**: r05_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 燃え盛る騎士が星空に輝いている。鎧ごと炎に包まれた騎士。丘の上で松明のように燃えている。星空が明るい。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 騎士
- **ID**: r05_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 堅い騎士が星空に輝いている。分厚い鎧が月光で銀色に光っている。微動だにしない。星空の番人のようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 騎士
- **ID**: r05_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 鋭い騎士が星空に輝いている。冷たい目が星明かりで光っている。星空を見る余裕はないらしい。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 壊れた × 騎士
- **ID**: r05_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 壊れた騎士が星空に輝いている。へこんだ鎧で丘に座っている。折れた剣を膝に置いて、星を見上げている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '騎士の折れ剣', description: '星明かりの下で拾った折れた剣。まだ誓いが宿っている', sellPrice: 10 }

### 屈強な × 騎士
- **ID**: r05_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 屈強な騎士が星空に輝いている。巨体が丘の頂上に立っている。月を背にした影が長い。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 騎士
- **ID**: r05_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 凍てついた騎士が星空に輝いている。氷に閉じ込められた騎士が月光で白く輝いている。氷像のように美しい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 騎士
- **ID**: r05_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 透き通った騎士が星空に輝いている。影の薄い騎士。星明かりの中にかろうじて輪郭が見える。忘れ去られた騎士が星を見ている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 騎士
- **ID**: r05_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士が星空に輝いている。兜の奥の赤い目が星明かりに映えている。丘が禍々しい。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 騎士
- **ID**: r05_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が星空に輝いている。槍にもたれて舟を漕いでいる。星空の見張りだが、星を数えて眠ってしまったらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: r05_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 小さな魔女が星空に輝いている。少女の魔女が箒に乗って星空を飛んでいる。小さな影が月を横切った。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '魔女の星屑', description: '箒で飛んだ魔女が落とした星の粉。手の中で光る', sellPrice: 10 }

### 優しい × 魔女
- **ID**: r05_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 優しい魔女が星空に輝いている。星の下で薬を調合している。飲んでみろと言われた。傷が楽になった。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 魔女
- **ID**: r05_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 燃え盛る魔女が星空に輝いている。炎の魔法で星空を照らしている。星と炎が入り混じって境目がわからない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 魔女
- **ID**: r05_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 堅い魔女が星空に輝いている。頑固な老魔女が丘の上で微動だにしない。星の動きを観測しているらしい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 魔女
- **ID**: r05_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鋭い魔女が星空に輝いている。鉤鼻の魔女が星で占っている。こちらの運命を読んでいるようだ。目が合った。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 壊れた × 魔女
- **ID**: r05_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 壊れた魔女が星空に輝いている。魔力が暴走した魔女。星空の下で呪文が途切れ途切れに響いている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 屈強な × 魔女
- **ID**: r05_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 屈強な魔女が星空に輝いている。太い腕を天にかざして星を動かそうとしている。力ずくの天文学だ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 魔女
- **ID**: r05_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 凍てついた魔女が星空に輝いている。氷の魔女が丘を凍らせている。霜が星明かりで宝石のように光る。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 魔女
- **ID**: r05_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 透き通った魔女が星空に輝いている。老いて透けた魔女。星空が体を通して見える。魔女自身が星座のようだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 魔女
- **ID**: r05_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪われた魔女が星空に輝いている。自分の呪いで変異した魔女。星空の下で体が歪んでいく。近づかないほうがいい。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 魔女
- **ID**: r05_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 眠い魔女が星空に輝いている。帽子を枕に星空の下で眠っている。大釜は月明かりで静かに光っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: r05_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 小さな王が星空に輝いている。子供の王が丘の上で星を見上げている。王冠が月光で小さく光る。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 王
- **ID**: r05_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 優しい王が星空に輝いている。質素な衣の王が丘の上で星を指さしている。あれが故郷の星だと教えてくれた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 王
- **ID**: r05_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 燃え盛る王が星空に輝いている。炎の冠が星空と競うように輝いている。王の怒りで丘が熱い。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 王
- **ID**: r05_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 堅い王が星空に輝いている。石の玉座を丘の上に持ってきたらしい。微動だにせず星を見ている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 王
- **ID**: r05_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鋭い王が星空に輝いている。鷹の目が星空を読んでいる。国の未来を星に問うているのだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 壊れた × 王
- **ID**: r05_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 壊れた王が星空に輝いている。歪んだ王冠の王が星を見上げている。虚ろな目に星が映っている。何を見ているのか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 王
- **ID**: r05_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 屈強な王が星空に輝いている。戦士王が月を背に立っている。影が長く伸びて道を塞いでいる。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 王
- **ID**: r05_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 凍てついた王が星空に輝いている。氷の玉座の王。周囲に霜が広がっていく。冬の王が冬の星座を見ている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 王
- **ID**: r05_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が星空に輝いている。存在が希薄な王。星空が体を通して見える。王冠だけがかすかに光っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 王
- **ID**: r05_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 呪われた王が星空に輝いている。触れたものが金になる王。丘の草が金色に変わっている。星空が金色に染まった。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '金色の星草', description: '呪われた王が触れた丘の草。金に変わっている', sellPrice: 15 }

### 眠い × 王
- **ID**: r05_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 眠い王が星空に輝いている。王冠がずれたまま丘の草の上で眠っている。星空が天蓋だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 亡霊

### 小さな × 亡霊
- **ID**: r05_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 小さな亡霊が星空に輝いている。子供の霊が丘の上で星を数えている。数え歌が聞こえる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: r05_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 優しい亡霊が星空に輝いている。穏やかな霊が星空を見上げて微笑んでいる。生前の記憶を見ているのだろう。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: r05_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 燃え盛る亡霊が星空に輝いている。火に焼かれた霊が星空の下で炎をまとっている。丘の上の鬼火だ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 亡霊
- **ID**: r05_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 堅い亡霊が星空に輝いている。何百年もこの丘に立っている霊。星の動きだけを見つめ続けている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 亡霊
- **ID**: r05_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 鋭い亡霊が星空に輝いている。罪を見透かす目が星明かりで光っている。居心地が悪い夜だ。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 亡霊
- **ID**: r05_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 壊れた亡霊が星空に輝いている。記憶を失った霊が星を見ている。何を思い出そうとしているのか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 亡霊
- **ID**: r05_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 屈強な亡霊が星空に輝いている。鎧武者の霊が丘に立っている。月光で巨体が銀色に光っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: r05_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍てついた亡霊が星空に輝いている。冷気を纏った霊。丘に霜が降りていく。寒い夜になった。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 透き通った × 亡霊
- **ID**: r05_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 透き通った亡霊が星空に輝いている。成仏しかけた霊が星光に溶けていく。最後に星空を見上げて消えた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '亡霊の星光', description: '亡霊が消えた場所に残った光。瓶に入れると星のように瞬く', sellPrice: 10 }

### 呪われた × 亡霊
- **ID**: r05_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪われた亡霊が星空に輝いている。苦しみの表情で星空を仰いでいる。呪いが解ける星がどこかにあるのか。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 亡霊
- **ID**: r05_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: 眠い亡霊が星空に輝いている。うつらうつらしている霊。存在感が星明かりで揺れている。害はない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 鏡

### 小さな × 鏡
- **ID**: r05_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 小さな鏡が星空に輝いている。手鏡が丘に落ちている。覗くと星空が映っていた。手の中に星がある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 鏡
- **ID**: r05_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が星空に輝いている。覗くと少しだけ元気な自分が映る。星空の下で勇気をもらった。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: r05_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 燃え盛る鏡が星空に輝いている。鏡面に炎が映っている。星空を映すはずが、鏡の中だけが燃えている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 鏡
- **ID**: r05_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 堅い鏡が星空に輝いている。傷のつかない鏡面が星空を完璧に映している。地上にもう一つの星空がある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 鏡
- **ID**: r05_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 鋭い鏡が星空に輝いている。割れた鏡の破片が星明かりを反射して散弾のように光っている。足元に気をつけた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 鏡
- **ID**: r05_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: 壊れた鏡が星空に輝いている。ひび割れた鏡が星空を何十にも分割して映している。万華鏡の星空だ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '万華鏡の星', description: '壊れた鏡の破片。覗くと星空が万華鏡になる', sellPrice: 12 }

### 屈強な × 鏡
- **ID**: r05_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 屈強な鏡が星空に輝いている。巨大な姿見が丘に立っている。鏡の中の星空と本物の星空が向かい合って、無限に続く。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 凍てついた × 鏡
- **ID**: r05_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍てついた鏡が星空に輝いている。霜に覆われた鏡面がかろうじて星を映している。触ると手が凍りつきそうだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 透き通った × 鏡
- **ID**: r05_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透き通った鏡が星空に輝いている。透明な鏡。覗くと鏡の向こうにも星空が広がっている。どちらが本物かわからない。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '鏡裏の星', description: '鏡の向こうの星空から持ち帰った光。見たことのない星だ', sellPrice: 15 }

### 呪われた × 鏡
- **ID**: r05_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が星空に輝いている。覗いたら自分の顔が残った。鏡の中の自分が星空に手を伸ばしている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 鏡
- **ID**: r05_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 眠い鏡が星空に輝いている。鏡面が曇って、星空がぼんやり映っている。覗くと自分の寝顔が見えた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 人形

### 小さな × 人形
- **ID**: r05_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 小さな人形が星空に輝いている。指人形が丘の草の上に立っている。星明かりで小さな影ができた。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 優しい × 人形
- **ID**: r05_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 優しい人形が星空に輝いている。笑顔の縫いぐるみが星空の下にぽつんと座っている。抱くと温かい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 燃え盛る × 人形
- **ID**: r05_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃え盛る人形が星空に輝いている。藁人形が丘の上で燃えている。星空に煙が立ちのぼる。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 堅い × 人形
- **ID**: r05_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 堅い人形が星空に輝いている。木彫りの人形が月光で白く光っている。表情がない。見上げているのか、何も見ていないのか。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 鋭い × 人形
- **ID**: r05_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 鋭い人形が星空に輝いている。関節が刃の人形が月光で不気味に光っている。糸が見えないのに動いた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 人形
- **ID**: r05_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 壊れた人形が星空に輝いている。首がもげかけた人形が丘に転がっている。残った目に星が映っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 人形
- **ID**: r05_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 屈強な人形が星空に輝いている。等身大の木彫り人形が丘に立っている。月を背にした影が人間に見える。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 人形
- **ID**: r05_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 凍てついた人形が星空に輝いている。氷の人形が星明かりで透き通って光る。溶けたら二度と見られない美しさだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 透き通った × 人形
- **ID**: r05_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 透き通った人形が星空に輝いている。硝子の人形に星空が映り込んでいる。人形の中に宇宙がある。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '星入り硝子人形', description: '中に星空が閉じ込められた人形。暗闇で輝く', sellPrice: 15 }

### 呪われた × 人形
- **ID**: r05_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が星空に輝いている。丘に置いて去ったのに、振り返ると足元にある。星空の下で目が光った。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 人形
- **ID**: r05_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 眠い人形が星空に輝いている。目を閉じた人形が草の上に横たわっている。持つと眠くなる。星空の下で一緒に眠った。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: r05_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 小さな雨が星空に輝いている。霧雨が星明かりを含んで光の粒になっている。宝石が降っているようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 雨
- **ID**: r05_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 優しい雨が星空に輝いている。温かい慈雨が星明かりの中を降っている。雨粒が星の光を映して、光の糸のようだ。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 雨
- **ID**: r05_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 燃え盛る雨が星空に輝いている。火の雨が星空から降り注いでいる。流星群のようだが、丘が焦げる。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 雨
- **ID**: r05_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 堅い雨が星空に輝いている。雹が星空から降ってくる。氷の粒が月光で光る。頭を打たれた。星を見る余裕がない。
- **damage**: 2
- **quill**: 2
- **reward**: なし

### 鋭い × 雨
- **ID**: r05_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 鋭い雨が星空に輝いている。針のような雨が星明かりに光って銀の線に見える。美しいが痛い。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 雨
- **ID**: r05_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 壊れた雨が星空に輝いている。途切れ途切れの雨。降ったり止んだり。星が見えたり隠れたり。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 屈強な × 雨
- **ID**: r05_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 屈強な雨が星空に輝いている。豪雨が星空を覆い隠した。丘が川になった。星は見えない。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 雨
- **ID**: r05_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍てついた雨が星空に輝いている。凍雨が降って丘を氷の鏡にした。その鏡に星空が映っている。足元に宇宙がある。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '氷鏡の星', description: '凍雨が作った氷片。中に星空が映り続けている', sellPrice: 12 }

### 透き通った × 雨
- **ID**: r05_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 透き通った雨が星空に輝いている。澄んだ雨が星の光を含んで降っている。浴びると体が清まった。星が近くなった。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 呪われた × 雨
- **ID**: r05_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が星空に輝いている。浴びると動けなくなる雨。丘の上で立ち尽くした。星空だけが見える。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 雨
- **ID**: r05_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 眠い雨が星空に輝いている。しとしとと降る雨音と星明かり。最高の寝床だ。丘の上でぐっすり眠った。
- **damage**: -1
- **quill**: 5
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 32 |
| reward率 | 17.1% |
| damage平均 | 1.2 |
| quill平均 | 4.3 |
| damage=0の割合 | 33.7% |
| damage≥4の割合 | 5.3% |
| quill≥6の割合 | 14.4% |
