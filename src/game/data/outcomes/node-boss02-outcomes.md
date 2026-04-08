# ノードBOSS02「黒き王」Outcome一覧

- **敵名**: 黒き王（空の玉座に座る黒い王。支配の言葉で魔女を屈服させようとする）
- **敵HP**: 25
- **勝利報酬**: 20Q

## 文構成
- **自文**: [mod*][subj*]が 王に 立ち向かう （187パターン: 11mod × 17subj）
- **敵文①** (ターン1,4...): [mod*]王が 魔女に 命じている （11パターン）
- **敵文②** (ターン2,5...): 王の[subj*]が 魔女を 追いかけてくる （17パターン）
- **敵文③** (ターン3,6...): [mod*]沈黙が 魔女を [pred*] （11mod × 7pred = 77パターン、歪み10種はdefaultOutcome）

## defaultOutcome

### 自文default
- **text**: 書き換えた言葉が王の前で力を失う。玉座の威圧に押し戻された。
- **playerDamage**: 0
- **enemyDamage**: 0

### 敵文① default
- **text**: 呪われた王が魔女に命じている。「跪け」黒い声が骨まで響く。
- **playerDamage**: 4
- **enemyDamage**: 0

### 敵文② default
- **text**: 王の影が魔女を追いかけてくる。逃げ場がない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 敵文③ default（格歪み）
- **text**: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
- **playerDamage**: 4
- **enemyDamage**: 0

---

# 1. 自文outcomes（187件）
# 「[mod*][subj*]が 王に 立ち向かう」

## 子猫

### 小さな × 子猫
- **ID**: boss02_player_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が玉座に向かって歩く。黒き王は気にも留めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 子猫
- **ID**: boss02_player_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 人懐っこい子猫が王の膝に乗ろうとする。黒き王の手が止まった。ほんの一瞬だけ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 子猫
- **ID**: boss02_player_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が玉座に飛び乗る。黒い衣が焦げ、王が初めて立ち上がった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 子猫
- **ID**: boss02_player_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が王に投げつけられる。王の額に当たって砕けた。王は瞬きひとつしない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 子猫
- **ID**: boss02_player_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪が王の手の甲を引っかく。黒い血が一筋。王が手を見下ろした。
- **playerDamage**: 0
- **enemyDamage**: 2

### 壊れた × 子猫
- **ID**: boss02_player_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみが王の足元に転がる。綿が散る。王はそれを踏んで歩いた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 子猫
- **ID**: boss02_player_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 虎のような体格の子猫が王に飛びかかる。玉座が揺れ、王の冠がずれた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 子猫
- **ID**: boss02_player_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が王の手首に噛みつく。霜が指先に広がり、王の命令の手が凍った。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 子猫
- **ID**: boss02_player_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が王をすり抜ける。王は何かが通り過ぎたのを感じたが、振り返れなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 子猫
- **ID**: boss02_player_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪いの猫が王の膝に居座る。追い払っても戻ってくる。王の命令が猫のせいで途切れた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 子猫
- **ID**: boss02_player_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が玉座の上で丸くなる。立ち向かうどころか、王の膝で寝ている。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 蛇

### 小さな × 蛇
- **ID**: boss02_player_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指ほどの蛇が王の袖口に潜り込む。王が袖を払ったが、蛇は残っている。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 蛇
- **ID**: boss02_player_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が王の腕に巻きつく。締め上げる気はない。王は困惑している。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蛇
- **ID**: boss02_player_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を引く蛇が玉座の足元から這い上がる。黒い衣に火が移り、王が初めて声を荒げた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 蛇
- **ID**: boss02_player_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄鱗の蛇が王の足に巻きつく。万力のような締めつけに王の膝が折れかけた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 蛇
- **ID**: boss02_player_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の牙が王の手首に食い込む。黒い血管に毒が走り、命令の声がかすれた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 蛇
- **ID**: boss02_player_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮途中の蛇が王の前に横たわる。古い皮を纏ったまま。王は視線すら向けない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蛇
- **ID**: boss02_player_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 大蛇が玉座ごと王を締め上げる。玉座の脚が軋み、王の呼吸が浅くなった。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 蛇の古い鱗(10)

### 凍てついた × 蛇
- **ID**: boss02_player_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 霜をまとった蛇が王の腕に絡みつく。冷気が骨まで沁み、命令の指が動かなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 蛇
- **ID**: boss02_player_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透明な蛇が王の体内に入り込む。骨格だけが蠢く。王は異変に気づかない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 蛇
- **ID**: boss02_player_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたび大きくなる蛇が王の玉座に巻きつく。一巻きごとに黒い石が軋む。王の権威が揺らいだ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 蛇
- **ID**: boss02_player_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いたまま眠る蛇。王の足元で日向ぼっこしている。立ち向かう気配はない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 竜

### 小さな × 竜
- **ID**: boss02_player_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が王に小さな火を噴く。王冠が僅かに煤けた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 竜
- **ID**: boss02_player_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が王の前に伏せる。王に屈したのではない。王という概念に敬意を払っただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 竜
- **ID**: boss02_player_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 業火の竜が玉座の間を炎で埋め尽くす。黒き王の衣が燃え、王冠が赤熱した。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 竜の赤い鱗(15)

### 堅い × 竜
- **ID**: boss02_player_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 城壁のような鱗の竜が玉座に体当たりする。石の玉座が真っ二つに割れた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 鋭い × 竜
- **ID**: boss02_player_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 金色の爪が王の鎧を引き裂く。一閃。黒い衣の下から古い傷が露わになった。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 王の黒い衣片(10)

### 壊れた × 竜
- **ID**: boss02_player_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼の折れた竜が王の前に立つ。火は吐けない。だが竜が王に屈する道理はない。王が一歩退いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 竜
- **ID**: boss02_player_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような巨竜が玉座の間に入りきらない。天井が砕け、王座ごと王を踏み潰しかけた。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 崩れた玉座の欠片(15)

### 凍てついた × 竜
- **ID**: boss02_player_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜の吐息が玉座の間を凍らせる。王の足が床に張りつき、命令の声が白い息に消えた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 透き通った × 竜
- **ID**: boss02_player_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が光を集め、王の目を灼く。王が目を庇った。その隙に竜が玉座を踏み砕いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 呪われた × 竜
- **ID**: boss02_player_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した竜が理性なく王に噛みつく。呪いが王の体に伝染し、黒い冠がさらに黒くなった。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 竜
- **ID**: boss02_player_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 居眠りする竜のいびきが玉座の間を揺らす。王の声がいびきに掻き消された。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 蝶

### 小さな × 蝶
- **ID**: boss02_player_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が王冠に止まる。黒き王は気づいていない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 蝶
- **ID**: boss02_player_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が王の鼻先を舞う。羽の模様が笑顔に見える。王の表情がわずかに揺れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 蝶
- **ID**: boss02_player_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の羽の蝶が王冠に止まる。火の粉が王の髪を焦がし、命令が途切れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 蝶
- **ID**: boss02_player_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が王の頬をかすめる。かん、と甲高い音。王が顔をしかめた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 蝶
- **ID**: boss02_player_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 刃の羽の蝶が王の首筋をかすめる。黒い血が一滴。王の声がわずかに震えた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 蝶
- **ID**: boss02_player_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が螺旋を描いて王の前に落ちる。王はそれを踏んだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 蝶
- **ID**: boss02_player_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 巨蝶の羽ばたきが突風を起こす。王冠が吹き飛び、床を転がった。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 蝶
- **ID**: boss02_player_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の蝶が王の唇に触れる。声が凍った。命令が出せない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 蝶
- **ID**: boss02_player_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が王の前を横切る。景色に溶けて消えた。王は何も見えていない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 蝶
- **ID**: boss02_player_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪いの蝶が王のまわりを飛ぶ。追えば追うほど方向感覚が狂う。王が玉座の位置を見失った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 蝶
- **ID**: boss02_player_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が王冠の上で羽を閉じて眠っている。立ち向かうとは言い難い姿だ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 風

