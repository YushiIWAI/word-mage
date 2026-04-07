# ノードP12「石畳の庭」Outcome一覧

- **文構成**: [mod][subj]が 庭を 見つめている
- **可変スロット**: mod + subj
- **固定**: 目的語「庭」(を格) + 述語「見つめている」
- **ノードの文脈**: 手入れの途絶えた庭。石畳の隙間から雑草が伸び、かつての美しさの痕跡だけが残る。何かが庭を見つめている。視線の主は敵か、旅の仲間か
- **格歪みなし**（「見つめている」はを格他動詞、歪み対象外）
- **プール**: 序盤 | AP: 3
- **全187パターン**: 11 mod × 17 subj

---

## 子猫

### 小さな × 子猫
- **ID**: p12_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 小さな子猫が庭を見つめている。石畳の割れ目に生えた花に、鈴のような目を向けている。こちらには気づいていない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 子猫
- **ID**: p12_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が庭を見つめている。足元に擦り寄ってから、庭の奥を振り返る。何か見せたいものがあるらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: p12_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 燃え盛る子猫が庭を見つめている。炎をまとった猫が石畳の上に座っている。足元の雑草が焦げて煙を上げている。本猫は涼しい顔だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 子猫
- **ID**: p12_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 堅い子猫が庭を見つめている。陶器の招き猫が石畳の端に鎮座している。目だけがゆっくりと庭を追う。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 子猫
- **ID**: p12_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 鋭い子猫が庭を見つめている。硝子の破片のような爪を石畳に立てて、獲物を待つ目をしている。庭に入った虫が消えた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 子猫
- **ID**: p12_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: 壊れた子猫が庭を見つめている。ぬいぐるみだ。雑草に半分埋もれて、硝子の目だけが庭を映している。綿が石畳に散っている。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '庭のぬいぐるみ', description: '雑草の匂いが染みた綿の猫。片目が取れている', sellPrice: 5 }

### 屈強な × 子猫
- **ID**: p12_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 屈強な子猫が庭を見つめている。子猫サイズの虎だ。石畳を低く唸りながら睨んでいる。この庭の番人を自称しているらしい。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '庭番の髭', description: '虎のような子猫の髭。庭の匂いがする', sellPrice: 7 }

### 凍てついた × 子猫
- **ID**: p12_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 凍てついた子猫が庭を見つめている。氷の彫刻が石畳の隅に置かれている。中でまだ瞬きをしている。庭の草に霜が降りた。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '霜の結晶', description: '庭草についた霜。猫の形に見える', sellPrice: 7 }

### 透き通った × 子猫
- **ID**: p12_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 透き通った子猫が庭を見つめている。硝子の猫。心臓が透けて見える。石畳の模様が猫の体を通って揺らいでいる。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '硝子猫の涙', description: '透明な一滴。石畳の上で虹色に光る', sellPrice: 12 }

### 呪われた × 子猫
- **ID**: p12_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が庭を見つめている。追い払おうとしても、気づくと足元にいる。庭から出ても、庭に戻される。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 子猫
- **ID**: p12_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が庭を見つめている。見つめているというより、半目で石畳の上に溶けている。あくびが伝染した。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: p12_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 小さな蛇が庭を見つめている。石畳の隙間から舌をちろちろ出している。指ほどの細さ。庭の温度を測っているようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 蛇
- **ID**: p12_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 優しい蛇が庭を見つめている。庭の害虫を静かに飲み込んでいる。こちらに巻きつくと温かい。庭の守り手らしい。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '蛇の抜け殻', description: '庭の隅に残された薄い皮。光に透ける', sellPrice: 8 }

### 燃え盛る × 蛇
- **ID**: p12_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 燃え盛る蛇が庭を見つめている。炎の軌跡を描きながら石畳を這う。通った跡の雑草が灰になっている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 蛇
- **ID**: p12_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 堅い蛇が庭を見つめている。鉄の鱗がこすれて石畳に火花が散る。庭を一周する溝が刻まれている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 蛇
- **ID**: p12_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 鋭い蛇が庭を見つめている。猛毒の牙。石畳に映る影すら鋭い。動かない。こちらが先に動くのを待っている。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 蛇
- **ID**: p12_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 壊れた蛇が庭を見つめている。脱皮の途中で力尽きている。古い皮が石畳にへばりついている。庭の片隅で動けずにいる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 蛇
- **ID**: p12_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 屈強な蛇が庭を見つめている。胴回りが人の腰ほどある。石畳がとぐろの下で軋んでいる。庭全体が蛇の領地だ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 蛇
- **ID**: p12_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 凍てついた蛇が庭を見つめている。氷の中で螺旋を描いたまま固まっている。鱗に霜が降りて、石畳まで白い。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 蛇
- **ID**: p12_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が庭を見つめている。骨格が美しい。体内に石畳の模様が透けて映り、どこが蛇でどこが庭かわからない。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '蛇の透き通った鱗', description: '一枚だけ落ちていた。レンズのように景色を歪める', sellPrice: 10 }

