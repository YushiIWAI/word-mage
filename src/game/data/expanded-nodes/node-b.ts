import type { NodeDef } from '../../engine/types';
import { nodeBOutcomes } from './generated/node-b-outcomes';

export const nodeB: NodeDef = {
  id: 'node_b',
  title: '沈む祠',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['cursed', 'dark', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_doll', text: '人形', category: 'subject', tags: ['object', 'uncanny', 'puppet'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_b_obj', text: '祠', category: 'object_ni', tags: ['shrine', 'sacred'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_b_pred', text: '眠っている', category: 'predicate', tags: ['sleep', 'rest', 'dormant'] } },
  ],
  outcomes: nodeBOutcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