### 小さな × 風
- **ID**: boss02_player_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が玉座の間を通り抜ける。王の髪がかすかに揺れた。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 風
- **ID**: boss02_player_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい風が玉座の間に吹く。王の衣がはためくが、威厳は崩れない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 風
- **ID**: boss02_player_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が玉座の間を灼く。王の衣が焦げ、玉座の石が赤く焼けた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 風
- **ID**: boss02_player_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 同じ方向から吹き続ける頑固な風。王の命令の声が押し戻される。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 風
- **ID**: boss02_player_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が王の頬を切る。黒い冠が傾き、王が手で押さえた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 風
- **ID**: boss02_player_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 方向の定まらない乱気流が玉座の間に渦巻く。王の衣が乱れるだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 風
- **ID**: boss02_player_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 暴風が玉座の間を吹き抜ける。王が玉座にしがみつく。支配者が何かにしがみつく姿は滑稽だ。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 王冠の黒い宝石(10)

### 凍てついた × 風
- **ID**: boss02_player_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が玉座の間を凍らせる。王の唇が青ざめ、命令の声が震えている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 風
- **ID**: boss02_player_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄んだ風が玉座の間の闇を吹き払う。一瞬だけ空の玉座が見えた。王は幻だったのか。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 風
- **ID**: boss02_player_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 帰り道を忘れさせる風が王を包む。王が玉座から立ち上がり、出口を探して彷徨い始めた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 眠い × 風
- **ID**: boss02_player_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生ぬるい風が玉座の間に漂う。王のまぶたが重くなるが、意志の力で開いている。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 炎

### 小さな × 炎
- **ID**: boss02_player_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの火が王の前に灯る。暗い玉座の間が少しだけ明るくなった。王の顔が見えた。虚ろだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 炎
- **ID**: boss02_player_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉の火が玉座の間を温める。冷たい空気が和らぐ。だが王の心は温まらない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 炎
- **ID**: boss02_player_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 大火が玉座を飲み込む。黒き王が炎の中に立つ。衣が燃え、王冠が溶け始めた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 炎
- **ID**: boss02_player_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が王の衣に張りつく。払っても消えない。じわじわと焼ける。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 炎
- **ID**: boss02_player_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一条の炎が玉座の背もたれを焼き切る。王の背後に空洞ができた。退路を断たれたのは王だ。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 炎
- **ID**: boss02_player_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が王の前で揺れる。紫と緑。温度がない。王は動じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 炎
- **ID**: boss02_player_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 火柱が玉座の間の天井を焼く。王の周囲が炎の壁に囲まれた。命令する相手がいない。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 炎
- **ID**: boss02_player_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い冷たい炎が王の手を舐める。命令のために差し出した手が凍りつく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 炎
- **ID**: boss02_player_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 見えない炎が王の足元で揺れる。衣の裾が焦げ始めて初めて気づいた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 炎
- **ID**: boss02_player_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪いの炎が王に燃え移る。王の命令を覚えて再生する炎が、王自身に命じ始めた。「跪け。」
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 呪われた王冠の破片(15)

### 眠い × 炎
- **ID**: boss02_player_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 消えかけの熾火が玉座の足元でくすぶる。王の靴底が僅かに温かくなっただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 氷

### 小さな × 氷
- **ID**: boss02_player_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 掌の氷片が王に投げつけられる。王の頬に当たって溶けた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 氷
- **ID**: boss02_player_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が王の手に触れる。怒りが一瞬冷えたが、すぐに黒く燃え上がった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 氷
- **ID**: boss02_player_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を内包する氷が玉座に叩きつけられる。凍傷と火傷。王の手が使い物にならなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 氷
- **ID**: boss02_player_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 万年氷が王の玉座に衝突する。鋼より硬い氷塊が玉座の肘掛けを砕いた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 氷
- **ID**: boss02_player_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱の剣が王の衣を貫く。黒い布が凍りつき、腕が動かせなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 氷
- **ID**: boss02_player_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が王に向かって滑る。足元で砕けて水たまりになった。王は濡れただけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 氷
- **ID**: boss02_player_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が玉座の間の天井を突き破る。王が氷壁に閉じ込められた。命令は氷越しには届かない。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 氷
- **ID**: boss02_player_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 絶対零度の氷が王を包む。王の声が凍りつき、空気中で結晶になって落ちた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 透き通った × 氷
- **ID**: boss02_player_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透明な氷が王の足元に広がる。気づかず立ち上がった王が滑り、威厳もろとも崩れた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 氷
- **ID**: boss02_player_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が王の口を覆う。命令ができない。王から言葉を奪った。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 凍った王の言葉(15)

### 眠い × 氷
- **ID**: boss02_player_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶ける氷が玉座の下で水たまりになる。王の靴が濡れた。それだけだ。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 影

### 小さな × 影
- **ID**: boss02_player_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな影が王に向かう。王の巨大な影に飲み込まれた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 影
- **ID**: boss02_player_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような心地よい影が王を覆う。王の怒りがわずかに和らぐ。だが支配欲は消えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 影
- **ID**: boss02_player_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が王の影と混じる。王自身の影が王を灼き始めた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 影
- **ID**: boss02_player_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 固まった影が王の足を縫いとめる。立てない。座っているだけなら問題ないが、威厳が違う。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 影
- **ID**: boss02_player_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 影の刃が玉座の肘掛けを切り落とす。王の手が宙に浮いた。命令の手に支えがない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 影
- **ID**: boss02_player_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: めくれ上がった影が王の前を漂う。平面にすら戻れない影を、王は見下ろしもしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 影
- **ID**: boss02_player_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 王より大きな影が立ち上がる。影の巨人が玉座を掴み、王ごと持ち上げた。王の足が地面を離れる。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 影
- **ID**: boss02_player_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍りついた影が王の足元で広がる。黒い霜が玉座の脚を這い上がり、王の衣の裾を凍らせた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 影
- **ID**: boss02_player_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が王に重なる。王の姿が薄くなる。存在ごと透けてきた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 影
- **ID**: boss02_player_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 触れたものを影にする呪いの影が王冠に触れる。黒金の冠が影に変わり、頭から滑り落ちた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 影
- **ID**: boss02_player_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように縮んだ影が王の足元にうずくまる。王は気づかない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 歌

### 小さな × 歌
- **ID**: boss02_player_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: どこからか鼻歌が聞こえる。玉座の間に似つかわしくない音。王が耳を澄ませたが、すぐ忘れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 歌
- **ID**: boss02_player_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が玉座の間に響く。王の拳が緩んだ。一瞬だけ子供の顔をした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 歌
- **ID**: boss02_player_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が響き渡る。王に立ち向かう者の歌。黒い壁が歌声に軋んだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 歌
- **ID**: boss02_player_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が王の命令をかき消す。「黙れ」と命じても歌は止まらない。命令が通じないものがある。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 歌
- **ID**: boss02_player_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声の歌が玉座の間を引き裂く。王の鼓膜が震え、命令の声が出せなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 歌
- **ID**: boss02_player_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途切れ途切れの旋律が玉座の間に漂う。不快だが、王の支配には何の影響もない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 歌
- **ID**: boss02_player_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる合唱が王の玉座を揺らす。民の歌だ。王ひとりでは止められない。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 民の歌声の残響(10)

### 凍てついた × 歌
- **ID**: boss02_player_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 聴いた者の動きを止める歌。王が彫像のように固まる。命令の手が下ろせない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 歌
- **ID**: boss02_player_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 澄んだ旋律が闇を払う。一瞬だけ、玉座の間に光が差した。王が目を逸らした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 歌
- **ID**: boss02_player_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 頭から離れない歌が王に取り憑く。王が自分の命令を忘れ、歌の節を口ずさんでいる。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 歌
- **ID**: boss02_player_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 抗えない子守唄。王のまぶたが重くなる。玉座で居眠りする王に、命令はできない。
- **playerDamage**: 0
- **enemyDamage**: 3

