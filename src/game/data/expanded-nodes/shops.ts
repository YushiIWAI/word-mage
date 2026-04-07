/**
 * expanded版のショップ・トレジャーノード生成
 * 毎ランごとにランダムな品揃え/カードプールを生成する
 */
import type { ShopNodeDef, TreasureNodeDef, WordCard } from '../../engine/types';
import { expandedModifiers, expandedSubjects, expandedPredicates, expandedAdverbs } from '../expanded-cards';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 永続カード候補 */
const PERSISTENT_CARDS: WordCard[] = [
  {
    id: 'perm_quill', text: '魔法の羽根ペン', category: 'modifier',
    tags: ['magic', 'tool'],
    persistent: { description: 'AP+1', effect: { type: 'ap_bonus', amount: 1 } },
  },
  {
    id: 'perm_pouch', text: '底なしの袋', category: 'modifier',
    tags: ['magic', 'container'],
    persistent: { description: '手札上限+2', effect: { type: 'hand_limit', amount: 2 } },
  },
  {
    id: 'perm_coin', text: '幸運の硬貨', category: 'modifier',
    tags: ['quill', 'luck'],
    persistent: { description: '毎ノード+2Q', effect: { type: 'quill_bonus', amount: 2 } },
  },
];

/**
 * ショップノード定義をランダム生成
 * 修飾語2枚 + 主語2枚 + 述語1枚 + 永続カード1枚
 */
export function generateShop(): ShopNodeDef {
  const mods = shuffle(expandedModifiers.filter(c => !c.persistent)).slice(0, 2);
  const subjs = shuffle(expandedSubjects).slice(0, 2);
  const preds = shuffle(expandedPredicates).slice(0, 1);
  const perm = shuffle(PERSISTENT_CARDS)[0];

  const stock = [
    ...mods.map(c => ({ type: 'word' as const, card: c, price: 8 })),
    ...subjs.map(c => ({ type: 'word' as const, card: c, price: 10 })),
    ...preds.map(c => ({ type: 'word' as const, card: c, price: 8 })),
    { type: 'word' as const, card: perm, price: 15 },
  ];

  return {
    id: 'node_shop_expanded',
    title: '旅商人',
    nodeType: 'shop',
    stock,
    sellPricePerCard: 3,
  };
}

/**
 * トレジャーノード定義をランダム生成
 * 全カードプールから4枚選出、うち2枚を提示
 */
export function generateTreasure(): TreasureNodeDef {
  const allCards = [
    ...expandedModifiers.filter(c => !c.persistent),
    ...expandedSubjects,
    ...expandedPredicates,
    ...expandedAdverbs,
  ];
  const pool = shuffle(allCards).slice(0, 4);

  return {
    id: 'node_treasure_expanded',
    title: '苔むした宝箱',
    nodeType: 'treasure',
    pickCount: 2,
    flavorText: '古い箱の中に、まだ力を持つ言葉が残っていた。',
    cardPool: pool,
  };
}
