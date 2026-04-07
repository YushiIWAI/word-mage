import type { NodeDef } from '../../engine/types';
import { nodeDOutcomes } from './generated/node-d-outcomes';

export const nodeD: NodeDef = {
  id: 'node_d',
  title: '泉の声',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_song', text: '歌', category: 'subject', tags: ['song', 'sound', 'intangible'] } },
    { id: 's3', category: 'object_kara', locked: true, word: { id: 'orig_d_obj', text: '泉', category: 'object_kara', tags: ['spring', 'water', 'source'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_whisper', text: '囁いている', category: 'predicate', tags: ['whisper', 'secret', 'lure'] } },
  ],
  outcomes: nodeDOutcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