---

## 沈黙

### 小さな × 沈黙
- **ID**: boss02_player_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 一瞬だけ静寂が訪れる。王の命令の余韻が消え、空気が澄んだ。すぐに黒い声が戻る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 沈黙
- **ID**: boss02_player_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 安らぎの沈黙が王を包む。命令する必要のない時間。王の拳がわずかに緩んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 沈黙
- **ID**: boss02_player_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りの沈黙が玉座の間を焦がす。王より激しい怒りが音もなく王を圧倒する。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 沈黙
- **ID**: boss02_player_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 音の墓場が玉座の間を包む。王の命令が吸い込まれ、消える。声が届かない。
- **playerDamage**: 0
- **enemyDamage**: 3

### 鋭い × 沈黙
- **ID**: boss02_player_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 言葉より痛い沈黙が王を射抜く。支配の言葉を操る者にとって、沈黙は最大の侮辱だ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 沈黙
- **ID**: boss02_player_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂のはずなのにノイズが混じる。中途半端な沈黙は王を苛立たせすらしない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 沈黙
- **ID**: boss02_player_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が王の声を押し潰す。命令が、喉から出る前に死んでいく。支配の王が支配されている。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 沈黙の王冠(20)

### 凍てついた × 沈黙
- **ID**: boss02_player_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍りついた静寂が時を止める。王が命令の手を上げたまま固まった。石像のようだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 沈黙
- **ID**: boss02_player_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 澄んだ沈黙が闇を払う。玉座の間が一瞬だけ静謐に包まれ、王の空虚さが露わになった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 沈黙
- **ID**: boss02_player_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う呪いの沈黙が王を飲む。口は動くが音が出ない。命令の王が、命令できない。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 沈黙
- **ID**: boss02_player_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさが漂う。王のまぶたが半分閉じた。命令が途切れがちになる。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 騎士

### 小さな × 騎士
- **ID**: boss02_player_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が大きすぎる兜で王に挑む。「お前なんか王じゃない！」王の眉が動いた。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 騎士
- **ID**: boss02_player_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 騎士が剣を収め、王に手を差し出す。「共に行きましょう」王は手を取らない。だが払いもしなかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 騎士
- **ID**: boss02_player_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 炎に包まれた騎士が王に斬りかかる。忠誠ではなく反逆の剣。燃える刃が王の衣を裂いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 騎士
- **ID**: boss02_player_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が玉座の前に立つ。壁のように動かない。王の命令を聞く気がない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 騎士
- **ID**: boss02_player_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が王の冠を斬り飛ばす。無駄のない一閃。冠が床を転がる間に二の太刀が迫る。
- **playerDamage**: 0
- **enemyDamage**: 5

### 壊れた × 騎士
- **ID**: boss02_player_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 折れた剣で王に挑む騎士。鎧はへこみ、盾は砕けている。それでも立ち向かう。王が初めて相手を見た。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 騎士（初期値）
- **ID**: boss02_player_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の重装騎士が大剣を振り上げる。王を守る者はいない。玉座が真っ二つに割れた。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 砕けた玉座の黒曜石(15)

### 凍てついた × 騎士
- **ID**: boss02_player_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 霜をまとった騎士が王に斬りかかる。凍った刃が王の腕を切り、傷口が凍りつく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 騎士
- **ID**: boss02_player_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 影の薄い騎士が王の死角から剣を振る。気づかれないまま、王の衣を切り裂いた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 騎士
- **ID**: boss02_player_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士が王に斬りかかる。呪いが王に伝染し、王の影が王自身に刃を向けた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 騎士
- **ID**: boss02_player_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士がふらふらと剣を振る。寝ぼけて王冠を叩いた。王が唸る。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 魔女

### 小さな × 魔女
- **ID**: boss02_player_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 見習いの魔女が王に呪文を唱える。大きな帽子の下から小さな稲妻。王の指先がびりっとした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 魔女
- **ID**: boss02_player_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草の魔女が王に話しかける。「お茶でもいかが？」黒き王は答えない。だが手が止まった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 魔女
- **ID**: boss02_player_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法が玉座を包む。火刑に処された魔女の怨念。王に裁かれた者たちの炎だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 堅い × 魔女
- **ID**: boss02_player_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が杖で玉座を叩く。がつん、がつん。王の命令を完全に無視している。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 魔女
- **ID**: boss02_player_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻の魔女が呪文を一言。王の影を剥がし、足元に縫いとめた。王が動けない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 壊れた × 魔女
- **ID**: boss02_player_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 魔力が暴走する魔女の呪文が王に飛ぶ。どこに当たるかわからない。偶然、王冠に命中した。
- **playerDamage**: 0
- **enemyDamage**: 2

### 屈強な × 魔女
- **ID**: boss02_player_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 杖の代わりに拳で殴る魔女が王の顎を打ち上げる。王冠が天井に飛んだ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 魔女
- **ID**: boss02_player_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法が王を包む。唇が凍りつき、命令が出せない。支配者の最大の武器が封じられた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 透き通った × 魔女
- **ID**: boss02_player_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 存在の薄い魔女が王の耳元で囁く。「本当は怖いのでしょう？」王の手が震えた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 呪われた × 魔女
- **ID**: boss02_player_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪いの魔女が王に手をかざす。王の命令が逆転する。「跪け」と言えば王自身が跪く。
- **playerDamage**: 0
- **enemyDamage**: 5
- **reward**: 反転の呪符(15)

### 眠い × 魔女
- **ID**: boss02_player_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: うとうとする魔女が寝ぼけて呪文を唱える。王の靴が蛙に変わった。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 王

### 小さな × 王
- **ID**: boss02_player_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供の王が黒き王に向かう。「僕のほうが本当の王だ！」子供の声は玉座の間に消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 王
- **ID**: boss02_player_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 慈悲の王が黒き王に語りかける。「赦す」黒き王には理解できない言葉だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 王
- **ID**: boss02_player_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠の王が黒き王と対峙する。王対王。二つの王冠の間で空気が燃えた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 王
- **ID**: boss02_player_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座の王が黒き王を見据える。「退け」二人の王の命令がぶつかり合い、空気が軋む。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 王
- **ID**: boss02_player_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹の目の王が黒き王の弱点を見抜く。「玉座が空だ。お前は何も治めていない。」言葉が刺さった。
- **playerDamage**: 0
- **enemyDamage**: 4
- **reward**: 真実の言葉の欠片(10)

### 壊れた × 王
- **ID**: boss02_player_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 王冠が歪んだ壊れた王が立ち向かう。同じ闇を抱える者同士。黒き王が一瞬、鏡を見た表情をした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 王
- **ID**: boss02_player_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が剣を抜く。黒き王は戦えない。支配の言葉しか持たない王と、剣を持つ王の差だ。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 王
- **ID**: boss02_player_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 北の王が手を挙げる。凍てつく命令が黒き王の玉座を氷漬けにした。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 王
- **ID**: boss02_player_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透けて見える王が黒き王の前に立つ。二人とも存在が希薄だ。空の玉座が二つ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 王
- **ID**: boss02_player_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものを金に変える王が黒き王の手を握る。黒い手が金に変わり、命令の指が動かなくなった。
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 王
- **ID**: boss02_player_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 居眠りする王が黒き王の前で船を漕いでいる。立ち向かうどころではない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 亡霊

### 小さな × 亡霊
- **ID**: boss02_player_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が笑いながら玉座を通り抜ける。冷たい風が王の首筋を撫でた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 亡霊
- **ID**: boss02_player_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が王に微笑む。生前の王妃か。黒き王の手が一瞬止まった。
- **playerDamage**: 0
- **enemyDamage**: 1

