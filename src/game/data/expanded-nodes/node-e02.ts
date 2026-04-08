import type { NodeDef } from '../../engine/types';
import { nodeE02Outcomes } from './generated/node-e02-outcomes';

export const nodeE02: NodeDef = {
  id: 'node_e02',
  title: '竜の巣',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_dragon', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_e02_obj', text: '巣穴', category: 'object_ni', tags: ['nest', 'lair', 'dark'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_e02_pred', text: '棲みついている', category: 'predicate', tags: ['inhabit', 'nest', 'dwell'] } },
  ],
  outcomes: nodeE02Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
