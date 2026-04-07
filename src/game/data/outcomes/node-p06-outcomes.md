# ノードP06「森の奥」Outcome一覧

- **文構成**: [mod][subj]が 森に 待っている
- **可変スロット**: mod + subj
- **固定**: 目的語「森」(に格) + 述語「待っている」
- **ノードの文脈**: 薄暗い森の奥。何かがこちらを待っている。出迎えか罠か
- **格歪みなし**（「待っている」はに格自動詞、歪み対象外）
- **プール**: 序盤 | AP: 3
- **全187パターン**: 11 mod × 17 subj

---

## 子猫

### 小さな × 子猫
- **ID**: p06_small_kitten
- **conditions**: { s1: 'mod_small', s2: 'subj_kitten' }
- **text**: 親指ほどの子猫が森に待っている。木の根の隙間から、鈴のような声が聞こえる。こちらを見上げて鳴いた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '木の根の子猫', description: '親指サイズ。ポケットの中で喉を鳴らしている', sellPrice: 10 }

### 優しい × 子猫
- **ID**: p06_gentle_kitten
- **conditions**: { s1: 'mod_gentle', s2: 'subj_kitten' }
- **text**: 優しい子猫が森に待っている。足元に擦り寄り、先へ歩いてはこちらを振り返る。道案内らしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 子猫
- **ID**: p06_fire_kitten
- **conditions**: { s1: 'mod_fire', s2: 'subj_kitten' }
- **text**: 燃え盛る子猫が森に待っている。炎をまとった猫。周囲の下草が焦げている。本猫は欠伸をしている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 子猫
- **ID**: p06_hard_kitten
- **conditions**: { s1: 'mod_hard', s2: 'subj_kitten' }
- **text**: 堅い子猫が森に待っている。陶器の招き猫が切り株の上に鎮座している。目だけがこちらを追う。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 子猫
- **ID**: p06_sharp_kitten
- **conditions**: { s1: 'mod_sharp', s2: 'subj_kitten' }
- **text**: 鋭い子猫が森に待っている。硝子の破片のような爪と歯。茂みから飛びかかってきた。手の甲に深い引っ掻き傷。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 子猫
- **ID**: p06_broken_kitten
- **conditions**: { s1: 'mod_broken', s2: 'subj_kitten' }
- **text**: 壊れた子猫が森に待っている。ぬいぐるみだ。木の枝に引っかかって綿が出ている。誰かが落としたのだろう。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '森の落とし物', description: '綿の出たぬいぐるみ。苔がうっすらついている', sellPrice: 5 }

### 屈強な × 子猫
- **ID**: p06_mighty_kitten
- **conditions**: { s1: 'mod_mighty', s2: 'subj_kitten' }
- **text**: 屈強な子猫が森に待っている。子猫サイズで虎の体格。低い唸り声が森に響く。この森の主らしい。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '森の主の髭', description: '虎のような子猫の髭。ぴんと張っている', sellPrice: 7 }

### 凍てついた × 子猫
- **ID**: p06_frozen_kitten
- **conditions**: { s1: 'mod_frozen', s2: 'subj_kitten' }
- **text**: 凍てついた子猫が森に待っている。氷の彫刻。中でまだ息をしている。手で温めると、薄く目を開けた。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '溶けかけの氷猫', description: '温もりで少しだけ溶けた。まだ冷たい', sellPrice: 8 }

### 透き通った × 子猫
- **ID**: p06_clear_kitten
- **conditions**: { s1: 'mod_clear', s2: 'subj_kitten' }
- **text**: 透き通った子猫が森に待っている。硝子の猫。心臓が透けて見える。木漏れ日を受けて虹色に光った。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '硝子猫の欠片', description: '虹色に光る破片。心臓の一部かもしれない', sellPrice: 12 }

### 呪われた × 子猫
- **ID**: p06_cursed_kitten
- **conditions**: { s1: 'mod_cursed', s2: 'subj_kitten' }
- **text**: 呪われた子猫が森に待っている。一度抱き上げたら下ろせない。振り払っても膝の上に戻ってくる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 眠い × 子猫
- **ID**: p06_sleepy_kitten
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_kitten' }
- **text**: 眠い子猫が森に待っている。落ち葉の上で丸くなっている。待っていたというより、ここで寝ていただけだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蛇

### 小さな × 蛇
- **ID**: p06_small_snake
- **conditions**: { s1: 'mod_small', s2: 'subj_snake' }
- **text**: 小さな蛇が森に待っている。指ほどの蛇が枝に巻きついて、舌をちろちろ出している。道を示すように頭を向けた。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 蛇
- **ID**: p06_gentle_snake
- **conditions**: { s1: 'mod_gentle', s2: 'subj_snake' }
- **text**: 優しい蛇が森に待っている。腕に巻きついて体温を分けてくれる。森の冷気が和らいだ。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '蛇の抜け鱗', description: '温かみが残る鱗。お守りになりそうだ', sellPrice: 6 }

### 燃え盛る × 蛇
- **ID**: p06_fire_snake
- **conditions**: { s1: 'mod_fire', s2: 'subj_snake' }
- **text**: 燃え盛る蛇が森に待っている。這った跡が焦げている。木の根を縫うように近づいてくる。足元の落ち葉に火がついた。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 蛇
- **ID**: p06_hard_snake
- **conditions**: { s1: 'mod_hard', s2: 'subj_snake' }
- **text**: 堅い蛇が森に待っている。鉄の鱗を持つ蛇。木の幹に巻きついて動かない。噛まれたら歯が折れるのはこちらだ。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 蛇
- **ID**: p06_sharp_snake
- **conditions**: { s1: 'mod_sharp', s2: 'subj_snake' }
- **text**: 鋭い蛇が森に待っている。牙に猛毒。落ち葉の下から一瞬で飛び出してきた。足首に灼けるような痛み。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 壊れた × 蛇
- **ID**: p06_broken_snake
- **conditions**: { s1: 'mod_broken', s2: 'subj_snake' }
- **text**: 壊れた蛇が森に待っている。脱皮の途中で力尽きている。古い皮が半分残ったまま、木の根元で動けずにいる。
- **damage**: 0
- **quill**: 4
- **reward**: { name: '蛇の脱け殻', description: '半分しかない。もう半分は蛇が着たままだ', sellPrice: 6 }

### 屈強な × 蛇
- **ID**: p06_mighty_snake
- **conditions**: { s1: 'mod_mighty', s2: 'subj_snake' }
- **text**: 屈強な蛇が森に待っている。大蛇。胴回りが幹ほどある。とぐろの中から、こちらを見下ろしている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 蛇
- **ID**: p06_frozen_snake
- **conditions**: { s1: 'mod_frozen', s2: 'subj_snake' }
- **text**: 凍てついた蛇が森に待っている。氷の中で螺旋を描いて固まっている。森の空気まで冷たい。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 透き通った × 蛇
- **ID**: p06_clear_snake
- **conditions**: { s1: 'mod_clear', s2: 'subj_snake' }
- **text**: 透き通った蛇が森に待っている。飲み込んだ木の実が体内に透けて見える。骨格が美しい。害意はない。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '透明な蛇鱗', description: '光に翳すと虹が見える。蛇の形見', sellPrice: 10 }

