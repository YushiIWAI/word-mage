# ノードBOSS01「古竜」Outcome一覧

- **敵名**: 古竜（太古からの竜。圧倒的な力）
- **敵HP**: 30
- **勝利報酬**: 20Q

## 文構成
- **自文**: [mod*][subj*]が 古竜を 砕く （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,4...): [mod*]古竜が 大地を 焼いている （11パターン）
- **敵文②** (ターン2,5...): 古竜の[subj*]が 魔女に 降り注いでいる （17パターン）
- **敵文③** (ターン3,6...): [mod*][subj*]が 古竜に 砕かれている （187パターン）

## defaultOutcome

### 自文default
- **text**: 書き換えが古竜の鱗に弾かれた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default
- **text**: 燃え盛る古竜が大地を焼き尽くす。炎の壁が迫る。
- **playerDamage**: 4
- **enemyDamage**: 0

### 敵文② default
- **text**: 古竜の炎が魔女に降り注ぐ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 敵文③ default
- **text**: 古竜が全てを砕く。世界が軋む。
- **playerDamage**: 4
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）
# 「[mod*][subj*]が 古竜を 砕く」

## 子猫

### 小さな × 子猫
- **ID**: boss01_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が古竜の鱗を引っかく。古竜は気づいてすらいない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: boss01_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 人懐っこい子猫が古竜の前足に擦り寄る。太古の竜が困惑している。鱗一枚揺るがない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 子猫
- **ID**: boss01_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が古竜に飛びかかる。竜の鱗には炎など効かない。同族の火だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 堅い × 子猫
- **ID**: boss01_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が古竜の鱗にぶつかる。猫のほうが砕けた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 鋭い × 子猫
- **ID**: boss01_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が古竜の鱗の隙間を探る。薄い裂け目に刃先が入り、竜がわずかに唸った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 壊れた × 子猫
- **ID**: boss01_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが古竜に投げつけられる。綿が散る。古竜は瞬きもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: boss01_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような体格の子猫が古竜の脚に噛みつく。鱗に歯が立たない。だが古竜が足を振った。気にはなったらしい。
- **playerDamage**: 0
- **enemyDamage**: 1

### 凍てついた × 子猫
- **ID**: boss01_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が古竜の足元に張りつく。霜が鱗を伝うが、竜の体温がすぐに溶かした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 透き通った × 子猫
- **ID**: boss01_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が古竜をすり抜ける。傷どころか、触れることすらできない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: boss01_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪いの猫が古竜にまとわりつく。振り払っても戻ってくる。鱗の隙間に呪いが沁みる。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 子猫
- **ID**: boss01_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が古竜の爪の間で丸くなる。あくびひとつ。太古の竜を砕く気配はない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: boss01_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が古竜の鱗の隙間に潜り込む。中から齧るが、太古の竜の鱗は内側も硬い。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: boss01_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が古竜の首に巻きつく。古竜にとっては首飾り程度の存在だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: boss01_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を引く蛇が古竜の体を這い上がる。竜の鱗は炎を弾くが、目元の柔らかい皮に火が触れた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 蛇
- **ID**: boss01_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が古竜に体当たりする。金属の鱗と太古の鱗がぶつかり火花が散った。互角には程遠い。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 蛇
- **ID**: boss01_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が古竜の鱗の継ぎ目に突き刺さる。毒が回るには巨体すぎる。だが痛みは走った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 蛇
- **ID**: boss01_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮の途中で力尽きた蛇が古竜の前に横たわる。古い皮が風に吹かれている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: boss01_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が古竜の脚に巻きつき、締め上げる。太古の竜が足を引きずった。大蛇の力は本物だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 蛇
- **ID**: boss01_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜をまとった蛇が古竜の鱗に絡みつく。鱗の隙間に霜が食い込み、古竜が身を震わせた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 蛇
- **ID**: boss01_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が古竜の体内に入り込む。骨格だけが竜の中で蠢いているが、太古の竜は異物を感じない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 蛇
- **ID**: boss01_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたび大きくなる蛇が古竜の胴に巻きつく。一巻きごとに膨張し、鱗が軋み始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 蛇
- **ID**: boss01_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いたまま動かない蛇。古竜の足元で日向ぼっこしている。竜を砕く気など毛頭ない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: boss01_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が古竜に小さな火を噴く。同族の挨拶にもならない。古竜が鼻で笑った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: boss01_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が古竜に語りかける。同族の対話。しかし太古の竜に言葉は通じない。時代が違いすぎる。
- **playerDamage**: 0
- **enemyDamage**: 2

### 燃え盛る × 竜
- **ID**: boss01_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が古竜に挑む。竜同士の炎がぶつかり、空が燃えた。古竜の鱗が赤熱し、一枚剥がれる。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 竜
- **ID**: boss01_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような鱗の竜が古竜に体当たりする。太古の竜が半歩退いた。大地が震える。
- **playerDamage**: 0
- **enemyDamage**: 4

### 鋭い × 竜
- **ID**: boss01_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 爪の一振りが古竜の鱗を抉る。金色の目が冷たく輝き、太古の傷が開いた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 壊れた × 竜
- **ID**: boss01_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が古竜にぶつかる。かつての同族が哀れな姿で挑む。古竜の鱗にひびが一筋。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: boss01_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が古竜に組みかかる。二頭の巨竜が地面を割りながらぶつかり合う。古竜の脇腹から鱗が砕けた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 竜
- **ID**: boss01_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息が古竜を包む。炎の竜と氷の竜。相殺しきれない冷気が鱗を凍らせ、罅が走る。
- **playerDamage**: 0
- **enemyDamage**: 5

### 透き通った × 竜
- **ID**: boss01_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が光を集め、古竜に放つ。太古の鱗を貫けはしないが、眩しさに古竜が目を逸らした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 竜
- **ID**: boss01_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜が理性なく古竜に噛みつく。呪いが鱗を侵し、噛み跡から腐敗が広がる。同族の呪いは深い。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 竜
- **ID**: boss01_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りしている竜のいびきが地鳴りになる。古竜の翼が揺れるが、傷にはならない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: boss01_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が古竜の鼻先に止まる。古竜が息を吹いて飛ばした。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: boss01_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が古竜の角の間を舞う。太古の竜の目がかすかに蝶を追う。砕くとは程遠い光景だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: boss01_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の羽を持つ蝶が古竜の目の前で舞う。火の粉が瞳に散る。古竜が一瞬、目を閉じた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 蝶
- **ID**: boss01_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が古竜の鱗に体当たりする。かん、と甲高い音。鱗は揺るがない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: boss01_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽を持つ蝶が古竜の目元をかすめる。薄い皮膚に一筋の傷。古竜が唸った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 蝶
- **ID**: boss01_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が螺旋を描いて古竜にぶつかる。鱗に触れて粉になった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: boss01_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 巨蝶の羽ばたきが突風を起こす。古竜の目に砂塵が入り、首を振った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: boss01_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が古竜の鱗に触れる。接点から氷の結晶が広がるが、竜の体温がじわじわ溶かす。
- **playerDamage**: 0
- **enemyDamage**: 1

