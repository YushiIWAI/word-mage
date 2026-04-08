# ノードE05「封印の間」Outcome一覧

- **文構成**: [mod*]封印が 祭壇から [pred*]
- **可変スロット**: mod(初期: 壊れた/mod_broken) + pred(初期: 歌っている/pred_sing)
- **固定**: 主語「封印」(ロスター外) + 目的語「祭壇」(から格)
- **ノードの文脈**: 地下の封印の間。封印が綻びかけている
- **nodeType**: elite
- **から格有効述語(9)**: 見つめている, 囁いている, 逃げていく, 歌っている, 踊っている, 笑っている, 輝く, 降り注いでいる, 溶けている
- **格歪み(8)**: 塞いでいる, 守っている, 追いかけてくる, 隠している, 砕く, 眠っている, 待っている, 絡みついている → defaultOutcome
- **有効パターン**: 11 mod × 9 pred = 99

---

- **defaultOutcome**:
  - text: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
  - damage: 4
  - quill: 0

---

## 見つめている

### 小さな × 見つめている
- **ID**: e05_small_gaze
- **conditions**: { s1: 'mod_small', s2: 'pred_gaze' }
- **text**: 小さな封印が祭壇から見つめている。指先ほどの光が揺れている。もう力は残っていない。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 見つめている
- **ID**: e05_gentle_gaze
- **conditions**: { s1: 'mod_gentle', s2: 'pred_gaze' }
- **text**: 優しい封印が祭壇から見つめている。温かい光がこちらを包む。守ろうとしてくれている。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 見つめている
- **ID**: e05_fire_gaze
- **conditions**: { s1: 'mod_fire', s2: 'pred_gaze' }
- **text**: 燃え盛る封印が祭壇から見つめている。封印自体が炎を纏っている。近づくと肌が灼ける。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 見つめている
- **ID**: e05_hard_gaze
- **conditions**: { s1: 'mod_hard', s2: 'pred_gaze' }
- **text**: 堅い封印が祭壇から見つめている。揺るがない光。何千年もこうして世界を見てきた。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 鋭い × 見つめている
- **ID**: e05_sharp_gaze
- **conditions**: { s1: 'mod_sharp', s2: 'pred_gaze' }
- **text**: 鋭い封印が祭壇から見つめている。光が矢のように刺さる。侵入者を裁いている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 見つめている
- **ID**: e05_broken_gaze
- **conditions**: { s1: 'mod_broken', s2: 'pred_gaze' }
- **text**: 壊れた封印が祭壇から見つめている。光が明滅している。もう長くは保たない。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 屈強な × 見つめている
- **ID**: e05_mighty_gaze
- **conditions**: { s1: 'mod_mighty', s2: 'pred_gaze' }
- **text**: 屈強な封印が祭壇から見つめている。圧倒的な光圧。目を開けていられない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 見つめている
- **ID**: e05_frozen_gaze
- **conditions**: { s1: 'mod_frozen', s2: 'pred_gaze' }
- **text**: 凍てついた封印が祭壇から見つめている。冷たい光が空気を凍らせる。息が白い。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 見つめている
- **ID**: e05_clear_gaze
- **conditions**: { s1: 'mod_clear', s2: 'pred_gaze' }
- **text**: 透き通った封印が祭壇から見つめている。純粋な光。嘘も幻も見通す。
- **damage**: 1
- **quill**: 8
- **reward**: { name: '封印の瞳', description: '見通す光の欠片。覗くと真実が見える', sellPrice: 12 }

### 呪われた × 見つめている
- **ID**: e05_cursed_gaze
- **conditions**: { s1: 'mod_cursed', s2: 'pred_gaze' }
- **text**: 呪われた封印が祭壇から見つめている。封じていたものの呪いが封印に移っている。目が赤い。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 見つめている
- **ID**: e05_sleepy_gaze
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_gaze' }
- **text**: 眠い封印が祭壇から見つめている。光がぼんやりしている。封印も眠りかけている。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 囁いている

