import type { BattleNodeDef } from '../../engine/types';
import { bt02PlayerOutcomes, bt02Enemy1Outcomes, bt02Enemy2Outcomes } from './generated/node-bt02-outcomes';

export const nodeBT02: BattleNodeDef = {
  id: 'node_bt02',
  title: '追い剥ぎ',
  nodeType: 'battle',
  enemyName: '追い剥ぎ',
  enemyHp: 12,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,3,5...): [subj*]が 魔女の荷物を 隠している
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が' },
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
    // 敵文② (ターン2,4,6...): [subj*]が 魔女を 追いかけてくる
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が' },
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
  ],
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: 'が' },
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