### 透き通った × 蝶
- **ID**: boss01_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が古竜を通り抜けていく。美しいが、痕跡も傷も残さない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: boss01_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶が古竜のまわりを飛ぶ。追えば追うほど方向感覚が狂う。太古の竜が自分の尾に噛みつこうとした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 眠い × 蝶
- **ID**: boss01_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が古竜の角で羽を閉じて眠っている。太古の竜は気づいてすらいない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: boss01_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が古竜の鱗を撫でる。太古の竜にとっては呼吸のようなものだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: boss01_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい追い風が古竜の翼を揺らす。むしろ気持ちよさそうに翼を広げた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: boss01_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が古竜を包む。しかし竜は炎の中に棲む存在だ。心地よいとすら思っているかもしれない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 風
- **ID**: boss01_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 同じ方向から吹き続ける頑固な風。古竜の翼が煽られるが、大地に爪を立てて動かない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: boss01_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が古竜の鱗を叩く。鱗は切れないが、隙間の薄い皮膚に風圧が通った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: boss01_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 方向の定まらない乱気流が古竜のまわりで渦巻く。鱗がわずかに鳴るが、それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: boss01_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が古竜に正面からぶつかる。翼が煽られ、体勢を崩しかけた。竜を揺らす風は滅多にない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 風
- **ID**: boss01_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が古竜を叩く。炎の竜に氷の風。鱗に霜が張り、一瞬だけ動きが鈍った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: boss01_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が古竜を通り過ぎる。竜の瞳が一瞬澄むが、それは攻撃ではない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 風
- **ID**: boss01_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪いの風が古竜を吹き抜ける。帰り道を忘れる風。太古の竜が一瞬、自分の巣を見失った。隙ができる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 風
- **ID**: boss01_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が古竜を撫でる。太古の竜のまぶたが重くなる。しかし眠りには落ちない。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: boss01_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの火が古竜に触れる。竜にとっては自分の体温より冷たい。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 炎
- **ID**: boss01_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉の火が古竜を包む。炎の中に棲む竜にとっては子守唄のようなものだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: boss01_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が古竜に迫る。竜の炎と外の炎がぶつかり、空気が爆ぜた。古竜の鱗が赤く灼ける。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 炎
- **ID**: boss01_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が古竜の鱗に張りつく。太古の竜でも振り払えない。じりじりと隙間に浸食する。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 炎
- **ID**: boss01_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が古竜の鱗の継ぎ目を灼く。溶接のような熱が鱗を歪ませた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 炎
- **ID**: boss01_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が古竜に触れる。紫と緑に明滅するが、温度がない。竜は何も感じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: boss01_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 天を衝く火柱が古竜を包む。竜自身の炎と共鳴し、制御を失った炎が鱗を焼き始めた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 炎
- **ID**: boss01_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い冷たい炎が古竜を舐める。炎の竜が初めて寒さを知った。鱗にひびが入る。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 炎
- **ID**: boss01_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が古竜の足元で揺らぐ。空気の歪みだけが証拠。鱗がわずかに煤けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 炎
- **ID**: boss01_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が古竜に燃え移る。燃やしたものの形を覚える炎が、古竜自身の火を模倣し、内側から焼き始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 炎
- **ID**: boss01_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が古竜の足元でくすぶる。竜にとっては火の粉ほどの存在だ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: boss01_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 掌の氷片が古竜にぶつかる。竜の体温で触れた瞬間に蒸発した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: boss01_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が古竜の鱗を冷やす。炎の竜には涼しくて心地よいだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: boss01_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が古竜にぶつかる。矛盾した存在が鱗に凍傷と火傷を同時に刻む。古竜が怪訝な顔をした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 氷
- **ID**: boss01_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷が古竜に叩きつけられる。鋼より硬い氷塊が鱗にめり込み、ひびを走らせた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 氷
- **ID**: boss01_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱の剣が古竜の鱗の隙間に突き刺さる。竜の体温でも溶けない。痛みに古竜が吠えた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 氷
- **ID**: boss01_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が古竜にぶつかって砕ける。破片が竜の体温で霧になった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: boss01_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が古竜に落ちる。太古の竜が片膝をつく。氷と竜の重量がぶつかり、大地が割れた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 氷
- **ID**: boss01_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度に近い氷が古竜を包む。炎の竜の体温が急降下し、鱗が脆くなった。しかしすぐに内なる炎が燃え上がる。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 氷
- **ID**: boss01_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷が古竜の足元に広がる。太古の竜は足を滑らせない。爪が大地を掴んでいる。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 氷
- **ID**: boss01_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が古竜の翼に張りつく。永遠の冬が翼を覆い、広げることができなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 氷
- **ID**: boss01_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が古竜の足を濡らす。竜の体温が蒸気に変える。何も残らない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: boss01_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな影が古竜に向かう。太古の竜の影に吸い込まれ、跡形もなく消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: boss01_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が古竜を覆う。太古の竜にとっては雲が通り過ぎたようなものだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: boss01_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が古竜の足元に広がる。鱗の隙間に忍び込んだ黒炎が、内側から古竜を焦がす。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 影
- **ID**: boss01_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が古竜の足を縫いとめようとする。太古の竜が足を上げると影ごと砕けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 影
- **ID**: boss01_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が古竜の腹の柔らかい部分を狙う。鱗の継ぎ目に薄い傷が走った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 影
- **ID**: boss01_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 立体的にめくれ上がった影が古竜にぶつかる。すり抜けて向こうへ行った。平面にすら戻れない影に何ができよう。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: boss01_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 古竜より大きな影が立ち上がる。太古の竜と影の巨人が組み合う。影の腕力で鱗が軋んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 影
- **ID**: boss01_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍りついた影が古竜の足元に張りつく。黒い霜が鱗の下に忍び込み、古竜の動きがわずかに鈍った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: boss01_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が古竜に重なる。存在が薄すぎて、太古の竜は何も感じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: boss01_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪いの影が古竜に触れる。触れた鱗が影に変わり、剥がれ落ちていく。太古の竜が初めて怯んだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 影
- **ID**: boss01_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように小さく縮んだ影が古竜の足元にうずくまる。太古の竜は見向きもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: boss01_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。古竜の耳がかすかに動くが、すぐに興味を失った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: boss01_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が古竜に届く。太古の竜の怒りが一瞬緩む。しかし傷は与えられない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 歌
- **ID**: boss01_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が響く。歌の熱量が空気を焦がし、古竜の周囲の酸素を奪う。竜の炎がわずかに弱まった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: boss01_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が古竜の鼓膜に鳴り続ける。うるさい。古竜が首を振るが止まらない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 歌
- **ID**: boss01_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声のような歌が古竜を襲う。音波が鱗を震わせ、古い鱗が数枚剥がれた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 歌
- **ID**: boss01_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの旋律が古竜のまわりで鳴る。不快だが、太古の竜には通用しない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: boss01_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる合唱が古竜を揺らす。竜の巨体が共振し、鱗の隙間から砂が噴いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 歌
- **ID**: boss01_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 聴いた者の動きを止める歌。古竜の翼が一瞬凍りつき、空気中に氷の結晶が舞った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 歌
- **ID**: boss01_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ旋律が古竜の洞穴に響き渡る。美しいが、太古の竜にとっては風の音と変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 歌
- **ID**: boss01_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が古竜に取り憑く。太古の竜が首を振り、尾を叩きつけ、自らの体を傷つけ始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 歌
- **ID**: boss01_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 抗えない子守唄が古竜を包む。太古の竜のまぶたがゆっくり下がるが、完全には眠らない。隙はできた。
- **playerDamage**: 0
- **enemyDamage**: 2

---

## 沈黙

### 小さな × 沈黙
- **ID**: boss01_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: ふと静けさが訪れる。古竜の咆哮の残響が消え、一瞬だけ世界が凪いだ。何も変わらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: boss01_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 安らぎの静寂が古竜を包む。怒りが薄れるが、太古の竜は砕けない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 沈黙
- **ID**: boss01_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が空気を焦がす。音のない熱が古竜の鱗を乾かし、ひび割れさせる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 沈黙
- **ID**: boss01_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が古竜を覆う。咆哮が吸い込まれ、消える。古竜は戸惑うが、傷にはならない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 沈黙
- **ID**: boss01_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような無言が古竜を射抜く。太古の竜がわずかに身を引いた。言葉より痛い沈黙がある。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 沈黙
- **ID**: boss01_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂のはずなのにノイズが混じる。古竜には耳障りですらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: boss01_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が古竜を包み込む。咆哮も炎の音も消え、太古の竜が自分の存在を見失いかける。一瞬、翼が力を失った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 沈黙
- **ID**: boss01_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた静寂が時を止める。古竜が彫像のように固まり、鱗の表面に霜が浮いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 沈黙
- **ID**: boss01_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 泉のように澄んだ静寂。古竜の瞳が一瞬透き通る。しかし砕く力にはならない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 沈黙
- **ID**: boss01_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う呪いの沈黙が古竜を飲み込む。咆哮を失った竜が暴れ、自らの鱗を砕いた。竜にとって声は炎と同じほど大切なものだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 沈黙
- **ID**: boss01_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさが漂う。古竜のまぶたがほんの少し重くなった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: boss01_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が大きすぎる兜を被って古竜に挑む。剣が鱗に当たり、木の棒で叩いたような音がした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 騎士
- **ID**: boss01_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 騎士が剣を収め、古竜に手を差し出す。太古の竜は手を差し出されたことがない。きょとんとしている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 騎士
- **ID**: boss01_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎に包まれた騎士が古竜に斬りかかる。燃える剣が鱗の隙間に食い込む。炎をまとう者だけが竜に近づける。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: boss01_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が古竜に体当たりする。鱗と鎧がぶつかり、火花が散った。古竜はびくともしない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 騎士
- **ID**: boss01_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が古竜の鱗の継ぎ目を狙って一閃する。無駄のない斬撃が太古の鱗を割った。
- **playerDamage**: 0
- **enemyDamage**: 5