### 呪われた × 蛇
- **ID**: p12_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が庭を見つめている。脱皮するたびに大きくなる蛇。石畳の隙間から溢れ出して、庭を圧迫し始めている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: p12_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が庭を見つめている。とぐろを巻いて日向ぼっこをしているだけだ。踏まなければ無害。石畳が温かい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: p12_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 小さな竜が庭を見つめている。手のひらサイズ。石畳の上に座って、雑草に小さな火を吐いている。庭の手入れのつもりらしい。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '竜の焼き草', description: '小さな竜が焼いた雑草。ほんのり温かい', sellPrice: 8 }

### 優しい × 竜
- **ID**: p12_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 優しい竜が庭を見つめている。穏やかな老竜だ。翼を畳んで石畳に座り、荒れた庭を静かに眺めている。哀しそうな目をしている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 竜
- **ID**: p12_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 燃え盛る竜が庭を見つめている。全身が業火だ。石畳が赤く焼けて割れていく。雑草など一瞬で灰になった。庭ごと焼き尽くされる。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 竜
- **ID**: p12_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 堅い竜が庭を見つめている。城壁のような鱗。石畳の上に伏せると、竜自身が庭の一部に見える。動く気配がない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 竜
- **ID**: p12_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 鋭い竜が庭を見つめている。金色の目が庭の隅々まで射抜く。爪の一振りで石畳が裂けた。品定めされている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 壊れた × 竜
- **ID**: p12_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 壊れた竜が庭を見つめている。翼は折れ、鱗は剥がれている。荒れた庭と荒れた竜。どちらも手入れを忘れられたものだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '竜の剥がれ鱗', description: '庭の石畳に落ちていた。苔がついている', sellPrice: 10 }

### 屈強な × 竜
- **ID**: p12_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 屈強な竜が庭を見つめている。山のような体。翼を広げると庭が丸ごと影になった。石畳が竜の重みで沈んでいく。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 凍てついた × 竜
- **ID**: p12_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 凍てついた竜が庭を見つめている。白い竜の吐息が吹雪になる。石畳に霜が走り、雑草が氷の彫刻に変わった。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 竜
- **ID**: p12_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 透き通った竜が庭を見つめている。水晶の竜。体を通して庭の景色が歪んで見える。かつての美しい庭が、竜の体に映っている。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '水晶竜の涙', description: '庭の記憶が閉じ込められた透明な滴', sellPrice: 15 }

### 呪われた × 竜
- **ID**: p12_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が庭を見つめている。目に理性がない。かつて守護竜だったらしい。石畳の紋様が竜の加護の名残だ。だが今は庭を壊すだけだ。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 眠い × 竜
- **ID**: p12_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 眠い竜が庭を見つめている。石畳の上で居眠りしている。いびきで雑草が揺れる。見つめているというより、薄目を開けただけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: p12_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 小さな蝶が庭を見つめている。花びらと見間違うほど小さい。石畳の割れ目に咲いた花の上で、羽を閉じている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: p12_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が庭を見つめている。指先に止まって離れない。羽の模様が笑っているように見える。荒れた庭にも花は咲く。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '蝶の鱗粉', description: '指先に残った金色の粉。庭の花の匂いがする', sellPrice: 7 }

### 燃え盛る × 蝶
- **ID**: p12_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 燃え盛る蝶が庭を見つめている。羽が炎でできている。飛んだ跡に火の粉が散り、石畳が焦げていく。庭の雑草が次々と燃える。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 蝶
- **ID**: p12_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 堅い蝶が庭を見つめている。金属の羽が石畳に触れて、澄んだ音を立てる。風が吹いても微動だにしない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 蝶
- **ID**: p12_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 鋭い蝶が庭を見つめている。すれ違いざまに頬が切れた。羽の縁が刃だ。石畳の上に細い血の線が一本引かれた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 蝶
- **ID**: p12_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 壊れた蝶が庭を見つめている。片羽がちぎれて、石畳の上で螺旋を描いている。飛べないまま、庭から目を離さない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 蝶
- **ID**: p12_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 屈強な蝶が庭を見つめている。羽ばたきで石畳の砂が舞う。蝶のくせに風を起こす。庭の落ち葉が一掃された。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 蝶
- **ID**: p12_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 凍てついた蝶が庭を見つめている。霜の結晶が羽の形をしている。石畳の上に降り立つと、足元から氷が広がった。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 蝶
- **ID**: p12_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透き通った蝶が庭を見つめている。羽が透明で、止まると景色に溶ける。石畳の模様だけが蝶の形に揺れている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '透明な羽の欠片', description: '蝶が残した鱗粉。光に翳すと庭が見える', sellPrice: 10 }

