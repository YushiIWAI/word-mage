# ノードE「王の間」Outcome一覧

- **文構成**: [mod][subj]が [adv] 玉座を 守っている
- **可変スロット**: mod + subj（副詞は後付け方式）
- **固定**: 目的語「玉座」(を格) + 述語「守っている」
- **元テキスト**: 「忠実な衛兵が玉座を守っている」
- **ノードの文脈**: 王の間。玉座を何かが守っている。王はいない
- **全216パターン**: (11 mod + 1 orig_mod) × (17 subj + 1 orig_subj)
- **AP**: 4（副詞スロットあり）

---

## 子猫

### 小さな × 子猫
- **ID**: e_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が玉座を守っている。鈴のような鳴き声が王の間に響く。脅威はない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 子猫
- **ID**: e_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 人懐っこい子猫が玉座を守っている。近づくと擦り寄ってきた。玉座には興味がないらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: e_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 炎をまとった子猫が玉座を守っている。本猫は気にしていないが、近寄れば火傷する。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 子猫
- **ID**: e_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 陶器の招き猫が玉座を守っている。目だけが動いてこちらを追う。押しても割れない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 鋭い × 子猫
- **ID**: e_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 爪と歯が硝子のように鋭い子猫が玉座を守っている。引っかかれた。浅いが痛む。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 子猫
- **ID**: e_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: ぬいぐるみの子猫が玉座を守っている。綿が出ている。誰がここに置いたのだろう。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 屈強な × 子猫
- **ID**: e_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 子猫サイズで虎の体格をした獣が玉座を守っている。小さな守護獣だ。牙を剥く。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 子猫
- **ID**: e_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 氷の彫刻の子猫が玉座を守っている。中でまだ息をしている。触れると指先が凍る。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 子猫
- **ID**: e_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 硝子の子猫が玉座を守っている。心臓が透けて脈打つのが見える。美しく、触れがたい。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '硝子の心臓', description: '透き通った子猫の胸に見えた光。まだ温かい', sellPrice: 12 }

### 呪われた × 子猫
- **ID**: e_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が玉座を守っている。追い払ってもすぐ戻る。この猫は捨てられない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 眠い × 子猫
- **ID**: e_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 子猫が玉座の上で丸くなって寝ている。守っているというより、居座っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 子猫
- **ID**: e_orig_kitten
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_kitten' }
- **text**: 忠実な子猫が玉座を守っている。小さな体で精一杯威嚇する。健気だが、脅威ではない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: e_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 指に巻きつくほどの蛇が玉座の脚に絡んでいる。守っているつもりらしい。踏まないように通る。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蛇
- **ID**: e_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 温かい蛇が玉座の肘掛けに巻きついている。腕に巻きついてくるが、敵意はない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 蛇
- **ID**: e_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 炎の軌跡を残す蛇が玉座を巡回している。通った跡が焦げる。近づけない。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 蛇
- **ID**: e_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 鉄の鱗を持つ蛇が玉座に巻きついている。噛まれたら歯が折れるのはこちらだ。掴めない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 蛇
- **ID**: e_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 猛毒の蛇が玉座を守っている。一噛みで血が黒く変わる。迂闊に手が出せない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 壊れた × 蛇
- **ID**: e_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 脱皮に失敗した蛇が玉座の根元にいる。古い皮が半分残って動きが鈍い。跨いで通れる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 蛇
- **ID**: e_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 胴回りが人の腰ほどある大蛇が玉座に巻きついている。王座が蛇の寝床に見える。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 蛇
- **ID**: e_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 氷の中で螺旋を描く蛇が玉座の前に立つ。触れると凍傷する。美しい番人だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 蛇
- **ID**: e_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が玉座を這う。骨格が透けて美しい。踏んだことに気づかなかった。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '蛇の透鱗', description: '透明な蛇が落とした鱗。光に翳すと虹が見える', sellPrice: 10 }

### 呪われた × 蛇
- **ID**: e_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 脱皮するたびに大きくなる蛇が玉座を守っている。すでに玉座を半分飲み込んでいる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: e_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: とぐろを巻いた蛇が玉座の座面で眠っている。踏まなければ無害だ。そっと通る。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 忠実な × 蛇
- **ID**: e_orig_snake
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_snake' }
- **text**: 忠実な蛇が玉座を守っている。近づく者に鎌首をもたげる。王の不在を知ってなお、持ち場を離れない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: e_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 手のひらサイズの竜が玉座を守っている。翼を広げて威嚇するが、雀ほどの大きさだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '極小の竜鱗', description: '手のひら竜が落とした鱗。爪の先ほどの大きさ', sellPrice: 8 }

### 優しい × 竜
- **ID**: e_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 穏やかな老竜が玉座を守っている。翼を畳み、静かにこちらを見ている。通してくれた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '老竜の鱗', description: '老竜が一枚だけ分けてくれた鱗。温かい', sellPrice: 15 }

