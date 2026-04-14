// Auto-generated from node-r02-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeR02Outcomes: Outcome[] = [
  {
    id: 'r02_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '小さな子猫が焚き火で温まっている。親指ほどの子猫が炎のそばで丸くなっている。隣に座ると体が温まった。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が焚き火で温まっている。膝の上に乗ってきた。焚き火の温もりと猫の温もりで、冷えた体がほぐれる。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が焚き火で温まっている。猫自体が炎をまとっている。焚き火が不要なほど熱い。近づけない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が焚き火で温まっている。陶器の招き猫が炎のそばに置いてある。目だけがこちらを追っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が焚き火で温まっている。硝子の爪の猫が火のそばでうずくまっている。撫でようとしたら引っ掻かれた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が焚き火で温まっている。ぬいぐるみだ。綿が出ているが、火のそばで乾かしている。誰かが置いたのだろう。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_r02_broken_kitten', name: '乾いた綿猫', description: '焚き火で乾かされたぬいぐるみ。少し焦げ臭い', sellPrice: 5 }]
  },
  {
    id: 'r02_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が焚き火で温まっている。虎の体格の子猫が火の前に陣取っている。場所を譲る気はないらしい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が焚き火で温まっている。氷の猫が火のそばで少しずつ溶けている。目を開けた。間に合ったらしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_r02_frozen_kitten', name: '溶けた氷猫の涙', description: '氷が溶けてできた水滴。なぜか温かい', sellPrice: 8 }]
  },
  {
    id: 'r02_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が焚き火で温まっている。硝子の猫が炎に照らされて、赤く透けている。心臓の鼓動が見える。',
    damage: 0,
    quill: 6
  },
  {
    id: 'r02_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が焚き火で温まっている。一度撫でたら手が離れない。焚き火のそばに座り込むことになった。まあ温かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が焚き火で温まっている。丸くなって寝息を立てている。つられて横になった。良い休息になった。',
    damage: -1,
    quill: 4
  },
  {
    id: 'r02_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '小さな蛇が焚き火で温まっている。指ほどの蛇が石の上で日向ぼっこのように火に当たっている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が焚き火で温まっている。腕に巻きついてきた。蛇の体温と焚き火の温もりで、手先がほぐれる。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が焚き火で温まっている。炎の軌跡を残す蛇が焚き火に巻きついている。火が二倍に膨れ上がった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が焚き火で温まっている。鉄の鱗の蛇。火で熱されて赤くなっている。触ったら火傷する。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が焚き火で温まっている。牙に猛毒。火で暖を取りながらこちらを睨んでいる。同じ焚き火は使えない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が焚き火で温まっている。脱皮の途中で力尽きた蛇が火のそばで休んでいる。温まれば脱げるのかもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が焚き火で温まっている。大蛇がとぐろを巻いて焚き火を囲んでいる。迂回しようとして尾に弾かれ、地面に転がった。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が焚き火で温まっている。霜に覆われた蛇が火のそばで溶けかけている。動き出すまでは安全だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が焚き火で温まっている。炎に照らされて体内の骨格が浮かぶ。美しいが、少し怖い。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が焚き火で温まっている。温まるたびに大きくなっている。焚き火が足りなくなりそうだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が焚き火で温まっている。とぐろを巻いて寝ている。踏まなければ無害だ。同じ火で温まった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '小さな竜が焚き火で温まっている。手のひらサイズの竜が火に向かって小さな炎を吐いている。焚き火を育てているつもりらしい。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_r02_small_dragon', name: '竜の種火', description: '小竜が吐いた火の欠片。消えない', sellPrice: 12 }]
  },
  {
    id: 'r02_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が焚き火で温まっている。穏やかな老竜が翼で焚き火を囲い、風よけを作ってくれている。',
    damage: -1,
    quill: 6
  },
  {
    id: 'r02_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が焚き火で温まっている。竜自体が焚き火より熱い。周囲の木々が焦げ始めている。逃げた。',
    damage: 1,
    quill: 1
  },
  {
    id: 'r02_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が焚き火で温まっている。城壁のような鱗。火が当たっても微動だにしない。どかせない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が焚き火で温まっている。金色の目がこちらを値踏みしている。焚き火に近づくと低い唸り声が返ってきた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が焚き火で温まっている。翼は折れ、鱗は剥がれている。焚き火で暖を取る姿が哀れだ。隣に座った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が焚き火で温まっている。焚き火が竜の体温に負けている。近づいたら竜の鼻息で吹き飛ばされた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が焚き火で温まっている。白い竜の吐息が霜になる。焚き火との間で煙と霜が混じり合っている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が焚き火で温まっている。水晶の竜。炎に照らされて体の中に虹が走る。火を通して向こうの景色が見える。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_r02_clear_dragon', name: '虹鱗の欠片', description: '水晶竜の鱗。光を当てると虹が走る', sellPrice: 15 }]
  },
  {
    id: 'r02_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が焚き火で温まっている。目に理性がない。呪いの瘴気を吸い込み、頭が割れるように痛んだ。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が焚き火で温まっている。いびきが地鳴りのように響く。起こさなければ安全だ。焚き火は共有できる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が焚き火で温まっている。火の粉と見間違うほど小さい。炎の光に集まってきたのだろう。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が焚き火で温まっている。炎のそばを舞っている。羽の模様が笑顔に見える。穏やかな夜だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が焚き火で温まっている。炎の羽の蝶。焚き火に飛び込んでも平気だ。火の粉と区別がつかない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が焚き火で温まっている。金属の羽の蝶が炎に当たって金属音を立てている。風鈴のようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が焚き火で温まっている。刃の羽が炎に照らされて光っている。火のそばを通るとき頬をかすめた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が焚き火で温まっている。片羽の蝶が炎のそばで休んでいる。飛べないから温もりを求めているのだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が焚き火で温まっている。羽ばたきのたびに焚き火が揺れる。蝶のくせに風圧がある。火が消えそうだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が焚き火で温まっている。霜の結晶の羽が少しずつ溶けている。焚き火がちょうどいい温度らしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が焚き火で温まっている。透明な羽が炎を映して揺れている。蝶の中に小さな焚き火が見える。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_r02_clear_butterfly', name: '透明蝶の炎', description: '蝶の羽に映った焚き火。不思議と温かい', sellPrice: 8 }]
  },
  {
    id: 'r02_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が焚き火で温まっている。追いかけたくなる。焚き火から離れて蝶を追った。道に迷った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が焚き火で温まっている。羽を閉じて炎のそばで動かない。焚き火の温もりで安らかに眠っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が焚き火で温まっている。そよ風が炎のまわりをぐるぐる回っている。火が少しだけ揺れる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が焚き火で温まっている。温かい風が焚き火の熱を運んでくれる。体中がぽかぽかする。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が焚き火で温まっている。熱風が焚き火を煽って炎が暴れている。火事になりかけた。',
    damage: 1,
    quill: 2
  },
  {
    id: 'r02_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が焚き火で温まっている。一方向にだけ吹く風。焚き火の煙が真横に流れている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が焚き火で温まっている。木枯らしが焚き火の熱を奪っていく。温まるどころか冷えてきた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が焚き火で温まっている。乱気流が炎をあちこちに散らしている。火の粉が服に飛んだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が焚き火で温まっている。すべてを押し流す風。焚き火が吹き消され、体温を奪われて歯が鳴った。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が焚き火で温まっている。吹雪と焚き火がぶつかり合っている。温かいのか寒いのかわからない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が焚き火で温まっている。澄んだ風が焚き火の煙を払い、星空が見えた。清々しい夜だ。',
    damage: -1,
    quill: 6
  },
  {
    id: 'r02_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が焚き火で温まっている。帰り道を忘れさせる風。焚き火の場所から動けなくなった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が焚き火で温まっている。生温い風が顔を撫でる。焚き火の前でまぶたが落ちた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が焚き火で温まっている。蝋燭ほどの火が焚き火に寄り添っている。焚き火に吸い込まれて少しだけ大きくなった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が焚き火で温まっている。暖炉のような温もり。焚き火と優しい炎で、冷えた手足が解ける。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が焚き火で温まっている。大火が焚き火を飲み込んだ。もはや焚き火ではない。火事だ。',
    damage: 1,
    quill: 1
  },
  {
    id: 'r02_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が焚き火で温まっている。消えない炎が焚き火に混じっている。薪が尽きても、この火だけは残るだろう。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が焚き火で温まっている。一点集中の火が薪を正確にくり抜いている。文字の形に焦げている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'r02_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が焚き火で温まっている。緑や紫に明滅する火。焚き火まで色がおかしくなってきた。温かくはない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が焚き火で温まっている。火柱が空を衝く。焚き火が巨大な篝火に化け、熱波で肌が赤く腫れた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'r02_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が焚き火で温まっている。青白い炎が焚き火の隣で霜を纏っている。冷たいのに温かい不思議な感覚。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が焚き火で温まっている。見えない炎。空気の揺らぎだけが焚き火のそばにある。穢れだけが焼かれていく気がする。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_r02_clear_flame', name: '浄火の灰', description: '透き通った炎が焼いた灰。白くて軽い', sellPrice: 8 }]
  },
  {
    id: 'r02_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が焚き火で温まっている。焚き火の中に燃えた町の幻が見える。目を逸らせない。温まるが心が冷える。',
    damage: 1,
    quill: 5
  },
  {
    id: 'r02_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が焚き火で温まっている。熾火が赤く明滅している。催眠的な揺れに誘われて、ぐっすり眠った。',
    damage: -1,
    quill: 4
  },
  {
    id: 'r02_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が焚き火で温まっている。掌の氷が火のそばでゆっくり溶けていく。水滴が薪に落ちて蒸発する。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が焚き火で温まっている。氷が溶けた水で顔を洗った。ひんやりして気持ちいい。焚き火で体を温め直した。',
    damage: -1,
    quill: 4
  },
  {
    id: 'r02_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が焚き火で温まっている。炎を放つ氷。焚き火と反発して蒸気と火花が飛び散っている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が焚き火で温まっている。万年氷。焚き火の熱でも溶けない。火のそばに居座って場所を取っている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が焚き火で温まっている。剣のような氷柱が火のそばに突き刺さっている。溶けかけて滴が落ちる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が焚き火で温まっている。ひび割れた氷の破片が火のそばで溶けている。水たまりになった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が焚き火で温まっている。山のような氷塊。焚き火が氷に負けて縮んでいる。寒い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が焚き火で温まっている。絶対零度に近い氷。冷気が焚き火を圧して、指先の感覚が消えた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が焚き火で温まっている。完全に透明な氷が炎の光を集めている。レンズのように光が一点に集まった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が焚き火で温まっている。溶けない氷が永遠の冬を広げている。体の芯まで凍え、立ち上がれなくなった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が焚き火で温まっている。ゆっくり溶ける音が心地よい。焚き火の前で、氷と一緒にまどろんだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が焚き火で温まっている。火の前に小さな黒い染み。何の影かわからないが、火に当たって揺れている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が焚き火で温まっている。誰かが隣にいるかのような影。一緒に火に当たっていると安心する。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が焚き火で温まっている。黒い炎で燃える影。焚き火と影の炎が混じり合って、火が黒く変色した。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が焚き火で温まっている。地面に貼りついた影が焚き火の光でも剥がれない。踏むと硬い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が焚き火で温まっている。焚き火の光で長く鋭く伸びた影。縁に触れると手が切れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が焚き火で温まっている。立体的にめくれ上がった影が炎に照らされて奇妙な形を作っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が焚き火で温まっている。巨大な影が焚き火を囲んでいる。影のほうが実体に見える。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が焚き火で温まっている。地面に凍りついた影。焚き火でようやく端が溶け始めている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が焚き火で温まっている。半透明の影。焚き火の光を通して地面の模様が見える。存在が薄い。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が焚き火で温まっている。自分の影が焚き火に引き寄せられていく。影の端を踏んだ足が冷たくなり、しばらく動かせなかった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'r02_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が焚き火で温まっている。正午の影のように縮んで動かない。焚き火の前で一緒にうとうとした。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が焚き火で温まっている。鼻歌がパチパチと薪の音に混じっている。誰が歌っているかわからない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が焚き火で温まっている。子守唄が炎と一緒に揺れている。体が芯から温まった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'r02_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が焚き火で温まっている。戦の歌。焚き火が勢いを増し、炎が踊り出した。血が騒ぐ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が焚き火で温まっている。止まらない旋律。焚き火の爆ぜる音も掻き消される。耳鳴りがする。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が焚き火で温まっている。金切り声が焚き火のそばで響く。薪がぱきんと割れた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が焚き火で温まっている。途中で止まる旋律。焚き火のパチパチが続きを埋めている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が焚き火で温まっている。大合唱。焚き火が揺さぶられて火の粉が舞い上がる。体に力がみなぎる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'r02_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が焚き火で温まっている。凍った旋律が炎で解けていく。音が一つずつ蘇る。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_r02_frozen_song', name: '解けた旋律', description: '焚き火で解凍された音。瓶の中で微かに歌っている', sellPrice: 10 }]
  },
  {
    id: 'r02_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が焚き火で温まっている。純粋な旋律が焚き火の光と溶け合う。疲れが静かに抜けていく。',
    damage: -1,
    quill: 6
  },
  {
    id: 'r02_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が焚き火で温まっている。頭から離れない歌。焚き火を離れても耳の奥で鳴り続けている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が焚き火で温まっている。子守唄と焚き火の温もり。最強の催眠だ。気づいたら朝だった。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が焚き火で温まっている。薪の爆ぜる音だけが聞こえる。ふと、静寂を意識した。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が焚き火で温まっている。言葉のない安らぎ。火を見つめながら、何も考えずに過ごした。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が焚き火で温まっている。空気が焦げるような無音。焚き火の音すら聞こえない。息が詰まる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が焚き火で温まっている。声を出しても吸い込まれる。焚き火の音だけが沈黙に許されている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が焚き火で温まっている。刺すような静寂。焚き火の炎まで緊張している気がする。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が焚き火で温まっている。静寂のはずなのにノイズが混じる。焚き火が落ち着かない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が焚き火で温まっている。圧倒的な無音が場を支配している。焚き火の音すら小さく感じる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が焚き火で温まっている。冷たい静寂が焚き火で少しだけ緩んでいる。それでも寒い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が焚き火で温まっている。澄んだ静寂と温かな炎。完璧な休息だ。',
    damage: -1,
    quill: 6
  },
  {
    id: 'r02_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が焚き火で温まっている。口が動くのに声が出ない。焚き火に叫んでも、音は吸い込まれた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が焚き火で温まっている。静かで温かい。意識が溶けていく。焚き火の番を忘れて眠った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が焚き火で温まっている。子供の騎士が大きすぎる兜を膝に置いて、火に手をかざしている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が焚き火で温まっている。剣を地に刺し、薪をくべてくれた。向かいに座れと顎で示した。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が焚き火で温まっている。鎧ごと燃えている。焚き火の火が騎士に引き寄せられて大火になった。',
    damage: 1,
    quill: 2
  },
  {
    id: 'r02_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が焚き火で温まっている。分厚い鎧のまま火のそばに座っている。鎧が熱くならないのか。表情は見えない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が焚き火で温まっている。火明かりで剣を研いでいる。目が冷たい。同じ火を使うが、会話はない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が焚き火で温まっている。へこんだ鎧、折れた剣。火のそばで傷を舐めている。それでもまだ立てる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が焚き火で温まっている。巨体が焚き火の熱をほとんど遮っている。温まれるのは騎士だけだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が焚き火で温まっている。鎧に霜がおりている。焚き火で少しずつ氷が溶けていく。剣を握る手がようやく動いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が焚き火で温まっている。影の薄い騎士。火に照らされてようやく輪郭が見える。いるのに気づかなかった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が焚き火で温まっている。兜の奥の目が赤く光っている。赤黒い炎に当たると、体から力が抜けていく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が焚き火で温まっている。槍にもたれて舟を漕いでいる。見張り番のはずだが、焚き火が温かすぎるらしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が焚き火で温まっている。少女の魔女が大きな帽子を被ったまま火のそばにしゃがんでいる。マシュマロを焼いている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'r02_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が焚き火で温まっている。薬草の茶を焚き火で煮出してくれた。飲むと体がぽかぽかする。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_r02_gentle_witch', name: '魔女の薬草茶', description: '焚き火で煮出した茶葉。飲むと体が温まる', sellPrice: 8 }]
  },
  {
    id: 'r02_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が焚き火で温まっている。炎の魔法で全身を包んだ魔女。焚き火が巨大化した。森が燃えそうだ。',
    damage: 1,
    quill: 2
  },
  {
    id: 'r02_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が焚き火で温まっている。頑固な老魔女が焚き火を独占している。話しかけても一言も返さない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が焚き火で温まっている。鉤鼻の魔女が炎を見つめている。何かを占っているらしい。こちらの未来が見えたのか、眉をひそめた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が焚き火で温まっている。魔力が暴走して体が震えている。焚き火の温もりだけが彼女を落ち着かせている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が焚き火で温まっている。太い腕で薪を折っている。道具は使わない。焚き火がどんどん大きくなる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が焚き火で温まっている。氷の魔法使いが火のそばで霜を落としている。焚き火と魔女の間で蒸気が上がる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が焚き火で温まっている。存在が希薄な老魔女。焚き火の光に照らされて、ようやく輪郭が見える。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が焚き火で温まっている。自分の呪いに蝕まれた魔女。焚き火の炎が紫に変わった。温まるが気分が悪い。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が焚き火で温まっている。帽子を顔に載せて居眠りしている。大釜の代わりに焚き火で薬を煮ていたようだが、もう沸いている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が焚き火で温まっている。子供の王が王冠を膝に置いて火に手をかざしている。玉座の方が暖かいだろうに。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が焚き火で温まっている。質素な衣の王が焚き火に薪をくべてくれた。旅人よ、温まっていけと。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が焚き火で温まっている。炎の冠の王。焚き火が王の怒りで爆ぜた。近づけない。',
    damage: 1,
    quill: 2
  },
  {
    id: 'r02_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が焚き火で温まっている。微動だにしない王。焚き火の前に石像のように座っている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が焚き火で温まっている。鷹の目が炎越しにこちらを見ている。値踏みされている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が焚き火で温まっている。歪んだ王冠、虚ろな目。焚き火に手をかざしているが、温もりを感じているかどうか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が焚き火で温まっている。戦士王が焚き火のそばで鎧を脱いでいる。傷だらけの背中に火が赤い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'r02_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が焚き火で温まっている。氷の玉座を捨ててきたのか、王の周りだけ霜が溶けかけている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'r02_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が焚き火で温まっている。存在が希薄な王。火に照らされてかろうじて見える。誰にも気づかれない王。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が焚き火で温まっている。触れたものが金になる王。薪に触れたら金の棒になった。火が消えかけている。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_r02_cursed_king', name: '金の薪', description: '王が触れた薪。金に変わっているが、まだ少し温かい', sellPrice: 15 }]
  },
  {
    id: 'r02_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が焚き火で温まっている。王冠がずれたまま舟を漕いでいる。側近はいない。自由な王だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が焚き火で温まっている。子供の霊が火のそばに座っている。温もりを感じられるのだろうか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が焚き火で温まっている。穏やかな霊が向かいに座っている。生前は旅人だったのかもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が焚き火で温まっている。火に焼かれた記憶の霊。怨念に染まった炎で、温まるほどに気力が削がれた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が焚き火で温まっている。何百年もここに立っている霊。焚き火のほうが後から来たのだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が焚き火で温まっている。罪を見透かす目が炎に照らされている。居心地が悪い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が焚き火で温まっている。記憶を失った霊。火を見つめて何かを思い出そうとしている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が焚き火で温まっている。鎧武者の霊。焚き火が怯えるように小さくなった気がする。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が焚き火で温まっている。冷気を纏った霊。焚き火のそばにいるのに寒気がする。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が焚き火で温まっている。成仏しかけている霊。炎の光に溶けるように薄くなっていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が焚き火で温まっている。苦しみの表情。霊の呪気が炎に乗って、吸い込むたびに胸が重くなる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'r02_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が焚き火で温まっている。うつらうつらしている霊。存在感が薄れたり戻ったりしている。害はない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が焚き火で温まっている。手鏡が火のそばに落ちている。覗くと炎に照らされた自分の顔が映った。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が焚き火で温まっている。覗くと少し元気な自分が映る。焚き火の温もりと合わさって、気持ちが軽くなった。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が焚き火で温まっている。鏡の中だけが燃えている。焚き火の炎を増幅して映している。熱い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が焚き火で温まっている。傷のつかない鏡が焚き火の炎を完璧に映している。二つの火が向かい合う。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が焚き火で温まっている。割れた鏡の破片。火の光を反射して目に刺さった。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が焚き火で温まっている。ひび割れた鏡面が炎を何十にも分割して映している。万華鏡のようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が焚き火で温まっている。巨大な姿見。焚き火を丸ごと映して、火が二倍に見える。暑い。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が焚き火で温まっている。霜で覆われた鏡が焚き火の熱でゆっくり曇りを落としている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が焚き火で温まっている。透明な鏡。向こうに別の焚き火が見える。鏡の中にも誰かが座っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_r02_clear_mirror', name: '鏡中の火', description: '透明な鏡の破片。中に小さな焚き火が映り続けている', sellPrice: 12 }]
  },
  {
    id: 'r02_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が焚き火で温まっている。覗いたら自分の顔が映って残った。鏡の中の影がこちらを見ている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が焚き火で温まっている。鏡面がぼんやり曇っている。映像が遅れて映る。自分の寝顔が見えた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が焚き火で温まっている。指人形が薪のそばに立てかけてある。誰かが置いたのだろう。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が焚き火で温まっている。笑顔の縫いぐるみ。火のそばで乾かしてある。抱くと温かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が焚き火で温まっている。藁人形が焚き火に落ちて燃えている。祭りの焚き上げのようだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が焚き火で温まっている。木彫りの人形。関節がない。火に当たって表面が少しだけ焦げている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'r02_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が焚き火で温まっている。関節が刃の操り人形。火明かりに照らされて不気味に光っている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が焚き火で温まっている。首がもげかけた人形が火のそばに転がっている。残った目が炎を映している。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が焚き火で温まっている。等身大の木彫り人形が焚き火を占領している。どかせない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が焚き火で温まっている。氷の人形が火のそばで少しずつ溶けている。表情が変わっていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'r02_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が焚き火で温まっている。硝子の人形が炎に照らされて中の液体が揺れている。温められてほんのり光る。',
    damage: 0,
    quill: 6
  },
  {
    id: 'r02_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が焚き火で温まっている。火で焼こうとしたが燃えない。朝になると枕元にあった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が焚き火で温まっている。目を閉じた人形が火のそばで横になっている。持つと眠くなる人形。一緒に寝た。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が焚き火で温まっている。霧雨が焚き火の上だけに降っている。蒸気が湯気のように上がる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'r02_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が焚き火で温まっている。慈雨が焚き火の温もりを含んで降りそそぐ。温かい雨に打たれた。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が焚き火で温まっている。火の雨が焚き火に降り注ぐ。炎が爆発的に広がった。逃げた。',
    damage: 1,
    quill: 2
  },
  {
    id: 'r02_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が焚き火で温まっている。雹が焚き火に叩きつけられている。火が消えそうだ。薪をかばった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が焚き火で温まっている。針のような雨が焚き火を叩いている。火は耐えているが、肌が痛い。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が焚き火で温まっている。途切れ途切れの雨。焚き火がつくのか消えるのかわからない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が焚き火で温まっている。豪雨が焚き火を叩き消した。ずぶ濡れで暗闇に取り残された。',
    damage: 2,
    quill: 2
  },
  {
    id: 'r02_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が焚き火で温まっている。凍雨が焚き火のそばで蒸気と霜に分かれている。焚き火が弱っていく。',
    damage: 1,
    quill: 3
  },
  {
    id: 'r02_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が焚き火で温まっている。澄んだ雨が焚き火の煙を洗い流す。空気が清まった。焚き火も明るくなった。',
    damage: -1,
    quill: 5
  },
  {
    id: 'r02_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が焚き火で温まっている。浴びると動けなくなる雨。焚き火のそばから離れられない。まあ温かい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'r02_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が焚き火で温まっている。静かな雨音と焚き火の爆ぜる音。最高の子守唄だ。深く眠った。',
    damage: -1,
    quill: 5
  },
];
