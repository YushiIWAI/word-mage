/**
 * 旅の兆し（ラン修飾子）
 * ラン開始時にランダムで1つ選ばれ、ラン全体のルールを軽く変える
 */
import type { Omen } from '../engine/types';

export const OMENS: Omen[] = [
  {
    id: 'heavy_words',
    name: '言葉が重い日',
    description: '書き換えに力がいる（AP-2）が、筆に宿る力は大きい（Quill +50%）',
    apBonus: -2,
    quillMultiplier: 1.5,
  },
  {
    id: 'merchant_season',
    name: '商人の季節',
    description: '旅商人が気前よくなる（ショップ価格 -30%）',
    shopPriceMultiplier: 0.7,
  },
  {
    id: 'sturdy_traveler',
    name: '頑丈な旅人',
    description: '体が丈夫な日（HP +3）だが、筆が鈍い（Quill -30%）',
    hpBonus: 3,
    quillMultiplier: 0.7,
  },
  {
    id: 'swift_pen',
    name: '疾風の筆',
    description: '筆が走る（AP +2）が、体が脆い（HP -3）',
    apBonus: 2,
    hpBonus: -3,
  },
  {
    id: 'calm_journey',
    name: '穏やかな旅路',
    description: '何事もない普通の日',
    // 補正なし — バニラのラン
  },
];

/** ランダムで兆しを1つ選ぶ */
export function pickOmen(): Omen {
  return OMENS[Math.floor(Math.random() * OMENS.length)];
}
