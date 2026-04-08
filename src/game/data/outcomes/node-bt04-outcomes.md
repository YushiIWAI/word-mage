# ノードBT04「影の群れ」Outcome一覧

- **敵名**: 影の群れ（群れて襲いかかる影。HPは低いが3パターンで揺さぶる）
- **敵HP**: 10
- **勝利報酬**: 6Q

## 文構成
- **自文**: [mod*][subj*]が 影を 払っている （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,4...): [mod*]影が 魔女に 絡みついている （11パターン）
- **敵文②** (ターン2,5...): [mod*]影が 魔女を 見つめている （11パターン）
- **敵文③** (ターン3,6...): [mod*]影が 足元に 囁いている （11パターン）

## defaultOutcome

### 自文default
- **text**: 書き換えが影に届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default
- **text**: 小さな影が足首に絡みつく。冷たい。動きが鈍った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 敵文② default
- **text**: 呪われた影の目が光る。見つめられると体が冷えていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 敵文③ default
- **text**: 凍てついた影が足元で囁く。何を言っているかわからないが、背筋が凍る。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）

## 子猫

### 小さな × 子猫
- **ID**: bt04_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が影を引っかく。爪が影をすり抜けた。影には実体がない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: bt04_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が影の上で丸くなる。影が子猫の温もりに怯えて薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 子猫
- **ID**: bt04_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が走り回る。光が広がり、影が焼け縮んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 子猫
- **ID**: bt04_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が影の上に落ちる。影が潰れて薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 子猫
- **ID**: bt04_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が影を引き裂く。影が二つに割れ、小さくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 子猫
- **ID**: bt04_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが影の上に置かれる。影は気にせず這い出した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: bt04_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような子猫が影を踏みつける。影が潰れて悲鳴のような音を立てた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 子猫
- **ID**: bt04_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が影に触れる。影が凍りついて動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 子猫
- **ID**: bt04_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が光を集める。影が薄くなったが、消えはしない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 子猫
- **ID**: bt04_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪いの猫が影の群れにまとわりつく。影が猫を追いかけ始め、魔女から離れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 子猫
- **ID**: bt04_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: あくびする子猫。影は子猫に興味がない。子猫も影に興味がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: bt04_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が影に噛みつく。影を噛めるのか。噛めた。影が少し縮んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: bt04_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が影の上を這う。蛇の体温に影が後退した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 蛇
- **ID**: bt04_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の蛇が影の群れを這い回る。通った跡の影が消えた。光の軌跡だ。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 影の灰(5)

### 堅い × 蛇
- **ID**: bt04_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が影を地面に押さえつける。影が動けない。重さが効いている。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 蛇
- **ID**: bt04_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が影に突き立てられる。影に毒が効くのか。効いた。影が変色して縮む。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 蛇
- **ID**: bt04_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮途中の蛇が影に向かう。古い皮に足を取られて進めない。影は見向きもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: bt04_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が影の群れを丸呑みした。腹の中で影が暴れているが、出てこない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 蛇
- **ID**: bt04_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜の蛇が影を凍らせる。凍った影は動けない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蛇
- **ID**: bt04_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が影の中を泳ぐ。内側から食い破っている。影が痩せた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 蛇
- **ID**: bt04_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪いの蛇が影に巻きつく。脱皮するたびに影が剥がれていく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 蛇
- **ID**: bt04_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が影の上でとぐろを巻いた。影は蛇の下で動けないが、害もない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: bt04_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が小さな火を噴く。影が一瞬だけ後退した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: bt04_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな竜が翼を広げて影を遮る。竜の影が影の群れを押し返した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 竜
- **ID**: bt04_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が息を吐く。光が辺り一面を照らし、影が蒸発した。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 竜
- **ID**: bt04_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような竜が影を踏み潰す。影が薄い墨のように広がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 竜
- **ID**: bt04_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 金色の目が影の核を見抜く。爪が正確に影の中心を引き裂いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 竜
- **ID**: bt04_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が影を踏む。体重だけで影が潰れた。火は要らない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: bt04_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が前足を振り下ろす。衝撃波で影が四散した。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 竜
- **ID**: bt04_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息で影が凍りつく。砕ける。影は寒さに弱い。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 竜
- **ID**: bt04_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が光を集めて放つ。影が光に焼かれて薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 呪われた × 竜
- **ID**: bt04_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜が辺りを蹂躙する。影も巻き添えだ。光も闇も関係ない暴力。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 竜
- **ID**: bt04_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りする竜のいびきが影を震わせる。びりびり揺れているが、消えはしない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: bt04_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が影の上を舞う。影は蝶に気を取られたが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: bt04_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が影に止まる。羽の模様の笑顔に、影が少しだけ緩んだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: bt04_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の蝶が影の間を飛び回る。火の粉が散り、影が焼けて縮んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 蝶
- **ID**: bt04_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が影を叩く。かん。影に音は効かないが、振動で形が崩れた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: bt04_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽を持つ蝶が影を切る。影が二つに割れ、小さくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 蝶
- **ID**: bt04_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が影の上に落ちる。影は無視して通り過ぎた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: bt04_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 巨蝶の羽ばたきが風を起こす。影が吹き散らされた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: bt04_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が影に触れる。影が凍りつき、ぱきぱきと砕けた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蝶
- **ID**: bt04_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が光を集めて虹を作る。影が虹の光に怯えて後退した。
- **playerDamage**: 0
- **enemyDamage**: 1
- **reward**: 虹の鱗粉(6)

