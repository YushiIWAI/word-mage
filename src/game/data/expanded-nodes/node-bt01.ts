import type { BattleNodeDef } from '../../engine/types';
import { bt01PlayerOutcomes, bt01Enemy1Outcomes, bt01Enemy2Outcomes } from './generated/node-bt01-outcomes';

export const nodeBT01: BattleNodeDef = {
  id: 'node_bt01',
  title: '森番',
  nodeType: 'battle',
  enemyName: '森番',
  enemyHp: 15,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,3,5...): [mod*]森番が 魔女を 追いかけてくる
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '森番' },
        { type: 'fixed', text: 'が' },
        { type: 'fixed', text: '魔女を' },
        { type: 'fixed', text: '追いかけてくる' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
      ],
      outcomes: bt01Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '森番が猛然と迫ってくる。巨木のような腕が振り下ろされた。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,4,6...): 森番が [mod*]根を 振り下ろしている
    {
      sentence: [
        { type: 'fixed', text: '森番が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '根を' },
        { type: 'fixed', text: '振り下ろしている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] } },
      ],
      outcomes: bt01Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '堅い根が振り下ろされ、地面が割れた。',
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
      { type: 'fixed', text: '森番を' },
      { type: 'fixed', text: '打つ' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_kitten', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] } },
    ],
    outcomes: bt01PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが森番に届かない。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 8,
};
