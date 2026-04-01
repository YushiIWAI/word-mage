/** スロットの種別（助詞を決定する） */
export type SlotCategory =
  | 'subject'      // → が
  | 'object'       // → を
  | 'object_ni'    // → に
  | 'object_de'    // → で
  | 'object_kara'  // → から
  | 'modifier'     // → （なし）
  | 'adverb'       // → （なし）
  | 'predicate';   // → （なし、文末）

/** スロットカテゴリの互換グループ（入れ替え可能なカテゴリ群） */
export const CATEGORY_COMPAT: Record<string, SlotCategory[]> = {
  subject: ['subject'],
  object: ['object', 'object_ni', 'object_de', 'object_kara'],
  object_ni: ['object', 'object_ni', 'object_de', 'object_kara'],
  object_de: ['object', 'object_ni', 'object_de', 'object_kara'],
  object_kara: ['object', 'object_ni', 'object_de', 'object_kara'],
  modifier: ['modifier'],
  adverb: ['adverb'],
  predicate: ['predicate'],
};

/** スロットカテゴリから助詞を取得 */
export function getParticle(category: SlotCategory): string {
  switch (category) {
    case 'subject': return 'が';
    case 'object': return 'を';
    case 'object_ni': return 'に';
    case 'object_de': return 'で';
    case 'object_kara': return 'から';
    default: return '';
  }
}

/** 語に付与されるタグ */
export interface WordCard {
  id: string;
  text: string;
  /** カードが持つカテゴリ（どのスロットに入れられるか） */
  category: SlotCategory;
  tags: string[];
}

/** ノード内の1スロット */
export interface Slot {
  id: string;
  category: SlotCategory;
  word: WordCard | null;
}

/** 固定テキスト（「槍を持って」のような操作不可部分） */
export interface FixedText {
  type: 'fixed';
  text: string;
}

/** 文の構成要素 */
export type SentencePart =
  | { type: 'slot'; slotId: string }
  | FixedText;

/** 組み合わせ定義による結果判定 */
export interface Outcome {
  id: string;
  /** 条件: スロットIDごとに必要なタグ（AND条件） */
  conditions: Record<string, string[]>;
  /** 結果テキスト */
  resultText: string;
  /** ダメージ（0=ノーダメ、低いほど良い結果） */
  damage: number;
  /** ゴールド報酬 */
  gold: number;
  /** 獲得可能な語カード */
  rewardCards?: WordCard[];
}

/** ノードの種別 */
export type NodeType = 'puzzle' | 'elite' | 'rest' | 'shop' | 'boss' | 'event' | 'treasure';

/** 1ノードの定義 */
export interface NodeDef {
  id: string;
  title: string;
  nodeType: NodeType;
  /** 文の表示順（スロット＋固定テキスト） */
  sentence: SentencePart[];
  /** 操作可能なスロット群 */
  slots: Slot[];
  /** 組み合わせ定義の結果パターン（優先度順） */
  outcomes: Outcome[];
  /** どのoutcomeにもマッチしない場合（失敗） */
  defaultOutcome: {
    resultText: string;
    damage: number;
    gold: number;
  };
  /** このノードで使えるAP */
  actionPoints: number;
}

/** マップ上のノード位置 */
export interface MapNode {
  id: string;
  nodeDefId: string;
  row: number;
  col: number;
  nextIds: string[];
  visited: boolean;
}

/** マップ全体 */
export interface GameMap {
  nodes: MapNode[];
  currentNodeId: string | null;
}

/** ゲーム全体の状態 */
export interface GameState {
  hand: WordCard[];
  handLimit: number;
  actionPoints: number;
  phase: 'map' | 'playing' | 'resolved' | 'gameover';
  lastResult: string | null;
  map: GameMap;
  /** HP */
  hp: number;
  maxHp: number;
  /** ゴールド */
  gold: number;
}
