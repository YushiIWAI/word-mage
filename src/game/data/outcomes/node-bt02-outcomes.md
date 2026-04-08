# ノードBT02「追い剥ぎ」Outcome一覧

- **敵名**: 追い剥ぎ（街道の盗賊。狡猾で素早い）
- **敵HP**: 12
- **勝利報酬**: 10Q

## 文構成
- **自文**: [mod*][subj*]が 盗賊を 砕く （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,3,5...): [subj*]が 魔女の荷物を 隠している （17パターン）
- **敵文②** (ターン2,4,6...): [subj*]が 魔女を 追いかけてくる （17パターン）

## defaultOutcome

### 自文default
- **text**: 書き換えが盗賊に届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default
- **text**: 影が素早く動き、荷物が消えた。盗賊の手際はさすがだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 敵文② default
- **text**: 蛇のような足取りで盗賊が迫る。逃げ場がない。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）

## 子猫

### 小さな × 子猫
- **ID**: bt02_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が盗賊の足首を引っかく。盗賊は笑って蹴り飛ばした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: bt02_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が盗賊に擦り寄る。盗賊の手が止まるが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 子猫
- **ID**: bt02_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が盗賊のマントに飛びつく。火が燃え広がり、盗賊は慌てて脱ぎ捨てた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 子猫
- **ID**: bt02_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が飛んでいく。盗賊の額に命中。がちん。盗賊がよろめいた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 子猫
- **ID**: bt02_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が盗賊の腕を裂く。盗賊が得物を取り落とした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 子猫
- **ID**: bt02_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが盗賊の顔面に投げつけられる。綿が飛び散った。盗賊は呆れている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: bt02_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような体格の子猫が盗賊に飛びかかる。爪が革鎧を引き裂いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 子猫
- **ID**: bt02_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が盗賊の手首に触れる。指が凍りつき、短剣を握れなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 子猫
- **ID**: bt02_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が盗賊をすり抜ける。盗賊は何が起きたかわからず辺りを見回す。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: bt02_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 拾った者が捨てられなくなる猫。盗賊が蹴り飛ばしても足元に戻ってくる。気がつけば盗賊の動きが鈍っている。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 子猫
- **ID**: bt02_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: あくびする子猫を見て、盗賊まであくびした。隙だらけだが、誰も突かない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: bt02_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が盗賊の袖に潜り込む。盗賊が慌てて振り払うが、小さな噛み跡が残った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: bt02_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が盗賊の足に巻きつく。締めつける気はなく、盗賊は蹴り飛ばした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: bt02_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を引く蛇が盗賊の足元を這い回る。革靴が燃え、盗賊が飛び跳ねた。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 焦げた短靴(8)

### 堅い × 蛇
- **ID**: bt02_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が盗賊の脛を打つ。鞭のような一撃に、盗賊が膝をついた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 蛇
- **ID**: bt02_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が盗賊の手に突き刺さる。手が紫に変色し、盗賊の顔色が変わった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 蛇
- **ID**: bt02_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮途中の蛇が盗賊に向かうが、古い皮に足を取られて進めない。盗賊は鼻で笑った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: bt02_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が盗賊を締め上げる。骨が軋む音。盗賊の目が白くなりかけた。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 盗賊の革帯(10)

### 凍てついた × 蛇
- **ID**: bt02_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜をまとった蛇が盗賊の足首に巻きつく。足が凍りつき、逃げ足が止まった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 蛇
- **ID**: bt02_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が盗賊に忍び寄る。見えない牙に噛まれて初めて気づいた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 蛇
- **ID**: bt02_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたびに大きくなる蛇が盗賊に絡みつく。振り払うたびに太くなる。盗賊の顔が青ざめた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 蛇
- **ID**: bt02_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いて眠る蛇。盗賊が跨いで通ろうとするが、蛇は微動だにしない。無害だ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: bt02_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が小さな火を噴く。盗賊のマントの裾が少し焦げた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: bt02_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が盗賊を見下ろす。威圧するでもなく、ただ見ている。盗賊は身動きが取れない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 竜
- **ID**: bt02_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が息を吐く。盗賊の隠れ家ごと焼き払った。逃げ場はない。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 溶けた短剣(12)