### 燃え盛る × 亡霊
- **ID**: boss02_player_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 火に焼かれた亡霊が王に取り憑く。かつて王に焼かれた者の怨念。衣の内側から炎が噴いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 亡霊
- **ID**: boss02_player_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 何百年もそこに立つ霊が玉座の前を動かない。王がすり抜けられない。通せんぼだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 亡霊
- **ID**: boss02_player_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 罪を見透かす霊が王を見つめる。「何人殺した？」王が目を逸らした。初めて見た弱さだ。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 亡霊
- **ID**: boss02_player_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 記憶を失った霊が玉座の間をさまよう。自分が誰の亡霊か忘れている。王は無視した。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 亡霊
- **ID**: boss02_player_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が王に斬りかかる。死者に命令は通じない。霊剣が王冠を砕いた。
- **playerDamage**: 0
- **enemyDamage**: 5

### 凍てついた × 亡霊
- **ID**: boss02_player_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍傷の冷気をまとった霊が王に触れる。黒い衣に霜が広がり、指が凍りついた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 亡霊
- **ID**: boss02_player_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた霊が王をすり抜ける。涼しい風だけが通った。王は何も感じない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 亡霊
- **ID**: boss02_player_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られた亡霊が王に絡みつく。かつての臣下の霊だ。王の体が重くなり、玉座から立てなくなった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 亡霊
- **ID**: boss02_player_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとする亡霊が玉座の横に漂う。存在感が薄れたり戻ったり。王の気が散った。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 鏡

### 小さな × 鏡
- **ID**: boss02_player_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が王の前に掲げられる。自分の虚ろな目が映っている。王はすぐに目を逸らした。
- **playerDamage**: 0
- **enemyDamage**: 1

### 優しい × 鏡
- **ID**: boss02_player_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が王の姿を映す。少しだけ穏やかに見える。王がかつてそうだった頃の顔だ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 鏡
- **ID**: boss02_player_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡の中が燃えている。王の玉座が炎に包まれた映像。予言か、願望か。王が顔を背けた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 堅い × 鏡
- **ID**: boss02_player_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 割れない鏡が王の前に立ちはだかる。壊せない。避けられない。自分の顔を見続けるしかない。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 鏡
- **ID**: boss02_player_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の破片が王に飛ぶ。一枚ごとに王の真の姿が映っている。空虚な顔が無数に。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 鏡
- **ID**: boss02_player_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が王を映す。何十にも分裂した王。どれが本物かわからない。
- **playerDamage**: 0
- **enemyDamage**: 1

### 屈強な × 鏡
- **ID**: boss02_player_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 巨大な姿見が玉座の間に立つ。王の姿が等身大で映る。鏡の中の王のほうが生き生きしている。
- **playerDamage**: 0
- **enemyDamage**: 2

### 凍てついた × 鏡
- **ID**: boss02_player_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍りついた鏡が王に冬の世界を映す。誰もいない雪原の玉座。王の孤独が結晶化している。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 鏡
- **ID**: boss02_player_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が王の前に立つ。何も映さない。王の存在すら映す価値がないと言わんばかりだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 鏡
- **ID**: boss02_player_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪いの鏡が王を映す。鏡の中の王が動き出し、玉座から降りて歩き始めた。本物の王が叫ぶ。「止めろ！」
- **playerDamage**: 0
- **enemyDamage**: 5

### 眠い × 鏡
- **ID**: boss02_player_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 曇った鏡が王をぼんやり映す。王の寝顔が映っている。まだ起きているのに。
- **playerDamage**: 0
- **enemyDamage**: 1

---

## 人形

### 小さな × 人形
- **ID**: boss02_player_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形が王の前に転がる。誰かが落としたもの。王は踏んだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 人形
- **ID**: boss02_player_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が王の足元に佇む。笑顔が縫い付けてある。王はそれを見ないようにした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 人形
- **ID**: boss02_player_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が王に投げつけられる。呪詛の人形だ。王の衣に火が移った。
- **playerDamage**: 0
- **enemyDamage**: 3

### 堅い × 人形
- **ID**: boss02_player_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が王の足元に立つ。おもちゃの兵隊が王に敬礼しない。不服従だ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 鋭い × 人形
- **ID**: boss02_player_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃の操り人形が王の衣を切り刻む。糸は見えないが、人形は王のまわりで踊っている。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 人形
- **ID**: boss02_player_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が王を見上げている。残った目が王を映す。王は目を逸らした。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 人形
- **ID**: boss02_player_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大のゴーレムが王に向かう。丸太のような腕で玉座の肘掛けを砕いた。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 人形
- **ID**: boss02_player_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷の人形が王の手に触れる。溶けながら冷気を放ち、命令の手が凍りついた。
- **playerDamage**: 0
- **enemyDamage**: 2

### 透き通った × 人形
- **ID**: boss02_player_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が王にぶつかり、砕ける。破片が王の衣の内側に入り込んだ。
- **playerDamage**: 0
- **enemyDamage**: 1

### 呪われた × 人形
- **ID**: boss02_player_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪いの人形が王の姿をしている。人形を傷つけると王が痛がる。人形が玉座の間の隅で笑っている。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 人形
- **ID**: boss02_player_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が玉座の足元に転がっている。持つと眠くなる人形だが、王は拾わない。
- **playerDamage**: 0
- **enemyDamage**: 0

---

## 雨

### 小さな × 雨
- **ID**: boss02_player_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が玉座の間に降り込む。屋根に穴が開いている。王の冠が少し濡れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 雨
- **ID**: boss02_player_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が玉座の間に降る。乾いた空気が潤う。王の唇の乾きが癒えたが、心は乾いたままだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 雨
- **ID**: boss02_player_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が玉座の間に降り注ぐ。天井が燃え、瓦礫が王に降りかかった。
- **playerDamage**: 0
- **enemyDamage**: 4

### 堅い × 雨
- **ID**: boss02_player_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が王に叩きつけられる。石のような氷の粒が王冠を叩く。がん、がん、と金属音。
- **playerDamage**: 0
- **enemyDamage**: 2

### 鋭い × 雨
- **ID**: boss02_player_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針の雨が王を刺す。衣を貫き、肌に届く。王が初めて痛みに顔をしかめた。
- **playerDamage**: 0
- **enemyDamage**: 3

### 壊れた × 雨
- **ID**: boss02_player_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: リズムのおかしい雨が降る。上に向かったり止まったり。王は気にも留めない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 雨
- **ID**: boss02_player_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が玉座の間を洗う。床が川になり、玉座が傾いた。王がしがみつく。
- **playerDamage**: 0
- **enemyDamage**: 4

### 凍てついた × 雨
- **ID**: boss02_player_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が王を包む。衣が氷の鎧になり、腕が上がらなくなった。
- **playerDamage**: 0
- **enemyDamage**: 3

### 透き通った × 雨
- **ID**: boss02_player_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 澄んだ雨が王の顔を洗う。黒い化粧が落ち、素顔が見えた。疲れた老人の顔だ。
- **playerDamage**: 0
- **enemyDamage**: 1
- **reward**: 王の素顔の記憶(5)

### 呪われた × 雨
- **ID**: boss02_player_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪いの雨が王に降り注ぐ。浴びた足が床に根を生やす。玉座から永遠に動けない。
- **playerDamage**: 0
- **enemyDamage**: 4

### 眠い × 雨
- **ID**: boss02_player_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: しとしと降る眠い雨。子守唄のような雨音に、王のまぶたが重くなっていく。
- **playerDamage**: 0
- **enemyDamage**: 2

---

# 2. 敵文①outcomes（11件）
# 「[mod*]王が 魔女に 命じている」（ターン1,4...）

### 呪われた（初期値）
- **ID**: boss02_enemy1_cursed
- **conditions**: { s1: 'mod_cursed' }
- **text**: 呪われた王が魔女に命じている。「跪け」黒い声が骨に沁みる。体が勝手に膝を折ろうとする。
- **playerDamage**: 4
- **enemyDamage**: 0