### 呪われた × 蛇
- **ID**: p06_cursed_snake
- **conditions**: { s1: 'mod_cursed', s2: 'subj_snake' }
- **text**: 呪われた蛇が森に待っている。脱皮するたびに大きくなる蛇。森の木を一本ずつ締め上げている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 蛇
- **ID**: p06_sleepy_snake
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_snake' }
- **text**: 眠い蛇が森に待っている。とぐろを巻いて目を閉じている。踏まなければ無害だ。そっと跨いだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 竜

### 小さな × 竜
- **ID**: p06_small_dragon
- **conditions**: { s1: 'mod_small', s2: 'subj_dragon' }
- **text**: 小さな竜が森に待っている。手のひらサイズ。枝の上で翼を広げて威嚇しているが、雀ほどしかない。小さな火を噴いた。葉が一枚焦げた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '極小の竜鱗', description: '爪の先ほどの鱗。ほんのり温かい', sellPrice: 10 }

### 優しい × 竜
- **ID**: p06_gentle_dragon
- **conditions**: { s1: 'mod_gentle', s2: 'subj_dragon' }
- **text**: 優しい竜が森に待っている。穏やかな老竜。翼を畳んで木の下に座っている。森の番人のように旅人を見守っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 竜
- **ID**: p06_fire_dragon
- **conditions**: { s1: 'mod_fire', s2: 'subj_dragon' }
- **text**: 燃え盛る竜が森に待っている。全身が業火。近づくだけで髪が焦げる。森が燃え始めている。逃げるしかない。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 竜
- **ID**: p06_hard_dragon
- **conditions**: { s1: 'mod_hard', s2: 'subj_dragon' }
- **text**: 堅い竜が森に待っている。鱗が城壁のように厚い。道を塞ぐように横たわっている。どかそうにも押せない。遠回りする。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 竜
- **ID**: p06_sharp_dragon
- **conditions**: { s1: 'mod_sharp', s2: 'subj_dragon' }
- **text**: 鋭い竜が森に待っている。金色の目がこちらを捉えた瞬間、爪が振り下ろされた。木が三本、断面を晒して倒れた。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 壊れた × 竜
- **ID**: p06_broken_dragon
- **conditions**: { s1: 'mod_broken', s2: 'subj_dragon' }
- **text**: 壊れた竜が森に待っている。翼は折れ、鱗は剥がれ、火も吐けない。森の奥で静かにこちらを見ている。目だけが生きている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '剥がれた竜鱗', description: '古びて色褪せている。それでも硬い', sellPrice: 8 }

### 屈強な × 竜
- **ID**: p06_mighty_dragon
- **conditions**: { s1: 'mod_mighty', s2: 'subj_dragon' }
- **text**: 屈強な竜が森に待っている。山のような巨体。翼を広げると木々の上から空が消える。待たれていた、という事実が恐ろしい。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 凍てついた × 竜
- **ID**: p06_frozen_dragon
- **conditions**: { s1: 'mod_frozen', s2: 'subj_dragon' }
- **text**: 凍てついた竜が森に待っている。白い竜。吐息が吹雪になる。森の半分が霜に覆われている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 透き通った × 竜
- **ID**: p06_clear_dragon
- **conditions**: { s1: 'mod_clear', s2: 'subj_dragon' }
- **text**: 透き通った竜が森に待っている。水晶でできた竜。体を通して森の景色が歪んで見える。美しいが、踏み込めない。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '水晶竜の涙', description: '竜の体から零れた水晶の雫。光を集める', sellPrice: 15 }

### 呪われた × 竜
- **ID**: p06_cursed_dragon
- **conditions**: { s1: 'mod_cursed', s2: 'subj_dragon' }
- **text**: 呪われた竜が森に待っている。かつて守護竜だった。今は目に理性がない。森ごと呪いに沈んでいく。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 眠い × 竜
- **ID**: p06_sleepy_dragon
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_dragon' }
- **text**: 眠い竜が森に待っている。木々の間でいびきをかいている。地面が揺れる。起こさなければ通れる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 蝶

### 小さな × 蝶
- **ID**: p06_small_butterfly
- **conditions**: { s1: 'mod_small', s2: 'subj_butterfly' }
- **text**: 小さな蝶が森に待っている。花びらと見間違うほど小さい。木漏れ日の中を音もなく舞っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 蝶
- **ID**: p06_gentle_butterfly
- **conditions**: { s1: 'mod_gentle', s2: 'subj_butterfly' }
- **text**: 優しい蝶が森に待っている。指先に止まって離れない。羽の模様が笑顔に見える。道を示すように先へ飛んだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 蝶
- **ID**: p06_fire_butterfly
- **conditions**: { s1: 'mod_fire', s2: 'subj_butterfly' }
- **text**: 燃え盛る蝶が森に待っている。羽が炎でできている。飛んだ跡に火の粉が散り、落ち葉が燻る。美しいが危ない。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '蝶の火の粉', description: '掌で揺れる小さな炎。蝶の羽の破片', sellPrice: 8 }

### 堅い × 蝶
- **ID**: p06_hard_butterfly
- **conditions**: { s1: 'mod_hard', s2: 'subj_butterfly' }
- **text**: 堅い蝶が森に待っている。金属の羽。飛ぶたびに金属音が森に響く。木の幹にぶつかっても羽は無傷だ。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 蝶
- **ID**: p06_sharp_butterfly
- **conditions**: { s1: 'mod_sharp', s2: 'subj_butterfly' }
- **text**: 鋭い蝶が森に待っている。羽の縁が刃。すれ違っただけで頬が切れた。血が一筋流れる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 蝶
- **ID**: p06_broken_butterfly
- **conditions**: { s1: 'mod_broken', s2: 'subj_butterfly' }
- **text**: 壊れた蝶が森に待っている。片羽がちぎれて、螺旋を描きながら落ちていく。地面に着く前に拾った。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '片羽の蝶', description: '残った方の羽がまだ微かに動いている', sellPrice: 7 }

### 屈強な × 蝶
- **ID**: p06_mighty_butterfly
- **conditions**: { s1: 'mod_mighty', s2: 'subj_butterfly' }
- **text**: 屈強な蝶が森に待っている。羽ばたきが風を起こす。枝が揺れ、木の葉が渦を巻く。蝶のくせに威圧的だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 蝶
- **ID**: p06_frozen_butterfly
- **conditions**: { s1: 'mod_frozen', s2: 'subj_butterfly' }
- **text**: 凍てついた蝶が森に待っている。霜の結晶が羽の形をしている。木漏れ日に当たっても溶けない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 透き通った × 蝶
- **ID**: p06_clear_butterfly
- **conditions**: { s1: 'mod_clear', s2: 'subj_butterfly' }
- **text**: 透き通った蝶が森に待っている。羽が透明で、止まると景色に溶けて見えなくなる。気配だけが残る。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 蝶
- **ID**: p06_cursed_butterfly
- **conditions**: { s1: 'mod_cursed', s2: 'subj_butterfly' }
- **text**: 呪われた蝶が森に待っている。追いかけると道に迷う。気づけば見知らぬ場所に立っていた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 蝶
- **ID**: p06_sleepy_butterfly
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_butterfly' }
- **text**: 眠い蝶が森に待っている。花の上で羽を閉じたまま動かない。起こしても隣の花に移るだけだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

