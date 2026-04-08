import type { NodeDef } from '../../engine/types';
import { nodeR05Outcomes } from './generated/node-r05-outcomes';

export const nodeR05: NodeDef = {
  id: 'node_r05',
  title: '星空の丘',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_r05_obj', text: '星空', category: 'object_ni', tags: ['star', 'sky', 'night'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_r05_pred', text: '輝いている', category: 'predicate', tags: ['shine', 'light', 'glow'] } },
  ],
  outcomes: nodeR05Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
