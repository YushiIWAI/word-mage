import type { NodeDef, WordCard } from '../engine/types';

/** プロトタイプ用：最初の手札 */
export const initialHand: WordCard[] = [
  { id: 'h1', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] },
  { id: 'h2', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] },
  { id: 'h3', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] },
  { id: 'h4', text: '逃げていく', category: 'predicate', tags: ['flee', 'retreat', 'safe'] },
  { id: 'h5', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] },
];

/** プロトタイプ用ノード定義（5ノード） */
export const nodes: NodeDef[] = [
  // --- ノード1: チュートリアル（障害排除・一択） ---
  {
    id: 'node_1',
    title: '森の入り口',
    displayText: '大きな岩が 道を 塞いでいる',
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w1_1', text: '大きな', category: 'modifier', tags: ['size:large', 'heavy'] } },
      { id: 's2', category: 'subject', word: { id: 'w1_2', text: '岩', category: 'subject', tags: ['stone', 'obstacle', 'heavy'] } },
      { id: 's3', category: 'object', word: { id: 'w1_3', text: '道', category: 'object', tags: ['path', 'route'] } },
      { id: 's4', category: 'predicate', word: { id: 'w1_4', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] } },
    ],
    outcomes: [
      {
        id: 'o1_1',
        conditions: { 's1': ['size:small'] },
        resultText: '小さな岩を難なく跨ぎ、道の先へ進んだ。',
      },
      {
        id: 'o1_2',
        conditions: { 's2': ['harmless'] },
        resultText: '道を塞ぐものは何の脅威でもなかった。悠々と通り過ぎる。',
      },
      {
        id: 'o1_3',
        conditions: { 's4': ['retreat'] },
        resultText: '岩がひとりでに転がり去った。道が開ける。',
      },
    ],
    defaultOutcome: {
      resultText: '岩はびくともしない。傷つきながらも、なんとか隙間を通り抜けた。',
    },
    actionPoints: 3,
  },

  // --- ノード2: 二択パズル ---
  {
    id: 'node_2',
    title: '凍った川',
    displayText: '冷たい氷が 川を 完全に 閉ざしている',
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w2_1', text: '冷たい', category: 'modifier', tags: ['cold', 'ice', 'harsh'] } },
      { id: 's2', category: 'subject', word: { id: 'w2_2', text: '氷', category: 'subject', tags: ['ice', 'frozen', 'obstacle'] } },
      { id: 's3', category: 'object', word: { id: 'w2_3', text: '川', category: 'object', tags: ['water', 'path', 'nature'] } },
      { id: 's4', category: 'adverb', word: { id: 'w2_4', text: '完全に', category: 'adverb', tags: ['total', 'amplify'] } },
      { id: 's5', category: 'predicate', word: { id: 'w2_5', text: '閉ざしている', category: 'predicate', tags: ['block', 'seal', 'obstacle'] } },
    ],
    outcomes: [
      {
        id: 'o2_1',
        conditions: { 's1': ['gentle'] },
        resultText: '優しい温もりが氷を溶かし、川は穏やかな流れを取り戻した。',
      },
      {
        id: 'o2_2',
        conditions: { 's4': ['weaken'] },
        resultText: '封じる力が弱まり、氷に細い亀裂が走る。その隙間を渡った。',
      },
      {
        id: 'o2_3',
        conditions: { 's5': ['safe'] },
        resultText: '氷は道を閉ざすのをやめ、凍った橋のように横たわっている。その上を歩いて渡った。',
      },
      {
        id: 'o2_4',
        conditions: { 's2': ['small'] },
        resultText: '大した氷ではなかった。踏み砕いて先へ進む。',
      },
    ],
    defaultOutcome: {
      resultText: '凍てつく川を前に立ち尽くす。意を決して氷の上を滑りながら渡った。',
    },
    actionPoints: 3,
  },

  // --- ノード3: NPC交渉型 ---
  {
    id: 'node_3',
    title: '橋の番人',
    displayText: '屈強な番兵が 鋭い槍を持って 橋を 守っている',
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w3_1', text: '屈強な', category: 'modifier', tags: ['strong', 'powerful', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w3_2', text: '番兵', category: 'subject', tags: ['human', 'guard', 'threat:medium'] } },
      { id: 's3', category: 'modifier', word: { id: 'w3_3', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      { id: 's4', category: 'object', word: { id: 'w3_4', text: '橋', category: 'object', tags: ['structure', 'path'] } },
      { id: 's5', category: 'predicate', word: { id: 'w3_5', text: '守っている', category: 'predicate', tags: ['guard', 'block', 'obstacle'] } },
    ],
    outcomes: [
      {
        id: 'o3_1',
        conditions: { 's1': ['weaken'] },
        resultText: '番兵に覇気はなく、こちらを一瞥しただけで道を譲った。',
      },
      {
        id: 'o3_2',
        conditions: { 's2': ['harmless'] },
        resultText: '橋の上に佇む小さな影。脅威ではなかった。',
      },
      {
        id: 'o3_3',
        conditions: { 's5': ['retreat'] },
        resultText: '番兵は槍を収め、静かに立ち去った。橋は無人になる。',
      },
      {
        id: 'o3_4',
        conditions: { 's5': ['safe'] },
        resultText: '番兵は不思議とこちらを通してくれた。',
      },
      {
        id: 'o3_5',
        conditions: { 's3': ['gentle'] },
        resultText: '番兵の手にあるのは槍ではなく、何か穏やかなもの。敵意は感じられない。',
      },
    ],
    defaultOutcome: {
      resultText: '番兵は槍を構え、通行を拒む。押し問答の末、傷を負いながら橋を渡った。',
    },
    actionPoints: 3,
  },

  // --- ノード4: 環境変換型 ---
  {
    id: 'node_4',
    title: '毒の沼',
    displayText: '深い毒が 広大な沼に 淀んでいる',
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w4_1', text: '深い', category: 'modifier', tags: ['deep', 'amplify', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'w4_2', text: '毒', category: 'subject', tags: ['poison', 'danger', 'threat:high'] } },
      { id: 's3', category: 'modifier', word: { id: 'w4_3', text: '広大な', category: 'modifier', tags: ['size:large', 'vast'] } },
      { id: 's4', category: 'object', word: { id: 'w4_4', text: '沼', category: 'object', tags: ['water', 'terrain', 'obstacle'] } },
      { id: 's5', category: 'predicate', word: { id: 'w4_5', text: '淀んでいる', category: 'predicate', tags: ['stagnant', 'block', 'obstacle'] } },
    ],
    outcomes: [
      {
        id: 'o4_1',
        conditions: { 's2': ['harmless'] },
        resultText: '沼にいるのは毒ではなく、無害な生き物だった。足元に気をつけて通る。',
      },
      {
        id: 'o4_2',
        conditions: { 's1': ['size:small'] },
        resultText: '毒は浅い。裾を持ち上げれば通れる程度だ。',
      },
      {
        id: 'o4_3',
        conditions: { 's5': ['retreat'] },
        resultText: '毒の水がざわめきながら退いていく。乾いた道が姿を現した。',
      },
      {
        id: 'o4_4',
        conditions: { 's5': ['calm'] },
        resultText: '沼は静まり返り、毒の気配が薄れた。息を止めて駆け抜けた。',
      },
      {
        id: 'o4_5',
        conditions: { 's3': ['size:small'] },
        resultText: '沼は思ったより小さい。一跨ぎで向こう岸に渡った。',
      },
    ],
    defaultOutcome: {
      resultText: '毒気に当てられながらも、意識を保って沼を横断した。体が重い。',
    },
    actionPoints: 3,
  },

  // --- ノード5: ボス・条件達成型 ---
  {
    id: 'node_5',
    title: '沈黙の門',
    displayText: '古い呪いが 堅固な門を 永遠に 封じている',
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'w5_1', text: '古い', category: 'modifier', tags: ['old', 'ancient', 'curse'] } },
      { id: 's2', category: 'subject', word: { id: 'w5_2', text: '呪い', category: 'subject', tags: ['curse', 'magic', 'threat:high'] } },
      { id: 's3', category: 'modifier', word: { id: 'w5_3', text: '堅固な', category: 'modifier', tags: ['strong', 'durable', 'hard'] } },
      { id: 's4', category: 'object', word: { id: 'w5_4', text: '門', category: 'object', tags: ['gate', 'structure', 'path'] } },
      { id: 's5', category: 'adverb', word: { id: 'w5_5', text: '永遠に', category: 'adverb', tags: ['eternal', 'amplify', 'absolute'] } },
      { id: 's6', category: 'predicate', word: { id: 'w5_6', text: '封じている', category: 'predicate', tags: ['seal', 'block', 'obstacle'] } },
    ],
    outcomes: [
      {
        id: 'o5_1',
        conditions: { 's2': ['harmless'], 's6': ['safe'] },
        resultText: '呪いも封印も、もはやここにはない。門はただそこに立っている。手で押すと、静かに開いた。',
      },
      {
        id: 'o5_2',
        conditions: { 's1': ['weaken'], 's5': ['weaken'] },
        resultText: '弱々しい呪いが、束の間だけ門を封じていた。やがてほどけ、門が軋みながら開く。',
      },
      {
        id: 'o5_3',
        conditions: { 's2': ['harmless'] },
        resultText: '呪いの正体は見かけ倒しだった。門に触れると、封印は霧のように消えた。',
      },
      {
        id: 'o5_4',
        conditions: { 's6': ['retreat'] },
        resultText: '封印が自ら解け、遠くへ去っていく。門の向こうに光が差す。',
      },
      {
        id: 'o5_5',
        conditions: { 's5': ['calm'] },
        resultText: '永遠であったはずの呪いは静まり、門に薄い隙間が生まれた。身を滑り込ませる。',
      },
    ],
    defaultOutcome: {
      resultText: '門はびくともしない。だが壁の一部に古い亀裂を見つけ、そこから向こう側へ抜けた。',
    },
    actionPoints: 3,
  },
];