## 風

### 小さな × 風
- **ID**: p06_small_wind
- **conditions**: { s1: 'mod_small', s2: 'subj_wind' }
- **text**: 小さな風が森に待っている。頬を撫でるそよ風。木の葉が少しだけ揺れる。歓迎されている気がした——いや、風が吹いただけだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 風
- **ID**: p06_gentle_wind
- **conditions**: { s1: 'mod_gentle', s2: 'subj_wind' }
- **text**: 優しい風が森に待っている。温かい追い風が背中を押す。花の匂いがする。森が迎え入れてくれている。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 風
- **ID**: p06_fire_wind
- **conditions**: { s1: 'mod_fire', s2: 'subj_wind' }
- **text**: 燃え盛る風が森に待っている。熱風が吹き抜ける。触れた葉が焦げ、木の幹が煙を上げている。息ができない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 風
- **ID**: p06_hard_wind
- **conditions**: { s1: 'mod_hard', s2: 'subj_wind' }
- **text**: 堅い風が森に待っている。同じ方向にだけ吹く頑固な風。何百年も同じ木の葉を同じ場所に積んでいる。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '風の積もった葉', description: '何百年も同じ場所に積まれた葉。化石のように硬い', sellPrice: 6 }

### 鋭い × 風
- **ID**: p06_sharp_wind
- **conditions**: { s1: 'mod_sharp', s2: 'subj_wind' }
- **text**: 鋭い風が森に待っている。真空の刃が木々の間を走る。通り過ぎた跡の枝が切れている。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 風
- **ID**: p06_broken_wind
- **conditions**: { s1: 'mod_broken', s2: 'subj_wind' }
- **text**: 壊れた風が森に待っている。方向が定まらない乱気流。渦を巻いては散る。落ち葉が不規則に舞い上がる。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 屈強な × 風
- **ID**: p06_mighty_wind
- **conditions**: { s1: 'mod_mighty', s2: 'subj_wind' }
- **text**: 屈強な風が森に待っている。すべてを一方向に押し流す暴風。木が軋み、立っていられない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 風
- **ID**: p06_frozen_wind
- **conditions**: { s1: 'mod_frozen', s2: 'subj_wind' }
- **text**: 凍てついた風が森に待っている。吹雪を伴う凍風。まつ毛が凍り、視界が白くなる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 風
- **ID**: p06_clear_wind
- **conditions**: { s1: 'mod_clear', s2: 'subj_wind' }
- **text**: 透き通った風が森に待っている。空気が澄み渡り、森の奥まで見通せる。どの道が安全か、一目でわかった。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '澄んだ空気の瓶', description: '蓋を開けると一瞬だけ視界が晴れる', sellPrice: 10 }

### 呪われた × 風
- **ID**: p06_cursed_wind
- **conditions**: { s1: 'mod_cursed', s2: 'subj_wind' }
- **text**: 呪われた風が森に待っている。吹かれた途端、来た道がわからなくなった。帰り道を忘れる風だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 風
- **ID**: p06_sleepy_wind
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_wind' }
- **text**: 眠い風が森に待っている。生温い微風。意識がぼんやりする。木の根に腰掛けたまま、うとうとしかけた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 炎

### 小さな × 炎
- **ID**: p06_small_flame
- **conditions**: { s1: 'mod_small', s2: 'subj_flame' }
- **text**: 小さな炎が森に待っている。蝋燭ほどの火が宙に浮いている。指で摘めそうだ。道標のように奥を照らしている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 炎
- **ID**: p06_gentle_flame
- **conditions**: { s1: 'mod_gentle', s2: 'subj_flame' }
- **text**: 優しい炎が森に待っている。暖炉のような火が空中に揺れている。冷えた指先を温めてくれた。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 炎
- **ID**: p06_fire_flame
- **conditions**: { s1: 'mod_fire', s2: 'subj_flame' }
- **text**: 燃え盛る炎が森に待っている。制御不能の大火だ。木々が次々と燃え上がる。森が悲鳴のように軋んでいる。
- **damage**: 5
- **quill**: 1
- **reward**: なし

### 堅い × 炎
- **ID**: p06_hard_flame
- **conditions**: { s1: 'mod_hard', s2: 'subj_flame' }
- **text**: 堅い炎が森に待っている。消えない炎。水をかけても風を当てても揺らがない。仕方なく避けて通る。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 炎
- **ID**: p06_sharp_flame
- **conditions**: { s1: 'mod_sharp', s2: 'subj_flame' }
- **text**: 鋭い炎が森に待っている。触れたものの形を正確に切り取る炎。落ち葉が燃えると、葉脈だけが残った。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '炎の葉脈', description: '葉の形をした焦げ跡。模様が精緻', sellPrice: 8 }

### 壊れた × 炎
- **ID**: p06_broken_flame
- **conditions**: { s1: 'mod_broken', s2: 'subj_flame' }
- **text**: 壊れた炎が森に待っている。色がおかしい。緑と紫に明滅している。温かくない。触れても何も起きない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 炎
- **ID**: p06_mighty_flame
- **conditions**: { s1: 'mod_mighty', s2: 'subj_flame' }
- **text**: 屈強な炎が森に待っている。火柱が天を衝いている。周囲の空気が渦を巻く。森を焼き尽くす勢いだ。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 凍てついた × 炎
- **ID**: p06_frozen_flame
- **conditions**: { s1: 'mod_frozen', s2: 'subj_flame' }
- **text**: 凍てついた炎が森に待っている。燃えているのに冷たい。青白い光が霜を纏っている。不思議と怖くない。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 透き通った × 炎
- **ID**: p06_clear_flame
- **conditions**: { s1: 'mod_clear', s2: 'subj_flame' }
- **text**: 透き通った炎が森に待っている。ほぼ見えない。空気の揺らぎだけで存在がわかる。穢れを焼く浄化の火だ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '浄化の灰', description: '透明な炎が残した灰。手に取ると心が凪ぐ', sellPrice: 12 }

### 呪われた × 炎
- **ID**: p06_cursed_flame
- **conditions**: { s1: 'mod_cursed', s2: 'subj_flame' }
- **text**: 呪われた炎が森に待っている。燃やしたものの形を覚えて再現する。炎の中に、かつての森の姿が見える。
- **damage**: 3
- **quill**: 5
- **reward**: { name: '記憶の炎', description: '消えない小さな火。中に知らない風景が映っている', sellPrice: 10 }

### 眠い × 炎
- **ID**: p06_sleepy_flame
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_flame' }
- **text**: 眠い炎が森に待っている。今にも消えそうな熾火。赤く明滅している。見つめていると意識が遠のく。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 氷

