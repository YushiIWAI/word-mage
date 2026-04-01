import type { Slot, Outcome, NodeDef } from './types';

/**
 * 現在のスロット状態に対してoutcomeを評価し、最初にマッチしたものを返す。
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
  for (const [slotId, requiredTags] of Object.entries(outcome.conditions)) {
    const slot = slots.find(s => s.id === slotId);
    if (!slot || !slot.word) return false;
    if (!requiredTags.every(tag => slot.word!.tags.includes(tag))) {
      return false;
    }
  }
  return true;
}

/**
 * ノードを解決し、結果テキストを返す
 */
export function resolveNode(node: NodeDef, currentSlots: Slot[]): string {
  const outcome = evaluateOutcome(currentSlots, node.outcomes);
  if (outcome) {
    return outcome.resultText;
  }
  return node.defaultOutcome.resultText;
}
