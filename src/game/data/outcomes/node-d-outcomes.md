# ノードD「泉の声」Outcome一覧

- **文構成**: [mod]歌が 泉から [pred]
- **可変スロット**: mod + pred
- **固定**: 主語「歌」+ 目的語「泉」(から格)
- **元テキスト**: 「澄んだ歌が泉から響いている」
- **ノードの文脈**: 美しい泉のほとり。歌声が聞こえる。修飾語で歌の性質が変わり、述語で何が起きるかが変わる
- **全216パターン**: (11 mod + 1 orig_mod) × (17 pred + 1 orig_pred)
- **うち歪み96**: から格+不適合述語（pred_block, pred_guard, pred_chase, pred_hide, pred_crush, pred_sleep, pred_wait, pred_entangle）× 12 mod
- **有効120パターン**

---

## 塞いでいる — 歪み

（このノードではから格+他動詞のため歪み。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_block = 12パターン

---

## 守っている — 歪み

（このノードではから格+他動詞のため歪み。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_guard = 12パターン

---

## 追いかけてくる — 歪み

（このノードではから格+他動詞のため歪み。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_chase = 12パターン

---

## 隠している — 歪み

（このノードではから格+他動詞のため歪み。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_hide = 12パターン

---

## 砕く — 歪み

（このノードではから格+他動詞のため歪み。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_crush = 12パターン

---

## 待っている — 歪み

（から格+「待っている」は不自然。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_wait = 12パターン

---

## 見つめている

### 澄んだ × 見つめている
- **ID**: d_orig_gaze
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_gaze' }
- **text**: 澄んだ歌が泉の底からこちらを見つめている。旋律に視線がある。居心地が悪い。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 小さな × 見つめている
- **ID**: d_small_gaze
- **conditions**: { s1: 'mod_small', s4: 'pred_gaze' }
- **text**: 鼻歌が泉から見つめている。好奇心のような視線だ。見つめ返すと、少し調子が変わった。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 見つめている
- **ID**: d_gentle_gaze
- **conditions**: { s1: 'mod_gentle', s4: 'pred_gaze' }
- **text**: 子守唄が泉の底からこちらを見つめている。温かな眼差しだ。母に見守られている気がした。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '母の眼差し', description: '泉の底に沈んだ温かな視線', sellPrice: 10 }

### 燃え盛る × 見つめている
- **ID**: d_fire_gaze
- **conditions**: { s1: 'mod_fire', s4: 'pred_gaze' }
- **text**: 戦の歌が泉から睨んでいる。挑発だ。目を逸らすと肌が焦げた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 見つめている
- **ID**: d_hard_gaze
- **conditions**: { s1: 'mod_hard', s4: 'pred_gaze' }
- **text**: 止められない歌が泉からじっと見つめている。逸らせない。立ち去ろうとしても足が動かない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 見つめている
- **ID**: d_sharp_gaze
- **conditions**: { s1: 'mod_sharp', s4: 'pred_gaze' }
- **text**: 鋭い歌が泉の底からこちらを見つめている。真実を暴くような視線。嘘がつけなくなる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 見つめている
- **ID**: d_broken_gaze
- **conditions**: { s1: 'mod_broken', s4: 'pred_gaze' }
- **text**: 壊れた歌が泉から見つめている。途切れ途切れの旋律が、何かを訴えている。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 見つめている
- **ID**: d_mighty_gaze
- **conditions**: { s1: 'mod_mighty', s4: 'pred_gaze' }
- **text**: 大地を震わせる合唱が泉から見つめている。圧がすさまじい。膝が折れそうになった。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 凍てついた × 見つめている
- **ID**: d_frozen_gaze
- **conditions**: { s1: 'mod_frozen', s4: 'pred_gaze' }
- **text**: 凍てついた歌が泉の底からこちらを見つめている。感情のない瞳だ。指先が凍る。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 見つめている
- **ID**: d_clear_gaze
- **conditions**: { s1: 'mod_clear', s4: 'pred_gaze' }
- **text**: 透き通った歌が泉からこちらを見つめている。心の奥まで見透かされている。隠しごとが消えた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '透明な瞳', description: '泉から届いた、澄んだ視線の結晶', sellPrice: 12 }

### 呪われた × 見つめている
- **ID**: d_cursed_gaze
- **conditions**: { s1: 'mod_cursed', s4: 'pred_gaze' }
- **text**: 呪われた歌が泉から見つめている。目が合った。頭の中で旋律が回り始める。止まらない。
- **damage**: 4
- **quill**: 1
- **reward**: なし

