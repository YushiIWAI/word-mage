import type { NodeDef } from '../../engine/types';
import { nodeCOutcomes } from './generated/node-c-outcomes';

export const nodeC: NodeDef = {
  id: 'node_c',
  title: '霧の街道',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['cursed', 'dark', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_snake', text: '蛇', category: 'subject', tags: ['animal', 'poison', 'cunning'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_c_obj', text: '街道', category: 'object', tags: ['road', 'path'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_block', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] } },
  ],
  outcomes: nodeCOutcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
