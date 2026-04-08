# ノードBT03「呪縛の騎士」Outcome一覧

- **敵名**: 呪縛の騎士（呪いに縛られた騎士。3パターンのローテーション）
- **敵HP**: 20
- **勝利報酬**: 12Q

## 文構成
- **自文**: [mod*][subj*]が 騎士に 立ち向かう （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,4...): 呪われた[subj*]が 魔女を [pred*] （119有効パターン: 17subj × 7を格述語）
- **敵文②** (ターン2,5...): 呪われた剣が [mod*]呪いを 放っている （11パターン）
- **敵文③** (ターン3,6...): 呪いが 魔女に [pred*] （11有効パターン: に格述語11種）

## defaultOutcome

### 自文default
- **text**: 書き換えが騎士に届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default（格歪み）
- **text**: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
- **playerDamage**: 4
- **enemyDamage**: 0

### 敵文② default
- **text**: 呪われた剣から呪いの波動が放たれる。体の芯が痺れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 敵文③ default（格歪み）
- **text**: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
- **playerDamage**: 4
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）

## 子猫

### 小さな × 子猫
- **ID**: bt03_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が騎士の足元でにゃあと鳴く。鎧の隙間に入り込むが、くすぐったいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: bt03_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が騎士の膝に擦り寄る。兜の奥で、呪いに染まった目がわずかに揺れた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 子猫
- **ID**: bt03_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が騎士の鎧に飛びつく。呪われた甲冑が赤熱した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 子猫
- **ID**: bt03_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が騎士の兜にぶつかる。かちん。兜がずれて視界が塞がった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 子猫
- **ID**: bt03_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が鎧の隙間を引っかく。関節部の革紐が切れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 子猫
- **ID**: bt03_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが騎士の前に転がる。綿が散って、それだけだ。騎士は一瞥もしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: bt03_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような体格の子猫が騎士の盾に爪を立てる。盾が二つに割れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 子猫
- **ID**: bt03_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が騎士の剣に触れる。剣が凍りつき、振れなくなった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 子猫
- **ID**: bt03_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が騎士をすり抜ける。向こう側で首を傾げている。傷はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: bt03_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪いの猫が騎士にまとわりつく。呪いと呪いが干渉し合い、騎士の動きが乱れた。
- **playerDamage**: 0
- **enemyDamage**: 2
- **reward**: 呪いの毛玉(7)

### 眠い × 子猫
- **ID**: bt03_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が騎士の盾の上で丸くなる。騎士は盾を下ろせなくなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蛇

### 小さな × 蛇
- **ID**: bt03_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が鎧の隙間に潜り込む。中から齧っているが、革紐を一本切っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: bt03_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が騎士の腕に巻きつく。呪いに凍えた体を温めている。攻撃にはならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: bt03_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の蛇が騎士の鎧を這い上がる。呪われた甲冑が赤熱し、中の騎士がうめいた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 蛇
- **ID**: bt03_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が騎士の足に巻きつく。締め上げる力が鎧を歪ませた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 蛇
- **ID**: bt03_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が鎧の隙間を正確に突く。呪われた血に毒が混じり、騎士が膝をついた。
- **playerDamage**: 0
- **enemyDamage**: 3
- **reward**: 呪毒の瓶(10)

### 壊れた × 蛇
- **ID**: bt03_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮途中の蛇が騎士に向かうが、古い皮が鎧に引っかかって動けない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: bt03_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が騎士の全身に巻きつき、鎧ごと締め上げる。金属の軋む音が響く。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 蛇
- **ID**: bt03_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜をまとった蛇が騎士の剣腕に巻きつく。腕が凍りつき、剣が手から滑り落ちた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 蛇
- **ID**: bt03_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が鎧の中に入り込む。骨格が見えるが、噛まない。偵察のようだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 蛇
- **ID**: bt03_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたびに大きくなる蛇が騎士を締め上げる。呪いの上に呪い。鎧が砕け始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 蛇
- **ID**: bt03_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いた蛇が騎士の足元で眠っている。踏まれても起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: bt03_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が騎士の兜に火を噴く。兜が熱くなり、騎士が首を振った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: bt03_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな竜が騎士を見下ろす。同じ戦士としての哀れみだ。軽く翼で騎士を押した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 竜
- **ID**: bt03_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が口を開ける。呪われた鎧が融け始めた。騎士の叫びが鎧の中で反響する。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 竜
- **ID**: bt03_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような鱗の竜が突進する。騎士が盾ごと吹き飛ばされ、壁にめり込んだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 鋭い × 竜
- **ID**: bt03_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 爪が呪われた鎧を引き裂く。中から黒い煙が漏れ出した。呪いの一部が解けたか。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 呪いの鎧片(12)

### 壊れた × 竜
- **ID**: bt03_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が騎士にぶつかる。二体の壊れた戦士がぶつかり合う。それでも竜の体重が勝った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: bt03_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が前足を振り下ろす。呪われた騎士が地面にめり込んだ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 竜
- **ID**: bt03_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息が騎士を包む。鎧が凍りつき、関節が動かなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 竜
- **ID**: bt03_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が騎士に光を集めて放つ。光線が鎧を貫いたが、穴はすぐに呪いで塞がった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 竜
- **ID**: bt03_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜の呪いと騎士の呪いが共鳴する。二つの呪いが食い合い、騎士の鎧に亀裂が走った。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 竜
- **ID**: bt03_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りする竜のいびきが騎士の鎧を震わせる。鎧のボルトが緩んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: bt03_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が騎士の兜の隙間に入った。中で暴れている。騎士が首を振るが出てこない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: bt03_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 蝶が騎士の鎧に止まる。呪いの黒い表面に、一瞬だけ色が戻った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 蝶
- **ID**: bt03_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の蝶が騎士の周りを旋回する。火の粉が鎧の隙間に入り、中の呪いが焼ける匂いがした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 蝶
- **ID**: bt03_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が騎士の兜に突っ込む。かん。兜の装飾が一つ飛んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: bt03_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽を持つ蝶が騎士の鎧の継ぎ目を切る。革紐が落ち、肩当てが外れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 蝶
- **ID**: bt03_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が騎士の前でくるくる回る。騎士の目が追うが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: bt03_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 巨蝶の羽ばたきが騎士のマントを引きちぎる。呪いの一部がマントと共に剥がれた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: bt03_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が鎧に触れるたび、そこから凍りついていく。騎士の動きが緩慢になった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蝶
- **ID**: bt03_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が騎士の鎧を通り抜ける。呪いの中を一瞬だけ光が走ったが、消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: bt03_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶が騎士の周りを飛ぶ。追えば呪いが乱れ、振り払えば増える。鎧の呪いに干渉し始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 蝶
- **ID**: bt03_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が騎士の肩で羽を閉じて眠った。呪いで動き続ける体に、小さな安息。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: bt03_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が騎士のマントをはためかせる。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: bt03_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい風が騎士の鎧を撫でる。呪いに冷えた金属が少しだけ温まった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: bt03_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が騎士を包む。鎧が灼熱し、中の騎士が蒸されていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 風
- **ID**: bt03_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 頑固な風が騎士を押し続ける。重装備の体が少しずつ押し戻されていく。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: bt03_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が鎧の継ぎ目を切り裂く。呪いの煙が漏れ出した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: bt03_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 乱気流が騎士の周りで渦を巻く。マントが乱れただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: bt03_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が騎士を鎧ごと吹き飛ばす。地面を転がり、呪いの鎧がへこんだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 風
- **ID**: bt03_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が騎士を叩く。鎧が霜に覆われ、関節が凍りついて動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: bt03_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が騎士の呪いの臭気を吹き払う。だが呪いは消えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 風
- **ID**: bt03_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 帰り道を忘れる風が吹く。騎士が立ち止まり、何と戦っていたか忘れかけた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 風
- **ID**: bt03_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が騎士の兜の中を撫でる。呪いが一瞬だけ緩んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: bt03_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの火が騎士の足元に灯る。暗い鎧を照らすが、燃えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 炎
- **ID**: bt03_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉の火のような温もりが騎士を包む。呪いの冷たさが一瞬だけ和らいだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: bt03_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が騎士を飲み込む。呪われた鎧が赤くなり、白くなり、融け始めた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 炎
- **ID**: bt03_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が騎士の鎧に張りつく。呪いが消そうとするが、炎も消えない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 炎
- **ID**: bt03_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が鎧の一点を穿つ。穴から呪いの黒い煙が噴き出した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 炎
- **ID**: bt03_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が鎧に触れる。紫と緑に明滅するが、呪いの色に溶け込んだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: bt03_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 火柱が騎士を包み込む。呪われた鎧が歪み、融け落ちる寸前まで灼けた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 炎
- **ID**: bt03_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 冷たい炎が鎧に張りつく。凍傷が鎧を脆くし、ひびが走った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 炎
- **ID**: bt03_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が鎧の表面を舐める。呪いだけが焦げる匂いがした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 炎
- **ID**: bt03_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が騎士の鎧に燃え移る。呪いが呪いを焼く。鎧が自壊し始めた。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 呪鉄の欠片(15)