### 堅い × 竜
- **ID**: bt02_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような鱗の竜が尾を振る。盗賊が吹き飛ばされ、街道脇の木に叩きつけられた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 鋭い × 竜
- **ID**: bt02_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 金色の目が盗賊を捉える。爪の一振り。盗賊の得物が二つに割れた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 竜
- **ID**: bt02_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が盗賊にのしかかる。火は吐けないが、体重は十分だ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: bt02_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が現れただけで、盗賊が腰を抜かした。戦う前から勝負がついている。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 竜
- **ID**: bt02_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息が盗賊を包む。足から腰まで凍りつき、盗賊が動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 竜
- **ID**: bt02_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が盗賊の背後に立つ。振り向いた盗賊は、竜を透かして向こうの景色を見た。不思議な光が盗賊の目を眩ませる。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 竜
- **ID**: bt02_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜が盗賊ごと周囲を蹂躙する。理性がない分、容赦もない。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 竜
- **ID**: bt02_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りする竜のいびきが盗賊を吹き飛ばす。本人に自覚はない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: bt02_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が盗賊の鼻先を舞う。目で追ったのは一瞬。何も変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: bt02_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が盗賊の肩に止まる。盗賊は一瞬だけ柔らかい顔をした。しかし仕事は仕事だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: bt02_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の蝶が盗賊の周りを飛び回る。火の粉が降り注ぎ、革鎧のあちこちが焦げた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 蝶
- **ID**: bt02_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が盗賊の眉間に突っ込む。かん、と音がして盗賊が目を押さえた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: bt02_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽が盗賊のそばをすれ違う。頬に細い傷。盗賊は蝶に背を向けるべきではなかった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 蝶
- **ID**: bt02_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が螺旋を描いて盗賊の前に落ちる。盗賊は踏んで通った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: bt02_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 巨蝶の羽ばたきが砂埃を巻き上げる。盗賊が目を開けられず、よろめいた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: bt02_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が盗賊の短剣に触れる。刃が凍りつき、握った手が痺れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蝶
- **ID**: bt02_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が盗賊の視界を横切る。光が歪んで見えたのは一瞬だけだった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: bt02_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶を追った盗賊が道を見失う。気づけば街道を外れ、自分の仕掛けた罠に足をかけていた。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 盗賊の罠(7)

### 眠い × 蝶
- **ID**: bt02_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が盗賊のフードの上で羽を閉じた。盗賊は気づいていない。害もない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: bt02_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が盗賊のフードをめくる。顔が見えた。若い。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: bt02_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい追い風。盗賊の髪が揺れる。天気がいいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: bt02_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が街道を走り抜ける。盗賊の肌が焼け、息が焦げた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 風
- **ID**: bt02_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 頑固な向かい風が盗賊を押し戻す。足が前に出ない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: bt02_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が盗賊のマントを切り裂く。肌にも薄い傷が走った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: bt02_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 乱気流が盗賊の周りで渦を巻く。埃が舞うだけで、害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: bt02_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が盗賊を街道の外まで吹き飛ばす。木の枝にぶつかり、うめき声が聞こえた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 風
- **ID**: bt02_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が盗賊を叩く。指が悴み、短剣を取り落とした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: bt02_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が街道を清める。盗賊の気配が薄れるが、姿はそこにある。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 風
- **ID**: bt02_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 帰り道を忘れる風が吹く。盗賊がふと立ち止まり、自分がどこにいるかわからなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2
- **reward**: 盗賊の地図(6)