### 壊れた × 騎士
- **ID**: boss01_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣で古竜に挑む騎士。鎧はへこみ、盾は砕けている。それでも一突き。鱗に傷が一筋。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 騎士
- **ID**: boss01_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の重装騎士が大剣を振り下ろす。人の全力が太古の竜に届く。鱗が数枚、砕けて落ちた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 騎士
- **ID**: boss01_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜をまとった騎士の剣が古竜の鱗に突き立てられる。凍った刃が鱗の内側に氷を広げる。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 騎士
- **ID**: boss01_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 影の薄い騎士が古竜の死角から剣を振る。気づかれないまま、鱗の隙間に刃を滑り込ませた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: boss01_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士が古竜に斬りかかる。呪われた剣が鱗を侵食し、傷口が黒く腐っていく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 騎士
- **ID**: boss01_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士がふらふらと剣を振る。古竜の足の爪にかすった。半分寝ている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 魔女

### 小さな × 魔女
- **ID**: boss01_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が呪文を唱える。大きな帽子の下から小さな雷が飛ぶ。古竜の鱗が一枚焦げた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: boss01_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が古竜に話しかける。太古の竜は言葉を解さない。穏やかな声が虚しく響く。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 魔女
- **ID**: boss01_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が古竜に炸裂する。竜の炎を超える業火。太古の鱗が赤熱し、罅が走った。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: boss01_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で古竜の足を叩く。がつん、がつん。鱗に響くかは疑わしいが、意地は見える。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: boss01_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻の魔女が呪文を一言。鋭い魔力の矢が古竜の鱗の継ぎ目を穿つ。正確無比な狙いだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: boss01_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 魔力が暴走する魔女の呪文が古竜に当たる。どこに飛ぶかわからない魔法だが、偶然、目に入った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 魔女
- **ID**: boss01_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 杖を振るう代わりに拳で殴る魔女。太い腕が古竜の顎を打ち上げた。魔法は要らなかった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 魔女
- **ID**: boss01_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が古竜の翼を覆う。霜が鱗に食い込み、翼の可動域が狭まった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 魔女
- **ID**: boss01_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女が呪文を囁く。古竜の耳元で声だけが響く。鱗が一枚、静かに剥がれた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 魔女
- **ID**: boss01_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 自らの呪いに蝕まれた魔女が古竜に手をかざす。呪いが伝染し、太古の鱗が変異して脆くなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 魔女
- **ID**: boss01_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: うとうとする魔女が寝ぼけて呪文を唱える。中途半端な魔法が古竜の鱗を少し揺らした。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: boss01_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が王冠を掲げて命令する。「砕けっ」太古の竜は人の言葉を知らない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: boss01_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が古竜に手を差し伸べる。太古の竜に慈悲という概念はない。手が炎で焦げた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 王
- **ID**: boss01_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠を戴く王が命じる。王の炎が古竜の炎と共鳴し、鱗の内側が過熱した。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: boss01_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座から動かない王が一言。「砕け」古竜に命令は通じないが、言葉の重さが空気を揺らした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 王
- **ID**: boss01_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が古竜の弱点を見抜く。腹の古傷。一言の指示で全力をそこに集中させた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 王
- **ID**: boss01_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 歪んだ王冠の王が虚ろな目で立っている。太古の竜の前で、最後の尊厳すら砕けている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: boss01_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が剣を抜き、古竜の脚に斬りかかる。玉座より戦場を好む王の一撃が、太古の鱗を砕いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 王
- **ID**: boss01_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく命令が風に乗り、古竜の翼に霜が広がった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: boss01_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 存在の薄い王が何か言った。古竜どころか空気すら振動しない。誰にも見えない王だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 王
- **ID**: boss01_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が古竜の鱗に手を触れる。鱗が重い黄金に変わり、自重で剥がれ落ちた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 王
- **ID**: boss01_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 王が玉座で居眠りしている。太古の竜の前でさえ。古竜は砕かれる気配を感じない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 亡霊

### 小さな × 亡霊
- **ID**: boss01_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が笑いながら古竜をすり抜ける。冷たい風が鱗を撫でただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: boss01_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が古竜に微笑む。太古の竜は幽霊に慣れている。数千年で無数の魂を見てきた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 亡霊
- **ID**: boss01_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎をまとった亡霊が古竜に取り憑く。怨念の火が鱗の内側に入り込み、古竜が身を震わせた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: boss01_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 何百年も同じ場所に立つ霊。古竜がそこを通ろうとするたび、冷気にはじかれる。動線を邪魔する程度だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: boss01_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊の視線が古竜を射抜く。太古の竜にも後ろめたいことがあるのか。翼が一瞬すくんだ。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 亡霊
- **ID**: boss01_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が古竜の前をさまよう。自分が何をすべきか忘れている。古竜は素通りした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: boss01_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が古竜に斬りかかる。死んで枷が外れた霊力は太古の鱗すら裂く。深い傷が走った。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 亡霊
- **ID**: boss01_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が古竜に触れる。鱗の内側に霜が広がり、古竜の動きが鈍った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: boss01_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が古竜をすり抜ける。実体がほとんどない。涼しい風が通っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 亡霊
- **ID**: boss01_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られた霊が古竜に絡みつく。呪いが太古の鱗にも伝染し、鱗が黒ずんで脆くなる。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 亡霊
- **ID**: boss01_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が古竜の足元を漂う。存在感が薄れたり戻ったり。脅威にならない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: boss01_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が古竜に光を反射する。太古の竜は眩しそうに目を細めるが、鱗には傷一つつかない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 鏡
- **ID**: boss01_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が古竜の姿を映す。少しだけ美しく見える太古の竜。砕くどころではない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: boss01_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中の炎が古竜に向かって飛び出す。竜自身の炎を映して増幅した鏡の火が鱗を焦がす。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 鏡
- **ID**: boss01_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が古竜にぶつかる。弾かれ、またぶつかる。鱗は揺るがないが、音が古竜を苛立たせた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 鏡
- **ID**: boss01_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の刃のような破片が古竜に飛ぶ。鱗の隙間に数枚の破片が刺さった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 鏡
- **ID**: boss01_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が古竜の姿を映す。何十にも分裂した自分の像に、太古の竜が一瞬戸惑った。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: boss01_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が古竜の前に立ちはだかる。映った自分の姿に古竜が咆哮する。鏡は砕けないが、古竜も砕けない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 鏡
- **ID**: boss01_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍りついた鏡面が古竜に冬の世界を映す。鏡越しの冷気が鱗に霜を降ろした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: boss01_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が古竜の向こうに立つ。何も映さず、何も遮らず。太古の竜は気づかない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 鏡
- **ID**: boss01_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が古竜の姿を映す。鏡の中の古竜が動き出し、本体の鱗を内側から砕き始めた。同族殺しだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 鏡
- **ID**: boss01_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡が古竜をぼんやり映す。映像が遅れて動く。太古の竜が自分の寝顔を見ている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: boss01_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が古竜の足元に転がる。竜の爪の下で潰された。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: boss01_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が古竜の足元に佇む。笑顔が縫い付けてある。太古の竜は見下ろしもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: boss01_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が古竜に投げつけられる。鱗の隙間に引っかかり、じわじわ燃える。古竜が苛立ちの声を上げた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 人形
- **ID**: boss01_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が古竜に飛んでいく。鱗に当たり、人形のほうが砕けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: boss01_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が古竜の鱗の継ぎ目を切り刻む。糸は見えないが、人形は優雅に舞っている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: boss01_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が古竜を見上げている。残った目がじっと見つめる。太古の竜には何の感慨もない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: boss01_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大の木彫り人形が丸太のような腕を振る。ゴーレムの一撃が古竜の脚に食い込んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 人形
- **ID**: boss01_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が古竜の鱗に抱きつく。溶けながら冷気を放ち、鱗の表面が白く霜に覆われた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: boss01_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が古竜にぶつかり、砕ける。破片が鱗の隙間に入り込んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: boss01_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が夜になると位置を変える。古竜の鱗の隙間に入り込み、中から呪いを広げる。古竜の動きが鈍くなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 人形
- **ID**: boss01_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が古竜の足元に横たわる。持つと眠くなる人形だが、古竜は手で持っていない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: boss01_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が古竜に降りかかる。炎の竜の鱗の上で蒸気になった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: boss01_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が古竜に降り注ぐ。炎の竜の体温が雨をすぐに蒸気に変える。砕くとは程遠い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 雨
- **ID**: boss01_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が古竜に降り注ぐ。竜自身の炎と共鳴し、制御を失った熱が鱗を灼いた。炎すら多すぎれば毒になる。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 雨
- **ID**: boss01_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が古竜に叩きつけられる。石のような氷の粒が鱗に跳ね返るが、竜の体温で次第に溶けた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 雨
- **ID**: boss01_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が古竜の全身を刺す。鱗には通じないが、目元や翼膜の薄い部分に雨粒が食い込んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 雨
- **ID**: boss01_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: リズムのおかしい雨が降る。上に向かったり止まったり。古竜は首を傾げている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: boss01_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が古竜を叩く。滝のような水量が炎の竜の体温を奪い、鱗が冷えて脆くなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 凍てついた × 雨
- **ID**: boss01_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が古竜を包む。炎の竜の鱗の上で雨が凍り、氷の鎧が重くのしかかった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: boss01_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が古竜を洗う。炎が少し弱まるが、すぐに燃え上がる。浄化の雨も竜には力不足だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 雨
- **ID**: boss01_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨が古竜に降り注ぐ。浴びた鱗がその場に縫いとめられ、古竜が身動きできなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 雨
- **ID**: boss01_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしとと降る眠い雨。子守唄のような雨音に、古竜のまぶたが重くなっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

