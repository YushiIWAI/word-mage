// Auto-generated from node-e01-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeE01Outcomes: Outcome[] = [
  {
    id: 'e01_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '親指ほどの子猫が玉座を守っている。鈴のような鳴き声が空虚な王の間に響く。玉座は無人だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '人懐っこい子猫が玉座の前に座っている。近づくと擦り寄ってきた。守る気はなさそうだ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '炎をまとった子猫が玉座を守っている。擦り寄られ、外套の裾が音もなく燃え上がる。腿まで赤い火脹れが走った。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '陶器の招き猫が玉座を守っている。目だけが動いてこちらを追う。退かそうと押したら手首に鈍い痛みが走った。硬い。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '硝子の爪を持つ子猫が玉座を守っている。引っかかれた。傷が意外に深い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: 'ぬいぐるみの子猫が玉座の上に座っている。綿が出ている。誰がここに置いたのか。王の忘れ物だろうか。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e01_broken_kitten', name: '王の忘れ猫', description: '綿の出たぬいぐるみ。王冠の刺繍がある', sellPrice: 10 }]
  },
  {
    id: 'e01_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '子猫サイズで虎の体格をした獣が玉座を守っている。低い唸りの後、鉄槌のような一撃が肋を打った。息が詰まる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '氷の子猫が玉座を守っている。中でまだ息をしている。触れると指先が凍り、王の間に冷気が満ちる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '硝子の子猫が玉座を守っている。心臓が透けて脈打っている。王の間にふさわしい、美しい番人だ。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e01_clear_kitten', name: '硝子猫の涙', description: '透き通った雫。光を集めて虹を作る', sellPrice: 12 }]
  },
  {
    id: 'e01_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が玉座を守っている。追い払ってもすぐ戻る。王の間を出てもまだ鳴き声がする。耳鳴りのように頭にこびりつく。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '子猫が玉座の上で丸くなって眠っている。守っているというより、寝心地が良いだけだろう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e01_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '指に巻きつくほどの蛇が玉座の脚に絡んでいる。守っているつもりらしい。跨いで通る。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '温かい蛇が玉座の肘掛けに巻きついている。腕に巻きついてくるが敵意はない。体温を分けてくれている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '炎の軌跡を残す蛇が玉座を巡回している。通った跡が焦げる。王の間の床が黒い渦を描いている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '鉄の鱗を持つ蛇が玉座に巻きついている。鞭のように振られた尾が脛を打ち、骨の奥まで響く痛みが走る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '猛毒の蛇が玉座を守っている。一噛みで足首の血が黒く変わった。意識が遠のき、玉座の金が滲んで見える。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '脱皮に失敗した蛇が玉座の根元にいる。古い皮が半分残り、動きが鈍い。玉座には触れさせてもらえた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '胴回りが人の腰ほどある大蛇が玉座に巻きついている。巻き添えで胴を締め上げられ、肋が軋んで折れかけた。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '氷の中で螺旋を描く蛇が玉座の前に立っている。触れると凍傷する。王の間に霜が降りている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が玉座に巻きついている。飲み込んだ王冠が体内に透けて見える。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e01_clear_snake', name: '蛇の中の王冠', description: '透けて見える黄金の冠。取り出す方法がない', sellPrice: 15 }]
  },
  {
    id: 'e01_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が玉座を守っている。脱皮するたびに大きくなる。もう玉座の半分を蛇が覆っている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: 'とぐろを巻いた蛇が玉座の前で眠っている。踏まなければ無害だが、王の間は静まり返っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '手のひらサイズの竜が玉座を守っている。小さな火を噴いて威嚇する。眉毛が焦げた。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e01_small_dragon', name: '極小の竜鱗', description: '爪の先ほど小さい。だが確かに竜の鱗', sellPrice: 8 }]
  },
  {
    id: 'e01_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '穏やかな老竜が玉座を守っている。翼を畳み、旅人を見据える。敵意はない。王の間を通ることを許された。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e01_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '全身が業火に包まれた竜が玉座を守っている。近づくだけで髪が焦げ、肌が灼ける。王の間が炉と化している。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '鱗が城壁のように厚い竜が玉座を守っている。退けようと肩で押せば、岩に叩きつけられたように跳ね返された。肩が外れかける。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '爪の一振りで床が裂ける竜が玉座を守っている。よそ見の一瞬に爪が胸を掠め、肋が剥き出しになる。血だまりが広がった。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '翼は折れ、鱗は剥がれ、火も吐けない竜が玉座を守っている。それでも退かない。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e01_broken_dragon', name: '折れた竜牙', description: '竜の口から落ちた一本。まだ温かい', sellPrice: 10 }]
  },
  {
    id: 'e01_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '山のような巨体の竜が玉座を守っている。翼の一打ちで宙へ吹き飛ばされ、壁に叩きつけられた。口から血が噴く。',
    damage: 5,
    quill: 2
  },
  {
    id: 'e01_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '氷をまとった白い竜が玉座を守っている。吹雪の吐息を浴び、指先が黒く凍り、瞼まで霜に縫い留められた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '水晶の竜が玉座を守っている。体を通して玉座が歪んで見える。見惚れるほど美しい番人だ。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e01_clear_dragon', name: '水晶竜の欠片', description: '光を通すと虹が走る。竜の体の一部', sellPrice: 12 }]
  },
  {
    id: 'e01_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '暴走した守護竜が玉座を守っている。狂った爪が肩口から腰まで裂き、旅装が血で重くなった。立っているのがやっとだ。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '竜が玉座の前で居眠りしている。いびきが王の間を震わせる。起こさなければ通れる。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '花びらと見間違うほど小さな蝶が玉座の周りを飛んでいる。守っているとは思えない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e01_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '指先に止まる蝶が玉座から離れない。羽の模様が笑顔に見える。王の遺した使いだろうか。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '羽が炎でできた蝶が玉座を巡回している。飛んだ跡に火の粉。王の間の帳が燃え始めた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '金属の羽を持つ蝶が玉座を守っている。飛ぶたびに甲冑のような金属音が響く。重そうだ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '羽の縁が刃の蝶が玉座を守っている。すれ違うだけで頬が切れた。血が玉座に散る。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '片羽がちぎれた蝶が玉座の上で螺旋を描いている。飛ぶことも守ることもできない。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '蝶のくせに羽ばたきが風を起こす。壁のような風圧で床に叩き伏せられ、肩と顎が石床に打ちつけられた。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e01_mighty_butterfly', name: '蝶の鱗粉', description: '指につくと離れない。風に乗って渦を巻く', sellPrice: 8 }]
  },
  {
    id: 'e01_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '霜の結晶が蝶の形をしている。玉座の周囲を回るたびに空気が凍る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透明な蝶が玉座を守っている。止まると景色に溶けて見えなくなる。見えない番人だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '追いかけると必ず迷子になる蝶が玉座の前を飛んでいる。王の間をさまよううち喉が渇き、力尽きて柱にもたれた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '蝶が玉座の上で羽を閉じている。あくびが伝染する。王の間が眠気に満ちている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: 'そよ風が玉座の周りを吹いている。守るには頼りない。帳がかすかに揺れるだけだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e01_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '温かい追い風が玉座から吹いてくる。背中を押すように王の間の出口へ導かれた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '熱風が玉座を守っている。触れたものが焦げる。王の間が窯のように熱い。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '同じ方向に吹き続ける頑固な風が玉座を守っている。逆らって進もうとして、膝が砕けるほど踏ん張るうちに爪が剥がれた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '真空の刃が玉座を守っている。王の間を横切ろうとして、腕に薄い傷が走った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '方向が定まらない乱気流が玉座の周りで渦巻いている。巻き込まれて柱に叩きつけられた。風向きが読めない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: 'すべてを押し流す暴風が玉座を守っている。立っていられない。床を這って進むしかない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '吹雪が玉座を守っている。まつ毛が凍り、視界が白に塗りつぶされる。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '澄み渡る風が玉座を守っている。嘘も幻も吹き払う風。王の間の空気だけが清い。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e01_clear_wind', name: '王の間の清風', description: '瓶に詰めた王の間の空気。嗅ぐと背筋が伸びる', sellPrice: 10 }]
  },
  {
    id: 'e01_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が玉座を守っている。吹かれて帰り道を忘れ、石廊をさまよううち渇きと飢えで倒れ込んだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '生温い風が玉座から吹いている。意識がぼんやりする。玉座に座りたくなる衝動を堪えた。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e01_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '蝋燭ほどの小さな炎が玉座の肘掛けで揺れている。指で摘めそうだが、近づくと逃げる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '暖炉のような炎が玉座を守っている。揺れる光が王の間を温かく照らす。敵意はない。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '制御不能の大火が玉座を守っている。火の舌に飲まれ、背中の皮膚が溶けて衣と絡み合う。気を失いかけた。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '消えない炎が玉座を守っている。横をすり抜けるとき頬と耳が赤く爛れ、髪の片側が焼け落ちた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が玉座を守っている。触れたものの形を正確に切り取る。指を出したら、爪だけが綺麗に焼け落ちた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '色のおかしい炎が玉座を守っている。緑や紫に明滅するが、温かくない。触れても火傷しない。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '天を衝く火柱が玉座を守っている。熱風に巻かれて吹き飛ばされ、背から打ちつけた石床で肺が潰れかけた。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e01_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '燃えているのに冷たい青白い炎が玉座を守っている。腕が触れた瞬間、火傷と凍傷が同時に走り、皮膚が裂けた。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e01_frozen_flame', name: '凍える炎', description: '燃えているのに冷たい。瓶の中で青く揺れている', sellPrice: 10 }]
  },
  {
    id: 'e01_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: 'ほぼ見えない炎が玉座を守っている。空気の揺らぎだけで存在がわかる。知らずに近づいて手を灼いた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が玉座を守っている。燃やしたものの形を覚えて再現する。炎の中に王の姿が見えた。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e01_cursed_flame', name: '王の残影', description: '炎が記憶した王の輪郭。見つめると目が眩む', sellPrice: 12 }]
  },
  {
    id: 'e01_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '今にも消えそうな熾火が玉座を守っている。赤く明滅するたびに王の間が揺れる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '掌に収まる氷の欠片が玉座の上にある。すでに溶けかけている。守る力はない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e01_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '冷たいが痛くない氷が玉座を覆っている。額に当てると熱が引く。王の間の空気が心地よい。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '炎を放つ氷が玉座を守っている。触れると凍傷と火傷を同時に負う。矛盾した番人だ。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e01_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '鋼より硬い万年氷が玉座を覆っている。殴りつけた拳の骨が砕け、手の甲が紫に腫れ上がった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '氷柱が剣のように玉座の周りから突き出している。踏み出した瞬間、太腿を氷の切先が貫き、血が凍りながら滴った。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: 'ひび割れた氷が玉座を覆っている。踏み抜いて膝まで沈んだ。氷水が骨まで染みる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '山のような氷塊が玉座を守っている。削り進むうち指が凍えて爪が剥がれ、両手が血と氷でこわばった。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '氷のさらに冷たい状態。近づくだけで動けなくなる。玉座は絶対零度の檻の中だ。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '完全に透明な氷が玉座を覆っている。あることに気づかず手を突いた。冷たい。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e01_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '溶けない呪いの氷が玉座を覆っている。踏み込んだ足が膝まで凍りつき、引き抜くとき皮膚が氷と一緒に剥がれた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: 'ゆっくり溶けていく氷が玉座を覆っている。しずくの音が王の間に子守唄のように響く。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '足元の小さな黒い染みが玉座を守っている。何の影かわからない。踏むと冷たい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '木陰のような心地よい影が玉座を覆っている。涼しく、王の間に安らぎがある。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e01_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '黒い炎で燃える影が玉座を守っている。触れると灼ける。王の間に焦げた匂いが充満している。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '地面に貼りついた影が固まって玉座を囲んでいる。押し返された弾みで後頭部を柱に打ちつけ、視界が赤く滲んだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '輪郭がくっきりした影が玉座から伸びている。縁に触れた袖が切れた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '立体的にめくれ上がった影が玉座を守っている。平面に戻れない。影なのに厚みがある。不思議だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '本体より遥かに大きい影が玉座を守っている。影に飲まれた腕が感覚を失い、引き抜いた時には黒く変色していた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '影が地面に張りついて動けない。本体はとうに去ったのに、影だけが玉座を守り続けている。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e01_frozen_shadow', name: '凍りついた影', description: '剥がせない影の破片。手に持つと冷たい', sellPrice: 8 }]
  },
  {
    id: 'e01_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '薄い影が玉座を守っている。半透明で地面の模様が透けている。いるのに、いない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '影に触れたものが影になる。玉座の周りに、かつて近づいた者たちの影が層をなしている。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e01_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '正午の影のように縮んだ影が玉座の真下にある。踏んでも反応しない。昼寝中らしい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '鼻歌が王の間に漂っている。誰が歌っているかわからない。玉座の辺りから聞こえる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '子守唄が玉座を守っている。聴いていると傷が癒える。王の間に安らぎが満ちる。',
    damage: -1,
    quill: 7
  },
  {
    id: 'e01_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '戦の歌が玉座を守っている。血が沸き立ち、自らの爪で腕を掻き毟っていた。正気に戻れば赤い筋が幾本も残っていた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '止められない歌が玉座を守っている。鼓膜が引き裂かれ、耳から糸のような血が垂れた。平衡感覚が消え、床に膝をついた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '金切り声のような高音が玉座を守っている。王の間の硝子が割れた。耳を塞いでも響く。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '途中で止まる旋律が玉座を守っている。続きを誰も知らない。宙ぶらりんの和音が頭蓋の内側に張り付いて離れない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '大地を震わせる合唱が玉座を守っている。天井の石が落ち、肩を打ち砕いた。骨が砕ける鈍い音が自分の中で響いた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '聴いた者の動きが止まる歌が玉座を守っている。空気ごと凍る。足が動かない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '純粋な旋律が玉座を守っている。雑念が消え、思考が澄む。玉座に触れる必要がないと悟った。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e01_clear_song', name: '透き通った旋律', description: '瓶に詰めた音。開けると一瞬だけ聞こえる', sellPrice: 12 }]
  },
  {
    id: 'e01_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '一度聴くと頭から離れない歌が玉座を守っている。王の間を出てもまだ聞こえる。正気が削れる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '子守唄が玉座を守っている。抗えない眠気が襲う。玉座の前で膝をついた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: 'ふと会話が途切れたような静けさが玉座の周りにある。一音だけ消えた空間。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '言葉がなくても通じ合う静けさが玉座を守っている。安らぎがある。ここに王はいないが、意志は残っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '怒りで誰も口を開けない沈黙が玉座を守っている。息を吸うたび喉の奥が焼け、血の味が口に広がった。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '何を言っても吸い込まれて消える沈黙が玉座を守っている。叫ぼうとした喉から肉が裂ける音だけが返り、血の塊を吐いた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '言葉より痛い無言が玉座を守っている。見えない視線が肌を切り、額から頬へ薄い血の筋が走った。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e01_sharp_silence', name: '無言の裁き', description: '王の間で受けた視線の記憶。背筋が寒くなる', sellPrice: 10 }]
  },
  {
    id: 'e01_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '静寂のはずなのにノイズが混じる。玉座の下から聞こえる。耳を近づけた瞬間、鼓膜を叩く衝撃波が走った。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e01_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '圧倒的な沈黙が玉座を守っている。耳の奥が潰れ、鼻と口から血が溢れた。膝が折れ、石床に額を打ちつけた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '息も凍る沈黙が玉座を守っている。吸った空気がそのまま肺で凍り、胸の内側に霜が走る激痛が走った。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '雑念のない完全な静寂が玉座を守っている。泉のように澄んでいる。心が洗われる。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e01_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '声を奪う沈黙が玉座を守っている。叫ぼうとして喉の筋が裂け、赤い飛沫が唇を濡らした。膝が床を打つ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '午後の図書館のような静けさが玉座を守っている。眠気が襲う。玉座に凭れてしまいそうだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '子供の騎士が玉座を守っている。大きすぎる兜で前が見えていない。それでも剣を構えている。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e01_small_knight', name: '小さな兜', description: '子供の頭ほどの兜。中が温かい', sellPrice: 8 }]
  },
  {
    id: 'e01_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '剣を収め、跪いて手を差し出す騎士が玉座を守っている。敵ではなく客として迎えてくれた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '鎧ごと炎に包まれた騎士が玉座を守っている。抱き合うように斬りかかられ、胸と腹が同時に焼かれ裂かれた。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '分厚い鎧で全身を覆った騎士が玉座を守っている。すり抜けようとした瞬間、鉄の小手が腹に埋まり、胃液が逆流した。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '剣の達人が玉座を守っている。見えない一太刀で脇腹が深く裂かれ、内臓の感触が指先に触れた。意識が遠のく。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '鎧はへこみ、剣は折れ、盾は砕けている。それでも玉座を守って立っている。退かない。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e01_broken_knight', name: '折れた忠誠', description: '砕けた騎士の盾の破片。誓いの紋章が刻まれている', sellPrice: 12 }]
  },
  {
    id: 'e01_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '巨体の重装騎士が玉座を守っている。盾の一振りで吹き飛ばされ、石柱に背を強打した。息ができない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'e01_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '氷に閉じ込められた騎士が剣を振り上げた姿勢のまま玉座を守っている。近づくと冷気で指先が黒く凍り、動かなくなった。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '影の薄い騎士が玉座を守っている。背後からの一太刀が肩甲骨を裂き、血が旅装の背を黒く染めた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '黒い鎧の騎士が玉座を守っている。黒い剣が腹を貫き、引き抜かれる時に内臓が絡んで出た。床に倒れ伏す。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e01_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '見張り番の騎士が舟を漕いでいる。槍が傾いている。今なら通れる。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '少女の魔女が玉座を守っている。大きな帽子で顔が隠れている。杖を構えるが、手が震えている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '薬草を煎じる老魔女が玉座を守っている。怖い顔だが、傷を診てくれた。',
    damage: -1,
    quill: 7
  },
  {
    id: 'e01_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '炎の魔法で全身を包む魔女が玉座を守っている。指先から放たれた炎球が胸に突き刺さり、心臓の奥まで焼けた。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '石のように頑固な老魔女が玉座を守っている。取引以外では一言も話さない。通行料を要求された。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鉤鼻に鋭い目の魔女が玉座を守っている。嘘を見抜かれた罰に、呪言で額に裂傷が刻まれた。血が目に入る。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '魔力が暴走した魔女が玉座を守っている。暴発した呪文が脇腹で破裂し、衣と肉が同時に焦げて剥がれた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '杖を振るう代わりに拳で殴る魔女が玉座を守っている。一撃で顎が砕け、歯が数本まとめて口の中で折れた。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e01_mighty_witch', name: '魔女の拳骨', description: '石のように硬い拳の型。握ると力が湧く', sellPrice: 10 }]
  },
  {
    id: 'e01_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '氷の魔法を使う魔女が玉座を守っている。呪文一つで脚の血が凍り、膝から下が感覚を失って崩れ落ちた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '老いて存在が希薄になった魔女が玉座を守っている。向こうが透けて見える。声だけが聞こえる。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e01_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '自分の呪いに蝕まれた魔女が玉座を守っている。触れた指先から呪いが体を這い上がり、腕の皮膚が黒く爛れ始めた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '大釜の前でうとうとしている魔女が玉座を守っている。薬がぐつぐつ煮えている。何の薬だろう。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '子供が王冠をかぶって玉座を守っている。足が床に届いていない。精一杯の威厳を見せている。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e01_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '民と共に畑を耕す王が玉座を守っている。衣は質素で手が荒れている。旅人にも温かい目を向けた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '炎の冠を戴く王が玉座を守っている。一瞥で旅装が発火し、全身に回った火で皮膚が真っ黒にめくれ上がった。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '石の玉座に座り微動だにしない王が玉座を守っている。下された一言で膝が勝手に折れ、石床に額を打ちつけた。歯が欠けた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鷹のような目で見据える王が玉座を守っている。見咎められた刹那、見えない刃が鎖骨を断ち、肩から血が噴き出した。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '王冠が歪み、衣は破れ、目は虚ろな王が玉座に崩れている。守っているのではない。動けないのだ。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e01_broken_king', name: '歪んだ王冠', description: '曲がった金の冠。矯正する方法がない', sellPrice: 15 }]
  },
  {
    id: 'e01_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '戦士王が玉座を守っている。退いたことのない大剣が胴を横に薙ぎ、あばらが裂けて臓腑が見えた。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '氷の玉座に座る北の王が守っている。一言放たれるごとに体の芯が冷え、指と耳が黒く凍って感覚を失った。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '存在が希薄な王が玉座を守っている。臣下は透けた王を見ないふりをしていた。今は臣下もいない。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e01_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '触れたものが金になる王が玉座を守っている。肩を掴まれた箇所から金が広がり、鎖骨が重みで砕けた。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e01_cursed_king', name: '金の涙', description: '王が泣いた跡。黄金の雫が頬に張り付いている', sellPrice: 15 }]
  },
  {
    id: 'e01_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '王が玉座で居眠りしている。側近はおらず、王の間は無人に近い。静かに通った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '子供の亡霊が玉座を守っている。笑い声が近づいたり遠ざかったりする。気がつくと足元の体温が奪われていた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '穏やかな霊が玉座を守っている。微笑んで道を譲った。王の間に花の匂いが残った。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '炎をまとった亡霊が玉座を守っている。抱きつくように覆い被さられ、胸と両腕が火膨れで一枚の皮のようになった。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '同じ場所から決して動かない亡霊が玉座を守っている。すり抜けようとした身体が氷水に浸したように痺れ、鼻から血が流れた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: 'こちらの罪を見透かす目の亡霊が玉座を守っている。視線に射抜かれた瞬間、胸に見えない穴が開き、血が内側へ滲み出した。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '自分が何者か忘れた亡霊が玉座を守っている。輪郭が溶けている。なぜ守っているかも覚えていない。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e01_broken_ghost', name: '忘れられた記憶', description: '亡霊が落とした光の欠片。何かの記憶だったもの', sellPrice: 10 }]
  },
  {
    id: 'e01_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '鎧武者の亡霊が玉座を守っている。実体のない刃が腹を貫き、血を吐きながら膝をついた。死者の剣は痛みだけが残る。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '触れると凍傷する亡霊が玉座を守っている。肩を掠めた冷気で腕の皮膚が白く死に、力が入らなくなった。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '成仏しかけた亡霊が玉座を守っている。ほとんど透けている。もう少しで消える。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪いに縛られて成仏できない亡霊が玉座を守っている。苦しみが感染するように胸が締めつけられ、口から血の混じった息が漏れた。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e01_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: 'うつらうつらしている亡霊が玉座を守っている。存在感が薄れたり戻ったりする。隙をついて通った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '手鏡が玉座の上に置かれている。覗くと自分の目だけが映る。何を守っているのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '映った者を少しだけ美しく見せる鏡が玉座を守っている。覗くと、王の間にふさわしい姿になっていた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '鏡面に炎が映っている。だが周囲に火はない。覗き込んだ瞬間、鏡の炎が現実に飛び移り、髪と右頬を焼いた。',
    damage: 3,
    quill: 7,
    rewardItems: [{ id: 'item_e01_fire_mirror', name: '燃える鏡', description: '覗くと別の王の間が見える。そちらは炎に包まれている', sellPrice: 12 }]
  },
  {
    id: 'e01_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '何をしても割れない鏡が玉座を守っている。殴り続けるうちに拳の骨が折れ、蹴った脛にひびが入った。鏡は無傷のままだ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e01_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '割れ鏡の破片が玉座の周りに散らばっている。踏み抜いた破片が足裏から甲まで貫通し、歩くたび血の足跡が残った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: 'ひび割れた鏡が玉座を守っている。映る顔が何人にも分裂している。めまいがする。自分がどこに立っているかわからなくなった。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e01_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '人の背丈を超える巨大な姿見が玉座を守っている。鏡の中の自分が剣を抜き、こちらの胸に一撃を入れた。現実の胸に同じ傷が開く。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e01_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '鏡面が凍って霜で覆われている。かろうじて影が映る。覗くと冬の王の間が見えた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '鏡なのに向こうが透けている。窓のようだが通り抜けられない。玉座の向こうに別の世界が見える。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e01_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '覗いた者の姿が鏡に残る鏡が玉座を守っている。中の影が腕を掴み、引き摺り込まれかけた肩が脱臼した。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '鏡面がぼんやり曇っている。映像がゆっくり遅れて映る。自分の寝顔が映って、眠くなった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '指人形ほどの人形が玉座を守っている。誰かが落としたのだろう。王冠を模した帽子をかぶっている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '笑顔が縫ってある人形が玉座を守っている。抱きしめたくなる。王の忘れ形見だろうか。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e01_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '火がついた藁人形が玉座を守っている。倒れ込んだ藁の塊が足に絡み、脛の皮膚が焼け爛れた。煙で視界が利かない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '木彫りの人形が玉座を守っている。関節がなく、表情もない。おもちゃの兵隊のように立っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '関節が刃になっている操り人形が玉座を守っている。糸が見えない。優雅に、しかし確実に斬りつけてくる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '首がもげかけた人形が玉座を守っている。残った目でこちらを見ている。王の間に似つかわしくない不気味さ。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e01_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '等身大の木彫り人形が玉座を守っている。丸太のような腕の一振りで胸骨が砕け、息を吸うたび肺に棘が刺さるような痛みが走る。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '氷でできた人形が玉座を守っている。繊細な造形。溶けたら二度と作れない。触れるのを躊躇う。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '硝子の人形が玉座を守っている。中に何かの液体が入っている。王の間の光を集めて輝いている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e01_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '夜になると位置が変わる人形が玉座を守っている。背後に回り込んだ小さな手が首を絞め、気道が潰れて血が鼻から逆流した。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e01_cursed_doll', name: '呪いの人形の糸', description: '見えない糸。切っても翌朝繋がっている', sellPrice: 8 }]
  },
  {
    id: 'e01_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '目を閉じた人形が玉座を守っている。横にすると目が閉じるあの仕掛けだ。持つと眠くなる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e01_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '霧雨が玉座を守っている。天井から細かい水滴が降る。屋内なのに。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '温かい雨が玉座に降り注いでいる。傷を洗い清める慈雨。王の間の空気が潤っている。',
    damage: -1,
    quill: 7
  },
  {
    id: 'e01_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '火の雨が玉座を守っている。天井から灼熱の滴が降る。王の間の床が焦げている。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e01_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '雹が玉座を守っている。石のような氷の粒が叩きつける。肌が痣だらけになった。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '針のような雨が玉座を守っている。肌に刺さる。王の間を横切ろうとして、無数の針傷を負った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '途切れ途切れに降る雨が玉座を守っている。リズムがおかしい。上に向かって降る雫もある。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e01_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '豪雨が玉座を守っている。滝のような水量。王の間の床が川になっている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e01_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍雨が玉座を守っている。触れたものを氷の膜で覆う。足元が滑って進めない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e01_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '異常なほど澄んだ雨が玉座に降っている。濡れた跡が光って見える。穢れを洗い流す雨だ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e01_clear_rain', name: '浄化の雫', description: '澄んだ一滴。瓶に入れると光る', sellPrice: 10 }]
  },
  {
    id: 'e01_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '浴びた者がその場から動けなくなる雨が玉座を守っている。足に根が生えたように動けない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e01_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '静かな雨音が王の間に響いている。子守唄のように眠気を誘う。玉座の前で意識が遠のいた。',
    damage: 2,
    quill: 5
  },
];