### 眠い × 風
- **ID**: bt02_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が盗賊の集中を奪う。あくびを噛み殺している。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: bt02_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの火が盗賊の足元に灯る。踏んで消した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 炎
- **ID**: bt02_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉のような火が盗賊の手を温める。冷えた指がほぐれた。逆効果だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: bt02_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が街道を塞ぐ。盗賊が逃げ場を失い、炎に追い詰められた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 炎
- **ID**: bt02_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が盗賊の靴底に張りつく。走っても走っても炎がついてくる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 炎
- **ID**: bt02_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が盗賊の短剣を赤熱させる。握っていられず投げ捨てた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 炎
- **ID**: bt02_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が盗賊の前に揺れる。紫と緑。温かくはないが、不気味ではある。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: bt02_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 火柱が盗賊の逃走路を断つ。天を衝く炎の壁を前に、盗賊が膝をついた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 炎
- **ID**: bt02_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い冷たい炎が盗賊の肌を灼く。凍傷の痛みに盗賊が声を上げた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 炎
- **ID**: bt02_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が盗賊の髪を焦がす。何に灼かれたのかわからず、盗賊が怯んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 炎
- **ID**: bt02_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が盗賊に燃え移る。盗むたびに手が熱くなる炎だ。盗賊が盗品を全て放り出した。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 盗品の首飾り(10)

### 眠い × 炎
- **ID**: bt02_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が盗賊の足元で赤く明滅している。燃え上がる力がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: bt02_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷片が盗賊の首筋に当たる。冷たいだけだ。盗賊が首をすくめた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: bt02_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が盗賊の手を冷やす。腫れた拳にはちょうどいい。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: bt02_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が盗賊に炸裂する。凍傷と火傷の二重苦に、盗賊が悲鳴を上げた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 氷
- **ID**: bt02_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷の塊が盗賊の胸を打つ。鉄より硬い一撃に息が止まった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 氷
- **ID**: bt02_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱の剣が盗賊の革鎧を貫く。刺さったまま溶けず、動きを封じている。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 凍った革片(6)

### 壊れた × 氷
- **ID**: bt02_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が盗賊に投げつけられるが、当たる前に砕け散った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: bt02_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が街道に落ちる。盗賊が巻き込まれ、凍った瓦礫の下に埋まった。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 氷
- **ID**: bt02_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度の氷が盗賊の足元を覆う。街道が凍り、盗賊の足が動かなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 氷
- **ID**: bt02_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷が街道に広がる。盗賊が気づかず踏み、派手に転んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 氷
- **ID**: bt02_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が盗賊の短剣を覆う。武器が使えなくなり、盗賊が歯噛みした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 氷
- **ID**: bt02_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が盗賊の足元を濡らす。冷たいが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: bt02_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな影が盗賊の影と重なる。何か企んでいるようだが、何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: bt02_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が盗賊を覆う。涼しくて居心地がいい。盗賊が油断した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: bt02_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が盗賊の足元に張りつく。靴底が焦げ、盗賊が飛び退いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 影
- **ID**: bt02_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が盗賊の足を縫いとめる。身動きが取れない。しかし痛くはない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 影
- **ID**: bt02_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が盗賊の腰の金袋を切り落とす。金貨が街道に散った。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 盗賊の金袋(15)

### 壊れた × 影
- **ID**: bt02_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: めくれ上がった影が盗賊に向かうが、すり抜けてしまった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: bt02_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 盗賊より大きな影が立ち上がり、拳を振り下ろす。盗賊が地面に叩きつけられた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 影
- **ID**: bt02_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍った影が盗賊の足に絡みつく。冷気で足が痺れ、逃げ足が鈍った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: bt02_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が盗賊と重なる。存在が薄すぎて、盗賊は何も感じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: bt02_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪いの影が盗賊に触れる。盗賊の手が影に変わり、物を掴めなくなった。追い剥ぎの致命傷だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 影
- **ID**: bt02_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように小さく縮んだ影。盗賊の足元で微動だにしない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: bt02_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。盗賊が耳を澄ますが、すぐに忘れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: bt02_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が街道に流れる。盗賊の殺気が薄れるが、仕事は仕事だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 歌
- **ID**: bt02_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が響く。空気が熱を帯び、盗賊の肌が赤くなる。歌に灼かれている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: bt02_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が盗賊の頭の中で鳴り続ける。集中が切れ、隙だらけになった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 歌
- **ID**: bt02_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声の高音が盗賊の鼓膜を突く。耳を押さえてうずくまった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 歌
- **ID**: bt02_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの旋律。盗賊は眉をひそめるが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: bt02_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる歌声が盗賊の足元を揺らす。よろめき、立っていられない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 歌
- **ID**: bt02_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 動きを止める歌が盗賊の足を縛る。凍りついたように動けない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 歌
- **ID**: bt02_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ歌声が街道に響く。美しいが、盗賊の心には届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 歌
- **ID**: bt02_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が盗賊に取り憑く。同じ節が脳裏でループし、盗賊が頭を抱えた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 歌
- **ID**: bt02_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 子守唄に盗賊の瞼が重くなる。短剣を持つ手が下がっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

