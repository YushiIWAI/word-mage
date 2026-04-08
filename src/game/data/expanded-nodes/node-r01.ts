import type { NodeDef } from '../../engine/types';
import { nodeR01Outcomes } from './generated/node-r01-outcomes';

export const nodeR01: NodeDef = {
  id: 'node_r01',
  title: '小さな泉',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_clear', text: '透き通った', category: 'modifier', tags: ['clear', 'transparent', 'pure'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_butterfly', text: '蝶', category: 'subject', tags: ['insect', 'fragile', 'transform'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_r01_obj', text: '泉', category: 'object_ni', tags: ['spring', 'water', 'healing'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_r01_pred', text: '浮かんでいる', category: 'predicate', tags: ['float', 'drift', 'calm'] } },
  ],
  outcomes: nodeR01Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
