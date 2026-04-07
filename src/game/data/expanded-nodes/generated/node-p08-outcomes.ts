// Auto-generated from node-p08-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP08Outcomes: Outcome[] = [
  {
    id: 'p08_small_wait',
    conditions: { s1: 'mod_small', s4: 'pred_wait' },
    resultText: '足元に小さな黒い染みがある。洞窟の暗がりで何かを待っている。跨いで進む。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_gentle_wait',
    conditions: { s1: 'mod_gentle', s4: 'pred_wait' },
    resultText: '木陰のような影が洞窟の入口で待っている。寄り添うように覆ってくれた。涼しい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_gentle_wait', name: '涼やかな影', description: '触れると涼しい影の欠片', sellPrice: 8 }]
  },
  {
    id: 'p08_fire_wait',
    conditions: { s1: 'mod_fire', s4: 'pred_wait' },
    resultText: '黒い炎で燃える影が洞窟に待っている。壁が焦げ臭い。近づくと肌がひりつく。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p08_hard_wait',
    conditions: { s1: 'mod_hard', s4: 'pred_wait' },
    resultText: '地面に貼りついた影が洞窟で待っている。壁のように立ち上がり、通さない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_sharp_wait',
    conditions: { s1: 'mod_sharp', s4: 'pred_wait' },
    resultText: '輪郭のくっきりした影が洞窟で待っている。うっかり縁に触れた。指先が切れている。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_broken_wait',
    conditions: { s1: 'mod_broken', s4: 'pred_wait' },
    resultText: 'めくれ上がった影が洞窟で待っている。平面に戻りたいのか、足元をうろうろしている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p08_mighty_wait',
    conditions: { s1: 'mod_mighty', s4: 'pred_wait' },
    resultText: '本体より遥かに大きな影が洞窟で待っている。影のほうが洞窟の主に見える。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_frozen_wait',
    conditions: { s1: 'mod_frozen', s4: 'pred_wait' },
    resultText: '凍りついた影が洞窟の地面に張りついている。主人が去った後も、ここでずっと待っている。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p08_frozen_wait', name: '凍った影', description: '地面から剥がした影の破片。冷たい', sellPrice: 10 }]
  },
  {
    id: 'p08_clear_wait',
    conditions: { s1: 'mod_clear', s4: 'pred_wait' },
    resultText: '半透明の影が洞窟で待っている。薄すぎて踏んでも気づかなかった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_cursed_wait',
    conditions: { s1: 'mod_cursed', s4: 'pred_wait' },
    resultText: '呪われた影が洞窟で待っている。足が影に触れた瞬間、自分の影が一回り大きくなった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p08_sleepy_wait',
    conditions: { s1: 'mod_sleepy', s4: 'pred_wait' },
    resultText: '正午の影のように縮んだ影が洞窟で待っている。待っているが、半分眠っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_small_sleep',
    conditions: { s1: 'mod_small', s4: 'pred_sleep' },
    resultText: '小さな影が洞窟の隅で眠っている。指ほどの影だ。起こさないよう足音を殺して通る。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_gentle_sleep',
    conditions: { s1: 'mod_gentle', s4: 'pred_sleep' },
    resultText: '心地よい影が洞窟に眠っている。そばに座ると木陰にいるような安らぎがある。少し休んだ。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_p08_gentle_sleep', name: '安らぎの影', description: '持っていると日陰にいるような心地よさがある', sellPrice: 12 }]
  },
  {
    id: 'p08_fire_sleep',
    conditions: { s1: 'mod_fire', s4: 'pred_sleep' },
    resultText: '黒い炎で燃える影が洞窟に眠っている。寝息のたびに炎が揺れる。起こしてはいけない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p08_hard_sleep',
    conditions: { s1: 'mod_hard', s4: 'pred_sleep' },
    resultText: '固まった影が洞窟に眠っている。踏むと石のように硬い。眠っているのではなく、死んでいるのかもしれない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_sharp_sleep',
    conditions: { s1: 'mod_sharp', s4: 'pred_sleep' },
    resultText: '鋭い影が洞窟に眠っている。輪郭が刃のようだ。そっと迂回する。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_broken_sleep',
    conditions: { s1: 'mod_broken', s4: 'pred_sleep' },
    resultText: 'めくれ上がった影が洞窟に眠っている。夢の中でも平面に戻れないらしい。少し哀れだ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_broken_sleep', name: '影の寝息', description: 'めくれた影が眠るときに零す黒い靄', sellPrice: 8 }]
  },
  {
    id: 'p08_mighty_sleep',
    conditions: { s1: 'mod_mighty', s4: 'pred_sleep' },
    resultText: '巨大な影が洞窟に眠っている。いびきが壁を震わせる。天井から砂が落ちてくる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_frozen_sleep',
    conditions: { s1: 'mod_frozen', s4: 'pred_sleep' },
    resultText: '霜のような影が洞窟に眠っている。そばの空気が冷たい。息が白くなる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p08_clear_sleep',
    conditions: { s1: 'mod_clear', s4: 'pred_sleep' },
    resultText: '透き通った影が洞窟に眠っている。岩の模様が影越しに透けている。存在が薄い。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_sleep',
    conditions: { s1: 'mod_cursed', s4: 'pred_sleep' },
    resultText: '呪われた影が洞窟に眠っている。近寄ると、自分の影が勝手に引き寄せられる。足元が暗くなる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_sleepy_sleep',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sleep' },
    resultText: '眠い影が洞窟に眠っている。正午の影そのものだ。夕方まで起きる気配がない。安全に通れる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_entangle',
    conditions: { s1: 'mod_small', s4: 'pred_entangle' },
    resultText: '小さな影が洞窟の壁に絡みついている。蔦のように細い。手で払うと散った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_gentle_entangle',
    conditions: { s1: 'mod_gentle', s4: 'pred_entangle' },
    resultText: '優しい影が洞窟に絡みついている。毛布のように包まれる。温かくはないが、安心する。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_gentle_entangle', name: '影の毛布', description: '巻きつくと安心する黒い布のような影', sellPrice: 10 }]
  },
  {
    id: 'p08_fire_entangle',
    conditions: { s1: 'mod_fire', s4: 'pred_entangle' },
    resultText: '黒い炎の影が洞窟に絡みついている。壁が灼けて赤い。触れれば火傷する。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p08_hard_entangle',
    conditions: { s1: 'mod_hard', s4: 'pred_entangle' },
    resultText: '固まった影が洞窟に絡みついている。鋳型のように壁を覆っている。中に何かを閉じ込めているようだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_sharp_entangle',
    conditions: { s1: 'mod_sharp', s4: 'pred_entangle' },
    resultText: '鋭い影が洞窟に絡みついている。茨のようだ。壁を伝おうとした手に切り傷ができた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_broken_entangle',
    conditions: { s1: 'mod_broken', s4: 'pred_entangle' },
    resultText: 'めくれ上がった影が洞窟に絡みついている。平面でいられないから、立体のまま壁にしがみついている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p08_mighty_entangle',
    conditions: { s1: 'mod_mighty', s4: 'pred_entangle' },
    resultText: '巨大な影が洞窟に絡みついている。洞窟全体が影に飲まれている。一歩も先が見えない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p08_frozen_entangle',
    conditions: { s1: 'mod_frozen', s4: 'pred_entangle' },
    resultText: '凍りついた影が洞窟に絡みついている。黒い霜が壁を覆い、触れると指が張りつく。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_clear_entangle',
    conditions: { s1: 'mod_clear', s4: 'pred_entangle' },
    resultText: '透き通った影が洞窟に絡みついている。半透明の網のようだ。通り抜けられた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_entangle',
    conditions: { s1: 'mod_cursed', s4: 'pred_entangle' },
    resultText: '呪われた影が洞窟に絡みついている。触れた壁が黒く染まっていく。影が増殖している。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p08_sleepy_entangle',
    conditions: { s1: 'mod_sleepy', s4: 'pred_entangle' },
    resultText: '眠い影が洞窟にだらしなく絡みついている。力がない。軽く押しのけて通った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_small_rain_pred',
    conditions: { s1: 'mod_small', s4: 'pred_rain' },
    resultText: '小さな影の粒が洞窟に降り注いでいる。黒い粉雪のようだ。手のひらに受けると消える。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_small_rain_pred', name: '影の粉雪', description: '手のひらで消えてしまう黒い粒', sellPrice: 7 }]
  },
  {
    id: 'p08_gentle_rain_pred',
    conditions: { s1: 'mod_gentle', s4: 'pred_rain' },
    resultText: '木漏れ日の逆だ。優しい影が洞窟に降り注いでいる。目が休まる。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p08_gentle_rain_pred', name: '逆さの木漏れ日', description: '影でできた木漏れ日。涼しくて心地よい', sellPrice: 12 }]
  },
  {
    id: 'p08_fire_rain_pred',
    conditions: { s1: 'mod_fire', s4: 'pred_rain' },
    resultText: '黒い炎の影が洞窟に降り注いでいる。天井から灼熱が降る。駆け抜けるしかない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p08_hard_rain_pred',
    conditions: { s1: 'mod_hard', s4: 'pred_rain' },
    resultText: '固まった影が洞窟に降り注いでいる。黒い礫だ。頭を覆って走る。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_sharp_rain_pred',
    conditions: { s1: 'mod_sharp', s4: 'pred_rain' },
    resultText: '鋭い影が洞窟に降り注いでいる。黒い針の雨だ。腕に無数の切り傷ができた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p08_broken_rain_pred',
    conditions: { s1: 'mod_broken', s4: 'pred_rain' },
    resultText: 'めくれ上がった影が洞窟に降り注いでいる。紙切れのようにひらひら舞う。痛くはない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_mighty_rain_pred',
    conditions: { s1: 'mod_mighty', s4: 'pred_rain' },
    resultText: '巨大な影が洞窟に降り注いでいる。豪雨のようだ。視界が真っ暗になる。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p08_frozen_rain_pred',
    conditions: { s1: 'mod_frozen', s4: 'pred_rain' },
    resultText: '凍てついた影が洞窟に降り注いでいる。黒い霰だ。当たると冷たい痛みが走る。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_clear_rain_pred',
    conditions: { s1: 'mod_clear', s4: 'pred_rain' },
    resultText: '透き通った影が洞窟に降り注いでいる。光と影の境が曖昧な雨だ。不思議と明るい。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p08_cursed_rain_pred',
    conditions: { s1: 'mod_cursed', s4: 'pred_rain' },
    resultText: '呪われた影が洞窟に降り注いでいる。触れたものが次々と影に変わる。足元の石が黒く沈んだ。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p08_sleepy_rain_pred',
    conditions: { s1: 'mod_sleepy', s4: 'pred_rain' },
    resultText: '眠い影が洞窟にゆっくり降り注いでいる。あくびが出る。洞窟全体が午睡の気配だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_small_whisper',
    conditions: { s1: 'mod_small', s4: 'pred_whisper' },
    resultText: '小さな影が洞窟で囁いている。虫の声ほどの小さな声だ。耳を澄ますと聞こえなくなる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_gentle_whisper',
    conditions: { s1: 'mod_gentle', s4: 'pred_whisper' },
    resultText: '優しい影が洞窟で囁いている。道案内をしてくれているようだ。声の方へ歩くと出口に着いた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p08_gentle_whisper', name: '影の道標', description: '囁いて正しい道を教えてくれる影の欠片', sellPrice: 12 }]
  },
  {
    id: 'p08_fire_whisper',
    conditions: { s1: 'mod_fire', s4: 'pred_whisper' },
    resultText: '黒い炎の影が洞窟で囁いている。言葉が熱い。耳が焼けるようだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_hard_whisper',
    conditions: { s1: 'mod_hard', s4: 'pred_whisper' },
    resultText: '固まった影が洞窟で囁いている。同じ言葉を延々と繰り返している。意味はわからない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_sharp_whisper',
    conditions: { s1: 'mod_sharp', s4: 'pred_whisper' },
    resultText: '鋭い影が洞窟で囁いている。声が耳の奥まで刺さる。頭痛がする。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_broken_whisper',
    conditions: { s1: 'mod_broken', s4: 'pred_whisper' },
    resultText: 'めくれ上がった影が洞窟で囁いている。言葉が途切れ途切れだ。「たす……もど……」。何かを訴えている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p08_broken_whisper', name: '壊れた声', description: '途切れた影の囁きを閉じ込めた小瓶', sellPrice: 10 }]
  },
  {
    id: 'p08_mighty_whisper',
    conditions: { s1: 'mod_mighty', s4: 'pred_whisper' },
    resultText: '巨大な影が洞窟で囁いている。囁きのつもりだろうが声が大きい。壁が振動する。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p08_frozen_whisper',
    conditions: { s1: 'mod_frozen', s4: 'pred_whisper' },
    resultText: '凍てついた影が洞窟で囁いている。声が白い息のように見える。言葉が凍って落ちた。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_p08_frozen_whisper', name: '凍った言葉', description: '影が囁いた言葉が凍ったもの。溶けると声が聞こえる', sellPrice: 10 }]
  },
  {
    id: 'p08_clear_whisper',
    conditions: { s1: 'mod_clear', s4: 'pred_whisper' },
    resultText: '透き通った影が洞窟で囁いている。声だけが聞こえて姿が見えない。空気が歌っているようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_whisper',
    conditions: { s1: 'mod_cursed', s4: 'pred_whisper' },
    resultText: '呪われた影が洞窟で囁いている。聞いてしまった。頭の中に影の声が棲みついた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p08_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s4: 'pred_whisper' },
    resultText: '眠い影が洞窟で囁いている。寝言だ。「……もう少し……」。放っておく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_melt',
    conditions: { s1: 'mod_small', s4: 'pred_melt' },
    resultText: '小さな影が洞窟に溶けている。暗闇と区別がつかない。もう影でもないのかもしれない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_gentle_melt',
    conditions: { s1: 'mod_gentle', s4: 'pred_melt' },
    resultText: '優しい影が洞窟に溶けている。闇が柔らかくなった。洞窟の暗がりが怖くない。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p08_fire_melt',
    conditions: { s1: 'mod_fire', s4: 'pred_melt' },
    resultText: '黒い炎の影が洞窟に溶けている。壁が熱を帯びている。闇自体が熱い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_hard_melt',
    conditions: { s1: 'mod_hard', s4: 'pred_melt' },
    resultText: '固まった影が洞窟に溶けている。溶けかけのタールのようだ。足を取られないよう慎重に進む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_sharp_melt',
    conditions: { s1: 'mod_sharp', s4: 'pred_melt' },
    resultText: '鋭い影が洞窟に溶けている。闇の中に刃が紛れている。足の裏に切り傷ができた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_broken_melt',
    conditions: { s1: 'mod_broken', s4: 'pred_melt' },
    resultText: 'めくれ上がった影が洞窟に溶けている。ようやく平面に戻れたのだろうか。安らかに見える。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p08_broken_melt', name: '溶けた影', description: '平面に戻った影の残滓。温かい', sellPrice: 12 }]
  },
  {
    id: 'p08_mighty_melt',
    conditions: { s1: 'mod_mighty', s4: 'pred_melt' },
    resultText: '巨大な影が洞窟に溶けている。闇が濃すぎる。松明をかざしても光が飲まれる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_frozen_melt',
    conditions: { s1: 'mod_frozen', s4: 'pred_melt' },
    resultText: '凍てついた影が洞窟に溶けている。溶けながら冷気を放っている。矛盾しているが、寒い。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p08_clear_melt',
    conditions: { s1: 'mod_clear', s4: 'pred_melt' },
    resultText: '透き通った影が洞窟に溶けている。闇が透明になった。岩の奥の鉱脈が見える。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p08_clear_melt', name: '透明な闇', description: '影が溶けて透明になった闇の欠片。かざすと奥が見える', sellPrice: 15 }]
  },
  {
    id: 'p08_cursed_melt',
    conditions: { s1: 'mod_cursed', s4: 'pred_melt' },
    resultText: '呪われた影が洞窟に溶けている。洞窟そのものが影になった。入ったら出られないかもしれない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p08_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s4: 'pred_melt' },
    resultText: '眠い影が洞窟に溶けている。闇がぬるい。うとうとしそうになるのを堪えて歩く。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_small_shine',
    conditions: { s1: 'mod_small', s4: 'pred_shine' },
    resultText: '小さな影が洞窟で輝いている。蛍のように黒く光る。矛盾しているが美しい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_small_shine', name: '影蛍', description: '黒く光る小さな影。矛盾した存在', sellPrice: 10 }]
  },
  {
    id: 'p08_gentle_shine',
    conditions: { s1: 'mod_gentle', s4: 'pred_shine' },
    resultText: '優しい影が洞窟で輝いている。夜の月のような柔らかい光だ。足元がほのかに見える。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p08_fire_shine',
    conditions: { s1: 'mod_fire', s4: 'pred_shine' },
    resultText: '黒い炎の影が洞窟で輝いている。闇を照らす黒い光。見えるのに目が痛い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_hard_shine',
    conditions: { s1: 'mod_hard', s4: 'pred_shine' },
    resultText: '固まった影が洞窟で輝いている。黒曜石のような光沢だ。叩くと澄んだ音がする。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_sharp_shine',
    conditions: { s1: 'mod_sharp', s4: 'pred_shine' },
    resultText: '鋭い影が洞窟で輝いている。まっすぐ伸びた一筋の黒い光。目がくらむ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_broken_shine',
    conditions: { s1: 'mod_broken', s4: 'pred_shine' },
    resultText: 'めくれ上がった影が洞窟で輝いている。立体になったぶん光を受ける面が増えたのだ。壊れて初めて輝ける。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_p08_broken_shine', name: '立体の影', description: 'めくれ上がって輝いた影の破片。角度によって光る', sellPrice: 15 }]
  },
  {
    id: 'p08_mighty_shine',
    conditions: { s1: 'mod_mighty', s4: 'pred_shine' },
    resultText: '巨大な影が洞窟で輝いている。黒い太陽だ。洞窟全体が暗い光に満ちている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p08_frozen_shine',
    conditions: { s1: 'mod_frozen', s4: 'pred_shine' },
    resultText: '凍てついた影が洞窟で輝いている。黒い氷の結晶だ。壁に黒い虹が映っている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p08_frozen_shine', name: '黒い虹', description: '凍った影が映す漆黒の虹。美しいが冷たい', sellPrice: 12 }]
  },
  {
    id: 'p08_clear_shine',
    conditions: { s1: 'mod_clear', s4: 'pred_shine' },
    resultText: '透き通った影が洞窟で輝いている。影なのに透明で、透明なのに光っている。何もかもが矛盾している。',
    damage: 0,
    quill: 7
  },
  {
    id: 'p08_cursed_shine',
    conditions: { s1: 'mod_cursed', s4: 'pred_shine' },
    resultText: '呪われた影が洞窟で輝いている。見た者の影がその光に引き寄せられる。目を逸らせない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s4: 'pred_shine' },
    resultText: '眠い影が洞窟で弱く輝いている。常夜灯のようだ。少しだけ安心する。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_sing',
    conditions: { s1: 'mod_small', s4: 'pred_sing' },
    resultText: '小さな影が洞窟で歌っている。鼻歌だ。壁に反響して二重に聞こえる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_gentle_sing',
    conditions: { s1: 'mod_gentle', s4: 'pred_sing' },
    resultText: '優しい影が洞窟で歌っている。子守唄だ。旅の疲れが少し癒えた。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p08_fire_sing',
    conditions: { s1: 'mod_fire', s4: 'pred_sing' },
    resultText: '黒い炎の影が洞窟で歌っている。軍歌だ。血が熱くなる。壁が焦げるほどの声量。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_hard_sing',
    conditions: { s1: 'mod_hard', s4: 'pred_sing' },
    resultText: '固まった影が洞窟で歌っている。同じ旋律が止まらない。耳を塞いでも骨に響く。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p08_sharp_sing',
    conditions: { s1: 'mod_sharp', s4: 'pred_sing' },
    resultText: '鋭い影が洞窟で歌っている。高音が壁を裂く。天井に亀裂が走った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_broken_sing',
    conditions: { s1: 'mod_broken', s4: 'pred_sing' },
    resultText: 'めくれ上がった影が洞窟で歌っている。途切れ途切れの旋律だ。続きを知りたい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_mighty_sing',
    conditions: { s1: 'mod_mighty', s4: 'pred_sing' },
    resultText: '巨大な影が洞窟で歌っている。地鳴りのような低音。足元が震える。小石が跳ねる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_frozen_sing',
    conditions: { s1: 'mod_frozen', s4: 'pred_sing' },
    resultText: '凍てついた影が洞窟で歌っている。声が凍って結晶になる。洞窟が鍾乳洞のようだ。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p08_frozen_sing', name: '歌の鍾乳石', description: '影の歌声が凍った黒い結晶', sellPrice: 10 }]
  },
  {
    id: 'p08_clear_sing',
    conditions: { s1: 'mod_clear', s4: 'pred_sing' },
    resultText: '透き通った影が洞窟で歌っている。どこにいるかわからない。洞窟自体が歌っているようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_sing',
    conditions: { s1: 'mod_cursed', s4: 'pred_sing' },
    resultText: '呪われた影が洞窟で歌っている。頭にこびりつく旋律だ。洞窟を出ても耳の奥で鳴り続ける。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sing' },
    resultText: '眠い影が洞窟で歌っている。あくびまじりの子守唄だ。自分で自分を寝かしつけている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_dance',
    conditions: { s1: 'mod_small', s4: 'pred_dance' },
    resultText: '小さな影が洞窟で踊っている。松明の光に揺れているだけかもしれない。でも楽しそうだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_gentle_dance',
    conditions: { s1: 'mod_gentle', s4: 'pred_dance' },
    resultText: '優しい影が洞窟で踊っている。旅人を誘うようにゆるやかに揺れている。つい足が動く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_fire_dance',
    conditions: { s1: 'mod_fire', s4: 'pred_dance' },
    resultText: '黒い炎の影が洞窟で踊っている。狂ったように壁を駆け回る。避けきれず火傷した。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p08_hard_dance',
    conditions: { s1: 'mod_hard', s4: 'pred_dance' },
    resultText: '固まった影が洞窟で踊っている。踊りのポーズのまま固まっている。動いてはいない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_sharp_dance',
    conditions: { s1: 'mod_sharp', s4: 'pred_dance' },
    resultText: '鋭い影が洞窟で踊っている。回転するたび壁に切り傷が走る。近づけない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_broken_dance',
    conditions: { s1: 'mod_broken', s4: 'pred_dance' },
    resultText: 'めくれ上がった影が洞窟で踊っている。ぎこちない。平面に戻れないまま踊り続けている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_broken_dance', name: 'めくれた踊り手', description: '踊る影の切れ端。風がなくても揺れている', sellPrice: 8 }]
  },
  {
    id: 'p08_mighty_dance',
    conditions: { s1: 'mod_mighty', s4: 'pred_dance' },
    resultText: '巨大な影が洞窟で踊っている。地面が揺れる。天井から石が落ちてきた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_frozen_dance',
    conditions: { s1: 'mod_frozen', s4: 'pred_dance' },
    resultText: '凍てついた影が洞窟で踊っている。踊るたび足元が凍る。氷の舞台ができていく。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p08_clear_dance',
    conditions: { s1: 'mod_clear', s4: 'pred_dance' },
    resultText: '透き通った影が洞窟で踊っている。見えたり消えたりする。幻かもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_cursed_dance',
    conditions: { s1: 'mod_cursed', s4: 'pred_dance' },
    resultText: '呪われた影が洞窟で踊っている。見た者の影も勝手に踊り出す。足が止まらない。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p08_cursed_dance', name: '踊る呪い', description: '影が踊り出す呪いの欠片。売ってしまいたい', sellPrice: 7 }]
  },
  {
    id: 'p08_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s4: 'pred_dance' },
    resultText: '眠い影が洞窟で踊っている。夢遊病のような踊りだ。ふらふらと壁にぶつかっている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_laugh',
    conditions: { s1: 'mod_small', s4: 'pred_laugh' },
    resultText: '小さな影が洞窟で笑っている。くすくす笑い。反響して四方から聞こえる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p08_gentle_laugh',
    conditions: { s1: 'mod_gentle', s4: 'pred_laugh' },
    resultText: '優しい影が洞窟で笑っている。穏やかな笑い声だ。怖い洞窟が少し明るく見える。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_fire_laugh',
    conditions: { s1: 'mod_fire', s4: 'pred_laugh' },
    resultText: '黒い炎の影が洞窟で笑っている。嘲笑だ。笑い声のたびに炎が揺れ、壁が焦げる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p08_hard_laugh',
    conditions: { s1: 'mod_hard', s4: 'pred_laugh' },
    resultText: '固まった影が洞窟で笑っている。笑顔のまま固まっている。笑っているのか、笑っていたのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p08_sharp_laugh',
    conditions: { s1: 'mod_sharp', s4: 'pred_laugh' },
    resultText: '鋭い影が洞窟で笑っている。甲高い笑い声が壁に傷をつける。耳障りだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p08_broken_laugh',
    conditions: { s1: 'mod_broken', s4: 'pred_laugh' },
    resultText: 'めくれ上がった影が洞窟で笑っている。自嘲だろうか。平面に戻れない自分を笑っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p08_mighty_laugh',
    conditions: { s1: 'mod_mighty', s4: 'pred_laugh' },
    resultText: '巨大な影が洞窟で笑っている。哄笑が洞窟を揺らす。落石が起きた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p08_frozen_laugh',
    conditions: { s1: 'mod_frozen', s4: 'pred_laugh' },
    resultText: '凍てついた影が洞窟で笑っている。声が凍って氷片になって飛んでくる。冷たい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_clear_laugh',
    conditions: { s1: 'mod_clear', s4: 'pred_laugh' },
    resultText: '透き通った影が洞窟で笑っている。姿は見えない。笑い声だけが澄んで響く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_laugh',
    conditions: { s1: 'mod_cursed', s4: 'pred_laugh' },
    resultText: '呪われた影が洞窟で笑っている。聞いた者の影も笑い出す。自分の足元が笑っている。不気味だ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p08_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s4: 'pred_laugh' },
    resultText: '眠い影が洞窟で笑っている。寝笑いだ。楽しい夢でも見ているのだろう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_small_flee',
    conditions: { s1: 'mod_small', s4: 'pred_flee' },
    resultText: '小さな影が洞窟から逃げていく。足元の黒い染みがちょろちょろと走った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_gentle_flee',
    conditions: { s1: 'mod_gentle', s4: 'pred_flee' },
    resultText: '優しい影が洞窟から逃げていく。名残惜しそうに振り返り、消えた。涼しさが去った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p08_gentle_flee', name: '去った影の余韻', description: '優しい影が残した涼しさの名残', sellPrice: 8 }]
  },
  {
    id: 'p08_fire_flee',
    conditions: { s1: 'mod_fire', s4: 'pred_flee' },
    resultText: '黒い炎の影が洞窟から逃げていく。焦げ跡が道のように残った。助かった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p08_hard_flee',
    conditions: { s1: 'mod_hard', s4: 'pred_flee' },
    resultText: '固まった影が洞窟から逃げていく。地面を引きずる重い音がする。ゆっくりだが確実に去っていく。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_sharp_flee',
    conditions: { s1: 'mod_sharp', s4: 'pred_flee' },
    resultText: '鋭い影が洞窟から逃げていく。去り際に壁を切った。細い光が差し込む穴ができた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p08_sharp_flee', name: '影の切り口', description: '鋭い影が壁に残した切り傷。光が漏れている', sellPrice: 10 }]
  },
  {
    id: 'p08_broken_flee',
    conditions: { s1: 'mod_broken', s4: 'pred_flee' },
    resultText: 'めくれ上がった影が洞窟から逃げていく。立体のまま転がるように去る。欠片が散らばった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_mighty_flee',
    conditions: { s1: 'mod_mighty', s4: 'pred_flee' },
    resultText: '巨大な影が洞窟から逃げていく。あの図体で何を恐れているのか。洞窟が急に広く見えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_frozen_flee',
    conditions: { s1: 'mod_frozen', s4: 'pred_flee' },
    resultText: '凍てついた影が洞窟から逃げていく。地面に霜の道を残して去った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p08_clear_flee',
    conditions: { s1: 'mod_clear', s4: 'pred_flee' },
    resultText: '透き通った影が洞窟から逃げていく。薄すぎて、逃げているのかそもそもいなかったのかわからない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p08_cursed_flee',
    conditions: { s1: 'mod_cursed', s4: 'pred_flee' },
    resultText: '呪われた影が洞窟から逃げていく。通った場所の色が抜けている。呪いの痕跡だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p08_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s4: 'pred_flee' },
    resultText: '眠い影が洞窟から逃げていく。欠伸をしながらのろのろと。追う気にもならない。',
    damage: 0,
    quill: 4
  },
];
