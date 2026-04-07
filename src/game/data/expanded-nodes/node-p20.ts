import type { NodeDef } from '../../engine/types';
import { nodeP20Outcomes } from './generated/node-p20-outcomes';

export const nodeP20: NodeDef = {
  id: 'node_p20',
  title: '城壁の番',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's2', category: 'subject', word: { id: 'subj_silence', text: '沈黙', category: 'subject', tags: ['silence', 'void', 'intangible'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_p20_obj', text: '城壁', category: 'object', tags: ['wall', 'castle', 'fortification'] } },
    { id: 's4', category: 'predicate', locked: true, word: { id: 'orig_p20_pred', text: '守っている', category: 'predicate', tags: ['defend', 'guard', 'safe'] } },
  ],
  outcomes: nodeP20Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 2,
};
