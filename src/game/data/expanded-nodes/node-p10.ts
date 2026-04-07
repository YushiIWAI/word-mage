import type { NodeDef } from '../../engine/types';
import { nodeP10Outcomes } from './generated/node-p10-outcomes';

export const nodeP10: NodeDef = {
  id: 'node_p10',
  title: '鐘楼の番人',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p10_obj', text: '鐘', category: 'object', tags: ['bell', 'sound', 'metal'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_guard', text: '守っている', category: 'predicate', tags: ['defend', 'guard', 'safe'] } },
  ],
  outcomes: nodeP10Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