### 眠い × 見つめている
- **ID**: d_sleepy_gaze
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_gaze' }
- **text**: 眠い歌が泉から見つめている。とろんとした視線。つられて瞼が重くなった。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 囁いている

### 澄んだ × 囁いている
- **ID**: d_orig_whisper
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_whisper' }
- **text**: 澄んだ歌が泉から囁いている。水面に顔を寄せると、道の先のことを教えてくれた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 小さな × 囁いている
- **ID**: d_small_whisper
- **conditions**: { s1: 'mod_small', s4: 'pred_whisper' }
- **text**: 鼻歌が泉から囁いている。耳を澄まさないと聞こえない。泉の奥に何かあるらしい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 囁いている
- **ID**: d_gentle_whisper
- **conditions**: { s1: 'mod_gentle', s4: 'pred_whisper' }
- **text**: 子守唄が泉から囁いている。大丈夫、と言っている気がした。体が軽くなった。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '囁きの波紋', description: '泉に広がった子守唄の波紋を写し取った石', sellPrice: 10 }

### 燃え盛る × 囁いている
- **ID**: d_fire_whisper
- **conditions**: { s1: 'mod_fire', s4: 'pred_whisper' }
- **text**: 戦の歌が泉から囁いている。「戦え」と。泉の水が煮えたぎる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 囁いている
- **ID**: d_hard_whisper
- **conditions**: { s1: 'mod_hard', s4: 'pred_whisper' }
- **text**: 止められない歌が泉から囁いている。一度耳に入ると、歩き去っても聞こえ続ける。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 鋭い × 囁いている
- **ID**: d_sharp_whisper
- **conditions**: { s1: 'mod_sharp', s4: 'pred_whisper' }
- **text**: 鋭い歌が泉から囁いている。耳の奥に突き刺さる。秘密がひとつ、暴かれた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 囁いている
- **ID**: d_broken_whisper
- **conditions**: { s1: 'mod_broken', s4: 'pred_whisper' }
- **text**: 壊れた歌が泉から囁いている。言葉にならない。同じ音節が繰り返されるだけだ。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 囁いている
- **ID**: d_mighty_whisper
- **conditions**: { s1: 'mod_mighty', s4: 'pred_whisper' }
- **text**: 大地を震わせる合唱が泉から囁いている。囁いているのに地面が揺れる。声を抑えきれていない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 凍てついた × 囁いている
- **ID**: d_frozen_whisper
- **conditions**: { s1: 'mod_frozen', s4: 'pred_whisper' }
- **text**: 凍てついた歌が泉から囁いている。吐息が白い。泉の水面に薄氷が張った。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 囁いている
- **ID**: d_clear_whisper
- **conditions**: { s1: 'mod_clear', s4: 'pred_whisper' }
- **text**: 透き通った歌が泉から囁いている。言葉はないのに意味がわかる。進むべき道が見えた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '道標の音色', description: '進むべき方角を示す澄んだ響き', sellPrice: 15 }

### 呪われた × 囁いている
- **ID**: d_cursed_whisper
- **conditions**: { s1: 'mod_cursed', s4: 'pred_whisper' }
- **text**: 呪われた歌が泉から囁いている。甘い声だ。水面に手を伸ばしかけて、辛うじて引いた。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 囁いている
- **ID**: d_sleepy_whisper
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_whisper' }
- **text**: 眠い歌が泉から囁いている。単調な旋律。意識が遠くなる。水辺で眠るのは危ない。
- **damage**: 2
- **quill**: 3
- **reward**: なし

---


---

## 眠っている — 歪み

（から格+「眠っている」は不自然。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_sleep = 12パターン
## 歌っている

### 澄んだ × 歌っている
- **ID**: d_orig_sing
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_sing' }
- **text**: 澄んだ歌が泉から歌っている。歌が歌を歌う。水面が細かく震え、光を散らす。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 小さな × 歌っている
- **ID**: d_small_sing
- **conditions**: { s1: 'mod_small', s4: 'pred_sing' }
- **text**: 鼻歌が泉から歌っている。水の音に紛れてほとんど聞こえない。耳を澄ます。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 歌っている
- **ID**: d_gentle_sing
- **conditions**: { s1: 'mod_gentle', s4: 'pred_sing' }
- **text**: 子守唄が泉から歌っている。泉全体がゆりかごのようだ。傷が少し癒えた。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '泉のゆりかご', description: '泉の水を一滴閉じ込めた小瓶。揺らすと子守唄が聞こえる', sellPrice: 15 }

