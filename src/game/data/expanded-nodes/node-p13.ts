import type { NodeDef } from '../../engine/types';
import { nodeP13Outcomes } from './generated/node-p13-outcomes';

export const nodeP13: NodeDef = {
  id: 'node_p13',
  title: '裂け目',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_song', text: '歌', category: 'subject', tags: ['song', 'sound', 'intangible'] } },
    { id: 's3', category: 'object_kara', locked: true, word: { id: 'orig_p13_obj', text: '裂け目', category: 'object_kara', tags: ['crack', 'gap', 'void'] } },
    { id: 's4', category: 'predicate', word: { id: 'orig_p13_pred', text: '囁いている', category: 'predicate', tags: ['whisper', 'secret', 'lure'] } },
  ],
  outcomes: nodeP13Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
