# ノードBT01「森番」Outcome一覧

- **敵名**: 森番（巨木のような体躯の精霊）
- **敵HP**: 15
- **勝利報酬**: 8Q

## 文構成
- **自文**: [mod*][subj*]が 森番を 打つ （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,3,5...): [mod*]森番が 魔女を 追いかけてくる （11パターン）
- **敵文②** (ターン2,4,6...): 森番が [mod*]根を 振り下ろしている （11パターン）

## defaultOutcome

### 自文default
- **text**: 書き換えが森番に届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default
- **text**: 森番が猛然と迫ってくる。巨木のような腕が振り下ろされた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 敵文② default
- **text**: 堅い根が振り下ろされ、地面が割れた。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）

## 子猫

### 小さな × 子猫
- **ID**: bt01_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が森番の足元をひっかく。森番は気づいてすらいない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: bt01_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が森番に擦り寄る。森番の樹皮の表情が一瞬ほころぶ。しかし傷ひとつつかない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 子猫
- **ID**: bt01_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が森番に飛びかかる。樹皮に火がつき、森番が腕を振って消そうとする。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 子猫
- **ID**: bt01_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が森番にぶつかる。かちん、と乾いた音。森番の樹皮に小さなへこみができた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 子猫
- **ID**: bt01_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が森番の樹皮を引き裂く。浅いが、樹液が滲んだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 子猫
- **ID**: bt01_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが森番にぶつかる。綿が散って、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: bt01_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような体格の子猫が森番の幹に爪を立てる。樹皮がめくれ、森番が低くうなる。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 子猫
- **ID**: bt01_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が森番の足に触れる。霜が広がり、森番の動きが鈍る。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 子猫
- **ID**: bt01_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が森番をすり抜ける。傷をつけることなく、向こう側へ消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: bt01_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪いの猫が森番の足元にまとわりつく。振り払えない。森番の枝が少しずつ枯れていく。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 子猫
- **ID**: bt01_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が森番の根元で丸くなる。あくびひとつ。森番には何の影響もない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: bt01_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が森番の樹皮の隙間に潜り込む。中から齧っているが、効いているようには見えない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: bt01_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が森番の幹に巻きつく。森番はくすぐったそうに身を揺らすだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: bt01_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を引く蛇が森番の幹を焼きながら這い上がる。煙が立ち昇り、森番が身もだえする。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 蛇
- **ID**: bt01_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が森番に突進する。鎧のような体で樹皮をえぐった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 蛇
- **ID**: bt01_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が森番の樹皮に深く刺さる。噛み跡から黒い液が滲む。木の精霊に毒は効くのか。効いている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 蛇
- **ID**: bt01_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮の途中で力尽きた蛇が森番に向かう。皮が引っかかって進めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: bt01_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が森番の幹に巻きつき、締め上げる。樹皮が軋み、枝がぱきぱきと折れていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 蛇
- **ID**: bt01_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜をまとった蛇が森番の根に絡みつく。根が凍りつき、森番の足元が崩れる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 蛇
- **ID**: bt01_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が森番の体内に入り込む。骨格だけが森番の中で蠢いている。だが痛みはないようだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 蛇
- **ID**: bt01_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたび大きくなる蛇が森番に巻きつく。一巻きごとに締まり、森番の樹皮が砕ける。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 蛇
- **ID**: bt01_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いたまま動かない蛇。森番の足元で日向ぼっこしている。戦意がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: bt01_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が森番に小さな火を噴く。葉が一枚焦げた。森番は迷惑そうだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: bt01_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が森番を見据える。同じ森の住人同士、気が引けるのか。軽く翼で払っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 竜
- **ID**: bt01_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が口を開ける。一息で森番の半身が黒焦げになった。木の精霊に火は致命的だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 竜
- **ID**: bt01_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような鱗の竜が森番に体当たりする。森番の幹にひびが入り、枝が何本も折れた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 鋭い × 竜
- **ID**: bt01_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 爪の一振りで森番の幹が深く裂けた。金色の目が冷たく見下ろしている。
- **playerDamage**: 0
- **enemyDamage**: 5

