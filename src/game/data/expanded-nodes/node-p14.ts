import type { NodeDef } from '../../engine/types';
import { nodeP14Outcomes } from './generated/node-p14-outcomes';

export const nodeP14: NodeDef = {
  id: 'node_p14',
  title: '吊り橋',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's2', category: 'subject', word: { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p14_obj', text: '吊り橋', category: 'object', tags: ['bridge', 'suspension', 'precarious'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p14_pred', text: '揺らしている', category: 'predicate', tags: ['shake', 'sway', 'vibration'] } },
  ],
  outcomes: nodeP14Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 2,
};