### 眠い × 炎
- **ID**: bt03_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が鎧の足元でくすぶる。温かいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: bt03_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷片が鎧にぶつかって砕ける。かちん、と音がしただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: bt03_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が鎧を冷やす。呪いの熱が少しだけ引いた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: bt03_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が騎士にぶつかる。熱と冷の衝撃で鎧に亀裂が入った。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 氷
- **ID**: bt03_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷の塊が騎士の鎧を直撃する。鎧がへこみ、中で骨が軋んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 氷
- **ID**: bt03_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱の剣が鎧の隙間を貫く。呪われた血が凍りながら噴き出した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 氷
- **ID**: bt03_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が鎧にぶつかって散る。破片が散らばるだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: bt03_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が騎士を押し潰す。鎧が歪み、呪いの封印が一つ砕けた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 氷
- **ID**: bt03_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度の氷が騎士を包む。鎧が凍りつき、呪いの動力が一時停止した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 氷
- **ID**: bt03_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷が騎士の足元に広がる。踏んだ騎士がよろめいた。重装備は氷に弱い。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 氷
- **ID**: bt03_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が鎧を覆う。呪いの上に呪い。騎士の動きが止まった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 氷
- **ID**: bt03_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が鎧を濡らす。錆びるには時間がかかる。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: bt03_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が騎士の影に紛れる。見分けがつかない。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: bt03_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が騎士を覆う。呪いに苦しむ体を少しだけ休ませた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: bt03_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎の影が騎士の鎧を焼く。呪いの紋様が焦げて消えた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 影
- **ID**: bt03_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が騎士の足を縫いとめる。呪いの力でも引き剥がせない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 影
- **ID**: bt03_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が鎧の継ぎ目を切る。呪いの鎖が一本断たれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 影
- **ID**: bt03_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: めくれ上がった影が騎士をすり抜ける。呪いの鎧には影も掴めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: bt03_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 騎士より大きな影が立ち上がり、鎧を締め上げる。呪いの力とせめぎ合っている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 影
- **ID**: bt03_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍った影が騎士の足元に張りつく。黒い霜が鎧を這い上がった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: bt03_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が騎士と重なる。薄すぎて、呪いの鎧には届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: bt03_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪いの影が騎士に触れる。鎧の一部が影になり、形を失った。呪いが呪いを侵食する。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 影
- **ID**: bt03_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影が騎士の真下に縮む。何もできない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: bt03_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。騎士の歩調がわずかに乱れたが、すぐ戻った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: bt03_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が騎士に届く。兜の奥で、呪いに支配された目がわずかに潤んだ。
- **playerDamage**: 0
- **enemyDamage**: 1
- **reward**: 騎士の涙(8)

### 燃え盛る × 歌
- **ID**: bt03_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が響く。空気が焦げ、呪いの紋様が赤く明滅した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: bt03_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止まらない歌が騎士の頭の中で反響する。呪いの命令が一瞬だけかき消された。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 歌
- **ID**: bt03_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声が鎧に共鳴する。呪いの紋様にひびが入った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 歌
- **ID**: bt03_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの旋律。騎士の歩調が一瞬乱れたが、呪いがすぐに修正した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: bt03_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる歌声が鎧を揺らす。呪いの封印が一つ弾け飛んだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 歌
- **ID**: bt03_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 動きを止める歌が騎士を縛る。呪いの力で動こうとするが、体が言うことを聞かない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 歌
- **ID**: bt03_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ旋律が騎士の鎧を通り抜ける。呪いの奥にいる本来の騎士が、一瞬だけ意識を取り戻した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 歌
- **ID**: bt03_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が騎士に取り憑く。呪いの命令と歌が混線し、騎士の体が痙攣した。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 歌
- **ID**: bt03_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 子守唄が騎士を包む。呪いが抵抗するが、騎士の体が重くなっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

---

## 沈黙

### 小さな × 沈黙
- **ID**: bt03_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 一瞬の静寂。騎士の鎧の軋みだけが聞こえる。何も変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: bt03_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 穏やかな静寂が騎士を包む。呪いの囁きが一瞬だけ途切れた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 沈黙
- **ID**: bt03_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が空気を焦がす。呪いの紋様が赤く燃え、鎧が歪んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 沈黙
- **ID**: bt03_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が騎士を覆う。呪いの命令も届かない。騎士が自分の意志で止まった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 沈黙
- **ID**: bt03_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような沈黙が呪いの声を断つ。騎士が一瞬、正気の目をした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 沈黙
- **ID**: bt03_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 不完全な沈黙にノイズが混じる。呪いの囁きがノイズと区別できなくなった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 沈黙
- **ID**: bt03_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が呪いの声を完全に封じる。騎士が膝をつき、初めて自分で呼吸した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 沈黙
- **ID**: bt03_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた静寂が騎士を止める。呪いも凍った。一時的な休戦だ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 沈黙
- **ID**: bt03_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 澄み切った沈黙が呪いを透かす。鎧の奥に、かつて善良だった騎士の顔が見えた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 沈黙
- **ID**: bt03_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う沈黙が騎士を飲み込む。呪いの命令が届かなくなった。体が崩れ落ちた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 沈黙
- **ID**: bt03_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠気を誘う静寂。呪いに動かされ続けた体が休息を求めている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: bt03_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が呪縛の騎士に果敢に斬りかかる。鎧に弾かれたが、勇気は本物だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 騎士
- **ID**: bt03_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が呪縛の騎士に手を差し出す。「呪いを解いてやる」刃ではなく言葉で。呪いが一瞬ほころんだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 騎士
- **ID**: bt03_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎の騎士が呪縛の騎士に斬りかかる。燃える剣が呪いの鎧を切り裂いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: bt03_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が体当たりする。呪いの騎士と正面からぶつかり、拮抗している。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 騎士
- **ID**: bt03_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が鎧の継ぎ目を正確に突く。呪いの鎧にも弱点はある。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 騎士
- **ID**: bt03_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣の騎士が呪縛の騎士に向かう。同じ壊れた者同士。折れた切っ先が鎧の隙間に入った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 騎士
- **ID**: bt03_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の騎士が大剣を叩きつける。呪いの鎧が砕け、中の骨が見えた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 騎士
- **ID**: bt03_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜の騎士の剣が呪いの鎧に触れる。凍った金属が脆くなり、砕けた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 騎士
- **ID**: bt03_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 気配のない騎士が死角から斬る。呪いは正面しか見えない。薄い傷が鎧に残った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: bt03_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士同士が剣を交える。呪いが共鳴し、互いの鎧に亀裂が走った。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 呪鎖の環(12)

