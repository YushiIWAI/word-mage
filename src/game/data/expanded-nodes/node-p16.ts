import type { NodeDef } from '../../engine/types';
import { nodeP16Outcomes } from './generated/node-p16-outcomes';

export const nodeP16: NodeDef = {
  id: 'node_p16',
  title: '関所',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_king', text: '王', category: 'subject', tags: ['human', 'authority', 'command'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p16_obj', text: '関所', category: 'object', tags: ['checkpoint', 'gate', 'barrier'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_guard', text: '守っている', category: 'predicate', tags: ['defend', 'guard', 'safe'] } },
  ],
  outcomes: nodeP16Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
