import type { NodeDef } from '../../engine/types';
import { nodeP22Outcomes } from './generated/node-p22-outcomes';

export const nodeP22: NodeDef = {
  id: 'node_p22',
  title: '水車小屋',
  nodeType: 'puzzle',
  sentence: [
    { type: 'fixed', text: '古い水車が 川を ' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's4', category: 'predicate', word: { id: 'pred_gaze', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] } },
  ],
  outcomes: nodeP22Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