---

## 沈黙

### 小さな × 沈黙
- **ID**: bt02_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: ふと静けさが訪れる。盗賊が周囲を窺うが、すぐに鳥の声が戻った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: bt02_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 安らぎの沈黙が広がる。盗賊が一瞬だけ昔を思い出したようだ。しかし手は止めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 沈黙
- **ID**: bt02_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が空気を焦がす。盗賊の喉が渇き、唇がひび割れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 沈黙
- **ID**: bt02_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が盗賊を覆う。足音が消え、仲間への合図が送れない。孤立した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 沈黙
- **ID**: bt02_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような無言が盗賊を射抜く。言い訳も脅しも、沈黙の前では無力だ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 沈黙
- **ID**: bt02_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂にノイズが混じる。盗賊は気にも留めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: bt02_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が街道を支配する。盗賊が声を出せない。叫びたいのに、口が動かない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 沈黙
- **ID**: bt02_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた静寂の中、盗賊の動きが鈍る。音のない世界で、時間が遅くなったようだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 沈黙
- **ID**: bt02_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 澄んだ沈黙が盗賊の心を洗う。一瞬だけ手が止まったが、すぐに我に返った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 沈黙
- **ID**: bt02_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う沈黙が盗賊を飲み込む。仲間を呼べず、威嚇もできない。追い剥ぎは声が命だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 沈黙
- **ID**: bt02_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさ。盗賊があくびを噛み殺している。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: bt02_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が大きすぎる剣を振り回す。盗賊は軽く横に避けた。だが脛にかすった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 騎士
- **ID**: bt02_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 騎士が盗賊に更生を説く。「まっとうに生きろ」盗賊は鼻で笑った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 騎士
- **ID**: bt02_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎に包まれた騎士が盗賊に斬りかかる。燃える刃が革鎧を切り裂いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: bt02_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が盗賊の前に立ちはだかる。短剣が鎧に弾かれ、盗賊の手が痺れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 騎士
- **ID**: bt02_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が一閃。盗賊が反応する前に短剣の紐が切られていた。武器がない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 騎士
- **ID**: bt02_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣で盗賊に向かう騎士。盗賊は嘲笑うが、折れた切っ先が頬をかすめた。意地だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 騎士
- **ID**: bt02_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の騎士が大剣を一振りする。盗賊の短剣ごと吹き飛ばした。体格差は正義だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 騎士
- **ID**: bt02_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜の剣が盗賊の腕を斬る。傷口が凍りつき、血も出ない。盗賊が腕を庇った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 騎士
- **ID**: bt02_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 気配のない騎士が盗賊の死角から剣を振る。避けたつもりが浅く斬られていた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: bt02_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士の剣が盗賊を切る。傷が黒ずみ、腕が動かなくなっていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 騎士
- **ID**: bt02_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が半分寝ながら剣を振る。盗賊に当たらない。当たらないが、怖くもない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 魔女

