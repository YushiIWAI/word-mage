import type { NodeDef } from '../../engine/types';
import { nodeP12Outcomes } from './generated/node-p12-outcomes';

export const nodeP12: NodeDef = {
  id: 'node_p12',
  title: '石畳の庭',
  nodeType: 'rest',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_sleepy', text: '眠い', category: 'modifier', tags: ['sleepy', 'slow', 'weaken'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_rain', text: '雨', category: 'subject', tags: ['water', 'nature', 'weather'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p12_obj', text: '庭', category: 'object', tags: ['garden', 'stone', 'nature'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p12_pred', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] } },
  ],
  outcomes: nodeP12Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
