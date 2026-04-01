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
 * ノードを解決する。
 * 返り値: { resultText, damage, quill, rewardCards }
 */
export function resolveNode(node: NodeDef, currentSlots: Slot[]): {
  resultText: string;
  damage: number;
  quill: number;
  rewardCards?: import('./types').WordCard[];
} {
  const outcome = evaluateOutcome(currentSlots, node.outcomes);
  if (outcome) {
    return {
      resultText: outcome.resultText,
      damage: outcome.damage,
      quill: outcome.quill,
      rewardCards: outcome.rewardCards,
    };
  }
  return {
    resultText: node.defaultOutcome.resultText,
    damage: node.defaultOutcome.damage,
    quill: node.defaultOutcome.quill,
  };
}
