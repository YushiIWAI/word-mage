import type { NodeDef } from '../../engine/types';
import { nodeE01Outcomes } from './generated/node-e01-outcomes';

export const nodeE01: NodeDef = {
  id: 'node_e01',
  title: '王の間',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_e01_obj', text: '玉座', category: 'object', tags: ['throne', 'royal', 'power'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_e01_pred', text: '守っている', category: 'predicate', tags: ['guard', 'protect', 'defend'] } },
  ],
  outcomes: nodeE01Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
