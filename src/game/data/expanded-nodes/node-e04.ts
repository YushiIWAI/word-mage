import type { NodeDef } from '../../engine/types';
import { nodeE04Outcomes } from './generated/node-e04-outcomes';

export const nodeE04: NodeDef = {
  id: 'node_e04',
  title: '黒い塔の頂',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_mirror', text: '鏡', category: 'subject', tags: ['mirror', 'reflection', 'glass'] } },
    { id: 's3', category: 'object_kara', locked: true, word: { id: 'orig_e04_obj', text: '塔の頂', category: 'object_kara', tags: ['tower', 'top', 'height'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_e04_pred', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] } },
  ],
  outcomes: nodeE04Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