### 小さな × 氷
- **ID**: p06_small_ice
- **conditions**: { s1: 'mod_small', s2: 'subj_ice' }
- **text**: 小さな氷が森に待っている。掌に収まる氷の欠片が枝に下がっている。すぐに溶けてしまいそうだ。
- **damage**: 0
- **quill**: 3
- **reward**: なし

### 優しい × 氷
- **ID**: p06_gentle_ice
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ice' }
- **text**: 優しい氷が森に待っている。冷たいが痛くない。額に当てると旅の疲れが引いていく。
- **damage**: -1
- **quill**: 5
- **reward**: なし

### 燃え盛る × 氷
- **ID**: p06_fire_ice
- **conditions**: { s1: 'mod_fire', s2: 'subj_ice' }
- **text**: 燃え盛る氷が森に待っている。炎を放つ氷。触れると凍傷と火傷を同時に負う。矛盾が森を歪めている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 氷
- **ID**: p06_hard_ice
- **conditions**: { s1: 'mod_hard', s2: 'subj_ice' }
- **text**: 堅い氷が森に待っている。万年氷が道を塞いでいる。鉄の刃が欠けるほど硬い。回り道を探す。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 氷
- **ID**: p06_sharp_ice
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ice' }
- **text**: 鋭い氷が森に待っている。氷柱が剣のように地面から突き出している。足を踏み入れた途端、靴底が裂けた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 氷
- **ID**: p06_broken_ice
- **conditions**: { s1: 'mod_broken', s2: 'subj_ice' }
- **text**: 壊れた氷が森に待っている。ひび割れた氷が散乱している。踏むたびに割れて、下から暗い水が滲む。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 屈強な × 氷
- **ID**: p06_mighty_ice
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ice' }
- **text**: 屈強な氷が森に待っている。山のような氷塊。数百年溶けていない。森の半分を呑み込んでいる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 氷
- **ID**: p06_frozen_ice
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ice' }
- **text**: 凍てついた氷が森に待っている。氷のさらに冷たい状態。近づくだけで息が結晶になって落ちる。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 透き通った × 氷
- **ID**: p06_clear_ice
- **conditions**: { s1: 'mod_clear', s2: 'subj_ice' }
- **text**: 透き通った氷が森に待っている。完全に透明な氷。あることに気づかず手をついた。冷たい。中に花が閉じ込められている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '花入り氷', description: '溶けない氷の中に、見たことのない花が咲いている', sellPrice: 12 }

### 呪われた × 氷
- **ID**: p06_cursed_ice
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ice' }
- **text**: 呪われた氷が森に待っている。溶けない呪いの氷。周囲に永遠の冬を広げている。森の木が凍りついていく。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 眠い × 氷
- **ID**: p06_sleepy_ice
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ice' }
- **text**: 眠い氷が森に待っている。ゆっくり溶けていく氷。しずくの音が森に響く。子守唄のようだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 影

### 小さな × 影
- **ID**: p06_small_shadow
- **conditions**: { s1: 'mod_small', s2: 'subj_shadow' }
- **text**: 小さな影が森に待っている。足元の小さな黒い染み。何の影かわからない。森の奥へ滑るように動いた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 優しい × 影
- **ID**: p06_gentle_shadow
- **conditions**: { s1: 'mod_gentle', s2: 'subj_shadow' }
- **text**: 優しい影が森に待っている。木陰のような心地よい影が寄り添う。誰かが隣にいるような温かさがある。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 影
- **ID**: p06_fire_shadow
- **conditions**: { s1: 'mod_fire', s2: 'subj_shadow' }
- **text**: 燃え盛る影が森に待っている。影自体が黒い炎で燃えている。触れると灼ける。地面に焦げ跡が広がる。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 影
- **ID**: p06_hard_shadow
- **conditions**: { s1: 'mod_hard', s2: 'subj_shadow' }
- **text**: 堅い影が森に待っている。地面に貼りついた影が壁のように立ち上がっている。通れない。剥がせない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 影
- **ID**: p06_sharp_shadow
- **conditions**: { s1: 'mod_sharp', s2: 'subj_shadow' }
- **text**: 鋭い影が森に待っている。輪郭がくっきりした影。長く伸びてこちらを指している。縁に触れると切れた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 影
- **ID**: p06_broken_shadow
- **conditions**: { s1: 'mod_broken', s2: 'subj_shadow' }
- **text**: 壊れた影が森に待っている。立体的にめくれ上がっている影。平面に戻れない。木の幹に絡みついている。
- **damage**: 1
- **quill**: 5
- **reward**: { name: 'めくれた影の切れ端', description: '黒い布のようだが、影だ。畳めない', sellPrice: 7 }

### 屈強な × 影
- **ID**: p06_mighty_shadow
- **conditions**: { s1: 'mod_mighty', s2: 'subj_shadow' }
- **text**: 屈強な影が森に待っている。本体より遥かに大きい影が、木々を覆い尽くしている。影のほうが森の主に見える。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 影
- **ID**: p06_frozen_shadow
- **conditions**: { s1: 'mod_frozen', s2: 'subj_shadow' }
- **text**: 凍てついた影が森に待っている。地面に張りついて動けない影。本体は去ったのに、影だけが森に残されている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 影
- **ID**: p06_clear_shadow
- **conditions**: { s1: 'mod_clear', s2: 'subj_shadow' }
- **text**: 透き通った影が森に待っている。薄い影が地面に揺れている。半透明で、落ち葉の模様が透けている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 呪われた × 影
- **ID**: p06_cursed_shadow
- **conditions**: { s1: 'mod_cursed', s2: 'subj_shadow' }
- **text**: 呪われた影が森に待っている。触れたものが影になる。足元の草が次々と黒く平たくなっていく。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 眠い × 影
- **ID**: p06_sleepy_shadow
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_shadow' }
- **text**: 眠い影が森に待っている。正午の影のように真下に縮んで動かない。踏んでも反応しない。
- **damage**: 0
- **quill**: 3
- **reward**: なし

---

## 歌

### 小さな × 歌
- **ID**: p06_small_song
- **conditions**: { s1: 'mod_small', s2: 'subj_song' }
- **text**: 小さな歌が森に待っている。鼻歌が木々の間を漂う。誰が歌っているかわからない。旋律だけが残っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌
- **ID**: p06_gentle_song
- **conditions**: { s1: 'mod_gentle', s2: 'subj_song' }
- **text**: 優しい歌が森に待っている。子守唄が木々の間から聞こえる。傷が少し楽になった。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 歌
- **ID**: p06_fire_song
- **conditions**: { s1: 'mod_fire', s2: 'subj_song' }
- **text**: 燃え盛る歌が森に待っている。戦の歌だ。聴くと血が沸く。恐れが消えるが、判断力も鈍る。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 歌
- **ID**: p06_hard_song
- **conditions**: { s1: 'mod_hard', s2: 'subj_song' }
- **text**: 堅い歌が森に待っている。一度始まると止められない歌。他のすべての音を上書きして、森が沈黙する。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '止まらない旋律', description: '耳に残る一節。ふとした時に口ずさんでしまう', sellPrice: 7 }