### 小さな
- **ID**: boss02_enemy1_small
- **conditions**: { s1: 'mod_small' }
- **text**: 小さな王が魔女に命じている。子供の声で「跪け」子供の命令など聞く耳持たない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい
- **ID**: boss02_enemy1_gentle
- **conditions**: { s1: 'mod_gentle' }
- **text**: 優しい王が魔女に命じている。「どうか、座ってくれないか」命令というよりお願いだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る
- **ID**: boss02_enemy1_fire
- **conditions**: { s1: 'mod_fire' }
- **text**: 燃え盛る王が魔女に命じている。炎の冠から火の粉が散り、命令が灼熱の圧力を帯びる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い
- **ID**: boss02_enemy1_hard
- **conditions**: { s1: 'mod_hard' }
- **text**: 堅い王が魔女に命じている。石のような声。言葉が壁になって押し寄せる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い
- **ID**: boss02_enemy1_sharp
- **conditions**: { s1: 'mod_sharp' }
- **text**: 鋭い王が魔女に命じている。一語一語が針。言葉の隙間がなく、反論できない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 壊れた
- **ID**: boss02_enemy1_broken
- **conditions**: { s1: 'mod_broken' }
- **text**: 壊れた王が魔女に命じている。王冠は歪み、目は虚ろ。「跪け」声に力がない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な
- **ID**: boss02_enemy1_mighty
- **conditions**: { s1: 'mod_mighty' }
- **text**: 屈強な王が魔女に命じている。戦士王の命令は力そのものだ。空気が震え、足が竦む。
- **playerDamage**: 5
- **enemyDamage**: 0

### 凍てついた
- **ID**: boss02_enemy1_frozen
- **conditions**: { s1: 'mod_frozen' }
- **text**: 凍てついた王が魔女に命じている。白い息が言葉の形をとり、肌に張りつく。寒い。
- **playerDamage**: 3
- **enemyDamage**: 0

### 透き通った
- **ID**: boss02_enemy1_clear
- **conditions**: { s1: 'mod_clear' }
- **text**: 透き通った王が魔女に命じている。声は聞こえるが姿が見えない。どこから命令されているかわからない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い
- **ID**: boss02_enemy1_sleepy
- **conditions**: { s1: 'mod_sleepy' }
- **text**: 眠い王が魔女に命じている。あくびの合間に「跪……け……」半分寝ている。
- **playerDamage**: 0
- **enemyDamage**: 0

---

# 3. 敵文②outcomes（17件）
# 「王の[subj*]が 魔女を 追いかけてくる」（ターン2,5...）

### 影（初期値）
- **ID**: boss02_enemy2_shadow
- **conditions**: { s1: 'subj_shadow' }
- **text**: 王の影が魔女を追いかけてくる。壁を這い、床を渡り、どこまでも追ってくる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 子猫
- **ID**: boss02_enemy2_kitten
- **conditions**: { s1: 'subj_kitten' }
- **text**: 王の子猫が魔女を追いかけてくる。可愛いが、爪が黒い。すれ違いざまに腕を引っかかれた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 蛇
- **ID**: boss02_enemy2_snake
- **conditions**: { s1: 'subj_snake' }
- **text**: 王の蛇が魔女を追いかけてくる。黒い鱗が床を滑る音。足首に巻きつかれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 竜
- **ID**: boss02_enemy2_dragon
- **conditions**: { s1: 'subj_dragon' }
- **text**: 王の竜が魔女を追いかけてくる。黒い翼の小さな竜が炎を吐きながら迫る。
- **playerDamage**: 4
- **enemyDamage**: 0

### 蝶
- **ID**: boss02_enemy2_butterfly
- **conditions**: { s1: 'subj_butterfly' }
- **text**: 王の蝶が魔女を追いかけてくる。黒い鱗粉が目に入る。視界が暗くなった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 風
- **ID**: boss02_enemy2_wind
- **conditions**: { s1: 'subj_wind' }
- **text**: 王の風が魔女を追いかけてくる。どこに逃げても同じ方向から吹きつける。背中を押されて転んだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 炎
- **ID**: boss02_enemy2_flame
- **conditions**: { s1: 'subj_flame' }
- **text**: 王の炎が魔女を追いかけてくる。黒い火が壁を伝い、退路を塞ぐ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 氷
- **ID**: boss02_enemy2_ice
- **conditions**: { s1: 'subj_ice' }
- **text**: 王の氷が魔女を追いかけてくる。足元から霜が広がり、靴が床に凍りついた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 歌
- **ID**: boss02_enemy2_song
- **conditions**: { s1: 'subj_song' }
- **text**: 王の歌が魔女を追いかけてくる。「跪け」の旋律。走っても耳から離れない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 沈黙
- **ID**: boss02_enemy2_silence
- **conditions**: { s1: 'subj_silence' }
- **text**: 王の沈黙が魔女を追いかけてくる。音が消えていく。自分の足音すら聞こえない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 騎士
- **ID**: boss02_enemy2_knight
- **conditions**: { s1: 'subj_knight' }
- **text**: 王の騎士が魔女を追いかけてくる。黒い鎧の騎士。剣を抜いて、容赦なく迫る。
- **playerDamage**: 4
- **enemyDamage**: 0

### 魔女
- **ID**: boss02_enemy2_witch
- **conditions**: { s1: 'subj_witch' }
- **text**: 王の魔女が魔女を追いかけてくる。同業者。だが向こうは王に仕えている。呪文が背中をかすめた。
- **playerDamage**: 3
- **enemyDamage**: 0

### 王
- **ID**: boss02_enemy2_king
- **conditions**: { s1: 'subj_king' }
- **text**: 王の王が魔女を追いかけてくる。王の分身だ。玉座が空いても支配の手は止まらない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 亡霊
- **ID**: boss02_enemy2_ghost
- **conditions**: { s1: 'subj_ghost' }
- **text**: 王の亡霊が魔女を追いかけてくる。かつての臣下の霊。王に命じられ、死してなお従う。
- **playerDamage**: 2
- **enemyDamage**: 0

### 鏡
- **ID**: boss02_enemy2_mirror
- **conditions**: { s1: 'subj_mirror' }
- **text**: 王の鏡が魔女を追いかけてくる。映った自分が怯えている。立ち止まると追いつかれる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 人形
- **ID**: boss02_enemy2_doll
- **conditions**: { s1: 'subj_doll' }
- **text**: 王の人形が魔女を追いかけてくる。ぎこちない歩き方。だが休まない。じわじわ距離が詰まる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 雨
- **ID**: boss02_enemy2_rain
- **conditions**: { s1: 'subj_rain' }
- **text**: 王の雨が魔女を追いかけてくる。黒い雨。濡れた肌がひりひり痛む。
- **playerDamage**: 2
- **enemyDamage**: 0

---

# 4. 敵文③outcomes（77件 + defaultOutcome）
# 「[mod*]沈黙が 魔女を [pred*]」（ターン3,6...）
# を格有効述語(7): 塞いでいる, 守っている, 追いかけてくる, 見つめている, 隠している, 砕く, 逃げていく
# 歪み述語(10): defaultOutcomeで処理

## 凍てついた × 塞いでいる（初期値: mod=凍てついた, pred=見つめている）

### 小さな × 塞いでいる
- **ID**: boss02_enemy3_small_block
- **conditions**: { s1: 'mod_small', s2: 'pred_block' }
- **text**: 小さな沈黙が魔女の前を塞いでいる。ほんの一呼吸の静寂。すぐに通り抜けた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 塞いでいる
- **ID**: boss02_enemy3_gentle_block
- **conditions**: { s1: 'mod_gentle', s2: 'pred_block' }
- **text**: 優しい沈黙が魔女の前を塞いでいる。安らぎの壁。進めないが、痛くない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 塞いでいる
- **ID**: boss02_enemy3_fire_block
- **conditions**: { s1: 'mod_fire', s2: 'pred_block' }
- **text**: 燃え盛る沈黙が魔女の前を塞いでいる。怒りで焦げた無音の壁。触れると灼ける。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い × 塞いでいる
- **ID**: boss02_enemy3_hard_block
- **conditions**: { s1: 'mod_hard', s2: 'pred_block' }
- **text**: 堅い沈黙が魔女の前を塞いでいる。音の墓場が壁になった。押しても叩いても動かない。
- **playerDamage**: 4
- **enemyDamage**: 0