### 壊れた × 竜
- **ID**: bt01_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が森番にぶつかる。火も吐けず、ただ体重をかけるだけ。それでも巨体は重い。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: bt01_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が前足を振り下ろす。森番の巨体が根元から揺れ、大地が震えた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 竜
- **ID**: bt01_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息が森番を包む。枝も根も、一瞬で霜に覆われた。凍った樹皮がぱきぱきと割れる。
- **playerDamage**: 0
- **enemyDamage**: 5

### 透き通った × 竜
- **ID**: bt01_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が光を集め、森番に放つ。光線が幹を貫いたが、穴はすぐに塞がった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 竜
- **ID**: bt01_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜が理性なく森番に突進する。噛みつき、引き裂き、焼く。森番の幹が腐り始める。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 竜
- **ID**: bt01_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りしている竜のいびきが地鳴りのように森番を揺らす。迷惑だが、致命的ではない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: bt01_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が森番の枝に止まる。風に吹かれて飛んでいった。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: bt01_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が森番の顔の前を舞う。森番の目が蝶を追い、一瞬だけ穏やかになる。だが傷は与えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: bt01_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の羽を持つ蝶が森番の枝葉の間を飛び回る。火の粉が散り、あちこちに小さな火がつく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 蝶
- **ID**: bt01_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が森番に突っ込む。かん、と甲高い音。枝先がひとつ折れた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: bt01_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽を持つ蝶が森番のそばをすれ違う。樹皮に細い切り傷が走った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 蝶
- **ID**: bt01_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が螺旋を描いて森番にぶつかる。ぱさり。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: bt01_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 羽ばたきが風を起こす巨蝶。森番の枝葉がちぎれて舞い散る。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: bt01_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が森番の枝に触れるたび、そこから凍りついていく。枝先が次々に落ちる。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蝶
- **ID**: bt01_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が森番を通り抜けていく。美しいが、痕跡を残さない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: bt01_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶が森番のまわりを飛ぶ。追えば迷い、振り払えば増える。森番の枝が行き先を見失って絡まり始めた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 蝶
- **ID**: bt01_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が森番の枝で羽を閉じて眠っている。起こしても別の枝に移るだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: bt01_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が森番の葉を揺らす。心地よいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: bt01_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい追い風が森番の枝を撫でる。森番は目を細めている。攻撃にならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: bt01_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が森番を包む。葉が瞬時に枯れ、樹皮が乾いて裂ける。木の精霊が苦悶の声を上げた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 風
- **ID**: bt01_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 同じ方向から吹き続ける頑固な風。森番の体が少しずつ傾いていく。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: bt01_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が森番の幹を斬る。枝が切り落とされ、地面に散った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: bt01_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 方向の定まらない乱気流。森番の葉がちらちら散るが、ダメージと呼べるほどではない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: bt01_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が森番を根元から揺さぶる。太い枝が何本も折れ、森番がよろめいた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 風
- **ID**: bt01_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が森番を叩く。葉が凍り、枝が白くなる。凍った枝が自重で折れた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: bt01_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が森番を通り過ぎる。心地よいが、力がない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 風
- **ID**: bt01_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪いの風が吹きつける。森番の葉がしおれ、帰り道を忘れた根がのたうつ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 風
- **ID**: bt01_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が森番を撫でる。森番の瞼が重くなる。だが、まだ起きている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: bt01_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの火が森番の足元に灯る。湿った樹皮に阻まれ、広がらない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 炎
- **ID**: bt01_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉のような炎が森番を包む。温かいだけで燃えない。森番はむしろ気持ちよさそうだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: bt01_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が森番に迫る。制御を失った炎が幹を焦がし、枝を焼き払う。木の精霊の天敵だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 炎
- **ID**: bt01_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が森番の幹に張りつく。水でも風でも揺らがない。森番がじりじりと焼かれていく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 炎
- **ID**: bt01_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が森番の幹を貫く。煙が一筋立ち昇り、幹に深い焦げ穴が開いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 炎
- **ID**: bt01_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が森番に触れる。紫と緑に明滅するが、温かくない。樹皮がわずかに変色しただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: bt01_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 天を衝く火柱が森番を包み込む。幹が黒く炭化し、枝が燃え落ちる。森番が絶叫した。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 炎
- **ID**: bt01_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い冷たい炎が森番を舐める。凍傷と火傷を同時に与え、樹皮がひび割れた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 炎
- **ID**: bt01_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が森番に触れる。空気が揺らいでいるだけだが、樹皮が煤けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 炎
- **ID**: bt01_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が森番に燃え移る。燃やしたものの形を覚える炎だ。森番の腕が炎の中で再現され、自分自身を殴り始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 炎
- **ID**: bt01_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が森番の足元でくすぶる。赤く明滅しているが、燃え上がる力がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: bt01_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 掌の氷片が森番にぶつかる。すぐに溶けた。森番が首を傾げている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: bt01_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が森番の肌を冷やす。森番は涼しそうにしている。怒りが少し収まった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: bt01_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が森番にぶつかる。凍傷と火傷。森番の樹皮がめくれ上がった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 氷
- **ID**: bt01_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷が森番に叩きつけられる。鋼より硬い氷塊が幹にめり込んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 氷
- **ID**: bt01_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱の剣が森番の幹を深く貫く。刺さったまま溶けずに残っている。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 氷
- **ID**: bt01_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が森番にぶつかって砕ける。破片が散るだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: bt01_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が森番を押し潰す。凍りついた重量に耐えきれず、森番の膝が折れた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 氷
- **ID**: bt01_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度に近い氷が森番を包む。樹液が凍り、森番の動きが完全に止まった。しかし一瞬で樹皮を割って再び動き出す。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 氷
- **ID**: bt01_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷が森番の足元に広がる。気づかず踏んだ森番がよろめいた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 氷
- **ID**: bt01_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が森番の根に張りつく。永遠の冬が足元から広がり、根が動かなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 氷
- **ID**: bt01_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が森番の足を濡らす。しずくの音が子守唄のように響くが、森番は眠らない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: bt01_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな影が森番に向かう。森番の影に吸い込まれて消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: bt01_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が森番を覆う。森番にとっては日差しが遮られただけだ。むしろ居心地がいい。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: bt01_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が森番の足元に張りつく。触れた根が焦げ、森番が飛び退いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 影
- **ID**: bt01_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が森番の足を縫いとめる。動けないだけで、傷にはならない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 影
- **ID**: bt01_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が森番の幹を斬りつける。輪郭のくっきりした傷跡が残った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 影
- **ID**: bt01_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 立体的にめくれ上がった影が森番にぶつかる。すり抜けて向こうへ行ってしまった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: bt01_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 森番より大きな影が立ち上がり、巨木の精霊と取っ組み合う。影の腕力は本物だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 影
- **ID**: bt01_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍りついた影が森番の根に張りつく。黒い霜が広がり、根が軋む。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: bt01_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が森番に重なる。存在が薄すぎて、何の影響も与えられない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: bt01_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪いの影が森番に触れる。触れた枝が影に変わり、森番の体が欠けていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 影
- **ID**: bt01_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように小さく縮んだ影が森番の足元にうずくまる。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: bt01_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。森番の葉がかすかに揺れるが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: bt01_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が森番に届く。巨木の精霊の動きが穏やかになるが、倒れはしない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 歌
- **ID**: bt01_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が響く。その熱量が空気を焦がし、森番の葉が枯れていく。歌は武器になる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: bt01_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が森番の耳元で鳴り続ける。うるさいだけだが、森番は集中を乱された。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 歌
- **ID**: bt01_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声のような歌が森番を襲う。樹皮にひびが入った。音波は木を砕く。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 歌
- **ID**: bt01_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの旋律が森番のまわりで鳴る。不快だが、害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: bt01_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる合唱が森番を揺らす。根が浮き、幹にひびが走る。歌の力は侮れない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 歌
- **ID**: bt01_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 聴いた者の動きを止める歌。森番の枝が凍りつき、しばし静止した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 歌
- **ID**: bt01_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ旋律が森を満たす。美しいが、森番には響かない。木は耳で聴かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 歌
- **ID**: bt01_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が森番に取り憑く。枝が拍子に合わせて動き出し、自分の幹を叩き始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 歌
- **ID**: bt01_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 抗えない子守唄が森番を包む。巨木の精霊の瞼がゆっくり下がる。完全には眠らないが、隙ができた。
- **playerDamage**: 0
- **enemyDamage**: 2