### 燃え盛る × 歌っている
- **ID**: d_fire_sing
- **conditions**: { s1: 'mod_fire', s4: 'pred_sing' }
- **text**: 戦の歌が泉から歌っている。水面が赤く染まる。血が熱い。泉の水は飲めそうにない。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 歌っている
- **ID**: d_hard_sing
- **conditions**: { s1: 'mod_hard', s4: 'pred_sing' }
- **text**: 止められない歌が泉から歌っている。いつから歌っているのか。泉が涸れても終わらないだろう。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 鋭い × 歌っている
- **ID**: d_sharp_sing
- **conditions**: { s1: 'mod_sharp', s4: 'pred_sing' }
- **text**: 鋭い歌が泉から歌っている。高音が泉の水面を切り裂く。水しぶきが顔にかかった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 歌っている
- **ID**: d_broken_sing
- **conditions**: { s1: 'mod_broken', s4: 'pred_sing' }
- **text**: 壊れた歌が泉から歌っている。同じ節で止まり、また最初から始まる。水が淀んでいる。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 歌っている
- **ID**: d_mighty_sing
- **conditions**: { s1: 'mod_mighty', s4: 'pred_sing' }
- **text**: 大地を震わせる合唱が泉から歌っている。水柱が立つ。全身が水浸しになった。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 歌っている
- **ID**: d_frozen_sing
- **conditions**: { s1: 'mod_frozen', s4: 'pred_sing' }
- **text**: 凍てついた歌が泉から歌っている。氷の結晶が旋律を奏でている。美しいが、冷たい。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '氷の音符', description: '旋律の形に凍った水の結晶', sellPrice: 10 }

### 透き通った × 歌っている
- **ID**: d_clear_sing
- **conditions**: { s1: 'mod_clear', s4: 'pred_sing' }
- **text**: 透き通った歌が泉から歌っている。空気自体が歌っている。泉も空も境目がない。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 歌っている
- **ID**: d_cursed_sing
- **conditions**: { s1: 'mod_cursed', s4: 'pred_sing' }
- **text**: 呪われた歌が泉から歌っている。聴いた者を操る歌。体が勝手に泉へ歩き出す。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 眠い × 歌っている
- **ID**: d_sleepy_sing
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_sing' }
- **text**: 眠い歌が泉から歌っている。単調な旋律が延々と続く。泉に映る空が滲んでいく。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---


---

## 絡みついている — 歪み

（から格+「絡みついている」は不自然。defaultOutcomeで処理）
該当: orig_d_mod / mod_small / mod_gentle / mod_fire / mod_hard / mod_sharp / mod_broken / mod_mighty / mod_frozen / mod_clear / mod_cursed / mod_sleepy × pred_entangle = 12パターン
## 逃げていく

### 澄んだ × 逃げていく
- **ID**: d_orig_flee
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_flee' }
- **text**: 澄んだ歌が泉から逃げていく。何かに怯えたように旋律が遠ざかる。泉が静かになった。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 小さな × 逃げていく
- **ID**: d_small_flee
- **conditions**: { s1: 'mod_small', s4: 'pred_flee' }
- **text**: 鼻歌が泉から逃げていく。人の気配に驚いたらしい。追いかけても捕まらない。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 優しい × 逃げていく
- **ID**: d_gentle_flee
- **conditions**: { s1: 'mod_gentle', s4: 'pred_flee' }
- **text**: 子守唄が泉から逃げていく。惜しい。追いかけると、一音だけ落としていった。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '落とされた一音', description: '逃げた子守唄が落とした温かな音符', sellPrice: 8 }

### 燃え盛る × 逃げていく
- **ID**: d_fire_flee
- **conditions**: { s1: 'mod_fire', s4: 'pred_flee' }
- **text**: 戦の歌が泉から逃げていく。燃えながら。通り道の草が焦げている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 逃げていく
- **ID**: d_hard_flee
- **conditions**: { s1: 'mod_hard', s4: 'pred_flee' }
- **text**: 止められない歌が泉から逃げていく。逃げながらも歌い続けている。遠くで響いている。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 鋭い × 逃げていく
- **ID**: d_sharp_flee
- **conditions**: { s1: 'mod_sharp', s4: 'pred_flee' }
- **text**: 鋭い歌が泉から逃げていく。通り過ぎざまに耳を切られた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 壊れた × 逃げていく
- **ID**: d_broken_flee
- **conditions**: { s1: 'mod_broken', s4: 'pred_flee' }
- **text**: 壊れた歌が泉から逃げていく。音を零しながら。旋律の残骸が泉に沈んだ。
- **damage**: 0
- **quill**: 5
- **reward**: { name: '旋律の残骸', description: '逃げた歌が零した音の破片。まだ微かに震えている', sellPrice: 7 }

