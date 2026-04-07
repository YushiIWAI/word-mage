import type { NodeDef } from '../../engine/types';
import { nodeP07Outcomes } from './generated/node-p07-outcomes';

export const nodeP07: NodeDef = {
  id: 'node_p07',
  title: '崩れた塔',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_broken', text: '壊れた', category: 'modifier', tags: ['broken', 'weaken', 'size:small'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_ghost', text: '亡霊', category: 'subject', tags: ['spirit', 'dead', 'intangible'] } },
    { id: 's3', category: 'object_kara', locked: true, word: { id: 'orig_p07_obj', text: '塔', category: 'object_kara', tags: ['tower', 'ruin'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_flee', text: '逃げていく', category: 'predicate', tags: ['flee', 'retreat', 'safe'] } },
  ],
  outcomes: nodeP07Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