---

## 沈黙

### 小さな × 沈黙
- **ID**: bt01_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: ふと静けさが訪れる。森番が耳を澄ますが、すぐに鳥の声が戻った。何も変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: bt01_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 安らぎの静寂が森を包む。森番の怒りが少し薄れるが、拳は下ろさない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 沈黙
- **ID**: bt01_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が空気を焦がす。森番の樹皮が乾き、ひび割れていく。音のない熱だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 沈黙
- **ID**: bt01_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が森番を覆う。何を叫んでも吸い込まれる。森番は困惑しているが、傷は負っていない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 沈黙
- **ID**: bt01_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような無言が森番を貫く。言葉より痛い沈黙に、森番の枝が震えた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 沈黙
- **ID**: bt01_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂のはずなのにノイズが混じる。森番は首を傾げているだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: bt01_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が森番を包み込む。音が完全に消え、森番は自分の存在を見失いかける。枝が力なく下がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 沈黙
- **ID**: bt01_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた静寂が時を止める。森番が一瞬、彫像のように固まった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 沈黙
- **ID**: bt01_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 泉のように澄んだ静寂。森番の心が清められるが、ダメージにはならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 沈黙
- **ID**: bt01_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う呪いの沈黙が森番を飲み込む。森の声が消え、根が震え、枝が枯れていく。森の精霊にとって、声を失うことは死に等しい。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 沈黙
- **ID**: bt01_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさが漂う。森番のまぶたが少し重くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: bt01_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が大きすぎる兜を被って突進する。森番の足に剣が当たったが、木の棒で叩いたほどの威力しかない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 騎士
- **ID**: bt01_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 騎士が剣を収め、森番に手を差し出す。森番はきょとんとしている。戦いにならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 騎士
- **ID**: bt01_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎に包まれた騎士が森番に斬りかかる。燃える剣が幹に食い込み、切り口から煙が立つ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: bt01_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が体当たりする。びくともしない重量で森番を押した。幹がわずかに傾く。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 騎士
- **ID**: bt01_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が一閃する。無駄のない構えから繰り出された斬撃が、森番の幹に深い傷を刻んだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 騎士
- **ID**: bt01_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣で森番に挑む騎士。鎧はへこみ、盾は砕けている。それでも一撃を入れた。意地だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 騎士
- **ID**: bt01_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の重装騎士が大剣を振り下ろす。森番の枝が何本も切り落とされ、地面が軋んだ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 騎士
- **ID**: bt01_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜をまとった騎士の剣が森番に突き立てられる。傷口から氷が広がり、樹液が凍った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 騎士
- **ID**: bt01_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 影の薄い騎士が剣を振る。森番は気づいていない。斬られたことにすら。薄い切り傷が残った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: bt01_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士が森番に斬りかかる。呪われた剣が樹皮を侵食し、傷が黒く腐っていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 騎士
- **ID**: bt01_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士がふらふらと剣を振る。半分寝ている。それでも一応、樹皮を削った。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 魔女