### 眠い × 騎士
- **ID**: bt03_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士がふらふらと剣を振る。呪縛の騎士は律儀に受ける。隙をついて一撃入った。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 魔女

### 小さな × 魔女
- **ID**: bt03_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が呪文を唱える。小さな光が呪いの紋様に触れて、ちりちりと焼けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: bt03_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が解呪の薬を調合する。完全には効かないが、呪いの進行が緩やかになった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 魔女
- **ID**: bt03_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が呪いの鎧を焼く。呪いが悲鳴のような音を立てた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: bt03_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で鎧を叩く。がつん、がつん。地道に呪いの紋様を削っている。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: bt03_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 魔力の矢が呪いの核心を貫く。鎧から黒い煙が噴き出した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: bt03_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 暴走する魔法が呪いの鎧に当たる。何が起きるかわからない魔法は呪いにも予測できない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 魔女
- **ID**: bt03_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 拳で殴る魔女が呪いの鎧を叩き割る。腕力で呪いを砕くとは思わなかった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 魔女
- **ID**: bt03_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が呪いの鎧を覆う。呪いが凍りつき、騎士が動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 魔女
- **ID**: bt03_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女が呪いの内側に手を伸ばす。呪いに気づかれないまま、鎖を一本解いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 魔女
- **ID**: bt03_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪いに蝕まれた魔女が手をかざす。毒をもって毒を制す。呪いが内側から崩れ始めた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 魔女
- **ID**: bt03_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: うとうとする魔女が寝ぼけて杖を振る。偶然、呪いの紋様の一つを消した。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: bt03_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が「ひざまずけ！」と叫ぶ。呪いに縛られた騎士に王の命令は届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: bt03_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が騎士に語りかける。「汝の忠誠を覚えている」呪いの目に光が差した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 王
- **ID**: bt03_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠の王が裁きを下す。呪いの鎧が炎に包まれた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: bt03_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座の王が動かない。騎士も動かない。にらみ合い。呪いが先にしびれを切らした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 王
- **ID**: bt03_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が呪いの弱点を見抜く。一言の指示で、致命的な隙が暴かれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 王
- **ID**: bt03_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 虚ろな目の王が立ちすくんでいる。呪われた騎士と壊れた王。どちらも救えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: bt03_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が自ら剣を振る。かつて仕えた騎士の呪いを力ずくで砕く覚悟だ。鎧に亀裂が走った。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 王
- **ID**: bt03_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく勅令が呪いの鎧を霜で覆った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: bt03_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 存在の薄い王が何か命じた。呪いには聞こえない。しかし騎士の中の本人には届いたようだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 王
- **ID**: bt03_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が鎧に触れる。呪いの鎧が金色に変わり、重みで動けなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 王
- **ID**: bt03_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 居眠りする王。呪いの騎士が近づくが、王のいびきで目が覚めた——騎士の中の本人が。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 亡霊

### 小さな × 亡霊
- **ID**: bt03_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が騎士をすり抜ける。冷気が鎧の中を通り、呪いが一瞬ざわめいた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: bt03_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が騎士に微笑む。呪いに支配された目の奥で、何かが揺れた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 亡霊
- **ID**: bt03_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎の亡霊が騎士に取り憑く。呪いと怨念が鎧の中でせめぎ合い、黒い煙が噴き出した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: bt03_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 同じ場所に立つ霊が騎士の行く手を塞ぐ。呪いの力でも押し退けられない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: bt03_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊の視線が呪いの核を射抜く。鎧に亀裂が走った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 亡霊
- **ID**: bt03_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が騎士の前をさまよう。呪いは亡霊に興味がない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: bt03_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が呪縛の騎士に斬りかかる。死者同士の戦い。呪いの鎧が裂けた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 亡霊
- **ID**: bt03_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が鎧に触れる。呪いの紋様が凍りつき、一部が剥がれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: bt03_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が鎧を通り抜ける。呪いには触れずに、中の騎士の肩を叩いた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 亡霊
- **ID**: bt03_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られた霊が騎士に絡みつく。呪い同士が絡み合い、互いを削り合う。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 亡霊
- **ID**: bt03_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が騎士の前を漂う。存在感が薄く、呪いも反応しない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: bt03_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が騎士の顔を映す。呪いに染まった顔。かつての自分を思い出せるか。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 鏡
- **ID**: bt03_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が呪われる前の騎士の姿を映す。誇り高い顔。騎士の目がわずかに潤んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 鏡
- **ID**: bt03_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中の炎が呪いを映し、増幅して返す。呪いが自分自身に灼かれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 鏡
- **ID**: bt03_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が騎士の前に立つ。呪いの剣が鏡に当たり、弾き返された。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 鏡
- **ID**: bt03_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の破片が鎧の隙間に飛び込む。反射した光が呪いの紋様を焼いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 鏡
- **ID**: bt03_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が騎士の呪われた姿を歪めて映す。呪いが困惑した。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: bt03_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が騎士の呪いを映し出す。可視化された呪いが自分を認識し、暴れ始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 鏡
- **ID**: bt03_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍った鏡が騎士に冬を映す。呪いの熱が奪われ、鎧が冷え切った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: bt03_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が騎士の前に浮かぶ。呪いだけが映り、騎士本人は映らない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 鏡
- **ID**: bt03_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が呪いの騎士を映す。鏡の中の呪いが実体化し、騎士を両側から挟み撃ちにした。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 鏡
- **ID**: bt03_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡が騎士の寝顔を映す。呪いの下で、騎士はずっと眠りたかったのかもしれない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: bt03_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が騎士の鎧の隙間に入り込む。中から何かをいじっているが、効果は薄い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: bt03_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が騎士の手にしがみつく。呪いの剣を持つ手が、一瞬だけ震えた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 人形
- **ID**: bt03_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が鎧に投げつけられる。呪いの紋様が焦げ、一部が消えた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 人形
- **ID**: bt03_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が鎧にぶつかる。がつん。呪いの紋様にひびが入った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: bt03_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が騎士の鎧の継ぎ目を切る。糸は見えない。呪いの鎖が一本断たれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: bt03_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首のもげかけた人形が騎士を見つめている。呪われた者と壊れた者。同類だ。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: bt03_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: ゴーレムの一撃が呪いの鎧を叩く。鎧がへこみ、中で呪いが軋んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 人形
- **ID**: bt03_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が鎧に抱きつく。溶けながら冷気を放ち、鎧の関節が凍った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: bt03_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が鎧にぶつかって砕ける。破片が呪いの紋様を引っかいた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: bt03_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が鎧の中に入り込む。呪いと呪いが共鳴し、騎士が自分の体を叩き始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 人形
- **ID**: bt03_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が騎士の足元に横たわる。呪いは人形に興味がない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: bt03_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が鎧を濡らす。呪いの紋様が水を弾いた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: bt03_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が鎧を洗う。呪いの汚れが少しだけ薄まった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 雨
- **ID**: bt03_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が鎧を叩く。灼熱の滴が呪いの紋様を焼き消していく。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 雨
- **ID**: bt03_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が鎧を叩く。呪いの紋様が削れ、金属片が散った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 雨
- **ID**: bt03_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が鎧の隙間に入り込む。呪いの紋様が削られていく。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 雨
- **ID**: bt03_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 上に向かう雨が降る。鎧に当たらない。呪いの騎士も空を見上げた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: bt03_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が騎士を叩きつける。重い鎧が水に沈み、足が取られた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 雨
- **ID**: bt03_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が鎧を氷の膜で覆う。関節が凍りつき、騎士の動きが止まった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: bt03_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が鎧を洗う。呪いの表面が少しだけ綺麗になったが、芯は変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 雨
- **ID**: bt03_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨が鎧に染み込む。呪いと呪いが化学反応を起こし、鎧から煙が上がった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 雨
- **ID**: bt03_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしとと降る雨。呪いに動かされ続ける体が、雨音に合わせて減速した。
- **playerDamage**: 0
- **enemyDamage**: 1

