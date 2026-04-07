import type { NodeDef } from '../../engine/types';
import { nodeP23Outcomes } from './generated/node-p23-outcomes';

export const nodeP23: NodeDef = {
  id: 'node_p23',
  title: '古い書庫',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_gentle', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p23_obj', text: '書庫', category: 'object_ni', tags: ['library', 'books', 'old'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p23_pred', text: '隠れている', category: 'predicate', tags: ['hide', 'lurk', 'secret'] } },
  ],
  outcomes: nodeP23Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