### 呪われた × 蝶
- **ID**: p12_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が庭を見つめている。追いかけると石畳の配置が変わる。気づくと庭の入口がわからなくなっている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 蝶
- **ID**: p12_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が庭を見つめている。石畳に咲いた花の上で羽を閉じたまま動かない。起こしても隣の花に移るだけだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: p12_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 小さな風が庭を見つめている。頬を撫でるそよ風。石畳の隙間の草を揺らして、通り過ぎた。それだけのことだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 風
- **ID**: p12_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 優しい風が庭を見つめている。花の匂いを運ぶ温かい風。荒れた庭にも、どこかから種を運んでくる。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '風が運んだ種', description: '庭に根づくかもしれない。小さくて丸い', sellPrice: 6 }

### 燃え盛る × 風
- **ID**: p12_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 燃え盛る風が庭を見つめている。熱風が石畳を焼く。雑草が一瞬で乾き、庭が砂漠のように白くなった。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 風
- **ID**: p12_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 堅い風が庭を見つめている。同じ方向にしか吹かない風。何百年も同じ砂を同じ石畳に叩きつけている。石が削れている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 風
- **ID**: p12_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 鋭い風が庭を見つめている。真空の刃。石畳の角が削れ、雑草が根元から切り落とされた。頬にも細い切り傷。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 風
- **ID**: p12_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 壊れた風が庭を見つめている。方向が定まらない乱気流。石畳の落ち葉が円を描いては散り、また集まる。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 風
- **ID**: p12_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 屈強な風が庭を見つめている。すべてを押し流す突風。石畳が浮き上がり、庭の形が変わった。引き返すことも許されない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 風
- **ID**: p12_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍てついた風が庭を見つめている。吹雪を伴う凍風。石畳に氷が張り、雑草が白い彫刻に変わった。息が凍る。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 風
- **ID**: p12_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 透き通った風が庭を見つめている。空気が澄み渡る。荒れた庭の奥まで見通せる。かつての石畳の美しい配列が見えた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 風
- **ID**: p12_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が庭を見つめている。吹かれると帰り道を忘れる。庭の出口がどこだったか、もうわからない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 風
- **ID**: p12_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 眠い風が庭を見つめている。生温い春風。石畳の上で意識がぼんやりする。気づくと庭の隅で横になっていた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 炎

### 小さな × 炎
- **ID**: p12_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 小さな炎が庭を見つめている。蝋燭ほどの火が石畳の上で揺れている。風が吹けば消える。それでも庭を照らしている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: p12_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 優しい炎が庭を見つめている。暖炉のような火が石畳の中央に灯っている。揺れる光が、荒れた庭を柔らかく包む。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 炎
- **ID**: p12_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 燃え盛る炎が庭を見つめている。制御不能の大火。石畳が焼けて割れ、庭が炉のようだ。雑草も石も等しく燃える。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 炎
- **ID**: p12_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 堅い炎が庭を見つめている。水をかけても消えない。石畳の一角で何年も燃え続けているらしい。雑草が近づかない。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '不滅の灯', description: '石畳の欠片にくっついた小さな炎。消えない', sellPrice: 12 }

### 鋭い × 炎
- **ID**: p12_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が庭を見つめている。触れたものの形を正確に切り取る。石畳の文字だけが焼け残り、それ以外は灰になった。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 炎
- **ID**: p12_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 壊れた炎が庭を見つめている。緑と紫に明滅する炎。温かくない。石畳を照らす光がおかしな色をしている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 炎
- **ID**: p12_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 屈強な炎が庭を見つめている。火柱が天を衝く。石畳が溶けて歪む。庭の形が焼き変わっていく。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 凍てついた × 炎
- **ID**: p12_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 凍てついた炎が庭を見つめている。燃えているのに冷たい。青白い炎が石畳に霜を広げている。触れると凍傷を負う。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 炎
- **ID**: p12_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 透き通った炎が庭を見つめている。ほぼ見えない火。空気の揺らぎだけで存在がわかる。石畳の汚れだけが焼けて消えた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '浄火の灰', description: '透明な炎が庭を清めた痕。白くて軽い', sellPrice: 9 }

