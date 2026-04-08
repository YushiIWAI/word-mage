import type { BattleNodeDef } from '../../engine/types';
import { bt03PlayerOutcomes, bt03Enemy1Outcomes, bt03Enemy2Outcomes, bt03Enemy3Outcomes } from './generated/node-bt03-outcomes';

export const nodeBT03: BattleNodeDef = {
  id: 'node_bt03',
  title: '呪縛の騎士',
  nodeType: 'battle',
  enemyName: '呪縛の騎士',
  enemyHp: 20,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,4...): 呪われた[subj*]が 魔女を [pred*] — 2スロット可変
    {
      sentence: [
        { type: 'fixed', text: '呪われた' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: 'が' },
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
    // 敵文② (ターン2,5...): 呪われた剣が [mod*]呪いを 放っている
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
    // 敵文③ (ターン3,6...): 呪いが 魔女に [pred*]
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
  ],
  // プレイヤー行動文: [mod*][subj*]が 騎士に 立ち向かう
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: 'が 騎士に 立ち向かう' },
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
