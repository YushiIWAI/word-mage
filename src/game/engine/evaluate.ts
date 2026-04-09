import type { Slot, Outcome, NodeDef } from './types';

/**
 * 組み合わせ定義ベースの判定。
 * outcomes を先頭から走査し、最初にマッチした結果を返す。
 * マッチしなければ null（呼び出し側が defaultOutcome を使う）。
 *
 * 条件の優先度:
 * - 条件が多い（具体的な）Outcome を先に配置すべき
 * - 条件が少ない（汎用的な）Outcome を後ろに配置
 */
export function evaluateOutcome(slots: Slot[], outcomes: Outcome[]): Outcome | null {
  for (const outcome of outcomes) {
    if (matchesCondition(slots, outcome)) {
      return outcome;
    }
  }
  return null;
}

function matchesCondition(slots: Slot[], outcome: Outcome): boolean {
  for (const [slotId, condition] of Object.entries(outcome.conditions)) {
    const slot = slots.find(s => s.id === slotId);
    if (!slot || !slot.word) return false;
    if (typeof condition === 'string') {
      // カードID照合
      if (slot.word.id !== condition) return false;
    } else {
      // タグ照合（既存互換）
      if (!condition.every(tag => slot.word!.tags.includes(tag))) return false;
    }
  }
  return true;
}

/**
 * 副詞のdamage/quill補正値
 * テキストは変えず、数値のみ影響する
 */
const ADVERB_EFFECTS: Record<string, { damage: number; quill: number }> = {
  adv_quiet:  { damage: -1, quill: 0 },  // 静かに → 穏やかになる
  adv_fierce: { damage: 1,  quill: 1 },  // 激しく → 激化するが見応え
  adv_slow:   { damage: -1, quill: 0 },  // ゆっくり → 緩やかに
  adv_weak:   { damage: -1, quill: 0 },  // 力なく → 弱まる
  adv_sudden: { damage: 0,  quill: 2 },  // 突然 → 意外性ボーナス
};

/**
 * スロット内の副詞カードからdamage/quill補正を取得する。
 */
function getAdverbEffect(slots: Slot[]): { damage: number; quill: number } {
  const adverbSlot = slots.find(s => s.category === 'adverb' && s.word);
  if (!adverbSlot?.word) return { damage: 0, quill: 0 };
  return ADVERB_EFFECTS[adverbSlot.word.id] ?? { damage: 0, quill: 0 };
}

/**
 * ノードを解決する。
 * 返り値: { resultText, damage, quill, rewardCards }
 *
 * 副詞はテキストに影響せず、damage/quillの数値を補正する。
 */
export function resolveNode(node: NodeDef, currentSlots: Slot[]): {
  resultText: string;
  damage: number;
  quill: number;
  rewardCards?: import('./types').WordCard[];
} {
  const outcome = evaluateOutcome(currentSlots, node.outcomes);

  // 副詞の自動数値補正: outcomeのconditionsに副詞スロットが含まれている場合はスキップ
  // （固有テキスト方式のノードでは、damage/quillがOutcome自体に含まれているため）
  const outcomeHasAdverbCondition = outcome && Object.keys(outcome.conditions).some(slotId => {
    const slot = currentSlots.find(s => s.id === slotId);
    return slot?.category === 'adverb';
  });
  const adverb = outcomeHasAdverbCondition ? { damage: 0, quill: 0 } : getAdverbEffect(currentSlots);

  if (outcome) {
    return {
      resultText: outcome.resultText,
      damage: Math.max(0, outcome.damage + adverb.damage),
      quill: Math.max(0, outcome.quill + adverb.quill),
      rewardCards: outcome.rewardCards,
    };
  }
  return {
    resultText: node.defaultOutcome.resultText,
    damage: Math.max(0, node.defaultOutcome.damage + adverb.damage),
    quill: Math.max(0, node.defaultOutcome.quill + adverb.quill),
  };
}