### 小さな × 魔女
- **ID**: bt01_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が呪文を唱える。大きな帽子の下から小さな火花が飛ぶ。森番の枝先が少し焦げた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: bt01_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が森番に話しかける。穏やかな声だが、森番は言葉を理解しない。対話は成立しなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 魔女
- **ID**: bt01_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が森番に降り注ぐ。魔女の怒りが業火となり、巨木の精霊を焼く。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: bt01_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で森番を叩く。がつん、がつんと地味な攻撃が続く。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: bt01_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻の魔女が呪文を一言。鋭い魔力の矢が森番の幹を穿つ。正確な狙いだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: bt01_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 魔力が暴走する魔女の呪文が森番に当たる。どこに飛ぶかわからない魔法だが、たまたま効いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 魔女
- **ID**: bt01_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 杖を振るう代わりに拳で殴る魔女。太い腕が森番の幹にめり込んだ。魔法は要らなかった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 魔女
- **ID**: bt01_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が森番を包む。霜が枝を覆い、葉が凍って散った。森番の動きが鈍くなる。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 魔女
- **ID**: bt01_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女が呪文を囁く。森番の耳元で、声だけが響く。枝が一本、静かに落ちた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 魔女
- **ID**: bt01_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 自らの呪いに蝕まれた魔女が森番に手をかざす。呪いが伝染し、森番の枝が変異し始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 魔女
- **ID**: bt01_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: うとうとする魔女が寝ぼけて呪文を唱える。中途半端な魔法が森番の枝を少し揺らした。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: bt01_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が王冠を掲げて命令する。「退けっ」森番は意に介さない。王の権威は森には届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: bt01_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が森番に語りかける。穏やかな言葉。しかし精霊には人の理屈が通じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 王
- **ID**: bt01_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠を戴く王が命じる。怒りの炎が森番に燃え移り、枝が火を吹いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: bt01_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座から動かない王が一言だけ命令を下す。「砕け」しかし、森番に臣下はいない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 王
- **ID**: bt01_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が森番の弱点を見抜く。一言の命令で狙うべき箇所を指し示した。的確な指揮だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 王
- **ID**: bt01_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 歪んだ王冠の王が虚ろな目で立っている。命令を出すこともできない。森番は見向きもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: bt01_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が剣を抜き、森番に斬りかかる。玉座より戦場を好む王の一撃は重い。幹が深く裂けた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 王
- **ID**: bt01_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく命令が風に乗り、森番の幹に霜が広がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: bt01_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 存在の薄い王が何か言った。森番は気づかない。誰にも見えない王の命令は空を切る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 王
- **ID**: bt01_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が森番に手を触れる。枝先から金色に変わっていく。重くなった枝が自重で折れた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 王
- **ID**: bt01_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 王が玉座で居眠りしている。森番のことなど知らないとばかりに。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 亡霊

