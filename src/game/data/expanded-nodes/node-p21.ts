import type { NodeDef } from '../../engine/types';
import { nodeP21Outcomes } from './generated/node-p21-outcomes';

export const nodeP21: NodeDef = {
  id: 'node_p21',
  title: '夜の十字路',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_witch', text: '魔女', category: 'subject', tags: ['human', 'magic', 'cursed'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p21_obj', text: '十字路', category: 'object_ni', tags: ['crossroads', 'night', 'choice'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p21_pred', text: '立っている', category: 'predicate', tags: ['stand', 'block', 'presence'] } },
  ],
  outcomes: nodeP21Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