### 屈強な × 逃げていく
- **ID**: d_mighty_flee
- **conditions**: { s1: 'mod_mighty', s4: 'pred_flee' }
- **text**: 大地を震わせる合唱が泉から逃げていく。地響きが遠ざかる。泉の水が波立っている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 凍てついた × 逃げていく
- **ID**: d_frozen_flee
- **conditions**: { s1: 'mod_frozen', s4: 'pred_flee' }
- **text**: 凍てついた歌が泉から逃げていく。通り道が凍りつく。泉の水面に氷の轍が残った。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 透き通った × 逃げていく
- **ID**: d_clear_flee
- **conditions**: { s1: 'mod_clear', s4: 'pred_flee' }
- **text**: 透き通った歌が泉から逃げていく。見えない歌が去った後、泉の水が少し濁った。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 呪われた × 逃げていく
- **ID**: d_cursed_flee
- **conditions**: { s1: 'mod_cursed', s4: 'pred_flee' }
- **text**: 呪われた歌が泉から逃げていく。ありがたい。だが頭の中にまだ残響がある。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 眠い × 逃げていく
- **ID**: d_sleepy_flee
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_flee' }
- **text**: 眠い歌が泉からのろのろ逃げていく。あくびのような旋律が遠ざかる。のどかだ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 輝く

### 澄んだ × 輝く
- **ID**: d_orig_shine
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_shine' }
- **text**: 澄んだ歌が泉から輝いている。旋律が光になって水面を照らす。まぶしい。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 小さな × 輝く
- **ID**: d_small_shine
- **conditions**: { s1: 'mod_small', s4: 'pred_shine' }
- **text**: 鼻歌が泉から輝いている。蛍のような小さな光。手を伸ばすと指先に乗った。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '蛍の音', description: '鼻歌が光になったもの。手のひらで震えている', sellPrice: 10 }

### 優しい × 輝く
- **ID**: d_gentle_shine
- **conditions**: { s1: 'mod_gentle', s4: 'pred_shine' }
- **text**: 子守唄が泉から輝いている。柔らかな光。泉のほとりが夕暮れのように温かい。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '黄昏の音色', description: '子守唄が放つ夕暮れ色の光', sellPrice: 12 }

### 燃え盛る × 輝く
- **ID**: d_fire_shine
- **conditions**: { s1: 'mod_fire', s4: 'pred_shine' }
- **text**: 戦の歌が泉から輝いている。赤い光だ。見ていると血が騒ぐ。目を逸らした。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 輝く
- **ID**: d_hard_shine
- **conditions**: { s1: 'mod_hard', s4: 'pred_shine' }
- **text**: 止められない歌が泉から輝いている。光も止まらない。昼のように明るい。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 輝く
- **ID**: d_sharp_shine
- **conditions**: { s1: 'mod_sharp', s4: 'pred_shine' }
- **text**: 鋭い歌が泉から輝いている。刃のような光線。泉の水面が鏡になっている。直視できない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 壊れた × 輝く
- **ID**: d_broken_shine
- **conditions**: { s1: 'mod_broken', s4: 'pred_shine' }
- **text**: 壊れた歌が泉から輝いている。途切れ途切れの光。点滅する灯台のようだ。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 輝く
- **ID**: d_mighty_shine
- **conditions**: { s1: 'mod_mighty', s4: 'pred_shine' }
- **text**: 大地を震わせる合唱が泉から輝いている。光の柱が天を衝く。目がくらんだ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 凍てついた × 輝く
- **ID**: d_frozen_shine
- **conditions**: { s1: 'mod_frozen', s4: 'pred_shine' }
- **text**: 凍てついた歌が泉から輝いている。冷たい光だ。氷の結晶が光を反射して、泉が宝石箱のようだ。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '凍った光', description: '氷の結晶に閉じ込められた歌の光', sellPrice: 10 }

### 透き通った × 輝く
- **ID**: d_clear_shine
- **conditions**: { s1: 'mod_clear', s4: 'pred_shine' }
- **text**: 透き通った歌が泉から輝いている。光そのものが歌っている。泉も空もひとつになった。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '天泉の光', description: '空と泉の境目が消えた瞬間の光', sellPrice: 18 }

