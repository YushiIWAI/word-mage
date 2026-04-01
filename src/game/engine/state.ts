import type { GameState, WordCard, Slot, NodeDef } from './types';

export function createInitialState(hand: WordCard[]): GameState {
  return {
    currentNodeIndex: 0,
    hand,
    handLimit: 5,
    actionPoints: 3,
    phase: 'playing',
    lastResult: null,
  };
}

/**
 * 手札の語とスロットの語を入れ替える（Swap）
 * 手札からcardを消費し、スロットの語を手札に加える
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
    state: {
      ...state,
      hand: newHand,
      actionPoints: state.actionPoints - 1,
    },
    slots: newSlots,
  };
}

/**
 * スロットから語を抜き取る（Extract）
 * スロットの語を手札に加え、スロットは空になる
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

  const newHand = [...state.hand, removedWord];

  return {
    state: {
      ...state,
      hand: newHand,
      actionPoints: state.actionPoints - 1,
    },
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
  if (slot.word !== null) return null; // 空スロットのみ
  if (card.category !== slot.category) return null;

  const newSlots = [...slots];
  newSlots[slotIndex] = { ...slot, word: card };

  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);

  return {
    state: {
      ...state,
      hand: newHand,
      actionPoints: state.actionPoints - 1,
    },
    slots: newSlots,
  };
}
