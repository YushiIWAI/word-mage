import type { NodeDef } from '../../engine/types';
import { nodeP24Outcomes } from './generated/node-p24-outcomes';

export const nodeP24: NodeDef = {
  id: 'node_p24',
  title: '墓場の門',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'orig_p24_mod', text: '忘れられた', category: 'modifier', tags: ['forgotten', 'lost', 'abandoned'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_ghost', text: '亡霊', category: 'subject', tags: ['spirit', 'dead', 'intangible'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p24_obj', text: '墓場', category: 'object_ni', tags: ['graveyard', 'death', 'gate'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_melt', text: '溶けている', category: 'predicate', tags: ['melt', 'dissolve', 'change'] } },
  ],
  outcomes: nodeP24Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
