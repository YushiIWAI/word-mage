import type { NodeDef } from '../../engine/types';
import { nodeP28Outcomes } from './generated/node-p28-outcomes';

export const nodeP28: NodeDef = {
  id: 'node_p28',
  title: '道端の篝火',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'orig_p28_subj', text: '篝火', category: 'subject', tags: ['fire', 'light', 'warmth'] } },
    { id: 's3', category: 'adverb', word: { id: 'adv_quiet', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p28_pred', text: '燃えている', category: 'predicate', tags: ['fire', 'burn', 'continuous'] } },
  ],
  outcomes: nodeP28Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
