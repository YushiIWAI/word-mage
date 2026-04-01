import type { GameState, WordCard, Slot, MapNode, CATEGORY_COMPAT } from './types';

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
    hp: 20,
    maxHp: 20,
    quill: 0,
    battle: null,
    items: [],
  };
}

/** 現在のマップノードから進行可能なノードIDを返す */
export function getSelectableNodeIds(map: import('./types').GameMap): string[] {
  if (map.currentNodeId === null) {
    return map.nodes.filter(n => n.row === 0).map(n => n.id);
  }
  const current = map.nodes.find(n => n.id === map.currentNodeId);
  if (!current) return [];
  return current.nextIds;
}

/** カテゴリの互換性チェック */
function isCategoryCompatible(cardCategory: string, slotCategory: string): boolean {
  // object系は相互互換
  const objectCategories = ['object', 'object_ni', 'object_de', 'object_kara'];
  if (objectCategories.includes(cardCategory) && objectCategories.includes(slotCategory)) {
    return true;
  }
  return cardCategory === slotCategory;
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
  if (state.phase !== 'playing' && state.phase !== 'battle') return null;

  const card = state.hand[cardIndex];
  const slot = slots[slotIndex];
  if (!card || !slot) return null;
  if (!isCategoryCompatible(card.category, slot.category)) return null;

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
  if (state.phase !== 'playing' && state.phase !== 'battle') return null;

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
  if (state.phase !== 'playing' && state.phase !== 'battle') return null;

  const card = state.hand[cardIndex];
  const slot = slots[slotIndex];
  if (!card || !slot) return null;
  if (slot.word !== null) return null;
  if (!isCategoryCompatible(card.category, slot.category)) return null;

  const newSlots = [...slots];
  newSlots[slotIndex] = { ...slot, word: card };

  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);

  return {
    state: { ...state, hand: newHand, actionPoints: state.actionPoints - 1 },
    slots: newSlots,
  };
}

/** HP変更を適用（負のダメージ=回復） */
export function applyDamage(state: GameState, damage: number): GameState {
  const newHp = Math.max(0, Math.min(state.maxHp, state.hp - damage));
  return {
    ...state,
    hp: newHp,
    phase: newHp <= 0 ? 'gameover' : state.phase,
  };
}

/** Quill獲得 */
export function addQuill(state: GameState, amount: number): GameState {
  return { ...state, quill: state.quill + amount };
}

/** アイテム追加 */
export function addItems(state: GameState, items: import('./types').Item[]): GameState {
  return { ...state, items: [...state.items, ...items] };
}

/** ショップで語カードを購入 */
export function buyCard(state: GameState, card: import('./types').WordCard, price: number): GameState | null {
  if (state.quill < price) return null;
  if (state.hand.length >= state.handLimit) return null;
  return {
    ...state,
    quill: state.quill - price,
    hand: [...state.hand, card],
  };
}

/** ショップで手札の語カードを売却 */
export function sellCard(state: GameState, cardIndex: number, price: number): GameState | null {
  const card = state.hand[cardIndex];
  if (!card) return null;
  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);
  return {
    ...state,
    quill: state.quill + price,
    hand: newHand,
  };
}

/** アイテムを売却 */
export function sellItem(state: GameState, itemIndex: number): GameState | null {
  const item = state.items[itemIndex];
  if (!item) return null;
  const newItems = [...state.items];
  newItems.splice(itemIndex, 1);
  return {
    ...state,
    quill: state.quill + item.sellPrice,
    items: newItems,
  };
}