### 燃え盛る × 竜
- **ID**: e_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 全身が業火に包まれた竜が玉座を守っている。近づくだけで髪が焦げる。突破は不可能だ。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 竜
- **ID**: e_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 鱗が城壁のように厚い竜が玉座を守っている。どんな刃も通らない。玉座は安泰だ。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 鋭い × 竜
- **ID**: e_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 爪の一振りで岩が裂ける竜が玉座を守っている。金色の目がこちらを追う。隙がない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 壊れた × 竜
- **ID**: e_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 翼は折れ、鱗は剥がれ、火も吐けない竜が玉座を守っている。それでも退かない。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '折れた竜牙', description: '壊れた竜が落とした牙。まだ少し温かい', sellPrice: 12 }

### 屈強な × 竜
- **ID**: e_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 山のような竜が王の間を埋め尽くしている。玉座どころか部屋ごと守っている。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 凍てついた × 竜
- **ID**: e_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 白い竜が玉座を守っている。吐息が吹雪になる。王の間が凍りついていく。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 透き通った × 竜
- **ID**: e_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 水晶の竜が玉座を守っている。体を通して玉座が歪んで見える。美しい番人だ。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '水晶竜の破片', description: '透き通った竜の鱗が一枚剥がれた。虹色に光る', sellPrice: 15 }

### 呪われた × 竜
- **ID**: e_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が玉座を守っている。目に理性がない。守護竜が番人のまま暴走している。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 眠い × 竜
- **ID**: e_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 竜が玉座の前で居眠りしている。いびきが地鳴りのように響く。足音を殺して通る。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 竜
- **ID**: e_orig_dragon
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_dragon' }
- **text**: 忠実な竜が玉座を守っている。王がいなくなっても、命令は変わらない。退く気配がない。
- **damage**: 4
- **quill**: 3
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: e_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 花びらほどの蝶が玉座の上を舞っている。守っているのではない。ただそこにいるだけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: e_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 指先に止まる蝶が玉座の縁にとまっている。羽の模様が笑顔に見える。王の間が少し和らぐ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 蝶
- **ID**: e_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 炎の羽の蝶が玉座の周りを旋回している。火の粉が散る。玉座の布が焦げ始めた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 蝶
- **ID**: e_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 金属の蝶が玉座にとまっている。飛ぶたびに金属音が鳴る。動く装飾品のようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 蝶
- **ID**: e_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 羽の縁が刃の蝶が玉座を旋回している。すれ違うだけで頬が切れた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 蝶
- **ID**: e_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 片羽の蝶が玉座の上で螺旋を描いて落ちていく。守ることも、飛ぶことも叶わない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 屈強な × 蝶
- **ID**: e_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 蝶のくせに羽ばたきで風が起こる。玉座の埃が舞い上がる。不思議な衛兵だ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 凍てついた × 蝶
- **ID**: e_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 霜の結晶が蝶の形をして玉座に降りている。触れると崩れそうだ。守護とは呼べない。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '霜蝶', description: '霜でできた蝶。手のひらの上で溶けていく', sellPrice: 8 }

### 透き通った × 蝶
- **ID**: e_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透明な蝶が玉座の前を舞う。止まると景色に溶けて消える。いるのかいないのか。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 蝶
- **ID**: e_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が玉座を旋回している。追いかけると道に迷う。王の間から出られない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 蝶
- **ID**: e_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 蝶が玉座の肘掛けで羽を閉じて動かない。起こしても別の肘掛けに移るだけだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 忠実な × 蝶
- **ID**: e_orig_butterfly
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_butterfly' }
- **text**: 忠実な蝶が玉座を離れない。追い払っても必ず戻る。誰に仕えているのだろう。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: e_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 微かなそよ風が玉座の周りを吹いている。王の間に窓はない。不思議な番人だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 風
- **ID**: e_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 温かい追い風が玉座を包んでいる。背中を押されるように玉座へ導かれる。敵意はない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 風
- **ID**: e_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 熱風が玉座を守っている。近づくと肌が焦げる。砂漠の嵐が王の間に閉じ込められている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 風
- **ID**: e_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 同じ方向に吹き続ける風が玉座を守っている。何百年も変わらない。押し戻されて近づけない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 風
- **ID**: e_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 真空の刃が玉座を巡っている。不用意に手を伸ばせば指が飛ぶ。見えない番人だ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 壊れた × 風
- **ID**: e_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 方向の定まらない乱気流が王の間を渦巻く。守っているのか暴れているのかわからない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 風
- **ID**: e_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 嵐のような風が玉座を守っている。一歩も進めない。吹き飛ばされて壁に叩きつけられた。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 風
- **ID**: e_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍風が玉座を守っている。吹雪が王の間に閉じ込められている。まつ毛が凍る。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 風
- **ID**: e_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 澄み渡った風が玉座を吹き抜ける。嘘も幻も吹き払われる。王の間に清浄な空気が満ちる。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '清風の残り香', description: '透き通った風が残した空気。瓶に詰めると光る', sellPrice: 10 }