---

# 2. 敵文①outcomes（119有効 + 歪み→default）
# 「呪われた[subj*]が 魔女を [pred*]」（ターン1,4...）
# を格有効述語(7): 塞いでいる, 守っている, 追いかけてくる, 見つめている, 隠している, 砕く, 逃げていく

※ 述語10種（待っている, 眠っている, 絡みついている, 囁いている, 溶けている, 歌っている, 踊っている, 笑っている, 輝く, 降り注いでいる）は格歪み → defaultOutcome

### 騎士（初期値）× 追いかけてくる（初期値）
- **ID**: bt03_enemy1_knight_chase
- **conditions**: { s1: 'subj_knight', s2: 'pred_chase' }
- **text**: 呪われた騎士が剣を構えて迫ってくる。目に理性がない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 騎士 × 塞いでいる
- **ID**: bt03_enemy1_knight_block
- **conditions**: { s1: 'subj_knight', s2: 'pred_block' }
- **text**: 呪われた騎士が盾を構えて道を塞ぐ。通さない。一歩も通さない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士 × 守っている
- **ID**: bt03_enemy1_knight_guard
- **conditions**: { s1: 'subj_knight', s2: 'pred_guard' }
- **text**: 呪われた騎士が魔女を守っている——いや、閉じ込めている。逃がさない構えだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士 × 見つめている
- **ID**: bt03_enemy1_knight_gaze
- **conditions**: { s1: 'subj_knight', s2: 'pred_gaze' }
- **text**: 兜の奥の赤い目が魔女を射抜く。動けない。見すくめられた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士 × 隠している
- **ID**: bt03_enemy1_knight_hide
- **conditions**: { s1: 'subj_knight', s2: 'pred_hide' }
- **text**: 呪われた騎士が魔女を鎧の中に引きずり込もうとする。呪いの闇が迫る。
- **playerDamage**: 3
- **enemyDamage**: 0

### 騎士 × 砕く
- **ID**: bt03_enemy1_knight_crush
- **conditions**: { s1: 'subj_knight', s2: 'pred_crush' }
- **text**: 呪いの力で振り下ろされた剣が地面を砕く。衝撃波に吹き飛ばされた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 騎士 × 逃げていく
- **ID**: bt03_enemy1_knight_flee
- **conditions**: { s1: 'subj_knight', s2: 'pred_flee' }
- **text**: 呪われた騎士が後退する。呪いが体を引っ張っている。次の攻撃の溜めだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 子猫 × 追いかけてくる
- **ID**: bt03_enemy1_kitten_chase
- **conditions**: { s1: 'subj_kitten', s2: 'pred_chase' }
- **text**: 呪われた子猫がにゃあにゃあと追いかけてくる。拾ったら捨てられない。走れ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 子猫 × 塞いでいる
- **ID**: bt03_enemy1_kitten_block
- **conditions**: { s1: 'subj_kitten', s2: 'pred_block' }
- **text**: 呪われた子猫が道に座り込んでいる。どけようとすると手が動かなくなる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 子猫 × 守っている
- **ID**: bt03_enemy1_kitten_guard
- **conditions**: { s1: 'subj_kitten', s2: 'pred_guard' }
- **text**: 呪われた子猫が魔女の足元にまとわりつく。可愛いが動きが鈍る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 子猫 × 見つめている
- **ID**: bt03_enemy1_kitten_gaze
- **conditions**: { s1: 'subj_kitten', s2: 'pred_gaze' }
- **text**: 呪われた猫の目が光る。見つめられると体が重い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 子猫 × 隠している
- **ID**: bt03_enemy1_kitten_hide
- **conditions**: { s1: 'subj_kitten', s2: 'pred_hide' }
- **text**: 呪われた子猫が魔女の杖をくわえて走り去る。戻ってこない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 子猫 × 砕く
- **ID**: bt03_enemy1_kitten_crush
- **conditions**: { s1: 'subj_kitten', s2: 'pred_crush' }
- **text**: 呪われた子猫の爪が魔女の腕を引っかく。呪いが傷口から這い込む。
- **playerDamage**: 2
- **enemyDamage**: 0

### 子猫 × 逃げていく
- **ID**: bt03_enemy1_kitten_flee
- **conditions**: { s1: 'subj_kitten', s2: 'pred_flee' }
- **text**: 呪われた子猫が走り去った。何もしなかった。不気味だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 蛇 × 追いかけてくる
- **ID**: bt03_enemy1_snake_chase
- **conditions**: { s1: 'subj_snake', s2: 'pred_chase' }
- **text**: 呪われた蛇が地を這って迫る。脱皮するたびに大きくなりながら。
- **playerDamage**: 3
- **enemyDamage**: 0

### 蛇 × 塞いでいる
- **ID**: bt03_enemy1_snake_block
- **conditions**: { s1: 'subj_snake', s2: 'pred_block' }
- **text**: 呪われた大蛇がとぐろを巻いて道を塞ぐ。跨げない太さだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蛇 × 見つめている
- **ID**: bt03_enemy1_snake_gaze
- **conditions**: { s1: 'subj_snake', s2: 'pred_gaze' }
- **text**: 呪われた蛇の目に見すくめられる。体が硬直した。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蛇 × 隠している
- **ID**: bt03_enemy1_snake_hide
- **conditions**: { s1: 'subj_snake', s2: 'pred_hide' }
- **text**: 呪われた蛇が魔女の荷物に巻きついて藪に引き込んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蛇 × 砕く
- **ID**: bt03_enemy1_snake_crush
- **conditions**: { s1: 'subj_snake', s2: 'pred_crush' }
- **text**: 呪われた大蛇が締め上げる。肋骨が軋んだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 蛇 × 守っている
- **ID**: bt03_enemy1_snake_guard
- **conditions**: { s1: 'subj_snake', s2: 'pred_guard' }
- **text**: 呪われた蛇が魔女の足元にとぐろを巻く。一歩も動けない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蛇 × 逃げていく
- **ID**: bt03_enemy1_snake_flee
- **conditions**: { s1: 'subj_snake', s2: 'pred_flee' }
- **text**: 呪われた蛇が藪に消えた。安堵する間もなく次が来る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 竜 × 追いかけてくる
- **ID**: bt03_enemy1_dragon_chase
- **conditions**: { s1: 'subj_dragon', s2: 'pred_chase' }
- **text**: 呪われた竜が暴走して追いかけてくる。目に理性がない。炎が周囲を焼く。
- **playerDamage**: 4
- **enemyDamage**: 0

