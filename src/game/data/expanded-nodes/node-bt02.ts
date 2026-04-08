import type { BattleNodeDef } from '../../engine/types';
import { bt02PlayerOutcomes, bt02Enemy1Outcomes, bt02Enemy2Outcomes } from './generated/node-bt02-outcomes';

// 敵文③ outcomes: 盗賊が [mod*]罠を 仕掛けている — mod可変
const bt02Enemy3Outcomes = [
  { id: 'bt02_e3_mighty', conditions: { s1: 'mod_mighty' }, resultText: '巨大な罠が足元に開く。深い落とし穴。ぎりぎりで縁を掴んだ。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt02_e3_small', conditions: { s1: 'mod_small' }, resultText: '小さな罠を踏む。チクリ。画鋲程度の痛みだ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt02_e3_gentle', conditions: { s1: 'mod_gentle' }, resultText: '優しい罠が足を包む。柔らかな網。簡単にほどけた。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt02_e3_fire', conditions: { s1: 'mod_fire' }, resultText: '炎の罠が発動した。地面から火柱が噴き上がる。靴の底が焦げた。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt02_e3_hard', conditions: { s1: 'mod_hard' }, resultText: '鋼の顎が足首を挟む。堅い罠を外すのに時間がかかった。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt02_e3_sharp', conditions: { s1: 'mod_sharp' }, resultText: '鋭い刃が地面から飛び出す。足の裏を浅く切られた。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt02_e3_broken', conditions: { s1: 'mod_broken' }, resultText: '壊れた罠が作動する。バネが飛んで、どこかに転がった。不発だ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt02_e3_frozen', conditions: { s1: 'mod_frozen' }, resultText: '凍てついた罠が足元を凍らせる。靴が地面に張り付いて動けない。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt02_e3_clear', conditions: { s1: 'mod_clear' }, resultText: '透明な罠が見えない。気づいた時にはワイヤーに引っかかっていた。', playerDamage: 1, enemyDamage: 0 },
  { id: 'bt02_e3_cursed', conditions: { s1: 'mod_cursed' }, resultText: '呪われた罠が発動する。黒い鎖が足に巻きつき、力が吸われていく。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt02_e3_sleepy', conditions: { s1: 'mod_sleepy' }, resultText: '眠い罠がもたもたと作動する。ゆっくり閉じる顎を軽々と跨いだ。', playerDamage: 0, enemyDamage: 0 },
];

export const nodeBT02: BattleNodeDef = {
  id: 'node_bt02',
  title: '追い剥ぎ',
  nodeType: 'battle',
  enemyName: '追い剥ぎ',
  enemyHp: 12,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,5,9...): [subj*]が 魔女の荷物を 隠している — subj可変、弱体化:中
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女の荷物を' },
        { type: 'fixed', text: '隠している' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
      ],
      outcomes: bt02Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '影が素早く動き、荷物が消えた。盗賊の手際はさすがだ。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,6,10...): [subj*]が 魔女を 追いかけてくる — subj可変、弱体化:中
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女を' },
        { type: 'fixed', text: '追いかけてくる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_snake', text: '蛇', category: 'subject', tags: ['animal', 'poison', 'cunning'] } },
      ],
      outcomes: bt02Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '蛇のような足取りで盗賊が迫る。逃げ場がない。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,7,11...): 盗賊が [mod*]罠を 仕掛けている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'fixed', text: '盗賊が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '罠を' },
        { type: 'fixed', text: '仕掛けている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      ],
      outcomes: bt02Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '鋭い罠が足元で作動する。油断していた。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,8,12...): 盗賊が 闇に 消えていく — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '盗賊が' },
        { type: 'fixed', text: '闇に' },
        { type: 'fixed', text: '消えていく' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '盗賊が闇に溶けた。背後から冷たい刃が走る。姿なき一撃。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
  ],
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '盗賊を' },
      { type: 'fixed', text: '砕く' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] } },
    ],
    outcomes: bt02PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが盗賊に届かない。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 10,
};