### 呪われた × 風
- **ID**: e_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が玉座を守っている。吹かれた者が帰り道を忘れる。王の間から出られない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 風
- **ID**: e_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 生温い風が王の間に漂う。意識がぼんやりする。玉座が揺り籠に見えてきた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 忠実な × 風
- **ID**: e_orig_wind
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_wind' }
- **text**: 忠実な風が玉座を守っている。侵入者にだけ向かい風になる。王がいなくても風は吹く。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 炎

### 小さな × 炎
- **ID**: e_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 蝋燭ほどの炎が玉座の肘掛けに灯っている。頼りない番人だ。指で摘めそうだった。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: e_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 暖炉の火のような炎が玉座を照らしている。王の間が温かい。敵意のない守護だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 炎
- **ID**: e_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 制御不能の大火が玉座を守っている。全てを飲み込もうとしている。守護ではない。災害だ。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 炎
- **ID**: e_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 消えない炎が玉座を守っている。水をかけても風を当てても揺らがない。永遠の番火だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 炎
- **ID**: e_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 一点集中の炎が玉座を守っている。触れたものの形を正確に焼き切る。精密な番人だ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 壊れた × 炎
- **ID**: e_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 色のおかしい炎が玉座を守っている。緑や紫に明滅して温かくない。番人としても壊れている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 炎
- **ID**: e_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 天を衝く火柱が玉座を守っている。王の間の天井が焦げている。近づけるはずがない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 凍てついた × 炎
- **ID**: e_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 青白い炎が玉座を守っている。燃えているのに冷たい。霜を纏った鬼火だ。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '凍炎の欠片', description: '燃えながら凍る矛盾の炎。瓶に入れても消えない', sellPrice: 12 }

### 透き通った × 炎
- **ID**: e_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: ほぼ見えない炎が玉座を守っている。空気の揺らぎだけで気づいた。穢れだけを焼く炎だ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '透明な灯', description: '見えない炎を閉じ込めた灯。穢れに近づくと揺れる', sellPrice: 14 }

### 呪われた × 炎
- **ID**: e_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が玉座を守っている。燃やしたものの幻が炎に浮かぶ。玉座に座った王の影が見えた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 炎
- **ID**: e_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 今にも消えそうな熾火が玉座を照らしている。赤く明滅する。番人の交代は来ない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 炎
- **ID**: e_orig_flame
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_flame' }
- **text**: 忠実な炎が玉座を守っている。王がいなくなった後も、一度も消えていない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: e_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 掌に収まる氷の欠片が玉座の座面にある。すでに溶けかけている。守護の名に値しない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 氷
- **ID**: e_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 冷たいが痛くない氷が玉座を覆っている。触ると熱を引いてくれる。優しい守護だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 氷
- **ID**: e_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 炎を放つ氷が玉座を守っている。触れると凍傷と火傷を同時に負う。矛盾が番人をしている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 氷
- **ID**: e_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 鋼より硬い万年氷が玉座を封じている。鉄の刃が欠ける。誰も座れない玉座だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 氷
- **ID**: e_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 氷柱が剣のように玉座の周りに突き出している。一歩でも踏み込めば串刺しだ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 壊れた × 氷
- **ID**: e_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: ひび割れた氷が玉座を覆っている。踏めば崩れる。守護としてはもう限界だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 氷
- **ID**: e_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 山のような氷塊が王の間を埋め尽くしている。玉座は氷の奥に封印されている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 氷
- **ID**: e_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 氷のさらに冷たい状態。触れた空気が結晶化して落ちる。玉座は絶対零度に近い。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 透き通った × 氷
- **ID**: e_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 完全に透明な氷が玉座を覆っている。あることに気づかず手を突いた。冷たい。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 呪われた × 氷
- **ID**: e_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 溶けない呪いの氷が玉座を封じている。周囲にも永遠の冬を広げ続ける。王の間が凍土になる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 氷
- **ID**: e_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: ゆっくり溶けていく氷が玉座を濡らしている。しずくの音が子守唄のように響く。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 氷
- **ID**: e_orig_ice
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_ice' }
- **text**: 忠実な氷が玉座を守っている。溶けては凍り、凍っては守る。王が戻るまで。
- **damage**: 2
- **quill**: 6
- **reward**: { name: '不溶の氷片', description: '忠誠を宿した氷。手の中で溶けない', sellPrice: 10 }

---

## 影