### 小さな × 囁いている
- **ID**: e05_small_whisper
- **conditions**: { s1: 'mod_small', s2: 'pred_whisper' }
- **text**: 小さな封印が祭壇から囁いている。耳を澄まさないと聞こえない。何かの警告だ。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 優しい × 囁いている
- **ID**: e05_gentle_whisper
- **conditions**: { s1: 'mod_gentle', s2: 'pred_whisper' }
- **text**: 優しい封印が祭壇から囁いている。安心させるような声。大丈夫だ、まだ保っている。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '封印の囁き', description: '瓶に詰めた声。開けると安心する', sellPrice: 10 }

### 燃え盛る × 囁いている
- **ID**: e05_fire_whisper
- **conditions**: { s1: 'mod_fire', s2: 'pred_whisper' }
- **text**: 燃え盛る封印が祭壇から囁いている。炎の中から聞こえる声。焼けるような言葉だ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 堅い × 囁いている
- **ID**: e05_hard_whisper
- **conditions**: { s1: 'mod_hard', s2: 'pred_whisper' }
- **text**: 堅い封印が祭壇から囁いている。石に刻まれた呪文が声に出して読まれている。自動的に。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 鋭い × 囁いている
- **ID**: e05_sharp_whisper
- **conditions**: { s1: 'mod_sharp', s2: 'pred_whisper' }
- **text**: 鋭い封印が祭壇から囁いている。言葉が刃のように切りつける。真実を突きつけられた。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 壊れた × 囁いている
- **ID**: e05_broken_whisper
- **conditions**: { s1: 'mod_broken', s2: 'pred_whisper' }
- **text**: 壊れた封印が祭壇から囁いている。声が途切れ途切れだ。封印が解けかけている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 屈強な × 囁いている
- **ID**: e05_mighty_whisper
- **conditions**: { s1: 'mod_mighty', s2: 'pred_whisper' }
- **text**: 屈強な封印が祭壇から囁いている。囁きなのに地鳴りがする。封印の力がまだ健在だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 囁いている
- **ID**: e05_frozen_whisper
- **conditions**: { s1: 'mod_frozen', s2: 'pred_whisper' }
- **text**: 凍てついた封印が祭壇から囁いている。吐く言葉が白い。聞くと体が冷える。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 囁いている
- **ID**: e05_clear_whisper
- **conditions**: { s1: 'mod_clear', s2: 'pred_whisper' }
- **text**: 透き通った封印が祭壇から囁いている。澄んだ声。封印の名前を教えてくれた。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '封印の名', description: '聞いた名前が頭から離れない。力がある', sellPrice: 15 }

### 呪われた × 囁いている
- **ID**: e05_cursed_whisper
- **conditions**: { s1: 'mod_cursed', s2: 'pred_whisper' }
- **text**: 呪われた封印が祭壇から囁いている。聞くと頭が痛くなる。封じたものの声が混じっている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 囁いている
- **ID**: e05_sleepy_whisper
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_whisper' }
- **text**: 眠い封印が祭壇から囁いている。寝言のような声。封印が眠りに落ちかけている。危うい。
- **damage**: 3
- **quill**: 6
- **reward**: なし

---

## 逃げていく