---

# 2. 敵文①outcomes（11件）
# 「[mod*]古竜が 大地を 焼いている」（ターン1,4...）

### 燃え盛る（初期値）
- **ID**: boss01_enemy1_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 燃え盛る古竜が大地を焼き尽くす。炎の壁が迫り、逃げ場がない。
- **playerDamage**: 4
- **enemyDamage**: 0

### 小さな
- **ID**: boss01_enemy1_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな古竜が大地を焼いている。手のひらサイズの竜の息吹は焚き火ほどの炎しか出ない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい
- **ID**: boss01_enemy1_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 優しい古竜がゆっくり大地を温めている。焼いているというより、焚き火の隣にいるようだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 堅い
- **ID**: boss01_enemy1_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 堅い古竜が大地を踏み焼いている。重い足が地面を砕き、割れ目から炎が噴き出す。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い
- **ID**: boss01_enemy1_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い古竜が大地を正確に焼いている。一条の炎が地面を切り裂く。逃げ道を塞がれた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: boss01_enemy1_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた古竜が大地を焼こうとしている。翼は折れ、鱗は剥がれ、吐く炎も色がおかしい。温かくない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な
- **ID**: boss01_enemy1_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 屈強な古竜が全力で大地を焼く。地平線まで炎の海が広がった。空気が燃えている。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた
- **ID**: boss01_enemy1_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍てついた古竜が大地を焼いている。矛盾した光景。吐息は炎ではなく吹雪だ。大地が凍土に変わる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 透き通った
- **ID**: boss01_enemy1_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った古竜が大地を焼いている。見えない竜の炎。気づいた時にはもう足元が焦げていた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 呪われた
- **ID**: boss01_enemy1_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた古竜が大地を焼いている。黒い炎が大地を侵す。焼かれた地面から何も生えなくなった。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い
- **ID**: boss01_enemy1_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い古竜が大地を焼いている。半分寝ている。あくびと共に漏れた炎が足元をかすめた。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（17件）
# 「古竜の[subj*]が 魔女に 降り注いでいる」（ターン2,5...）

### 炎（初期値）
- **ID**: boss01_enemy2_flame
- **conditions**: { s1: 'subj_flame' }
- **text**: 古竜の炎が魔女に降り注ぐ。灼熱の雨。帽子の端が焦げた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 子猫
- **ID**: boss01_enemy2_kitten
- **conditions**: { s1: 'subj_kitten' }
- **text**: 古竜の子猫が魔女に降り注いでいる。空から子猫が落ちてくる。痛くはないが、混乱する。
- **playerDamage**: 0
- **enemyDamage**: 0

### 蛇
- **ID**: boss01_enemy2_snake
- **conditions**: { s1: 'subj_snake' }
- **text**: 古竜の蛇が魔女に降り注いでいる。竜の鱗から生まれた小蛇の群れ。噛みつかれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 竜
- **ID**: boss01_enemy2_dragon
- **conditions**: { s1: 'subj_dragon' }
- **text**: 古竜の竜が魔女に降り注いでいる。竜の鱗が変じた小さな竜の群れが空を覆う。火の粉が降り注いだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 蝶
- **ID**: boss01_enemy2_butterfly
- **conditions**: { s1: 'subj_butterfly' }
- **text**: 古竜の蝶が魔女に降り注いでいる。鱗粉が竜の毒を含んでいる。肌がひりひりする。
- **playerDamage**: 1
- **enemyDamage**: 0

### 風
- **ID**: boss01_enemy2_wind
- **conditions**: { s1: 'subj_wind' }
- **text**: 古竜の風が魔女に降り注いでいる。翼が起こす突風が上から叩きつけられる。立っていられない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 氷
- **ID**: boss01_enemy2_ice
- **conditions**: { s1: 'subj_ice' }
- **text**: 古竜の氷が魔女に降り注いでいる。竜の吐息が凍った結晶。鋭い氷片が肩を切った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 影
- **ID**: boss01_enemy2_shadow
- **conditions**: { s1: 'subj_shadow' }
- **text**: 古竜の影が魔女に降り注いでいる。巨大な翼の影が覆いかぶさる。暗闘の中で足がもつれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌
- **ID**: boss01_enemy2_song
- **conditions**: { s1: 'subj_song' }
- **text**: 古竜の歌が魔女に降り注いでいる。太古の咆哮が旋律になって耳を裂く。頭が痛い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 沈黙
- **ID**: boss01_enemy2_silence
- **conditions**: { s1: 'subj_silence' }
- **text**: 古竜の沈黙が魔女に降り注いでいる。音が消える。自分の鼓動すら聞こえない。恐ろしい。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士
- **ID**: boss01_enemy2_knight
- **conditions**: { s1: 'subj_knight' }
- **text**: 古竜の騎士が魔女に降り注いでいる。竜に忠誠を誓う亡霊騎士が空から襲いかかる。剣が肩を掠めた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 魔女
- **ID**: boss01_enemy2_witch
- **conditions**: { s1: 'subj_witch' }
- **text**: 古竜の魔女が魔女に降り注いでいる。竜に仕えた古の魔女の幻影。呪文が降り注ぎ、体が重くなった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 王
- **ID**: boss01_enemy2_king
- **conditions**: { s1: 'subj_king' }
- **text**: 古竜の王が魔女に降り注いでいる。竜に喰われた王たちの幻が落ちてくる。王冠が頭に当たった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 亡霊
- **ID**: boss01_enemy2_ghost
- **conditions**: { s1: 'subj_ghost' }
- **text**: 古竜の亡霊が魔女に降り注いでいる。竜に焼かれた者たちの怨念。冷たい手が腕を掴む。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡
- **ID**: boss01_enemy2_mirror
- **conditions**: { s1: 'subj_mirror' }
- **text**: 古竜の鏡が魔女に降り注いでいる。鱗の一枚一枚が鏡面。自分の怯えた顔が無数に映る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形
- **ID**: boss01_enemy2_doll
- **conditions**: { s1: 'subj_doll' }
- **text**: 古竜の人形が魔女に降り注いでいる。竜の鱗で作られた人形が空から落ちてくる。硬い。頭に当たった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 雨
- **ID**: boss01_enemy2_rain
- **conditions**: { s1: 'subj_rain' }
- **text**: 古竜の雨が魔女に降り注いでいる。竜の吐息が霧雨となって肌を灼く。じわじわと熱い。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 4. 敵文③outcomes（187件）
# 「[mod*][subj*]が 古竜に 砕かれている」（ターン3,6...）

