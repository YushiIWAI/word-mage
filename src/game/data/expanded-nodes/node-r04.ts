import type { NodeDef } from '../../engine/types';
import { nodeR04Outcomes } from './generated/node-r04-outcomes';

export const nodeR04: NodeDef = {
  id: 'node_r04',
  title: '花畑',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_gentle', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_butterfly', text: '蝶', category: 'subject', tags: ['insect', 'fragile', 'transform'] } },
    { id: 's3', category: 'object_de', locked: true, word: { id: 'orig_r04_obj', text: '花畑', category: 'object_de', tags: ['flower', 'field', 'nature'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_dance', text: '踊っている', category: 'predicate', tags: ['dance', 'move', 'festival'] } },
  ],
  outcomes: nodeR04Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