### 小さな × 逃げていく
- **ID**: e05_small_flee
- **conditions**: { s1: 'mod_small', s2: 'pred_flee' }
- **text**: 小さな封印が祭壇から逃げていく。指先ほどの光が浮き上がって消えた。ほんの一片が解けた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 優しい × 逃げていく
- **ID**: e05_gentle_flee
- **conditions**: { s1: 'mod_gentle', s2: 'pred_flee' }
- **text**: 優しい封印が祭壇から逃げていく。温かい光が散っていく。役目を終えたのだ。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 逃げていく
- **ID**: e05_fire_flee
- **conditions**: { s1: 'mod_fire', s2: 'pred_flee' }
- **text**: 燃え盛る封印が祭壇から逃げていく。炎が暴走して封印が崩壊する。熱気が吹き出した。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 逃げていく
- **ID**: e05_hard_flee
- **conditions**: { s1: 'mod_hard', s2: 'pred_flee' }
- **text**: 堅い封印が祭壇から逃げていく。あの堅い封印が解けた。中から何かが出てくる。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 鋭い × 逃げていく
- **ID**: e05_sharp_flee
- **conditions**: { s1: 'mod_sharp', s2: 'pred_flee' }
- **text**: 鋭い封印が祭壇から逃げていく。散った光の破片が刃のように飛び散る。傷を負った。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 逃げていく
- **ID**: e05_broken_flee
- **conditions**: { s1: 'mod_broken', s2: 'pred_flee' }
- **text**: 壊れた封印が祭壇から逃げていく。もう保たない。封印が完全に解ける。何が出てくるのか。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 屈強な × 逃げていく
- **ID**: e05_mighty_flee
- **conditions**: { s1: 'mod_mighty', s2: 'pred_flee' }
- **text**: 屈強な封印が祭壇から逃げていく。あの強力な封印が解けた。封じていたものの力は想像を超える。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 凍てついた × 逃げていく
- **ID**: e05_frozen_flee
- **conditions**: { s1: 'mod_frozen', s2: 'pred_flee' }
- **text**: 凍てついた封印が祭壇から逃げていく。氷が溶けるように消えていく。封印の間が温かくなった。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 透き通った × 逃げていく
- **ID**: e05_clear_flee
- **conditions**: { s1: 'mod_clear', s2: 'pred_flee' }
- **text**: 透き通った封印が祭壇から逃げていく。澄んだ光が天井を突き抜けた。浄化されて消えたのだ。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '解放の光', description: '封印が消えた跡に残った光。温かい', sellPrice: 12 }

### 呪われた × 逃げていく
- **ID**: e05_cursed_flee
- **conditions**: { s1: 'mod_cursed', s2: 'pred_flee' }
- **text**: 呪われた封印が祭壇から逃げていく。封印と呪いが共に散った。だが呪いの残滓が漂っている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 眠い × 逃げていく
- **ID**: e05_sleepy_flee
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_flee' }
- **text**: 眠い封印が祭壇から逃げていく。寝ぼけたまま解けてしまった。封印が眠りに勝てなかった。
- **damage**: 3
- **quill**: 7
- **reward**: { name: '眠る封印の欠片', description: '持つと眠くなる光の欠片。まだ寝ている', sellPrice: 8 }

---

## 歌っている

### 小さな × 歌っている
- **ID**: e05_small_sing
- **conditions**: { s1: 'mod_small', s2: 'pred_sing' }
- **text**: 小さな封印が祭壇から歌っている。鼻歌のような旋律。かろうじて聞こえる。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 歌っている
- **ID**: e05_gentle_sing
- **conditions**: { s1: 'mod_gentle', s2: 'pred_sing' }
- **text**: 優しい封印が祭壇から歌っている。子守唄のような旋律。封じたものを寝かしつけている。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '封印の子守唄', description: '聞くと穏やかになる旋律。何かを鎮めている', sellPrice: 12 }

### 燃え盛る × 歌っている
- **ID**: e05_fire_sing
- **conditions**: { s1: 'mod_fire', s2: 'pred_sing' }
- **text**: 燃え盛る封印が祭壇から歌っている。戦の歌だ。炎の封印が戦い続けている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 堅い × 歌っている
- **ID**: e05_hard_sing
- **conditions**: { s1: 'mod_hard', s2: 'pred_sing' }
- **text**: 堅い封印が祭壇から歌っている。止められない歌。何千年も同じ旋律を繰り返している。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 鋭い × 歌っている
- **ID**: e05_sharp_sing
- **conditions**: { s1: 'mod_sharp', s2: 'pred_sing' }
- **text**: 鋭い封印が祭壇から歌っている。金切り声。封印の間の壁にひびが入った。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 歌っている（初期値）
- **ID**: e05_broken_sing
- **conditions**: { s1: 'mod_broken', s2: 'pred_sing' }
- **text**: 壊れた封印が祭壇から歌っている。旋律が途切れ途切れだ。同じ節を繰り返す。綻びかけている。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 屈強な × 歌っている
- **ID**: e05_mighty_sing
- **conditions**: { s1: 'mod_mighty', s2: 'pred_sing' }
- **text**: 屈強な封印が祭壇から歌っている。大地を震わせる合唱。封印の力は健在だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 歌っている
- **ID**: e05_frozen_sing
- **conditions**: { s1: 'mod_frozen', s2: 'pred_sing' }
- **text**: 凍てついた封印が祭壇から歌っている。聴くと体が動かなくなる。封印の歌は凍結の呪文だ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 透き通った × 歌っている
- **ID**: e05_clear_sing
- **conditions**: { s1: 'mod_clear', s2: 'pred_sing' }
- **text**: 透き通った封印が祭壇から歌っている。純粋な旋律。雑念が消え、封印の意味が胸に響く。
- **damage**: 0
- **quill**: 8
- **reward**: なし

