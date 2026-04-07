import type { NodeDef } from '../../engine/types';
import { nodeP15Outcomes } from './generated/node-p15-outcomes';

export const nodeP15: NodeDef = {
  id: 'node_p15',
  title: '砂丘の眠り',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's2', category: 'subject', word: { id: 'subj_dragon', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p15_obj', text: '砂丘', category: 'object_ni', tags: ['dune', 'sand', 'desert'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p15_pred', text: '眠っている', category: 'predicate', tags: ['sleep', 'dormant', 'safe'] } },
  ],
  outcomes: nodeP15Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 2,
};
