import type { GameState, WordCard, Slot, GameMap, MapNode } from './types';

export function createInitialState(hand: WordCard[], mapNodes: MapNode[]): GameState {
  return {
    hand,
    handLimit: 7,
    actionPoints: 0,
    phase: 'map',
    lastResult: null,
    map: {
      nodes: mapNodes.map(n => ({ ...n })),
      currentNodeId: null,
    },
  };
}

/** 現在のマップノードから進行可能なノードIDを返す */
export function getSelectableNodeIds(map: GameMap): string[] {
  if (map.currentNodeId === null) {
    // 最初: row 0 のノードが選択可能
    return map.nodes.filter(n => n.row === 0).map(n => n.id);
  }
  const current = map.nodes.find(n => n.id === map.currentNodeId);
  if (!current) return [];
  return current.nextIds;
}

/**
 * 手札の語とスロットの語を入れ替える（Swap）
 */
export function swapWord(
  state: GameState,
  slotIndex: number,
  cardIndex: number,
  slots: Slot[]
): { state: GameState; slots: Slot[] } | null {
  if (state.actionPoints <= 0) return null;
  if (state.phase !== 'playing') return null;

  const card = state.hand[cardIndex];
  const slot = slots[slotIndex];
  if (!card || !slot) return null;
  if (card.category !== slot.category) return null;

  const removedWord = slot.word;
  const newSlots = [...slots];
  newSlots[slotIndex] = { ...slot, word: card };

  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);
  if (removedWord) {
    newHand.push(removedWord);
  }

  return {
    state: { ...state, hand: newHand, actionPoints: state.actionPoints - 1 },
    slots: newSlots,
  };
}

/**
 * スロットから語を抜き取る（Extract）
 */
export function extractWord(
  state: GameState,
  slotIndex: number,
  slots: Slot[]
): { state: GameState; slots: Slot[] } | null {
  if (state.actionPoints <= 0) return null;
  if (state.phase !== 'playing') return null;

  const slot = slots[slotIndex];
  if (!slot || !slot.word) return null;
  if (state.hand.length >= state.handLimit) return null;

  const removedWord = slot.word;
  const newSlots = [...slots];
  newSlots[slotIndex] = { ...slot, word: null };

  return {
    state: { ...state, hand: [...state.hand, removedWord], actionPoints: state.actionPoints - 1 },
    slots: newSlots,
  };
}

/**
 * 空スロットに手札の語を挿し込む（Insert）
 */
export function insertWord(
  state: GameState,
  slotIndex: number,
  cardIndex: number,
  slots: Slot[]
): { state: GameState; slots: Slot[] } | null {
  if (state.actionPoints <= 0) return null;
  if (state.phase !== 'playing') return null;

  const card = state.hand[cardIndex];
  const slot = slots[slotIndex];
  if (!card || !slot) return null;
  if (slot.word !== null) return null;
  if (card.category !== slot.category) return null;

  const newSlots = [...slots];
  newSlots[slotIndex] = { ...slot, word: card };

  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);

  return {
    state: { ...state, hand: newHand, actionPoints: state.actionPoints - 1 },
    slots: newSlots,
  };
}