### 呪われた × 歌っている
- **ID**: e05_cursed_sing
- **conditions**: { s1: 'mod_cursed', s2: 'pred_sing' }
- **text**: 呪われた封印が祭壇から歌っている。一度聴くと頭から離れない。封じたものの声が混じる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 歌っている
- **ID**: e05_sleepy_sing
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_sing' }
- **text**: 眠い封印が祭壇から歌っている。子守唄が自分に効いている。封印が眠りかけている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

---

## 踊っている

### 小さな × 踊っている
- **ID**: e05_small_dance
- **conditions**: { s1: 'mod_small', s2: 'pred_dance' }
- **text**: 小さな封印が祭壇から踊っている。指先ほどの光がくるくる回っている。微笑ましいが、封印がそんなことをしていていいのか。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 優しい × 踊っている
- **ID**: e05_gentle_dance
- **conditions**: { s1: 'mod_gentle', s2: 'pred_dance' }
- **text**: 優しい封印が祭壇から踊っている。穏やかな光の舞。封じたものを楽しませているのだ。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 燃え盛る × 踊っている
- **ID**: e05_fire_dance
- **conditions**: { s1: 'mod_fire', s2: 'pred_dance' }
- **text**: 燃え盛る封印が祭壇から踊っている。炎の踊り。封印の間が炉のように熱い。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 堅い × 踊っている
- **ID**: e05_hard_dance
- **conditions**: { s1: 'mod_hard', s2: 'pred_dance' }
- **text**: 堅い封印が祭壇から踊っている。ぎこちない動き。何千年ぶりに動いたのだろう。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 鋭い × 踊っている
- **ID**: e05_sharp_dance
- **conditions**: { s1: 'mod_sharp', s2: 'pred_dance' }
- **text**: 鋭い封印が祭壇から踊っている。踊りの軌跡が刃のように空を切る。壁に切り傷が走った。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 壊れた × 踊っている
- **ID**: e05_broken_dance
- **conditions**: { s1: 'mod_broken', s2: 'pred_dance' }
- **text**: 壊れた封印が祭壇から踊っている。痙攣のような動き。封印が制御を失っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 屈強な × 踊っている
- **ID**: e05_mighty_dance
- **conditions**: { s1: 'mod_mighty', s2: 'pred_dance' }
- **text**: 屈強な封印が祭壇から踊っている。地面が揺れる。封印の力で封印の間が震えている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 凍てついた × 踊っている
- **ID**: e05_frozen_dance
- **conditions**: { s1: 'mod_frozen', s2: 'pred_dance' }
- **text**: 凍てついた封印が祭壇から踊っている。氷の結晶が舞う。美しいが、触れると凍傷する。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '氷の舞の欠片', description: '凍った光が踊る結晶。溶けない', sellPrice: 10 }

### 透き通った × 踊っている
- **ID**: e05_clear_dance
- **conditions**: { s1: 'mod_clear', s2: 'pred_dance' }
- **text**: 透き通った封印が祭壇から踊っている。光の舞。見惚れる。時間を忘れた。
- **damage**: 0
- **quill**: 8
- **reward**: なし

### 呪われた × 踊っている
- **ID**: e05_cursed_dance
- **conditions**: { s1: 'mod_cursed', s2: 'pred_dance' }
- **text**: 呪われた封印が祭壇から踊っている。狂った踊り。見ていると体が勝手に動き出す。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 踊っている
- **ID**: e05_sleepy_dance
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_dance' }
- **text**: 眠い封印が祭壇から踊っている。ゆらゆらと揺れている。踊りというより、寝ぼけている。
- **damage**: 2
- **quill**: 6
- **reward**: なし

---

## 笑っている