### 呪われた × 蝶
- **ID**: bt04_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶が影を惑わす。影が道を見失い、同士討ちを始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 蝶
- **ID**: bt04_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が影の上で羽を閉じた。影は蝶を飲み込もうとしたが、眠くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 風

### 小さな × 風
- **ID**: bt04_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が影を揺らす。波打っているが、消えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: bt04_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい風が影を撫でる。影は風には興味がない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: bt04_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が影を乾かす。影が縮み、ひび割れた。影には水分があったのか。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 風
- **ID**: bt04_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 頑固な風が影を一方向に押す。地面から剥がれかけている。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: bt04_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が影を切り裂く。影が細切れになって散った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: bt04_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 乱気流が影をかき回す。形が崩れたが、すぐに戻った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: bt04_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が影を地面から引き剥がす。宙に舞った影が散り散りになった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 風
- **ID**: bt04_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が影を凍らせる。凍った影はもう動けない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: bt04_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が影を透かす。影が薄くなるが、完全には消えない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 風
- **ID**: bt04_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 帰り道を忘れる風が吹く。影が魔女のところに戻れなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 風
- **ID**: bt04_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が影を撫でる。影の動きが鈍くなったが、眠っているのか。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: bt04_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭の火が灯る。影が光から逃げるが、小さな範囲しか照らせない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 炎
- **ID**: bt04_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉の火のような炎が揺れる。影が壁際に押しやられた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 炎
- **ID**: bt04_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が辺りを照らす。影が消し飛んだ。光の前に影は無力だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 炎
- **ID**: bt04_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が地面に灯る。影が近づけない結界のようだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 炎
- **ID**: bt04_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が影の中心を焼く。影が悲鳴のような音を立てて縮んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 炎
- **ID**: bt04_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が影に触れる。紫の光に影が怯えたが、消えはしない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 炎
- **ID**: bt04_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 火柱が天を衝く。辺り一面が真昼のように明るくなり、影が蒸発した。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 影の残滓(8)