### 小さな × 影
- **ID**: e_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 足元の小さな黒い染みが玉座を守っている。何の影かわからない。踏んでも消えない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 影
- **ID**: e_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 木陰のような影が玉座を覆っている。涼しく、安らぐ。かつての王の影かもしれない。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '王の影', description: '玉座を包んでいた穏やかな影。誰かを守る形をしている', sellPrice: 10 }

### 燃え盛る × 影
- **ID**: e_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 黒い炎で燃える影が玉座を守っている。触れると灼ける。本体のない炎だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 影
- **ID**: e_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 地面に貼りついた影が壁のように立ち上がり、玉座を守っている。すり抜けられない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 影
- **ID**: e_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 輪郭のくっきりした影が玉座から伸びている。縁に触れると切れた。影の刃だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 影
- **ID**: e_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 立体的にめくれ上がった影が玉座を守っている。平面に戻れない。奇妙な番人だ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 影
- **ID**: e_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 本体より遥かに大きな影が玉座を守っている。影のほうが本体に見える。圧倒される。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 影
- **ID**: e_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 影が地面に凍りついて動かない。王は去ったが、影だけが玉座を守り続けている。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '凍影', description: '地面から剥がした凍った影。手の中で震えている', sellPrice: 9 }

### 透き通った × 影
- **ID**: e_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 半透明の影が玉座を覆う。薄くて地面が透けている。存在が希薄な守護だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 影
- **ID**: e_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が玉座を守っている。影に触れた者も影になる。王の間に影が増え続けている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 影
- **ID**: e_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 正午の影のように縮んだ影が玉座の真下にいる。動かない。夕暮れまで伸びるのを待っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 影
- **ID**: e_orig_shadow
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_shadow' }
- **text**: 忠実な影が玉座を守っている。王の影だ。王は去ったが、影は残った。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '王の残影', description: '玉座を守り続けた王の影。握ると忠誠の形をしている', sellPrice: 14 }

---

## 歌

### 小さな × 歌
- **ID**: e_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 鼻歌が王の間に響いている。誰が歌っているかわからない。玉座を守る旋律だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: e_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 子守唄が玉座を守っている。聴いていると傷が癒える。不在の王を慰める歌だ。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '慰めの旋律', description: '王の間に響いていた子守唄。口ずさむと心が凪ぐ', sellPrice: 12 }

### 燃え盛る × 歌
- **ID**: e_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 戦の歌が王の間に轟く。血が沸き、恐れが消える。玉座に近づく足が止められない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 歌
- **ID**: e_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 一度始まると止められない歌が玉座を守っている。他のすべての音が消される。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 歌
- **ID**: e_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 金切り声のような歌が玉座を守っている。硝子が割れる。耳を塞いでも鳴り止まない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 歌
- **ID**: e_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 途中で止まる旋律が王の間に響く。続きを誰も知らない。守護も中途半端だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 歌
- **ID**: e_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 大地を震わせる歌が玉座を守っている。足元が揺れる。声の壁が立ちはだかる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 歌
- **ID**: e_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が玉座を守っている。聴いた者の動きが止まる。空気ごと凍る旋律だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 歌
- **ID**: e_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 純粋な旋律が王の間に満ちている。雑念が消え、思考が澄む。玉座だけが静かに輝く。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '澄んだ音色', description: '透き通った歌の一節。耳元で鳴り続けている', sellPrice: 11 }

### 呪われた × 歌
- **ID**: e_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が玉座を守っている。一度聴くと頭から離れない。正気を保つのが難しい。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 歌
- **ID**: e_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 子守唄が玉座を守っている。抗えない眠気に包まれる。玉座の前で眠り込んでしまった。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 忠実な × 歌
- **ID**: e_orig_song
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_song' }
- **text**: 忠実な歌が玉座を守っている。王がいなくなった日から、ずっと同じ旋律を繰り返している。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: e_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: ふと音が途切れる瞬間が玉座を守っている。すぐに音が戻る。小さな守護だ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 沈黙
- **ID**: e_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 言葉がなくても通じ合う静けさが玉座を包む。安らぎがある。王の間が聖域のようだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 沈黙
- **ID**: e_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 怒りで誰も口を開けない沈黙が王の間を満たす。空気が焦げている。玉座が震えている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 沈黙
- **ID**: e_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 何を言っても吸い込まれる沈黙が玉座を守っている。声が消える。音の墓場だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 沈黙
- **ID**: e_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 刃のような沈黙が王の間を裂く。視線だけが刺さる。言葉より痛い守護だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 沈黙
- **ID**: e_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 静寂のはずなのにノイズが混じる。壊れた沈黙が玉座を守っている。守護も崩れかけだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 屈強な × 沈黙
- **ID**: e_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 圧倒的な沈黙が王の間を支配している。口を開くことすらできない。玉座は完全に守られている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: e_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が玉座を守っている。時間が止まったように静かだ。息も凍る。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 沈黙
- **ID**: e_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 泉のように澄んだ沈黙が玉座を包む。雑念が消える。空っぽの玉座が美しく見える。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '澄んだ静寂', description: '完全な沈黙の欠片。耳に当てると何も聞こえない', sellPrice: 11 }