### 小さな × 魔女
- **ID**: bt02_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が呪文を唱える。小さな火花が盗賊の帽子に引火した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: bt02_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が盗賊に薬を差し出す。盗賊は警戒して受け取らない。戦闘にならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 魔女
- **ID**: bt02_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が盗賊の足元で爆ぜる。盗賊が吹き飛ばされ、街道に転がった。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: bt02_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で盗賊を叩く。がつん。盗賊が驚いて後退した。思ったより痛い。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: bt02_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻の魔女が呪文を一言。魔力の矢が盗賊の肩を撃ち抜いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: bt02_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 暴走する魔法が盗賊の方へ飛んでいく。どこに当たるかわからないが、まぐれで腹に直撃した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 魔女
- **ID**: bt02_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 太い腕の魔女が盗賊の首根っこを掴む。片手で持ち上げ、地面に叩きつけた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 魔女
- **ID**: bt02_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が盗賊の両足を固める。地面に縫いとめられた盗賊が、もがいている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 魔女
- **ID**: bt02_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女の呪文が盗賊の耳元で囁かれる。何が起きたかわからないまま、膝が折れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 魔女
- **ID**: bt02_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪いに蝕まれた魔女が盗賊に手をかざす。呪いが伝染し、盗賊の利き手が痙攣し始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 魔女
- **ID**: bt02_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 寝ぼけた魔女が適当に杖を振る。たまたま盗賊の方に光が飛んで、肩をかすめた。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: bt02_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が「盗賊を捕らえよ！」と叫ぶ。誰も従わない。盗賊が苦笑いした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: bt02_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が盗賊に恩赦を申し出る。盗賊は聞いていない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 王
- **ID**: bt02_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠の王が裁きを下す。盗賊の逃げ道が炎に包まれた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: bt02_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座から動かない王が一言。「処断せよ」しかし実行する者がいない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 王
- **ID**: bt02_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が盗賊の動きを読み切る。次の一手を正確に指し示した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 王
- **ID**: bt02_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 虚ろな目の王が立ちすくんでいる。盗賊は王を無視して通り過ぎた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: bt02_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が自ら剣を抜く。盗賊の短剣が弾き飛ばされ、返す刃で革鎧が裂けた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 王
- **ID**: bt02_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく命令が盗賊の足元に届き、足首が凍りついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: bt02_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透ける王が何か命じた。盗賊は気づかない。見えない王の勅令は虚しい。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 王
- **ID**: bt02_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が盗賊の短剣に触れる。金の短剣は重すぎて振れない。皮肉だ。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 金の短剣(20)

### 眠い × 王
- **ID**: bt02_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 玉座で居眠りする王。盗賊のことなど知らない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 亡霊

### 小さな × 亡霊
- **ID**: bt02_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が盗賊の背後に立つ。冷たい風が首筋を撫でただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: bt02_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が盗賊に微笑む。盗賊が一瞬たじろいだが、実害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 亡霊
- **ID**: bt02_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎の亡霊が盗賊に取り憑く。怨念の火が革鎧を内側から焦がした。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: bt02_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 同じ場所に立ち続ける霊。盗賊が近づくと冷気に弾かれる。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: bt02_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊の視線が盗賊を射抜く。盗賊が震えた。後ろめたいことしかない人生だ。
- **playerDamage**: 0
- **enemyDamage**: 2
- **reward**: 亡霊の涙(8)