### 鋭い × 歌
- **ID**: p06_sharp_song
- **conditions**: { s1: 'mod_sharp', s2: 'subj_song' }
- **text**: 鋭い歌が森に待っている。金切り声のような高音。木の葉が震え、耳の奥が痛い。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 歌
- **ID**: p06_broken_song
- **conditions**: { s1: 'mod_broken', s2: 'subj_song' }
- **text**: 壊れた歌が森に待っている。途中で止まる旋律。続きを誰も知らない。途切れた音が梢に引っかかっている。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '途切れた楽譜', description: '最後の小節が破れている。続きは誰も知らない', sellPrice: 7 }

### 屈強な × 歌
- **ID**: p06_mighty_song
- **conditions**: { s1: 'mod_mighty', s2: 'subj_song' }
- **text**: 屈強な歌が森に待っている。大地を震わせる合唱。足元が揺れる。木々が歌に合わせて揺れている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 歌
- **ID**: p06_frozen_song
- **conditions**: { s1: 'mod_frozen', s2: 'subj_song' }
- **text**: 凍てついた歌が森に待っている。聴いた者の動きが止まる歌。空気ごと凍る。足が一瞬動かなくなった。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 透き通った × 歌
- **ID**: p06_clear_song
- **conditions**: { s1: 'mod_clear', s2: 'subj_song' }
- **text**: 透き通った歌が森に待っている。純粋な旋律。雑念が消え、森の道筋が頭の中に浮かんだ。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '澄んだ旋律', description: '頭の中で繰り返される音。聴くたびに道が見える', sellPrice: 15 }

### 呪われた × 歌
- **ID**: p06_cursed_song
- **conditions**: { s1: 'mod_cursed', s2: 'subj_song' }
- **text**: 呪われた歌が森に待っている。一度聴くと頭から離れない。同じ旋律が脳内で繰り返される。正気が削れていく。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 眠い × 歌
- **ID**: p06_sleepy_song
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_song' }
- **text**: 眠い歌が森に待っている。子守唄。抗えない眠気に包まれる。木の根元で目を閉じかけた。
- **damage**: 2
- **quill**: 4
- **reward**: なし

---

## 沈黙

### 小さな × 沈黙
- **ID**: p06_small_silence
- **conditions**: { s1: 'mod_small', s2: 'subj_silence' }
- **text**: 小さな沈黙が森に待っている。ふと、虫の声も鳥の声も途切れた。一瞬の静けさ。すぐに音が戻る。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 沈黙
- **ID**: p06_gentle_silence
- **conditions**: { s1: 'mod_gentle', s2: 'subj_silence' }
- **text**: 優しい沈黙が森に待っている。言葉がなくても通じる安らぎ。森が静かにこちらを受け入れている。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 沈黙
- **ID**: p06_fire_silence
- **conditions**: { s1: 'mod_fire', s2: 'subj_silence' }
- **text**: 燃え盛る沈黙が森に待っている。音がない。だが空気が焦げている。怒りが充満した無音。爆発の前触れだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 堅い × 沈黙
- **ID**: p06_hard_silence
- **conditions**: { s1: 'mod_hard', s2: 'subj_silence' }
- **text**: 堅い沈黙が森に待っている。何を言っても吸い込まれて消える。叫んでも木霊が返らない。音の墓場だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 鋭い × 沈黙
- **ID**: p06_sharp_silence
- **conditions**: { s1: 'mod_sharp', s2: 'subj_silence' }
- **text**: 鋭い沈黙が森に待っている。無音なのに耳が痛い。森の視線が突き刺さっている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 沈黙
- **ID**: p06_broken_silence
- **conditions**: { s1: 'mod_broken', s2: 'subj_silence' }
- **text**: 壊れた沈黙が森に待っている。静寂のはずなのに、どこかからノイズが混じる。何かが漏れ出している。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 屈強な × 沈黙
- **ID**: p06_mighty_silence
- **conditions**: { s1: 'mod_mighty', s2: 'subj_silence' }
- **text**: 屈強な沈黙が森に待っている。圧倒的な無音が場を支配している。声を出すことすら許されない。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 沈黙
- **ID**: p06_frozen_silence
- **conditions**: { s1: 'mod_frozen', s2: 'subj_silence' }
- **text**: 凍てついた沈黙が森に待っている。息も凍る冷たい静けさ。時間が止まったように、何も動かない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 沈黙
- **ID**: p06_clear_silence
- **conditions**: { s1: 'mod_clear', s2: 'subj_silence' }
- **text**: 透き通った沈黙が森に待っている。完全な静寂。泉のように澄んでいる。思考が研ぎ澄まされる。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 沈黙
- **ID**: p06_cursed_silence
- **conditions**: { s1: 'mod_cursed', s2: 'subj_silence' }
- **text**: 呪われた沈黙が森に待っている。口が動くのに声が出ない。声を奪われた。森を出るまで戻らなかった。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 沈黙
- **ID**: p06_sleepy_silence
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_silence' }
- **text**: 眠い沈黙が森に待っている。午後の図書館のような静けさ。意識が遠のく。気づけば木に寄りかかって眠っていた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 騎士

### 小さな × 騎士
- **ID**: p06_small_knight
- **conditions**: { s1: 'mod_small', s2: 'subj_knight' }
- **text**: 小さな騎士が森に待っている。子供の騎士。大きすぎる兜で前が見えていない。木にぶつかりながらこちらに近づいてきた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 騎士
- **ID**: p06_gentle_knight
- **conditions**: { s1: 'mod_gentle', s2: 'subj_knight' }
- **text**: 優しい騎士が森に待っている。剣を収め、跪いて手を差し出す。森の先は危険だと教えてくれた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 騎士
- **ID**: p06_fire_knight
- **conditions**: { s1: 'mod_fire', s2: 'subj_knight' }
- **text**: 燃え盛る騎士が森に待っている。鎧ごと炎に包まれている。それでも歩みを止めない。森が燃える。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 騎士
- **ID**: p06_hard_knight
- **conditions**: { s1: 'mod_hard', s2: 'subj_knight' }
- **text**: 堅い騎士が森に待っている。分厚い鎧で全身を覆っている。道の真ん中に仁王立ち。表情が見えない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 騎士
- **ID**: p06_sharp_knight
- **conditions**: { s1: 'mod_sharp', s2: 'subj_knight' }
- **text**: 鋭い騎士が森に待っている。構えに無駄がない。目が冷たい。待ち伏せだ。剣が閃いた。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 壊れた × 騎士
- **ID**: p06_broken_knight
- **conditions**: { s1: 'mod_broken', s2: 'subj_knight' }
- **text**: 壊れた騎士が森に待っている。鎧はへこみ、剣は折れている。それでも木の根に腰掛けて、ここで誰かを待っている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '折れた剣の柄', description: '握り跡がすり減っている。長い旅の証', sellPrice: 8 }