### 呪われた × 沈黙
- **ID**: e_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が玉座を守っている。声を奪われた。口は動くが音が出ない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 沈黙
- **ID**: e_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 午後の図書館のような静けさが王の間を満たす。眠気に抗えない。玉座の前で座り込んだ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 忠実な × 沈黙
- **ID**: e_orig_silence
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_silence' }
- **text**: 忠実な沈黙が玉座を守っている。王がいた頃からずっと黙っている。これからもずっと。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '永遠の黙', description: '王の間から持ち出した沈黙。どこにいても少し静かになる', sellPrice: 10 }

---

## 騎士

### 小さな × 騎士
- **ID**: e_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 子供の騎士が玉座を守っている。大きすぎる兜で前が見えていない。一歩も動かない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 騎士
- **ID**: e_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 剣を収めた騎士が玉座を守っている。跪いて手を差し出す。通してくれるらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 騎士
- **ID**: e_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 鎧ごと炎に包まれた騎士が玉座を守っている。それでも歩みを止めない。燃える忠義だ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 騎士
- **ID**: e_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 分厚い鎧の騎士が玉座を守っている。微動だにしない。表情が見えない。石像と区別がつかない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 鋭い × 騎士
- **ID**: e_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 剣の達人が玉座を守っている。構えに無駄がない。目が冷たい。隙を見つけられない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 壊れた × 騎士
- **ID**: e_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 鎧はへこみ、剣は折れ、盾は砕けている。それでも騎士は玉座の前に立っている。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '折れた忠剣', description: '壊れた騎士の剣。刃は折れても柄は握られたままだった', sellPrice: 12 }

### 屈強な × 騎士
- **ID**: e_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 巨体の重装騎士が玉座を守っている。地面が軋む。力で突破は不可能だ。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 騎士
- **ID**: e_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 氷に閉じ込められた騎士が玉座を守っている。剣を振り上げた姿勢のまま凍っている。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '氷漬けの誓い', description: '凍った騎士の胸元にあった忠誠の証。まだ冷たい', sellPrice: 11 }

### 透き通った × 騎士
- **ID**: e_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 影の薄い騎士が玉座を守っている。いるのに気づかなかった。私心のない清廉の番人だ。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '透明な忠義', description: '誰にも気づかれず守り続けた騎士の気配。瓶に入っている', sellPrice: 10 }

### 呪われた × 騎士
- **ID**: e_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 黒い鎧の騎士が玉座を守っている。兜の奥の目が赤い。呪いで鎧から出られないのだ。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 眠い × 騎士
- **ID**: e_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 見張り番の騎士が舟を漕いでいる。槍が傾いている。そっと横を通り抜けた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 騎士
- **ID**: e_orig_knight
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_knight' }
- **text**: 忠実な騎士が玉座を守っている。王がいなくとも、命令は生きている。退く気はない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: e_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 少女の魔女が玉座を守っている。大きな帽子で顔が隠れている。見習いの番人だ。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 魔女
- **ID**: e_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 薬草を煎じる魔女が玉座を守っている。怖い顔だが、近づくと薬を差し出してくれた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 魔女
- **ID**: e_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 炎の魔法で全身を包む魔女が玉座を守っている。怒りの形相。火刑の記憶がまだ燃えている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 魔女
- **ID**: e_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 頑固な老魔女が玉座を守っている。取引以外では口を開かない。交渉の余地すらない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 魔女
- **ID**: e_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鉤鼻に鋭い目の魔女が玉座を守っている。嘘を一言で見抜く。言い訳は通じない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 魔女
- **ID**: e_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 魔力が暴走した魔女が玉座を守っている。呪文が途切れ途切れだ。何が飛んでくるかわからない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 屈強な × 魔女
- **ID**: e_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 杖ではなく拳で殴る魔女が玉座を守っている。腕が太い。魔法より先に拳が飛んでくる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 魔女
- **ID**: e_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 氷の魔法を使う魔女が玉座を守っている。周囲に霜が広がる。王の間が凍りつく。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 魔女
- **ID**: e_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 老いて存在が希薄になった魔女が玉座を守っている。向こうが透けて見える。消えかけの番人だ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '消えゆく魔女の杖', description: '透き通った魔女が置いていった杖。握ると少し温かい', sellPrice: 10 }