### 壊れた × 亡霊
- **ID**: bt02_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が盗賊の前をさまよう。盗賊は幽霊に慣れている。気にしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: bt02_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が盗賊に斬りかかる。実体のない刃が肉を裂いた。幽霊の力は理不尽だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 亡霊
- **ID**: bt02_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が盗賊に触れる。触れた肩が白く凍った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: bt02_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が盗賊をすり抜ける。涼しい風が通っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 亡霊
- **ID**: bt02_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られた霊が盗賊に絡みつく。呪いが伝染し、盗賊の足が鉛のように重くなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 亡霊
- **ID**: bt02_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が盗賊の足元を漂う。透けている。存在感がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: bt02_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が盗賊に光を反射する。眩しいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 鏡
- **ID**: bt02_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が盗賊の若い頃を映す。まだ真っ当だった頃の顔。盗賊は目を逸らした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: bt02_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中の炎が飛び出す。盗賊のマントに燃え移った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 鏡
- **ID**: bt02_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が盗賊に投げつけられる。額に直撃。意識が揺れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 鏡
- **ID**: bt02_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の破片が盗賊に降り注ぐ。手と顔に無数の切り傷。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 鏡
- **ID**: bt02_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡に盗賊の顔が何人にも分裂して映る。不気味だが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: bt02_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が盗賊の前に現れる。等身大の自分に見すくめられ、盗賊が後退した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 鏡
- **ID**: bt02_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍った鏡が盗賊に冬の世界を映す。見た盗賊の手先から霜が広がっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: bt02_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が盗賊の前に浮かぶ。何も映さない。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 鏡
- **ID**: bt02_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が盗賊の姿を映す。鏡の中の盗賊が動き出し、本体を殴り始めた。自分自身には勝てない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 鏡
- **ID**: bt02_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡に盗賊の寝顔が映る。催眠のように瞼が重くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: bt02_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が盗賊の足元に転がる。盗賊は一瞥して蹴り飛ばした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: bt02_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が盗賊に抱きつく。縫い付けた笑顔。盗賊は困惑しているが、害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: bt02_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が盗賊に投げつけられる。革鎧に火がつき、盗賊が地面を転がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 人形
- **ID**: bt02_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が盗賊の膝に飛んでくる。がつん。盗賊が片足を引きずった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: bt02_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が盗賊の周りを舞う。糸は見えない。切り傷が次々に増えていく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: bt02_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が盗賊を見つめている。盗賊は身震いしたが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: bt02_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大の木彫り人形が盗賊を掴んで持ち上げる。地面に叩きつけた。ゴーレムの力だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 人形
- **ID**: bt02_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が盗賊に投げつけられる。砕けた氷片が顔を切り、冷気で肌が痺れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: bt02_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が盗賊にぶつかって砕ける。破片が手に刺さった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: bt02_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が盗賊のポケットに入り込む。捨てても戻ってくる。気づけば体中に人形がぶら下がっていた。重い。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 人形
- **ID**: bt02_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が転がっている。盗賊が拾おうとして——やめた。触りたくないらしい。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: bt02_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が降り始める。盗賊のフードが湿る。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: bt02_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が街道を潤す。盗賊が空を見上げた。心地よさそうだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 雨
- **ID**: bt02_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が降り注ぐ。盗賊が街道を走り回るが、逃げ場がない。全身が焦げた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 雨
- **ID**: bt02_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が盗賊を叩く。石のような氷の粒に、盗賊が頭を抱えてしゃがみ込んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 雨
- **ID**: bt02_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が盗賊の全身を刺す。革鎧に無数の穴が開いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 雨
- **ID**: bt02_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 上に向かったり止まったりする奇妙な雨。盗賊は首を傾げただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: bt02_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が街道を洗い流す。盗賊が水に足を取られ、泥の中に膝をついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 雨
- **ID**: bt02_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が盗賊の革鎧を氷の膜で覆う。体が重くなり、動きが鈍った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: bt02_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が盗賊を洗う。汚れは落ちるが、傷にはならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 雨
- **ID**: bt02_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨に打たれた盗賊の足が地面に根づいた。動けない。文字通り追い剥ぎを剥がされた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 雨
- **ID**: bt02_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしと降る雨音に盗賊の集中が切れる。瞼が重い。短剣を持つ手が下がった。
- **playerDamage**: 0
- **enemyDamage**: 2

---

# 2. 敵文①outcomes（17件）
# 「[subj*]が 魔女の荷物を 隠している」（ターン1,3,5...）

### 影（初期値）
- **ID**: bt02_enemy1_shadow
- **conditions**: { s1: 'subj_shadow' }
- **text**: 影が素早く動き、荷物が消えた。盗賊の手際はさすがだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 子猫
- **ID**: bt02_enemy1_kitten
- **conditions**: { s1: 'subj_kitten' }
- **text**: 子猫が荷物の紐をくわえて引きずっていく。遅い。すぐに追いつける。
- **playerDamage**: 0
- **enemyDamage**: 0

