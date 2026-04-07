import type { NodeDef } from '../../engine/types';
import { nodeP11Outcomes } from './generated/node-p11-outcomes';

export const nodeP11: NodeDef = {
  id: 'node_p11',
  title: '灯台の灯',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
    { id: 's3', category: 'object_de', locked: true, word: { id: 'orig_p11_obj', text: '灯台', category: 'object_de', tags: ['lighthouse', 'light', 'guide'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_shine', text: '輝く', category: 'predicate', tags: ['shine', 'light', 'magic'] } },
  ],
  outcomes: nodeP11Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