### 小さな × 笑っている
- **ID**: e05_small_laugh
- **conditions**: { s1: 'mod_small', s2: 'pred_laugh' }
- **text**: 小さな封印が祭壇から笑っている。子供の笑い声のような高い音。不気味だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 優しい × 笑っている
- **ID**: e05_gentle_laugh
- **conditions**: { s1: 'mod_gentle', s2: 'pred_laugh' }
- **text**: 優しい封印が祭壇から笑っている。温かい笑い声。封印の間に安らぎが満ちる。
- **damage**: 0
- **quill**: 6
- **reward**: なし

### 燃え盛る × 笑っている
- **ID**: e05_fire_laugh
- **conditions**: { s1: 'mod_fire', s2: 'pred_laugh' }
- **text**: 燃え盛る封印が祭壇から笑っている。炎の中から哄笑。封じたものが封印を嘲っている。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 堅い × 笑っている
- **ID**: e05_hard_laugh
- **conditions**: { s1: 'mod_hard', s2: 'pred_laugh' }
- **text**: 堅い封印が祭壇から笑っている。石の中から低い笑い声。何千年もかけた冗談だ。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 鋭い × 笑っている
- **ID**: e05_sharp_laugh
- **conditions**: { s1: 'mod_sharp', s2: 'pred_laugh' }
- **text**: 鋭い封印が祭壇から笑っている。嘲笑だ。こちらの弱さを見抜いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 笑っている
- **ID**: e05_broken_laugh
- **conditions**: { s1: 'mod_broken', s2: 'pred_laugh' }
- **text**: 壊れた封印が祭壇から笑っている。壊れた笑い声。同じ音を繰り返す。レコードが擦り切れたように。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 屈強な × 笑っている
- **ID**: e05_mighty_laugh
- **conditions**: { s1: 'mod_mighty', s2: 'pred_laugh' }
- **text**: 屈強な封印が祭壇から笑っている。大地を震わせる哄笑。封印の力で笑っている。恐ろしい。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 凍てついた × 笑っている
- **ID**: e05_frozen_laugh
- **conditions**: { s1: 'mod_frozen', s2: 'pred_laugh' }
- **text**: 凍てついた封印が祭壇から笑っている。冷たい笑い声。聞くと背筋が凍る。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 笑っている
- **ID**: e05_clear_laugh
- **conditions**: { s1: 'mod_clear', s2: 'pred_laugh' }
- **text**: 透き通った封印が祭壇から笑っている。純粋な笑い声。邪気がない。封印が楽しんでいる。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 笑っている
- **ID**: e05_cursed_laugh
- **conditions**: { s1: 'mod_cursed', s2: 'pred_laugh' }
- **text**: 呪われた封印が祭壇から笑っている。笑いながら泣いている。封印と呪いが混ざり合っている。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '泣き笑いの封', description: '封印の感情が固まったもの。持つと気分が乱れる', sellPrice: 10 }

### 眠い × 笑っている
- **ID**: e05_sleepy_laugh
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_laugh' }
- **text**: 眠い封印が祭壇から笑っている。寝笑いだ。夢の中で何が面白いのだろう。
- **damage**: 2
- **quill**: 6
- **reward**: なし

---

## 輝く

