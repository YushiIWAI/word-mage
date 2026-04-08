import type { BattleNodeDef } from '../../engine/types';
import { boss03PlayerOutcomes, boss03Enemy1Outcomes, boss03Enemy2Outcomes, boss03Enemy3Outcomes } from './generated/node-boss03-outcomes';

export const nodeBOSS03: BattleNodeDef = {
  id: 'node_boss03',
  title: '鏡の魔女',
  nodeType: 'boss',
  enemyName: '鏡の魔女',
  enemyHp: 25,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,4...): [mod*]魔女が 鏡から 現れている
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
    // 敵文② (ターン2,5...): 鏡の魔女が [mod*]呪いを 放っている
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
    // 敵文③ (ターン3,6...): [subj*]が 鏡の中から 囁いている
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が 鏡の中から 囁いている' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_song', text: '歌', category: 'subject', tags: ['song', 'music', 'magic'] } },
      ],
      outcomes: boss03Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '歌が鏡の中から囁いている。聞き覚えのある旋律。自分の歌だ。',
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
      { type: 'fixed', text: 'が 鏡を 砕く' },
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
