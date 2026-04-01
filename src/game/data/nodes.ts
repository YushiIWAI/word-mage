import type { NodeDef, WordCard, MapNode } from '../engine/types';

/** プロトタイプ用：最初の手札 */
export const initialHand: WordCard[] = [
  { id: 'h1', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] },
  { id: 'h2', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] },
  { id: 'h3', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] },
  { id: 'h4', text: '逃げていく', category: 'predicate', tags: ['flee', 'retreat', 'safe'] },
  { id: 'h5', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] },
];

/** ノード定義 */
export const nodeDefs: Record<string, NodeDef> = {
  // --- ノード1: チュートリアル ---
  node_1: {
    id: 'node_1',
    title: '森の入り口',
    nodeType: 'puzzle',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'particle', text: 'を' },
      { type: 'slot', slotId: 's4' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w1_1', text: '大きな', category: 'modifier', tags: ['size:large', 'heavy'] } },
      { id: 's2', category: 'subject', word: { id: 'w1_2', text: '岩', category: 'subject', tags: ['stone', 'obstacle', 'heavy'] } },
      { id: 's3', category: 'object', word: { id: 'w1_3', text: '道', category: 'object', tags: ['path', 'route'] } },
      { id: 's4', category: 'predicate', word: { id: 'w1_4', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'o1_1', conditions: { 's1': ['size:small'] }, resultText: '小さな岩を難なく跨ぎ、道の先へ進んだ。' },
      { id: 'o1_2', conditions: { 's2': ['harmless'] }, resultText: '道を塞ぐものは何の脅威でもなかった。悠々と通り過ぎる。' },
      { id: 'o1_3', conditions: { 's4': ['retreat'] }, resultText: '岩がひとりでに転がり去った。道が開ける。' },
    ],
    defaultOutcome: { resultText: '岩はびくともしない。傷つきながらも、なんとか隙間を通り抜けた。' },
    actionPoints: 3,
  },

  // --- ノード2A: 凍った川（上ルート） ---
  node_2a: {
    id: 'node_2a',
    title: '凍った川',
    nodeType: 'puzzle',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'particle', text: 'を' },
      { type: 'slot', slotId: 's4' },
      { type: 'slot', slotId: 's5' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w2a_1', text: '冷たい', category: 'modifier', tags: ['cold', 'ice', 'harsh'] } },
      { id: 's2', category: 'subject', word: { id: 'w2a_2', text: '氷', category: 'subject', tags: ['ice', 'frozen', 'obstacle'] } },
      { id: 's3', category: 'object', word: { id: 'w2a_3', text: '川', category: 'object', tags: ['water', 'path', 'nature'] } },
      { id: 's4', category: 'adverb', word: { id: 'w2a_4', text: '完全に', category: 'adverb', tags: ['total', 'amplify'] } },
      { id: 's5', category: 'predicate', word: { id: 'w2a_5', text: '閉ざしている', category: 'predicate', tags: ['block', 'seal', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'o2a_1', conditions: { 's1': ['gentle'] }, resultText: '優しい温もりが氷を溶かし、川は穏やかな流れを取り戻した。' },
      { id: 'o2a_2', conditions: { 's4': ['weaken'] }, resultText: '封じる力が弱まり、氷に細い亀裂が走る。その隙間を渡った。' },
      { id: 'o2a_3', conditions: { 's5': ['safe'] }, resultText: '氷は道を閉ざすのをやめ、凍った橋のように横たわっている。その上を歩いて渡った。' },
      { id: 'o2a_4', conditions: { 's2': ['small'] }, resultText: '大した氷ではなかった。踏み砕いて先へ進む。' },
    ],
    defaultOutcome: { resultText: '凍てつく川を前に立ち尽くす。意を決して氷の上を滑りながら渡った。' },
    actionPoints: 3,
  },

  // --- ノード2B: 橋の番人（下ルート） ---
  node_2b: {
    id: 'node_2b',
    title: '橋の番人',
    nodeType: 'puzzle',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'particle', text: '槍を持って' },
      { type: 'slot', slotId: 's4' },
      { type: 'particle', text: 'を' },
      { type: 'slot', slotId: 's5' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w2b_1', text: '屈強な', category: 'modifier', tags: ['strong', 'powerful', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w2b_2', text: '番兵', category: 'subject', tags: ['human', 'guard', 'threat:medium'] } },
      { id: 's3', category: 'modifier', word: { id: 'w2b_3', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      { id: 's4', category: 'object', word: { id: 'w2b_4', text: '橋', category: 'object', tags: ['structure', 'path'] } },
      { id: 's5', category: 'predicate', word: { id: 'w2b_5', text: '守っている', category: 'predicate', tags: ['guard', 'block', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'o2b_1', conditions: { 's1': ['weaken'] }, resultText: '番兵に覇気はなく、こちらを一瞥しただけで道を譲った。' },
      { id: 'o2b_2', conditions: { 's2': ['harmless'] }, resultText: '橋の上に佇む小さな影。脅威ではなかった。' },
      { id: 'o2b_3', conditions: { 's5': ['retreat'] }, resultText: '番兵は槍を収め、静かに立ち去った。橋は無人になる。' },
      { id: 'o2b_4', conditions: { 's5': ['safe'] }, resultText: '番兵は不思議とこちらを通してくれた。' },
      { id: 'o2b_5', conditions: { 's3': ['gentle'] }, resultText: '番兵の手にあるのは槍ではなく、何か穏やかなもの。敵意は感じられない。' },
    ],
    defaultOutcome: { resultText: '番兵は槍を構え、通行を拒む。押し問答の末、傷を負いながら橋を渡った。' },
    actionPoints: 3,
  },

  // --- ノード3A: 毒の沼（上ルート） ---
  node_3a: {
    id: 'node_3a',
    title: '毒の沼',
    nodeType: 'puzzle',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
      { type: 'particle', text: 'に' },
      { type: 'slot', slotId: 's5' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3a_1', text: '深い', category: 'modifier', tags: ['deep', 'amplify', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w3a_2', text: '毒', category: 'subject', tags: ['poison', 'danger', 'threat:high'] } },
      { id: 's3', category: 'modifier', word: { id: 'w3a_3', text: '広大な', category: 'modifier', tags: ['size:large', 'vast'] } },
      { id: 's4', category: 'object', word: { id: 'w3a_4', text: '沼', category: 'object', tags: ['water', 'terrain', 'obstacle'] } },
      { id: 's5', category: 'predicate', word: { id: 'w3a_5', text: '淀んでいる', category: 'predicate', tags: ['stagnant', 'block', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'o3a_1', conditions: { 's2': ['harmless'] }, resultText: '沼にいるのは毒ではなく、無害な生き物だった。足元に気をつけて通る。' },
      { id: 'o3a_2', conditions: { 's1': ['size:small'] }, resultText: '毒は浅い。裾を持ち上げれば通れる程度だ。' },
      { id: 'o3a_3', conditions: { 's5': ['retreat'] }, resultText: '毒の水がざわめきながら退いていく。乾いた道が姿を現した。' },
      { id: 'o3a_4', conditions: { 's5': ['calm'] }, resultText: '沼は静まり返り、毒の気配が薄れた。息を止めて駆け抜けた。' },
      { id: 'o3a_5', conditions: { 's3': ['size:small'] }, resultText: '沼は思ったより小さい。一跨ぎで向こう岸に渡った。' },
    ],
    defaultOutcome: { resultText: '毒気に当てられながらも、意識を保って沼を横断した。体が重い。' },
    actionPoints: 3,
  },

  // --- ノード3B: 言葉の泉（中ルート・休憩） ---
  node_3b: {
    id: 'node_3b',
    title: '言葉の泉',
    nodeType: 'rest',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'particle', text: 'から' },
      { type: 'slot', slotId: 's4' },
      { type: 'slot', slotId: 's5' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3b_1', text: '透き通った', category: 'modifier', tags: ['clear', 'pure', 'positive'] } },
      { id: 's2', category: 'subject', word: { id: 'w3b_2', text: '水', category: 'subject', tags: ['water', 'nature', 'harmless'] } },
      { id: 's3', category: 'object', word: { id: 'w3b_3', text: '泉', category: 'object', tags: ['water', 'nature', 'source'] } },
      { id: 's4', category: 'adverb', word: { id: 'w3b_4', text: '穏やかに', category: 'adverb', tags: ['calm', 'gentle', 'peaceful'] } },
      { id: 's5', category: 'predicate', word: { id: 'w3b_5', text: '湧いている', category: 'predicate', tags: ['flow', 'create', 'safe'] } },
    ],
    outcomes: [
      { id: 'o3b_1', conditions: {}, resultText: '泉のほとりで手を休める。水面に映る言葉たちが、手札に新たな力を与えてくれた。' },
    ],
    defaultOutcome: { resultText: '泉のほとりでしばし休息を取った。水の音が心を落ち着かせる。' },
    actionPoints: 3,
  },

  // --- ノード3C: 嵐の谷（下ルート） ---
  node_3c: {
    id: 'node_3c',
    title: '嵐の谷',
    nodeType: 'puzzle',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'particle', text: 'を' },
      { type: 'slot', slotId: 's4' },
      { type: 'slot', slotId: 's5' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3c_1', text: '激しい', category: 'modifier', tags: ['intense', 'amplify', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w3c_2', text: '嵐', category: 'subject', tags: ['storm', 'wind', 'nature', 'threat:high'] } },
      { id: 's3', category: 'object', word: { id: 'w3c_3', text: '谷', category: 'object', tags: ['terrain', 'path', 'deep'] } },
      { id: 's4', category: 'adverb', word: { id: 'w3c_4', text: '容赦なく', category: 'adverb', tags: ['intense', 'amplify', 'cruel'] } },
      { id: 's5', category: 'predicate', word: { id: 'w3c_5', text: '引き裂いている', category: 'predicate', tags: ['destroy', 'combat', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'o3c_1', conditions: { 's1': ['weaken'] }, resultText: '嵐の勢いは弱い。風の合間を縫って谷を渡った。' },
      { id: 'o3c_2', conditions: { 's2': ['harmless'] }, resultText: '谷を吹き抜けるのは嵐ではなく、穏やかなそよ風だった。' },
      { id: 'o3c_3', conditions: { 's4': ['calm'] }, resultText: '嵐は静まり、谷は不思議な静寂に包まれた。足早に通り抜ける。' },
      { id: 'o3c_4', conditions: { 's5': ['retreat'] }, resultText: '嵐は谷から去っていった。乾いた風だけが残っている。' },
      { id: 'o3c_5', conditions: { 's1': ['size:small'] }, resultText: '小さな風が吹くだけの谷。拍子抜けしながら先へ進む。' },
    ],
    defaultOutcome: { resultText: '嵐に打たれながら谷を這うように渡った。全身ずぶ濡れで、力を消耗した。' },
    actionPoints: 3,
  },

  // --- ノード4（ボス）: 沈黙の門 ---
  node_boss: {
    id: 'node_boss',
    title: '沈黙の門',
    nodeType: 'boss',
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'particle', text: 'が' },
      { type: 'slot', slotId: 's3' },
      { type: 'slot', slotId: 's4' },
      { type: 'particle', text: 'を' },
      { type: 'slot', slotId: 's5' },
      { type: 'slot', slotId: 's6' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'wb_1', text: '古い', category: 'modifier', tags: ['old', 'ancient', 'curse'] } },
      { id: 's2', category: 'subject', word: { id: 'wb_2', text: '呪い', category: 'subject', tags: ['curse', 'magic', 'threat:high'] } },
      { id: 's3', category: 'modifier', word: { id: 'wb_3', text: '堅固な', category: 'modifier', tags: ['strong', 'durable', 'hard'] } },
      { id: 's4', category: 'object', word: { id: 'wb_4', text: '門', category: 'object', tags: ['gate', 'structure', 'path'] } },
      { id: 's5', category: 'adverb', word: { id: 'wb_5', text: '永遠に', category: 'adverb', tags: ['eternal', 'amplify', 'absolute'] } },
      { id: 's6', category: 'predicate', word: { id: 'wb_6', text: '封じている', category: 'predicate', tags: ['seal', 'block', 'obstacle'] } },
    ],
    outcomes: [
      { id: 'ob_1', conditions: { 's2': ['harmless'], 's6': ['safe'] }, resultText: '呪いも封印も、もはやここにはない。門はただそこに立っている。手で押すと、静かに開いた。' },
      { id: 'ob_2', conditions: { 's1': ['weaken'], 's5': ['weaken'] }, resultText: '弱々しい呪いが、束の間だけ門を封じていた。やがてほどけ、門が軋みながら開く。' },
      { id: 'ob_3', conditions: { 's2': ['harmless'] }, resultText: '呪いの正体は見かけ倒しだった。門に触れると、封印は霧のように消えた。' },
      { id: 'ob_4', conditions: { 's6': ['retreat'] }, resultText: '封印が自ら解け、遠くへ去っていく。門の向こうに光が差す。' },
      { id: 'ob_5', conditions: { 's5': ['calm'] }, resultText: '永遠であったはずの呪いは静まり、門に薄い隙間が生まれた。身を滑り込ませる。' },
    ],
    defaultOutcome: { resultText: '門はびくともしない。だが壁の一部に古い亀裂を見つけ、そこから向こう側へ抜けた。' },
    actionPoints: 3,
  },
};

