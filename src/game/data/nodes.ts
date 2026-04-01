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
      // 修飾語を「小さな」に
      { id: 'o1_a', conditions: { 's1': ['size:small'] },
        resultText: '小さな岩を難なく跨ぎ、道の先へ進んだ。', damage: 0, gold: 5 },
      // 主語を無害なものに
      { id: 'o1_b', conditions: { 's2': ['harmless'] },
        resultText: '道を塞ぐものは何の脅威でもなかった。悠々と通り過ぎる。', damage: 0, gold: 5 },
      // 述語を「逃げていく」系に
      { id: 'o1_c', conditions: { 's4': ['retreat'] },
        resultText: '岩がひとりでに転がり去った。道が開ける。転がった跡に何か光るものが落ちていた。', damage: 0, gold: 5,
        rewardItems: [{ id: 'item_rolling_stone', name: '転がる石', description: '岩が去った跡に残された不思議な石', sellPrice: 8 }] },
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
        // 強い攻撃語を使った場合
        { id: 'bp_a', conditions: { 'p4': ['destroy'] },
          resultText: '光が番人を貫いた。呪いの鎧に亀裂が走る。', playerDamage: 0, enemyDamage: 5 },
        { id: 'bp_b', conditions: { 'p4': ['combat'] },
          resultText: '光が番人を打った。呪いの体が揺らぐ。', playerDamage: 0, enemyDamage: 3 },
        // 修飾語で強化した場合
        { id: 'bp_c', conditions: { 'p1': ['intense'] },
          resultText: '激しい光が番人の目を焼いた。', playerDamage: 0, enemyDamage: 3 },
        { id: 'bp_d', conditions: { 'p1': ['threat:high'] },
          resultText: '強烈な光が番人を怯ませた。', playerDamage: 0, enemyDamage: 2 },
        // 主語を変えた場合
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