## 子猫

### 小さな × 子猫
- **ID**: boss01_enemy3_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 小さな子猫が古竜に砕かれている。親指ほどの子猫が竜の爪に弾かれた。衝撃は微かだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: boss01_enemy3_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が古竜に砕かれている。人懐っこい猫が宙を舞う。衝撃波は弱い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 子猫
- **ID**: boss01_enemy3_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 燃え盛る子猫が古竜に砕かれている。炎をまとった猫が弾け、火の粉が飛び散った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 堅い × 子猫
- **ID**: boss01_enemy3_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 堅い子猫が古竜に砕かれている。陶器の招き猫が粉々になる。破片が頬をかすめた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 子猫
- **ID**: boss01_enemy3_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 鋭い子猫が古竜に砕かれている。硝子の爪が砕け散り、破片が刺さった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 子猫
- **ID**: boss01_enemy3_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: 壊れた子猫が古竜に砕かれている。ぬいぐるみの綿が舞う。痛くもないが、視界が悪い。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: boss01_enemy3_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 屈強な子猫が古竜に砕かれている。虎のような体格の猫が弾き飛ばされ、衝撃波が走る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 凍てついた × 子猫
- **ID**: boss01_enemy3_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 凍てついた子猫が古竜に砕かれている。氷の彫刻が砕け、冷たい破片が散った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 透き通った × 子猫
- **ID**: boss01_enemy3_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 透き通った子猫が古竜に砕かれている。硝子の子猫が粉々に。光の破片が宙に舞った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: boss01_enemy3_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が古竜に砕かれている。砕くたびに増える。猫の残骸が呪いを撒き散らす。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い × 子猫
- **ID**: boss01_enemy3_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が古竜に砕かれている。眠っていた猫が宙を舞う。衝撃はほとんどない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: boss01_enemy3_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 小さな蛇が古竜に砕かれている。指ほどの蛇が弾き飛ばされる。衝撃は微かだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蛇
- **ID**: boss01_enemy3_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 優しい蛇が古竜に砕かれている。温かい体が地面に叩きつけられる。衝撃波は弱い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: boss01_enemy3_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 燃え盛る蛇が古竜に砕かれている。炎の軌跡を引く蛇が破裂し、灼熱の飛沫が散った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 蛇
- **ID**: boss01_enemy3_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 堅い蛇が古竜に砕かれている。鉄鱗の蛇が砕け、金属の破片が弾丸のように飛ぶ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 蛇
- **ID**: boss01_enemy3_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 鋭い蛇が古竜に砕かれている。猛毒の牙が折れて飛んできた。毒が肌を焼く。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 蛇
- **ID**: boss01_enemy3_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 壊れた蛇が古竜に砕かれている。脱皮途中の蛇が散る。古い皮が風に舞うだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: boss01_enemy3_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 屈強な蛇が古竜に砕かれている。大蛇の巨体が叩きつけられ、地震のような衝撃が走った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 蛇
- **ID**: boss01_enemy3_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 凍てついた蛇が古竜に砕かれている。氷の蛇が砕け、冷たい破片が降り注ぐ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 蛇
- **ID**: boss01_enemy3_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が古竜に砕かれている。透明な体が砕け、見えない破片が肌を切った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 蛇
- **ID**: boss01_enemy3_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が古竜に砕かれている。砕くたびに大きくなる蛇の残骸が飛び散り、呪いを振りまく。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 蛇
- **ID**: boss01_enemy3_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が古竜に砕かれている。とぐろを巻いたまま弾き飛ばされた。衝撃は小さい。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: boss01_enemy3_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 小さな竜が古竜に砕かれている。手のひらサイズの竜が弾かれ、小さな火を噴きながら飛んでいく。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい × 竜
- **ID**: boss01_enemy3_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 優しい竜が古竜に砕かれている。穏やかな老竜が崩れ落ちる。大きな体が地を揺らした。
- **playerDamage**: 2
- **enemyDamage**: 0

### 燃え盛る × 竜
- **ID**: boss01_enemy3_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 燃え盛る竜が古竜に砕かれている。業火の竜が爆散し、炎の嵐が全てを焼く。大地が紅蓮に染まった。
- **playerDamage**: 5
- **enemyDamage**: 0

### 堅い × 竜
- **ID**: boss01_enemy3_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 堅い竜が古竜に砕かれている。城壁のような鱗が砕け散り、巨大な破片が降り注ぐ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い × 竜
- **ID**: boss01_enemy3_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 鋭い竜が古竜に砕かれている。金色の爪が折れて飛んでくる。刃のような鱗が体を切った。
- **playerDamage**: 4
- **enemyDamage**: 0

### 壊れた × 竜
- **ID**: boss01_enemy3_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 壊れた竜が古竜に砕かれている。もう壊れているものを砕いても、衝撃は少ない。骨片がぱらぱらと落ちた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 竜
- **ID**: boss01_enemy3_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 屈強な竜が古竜に砕かれている。山のような巨体が砕け、大地が裂けた。衝撃波が全てを薙ぎ倒す。
- **playerDamage**: 5
- **enemyDamage**: 0

### 凍てついた × 竜
- **ID**: boss01_enemy3_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 凍てついた竜が古竜に砕かれている。白い竜の体が砕け、吹雪が噴き出した。凍てつく破片が肌を刺す。
- **playerDamage**: 4
- **enemyDamage**: 0

### 透き通った × 竜
- **ID**: boss01_enemy3_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 透き通った竜が古竜に砕かれている。水晶の竜が粉々になり、光の破片が宙を舞う。美しいが痛い。
- **playerDamage**: 2
- **enemyDamage**: 0

### 呪われた × 竜
- **ID**: boss01_enemy3_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が古竜に砕かれている。暴走した竜の残骸から呪いが噴き出す。触れたものが腐る瘴気だ。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い × 竜
- **ID**: boss01_enemy3_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 眠い竜が古竜に砕かれている。居眠り中の竜が叩き起こされ、寝ぼけたまま崩れた。衝撃は鈍い。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 蝶

### 小さな × 蝶
- **ID**: boss01_enemy3_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 小さな蝶が古竜に砕かれている。花びらほどの蝶が散る。衝撃は皆無だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: boss01_enemy3_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が古竜に砕かれている。鱗粉が舞うだけ。痛みはない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: boss01_enemy3_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 燃え盛る蝶が古竜に砕かれている。炎の羽が弾け、火の粉が降り注ぐ。髪の先が焦げた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 堅い × 蝶
- **ID**: boss01_enemy3_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 堅い蝶が古竜に砕かれている。金属の蝶が砕け、鋭い破片が飛んだ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 蝶
- **ID**: boss01_enemy3_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 鋭い蝶が古竜に砕かれている。刃の羽が四散し、刃物の雨が降った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 蝶
- **ID**: boss01_enemy3_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 壊れた蝶が古竜に砕かれている。片羽の蝶が散る。もう壊れていたものだ。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: boss01_enemy3_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 屈強な蝶が古竜に砕かれている。巨蝶が叩き潰され、突風が吹き荒れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 凍てついた × 蝶
- **ID**: boss01_enemy3_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 凍てついた蝶が古竜に砕かれている。霜の結晶が砕け、冷たい粉が舞う。肌がひりつく。
- **playerDamage**: 1
- **enemyDamage**: 0

