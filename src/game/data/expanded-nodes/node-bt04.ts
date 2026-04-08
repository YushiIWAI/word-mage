import type { BattleNodeDef } from '../../engine/types';
import { bt04PlayerOutcomes, bt04Enemy1Outcomes, bt04Enemy2Outcomes, bt04Enemy3Outcomes } from './generated/node-bt04-outcomes';

export const nodeBT04: BattleNodeDef = {
  id: 'node_bt04',
  title: '影の群れ',
  nodeType: 'battle',
  enemyName: '影の群れ',
  enemyHp: 10,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,4...): [mod*]影が 魔女に 絡みついている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '影が' },
        { type: 'fixed', text: '魔女に' },
        { type: 'fixed', text: '絡みついている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
      ],
      outcomes: bt04Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '小さな影が魔女に絡みつく。冷たい手が足首を掴んでいる。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,5...): [mod*]影が 魔女を 見つめている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '影が' },
        { type: 'fixed', text: '魔女を' },
        { type: 'fixed', text: '見つめている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['curse', 'dark', 'threat:high'] } },
      ],
      outcomes: bt04Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '呪われた影が魔女を見つめている。視線が刺さるように痛い。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,6...): [mod*]影が 足元に 囁いている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '影が' },
        { type: 'fixed', text: '足元に' },
        { type: 'fixed', text: '囁いている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
      ],
      outcomes: bt04Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '凍てついた影が足元で囁いている。冷たい声が骨まで染みる。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 影を 払っている
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: 'が 影を 払っている' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_dragon', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] } },
    ],
    outcomes: bt04PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが影に届かない。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 6,
};
