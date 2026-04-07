import type { NodeDef } from '../../engine/types';
import { nodeAOutcomes } from './generated/node-a-outcomes';

export const nodeA: NodeDef = {
  id: 'node_a',
  title: '忘れられた橋',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_a_obj', text: '橋', category: 'object', tags: ['bridge', 'path'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_a_pred', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] } },
  ],
  outcomes: nodeAOutcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