### 透き通った × 蝶
- **ID**: boss01_enemy3_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透き通った蝶が古竜に砕かれている。透明な翅が光の粒に変わった。美しいが無害だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: boss01_enemy3_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が古竜に砕かれている。呪いの鱗粉が舞い上がり、吸い込むと方向感覚がなくなる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い × 蝶
- **ID**: boss01_enemy3_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が古竜に砕かれている。羽を閉じたまま弾かれた。衝撃は微かだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: boss01_enemy3_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 小さな風が古竜に砕かれている。そよ風が竜の爪で断たれる。微風が頬を撫でただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: boss01_enemy3_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 優しい風が古竜に砕かれている。温かい追い風が引き裂かれ、冷たくなって散った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: boss01_enemy3_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 燃え盛る風が古竜に砕かれている。熱風が破裂し、灼熱の突風が四方に吹き荒れた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 風
- **ID**: boss01_enemy3_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 堅い風が古竜に砕かれている。頑固な風が断たれ、圧縮された空気が弾けた。耳が鳴る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 風
- **ID**: boss01_enemy3_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 鋭い風が古竜に砕かれている。真空の刃が砕かれ、切断力を失った破片が肌を切る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 風
- **ID**: boss01_enemy3_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 壊れた風が古竜に砕かれている。乱気流がさらに乱れるだけだ。元から壊れている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: boss01_enemy3_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 屈強な風が古竜に砕かれている。暴風が引き裂かれ、衝撃波が大地を揺らした。立っていられない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 風
- **ID**: boss01_enemy3_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍てついた風が古竜に砕かれている。吹雪が爆散し、氷の粒が全身を打った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 風
- **ID**: boss01_enemy3_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 透き通った風が古竜に砕かれている。澄んだ風が散る。空気が少し冷えただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 風
- **ID**: boss01_enemy3_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が古竜に砕かれている。呪いの風が散り、帰り道を忘れる瘴気が漂う。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い × 風
- **ID**: boss01_enemy3_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 眠い風が古竜に砕かれている。生ぬるい風がぷつりと途切れた。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 炎

### 小さな × 炎
- **ID**: boss01_enemy3_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 小さな炎が古竜に砕かれている。蝋燭の火が掻き消される。衝撃は微かだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 炎
- **ID**: boss01_enemy3_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 優しい炎が古竜に砕かれている。暖炉の火が吹き消された。温もりが消えただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: boss01_enemy3_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 燃え盛る炎が古竜に砕かれている。大火が砕かれ、炎の破片が全方位に飛散した。世界が燃える。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い × 炎
- **ID**: boss01_enemy3_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 堅い炎が古竜に砕かれている。消えない炎が砕かれ、小さな火が散乱する。踏むと火傷する。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 炎
- **ID**: boss01_enemy3_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が古竜に砕かれている。一点集中の炎が弾け、焦点を失った熱線が走る。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 炎
- **ID**: boss01_enemy3_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 壊れた炎が古竜に砕かれている。色のおかしい炎が散る。温度がないから衝撃もない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: boss01_enemy3_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 屈強な炎が古竜に砕かれている。火柱が崩壊し、業火の波が押し寄せた。空気が灼ける。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた × 炎
- **ID**: boss01_enemy3_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 凍てついた炎が古竜に砕かれている。青白い炎が散り、凍傷の冷気が広がった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 炎
- **ID**: boss01_enemy3_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 透き通った炎が古竜に砕かれている。見えない炎が散り、空気が揺らぐだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 炎
- **ID**: boss01_enemy3_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が古竜に砕かれている。呪いの炎が飛び散り、触れたものの形を記憶し始めた。腕が燃えている像が浮かぶ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 炎
- **ID**: boss01_enemy3_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 眠い炎が古竜に砕かれている。消えかけの熾火が掻き消される。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: boss01_enemy3_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷が古竜に砕かれている。掌の氷片が粉になる。冷たい霧が漂うだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: boss01_enemy3_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 優しい氷が古竜に砕かれている。柔らかな氷が砕け、冷たい水滴が散った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: boss01_enemy3_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 燃え盛る氷が古竜に砕かれている。矛盾した存在が爆散し、蒸気と炎の渦が吹き荒れた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 氷
- **ID**: boss01_enemy3_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 堅い氷が古竜に砕かれている。万年氷の破片が弾丸のように飛ぶ。鋼より硬い氷片が肌を穿った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い × 氷
- **ID**: boss01_enemy3_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 鋭い氷が古竜に砕かれている。氷柱の破片が刃物のように飛散した。腕を切られた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 氷
- **ID**: boss01_enemy3_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: 壊れた氷が古竜に砕かれている。ひび割れた氷がさらに砕ける。水しぶきが上がるだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: boss01_enemy3_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 屈強な氷が古竜に砕かれている。山のような氷塊が爆砕し、氷の嵐が全てを打った。大地が凍りつく。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた × 氷
- **ID**: boss01_enemy3_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 凍てついた氷が古竜に砕かれている。絶対零度の氷が砕け散り、触れたものを瞬時に凍らせる。指先が白くなった。
- **playerDamage**: 4
- **enemyDamage**: 0

### 透き通った × 氷
- **ID**: boss01_enemy3_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透き通った氷が古竜に砕かれている。透明な破片が見えない。踏んで足を切った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 氷
- **ID**: boss01_enemy3_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 呪われた氷が古竜に砕かれている。溶けない呪いの氷片が散り、触れた地面に永遠の冬が広がる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 氷
- **ID**: boss01_enemy3_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: 眠い氷が古竜に砕かれている。ゆっくり溶ける氷が砕け、水たまりが広がった。足が濡れた。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: boss01_enemy3_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が古竜に砕かれている。足元の黒い染みが掻き消される。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: boss01_enemy3_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 優しい影が古竜に砕かれている。木陰のような影が散り、日差しが戻っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: boss01_enemy3_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 燃え盛る影が古竜に砕かれている。黒い炎が弾け、暗い灼熱が広がった。影の炎は消えにくい。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 影
- **ID**: boss01_enemy3_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 堅い影が古竜に砕かれている。固まった影が割れ、鋭い破片が飛んだ。影の欠片が肌を切る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 影
- **ID**: boss01_enemy3_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 鋭い影が古竜に砕かれている。影の刃が砕かれ、切断力を失った破片が散る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 影
- **ID**: boss01_enemy3_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 壊れた影が古竜に砕かれている。めくれ上がった影がさらにねじれる。実体がないから衝撃もない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: boss01_enemy3_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 屈強な影が古竜に砕かれている。巨大な影が崩壊し、闇の衝撃波が走った。視界が一瞬暗転する。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 影
- **ID**: boss01_enemy3_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍てついた影が古竜に砕かれている。黒い霜が散り、触れた肌が冷たく痺れた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 影
- **ID**: boss01_enemy3_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 透き通った影が古竜に砕かれている。半透明の影が消える。何も残らなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 影
- **ID**: boss01_enemy3_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が古竜に砕かれている。触れたものを影に変える力が飛び散り、足元の地面が黒く染まった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 影
- **ID**: boss01_enemy3_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 眠い影が古竜に砕かれている。正午の影がさらに縮んで消えた。何も起きない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: boss01_enemy3_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 小さな歌が古竜に砕かれている。鼻歌が咆哮に掻き消される。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: boss01_enemy3_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 優しい歌が古竜に砕かれている。子守唄が途切れ、余韻だけが残った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 歌
- **ID**: boss01_enemy3_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 燃え盛る歌が古竜に砕かれている。戦の歌が砕かれ、残響が空気を焦がす。耳が熱い。
- **playerDamage**: 2
- **enemyDamage**: 0

### 堅い × 歌
- **ID**: boss01_enemy3_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 堅い歌が古竜に砕かれている。止まらないはずの歌が断たれた。不協和音が響く。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 歌
- **ID**: boss01_enemy3_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 鋭い歌が古竜に砕かれている。金切り声が破裂し、音波の残骸が鼓膜を叩く。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 歌
- **ID**: boss01_enemy3_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 壊れた歌が古竜に砕かれている。途切れ途切れの旋律がさらに砕ける。ノイズが漂うだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: boss01_enemy3_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 屈強な歌が古竜に砕かれている。大地を震わせる合唱が砕かれ、衝撃波のような残響が走った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 歌
- **ID**: boss01_enemy3_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が古竜に砕かれている。凍った旋律の破片が飛び散り、空気が冷え込んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 歌
- **ID**: boss01_enemy3_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 透き通った歌が古竜に砕かれている。澄んだ旋律が散る。余韻だけが耳に残った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 歌
- **ID**: boss01_enemy3_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が古竜に砕かれている。頭から離れない旋律の断片が飛び散る。聴いてしまった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 歌
- **ID**: boss01_enemy3_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 眠い歌が古竜に砕かれている。子守唄が途切れたが、残響で少しだけ眠くなった。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 沈黙