### 呪われた × 輝く
- **ID**: d_cursed_shine
- **conditions**: { s1: 'mod_cursed', s4: 'pred_shine' }
- **text**: 呪われた歌が泉から輝いている。紫がかった光。美しいが、見つめると頭が痛む。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 輝く
- **ID**: d_sleepy_shine
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_shine' }
- **text**: 眠い歌が泉から輝いている。ぼんやりした光。月明かりのようだ。目蓋が重くなる。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 降り注いでいる

### 澄んだ × 降り注いでいる
- **ID**: d_orig_rain
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_rain' }
- **text**: 澄んだ歌が泉から降り注いでいる。泉から溢れた旋律が、雨のように降ってくる。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 小さな × 降り注いでいる
- **ID**: d_small_rain
- **conditions**: { s1: 'mod_small', s4: 'pred_rain' }
- **text**: 鼻歌が泉から降り注いでいる。霧雨のようだ。肩に小さな旋律が積もる。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 降り注いでいる
- **ID**: d_gentle_rain
- **conditions**: { s1: 'mod_gentle', s4: 'pred_rain' }
- **text**: 子守唄が泉から降り注いでいる。温かな雨。浴びていると傷が癒えていく。
- **damage**: -1
- **quill**: 7
- **reward**: { name: '子守唄の雫', description: '降り注いだ子守唄が一滴に凝った水晶', sellPrice: 12 }

### 燃え盛る × 降り注いでいる
- **ID**: d_fire_rain
- **conditions**: { s1: 'mod_fire', s4: 'pred_rain' }
- **text**: 戦の歌が泉から降り注いでいる。火の雨だ。地面が焦げる。走って逃げた。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 堅い × 降り注いでいる
- **ID**: d_hard_rain
- **conditions**: { s1: 'mod_hard', s4: 'pred_rain' }
- **text**: 止められない歌が泉から降り注いでいる。雹のように硬い音が体を叩く。痛い。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 鋭い × 降り注いでいる
- **ID**: d_sharp_rain
- **conditions**: { s1: 'mod_sharp', s4: 'pred_rain' }
- **text**: 鋭い歌が泉から降り注いでいる。針の雨だ。肌を無数に刺す。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 壊れた × 降り注いでいる
- **ID**: d_broken_rain
- **conditions**: { s1: 'mod_broken', s4: 'pred_rain' }
- **text**: 壊れた歌が泉から降り注いでいる。途切れ途切れの雨。不規則なリズムで降る。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 降り注いでいる
- **ID**: d_mighty_rain
- **conditions**: { s1: 'mod_mighty', s4: 'pred_rain' }
- **text**: 大地を震わせる合唱が泉から降り注いでいる。豪雨のような音圧。立っていられない。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 凍てついた × 降り注いでいる
- **ID**: d_frozen_rain
- **conditions**: { s1: 'mod_frozen', s4: 'pred_rain' }
- **text**: 凍てついた歌が泉から降り注いでいる。みぞれのようだ。体が芯から冷える。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 透き通った × 降り注いでいる
- **ID**: d_clear_rain
- **conditions**: { s1: 'mod_clear', s4: 'pred_rain' }
- **text**: 透き通った歌が泉から降り注いでいる。見えない雨。浴びると思考が澄んでいく。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '透明な雨粒', description: '透き通った歌が凝った一滴。何も映さない', sellPrice: 12 }

### 呪われた × 降り注いでいる
- **ID**: d_cursed_rain
- **conditions**: { s1: 'mod_cursed', s4: 'pred_rain' }
- **text**: 呪われた歌が泉から降り注いでいる。黒い雨だ。浴びた箇所が痺れる。
- **damage**: 4
- **quill**: 1
- **reward**: なし

### 眠い × 降り注いでいる
- **ID**: d_sleepy_rain
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_rain' }
- **text**: 眠い歌が泉から降り注いでいる。ぬるい雨。浴びているうちに意識が遠くなった。
- **damage**: 2
- **quill**: 3
- **reward**: なし

---

## 踊っている

### 澄んだ × 踊っている
- **ID**: d_orig_dance
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_dance' }
- **text**: 澄んだ歌が泉の上で踊っている。水面に波紋を描いて、旋律が舞う。美しい。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 小さな × 踊っている
- **ID**: d_small_dance
- **conditions**: { s1: 'mod_small', s4: 'pred_dance' }
- **text**: 鼻歌が泉の上で踊っている。水滴が跳ねるような小さなステップ。見ていて飽きない。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 踊っている
- **ID**: d_gentle_dance
- **conditions**: { s1: 'mod_gentle', s4: 'pred_dance' }
- **text**: 子守唄が泉の上で踊っている。ゆっくりとした円舞。見ていると心が凪ぐ。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '円舞の波紋', description: '子守唄が泉に描いた波紋の型', sellPrice: 10 }

