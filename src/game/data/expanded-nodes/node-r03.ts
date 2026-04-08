import type { NodeDef } from '../../engine/types';
import { nodeR03Outcomes } from './generated/node-r03-outcomes';

export const nodeR03: NodeDef = {
  id: 'node_r03',
  title: '木陰',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
  ],
  slots: [
    { id: 's1', category: 'subject', word: { id: 'subj_butterfly', text: '蝶', category: 'subject', tags: ['insect', 'fragile', 'transform'] } },
    { id: 's2', category: 'object_de', locked: true, word: { id: 'orig_r03_obj', text: '木陰', category: 'object_de', tags: ['shade', 'tree', 'rest'] } },
    { id: 's3', category: 'predicate', locked: true, word: { id: 'orig_r03_pred', text: '笑っている', category: 'predicate', tags: ['laugh', 'smile', 'joy'] } },
  ],
  outcomes: nodeR03Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 2,
};
