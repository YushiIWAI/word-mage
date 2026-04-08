import type { NodeDef } from '../../engine/types';
import { nodeR02Outcomes } from './generated/node-r02-outcomes';

export const nodeR02: NodeDef = {
  id: 'node_r02',
  title: '焚き火',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_kitten', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] } },
    { id: 's3', category: 'object_de', locked: true, word: { id: 'orig_r02_obj', text: '焚き火', category: 'object_de', tags: ['fire', 'campfire', 'warmth'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_r02_pred', text: '温まっている', category: 'predicate', tags: ['warm', 'comfort', 'rest'] } },
  ],
  outcomes: nodeR02Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