### 鋭い × 塞いでいる
- **ID**: boss02_enemy3_sharp_block
- **conditions**: { s1: 'mod_sharp', s2: 'pred_block' }
- **text**: 鋭い沈黙が魔女の前を塞いでいる。刃のような静寂の壁。近づくと肌が切れる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 壊れた × 塞いでいる
- **ID**: boss02_enemy3_broken_block
- **conditions**: { s1: 'mod_broken', s2: 'pred_block' }
- **text**: 壊れた沈黙が魔女の前を塞いでいる。ノイズ混じりの沈黙。隙間から通り抜けた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 塞いでいる
- **ID**: boss02_enemy3_mighty_block
- **conditions**: { s1: 'mod_mighty', s2: 'pred_block' }
- **text**: 屈強な沈黙が魔女の前を塞いでいる。圧倒的な無音の壁。声が出せず、呪文も唱えられない。
- **playerDamage**: 5
- **enemyDamage**: 0

### 凍てついた × 塞いでいる
- **ID**: boss02_enemy3_frozen_block
- **conditions**: { s1: 'mod_frozen', s2: 'pred_block' }
- **text**: 凍てついた沈黙が魔女の前を塞いでいる。氷の静寂。息が白く凍り、足が動かない。
- **playerDamage**: 4
- **enemyDamage**: 0

### 透き通った × 塞いでいる
- **ID**: boss02_enemy3_clear_block
- **conditions**: { s1: 'mod_clear', s2: 'pred_block' }
- **text**: 透き通った沈黙が魔女の前を塞いでいる。見えない壁。ぶつかって初めてわかる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 呪われた × 塞いでいる
- **ID**: boss02_enemy3_cursed_block
- **conditions**: { s1: 'mod_cursed', s2: 'pred_block' }
- **text**: 呪われた沈黙が魔女の前を塞いでいる。触れた者も黙る。声を取り戻すのに時間がかかる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い × 塞いでいる
- **ID**: boss02_enemy3_sleepy_block
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_block' }
- **text**: 眠い沈黙が魔女の前を塞いでいる。意識が朦朧とする。壁の前で立ったまま寝そうだ。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 守っている

### 小さな × 守っている
- **ID**: boss02_enemy3_small_guard
- **conditions**: { s1: 'mod_small', s2: 'pred_guard' }
- **text**: 小さな沈黙が魔女を守っている。ほんの一瞬の静けさが盾になる。気休めだ。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 守っている
- **ID**: boss02_enemy3_gentle_guard
- **conditions**: { s1: 'mod_gentle', s2: 'pred_guard' }
- **text**: 優しい沈黙が魔女を守っている。安らぎの繭に包まれ、王の声が届かない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 守っている
- **ID**: boss02_enemy3_fire_guard
- **conditions**: { s1: 'mod_fire', s2: 'pred_guard' }
- **text**: 燃え盛る沈黙が魔女を守っている。怒りの沈黙が壁になる。王の命令を焼き尽くしている。
- **playerDamage**: 0
- **enemyDamage**: 0

### 堅い × 守っている
- **ID**: boss02_enemy3_hard_guard
- **conditions**: { s1: 'mod_hard', s2: 'pred_guard' }
- **text**: 堅い沈黙が魔女を守っている。音の墓場が鎧になった。何も通さない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 鋭い × 守っている
- **ID**: boss02_enemy3_sharp_guard
- **conditions**: { s1: 'mod_sharp', s2: 'pred_guard' }
- **text**: 鋭い沈黙が魔女を守っている。近づく音を斬りつける沈黙。王の声が裂けて散る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 壊れた × 守っている
- **ID**: boss02_enemy3_broken_guard
- **conditions**: { s1: 'mod_broken', s2: 'pred_guard' }
- **text**: 壊れた沈黙が魔女を守っている。ノイズ混じりで隙だらけ。王の声が漏れてくる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 屈強な × 守っている
- **ID**: boss02_enemy3_mighty_guard
- **conditions**: { s1: 'mod_mighty', s2: 'pred_guard' }
- **text**: 屈強な沈黙が魔女を守っている。圧倒的な無音が要塞になった。王の命令が跳ね返される。
- **playerDamage**: 0
- **enemyDamage**: 0

### 凍てついた × 守っている
- **ID**: boss02_enemy3_frozen_guard
- **conditions**: { s1: 'mod_frozen', s2: 'pred_guard' }
- **text**: 凍てついた沈黙が魔女を守っている。氷の沈黙が包む。寒いが、王の手は届かない。
- **playerDamage**: 1
- **enemyDamage**: 0

### 透き通った × 守っている
- **ID**: boss02_enemy3_clear_guard
- **conditions**: { s1: 'mod_clear', s2: 'pred_guard' }
- **text**: 透き通った沈黙が魔女を守っている。透明な盾。王は何を相手にしているかわからない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 守っている
- **ID**: boss02_enemy3_cursed_guard
- **conditions**: { s1: 'mod_cursed', s2: 'pred_guard' }
- **text**: 呪われた沈黙が魔女を守っている。守られた者の声も奪う。安全だが、呪文が唱えられない。
- **playerDamage**: 2
- **enemyDamage**: 0

### 眠い × 守っている
- **ID**: boss02_enemy3_sleepy_guard
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_guard' }
- **text**: 眠い沈黙が魔女を守っている。眠気に包まれ、王の声が遠くなる。楽だが、うとうとする。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 追いかけてくる

### 小さな × 追いかけてくる
- **ID**: boss02_enemy3_small_chase
- **conditions**: { s1: 'mod_small', s2: 'pred_chase' }
- **text**: 小さな沈黙が魔女を追いかけてくる。耳元でふと静かになる瞬間。すぐに音が戻る。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 追いかけてくる
- **ID**: boss02_enemy3_gentle_chase
- **conditions**: { s1: 'mod_gentle', s2: 'pred_chase' }
- **text**: 優しい沈黙が魔女を追いかけてくる。安らぎの静けさが足元を包む。怖くはないが、足が遅くなる。
- **playerDamage**: 1
- **enemyDamage**: 0

### 燃え盛る × 追いかけてくる
- **ID**: boss02_enemy3_fire_chase
- **conditions**: { s1: 'mod_fire', s2: 'pred_chase' }
- **text**: 燃え盛る沈黙が魔女を追いかけてくる。音もなく焦げる空気。逃げても熱が追ってくる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 堅い × 追いかけてくる
- **ID**: boss02_enemy3_hard_chase
- **conditions**: { s1: 'mod_hard', s2: 'pred_chase' }
- **text**: 堅い沈黙が魔女を追いかけてくる。重い無音が壁のように迫る。走っても距離が縮まない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い × 追いかけてくる
- **ID**: boss02_enemy3_sharp_chase
- **conditions**: { s1: 'mod_sharp', s2: 'pred_chase' }
- **text**: 鋭い沈黙が魔女を追いかけてくる。通り過ぎた跡の空気が切れている。頬に一筋の傷。
- **playerDamage**: 4
- **enemyDamage**: 0

### 壊れた × 追いかけてくる
- **ID**: boss02_enemy3_broken_chase
- **conditions**: { s1: 'mod_broken', s2: 'pred_chase' }
- **text**: 壊れた沈黙が魔女を追いかけてくる。途切れ途切れ。追いつかれる前に崩れた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 追いかけてくる
- **ID**: boss02_enemy3_mighty_chase
- **conditions**: { s1: 'mod_mighty', s2: 'pred_chase' }
- **text**: 屈強な沈黙が魔女を追いかけてくる。圧倒的な無音が背中に迫る。足音すら消えた。
- **playerDamage**: 5
- **enemyDamage**: 0

