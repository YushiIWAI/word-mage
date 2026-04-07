// Auto-generated from node-p09-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP09Outcomes: Outcome[] = [
  {
    id: 'p09_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '小さな子猫が井戸に沈んでいる。親指ほどの子猫が、底の泥の中で鳴いている。片手で引き上げた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が井戸に沈んでいる。覗き込むと、底からこちらを見上げている。縄を垂らすと自分で掴まって登ってきた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が井戸に沈んでいる。枯れた井戸の底が赤く明滅している。炎は水なしでも消えていない。引き上げたら袖が焦げた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が井戸に沈んでいる。陶器の招き猫だ。重い。縄で引き上げると、目だけがゆっくり動いた。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p09_hard_kitten', name: '井戸底の招き猫', description: '陶器の招き猫。泥まみれだが目が動く', sellPrice: 8 }]
  },
  {
    id: 'p09_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が井戸に沈んでいる。引き上げた途端、硝子の爪で腕を裂かれた。恩知らずだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が井戸に沈んでいる。ぬいぐるみだ。綿が水を吸って重くなっている。絞って乾かしてやった。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_broken_kitten', name: '水浸しの子猫', description: '綿のぬいぐるみ。まだ少し湿っている', sellPrice: 5 }]
  },
  {
    id: 'p09_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が井戸に沈んでいる。虎のような体格の子猫。自力で壁を蹴って登ってきた。助けは要らなかったらしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_mighty_kitten', name: '虎猫の毛', description: '屈強な子猫の抜け毛。握ると力が出る', sellPrice: 8 }]
  },
  {
    id: 'p09_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が井戸に沈んでいる。氷の彫刻が底で光っている。引き上げると、中でまだ息をしていた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_frozen_kitten', name: '氷の子猫', description: '凍りついた猫の彫刻。内側がほのかに温かい', sellPrice: 12 }]
  },
  {
    id: 'p09_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が井戸に沈んでいる。硝子の体が暗闇で微かに光る。心臓の鼓動が透けて見える。そっと引き上げた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p09_clear_kitten', name: '硝子の子猫', description: '透き通った猫。心臓が脈打っている', sellPrice: 15 }]
  },
  {
    id: 'p09_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が井戸に沈んでいる。放っておいたのに、気づけばポケットの中にいた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が井戸に沈んでいる。丸くなって寝ている。井戸の底は暗くて暖かいのかもしれない。引き上げても起きない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '小さな蛇が井戸に沈んでいる。指ほどの蛇が石壁に巻きついている。引き上げると腕に巻きついて離れない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が井戸に沈んでいる。縄を垂らすと、腕に巻きついて登ってきた。体温を分けるように温かい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が井戸に沈んでいる。井戸の壁が焦げている。覗き込んだだけで顔が熱い。放っておくのが賢明だ。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が井戸に沈んでいる。鉄の鱗が石壁に擦れて火花を散らしている。引き上げようとしたが重すぎる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が井戸に沈んでいる。引き上げた瞬間に噛まれた。牙に猛毒。指先が黒く変わり始める。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が井戸に沈んでいる。脱皮の途中で力尽きたらしい。古い皮が半分残ったまま。引き上げて皮を剥いてやった。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_broken_snake', name: '蛇の抜け殻', description: '脱ぎかけの皮。半透明で美しい', sellPrice: 7 }]
  },
  {
    id: 'p09_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が井戸に沈んでいる。胴回りが人の腰ほどある。井戸を壊して出てきそうだ。近づかないことにした。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が井戸に沈んでいる。氷の中で螺旋を描いて固まっている。引き上げると手が凍りつく。美しいが冷たい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が井戸に沈んでいる。骨格が透けて見える。飲み込んだ何かが体内で光っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_clear_snake', name: '蛇の呑んだ光', description: '透明な蛇の腹にあった小さな光の粒', sellPrice: 12 }]
  },
  {
    id: 'p09_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が井戸に沈んでいる。脱皮するたびに大きくなる蛇。井戸から溢れる前に蓋をした。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が井戸に沈んでいる。とぐろを巻いて底で寝ている。起こさなければ無害だ。そっと立ち去る。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '小さな竜が井戸に沈んでいる。手のひらサイズの竜が底で翼をばたつかせている。引き上げると、怒って小さな火を噴いた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_small_dragon', name: '極小の竜鱗', description: '雀の羽より小さい。虹色に光る', sellPrice: 10 }]
  },
  {
    id: 'p09_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が井戸に沈んでいる。穏やかな老竜が底で丸くなっている。縄を下ろすと、感謝するように鼻を鳴らした。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p09_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が井戸に沈んでいる。井戸の石壁が赤熱している。覗き込んだだけで髪が焦げた。引き上げるなど論外だ。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p09_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が井戸に沈んでいる。城壁のような鱗が井戸の縁を削っている。重すぎて引き上げられない。下から睨まれた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が井戸に沈んでいる。金色の目がこちらを見据えている。縄を下ろした瞬間、爪で引きちぎられた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が井戸に沈んでいる。翼は折れ、鱗は剥がれている。火も吐けない。時間をかけて引き上げ、傷薬を塗ってやった。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p09_broken_dragon', name: '折れた竜翼', description: '壊れた竜の翼の破片。まだ微かに温かい', sellPrice: 12 }]
  },
  {
    id: 'p09_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が井戸に沈んでいる。山のような巨体が底に蹲っている。井戸そのものが軋んでいる。近づくべきではない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が井戸に沈んでいる。吐息が吹雪になって井戸の口から溢れている。底を覗くと白い鱗が見えた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が井戸に沈んでいる。水晶の体が暗闇の底で微かに光っている。引き上げると、体を通して空が歪んで見えた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p09_clear_dragon', name: '水晶の竜鱗', description: '透明な鱗の一枚。景色が歪んで映る', sellPrice: 15 }]
  },
  {
    id: 'p09_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が井戸に沈んでいる。目に理性がない。引き上げれば暴走する。蓋をして石を積んだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が井戸に沈んでいる。いびきが井戸全体を振るわせている。底に金貨が数枚光っている。起こさず、そっと拾った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_sleepy_dragon', name: '竜のへそくり', description: '井戸の底に沈んでいた金貨。竜の匂いがする', sellPrice: 15 }]
  },
  {
    id: 'p09_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が井戸に沈んでいる。花びらと見間違うほど小さい。指先に乗せて引き上げると、ふわりと飛んでいった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が井戸に沈んでいる。羽の模様が笑顔に見える。指を差し出すと止まって、しばらくそこにいた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が井戸に沈んでいる。炎の羽が底で揺れている。引き上げたら火の粉が散って、袖に穴が空いた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が井戸に沈んでいる。金属の羽が石壁に当たって澄んだ音を立てている。引き上げると重い。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p09_hard_butterfly', name: '金属の蝶', description: '真鍮色の羽を持つ蝶。振ると鳴る', sellPrice: 8 }]
  },
  {
    id: 'p09_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が井戸に沈んでいる。羽の縁が刃。引き上げようとして指を切った。蝶は自力で飛び上がった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が井戸に沈んでいる。片羽がちぎれて底に落ちている。もう飛べない。掌に乗せて引き上げた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_broken_butterfly', name: 'ちぎれた蝶の羽', description: '片方だけの羽。まだ鱗粉が光っている', sellPrice: 6 }]
  },
  {
    id: 'p09_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が井戸に沈んでいる。羽ばたきが風を起こし、底から砂埃が巻き上がる。自力で飛び出してきた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が井戸に沈んでいる。霜の結晶が羽の形をしている。引き上げると掌で溶けかけた。息を吹きかけて凍らせ直す。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_frozen_butterfly', name: '霜の蝶', description: '霜でできた蝶。温めると消える', sellPrice: 10 }]
  },
  {
    id: 'p09_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が井戸に沈んでいる。透明な羽が暗闇で僅かに光る。引き上げると景色に溶けて見えなくなった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が井戸に沈んでいる。追いかけると迷子になる蝶だ。井戸の底で静かにしていてくれるなら、そのままでいい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が井戸に沈んでいる。羽を閉じたまま底の石に止まっている。引き上げても花に置いても、また閉じる。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が井戸に沈んでいる。覗き込むと、底からそよ風が頬を撫でた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が井戸に沈んでいる。温かい追い風が底から吹き上がる。花の匂いがした。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_gentle_wind', name: '花の匂いの風', description: '瓶に詰めた井戸底の風。開けると花の香り', sellPrice: 7 }]
  },
  {
    id: 'p09_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が井戸に沈んでいる。覗き込んだ途端、熱風が顔を焼いた。井戸の底は灼熱だ。',
    damage: 4,
    quill: 1
  },
  {
    id: 'p09_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が井戸に沈んでいる。何百年も同じ方向に吹き続ける風。井戸の壁が片側だけ削れている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が井戸に沈んでいる。真空の刃が底で渦巻いている。手を入れたら切れた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が井戸に沈んでいる。方向の定まらない乱気流が底で暴れている。覗くと帽子が飛ばされた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が井戸に沈んでいる。蓋がないのに風が外に出てこない。底で圧縮されているらしい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が井戸に沈んでいる。覗き込むと吹雪が顔を打った。まつ毛が凍る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が井戸に沈んでいる。底から澄んだ空気が昇ってくる。深く吸い込むと、視界が遠くまで開けた。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p09_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が井戸に沈んでいる。一吹きで帰り道を忘れる風だ。蓋をして通り過ぎた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が井戸に沈んでいる。生温い風が底からゆるく吹く。意識がぼんやりする。井戸の縁で少し眠ってしまった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が井戸に沈んでいる。蝋燭ほどの火が底で揺れている。枯れた井戸の唯一の明かりだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が井戸に沈んでいる。暖炉の火のような温かさが底から漂ってくる。手を伸ばすと指先がほどけるように温まった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が井戸に沈んでいる。制御不能の大火が底で渦巻いている。井戸の石が赤く焼けている。近寄れない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p09_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が井戸に沈んでいる。水をかけても消えない。何百年もここで燃えているのだろう。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が井戸に沈んでいる。底から立ち上る炎が形を正確に切り取る。覗いた顔の輪郭が焦げた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が井戸に沈んでいる。色がおかしい。緑と紫に明滅している。触っても温かくない。不気味だが無害だ。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p09_broken_flame', name: '壊れた火種', description: '緑色に明滅する火。温度がない', sellPrice: 7 }]
  },
  {
    id: 'p09_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が井戸に沈んでいる。火柱が井戸の口まで届きそうだ。周囲の空気が渦を巻いている。逃げた。',
    damage: 4,
    quill: 1
  },
  {
    id: 'p09_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が井戸に沈んでいる。青白い火が霜を纏っている。燃えているのに冷たい。引き上げると掌が凍った。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p09_frozen_flame', name: '凍る火', description: '燃えているが冷たい炎。掌の上で揺れる', sellPrice: 12 }]
  },
  {
    id: 'p09_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が井戸に沈んでいる。ほぼ見えない。空気の揺らぎだけで底に何かがいるとわかる。手を入れると穢れが焼けた。',
    damage: -1,
    quill: 7
  },
  {
    id: 'p09_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が井戸に沈んでいる。燃やしたものの形を覚える炎だ。井戸の中に焼けた町の幻が揺れている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が井戸に沈んでいる。今にも消えそうな熾火が底で赤く明滅している。息を吹きかけたら少しだけ元気になった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が井戸に沈んでいる。掌に収まる氷の欠片。引き上げたらすぐに溶けた。手が冷たい。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が井戸に沈んでいる。冷たいが痛くない。額に当てると旅の疲れが引いた。',
    damage: -1,
    quill: 5
  },
  {
    id: 'p09_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が井戸に沈んでいる。炎を放つ氷。底から蒸気が噴き出している。触れたら凍傷と火傷を同時に負った。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p09_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が井戸に沈んでいる。万年氷。井戸の底を完全に塞いでいる。叩いても罅一つ入らない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が井戸に沈んでいる。氷柱が井戸の底から剣のように突き出している。手を伸ばすな。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が井戸に沈んでいる。ひび割れた氷の破片が底に散乱している。何の形だったかもうわからない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が井戸に沈んでいる。数百年溶けていない氷塊が底を埋め尽くしている。井戸ごと凍りそうだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が井戸に沈んでいる。触れた空気が結晶化して落ちる。絶対零度に近い。覗き込んだだけで鼻の先が白くなった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が井戸に沈んでいる。完全に透明で、あることに気づかず手を突いた。その向こうに何かが閉じ込められている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が井戸に沈んでいる。溶けない呪いの氷。周囲にも永遠の冬を広げ続けている。井戸の縁に霜が這い上がってきた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が井戸に沈んでいる。ゆっくり溶けている。しずくの音が子守唄のように響く。井戸の縁に座って、しばし聴いた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が井戸に沈んでいる。足元の小さな黒い染み。何の影かわからないが、底でうずくまっている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が井戸に沈んでいる。木陰のような心地よい影が底に溜まっている。覗き込むと涼しい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が井戸に沈んでいる。影自体が黒い炎で燃えている。手を入れたら灼けた。影に灼かれるとは。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が井戸に沈んでいる。底に貼りついて固まっている。剥がそうとしても動かない。何かを封じているのかもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が井戸に沈んでいる。輪郭がくっきりした影が底から伸びてくる。縁に触れたとき指先が切れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が井戸に沈んでいる。立体的にめくれ上がった影が底でのたうっている。平面に戻れないらしい。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_broken_shadow', name: '立体の影', description: '平面に戻れない影の欠片。手の中で蠢く', sellPrice: 8 }]
  },
  {
    id: 'p09_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が井戸に沈んでいる。井戸の底が真っ黒だ。覗き込むと、影のほうが覗き返してきた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が井戸に沈んでいる。地面に張りついて動けない。本体はとうに去ったのに、影だけが残っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が井戸に沈んでいる。半透明の影。薄すぎて見えるか見えないか。存在が消えかけている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が井戸に沈んでいる。触れたものが影になる。井戸の底に影が何重にも重なっている。覗くな。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が井戸に沈んでいる。正午の影のように縮んで動かない。井戸の底は常に正午なのだろうか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が井戸に沈んでいる。耳を澄ますと、底から鼻歌が聞こえる。誰が歌っているのかはわからない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が井戸に沈んでいる。子守唄が底から響いてくる。聴いていると古い傷がじんわり温まった。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p09_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が井戸に沈んでいる。戦の歌が底から湧き上がる。血が沸き、拳を握った。井戸に向かって叫んでいた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が井戸に沈んでいる。一度始まると止められない旋律。耳を塞いでも石壁を伝って響いてくる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が井戸に沈んでいる。金切り声が底から突き上げてくる。井戸の縁に罅が入った。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が井戸に沈んでいる。途中で止まる旋律が底で繰り返されている。続きを誰も知らない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が井戸に沈んでいる。大地を震わせる合唱が底から轟く。足元が揺れて立っていられない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が井戸に沈んでいる。旋律を聴くと体が動かなくなる。空気ごと凍る歌だ。耳を塞いで逃げた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が井戸に沈んでいる。純粋な旋律が底から立ち上る。雑念が消え、思考が澄んだ。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_p09_clear_song', name: '澄んだ旋律', description: '井戸の底から救い上げた歌の欠片。聴くと心が凪ぐ', sellPrice: 12 }]
  },
  {
    id: 'p09_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が井戸に沈んでいる。一度聴くと頭から離れない。もう遅い。底から旋律が這い上がってきた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が井戸に沈んでいる。子守唄が底で揺れている。抗えない眠気に包まれ、井戸の縁で眠りかけた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が井戸に沈んでいる。覗き込むと、ふと会話が途切れたときの静けさが底にある。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が井戸に沈んでいる。言葉がなくても安らげる静けさ。しばらく井戸の縁に腰を下ろした。',
    damage: -1,
    quill: 5
  },
  {
    id: 'p09_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が井戸に沈んでいる。怒りの静けさ。空気が焦げるような緊張が底から這い上がってくる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が井戸に沈んでいる。声を出しても吸い込まれて消える。音の墓場だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が井戸に沈んでいる。覗き込んだ途端、無言の視線に射抜かれた。言葉より痛い。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が井戸に沈んでいる。静寂のはずなのに、底からノイズが混じる。何かが漏れ出している。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が井戸に沈んでいる。圧倒的な無音が底を支配している。近づくだけで声が出なくなった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が井戸に沈んでいる。時間が止まったような冷たい静けさ。息も凍る。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が井戸に沈んでいる。泉のように澄んだ完全な静寂。底まで見通せる気がした。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_clear_silence', name: '静寂の欠片', description: '握ると周囲が一瞬だけ静まる石', sellPrice: 10 }]
  },
  {
    id: 'p09_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が井戸に沈んでいる。声を奪う沈黙だ。覗いた瞬間、声が出なくなった。しばらく歩いて戻った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が井戸に沈んでいる。午後の図書館のような静けさ。眠気が這い上がってきて、井戸に頭を突っ込みそうになった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が井戸に沈んでいる。大きすぎる兜で前が見えず、落ちたらしい。縄を垂らすと必死にしがみついてきた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_small_knight', name: '小さな兜', description: '子供騎士の兜。大きすぎて前が見えない', sellPrice: 8 }]
  },
  {
    id: 'p09_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が井戸に沈んでいる。引き上げると、跪いて礼を述べた。手を差し出して握手を求めてくる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が井戸に沈んでいる。鎧ごと炎に包まれている。それでも歩みを止めず、井戸の壁を登ろうとしている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が井戸に沈んでいる。分厚い鎧が重すぎて登れない。縄を下ろしたが、鎧ごと引き上げるのは骨が折れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が井戸に沈んでいる。目が冷たい。助けを求めず、壁に剣を突き立てて自力で登ってきた。借りは返すと言い残して去った。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p09_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が井戸に沈んでいる。鎧はへこみ、剣は折れている。それでもまだ立っている。引き上げると、何も言わず歩いていった。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p09_broken_knight', name: '折れた剣の柄', description: '壊れた騎士の剣。刃はないが握りは温かい', sellPrice: 8 }]
  },
  {
    id: 'p09_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が井戸に沈んでいる。巨体が井戸にはまって動けないでいる。地面が軋むほど引っ張って、ようやく抜けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が井戸に沈んでいる。剣を振り上げた姿勢のまま氷に閉じ込められている。引き上げようがない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が井戸に沈んでいる。影が薄く、底にいるのに気づかなかった。引き上げると礼も言わず消えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が井戸に沈んでいる。兜の奥で目が赤く光っている。引き上げたら斬りかかってきた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が井戸に沈んでいる。鎧のまま壁にもたれて寝ている。引き上げても起きない。槍を抱いたまま寝言を言っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が井戸に沈んでいる。大きな帽子だけが水面に浮いている。引き上げると、見習いの少女が鼻をすすった。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p09_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が井戸に沈んでいる。引き上げると、礼にと薬草を一束くれた。怖い顔だが心は温かい。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_gentle_witch', name: '魔女の薬草', description: '苦いが傷に効く。魔女の感謝の印', sellPrice: 8 }]
  },
  {
    id: 'p09_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が井戸に沈んでいる。炎の魔法で全身を包んだ魔女。井戸の石壁が溶けかけている。手出しできない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が井戸に沈んでいる。石のように頑固な老魔女。助けを差し伸べたが断られた。取引以外では口を開かないらしい。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が井戸に沈んでいる。鉤鼻の魔女が底からこちらを睨んでいる。「お前の嘘が見える」と言われた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が井戸に沈んでいる。魔力が暴走して呪文が途切れ途切れだ。引き上げたが、正気が戻らない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が井戸に沈んでいる。杖を振るう代わりに拳で井戸の壁を殴って登ってきた。助けは不要だった。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p09_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が井戸に沈んでいる。氷の魔法を使う魔女。井戸の壁に霜が広がっている。引き上げたら手が凍った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が井戸に沈んでいる。老いて存在が希薄になった魔女。向こうが透けて見える。引き上げようとしたが手が通り抜けた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が井戸に沈んでいる。自分の呪いに蝕まれた魔女。体の一部が変異している。触れるなと叫んでいる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が井戸に沈んでいる。大釜を抱えたまま寝ている。薬がぐつぐつ煮えて、いい匂いが立ち上っている。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_sleepy_witch', name: '魔女の煮汁', description: '何の薬かわからない。いい匂いはする', sellPrice: 7 }]
  },
  {
    id: 'p09_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が井戸に沈んでいる。子供が王冠をかぶって底で泣いている。引き上げると、鼻を拭いて威厳を取り繕った。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p09_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が井戸に沈んでいる。民と共に畑を耕す王が、どうして井戸の底に。引き上げると、礼に手荒れた手で握手してくれた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が井戸に沈んでいる。炎の冠を戴いた王。怒りで井戸の底が灼けている。近づく者は許さぬという目だ。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が井戸に沈んでいる。石の玉座に座ったまま微動だにしない。落ちたのか、自分で降りたのかも不明だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が井戸に沈んでいる。鷹のような目で底からこちらを見据えている。助けではなく、試している目だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が井戸に沈んでいる。王冠が歪み、目は虚ろだ。引き上げても何も言わない。玉座を探すように彷徨いていった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_broken_king', name: '歪んだ王冠', description: '壊れた王が置いていった王冠。歪んでいる', sellPrice: 12 }]
  },
  {
    id: 'p09_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が井戸に沈んでいる。戦士王が底に蹲っている。縄を下ろすと、片手で登ってきた。背中に傷がない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が井戸に沈んでいる。氷の玉座ごと底に沈んでいる。吐く言葉が白い。引き上げようにも凍りついて動かない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が井戸に沈んでいる。存在が希薄な王。底にいるのに気づくまで時間がかかった。引き上げても誰にも見えないだろう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が井戸に沈んでいる。触れたものが金になる王。縄を下ろしたら金の縄になって戻ってきた。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p09_cursed_king', name: '金の縄', description: '王に触れて金になった縄。重い', sellPrice: 20 }]
  },
  {
    id: 'p09_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が井戸に沈んでいる。玉座で居眠りしたまま落ちたらしい。引き上げてもまだ寝ている。側近はどこへ行った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が井戸に沈んでいる。子供の霊が底で笑っている。引き上げようとしたが、手が通り抜けた。笑い声だけが残った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が井戸に沈んでいる。穏やかな霊が微笑んで手を振っている。何かを伝えたいのだろうが、声が届かない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が井戸に沈んでいる。炎をまとった霊が底で彷徨っている。火に焼かれた死に方の記憶。近づくと灼ける。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が井戸に沈んでいる。同じ場所から決して動かない霊。何百年もこの井戸の底に立っているらしい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が井戸に沈んでいる。こちらの罪を見透かす目で睨んでいる。視線が胸に刺さる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が井戸に沈んでいる。自分が何者か思い出せない霊。底でぼんやり浮いている。話しかけても反応がない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が井戸に沈んでいる。鎧武者の霊。死んで枷が外れたのか、生前より強い。井戸の底から這い出そうとしている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が井戸に沈んでいる。冷気を纏った霊。通った跡に霜が残っている。覗き込んだだけで寒気が走った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が井戸に沈んでいる。成仏しかけている霊。生前の顔が思い出せない表情で、こちらを見ている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_clear_ghost', name: '亡霊の涙', description: '成仏しかけた霊が残した一滴。微かに光る', sellPrice: 10 }]
  },
  {
    id: 'p09_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が井戸に沈んでいる。呪いに縛られて成仏できない霊。苦しみの表情が闇の中で浮かんでいる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が井戸に沈んでいる。うつらうつらしている霊。存在感が薄れたり戻ったりしている。放っておくのが一番だ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が井戸に沈んでいる。手鏡が底で光っている。引き上げて覗くと、自分の目だけが映った。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p09_small_mirror', name: '井戸底の手鏡', description: '目だけを映す手鏡。なぜ井戸に', sellPrice: 6 }]
  },
  {
    id: 'p09_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が井戸に沈んでいる。引き上げて覗くと、少しだけ美しく映っている。悪くない気分だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が井戸に沈んでいる。鏡面に炎が映っている。だが周囲に火はない。鏡の中が燃えている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が井戸に沈んでいる。何をしても割れない鏡。底の岩に叩きつけても傷一つつかない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が井戸に沈んでいる。割れた破片の縁が刃物のよう。引き上げようとして手のひらを深く切った。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が井戸に沈んでいる。ひび割れた鏡面に顔が何人にも分裂して映る。自分がどれかわからなくなった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が井戸に沈んでいる。人の背丈を超える巨大な姿見。どうやって井戸に入ったのか。引き上げようがない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が井戸に沈んでいる。霜に覆われた鏡面をこするとかろうじて影が映る。覗くと冬の世界が見えた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が井戸に沈んでいる。鏡なのに向こうが透けている。窓のようだが通り抜けられない。底の暗闇が透けて見えるだけだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が井戸に沈んでいる。覗いた者の姿が鏡に残る。底の鏡面に、過去に覗いた者たちの影が蠢いている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が井戸に沈んでいる。鏡面がぼんやり曇って、映像がゆっくり遅れて映る。覗いたら自分の寝顔が見えた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が井戸に沈んでいる。指人形ほどの大きさ。誰かが落としたのだろう。引き上げてポケットに入れた。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p09_small_doll', name: '井戸の指人形', description: '誰かが落とした小さな人形。少し湿っている', sellPrice: 5 }]
  },
  {
    id: 'p09_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が井戸に沈んでいる。子供に抱きしめられてくたくたの人形。笑顔が縫ってある。引き上げて乾かした。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が井戸に沈んでいる。藁人形が炎を上げている。呪詛の匂いがする。触れない方がいい。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が井戸に沈んでいる。木彫りの人形。関節がなく表情もない。底の泥から引き抜くのに力が要った。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が井戸に沈んでいる。関節が刃になっている操り人形。糸が見えない。引き上げたら指を切った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が井戸に沈んでいる。首がもげかけている。残った目でこちらを見上げている。引き上げると安心したように目を閉じた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_broken_doll', name: '人形の目', description: '壊れた人形の硝子の目。まだ動く', sellPrice: 6 }]
  },
  {
    id: 'p09_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が井戸に沈んでいる。等身大の木彫り人形。腕が丸太のように太い。縄で引き上げたら縄が切れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が井戸に沈んでいる。氷でできた繊細な造形。溶けたら二度と作れない。そっと日陰に置いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が井戸に沈んでいる。硝子の人形。中に何かの液体が入っている。振ると音がする。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_clear_doll', name: '硝子の人形', description: '中に液体が入った透明な人形。振ると鳴る', sellPrice: 10 }]
  },
  {
    id: 'p09_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が井戸に沈んでいる。夜になると位置が変わる人形だ。井戸に沈めても、朝には枕元にいるだろう。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が井戸に沈んでいる。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。井戸の底で、ずっと目を閉じている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が井戸に沈んでいる。霧雨が井戸の底だけに降っている。空は晴れているのに。不思議な光景だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が井戸に沈んでいる。底から温かい雨が降り上がってくる。慈雨だ。顔を近づけると旅の埃が洗い流された。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p09_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が井戸に沈んでいる。灼熱の滴が底で弾けている。井戸の口から蒸気が噴き出す。覗くな。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が井戸に沈んでいる。雹が井戸の底を叩いている。手を入れたら石のような氷粒に打たれた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が井戸に沈んでいる。針のような雨粒が底で跳ねている。手を差し入れたら細かい傷だらけになった。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が井戸に沈んでいる。途切れ途切れに降っている。リズムがおかしい。上に向かって降る滴もある。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が井戸に沈んでいる。豪雨が井戸の底で渦巻いている。水位が上がっている。溢れる前に離れた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が井戸に沈んでいる。凍雨が底を氷の鏡に変えている。覗き込んだら自分の顔が映った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が井戸に沈んでいる。異常なほど澄んだ雨。底に溜まった水が光って見える。手ですくうと穢れが落ちた。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_p09_clear_rain', name: '澄んだ雫', description: '透き通った雨の一滴。瓶に入れると光る', sellPrice: 10 }]
  },
  {
    id: 'p09_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が井戸に沈んでいる。浴びるとその場から動けなくなる雨。井戸の底に根が生えたように立つ者の影が見える。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が井戸に沈んでいる。しとしとと降る雨音が底から響く。子守唄のように穏やかで、井戸の縁でうとうとした。',
    damage: 0,
    quill: 4
  },
];
