import type { NodeDef } from '../../engine/types';
import { nodeP06Outcomes } from './generated/node-p06-outcomes';

export const nodeP06: NodeDef = {
  id: 'node_p06',
  title: '森の奥',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_gentle', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_butterfly', text: '蝶', category: 'subject', tags: ['insect', 'fragile', 'beautiful'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p06_obj', text: '森', category: 'object_ni', tags: ['forest', 'nature'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p06_pred', text: '待っている', category: 'predicate', tags: ['wait', 'ambush', 'patience'] } },
  ],
  outcomes: nodeP06Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