### 呪われた × 炎
- **ID**: p12_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が庭を見つめている。燃やしたものの形を覚える火。石畳の模様が炎の中で再現されている。かつての庭の幻だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 炎
- **ID**: p12_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 眠い炎が庭を見つめている。今にも消えそうな熾火。石畳の隅で赤く明滅している。見つめているうちに、こちらも眠くなる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: p12_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷が庭を見つめている。掌に収まる氷の欠片が石畳に転がっている。溶ける前に庭の景色を映して消えた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 氷
- **ID**: p12_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 優しい氷が庭を見つめている。冷たいが痛くない。石畳の熱を引いて、庭に涼しさを運んでいる。花が長持ちしそうだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 氷
- **ID**: p12_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 燃え盛る氷が庭を見つめている。炎を放つ氷。石畳が凍傷と火傷の跡で斑になっている。触れてはいけない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 氷
- **ID**: p12_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 堅い氷が庭を見つめている。万年氷だ。石畳を覆って鋼のように硬い。叩いても刃が欠ける。庭が封じられた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 鋭い × 氷
- **ID**: p12_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 鋭い氷が庭を見つめている。氷柱が石畳の隙間から突き出している。庭を歩けば足を裂かれる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 氷
- **ID**: p12_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: 壊れた氷が庭を見つめている。ひび割れた氷の破片が石畳に散らばっている。踏むたびに砕けて、下から暗い水が滲む。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 氷
- **ID**: p12_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 屈強な氷が庭を見つめている。山のような氷塊が庭を押し潰している。石畳が氷の底に沈んでいる。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 氷
- **ID**: p12_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 凍てついた氷が庭を見つめている。氷の中の氷。近づくだけで手が動かなくなる。石畳の上の空気が結晶化して落ちている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 透き通った × 氷
- **ID**: p12_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透き通った氷が庭を見つめている。完全に透明な氷。あることに気づかず手を突いた。石畳の模様がレンズのように歪んで見える。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '透明な氷の欠片', description: '庭の景色を閉じ込めた氷。なかなか溶けない', sellPrice: 8 }

### 呪われた × 氷
- **ID**: p12_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 呪われた氷が庭を見つめている。溶けない氷が庭に永遠の冬を広げている。石畳の隙間の草が凍り、もう芽は出ない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 氷
- **ID**: p12_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: 眠い氷が庭を見つめている。ゆっくり溶けていく氷。しずくが石畳を叩く音が子守唄のようだ。庭が少しずつ潤っていく。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 影

### 小さな × 影
- **ID**: p12_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が庭を見つめている。石畳に黒い染みが一つ。何の影かわからない。日が傾いても動かない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 影
- **ID**: p12_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 優しい影が庭を見つめている。木陰のような涼しさ。石畳の熱を和らげて、庭に安らぎを与えている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 影
- **ID**: p12_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 燃え盛る影が庭を見つめている。影自体が黒い炎で燃えている。石畳の上を這い、触れた雑草が焦げる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 影
- **ID**: p12_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 堅い影が庭を見つめている。石畳に貼りついて固まった影。剥がそうとしても剥がれない。庭の一部になっている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 影
- **ID**: p12_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 鋭い影が庭を見つめている。輪郭がくっきりしすぎている。影の縁に触れると、石畳にひっかき傷がつく。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 影
- **ID**: p12_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 壊れた影が庭を見つめている。立体的にめくれ上がっている。石畳から浮いて、平面に戻れずにもがいている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 影
- **ID**: p12_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 屈強な影が庭を見つめている。庭全体を覆う巨大な影。見上げても、影の主がいない。影だけが庭を支配している。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 影
- **ID**: p12_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍てついた影が庭を見つめている。石畳に張りついて動けない。本体はとうに去ったのに、影だけが庭に残されている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 影
- **ID**: p12_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 透き通った影が庭を見つめている。半透明の影。石畳の模様が影を通して見える。存在が薄れかけている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 影
- **ID**: p12_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が庭を見つめている。影に触れた雑草が黒く染まり、影になった。石畳の上に影が増え続けている。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '影の欠片', description: '石畳から剥がれた黒い破片。手に貼りつく', sellPrice: 7 }

### 眠い × 影
- **ID**: p12_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 眠い影が庭を見つめている。正午の影。石畳の真下に小さく縮んで動かない。夕方までここにいるつもりらしい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 歌

### 小さな × 歌
- **ID**: p12_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 小さな歌が庭を見つめている。鼻歌が石畳の隙間から聞こえる。誰が歌っているかわからない。旋律だけが庭に漂う。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: p12_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 優しい歌が庭を見つめている。子守唄だ。石畳の上に座って聴いていると、庭の荒れが気にならなくなる。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 歌
- **ID**: p12_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 燃え盛る歌が庭を見つめている。戦の歌。聴くと血が沸く。石畳を踏む足取りが力強くなる。だが庭に敵はいない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 堅い × 歌
- **ID**: p12_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 堅い歌が庭を見つめている。一度始まると止まらない歌。石畳に刻まれた旋律が、庭に響き続けている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 歌
- **ID**: p12_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 鋭い歌が庭を見つめている。金切り声のような高音。石畳にひびが走った。耳を塞いでも骨に響く。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 歌
- **ID**: p12_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 壊れた歌が庭を見つめている。途中で止まる旋律。続きを知る者はいない。石畳の間で、同じ節が繰り返されている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 歌
- **ID**: p12_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 屈強な歌が庭を見つめている。大地を震わせる合唱。石畳が音に合わせて跳ねる。庭の草が揺れ、虫が逃げた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 歌
- **ID**: p12_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が庭を見つめている。聴いた者の足が止まる。石畳の上で動けなくなった。歌が終わるまで待つしかない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 歌
- **ID**: p12_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 透き通った歌が庭を見つめている。純粋な旋律が庭に響く。雑念が消え、荒れた庭の奥に、かつての花壇の跡が見えた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '庭の旋律', description: '耳に残る澄んだ音。庭の記憶を呼び覚ます', sellPrice: 10 }