### 呪われた × 魔女
- **ID**: e_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 自分の呪いに蝕まれた魔女が玉座を守っている。体の一部が変異している。守護も呪いの一部だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 魔女
- **ID**: e_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 大釜の前でうとうとしている魔女が玉座を守っている。薬がぐつぐつ煮えている。隙だらけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 魔女
- **ID**: e_orig_witch
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_witch' }
- **text**: 忠実な魔女が玉座を守っている。王に仕えた宮廷魔術師だ。主がいなくても呪いは解かない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: e_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 子供が王冠をかぶって玉座に座っている。足が届かない。「ここはぼくのだ」と言う。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 優しい × 王
- **ID**: e_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 質素な衣の王が玉座を守っている。手が荒れている。「お前が次の王か」と微笑んだ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '王の握手', description: '荒れた手で握手された記憶。温かい', sellPrice: 10 }

### 燃え盛る × 王
- **ID**: e_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 炎の冠を戴く王が玉座を守っている。怒りで玉座が燃えている。国もろとも焼くつもりだ。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 王
- **ID**: e_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 石の玉座に座り微動だにしない王が守っている。法を一言で下す。覆すことはできない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 鋭い × 王
- **ID**: e_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鷹のような目の王が玉座を守っている。何も見逃さない。嘘をついたらすぐに見破られる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 王
- **ID**: e_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 王冠が歪み、衣は破れ、目は虚ろな王が玉座に崩れている。守っているのではない。しがみついている。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '歪んだ王冠', description: '壊れた王がかぶっていた冠。戻しようがない', sellPrice: 15 }

### 屈強な × 王
- **ID**: e_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 戦士王が玉座を守っている。背中に傷がない。力で統べる覇王だ。突破は難しい。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 王
- **ID**: e_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 氷の玉座に座る北の王が守っている。吐く言葉が白い。感情を殺した凍りついた表情だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 王
- **ID**: e_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が玉座を守っている。臣下は見ないふりをしていた。幽霊王だ。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '幽霊王の印', description: '透き通った王の指から抜けた指輪。はめると指が透ける', sellPrice: 12 }

### 呪われた × 王
- **ID**: e_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 触れたものが金になる王が玉座を守っている。食事もできない。玉座が黄金に輝いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 王
- **ID**: e_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 王が玉座で居眠りしている。側近がいないから起こす者もいない。そっと通り過ぎた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 王
- **ID**: e_orig_king
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_king' }
- **text**: 忠実な王が自ら玉座を守っている。衛兵はもういない。王は最後の番人だ。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '王の覚悟', description: '王が置いていった手紙。一言だけ書いてある', sellPrice: 14 }

---

## 亡霊

### 小さな × 亡霊
- **ID**: e_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 子供の亡霊が玉座を守っている。笑い声だけが響く。すり抜けようとしたら頬が冷たくなった。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: e_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 穏やかな亡霊が玉座を守っている。微笑んで道を譲る。先祖の霊が見守っているのだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: e_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 炎に焼かれた亡霊が玉座を守っている。怨念が炎になった。王を恨んでいるのか、守っているのか。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 亡霊
- **ID**: e_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 同じ場所から動かない亡霊が玉座を守っている。何百年もそこに立っている。祓えない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 亡霊
- **ID**: e_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: こちらの罪を見透かす目の亡霊が玉座を守っている。視線が痛い。玉座に近づく資格を問われる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 亡霊
- **ID**: e_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 自分が何者か忘れた亡霊が玉座を守っている。輪郭が溶けている。何を守っているかも覚えていない。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '忘却の残滓', description: '壊れた亡霊が落とした記憶の欠片。何の記憶かわからない', sellPrice: 8 }

### 屈強な × 亡霊
- **ID**: e_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 鎧武者の亡霊が玉座を守っている。死んで枷が外れた。生前より強い。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: e_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 冷気を纏った亡霊が玉座を守っている。通った跡に霜が残る。凍死者の霊だ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 亡霊
- **ID**: e_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 成仏しかけの亡霊が玉座を守っている。一言だけ伝えたいらしい。口が動くが声が聞こえない。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '最期の言葉', description: '亡霊が伝えたかった一言。文字になって瓶に残った', sellPrice: 12 }

### 呪われた × 亡霊
- **ID**: e_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪いで成仏できない亡霊が玉座を守っている。苦しみの表情だ。守護ではなく、罰だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 亡霊
- **ID**: e_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: うとうとしている亡霊が玉座を守っている。存在感が薄れたり戻ったりする。隙だらけだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 忠実な × 亡霊
- **ID**: e_orig_ghost
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_ghost' }
- **text**: 忠実な亡霊が玉座を守っている。死んでも持ち場を離れなかった兵だ。敬意を払って通る。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '不滅の忠誠', description: '亡霊の衛兵が残した徽章。握ると使命感が湧く', sellPrice: 14 }

---

## 鏡