### 燃え盛る × 踊っている
- **ID**: d_fire_dance
- **conditions**: { s1: 'mod_fire', s4: 'pred_dance' }
- **text**: 戦の歌が泉の上で踊っている。火踊りだ。泉の水が蒸発していく。熱風が顔を打つ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 堅い × 踊っている
- **ID**: d_hard_dance
- **conditions**: { s1: 'mod_hard', s4: 'pred_dance' }
- **text**: 止められない歌が泉の上で踊っている。同じ振り付けを延々と繰り返す。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 踊っている
- **ID**: d_sharp_dance
- **conditions**: { s1: 'mod_sharp', s4: 'pred_dance' }
- **text**: 鋭い歌が泉の上で踊っている。剣舞のようだ。水面が斬り裂かれて飛沫が散る。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 壊れた × 踊っている
- **ID**: d_broken_dance
- **conditions**: { s1: 'mod_broken', s4: 'pred_dance' }
- **text**: 壊れた歌が泉の上で踊っている。ふらつき、転び、また立ち上がる。痛々しい。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 踊っている
- **ID**: d_mighty_dance
- **conditions**: { s1: 'mod_mighty', s4: 'pred_dance' }
- **text**: 大地を震わせる合唱が泉の上で踊っている。水柱が何本も立つ。嵐のような舞踏だ。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 凍てついた × 踊っている
- **ID**: d_frozen_dance
- **conditions**: { s1: 'mod_frozen', s4: 'pred_dance' }
- **text**: 凍てついた歌が泉の上で踊っている。踏んだ水面が次々に凍る。氷の舞台が広がっていく。
- **damage**: 2
- **quill**: 5
- **reward**: { name: '氷の舞台', description: '凍った泉の欠片。踏むと音が鳴る', sellPrice: 10 }

### 透き通った × 踊っている
- **ID**: d_clear_dance
- **conditions**: { s1: 'mod_clear', s4: 'pred_dance' }
- **text**: 透き通った歌が泉の上で踊っている。見えないはずなのに、水面に踊りの軌跡が残る。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 踊っている
- **ID**: d_cursed_dance
- **conditions**: { s1: 'mod_cursed', s4: 'pred_dance' }
- **text**: 呪われた歌が泉の上で踊っている。狂った踊りだ。足が勝手に動き出す。泉に引き込まれかけた。
- **damage**: 4
- **quill**: 2
- **reward**: なし

### 眠い × 踊っている
- **ID**: d_sleepy_dance
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_dance' }
- **text**: 眠い歌が泉の上で踊っている。ゆらゆら揺れるだけだ。踊りというよりは寝返りに近い。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 溶けている

### 澄んだ × 溶けている
- **ID**: d_orig_melt
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_melt' }
- **text**: 澄んだ歌が泉に溶けている。旋律と水が混ざり合う。泉の水を飲むと、歌が聞こえた。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 小さな × 溶けている
- **ID**: d_small_melt
- **conditions**: { s1: 'mod_small', s4: 'pred_melt' }
- **text**: 鼻歌が泉に溶けている。水面を掬うと、手のひらで微かに震えている。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '歌を含んだ水', description: '鼻歌が溶けた泉の水。手のひらで震える', sellPrice: 8 }

### 優しい × 溶けている
- **ID**: d_gentle_melt
- **conditions**: { s1: 'mod_gentle', s4: 'pred_melt' }
- **text**: 子守唄が泉に溶けている。泉の水が温かい。飲むと安心する。傷も癒えた。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 溶けている
- **ID**: d_fire_melt
- **conditions**: { s1: 'mod_fire', s4: 'pred_melt' }
- **text**: 戦の歌が泉に溶けている。泉が温泉のように煮えている。飲んだら大変なことになりそうだ。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 堅い × 溶けている
- **ID**: d_hard_melt
- **conditions**: { s1: 'mod_hard', s4: 'pred_melt' }
- **text**: 止められない歌が泉に溶けている。なかなか溶けきらない。泉の底で歌い続けている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 溶けている
- **ID**: d_sharp_melt
- **conditions**: { s1: 'mod_sharp', s4: 'pred_melt' }
- **text**: 鋭い歌が泉に溶けている。水面に触れると指が切れた。水ごと鋭くなっている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 溶けている
- **ID**: d_broken_melt
- **conditions**: { s1: 'mod_broken', s4: 'pred_melt' }
- **text**: 壊れた歌が泉に溶けている。旋律がばらばらになって水に散っている。もう元には戻らない。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 溶けている
- **ID**: d_mighty_melt
- **conditions**: { s1: 'mod_mighty', s4: 'pred_melt' }
- **text**: 大地を震わせる合唱が泉に溶けている。泉が揺れている。水を掬うと手が痺れた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 溶けている
- **ID**: d_frozen_melt
- **conditions**: { s1: 'mod_frozen', s4: 'pred_melt' }
- **text**: 凍てついた歌が泉に溶けている。凍った旋律が水に還っていく。少し寂しい。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 透き通った × 溶けている
- **ID**: d_clear_melt
- **conditions**: { s1: 'mod_clear', s4: 'pred_melt' }
- **text**: 透き通った歌が泉に溶けている。歌と泉の区別がつかない。飲むと世界が透明に見えた。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '透明な泉水', description: '歌が完全に溶けた泉の水。飲むと世界の輪郭が見える', sellPrice: 18 }