### 呪われた × 歌
- **ID**: p12_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が庭を見つめている。一度聴くと頭から離れない。石畳を歩きながら、気づくと口ずさんでいる。止められない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 歌
- **ID**: p12_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 眠い歌が庭を見つめている。子守唄。石畳の上で膝を抱えると、意識が遠くなる。庭の草が布団のように柔らかく見えた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: p12_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 小さな沈黙が庭を見つめている。ふと音が途切れた。虫も風も止まり、石畳だけが残った。一瞬の静寂。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 沈黙
- **ID**: p12_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 優しい沈黙が庭を見つめている。言葉がなくても安らぐ静けさ。荒れた庭が、この沈黙の中では美しく見える。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '庭の静寂', description: '持っている間だけ心が凪ぐ。石の匂いがする', sellPrice: 7 }

### 燃え盛る × 沈黙
- **ID**: p12_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 燃え盛る沈黙が庭を見つめている。空気が焦げている。誰も口を開けない。石畳が熱を帯びて、庭が怒りに満ちている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 沈黙
- **ID**: p12_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 堅い沈黙が庭を見つめている。何を叫んでも吸い込まれて消える。石畳に響くはずの足音も、庭に飲まれた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 沈黙
- **ID**: p12_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 鋭い沈黙が庭を見つめている。言葉より痛い無言。石畳の上に立つと、自分の息だけが庭に刺さる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 沈黙
- **ID**: p12_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 壊れた沈黙が庭を見つめている。静寂のはずなのに、石畳の下からノイズが混じる。何かが漏れ出している。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 沈黙
- **ID**: p12_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 屈強な沈黙が庭を見つめている。圧倒的な無音。石畳も雑草も、庭のすべてが沈黙に押し潰されている。声が出ない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: p12_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が庭を見つめている。息も凍る静けさ。時間が止まったように、石畳の上の落ち葉すら揺れない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 沈黙
- **ID**: p12_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 透き通った沈黙が庭を見つめている。泉のように澄んだ静寂。石畳の隅まで見通せる。庭の本来の姿が浮かび上がる。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '静寂の欠片', description: '持っている間だけ、雑音が消える。庭の匂いがする', sellPrice: 10 }

### 呪われた × 沈黙
- **ID**: p12_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が庭を見つめている。声が出ない。口は動くが音にならない。石畳の庭が、声を奪う場所になっている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 沈黙
- **ID**: p12_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠い沈黙が庭を見つめている。午後の図書館のような静けさ。石畳の温もりが心地よく、まぶたが重くなる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 騎士

### 小さな × 騎士
- **ID**: p12_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 小さな騎士が庭を見つめている。子供の騎士だ。大きすぎる兜で前が見えず、石畳に躓いている。それでも庭を守る気らしい。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '小さな兜飾り', description: '騎士が落とした羽飾り。手のひらに収まる', sellPrice: 7 }

### 優しい × 騎士
- **ID**: p12_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が庭を見つめている。剣を鞘に収め、石畳の隙間から草を抜いている。庭の手入れをしてくれているのだ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '騎士の手袋', description: '草の汁と土がついている。丁寧に使い込まれた手袋', sellPrice: 8 }

### 燃え盛る × 騎士
- **ID**: p12_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 燃え盛る騎士が庭を見つめている。鎧ごと炎に包まれている。石畳が焼けて赤い。それでも歩みを止めず、庭を巡回している。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 騎士
- **ID**: p12_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 堅い騎士が庭を見つめている。分厚い鎧。石畳の上で微動だにしない。表情が見えない。庭の門番のようだ。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 騎士
- **ID**: p12_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 鋭い騎士が庭を見つめている。構えに無駄がない。冷たい目で庭の隅まで見張っている。不審者扱いされている。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 騎士
- **ID**: p12_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 壊れた騎士が庭を見つめている。鎧はへこみ、剣は折れている。それでも石畳の上に立ち、荒れた庭を守っている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '折れた剣の柄', description: '騎士が握り続けた柄。手の形に磨り減っている', sellPrice: 8 }