### 小さな × 沈黙
- **ID**: boss01_enemy3_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 小さな沈黙が古竜に砕かれている。一瞬の静けさが咆哮に掻き消される。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: boss01_enemy3_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 優しい沈黙が古竜に砕かれている。安らぎの静寂が破られ、轟音が戻った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 沈黙
- **ID**: boss01_enemy3_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 燃え盛る沈黙が古竜に砕かれている。怒りの沈黙が破られ、圧縮された熱が爆発した。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 沈黙
- **ID**: boss01_enemy3_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 堅い沈黙が古竜に砕かれている。音の墓場が破壊され、溜まっていた音が一斉に噴き出す。耳を塞いだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 沈黙
- **ID**: boss01_enemy3_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 鋭い沈黙が古竜に砕かれている。刃のような無音が砕かれ、鋭い残響が鳴った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 沈黙
- **ID**: boss01_enemy3_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 壊れた沈黙が古竜に砕かれている。もう壊れている静寂がさらに散る。ノイズが増えただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: boss01_enemy3_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 屈強な沈黙が古竜に砕かれている。圧倒的な静寂が崩壊し、圧縮されていた空気が解放された。衝撃波が走る。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 沈黙
- **ID**: boss01_enemy3_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が古竜に砕かれている。時を止めていた静寂が砕け、凍った時間の破片が降り注ぐ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 沈黙
- **ID**: boss01_enemy3_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 透き通った沈黙が古竜に砕かれている。泉のような静寂が消える。わずかな涼しさが残っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 沈黙
- **ID**: boss01_enemy3_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が古竜に砕かれている。声を奪う呪いが飛び散り、一瞬だけ声が出なくなった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 沈黙
- **ID**: boss01_enemy3_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠い沈黙が古竜に砕かれている。午後の図書館の静けさが消える。眠気はすぐに覚めた。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 騎士

### 小さな × 騎士
- **ID**: boss01_enemy3_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 小さな騎士が古竜に砕かれている。子供の騎士が弾き飛ばされる。兜が転がってきた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい × 騎士
- **ID**: boss01_enemy3_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が古竜に砕かれている。剣を収めたまま吹き飛ばされた。衝撃は軽い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 騎士
- **ID**: boss01_enemy3_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 燃え盛る騎士が古竜に砕かれている。炎に包まれた騎士が砕かれ、燃える鎧の破片が飛散した。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 騎士
- **ID**: boss01_enemy3_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 堅い騎士が古竜に砕かれている。分厚い鎧が砕け、重い金属片が飛んでくる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い × 騎士
- **ID**: boss01_enemy3_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 鋭い騎士が古竜に砕かれている。剣の達人が叩き潰され、折れた剣が弾丸のように飛んだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 騎士
- **ID**: boss01_enemy3_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 壊れた騎士が古竜に砕かれている。もう壊れている鎧がさらに砕ける。衝撃は小さい。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 騎士
- **ID**: boss01_enemy3_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 屈強な騎士が古竜に砕かれている。巨体の重装騎士が叩き潰され、大地が揺れた。金属の破片が雨のように降り注ぐ。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた × 騎士
- **ID**: boss01_enemy3_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 凍てついた騎士が古竜に砕かれている。霜をまとった鎧が砕け、氷と金属の破片が飛び散った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 騎士
- **ID**: boss01_enemy3_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 透き通った騎士が古竜に砕かれている。影の薄い騎士が砕かれても、音がしない。衝撃も小さい。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 騎士
- **ID**: boss01_enemy3_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士が古竜に砕かれている。黒い鎧が砕け、呪いの破片が散った。触れた肌が黒ずむ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 騎士
- **ID**: boss01_enemy3_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が古竜に砕かれている。半分寝ている騎士が弾き飛ばされる。衝撃は鈍い。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 魔女

### 小さな × 魔女
- **ID**: boss01_enemy3_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 小さな魔女が古竜に砕かれている。見習いの魔女が弾き飛ばされ、帽子だけが残った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい × 魔女
- **ID**: boss01_enemy3_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 優しい魔女が古竜に砕かれている。薬草の魔女が吹き飛ばされ、薬瓶が割れた。薬の匂いが漂う。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 魔女
- **ID**: boss01_enemy3_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 燃え盛る魔女が古竜に砕かれている。炎の魔女が砕かれ、制御を失った魔法が爆発した。業火が広がる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い × 魔女
- **ID**: boss01_enemy3_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 堅い魔女が古竜に砕かれている。頑固な老魔女が叩き潰され、杖が折れて飛んできた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 魔女
- **ID**: boss01_enemy3_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鋭い魔女が古竜に砕かれている。鉤鼻の魔女が砕かれ、暴発した魔力の矢が四散した。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 魔女
- **ID**: boss01_enemy3_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 壊れた魔女が古竜に砕かれている。暴走した魔力がさらに暴れる。制御不能な呪文が飛び交った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 屈強な × 魔女
- **ID**: boss01_enemy3_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 屈強な魔女が古竜に砕かれている。拳で殴る魔女が叩き潰され、衝撃波が走った。大地が揺れる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 魔女
- **ID**: boss01_enemy3_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 凍てついた魔女が古竜に砕かれている。氷の魔女が砕け、霜の嵐が吹き荒れた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 透き通った × 魔女
- **ID**: boss01_enemy3_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 透き通った魔女が古竜に砕かれている。存在の薄い魔女が散る。ほとんど気づかなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 魔女
- **ID**: boss01_enemy3_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪われた魔女が古竜に砕かれている。自らの呪いに蝕まれた魔女が散り、呪いの瘴気が漂う。体が重くなった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 魔女
- **ID**: boss01_enemy3_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 眠い魔女が古竜に砕かれている。うとうとする魔女が弾かれ、寝ぼけた呪文が漏れた。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 王

### 小さな × 王
- **ID**: boss01_enemy3_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 小さな王が古竜に砕かれている。子供の王が弾き飛ばされ、王冠が転がった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい × 王
- **ID**: boss01_enemy3_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 優しい王が古竜に砕かれている。慈悲の王が吹き飛ばされる。衝撃は小さい。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 王
- **ID**: boss01_enemy3_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 燃え盛る王が古竜に砕かれている。炎の冠が砕け、王の怒りが炎となって飛び散った。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 王
- **ID**: boss01_enemy3_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 堅い王が古竜に砕かれている。石のような王が崩れ、重い破片が降り注ぐ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 王
- **ID**: boss01_enemy3_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鋭い王が古竜に砕かれている。鷹の目の王が砕かれ、砕けた王冠の破片が飛んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 王
- **ID**: boss01_enemy3_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 壊れた王が古竜に砕かれている。歪んだ王冠がさらに歪む。もう壊れていたものだ。衝撃は小さい。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 王
- **ID**: boss01_enemy3_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 屈強な王が古竜に砕かれている。戦士王が叩き潰され、鎧と剣の破片が弾丸のように飛んだ。大地が震える。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた × 王
- **ID**: boss01_enemy3_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 凍てついた王が古竜に砕かれている。氷の玉座ごと砕かれ、凍った破片が四方に飛んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 王
- **ID**: boss01_enemy3_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が古竜に砕かれている。存在の薄い王が散る。砕かれたことすら気づかない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 王
- **ID**: boss01_enemy3_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 呪われた王が古竜に砕かれている。触れたものを金に変える呪いが飛び散る。足元の石が重い黄金に変わった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 王
- **ID**: boss01_enemy3_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 眠い王が古竜に砕かれている。居眠り中の王が弾き飛ばされた。衝撃は鈍い。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 亡霊

