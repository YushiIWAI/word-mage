// Auto-generated from node-a-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeAOutcomes: Outcome[] = [
  {
    id: 'a_orig_orig',
    conditions: { s1: 'orig_a_mod', s2: 'orig_a_subj' },
    resultText: '忘れられた柱が橋を塞いでいる。誰が建てたかも覚えていない。押しても引いても動かない。',
    damage: 2,
    quill: 2
  },
  {
    id: 'a_small_orig',
    conditions: { s1: 'mod_small', s2: 'orig_a_subj' },
    resultText: '小さな柱が橋を塞いでいる。膝ほどの高さしかない。跨いで先へ進む。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_orig',
    conditions: { s1: 'mod_gentle', s2: 'orig_a_subj' },
    resultText: '優しい柱が橋を塞いでいる。触れると温かい。旅人が寄りかかって休むための柱らしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_fire_orig',
    conditions: { s1: 'mod_fire', s2: 'orig_a_subj' },
    resultText: '燃え盛る柱が橋を塞いでいる。炎が橋板に燃え移りかけている。急いで迂回する。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_hard_orig',
    conditions: { s1: 'mod_hard', s2: 'orig_a_subj' },
    resultText: '堅い柱が橋を塞いでいる。鉄のように硬い石柱。びくともしない。仕方なく川を渡る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_sharp_orig',
    conditions: { s1: 'mod_sharp', s2: 'orig_a_subj' },
    resultText: '鋭い柱が橋を塞いでいる。先端が尖った杭のようだ。避けて通ろうとして手を切った。',
    damage: 3,
    quill: 2
  },
  {
    id: 'a_broken_orig',
    conditions: { s1: 'mod_broken', s2: 'orig_a_subj' },
    resultText: '壊れた柱が橋を塞いでいる。ひびだらけだ。蹴ると砂利のように崩れた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_orig',
    conditions: { s1: 'mod_mighty', s2: 'orig_a_subj' },
    resultText: '屈強な柱が橋を塞いでいる。城門のように太い。これは柱ではなく、橋の番人なのかもしれない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_frozen_orig',
    conditions: { s1: 'mod_frozen', s2: 'orig_a_subj' },
    resultText: '凍てついた柱が橋を塞いでいる。霜に覆われ、触れた手が張りつく。湯をかけて溶かす。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_clear_orig',
    conditions: { s1: 'mod_clear', s2: 'orig_a_subj' },
    resultText: '透き通った柱が橋を塞いでいる。水晶のようだ。向こうが見えるのに通れない。回り込んで進む。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_cursed_orig',
    conditions: { s1: 'mod_cursed', s2: 'orig_a_subj' },
    resultText: '呪われた柱が橋を塞いでいる。触れた者の足が重くなる。這うようにして橋を渡り切った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sleepy_orig',
    conditions: { s1: 'mod_sleepy', s2: 'orig_a_subj' },
    resultText: '眠い柱が橋を塞いでいる。……柱が眠い？傾いて、ゆっくり倒れた。道が開く。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_sleepy_orig', name: '倒れた柱の欠片', description: '自分から倒れた柱の破片。まだ温かい', sellPrice: 8 }]
  },
  {
    id: 'a_orig_kitten',
    conditions: { s1: 'orig_a_mod', s2: 'subj_kitten' },
    resultText: '忘れられた子猫が橋を塞いでいる。誰にも拾われず、ここで暮らしているらしい。撫でると道を空けた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '親指ほどの子猫が橋を塞いでいる。鈴のような鳴き声。摘まんでポケットに入れた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_small_kitten', name: '親指の子猫', description: '鈴のように鳴く。ポケットの中で丸くなっている', sellPrice: 10 }]
  },
  {
    id: 'a_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が橋を塞いでいる。擦り寄って足に絡まる。手を舐めてから、ようやく道を譲った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が橋を塞いでいる。炎をまとっているが、本猫は気にしていない。橋板が焦げ始めている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が橋を塞いでいる。陶器の招き猫だ。目だけがこちらを追う。重くて動かせない。跨いだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が橋を塞いでいる。爪と歯が硝子の破片のよう。近づくと威嚇された。手に切り傷をもらう。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が橋を塞いでいる。ぬいぐるみだ。綿が出ている。拾い上げて先へ進む。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_a_broken_kitten', name: '綿の子猫', description: 'ぬいぐるみ。縫い目がほつれている', sellPrice: 5 }]
  },
  {
    id: 'a_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が橋を塞いでいる。子猫サイズなのに虎の体格。唸り声が橋を震わせる。にらみ合いの末、通してもらった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が橋を塞いでいる。氷の彫刻だ。中でまだ息をしている。触れると指先が痺れた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が橋を塞いでいる。硝子でできている。心臓の鼓動が透けて見える。そっと持ち上げてどけた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_clear_kitten', name: '硝子の猫毛', description: '透明な一本の毛。光に翳すと虹が見える', sellPrice: 10 }]
  },
  {
    id: 'a_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が橋を塞いでいる。どかしても、振り返るとそこにいる。三度目で諦めて一緒に渡った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が橋を塞いでいる。丸くなって寝ている。あくびが伝染して、こちらも眠くなる。起こさず跨いだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_snake',
    conditions: { s1: 'orig_a_mod', s2: 'subj_snake' },
    resultText: '忘れられた蛇が橋を塞いでいる。ずっとここにいるのに誰も気づかなかった蛇だ。音を立てずに迂回する。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '指に巻きつくほど細い蛇が橋を塞いでいる。舌をちろちろ出している。跨ぐだけで済む。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が橋を塞いでいる。近づくと体をずらして隙間を作ってくれる。温かい鱗だった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_snake', name: '蛇の抜け殻', description: '温もりが残る薄い殻。お守りになる', sellPrice: 8 }]
  },
  {
    id: 'a_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が橋を塞いでいる。這った跡が焦げて黒い線を描く。橋が危ない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が橋を塞いでいる。鉄の鱗が橋板に食い込んでいる。鎖のように動かない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が橋を塞いでいる。牙に猛毒。見つめられただけで足が竦む。大きく迂回した。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が橋を塞いでいる。脱皮の途中で力尽きたらしい。古い皮が半分残っている。哀れだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が橋を塞いでいる。胴回りが人の腰ほどある大蛇。とぐろが橋全体を覆っている。通す気がない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が橋を塞いでいる。氷の中で螺旋を描いて固まっている。美しいが冷たい。滑らないよう慎重に跨ぐ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が橋を塞いでいる。飲み込んだ小石が体内に見える。美しい骨格。気づかず踏みそうになった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が橋を塞いでいる。脱皮するたび大きくなる蛇。すでに二度脱いだ跡がある。急がねば。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が橋を塞いでいる。とぐろを巻いて寝ている。踏まなければ無害だ。爪先立ちで通過する。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_dragon',
    conditions: { s1: 'orig_a_mod', s2: 'subj_dragon' },
    resultText: '忘れられた竜が橋を塞いでいる。人に忘れられ、自分も忘れかけている。寂しげな目で通すかどうか迷っている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '手のひらサイズの竜が橋を塞いでいる。翼を広げて威嚇するが、雀ほどだ。摘まんでどけると小さな火を噴いた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_small_dragon', name: '極小の竜鱗', description: '爪の先ほどの鱗。それでも確かに竜の鱗だ', sellPrice: 12 }]
  },
  {
    id: 'a_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が橋を塞いでいる。穏やかな老竜だ。翼を畳んで道を空け、尾で背中を押してくれた。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_dragon', name: '竜のひと撫で', description: '温かい尾の感触が背中に残る。傷が少し癒えた', sellPrice: 15 }]
  },
  {
    id: 'a_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が橋を塞いでいる。全身が業火。近づくだけで髪が焦げる。これ以上ない障害物だ。',
    damage: 5,
    quill: 1
  },
  {
    id: 'a_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が橋を塞いでいる。鱗が城壁のように厚い。押しても殴っても微動だにしない。遥か下流まで歩いた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が橋を塞いでいる。金色の目がこちらを見据える。爪の一振りで橋の欄干が裂けた。通せんぼらしい。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が橋を塞いでいる。翼は折れ、鱗は剥がれている。火も吐けない。傷薬を塗ってやると、よろめきながら道を開けた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_broken_dragon', name: '折れた竜牙', description: '欠けているが、握ると熱い。竜の火の名残', sellPrice: 15 }]
  },
  {
    id: 'a_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が橋を塞いでいる。山のような巨体。翼の影が橋を覆う。引き返す以外の選択肢がない。',
    damage: 5,
    quill: 2
  },
  {
    id: 'a_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が橋を塞いでいる。白い竜の吐息が吹雪になる。橋が凍りつき、足を取られた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が橋を塞いでいる。水晶でできた竜だ。体を通して向こう岸が歪んで見える。すり抜けられそうだが、できない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が橋を塞いでいる。かつて守護竜だったが、目に理性がない。暴れる気配に身を伏せてやり過ごす。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が橋を塞いでいる。いびきが地鳴りのようだ。腹の下にかろうじて隙間がある。息を殺して潜り抜けた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_a_sleepy_dragon', name: '竜の寝息', description: '瓶に詰めた温かい息。蓋を開けると地面が揺れる', sellPrice: 12 }]
  },
  {
    id: 'a_orig_butterfly',
    conditions: { s1: 'orig_a_mod', s2: 'subj_butterfly' },
    resultText: '忘れられた蝶が橋を塞いでいる。誰にも見向きもされなかった蝶が、橋の真ん中で羽を広げている。息を吹きかけると飛んだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が橋を塞いでいる。花びらと見間違うほど小さい。塞ぐというより、そこにいるだけだ。避けて通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が橋を塞いでいる。指先に止まって離れない。羽の模様が笑っているように見える。一緒に渡った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_butterfly', name: '蝶の鱗粉', description: '指先に残った金色の粉。温かい', sellPrice: 8 }]
  },
  {
    id: 'a_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が橋を塞いでいる。羽が炎でできている。飛んだ跡に火の粉が散り、橋板に焦げ跡が増えていく。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が橋を塞いでいる。金属の羽を広げている。飛ぶとき金属音がする。風に乗って去るのを待つ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が橋を塞いでいる。羽の縁が刃だ。すれ違いざまに頬が切れた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が橋を塞いでいる。片羽がちぎれて螺旋を描きながら落ちていく。橋を塞ぐ力もない。そっと拾い上げた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が橋を塞いでいる。羽ばたきが風を起こす。蝶のくせに前に進めない。風がやむまで待った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が橋を塞いでいる。霜の結晶が羽の形をしている。美しいが触れると崩れそうだ。息を止めて横を通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が橋を塞いでいる。羽が透明で、止まると景色に溶けて見えなくなる。いるのかいないのかわからない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_clear_butterfly', name: '透明の羽片', description: '手に取ると空気の重さだけが残る', sellPrice: 10 }]
  },
  {
    id: 'a_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が橋を塞いでいる。追いかけると迷子になる蝶だ。目を逸らして、蝶を見ないまま橋を渡った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が橋を塞いでいる。花の上で羽を閉じたまま動かない。起こしても隣の花に移るだけだ。放っておいて渡った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_orig_wind',
    conditions: { s1: 'orig_a_mod', s2: 'subj_wind' },
    resultText: '忘れられた風が橋を塞いでいる。いつからか吹いている風だ。誰も気にしないが、確かに橋を通さない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が橋を塞いでいる。頬を撫でるそよ風。塞がれているというより、くすぐられているだけだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が橋を塞いでいる。温かい追い風だ。塞いでいるのではなく、背中を押して渡らせてくれている。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_wind', name: '追い風の記憶', description: '手を広げると微かに温かい風が吹く', sellPrice: 10 }]
  },
  {
    id: 'a_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が橋を塞いでいる。熱風だ。近づくだけで肌が乾く。橋板が炭化し始めている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が橋を塞いでいる。同じ方向だけに吹く頑固な風。何百年も変わらないらしい。壁のようで押し通れない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が橋を塞いでいる。真空の刃。欄干の石が薄く切れていた。匍匐して風の下を通った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が橋を塞いでいる。方向が定まらない乱気流だ。渦を巻いては散り、また渦を巻く。タイミングを見て走り抜けた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が橋を塞いでいる。一歩も前に進めない。抗うことも引き返すことも許さない暴風。しゃがんで耐えるしかない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が橋を塞いでいる。吹雪を伴う凍風。まつ毛が凍り、視界が白くなる。橋の手すりを頼りに進んだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が橋を塞いでいる。澄み渡る風が吹き抜け、視界が果てまで開ける。塞いでいるのではなく、道を清めている。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_clear_wind', name: '澄んだ風の瓶', description: '蓋を開けると一瞬だけ世界が透き通る', sellPrice: 12 }]
  },
  {
    id: 'a_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が橋を塞いでいる。吹かれた者が帰り道を忘れるという。目を閉じて、来た道を唱えながら渡った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が橋を塞いでいる。生温い春風。意識がぼんやりする。橋の真ん中で座り込みそうになった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_orig_flame',
    conditions: { s1: 'orig_a_mod', s2: 'subj_flame' },
    resultText: '忘れられた炎が橋を塞いでいる。いつから燃えているかもわからない。薪もないのに消えない炎だ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が橋を塞いでいる。蝋燭の火ほどだ。指で摘んで消した。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が橋を塞いでいる。暖炉のような温もり。冷えた手を翳してから、炎の脇を通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が橋を塞いでいる。制御不能の大火だ。橋どころか岸も燃えている。遥か遠回りを強いられた。',
    damage: 5,
    quill: 1
  },
  {
    id: 'a_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が橋を塞いでいる。水をかけても揺らがない。風を当てても消えない。諦めて下流の浅瀬を探した。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が橋を塞いでいる。触れたものの形を正確に切り取る炎だ。手を近づけると手袋だけ焼けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が橋を塞いでいる。色がおかしい。緑や紫に明滅し、温かくない。不気味だが害はなさそうだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が橋を塞いでいる。火柱が天を衝き、空気が渦を巻いている。橋に近づくことすらできない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'a_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が橋を塞いでいる。青白い炎が霜を纏っている。燃えているのに冷たい。触れると凍傷した。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_a_frozen_flame', name: '凍える火種', description: '手の中で燃えるが冷たい。矛盾した温度', sellPrice: 12 }]
  },
  {
    id: 'a_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が橋を塞いでいる。ほぼ見えない。空気の揺らぎだけで存在がわかる。うっかり触れて手を焼いた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が橋を塞いでいる。燃やしたものの形を覚える炎だ。橋の欄干の幻が炎の中に揺れている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が橋を塞いでいる。今にも消えそうな熾火だ。赤く明滅して、ときどき思い出したように揺れる。吹けば消えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_ice',
    conditions: { s1: 'orig_a_mod', s2: 'subj_ice' },
    resultText: '忘れられた氷が橋を塞いでいる。真夏でも溶けないまま放置された氷塊。存在自体が忘れられている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が橋を塞いでいる。掌に収まるほどの欠片だ。蹴飛ばすと川に落ちた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が橋を塞いでいる。冷たいが痛くない。額に当てると火照りが引く。少し休んでから先へ進んだ。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_ice', name: '癒しの氷片', description: '溶けないのに冷たすぎない。額に心地よい', sellPrice: 10 }]
  },
  {
    id: 'a_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が橋を塞いでいる。炎を放つ氷。触れると凍傷と火傷を同時に負う。どうしようもない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'a_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が橋を塞いでいる。万年氷だ。鉄の刃も欠ける硬さ。砕くのは諦めて、上を這って越えた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が橋を塞いでいる。氷柱が剣のように突き出ている。隙間を縫って通ったが、外套が裂けた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が橋を塞いでいる。ひび割れだらけで、踏めば崩れる。慎重に足を置いて渡った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が橋を塞いでいる。数百年溶けていない山のような氷塊。橋ごと飲み込まれかけている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が橋を塞いでいる。氷のさらに冷たい状態。近づくだけで息が結晶化する。橋に手をかけたら皮が持っていかれた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が橋を塞いでいる。完全に透明で、あることに気づかず手を突いた。冷たいが美しい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が橋を塞いでいる。溶けない呪いの氷だ。周囲にも冬を広げ続けている。橋板の隙間から霜が這い上がってくる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が橋を塞いでいる。ゆっくり溶けている。しずくの音が子守唄のようだ。待っていれば退く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_shadow',
    conditions: { s1: 'orig_a_mod', s2: 'subj_shadow' },
    resultText: '忘れられた影が橋を塞いでいる。本体はとうに去ったのに、影だけが残って道を阻む。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が橋を塞いでいる。足元の黒い染み。何の影かわからない。踏んで通った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が橋を塞いでいる。木陰のような心地よい影だ。日差しの強い日で、涼しさがありがたい。影の中を歩いて渡った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_shadow', name: '木陰の残り香', description: '手のひらに涼しい影が落ちる。小さな日傘のよう', sellPrice: 8 }]
  },
  {
    id: 'a_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が橋を塞いでいる。黒い炎で燃えている。触れると灼けるが、影に実体はないはずだ。痛みは本物だった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が橋を塞いでいる。地面に貼りついた影が固まっている。壁のように立ちはだかり、通れない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が橋を塞いでいる。輪郭がくっきりした影。縁に触れると指が切れた。影に切られるとは。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が橋を塞いでいる。立体的にめくれ上がった影。平面に戻れないらしい。隙間からくぐった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が橋を塞いでいる。本体より遥かに大きく太い。影のほうが本物に見える。威圧されて足が竦む。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が橋を塞いでいる。地面に張りついて動けない。本体は去ったのに、影だけが凍って残っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が橋を塞いでいる。半透明で地面の石畳が透けている。影とも呼べぬ薄さだ。気にせず通った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が橋を塞いでいる。触れたものが影になるという。足元の自分の影が怯えて縮んでいる。走って抜けた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'a_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が橋を塞いでいる。正午の影。真下に縮んで動かない。日が傾けば退くだろう。少し待った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_orig_song',
    conditions: { s1: 'orig_a_mod', s2: 'subj_song' },
    resultText: '忘れられた歌が橋を塞いでいる。旋律がわからない。誰も覚えていない歌が、橋の上で途切れ途切れに響く。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が橋を塞いでいる。鼻歌だ。誰が歌っているかわからない。耳を澄ましながら橋を渡った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が橋を塞いでいる。子守唄だ。聴いていると傷が癒える気がする。歌に導かれて橋を渡った。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_song', name: '子守唄の余韻', description: '耳に残る旋律。傷口がじんわり温かくなる', sellPrice: 12 }]
  },
  {
    id: 'a_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が橋を塞いでいる。戦の歌だ。血が沸き、恐れが消える。だが橋板が振動で軋んでいる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が橋を塞いでいる。一度始まると止められない旋律。他のすべての音を上書きする。耳を塞いでも響く。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が橋を塞いでいる。金切り声のような高音。欄干の硝子細工が砕けた。耳を押さえて走った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が橋を塞いでいる。途中で途切れる旋律。続きを誰も知らない。不安になるが、害はない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が橋を塞いでいる。大地を震わせる合唱だ。足元が揺れ、橋板が浮き上がる。渡れたが膝がまだ笑っている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が橋を塞いでいる。聴いた者の動きが止まる歌。空気ごと凍りつく。歌が途切れた隙に駆け抜けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が橋を塞いでいる。純粋な旋律。雑念が消え、思考が澄む。橋を渡り終えても、しばらく立ち尽くした。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_clear_song', name: '澄んだ旋律の欠片', description: '耳に当てると一音だけ聴こえる。心が静まる', sellPrice: 12 }]
  },
  {
    id: 'a_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が橋を塞いでいる。一度聴くと頭から離れない。橋を渡り終えても旋律が追いかけてくる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が橋を塞いでいる。抗えない眠気。橋の途中で座り込み、気づいたら朝だった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_orig_silence',
    conditions: { s1: 'orig_a_mod', s2: 'subj_silence' },
    resultText: '忘れられた沈黙が橋を塞いでいる。誰もこの静けさに気づかない。だが橋に踏み出すと足音が消える。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が橋を塞いでいる。ふと会話が途切れたときの静けさだ。一瞬の違和感だけで通れた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が橋を塞いでいる。言葉がなくても安らぐ静けさだ。急ぐ必要がないと思えた。穏やかに渡った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_silence', name: '静寂の水滴', description: '瓶に詰めた無音。振ると心が凪ぐ', sellPrice: 10 }]
  },
  {
    id: 'a_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が橋を塞いでいる。怒りで誰も口を開けない種類の静けさ。空気が焦げている。足早に通り抜けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が橋を塞いでいる。何を叫んでも吸い込まれて消える。音の墓場だ。声を失ったまま渡った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が橋を塞いでいる。言葉より痛い無言。視線だけが刺さるような静けさだ。居心地が悪い。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が橋を塞いでいる。静寂のはずなのにノイズが混じる。何かが漏れ出している。不気味だが通れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が橋を塞いでいる。圧倒的な存在感で場を支配している。自分の心臓の音すら聴こえない。足が重い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が橋を塞いでいる。時間が止まったような冷たい静けさ。息も凍る。足跡だけが音を立てた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が橋を塞いでいる。泉のように澄んだ無音。雑念が消える。渡り終えた後、頭が軽い。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_clear_silence', name: '無音の結晶', description: '耳に当てると世界が静まる。透明な欠片', sellPrice: 15 }]
  },
  {
    id: 'a_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が橋を塞いでいる。口は動くが音が出ない。声を奪われた。橋を渡り終えてしばらくして、ようやく声が戻った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が橋を塞いでいる。午後の図書館のような静けさ。意識が遠のく。欄干にもたれて少し眠った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_orig_knight',
    conditions: { s1: 'orig_a_mod', s2: 'subj_knight' },
    resultText: '忘れられた騎士が橋を塞いでいる。誰の命令で立っているかも忘れた騎士だ。それでも退かない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が橋を塞いでいる。子供の騎士。大きすぎる兜で前が見えていない。話しかけると跳び上がった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_small_knight', name: '子供騎士の兜飾り', description: '兜から落ちた羽根飾り。大きすぎる', sellPrice: 8 }]
  },
  {
    id: 'a_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が橋を塞いでいる。剣を収め、跪いて手を差し出す。「この先は危ない」と言って道を案内してくれた。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_knight', name: '騎士の道標', description: '鉄の札。裏に「安全な道」と書かれている', sellPrice: 12 }]
  },
  {
    id: 'a_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が橋を塞いでいる。鎧ごと炎に包まれているのに歩みを止めない。通り過ぎるのを待つしかない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が橋を塞いでいる。分厚い鎧の衛兵だ。微動だにしない。交渉の余地もない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が橋を塞いでいる。構えに無駄がない。冷たい目で値踏みされる。こちらに敵意がないと見て、無言で道を空けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が橋を塞いでいる。鎧はへこみ、剣は折れている。それでも立っている。声をかけると膝から崩れた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_broken_knight', name: '折れた剣の柄', description: '握り跡が深い。長い間戦っていたのだろう', sellPrice: 10 }]
  },
  {
    id: 'a_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が橋を塞いでいる。巨体の重装騎士。地面が軋む。力ずくで通ろうとしたが弾かれた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が橋を塞いでいる。氷に閉じ込められた騎士。剣を振り上げた姿勢のまま凍っている。横をすり抜けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が橋を塞いでいる。影の薄い騎士だ。いるのに気づかなかった。すり抜けようとしたが、確かにそこにいた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が橋を塞いでいる。黒い鎧の奥、目が赤く光る。呪いに縛られて此処から動けないのだ。憐れみと恐怖の間で立ち尽くす。',
    damage: 3,
    quill: 5
  },
  {
    id: 'a_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が橋を塞いでいる。見張り番なのに舟を漕いでいる。槍が傾き、道を斜めに塞ぐ。そっと槍をどけた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_sleepy_knight', name: '騎士の寝言', description: '「……姫……」と呟く声が耳に残る', sellPrice: 5 }]
  },
  {
    id: 'a_orig_witch',
    conditions: { s1: 'orig_a_mod', s2: 'subj_witch' },
    resultText: '忘れられた魔女が橋を塞いでいる。かつては名のある魔女だったらしい。今は誰も覚えていない。ぶつぶつと何か唱えている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が橋を塞いでいる。少女の見習い魔女だ。大きな帽子で前が見えていない。「通してくれ」と言うと、恥ずかしそうに退いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が橋を塞いでいる。怖い顔だが、薬草を煎じて差し出してくれた。苦いが傷に効く。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_witch', name: '魔女の薬湯', description: '苦い。しかし傷口が塞がる', sellPrice: 12 }]
  },
  {
    id: 'a_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が橋を塞いでいる。炎の魔法で全身を包んでいる。怒りの形相。近づけない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が橋を塞いでいる。石のように頑固な老魔女だ。取引を持ちかけない限り一言も話さない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が橋を塞いでいる。鉤鼻に鋭い目。一目で見透かされた気がする。嘘は通じそうにない。正直に頼んだら通してくれた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が橋を塞いでいる。同じ呪文を途切れ途切れに繰り返している。魔力が暴走して、橋板がときどき震える。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が橋を塞いでいる。杖を振るう代わりに拳で殴るタイプの魔女だ。腕が太い。敬意を示したら笑って通された。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_a_mighty_witch', name: '魔女の拳骨飴', description: '拳の形をした飴。噛むと歯が痛い', sellPrice: 8 }]
  },
  {
    id: 'a_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が橋を塞いでいる。氷の魔法を使う魔女だ。周囲に霜が広がり、橋板が滑る。転びながら通過した。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が橋を塞いでいる。老いて存在が希薄になった魔女。向こうが透けて見える。通り抜けたと思ったら、袖を掴まれた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_a_clear_witch', name: '薄れゆく指輪', description: '嵌めると指が少し透ける。魔女の形見', sellPrice: 12 }]
  },
  {
    id: 'a_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が橋を塞いでいる。自分の呪いに蝕まれた魔女だ。体の一部が変異している。近づくと呪いが移りそうだ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が橋を塞いでいる。大釜の前でうとうとしている。薬がぐつぐつ煮えている。そっと通ったが、大釜の匂いで少し眠くなった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_orig_king',
    conditions: { s1: 'orig_a_mod', s2: 'subj_king' },
    resultText: '忘れられた王が橋を塞いでいる。臣下も民もいない。名すら忘れられた王が、橋の上に玉座を据えている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が橋を塞いでいる。子供が王冠をかぶっている。「通行税だ」と言い張る。飴を渡したら通してくれた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_small_king', name: '子供の通行証', description: '木の板に「つうこうOK」と書いてある', sellPrice: 5 }]
  },
  {
    id: 'a_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が橋を塞いでいる。質素な衣の王だ。橋の修繕をしていた。手伝ったら礼を言われた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_king', name: '王の感謝状', description: '質素な紙に丁寧な字。心がこもっている', sellPrice: 10 }]
  },
  {
    id: 'a_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が橋を塞いでいる。炎の冠を戴く王。怒りで玉座が燃えている。近づく者を許さない。',
    damage: 5,
    quill: 2
  },
  {
    id: 'a_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が橋を塞いでいる。石の玉座に座り微動だにしない。法を一言で下す。「通行を禁ず」。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が橋を塞いでいる。鷹のような目で見据えられる。何も見逃さない。言い訳は通じない。正直に目的を告げたら、頷いて道を空けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が橋を塞いでいる。王冠が歪み、目は虚ろ。玉座に崩れ落ちている。声をかけても反応がない。脇を通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が橋を塞いでいる。戦士王だ。背中に傷がない男。腕組みをしてこちらを見ている。力比べを挑まれた。負けた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が橋を塞いでいる。氷の玉座に座る北の王。吐く言葉が白い。「冬が終わるまで待て」。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が橋を塞いでいる。存在が希薄な王。臣下たちが透けた王を見ないふりをしていたのだろう。こちらも見ないふりをして通った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_clear_king', name: '幽かな王冠', description: '被ると姿が薄くなる。権威の残り滓', sellPrice: 15 }]
  },
  {
    id: 'a_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が橋を塞いでいる。触れたものが金になる王だ。橋の欄干が金色に光っている。手を触れさせずに通る必要がある。',
    damage: 3,
    quill: 5
  },
  {
    id: 'a_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が橋を塞いでいる。玉座で居眠りしている。いびきが豪快だ。起こさないよう忍び足で通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_ghost',
    conditions: { s1: 'orig_a_mod', s2: 'subj_ghost' },
    resultText: '忘れられた亡霊が橋を塞いでいる。名前も顔も忘れられた霊だ。ただ此処に立っている。忘れられることが一番の呪い。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が橋を塞いでいる。子供の霊だ。笑い声だけが聞こえる。怖くはない。手を振ったら消えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が橋を塞いでいる。微笑んでいる。橋の先に何があるか教えてくれた。感謝を告げると、安らかに消えた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_ghost', name: '亡霊の道しるべ', description: '月夜にだけ光る石。先の道を示す', sellPrice: 12 }]
  },
  {
    id: 'a_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が橋を塞いでいる。火に焼かれた死に方の霊だ。炎をまとって彷徨う。近づくと皮膚が焼けるような熱さ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が橋を塞いでいる。何百年もこの場所から動かない霊だ。すり抜けることもできない。どんな術も通じない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が橋を塞いでいる。こちらの罪を見透かす目だ。視線が痛い。目を逸らしたまま通り過ぎた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が橋を塞いでいる。生前の記憶を失った霊。自分が何者かもわからず、ただ此処にいる。横を通っても反応しない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が橋を塞いでいる。鎧武者の霊。生前より強い。死んで枷が外れたのだ。戦って勝てる相手ではない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'a_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が橋を塞いでいる。触れると凍傷する冷気を纏っている。通った跡に霜が残る。震えながら駆け抜けた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が橋を塞いでいる。成仏しかけている霊だ。輪郭が薄い。あと一言伝えたかっただけらしい。聴いてやった。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_a_clear_ghost', name: '未練の言葉', description: '石に刻まれた一文。読むと少し泣きたくなる', sellPrice: 15 }]
  },
  {
    id: 'a_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が橋を塞いでいる。呪いに縛られて成仏できない霊だ。苦しみの表情が橋に焼きついている。見てしまった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が橋を塞いでいる。うつらうつらしている霊。存在感が薄れたり戻ったりする。消えている隙に通った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_orig_mirror',
    conditions: { s1: 'orig_a_mod', s2: 'subj_mirror' },
    resultText: '忘れられた鏡が橋を塞いでいる。曇った鏡面に自分の顔が映る。なぜ此処にあるのか、誰も覚えていない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'a_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が橋を塞いでいる。手鏡だ。覗くと自分の目だけが映る。拾って先へ進んだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が橋を塞いでいる。映った自分が少しだけ勇敢に見える。悪くない気分で橋を渡った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_mirror', name: '自信の欠片', description: '鏡の破片。覗くとほんの少し強く見える', sellPrice: 10 }]
  },
  {
    id: 'a_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が橋を塞いでいる。鏡面に炎が映っている。だが周囲に火はない。鏡の中が燃えているのだ。熱気だけは本物だった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'a_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が橋を塞いでいる。何をしても割れない。傷もつかない。盾のように道を阻む。映り込んだ自分が邪魔をしているようだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が橋を塞いでいる。割れた鏡の破片が散らばっている。縁が刃物のように鋭い。足を切りながら通った。',
    damage: 3,
    quill: 2
  },
  {
    id: 'a_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が橋を塞いでいる。ひび割れた鏡面に自分の顔が何人にも分裂して映る。不吉だが、割れた隙間から通れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が橋を塞いでいる。人の背丈を超える巨大な姿見だ。映った自分が実物より大きく見える。圧倒されて一歩退いた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が橋を塞いでいる。鏡面が凍って霜で覆われている。かろうじて影が映る。触れたら手が張りついた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が橋を塞いでいる。鏡なのに向こうが透けている。窓のようだ。通り抜けられそうだが、手が当たる。鏡であることに変わりはない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が橋を塞いでいる。覗いた者の姿が鏡に残るという。目を瞑って通った。それでも映った気がする。',
    damage: 3,
    quill: 5
  },
  {
    id: 'a_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が橋を塞いでいる。鏡面がぼんやり曇っている。覗くと自分の寝顔が映った。急に眠くなる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_orig_doll',
    conditions: { s1: 'orig_a_mod', s2: 'subj_doll' },
    resultText: '忘れられた人形が橋を塞いでいる。ずっと此処に捨てられていた人形だ。雨に打たれて色が褪せている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'a_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が橋を塞いでいる。指人形ほどの大きさ。誰かが落としたものだ。ポケットに入れた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が橋を塞いでいる。くたくたになるまで抱きしめられた人形だ。笑顔が縫ってある。思わず拾った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_gentle_doll', name: 'くたくたの人形', description: '抱きしめると少しだけ安心する', sellPrice: 8 }]
  },
  {
    id: 'a_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が橋を塞いでいる。藁人形が燃えている。祭りの焚き上げのようだ。だが橋まで燃え広がりそうだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が橋を塞いでいる。木彫りの人形。関節がなく、表情もない。押しても転がるだけで、また立ち上がる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が橋を塞いでいる。関節が刃になっている操り人形。糸が見えない。近づくと関節が動いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が橋を塞いでいる。首がもげかけている。残った片目でこちらを見ている。不気味だが害はない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が橋を塞いでいる。等身大の木彫り。腕が丸太のように太い。ゴーレムのように命令を待っている。押しても動かない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が橋を塞いでいる。氷でできた繊細な造形。溶けたら二度と作れない。壊さないよう慎重にどけた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'a_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が橋を塞いでいる。硝子の人形だ。中に何かの液体が揺れている。魂の容器かもしれない。触らず迂回した。',
    damage: 1,
    quill: 5
  },
  {
    id: 'a_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が橋を塞いでいる。通り過ぎた後、振り返ると位置が変わっている。誰も動かしていないのに。早足で去った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'a_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が橋を塞いでいる。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。持つと不思議と眠くなる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_orig_rain',
    conditions: { s1: 'orig_a_mod', s2: 'subj_rain' },
    resultText: '忘れられた雨が橋を塞いでいる。いつから降っているかもわからない雨だ。橋の上だけ水が溜まって渡れない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が橋を塞いでいる。霧雨だ。傘がなくても濡れないほどだが、橋板が滑る。ゆっくり渡った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'a_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が橋を塞いでいる。慈雨だ。温かい雨に打たれていると、旅の疲れが洗い流される気がする。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_a_gentle_rain', name: '慈雨の雫', description: '小瓶に詰めた温かい雨。傷を洗うと痛みが引く', sellPrice: 12 }]
  },
  {
    id: 'a_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が橋を塞いでいる。火の雨だ。空から灼熱の滴が降り注ぎ、橋板が焦げる。通れるわけがない。',
    damage: 5,
    quill: 2
  },
  {
    id: 'a_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が橋を塞いでいる。雹だ。石のような氷粒が叩きつける。盾があれば走れるが、生身では辛い。',
    damage: 3,
    quill: 3
  },
  {
    id: 'a_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が橋を塞いでいる。針のような雨粒が肌に刺さる。外套を被って走ったが、腕に細かい傷が残った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'a_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が橋を塞いでいる。途切れ途切れに降り、リズムがおかしい。赤い雫が混じっている。不気味だが走り抜けた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'a_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が橋を塞いでいる。豪雨だ。滝のような水量で地面が川になっている。橋が流されかけている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'a_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が橋を塞いでいる。凍雨だ。橋板が氷の膜に覆われ、鏡のように光る。一歩ごとに滑りながら渡った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'a_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が橋を塞いでいる。異常なほど澄んだ雨。濡れた跡が光って見える。穢れが洗い流されていく感覚。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_a_clear_rain', name: '浄化の雨粒', description: '透明すぎる一粒。汚れたものに落とすと綺麗になる', sellPrice: 10 }]
  },
  {
    id: 'a_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が橋を塞いでいる。浴びた者がその場から動けなくなる雨だ。足に根が生えたようだ。必死にもがいて通った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'a_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が橋を塞いでいる。静かな雨音が子守唄のようだ。橋の途中でまぶたが重くなる。欄干につかまって耐えた。',
    damage: 1,
    quill: 4
  },
];