### 凍てついた × 炎
- **ID**: bt04_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い炎が影を照らす。冷たい光に影が凍りついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 炎
- **ID**: bt04_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が影を灼く。影にとっては見えない光が一番恐ろしい。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 炎
- **ID**: bt04_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が影に燃え移る。影が炎の形を覚え、自分自身を焼き始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 炎
- **ID**: bt04_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が赤く明滅する。影が揺れるが、消えるほどの光ではない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: bt04_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷片が影に落ちる。すぐに溶けた。影は気にしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: bt04_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が影を冷やす。影の動きが少しだけ鈍った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: bt04_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が光を放つ。氷の中の炎に影が焼かれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 氷
- **ID**: bt04_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷が影を押しつぶす。影が氷の下で動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 氷
- **ID**: bt04_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱が影を貫く。地面に縫いとめられた影がもがいている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 氷
- **ID**: bt04_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が影の上に散らばる。影はするりと抜け出した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: bt04_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が影を閉じ込める。凍りついた影はもう動かない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 氷
- **ID**: bt04_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度の氷が影を包む。影が結晶化して砕けた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 氷
- **ID**: bt04_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷がレンズのように光を集める。集まった光で影が薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 氷
- **ID**: bt04_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が影を封じる。永遠の冬の中で影が凍えている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 氷
- **ID**: bt04_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が影を濡らす。影は水に弱いわけではない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: bt04_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が影の群れに紛れた。味方なのか敵なのかわからない。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: bt04_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が影の群れを覆う。同族の安らぎ。群れが少しだけ穏やかになった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 影
- **ID**: bt04_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が群れに飛び込む。影同士が焼け合い、数が減った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 影
- **ID**: bt04_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が壁になり、群れの進路を塞ぐ。影が影に阻まれている。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 影
- **ID**: bt04_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が群れを切り裂く。影が影を斬れる。影が悲鳴を上げた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 影
- **ID**: bt04_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: めくれ上がった影が群れに混ざる。混乱しているが、害にも益にもならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: bt04_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 群れより大きな影が立ち上がる。小さな影たちが怯えて散った。影の中の王だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 影
- **ID**: bt04_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍った影が群れに触れる。黒い霜が広がり、動けなくなった影が増えていく。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: bt04_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が群れに重なる。存在が薄すぎて、群れも認識できない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: bt04_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 触れたものが影になる影が群れに突入する。影が影を飲み込み、一つの大きな影になった。しかし一つになった分、弱い。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 影
- **ID**: bt04_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影が群れの中で縮む。何もしない。影同士、気にしない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: bt04_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。影が耳を澄ます仕草をした。影に耳はないはずだが。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: bt04_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が影の群れを包む。影の動きが穏やかになった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 歌
- **ID**: bt04_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が空気を焦がす。歌の熱が光になり、影が退いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: bt04_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が響く。音の壁が影を押し返している。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 歌
- **ID**: bt04_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声が影を引き裂く。音波が影の形を崩した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 歌
- **ID**: bt04_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの歌。影は旋律を気にしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: bt04_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる歌声が影を吹き飛ばす。音は光に次ぐ影の天敵だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 歌
- **ID**: bt04_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 動きを止める歌が影を縛る。凍りついた影が地面に張りついた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 歌
- **ID**: bt04_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ旋律が辺りを満たす。美しいが、影には響かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 歌
- **ID**: bt04_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が影に取り憑く。影が歌に合わせて踊り出し、統率を失った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 歌
- **ID**: bt04_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 子守唄が影を眠らせようとする。影が薄くなっていく。眠りかけている。
- **playerDamage**: 0
- **enemyDamage**: 2

---

## 沈黙

### 小さな × 沈黙
- **ID**: bt04_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 一瞬の静寂。影が止まったが、すぐにまた動き出した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: bt04_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 安らぎの沈黙が広がる。影の動きが穏やかになった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 沈黙
- **ID**: bt04_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が空気を焦がす。影が沈黙の熱に耐えられず後退した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 沈黙
- **ID**: bt04_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が影を覆う。影の囁きも消えた。何も聞こえない世界。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 沈黙
- **ID**: bt04_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような沈黙が影を切る。音のない刃は影にも届く。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 沈黙
- **ID**: bt04_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 不完全な沈黙。ノイズが混じる。影は気にしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: bt04_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が影を押し潰す。存在ごと消されかけた影が震えている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 沈黙
- **ID**: bt04_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた沈黙の中、影が静止した。音も動きも凍っている。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 沈黙
- **ID**: bt04_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 澄んだ沈黙が辺りを清める。影が少しだけ薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 沈黙
- **ID**: bt04_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う沈黙が影を飲み込む。影の囁きが消え、統率を失った群れが散り散りになった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 沈黙
- **ID**: bt04_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠気を誘う静寂。影が薄くなる。影にも眠りはあるのか。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: bt04_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が影に剣を振る。影は子供の下をくぐり抜けた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 騎士
- **ID**: bt04_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が松明を掲げる。影が光から後退した。剣より効果的だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 騎士
- **ID**: bt04_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎の騎士が走り抜ける。全身の炎が影を焼き払った。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: bt04_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が影を踏みつける。重量で影を地面に押しつけた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 騎士
- **ID**: bt04_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が影の核を見切り、正確に斬る。影が二つに割れて消えた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 騎士
- **ID**: bt04_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣の騎士が影に立ち向かう。折れた刃では影を切れない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 騎士
- **ID**: bt04_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の騎士が大剣を一振りする。衝撃波が影を散らした。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 騎士
- **ID**: bt04_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜の騎士が剣で影を凍らせる。凍った影がぱきぱきと砕けた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 騎士
- **ID**: bt04_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 気配のない騎士が影に斬りかかる。影は騎士に気づかなかった。斬れるのか。斬れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: bt04_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士の剣が影を切る。呪いが影に伝染し、影が同士討ちを始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 騎士
- **ID**: bt04_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士がふらふら剣を振る。影に当たらない。影も騎士に興味がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 魔女