### 小さな × 鏡
- **ID**: e_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 手鏡が玉座の上に置いてある。覗くと自分の目だけが映る。守っているのは映った者自身だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 鏡
- **ID**: e_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 映った者を少しだけ美しく見せる鏡が玉座の前にある。覗くと勇気が湧く。通れそうだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: e_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 鏡面に炎が映っている。だが周囲に火はない。鏡の中が燃えている。玉座も鏡の中で燃えている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 鏡
- **ID**: e_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 何をしても割れない鏡が玉座の前に立つ。盾のように玉座を守っている。傷もつかない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 鏡
- **ID**: e_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 割れた鏡の破片が玉座の周りに散乱している。縁が刃のように鋭い。裸足では歩けない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 鏡
- **ID**: e_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: ひび割れた鏡が玉座を守っている。映る顔が何人にも分裂している。どれが本物かわからない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 鏡
- **ID**: e_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 人の背丈を超える巨大な姿見が玉座を守っている。映った自分が睨んでいる。通してくれない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 鏡
- **ID**: e_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 霜に覆われた鏡が玉座を守っている。かろうじて映る影が動いている。こちらの動きではない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 鏡
- **ID**: e_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透明な鏡が玉座の前にある。窓のように向こうが見えるが、通り抜けられない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 呪われた × 鏡
- **ID**: e_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が玉座を守っている。覗いた者の姿が鏡に残る。中で影たちが蠢いている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 鏡
- **ID**: e_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: ぼんやり曇った鏡が玉座を守っている。映像が遅れて映る。覗くと眠くなってくる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 忠実な × 鏡
- **ID**: e_orig_mirror
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_mirror' }
- **text**: 忠実な鏡が玉座を守っている。王の姿だけをずっと映し続けている。王はもういないのに。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '王を映す鏡', description: '覗くといなくなった王の姿が見える。表情は穏やかだ', sellPrice: 14 }

---

## 人形

### 小さな × 人形
- **ID**: e_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 指人形ほどの人形が玉座の肘掛けに立っている。誰かが落としたものだ。守護とは呼べない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 人形
- **ID**: e_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: くたくたの人形が玉座に座っている。笑顔が縫ってある。誰かの大切なものだったらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 人形
- **ID**: e_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃える藁人形が玉座を守っている。呪詛の焚き上げだ。煙が王の間を満たす。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 人形
- **ID**: e_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 木彫りの人形が玉座を守っている。関節がない。表情もない。おもちゃの兵隊だ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 人形
- **ID**: e_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 関節が刃になった操り人形が玉座を守っている。糸が見えない。優雅だが不気味だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 人形
- **ID**: e_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 首がもげかけた人形が玉座を守っている。残った片目がこちらを追う。薄気味が悪い。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 人形
- **ID**: e_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 等身大のゴーレムが玉座を守っている。命令を待って立っている。命令者はもういない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 人形
- **ID**: e_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 氷でできた人形が玉座を守っている。繊細な造形だ。溶けたら二度と作れない守護者。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 透き通った × 人形
- **ID**: e_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 硝子の人形が玉座を守っている。中に液体が揺れている。魂の容器だ。まだ空だ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '空の器', description: '透き通った人形の欠片。中に何かを入れられそうだ', sellPrice: 10 }

### 呪われた × 人形
- **ID**: e_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が玉座を守っている。夜になると位置が変わるらしい。今は朝だ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 眠い × 人形
- **ID**: e_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 目を閉じた人形が玉座に座っている。横にすると目が閉じるあの仕掛けだ。静かな番人。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 忠実な × 人形
- **ID**: e_orig_doll
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_doll' }
- **text**: 忠実な人形が玉座を守っている。命じた者はもういない。命令だけが人形を動かし続ける。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: e_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 霧雨が玉座を濡らしている。天井があるのに降っている。不思議な守護だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 雨
- **ID**: e_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 慈雨が玉座に降りそそぐ。渇いた王の間を潤す。傷が洗い清められる気がする。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '慈雨の雫', description: '優しい雨の一滴を瓶に入れた。傷に触れると沁みる', sellPrice: 9 }

### 燃え盛る × 雨
- **ID**: e_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 火の雨が王の間に降っている。空から灼熱の滴。玉座が焦げていく。守護ではない。天災だ。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 雨
- **ID**: e_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 雹が玉座を守っている。石のような氷の粒が叩きつける。頭を庇って走り抜けた。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 鋭い × 雨
- **ID**: e_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 針のような雨が玉座の周囲に降っている。肌に刺さる。王の間が処刑場のようだ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 雨
- **ID**: e_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 途切れ途切れに降る雨が玉座を濡らしている。リズムがおかしい。上に向かう雫もある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 屈強な × 雨
- **ID**: e_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 豪雨が王の間を満たしている。滝のような水量だ。玉座は水に沈みかけている。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 雨
- **ID**: e_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍雨が玉座を氷の膜で覆っていく。触れたものが凍る。王の間が氷の鏡になる。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 雨
- **ID**: e_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 異常なほど澄んだ雨が玉座に降る。濡れた跡が光る。穢れを洗い流す浄化の雨だ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '浄雨の結晶', description: '透き通った雨が結晶化したもの。光に翳すと虹になる', sellPrice: 12 }