### 屈強な × 騎士
- **ID**: p06_mighty_knight
- **conditions**: { s1: 'mod_mighty', s2: 'subj_knight' }
- **text**: 屈強な騎士が森に待っている。巨体の重装騎士。地面が軋む。森の番人として立っている。通すかどうかはこちら次第らしい。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 騎士
- **ID**: p06_frozen_knight
- **conditions**: { s1: 'mod_frozen', s2: 'subj_knight' }
- **text**: 凍てついた騎士が森に待っている。氷に閉じ込められた騎士。剣を振り上げた姿勢のまま凍っている。待ち伏せは永遠に完了しない。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '凍った騎士の誓い', description: '氷の中に閉じた剣の切っ先。誓いも凍る', sellPrice: 10 }

### 透き通った × 騎士
- **ID**: p06_clear_knight
- **conditions**: { s1: 'mod_clear', s2: 'subj_knight' }
- **text**: 透き通った騎士が森に待っている。影の薄い騎士。気づいた時にはすぐ隣にいた。声をかけると驚いた顔をした。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 騎士
- **ID**: p06_cursed_knight
- **conditions**: { s1: 'mod_cursed', s2: 'subj_knight' }
- **text**: 呪われた騎士が森に待っている。黒い鎧の騎士。兜の奥の目が赤く光っている。この森から出られない呪いにかかっている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 騎士
- **ID**: p06_sleepy_knight
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_knight' }
- **text**: 眠い騎士が森に待っている。木にもたれて舟を漕いでいる。槍が傾いている。待ち伏せのつもりが居眠りになったらしい。
- **damage**: 0
- **quill**: 6
- **reward**: なし

---

## 魔女

### 小さな × 魔女
- **ID**: p06_small_witch
- **conditions**: { s1: 'mod_small', s2: 'subj_witch' }
- **text**: 小さな魔女が森に待っている。大きな帽子で顔が隠れている。見習いの魔女。先輩をここで待っていたらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 魔女
- **ID**: p06_gentle_witch
- **conditions**: { s1: 'mod_gentle', s2: 'subj_witch' }
- **text**: 優しい魔女が森に待っている。薬草を煎じてくれる。怖い顔だが心は温かい。旅人が来るのを待っていたようだ。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '森の煎じ薬', description: '苦いが効く。魔女が煎じた薬草茶', sellPrice: 8 }

### 燃え盛る × 魔女
- **ID**: p06_fire_witch
- **conditions**: { s1: 'mod_fire', s2: 'subj_witch' }
- **text**: 燃え盛る魔女が森に待っている。炎の魔法で全身を包んだ魔女。怒りの形相。森が燃えているのは彼女のせいだ。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 堅い × 魔女
- **ID**: p06_hard_witch
- **conditions**: { s1: 'mod_hard', s2: 'subj_witch' }
- **text**: 堅い魔女が森に待っている。石のように頑固な老魔女。取引以外では一言も話さない。何かを差し出さないと通さないらしい。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 魔女
- **ID**: p06_sharp_witch
- **conditions**: { s1: 'mod_sharp', s2: 'subj_witch' }
- **text**: 鋭い魔女が森に待っている。鉤鼻に鋭い目。一瞥で嘘を見抜く。こちらの旅の目的まで言い当てた。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 壊れた × 魔女
- **ID**: p06_broken_witch
- **conditions**: { s1: 'mod_broken', s2: 'subj_witch' }
- **text**: 壊れた魔女が森に待っている。魔力が暴走して制御できない。呪文が途切れ途切れ。木々が勝手に変形している。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 屈強な × 魔女
- **ID**: p06_mighty_witch
- **conditions**: { s1: 'mod_mighty', s2: 'subj_witch' }
- **text**: 屈強な魔女が森に待っている。杖の代わりに拳で迎えてきた。腕が太い。森の動物たちが彼女に道を譲っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 魔女
- **ID**: p06_frozen_witch
- **conditions**: { s1: 'mod_frozen', s2: 'subj_witch' }
- **text**: 凍てついた魔女が森に待っている。氷の魔法を使う魔女。周囲に霜が広がる。彼女の待つ場所だけ、季節が冬だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 魔女
- **ID**: p06_clear_witch
- **conditions**: { s1: 'mod_clear', s2: 'subj_witch' }
- **text**: 透き通った魔女が森に待っている。老いて存在が希薄になった魔女。向こうが透けて見える。声だけが残っている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 魔女
- **ID**: p06_cursed_witch
- **conditions**: { s1: 'mod_cursed', s2: 'subj_witch' }
- **text**: 呪われた魔女が森に待っている。自分の呪いに蝕まれた魔女。体の一部が樹皮に変わっている。森に飲まれかけている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 魔女
- **ID**: p06_sleepy_witch
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_witch' }
- **text**: 眠い魔女が森に待っている。大釜の前でうとうとしている。薬がぐつぐつ煮えている。起こすのは危険な気がする。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 王

### 小さな × 王
- **ID**: p06_small_king
- **conditions**: { s1: 'mod_small', s2: 'subj_king' }
- **text**: 小さな王が森に待っている。子供が王冠をかぶっている。切り株を玉座にしている。「通行税」を要求された。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 王
- **ID**: p06_gentle_king
- **conditions**: { s1: 'mod_gentle', s2: 'subj_king' }
- **text**: 優しい王が森に待っている。質素な衣の王。旅人のために焚き火を起こしていた。温かい茶を勧められた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 王
- **ID**: p06_fire_king
- **conditions**: { s1: 'mod_fire', s2: 'subj_king' }
- **text**: 燃え盛る王が森に待っている。炎の冠を戴く王。怒りで周囲が燃えている。何に怒っているのか、もう本人も忘れている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 王
- **ID**: p06_hard_king
- **conditions**: { s1: 'mod_hard', s2: 'subj_king' }
- **text**: 堅い王が森に待っている。石の表情で立っている。法を一言で下す。「この森は通行禁止」と。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 鋭い × 王
- **ID**: p06_sharp_king
- **conditions**: { s1: 'mod_sharp', s2: 'subj_king' }
- **text**: 鋭い王が森に待っている。鷹のような目で見据えてくる。こちらの荷物の中身まで見抜かれたような気がする。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 王
- **ID**: p06_broken_king
- **conditions**: { s1: 'mod_broken', s2: 'subj_king' }
- **text**: 壊れた王が森に待っている。王冠が歪み、目は虚ろ。森の奥に一人で座っている。国を追われたのだろう。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '歪んだ王冠', description: '金は曇り、宝石は落ちている。それでも王冠だ', sellPrice: 10 }

