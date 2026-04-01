import type { BattleNodeDef, BattleState, Slot, BattleOutcome, EnemyAction, PlayerAction } from './types';

/** バトル開始時の状態を作る */
export function initBattle(node: BattleNodeDef): BattleState {
  const enemyAction = node.enemyActions[0];
  return {
    enemyHp: node.enemyHp,
    enemyMaxHp: node.enemyHp,
    turn: 0,
    enemySlots: cloneSlots(enemyAction.slots),
    playerSlots: cloneSlots(node.playerAction.slots),
    turnResult: null,
    turnPhase: 'writing',
  };
}

/** 現在のターンの敵行動パターンを取得 */
export function getCurrentEnemyAction(node: BattleNodeDef, turn: number): EnemyAction {
  return node.enemyActions[turn % node.enemyActions.length];
}

/** ターンを解決する */
export function resolveBattleTurn(
  node: BattleNodeDef,
  battle: BattleState
): {
  resultText: string;
  playerDamage: number;
  enemyDamage: number;
} {
  const enemyAction = getCurrentEnemyAction(node, battle.turn);
  const playerAction = node.playerAction;

  // 敵行動文の判定
  const enemyResult = evaluateBattleSentence(
    battle.enemySlots,
    enemyAction.outcomes,
    enemyAction.defaultOutcome
  );

  // プレイヤー行動文の判定
  const playerResult = evaluateBattleSentence(
    battle.playerSlots,
    playerAction.outcomes,
    playerAction.defaultOutcome
  );

  const totalPlayerDamage = Math.max(0, enemyResult.playerDamage + playerResult.playerDamage);
  const totalEnemyDamage = Math.max(0, enemyResult.enemyDamage + playerResult.enemyDamage);

  const resultParts: string[] = [];
  if (enemyResult.resultText) resultParts.push(enemyResult.resultText);
  if (playerResult.resultText) resultParts.push(playerResult.resultText);

  return {
    resultText: resultParts.join('\n'),
    playerDamage: totalPlayerDamage,
    enemyDamage: totalEnemyDamage,
  };
}

/** 次のターンへ進める */
export function advanceBattleTurn(node: BattleNodeDef, battle: BattleState, enemyDamage: number): BattleState {
  const newEnemyHp = Math.max(0, battle.enemyHp - enemyDamage);
  const nextTurn = battle.turn + 1;
  const nextEnemyAction = getCurrentEnemyAction(node, nextTurn);

  return {
    ...battle,
    enemyHp: newEnemyHp,
    turn: nextTurn,
    enemySlots: cloneSlots(nextEnemyAction.slots),
    playerSlots: cloneSlots(node.playerAction.slots),
    turnResult: null,
    turnPhase: 'writing',
  };
}

/** 敵が倒されたか */
export function isEnemyDefeated(battle: BattleState, enemyDamage: number): boolean {
  return battle.enemyHp - enemyDamage <= 0;
}

// --- 内部ヘルパー ---

function evaluateBattleSentence(
  slots: Slot[],
  outcomes: Array<{ id: string; conditions: Record<string, string | string[]>; resultText: string; playerDamage: number; enemyDamage: number }>,
  defaultOutcome: { resultText: string; playerDamage: number; enemyDamage: number }
): { resultText: string; playerDamage: number; enemyDamage: number } {
  for (const outcome of outcomes) {
    if (matchesCondition(slots, outcome.conditions)) {
      return {
        resultText: outcome.resultText,
        playerDamage: outcome.playerDamage,
        enemyDamage: outcome.enemyDamage,
      };
    }
  }
  return defaultOutcome;
}

function matchesCondition(slots: Slot[], conditions: Record<string, string | string[]>): boolean {
  for (const [slotId, condition] of Object.entries(conditions)) {
    const slot = slots.find(s => s.id === slotId);
    if (!slot || !slot.word) return false;
    if (typeof condition === 'string') {
      if (slot.word.id !== condition) return false;
    } else {
      if (!condition.every(tag => slot.word!.tags.includes(tag))) return false;
    }
  }
  return true;
}

function cloneSlots(slots: Slot[]): Slot[] {
  return slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }));
}