### 小さな × 魔女
- **ID**: bt04_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が光の呪文を唱える。小さな光球が影を一匹だけ消した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: bt04_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が清めの煙を焚く。影が煙を嫌って散った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 魔女
- **ID**: bt04_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が辺りを照らす。影の群れが一瞬で蒸発した。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: bt04_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で影を叩く。がつん。影に物理が効くとは。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: bt04_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻の魔女が光の矢を放つ。影の群れを正確に貫いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: bt04_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 暴走する魔法が飛ぶ。偶然、閃光が走り、影が一瞬だけ縮んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 魔女
- **ID**: bt04_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 太い腕の魔女が地面を殴る。衝撃で影が跳ね上がり、散り散りになった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 魔女
- **ID**: bt04_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が地面を凍らせる。影が氷に閉じ込められた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 魔女
- **ID**: bt04_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女が呪文を囁く。影が魔女を見失い、混乱している。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 魔女
- **ID**: bt04_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪いの魔法が影に伝染する。影が互いを食い始めた。数が減っていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 魔女
- **ID**: bt04_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 寝ぼけた魔女が杖を振る。偶然、光が走り、影が一匹消えた。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: bt04_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が「影よ退け！」と命じる。影は王の言葉を知らない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: bt04_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が影に語りかける。影は聞いていない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 王
- **ID**: bt04_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠の王が命じる。怒りの炎が影を照らし、焼き払った。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: bt04_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座の王が動かない。影は王の足元を避けて通る。王の威厳か。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 王
- **ID**: bt04_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が影の弱点を見抜く。的確な指示で光を当てさせた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 王
- **ID**: bt04_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 虚ろな王が影の中に立つ。影も王も、同じように暗い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: bt04_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が拳で影を殴る。影に物理が効く。王の拳なら。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 王
- **ID**: bt04_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく命令で影が凍りついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: bt04_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透ける王が影の中に溶け込む。影が混乱して同士討ちを始めた。
- **playerDamage**: 0
- **enemyDamage**: 2
- **reward**: 影の王冠(7)

### 呪われた × 王
- **ID**: bt04_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が影に触れる。影が金色に変わり、光を放ち始めた。自滅だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 王
- **ID**: bt04_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 玉座で居眠りする王。影が王の足元に忍び寄るが、王のいびきに驚いて退いた。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 亡霊

### 小さな × 亡霊
- **ID**: bt04_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が影に手を振る。影は亡霊を仲間だと思ったが、違った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: bt04_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が影に微笑む。影が怯んだ。死者の微笑みは影にも効く。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 亡霊
- **ID**: bt04_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎の亡霊が影の群れに飛び込む。怨念の火が影を焼き尽くした。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: bt04_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 同じ場所に立ち続ける霊が影を阻む。影が避けて通る。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: bt04_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊の目が影を射抜く。影が竦んで動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 亡霊
- **ID**: bt04_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が影の中をさまよう。影も霊も、何をすべきかわからない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: bt04_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が影に斬りかかる。実体のない刃が影を切り裂いた。同類殺しだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 亡霊
- **ID**: bt04_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が影に触れる。影が凍りついて砕けた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: bt04_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が影をすり抜ける。光を少しだけ連れてきた。影が薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 亡霊
- **ID**: bt04_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いの亡霊が影に絡みつく。呪いが伝染し、影が動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 亡霊
- **ID**: bt04_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が影の上を漂う。影は亡霊に気づかない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: bt04_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が光を反射する。小さな光で影が一匹だけ後退した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 鏡
- **ID**: bt04_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が影の姿を映す。影は自分の姿を見て困惑している。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: bt04_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中の炎が飛び出す。反射した光が影を焼き払った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 鏡
- **ID**: bt04_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が光を集めて影に向ける。影が光を嫌って退いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 鏡
- **ID**: bt04_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の破片が光を四方に反射する。影の逃げ場がなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 影を映す鏡片(8)