### 屈強な × 王
- **ID**: p06_mighty_king
- **conditions**: { s1: 'mod_mighty', s2: 'subj_king' }
- **text**: 屈強な王が森に待っている。戦士王。玉座より戦場を好む。背中に傷がない男。森で何を待っているのか、聞く勇気はない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 王
- **ID**: p06_frozen_king
- **conditions**: { s1: 'mod_frozen', s2: 'subj_king' }
- **text**: 凍てついた王が森に待っている。氷の玉座に座る北の王。吐く言葉が白い。彼が来ると、森に冬が来る。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 王
- **ID**: p06_clear_king
- **conditions**: { s1: 'mod_clear', s2: 'subj_king' }
- **text**: 透き通った王が森に待っている。存在が希薄な王。向こうが透けている。それでも王の威厳だけは残っている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 王
- **ID**: p06_cursed_king
- **conditions**: { s1: 'mod_cursed', s2: 'subj_king' }
- **text**: 呪われた王が森に待っている。触れたものが金になる王。森の木が一本、金色に凍りついている。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '金の枝', description: '王の呪いで金になった枝。重い', sellPrice: 15 }

### 眠い × 王
- **ID**: p06_sleepy_king
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_king' }
- **text**: 眠い王が森に待っている。切り株に座って居眠りしている。側近もいない。王冠がずれている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 亡霊

### 小さな × 亡霊
- **ID**: p06_small_ghost
- **conditions**: { s1: 'mod_small', s2: 'subj_ghost' }
- **text**: 小さな亡霊が森に待っている。子供の霊。笑い声だけが木々の間を走る。姿は見えない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 亡霊
- **ID**: p06_gentle_ghost
- **conditions**: { s1: 'mod_gentle', s2: 'subj_ghost' }
- **text**: 優しい亡霊が森に待っている。穏やかな霊。微笑んで道を示し、消えていく。迷わずに済んだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 亡霊
- **ID**: p06_fire_ghost
- **conditions**: { s1: 'mod_fire', s2: 'subj_ghost' }
- **text**: 燃え盛る亡霊が森に待っている。火に焼かれた死に方の霊。炎をまとって彷徨っている。近づくと木が焦げる。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 堅い × 亡霊
- **ID**: p06_hard_ghost
- **conditions**: { s1: 'mod_hard', s2: 'subj_ghost' }
- **text**: 堅い亡霊が森に待っている。同じ場所から決して動かない霊。何百年もこの木の下に立っている。道は通れる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 亡霊
- **ID**: p06_sharp_ghost
- **conditions**: { s1: 'mod_sharp', s2: 'subj_ghost' }
- **text**: 鋭い亡霊が森に待っている。こちらの罪を見透かす目。視線が突き刺さる。心臓のあたりが痛い。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 亡霊
- **ID**: p06_broken_ghost
- **conditions**: { s1: 'mod_broken', s2: 'subj_ghost' }
- **text**: 壊れた亡霊が森に待っている。生前の記憶を失った霊。自分が何者か思い出せない。何を待っていたかも忘れている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '忘れられた名前', description: '亡霊が落とした名札。文字が滲んで読めない', sellPrice: 8 }

### 屈強な × 亡霊
- **ID**: p06_mighty_ghost
- **conditions**: { s1: 'mod_mighty', s2: 'subj_ghost' }
- **text**: 屈強な亡霊が森に待っている。鎧武者の亡霊。死んで枷が外れ、生前より強い。森の番人として待ち構えている。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 凍てついた × 亡霊
- **ID**: p06_frozen_ghost
- **conditions**: { s1: 'mod_frozen', s2: 'subj_ghost' }
- **text**: 凍てついた亡霊が森に待っている。触れると凍傷する冷気を纏った霊。通った跡に霜が広がる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 亡霊
- **ID**: p06_clear_ghost
- **conditions**: { s1: 'mod_clear', s2: 'subj_ghost' }
- **text**: 透き通った亡霊が森に待っている。成仏しかけている霊。輪郭がぼやけている。最後に何か伝えたそうだったが、声は聞こえなかった。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 亡霊
- **ID**: p06_cursed_ghost
- **conditions**: { s1: 'mod_cursed', s2: 'subj_ghost' }
- **text**: 呪われた亡霊が森に待っている。呪いに縛られて成仏できない霊。苦しみの表情。近づく者にも呪いが移る。
- **damage**: 4
- **quill**: 3
- **reward**: なし

### 眠い × 亡霊
- **ID**: p06_sleepy_ghost
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_ghost' }
- **text**: 眠い亡霊が森に待っている。うつらうつらしている霊。存在感が薄れたり戻ったりする。待ち伏せにしては覇気がない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 鏡

### 小さな × 鏡
- **ID**: p06_small_mirror
- **conditions**: { s1: 'mod_small', s2: 'subj_mirror' }
- **text**: 小さな鏡が森に待っている。手鏡が木の根元に落ちている。覗くと自分の目だけが映った。森の奥が映らない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 鏡
- **ID**: p06_gentle_mirror
- **conditions**: { s1: 'mod_gentle', s2: 'subj_mirror' }
- **text**: 優しい鏡が森に待っている。映った顔が少しだけ勇ましく見える。自信がない者に勇気を与える鏡だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 燃え盛る × 鏡
- **ID**: p06_fire_mirror
- **conditions**: { s1: 'mod_fire', s2: 'subj_mirror' }
- **text**: 燃え盛る鏡が森に待っている。鏡面が炎を映している。だが周囲に火はない。鏡の中が燃えている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 堅い × 鏡
- **ID**: p06_hard_mirror
- **conditions**: { s1: 'mod_hard', s2: 'subj_mirror' }
- **text**: 堅い鏡が森に待っている。何をしても割れない鏡。鏡面は曇らず、傷もつかない。木に立てかけてあるだけだが、動かせない。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 鏡
- **ID**: p06_sharp_mirror
- **conditions**: { s1: 'mod_sharp', s2: 'subj_mirror' }
- **text**: 鋭い鏡が森に待っている。割れた破片の縁が刃物のように鋭い。拾おうとして指を切った。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 鏡
- **ID**: p06_broken_mirror
- **conditions**: { s1: 'mod_broken', s2: 'subj_mirror' }
- **text**: 壊れた鏡が森に待っている。ひび割れた鏡。映る顔が何人にも分裂している。どれが本物かわからない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 鏡
- **ID**: p06_mighty_mirror
- **conditions**: { s1: 'mod_mighty', s2: 'subj_mirror' }
- **text**: 屈強な鏡が森に待っている。人の背丈を超える巨大な姿見。森の奥に立っている。鏡の中から何かが出てきそうだ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 鏡
- **ID**: p06_frozen_mirror
- **conditions**: { s1: 'mod_frozen', s2: 'subj_mirror' }
- **text**: 凍てついた鏡が森に待っている。鏡面が凍って霜で覆われている。かろうじて映る影は、こちらの姿ではなかった。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 透き通った × 鏡
- **ID**: p06_clear_mirror
- **conditions**: { s1: 'mod_clear', s2: 'subj_mirror' }
- **text**: 透き通った鏡が森に待っている。鏡なのに向こうが透けている。窓のように森の奥が見える。しかし通り抜けられない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 鏡
- **ID**: p06_cursed_mirror
- **conditions**: { s1: 'mod_cursed', s2: 'subj_mirror' }
- **text**: 呪われた鏡が森に待っている。覗いた者の姿が鏡に残る。鏡の中で、先に覗いた者たちが蠢いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 眠い × 鏡
- **ID**: p06_sleepy_mirror
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_mirror' }
- **text**: 眠い鏡が森に待っている。鏡面がぼんやり曇っている。映像がゆっくり遅れて映る。覗くと自分の寝顔が見えた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 人形

