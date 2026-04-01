import type { NodeDef, WordCard, MapNode } from '../engine/types';

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
      // 修飾語を「小さな」に
      { id: 'o1_a', conditions: { 's1': ['size:small'] },
        resultText: '小さな岩を難なく跨ぎ、道の先へ進んだ。', damage: 0, gold: 5 },
      // 主語を無害なものに
      { id: 'o1_b', conditions: { 's2': ['harmless'] },
        resultText: '道を塞ぐものは何の脅威でもなかった。悠々と通り過ぎる。', damage: 0, gold: 5 },
      // 述語を「逃げていく」系に
      { id: 'o1_c', conditions: { 's4': ['retreat'] },
        resultText: '岩がひとりでに転がり去った。道が開ける。', damage: 0, gold: 5 },
      // 修飾語を「優しい」に（岩には不自然だが成功）
      { id: 'o1_d', conditions: { 's1': ['gentle'] },
        resultText: '岩の角が丸くなり、脇を楽に通れるようになった。', damage: 1, gold: 3 },
    ],
    defaultOutcome: {
      resultText: '岩はびくともしない。傷つきながらも、なんとか隙間を通り抜けた。',
      damage: 3, gold: 2,
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
    ],
    defaultOutcome: {
      resultText: '凍てつく川を前に立ち尽くす。意を決して氷の上を滑りながら渡った。',
      damage: 4, gold: 2,
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
    ],
    defaultOutcome: {
      resultText: '番兵は槍を構え、通行を拒む。押し問答の末、傷を負いながら橋を渡った。',
      damage: 5, gold: 2,
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
    ],
    defaultOutcome: {
      resultText: '毒気に当てられながらも、意識を保って沼を横断した。体が重い。',
      damage: 5, gold: 2,
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
      { id: 'o3b_a', conditions: {},
        resultText: '泉のほとりでしばし休息を取った。水の音が心を落ち着かせる。', damage: -5, gold: 0 },
    ],
    defaultOutcome: {
      resultText: '泉のほとりでしばし休息を取った。水の音が心を落ち着かせる。',
      damage: -5, gold: 0, // 負のダメージ = 回復
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
      { id: 'o3c_a', conditions: { 's1': ['weaken'], 's4': ['retreat'] },
        resultText: '弱い風が谷から去っていった。道は静かだ。', damage: 0, gold: 8 },
      { id: 'o3c_b', conditions: { 's2': ['harmless'] },
        resultText: '谷を吹き抜けるのは嵐ではなく、穏やかなそよ風だった。', damage: 0, gold: 7 },
      { id: 'o3c_c', conditions: { 's4': ['retreat'] },
        resultText: '嵐は谷から去っていった。乾いた風だけが残っている。', damage: 1, gold: 6 },
      { id: 'o3c_d', conditions: { 's1': ['weaken'] },
        resultText: '嵐の勢いは弱い。風の合間を縫って谷を渡った。', damage: 2, gold: 5 },
      { id: 'o3c_e', conditions: { 's1': ['size:small'] },
        resultText: '小さな風が吹くだけの谷。拍子抜けしながら先へ進む。', damage: 1, gold: 6 },
    ],
    defaultOutcome: {
      resultText: '嵐に打たれながら谷を這うように渡った。全身ずぶ濡れで、力を消耗した。',
      damage: 7, gold: 3,
    },
    actionPoints: 3,
  },

  // --- ボス: 沈黙の門 ---
  node_boss: {
    id: 'node_boss',
    title: '沈黙の門',
    nodeType: 'boss',
    // [修飾語][主語]が [対象語]を [述語]
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'wb_1', text: '古い', category: 'modifier', tags: ['old', 'ancient', 'curse'] } },
      { id: 's2', category: 'subject', word: { id: 'wb_2', text: '呪い', category: 'subject', tags: ['curse', 'magic', 'threat:high'] } },
      { id: 's3', category: 'object', word: { id: 'wb_3', text: '門', category: 'object', tags: ['gate', 'structure', 'path'] } },
      { id: 's4', category: 'predicate', word: { id: 'wb_4', text: '封じている', category: 'predicate', tags: ['seal', 'block', 'obstacle'] } },
    ],
    outcomes: [
      // 複合: 主語＋述語を両方変更（最高評価）
      { id: 'ob_a', conditions: { 's2': ['harmless'], 's4': ['safe'] },
        resultText: '呪いも封印も、もはやここにはない。門はただそこに立っている。手で押すと、静かに開いた。', damage: 0, gold: 10 },
      // 主語を無害化
      { id: 'ob_b', conditions: { 's2': ['harmless'] },
        resultText: '呪いの正体は見かけ倒しだった。門に触れると、封印は霧のように消えた。', damage: 2, gold: 7 },
      // 述語を退却系に
      { id: 'ob_c', conditions: { 's4': ['retreat'] },
        resultText: '封印が自ら解け、遠くへ去っていく。門の向こうに光が差す。', damage: 2, gold: 7 },
      // 修飾語を弱化系に
      { id: 'ob_d', conditions: { 's1': ['weaken'] },
        resultText: '呪いの力は弱い。門の封印に手をかけると、脆く崩れた。', damage: 3, gold: 5 },
      // 述語を「守っている」にした場合 → 逆効果！
      { id: 'ob_e', conditions: { 's4': ['guard'] },
        resultText: '呪いが門を守護し始めた。封印はさらに固くなる。書き換えが裏目に出た。', damage: 8, gold: 1 },
    ],
    defaultOutcome: {
      resultText: '門はびくともしない。だが壁の一部に古い亀裂を見つけ、そこから向こう側へ抜けた。',
      damage: 6, gold: 2,
    },
    actionPoints: 4, // ボスは多め
  },
};

// ============================
// マップ定義
// ============================

export const mapNodes: MapNode[] = [
  { id: 'm_1',    nodeDefId: 'node_1',    row: 0, col: 1, nextIds: ['m_2a', 'm_2b'], visited: false },
  { id: 'm_2a',   nodeDefId: 'node_2a',   row: 1, col: 0, nextIds: ['m_3a', 'm_3b'], visited: false },
  { id: 'm_2b',   nodeDefId: 'node_2b',   row: 1, col: 2, nextIds: ['m_3b', 'm_3c'], visited: false },
  { id: 'm_3a',   nodeDefId: 'node_3a',   row: 2, col: 0, nextIds: ['m_boss'], visited: false },
  { id: 'm_3b',   nodeDefId: 'node_3b',   row: 2, col: 1, nextIds: ['m_boss'], visited: false },
  { id: 'm_3c',   nodeDefId: 'node_3c',   row: 2, col: 2, nextIds: ['m_boss'], visited: false },
  { id: 'm_boss', nodeDefId: 'node_boss', row: 3, col: 1, nextIds: [], visited: false },
];
