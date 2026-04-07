import type { NodeDef } from '../../engine/types';
import { nodeP17Outcomes } from './generated/node-p17-outcomes';

export const nodeP17: NodeDef = {
  id: 'node_p17',
  title: '茨の道',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p17_obj', text: '道', category: 'object', tags: ['road', 'path', 'thorn'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_chase', text: '追いかけてくる', category: 'predicate', tags: ['chase', 'pursuit', 'threat'] } },
  ],
  outcomes: nodeP17Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