### 屈強な × 騎士
- **ID**: p12_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 屈強な騎士が庭を見つめている。巨体の重装騎士。石畳が軋む。庭を通すかどうか、こちらを値踏みしている。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 騎士
- **ID**: p12_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 凍てついた騎士が庭を見つめている。剣を振り上げた姿勢のまま氷に閉じ込められている。石畳に霜の足跡が残っている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 騎士
- **ID**: p12_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 透き通った騎士が庭を見つめている。影の薄い騎士。石畳の前に立っているのに気づかなかった。庭を静かに見守っていたらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 騎士
- **ID**: p12_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士が庭を見つめている。兜の奥の目が赤く光っている。庭を守っているのか、庭に閉じ込められているのか。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 騎士
- **ID**: p12_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が庭を見つめている。見張り番のはずが、石畳にもたれて舟を漕いでいる。槍が傾いて庭の草に沈んだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: p12_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 小さな魔女が庭を見つめている。少女の魔女だ。大きな帽子で顔が隠れている。石畳の隙間の花を集めている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 魔女
- **ID**: p12_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 優しい魔女が庭を見つめている。薬草を煎じている。荒れた庭に自生した薬草を、怖い顔で丁寧に摘んでいる。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '魔女の薬草束', description: '庭で摘んだ薬草。苦いが効く', sellPrice: 9 }

### 燃え盛る × 魔女
- **ID**: p12_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 燃え盛る魔女が庭を見つめている。炎の魔法で全身を包んでいる。石畳が焼け、庭が赤く染まった。怒りの形相。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 魔女
- **ID**: p12_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 堅い魔女が庭を見つめている。石のように頑固な老魔女。石畳の上に立ちはだかって、一言も発さない。取引を持ちかけるまで動かないだろう。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 魔女
- **ID**: p12_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鋭い魔女が庭を見つめている。鉤鼻に鋭い目。庭の隅まで見通している。嘘をつけば一瞬でわかるだろう。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 魔女
- **ID**: p12_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 壊れた魔女が庭を見つめている。魔力が暴走している。呪文が途切れ途切れに漏れ、石畳の模様が歪んでいく。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 屈強な × 魔女
- **ID**: p12_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 屈強な魔女が庭を見つめている。杖ではなく拳で雑草を引き抜いている。腕が太い。庭の手入れが荒っぽい。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 魔女
- **ID**: p12_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 凍てついた魔女が庭を見つめている。氷の魔法が漏れている。石畳に霜が広がり、庭の花が凍っていく。魔女の表情は動かない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 魔女
- **ID**: p12_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 透き通った魔女が庭を見つめている。老いて存在が希薄だ。向こうの石畳が透けて見える。庭の記憶を辿っているようだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '庭の記憶', description: '魔女が残した薄い光。中にかつての庭が見える', sellPrice: 10 }

### 呪われた × 魔女
- **ID**: p12_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪われた魔女が庭を見つめている。自分の呪いに蝕まれている。体の一部が蔦のように変異して、石畳に根を張っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 魔女
- **ID**: p12_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 眠い魔女が庭を見つめている。石畳の上でうとうとしている。大釜が庭の隅でぐつぐつ煮えている。何の薬かは聞かない方がいい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: p12_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 小さな王が庭を見つめている。子供が王冠をかぶっている。石畳の上に座り込んで、雑草の国を統べている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '雑草の王冠', description: '子供が編んだ草冠。少し歪んでいる', sellPrice: 5 }

### 優しい × 王
- **ID**: p12_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 優しい王が庭を見つめている。衣は質素で手が荒れている。荒れた庭を見て、自ら石畳の草を抜いている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 王
- **ID**: p12_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 燃え盛る王が庭を見つめている。炎の冠を戴く王。石畳が赤く焼けている。庭もろとも燃え尽きようとしている。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 王
- **ID**: p12_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 堅い王が庭を見つめている。微動だにしない。石畳の上に石像のように立ち、法を一言で下す表情をしている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 王
- **ID**: p12_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鋭い王が庭を見つめている。鷹のような目で石畳の隅々まで見据えている。庭の荒れ具合から、何が起きたか読み取ったようだ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 王
- **ID**: p12_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 壊れた王が庭を見つめている。王冠が歪み、目は虚ろ。荒れた庭に荒れた王。どちらが先に壊れたのだろう。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '歪んだ王冠の欠片', description: '金属片。王の名が刻まれているが読めない', sellPrice: 9 }

### 屈強な × 王
- **ID**: p12_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 屈強な王が庭を見つめている。戦士王。石畳を踏む足音が地鳴りのようだ。背中に傷はない。庭の荒廃が気に入らないらしい。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 王
- **ID**: p12_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 凍てついた王が庭を見つめている。氷の玉座に座っている。吐く言葉が白い。石畳に永遠の冬が訪れた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 王
- **ID**: p12_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が庭を見つめている。存在が希薄な王。臣下は透けた王を見て見ぬふりをする。庭だけが王を見つめ返している。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '透けた印璽', description: '王が握っていた印。文字だけが宙に浮いている', sellPrice: 11 }

