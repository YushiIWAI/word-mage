import type { BattleNodeDef } from '../../engine/types';
import { boss02PlayerOutcomes, boss02Enemy1Outcomes, boss02Enemy2Outcomes, boss02Enemy3Outcomes } from './generated/node-boss02-outcomes';

export const nodeBOSS02: BattleNodeDef = {
  id: 'node_boss02',
  title: '黒き王',
  nodeType: 'boss',
  enemyName: '黒き王',
  enemyHp: 25,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,4...): [mod*]王が 魔女に 命じている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '王が 魔女に 命じている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['curse', 'dark', 'threat:high'] } },
      ],
      outcomes: boss02Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '呪われた王が魔女に命じている。「跪け」黒い声が骨まで響く。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,5...): 王の[subj*]が 魔女を 追いかけてくる
    {
      sentence: [
        { type: 'fixed', text: '王の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が 魔女を 追いかけてくる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
      ],
      outcomes: boss02Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '王の影が魔女を追いかけてくる。逃げ場がない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,6...): [mod*]沈黙が 魔女を [pred*] — 2スロット可変、を格歪みあり
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '沈黙が 魔女を' },
        { type: 'slot', slotId: 's2' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
        { id: 's2', category: 'predicate', word: { id: 'pred_gaze', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] } },
      ],
      outcomes: boss02Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 王に 立ち向かう
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: 'が 王に 立ち向かう' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
    ],
    outcomes: boss02PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えた言葉が王の前で力を失う。玉座の威圧に押し戻された。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 20,
};