### 凍てついた × 追いかけてくる
- **ID**: boss02_enemy3_frozen_chase
- **conditions**: { s1: 'mod_frozen', s2: 'pred_chase' }
- **text**: 凍てついた沈黙が魔女を追いかけてくる。通り過ぎた場所が凍りつく。足が遅くなる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 透き通った × 追いかけてくる
- **ID**: boss02_enemy3_clear_chase
- **conditions**: { s1: 'mod_clear', s2: 'pred_chase' }
- **text**: 透き通った沈黙が魔女を追いかけてくる。気配がない。振り返っても何もない。だが確かに近い。
- **playerDamage**: 2
- **enemyDamage**: 0

### 呪われた × 追いかけてくる
- **ID**: boss02_enemy3_cursed_chase
- **conditions**: { s1: 'mod_cursed', s2: 'pred_chase' }
- **text**: 呪われた沈黙が魔女を追いかけてくる。追いつかれた場所の音が永遠に消える。声が奪われた。
- **playerDamage**: 5
- **enemyDamage**: 0

### 眠い × 追いかけてくる
- **ID**: boss02_enemy3_sleepy_chase
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_chase' }
- **text**: 眠い沈黙が魔女を追いかけてくる。ゆっくりだが止まらない。眠気が背中から忍び寄る。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 見つめている

### 小さな × 見つめている
- **ID**: boss02_enemy3_small_gaze
- **conditions**: { s1: 'mod_small', s2: 'pred_gaze' }
- **text**: 小さな沈黙が魔女を見つめている。ふと気配を感じるが、振り返っても何もない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 見つめている
- **ID**: boss02_enemy3_gentle_gaze
- **conditions**: { s1: 'mod_gentle', s2: 'pred_gaze' }
- **text**: 優しい沈黙が魔女を見つめている。穏やかな視線。見守られている安心感がある。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 見つめている
- **ID**: boss02_enemy3_fire_gaze
- **conditions**: { s1: 'mod_fire', s2: 'pred_gaze' }
- **text**: 燃え盛る沈黙が魔女を見つめている。無音の怒りが肌を焦がす。視線自体が熱い。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 見つめている
- **ID**: boss02_enemy3_hard_gaze
- **conditions**: { s1: 'mod_hard', s2: 'pred_gaze' }
- **text**: 堅い沈黙が魔女を見つめている。動けない。石化したように足が止まる。
- **playerDamage**: 3
- **enemyDamage**: 0

### 鋭い × 見つめている
- **ID**: boss02_enemy3_sharp_gaze
- **conditions**: { s1: 'mod_sharp', s2: 'pred_gaze' }
- **text**: 鋭い沈黙が魔女を見つめている。言葉より痛い視線。心の奥を射抜かれた。
- **playerDamage**: 4
- **enemyDamage**: 0

### 壊れた × 見つめている
- **ID**: boss02_enemy3_broken_gaze
- **conditions**: { s1: 'mod_broken', s2: 'pred_gaze' }
- **text**: 壊れた沈黙が魔女を見つめている。視線が定まらない。何を見ているのかわからない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 見つめている
- **ID**: boss02_enemy3_mighty_gaze
- **conditions**: { s1: 'mod_mighty', s2: 'pred_gaze' }
- **text**: 屈強な沈黙が魔女を見つめている。圧倒的な無音の視線。体が勝手に跪きかける。
- **playerDamage**: 4
- **enemyDamage**: 0

### 凍てついた × 見つめている（初期値）
- **ID**: boss02_enemy3_frozen_gaze
- **conditions**: { s1: 'mod_frozen', s2: 'pred_gaze' }
- **text**: 凍てついた沈黙が魔女を見つめている。凍りついた視線。動けない。息すら白く止まる。
- **playerDamage**: 4
- **enemyDamage**: 0

### 透き通った × 見つめている
- **ID**: boss02_enemy3_clear_gaze
- **conditions**: { s1: 'mod_clear', s2: 'pred_gaze' }
- **text**: 透き通った沈黙が魔女を見つめている。嘘を吹き払う視線。自分の弱さが丸見えだ。
- **playerDamage**: 2
- **enemyDamage**: 0

### 呪われた × 見つめている
- **ID**: boss02_enemy3_cursed_gaze
- **conditions**: { s1: 'mod_cursed', s2: 'pred_gaze' }
- **text**: 呪われた沈黙が魔女を見つめている。目が合った者も黙る。口を開こうとしても声が出ない。
- **playerDamage**: 4
- **enemyDamage**: 0

### 眠い × 見つめている
- **ID**: boss02_enemy3_sleepy_gaze
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_gaze' }
- **text**: 眠い沈黙が魔女を見つめている。まどろみの視線。目がとろんとしてくる。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 隠している

### 小さな × 隠している
- **ID**: boss02_enemy3_small_hide
- **conditions**: { s1: 'mod_small', s2: 'pred_hide' }
- **text**: 小さな沈黙が魔女を隠している。ほんの一瞬だけ見えなくなる。すぐに見つかった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 隠している
- **ID**: boss02_enemy3_gentle_hide
- **conditions**: { s1: 'mod_gentle', s2: 'pred_hide' }
- **text**: 優しい沈黙が魔女を隠している。安らぎの中に姿が溶ける。王の目から消えた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 隠している
- **ID**: boss02_enemy3_fire_hide
- **conditions**: { s1: 'mod_fire', s2: 'pred_hide' }
- **text**: 燃え盛る沈黙が魔女を隠している。怒りの静寂に包まれ姿は消えるが、肌がじりじり焼ける。
- **playerDamage**: 3
- **enemyDamage**: 0

### 堅い × 隠している
- **ID**: boss02_enemy3_hard_hide
- **conditions**: { s1: 'mod_hard', s2: 'pred_hide' }
- **text**: 堅い沈黙が魔女を隠している。音の墓場の中に完全に消えた。王には見つけられない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 鋭い × 隠している
- **ID**: boss02_enemy3_sharp_hide
- **conditions**: { s1: 'mod_sharp', s2: 'pred_hide' }
- **text**: 鋭い沈黙が魔女を隠している。刃の壁の中に隠れた。安全だが、出る時に切れる。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 隠している
- **ID**: boss02_enemy3_broken_hide
- **conditions**: { s1: 'mod_broken', s2: 'pred_hide' }
- **text**: 壊れた沈黙が魔女を隠している。ノイズ混じりで隙間だらけ。王の目がちらちら覗く。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 隠している
- **ID**: boss02_enemy3_mighty_hide
- **conditions**: { s1: 'mod_mighty', s2: 'pred_hide' }
- **text**: 屈強な沈黙が魔女を隠している。圧倒的な無音の繭。王の命令すら届かない安全地帯。
- **playerDamage**: 0
- **enemyDamage**: 0

### 凍てついた × 隠している
- **ID**: boss02_enemy3_frozen_hide
- **conditions**: { s1: 'mod_frozen', s2: 'pred_hide' }
- **text**: 凍てついた沈黙が魔女を隠している。氷の繭に包まれ見えない。だが凍える。
- **playerDamage**: 2
- **enemyDamage**: 0

### 透き通った × 隠している
- **ID**: boss02_enemy3_clear_hide
- **conditions**: { s1: 'mod_clear', s2: 'pred_hide' }
- **text**: 透き通った沈黙が魔女を隠している。空気に溶け込む透明な隠れ蓑。完璧に見えない。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 隠している
- **ID**: boss02_enemy3_cursed_hide
- **conditions**: { s1: 'mod_cursed', s2: 'pred_hide' }
- **text**: 呪われた沈黙が魔女を隠している。隠された者の存在自体が薄くなる。自分が誰か忘れそうだ。
- **playerDamage**: 3
- **enemyDamage**: 0

