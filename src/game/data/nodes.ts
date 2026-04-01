import type { NodeDef, WordCard, MapNode, BattleNodeDef, ShopNodeDef, TreasureNodeDef, Item } from '../engine/types';

/** プロトタイプ用：最初の手札 */
export const initialHand: WordCard[] = [
  { id: 'h1', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] },
  { id: 'h2', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] },
  { id: 'h3', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] },
  { id: 'h4', text: '逃げていく', category: 'predicate', tags: ['flee', 'retreat', 'safe'] },
  { id: 'h5', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] },
];

// ============================
// ノード定義
// ============================

export const nodeDefs: Record<string, NodeDef> = {

  // --- ノード1: チュートリアル ---
  node_1: {
    id: 'node_1',
    title: '森の入り口',
    nodeType: 'puzzle',
    // [修飾語][主語]が [対象語]を [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w1_1', text: '大きな', category: 'modifier', tags: ['size:large', 'heavy'] } },
      { id: 's2', category: 'subject', word: { id: 'w1_2', text: '岩', category: 'subject', tags: ['stone', 'obstacle', 'heavy'] } },
      { id: 's3', category: 'object', word: { id: 'w1_3', text: '道', category: 'object', tags: ['path', 'route'] } },
      { id: 's4', category: 'predicate', word: { id: 'w1_4', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o1_e', conditions: { 's1': ['weaken'], 's4': ['retreat'] },
        resultText: '小さな岩がころころと道から転がり去った。まるで最初からなかったかのように。',
        damage: 0, gold: 8,
        rewardItems: [{ id: 'item_obedient_stone', name: '従順な石', description: '言うことを聞く珍しい石', sellPrice: 12 }] },
      { id: 'o1_f', conditions: { 's1': ['fire'], 's4': ['destroy'] },
        resultText: '燃え盛る炎が岩を砕いた。道には焼け跡と、溶けた鉱石の欠片が残っている。',
        damage: 0, gold: 10,
        rewardItems: [{ id: 'item_molten_ore', name: '溶けた鉱石', description: '岩の中に眠っていた鉱石。熱を帯びている', sellPrice: 15 }] },
      { id: 'o1_g', conditions: { 's2': ['dragon'], 's4': ['destroy'] },
        resultText: '竜が岩を一息で粉砕した。破片の中に竜鱗の欠片が混じっている。',
        damage: 0, gold: 10,
        rewardItems: [{ id: 'item_dragon_debris', name: '竜鱗の欠片', description: '竜が残した鱗の破片', sellPrice: 18 }] },
      // 単体条件（新規）
      { id: 'o1_h', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る岩。道を塞ぐ障害が、道を焼く障害に変わった。熱風を浴びながら駆け抜けた。',
        damage: 2, gold: 4 },
      { id: 'o1_i', conditions: { 's2': ['dragon'] },
        resultText: '道を塞いでいるのは竜だった。岩よりよほど厄介だが、竜はこちらに興味がなかった。',
        damage: 2, gold: 5 },
      { id: 'o1_j', conditions: { 's4': ['destroy'] },
        resultText: '岩が道を砕いている——砕かれているのは道の方だった。瓦礫の上を慎重に渡る。',
        damage: 1, gold: 5,
        rewardItems: [{ id: 'item_road_fragment', name: '道の破片', description: '砕かれた道の石畳', sellPrice: 6 }] },
      { id: 'o1_k', conditions: { 's1': ['broken'] },
        resultText: '壊れた岩は脆い。手で押すと砂のように崩れた。',
        damage: 0, gold: 5 },
      { id: 'o1_l', conditions: { 's2': ['wind'] },
        resultText: '風が道を塞いでいる。吹き抜けるだけだ。髪が乱れた以外、何も起きない。',
        damage: 0, gold: 4 },
      { id: 'o1_m', conditions: { 's4': ['illuminate'] },
        resultText: '岩が眩い光を放ち始めた。道標のように輝いている。脇道が照らし出された。',
        damage: 0, gold: 6,
        rewardItems: [{ id: 'item_light_stone', name: '光る石', description: '輝き続ける不思議な石', sellPrice: 10 }] },
      { id: 'o1_n', conditions: { 's1': ['intense'] },
        resultText: '激しい岩。意味はよくわからないが、岩が怒っているような気がする。通るのに苦労した。',
        damage: 3, gold: 2 },
      { id: 'o1_o', conditions: { 's4': ['guard'] },
        resultText: '岩が道を守っている。塞ぐのではなく、守る。……結果は同じだ。通してはくれない。',
        damage: 3, gold: 2 },
      // 単体条件（既存）
      { id: 'o1_a', conditions: { 's1': ['size:small'] },
        resultText: '小さな岩を難なく跨ぎ、道の先へ進んだ。', damage: 0, gold: 5 },
      { id: 'o1_b', conditions: { 's2': ['harmless'] },
        resultText: '道を塞ぐものは何の脅威でもなかった。悠々と通り過ぎる。', damage: 0, gold: 5 },
      { id: 'o1_c', conditions: { 's4': ['retreat'] },
        resultText: '岩がひとりでに転がり去った。道が開ける。転がった跡に何か光るものが落ちていた。', damage: 0, gold: 5,
        rewardItems: [{ id: 'item_rolling_stone', name: '転がる石', description: '岩が去った跡に残された不思議な石', sellPrice: 8 }] },
      { id: 'o1_d', conditions: { 's1': ['gentle'] },
        resultText: '岩の角が丸くなり、脇を楽に通れるようになった。', damage: 1, gold: 3 },
      // 書き換えなかった場合（元のタグにマッチ）
      { id: 'o1_orig', conditions: { 's1': ['size:large'], 's2': ['obstacle'], 's4': ['block'] },
        resultText: '岩はびくともしない。傷つきながらも、なんとか隙間を通り抜けた。', damage: 3, gold: 2 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
      damage: 4, gold: 0,
    },
    actionPoints: 3,
  },

  // --- ノード2A: 凍った川 ---
  node_2a: {
    id: 'node_2a',
    title: '凍った川',
    nodeType: 'puzzle',
    // [修飾語][主語]が [対象語]を [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w2a_1', text: '冷たい', category: 'modifier', tags: ['cold', 'ice', 'harsh'] } },
      { id: 's2', category: 'subject', word: { id: 'w2a_2', text: '氷', category: 'subject', tags: ['ice', 'frozen', 'obstacle'] } },
      { id: 's3', category: 'object', word: { id: 'w2a_3', text: '川', category: 'object', tags: ['water', 'path', 'nature'] } },
      { id: 's4', category: 'predicate', word: { id: 'w2a_4', text: '閉ざしている', category: 'predicate', tags: ['block', 'seal', 'obstacle'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o2a_f', conditions: { 's1': ['fire'], 's4': ['retreat'] },
        resultText: '炎の温もりに氷は退いた。川面に湯気が立ち上り、温かい水が流れ始めた。',
        damage: -2, gold: 10,
        rewardItems: [{ id: 'item_thawed_gem', name: '氷解の雫', description: '氷が溶けた瞬間に結晶化した一滴', sellPrice: 15 }] },
      { id: 'o2a_g', conditions: { 's2': ['dragon'], 's4': ['destroy'] },
        resultText: '竜が川を砕いた。氷も水も地形ごと吹き飛ばされた。豪快だが、道は開けた。',
        damage: 1, gold: 8,
        rewardItems: [{ id: 'item_frozen_scale', name: '凍った竜鱗', description: '氷の川で拾った竜の鱗', sellPrice: 12 }] },
      { id: 'o2a_p', conditions: { 's1': ['threat:high'], 's2': ['ice'] },
        resultText: '氷がさらに冷たく、さらに厚くなった。凍てつく冷気が全身を蝕む。',
        damage: 6, gold: 1 },
      // 単体条件（新規）
      { id: 'o2a_h', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る炎が氷を溶かした。川は自由を取り戻し、魚が跳ねた。',
        damage: 0, gold: 8,
        rewardItems: [{ id: 'item_steam_crystal', name: '蒸気の結晶', description: '火と氷がぶつかり合って生まれた結晶', sellPrice: 10 }] },
      { id: 'o2a_i', conditions: { 's2': ['dragon'] },
        resultText: '竜が川を閉ざしている。氷より面倒だが、竜の炎が氷も溶かし、結局通れた。',
        damage: 1, gold: 6 },
      { id: 'o2a_j', conditions: { 's4': ['destroy'] },
        resultText: '氷が轟音とともに砕け散った。破片が飛んできて少し痛い。',
        damage: 1, gold: 6,
        rewardItems: [{ id: 'item_ice_shard', name: '氷の破片', description: '砕けた氷の一欠片。宝石のように透明だ', sellPrice: 5 }] },
      { id: 'o2a_k', conditions: { 's4': ['vanish'] },
        resultText: '氷が音もなく消え去った。まるで最初から凍っていなかったかのように。',
        damage: 0, gold: 6 },
      { id: 'o2a_l', conditions: { 's1': ['broken'] },
        resultText: '壊れた氷は割れやすい。足で踏むとひび割れが広がった。',
        damage: 1, gold: 4 },
      { id: 'o2a_m', conditions: { 's2': ['wind'] },
        resultText: '風が川を閉ざしている。見えない壁だが、息を止めて歩けば通り抜けられた。',
        damage: 1, gold: 4 },
      { id: 'o2a_n', conditions: { 's4': ['illuminate'] },
        resultText: '氷が光り始めた。凍った川面が虹色に輝く。美しい光景に見とれつつ、氷の橋を渡った。',
        damage: 0, gold: 5,
        rewardItems: [{ id: 'item_rainbow_ice', name: '虹色の氷', description: '輝く氷の欠片。溶けずに光り続けている', sellPrice: 8 }] },
      { id: 'o2a_o', conditions: { 's1': ['sharp'] },
        resultText: '鋭い氷が川を閉ざしている。刃のような氷柱が乱立する。切り傷だらけになった。',
        damage: 5, gold: 1 },
      // 単体条件（既存）
      { id: 'o2a_a', conditions: { 's1': ['gentle'] },
        resultText: '優しい温もりが氷を溶かし、川は穏やかな流れを取り戻した。', damage: 0, gold: 5 },
      { id: 'o2a_b', conditions: { 's4': ['safe'] },
        resultText: '氷は閉ざすのをやめ、凍った橋のように横たわっている。その上を渡った。', damage: 0, gold: 5 },
      { id: 'o2a_c', conditions: { 's4': ['retreat'] },
        resultText: '氷が音を立てて退いていく。川面が姿を現した。', damage: 0, gold: 5 },
      { id: 'o2a_d', conditions: { 's2': ['harmless'] },
        resultText: '大した氷ではなかった。踏み砕いて先へ進む。', damage: 0, gold: 4 },
      { id: 'o2a_e', conditions: { 's1': ['size:small'] },
        resultText: '氷は薄い。足で割って進む。少し濡れた。', damage: 1, gold: 4 },
      { id: 'o2a_orig', conditions: { 's1': ['cold'], 's2': ['obstacle'], 's4': ['block'] },
        resultText: '凍てつく川を前に立ち尽くす。意を決して氷の上を滑りながら渡った。', damage: 4, gold: 2 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。氷でも水でもない何かが川面を覆っている。理解できないまま、足を濡らして渡った。',
      damage: 5, gold: 0,
    },
    actionPoints: 3,
  },

  // --- ノード2B: 橋の番人 ---
  node_2b: {
    id: 'node_2b',
    title: '橋の番人',
    nodeType: 'puzzle',
    // [修飾語][主語]が [対象語]を [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w2b_1', text: '屈強な', category: 'modifier', tags: ['strong', 'powerful', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w2b_2', text: '番兵', category: 'subject', tags: ['human', 'guard', 'threat:medium'] } },
      { id: 's3', category: 'object', word: { id: 'w2b_3', text: '橋', category: 'object', tags: ['structure', 'path'] } },
      { id: 's4', category: 'predicate', word: { id: 'w2b_4', text: '守っている', category: 'predicate', tags: ['guard', 'block', 'obstacle'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o2b_f', conditions: { 's1': ['weaken'], 's4': ['retreat'] },
        resultText: '弱々しい番兵は持ち場を離れ、どこかへ去っていった。誰も橋を守っていない。',
        damage: 0, gold: 8 },
      { id: 'o2b_g', conditions: { 's1': ['fire'], 's2': ['dragon'] },
        resultText: '燃え盛る竜が橋を守っている。番兵よりはるかに恐ろしい。近づくことすらできない。',
        damage: 7, gold: 0 },
      // 単体条件（新規）
      { id: 'o2b_h', conditions: { 's2': ['dragon'] },
        resultText: '竜が橋を守っている。番兵の代わりに竜。迂回に半日かかった。',
        damage: 6, gold: 1 },
      { id: 'o2b_i', conditions: { 's4': ['destroy'] },
        resultText: '番兵が橋を砕いた。守るのではなく、壊した。渡るべき橋がなくなった。',
        damage: 4, gold: 1,
        rewardItems: [{ id: 'item_bridge_plank', name: '橋の残骸', description: '砕かれた橋の板', sellPrice: 3 }] },
      { id: 'o2b_j', conditions: { 's4': ['guard'] },
        resultText: '番兵が橋を守っている。……元からそうだった。何も変わっていない。',
        damage: 5, gold: 2 },
      { id: 'o2b_k', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る番兵。炎に包まれた番兵はもう戦えない。だが橋にも火が移った。急いで渡れ。',
        damage: 2, gold: 5 },
      { id: 'o2b_l', conditions: { 's4': ['illuminate'] },
        resultText: '番兵が輝き始めた。聖なる光に包まれ、微笑んで道を譲った。浄化されたらしい。',
        damage: 0, gold: 6,
        rewardItems: [{ id: 'item_guard_medal', name: '番兵の勲章', description: '浄化された番兵が残した勲章', sellPrice: 10 }] },
      { id: 'o2b_m', conditions: { 's1': ['broken'] },
        resultText: '壊れた番兵。鎧はぼろぼろ、槍は折れている。これでは誰も止められまい。',
        damage: 0, gold: 5 },
      { id: 'o2b_n', conditions: { 's2': ['wind'] },
        resultText: '風が橋を守っている。強風で渡れないが、風が止む瞬間を狙って走り抜けた。',
        damage: 1, gold: 4 },
      { id: 'o2b_o', conditions: { 's1': ['sharp'] },
        resultText: '鋭い番兵。研ぎ澄まされた殺意。すれ違いざまに斬られた。',
        damage: 6, gold: 1 },
      { id: 'o2b_p', conditions: { 's4': ['vanish'] },
        resultText: '番兵が橋の上で消え去った。靴だけが残されている。通行は自由だ。',
        damage: 0, gold: 5,
        rewardItems: [{ id: 'item_guard_boots', name: '番兵の靴', description: '消えた番兵の靴。まだ温かい', sellPrice: 7 }] },
      { id: 'o2b_q', conditions: { 's1': ['durable'] },
        resultText: '堅い番兵。防御は鉄壁だが、攻撃する気もないらしい。隙を見て横を通った。',
        damage: 2, gold: 3 },
      // 単体条件（既存）
      { id: 'o2b_a', conditions: { 's1': ['weaken'] },
        resultText: '番兵に覇気はなく、こちらを一瞥しただけで道を譲った。', damage: 0, gold: 5 },
      { id: 'o2b_b', conditions: { 's2': ['harmless'] },
        resultText: '橋の上に佇む小さな影。脅威ではなかった。', damage: 0, gold: 5 },
      { id: 'o2b_c', conditions: { 's4': ['retreat'] },
        resultText: '番兵は持ち場を離れ、静かに立ち去った。橋は無人になる。', damage: 0, gold: 5 },
      { id: 'o2b_d', conditions: { 's4': ['safe'] },
        resultText: '番兵は不思議とこちらを通してくれた。', damage: 1, gold: 4 },
      { id: 'o2b_e', conditions: { 's1': ['gentle'] },
        resultText: '番兵の目に敵意はない。穏やかに道を譲ってくれた。', damage: 0, gold: 4 },
      { id: 'o2b_orig', conditions: { 's1': ['powerful'], 's2': ['guard'], 's4': ['block'] },
        resultText: '番兵は槍を構え、通行を拒む。押し問答の末、傷を負いながら橋を渡った。', damage: 5, gold: 2 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。番兵の輪郭が揺らぎ、橋の形が曖昧になった。混乱の中を駆け抜けた。',
      damage: 6, gold: 0,
    },
    actionPoints: 3,
  },

  // --- ノード3A: 毒の沼 ---
  node_3a: {
    id: 'node_3a',
    title: '毒の沼',
    nodeType: 'puzzle',
    // [修飾語][主語]が [対象語]に [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3a_1', text: '深い', category: 'modifier', tags: ['deep', 'amplify', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w3a_2', text: '毒', category: 'subject', tags: ['poison', 'danger', 'threat:high'] } },
      { id: 's3', category: 'object_ni', word: { id: 'w3a_3', text: '沼', category: 'object_ni', tags: ['water', 'terrain', 'obstacle'] } },
      { id: 's4', category: 'predicate', word: { id: 'w3a_4', text: '淀んでいる', category: 'predicate', tags: ['stagnant', 'block', 'obstacle'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o3a_f', conditions: { 's1': ['weaken'], 's4': ['retreat'] },
        resultText: '薄い毒が沼から退いていく。残ったのは浅い泥水だけだ。',
        damage: 0, gold: 8 },
      { id: 'o3a_g', conditions: { 's2': ['wind', 'harmless'], 's4': ['calm'] },
        resultText: '風が沼に静かに吹いている。毒気が散り、空気が澄んだ。',
        damage: 0, gold: 7,
        rewardItems: [{ id: 'item_purified_water', name: '浄化された水', description: '風が毒を散らした後に残った清水', sellPrice: 8 }] },
      // 単体条件（新規）
      { id: 'o3a_h', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る毒。沼地から有毒ガスが噴き上がった。火をつけるべきではなかった。',
        damage: 7, gold: 0 },
      { id: 'o3a_i', conditions: { 's2': ['dragon'] },
        resultText: '竜が沼に淀んでいる。毒沼の底で丸くなった竜。起こさないように迂回した。',
        damage: 2, gold: 4 },
      { id: 'o3a_j', conditions: { 's2': ['wind'] },
        resultText: '風が沼に淀んでいる。風は本来淀まない。不思議な空間だが、毒はない。',
        damage: 0, gold: 5 },
      { id: 'o3a_k', conditions: { 's4': ['destroy'] },
        resultText: '毒が沼を砕いた。地形が崩れ、毒水が地中に吸い込まれた。乾いた道が現れる。',
        damage: 1, gold: 6,
        rewardItems: [{ id: 'item_swamp_crystal', name: '沼底の結晶', description: '沼が砕けた後、地中から転がり出た結晶', sellPrice: 10 }] },
      { id: 'o3a_l', conditions: { 's4': ['vanish'] },
        resultText: '毒が沼から消え去った。清浄な湿地が広がっている。蛙が鳴き始めた。',
        damage: 0, gold: 6 },
      { id: 'o3a_m', conditions: { 's1': ['broken'] },
        resultText: '壊れた毒。もう効力を失っている。ただの臭い水だ。',
        damage: 1, gold: 4 },
      { id: 'o3a_n', conditions: { 's4': ['illuminate'] },
        resultText: '毒が光り始めた。沼面が蛍のように輝いている。美しいが、毒は毒だ。見とれて吸い込んだ。',
        damage: 3, gold: 3,
        rewardItems: [{ id: 'item_glow_poison', name: '光る毒', description: '輝く毒液。危険だが珍しい', sellPrice: 12 }] },
      { id: 'o3a_o', conditions: { 's1': ['sharp'] },
        resultText: '鋭い毒。痛みは一瞬で全身に回った。即効性の猛毒だ。',
        damage: 6, gold: 1 },
      { id: 'o3a_p', conditions: { 's2': ['animal', 'small'] },
        resultText: '子猫が沼に淀んでいる。……助けなければ。毒を浴びながら子猫を救出した。',
        damage: 3, gold: 3,
        rewardCards: [{ id: 'reward_grateful_cat', text: '恩返し', category: 'predicate', tags: ['heal', 'safe', 'positive'] }] },
      // 単体条件（既存）
      { id: 'o3a_a', conditions: { 's2': ['harmless'] },
        resultText: '沼にいるのは毒ではなく、無害な生き物だった。足元に気をつけて通る。', damage: 0, gold: 5 },
      { id: 'o3a_b', conditions: { 's1': ['size:small'] },
        resultText: '毒は浅い。裾を持ち上げれば通れる程度だ。', damage: 1, gold: 4 },
      { id: 'o3a_c', conditions: { 's4': ['retreat'] },
        resultText: '毒の水がざわめきながら退いていく。乾いた道が姿を現した。', damage: 0, gold: 5 },
      { id: 'o3a_d', conditions: { 's4': ['calm'] },
        resultText: '沼は静まり返り、毒の気配が薄れた。息を止めて駆け抜けた。', damage: 2, gold: 3 },
      { id: 'o3a_e', conditions: { 's1': ['gentle'] },
        resultText: '毒は穏やかなものだった。肌がわずかに痺れる程度で通り抜けた。', damage: 1, gold: 4 },
      { id: 'o3a_orig', conditions: { 's1': ['amplify'], 's2': ['poison'], 's4': ['block'] },
        resultText: '毒気に当てられながらも、意識を保って沼を横断した。体が重い。', damage: 5, gold: 2 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。沼の色が変わり、毒でも水でもない液体が足元に広がった。得体の知れない痛みが走る。',
      damage: 6, gold: 0,
    },
    actionPoints: 3,
  },

  // --- ノード3B: 言葉の泉（休憩） ---
  node_3b: {
    id: 'node_3b',
    title: '言葉の泉',
    nodeType: 'rest',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3b_1', text: '透き通った', category: 'modifier', tags: ['clear', 'pure', 'positive'] } },
      { id: 's2', category: 'subject', word: { id: 'w3b_2', text: '水', category: 'subject', tags: ['water', 'nature', 'harmless'] } },
      { id: 's3', category: 'object_kara', word: { id: 'w3b_3', text: '泉', category: 'object_kara', tags: ['water', 'nature', 'source'] } },
      { id: 's4', category: 'predicate', word: { id: 'w3b_4', text: '湧いている', category: 'predicate', tags: ['flow', 'create', 'safe'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o3b_b', conditions: { 's1': ['fire'], 's2': ['dragon'] },
        resultText: '燃え盛る竜が泉から湧いている。伝説の幻竜だ。竜は一声鳴くと空へ昇り、宝物を残した。',
        damage: -3, gold: 15,
        rewardItems: [{ id: 'item_phantom_dragon_tear', name: '幻竜の涙', description: '泉から生まれた竜が残した一滴', sellPrice: 25 }] },
      { id: 'o3b_c', conditions: { 's1': ['fire'], 's4': ['illuminate'] },
        resultText: '燃える水が泉から輝いている。魔法の温泉だ。浸かると傷も疲れも溶けていく。',
        damage: -8, gold: 5 },
      { id: 'o3b_d', conditions: { 's2': ['wind'], 's4': ['calm'] },
        resultText: '穏やかな風が泉から吹いている。花の香りを含んだ微風。全身の力が抜けた。',
        damage: -6, gold: 3 },
      // 単体条件
      { id: 'o3b_e', conditions: { 's2': ['dragon'] },
        resultText: '竜が泉から湧いている。古い竜が水面から首を持ち上げ、こちらを見た。敵意はない。宝を一つ授かった。',
        damage: -3, gold: 10,
        rewardItems: [{ id: 'item_dragon_pearl', name: '竜の真珠', description: '泉の竜が口から落とした真珠', sellPrice: 20 }] },
      { id: 'o3b_f', conditions: { 's2': ['animal', 'small'] },
        resultText: '子猫が泉から湧いている。濡れた子猫が次々と現れる。一匹がなついてきた。',
        damage: -4, gold: 3,
        rewardCards: [{ id: 'reward_spring_kitten', text: '泉の子猫', category: 'subject', tags: ['animal', 'small', 'harmless', 'magic'] }] },
      { id: 'o3b_g', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る水が泉から湧いている。触れると熱いが気持ちいい。天然の魔法温泉だ。',
        damage: -7, gold: 3,
        rewardItems: [{ id: 'item_hot_spring_salt', name: '温泉の塩', description: '魔法温泉の底に溜まった塩', sellPrice: 8 }] },
      { id: 'o3b_h', conditions: { 's1': ['size:small'] },
        resultText: '小さな水が泉から湧いている。ちょろちょろと控えめな流れ。一口飲んだ。少しだけ元気になった。',
        damage: -2, gold: 1 },
      { id: 'o3b_i', conditions: { 's4': ['flee'] },
        resultText: '水が泉から逃げていく。みるみる水位が下がり、泉は干上がった。休息の場を失った。',
        damage: 0, gold: 0 },
      { id: 'o3b_j', conditions: { 's4': ['destroy'] },
        resultText: '水が泉を砕いた。泉の底が割れ、隠された空洞が姿を現した。古い宝箱がある。',
        damage: -3, gold: 12,
        rewardItems: [{ id: 'item_spring_treasure', name: '泉底の秘宝', description: '泉の底に何百年も眠っていた宝物', sellPrice: 22 }] },
      { id: 'o3b_k', conditions: { 's2': ['wind'] },
        resultText: '風が泉から湧いている。涼しい風が全身を包む。旅の疲れが少し和らいだ。',
        damage: -4, gold: 2 },
      { id: 'o3b_l', conditions: { 's4': ['illuminate'] },
        resultText: '水が泉から輝いている。金色の光が水面から溢れ出す。触れた傷が癒えていく。',
        damage: -6, gold: 5,
        rewardItems: [{ id: 'item_golden_water', name: '金色の水', description: '輝く泉の水を瓶に詰めた', sellPrice: 12 }] },
      { id: 'o3b_m', conditions: { 's4': ['calm'] },
        resultText: '水が泉から静かに湧いている。本来の姿だ。穏やかな時間が流れる。',
        damage: -5, gold: 2 },
      { id: 'o3b_n', conditions: { 's1': ['gentle'] },
        resultText: '優しい水が泉から湧いている。肌に触れると温かい。傷口が染みない、不思議な水だ。',
        damage: -5, gold: 3 },
      { id: 'o3b_o', conditions: { 's4': ['guard'] },
        resultText: '水が泉を守っている。近づこうとすると水流が壁になる。無害だが、飲めなかった。',
        damage: -2, gold: 1 },
      { id: 'o3b_p', conditions: { 's1': ['broken'] },
        resultText: '壊れた水が泉から湧いている。液体なのに割れている。不思議な現象だ。一応飲んだ。',
        damage: -3, gold: 2,
        rewardItems: [{ id: 'item_broken_water', name: '壊れた水', description: '液体なのに割れ目がある', sellPrice: 6 }] },
      { id: 'o3b_q', conditions: { 's1': ['sharp'] },
        resultText: '鋭い水が泉から湧いている。水流が刃のように鋭い。飲もうとして口を切った。',
        damage: 1, gold: 2 },
      { id: 'o3b_r', conditions: { 's4': ['vanish'] },
        resultText: '水が泉から消え去った。乾いた石の窪みだけが残っている。',
        damage: -1, gold: 1 },
      { id: 'o3b_s', conditions: { 's1': ['hard'] },
        resultText: '堅い水が泉から湧いている。氷ではないのに硬い。不思議な水晶の泉だ。',
        damage: -3, gold: 3,
        rewardItems: [{ id: 'item_hard_water_crystal', name: '硬水の結晶', description: '液体なのに硬い水の結晶', sellPrice: 9 }] },
      // 書き換えなかった場合（元のタグにマッチ）
      { id: 'o3b_a', conditions: { 's1': ['pure'], 's2': ['water'], 's4': ['safe'] },
        resultText: '泉のほとりでしばし休息を取った。水の音が心を落ち着かせる。', damage: -5, gold: 0 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。泉の水が濁り、奇妙な色に変わった。飲めなくはないが、味が変だ。休息にはならなかった。',
      damage: -1, gold: 0,
    },
    actionPoints: 3,
  },

  // --- ノード3C: 嵐の谷 ---
  node_3c: {
    id: 'node_3c',
    title: '嵐の谷',
    nodeType: 'elite',
    // [修飾語][主語]が [対象語]を [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3c_1', text: '激しい', category: 'modifier', tags: ['intense', 'amplify', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w3c_2', text: '嵐', category: 'subject', tags: ['storm', 'wind', 'nature', 'threat:high'] } },
      { id: 's3', category: 'object', word: { id: 'w3c_3', text: '谷', category: 'object', tags: ['terrain', 'path', 'deep'] } },
      { id: 's4', category: 'predicate', word: { id: 'w3c_4', text: '引き裂いている', category: 'predicate', tags: ['destroy', 'combat', 'obstacle'] } },
    ],
    outcomes: [
      // 複合条件
      { id: 'o3c_f', conditions: { 's2': ['wind', 'harmless'], 's4': ['calm'] },
        resultText: '穏やかな風が谷を静かに吹いている。嵐の面影はない。鳥の声が聞こえる。',
        damage: 0, gold: 10,
        rewardItems: [{ id: 'item_storm_feather', name: '嵐の羽根', description: '嵐が去った後、谷に落ちていた虹色の羽根', sellPrice: 15 }] },
      { id: 'o3c_g', conditions: { 's1': ['fire'], 's2': ['dragon'] },
        resultText: '燃え盛る竜が谷を引き裂いている。嵐より恐ろしいが、竜の炎で道が焼き拓かれた。',
        damage: 3, gold: 8,
        rewardItems: [{ id: 'item_charred_valley_stone', name: '焦げた谷石', description: '竜の炎で焼かれた石', sellPrice: 10 }] },
      { id: 'o3c_h', conditions: { 's1': ['weaken'], 's2': ['harmless'] },
        resultText: 'そよ風にすぎない。谷は穏やかで、道はどこまでも続いている。',
        damage: 0, gold: 9 },
      // 単体条件（新規）
      { id: 'o3c_i', conditions: { 's1': ['fire'] },
        resultText: '燃え盛る嵐。炎が渦を巻いて谷を駆け抜ける。火の竜巻だ。全力で逃げた。',
        damage: 8, gold: 1 },
      { id: 'o3c_j', conditions: { 's2': ['dragon'] },
        resultText: '竜が谷を引き裂いている。翼が起こす風で谷壁が崩れる。壮絶だが、竜に紛れて進めた。',
        damage: 3, gold: 6,
        rewardItems: [{ id: 'item_valley_claw', name: '谷の爪痕', description: '竜が谷壁につけた爪痕の欠片', sellPrice: 8 }] },
      { id: 'o3c_k', conditions: { 's4': ['destroy'] },
        resultText: '嵐が谷を砕いた。地形が崩壊し、瓦礫の間に新しい道が生まれた。',
        damage: 2, gold: 7,
        rewardItems: [{ id: 'item_crushed_terrain', name: '崩壊した地形図', description: '谷が砕ける前の地形を記した古い地図の断片', sellPrice: 6 }] },
      { id: 'o3c_l', conditions: { 's2': ['wind', 'harmless'] },
        resultText: '風が谷を引き裂いている。……ただの風だ。穏やかな風。',
        damage: 0, gold: 7 },
      { id: 'o3c_m', conditions: { 's4': ['vanish'] },
        resultText: '嵐が谷から消え去った。突然の静寂。耳が痛いほどの静けさの中を歩いた。',
        damage: 0, gold: 6 },
      { id: 'o3c_n', conditions: { 's1': ['broken'] },
        resultText: '壊れた嵐。風はちぐはぐに吹き、雨は途切れ途切れ。もう嵐の体を成していない。',
        damage: 1, gold: 6 },
      { id: 'o3c_o', conditions: { 's4': ['illuminate'] },
        resultText: '嵐が谷を輝かせている。稲光が谷全体を照らし出す。光の合間に道が見えた。',
        damage: 2, gold: 5,
        rewardItems: [{ id: 'item_lightning_shard', name: '稲妻の欠片', description: '落雷が石に閉じ込められた', sellPrice: 10 }] },
      { id: 'o3c_p', conditions: { 's4': ['guard'] },
        resultText: '嵐が谷を守っている。通さないという意志を感じる。自然の番人だ。強引に突破した。',
        damage: 5, gold: 2 },
      { id: 'o3c_q', conditions: { 's1': ['sharp'] },
        resultText: '鋭い嵐が谷を引き裂いている。風が刃になっている。切り傷だらけで谷を抜けた。',
        damage: 7, gold: 1 },
      { id: 'o3c_r', conditions: { 's2': ['animal', 'small'] },
        resultText: '子猫が谷を引き裂いている。……引き裂けるわけがない。可愛い。',
        damage: 0, gold: 6 },
      // 複合条件（既存）
      { id: 'o3c_a', conditions: { 's1': ['weaken'], 's4': ['retreat'] },
        resultText: '弱い風が谷から去っていった。道は静かだ。', damage: 0, gold: 8 },
      // 単体条件（既存）
      { id: 'o3c_b', conditions: { 's2': ['harmless'] },
        resultText: '谷を吹き抜けるのは嵐ではなく、穏やかなそよ風だった。', damage: 0, gold: 7 },
      { id: 'o3c_c', conditions: { 's4': ['retreat'] },
        resultText: '嵐は谷から去っていった。乾いた風だけが残っている。', damage: 1, gold: 6 },
      { id: 'o3c_d', conditions: { 's1': ['weaken'] },
        resultText: '嵐の勢いは弱い。風の合間を縫って谷を渡った。', damage: 2, gold: 5 },
      { id: 'o3c_e', conditions: { 's1': ['size:small'] },
        resultText: '小さな風が吹くだけの谷。拍子抜けしながら先へ進む。', damage: 1, gold: 6 },
      { id: 'o3c_orig', conditions: { 's1': ['intense'], 's2': ['storm'], 's4': ['destroy'] },
        resultText: '嵐に打たれながら谷を這うように渡った。全身ずぶ濡れで、力を消耗した。', damage: 7, gold: 3 },
    ],
    defaultOutcome: {
      resultText: '文が歪んだ。谷の景色がねじれ、嵐なのか凪なのかわからない。世界の綻びに巻き込まれた。',
      damage: 8, gold: 0,
    },
    actionPoints: 3,
  },

};

// ============================
// バトルノード定義（2文構成・複数ターン）
// ============================

export const battleNodeDefs: Record<string, BattleNodeDef> = {
  // --- ボス: 門の守護者 ---
  node_boss: {
    id: 'node_boss',
    title: '門の守護者',
    nodeType: 'boss',
    enemyName: '呪いの番人',
    enemyHp: 12,
    actionPoints: 3,
    victoryGold: 10,

    // 敵の行動パターン（ターンごとにローテーション）
    enemyActions: [
      // ターン1: 呪いの炎
      {
        sentence: [
          { type: 'slot', slotId: 'e1' },
          { type: 'slot', slotId: 'e2' },
          { type: 'slot', slotId: 'e3' },
          { type: 'slot', slotId: 'e4' },
        ],
        slots: [
          { id: 'e1', category: 'modifier', word: { id: 'be1_1', text: '暗い', category: 'modifier', tags: ['dark', 'curse', 'threat:medium'] } },
          { id: 'e2', category: 'subject', word: { id: 'be1_2', text: '炎', category: 'subject', tags: ['fire', 'magic', 'threat:high'] } },
          { id: 'e3', category: 'object', word: { id: 'be1_3', text: '旅人', category: 'object', tags: ['player', 'human'] } },
          { id: 'e4', category: 'predicate', word: { id: 'be1_4', text: '焼き尽くす', category: 'predicate', tags: ['destroy', 'fire', 'combat'] } },
        ],
        outcomes: [
          // 複合条件
          { id: 'be1_e', conditions: { 'e1': ['broken'], 'e2': ['harmless'] },
            resultText: '壊れた蛍火が旅人に触れた。温かい。どこか懐かしい光だ。',
            playerDamage: -1, enemyDamage: 0 },
          // 単体条件（新規）
          { id: 'be1_f', conditions: { 'e4': ['illuminate'] },
            resultText: '炎が旅人を輝かせた。焼くのではなく、照らしている。呪いの炎が祝福に変わった。',
            playerDamage: -2, enemyDamage: 1 },
          { id: 'be1_g', conditions: { 'e1': ['broken'] },
            resultText: '壊れた炎。燃えているのに火力がない。煤が少し付いた程度だ。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_h', conditions: { 'e2': ['wind'] },
            resultText: '風が旅人を焼き尽くす——焼けない。風は熱を持たない。涼しいだけだ。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_i', conditions: { 'e1': ['gentle'] },
            resultText: '優しい炎が旅人を包む。暖炉の前にいるような温かさだ。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_j', conditions: { 'e4': ['guard'] },
            resultText: '炎が旅人を守っている。番人の攻撃が防がれた。炎が裏切ったのだ。',
            playerDamage: 0, enemyDamage: 2 },
          { id: 'be1_k', conditions: { 'e4': ['vanish'] },
            resultText: '炎が旅人の前で消え去った。番人が驚いている。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_l', conditions: { 'e2': ['animal', 'small'] },
            resultText: '子猫が旅人を焼き尽くす。……もちろん焼けない。子猫は旅人の足元で丸くなった。',
            playerDamage: 0, enemyDamage: 0 },
          // 単体条件（既存）
          { id: 'be1_a', conditions: { 'e2': ['harmless'] },
            resultText: '炎の正体は蛍火だった。光が散って消える。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_b', conditions: { 'e4': ['retreat'] },
            resultText: '炎は旅人を避け、虚空へ消えた。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be1_c', conditions: { 'e1': ['weaken'] },
            resultText: '炎の勢いは弱い。肌がわずかに熱い程度だ。', playerDamage: 1, enemyDamage: 0 },
          { id: 'be1_d', conditions: { 'e4': ['safe'] },
            resultText: '炎は旅人を包んだが、温かいだけだった。', playerDamage: 0, enemyDamage: 0 },
        ],
        defaultOutcome: {
          resultText: '暗い炎が旅人を包む。呪いの熱が体を蝕んだ。',
          playerDamage: 4, enemyDamage: 0,
        },
      },
      // ターン2: 鎖の束縛
      {
        sentence: [
          { type: 'slot', slotId: 'e1' },
          { type: 'slot', slotId: 'e2' },
          { type: 'slot', slotId: 'e3' },
          { type: 'slot', slotId: 'e4' },
        ],
        slots: [
          { id: 'e1', category: 'modifier', word: { id: 'be2_1', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
          { id: 'e2', category: 'subject', word: { id: 'be2_2', text: '鎖', category: 'subject', tags: ['metal', 'bind', 'threat:medium'] } },
          { id: 'e3', category: 'object', word: { id: 'be2_3', text: '旅人', category: 'object', tags: ['player', 'human'] } },
          { id: 'e4', category: 'predicate', word: { id: 'be2_4', text: '縛りつける', category: 'predicate', tags: ['bind', 'block', 'combat'] } },
        ],
        outcomes: [
          // 複合条件
          { id: 'be2_e', conditions: { 'e1': ['broken'], 'e4': ['retreat'] },
            resultText: '壊れた鎖がほどけながら退いていった。番人の顔に焦りが見える。',
            playerDamage: 0, enemyDamage: 1 },
          // 単体条件（新規）
          { id: 'be2_f', conditions: { 'e4': ['illuminate'] },
            resultText: '鎖が旅人を輝かせた。縛るのではなく、飾っている。光る鎖は首飾りのようだ。',
            playerDamage: -1, enemyDamage: 1 },
          { id: 'be2_g', conditions: { 'e1': ['broken'] },
            resultText: '壊れた鎖は脆い。力を入れるまでもなく砕けた。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_h', conditions: { 'e2': ['wind'] },
            resultText: '風が旅人を縛りつける。風に実体はない。すり抜けた。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_i', conditions: { 'e4': ['guard'] },
            resultText: '鎖が旅人を守っている。番人の次の攻撃を鎖が防いだ。味方になったらしい。',
            playerDamage: 0, enemyDamage: 2 },
          { id: 'be2_j', conditions: { 'e4': ['vanish'] },
            resultText: '鎖が旅人に届く直前で消え去った。金属音だけが残った。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_k', conditions: { 'e1': ['gentle'] },
            resultText: '優しい鎖。絹のように柔らかく、するりとほどけた。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_l', conditions: { 'e2': ['animal', 'small'] },
            resultText: '子猫が旅人を縛りつける。前足でじゃれているだけだ。',
            playerDamage: 0, enemyDamage: 0 },
          // 単体条件（既存）
          { id: 'be2_a', conditions: { 'e2': ['harmless'] },
            resultText: '鎖は紙のように脆かった。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_b', conditions: { 'e4': ['retreat'] },
            resultText: '鎖が旅人に届く前にほどけて落ちた。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be2_c', conditions: { 'e1': ['weaken'] },
            resultText: '鎖は弱く、すぐに振りほどけた。', playerDamage: 1, enemyDamage: 0 },
          { id: 'be2_d', conditions: { 'e1': ['size:small'] },
            resultText: '小さな鎖が足首に絡む。少し動きづらいが問題ない。', playerDamage: 1, enemyDamage: 0 },
        ],
        defaultOutcome: {
          resultText: '鋭い鎖が旅人の体に食い込む。動くたびに痛みが走る。',
          playerDamage: 3, enemyDamage: 0,
        },
      },
      // ターン3: 沈黙の叫び
      {
        sentence: [
          { type: 'slot', slotId: 'e1' },
          { type: 'slot', slotId: 'e2' },
          { type: 'slot', slotId: 'e3' },
          { type: 'slot', slotId: 'e4' },
        ],
        slots: [
          { id: 'e1', category: 'modifier', word: { id: 'be3_1', text: '恐ろしい', category: 'modifier', tags: ['fear', 'curse', 'threat:high'] } },
          { id: 'e2', category: 'subject', word: { id: 'be3_2', text: '叫び', category: 'subject', tags: ['sound', 'magic', 'threat:high'] } },
          { id: 'e3', category: 'object', word: { id: 'be3_3', text: '旅人', category: 'object', tags: ['player', 'human'] } },
          { id: 'e4', category: 'predicate', word: { id: 'be3_4', text: '打ちのめす', category: 'predicate', tags: ['destroy', 'combat', 'stun'] } },
        ],
        outcomes: [
          // 複合条件
          { id: 'be3_e', conditions: { 'e1': ['broken'], 'e4': ['retreat'] },
            resultText: '壊れた叫びが虚空に退いていった。かすれた声が遠ざかる。',
            playerDamage: 0, enemyDamage: 1 },
          // 単体条件（新規）
          { id: 'be3_f', conditions: { 'e4': ['illuminate'] },
            resultText: '叫びが旅人を輝かせた。声が光に変わる。体が温かくなり、力が湧いてきた。',
            playerDamage: -2, enemyDamage: 2 },
          { id: 'be3_g', conditions: { 'e1': ['broken'] },
            resultText: '壊れた叫び。声にならない声が空気を震わせたが、それだけだ。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be3_h', conditions: { 'e2': ['wind'] },
            resultText: '風が旅人を打ちのめす。強い向かい風だ。踏ん張れば耐えられる。',
            playerDamage: 1, enemyDamage: 0 },
          { id: 'be3_i', conditions: { 'e4': ['guard'] },
            resultText: '叫びが旅人を守っている。番人の呪いが反転した。声の盾が次の攻撃を防ぐ。',
            playerDamage: 0, enemyDamage: 2 },
          { id: 'be3_j', conditions: { 'e4': ['vanish'] },
            resultText: '叫びが消え去った。番人は口を開いたが、声は出なかった。',
            playerDamage: 0, enemyDamage: 0 },
          { id: 'be3_k', conditions: { 'e2': ['animal', 'small'] },
            resultText: '子猫が旅人を打ちのめす。にゃあ、と鳴いた。心は打ちのめされた。可愛すぎて。',
            playerDamage: 0, enemyDamage: 0 },
          // 単体条件（既存）
          { id: 'be3_a', conditions: { 'e2': ['harmless'] },
            resultText: '叫びは子守唄のように穏やかだった。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be3_b', conditions: { 'e1': ['gentle'] },
            resultText: '番人の声は優しく響く。敵意は感じられない。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be3_c', conditions: { 'e4': ['retreat'] },
            resultText: '叫びは虚空に吸い込まれて消えた。', playerDamage: 0, enemyDamage: 0 },
          { id: 'be3_d', conditions: { 'e1': ['weaken'] },
            resultText: '弱々しい叫びが耳をかすめた。少し頭が痛む程度だ。', playerDamage: 1, enemyDamage: 0 },
        ],
        defaultOutcome: {
          resultText: '恐ろしい叫びが体の芯を震わせる。意識が一瞬遠のいた。',
          playerDamage: 5, enemyDamage: 0,
        },
      },
    ],

    // プレイヤーの行動文（毎ターンリセット）
    // [修飾語][主語]が [対象語]を [述語]
    playerAction: {
      sentence: [
        { type: 'slot', slotId: 'p1' },
        { type: 'slot', slotId: 'p2' },
        { type: 'slot', slotId: 'p3' },
        { type: 'slot', slotId: 'p4' },
      ],
      slots: [
        { id: 'p1', category: 'modifier', word: { id: 'bp_1', text: '鈍い', category: 'modifier', tags: ['weak', 'dull'] } },
        { id: 'p2', category: 'subject', word: { id: 'bp_2', text: '光', category: 'subject', tags: ['light', 'magic'] } },
        { id: 'p3', category: 'object', word: { id: 'bp_3', text: '番人', category: 'object', tags: ['enemy', 'guardian'] } },
        { id: 'p4', category: 'predicate', word: { id: 'bp_4', text: '照らしている', category: 'predicate', tags: ['illuminate', 'weak_attack'] } },
      ],
      outcomes: [
        // 複合条件
        { id: 'bp_f', conditions: { 'p1': ['fire'], 'p4': ['destroy'] },
          resultText: '燃え盛る光が番人を焼き砕いた。呪いの体が炎と瓦礫に変わる。',
          playerDamage: 0, enemyDamage: 7 },
        { id: 'bp_g', conditions: { 'p2': ['dragon'], 'p4': ['destroy'] },
          resultText: '竜が番人を砕いた。竜の顎が呪いの鎧を噛み砕く。凄まじい一撃。',
          playerDamage: 0, enemyDamage: 8 },
        { id: 'bp_h', conditions: { 'p1': ['intense'], 'p4': ['combat'] },
          resultText: '激しい光が番人を打つ。呪いの体が大きく揺らぐ。',
          playerDamage: 0, enemyDamage: 5 },
        { id: 'bp_i', conditions: { 'p2': ['dragon'], 'p4': ['combat'] },
          resultText: '竜が番人に襲いかかった。炎と爪の二重攻撃。',
          playerDamage: 0, enemyDamage: 6 },
        // 単体条件（新規）
        { id: 'bp_j', conditions: { 'p1': ['fire'] },
          resultText: '燃え盛る光が番人の呪いを焼いた。鎧に焦げ跡が走る。',
          playerDamage: 0, enemyDamage: 4 },
        { id: 'bp_k', conditions: { 'p2': ['dragon'] },
          resultText: '竜が番人を照らしている。竜の眼光に番人が怯んだ。',
          playerDamage: 0, enemyDamage: 4 },
        { id: 'bp_l', conditions: { 'p2': ['storm'] },
          resultText: '嵐が番人を照らしている。稲妻が番人を打つ。自然の怒りだ。',
          playerDamage: 0, enemyDamage: 4 },
        { id: 'bp_m', conditions: { 'p2': ['ice'] },
          resultText: '氷が番人を照らしている。凍気が番人の動きを鈍らせる。',
          playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_n', conditions: { 'p2': ['poison'] },
          resultText: '毒が番人を蝕んでいる。呪いの体に毒が侵食していく。',
          playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_o', conditions: { 'p1': ['sharp'] },
          resultText: '鋭い光が番人の鎧の隙間を貫いた。正確な一撃。',
          playerDamage: 0, enemyDamage: 4 },
        { id: 'bp_p', conditions: { 'p1': ['broken'] },
          resultText: '壊れた光が番人を照らす。光は弱々しいが、呪いに少しだけ罅が入った。',
          playerDamage: 0, enemyDamage: 1 },
        { id: 'bp_q', conditions: { 'p4': ['illuminate'] },
          resultText: '光が番人を輝かせた。聖なる光が呪いを浄化していく。',
          playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_r', conditions: { 'p4': ['guard'] },
          resultText: '光が番人を守っている。……敵を守ってどうする。番人は不思議そうな顔をしている。',
          playerDamage: 0, enemyDamage: 0 },
        { id: 'bp_s', conditions: { 'p4': ['flee'] },
          resultText: '光が番人から逃げていく。攻撃は失敗だ。番人がせせら笑った。',
          playerDamage: 0, enemyDamage: 0 },
        { id: 'bp_t', conditions: { 'p4': ['vanish'] },
          resultText: '光が番人の前で消え去った。不発。だが番人は一瞬怯んだ。',
          playerDamage: 0, enemyDamage: 1 },
        { id: 'bp_u', conditions: { 'p1': ['durable'] },
          resultText: '堅い光が番人を押した。光の壁が番人を後退させる。',
          playerDamage: 0, enemyDamage: 2 },
        { id: 'bp_v', conditions: { 'p2': ['wind'] },
          resultText: '風が番人を照らしている。風は光らないが、突風が番人を揺らした。',
          playerDamage: 0, enemyDamage: 2 },
        { id: 'bp_w', conditions: { 'p2': ['animal', 'small'] },
          resultText: '子猫が番人を照らしている。番人は困惑している。隙ができた。',
          playerDamage: 0, enemyDamage: 1 },
        // 単体条件（既存）
        { id: 'bp_a', conditions: { 'p4': ['destroy'] },
          resultText: '光が番人を貫いた。呪いの鎧に亀裂が走る。', playerDamage: 0, enemyDamage: 5 },
        { id: 'bp_b', conditions: { 'p4': ['combat'] },
          resultText: '光が番人を打った。呪いの体が揺らぐ。', playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_c', conditions: { 'p1': ['intense'] },
          resultText: '激しい光が番人の目を焼いた。', playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_d', conditions: { 'p1': ['threat:high'] },
          resultText: '強烈な光が番人を怯ませた。', playerDamage: 0, enemyDamage: 2 },
        { id: 'bp_e', conditions: { 'p2': ['threat:high'] },
          resultText: '旅人が呼び出したものが番人に襲いかかった。', playerDamage: 0, enemyDamage: 3 },
      ],
      defaultOutcome: {
        resultText: '鈍い光が番人を照らす。わずかに呪いが薄れた。',
        playerDamage: 0, enemyDamage: 1,
      },
    },
  },
};

// ============================
// ショップノード定義
// ============================

export const shopNodeDefs: Record<string, ShopNodeDef> = {
  node_shop: {
    id: 'node_shop',
    title: '旅商人',
    nodeType: 'shop',
    stock: [
      { type: 'word', card: { id: 'shop_1', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] }, price: 8 },
      { type: 'word', card: { id: 'shop_2', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] }, price: 6 },
      { type: 'word', card: { id: 'shop_3', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] }, price: 10 },
      { type: 'word', card: { id: 'shop_4', text: '砕く', category: 'predicate', tags: ['destroy', 'combat', 'force'] }, price: 8 },
      { type: 'word', card: { id: 'shop_5', text: '消え去る', category: 'predicate', tags: ['vanish', 'retreat', 'safe'] }, price: 6 },
    ],
    sellPricePerCard: 3,
  },
};

// ============================
// 宝箱ノード定義
// ============================

export const treasureNodeDefs: Record<string, TreasureNodeDef> = {
  node_treasure: {
    id: 'node_treasure',
    title: '朽ちた書架',
    nodeType: 'treasure',
    pickCount: 2,
    flavorText: '苔むした書架の隙間に、まだ読める頁が残っていた。言葉を拾い集める。',
    cardPool: [
      { id: 'tr_1', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] },
      { id: 'tr_2', text: '守る', category: 'predicate', tags: ['defend', 'guard', 'safe'] },
      { id: 'tr_3', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] },
      { id: 'tr_4', text: '穏やかに', category: 'adverb', tags: ['calm', 'gentle', 'peaceful'] },
      { id: 'tr_5', text: '壊れた', category: 'modifier', tags: ['broken', 'weaken', 'size:small'] },
      { id: 'tr_6', text: '輝く', category: 'predicate', tags: ['light', 'magic', 'illuminate'] },
    ],
  },
};

// ============================
// 永続カード定義
// ============================

export const persistentCards: WordCard[] = [
  {
    id: 'perm_quill', text: '魔法の羽根ペン', category: 'modifier',
    tags: ['magic', 'tool'],
    persistent: { description: '毎ノードAP+1', effect: { type: 'ap_bonus', amount: 1 } },
  },
  {
    id: 'perm_pouch', text: '底なしの袋', category: 'modifier',
    tags: ['magic', 'container'],
    persistent: { description: '手札上限+2', effect: { type: 'hand_limit', amount: 2 } },
  },
  {
    id: 'perm_coin', text: '幸運の硬貨', category: 'modifier',
    tags: ['gold', 'luck'],
    persistent: { description: '毎ノード+2G', effect: { type: 'gold_bonus', amount: 2 } },
  },
];

// ============================
// マップ定義（ショップ追加、5層に拡張）
// ============================

/**
 *          [node_1]              Row 0
 *          /      \
 *     [node_2a] [node_2b]        Row 1
 *      /    \      |    \
 * [node_3a][node_3b][node_3c]    Row 2
 *      \     |     /
 *       [node_shop]              Row 3 (ショップ)
 *           |
 *       [node_boss]              Row 4 (ボス)
 */
/**
 *              [node_1]                  Row 0
 *            /    |     \
 *     [node_2a] [treasure] [node_2b]     Row 1
 *      /    \      |       |    \
 * [node_3a][node_3b]  [node_3c]          Row 2
 *      \     |     /
 *       [node_shop]                      Row 3
 *           |
 *       [node_boss]                      Row 4
 */
export const mapNodes: MapNode[] = [
  { id: 'm_1',       nodeDefId: 'node_1',       row: 0, col: 1, nextIds: ['m_2a', 'm_tr', 'm_2b'], visited: false },
  { id: 'm_2a',      nodeDefId: 'node_2a',      row: 1, col: 0, nextIds: ['m_3a', 'm_3b'], visited: false },
  { id: 'm_tr',      nodeDefId: 'node_treasure', row: 1, col: 1, nextIds: ['m_3b'], visited: false },
  { id: 'm_2b',      nodeDefId: 'node_2b',      row: 1, col: 2, nextIds: ['m_3b', 'm_3c'], visited: false },
  { id: 'm_3a',      nodeDefId: 'node_3a',      row: 2, col: 0, nextIds: ['m_shop'], visited: false },
  { id: 'm_3b',      nodeDefId: 'node_3b',      row: 2, col: 1, nextIds: ['m_shop'], visited: false },
  { id: 'm_3c',      nodeDefId: 'node_3c',      row: 2, col: 2, nextIds: ['m_shop'], visited: false },
  { id: 'm_shop',    nodeDefId: 'node_shop',    row: 3, col: 1, nextIds: ['m_boss'], visited: false },
  { id: 'm_boss',    nodeDefId: 'node_boss',    row: 4, col: 1, nextIds: [], visited: false },
];