### 呪われた × 雨
- **ID**: e_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が玉座を守っている。浴びると足が動かなくなる。根が生えたように立ち尽くす。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 雨
- **ID**: e_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 静かな雨音が王の間に響く。子守唄のようだ。玉座の前で座り込んでしまった。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 忠実な × 雨
- **ID**: e_orig_rain
- **conditions**: { s1: 'orig_e_mod', s2: 'subj_rain' }
- **text**: 忠実な雨が玉座を守っている。王がいなくなった日からずっと降り続けている。止む気配はない。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 衛兵（元主語）

### 忠実な × 衛兵（元テキスト）
- **ID**: e_orig_orig
- **conditions**: { s1: 'orig_e_mod', s2: 'orig_e_subj' }
- **text**: 忠実な衛兵が玉座を守っている。王がいなくても、持ち場を離れない。いつか王は戻ると信じている。
- **damage**: 2
- **quill**: 2
- **reward**: なし

### 小さな × 衛兵
- **ID**: e_small_orig
- **conditions**: { s1: 'mod_small', s2: 'orig_e_subj' }
- **text**: 小さな衛兵が玉座を守っている。子供だ。槍が重くて傾いている。それでも立っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 衛兵
- **ID**: e_gentle_orig
- **conditions**: { s1: 'mod_gentle', s2: 'orig_e_subj' }
- **text**: 優しい衛兵が玉座を守っている。「王は留守だ。だが入れてやれない」と申し訳なさそうに言う。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 衛兵
- **ID**: e_fire_orig
- **conditions**: { s1: 'mod_fire', s2: 'orig_e_subj' }
- **text**: 炎に包まれた衛兵が玉座を守っている。鎧が赤熱している。それでも持ち場を離れない。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 衛兵
- **ID**: e_hard_orig
- **conditions**: { s1: 'mod_hard', s2: 'orig_e_subj' }
- **text**: 分厚い鎧の衛兵が玉座を守っている。微動だにしない。石像と区別がつかない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 鋭い × 衛兵
- **ID**: e_sharp_orig
- **conditions**: { s1: 'mod_sharp', s2: 'orig_e_subj' }
- **text**: 鋭い目の衛兵が玉座を守っている。物音ひとつ見逃さない。槍の切っ先がこちらを向く。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 衛兵
- **ID**: e_broken_orig
- **conditions**: { s1: 'mod_broken', s2: 'orig_e_subj' }
- **text**: 鎧がへこみ、槍は折れた衛兵が玉座を守っている。目に光がない。それでも立っている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '衛兵の折れ槍', description: '壊れた衛兵が握っていた槍の穂先。忠義の重さがある', sellPrice: 11 }

### 屈強な × 衛兵
- **ID**: e_mighty_orig
- **conditions**: { s1: 'mod_mighty', s2: 'orig_e_subj' }
- **text**: 巨体の衛兵が玉座を守っている。地面が軋む。力で突破は不可能だ。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 衛兵
- **ID**: e_frozen_orig
- **conditions**: { s1: 'mod_frozen', s2: 'orig_e_subj' }
- **text**: 氷に閉じ込められた衛兵が玉座を守っている。槍を構えた姿勢のまま凍っている。忠義も凍ったままだ。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '凍った忠義', description: '衛兵の鎧から剥がした霜。握ると使命感が伝わる', sellPrice: 9 }

### 透き通った × 衛兵
- **ID**: e_clear_orig
- **conditions**: { s1: 'mod_clear', s2: 'orig_e_subj' }
- **text**: 透き通った衛兵が玉座を守っている。忠義だけが透けて見える。私心のない番人だ。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '透明な忠義', description: '透き通った衛兵の気配。瓶に入れると薄く光る', sellPrice: 12 }

### 呪われた × 衛兵
- **ID**: e_cursed_orig
- **conditions**: { s1: 'mod_cursed', s2: 'orig_e_subj' }
- **text**: 呪われた衛兵が玉座を守っている。目が赤い。呪いで交代も退去もできないのだ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 衛兵
- **ID**: e_sleepy_orig
- **conditions**: { s1: 'mod_sleepy', s2: 'orig_e_subj' }
- **text**: 衛兵が玉座の横で舟を漕いでいる。槍が傾き、兜がずれている。そっと通り抜けた。
- **damage**: 0
- **quill**: 5
- **reward**: なし