### 呪われた × 王
- **ID**: p12_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 呪われた王が庭を見つめている。触れたものが金になる王。石畳の草に手を伸ばし、引っ込めた。庭の美しさを壊したくないのだ。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '金色の雑草', description: '王が触れてしまった一本。美しいが生きていない', sellPrice: 15 }

### 眠い × 王
- **ID**: p12_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 眠い王が庭を見つめている。石畳の縁に腰かけて居眠りしている。王冠がずれている。庭の手入れは側近に任せたらしい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 亡霊

### 小さな × 亡霊
- **ID**: p12_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 小さな亡霊が庭を見つめている。子供の亡霊だ。石畳の上を走り回った笑い声だけが聞こえる。姿は見えない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: p12_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 優しい亡霊が庭を見つめている。生前の面影がかすかに残っている。庭の花に手を伸ばして、すり抜けた。微笑んで消えた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: p12_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 燃え盛る亡霊が庭を見つめている。炎をまとって石畳を彷徨う。火に焼かれた死に方の霊だ。庭の草が黒く焦げていく。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 亡霊
- **ID**: p12_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 堅い亡霊が庭を見つめている。同じ場所に何百年も立っている。石畳が敷かれる前からここにいたらしい。動く気配がない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 亡霊
- **ID**: p12_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 鋭い亡霊が庭を見つめている。こちらの罪を見透かす目。石畳に映る自分の影が、亡霊の視線で歪んでいる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 亡霊
- **ID**: p12_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 壊れた亡霊が庭を見つめている。自分が何者かも忘れた霊。石畳の上で同じ場所を行ったり来たりしている。輪郭が溶けている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 亡霊
- **ID**: p12_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 屈強な亡霊が庭を見つめている。鎧武者の亡霊。生前より強い。石畳を踏む音はしないが、庭の空気が重い。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: p12_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍てついた亡霊が庭を見つめている。冷気を纏った霊。通った跡の石畳に霜がおりる。永遠に寒がっている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 亡霊
- **ID**: p12_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 透き通った亡霊が庭を見つめている。成仏しかけている。石畳の向こうが透けて見える。あと少しで消える。庭に何か言い残したそうだ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '亡霊の言伝', description: '石畳に残った文字。読めるのは一行だけ', sellPrice: 10 }

### 呪われた × 亡霊
- **ID**: p12_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪われた亡霊が庭を見つめている。呪いに縛られて成仏できない。苦しみの表情で石畳を掴んでいるが、手はすり抜ける。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 亡霊
- **ID**: p12_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: 眠い亡霊が庭を見つめている。うつらうつらしている。存在感が薄れたり戻ったりする。石畳の上で、まどろんでいる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 鏡

### 小さな × 鏡
- **ID**: p12_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 小さな鏡が庭を見つめている。手鏡が石畳に落ちている。覗くと自分の目と、荒れた庭が映っている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 鏡
- **ID**: p12_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が庭を見つめている。映った庭が少しだけ美しく見える。雑草が花に、ひび割れが模様に見えた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: p12_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 燃え盛る鏡が庭を見つめている。鏡面に炎が映っている。だが庭に火はない。鏡の中の庭が燃えている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 鏡
- **ID**: p12_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 堅い鏡が庭を見つめている。石畳に埋め込まれた鏡。何をしても割れない。庭の空を映し続けて、傷ひとつない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 鏡
- **ID**: p12_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 鋭い鏡が庭を見つめている。割れた鏡の破片が石畳に散らばっている。縁が刃のように鋭い。裸足では歩けない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 鏡
- **ID**: p12_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: 壊れた鏡が庭を見つめている。ひび割れた鏡面に庭が映る。自分の顔が何人にも分裂している。どれが本物かわからない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 鏡
- **ID**: p12_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 屈強な鏡が庭を見つめている。人の背丈を超える姿見が石畳の真ん中に立っている。庭が丸ごと映っている。圧倒的な存在感。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 鏡
- **ID**: p12_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍てついた鏡が庭を見つめている。鏡面が凍って霜で覆われている。かろうじて映る庭が、冬の景色になっている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 鏡
- **ID**: p12_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透き通った鏡が庭を見つめている。鏡なのに向こうが透けている。通り抜けようとしたが、手が当たった。鏡の向こうに、手入れされた庭が見える。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '鏡の庭の花', description: '鏡の向こうから零れ落ちた花弁。どこにも咲いていない花', sellPrice: 15 }

