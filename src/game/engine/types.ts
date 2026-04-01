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

/** 1ノードの定義 */
export interface NodeDef {
  id: string;
  /** ノード表示名 */
  title: string;
  /** 元の文章（表示用） */
  displayText: string;
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

/** ゲーム全体の状態 */
export interface GameState {
  /** 現在のノードインデックス */
  currentNodeIndex: number;
  /** プレイヤーの手札 */
  hand: WordCard[];
  /** 手札上限 */
  handLimit: number;
  /** 現在のAP */
  actionPoints: number;
  /** ゲームフェーズ */
  phase: 'playing' | 'resolved' | 'transition';
  /** 直前の結果テキスト */
  lastResult: string | null;
}
