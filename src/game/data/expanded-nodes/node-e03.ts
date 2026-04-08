import type { NodeDef } from '../../engine/types';
import { nodeE03Outcomes } from './generated/node-e03-outcomes';

export const nodeE03: NodeDef = {
  id: 'node_e03',
  title: '呪いの森',
  nodeType: 'elite',
  sentence: [
    { type: 'slot', slotId: 's1' },
    { type: 'slot', slotId: 's2' },
    { type: 'slot', slotId: 's3' },
    { type: 'slot', slotId: 's4' },
  ],
  slots: [
    { id: 's1', category: 'modifier', locked: true, word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['curse', 'dark', 'threat:high'] } },
    { id: 's2', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
    { id: 's3', category: 'object', locked: true, word: { id: 'orig_e03_obj', text: '森', category: 'object', tags: ['forest', 'nature', 'dark'] } },
    { id: 's4', category: 'predicate', word: { id: 'pred_hide', text: '隠している', category: 'predicate', tags: ['hide', 'conceal', 'secret'] } },
  ],
  outcomes: nodeE03Outcomes,
  defaultOutcome: {
    resultText: '文が歪んだ。書き換えが世界に馴染まず、言葉が宙に散った。体に鈍い痛みが走る。',
    damage: 4,
    quill: 0,
  },
  actionPoints: 3,
};
