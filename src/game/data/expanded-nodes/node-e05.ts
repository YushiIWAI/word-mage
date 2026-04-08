import type { NodeDef } from '../../engine/types';
import { nodeE05Outcomes } from './generated/node-e05-outcomes';

export const nodeE05: NodeDef = {
  id: 'node_e05',
  title: '封印の間',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_broken', text: '壊れた', category: 'modifier', tags: ['broken', 'weaken', 'size:small'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'orig_e05_subj', text: '封印', category: 'subject', tags: ['seal', 'magic', 'binding'] } },
    { id: 's3', category: 'object_kara', locked: true, word: { id: 'orig_e05_obj', text: '祭壇', category: 'object_kara', tags: ['altar', 'sacred', 'ritual'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_sing', text: '歌っている', category: 'predicate', tags: ['sing', 'sound', 'magic'] } },
  ],
  outcomes: nodeE05Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
