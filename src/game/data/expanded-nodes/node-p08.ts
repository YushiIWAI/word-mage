import type { NodeDef } from '../../engine/types';
import { nodeP08Outcomes } from './generated/node-p08-outcomes';

export const nodeP08: NodeDef = {
  id: 'node_p08',
  title: '暗い洞窟',
  nodeType: 'puzzle',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
    { id: 's2', category: 'subject', locked: true, word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
    { id: 's3', category: 'object_ni', locked: true, word: { id: 'orig_p08_obj', text: '洞窟', category: 'object_ni', tags: ['cave', 'dark'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_sleep', text: '眠っている', category: 'predicate', tags: ['sleep', 'dormant', 'safe'] } },
  ],
  outcomes: nodeP08Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