### 小さな × 亡霊
- **ID**: bt01_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が笑いながら森番をすり抜ける。冷たい風が通り過ぎただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: bt01_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が森番に微笑む。森番が少しだけ戸惑う。しかし、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 亡霊
- **ID**: bt01_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎をまとった亡霊が森番に取り憑く。怨念の火が樹皮を内側から焦がす。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: bt01_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 何百年も同じ場所に立つ霊。森番がそこを通ろうとするたび、冷気にはじかれる。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: bt01_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊の視線が森番を射抜く。森番の枝が痙攣した。精霊にも後ろめたいことがあるらしい。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 亡霊
- **ID**: bt01_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が森番の前をさまよう。自分が何をすべきか忘れている。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: bt01_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が森番に斬りかかる。死んで枷が外れた力は凄まじい。樹皮が弾け飛んだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 亡霊
- **ID**: bt01_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が森番に触れる。触れた幹が白く凍り、樹液が結晶化した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: bt01_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が森番をすり抜ける。実体がほとんどない。涼しい風が通っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 亡霊
- **ID**: bt01_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られた霊が森番に絡みつく。呪いが森番にも伝染し、枝が黒ずんでいく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 亡霊
- **ID**: bt01_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が森番の足元を漂う。存在感が薄れたり戻ったり。脅威にならない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: bt01_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が森番に光を反射する。森番は眩しそうに目を細めるが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 鏡
- **ID**: bt01_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が森番の姿を映す。少しだけ美しく見える森番。攻撃にはならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: bt01_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中の炎が森番に向かって飛び出す。周囲に火はないのに、森番が燃え始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 鏡
- **ID**: bt01_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が森番にぶつかる。跳ね返り、またぶつかる。森番の幹に何度もめり込んだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 鏡
- **ID**: bt01_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の刃のような破片が森番に飛ぶ。樹皮に無数の切り傷が刻まれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 鏡
- **ID**: bt01_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が森番の姿を映す。何人にも分裂した像。森番が自分を見て混乱している。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: bt01_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が森番の前に立ちはだかる。映った自分の巨体に驚いた森番が、一歩退いた。鏡の威圧だ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 鏡
- **ID**: bt01_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍りついた鏡面が森番に冬の世界を映す。森番の枝先が霜に覆われていく。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: bt01_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が森番の向こうに立つ。何も映さず、何も遮らず、何も変えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 鏡
- **ID**: bt01_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が森番の姿を映す。鏡の中の森番が動き出し、本体を殴り始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 鏡
- **ID**: bt01_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡が森番をぼんやり映す。映像が遅れて動く。森番は自分の寝顔を見ている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: bt01_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が森番の足元に転がる。踏まれて潰れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: bt01_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が森番に抱きつく。笑顔が縫い付けてある。森番は困惑して動きを止めた。だが傷はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: bt01_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が森番に投げつけられる。火がついた藁が樹皮に引っかかり、じわじわ燃え広がる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 人形
- **ID**: bt01_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が森番に飛んでいく。がつん。木と木がぶつかる音。同族嫌悪のような一撃だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: bt01_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が森番の幹を切り刻む。糸は見えないが、人形は優雅に舞っている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: bt01_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が森番を見上げている。残った目がじっと見つめる。不気味だが、無害だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: bt01_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大の木彫り人形が丸太のような腕を振る。ゴーレムの一撃が森番の幹に食い込んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 人形
- **ID**: bt01_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が森番に抱きつく。溶けながら冷気を放ち、森番の幹が白く霜に覆われた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: bt01_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が森番にぶつかり、砕ける。破片が樹皮に刺さった。小さな傷だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: bt01_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が夜になると位置を変える。森番の枝に登り、根に潜り、気がつけば体中に増殖している。森番の動きが鈍くなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 人形
- **ID**: bt01_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が森番の根元に横たわる。持つと眠くなる人形だが、森番は手で持っていない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: bt01_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が森番に降りかかる。木の精霊にとっては恵みだ。むしろ元気になった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: bt01_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が森番を潤す。葉がいきいきと茂る。木に水をやってどうする。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 雨
- **ID**: bt01_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が降り注ぐ。灼熱の滴が森番の葉を焼き、枝を焦がす。木の精霊が悲鳴を上げた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 雨
- **ID**: bt01_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が森番に叩きつけられる。石のような氷の粒が枝を折り、葉を散らした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 雨
- **ID**: bt01_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が森番の全身を刺す。一滴一滴が樹皮に穴を開けていく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 雨
- **ID**: bt01_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: リズムのおかしい雨が降る。上に向かったり止まったり。森番は首を傾げている。害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: bt01_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が森番を叩く。滝のような水量に押され、根が緩み、巨体が傾いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 雨
- **ID**: bt01_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が森番を包む。触れたものを氷の膜で覆い、枝が重みで垂れ下がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: bt01_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が森番を洗う。穢れが流れ落ちるが、傷はつかない。浄化は攻撃にならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 雨
- **ID**: bt01_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨が森番に降り注ぐ。浴びた根が動かなくなり、枝が重く垂れ下がった。森番がその場に縫いとめられる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 雨
- **ID**: bt01_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしとと降る眠い雨。子守唄のような雨音に、森番の瞼が重くなっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

