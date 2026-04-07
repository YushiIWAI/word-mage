import type { NodeDef } from '../../engine/types';
import { nodeP26Outcomes } from './generated/node-p26-outcomes';

export const nodeP26: NodeDef = {
  id: 'node_p26',
  title: '鍛冶場',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
    { id: 's3', category: 'object_de', locked: true, word: { id: 'orig_p26_obj', text: '鍛冶場', category: 'object_de', tags: ['forge', 'smithy', 'fire'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_dance', text: '踊っている', category: 'predicate', tags: ['dance', 'move', 'chaos'] } },
  ],
  outcomes: nodeP26Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