### 小さな × 輝く
- **ID**: e05_small_shine
- **conditions**: { s1: 'mod_small', s2: 'pred_shine' }
- **text**: 小さな封印が祭壇から輝く。蛍の光のように頼りない。だが確かに光っている。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 輝く
- **ID**: e05_gentle_shine
- **conditions**: { s1: 'mod_gentle', s2: 'pred_shine' }
- **text**: 優しい封印が祭壇から輝く。温かい光が封印の間を満たす。傷が少し癒えた。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 輝く
- **ID**: e05_fire_shine
- **conditions**: { s1: 'mod_fire', s2: 'pred_shine' }
- **text**: 燃え盛る封印が祭壇から輝く。目が眩む。封印の間が白く焼ける。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 堅い × 輝く
- **ID**: e05_hard_shine
- **conditions**: { s1: 'mod_hard', s2: 'pred_shine' }
- **text**: 堅い封印が祭壇から輝く。揺るがない光。何千年も変わらず光り続けている。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 鋭い × 輝く
- **ID**: e05_sharp_shine
- **conditions**: { s1: 'mod_sharp', s2: 'pred_shine' }
- **text**: 鋭い封印が祭壇から輝く。光が矢のように刺す。目を開けていられない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 輝く
- **ID**: e05_broken_shine
- **conditions**: { s1: 'mod_broken', s2: 'pred_shine' }
- **text**: 壊れた封印が祭壇から輝く。光が明滅する。点いたり消えたり。もう長くない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 屈強な × 輝く
- **ID**: e05_mighty_shine
- **conditions**: { s1: 'mod_mighty', s2: 'pred_shine' }
- **text**: 屈強な封印が祭壇から輝く。太陽のような光。封印の間が真昼のように明るい。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 凍てついた × 輝く
- **ID**: e05_frozen_shine
- **conditions**: { s1: 'mod_frozen', s2: 'pred_shine' }
- **text**: 凍てついた封印が祭壇から輝く。氷越しに光る。冷たい輝きだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 輝く
- **ID**: e05_clear_shine
- **conditions**: { s1: 'mod_clear', s2: 'pred_shine' }
- **text**: 透き通った封印が祭壇から輝く。純粋な光。穢れだけを焼く浄化の輝きだ。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '浄化の光', description: '封印から溢れた純粋な光。暗闇を祓う', sellPrice: 15 }

### 呪われた × 輝く
- **ID**: e05_cursed_shine
- **conditions**: { s1: 'mod_cursed', s2: 'pred_shine' }
- **text**: 呪われた封印が祭壇から輝く。黒い光。矛盾した輝きが封印の間を暗くする。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 輝く
- **ID**: e05_sleepy_shine
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_shine' }
- **text**: 眠い封印が祭壇から輝く。ぼんやりした光。催眠的に揺れる。眠くなる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 降り注いでいる

### 小さな × 降り注いでいる
- **ID**: e05_small_rain_pred
- **conditions**: { s1: 'mod_small', s2: 'pred_rain' }
- **text**: 小さな封印が祭壇から降り注いでいる。光の粒が細かく散る。霧雨のような封印。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 優しい × 降り注いでいる
- **ID**: e05_gentle_rain_pred
- **conditions**: { s1: 'mod_gentle', s2: 'pred_rain' }
- **text**: 優しい封印が祭壇から降り注いでいる。温かい光の雨。傷を洗い清める。
- **damage**: -1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 降り注いでいる
- **ID**: e05_fire_rain_pred
- **conditions**: { s1: 'mod_fire', s2: 'pred_rain' }
- **text**: 燃え盛る封印が祭壇から降り注いでいる。火の雨。封印が解ければこの雨が世界を焼く。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 堅い × 降り注いでいる
- **ID**: e05_hard_rain_pred
- **conditions**: { s1: 'mod_hard', s2: 'pred_rain' }
- **text**: 堅い封印が祭壇から降り注いでいる。石のように硬い光の粒が叩きつける。痛い。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 鋭い × 降り注いでいる
- **ID**: e05_sharp_rain_pred
- **conditions**: { s1: 'mod_sharp', s2: 'pred_rain' }
- **text**: 鋭い封印が祭壇から降り注いでいる。針のような光が肌に刺さる。封印の破片だ。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 壊れた × 降り注いでいる
- **ID**: e05_broken_rain_pred
- **conditions**: { s1: 'mod_broken', s2: 'pred_rain' }
- **text**: 壊れた封印が祭壇から降り注いでいる。色のおかしい光が途切れ途切れに降る。封印が崩壊している。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 屈強な × 降り注いでいる
- **ID**: e05_mighty_rain_pred
- **conditions**: { s1: 'mod_mighty', s2: 'pred_rain' }
- **text**: 屈強な封印が祭壇から降り注いでいる。滝のような光量。封印の間が光に沈む。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 凍てついた × 降り注いでいる
- **ID**: e05_frozen_rain_pred
- **conditions**: { s1: 'mod_frozen', s2: 'pred_rain' }
- **text**: 凍てついた封印が祭壇から降り注いでいる。凍った光の粒が降る。封印の間が白く染まる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 透き通った × 降り注いでいる
- **ID**: e05_clear_rain_pred
- **conditions**: { s1: 'mod_clear', s2: 'pred_rain' }
- **text**: 透き通った封印が祭壇から降り注いでいる。澄んだ光の雨。浴びると心が清まる。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 降り注いでいる
- **ID**: e05_cursed_rain_pred
- **conditions**: { s1: 'mod_cursed', s2: 'pred_rain' }
- **text**: 呪われた封印が祭壇から降り注いでいる。黒い光の雨。浴びると体が重くなる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 降り注いでいる
- **ID**: e05_sleepy_rain_pred
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_rain' }
- **text**: 眠い封印が祭壇から降り注いでいる。光の雨が催眠的に揺れる。眠くなる。
- **damage**: 2
- **quill**: 5
- **reward**: なし

