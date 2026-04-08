// Auto-generated from node-p19-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP19Outcomes: Outcome[] = [
  {
    id: 'p19_small_wait',
    conditions: { s1: 'mod_small', s4: 'pred_wait' },
    resultText: '小さな人形が祭壇に待っている。指人形ほどの大きさ。祭壇の隅にちょこんと座り、こちらを見上げている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_gentle_wait',
    conditions: { s1: 'mod_gentle', s4: 'pred_wait' },
    resultText: '優しい人形が祭壇に待っている。笑顔が縫われたくたくたの人形が、両手を広げて待っている。持ち主を慰めるために作られたものだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_wait',
    conditions: { s1: 'mod_fire', s4: 'pred_wait' },
    resultText: '燃え盛る人形が祭壇に待っている。藁人形が燃えながら祭壇の上で待っている。焚き上げの儀式。炎の中でもまだ燃え尽きない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_hard_wait',
    conditions: { s1: 'mod_hard', s4: 'pred_wait' },
    resultText: '堅い人形が祭壇に待っている。木彫りの人形が祭壇の中央に置かれている。関節がなく、表情もない。何百年もここで待っていたのだろう。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_sharp_wait',
    conditions: { s1: 'mod_sharp', s4: 'pred_wait' },
    resultText: '鋭い人形が祭壇に待っている。関節が刃になった操り人形が祭壇に吊り下がっている。糸が見えない。近づくと腕が動いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_broken_wait',
    conditions: { s1: 'mod_broken', s4: 'pred_wait' },
    resultText: '壊れた人形が祭壇に待っている。首がもげかけた人形が祭壇の上で待っている。残った目でこちらを見ている。修理を待っているのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_mighty_wait',
    conditions: { s1: 'mod_mighty', s4: 'pred_wait' },
    resultText: '屈強な人形が祭壇に待っている。等身大の木彫り人形が門番のように立っている。ゴーレム。命令を待って微動だにしない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_frozen_wait',
    conditions: { s1: 'mod_frozen', s4: 'pred_wait' },
    resultText: '凍てついた人形が祭壇に待っている。氷でできた人形が繊細な造形を保ったまま祭壇の上にある。恐怖の表情が凍りついている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_clear_wait',
    conditions: { s1: 'mod_clear', s4: 'pred_wait' },
    resultText: '透き通った人形が祭壇に待っている。硝子の人形が祭壇の上で光を受けている。中に液体が入っている。魂の容器だ。まだ空だ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p19_clear_wait', name: '空の器', description: '硝子の人形の欠片。何かを入れるために作られた', sellPrice: 10 }]
  },
  {
    id: 'p19_cursed_wait',
    conditions: { s1: 'mod_cursed', s4: 'pred_wait' },
    resultText: '呪われた人形が祭壇に待っている。夜になると位置が変わる人形が祭壇の中央に座っている。誰も動かしていない。泣き声がする。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p19_cursed_wait', name: '呪いの涙', description: '人形が流した涙。瓶に入れると振っても沈まない', sellPrice: 8 }]
  },
  {
    id: 'p19_sleepy_wait',
    conditions: { s1: 'mod_sleepy', s4: 'pred_wait' },
    resultText: '眠い人形が祭壇に待っている。目を閉じた人形が祭壇の上に横たわっている。百年埃をかぶっている。忘れられた供え物だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_small_sleep',
    conditions: { s1: 'mod_small', s4: 'pred_sleep' },
    resultText: '小さな人形が祭壇に眠っている。指人形が祭壇の溝に嵌まって眠っている。起こしても手のひらに収まるだけだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p19_gentle_sleep',
    conditions: { s1: 'mod_gentle', s4: 'pred_sleep' },
    resultText: '優しい人形が祭壇に眠っている。笑顔が縫われた人形が安らかに横たわっている。子供の寝顔のようだ。起こさずにおく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_sleep',
    conditions: { s1: 'mod_fire', s4: 'pred_sleep' },
    resultText: '燃え盛る人形が祭壇に眠っている。燃えているのに眠っている。祭壇が焦げている。炎が子守唄のように揺れている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_hard_sleep',
    conditions: { s1: 'mod_hard', s4: 'pred_sleep' },
    resultText: '堅い人形が祭壇に眠っている。木彫りの人形が石のように動かない。眠っているのか死んでいるのか。両方か。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p19_sharp_sleep',
    conditions: { s1: 'mod_sharp', s4: 'pred_sleep' },
    resultText: '鋭い人形が祭壇に眠っている。刃の関節の人形が祭壇に横たわっている。寝返りを打つたびに祭壇に傷がつく。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_broken_sleep',
    conditions: { s1: 'mod_broken', s4: 'pred_sleep' },
    resultText: '壊れた人形が祭壇に眠っている。ゼンマイが壊れた自動人形。もう動けない。祭壇で永遠の眠りについている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_mighty_sleep',
    conditions: { s1: 'mod_mighty', s4: 'pred_sleep' },
    resultText: '屈強な人形が祭壇に眠っている。ゴーレムが祭壇を枕にして寝ている。起こしたらどうなるか。起こさない方がいい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_frozen_sleep',
    conditions: { s1: 'mod_frozen', s4: 'pred_sleep' },
    resultText: '凍てついた人形が祭壇に眠っている。氷の人形が祭壇の冷気の中で永眠している。溶けたら二度と作れない造形。触れなかった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_clear_sleep',
    conditions: { s1: 'mod_clear', s4: 'pred_sleep' },
    resultText: '透き通った人形が祭壇に眠っている。硝子の人形が光の中で静かに横たわっている。中の液体がゆっくり揺れている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_cursed_sleep',
    conditions: { s1: 'mod_cursed', s4: 'pred_sleep' },
    resultText: '呪われた人形が祭壇に眠っている。目を閉じているが、閉じた瞼の下で目が動いている。夢を見ている。悪い夢だ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p19_sleepy_sleep',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sleep' },
    resultText: '眠い人形が祭壇に眠っている。横にすると目が閉じるあの仕掛け。祭壇が丁度いい角度なのだろう。心地よさそうだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_small_entangle',
    conditions: { s1: 'mod_small', s4: 'pred_entangle' },
    resultText: '小さな人形が祭壇に絡みついている。指人形が祭壇の装飾にしがみついている。小さい手で必死に掴んでいる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_gentle_entangle',
    conditions: { s1: 'mod_gentle', s4: 'pred_entangle' },
    resultText: '優しい人形が祭壇に絡みついている。くたくたの人形が祭壇の柱に抱きついている。離したくないのだろう。温かい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_entangle',
    conditions: { s1: 'mod_fire', s4: 'pred_entangle' },
    resultText: '燃え盛る人形が祭壇に絡みついている。燃える藁人形が祭壇に巻きつき、炎が石にまで燃え移っている。祭壇が崩れかけている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p19_hard_entangle',
    conditions: { s1: 'mod_hard', s4: 'pred_entangle' },
    resultText: '堅い人形が祭壇に絡みついている。木彫りの人形が祭壇の柱と一体化しかけている。根が生えたように動かない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_sharp_entangle',
    conditions: { s1: 'mod_sharp', s4: 'pred_entangle' },
    resultText: '鋭い人形が祭壇に絡みついている。刃の関節で祭壇を掴み、離そうとすると切りつけてくる。外そうとしたら手を切った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p19_broken_entangle',
    conditions: { s1: 'mod_broken', s4: 'pred_entangle' },
    resultText: '壊れた人形が祭壇に絡みついている。首がもげかけた人形がバラバラの部品で祭壇にしがみついている。修理を求めるかのよう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_mighty_entangle',
    conditions: { s1: 'mod_mighty', s4: 'pred_entangle' },
    resultText: '屈強な人形が祭壇に絡みついている。ゴーレムが祭壇を丸太の腕で抱え込んでいる。引き剥がせない。祭壇ごと動くかもしれない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_frozen_entangle',
    conditions: { s1: 'mod_frozen', s4: 'pred_entangle' },
    resultText: '凍てついた人形が祭壇に絡みついている。氷の人形が祭壇に張りつき、凍って一体化している。祭壇ごと霜に覆われている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_clear_entangle',
    conditions: { s1: 'mod_clear', s4: 'pred_entangle' },
    resultText: '透き通った人形が祭壇に絡みついている。硝子の人形が祭壇の装飾と一体化しかけている。気配だけがあり、見えない人形もいるかもしれない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_cursed_entangle',
    conditions: { s1: 'mod_cursed', s4: 'pred_entangle' },
    resultText: '呪われた人形が祭壇に絡みついている。人間の魂が閉じ込められた人形が祭壇から離れまいとしている。泣き声が響く。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p19_cursed_entangle', name: '祭壇の鎖', description: '人形を繋いでいた見えない鎖の欠片', sellPrice: 8 }]
  },
  {
    id: 'p19_sleepy_entangle',
    conditions: { s1: 'mod_sleepy', s4: 'pred_entangle' },
    resultText: '眠い人形が祭壇に絡みついている。眠りながら祭壇にしがみついている。寝ぼけて離さない。子供の寝相のようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_small_rain_pred',
    conditions: { s1: 'mod_small', s4: 'pred_rain_down' },
    resultText: '小さな人形が祭壇に降り注いでいる。指人形ほどの人形が空から次々と降ってくる。祭壇に積もっていく。何の儀式だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_gentle_rain_pred',
    conditions: { s1: 'mod_gentle', s4: 'pred_rain_down' },
    resultText: '優しい人形が祭壇に降り注いでいる。笑顔の人形が雨のように降る。祭壇が優しさで埋まっていく。不思議と温かい。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_p19_gentle_rain_pred', name: '慈雨の人形', description: '空から降ってきた笑顔の人形。握ると安らぐ', sellPrice: 8 }]
  },
  {
    id: 'p19_fire_rain_pred',
    conditions: { s1: 'mod_fire', s4: 'pred_rain_down' },
    resultText: '燃え盛る人形が祭壇に降り注いでいる。燃える藁人形が空から落ちてくる。祭壇が炎に包まれている。焚き上げの嵐だ。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p19_hard_rain_pred',
    conditions: { s1: 'mod_hard', s4: 'pred_rain_down' },
    resultText: '堅い人形が祭壇に降り注いでいる。木彫りの人形が雹のように降る。硬い。当たると痛い。祭壇が削れている。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p19_sharp_rain_pred',
    conditions: { s1: 'mod_sharp', s4: 'pred_rain_down' },
    resultText: '鋭い人形が祭壇に降り注いでいる。刃の関節の人形が空から落ちてくる。祭壇に突き刺さる。針の雨のようだ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p19_broken_rain_pred',
    conditions: { s1: 'mod_broken', s4: 'pred_rain_down' },
    resultText: '壊れた人形が祭壇に降り注いでいる。バラバラの部品が空から散らばってくる。頭、腕、脚。祭壇が人形の墓場になっている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_mighty_rain_pred',
    conditions: { s1: 'mod_mighty', s4: 'pred_rain_down' },
    resultText: '屈強な人形が祭壇に降り注いでいる。等身大のゴーレムが空から落ちてくる。祭壇が砕ける。地面が揺れた。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p19_frozen_rain_pred',
    conditions: { s1: 'mod_frozen', s4: 'pred_rain_down' },
    resultText: '凍てついた人形が祭壇に降り注いでいる。氷の人形が雪のように降っている。祭壇が霜で覆われていく。繊細な造形が積もる。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_p19_frozen_rain_pred', name: '氷の奉納品', description: '祭壇に降った氷人形の一体。溶けない', sellPrice: 10 }]
  },
  {
    id: 'p19_clear_rain_pred',
    conditions: { s1: 'mod_clear', s4: 'pred_rain_down' },
    resultText: '透き通った人形が祭壇に降り注いでいる。硝子の人形が光の雨のように降る。祭壇が虹色に輝いている。美しい儀式だ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p19_clear_rain_pred', name: '虹色の奉納品', description: '光を通すと虹が出る硝子人形の破片', sellPrice: 12 }]
  },
  {
    id: 'p19_cursed_rain_pred',
    conditions: { s1: 'mod_cursed', s4: 'pred_rain_down' },
    resultText: '呪われた人形が祭壇に降り注いでいる。泣き声と共に呪いの人形が空から降る。拾った者が捨てられなくなる。拾わない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_sleepy_rain_pred',
    conditions: { s1: 'mod_sleepy', s4: 'pred_rain_down' },
    resultText: '眠い人形が祭壇に降り注いでいる。目を閉じた人形がゆっくり舞い降りてくる。持つと眠くなる人形が積もっていく。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_small_whisper',
    conditions: { s1: 'mod_small', s4: 'pred_whisper' },
    resultText: '小さな人形が祭壇に囁いている。指人形が祭壇に口を寄せ、何かを囁いている。耳を近づけると聞こえる。「ここにいて」。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_gentle_whisper',
    conditions: { s1: 'mod_gentle', s4: 'pred_whisper' },
    resultText: '優しい人形が祭壇に囁いている。笑顔の人形が子守唄を囁いている。祭壇が温かい。傷が少しだけ楽になった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p19_fire_whisper',
    conditions: { s1: 'mod_fire', s4: 'pred_whisper' },
    resultText: '燃え盛る人形が祭壇に囁いている。燃える人形が炎の向こうから囁く。「燃やせ」。祭壇の木部が焦げ始めた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_hard_whisper',
    conditions: { s1: 'mod_hard', s4: 'pred_whisper' },
    resultText: '堅い人形が祭壇に囁いている。木彫りの人形の口が動かないのに、声が聞こえる。低く硬い声。「ここから動くな」。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_sharp_whisper',
    conditions: { s1: 'mod_sharp', s4: 'pred_whisper' },
    resultText: '鋭い人形が祭壇に囁いている。刃の人形が鋭い声で囁く。耳元で針が刺さるような声だ。「見ているぞ」。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p19_broken_whisper',
    conditions: { s1: 'mod_broken', s4: 'pred_whisper' },
    resultText: '壊れた人形が祭壇に囁いている。首がもげかけた人形が途切れ途切れに囁く。「直して……直し……なお……」。壊れた声が繰り返す。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_mighty_whisper',
    conditions: { s1: 'mod_mighty', s4: 'pred_whisper' },
    resultText: '屈強な人形が祭壇に囁いている。ゴーレムが地鳴りのような低い声で囁く。祭壇が振動する。「命令を」。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p19_frozen_whisper',
    conditions: { s1: 'mod_frozen', s4: 'pred_whisper' },
    resultText: '凍てついた人形が祭壇に囁いている。氷の人形から白い息のような囁きが漏れる。「寒い」。祭壇に霜が広がっている。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_p19_frozen_whisper', name: '凍る言葉', description: '人形が囁いた言葉が凍った結晶。握ると声が聞こえる', sellPrice: 10 }]
  },
  {
    id: 'p19_clear_whisper',
    conditions: { s1: 'mod_clear', s4: 'pred_whisper' },
    resultText: '透き通った人形が祭壇に囁いている。硝子の人形が透明な声で囁く。中の液体が声に合わせて波打つ。「入れて」。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p19_cursed_whisper',
    conditions: { s1: 'mod_cursed', s4: 'pred_whisper' },
    resultText: '呪われた人形が祭壇に囁いている。人間の魂が閉じ込められた人形が泣きながら囁く。「出して」。出せない。出したら何が起きるかわからない。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_p19_cursed_whisper', name: '封じられた声', description: '人形の囁きを閉じ込めた小瓶。開けると声が漏れる', sellPrice: 10 }]
  },
  {
    id: 'p19_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s4: 'pred_whisper' },
    resultText: '眠い人形が祭壇に囁いている。寝言のように途切れ途切れに囁く。「おやすみ……おやす……」。聴いていると眠くなる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_small_melt',
    conditions: { s1: 'mod_small', s4: 'pred_melt' },
    resultText: '小さな人形が祭壇に溶けている。指人形が祭壇の石に溶け込んでいく。顔だけが残っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_gentle_melt',
    conditions: { s1: 'mod_gentle', s4: 'pred_melt' },
    resultText: '優しい人形が祭壇に溶けている。笑顔の人形がゆっくり祭壇に溶け込んでいく。笑顔だけが石に残っている。温かい祭壇になった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p19_gentle_melt', name: '微笑みの祭壇片', description: '人形の笑顔が溶け込んだ石の欠片。見ると安らぐ', sellPrice: 8 }]
  },
  {
    id: 'p19_fire_melt',
    conditions: { s1: 'mod_fire', s4: 'pred_melt' },
    resultText: '燃え盛る人形が祭壇に溶けている。炎で自らを溶かしながら祭壇に染み込んでいく。祭壇が赤く熱い。踏めない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p19_hard_melt',
    conditions: { s1: 'mod_hard', s4: 'pred_melt' },
    resultText: '堅い人形が祭壇に溶けている。木彫りの人形がゆっくり石に沈んでいく。硬いはずなのに溶けている。時間が違うのだろう。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_sharp_melt',
    conditions: { s1: 'mod_sharp', s4: 'pred_melt' },
    resultText: '鋭い人形が祭壇に溶けている。刃の関節が祭壇に刺さったまま溶け込んでいく。触ると切れるので手が出せない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_broken_melt',
    conditions: { s1: 'mod_broken', s4: 'pred_melt' },
    resultText: '壊れた人形が祭壇に溶けている。バラバラの部品が別々の場所で祭壇に溶け込んでいる。もう元の形がわからない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_mighty_melt',
    conditions: { s1: 'mod_mighty', s4: 'pred_melt' },
    resultText: '屈強な人形が祭壇に溶けている。ゴーレムの巨体が祭壇に沈み込んでいく。祭壇が人形の形に変形している。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_frozen_melt',
    conditions: { s1: 'mod_frozen', s4: 'pred_melt' },
    resultText: '凍てついた人形が祭壇に溶けている。氷の人形が少しずつ溶けて祭壇を濡らしている。繊細な造形が消えていく。もったいない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_clear_melt',
    conditions: { s1: 'mod_clear', s4: 'pred_melt' },
    resultText: '透き通った人形が祭壇に溶けている。硝子の人形が祭壇に溶け込み、石が透明になっていく。祭壇が硝子に変わっている。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p19_clear_melt', name: '硝子の祭壇片', description: '人形が溶け込んで透明になった祭壇の欠片', sellPrice: 12 }]
  },
  {
    id: 'p19_cursed_melt',
    conditions: { s1: 'mod_cursed', s4: 'pred_melt' },
    resultText: '呪われた人形が祭壇に溶けている。呪いの人形が祭壇に溶け込み、祭壇自体が呪物になっていく。近づくと頭痛がする。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s4: 'pred_melt' },
    resultText: '眠い人形が祭壇に溶けている。目を閉じたまま祭壇に溶け込んでいる。寝たまま消えていく。安らかに見える。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_small_shine',
    conditions: { s1: 'mod_small', s4: 'pred_shine' },
    resultText: '小さな人形が祭壇に輝いている。指人形が星のように光っている。祭壇が小さな光で照らされる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_gentle_shine',
    conditions: { s1: 'mod_gentle', s4: 'pred_shine' },
    resultText: '優しい人形が祭壇に輝いている。笑顔の人形が温かい光を放っている。祭壇が暖炉のように温まった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p19_fire_shine',
    conditions: { s1: 'mod_fire', s4: 'pred_shine' },
    resultText: '燃え盛る人形が祭壇に輝いている。炎そのものが光源だ。祭壇が赤い光に染まっている。影が踊っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_hard_shine',
    conditions: { s1: 'mod_hard', s4: 'pred_shine' },
    resultText: '堅い人形が祭壇に輝いている。木彫りの人形の表面が鈍い光を放っている。何百年分の祈りが染み込んだ光だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_sharp_shine',
    conditions: { s1: 'mod_sharp', s4: 'pred_shine' },
    resultText: '鋭い人形が祭壇に輝いている。刃の関節が鋭い光を反射している。祭壇に光の線が走っている。目が眩む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_broken_shine',
    conditions: { s1: 'mod_broken', s4: 'pred_shine' },
    resultText: '壊れた人形が祭壇に輝いている。壊れているのに光っている。亀裂から光が漏れている。壊れたから光が見えるのか。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p19_broken_shine', name: '壊れた光', description: '人形の亀裂から漏れた光の欠片。持つと指が光る', sellPrice: 8 }]
  },
  {
    id: 'p19_mighty_shine',
    conditions: { s1: 'mod_mighty', s4: 'pred_shine' },
    resultText: '屈強な人形が祭壇に輝いている。ゴーレムが全身から光を放っている。祭壇が昼のように明るい。目を細めた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_frozen_shine',
    conditions: { s1: 'mod_frozen', s4: 'pred_shine' },
    resultText: '凍てついた人形が祭壇に輝いている。氷の人形が冷たい青白い光を放っている。祭壇が霜で覆われ、光の中に氷の花が咲く。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p19_frozen_shine', name: '氷花の灯', description: '氷の人形から零れた冷たい光。暗闇で青く光る', sellPrice: 10 }]
  },
  {
    id: 'p19_clear_shine',
    conditions: { s1: 'mod_clear', s4: 'pred_shine' },
    resultText: '透き通った人形が祭壇に輝いている。硝子の人形が光を集めて虹を作っている。祭壇全体が虹色に染まった。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_p19_clear_shine', name: '虹の奉納品', description: '硝子の人形が集めた虹の光。瓶に入れても輝く', sellPrice: 15 }]
  },
  {
    id: 'p19_cursed_shine',
    conditions: { s1: 'mod_cursed', s4: 'pred_shine' },
    resultText: '呪われた人形が祭壇に輝いている。不吉な赤い光を放っている。目が赤く光る。見つめると目が離せなくなる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p19_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s4: 'pred_shine' },
    resultText: '眠い人形が祭壇に輝いている。微かな光が明滅している。夜灯のような優しい光だ。見ていると眠くなる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_small_sing',
    conditions: { s1: 'mod_small', s4: 'pred_sing' },
    resultText: '小さな人形が祭壇で歌っている。指人形が鼻歌を歌っている。祭壇に旋律が響き、石が微かに振動する。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_gentle_sing',
    conditions: { s1: 'mod_gentle', s4: 'pred_sing' },
    resultText: '優しい人形が祭壇で歌っている。くたくたの人形が子守唄を歌っている。祭壇が温かくなった。傷が癒える気がする。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p19_fire_sing',
    conditions: { s1: 'mod_fire', s4: 'pred_sing' },
    resultText: '燃え盛る人形が祭壇で歌っている。燃えながら歌う。戦の歌だ。聴くと血が沸く。祭壇の炎が激しく揺れる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_hard_sing',
    conditions: { s1: 'mod_hard', s4: 'pred_sing' },
    resultText: '堅い人形が祭壇で歌っている。木彫りの人形の口は動かないのに歌が聞こえる。一度始まると止められない歌だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_sharp_sing',
    conditions: { s1: 'mod_sharp', s4: 'pred_sing' },
    resultText: '鋭い人形が祭壇で歌っている。金切り声のような高音。祭壇の石に亀裂が走った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_broken_sing',
    conditions: { s1: 'mod_broken', s4: 'pred_sing' },
    resultText: '壊れた人形が祭壇で歌っている。途中で止まる旋律。同じ節を繰り返す。レコードが擦り切れたように。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_mighty_sing',
    conditions: { s1: 'mod_mighty', s4: 'pred_sing' },
    resultText: '屈強な人形が祭壇で歌っている。ゴーレムの大合唱。足元が揺れる。祭壇が共鳴して音が何倍にも膨れ上がる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p19_frozen_sing',
    conditions: { s1: 'mod_frozen', s4: 'pred_sing' },
    resultText: '凍てついた人形が祭壇で歌っている。聴いた者の動きが止まる歌。足が凍った。歌が終わるまで動けなかった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p19_clear_sing',
    conditions: { s1: 'mod_clear', s4: 'pred_sing' },
    resultText: '透き通った人形が祭壇で歌っている。純粋な旋律が祭壇を浄化している。雑念が消えた。祭壇が透明に輝く。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_p19_clear_sing', name: '浄化の旋律', description: '硝子の人形が歌った旋律を封じた石。鳴らすと心が澄む', sellPrice: 12 }]
  },
  {
    id: 'p19_cursed_sing',
    conditions: { s1: 'mod_cursed', s4: 'pred_sing' },
    resultText: '呪われた人形が祭壇で歌っている。一度聴くと頭から離れない歌。耳を塞いでも遅い。もう鳴っている。ずっと鳴っている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sing' },
    resultText: '眠い人形が祭壇で歌っている。子守唄のような単調な旋律。意識を手放したくなる。祭壇の前で膝をついた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_small_dance',
    conditions: { s1: 'mod_small', s4: 'pred_dance' },
    resultText: '小さな人形が祭壇で踊っている。指人形がくるくる回っている。祭壇の上で小さな祝祭が開かれている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_gentle_dance',
    conditions: { s1: 'mod_gentle', s4: 'pred_dance' },
    resultText: '優しい人形が祭壇で踊っている。笑顔の人形が穏やかに揺れている。祭壇の前で見ていると、心が凪ぐ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_dance',
    conditions: { s1: 'mod_fire', s4: 'pred_dance' },
    resultText: '燃え盛る人形が祭壇で踊っている。炎の中で踊る藁人形。火の粉が舞う。祭壇が炎の舞台になっている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_hard_dance',
    conditions: { s1: 'mod_hard', s4: 'pred_dance' },
    resultText: '堅い人形が祭壇で踊っている。関節のない木彫りの人形が、ぎこちなく揺れている。踊りと呼んでいいのかわからない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_sharp_dance',
    conditions: { s1: 'mod_sharp', s4: 'pred_dance' },
    resultText: '鋭い人形が祭壇で踊っている。刃の関節の人形が優雅に舞っている。動くたびに祭壇に傷がつく。美しいが危険な踊りだ。',
    damage: 2,
    quill: 6
  },
  {
    id: 'p19_broken_dance',
    conditions: { s1: 'mod_broken', s4: 'pred_dance' },
    resultText: '壊れた人形が祭壇で踊っている。首がもげかけた人形がぐるぐる回っている。狂った踊り。止まる気配がない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_mighty_dance',
    conditions: { s1: 'mod_mighty', s4: 'pred_dance' },
    resultText: '屈強な人形が祭壇で踊っている。ゴーレムが足踏みするたびに祭壇が揺れる。地震のような踊りだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_frozen_dance',
    conditions: { s1: 'mod_frozen', s4: 'pred_dance' },
    resultText: '凍てついた人形が祭壇で踊っている。氷の人形が回るたびに霜が飛び散る。凍った祭壇の上で、冷たい舞が続く。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_clear_dance',
    conditions: { s1: 'mod_clear', s4: 'pred_dance' },
    resultText: '透き通った人形が祭壇で踊っている。硝子の人形が光を受けて回る。虹色の光が祭壇に踊る。',
    damage: 0,
    quill: 7
  },
  {
    id: 'p19_cursed_dance',
    conditions: { s1: 'mod_cursed', s4: 'pred_dance' },
    resultText: '呪われた人形が祭壇で踊っている。夜になると踊り出す人形。止められない。見ていると体が勝手に動き始める。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s4: 'pred_dance' },
    resultText: '眠い人形が祭壇で踊っている。目を閉じたままゆらゆら揺れている。踊りというより寝ぼけている。催眠的な動きだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_small_laugh',
    conditions: { s1: 'mod_small', s4: 'pred_laugh' },
    resultText: '小さな人形が祭壇で笑っている。指人形の口が裂けるように笑っている。小さいのに声が大きい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_gentle_laugh',
    conditions: { s1: 'mod_gentle', s4: 'pred_laugh' },
    resultText: '優しい人形が祭壇で笑っている。縫い付けられた笑顔がさらに広がっている。温かい笑い声が祭壇に響く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_laugh',
    conditions: { s1: 'mod_fire', s4: 'pred_laugh' },
    resultText: '燃え盛る人形が祭壇で笑っている。燃えながら笑う。炎の中の笑い声が響く。狂気の祭壇だ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p19_hard_laugh',
    conditions: { s1: 'mod_hard', s4: 'pred_laugh' },
    resultText: '堅い人形が祭壇で笑っている。木彫りの人形の口が割れて、笑顔のように見える。笑い声はしない。表情だけが笑っている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_sharp_laugh',
    conditions: { s1: 'mod_sharp', s4: 'pred_laugh' },
    resultText: '鋭い人形が祭壇で笑っている。刃の関節がカチカチ鳴っている。笑い声に聞こえる。不気味だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p19_broken_laugh',
    conditions: { s1: 'mod_broken', s4: 'pred_laugh' },
    resultText: '壊れた人形が祭壇で笑っている。首がもげかけた人形が笑っている。壊れているから笑うのか、笑っているから壊れたのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_mighty_laugh',
    conditions: { s1: 'mod_mighty', s4: 'pred_laugh' },
    resultText: '屈強な人形が祭壇で笑っている。ゴーレムの笑い声で祭壇が揺れる。豪快な笑いだ。悪意はなさそうだが、怖い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_frozen_laugh',
    conditions: { s1: 'mod_frozen', s4: 'pred_laugh' },
    resultText: '凍てついた人形が祭壇で笑っている。凍った笑顔。笑い声は聞こえない。美しいが心がない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_clear_laugh',
    conditions: { s1: 'mod_clear', s4: 'pred_laugh' },
    resultText: '透き通った人形が祭壇で笑っている。硝子の人形の中の液体が泡立っている。笑い声のように、ぷくぷくと。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_cursed_laugh',
    conditions: { s1: 'mod_cursed', s4: 'pred_laugh' },
    resultText: '呪われた人形が祭壇で笑っている。人間の魂が閉じ込められた人形が笑い続けている。笑い泣きだ。助けを求めている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p19_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s4: 'pred_laugh' },
    resultText: '眠い人形が祭壇で笑っている。寝ぼけた笑い声。夢の中で何か面白いことがあったのだろう。見ていると釣られて笑ってしまった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_small_flee',
    conditions: { s1: 'mod_small', s4: 'pred_flee' },
    resultText: '小さな人形が祭壇から逃げていく。指人形がころころと祭壇を転がり落ちていった。祭壇は空になった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_gentle_flee',
    conditions: { s1: 'mod_gentle', s4: 'pred_flee' },
    resultText: '優しい人形が祭壇から逃げていく。笑顔の人形がとことこ歩いて去っていった。持ち主を探しに行ったのかもしれない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_fire_flee',
    conditions: { s1: 'mod_fire', s4: 'pred_flee' },
    resultText: '燃え盛る人形が祭壇から逃げていく。燃えたまま祭壇を飛び降りた。火の跡を残しながら消えていった。祭壇の焦げ跡だけが残る。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_hard_flee',
    conditions: { s1: 'mod_hard', s4: 'pred_flee' },
    resultText: '堅い人形が祭壇から逃げていく。木彫りの人形が関節なしで転がって逃げた。石の床をごろごろ転がる音が遠ざかる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_sharp_flee',
    conditions: { s1: 'mod_sharp', s4: 'pred_flee' },
    resultText: '鋭い人形が祭壇から逃げていく。刃の関節の人形が走って去る。祭壇に無数の引っ掻き傷を残して。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_broken_flee',
    conditions: { s1: 'mod_broken', s4: 'pred_flee' },
    resultText: '壊れた人形が祭壇から逃げていく。部品を落としながら去っていく。頭、腕、最後に胴体。祭壇に散らばった部品だけが残った。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p19_broken_flee', name: '人形の残骸', description: '逃げた人形が落とした腕。指が動く', sellPrice: 7 }]
  },
  {
    id: 'p19_mighty_flee',
    conditions: { s1: 'mod_mighty', s4: 'pred_flee' },
    resultText: '屈強な人形が祭壇から逃げていく。ゴーレムが祭壇を蹴り飛ばして走り去った。祭壇の半分が崩れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p19_frozen_flee',
    conditions: { s1: 'mod_frozen', s4: 'pred_flee' },
    resultText: '凍てついた人形が祭壇から逃げていく。氷の人形が滑って祭壇を降りていく。溶けながら逃げている。水の跡が残った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p19_clear_flee',
    conditions: { s1: 'mod_clear', s4: 'pred_flee' },
    resultText: '透き通った人形が祭壇から逃げていく。硝子の人形が透明になって消えた。気配だけが遠ざかっていく。祭壇は空だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p19_cursed_flee',
    conditions: { s1: 'mod_cursed', s4: 'pred_flee' },
    resultText: '呪われた人形が祭壇から逃げていく。泣きながら走り去る人形。明日の朝にはまた祭壇に戻っているのだろう。呪いだから。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p19_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s4: 'pred_flee' },
    resultText: '眠い人形が祭壇から逃げていく。目を閉じたまま寝ぼけて歩いて去った。祭壇より寝心地のいい場所を探しに行ったらしい。',
    damage: 0,
    quill: 5
  },
];