### 壊れた × 鏡
- **ID**: bt04_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が影を歪めて映す。影が混乱したが、すぐに立ち直った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: bt04_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が影の群れを映し出す。可視化された影が自分の醜さに怯えた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 鏡
- **ID**: bt04_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍った鏡面が光を反射する。冷たい光が影を凍らせた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: bt04_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が影の向こう側を見せる。光が透過して影を薄くした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 鏡
- **ID**: bt04_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が影を映す。鏡の中の影が動き出し、本物の影を攻撃し始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 鏡
- **ID**: bt04_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡がぼんやり光る。影が鏡に映った自分の寝顔を見ている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: bt04_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が影の上に落ちる。影は無視して通り過ぎた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: bt04_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が影に差し出される。影は人形に興味を示さない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: bt04_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が影の中に投げ込まれる。炎の光が影を焼いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 人形
- **ID**: bt04_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が影を踏みつける。影が潰れたが、人形の下から這い出した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: bt04_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が影を切り刻む。影が細切れになって散った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: bt04_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首のもげた人形が影を見つめている。影は人形を怖がっている。だが逃げはしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: bt04_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: ゴーレムの拳が地面を叩く。衝撃で影が跳ね上がり、形を失った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 人形
- **ID**: bt04_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が影の中に置かれる。溶けながら冷気を放ち、影が凍った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: bt04_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が光を集めて影に向ける。小さな光で影が一匹消えた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: bt04_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が影の中に入り込む。影が人形を飲み込もうとしたが、逆に操られ始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 人形
- **ID**: bt04_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が影の上に横たわる。影は人形の下で眠っている。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: bt04_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が影を濡らす。影は水に弱くはない。少し薄くなっただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: bt04_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が影に降りかかる。浄化の効果があるのか、影が少し透けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 雨
- **ID**: bt04_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が降り注ぐ。灼熱の光が影を焼き、蒸発させた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 雨
- **ID**: bt04_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が影を叩く。影が砕けて散った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 雨
- **ID**: bt04_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が影を貫く。影に穴が開き、光が通り抜けた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 雨
- **ID**: bt04_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 上に向かう雨。影には当たらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: bt04_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が影を洗い流す。地面がぬかるみ、影が流れていった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 雨
- **ID**: bt04_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が影を氷の膜で覆う。動けなくなった影が地面に張りついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: bt04_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が影を洗う。穢れが流れ落ち、影が少しだけ薄くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 雨
- **ID**: bt04_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨が影に降り注ぐ。動けなくなった影が地面に根を張った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 雨
- **ID**: bt04_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしと降る雨音に影が緩む。動きが鈍くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

# 2. 敵文①outcomes（11件）
# 「[mod*]影が 魔女に 絡みついている」（ターン1,4...）

### 小さな（初期値）
- **ID**: bt04_enemy1_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな影が足首に絡みつく。冷たい。動きが鈍った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 優しい
- **ID**: bt04_enemy1_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 影がそっと足元に寄り添う。温かくはないが、痛くもない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt04_enemy1_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 黒い炎で燃える影が足に絡みつく。灼ける痛みが走った。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い
- **ID**: bt04_enemy1_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 固まった影が足首を掴む。動けない。引きちぎるには力がいる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い
- **ID**: bt04_enemy1_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い影が足に巻きつく。縁で肌が切れた。影に切られるとは。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: bt04_enemy1_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: めくれ上がった影が足にまとわりつく。力がない。すぐに剥がせた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な
- **ID**: bt04_enemy1_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 巨大な影が全身に巻きつく。体が動かない。影の力は侮れない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた
- **ID**: bt04_enemy1_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍った影が足に絡みつく。冷気で足が痺れ、感覚がなくなった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った
- **ID**: bt04_enemy1_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 半透明の影が足に触れる。冷たいが、すぐにすり抜けた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた
- **ID**: bt04_enemy1_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた影が足に絡みつく。触れた部分が影に変わりかける。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い
- **ID**: bt04_enemy1_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い影がゆっくり足に巻きつく。あまりに遅くて踏んで避けた。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（11件）
# 「[mod*]影が 魔女を 見つめている」（ターン2,5...）

