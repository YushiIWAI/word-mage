import type { NodeDef } from '../../engine/types';
import { nodeP27Outcomes } from './generated/node-p27-outcomes';

export const nodeP27: NodeDef = {
  id: 'node_p27',
  title: '古い鐘楼',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'subject', word: { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] } },
    { id: 's2', category: 'object_de', locked: true, word: { id: 'orig_p27_obj', text: '鐘楼', category: 'object_de', tags: ['building', 'bell'] } },
    { id: 's3', category: 'predicate', locked: true, word: { id: 'orig_p27_pred', text: '鳴り続けている', category: 'predicate', tags: ['sound', 'continuous'] } },
    { id: 's4', category: 'adverb', word: { id: 'adv_quiet', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] } },
  ],
  outcomes: nodeP27Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