### 竜 × 砕く
- **ID**: bt03_enemy1_dragon_crush
- **conditions**: { s1: 'subj_dragon', s2: 'pred_crush' }
- **text**: 呪われた竜の爪が地面ごと魔女を砕こうとする。衝撃で体が浮いた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 竜 × 塞いでいる
- **ID**: bt03_enemy1_dragon_block
- **conditions**: { s1: 'subj_dragon', s2: 'pred_block' }
- **text**: 呪われた竜が翼を広げて空を塞ぐ。逃げ道がない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 竜 × 見つめている
- **ID**: bt03_enemy1_dragon_gaze
- **conditions**: { s1: 'subj_dragon', s2: 'pred_gaze' }
- **text**: 呪われた竜の瞳孔が魔女を捉える。金色だった目が赤黒い。足が竦む。
- **playerDamage**: 3
- **enemyDamage**: 0

### 竜 × 守っている
- **ID**: bt03_enemy1_dragon_guard
- **conditions**: { s1: 'subj_dragon', s2: 'pred_guard' }
- **text**: 呪われた竜が魔女を囲い込む。翼で壁を作り、逃がさない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 竜 × 隠している
- **ID**: bt03_enemy1_dragon_hide
- **conditions**: { s1: 'subj_dragon', s2: 'pred_hide' }
- **text**: 呪われた竜が魔女を翼の下に隠す。暗闇。呪いの吐息が首筋にかかる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 竜 × 逃げていく
- **ID**: bt03_enemy1_dragon_flee
- **conditions**: { s1: 'subj_dragon', s2: 'pred_flee' }
- **text**: 呪われた竜が飛び去る。翼の風圧で転んだが、被害はそれだけだ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蝶 × 追いかけてくる
- **ID**: bt03_enemy1_butterfly_chase
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_chase' }
- **text**: 呪われた蝶の群れが追いかけてくる。鱗粉が肌を灼く。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蝶 × 見つめている
- **ID**: bt03_enemy1_butterfly_gaze
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_gaze' }
- **text**: 呪われた蝶が目の前に止まる。羽の模様が最後に見る景色に似ている。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蝶 × 塞いでいる
- **ID**: bt03_enemy1_butterfly_block
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_block' }
- **text**: 呪われた蝶の群れが視界を塞ぐ。どちらに逃げればいいかわからない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蝶 × 隠している
- **ID**: bt03_enemy1_butterfly_hide
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_hide' }
- **text**: 呪われた蝶が魔女の姿を覆い隠す。鱗粉の幕の中、方向感覚が消えた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蝶 × 守っている
- **ID**: bt03_enemy1_butterfly_guard
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_guard' }
- **text**: 呪われた蝶が魔女の周りを旋回する。近づこうとすると鱗粉が降りかかる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蝶 × 砕く
- **ID**: bt03_enemy1_butterfly_crush
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_crush' }
- **text**: 呪われた蝶の群れが体にまとわりつく。羽の縁が肌を切り裂いていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 蝶 × 逃げていく
- **ID**: bt03_enemy1_butterfly_flee
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_flee' }
- **text**: 呪われた蝶が散って消えた。不吉な鱗粉だけが残る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 風 × 追いかけてくる
- **ID**: bt03_enemy1_wind_chase
- **conditions**: { s1: 'subj_wind', s2: 'pred_chase' }
- **text**: 呪われた風が背後から追う。走っても追いつかれ、体が冷えていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 風 × 砕く
- **ID**: bt03_enemy1_wind_crush
- **conditions**: { s1: 'subj_wind', s2: 'pred_crush' }
- **text**: 呪われた暴風が魔女を叩きつける。地面に転がされた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 風 × 塞いでいる
- **ID**: bt03_enemy1_wind_block
- **conditions**: { s1: 'subj_wind', s2: 'pred_block' }
- **text**: 呪いの壁風が行く手を阻む。押し返される。
- **playerDamage**: 2
- **enemyDamage**: 0

### 風 × 見つめている
- **ID**: bt03_enemy1_wind_gaze
- **conditions**: { s1: 'subj_wind', s2: 'pred_gaze' }
- **text**: 呪われた風が魔女の周りだけ吹き続ける。見張られている。風に。
- **playerDamage**: 1
- **enemyDamage**: 0

### 風 × 守っている
- **ID**: bt03_enemy1_wind_guard
- **conditions**: { s1: 'subj_wind', s2: 'pred_guard' }
- **text**: 呪いの風が魔女を囲む。外に出られない。空気の檻だ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 風 × 隠している
- **ID**: bt03_enemy1_wind_hide
- **conditions**: { s1: 'subj_wind', s2: 'pred_hide' }
- **text**: 呪われた風が砂を巻き上げ、視界を奪う。何も見えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 風 × 逃げていく
- **ID**: bt03_enemy1_wind_flee
- **conditions**: { s1: 'subj_wind', s2: 'pred_flee' }
- **text**: 呪われた風が凪いだ。一時的な静寂。次の突風に備える猶予だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 炎 × 追いかけてくる
- **ID**: bt03_enemy1_flame_chase
- **conditions**: { s1: 'subj_flame', s2: 'pred_chase' }
- **text**: 呪われた炎が追いかけてくる。水をかけても消えない。マントの裾が燃えた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 炎 × 砕く
- **ID**: bt03_enemy1_flame_crush
- **conditions**: { s1: 'subj_flame', s2: 'pred_crush' }
- **text**: 呪われた炎が爆発する。衝撃波が体を叩いた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 炎 × 塞いでいる
- **ID**: bt03_enemy1_flame_block
- **conditions**: { s1: 'subj_flame', s2: 'pred_block' }
- **text**: 呪いの炎の壁が行く手を塞ぐ。通れない。近づくだけで髪が焦げる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 炎 × 見つめている
- **ID**: bt03_enemy1_flame_gaze
- **conditions**: { s1: 'subj_flame', s2: 'pred_gaze' }
- **text**: 呪われた炎が瞳のような形で魔女を見つめている。見つめ返すと目が灼ける。
- **playerDamage**: 2
- **enemyDamage**: 0

### 炎 × 守っている
- **ID**: bt03_enemy1_flame_guard
- **conditions**: { s1: 'subj_flame', s2: 'pred_guard' }
- **text**: 呪いの炎が魔女を取り囲む。焼かれない代わりに、逃がしてもくれない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 炎 × 隠している
- **ID**: bt03_enemy1_flame_hide
- **conditions**: { s1: 'subj_flame', s2: 'pred_hide' }
- **text**: 呪われた炎の煙が視界を奪う。息が苦しい。
- **playerDamage**: 2
- **enemyDamage**: 0