### 眠い × 隠している
- **ID**: boss02_enemy3_sleepy_hide
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_hide' }
- **text**: 眠い沈黙が魔女を隠している。まどろみの中に姿が消える。心地よいが、寝たら起きられるか。
- **playerDamage**: 1
- **enemyDamage**: 0

---

## 砕く

### 小さな × 砕く
- **ID**: boss02_enemy3_small_crush
- **conditions**: { s1: 'mod_small', s2: 'pred_crush' }
- **text**: 小さな沈黙が魔女を砕く。ふと途切れた音。指先がわずかに痺れた。
- **playerDamage**: 1
- **enemyDamage**: 0

### 優しい × 砕く
- **ID**: boss02_enemy3_gentle_crush
- **conditions**: { s1: 'mod_gentle', s2: 'pred_crush' }
- **text**: 優しい沈黙が魔女を砕く。安らぎの重みで膝が折れる。休みたくなる。戦意が削がれた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 燃え盛る × 砕く
- **ID**: boss02_enemy3_fire_crush
- **conditions**: { s1: 'mod_fire', s2: 'pred_crush' }
- **text**: 燃え盛る沈黙が魔女を砕く。無音の爆発。音がないのに体が吹き飛ばされた。
- **playerDamage**: 5
- **enemyDamage**: 0

### 堅い × 砕く
- **ID**: boss02_enemy3_hard_crush
- **conditions**: { s1: 'mod_hard', s2: 'pred_crush' }
- **text**: 堅い沈黙が魔女を砕く。万力のような無音が体を締め上げる。骨が軋む。
- **playerDamage**: 5
- **enemyDamage**: 0

### 鋭い × 砕く
- **ID**: boss02_enemy3_sharp_crush
- **conditions**: { s1: 'mod_sharp', s2: 'pred_crush' }
- **text**: 鋭い沈黙が魔女を砕く。無音の刃が肩を切り裂いた。血が出ているのに音がしない。
- **playerDamage**: 5
- **enemyDamage**: 0

### 壊れた × 砕く
- **ID**: boss02_enemy3_broken_crush
- **conditions**: { s1: 'mod_broken', s2: 'pred_crush' }
- **text**: 壊れた沈黙が魔女を砕く。砕く力も壊れている。体が揺れたが、倒れはしなかった。
- **playerDamage**: 1
- **enemyDamage**: 0

### 屈強な × 砕く
- **ID**: boss02_enemy3_mighty_crush
- **conditions**: { s1: 'mod_mighty', s2: 'pred_crush' }
- **text**: 屈強な沈黙が魔女を砕く。圧倒的な無音が骨を軋ませ、地面に叩きつけた。
- **playerDamage**: 5
- **enemyDamage**: 0

### 凍てついた × 砕く
- **ID**: boss02_enemy3_frozen_crush
- **conditions**: { s1: 'mod_frozen', s2: 'pred_crush' }
- **text**: 凍てついた沈黙が魔女を砕く。凍りついた体が脆い。沈黙の圧力で氷が割れるように軋んだ。
- **playerDamage**: 5
- **enemyDamage**: 0

### 透き通った × 砕く
- **ID**: boss02_enemy3_clear_crush
- **conditions**: { s1: 'mod_clear', s2: 'pred_crush' }
- **text**: 透き通った沈黙が魔女を砕く。見えない力で体が押しつぶされる。何に砕かれたかもわからない。
- **playerDamage**: 3
- **enemyDamage**: 0

### 呪われた × 砕く
- **ID**: boss02_enemy3_cursed_crush
- **conditions**: { s1: 'mod_cursed', s2: 'pred_crush' }
- **text**: 呪われた沈黙が魔女を砕く。声を奪われたまま砕かれる。悲鳴すら上げられない。
- **playerDamage**: 5
- **enemyDamage**: 0

### 眠い × 砕く
- **ID**: boss02_enemy3_sleepy_crush
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_crush' }
- **text**: 眠い沈黙が魔女を砕く。夢の中で砕かれているような感覚。痛みがぼんやりしている。
- **playerDamage**: 2
- **enemyDamage**: 0

---

## 逃げていく

### 小さな × 逃げていく
- **ID**: boss02_enemy3_small_flee
- **conditions**: { s1: 'mod_small', s2: 'pred_flee' }
- **text**: 小さな沈黙が魔女を逃げていく。一瞬の静けさが去り、周囲の音が戻ってきた。
- **playerDamage**: 0
- **enemyDamage**: 0

### 優しい × 逃げていく
- **ID**: boss02_enemy3_gentle_flee
- **conditions**: { s1: 'mod_gentle', s2: 'pred_flee' }
- **text**: 優しい沈黙が魔女を逃げていく。安らぎが遠ざかる。心細くなった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 燃え盛る × 逃げていく
- **ID**: boss02_enemy3_fire_flee
- **conditions**: { s1: 'mod_fire', s2: 'pred_flee' }
- **text**: 燃え盛る沈黙が魔女を逃げていく。怒りの残り火が通り過ぎ、肌が少し焦げた。
- **playerDamage**: 2
- **enemyDamage**: 0

### 堅い × 逃げていく
- **ID**: boss02_enemy3_hard_flee
- **conditions**: { s1: 'mod_hard', s2: 'pred_flee' }
- **text**: 堅い沈黙が魔女を逃げていく。重い無音が去り、周囲の音が戻る。耳が痛い。
- **playerDamage**: 1
- **enemyDamage**: 0

### 鋭い × 逃げていく
- **ID**: boss02_enemy3_sharp_flee
- **conditions**: { s1: 'mod_sharp', s2: 'pred_flee' }
- **text**: 鋭い沈黙が魔女を逃げていく。通り過ぎた跡の空気が切れている。頬に薄い傷。
- **playerDamage**: 2
- **enemyDamage**: 0

### 壊れた × 逃げていく
- **ID**: boss02_enemy3_broken_flee
- **conditions**: { s1: 'mod_broken', s2: 'pred_flee' }
- **text**: 壊れた沈黙が魔女を逃げていく。ノイズを撒き散らしながら去った。うるさい沈黙だった。
- **playerDamage**: 0
- **enemyDamage**: 0

### 屈強な × 逃げていく
- **ID**: boss02_enemy3_mighty_flee
- **conditions**: { s1: 'mod_mighty', s2: 'pred_flee' }
- **text**: 屈強な沈黙が魔女を逃げていく。去った跡に空気の穴ができた。耳がキーンと鳴る。
- **playerDamage**: 2
- **enemyDamage**: 0

### 凍てついた × 逃げていく
- **ID**: boss02_enemy3_frozen_flee
- **conditions**: { s1: 'mod_frozen', s2: 'pred_flee' }
- **text**: 凍てついた沈黙が魔女を逃げていく。去った跡に霜が残る。足元が滑った。
- **playerDamage**: 1
- **enemyDamage**: 0

### 透き通った × 逃げていく
- **ID**: boss02_enemy3_clear_flee
- **conditions**: { s1: 'mod_clear', s2: 'pred_flee' }
- **text**: 透き通った沈黙が魔女を逃げていく。視界が一瞬澄み、すぐに元の闇に戻った。
- **playerDamage**: 0
- **enemyDamage**: 0

### 呪われた × 逃げていく
- **ID**: boss02_enemy3_cursed_flee
- **conditions**: { s1: 'mod_cursed', s2: 'pred_flee' }
- **text**: 呪われた沈黙が魔女を逃げていく。声は戻ったが、しばらくかすれたままだ。
- **playerDamage**: 1
- **enemyDamage**: 0

### 眠い × 逃げていく
- **ID**: boss02_enemy3_sleepy_flee
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_flee' }
- **text**: 眠い沈黙が魔女を逃げていく。眠気が去り、頭がすっきりした。
- **playerDamage**: 0
- **enemyDamage**: 0
