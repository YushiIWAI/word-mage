import type { BattleNodeDef } from '../../engine/types';
import { boss03PlayerOutcomes, boss03Enemy1Outcomes, boss03Enemy2Outcomes, boss03Enemy3Outcomes } from './generated/node-boss03-outcomes';

// 敵文⑤ outcomes: 鏡の中の[subj*]が 魔女を 見つめている — subj可変
const boss03Enemy5Outcomes = [
  { id: 'boss03_e5_shadow', conditions: { s1: 'subj_shadow' }, resultText: '鏡の中の影が魔女を見つめている。自分の影のはずなのに、違う動きをしている。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss03_e5_witch', conditions: { s1: 'subj_witch' }, resultText: '鏡の中の魔女が見つめている。同じ顔。同じ目。でも笑っている。こちらは笑っていないのに。', playerDamage: 4, enemyDamage: 0 },
  { id: 'boss03_e5_dragon', conditions: { s1: 'subj_dragon' }, resultText: '鏡の中の竜が魔女を見つめている。巨大な瞳。鏡面が歪むほどの圧力。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss03_e5_knight', conditions: { s1: 'subj_knight' }, resultText: '鏡の中の騎士が魔女を見つめている。剣を構えたまま動かない。いつ突き出されるかわからない。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_king', conditions: { s1: 'subj_king' }, resultText: '鏡の中の王が魔女を見下ろしている。「従え」と目が語っている。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss03_e5_ghost', conditions: { s1: 'subj_ghost' }, resultText: '鏡の中の亡霊が見つめている。目が合った。背筋が凍る。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_doll', conditions: { s1: 'subj_doll' }, resultText: '鏡の中の人形が見つめている。首がゆっくり傾く。目が光る。不気味だが、痛みはない。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss03_e5_snake', conditions: { s1: 'subj_snake' }, resultText: '鏡の中の蛇が見つめている。瞳孔が開いていく。蛇に見つめられると動けない。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_flame', conditions: { s1: 'subj_flame' }, resultText: '鏡の中の炎が魔女を見つめている。鏡面が熱い。触れた指先が焼ける。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss03_e5_ice', conditions: { s1: 'subj_ice' }, resultText: '鏡の中の氷が魔女を見つめている。鏡面に霜が張り、部屋の温度が下がっていく。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_silence', conditions: { s1: 'subj_silence' }, resultText: '鏡の中の沈黙が見つめている。何もない鏡面。それが一番怖い。自分が映らない。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_song', conditions: { s1: 'subj_song' }, resultText: '鏡の中の歌が魔女を見つめている。歌に目はない。でも確かにこちらを見ている。旋律が刺さる。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss03_e5_mirror', conditions: { s1: 'subj_mirror' }, resultText: '鏡の中の鏡が見つめている。合わせ鏡の無限回廊。意識が引き込まれそうになる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss03_e5_kitten', conditions: { s1: 'subj_kitten' }, resultText: '鏡の中の子猫が見つめている。きょとんとした目。可愛いだけだ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss03_e5_butterfly', conditions: { s1: 'subj_butterfly' }, resultText: '鏡の中の蝶が舞っている。見つめているのか飛んでいるのか。美しいだけ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss03_e5_wind', conditions: { s1: 'subj_wind' }, resultText: '鏡の中の風が見つめている。鏡面が波打つ。風は見えないはずなのに、確かに何かがいる。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss03_e5_rain', conditions: { s1: 'subj_rain' }, resultText: '鏡の中の雨が見つめている。鏡面を雨粒が伝う。こちら側にも水滴が落ちてくる。冷たい。', playerDamage: 1, enemyDamage: 0 },
];

export const nodeBOSS03: BattleNodeDef = {
  id: 'node_boss03',
  title: '鏡の魔女',
  nodeType: 'boss',
  enemyName: '鏡の魔女',
  enemyHp: 25,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,6,11...): [mod*]魔女が 鏡から 現れている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女が 鏡から 現れている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['curse', 'dark', 'threat:high'] } },
      ],
      outcomes: boss03Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '呪われた魔女が鏡から現れている。こちらと同じ顔。同じ呪文を唱えている。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,7,12...): 鏡の魔女が [mod*]呪いを 放っている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'fixed', text: '鏡の魔女が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '呪いを' },
        { type: 'fixed', text: '放っている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      ],
      outcomes: boss03Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '鏡の魔女が鋭い呪いを放っている。自分の呪文が返ってくる。避けられない。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,8,13...): [subj*]が 鏡の中から 囁いている — subj可変、弱体化:中
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '鏡の中から 囁いている' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_song', text: '歌', category: 'subject', tags: ['song', 'sound', 'intangible'] } },
      ],
      outcomes: boss03Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '歌が鏡の中から囁いている。聞き覚えのある旋律。自分の歌だ。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,9,14...): 鏡が 割れて 破片が飛び散っている — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '鏡が 割れて' },
        { type: 'fixed', text: '破片が' },
        { type: 'fixed', text: '飛び散っている' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '鏡が砕け散った。無数の破片が飛び散り、体を切り裂く。どの破片にも自分の顔が映っている。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文⑤ (ターン5,10,15...): 鏡の中の[subj*]が 魔女を 見つめている — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '鏡の中の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女を' },
        { type: 'fixed', text: '見つめている' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
      ],
      outcomes: boss03Enemy5Outcomes as any,
      defaultOutcome: {
        resultText: '鏡の中の影が魔女を見つめている。動けない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 鏡を 砕く — pred固定(砕く)
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '鏡を 砕く' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
    ],
    outcomes: boss03PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えた言葉が鏡に映り、反転して戻ってきた。何も届かない。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 20,
};
