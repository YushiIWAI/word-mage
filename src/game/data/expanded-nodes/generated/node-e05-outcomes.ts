// Auto-generated from node-e05-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeE05Outcomes: Outcome[] = [
  {
    id: 'e05_small_gaze',
    conditions: { s1: 'mod_small', s2: 'pred_gaze' },
    resultText: '小さな封印が祭壇から見つめている。指先ほどの光が揺れている。もう力は残っていない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_gentle_gaze',
    conditions: { s1: 'mod_gentle', s2: 'pred_gaze' },
    resultText: '優しい封印が祭壇から見つめている。温かい光がこちらを包む。守ろうとしてくれている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e05_fire_gaze',
    conditions: { s1: 'mod_fire', s2: 'pred_gaze' },
    resultText: '燃え盛る封印が祭壇から見つめている。封印自体が炎を纏っている。近づくと肌が灼ける。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_hard_gaze',
    conditions: { s1: 'mod_hard', s2: 'pred_gaze' },
    resultText: '堅い封印が祭壇から見つめている。揺るがない光圧に押し返される。一歩も近づけないまま体力だけが削れていく。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e05_sharp_gaze',
    conditions: { s1: 'mod_sharp', s2: 'pred_gaze' },
    resultText: '鋭い封印が祭壇から見つめている。光が矢のように刺さる。侵入者を裁いている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_broken_gaze',
    conditions: { s1: 'mod_broken', s2: 'pred_gaze' },
    resultText: '壊れた封印が祭壇から見つめている。光が明滅している。もう長くは保たない。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_mighty_gaze',
    conditions: { s1: 'mod_mighty', s2: 'pred_gaze' },
    resultText: '屈強な封印が祭壇から見つめている。圧倒的な光圧。目を開けていられない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_frozen_gaze',
    conditions: { s1: 'mod_frozen', s2: 'pred_gaze' },
    resultText: '凍てついた封印が祭壇から見つめている。冷たい光が空気を凍らせる。息が白い。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_clear_gaze',
    conditions: { s1: 'mod_clear', s2: 'pred_gaze' },
    resultText: '透き通った封印が祭壇から見つめている。純粋な光。嘘も幻も見通す。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e05_clear_gaze', name: '封印の瞳', description: '見通す光の欠片。覗くと真実が見える', sellPrice: 12 }]
  },
  {
    id: 'e05_cursed_gaze',
    conditions: { s1: 'mod_cursed', s2: 'pred_gaze' },
    resultText: '呪われた封印が祭壇から見つめている。封じていたものの呪いが封印に移っている。目が赤い。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_gaze',
    conditions: { s1: 'mod_sleepy', s2: 'pred_gaze' },
    resultText: '眠い封印が祭壇から見つめている。光がぼんやりしている。封印も眠りかけている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_small_whisper',
    conditions: { s1: 'mod_small', s2: 'pred_whisper' },
    resultText: '小さな封印が祭壇から囁いている。耳を澄まさないと聞こえない。何かの警告だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_gentle_whisper',
    conditions: { s1: 'mod_gentle', s2: 'pred_whisper' },
    resultText: '優しい封印が祭壇から囁いている。安心させるような声。大丈夫だ、まだ保っている。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e05_gentle_whisper', name: '封印の囁き', description: '瓶に詰めた声。開けると安心する', sellPrice: 10 }]
  },
  {
    id: 'e05_fire_whisper',
    conditions: { s1: 'mod_fire', s2: 'pred_whisper' },
    resultText: '燃え盛る封印が祭壇から囁いている。炎の中から聞こえる声。焼けるような言葉だ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_hard_whisper',
    conditions: { s1: 'mod_hard', s2: 'pred_whisper' },
    resultText: '堅い封印が祭壇から囁いている。石に刻まれた呪文が読み上げられ、聞いた者の足が石のように重くなる。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e05_sharp_whisper',
    conditions: { s1: 'mod_sharp', s2: 'pred_whisper' },
    resultText: '鋭い封印が祭壇から囁いている。言葉が刃のように切りつける。真実を突きつけられた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_broken_whisper',
    conditions: { s1: 'mod_broken', s2: 'pred_whisper' },
    resultText: '壊れた封印が祭壇から囁いている。声が途切れ途切れだ。封印が解けかけている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_mighty_whisper',
    conditions: { s1: 'mod_mighty', s2: 'pred_whisper' },
    resultText: '屈強な封印が祭壇から囁いている。囁きなのに地鳴りがする。封印の力がまだ健在だ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_frozen_whisper',
    conditions: { s1: 'mod_frozen', s2: 'pred_whisper' },
    resultText: '凍てついた封印が祭壇から囁いている。吐く言葉が白い。聞くと体が冷える。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_clear_whisper',
    conditions: { s1: 'mod_clear', s2: 'pred_whisper' },
    resultText: '透き通った封印が祭壇から囁いている。澄んだ声。封印の名前を教えてくれた。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e05_clear_whisper', name: '封印の名', description: '聞いた名前が頭から離れない。力がある', sellPrice: 15 }]
  },
  {
    id: 'e05_cursed_whisper',
    conditions: { s1: 'mod_cursed', s2: 'pred_whisper' },
    resultText: '呪われた封印が祭壇から囁いている。聞くと頭が痛くなる。封じたものの声が混じっている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s2: 'pred_whisper' },
    resultText: '眠い封印が祭壇から囁いている。寝言のような声。封印が眠りに落ちかけている。危うい。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_small_flee',
    conditions: { s1: 'mod_small', s2: 'pred_flee' },
    resultText: '小さな封印が祭壇から逃げていく。指先ほどの光が浮き上がって消えた。ほんの一片が解けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_gentle_flee',
    conditions: { s1: 'mod_gentle', s2: 'pred_flee' },
    resultText: '優しい封印が祭壇から逃げていく。温かい光が散っていく。役目を終えたのだ。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e05_fire_flee',
    conditions: { s1: 'mod_fire', s2: 'pred_flee' },
    resultText: '燃え盛る封印が祭壇から逃げていく。炎が暴走して封印が崩壊する。熱気が吹き出した。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e05_hard_flee',
    conditions: { s1: 'mod_hard', s2: 'pred_flee' },
    resultText: '堅い封印が祭壇から逃げていく。あの堅い封印が解けた。中から何かが出てくる。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e05_sharp_flee',
    conditions: { s1: 'mod_sharp', s2: 'pred_flee' },
    resultText: '鋭い封印が祭壇から逃げていく。散った光の破片が刃のように飛び散る。傷を負った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_broken_flee',
    conditions: { s1: 'mod_broken', s2: 'pred_flee' },
    resultText: '壊れた封印が祭壇から逃げていく。もう保たない。封印が完全に解ける。何が出てくるのか。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_mighty_flee',
    conditions: { s1: 'mod_mighty', s2: 'pred_flee' },
    resultText: '屈強な封印が祭壇から逃げていく。あの強力な封印が解けた。封じていたものの力は想像を超える。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e05_frozen_flee',
    conditions: { s1: 'mod_frozen', s2: 'pred_flee' },
    resultText: '凍てついた封印が祭壇から逃げていく。氷が溶けるように消えていく。封印の間が温かくなった。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_clear_flee',
    conditions: { s1: 'mod_clear', s2: 'pred_flee' },
    resultText: '透き通った封印が祭壇から逃げていく。澄んだ光が天井を突き抜けた。浄化されて消えたのだ。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e05_clear_flee', name: '解放の光', description: '封印が消えた跡に残った光。温かい', sellPrice: 12 }]
  },
  {
    id: 'e05_cursed_flee',
    conditions: { s1: 'mod_cursed', s2: 'pred_flee' },
    resultText: '呪われた封印が祭壇から逃げていく。封印と呪いが共に散った。だが呪いの残滓が漂っている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s2: 'pred_flee' },
    resultText: '眠い封印が祭壇から逃げていく。寝ぼけたまま解けてしまった。封印が眠りに勝てなかった。',
    damage: 3,
    quill: 7,
    rewardItems: [{ id: 'item_e05_sleepy_flee', name: '眠る封印の欠片', description: '持つと眠くなる光の欠片。まだ寝ている', sellPrice: 8 }]
  },
  {
    id: 'e05_small_sing',
    conditions: { s1: 'mod_small', s2: 'pred_sing' },
    resultText: '小さな封印が祭壇から歌っている。鼻歌のような旋律。かろうじて聞こえる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_gentle_sing',
    conditions: { s1: 'mod_gentle', s2: 'pred_sing' },
    resultText: '優しい封印が祭壇から歌っている。子守唄のような旋律。封じたものを寝かしつけている。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e05_gentle_sing', name: '封印の子守唄', description: '聞くと穏やかになる旋律。何かを鎮めている', sellPrice: 12 }]
  },
  {
    id: 'e05_fire_sing',
    conditions: { s1: 'mod_fire', s2: 'pred_sing' },
    resultText: '燃え盛る封印が祭壇から歌っている。戦の歌だ。炎の封印が戦い続けている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_hard_sing',
    conditions: { s1: 'mod_hard', s2: 'pred_sing' },
    resultText: '堅い封印が祭壇から歌っている。止められない歌。何千年も同じ旋律を繰り返している。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_sharp_sing',
    conditions: { s1: 'mod_sharp', s2: 'pred_sing' },
    resultText: '鋭い封印が祭壇から歌っている。金切り声。封印の間の壁にひびが入った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_broken_sing',
    conditions: { s1: 'mod_broken', s2: 'pred_sing' },
    resultText: '壊れた封印が祭壇から歌っている。旋律が途切れ途切れだ。同じ節を繰り返す。綻びかけている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e05_mighty_sing',
    conditions: { s1: 'mod_mighty', s2: 'pred_sing' },
    resultText: '屈強な封印が祭壇から歌っている。大地を震わせる合唱。封印の力は健在だ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_frozen_sing',
    conditions: { s1: 'mod_frozen', s2: 'pred_sing' },
    resultText: '凍てついた封印が祭壇から歌っている。聴くと体が動かなくなる。封印の歌は凍結の呪文だ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_clear_sing',
    conditions: { s1: 'mod_clear', s2: 'pred_sing' },
    resultText: '透き通った封印が祭壇から歌っている。純粋な旋律。雑念が消え、封印の意味が胸に響く。',
    damage: 0,
    quill: 8
  },
  {
    id: 'e05_cursed_sing',
    conditions: { s1: 'mod_cursed', s2: 'pred_sing' },
    resultText: '呪われた封印が祭壇から歌っている。一度聴くと頭から離れない。封じたものの声が混じる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s2: 'pred_sing' },
    resultText: '眠い封印が祭壇から歌っている。子守唄が自分に効いている。封印が眠りかけている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_small_dance',
    conditions: { s1: 'mod_small', s2: 'pred_dance' },
    resultText: '小さな封印が祭壇から踊っている。指先ほどの光がくるくる回っている。微笑ましいが、封印がそんなことをしていていいのか。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_gentle_dance',
    conditions: { s1: 'mod_gentle', s2: 'pred_dance' },
    resultText: '優しい封印が祭壇から踊っている。穏やかな光の舞。封じたものを楽しませているのだ。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e05_fire_dance',
    conditions: { s1: 'mod_fire', s2: 'pred_dance' },
    resultText: '燃え盛る封印が祭壇から踊っている。炎の踊り。封印の間が炉のように熱い。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_hard_dance',
    conditions: { s1: 'mod_hard', s2: 'pred_dance' },
    resultText: '堅い封印が祭壇から踊っている。ぎこちない動き。何千年ぶりに動いたのだろう。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_sharp_dance',
    conditions: { s1: 'mod_sharp', s2: 'pred_dance' },
    resultText: '鋭い封印が祭壇から踊っている。踊りの軌跡が刃のように空を切る。壁に切り傷が走った。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_broken_dance',
    conditions: { s1: 'mod_broken', s2: 'pred_dance' },
    resultText: '壊れた封印が祭壇から踊っている。痙攣のような動き。封印が制御を失っている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_mighty_dance',
    conditions: { s1: 'mod_mighty', s2: 'pred_dance' },
    resultText: '屈強な封印が祭壇から踊っている。地面が揺れる。封印の力で封印の間が震えている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_frozen_dance',
    conditions: { s1: 'mod_frozen', s2: 'pred_dance' },
    resultText: '凍てついた封印が祭壇から踊っている。氷の結晶が舞う。美しいが、触れると凍傷する。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e05_frozen_dance', name: '氷の舞の欠片', description: '凍った光が踊る結晶。溶けない', sellPrice: 10 }]
  },
  {
    id: 'e05_clear_dance',
    conditions: { s1: 'mod_clear', s2: 'pred_dance' },
    resultText: '透き通った封印が祭壇から踊っている。光の舞。見惚れる。時間を忘れた。',
    damage: 0,
    quill: 8
  },
  {
    id: 'e05_cursed_dance',
    conditions: { s1: 'mod_cursed', s2: 'pred_dance' },
    resultText: '呪われた封印が祭壇から踊っている。狂った踊り。見ていると体が勝手に動き出す。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s2: 'pred_dance' },
    resultText: '眠い封印が祭壇から踊っている。ゆらゆらと揺れている。踊りというより、寝ぼけている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_small_laugh',
    conditions: { s1: 'mod_small', s2: 'pred_laugh' },
    resultText: '小さな封印が祭壇から笑っている。子供の笑い声のような高い音。不気味だ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e05_gentle_laugh',
    conditions: { s1: 'mod_gentle', s2: 'pred_laugh' },
    resultText: '優しい封印が祭壇から笑っている。温かい笑い声。封印の間に安らぎが満ちる。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e05_fire_laugh',
    conditions: { s1: 'mod_fire', s2: 'pred_laugh' },
    resultText: '燃え盛る封印が祭壇から笑っている。炎の中から哄笑。封じたものが封印を嘲っている。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e05_hard_laugh',
    conditions: { s1: 'mod_hard', s2: 'pred_laugh' },
    resultText: '堅い封印が祭壇から笑っている。低い笑い声が骨まで響く。笑われている意味がわからず、正気が軋む。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e05_sharp_laugh',
    conditions: { s1: 'mod_sharp', s2: 'pred_laugh' },
    resultText: '鋭い封印が祭壇から笑っている。嘲笑だ。こちらの弱さを見抜いている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_broken_laugh',
    conditions: { s1: 'mod_broken', s2: 'pred_laugh' },
    resultText: '壊れた封印が祭壇から笑っている。壊れた笑い声。同じ音を繰り返す。レコードが擦り切れたように。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e05_mighty_laugh',
    conditions: { s1: 'mod_mighty', s2: 'pred_laugh' },
    resultText: '屈強な封印が祭壇から笑っている。大地を震わせる哄笑。封印の力で笑っている。恐ろしい。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_frozen_laugh',
    conditions: { s1: 'mod_frozen', s2: 'pred_laugh' },
    resultText: '凍てついた封印が祭壇から笑っている。冷たい笑い声。聞くと背筋が凍る。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_clear_laugh',
    conditions: { s1: 'mod_clear', s2: 'pred_laugh' },
    resultText: '透き通った封印が祭壇から笑っている。純粋な笑い声。邪気がない。封印が楽しんでいる。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e05_cursed_laugh',
    conditions: { s1: 'mod_cursed', s2: 'pred_laugh' },
    resultText: '呪われた封印が祭壇から笑っている。笑いながら泣いている。封印と呪いが混ざり合っている。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e05_cursed_laugh', name: '泣き笑いの封', description: '封印の感情が固まったもの。持つと気分が乱れる', sellPrice: 10 }]
  },
  {
    id: 'e05_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s2: 'pred_laugh' },
    resultText: '眠い封印が祭壇から笑っている。寝笑いだ。夢の中で何が面白いのだろう。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e05_small_shine',
    conditions: { s1: 'mod_small', s2: 'pred_shine' },
    resultText: '小さな封印が祭壇から輝く。蛍の光のように頼りない。だが確かに光っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_gentle_shine',
    conditions: { s1: 'mod_gentle', s2: 'pred_shine' },
    resultText: '優しい封印が祭壇から輝く。温かい光が封印の間を満たす。傷が少し癒えた。',
    damage: -1,
    quill: 7
  },
  {
    id: 'e05_fire_shine',
    conditions: { s1: 'mod_fire', s2: 'pred_shine' },
    resultText: '燃え盛る封印が祭壇から輝く。目が眩む。封印の間が白く焼ける。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_hard_shine',
    conditions: { s1: 'mod_hard', s2: 'pred_shine' },
    resultText: '堅い封印が祭壇から輝く。揺るがない光が瞼を貫く。しばらく視界が白く焼け、壁に手をついた。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e05_sharp_shine',
    conditions: { s1: 'mod_sharp', s2: 'pred_shine' },
    resultText: '鋭い封印が祭壇から輝く。光が矢のように刺す。目を開けていられない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_broken_shine',
    conditions: { s1: 'mod_broken', s2: 'pred_shine' },
    resultText: '壊れた封印が祭壇から輝く。光が明滅するたび平衡感覚が揺さぶられる。吐き気がこみ上げた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e05_mighty_shine',
    conditions: { s1: 'mod_mighty', s2: 'pred_shine' },
    resultText: '屈強な封印が祭壇から輝く。太陽のような光。封印の間が真昼のように明るい。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_frozen_shine',
    conditions: { s1: 'mod_frozen', s2: 'pred_shine' },
    resultText: '凍てついた封印が祭壇から輝く。氷越しに光る。冷たい輝きだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_clear_shine',
    conditions: { s1: 'mod_clear', s2: 'pred_shine' },
    resultText: '透き通った封印が祭壇から輝く。純粋な光。穢れだけを焼く浄化の輝きだ。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e05_clear_shine', name: '浄化の光', description: '封印から溢れた純粋な光。暗闇を祓う', sellPrice: 15 }]
  },
  {
    id: 'e05_cursed_shine',
    conditions: { s1: 'mod_cursed', s2: 'pred_shine' },
    resultText: '呪われた封印が祭壇から輝く。黒い光。矛盾した輝きが封印の間を暗くする。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s2: 'pred_shine' },
    resultText: '眠い封印が祭壇から輝く。ぼんやりした光。催眠的に揺れる。眠くなる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e05_small_rain_pred',
    conditions: { s1: 'mod_small', s2: 'pred_rain_down' },
    resultText: '小さな封印が祭壇から降り注いでいる。光の粒が細かく散る。霧雨のような封印。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e05_gentle_rain_pred',
    conditions: { s1: 'mod_gentle', s2: 'pred_rain_down' },
    resultText: '優しい封印が祭壇から降り注いでいる。温かい光の雨。傷を洗い清める。',
    damage: -1,
    quill: 7
  },
  {
    id: 'e05_fire_rain_pred',
    conditions: { s1: 'mod_fire', s2: 'pred_rain_down' },
    resultText: '燃え盛る封印が祭壇から降り注いでいる。火の雨。封印が解ければこの雨が世界を焼く。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e05_hard_rain_pred',
    conditions: { s1: 'mod_hard', s2: 'pred_rain_down' },
    resultText: '堅い封印が祭壇から降り注いでいる。石のように硬い光の粒が叩きつける。痛い。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_sharp_rain_pred',
    conditions: { s1: 'mod_sharp', s2: 'pred_rain_down' },
    resultText: '鋭い封印が祭壇から降り注いでいる。針のような光が肌に刺さる。封印の破片だ。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_broken_rain_pred',
    conditions: { s1: 'mod_broken', s2: 'pred_rain_down' },
    resultText: '壊れた封印が祭壇から降り注いでいる。色のおかしい光が途切れ途切れに降る。封印が崩壊している。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_mighty_rain_pred',
    conditions: { s1: 'mod_mighty', s2: 'pred_rain_down' },
    resultText: '屈強な封印が祭壇から降り注いでいる。滝のような光量。封印の間が光に沈む。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e05_frozen_rain_pred',
    conditions: { s1: 'mod_frozen', s2: 'pred_rain_down' },
    resultText: '凍てついた封印が祭壇から降り注いでいる。凍った光の粒が降る。封印の間が白く染まる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_clear_rain_pred',
    conditions: { s1: 'mod_clear', s2: 'pred_rain_down' },
    resultText: '透き通った封印が祭壇から降り注いでいる。澄んだ光の雨。浴びると心が清まる。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e05_cursed_rain_pred',
    conditions: { s1: 'mod_cursed', s2: 'pred_rain_down' },
    resultText: '呪われた封印が祭壇から降り注いでいる。黒い光の雨。浴びると体が重くなる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_rain_pred',
    conditions: { s1: 'mod_sleepy', s2: 'pred_rain_down' },
    resultText: '眠い封印が祭壇から降り注いでいる。光の雨が催眠的に揺れる。眠くなる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e05_small_melt',
    conditions: { s1: 'mod_small', s2: 'pred_melt' },
    resultText: '小さな封印が祭壇から溶けている。溶けた光が足元に広がり、踏むと肌が焼ける。小さくても封印は封印だ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e05_gentle_melt',
    conditions: { s1: 'mod_gentle', s2: 'pred_melt' },
    resultText: '優しい封印が祭壇から溶けている。温かく溶けていく。役目を終えて安らかに消えるのだ。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e05_fire_melt',
    conditions: { s1: 'mod_fire', s2: 'pred_melt' },
    resultText: '燃え盛る封印が祭壇から溶けている。炎で封印が溶ける。中から熱気が噴き出す。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e05_hard_melt',
    conditions: { s1: 'mod_hard', s2: 'pred_melt' },
    resultText: '堅い封印が祭壇から溶けている。あの堅い封印が溶けるとは。封じたものの力が想像を超える。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e05_sharp_melt',
    conditions: { s1: 'mod_sharp', s2: 'pred_melt' },
    resultText: '鋭い封印が祭壇から溶けている。溶けた跡が鋭い。触れると切れる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e05_broken_melt',
    conditions: { s1: 'mod_broken', s2: 'pred_melt' },
    resultText: '壊れた封印が祭壇から溶けている。もう保たない。封印が泥のように崩れていく。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_mighty_melt',
    conditions: { s1: 'mod_mighty', s2: 'pred_melt' },
    resultText: '屈強な封印が祭壇から溶けている。あの強大な封印が溶けるのだ。何を封じていたのか。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e05_frozen_melt',
    conditions: { s1: 'mod_frozen', s2: 'pred_melt' },
    resultText: '凍てついた封印が祭壇から溶けている。氷が水に戻る。封印の間が温かくなった。呪いが解ける兆し。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e05_frozen_melt', name: '溶けた封印の水', description: '封印が溶けた水。不思議と温かい', sellPrice: 10 }]
  },
  {
    id: 'e05_clear_melt',
    conditions: { s1: 'mod_clear', s2: 'pred_melt' },
    resultText: '透き通った封印が祭壇から溶けている。澄んだ水のように溶ける。浄化されて消えるのだ。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e05_cursed_melt',
    conditions: { s1: 'mod_cursed', s2: 'pred_melt' },
    resultText: '呪われた封印が祭壇から溶けている。封印と呪いが混じり合いながら溶ける。黒い水が広がる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e05_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s2: 'pred_melt' },
    resultText: '眠い封印が祭壇から溶けている。ゆっくり溶ける。寝ている間に解けてしまいそうだ。',
    damage: 3,
    quill: 5
  },
];