---

# 2. 敵文①outcomes（11件）
# 「[mod*]森番が 魔女を 追いかけてくる」（ターン1,3,5...）

### 屈強な（初期値）
- **ID**: bt01_enemy1_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 森番が猛然と迫ってくる。巨木のような腕が振り下ろされた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 小さな
- **ID**: bt01_enemy1_small
- **conditions**: { s1: 'mod_small' }
- **text**: 森番が縮んで子供ほどの大きさになった。小さな枝で魔女の足を叩く。くすぐったい。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい
- **ID**: bt01_enemy1_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 優しい森番がゆっくり近づいてくる。追いかけているというより、見守っている。危害を加える気はなさそうだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt01_enemy1_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 自らの体が燃えているのに、森番は構わず突進してくる。炎をまとった腕が振り回される。熱い。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い
- **ID**: bt01_enemy1_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 樹皮が鎧のように厚い森番が迫る。重い一撃が地面を割った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い
- **ID**: bt01_enemy1_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 枝先が刃のように尖った森番が走ってくる。かすめただけで肌が裂けた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: bt01_enemy1_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた森番がよろめきながら追ってくる。枝は折れ、幹は裂けている。振り回す腕に力がない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 凍てついた
- **ID**: bt01_enemy1_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍りついた森番が軋みながら迫る。動きは遅いが、触れると凍傷を負う。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った
- **ID**: bt01_enemy1_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った森番が音もなく近づいてくる。見えにくい分、避けるのが難しい。半透明の腕に掴まれた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた
- **ID**: bt01_enemy1_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた森番の目に理性がない。追いかけるというより、暴走している。枝が鞭のように叩きつけられた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い
- **ID**: bt01_enemy1_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い森番がのろのろと追ってくる。あくびをしている。その隙に距離をとった。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（11件）
# 「森番が [mod*]根を 振り下ろしている」（ターン2,4,6...）