### 呪われた × 溶けている
- **ID**: d_cursed_melt
- **conditions**: { s1: 'mod_cursed', s4: 'pred_melt' }
- **text**: 呪われた歌が泉に溶けている。泉が黒ずんでいる。一口でも飲めば正気を失う。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 眠い × 溶けている
- **ID**: d_sleepy_melt
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_melt' }
- **text**: 眠い歌が泉に溶けている。泉の水がぬるい。顔を洗おうとして、そのまま眠りかけた。
- **damage**: 1
- **quill**: 4
- **reward**: なし

---

## 笑っている

### 澄んだ × 笑っている
- **ID**: d_orig_laugh
- **conditions**: { s1: 'orig_d_mod', s4: 'pred_laugh' }
- **text**: 澄んだ歌が泉から笑っている。水面がきらきらと揺れる。嫌味のない笑い声だ。
- **damage**: 0
- **quill**: 5
- **reward**: なし

### 小さな × 笑っている
- **ID**: d_small_laugh
- **conditions**: { s1: 'mod_small', s4: 'pred_laugh' }
- **text**: 鼻歌が泉から笑っている。くすくすと、小さく。つられて口元が緩んだ。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 優しい × 笑っている
- **ID**: d_gentle_laugh
- **conditions**: { s1: 'mod_gentle', s4: 'pred_laugh' }
- **text**: 子守唄が泉から笑っている。赤ん坊をあやすような温かな笑い声。心がほぐれた。
- **damage**: -1
- **quill**: 6
- **reward**: なし

### 燃え盛る × 笑っている
- **ID**: d_fire_laugh
- **conditions**: { s1: 'mod_fire', s4: 'pred_laugh' }
- **text**: 戦の歌が泉から笑っている。高笑いだ。泉が煮えたぎる。挑発されている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 堅い × 笑っている
- **ID**: d_hard_laugh
- **conditions**: { s1: 'mod_hard', s4: 'pred_laugh' }
- **text**: 止められない歌が泉から笑っている。笑いが止まらない。泉の水面がずっと揺れている。
- **damage**: 1
- **quill**: 4
- **reward**: なし

### 鋭い × 笑っている
- **ID**: d_sharp_laugh
- **conditions**: { s1: 'mod_sharp', s4: 'pred_laugh' }
- **text**: 鋭い歌が泉から笑っている。嘲笑だ。耳の奥が痛い。弱点を見抜かれた気がした。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 壊れた × 笑っている
- **ID**: d_broken_laugh
- **conditions**: { s1: 'mod_broken', s4: 'pred_laugh' }
- **text**: 壊れた歌が泉から笑っている。途切れ途切れの笑い声。何がおかしいのかわからない。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 屈強な × 笑っている
- **ID**: d_mighty_laugh
- **conditions**: { s1: 'mod_mighty', s4: 'pred_laugh' }
- **text**: 大地を震わせる合唱が泉から笑っている。哄笑が空に響く。泉の水が跳ねた。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 笑っている
- **ID**: d_frozen_laugh
- **conditions**: { s1: 'mod_frozen', s4: 'pred_laugh' }
- **text**: 凍てついた歌が泉から笑っている。感情のない笑い声。空気が凍る。鳥肌が立った。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 笑っている
- **ID**: d_clear_laugh
- **conditions**: { s1: 'mod_clear', s4: 'pred_laugh' }
- **text**: 透き通った歌が泉から笑っている。鈴を転がすような笑い声。泉の底が見える。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '鈴の笑い声', description: '透き通った歌の笑い声が宿った小さな鈴', sellPrice: 10 }