### 炎 × 逃げていく
- **ID**: bt03_enemy1_flame_flee
- **conditions**: { s1: 'subj_flame', s2: 'pred_flee' }
- **text**: 呪われた炎が退いていく。燃えた跡だけが残った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 氷 × 追いかけてくる
- **ID**: bt03_enemy1_ice_chase
- **conditions**: { s1: 'subj_ice', s2: 'pred_chase' }
- **text**: 呪われた氷が地面を伝って追ってくる。足が凍りつく前に走れ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷 × 砕く
- **ID**: bt03_enemy1_ice_crush
- **conditions**: { s1: 'subj_ice', s2: 'pred_crush' }
- **text**: 呪われた氷柱が頭上から落ちてくる。かろうじて避けたが、破片で切られた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 氷 × 塞いでいる
- **ID**: bt03_enemy1_ice_block
- **conditions**: { s1: 'subj_ice', s2: 'pred_block' }
- **text**: 呪われた氷壁が行く手を塞ぐ。砕けない。冷気が体温を奪う。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷 × 見つめている
- **ID**: bt03_enemy1_ice_gaze
- **conditions**: { s1: 'subj_ice', s2: 'pred_gaze' }
- **text**: 呪われた氷の中に目がある。見つめられると体が冷えていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷 × 守っている
- **ID**: bt03_enemy1_ice_guard
- **conditions**: { s1: 'subj_ice', s2: 'pred_guard' }
- **text**: 呪われた氷が魔女の足を覆い、動けなくする。守っているのではない。捕えている。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷 × 隠している
- **ID**: bt03_enemy1_ice_hide
- **conditions**: { s1: 'subj_ice', s2: 'pred_hide' }
- **text**: 呪われた氷が霧を吐き出し、視界を白く塞ぐ。方向がわからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷 × 逃げていく
- **ID**: bt03_enemy1_ice_flee
- **conditions**: { s1: 'subj_ice', s2: 'pred_flee' }
- **text**: 呪われた氷が溶けて消えた。足元が濡れているだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 影 × 追いかけてくる
- **ID**: bt03_enemy1_shadow_chase
- **conditions**: { s1: 'subj_shadow', s2: 'pred_chase' }
- **text**: 呪われた影が壁を伝って追ってくる。逃げても影は消えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影 × 砕く
- **ID**: bt03_enemy1_shadow_crush
- **conditions**: { s1: 'subj_shadow', s2: 'pred_crush' }
- **text**: 呪われた影が実体化し、拳が叩きつけられた。影に殴られるとは。
- **playerDamage**: 3
- **enemyDamage**: 0

### 影 × 塞いでいる
- **ID**: bt03_enemy1_shadow_block
- **conditions**: { s1: 'subj_shadow', s2: 'pred_block' }
- **text**: 呪われた影が壁になって道を塞ぐ。通ろうとすると体が影に沈む。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影 × 見つめている
- **ID**: bt03_enemy1_shadow_gaze
- **conditions**: { s1: 'subj_shadow', s2: 'pred_gaze' }
- **text**: 呪われた影が目を開いた。自分の影に見つめられる恐怖。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影 × 守っている
- **ID**: bt03_enemy1_shadow_guard
- **conditions**: { s1: 'subj_shadow', s2: 'pred_guard' }
- **text**: 呪われた影が魔女の影と絡み合う。足が地面に縫いとめられた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影 × 隠している
- **ID**: bt03_enemy1_shadow_hide
- **conditions**: { s1: 'subj_shadow', s2: 'pred_hide' }
- **text**: 呪われた影が世界を暗くする。何も見えない闇の中で、何かが触れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 影 × 逃げていく
- **ID**: bt03_enemy1_shadow_flee
- **conditions**: { s1: 'subj_shadow', s2: 'pred_flee' }
- **text**: 呪われた影が散った。日が差す。つかの間の安堵。
- **playerDamage**: 0
- **enemyDamage**: 0

### 歌 × 追いかけてくる
- **ID**: bt03_enemy1_song_chase
- **conditions**: { s1: 'subj_song', s2: 'pred_chase' }
- **text**: 呪われた歌声が頭の中を追いかけてくる。耳を塞いでも聞こえる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌 × 砕く
- **ID**: bt03_enemy1_song_crush
- **conditions**: { s1: 'subj_song', s2: 'pred_crush' }
- **text**: 呪われた歌の不協和音が鼓膜を破る。意識が白くなった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 歌 × 見つめている
- **ID**: bt03_enemy1_song_gaze
- **conditions**: { s1: 'subj_song', s2: 'pred_gaze' }
- **text**: 呪われた歌が耳元で囁く。歌詞がこちらの心を読んでいる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌 × 塞いでいる
- **ID**: bt03_enemy1_song_block
- **conditions**: { s1: 'subj_song', s2: 'pred_block' }
- **text**: 呪われた歌が耳を塞ぐ。自分の声も聞こえない。呪文が唱えられない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌 × 守っている
- **ID**: bt03_enemy1_song_guard
- **conditions**: { s1: 'subj_song', s2: 'pred_guard' }
- **text**: 呪われた歌が魔女の周りで鳴り続ける。集中できない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 歌 × 隠している
- **ID**: bt03_enemy1_song_hide
- **conditions**: { s1: 'subj_song', s2: 'pred_hide' }
- **text**: 呪われた歌がノイズを撒き散らし、周囲の音を隠す。敵の気配がわからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌 × 逃げていく
- **ID**: bt03_enemy1_song_flee
- **conditions**: { s1: 'subj_song', s2: 'pred_flee' }
- **text**: 呪われた歌が遠ざかっていく。余韻が耳に残るが、実害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 沈黙 × 追いかけてくる
- **ID**: bt03_enemy1_silence_chase
- **conditions**: { s1: 'subj_silence', s2: 'pred_chase' }
- **text**: 呪われた沈黙が迫ってくる。音が消えていく。自分の心臓の音だけが聞こえる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙 × 砕く
- **ID**: bt03_enemy1_silence_crush
- **conditions**: { s1: 'subj_silence', s2: 'pred_crush' }
- **text**: 呪われた沈黙が魔女の声を砕く。喉が動くが、音が出ない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 沈黙 × 塞いでいる
- **ID**: bt03_enemy1_silence_block
- **conditions**: { s1: 'subj_silence', s2: 'pred_block' }
- **text**: 呪われた沈黙が耳と口を塞ぐ。呪文が唱えられない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙 × 見つめている
- **ID**: bt03_enemy1_silence_gaze
- **conditions**: { s1: 'subj_silence', s2: 'pred_gaze' }
- **text**: 呪われた沈黙の中、何かの視線を感じる。どこからかわからない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 沈黙 × 守っている
- **ID**: bt03_enemy1_silence_guard
- **conditions**: { s1: 'subj_silence', s2: 'pred_guard' }
- **text**: 呪われた沈黙が結界のように広がる。声で助けを呼べない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙 × 隠している
- **ID**: bt03_enemy1_silence_hide
- **conditions**: { s1: 'subj_silence', s2: 'pred_hide' }
- **text**: 呪われた沈黙が全ての音を飲み込む。敵がどこにいるかわからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙 × 逃げていく
- **ID**: bt03_enemy1_silence_flee
- **conditions**: { s1: 'subj_silence', s2: 'pred_flee' }
- **text**: 呪われた沈黙が去り、音が戻る。鳥の声が聞こえた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 魔女 × 追いかけてくる
- **ID**: bt03_enemy1_witch_chase
- **conditions**: { s1: 'subj_witch', s2: 'pred_chase' }
- **text**: 呪われた魔女が箒で追いかけてくる。同業者の呪いは的確で痛い。
- **playerDamage**: 3
- **enemyDamage**: 0

### 魔女 × 砕く
- **ID**: bt03_enemy1_witch_crush
- **conditions**: { s1: 'subj_witch', s2: 'pred_crush' }
- **text**: 呪われた魔女の呪文が直撃する。骨までは砕けなかったが、打撲が酷い。
- **playerDamage**: 3
- **enemyDamage**: 0

### 魔女 × 見つめている
- **ID**: bt03_enemy1_witch_gaze
- **conditions**: { s1: 'subj_witch', s2: 'pred_gaze' }
- **text**: 呪われた魔女の目が光る。見つめ返すと呪いが伝染する。
- **playerDamage**: 2
- **enemyDamage**: 0