/**
 * プロトタイプ用マップ（分岐あり）
 *
 *          [node_1]           Row 0 (start)
 *          /      \
 *     [node_2a] [node_2b]     Row 1 (2択)
 *      /    \      |    \
 * [node_3a][node_3b][node_3c] Row 2 (3択)
 *      \     |     /
 *       [node_boss]           Row 3 (boss)
 */
export const mapNodes: MapNode[] = [
  { id: 'm_1',    nodeDefId: 'node_1',    row: 0, col: 1, nextIds: ['m_2a', 'm_2b'], visited: false },
  { id: 'm_2a',   nodeDefId: 'node_2a',   row: 1, col: 0, nextIds: ['m_3a', 'm_3b'], visited: false },
  { id: 'm_2b',   nodeDefId: 'node_2b',   row: 1, col: 2, nextIds: ['m_3b', 'm_3c'], visited: false },
  { id: 'm_3a',   nodeDefId: 'node_3a',   row: 2, col: 0, nextIds: ['m_boss'], visited: false },
  { id: 'm_3b',   nodeDefId: 'node_3b',   row: 2, col: 1, nextIds: ['m_boss'], visited: false },
  { id: 'm_3c',   nodeDefId: 'node_3c',   row: 2, col: 2, nextIds: ['m_boss'], visited: false },
  { id: 'm_boss', nodeDefId: 'node_boss', row: 3, col: 1, nextIds: [], visited: false },
];