### 小さな × 亡霊
- **ID**: boss01_enemy3_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 小さな亡霊が古竜に砕かれている。子供の霊が散り、笑い声だけが残った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: boss01_enemy3_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 優しい亡霊が古竜に砕かれている。穏やかな霊が散る。冷たい風が頬を撫でた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 亡霊
- **ID**: boss01_enemy3_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 燃え盛る亡霊が古竜に砕かれている。怨念の火が弾け、黒い炎が散った。触れると灼ける。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 亡霊
- **ID**: boss01_enemy3_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 堅い亡霊が古竜に砕かれている。何百年も立ち続けた霊が散り、冷気の波が押し寄せた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 亡霊
- **ID**: boss01_enemy3_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 鋭い亡霊が古竜に砕かれている。罪を見透かす視線が散り、残像が目に焼きつく。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 亡霊
- **ID**: boss01_enemy3_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 壊れた亡霊が古竜に砕かれている。記憶のない霊が散る。何も残らない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: boss01_enemy3_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 屈強な亡霊が古竜に砕かれている。鎧武者の霊が叩き潰され、怨念の衝撃波が走った。体が押し戻される。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 亡霊
- **ID**: boss01_enemy3_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍てついた亡霊が古竜に砕かれている。凍傷の冷気が爆散し、周囲の空気が凍りついた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 亡霊
- **ID**: boss01_enemy3_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 透き通った亡霊が古竜に砕かれている。成仏しかけた霊が消える。涼しい風が一瞬吹いた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 亡霊
- **ID**: boss01_enemy3_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪われた亡霊が古竜に砕かれている。呪いに縛られた霊が散り、呪いの瘴気が充満した。息が苦しい。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 亡霊
- **ID**: boss01_enemy3_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: 眠い亡霊が古竜に砕かれている。うとうとしていた霊が消える。衝撃はほぼない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: boss01_enemy3_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 小さな鏡が古竜に砕かれている。手鏡が粉々になる。反射光が一瞬目を刺した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 鏡
- **ID**: boss01_enemy3_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が古竜に砕かれている。少しだけ美しく映す鏡が割れた。映っていた顔が歪んで消える。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: boss01_enemy3_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 燃え盛る鏡が古竜に砕かれている。鏡の中の炎が解き放たれ、現実に燃え広がった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 鏡
- **ID**: boss01_enemy3_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 堅い鏡が古竜に砕かれている。割れないはずの鏡が砕け、重い破片が弾丸のように飛んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 鏡
- **ID**: boss01_enemy3_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 鋭い鏡が古竜に砕かれている。刃のような破片が雨のように降り注ぐ。全身を切り刻まれた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた × 鏡
- **ID**: boss01_enemy3_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: 壊れた鏡が古竜に砕かれている。ひび割れた鏡がさらに砕ける。乱反射が目を刺す。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 鏡
- **ID**: boss01_enemy3_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 屈強な鏡が古竜に砕かれている。巨大な姿見が爆散し、無数の大きな破片が四方に飛んだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 鏡
- **ID**: boss01_enemy3_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍てついた鏡が古竜に砕かれている。氷の鏡面が砕け、凍った破片と冷気が広がった。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 鏡
- **ID**: boss01_enemy3_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透き通った鏡が古竜に砕かれている。透明な鏡が散る。見えない破片を踏んだ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 鏡
- **ID**: boss01_enemy3_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が古竜に砕かれている。鏡の中の影たちが解き放たれ、周囲に蠢き始めた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 鏡
- **ID**: boss01_enemy3_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 眠い鏡が古竜に砕かれている。曇った鏡が砕ける。寝顔の映像が散った。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 人形

### 小さな × 人形
- **ID**: boss01_enemy3_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 小さな人形が古竜に砕かれている。指人形が粉々になる。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: boss01_enemy3_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 優しい人形が古竜に砕かれている。笑顔の縫い付けてある人形が散る。綿が舞った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: boss01_enemy3_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃え盛る人形が古竜に砕かれている。燃える藁人形が弾け、火の粉が降り注いだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 堅い × 人形
- **ID**: boss01_enemy3_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 堅い人形が古竜に砕かれている。木彫りの人形が砕け、硬い破片が飛んでくる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 人形
- **ID**: boss01_enemy3_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 鋭い人形が古竜に砕かれている。関節の刃が散り、刃物の破片が飛び交った。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 人形
- **ID**: boss01_enemy3_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 壊れた人形が古竜に砕かれている。首がもげかけた人形がさらに砕ける。部品が散るだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: boss01_enemy3_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 屈強な人形が古竜に砕かれている。等身大のゴーレムが砕かれ、丸太のような腕が飛んできた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 人形
- **ID**: boss01_enemy3_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 凍てついた人形が古竜に砕かれている。氷の人形が砕け、冷たい破片が降り注ぐ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 透き通った × 人形
- **ID**: boss01_enemy3_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 透き通った人形が古竜に砕かれている。硝子の人形が砕け、光の粒が舞った。美しいが足元に破片が散る。
- **playerDamage**: 1
- **enemyDamage**: 0

### 呪われた × 人形
- **ID**: boss01_enemy3_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が古竜に砕かれている。砕いても砕いても位置が変わって現れる。呪いの残骸が増殖する。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い × 人形
- **ID**: boss01_enemy3_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 眠い人形が古竜に砕かれている。目を閉じた人形が散る。衝撃はほぼない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: boss01_enemy3_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 小さな雨が古竜に砕かれている。霧雨が竜の爪で断たれる。水飛沫が頬にかかっただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: boss01_enemy3_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 優しい雨が古竜に砕かれている。慈雨が引き裂かれ、水滴が散った。衝撃はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 雨
- **ID**: boss01_enemy3_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 燃え盛る雨が古竜に砕かれている。火の雨が砕かれ、灼熱の滴が全方位に飛び散った。肌が焼ける。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い × 雨
- **ID**: boss01_enemy3_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 堅い雨が古竜に砕かれている。雹が砕かれ、氷の粒が散弾のように飛んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鋭い × 雨
- **ID**: boss01_enemy3_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 鋭い雨が古竜に砕かれている。針の雨が砕かれ、破裂した水滴が肌を刺す。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 雨
- **ID**: boss01_enemy3_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 壊れた雨が古竜に砕かれている。リズムの狂った雨がさらに乱れる。水が上に飛んでいった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: boss01_enemy3_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 屈強な雨が古竜に砕かれている。豪雨が引き裂かれ、水の壁が押し寄せた。足元をさらわれる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 凍てついた × 雨
- **ID**: boss01_enemy3_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍てついた雨が古竜に砕かれている。凍雨が砕け、氷の粒と冷水が混ざって降り注ぐ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 雨
- **ID**: boss01_enemy3_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 透き通った雨が古竜に砕かれている。澄んだ雨粒が散る。濡れただけで、害はない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 雨
- **ID**: boss01_enemy3_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が古竜に砕かれている。呪いの雨滴が飛び散り、浴びた足が動かなくなった。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 雨
- **ID**: boss01_enemy3_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 眠い雨が古竜に砕かれている。眠気を誘う雨が散る。少しだけまぶたが重くなった。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 統計レポート

## 自文outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| enemyDamage平均 | 1.93 |
| enemyDamage=0の割合 | 36.4% (68/187) |
| enemyDamage≥4の割合 | 19.8% (37/187) |
| enemyDamage=5の割合 | 5.9% (11/187) |

### enemyDamage分布
| enemyDamage | 件数 | 割合 |
|-------------|------|------|
| 0 | 68 | 36.4% |
| 1 | 26 | 13.9% |
| 2 | 21 | 11.2% |
| 3 | 35 | 18.7% |
| 4 | 26 | 13.9% |
| 5 | 11 | 5.9% |

## 敵文①outcomes（11件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 11 |
| playerDamage平均 | 2.18 |
| playerDamage=0の割合 | 36.4% (4/11) |
| playerDamage≥4の割合 | 27.3% (3/11) |

## 敵文②outcomes（17件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 17 |
| playerDamage平均 | 1.82 |
| playerDamage=0の割合 | 23.5% (4/17) |
| playerDamage≥4の割合 | 5.9% (1/17) |

## 敵文③outcomes（187件）

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| playerDamage平均 | 1.40 |
| playerDamage=0の割合 | 38.0% (71/187) |
| playerDamage≥4の割合 | 10.7% (20/187) |
| playerDamage=5の割合 | 2.1% (4/187) |

### playerDamage分布
| playerDamage | 件数 | 割合 |
|-------------|------|------|
| 0 | 71 | 38.0% |
| 1 | 34 | 18.2% |
| 2 | 37 | 19.8% |
| 3 | 31 | 16.6% |
| 4 | 10 | 5.3% |
| 5 | 4 | 2.1% |