### 小さな × 人形
- **ID**: p06_small_doll
- **conditions**: { s1: 'mod_small', s2: 'subj_doll' }
- **text**: 小さな人形が森に待っている。指人形ほどの大きさ。苔むした切り株の上に座っている。誰かが置いていった。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 人形
- **ID**: p06_gentle_doll
- **conditions**: { s1: 'mod_gentle', s2: 'subj_doll' }
- **text**: 優しい人形が森に待っている。抱きしめられてくたくたになった人形。笑顔が縫ってある。持ち主を待っているのだ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '待ち人の人形', description: '笑顔が縫ってある。まだ温かい', sellPrice: 7 }

### 燃え盛る × 人形
- **ID**: p06_fire_doll
- **conditions**: { s1: 'mod_fire', s2: 'subj_doll' }
- **text**: 燃え盛る人形が森に待っている。藁人形が燃えている。呪詛のために火をつけられたものだ。近づくと焦げ臭い。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 人形
- **ID**: p06_hard_doll
- **conditions**: { s1: 'mod_hard', s2: 'subj_doll' }
- **text**: 堅い人形が森に待っている。木彫りの人形。関節がない。表情もない。道の真ん中に立っている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 人形
- **ID**: p06_sharp_doll
- **conditions**: { s1: 'mod_sharp', s2: 'subj_doll' }
- **text**: 鋭い人形が森に待っている。関節が刃になっている操り人形。糸が見えない。こちらに手を伸ばしてきた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 壊れた × 人形
- **ID**: p06_broken_doll
- **conditions**: { s1: 'mod_broken', s2: 'subj_doll' }
- **text**: 壊れた人形が森に待っている。首がもげかけている。残った目でこちらを見ている。何を待っていたのだろう。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 屈強な × 人形
- **ID**: p06_mighty_doll
- **conditions**: { s1: 'mod_mighty', s2: 'subj_doll' }
- **text**: 屈強な人形が森に待っている。等身大の木彫り人形。腕が丸太のように太い。番人として森に置かれたゴーレムだ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 凍てついた × 人形
- **ID**: p06_frozen_doll
- **conditions**: { s1: 'mod_frozen', s2: 'subj_doll' }
- **text**: 凍てついた人形が森に待っている。氷でできた人形。繊細な造形。溶けたら二度と作れない。触れずにおいた。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 人形
- **ID**: p06_clear_doll
- **conditions**: { s1: 'mod_clear', s2: 'subj_doll' }
- **text**: 透き通った人形が森に待っている。硝子の人形。中に何かの液体が入っている。森の光を受けて、静かに輝いている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 呪われた × 人形
- **ID**: p06_cursed_doll
- **conditions**: { s1: 'mod_cursed', s2: 'subj_doll' }
- **text**: 呪われた人形が森に待っている。夜になると位置が変わる人形。誰も動かしていない。こちらを追っている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 人形
- **ID**: p06_sleepy_doll
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_doll' }
- **text**: 眠い人形が森に待っている。目を閉じた人形。横にすると目が閉じるあの仕掛け。持つと眠くなる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 雨

### 小さな × 雨
- **ID**: p06_small_rain
- **conditions**: { s1: 'mod_small', s2: 'subj_rain' }
- **text**: 小さな雨が森に待っている。霧雨が木の葉を伝っている。傘がなくても濡れない程度。森が潤んで見える。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 雨
- **ID**: p06_gentle_rain
- **conditions**: { s1: 'mod_gentle', s2: 'subj_rain' }
- **text**: 優しい雨が森に待っている。慈雨。渇いた土が水を飲む音がする。花が一斉に顔を上げた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 雨
- **ID**: p06_fire_rain
- **conditions**: { s1: 'mod_fire', s2: 'subj_rain' }
- **text**: 燃え盛る雨が森に待っている。火の雨だ。空から灼熱の滴が降る。木の葉が焦げ、地面が煙を上げている。
- **damage**: 5
- **quill**: 2
- **reward**: なし

### 堅い × 雨
- **ID**: p06_hard_rain
- **conditions**: { s1: 'mod_hard', s2: 'subj_rain' }
- **text**: 堅い雨が森に待っている。雹だ。石のような氷が叩きつける。木の葉では防げない。走って抜けた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 鋭い × 雨
- **ID**: p06_sharp_rain
- **conditions**: { s1: 'mod_sharp', s2: 'subj_rain' }
- **text**: 鋭い雨が森に待っている。針のような雨粒。肌に刺さる。横殴りの雨が視界を奪う。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 雨
- **ID**: p06_broken_rain
- **conditions**: { s1: 'mod_broken', s2: 'subj_rain' }
- **text**: 壊れた雨が森に待っている。途切れ途切れに降る雨。リズムがおかしい。上に向かって降る雫もある。
- **damage**: 1
- **quill**: 5
- **reward**: { name: '逆さの雫', description: '上に向かって落ちる水滴。瓶に入れても天井に張りつく', sellPrice: 9 }

### 屈強な × 雨
- **ID**: p06_mighty_rain
- **conditions**: { s1: 'mod_mighty', s2: 'subj_rain' }
- **text**: 屈強な雨が森に待っている。豪雨。滝のような水量。地面が川になっている。足を取られそうだ。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 雨
- **ID**: p06_frozen_rain
- **conditions**: { s1: 'mod_frozen', s2: 'subj_rain' }
- **text**: 凍てついた雨が森に待っている。凍雨が降っている。触れたものを氷の膜で覆う。木の枝が硝子細工のように光る。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '凍雨の枝', description: '氷に閉じ込められた小枝。宝石のように光る', sellPrice: 8 }

### 透き通った × 雨
- **ID**: p06_clear_rain
- **conditions**: { s1: 'mod_clear', s2: 'subj_rain' }
- **text**: 透き通った雨が森に待っている。異常なほど澄んだ雨。濡れた跡が光って見える。穢れを洗い流す浄化の雨だ。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '浄化の雨水', description: '瓶に集めた透明な水。光を集める', sellPrice: 12 }

### 呪われた × 雨
- **ID**: p06_cursed_rain
- **conditions**: { s1: 'mod_cursed', s2: 'subj_rain' }
- **text**: 呪われた雨が森に待っている。浴びた途端、足が動かなくなった。根が生えたように。しばらくして、ようやく抜けた。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 眠い × 雨
- **ID**: p06_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s2: 'subj_rain' }
- **text**: 眠い雨が森に待っている。しとしとと降り続く雨。雨音が子守唄のように響く。世界が微睡んでいる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 187 |
| rewardItem数 | 33 |
| reward率 | 17.6% |
| damage平均 | 1.61 |
| quill平均 | 4.44 |
| damage=0の割合 | 33.7% (63/187) |
| damage≥4の割合 | 14.4% (27/187) |
| quill≥6の割合 | 19.8% (37/187) |