### 呪われた（初期値）
- **ID**: bt04_enemy2_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた影の目が光る。見つめられると体が冷えていく。
- **playerDamage**: 3
- **enemyDamage**: 0

### 小さな
- **ID**: bt04_enemy2_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな影が見上げている。怖くはないが、目を離せない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい
- **ID**: bt04_enemy2_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 影が穏やかにこちらを見ている。敵意は感じない。不思議だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt04_enemy2_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 燃える影の目が光る。視線自体が熱い。肌がひりつく。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い
- **ID**: bt04_enemy2_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 石のように固まった影が見つめてくる。視線が重い。足が動かない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い
- **ID**: bt04_enemy2_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い影の視線が突き刺さる。心の中まで覗かれているようだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた
- **ID**: bt04_enemy2_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた影がこちらを見ている。焦点が合っていない。脅威ではない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な
- **ID**: bt04_enemy2_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 巨大な影が見下ろしている。圧倒的な存在感に足が竦んだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた
- **ID**: bt04_enemy2_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍った影が冷たい目で見つめている。視線だけで体温が下がる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った
- **ID**: bt04_enemy2_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った影が見つめている。見えるのに掴めない。不安が募る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 眠い
- **ID**: bt04_enemy2_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い影が薄目でこちらを見ている。脅威ではない。うとうとしている。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 4. 敵文③outcomes（11件）
# 「[mod*]影が 足元に 囁いている」（ターン3,6...）

### 凍てついた（初期値）
- **ID**: bt04_enemy3_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍てついた影が足元で囁く。何を言っているかわからないが、足が痺れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 小さな
- **ID**: bt04_enemy3_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな影が足元でもそもそ囁く。聞こえるか聞こえないかの声。少し不安になる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい
- **ID**: bt04_enemy3_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 影が優しく囁く。「休みなさい」誘惑だが、温かい声だ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt04_enemy3_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 燃える影が足元で呪詛を囁く。靴底が焦げた。言葉に火が宿っている。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い
- **ID**: bt04_enemy3_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 固まった影が足元で低い声を出す。振動が足から体に伝わり、膝が震えた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い
- **ID**: bt04_enemy3_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い影が耳元まで伸びて囁く。言葉が刃のように鼓膜を切った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: bt04_enemy3_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた影の囁きが途切れ途切れに聞こえる。意味をなさない音。害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な
- **ID**: bt04_enemy3_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 巨大な影が地響きのような声で囁く。地面が震え、足元がよろめいた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 透き通った
- **ID**: bt04_enemy3_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った影が静かに囁く。声は聞こえるが、姿が見えない。不安だけが残る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた
- **ID**: bt04_enemy3_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた影が足元で呪文を囁く。足が動かなくなった。呪いの言葉だ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い
- **ID**: bt04_enemy3_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い影の囁きが子守唄に聞こえる。意識が少し遠のいた。
- **playerDamage**: 1
- **enemyDamage**: 0

---

# 統計レポート

## 自文outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 7 |
| reward率 | 3.7% |
| enemyDamage平均 | 1.74 |
| enemyDamage=0の割合 | 33.7% (63/187) |
| enemyDamage≥4の割合 | 14.4% (27/187) |
| enemyDamage=5の割合 | 4.8% (9/187) |

### enemyDamage分布
| enemyDamage | 件数 | 割合 |
|-------------|------|------|
| 0 | 63 | 33.7% |
| 1 | 33 | 17.6% |
| 2 | 28 | 15.0% |
| 3 | 36 | 19.3% |
| 4 | 18 | 9.6% |
| 5 | 9 | 4.8% |

## 敵文①outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 1.91 |
| playerDamage=0の割合 | 18.2% (2/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |

## 敵文②outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 1.64 |
| playerDamage=0の割合 | 18.2% (2/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |

## 敵文③outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 1.82 |
| playerDamage=0の割合 | 9.1% (1/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |
