# ノードE01「王の間」Outcome一覧

- **文構成**: [mod*][subj*]が 玉座を 守っている
- **可変スロット**: mod(初期: 屈強な/mod_mighty) + subj(初期: 騎士/subj_knight)
- **固定**: 目的語「玉座」(を格) + 述語「守っている」
- **ノードの文脈**: 王の間。玉座を何かが守っている。王はいない
- **nodeType**: elite
- **格歪みなし**（「守っている」はを格他動詞）
- **全187パターン**: 11 mod × 17 subj

---

## 子猫

### 小さな × 子猫
- **ID**: e01_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が玉座を守っている。鈴のような鳴き声が空虚な王の間に響く。玉座は無人だ。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 優しい × 子猫
- **ID**: e01_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 人懐っこい子猫が玉座の前に座っている。近づくと擦り寄ってきた。守る気はなさそうだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: e01_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が玉座を守っている。本猫は呑気に毛繕いしているが、絨毯が焦げている。近づけない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 子猫
- **ID**: e01_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が玉座を守っている。目だけが動いてこちらを追う。押しても蹴っても割れない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 子猫
- **ID**: e01_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 硝子の爪を持つ子猫が玉座を守っている。引っかかれた。傷が意外に深い。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 子猫
- **ID**: e01_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみの子猫が玉座の上に座っている。綿が出ている。誰がここに置いたのか。王の忘れ物だろうか。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '王の忘れ猫', description: '綿の出たぬいぐるみ。王冠の刺繍がある', sellPrice: 10 }

### 屈強な × 子猫
- **ID**: e01_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 子猫サイズで虎の体格をした獣が玉座を守っている。低い唸り声が王の間を満たす。小さな守護獣だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 子猫
- **ID**: e01_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の子猫が玉座を守っている。中でまだ息をしている。触れると指先が凍り、王の間に冷気が満ちる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 子猫
- **ID**: e01_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が玉座を守っている。心臓が透けて脈打っている。王の間にふさわしい、美しい番人だ。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '硝子猫の涙', description: '透き通った雫。光を集めて虹を作る', sellPrice: 12 }

### 呪われた × 子猫
- **ID**: e01_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が玉座を守っている。追い払ってもすぐ戻る。王の間を出ても、背後に気配がある。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 眠い × 子猫
- **ID**: e01_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 子猫が玉座の上で丸くなって眠っている。守っているというより、寝心地が良いだけだろう。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: e01_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指に巻きつくほどの蛇が玉座の脚に絡んでいる。守っているつもりらしい。跨いで通る。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 蛇
- **ID**: e01_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が玉座の肘掛けに巻きついている。腕に巻きついてくるが敵意はない。体温を分けてくれている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 蛇
- **ID**: e01_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を残す蛇が玉座を巡回している。通った跡が焦げる。王の間の床が黒い渦を描いている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 蛇
- **ID**: e01_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄の鱗を持つ蛇が玉座に巻きついている。噛まれたら歯が折れるのはこちらだ。掴むことも退かすこともできない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 蛇
- **ID**: e01_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の蛇が玉座を守っている。一噛みで血が黒く変わる。目が合った。動けない。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 壊れた × 蛇
- **ID**: e01_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮に失敗した蛇が玉座の根元にいる。古い皮が半分残り、動きが鈍い。玉座には触れさせてもらえた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 蛇
- **ID**: e01_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 胴回りが人の腰ほどある大蛇が玉座に巻きついている。玉座ごと締め上げて軋ませている。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 凍てついた × 蛇
- **ID**: e01_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 氷の中で螺旋を描く蛇が玉座の前に立っている。触れると凍傷する。王の間に霜が降りている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 蛇
- **ID**: e01_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が玉座に巻きついている。飲み込んだ王冠が体内に透けて見える。
- **damage**: 1
- **quill**: 8
- **reward**: { name: '蛇の中の王冠', description: '透けて見える黄金の冠。取り出す方法がない', sellPrice: 15 }

### 呪われた × 蛇
- **ID**: e01_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が玉座を守っている。脱皮するたびに大きくなる。もう玉座の半分を蛇が覆っている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: e01_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いた蛇が玉座の前で眠っている。踏まなければ無害だが、王の間は静まり返っている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: e01_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が玉座を守っている。小さな火を噴いて威嚇する。眉毛が焦げた。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '極小の竜鱗', description: '爪の先ほど小さい。だが確かに竜の鱗', sellPrice: 8 }

### 優しい × 竜
- **ID**: e01_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が玉座を守っている。翼を畳み、旅人を見据える。敵意はない。王の間を通ることを許された。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 燃え盛る × 竜
- **ID**: e01_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 全身が業火に包まれた竜が玉座を守っている。近づくだけで髪が焦げ、肌が灼ける。王の間が炉と化している。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 堅い × 竜
- **ID**: e01_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 鱗が城壁のように厚い竜が玉座を守っている。どんな言葉も通じず、どんな刃も通らない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 竜
- **ID**: e01_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 爪の一振りで床が裂ける竜が玉座を守っている。金色の目が値踏みするようにこちらを見る。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 壊れた × 竜
- **ID**: e01_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼は折れ、鱗は剥がれ、火も吐けない竜が玉座を守っている。それでも退かない。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '折れた竜牙', description: '竜の口から落ちた一本。まだ温かい', sellPrice: 10 }

### 屈強な × 竜
- **ID**: e01_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような巨体の竜が玉座を守っている。翼を広げると王の間が暗くなる。これ以上ない番人だ。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 凍てついた × 竜
- **ID**: e01_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 氷をまとった白い竜が玉座を守っている。吐息が吹雪になり、王の間が凍り始めている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 透き通った × 竜
- **ID**: e01_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が玉座を守っている。体を通して玉座が歪んで見える。美しいが、通さない。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '水晶竜の欠片', description: '光を通すと虹が走る。竜の体の一部', sellPrice: 12 }

### 呪われた × 竜
- **ID**: e01_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 暴走した守護竜が玉座を守っている。目に理性がない。かつて王に仕えた竜の成れの果てだ。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 眠い × 竜
- **ID**: e01_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 竜が玉座の前で居眠りしている。いびきが王の間を震わせる。起こさなければ通れる。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: e01_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらと見間違うほど小さな蝶が玉座の周りを飛んでいる。守っているとは思えない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: e01_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 指先に止まる蝶が玉座から離れない。羽の模様が笑顔に見える。王の遺した使いだろうか。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 蝶
- **ID**: e01_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 羽が炎でできた蝶が玉座を巡回している。飛んだ跡に火の粉。王の間の帳が燃え始めた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 蝶
- **ID**: e01_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の羽を持つ蝶が玉座を守っている。飛ぶとき金属音がする。甲冑のような蝶だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 蝶
- **ID**: e01_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 羽の縁が刃の蝶が玉座を守っている。すれ違うだけで頬が切れた。血が玉座に散る。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 蝶
- **ID**: e01_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽がちぎれた蝶が玉座の上で螺旋を描いている。飛ぶことも守ることもできない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 屈強な × 蝶
- **ID**: e01_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 蝶のくせに羽ばたきが風を起こす。玉座の前に立つと、壁のような風圧で押し返される。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '蝶の鱗粉', description: '指につくと離れない。風に乗って渦を巻く', sellPrice: 8 }

### 凍てついた × 蝶
- **ID**: e01_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の結晶が蝶の形をしている。玉座の周囲を回るたびに空気が凍る。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 蝶
- **ID**: e01_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が玉座を守っている。止まると景色に溶けて見えなくなる。見えない番人だ。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 蝶
- **ID**: e01_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 追いかけると必ず迷子になる蝶が玉座の前を飛んでいる。追うと王の間の出口がわからなくなった。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 蝶
- **ID**: e01_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が玉座の上で羽を閉じている。あくびが伝染する。王の間が眠気に満ちている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: e01_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: そよ風が玉座の周りを吹いている。守るには頼りない。帳がかすかに揺れるだけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 風
- **ID**: e01_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい追い風が玉座から吹いてくる。背中を押すように王の間の出口へ導かれた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 風
- **ID**: e01_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が玉座を守っている。触れたものが焦げる。王の間が窯のように熱い。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 風
- **ID**: e01_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 同じ方向に吹き続ける頑固な風が玉座を守っている。何百年も同じ風が吹いている。押し返される。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 風
- **ID**: e01_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が玉座を守っている。王の間を横切ろうとして、腕に薄い傷が走った。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 風
- **ID**: e01_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 方向が定まらない乱気流が玉座の周りで渦巻いている。守っているのか壊しているのかわからない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 風
- **ID**: e01_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: すべてを押し流す暴風が玉座を守っている。立っていられない。床を這って進むしかない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 風
- **ID**: e01_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 吹雪が玉座を守っている。まつ毛が凍り、視界が白に塗りつぶされる。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 透き通った × 風
- **ID**: e01_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄み渡る風が玉座を守っている。嘘も幻も吹き払う風。王の間の空気だけが清い。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '王の間の清風', description: '瓶に詰めた王の間の空気。嗅ぐと背筋が伸びる', sellPrice: 10 }

### 呪われた × 風
- **ID**: e01_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が玉座を守っている。吹かれると帰り道を忘れる。王の間を出たが、どこに向かっていたか思い出せない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 風
- **ID**: e01_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生温い風が玉座から吹いている。意識がぼんやりする。玉座に座りたくなる衝動を堪えた。
- **damage**: 2
- **quill**: 6
- **reward**: なし

---

## 炎

### 小さな × 炎
- **ID**: e01_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの小さな炎が玉座の肘掛けで揺れている。指で摘めそうだが、近づくと逃げる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: e01_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉のような炎が玉座を守っている。揺れる光が王の間を温かく照らす。敵意はない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 炎
- **ID**: e01_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 制御不能の大火が玉座を守っている。すべてを飲み込もうとしている。王の間が炎に沈む。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 堅い × 炎
- **ID**: e01_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が玉座を守っている。水をかけても風を当てても揺らがない。永遠の番人だ。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 鋭い × 炎
- **ID**: e01_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が玉座を守っている。触れたものの形を正確に切り取る。指を出したら、爪だけが綺麗に焼け落ちた。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 炎
- **ID**: e01_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が玉座を守っている。緑や紫に明滅するが、温かくない。触れても火傷しない。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 屈強な × 炎
- **ID**: e01_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 天を衝く火柱が玉座を守っている。周囲の空気が渦を巻く。王の間の天井に焦げ跡がある。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 凍てついた × 炎
- **ID**: e01_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 燃えているのに冷たい青白い炎が玉座を守っている。霜を纏った鬼火だ。王の間が冷え切っている。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '凍える炎', description: '燃えているのに冷たい。瓶の中で青く揺れている', sellPrice: 10 }

### 透き通った × 炎
- **ID**: e01_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: ほぼ見えない炎が玉座を守っている。空気の揺らぎだけで存在がわかる。知らずに近づいて手を灼いた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 呪われた × 炎
- **ID**: e01_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が玉座を守っている。燃やしたものの形を覚えて再現する。炎の中に王の姿が見えた。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '王の残影', description: '炎が記憶した王の輪郭。見つめると目が眩む', sellPrice: 12 }

### 眠い × 炎
- **ID**: e01_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 今にも消えそうな熾火が玉座を守っている。赤く明滅するたびに王の間が揺れる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: e01_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 掌に収まる氷の欠片が玉座の上にある。すでに溶けかけている。守る力はない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 氷
- **ID**: e01_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が玉座を覆っている。額に当てると熱が引く。王の間の空気が心地よい。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 氷
- **ID**: e01_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を放つ氷が玉座を守っている。触れると凍傷と火傷を同時に負う。矛盾した番人だ。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 堅い × 氷
- **ID**: e01_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 鋼より硬い万年氷が玉座を覆っている。鉄の刃が欠けた。この氷は割れない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 氷
- **ID**: e01_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱が剣のように玉座の周りから突き出している。一歩間違えば串刺しだ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 氷
- **ID**: e01_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が玉座を覆っている。踏めば崩れる。下に何があるかわからない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 氷
- **ID**: e01_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が玉座を守っている。王の間ごと凍りついている。通路を削って進むしかない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 氷
- **ID**: e01_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 氷のさらに冷たい状態。近づくだけで動けなくなる。玉座は絶対零度の檻の中だ。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 透き通った × 氷
- **ID**: e01_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 完全に透明な氷が玉座を覆っている。あることに気づかず手を突いた。冷たい。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 呪われた × 氷
- **ID**: e01_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が玉座を覆っている。王の間に永遠の冬が広がり続けている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 氷
- **ID**: e01_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶けていく氷が玉座を覆っている。しずくの音が王の間に子守唄のように響く。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 影

### 小さな × 影
- **ID**: e01_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな黒い染みが玉座を守っている。何の影かわからない。踏むと冷たい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 影
- **ID**: e01_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような心地よい影が玉座を覆っている。涼しく、王の間に安らぎがある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 影
- **ID**: e01_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が玉座を守っている。触れると灼ける。王の間に焦げた匂いが充満している。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 影
- **ID**: e01_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 地面に貼りついた影が固まって玉座を囲んでいる。壁のように立ち上がって通さない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 影
- **ID**: e01_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 輪郭がくっきりした影が玉座から伸びている。縁に触れた袖が切れた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 影
- **ID**: e01_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 立体的にめくれ上がった影が玉座を守っている。平面に戻れない。影なのに厚みがある。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 屈強な × 影
- **ID**: e01_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 本体より遥かに大きい影が玉座を守っている。影のほうが本体に見える。王の間が暗い。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 影
- **ID**: e01_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 影が地面に張りついて動けない。本体はとうに去ったのに、影だけが玉座を守り続けている。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '凍りついた影', description: '剥がせない影の破片。手に持つと冷たい', sellPrice: 8 }

### 透き通った × 影
- **ID**: e01_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 薄い影が玉座を守っている。半透明で地面の模様が透けている。いるのに、いない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 呪われた × 影
- **ID**: e01_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 影に触れたものが影になる。玉座の周りに、かつて近づいた者たちの影が層をなしている。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 眠い × 影
- **ID**: e01_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように縮んだ影が玉座の真下にある。踏んでも反応しない。昼寝中らしい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 歌

### 小さな × 歌
- **ID**: e01_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 鼻歌が王の間に漂っている。誰が歌っているかわからない。玉座の辺りから聞こえる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: e01_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が玉座を守っている。聴いていると傷が癒える。王の間に安らぎが満ちる。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 歌
- **ID**: e01_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が玉座を守っている。聴くと血が沸く。足が勝手に玉座へ向かう。危険だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 歌
- **ID**: e01_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 止められない歌が玉座を守っている。他のすべての音を上書きする。自分の声も聞こえない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 歌
- **ID**: e01_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声のような高音が玉座を守っている。王の間の硝子が割れた。耳を塞いでも響く。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 歌
- **ID**: e01_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途中で止まる旋律が玉座を守っている。続きを誰も知らない。王の間に不安が漂う。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 歌
- **ID**: e01_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる合唱が玉座を守っている。足元が揺れる。王の間が震えている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 凍てついた × 歌
- **ID**: e01_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 聴いた者の動きが止まる歌が玉座を守っている。空気ごと凍る。足が動かない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 透き通った × 歌
- **ID**: e01_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 純粋な旋律が玉座を守っている。雑念が消え、思考が澄む。玉座に触れる必要がないと悟った。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '透き通った旋律', description: '瓶に詰めた音。開けると一瞬だけ聞こえる', sellPrice: 12 }

### 呪われた × 歌
- **ID**: e01_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 一度聴くと頭から離れない歌が玉座を守っている。王の間を出てもまだ聞こえる。正気が削れる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 歌
- **ID**: e01_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 子守唄が玉座を守っている。抗えない眠気が襲う。玉座の前で膝をついた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: e01_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: ふと会話が途切れたような静けさが玉座の周りにある。一音だけ消えた空間。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 沈黙
- **ID**: e01_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 言葉がなくても通じ合う静けさが玉座を守っている。安らぎがある。ここに王はいないが、意志は残っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 沈黙
- **ID**: e01_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りで誰も口を開けない沈黙が玉座を守っている。空気が焦げている。爆発寸前だ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 堅い × 沈黙
- **ID**: e01_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 何を言っても吸い込まれて消える沈黙が玉座を守っている。声が出ない。音の墓場だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 沈黙
- **ID**: e01_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 言葉より痛い無言が玉座を守っている。視線だけが刺さる。見えない王がこちらを裁いている。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '無言の裁き', description: '王の間で受けた視線の記憶。背筋が寒くなる', sellPrice: 10 }

### 壊れた × 沈黙
- **ID**: e01_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂のはずなのにノイズが混じる。何かが漏れ出している。玉座の下から聞こえる。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 屈強な × 沈黙
- **ID**: e01_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が玉座を守っている。誰も逆らえない。王の間に音が存在することを許さない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: e01_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 息も凍る沈黙が玉座を守っている。時間が止まったような王の間。足音だけが永遠に響く。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 透き通った × 沈黙
- **ID**: e01_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 雑念のない完全な静寂が玉座を守っている。泉のように澄んでいる。心が洗われる。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 沈黙
- **ID**: e01_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 声を奪う沈黙が玉座を守っている。口は動くが音が出ない。助けも呼べない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 沈黙
- **ID**: e01_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさが玉座を守っている。眠気が襲う。玉座に凭れてしまいそうだ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 騎士

### 小さな × 騎士
- **ID**: e01_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が玉座を守っている。大きすぎる兜で前が見えていない。それでも剣を構えている。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '小さな兜', description: '子供の頭ほどの兜。中が温かい', sellPrice: 8 }

### 優しい × 騎士
- **ID**: e01_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 剣を収め、跪いて手を差し出す騎士が玉座を守っている。敵ではなく客として迎えてくれた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 騎士
- **ID**: e01_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 鎧ごと炎に包まれた騎士が玉座を守っている。それでも歩みを止めない。王への忠義が燃えている。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 騎士
- **ID**: e01_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧で全身を覆った騎士が玉座を守っている。石像のように微動だにしない。表情が読めない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 騎士
- **ID**: e01_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が玉座を守っている。構えに無駄がない。冷たい目で間合いを測っている。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 壊れた × 騎士
- **ID**: e01_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 鎧はへこみ、剣は折れ、盾は砕けている。それでも玉座を守って立っている。退かない。
- **damage**: 2
- **quill**: 8
- **reward**: { name: '折れた忠誠', description: '砕けた騎士の盾の破片。誓いの紋章が刻まれている', sellPrice: 12 }

### 屈強な × 騎士（初期値）
- **ID**: e01_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の重装騎士が玉座を守っている。地面が軋む。一歩も通さない構えだ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 騎士
- **ID**: e01_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 氷に閉じ込められた騎士が剣を振り上げた姿勢のまま玉座を守っている。鎧に霜がおりている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 透き通った × 騎士
- **ID**: e01_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 影の薄い騎士が玉座を守っている。いるのに気づかず通り過ぎた。背後で剣風が鳴った。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 呪われた × 騎士
- **ID**: e01_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士が玉座を守っている。兜の奥の目が赤く光る。かつての忠臣が呪いに堕ちた姿だ。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 眠い × 騎士
- **ID**: e01_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 見張り番の騎士が舟を漕いでいる。槍が傾いている。今なら通れる。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: e01_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 少女の魔女が玉座を守っている。大きな帽子で顔が隠れている。杖を構えるが、手が震えている。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 優しい × 魔女
- **ID**: e01_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草を煎じる老魔女が玉座を守っている。怖い顔だが、傷を診てくれた。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 魔女
- **ID**: e01_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法で全身を包む魔女が玉座を守っている。怒りの形相。王の間が炎に照らされる。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 魔女
- **ID**: e01_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 石のように頑固な老魔女が玉座を守っている。取引以外では一言も話さない。通行料を要求された。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 魔女
- **ID**: e01_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻に鋭い目の魔女が玉座を守っている。嘘を一言で見抜かれた。この魔女には通じない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 魔女
- **ID**: e01_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 魔力が暴走した魔女が玉座を守っている。呪文が途切れ途切れで、何が起きるかわからない。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 屈強な × 魔女
- **ID**: e01_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 杖を振るう代わりに拳で殴る魔女が玉座を守っている。腕が太い。魔法より拳が怖い。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '魔女の拳骨', description: '石のように硬い拳の型。握ると力が湧く', sellPrice: 10 }

### 凍てついた × 魔女
- **ID**: e01_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法を使う魔女が玉座を守っている。周囲に霜が広がる。王の間が白く染まっていく。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 透き通った × 魔女
- **ID**: e01_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 老いて存在が希薄になった魔女が玉座を守っている。向こうが透けて見える。声だけが聞こえる。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 呪われた × 魔女
- **ID**: e01_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 自分の呪いに蝕まれた魔女が玉座を守っている。体の一部が変異している。近づくと呪いがうつる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 魔女
- **ID**: e01_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 大釜の前でうとうとしている魔女が玉座を守っている。薬がぐつぐつ煮えている。何の薬だろう。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: e01_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供が王冠をかぶって玉座を守っている。足が床に届いていない。精一杯の威厳を見せている。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 優しい × 王
- **ID**: e01_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 民と共に畑を耕す王が玉座を守っている。衣は質素で手が荒れている。旅人にも温かい目を向けた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 王
- **ID**: e01_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠を戴く王が玉座を守っている。怒りで玉座が燃えている。近づけば焼かれる。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 王
- **ID**: e01_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座に座り微動だにしない王が玉座を守っている。法を一言で下す。通行は許されない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 王
- **ID**: e01_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹のような目で見据える王が玉座を守っている。何も見逃さない。嘘を吐けば首が飛ぶ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 王
- **ID**: e01_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 王冠が歪み、衣は破れ、目は虚ろな王が玉座に崩れている。守っているのではない。動けないのだ。
- **damage**: 1
- **quill**: 8
- **reward**: { name: '歪んだ王冠', description: '曲がった金の冠。矯正する方法がない', sellPrice: 15 }

### 屈強な × 王
- **ID**: e01_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が玉座を守っている。背中に傷がない。この王は一度も退いたことがない。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 凍てついた × 王
- **ID**: e01_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 氷の玉座に座る北の王が守っている。吐く言葉が白い。王の間が凍りつく。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 透き通った × 王
- **ID**: e01_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 存在が希薄な王が玉座を守っている。臣下は透けた王を見ないふりをしていた。今は臣下もいない。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 呪われた × 王
- **ID**: e01_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものが金になる王が玉座を守っている。食事もできない。金の杯が転がっている。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '金の涙', description: '王が泣いた跡。黄金の雫が頬に張り付いている', sellPrice: 15 }

### 眠い × 王
- **ID**: e01_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 王が玉座で居眠りしている。側近はおらず、王の間は無人に近い。静かに通った。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 亡霊

### 小さな × 亡霊
- **ID**: e01_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が玉座を守っている。笑い声だけが聞こえる。王の間に冷たい風が吹く。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: e01_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな霊が玉座を守っている。微笑んで道を譲った。王の間に花の匂いが残った。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: e01_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎をまとった亡霊が玉座を守っている。怨念が燃えている。王の間が炎に照らされる。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 亡霊
- **ID**: e01_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 同じ場所から決して動かない亡霊が玉座を守っている。何百年もそこに立っている。通せんぼだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 鋭い × 亡霊
- **ID**: e01_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: こちらの罪を見透かす目の亡霊が玉座を守っている。視線が刺さる。王の間に立つ資格を問われている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 亡霊
- **ID**: e01_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 自分が何者か忘れた亡霊が玉座を守っている。輪郭が溶けている。なぜ守っているかも覚えていない。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '忘れられた記憶', description: '亡霊が落とした光の欠片。何かの記憶だったもの', sellPrice: 10 }

### 屈強な × 亡霊
- **ID**: e01_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が玉座を守っている。生前より強い。死んで枷が外れたのだ。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: e01_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 触れると凍傷する亡霊が玉座を守っている。通った跡に霜が降りる。王の間が冷え切っている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 透き通った × 亡霊
- **ID**: e01_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけた亡霊が玉座を守っている。ほとんど透けている。もう少しで消える。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 亡霊
- **ID**: e01_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いに縛られて成仏できない亡霊が玉座を守っている。苦しみの表情。解放する方法がわからない。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 眠い × 亡霊
- **ID**: e01_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うつらうつらしている亡霊が玉座を守っている。存在感が薄れたり戻ったりする。隙をついて通った。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 鏡

### 小さな × 鏡
- **ID**: e01_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が玉座の上に置かれている。覗くと自分の目だけが映る。何を守っているのか。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 鏡
- **ID**: e01_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 映った者を少しだけ美しく見せる鏡が玉座を守っている。覗くと、王の間にふさわしい姿になっていた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: e01_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡面に炎が映っている。だが周囲に火はない。鏡の中の王の間が燃え落ちている。
- **damage**: 3
- **quill**: 7
- **reward**: { name: '燃える鏡', description: '覗くと別の王の間が見える。そちらは炎に包まれている', sellPrice: 12 }

### 堅い × 鏡
- **ID**: e01_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 何をしても割れない鏡が玉座を守っている。殴っても蹴っても傷もつかない。通り道を塞いでいる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 鏡
- **ID**: e01_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れ鏡の破片が玉座の周りに散らばっている。縁が刃物のように鋭い。素足では通れない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 鏡
- **ID**: e01_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が玉座を守っている。映る顔が何人にも分裂している。どれが本物かわからない。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 屈強な × 鏡
- **ID**: e01_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 人の背丈を超える巨大な姿見が玉座を守っている。映った姿が動かない。鏡の中の自分が睨んでいる。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 凍てついた × 鏡
- **ID**: e01_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 鏡面が凍って霜で覆われている。かろうじて影が映る。覗くと冬の王の間が見えた。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 透き通った × 鏡
- **ID**: e01_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 鏡なのに向こうが透けている。窓のようだが通り抜けられない。玉座の向こうに別の世界が見える。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 呪われた × 鏡
- **ID**: e01_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 覗いた者の姿が鏡に残る鏡が玉座を守っている。中で影たちが蠢いている。覗いてしまった。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 鏡
- **ID**: e01_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 鏡面がぼんやり曇っている。映像がゆっくり遅れて映る。自分の寝顔が映って、眠くなった。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 人形

### 小さな × 人形
- **ID**: e01_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形ほどの人形が玉座を守っている。誰かが落としたのだろう。王冠を模した帽子をかぶっている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 人形
- **ID**: e01_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 笑顔が縫ってある人形が玉座を守っている。抱きしめたくなる。王の忘れ形見だろうか。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 人形
- **ID**: e01_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 火がついた藁人形が玉座を守っている。祭りの焚き上げのように燃えている。王の間が煙い。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 人形
- **ID**: e01_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が玉座を守っている。関節がなく、表情もない。おもちゃの兵隊のように立っている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 人形
- **ID**: e01_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃になっている操り人形が玉座を守っている。糸が見えない。優雅に、しかし確実に斬りつけてくる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 人形
- **ID**: e01_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が玉座を守っている。残った目でこちらを見ている。王の間に似つかわしくない不気味さ。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 屈強な × 人形
- **ID**: e01_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大の木彫り人形が玉座を守っている。腕が丸太のように太い。ゴーレムだ。命令を待っている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 人形
- **ID**: e01_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷でできた人形が玉座を守っている。繊細な造形。溶けたら二度と作れない。触れるのを躊躇う。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 透き通った × 人形
- **ID**: e01_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が玉座を守っている。中に何かの液体が入っている。王の間の光を集めて輝いている。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 呪われた × 人形
- **ID**: e01_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 夜になると位置が変わる人形が玉座を守っている。目を離した隙に近づいている。背筋が寒い。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '呪いの人形の糸', description: '見えない糸。切っても翌朝繋がっている', sellPrice: 8 }

### 眠い × 人形
- **ID**: e01_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が玉座を守っている。横にすると目が閉じるあの仕掛けだ。持つと眠くなる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: e01_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が玉座を守っている。天井から細かい水滴が降る。屋内なのに。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 雨
- **ID**: e01_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 温かい雨が玉座に降り注いでいる。傷を洗い清める慈雨。王の間の空気が潤っている。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 雨
- **ID**: e01_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が玉座を守っている。天井から灼熱の滴が降る。王の間の床が焦げている。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 雨
- **ID**: e01_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が玉座を守っている。石のような氷の粒が叩きつける。肌が痣だらけになった。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 鋭い × 雨
- **ID**: e01_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針のような雨が玉座を守っている。肌に刺さる。王の間を横切ろうとして、無数の針傷を負った。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 雨
- **ID**: e01_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 途切れ途切れに降る雨が玉座を守っている。リズムがおかしい。上に向かって降る雫もある。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 雨
- **ID**: e01_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が玉座を守っている。滝のような水量。王の間の床が川になっている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 雨
- **ID**: e01_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が玉座を守っている。触れたものを氷の膜で覆う。足元が滑って進めない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 雨
- **ID**: e01_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 異常なほど澄んだ雨が玉座に降っている。濡れた跡が光って見える。穢れを洗い流す雨だ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '浄化の雫', description: '澄んだ一滴。瓶に入れると光る', sellPrice: 10 }

### 呪われた × 雨
- **ID**: e01_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 浴びた者がその場から動けなくなる雨が玉座を守っている。足に根が生えたように動けない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 雨
- **ID**: e01_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 静かな雨音が王の間に響いている。子守唄のように眠気を誘う。玉座の前で意識が遠のいた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 37 |
| reward率 | 19.8% |
| damage平均 | 2.5 |
| quill平均 | 5.3 |
| damage=0の割合 | 16.6% (31/187) |
| damage≥4の割合 | 32.6% (61/187) |
| quill≥6の割合 | 37.4% (70/187) |