### 蛇
- **ID**: bt02_enemy1_snake
- **conditions**: { s1: 'subj_snake' }
- **text**: 蛇が荷物に巻きつき、藪の中に引き込んだ。探すのに手間取る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 竜
- **ID**: bt02_enemy1_dragon
- **conditions**: { s1: 'subj_dragon' }
- **text**: 竜が荷物をくわえて空高く飛び去った。取り返せない。
- **playerDamage**: 4
- **enemyDamage**: 0

### 蝶
- **ID**: bt02_enemy1_butterfly
- **conditions**: { s1: 'subj_butterfly' }
- **text**: 蝶の群れが荷物を覆い隠す。手を伸ばすと散るが、荷物が少しずれている。
- **playerDamage**: 1
- **enemyDamage**: 0

### 風
- **ID**: bt02_enemy1_wind
- **conditions**: { s1: 'subj_wind' }
- **text**: 突風が荷物を街道の外へ吹き飛ばした。崖下に落ちかけている。
- **playerDamage**: 3
- **enemyDamage**: 0

### 炎
- **ID**: bt02_enemy1_flame
- **conditions**: { s1: 'subj_flame' }
- **text**: 炎が荷物の上で燃えている。中身が焦げる匂いがした。
- **playerDamage**: 3
- **enemyDamage**: 0

### 氷
- **ID**: bt02_enemy1_ice
- **conditions**: { s1: 'subj_ice' }
- **text**: 氷が荷物を覆い、地面に凍りつけた。引き剥がせない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌
- **ID**: bt02_enemy1_song
- **conditions**: { s1: 'subj_song' }
- **text**: 歌声に惑わされ、荷物がどこにあったか忘れた。ここだったはず——違う。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙
- **ID**: bt02_enemy1_silence
- **conditions**: { s1: 'subj_silence' }
- **text**: 沈黙が荷物の気配を消す。すぐそこにあるはずなのに、見つからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士
- **ID**: bt02_enemy1_knight
- **conditions**: { s1: 'subj_knight' }
- **text**: 騎士が荷物を没収した。盗賊の共犯か。いや、これは公務だと言い張っている。
- **playerDamage**: 2
- **enemyDamage**: 0

### 魔女
- **ID**: bt02_enemy1_witch
- **conditions**: { s1: 'subj_witch' }
- **text**: 別の魔女が荷物を隠した。同業者を出し抜くのに理由はいらないらしい。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王
- **ID**: bt02_enemy1_king
- **conditions**: { s1: 'subj_king' }
- **text**: 王が荷物を接収する。「通行税だ」横暴だが、抗えない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 亡霊
- **ID**: bt02_enemy1_ghost
- **conditions**: { s1: 'subj_ghost' }
- **text**: 亡霊が荷物を抱えて壁の中に消えた。実体がないから追えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡
- **ID**: bt02_enemy1_mirror
- **conditions**: { s1: 'subj_mirror' }
- **text**: 鏡が荷物を映し込んだ。鏡面の中に消えた荷物は、もう手が届かない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 人形
- **ID**: bt02_enemy1_doll
- **conditions**: { s1: 'subj_doll' }
- **text**: 人形が荷物に寄りかかっている。どけようとすると、荷物ごと動く。
- **playerDamage**: 1
- **enemyDamage**: 0

### 雨
- **ID**: bt02_enemy1_rain
- **conditions**: { s1: 'subj_rain' }
- **text**: 雨が荷物を濡らし、重くなって運べなくなった。中身が滲んでいる。
- **playerDamage**: 1
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（17件）
# 「[subj*]が 魔女を 追いかけてくる」（ターン2,4,6...）

### 蛇（初期値）
- **ID**: bt02_enemy2_snake
- **conditions**: { s1: 'subj_snake' }
- **text**: 蛇のような足取りで盗賊が迫る。逃げ場がない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 子猫
- **ID**: bt02_enemy2_kitten
- **conditions**: { s1: 'subj_kitten' }
- **text**: 子猫がとことこ追いかけてくる。怖くない。むしろ可愛い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 竜
- **ID**: bt02_enemy2_dragon
- **conditions**: { s1: 'subj_dragon' }
- **text**: 竜が空から急降下してくる。地面に叩きつけるような衝撃が走った。
- **playerDamage**: 4
- **enemyDamage**: 0

