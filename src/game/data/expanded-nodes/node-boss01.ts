import type { BattleNodeDef } from '../../engine/types';
import { boss01PlayerOutcomes, boss01Enemy1Outcomes, boss01Enemy2Outcomes, boss01Enemy3Outcomes } from './generated/node-boss01-outcomes';

export const nodeBOSS01: BattleNodeDef = {
  id: 'node_boss01',
  title: '古竜',
  nodeType: 'boss',
  enemyName: '古竜',
  enemyHp: 30,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,4...): [mod*]古竜が 大地を 焼いている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '古竜が 大地を 焼いている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
      ],
      outcomes: boss01Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '燃え盛る古竜が大地を焼き尽くす。炎の壁が迫る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,5...): 古竜の[subj*]が 魔女に 降り注いでいる
    {
      sentence: [
        { type: 'fixed', text: '古竜の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が 魔女に 降り注いでいる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
      ],
      outcomes: boss01Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '古竜の炎が魔女に降り注ぐ。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,6...): [mod*][subj*]が 古竜に 砕かれている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'slot', slotId: 's2' },
        { type: 'fixed', text: 'が 古竜に 砕かれている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
        { id: 's2', category: 'subject', word: { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] } },
      ],
      outcomes: boss01Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '古竜が全てを砕く。世界が軋む。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 古竜を 砕く
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: 'が 古竜を 砕く' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
    ],
    outcomes: boss01PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが古竜の鱗に弾かれた。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 20,
};
