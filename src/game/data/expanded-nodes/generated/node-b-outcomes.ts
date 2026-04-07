// Auto-generated from node-b-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeBOutcomes: Outcome[] = [
  {
    id: 'b_orig_orig',
    conditions: { s1: 'orig_b_mod', s2: 'orig_b_subj' },
    resultText: '古い神像が祠に眠っている。何の神を祀ったものか、もう誰も知らない。頭を下げて通り過ぎた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'b_small_orig',
    conditions: { s1: 'mod_small', s2: 'orig_b_subj' },
    resultText: '小さな神像が祠に眠っている。拳ほどの大きさだ。愛らしい顔をしている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_gentle_orig',
    conditions: { s1: 'mod_gentle', s2: 'orig_b_subj' },
    resultText: '優しい神像が祠に眠っている。近づくと温かい気配がした。傷がいくらか癒えた気がする。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_orig', name: '神の欠片', description: '穏やかな温かさがある石片', sellPrice: 10 }]
  },
  {
    id: 'b_fire_orig',
    conditions: { s1: 'mod_fire', s2: 'orig_b_subj' },
    resultText: '燃え盛る神像が祠に眠っている。炎の神か。祠が火の粉で満ちている。急いで後退した。',
    damage: 3,
    quill: 2
  },
  {
    id: 'b_hard_orig',
    conditions: { s1: 'mod_hard', s2: 'orig_b_subj' },
    resultText: '堅い神像が祠に眠っている。石とも金属ともつかない材質だ。触れようとしたら指が弾かれた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'b_sharp_orig',
    conditions: { s1: 'mod_sharp', s2: 'orig_b_subj' },
    resultText: '鋭い神像が祠に眠っている。棘のような装飾が全面に突き出ている。近づいて手を切った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'b_broken_orig',
    conditions: { s1: 'mod_broken', s2: 'orig_b_subj' },
    resultText: '壊れた神像が祠に眠っている。頭が欠け、腕が折れている。この祠の神はとっくに去ったのだろう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_mighty_orig',
    conditions: { s1: 'mod_mighty', s2: 'orig_b_subj' },
    resultText: '屈強な神像が祠に眠っている。祠から大きくはみ出ている。窮屈そうだが、その顔は穏やかだ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_orig',
    conditions: { s1: 'mod_frozen', s2: 'orig_b_subj' },
    resultText: '凍てついた神像が祠に眠っている。冬の神でも祀っているのか、祠の内部が外より冷たい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_clear_orig',
    conditions: { s1: 'mod_clear', s2: 'orig_b_subj' },
    resultText: '透き通った神像が祠に眠っている。水晶を削り出したような像だ。燭台の光が体を通り抜け、壁に虹を作っている。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_orig', name: '水晶の神像の欠片', description: '光を通す透明な石片。神の気配が残る', sellPrice: 15 }]
  },
  {
    id: 'b_cursed_orig',
    conditions: { s1: 'mod_cursed', s2: 'orig_b_subj' },
    resultText: '呪われた神像が祠に眠っている。目が意図的に削られている。近づくと体が重くなった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'b_sleepy_orig',
    conditions: { s1: 'mod_sleepy', s2: 'orig_b_subj' },
    resultText: '眠い神像が祠に眠っている。彫刻の目が閉じている。最初からそういうデザインなのかもしれない。それとも。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_orig_kitten',
    conditions: { s1: 'orig_b_mod', s2: 'subj_kitten' },
    resultText: '忘れられた子猫が祠に眠っている。ここを家にしているらしい。そっと頭を撫でて出た。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '小さな子猫が祠に眠っている。親指ほどだ。丸くなって隅で眠っている。踏まないよう気をつけた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_small_kitten', name: '小さな子猫', description: '鈴のように鳴く。ポケットに収まる', sellPrice: 10 }]
  },
  {
    id: 'b_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が祠に眠っている。近づくと擦り寄ってきた。しばらく一緒に眠ったら、体が楽になっていた。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_b_gentle_kitten', name: '子猫の毛', description: '柔らかく温かい一束', sellPrice: 8 }]
  },
  {
    id: 'b_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が祠に眠っている。炎をまとったまま眠っている。本猫は気にしていない。祠の床が焦げた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が祠に眠っている。陶器の招き猫だ。目だけがこちらを追う。神像の代わりに置かれたらしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が祠に眠っている。眠っていても爪が出たままだ。踏みそうになって危なかった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が祠に眠っている。ぬいぐるみだ。綿が出ている。誰かの大事なものが奉納されたらしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_broken_kitten', name: '綿の子猫', description: '縫い目がほつれた人形。誰かが大切にしていた', sellPrice: 7 }]
  },
  {
    id: 'b_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が祠に眠っている。子猫サイズなのに虎の体格。唸り声が聞こえたが、眠っているうちに通り過ぎた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が祠に眠っている。氷の彫刻だ。中でまだ息をしている。触れると指先が冷えた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が祠に眠っている。硝子の体だ。心臓の動きが透けて見える。眠り姿が美しかった。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_kitten', name: '硝子の猫毛', description: '透明な一本の毛。光に翳すと虹が見える', sellPrice: 12 }]
  },
  {
    id: 'b_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が祠に眠っている。外に出ると、同じ子猫がまた眠っていた。三度繰り返して諦めた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が祠に眠っている。あくびが伝染して、こちらも一緒に眠ってしまった。しばらくして気づいた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_orig_snake',
    conditions: { s1: 'orig_b_mod', s2: 'subj_snake' },
    resultText: '忘れられた蛇が祠に眠っている。この祠の神使だったのかもしれない。そっと通り過ぎた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '小さな蛇が祠に眠っている。指ほどの細さで、鱗が艶やかに光る。神使かもしれない。踏まないようにした。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が祠に眠っている。近づくと体をずらし、眠ったままで隙間を作ってくれた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_snake', name: '蛇の抜け殻', description: '温もりが残る薄い殻', sellPrice: 8 }]
  },
  {
    id: 'b_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が祠に眠っている。這った跡が黒く焦げている。祠の木材が危ない。急いで出た。',
    damage: 3,
    quill: 2
  },
  {
    id: 'b_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が祠に眠っている。鉄の鱗が床に食い込んでいる。眠ったまま動かない。避けて通った。',
    damage: 1,
    quill: 3
  },
  {
    id: 'b_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が祠に眠っている。牙に猛毒。足音を殺して通り抜ける。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が祠に眠っている。脱皮の途中で力尽きた蛇。古い皮が半分残ったまま眠っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が祠に眠っている。胴回りが人の腰ほどある大蛇がとぐろを巻いている。起こさずに済んだ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が祠に眠っている。氷の中で螺旋を描いて固まっている。冬眠なのか封印なのか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が祠に眠っている。飲み込んだ石が体内に透けて見える。眠り姿は彫刻のようだ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が祠に眠っている。脱皮するたびに大きくなる蛇。今も寝ながら少しずつ育っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が祠に眠っている。とぐろを巻いて完全に眠っている。寝言のように舌が動く。通り過ぎた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_orig_dragon',
    conditions: { s1: 'orig_b_mod', s2: 'subj_dragon' },
    resultText: '忘れられた竜が祠に眠っている。かつては祀られていたが、信仰を失った竜だ。鱗が埃をかぶっている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '小さな竜が祠に眠っている。手のひらサイズの竜が丸くなっている。吐息が小さな火花を散らす。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_small_dragon', name: '極小の竜鱗', description: '手のひらサイズの竜の鱗。温かい', sellPrice: 12 }]
  },
  {
    id: 'b_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が祠に眠っている。老竜が翼を畳んで穏やかに眠っている。近づくと安堵感があった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が祠に眠っている。全身が炎を纏っている。祠が今にも燃え落ちそうだ。逃げた。',
    damage: 5,
    quill: 1
  },
  {
    id: 'b_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が祠に眠っている。鱗が城壁のように厚い竜。山の一部に見える。眠ったままだったのは幸運だった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が祠に眠っている。爪の一振りで岩が裂ける竜。眠っている間に通り抜けた。金色の目が半開きだった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が祠に眠っている。翼は折れ、鱗は剥がれ、火も吐けない。眠っている顔は穏やかだった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_broken_dragon', name: '折れた竜牙', description: 'かつての鋭さの名残。温かみがある', sellPrice: 12 }]
  },
  {
    id: 'b_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が祠に眠っている。山のような巨体が翼を畳んでいる。息を殺して通った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が祠に眠っている。氷をまとった白い竜。吐息が霜になる。祠の中が凍り始めていた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'b_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が祠に眠っている。水晶でできた竜。体を通して景色が歪んで見える。眠り姿は彫刻のようだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_dragon', name: '水晶の竜鱗', description: '透き通った大きな鱗。光を屈折させる', sellPrice: 18 }]
  },
  {
    id: 'b_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が祠に眠っている。目に理性のない竜が今は眠っている。起こした者の末路を想像した。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が祠に眠っている。宝の山の上で居眠りする竜が、今度は祠で眠っている。いびきが地鳴りのようだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_sleepy_dragon', name: '竜の寝癖鱗', description: 'いびきに合わせて剥がれ落ちた鱗。温かい', sellPrice: 10 }]
  },
  {
    id: 'b_orig_butterfly',
    conditions: { s1: 'orig_b_mod', s2: 'subj_butterfly' },
    resultText: '忘れられた蝶が祠に眠っている。羽を閉じたまま、祠の天井にとまっている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が祠に眠っている。花びらと見間違えるほど小さい。羽を閉じて床に降りている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が祠に眠っている。羽の模様が笑顔に見える。近くで眠ると夢見がよかった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が祠に眠っている。羽が炎でできている。眠っても飛んだ跡に火の粉が残る。祠が心配だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が祠に眠っている。金属の羽を持つ蝶。眠るとき羽を閉じると、金属音がした。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が祠に眠っている。羽の縁が刃になっている。眠っているが、うっかり触れると切れる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が祠に眠っている。片羽がちぎれた蝶が床でそっと折り重なって眠っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が祠に眠っている。眠るとき羽ばたいた一振りで、祠の扉が吹き飛んだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が祠に眠っている。霜の結晶が羽の形をしている。触れると粉々になりそうだ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_frozen_butterfly', name: '霜の羽', description: '凍てついた蝶の羽。触れると溶ける', sellPrice: 8 }]
  },
  {
    id: 'b_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が祠に眠っている。羽が透明で、止まると景色に溶けて消えた。いるはずなのに見えない。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が祠に眠っている。追いかけると道に迷う蝶。眠っている間に急いで外に出た。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が祠に眠っている。花もないのにここで眠っている。鱗粉が漂い、こちらも眠くなってきた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_orig_wind',
    conditions: { s1: 'orig_b_mod', s2: 'subj_wind' },
    resultText: '忘れられた風が祠に眠っている。密封された空気がぴたりと止まっている。何百年もここにいる風だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が祠に眠っている。祠の中に微かな気流がある。眠っていても動いているのが風だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が祠に眠っている。祠の中が温かい。眠る前に誰かの背中を押したのだろう。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が祠に眠っている。空気が熱い。眠っているのに焦げる臭いがする。祠の壁が焦げていた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'b_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が祠に眠っている。同じ砂を何百年も同じ場所に積み上げてきた風が、今は止まっている。砂が天井に張りついている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が祠に眠っている。通った跡の岩を切ってきた風が今は息をひそめている。起こさずに通った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が祠に眠っている。方向が定まらなかった乱気流が、今は小さく渦を巻いて眠っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が祠に眠っている。すべてを押し流してきた風が止まっている。起こしてはならないと直感した。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が祠に眠っている。吹雪を伴う風が眠っている。祠の中は静かだが底冷えがする。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が祠に眠っている。空気が澄み切っている。目が覚めるほど澄んだ空気だ。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_clear_wind', name: '澄んだ風の欠片', description: '小瓶に詰めた澄み切った空気', sellPrice: 8 }]
  },
  {
    id: 'b_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が祠に眠っている。帰り道を忘れさせる風が眠っている。通り過ぎる前に道を記憶した。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が祠に眠っている。春風のような生温い空気。この祠に入るとなぜか眠くなる理由がわかった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_orig_flame',
    conditions: { s1: 'orig_b_mod', s2: 'subj_flame' },
    resultText: '忘れられた炎が祠に眠っている。燃え続けていたはずの御神火が、今は消えかかっている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が祠に眠っている。蝋燭の火ほどの炎が祠の中心でかろうじて生きている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が祠に眠っている。暖炉の火のような穏やかな炎。祠が温かい。傷が癒えた。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_flame', name: '優しい炎の残り火', description: 'まだ温かい灰。持つと安らぐ', sellPrice: 6 }]
  },
  {
    id: 'b_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が祠に眠っている。「眠っている」にしては激しすぎる。祠が燃えている。',
    damage: 5,
    quill: 1
  },
  {
    id: 'b_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が祠に眠っている。消えない炎。水をかけても動じない。硬い光を放ちながら眠っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が祠に眠っている。触れたものの形を正確に切り取る炎。眠っていても近づくと危ない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が祠に眠っている。緑や紫に明滅している炎。温かくない。不思議な光が揺れている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_b_broken_flame', name: '壊れた炎の燃えかす', description: '色がおかしい。燃えていないのに灰だ', sellPrice: 8 }]
  },
  {
    id: 'b_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が祠に眠っている。火柱が天を衝く。「眠っている」のか疑わしい。祠が溶けかかっていた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'b_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が祠に眠っている。燃えているのに冷たい青白い炎。霜を纏って揺れている。触れると凍えた。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_b_frozen_flame', name: '凍てついた炎の欠片', description: '冷たいのに炎の形をしている', sellPrice: 12 }]
  },
  {
    id: 'b_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が祠に眠っている。ほぼ見えない炎。空気の揺らぎだけで存在がわかる。何かを浄化している。',
    damage: -1,
    quill: 7
  },
  {
    id: 'b_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が祠に眠っている。燃やしたものの形を幻に映す炎。祠の中に誰かの残像が見えた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'b_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が祠に眠っている。今にも消えそうな熾火が赤く明滅している。そっと近づいて手を当てた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_orig_ice',
    conditions: { s1: 'orig_b_mod', s2: 'subj_ice' },
    resultText: '忘れられた氷が祠に眠っている。夏も溶けない氷が祠の奥に鎮座している。冷気が漏れてくる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が祠に眠っている。掌に収まる欠片。溶けかけているが、何百年も溶けてこなかった氷だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が祠に眠っている。額に当てると熱を引いてくれる冷たさだ。傷が楽になった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が祠に眠っている。炎を放つ氷。触れると凍傷と火傷を同時に負う。近づかなかった。',
    damage: 4,
    quill: 3
  },
  {
    id: 'b_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が祠に眠っている。鋼より硬い万年氷。祠の床をゆっくり、しかし確実に押しつぶしている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が祠に眠っている。氷柱が剣のように床から突き出している。踏んだら足が刺さるところだった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が祠に眠っている。ひび割れた氷。踏めば崩れる。下に暗い水が見えた。避けて通った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が祠に眠っている。山のような氷塊が祠を満たしている。数百年溶けていない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'b_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が祠に眠っている。氷のさらに冷たい状態。触れた空気が結晶化して落ちてくる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が祠に眠っている。完全に透明な氷。存在に気づかず手を突くところだった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が祠に眠っている。溶けない呪いの氷。祠の周りにも永遠の冬が広がっている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が祠に眠っている。ゆっくり溶けていく氷。しずくの音が子守唄のよう。春を待っているのだろう。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_sleepy_ice', name: '眠り氷の水滴', description: '眠い氷から滴り落ちた水。飲むと眠くなる', sellPrice: 6 }]
  },
  {
    id: 'b_orig_shadow',
    conditions: { s1: 'orig_b_mod', s2: 'subj_shadow' },
    resultText: '忘れられた影が祠に眠っている。本体のない影。誰かが置いていったのだろう。触れると冷たかった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が祠に眠っている。足元に小さな黒い染み。何の影かわからない。踏まないようにした。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が祠に眠っている。木陰のような涼しさがある。ここで少し休んだら体が楽になった。',
    damage: -1,
    quill: 5
  },
  {
    id: 'b_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が祠に眠っている。影自体が黒い炎で燃えている。触れると灼けた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が祠に眠っている。地面に貼りついて固まった影。影のはずなのに剥がせない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が祠に眠っている。輪郭がくっきりした影。眠っているが、縁に触れると指が切れた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が祠に眠っている。立体的にめくれ上がった影。平面に戻れないまま眠っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_broken_shadow', name: 'めくれた影の欠片', description: '不思議な黒い薄片。立体的だ', sellPrice: 7 }]
  },
  {
    id: 'b_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が祠に眠っている。本体より遥かに大きく太い。影のほうが本体に見える。起こしたくなかった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が祠に眠っている。地面に張りついて動けない影。本体はとうに去ったのに影だけ残っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が祠に眠っている。半透明で地面の模様が透けている影。存在が薄い。踏んでしまった気がする。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が祠に眠っている。触れたものが影になる。眠っているうちに急いで通り過ぎた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が祠に眠っている。正午の影のように縮んで動かない。これ以上眠い影があるだろうか。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_orig_song',
    conditions: { s1: 'orig_b_mod', s2: 'subj_song' },
    resultText: '忘れられた歌が祠に眠っている。旋律が空気に染み込んで残っている。誰も歌わなくなった歌だ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_orig_song', name: '忘れられた旋律', description: '耳を澄ますと微かに聴こえる', sellPrice: 8 }]
  },
  {
    id: 'b_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が祠に眠っている。鼻歌程度の旋律が漂っている。耳を澄ますとようやく聞こえる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が祠に眠っている。子守唄が眠っている。近づくと旋律が滲み出して、傷が癒えた。',
    damage: -1,
    quill: 7
  },
  {
    id: 'b_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が祠に眠っている。戦の歌が眠っている。眠っていても血が沸く。頭が熱くなった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が祠に眠っている。一度始まったら止められない歌。眠っているだけで、起こしてはならない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が祠に眠っている。金切り声の旋律が眠っている。近づくと耳が痛い。硝子が割れた音がした。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が祠に眠っている。途中で止まる旋律。続きを誰も知らない歌が、ここで眠っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が祠に眠っている。大地を震わせる合唱の残響が眠っている。起こさなくてよかった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が祠に眠っている。感情のない旋律が空気の中に固まっている。美しいが心がない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が祠に眠っている。純粋な旋律が祠に満ちている。聴いていると雑念が消えた。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_song', name: '澄んだ旋律の欠片', description: '耳を澄ますと微かに聴こえる。心が落ち着く', sellPrice: 10 }]
  },
  {
    id: 'b_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が祠に眠っている。一度聴くと頭から離れない歌。もうすでに鳴り止まない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が祠に眠っている。抗えない眠気を運ぶ子守唄。ここでしばらく眠ってしまった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_orig_silence',
    conditions: { s1: 'orig_b_mod', s2: 'subj_silence' },
    resultText: '忘れられた沈黙が祠に眠っている。ここは完全な無音だ。自分の心臓の音だけが聞こえる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が祠に眠っている。ふと会話が途切れたような静けさ。通り過ぎると、また音が戻った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が祠に眠っている。言葉が要らない静けさ。しばらくここにいると心が落ち着いた。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が祠に眠っている。爆発寸前の空気がここに溜まっている。何もしないのが正解だ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'b_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が祠に眠っている。何を言っても吸い込まれる。足音さえ消えた。音の墓場だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'b_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が祠に眠っている。言葉より痛い無言だ。体のどこかが疼く。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が祠に眠っている。静かなはずなのに、どこかからノイズが混じる。封印が壊れかけている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'b_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が祠に眠っている。圧倒的な無音が場を支配している。声を出す気になれなかった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が祠に眠っている。息も凍る冷たい静けさ。時間が止まったようだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が祠に眠っている。完全な静寂。泉のように澄んでいる。思考が透き通った。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_silence', name: '澄んだ沈黙', description: 'すくいとった静寂。持つと落ち着く', sellPrice: 10 }]
  },
  {
    id: 'b_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が祠に眠っている。声を奪われた者たちの沈黙。口が動いても音が出なくなった。しばらく続いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が祠に眠っている。午後の図書館のような眠気を誘う静けさ。危うく眠るところだった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_orig_knight',
    conditions: { s1: 'orig_b_mod', s2: 'subj_knight' },
    resultText: '忘れられた騎士が祠に眠っている。剣を腹の上に置き、鎧のまま横たわっている。誰かの墓か。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が祠に眠っている。子供の騎士が大きすぎる兜をかぶったまま眠っている。前が見えていない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_small_knight', name: '大きすぎる兜', description: '子供の騎士が被っていた兜。まだ温かい', sellPrice: 8 }]
  },
  {
    id: 'b_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が祠に眠っている。剣を傍らに置き、穏やかな顔で眠っている。起こすのが惜しかった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が祠に眠っている。鎧ごと炎に包まれているが、動きを止めているだけだ。眠っているのかも怪しい。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が祠に眠っている。分厚い鎧の騎士が微動だにしない。石像なのか人なのか。触れると温かかった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が祠に眠っている。剣士が眠っている。構えのまま眠っているので、近づくと切られそうだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が祠に眠っている。鎧がへこみ、剣は折れ、それでも眠っている。倒れなかったことに敬意を払った。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_broken_knight', name: '折れた剣の欠片', description: '戦い続けた騎士の剣。重みがある', sellPrice: 10 }]
  },
  {
    id: 'b_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が祠に眠っている。巨体の重装騎士が祠の床に横たわっている。地面が軋んでいた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が祠に眠っている。氷に閉じ込められた騎士が剣を振り上げた姿勢のまま眠っている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が祠に眠っている。影の薄い騎士がいる。いるのに誰にも気づかれない。すでに気づいていた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が祠に眠っている。黒い鎧の騎士が眠っている。兜の奥の目が閉じていた。近づくと体が重くなった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が祠に眠っている。見張りのはずが完全に眠っている。槍が傾いている。これは本来の仕事ではないのか。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_orig_witch',
    conditions: { s1: 'orig_b_mod', s2: 'subj_witch' },
    resultText: '忘れられた魔女が祠に眠っている。杖を握ったまま眠っている。この祠と契約した魔女だろうか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が祠に眠っている。見習いの少女が大きな帽子のまま眠っている。顔が隠れて見えない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が祠に眠っている。傍らに薬草の束が置いてあった。傷に当てると楽になった。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_witch', name: '魔女の薬草束', description: '丁寧に乾燥された薬草。傷に効く', sellPrice: 10 }]
  },
  {
    id: 'b_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が祠に眠っている。炎の魔法で全身を包んだまま眠っている。眠っていても怒りの形相だ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'b_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が祠に眠っている。石のように頑固な老魔女。眠っていても頑固そうな顔をしている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が祠に眠っている。半開きの目がこちらを追う。眠っているのに見透かされている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が祠に眠っている。魔力が暴走した痕跡がある。今は眠っている。眠っている間は安全だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が祠に眠っている。杖を振るより拳で殴る魔女が眠っている。腕が太い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が祠に眠っている。感情を失った魔女が氷のような表情のまま眠っている。周囲に霜が広がる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が祠に眠っている。老いて存在が希薄になった魔女が透けて見える体で眠っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が祠に眠っている。体の一部が変異している。呪いと眠りが混じり合っているようだ。関わらなかった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が祠に眠っている。大釜の前でうとうとしていたが、今は完全に眠っている。薬がまだぐつぐつ煮えていた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_b_sleepy_witch', name: '煮えた薬', description: '魔女の作りかけの薬。何かに効く', sellPrice: 12 }]
  },
  {
    id: 'b_orig_king',
    conditions: { s1: 'orig_b_mod', s2: 'subj_king' },
    resultText: '忘れられた王が祠に眠っている。玉座を離れた王が祠で眠っている。国はどうなったのだろう。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が祠に眠っている。子供が王冠をかぶったまま眠っている。玉座の代わりに祠で眠っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が祠に眠っている。民と共に歩んだ王が、ここで静かに眠っている。祠が温かかった。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_king', name: '民の花束', description: '誰かが王の傍らに置いた野の花', sellPrice: 5 }]
  },
  {
    id: 'b_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が祠に眠っている。炎の冠を戴いた王が眠っている。玉座が燃えているのに眠っている。近づけない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'b_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が祠に眠っている。石の玉座に座り微動だにしない王。眠っているのか、石になったのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が祠に眠っている。鷹のような目の王。眠っていても視線を感じた。何も見逃さない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が祠に眠っている。王冠が歪み、衣は破れ、目は虚ろ。祠に崩れて眠っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_broken_king', name: '歪んだ王冠の欠片', description: '捨てられた王冠の破片', sellPrice: 8 }]
  },
  {
    id: 'b_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が祠に眠っている。戦士王が武器を手放さずに眠っている。玉座より戦場が似合う王だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が祠に眠っている。北の王が吐く息が白い。眠っていても冷気が漏れている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が祠に眠っている。存在が希薄な王。臣下も消えた今、祠でひっそり眠っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が祠に眠っている。触れたものが金になる呪いの王。寝ながら祠の床を金に変えていた。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_b_cursed_king', name: '黄金の床板', description: '王の呪いで金になった一片', sellPrice: 18 }]
  },
  {
    id: 'b_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が祠に眠っている。玉座でも居眠りする王が、今は祠で本格的に眠っている。誰かが政を回しているはずだ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_orig_ghost',
    conditions: { s1: 'orig_b_mod', s2: 'subj_ghost' },
    resultText: '忘れられた亡霊が祠に眠っている。かつて祀られていた霊だろう。そっと手を合わせた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が祠に眠っている。子供の笑い声が聞こえた。姿は見えないが、悪意はないようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が祠に眠っている。生前の面影を残した穏やかな霊。微笑んで消えていった。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が祠に眠っている。炎をまとった怨念の霊が眠っている。熱気が祠の外まで来ている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'b_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が祠に眠っている。同じ場所から何百年も動かない霊が、今は眠っている。これが初めてかもしれない。',
    damage: 1,
    quill: 6
  },
  {
    id: 'b_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が祠に眠っている。罪を見透かす目の霊が眠っている。眠っていても視線が痛い。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が祠に眠っている。自分が何者か思い出せない霊が眠っている。輪郭が溶けかかっている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が祠に眠っている。死んで枷が外れた鎧武者の霊が眠っている。眠っていてよかった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が祠に眠っている。凍死者の霊が眠っている。通った跡に霜が残る。永遠に寒がっている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が祠に眠っている。成仏しかけている霊が眠っている。まだここにいる理由があるのだろう。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が祠に眠っている。呪いに縛られて成仏できない霊。苦しみの顔で眠っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が祠に眠っている。うつらうつらしている霊が、今は完全に眠っている。存在感が薄れたり戻ったりしていた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_orig_mirror',
    conditions: { s1: 'orig_b_mod', s2: 'subj_mirror' },
    resultText: '忘れられた鏡が祠に眠っている。奉納された鏡だろう。曇って何も映らない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'b_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が祠に眠っている。手鏡が祠の奥に置かれている。覗くと自分の目だけが映った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が祠に眠っている。映った者を少し美しく見せる鏡。顔を映すと気持ちが前向きになった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が祠に眠っている。鏡の中が燃えている。周囲に火はないが、鏡面の炎が熱い。',
    damage: 2,
    quill: 6
  },
  {
    id: 'b_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が祠に眠っている。何をしても割れない鏡。眠っていても曇らない。真実しか映さない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が祠に眠っている。破片が刃物のように散乱している。うっかり踏んだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が祠に眠っている。ひび割れた鏡。映る顔が何人にも分裂している。自分が誰だかわからなくなった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が祠に眠っている。人の背丈を超える姿見が祠に納まっている。圧倒的な存在感だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が祠に眠っている。霜で覆われた鏡面。かろうじて影が映る。触れると手が張り付いた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が祠に眠っている。向こうが透けている鏡。窓のようだが通り抜けられない。どこへ続くのか。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_clear_mirror', name: '透き通った鏡の欠片', description: '窓のような欠片。向こうが見える', sellPrice: 10 }]
  },
  {
    id: 'b_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が祠に眠っている。覗いた者の姿が残る鏡。中で誰かの影が動いていた。覗かなかった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が祠に眠っている。鏡面がぼんやり曇っている。映像が数秒遅れて映る。自分が後から映った。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_orig_doll',
    conditions: { s1: 'orig_b_mod', s2: 'subj_doll' },
    resultText: '忘れられた人形が祠に眠っている。奉納された藁人形か。目が合った気がした。',
    damage: 1,
    quill: 4
  },
  {
    id: 'b_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が祠に眠っている。指人形ほどの大きさ。誰かが落としたものか。すやすや眠っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が祠に眠っている。くたくたになった人形。笑顔が縫ってある。見ると気持ちが安らいだ。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_b_gentle_doll', name: '古びた人形', description: 'くたくたになっているが、笑顔がある', sellPrice: 6 }]
  },
  {
    id: 'b_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が祠に眠っている。火がついた藁人形が眠っている。祭りの焚き上げのようだ。近づけない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'b_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が祠に眠っている。木彫りの人形。関節がない。表情もない。眠っているのかさえ不明だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が祠に眠っている。関節が刃になった操り人形が眠っている。糸が見えない。踏まなくてよかった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が祠に眠っている。首がもげかけた人形。残った目でこちらを見ている。眠っているのに目が開いている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'b_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が祠に眠っている。等身大の木彫り人形が眠っている。命令を待っているのだろうか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が祠に眠っている。氷でできた人形。恐怖の瞬間を閉じ込めたような顔で眠っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'b_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が祠に眠っている。硝子の人形。中に何かの液体が入っている。それも一緒に眠っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_b_clear_doll', name: '硝子の人形', description: '中の液体が揺れている。まだ生きているか', sellPrice: 12 }]
  },
  {
    id: 'b_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が祠に眠っている。夜になると位置が変わる人形。眠る前にいた場所と違う所にいた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が祠に眠っている。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。今は横になって眠っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_orig_rain',
    conditions: { s1: 'orig_b_mod', s2: 'subj_rain' },
    resultText: '忘れられた雨が祠に眠っている。閉じた祠の中で、雨粒が動かずに浮かんでいる。時間が止まっているようだ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'b_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が祠に眠っている。霧雨が祠の中で止まっている。触れると濡れるが、傷には沁みなかった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'b_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が祠に眠っている。慈雨が眠っている。起こせば渇いた大地を潤してくれる雨が、今は静かだ。',
    damage: -1,
    quill: 6
  },
  {
    id: 'b_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が祠に眠っている。火の雨が祠の中で止まっている。眠っていても熱い。壁が焦げていた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'b_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が祠に眠っている。雹が眠っている。宙に浮いて止まった氷の粒。踏まないよう気をつけた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が祠に眠っている。針のような雨粒が宙に浮いている。眠っていても危ない。腕を掠めた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が祠に眠っている。上に向かって降るはずの雨が、止まっている。重力が壊れているらしい。',
    damage: 1,
    quill: 6
  },
  {
    id: 'b_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が祠に眠っている。豪雨が眠っている。滝のような水量が宙で止まっている。起こしたら洪水だ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が祠に眠っている。触れたものを氷の膜で覆う凍雨が止まっている。どこも触れずに通った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'b_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が祠に眠っている。澄んだ雨粒が宙に浮かんでいる。光が当たると虹が見えた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_b_clear_rain', name: '澄んだ雨粒', description: '光を集めて虹を作る一粒', sellPrice: 10 }]
  },
  {
    id: 'b_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が祠に眠っている。浴びると根が生えて動けなくなる雨。眠っていてくれていた。急いで出た。',
    damage: 2,
    quill: 5
  },
  {
    id: 'b_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が祠に眠っている。雨音が子守唄のような雨が、今は止まって眠っている。この祠で眠った者は多いだろう。',
    damage: 1,
    quill: 5
  },
];
