import type { NodeDef } from '../../engine/types';
import { nodeP18Outcomes } from './generated/node-p18-outcomes';

export const nodeP18: NodeDef = {
  id: 'node_p18',
  title: '霧の湖',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_kitten', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p18_obj', text: '湖', category: 'object_ni', tags: ['lake', 'water', 'mist'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p18_pred', text: '浮かんでいる', category: 'predicate', tags: ['float', 'drift', 'surface'] } },
  ],
  outcomes: nodeP18Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