### 魔女 × 塞いでいる
- **ID**: bt03_enemy1_witch_block
- **conditions**: { s1: 'subj_witch', s2: 'pred_block' }
- **text**: 呪われた魔女が結界を張る。呪いの壁が道を塞いだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 魔女 × 守っている
- **ID**: bt03_enemy1_witch_guard
- **conditions**: { s1: 'subj_witch', s2: 'pred_guard' }
- **text**: 呪われた魔女が呪縛の騎士を守るように立つ。敵の敵は味方、ということか。
- **playerDamage**: 2
- **enemyDamage**: 0

### 魔女 × 隠している
- **ID**: bt03_enemy1_witch_hide
- **conditions**: { s1: 'subj_witch', s2: 'pred_hide' }
- **text**: 呪われた魔女が霧を召喚する。辺り一面が呪いの霧に包まれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 魔女 × 逃げていく
- **ID**: bt03_enemy1_witch_flee
- **conditions**: { s1: 'subj_witch', s2: 'pred_flee' }
- **text**: 呪われた魔女が煙とともに消えた。何を企んでいたのか。
- **playerDamage**: 0
- **enemyDamage**: 0

### 王 × 追いかけてくる
- **ID**: bt03_enemy1_king_chase
- **conditions**: { s1: 'subj_king', s2: 'pred_chase' }
- **text**: 呪われた王が兵を差し向ける。逃げ場を塞がれた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 王 × 砕く
- **ID**: bt03_enemy1_king_crush
- **conditions**: { s1: 'subj_king', s2: 'pred_crush' }
- **text**: 呪われた王が処刑を命じる。見えない力が体を圧迫した。
- **playerDamage**: 3
- **enemyDamage**: 0

### 王 × 見つめている
- **ID**: bt03_enemy1_king_gaze
- **conditions**: { s1: 'subj_king', s2: 'pred_gaze' }
- **text**: 呪われた王の視線が裁きの目だ。罪人として見られている。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王 × 塞いでいる
- **ID**: bt03_enemy1_king_block
- **conditions**: { s1: 'subj_king', s2: 'pred_block' }
- **text**: 呪われた王が通行を禁じる。呪いの勅令に体が従ってしまう。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王 × 守っている
- **ID**: bt03_enemy1_king_guard
- **conditions**: { s1: 'subj_king', s2: 'pred_guard' }
- **text**: 呪われた王が魔女を「保護」する。監禁と保護の区別がつかない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王 × 隠している
- **ID**: bt03_enemy1_king_hide
- **conditions**: { s1: 'subj_king', s2: 'pred_hide' }
- **text**: 呪われた王が魔女を塔に閉じ込めようとする。逃げ道が消えていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王 × 逃げていく
- **ID**: bt03_enemy1_king_flee
- **conditions**: { s1: 'subj_king', s2: 'pred_flee' }
- **text**: 呪われた王が玉座を捨てて逃げた。王冠が転がった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 亡霊 × 追いかけてくる
- **ID**: bt03_enemy1_ghost_chase
- **conditions**: { s1: 'subj_ghost', s2: 'pred_chase' }
- **text**: 呪われた亡霊が壁を抜けて追ってくる。冷たい手が背中に触れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊 × 砕く
- **ID**: bt03_enemy1_ghost_crush
- **conditions**: { s1: 'subj_ghost', s2: 'pred_crush' }
- **text**: 呪われた亡霊が実体化して殴りかかる。死者の拳は重い。
- **playerDamage**: 3
- **enemyDamage**: 0

### 亡霊 × 見つめている
- **ID**: bt03_enemy1_ghost_gaze
- **conditions**: { s1: 'subj_ghost', s2: 'pred_gaze' }
- **text**: 呪われた亡霊の虚ろな目。見つめ返すと心が冷えていく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊 × 塞いでいる
- **ID**: bt03_enemy1_ghost_block
- **conditions**: { s1: 'subj_ghost', s2: 'pred_block' }
- **text**: 呪われた亡霊が道の中央に立つ。通り抜けると呪いが伝染する。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊 × 守っている
- **ID**: bt03_enemy1_ghost_guard
- **conditions**: { s1: 'subj_ghost', s2: 'pred_guard' }
- **text**: 呪われた亡霊が魔女の周りに浮かぶ。冷気の結界だ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊 × 隠している
- **ID**: bt03_enemy1_ghost_hide
- **conditions**: { s1: 'subj_ghost', s2: 'pred_hide' }
- **text**: 呪われた亡霊が闇を纏い、辺りを暗くする。何も見えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊 × 逃げていく
- **ID**: bt03_enemy1_ghost_flee
- **conditions**: { s1: 'subj_ghost', s2: 'pred_flee' }
- **text**: 呪われた亡霊が薄れて消えた。冷気だけが残る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 鏡 × 追いかけてくる
- **ID**: bt03_enemy1_mirror_chase
- **conditions**: { s1: 'subj_mirror', s2: 'pred_chase' }
- **text**: 呪われた鏡の中の自分が追いかけてくる。鏡面から手が伸びた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡 × 砕く
- **ID**: bt03_enemy1_mirror_crush
- **conditions**: { s1: 'subj_mirror', s2: 'pred_crush' }
- **text**: 呪われた鏡が砕け、破片が降り注ぐ。一片一片が呪いを帯びている。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鏡 × 見つめている
- **ID**: bt03_enemy1_mirror_gaze
- **conditions**: { s1: 'subj_mirror', s2: 'pred_gaze' }
- **text**: 呪われた鏡に映った自分の目が恐ろしい。あれは自分ではない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡 × 塞いでいる
- **ID**: bt03_enemy1_mirror_block
- **conditions**: { s1: 'subj_mirror', s2: 'pred_block' }
- **text**: 呪われた鏡の壁が道を塞ぐ。自分の恐怖を映す鏡に近づけない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡 × 守っている
- **ID**: bt03_enemy1_mirror_guard
- **conditions**: { s1: 'subj_mirror', s2: 'pred_guard' }
- **text**: 呪われた鏡が騎士の周りに浮かぶ。攻撃が全て反射される。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡 × 隠している
- **ID**: bt03_enemy1_mirror_hide
- **conditions**: { s1: 'subj_mirror', s2: 'pred_hide' }
- **text**: 呪われた鏡が幻影を映し出す。どれが本物かわからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡 × 逃げていく
- **ID**: bt03_enemy1_mirror_flee
- **conditions**: { s1: 'subj_mirror', s2: 'pred_flee' }
- **text**: 呪われた鏡が割れて散った。破片の中にまだ目が光っている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 人形 × 追いかけてくる
- **ID**: bt03_enemy1_doll_chase
- **conditions**: { s1: 'subj_doll', s2: 'pred_chase' }
- **text**: 呪われた人形がかたかたと追ってくる。遅いが止まらない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形 × 砕く
- **ID**: bt03_enemy1_doll_crush
- **conditions**: { s1: 'subj_doll', s2: 'pred_crush' }
- **text**: 呪われた人形が魔女の腕を掴む。人形の力ではないものが締めつけている。
- **playerDamage**: 2
- **enemyDamage**: 0

