import type { NodeDef } from '../../engine/types';
import { nodeP25Outcomes } from './generated/node-p25-outcomes';

export const nodeP25: NodeDef = {
  id: 'node_p25',
  title: '渡し場',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_clear', text: '透き通った', category: 'modifier', tags: ['clear', 'transparent', 'fragile'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_ghost', text: '亡霊', category: 'subject', tags: ['spirit', 'dead', 'intangible'] } },
    { id: 's3', category: 'object_de', locked: true, word: { id: 'orig_p25_obj', text: '渡し場', category: 'object_de', tags: ['ferry', 'crossing', 'river'] } },
    { id: 's4', category: 'predicate', word: { id: 'orig_p25_pred', text: '待っている', category: 'predicate', tags: ['wait', 'ambush', 'patience'] } },
  ],
  outcomes: nodeP25Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