### 堅い（初期値）
- **ID**: bt01_enemy2_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 堅い根が振り下ろされ、地面が割れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 小さな
- **ID**: bt01_enemy2_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな根がぺしりと当たる。痛くはないが、馬鹿にされた気分だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい
- **ID**: bt01_enemy2_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 優しい根がそっと振り下ろされる。撫でるような一撃。痛くない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt01_enemy2_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 燃え盛る根が振り下ろされる。地面に炎の跡が残った。髪の先が焦げる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 鋭い
- **ID**: bt01_enemy2_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い根が槍のように突き出される。かわしきれず、腕を切られた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: bt01_enemy2_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた根が振り下ろされるが、途中でぽきりと折れた。破片が頬をかすめる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な
- **ID**: bt01_enemy2_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 太い根が大地ごと叩きつけられる。地震のような衝撃。足元がよろめいた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた
- **ID**: bt01_enemy2_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍りついた根が振り下ろされる。当たった地面に霜が広がり、足が滑った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った
- **ID**: bt01_enemy2_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った根が見えない。振り下ろされたことに気づいたのは、痛みが走った後だった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた
- **ID**: bt01_enemy2_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた根が振り下ろされる。当たった場所が黒く変色し、しびれが広がる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い
- **ID**: bt01_enemy2_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い根がゆっくり振り下ろされる。あまりに遅くて、横に歩いて避けた。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 統計レポート

## 自文outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| enemyDamage平均 | 1.83 |
| enemyDamage=0の割合 | 36.4% (68/187) |
| enemyDamage≥4の割合 | 19.3% (36/187) |
| enemyDamage=5の割合 | 5.3% (10/187) |

### enemyDamage分布
| enemyDamage | 件数 | 割合 |
|-------------|------|------|
| 0 | 68 | 36.4% |
| 1 | 26 | 13.9% |
| 2 | 24 | 12.8% |
| 3 | 33 | 17.6% |
| 4 | 26 | 13.9% |
| 5 | 10 | 5.3% |

## 敵文①outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 1.82 |
| playerDamage=0の割合 | 36.4% (4/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |
| playerDamage≥4の割合 | 18.2% (2/11) |

### playerDamage分布
| playerDamage | 件数 |
|--------------|------|
| 0 | 4 |
| 1 | 2 |
| 2 | 2 |
| 3 | 1 |
| 4 | 2 |

## 敵文②outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 1.73 |
| playerDamage=0の割合 | 27.3% (3/11) |
| playerDamage≥3の割合 | 36.4% (4/11) |

### playerDamage分布
| playerDamage | 件数 |
|--------------|------|
| 0 | 3 |
| 1 | 2 |
| 2 | 2 |
| 3 | 3 |
| 4 | 1 |