### 呪われた × 鏡
- **ID**: p12_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が庭を見つめている。覗くと、自分の姿が鏡の中に残った。鏡の中の庭で、もう一人の自分が歩いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 鏡
- **ID**: p12_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 眠い鏡が庭を見つめている。鏡面がぼんやり曇っている。映像が遅れて映る。自分の寝顔が映った。庭が眠たそうだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 人形

### 小さな × 人形
- **ID**: p12_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 小さな人形が庭を見つめている。指人形ほどの大きさ。石畳の隙間に座っている。誰かが置いたのか、落としたのか。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 人形
- **ID**: p12_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 優しい人形が庭を見つめている。抱きしめられてくたくたになった人形。笑顔が縫ってある。石畳の上で庭を見守っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 人形
- **ID**: p12_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃え盛る人形が庭を見つめている。藁人形が燃えている。祭りの焚き上げのようだ。石畳に灰が散って、庭が煙い。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 人形
- **ID**: p12_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 堅い人形が庭を見つめている。木彫りの人形。関節がなく、表情もない。石畳の上に直立して、庭を見据えている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 人形
- **ID**: p12_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 鋭い人形が庭を見つめている。関節が刃になった操り人形。糸は見えない。石畳の上を滑るように動き、雑草を刈っていく。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 人形
- **ID**: p12_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 壊れた人形が庭を見つめている。首がもげかけている。残った片目でこちらを見ている。石畳の染みのように、ずっとそこにいる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 人形
- **ID**: p12_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 屈強な人形が庭を見つめている。等身大の木彫り人形。腕が丸太のように太い。石畳の門番のように立っている。命令を待っている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 人形
- **ID**: p12_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 凍てついた人形が庭を見つめている。氷でできた人形。繊細な造形だ。石畳の上で少しずつ溶けている。溶けたら二度と作れない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 人形
- **ID**: p12_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 透き通った人形が庭を見つめている。硝子の人形。中に何かの液体が入っている。石畳の光を受けて、庭に色とりどりの影を落としている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '硝子人形の欠片', description: '中の液体が少し漏れた。甘い匂いがする', sellPrice: 8 }

### 呪われた × 人形
- **ID**: p12_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が庭を見つめている。夜になると位置が変わる人形。朝見ると石畳の別の場所にいる。誰も動かしていない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 人形
- **ID**: p12_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 眠い人形が庭を見つめている。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。石畳に横たえると、庭ごと眠りに沈んだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: p12_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 小さな雨が庭を見つめている。霧雨だ。石畳が薄く濡れて光っている。傘がなくても気にならない程度の雨。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 雨
- **ID**: p12_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 優しい雨が庭を見つめている。慈雨。渇いた石畳を潤している。雑草が少しだけ背を伸ばした。庭が息を吹き返す。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '慈雨の雫', description: '庭を潤した雨の一滴。瓶に入れると光る', sellPrice: 10 }

### 燃え盛る × 雨
- **ID**: p12_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 燃え盛る雨が庭を見つめている。火の雨。空から灼熱の滴が降る。石畳が焦げて割れ、庭が焼野原になっていく。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 雨
- **ID**: p12_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 堅い雨が庭を見つめている。雹だ。石のような氷が石畳を叩く。雑草が折れ、庭が白い粒で覆われた。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 鋭い × 雨
- **ID**: p12_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 鋭い雨が庭を見つめている。針のような雨粒が石畳を叩く。肌に刺さる。庭を駆け抜けたが、腕が赤くなった。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 雨
- **ID**: p12_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 壊れた雨が庭を見つめている。途切れ途切れに降る。リズムがおかしい。石畳の一部だけ濡れて、隣は乾いている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 雨
- **ID**: p12_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 屈強な雨が庭を見つめている。豪雨。滝のような水が石畳を打つ。庭が川になった。足首まで水に浸かっている。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 雨
- **ID**: p12_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍てついた雨が庭を見つめている。凍雨。石畳に触れた瞬間に凍りつく。庭が氷の鏡になった。自分の足が映っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 雨
- **ID**: p12_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 透き通った雨が庭を見つめている。異常に澄んだ雨。石畳が洗われ、かつての美しい紋様が浮かび上がった。庭が本来の姿を取り戻していく。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '庭の紋様の拓本', description: '雨に洗われた石畳の模様。何かの文字に見える', sellPrice: 12 }

### 呪われた × 雨
- **ID**: p12_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が庭を見つめている。浴びるとその場から動けなくなる。石畳の上で立ち尽くしている。根が生えたようだ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 雨
- **ID**: p12_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 眠い雨が庭を見つめている。しとしとと降り続く雨。石畳を叩く音が子守唄のようだ。庭全体が微睡んでいる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 33 |
| reward率 | 17.6% |
| damage平均 | 1.55 |
| quill平均 | 4.48 |
| damage=0の割合 | 37.4% (70/187) |
| damage≥4の割合 | 11.2% (21/187) |
| quill≥6の割合 | 18.7% (35/187) |
