import type { NodeDef } from '../../engine/types';
import { nodeE06Outcomes } from './generated/node-e06-outcomes';

export const nodeE06: NodeDef = {
  id: 'node_e06',
  title: '嵐の峠',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_e06_obj', text: '峠', category: 'object', tags: ['pass', 'mountain', 'path'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_e06_pred', text: '引き裂いている', category: 'predicate', tags: ['tear', 'rend', 'destroy'] } },
  ],
  outcomes: nodeE06Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
