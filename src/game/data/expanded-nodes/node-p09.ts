import type { NodeDef } from '../../engine/types';
import { nodeP09Outcomes } from './generated/node-p09-outcomes';

export const nodeP09: NodeDef = {
  id: 'node_p09',
  title: '枯れ井戸',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['cursed', 'dark', 'threat:high'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_mirror', text: '鏡', category: 'subject', tags: ['object', 'reflect', 'fragile'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p09_obj', text: '井戸', category: 'object_ni', tags: ['well', 'water', 'depth'] } },
    { id: 's4', category: 'predicate', word: { id: 'orig_p09_pred', text: '沈んでいる', category: 'predicate', tags: ['sink', 'submerge', 'depth'] } },
  ],
  outcomes: nodeP09Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