### 呪われた × 笑っている
- **ID**: d_cursed_laugh
- **conditions**: { s1: 'mod_cursed', s4: 'pred_laugh' }
- **text**: 呪われた歌が泉から笑っている。不気味な笑い声が頭にこびりつく。耳を塞いでも聞こえる。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 眠い × 笑っている
- **ID**: d_sleepy_laugh
- **conditions**: { s1: 'mod_sleepy', s4: 'pred_laugh' }
- **text**: 眠い歌が泉から笑っている。寝ぼけた笑い声。あくびに変わった。
- **damage**: 0
- **quill**: 5
- **reward**: なし

---

## 響いている（元述語）

### 澄んだ × 響いている（元テキスト）
- **ID**: d_orig_orig
- **conditions**: { s1: 'orig_d_mod', s4: 'orig_d_pred' }
- **text**: 澄んだ歌が泉から響いている。美しい。しかし、書き換えなければこのままだ。
- **damage**: 2
- **quill**: 2
- **reward**: なし

### 小さな × 響いている
- **ID**: d_small_orig
- **conditions**: { s1: 'mod_small', s4: 'orig_d_pred' }
- **text**: 小さな歌が泉から響いている。鼻歌のようだ。耳を澄ますとかろうじて聞こえる。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 優しい × 響いている
- **ID**: d_gentle_orig
- **conditions**: { s1: 'mod_gentle', s4: 'orig_d_pred' }
- **text**: 優しい歌が泉から響いている。子守唄だ。聴いていると傷が癒える気がした。
- **damage**: -1
- **quill**: 6
- **reward**: { name: '泉の子守唄', description: '泉から響いた子守唄の残響。手に取ると温かい', sellPrice: 10 }

### 燃え盛る × 響いている
- **ID**: d_fire_orig
- **conditions**: { s1: 'mod_fire', s4: 'orig_d_pred' }
- **text**: 燃え盛る歌が泉から響いている。戦の歌だ。泉の水が沸騰している。近寄れない。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 堅い × 響いている
- **ID**: d_hard_orig
- **conditions**: { s1: 'mod_hard', s4: 'orig_d_pred' }
- **text**: 堅い歌が泉から響いている。一度始まったら止まらない。いつまでも聞こえている。
- **damage**: 1
- **quill**: 3
- **reward**: なし

### 鋭い × 響いている
- **ID**: d_sharp_orig
- **conditions**: { s1: 'mod_sharp', s4: 'orig_d_pred' }
- **text**: 鋭い歌が泉から響いている。金切り声だ。泉の水面にひびが走る。耳を押さえた。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 壊れた × 響いている
- **ID**: d_broken_orig
- **conditions**: { s1: 'mod_broken', s4: 'orig_d_pred' }
- **text**: 壊れた歌が泉から響いている。途中で途切れ、また始まる。泉が困っているように見える。
- **damage**: 0
- **quill**: 4
- **reward**: なし

### 屈強な × 響いている
- **ID**: d_mighty_orig
- **conditions**: { s1: 'mod_mighty', s4: 'orig_d_pred' }
- **text**: 屈強な歌が泉から響いている。大合唱だ。足元が揺れる。泉の水が波立っている。
- **damage**: 2
- **quill**: 3
- **reward**: なし

### 凍てついた × 響いている
- **ID**: d_frozen_orig
- **conditions**: { s1: 'mod_frozen', s4: 'orig_d_pred' }
- **text**: 凍てついた歌が泉から響いている。空気が凍る歌声だ。泉の縁に霜が降りている。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 透き通った × 響いている
- **ID**: d_clear_orig
- **conditions**: { s1: 'mod_clear', s4: 'orig_d_pred' }
- **text**: 透き通った歌が泉から響いている。水そのものが歌っているようだ。雑念が洗い流された。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '水の歌声', description: '泉の水に宿った透き通った旋律', sellPrice: 12 }

### 呪われた × 響いている
- **ID**: d_cursed_orig
- **conditions**: { s1: 'mod_cursed', s4: 'orig_d_pred' }
- **text**: 呪われた歌が泉から響いている。美しいのに恐ろしい。頭の中に入り込んでくる。
- **damage**: 3
- **quill**: 3
- **reward**: なし

### 眠い × 響いている
- **ID**: d_sleepy_orig
- **conditions**: { s1: 'mod_sleepy', s4: 'orig_d_pred' }
- **text**: 眠い歌が泉から響いている。あくびが出るような旋律だ。泉のほとりで腰を下ろした。
- **damage**: 1
- **quill**: 4
- **reward**: なし