---

## 溶けている

### 小さな × 溶けている
- **ID**: e05_small_melt
- **conditions**: { s1: 'mod_small', s2: 'pred_melt' }
- **text**: 小さな封印が祭壇から溶けている。指先ほどの封印が水のように溶ける。もう止められない。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 優しい × 溶けている
- **ID**: e05_gentle_melt
- **conditions**: { s1: 'mod_gentle', s2: 'pred_melt' }
- **text**: 優しい封印が祭壇から溶けている。温かく溶けていく。役目を終えて安らかに消えるのだ。
- **damage**: 1
- **quill**: 7
- **reward**: なし

### 燃え盛る × 溶けている
- **ID**: e05_fire_melt
- **conditions**: { s1: 'mod_fire', s2: 'pred_melt' }
- **text**: 燃え盛る封印が祭壇から溶けている。炎で封印が溶ける。中から熱気が噴き出す。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 堅い × 溶けている
- **ID**: e05_hard_melt
- **conditions**: { s1: 'mod_hard', s2: 'pred_melt' }
- **text**: 堅い封印が祭壇から溶けている。あの堅い封印が溶けるとは。封じたものの力が想像を超える。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 鋭い × 溶けている
- **ID**: e05_sharp_melt
- **conditions**: { s1: 'mod_sharp', s2: 'pred_melt' }
- **text**: 鋭い封印が祭壇から溶けている。溶けた跡が鋭い。触れると切れる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 壊れた × 溶けている
- **ID**: e05_broken_melt
- **conditions**: { s1: 'mod_broken', s2: 'pred_melt' }
- **text**: 壊れた封印が祭壇から溶けている。もう保たない。封印が泥のように崩れていく。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 屈強な × 溶けている
- **ID**: e05_mighty_melt
- **conditions**: { s1: 'mod_mighty', s2: 'pred_melt' }
- **text**: 屈強な封印が祭壇から溶けている。あの強大な封印が溶けるのだ。何を封じていたのか。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 凍てついた × 溶けている
- **ID**: e05_frozen_melt
- **conditions**: { s1: 'mod_frozen', s2: 'pred_melt' }
- **text**: 凍てついた封印が祭壇から溶けている。氷が水に戻る。封印の間が温かくなった。呪いが解ける兆し。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '溶けた封印の水', description: '封印が溶けた水。不思議と温かい', sellPrice: 10 }

### 透き通った × 溶けている
- **ID**: e05_clear_melt
- **conditions**: { s1: 'mod_clear', s2: 'pred_melt' }
- **text**: 透き通った封印が祭壇から溶けている。澄んだ水のように溶ける。浄化されて消えるのだ。
- **damage**: 0
- **quill**: 7
- **reward**: なし

### 呪われた × 溶けている
- **ID**: e05_cursed_melt
- **conditions**: { s1: 'mod_cursed', s2: 'pred_melt' }
- **text**: 呪われた封印が祭壇から溶けている。封印と呪いが混じり合いながら溶ける。黒い水が広がる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 眠い × 溶けている
- **ID**: e05_sleepy_melt
- **conditions**: { s1: 'mod_sleepy', s2: 'pred_melt' }
- **text**: 眠い封印が祭壇から溶けている。ゆっくり溶ける。寝ている間に解けてしまいそうだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 99 |
| rewardItem数 | 19 |
| reward率 | 19.2% |
| damage平均 | 2.6 |
| quill平均 | 5.5 |
| damage=0の割合 | 13.1% (13/99) |
| damage≥4の割合 | 33.3% (33/99) |
| quill≥6の割合 | 36.4% (36/99) |
