/** スロットの種別 */
export type SlotCategory = 'subject' | 'predicate' | 'object' | 'modifier' | 'adverb';

/** 語に付与されるタグ */
export interface WordCard {
  id: string;
  text: string;
  category: SlotCategory;
  tags: string[];
}

/** ノード内の1スロット */
export interface Slot {
  id: string;
  category: SlotCategory;
  word: WordCard | null; // nullなら空スロット（████）
}

/**
 * 文章の構成要素: スロット（操作可能）か固定テキスト（助詞等）のどちらか。
 * 表示順に並べて自然な日本語文にする。
 */
export type SentencePart =
  | { type: 'slot'; slotId: string }
  | { type: 'particle'; text: string };

/** 書き換え結果の判定条件 */
export interface Outcome {
  id: string;
  /** タグ条件: 各スロットIDに対して必要なタグの配列 */
  conditions: Record<string, string[]>;
  /** 結果テキスト */
  resultText: string;
  /** 獲得可能な追加報酬（ボーナスワード等） */
  bonus?: WordCard[];
}

/** ノードの種別 */
export type NodeType = 'puzzle' | 'rest' | 'shop' | 'boss' | 'event';

/** 1ノードの定義 */
export interface NodeDef {
  id: string;
  /** ノード表示名 */
  title: string;
  /** ノード種別 */
  nodeType: NodeType;
  /** 文章の表示順序（スロットと固定テキストの配列） */
  sentence: SentencePart[];
  /** 操作可能なスロット群 */
  slots: Slot[];
  /** 判定に使う結果パターン */
  outcomes: Outcome[];
  /** デフォルト結果（どのoutcomeにもマッチしない場合） */
  defaultOutcome: {
    resultText: string;
  };
  /** このノードで提供されるAP */
  actionPoints: number;
}

/** マップ上のノード位置 */
export interface MapNode {
  id: string;
  /** 参照するNodeDefのID */
  nodeDefId: string;
  /** マップ上の層（row）: 0がスタート */
  row: number;
  /** マップ上の列位置 */
  col: number;
  /** このノードから進める次のノードID */
  nextIds: string[];
  /** 訪問済みフラグ */
  visited: boolean;
}

/** マップ全体の定義 */
export interface GameMap {
  nodes: MapNode[];
  /** 現在のノードID（null=マップ選択中） */
  currentNodeId: string | null;
}

/** ゲーム全体の状態 */
export interface GameState {
  /** プレイヤーの手札 */
  hand: WordCard[];
  /** 手札上限 */
  handLimit: number;
  /** 現在のAP */
  actionPoints: number;
  /** ゲームフェーズ */
  phase: 'map' | 'playing' | 'resolved';
  /** 直前の結果テキスト */
  lastResult: string | null;
  /** マップ */
  map: GameMap;
}
