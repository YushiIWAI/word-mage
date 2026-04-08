import type { BattleNodeDef } from '../../engine/types';
import { bt03PlayerOutcomes, bt03Enemy1Outcomes, bt03Enemy2Outcomes, bt03Enemy3Outcomes } from './generated/node-bt03-outcomes';

// 敵文⑤ outcomes: [mod*]呪いが 魔女の足を 止めている — mod可変
const bt03Enemy5Outcomes = [
  { id: 'bt03_e5_mighty', conditions: { s1: 'mod_mighty' }, resultText: '強大な呪いが足を縫い止める。一歩も動けない。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt03_e5_small', conditions: { s1: 'mod_small' }, resultText: '小さな呪いが足首にまとわりつく。少し重いだけ。歩ける。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt03_e5_gentle', conditions: { s1: 'mod_gentle' }, resultText: '優しい呪いが足に触れる。温かい。痛みはない。むしろ休みたくなる。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt03_e5_fire', conditions: { s1: 'mod_fire' }, resultText: '燃える呪いが足元に広がる。靴底から熱が伝わり、立っていられない。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt03_e5_hard', conditions: { s1: 'mod_hard' }, resultText: '石のように堅い呪いが足を固める。地面と一体化したかのようだ。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt03_e5_sharp', conditions: { s1: 'mod_sharp' }, resultText: '鋭い呪いが足を刺す。踏み出すたびに針を踏む痛み。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt03_e5_broken', conditions: { s1: 'mod_broken' }, resultText: '壊れた呪いが足元でちらちらする。力を失った呪文の残骸。何も起きない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt03_e5_frozen', conditions: { s1: 'mod_frozen' }, resultText: '凍てついた呪いが足を氷漬けにする。感覚がなくなっていく。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt03_e5_clear', conditions: { s1: 'mod_clear' }, resultText: '透き通った呪いが見えない足枷となる。何に止められているかわからない恐怖。', playerDamage: 1, enemyDamage: 0 },
  { id: 'bt03_e5_cursed', conditions: { s1: 'mod_cursed' }, resultText: '呪いの上に呪いが重なる。二重の束縛。足が地面にめり込んでいく。', playerDamage: 4, enemyDamage: 0 },
  { id: 'bt03_e5_sleepy', conditions: { s1: 'mod_sleepy' }, resultText: '眠い呪いが足を重くする。歩けるが、座り込みたくなる。', playerDamage: 0, enemyDamage: 0 },
];

export const nodeBT03: BattleNodeDef = {
  id: 'node_bt03',
  title: '呪縛の騎士',
  nodeType: 'battle',
  enemyName: '呪縛の騎士',
  enemyHp: 20,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,6,11...): 呪われた[subj*]が 魔女を [pred*] — 2スロット可変、弱体化:高コスト
    {
      sentence: [
        { type: 'fixed', text: '呪われた' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女を' },
        { type: 'slot', slotId: 's2' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
        { id: 's2', category: 'predicate', word: { id: 'pred_chase', text: '追いかけてくる', category: 'predicate', tags: ['chase', 'pursue', 'hunt'] } },
      ],
      outcomes: bt03Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,7,12...): 呪われた剣が [mod*]呪いを 放っている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'fixed', text: '呪われた剣が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '呪いを' },
        { type: 'fixed', text: '放っている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      ],
      outcomes: bt03Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '呪われた剣から鋭い呪いの波動が放たれる。体の芯が痺れた。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,8,13...): 呪いが 魔女に [pred*] — pred可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '呪いが' },
        { type: 'fixed', text: '魔女に' },
        { type: 'slot', slotId: 's1' },
      ],
      slots: [
        { id: 's1', category: 'predicate', word: { id: 'pred_entangle', text: '絡みついている', category: 'predicate', tags: ['bind', 'entangle', 'restrict'] } },
      ],
      outcomes: bt03Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,9,14...): 騎士の亡霊が 剣を 振り下ろしている — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '騎士の亡霊が' },
        { type: 'fixed', text: '剣を' },
        { type: 'fixed', text: '振り下ろしている' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '騎士の亡霊が剣を振り下ろす。半透明の刃が体を通過する。冷たい。中から切られる痛み。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文⑤ (ターン5,10,15...): [mod*]呪いが 魔女の足を 止めている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '呪いが' },
        { type: 'fixed', text: '魔女の足を' },
        { type: 'fixed', text: '止めている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] } },
      ],
      outcomes: bt03Enemy5Outcomes as any,
      defaultOutcome: {
        resultText: '堅い呪いが足を止める。重い枷のように動けない。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 騎士に 立ち向かう
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '騎士に 立ち向かう' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_dragon', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] } },
    ],
    outcomes: bt03PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えた言葉が騎士の呪いに弾かれた。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 12,
};