### 人形 × 見つめている
- **ID**: bt03_enemy1_doll_gaze
- **conditions**: { s1: 'subj_doll', s2: 'pred_gaze' }
- **text**: 呪われた人形の目が光る。見つめられると体が冷える。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形 × 塞いでいる
- **ID**: bt03_enemy1_doll_block
- **conditions**: { s1: 'subj_doll', s2: 'pred_block' }
- **text**: 呪われた人形が道に座っている。どけようとすると手が痺れる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形 × 守っている
- **ID**: bt03_enemy1_doll_guard
- **conditions**: { s1: 'subj_doll', s2: 'pred_guard' }
- **text**: 呪われた人形が騎士の足元で番をしている。近づくと叫ぶ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形 × 隠している
- **ID**: bt03_enemy1_doll_hide
- **conditions**: { s1: 'subj_doll', s2: 'pred_hide' }
- **text**: 呪われた人形が魔女の杖を抱えて隅に逃げた。返してくれない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形 × 逃げていく
- **ID**: bt03_enemy1_doll_flee
- **conditions**: { s1: 'subj_doll', s2: 'pred_flee' }
- **text**: 呪われた人形がとことこ走り去った。何もしなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 雨 × 追いかけてくる
- **ID**: bt03_enemy1_rain_chase
- **conditions**: { s1: 'subj_rain', s2: 'pred_chase' }
- **text**: 呪われた雨が魔女の頭上だけに降る。走っても止まない。体が冷える。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨 × 砕く
- **ID**: bt03_enemy1_rain_crush
- **conditions**: { s1: 'subj_rain', s2: 'pred_crush' }
- **text**: 呪われた豪雨が叩きつける。水圧に押しつぶされそうだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 雨 × 見つめている
- **ID**: bt03_enemy1_rain_gaze
- **conditions**: { s1: 'subj_rain', s2: 'pred_gaze' }
- **text**: 呪われた雨粒の一つ一つに目がある。全方位から見つめられている。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨 × 塞いでいる
- **ID**: bt03_enemy1_rain_block
- **conditions**: { s1: 'subj_rain', s2: 'pred_block' }
- **text**: 呪われた暴雨が視界を完全に塞ぐ。一歩先も見えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨 × 守っている
- **ID**: bt03_enemy1_rain_guard
- **conditions**: { s1: 'subj_rain', s2: 'pred_guard' }
- **text**: 呪われた雨が騎士の周りだけ降り注ぐ。近づくと呪いの雨に打たれる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨 × 隠している
- **ID**: bt03_enemy1_rain_hide
- **conditions**: { s1: 'subj_rain', s2: 'pred_hide' }
- **text**: 呪われた雨が世界を灰色に塗り替える。敵の姿が見えない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨 × 逃げていく
- **ID**: bt03_enemy1_rain_flee
- **conditions**: { s1: 'subj_rain', s2: 'pred_flee' }
- **text**: 呪われた雨が上がった。虹は出ない。灰色の空だけが残る。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（11件）
# 「呪われた剣が [mod*]呪いを 放っている」（ターン2,5...）

### 鋭い（初期値）
- **ID**: bt03_enemy2_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 呪われた剣から鋭い呪いの波動が放たれる。体の芯が痺れた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 小さな
- **ID**: bt03_enemy2_small
- **conditions**: { s1: 'mod_small' }
- **text**: 呪われた剣から小さな呪いが放たれる。虫に刺されたような痛み。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい
- **ID**: bt03_enemy2_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 呪われた剣から優しい呪いが漂う。温かいが、それが罠だ。体が動きたくなくなる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る
- **ID**: bt03_enemy2_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 呪われた剣から燃え盛る呪いが噴き出す。炎の波動が全身を灼いた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い
- **ID**: bt03_enemy2_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 呪われた剣から堅い呪いが放たれる。体が石のように重くなった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた
- **ID**: bt03_enemy2_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 呪われた剣から壊れた呪いが漏れる。途切れ途切れで、あまり痛くない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な
- **ID**: bt03_enemy2_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 呪われた剣から屈強な呪いの衝撃波が放たれる。体が吹き飛ばされた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた
- **ID**: bt03_enemy2_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 呪われた剣から凍てついた呪いが放たれる。足が凍りつき、動けなくなった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った
- **ID**: bt03_enemy2_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 呪われた剣から透き通った呪いが放たれる。見えない力に掴まれた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた
- **ID**: bt03_enemy2_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた剣から呪いの呪いが放たれる。呪いが二重に重なり、体が軋んだ。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い
- **ID**: bt03_enemy2_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 呪われた剣から眠い呪いが放たれる。意識が遠のく。立っていられない。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 4. 敵文③outcomes（11有効 + 歪み→default）
# 「呪いが 魔女に [pred*]」（ターン3,6...）
# に格有効述語(11): 待っている, 眠っている, 絡みついている, 降り注いでいる, 囁いている, 溶けている, 輝く, 歌っている, 踊っている, 笑っている, 逃げていく

※ 述語6種（塞いでいる, 守っている, 追いかけてくる, 隠している, 砕く, 見つめている）は格歪み → defaultOutcome

### 絡みついている（初期値）
- **ID**: bt03_enemy3_entangle
- **conditions**: { s1: 'pred_entangle' }
- **text**: 呪いが体に絡みつく。黒い糸が手足を縛り、動きが鈍った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 待っている
- **ID**: bt03_enemy3_wait
- **conditions**: { s1: 'pred_wait' }
- **text**: 呪いが静かに待っている。油断した瞬間、足首を掴まれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠っている
- **ID**: bt03_enemy3_sleep
- **conditions**: { s1: 'pred_sleep' }
- **text**: 呪いが魔女の中で眠っている。目が重い。立っていられない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 降り注いでいる
- **ID**: bt03_enemy3_rain
- **conditions**: { s1: 'pred_rain' }
- **text**: 呪いの雨が魔女に降り注ぐ。一滴ごとに体が重くなる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 囁いている
- **ID**: bt03_enemy3_whisper
- **conditions**: { s1: 'pred_whisper' }
- **text**: 呪いが耳元で囁く。「もう諦めろ」足が止まりかけた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 溶けている
- **ID**: bt03_enemy3_melt
- **conditions**: { s1: 'pred_melt' }
- **text**: 呪いが体に溶け込んでいく。輪郭がぼやける。自分がどこまでか、わからなくなった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 輝く
- **ID**: bt03_enemy3_shine
- **conditions**: { s1: 'pred_shine' }
- **text**: 呪いが黒い光を放つ。目が眩み、足元がよろめいた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌っている
- **ID**: bt03_enemy3_sing
- **conditions**: { s1: 'pred_sing' }
- **text**: 呪いが歌い始めた。不協和音が頭の中で反響する。集中が切れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 踊っている
- **ID**: bt03_enemy3_dance
- **conditions**: { s1: 'pred_dance' }
- **text**: 呪いが踊っている。体が呪いに合わせて動き出す。意志に反して足が踊る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 笑っている
- **ID**: bt03_enemy3_laugh
- **conditions**: { s1: 'pred_laugh' }
- **text**: 呪いが笑っている。嘲るような笑い声が体中に響く。気力が削がれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 逃げていく
- **ID**: bt03_enemy3_flee
- **conditions**: { s1: 'pred_flee' }
- **text**: 呪いが一時的に引いた。体が軽くなる。次のターンへの猶予だ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 統計レポート

## 自文outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 8 |
| reward率 | 4.3% |
| enemyDamage平均 | 1.97 |
| enemyDamage=0の割合 | 31.6% (59/187) |
| enemyDamage≥4の割合 | 20.3% (38/187) |
| enemyDamage=5の割合 | 8.0% (15/187) |

## 敵文①outcomes（119有効件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 119 |
| playerDamage平均 | 1.82 |
| playerDamage=0の割合 | 14.3% (17/119) |
| playerDamage≥3の割合 | 21.0% (25/119) |

## 敵文②outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 2.18 |
| playerDamage=0の割合 | 0% (0/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |

## 敵文③outcomes（11有効件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 2.09 |
| playerDamage=0の割合 | 9.1% (1/11) |
| playerDamage≥3の割合 | 27.3% (3/11) |
