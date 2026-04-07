import type { NodeDef } from '../../engine/types';
import { nodeP19Outcomes } from './generated/node-p19-outcomes';

export const nodeP19: NodeDef = {
  id: 'node_p19',
  title: '祭壇',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['cursed', 'dark', 'threat:high'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_doll', text: '人形', category: 'subject', tags: ['object', 'uncanny', 'puppet'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p19_obj', text: '祭壇', category: 'object_ni', tags: ['altar', 'ritual', 'sacred'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_wait', text: '待っている', category: 'predicate', tags: ['wait', 'ambush', 'patience'] } },
  ],
  outcomes: nodeP19Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