### 蝶
- **ID**: bt02_enemy2_butterfly
- **conditions**: { s1: 'subj_butterfly' }
- **text**: 蝶が追いかけてくる。ひらひらと。まったく脅威ではない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 風
- **ID**: bt02_enemy2_wind
- **conditions**: { s1: 'subj_wind' }
- **text**: 追い風が背中を押す。走らされるように足が勝手に動く。壁にぶつかった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 炎
- **ID**: bt02_enemy2_flame
- **conditions**: { s1: 'subj_flame' }
- **text**: 炎が追いかけてくる。走っても走っても背中が熱い。マントの裾が燃えた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 氷
- **ID**: bt02_enemy2_ice
- **conditions**: { s1: 'subj_ice' }
- **text**: 氷が地面を伝って迫ってくる。足元が凍りつき、転んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影
- **ID**: bt02_enemy2_shadow
- **conditions**: { s1: 'subj_shadow' }
- **text**: 影が壁を伝って追いかけてくる。どこに逃げても影は消えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌
- **ID**: bt02_enemy2_song
- **conditions**: { s1: 'subj_song' }
- **text**: 歌が頭の中で鳴り続ける。逃げても音量は変わらない。頭が痛い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 沈黙
- **ID**: bt02_enemy2_silence
- **conditions**: { s1: 'subj_silence' }
- **text**: 沈黙が追いかけてくる。足音が消え、自分がどこにいるかわからなくなった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 騎士
- **ID**: bt02_enemy2_knight
- **conditions**: { s1: 'subj_knight' }
- **text**: 騎士が軍馬で追ってくる。重装備でも速い。追いつかれた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 魔女
- **ID**: bt02_enemy2_witch
- **conditions**: { s1: 'subj_witch' }
- **text**: 別の魔女が箒で追いかけてくる。空からの追跡は防ぎようがない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王
- **ID**: bt02_enemy2_king
- **conditions**: { s1: 'subj_king' }
- **text**: 王が兵士を差し向けた。一人では勝てない数が迫ってくる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 亡霊
- **ID**: bt02_enemy2_ghost
- **conditions**: { s1: 'subj_ghost' }
- **text**: 亡霊が壁を抜けて追いかけてくる。逃げ道がない。冷たい手に肩を掴まれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡
- **ID**: bt02_enemy2_mirror
- **conditions**: { s1: 'subj_mirror' }
- **text**: 鏡の中の自分が追いかけてくる。同じ速さ。同じ動き。追い抜けない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形
- **ID**: bt02_enemy2_doll
- **conditions**: { s1: 'subj_doll' }
- **text**: 人形がかたかたと追いかけてくる。遅い。だが振り向くたびに近い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 雨
- **ID**: bt02_enemy2_rain
- **conditions**: { s1: 'subj_rain' }
- **text**: 雨が追いかけるように降ってくる。走る先だけ濡れている。足元がぬかるんで滑った。
- **playerDamage**: 1
- **enemyDamage**: 0

---

# 統計レポート

## 自文outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 11 |
| reward率 | 5.9% |
| enemyDamage平均 | 1.79 |
| enemyDamage=0の割合 | 35.8% (67/187) |
| enemyDamage≥4の割合 | 18.7% (35/187) |
| enemyDamage=5の割合 | 5.9% (11/187) |

### enemyDamage分布
| enemyDamage | 件数 | 割合 |
|-------------|------|------|
| 0 | 67 | 35.8% |
| 1 | 24 | 12.8% |
| 2 | 30 | 16.0% |
| 3 | 31 | 16.6% |
| 4 | 24 | 12.8% |
| 5 | 11 | 5.9% |

## 敵文①outcomes（17件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| playerDamage平均 | 1.82 |
| playerDamage=0の割合 | 17.6% (3/17) |
| playerDamage≥3の割合 | 23.5% (4/17) |

## 敵文②outcomes（17件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| playerDamage平均 | 1.65 |
| playerDamage=0の割合 | 17.6% (3/17) |
| playerDamage≥3の割合 | 23.5% (4/17) |
