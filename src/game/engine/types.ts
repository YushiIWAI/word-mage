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
export type NodeType = 'puzzle' | 'elite' | 'rest' | 'shop' | 'boss' | 'event' | 'treasure' | 'battle';

// ===== 1文構成ノード（非戦闘） =====

/** 1ノードの定義（通常ノード / 非戦闘） */
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

// ===== 2文構成バトル =====

/** バトルの1ターン分の敵行動パターン */
export interface EnemyAction {
  /** このターンの敵行動文の表示順 */
  sentence: SentencePart[];
  /** 敵行動文のスロット群 */
  slots: Slot[];
  /** 敵行動に対する判定（組み合わせ定義） */
  outcomes: Outcome[];
  /** デフォルト（プレイヤーが敵文を書き換えなかった場合） */
  defaultOutcome: {
    resultText: string;
    /** プレイヤーへのダメージ */
    playerDamage: number;
    /** 敵へのダメージ */
    enemyDamage: number;
  };
}

/** プレイヤーの行動文テンプレート */
export interface PlayerAction {
  /** プレイヤー行動文の表示順 */
  sentence: SentencePart[];
  /** プレイヤー行動文のスロット群（毎ターンリセット） */
  slots: Slot[];
  /** 判定 */
  outcomes: Outcome[];
  /** デフォルト */
  defaultOutcome: {
    resultText: string;
    playerDamage: number;
    enemyDamage: number;
  };
}

/** バトル用のOutcome（プレイヤー・敵双方へのダメージ） */
export interface BattleOutcome {
  id: string;
  /** どの文のどのスロットに対する条件か（"enemy.s1", "player.s2" 等） */
  conditions: Record<string, string[]>;
  resultText: string;
  /** プレイヤーへのダメージ（0以上） */
  playerDamage: number;
  /** 敵へのダメージ（0以上） */
  enemyDamage: number;
}

/** バトルノードの定義 */
export interface BattleNodeDef {
  id: string;
  title: string;
  nodeType: 'battle' | 'boss';
  /** 敵の名前 */
  enemyName: string;
  /** 敵の最大HP */
  enemyHp: number;
  /** 毎ターンのAP */
  actionPoints: number;
  /** 敵の行動パターン（ターンごとにローテーション） */
  enemyActions: EnemyAction[];
  /** プレイヤーの行動文（毎ターンこの状態にリセット） */
  playerAction: PlayerAction;
  /** 勝利時の報酬 */
  victoryGold: number;
  victoryRewardCards?: WordCard[];
}

/** バトル進行中の状態 */
export interface BattleState {
  /** 敵の現在HP */
  enemyHp: number;
  enemyMaxHp: number;
  /** 現在のターン数（0始まり） */
  turn: number;
  /** 現在のターンの敵行動スロット（書き換え可能） */
  enemySlots: Slot[];
  /** 現在のターンのプレイヤー行動スロット（書き換え可能） */
  playerSlots: Slot[];
  /** ターンの結果テキスト */
  turnResult: string | null;
  /** ターンのフェーズ */
  turnPhase: 'writing' | 'resolved';
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
  phase: 'map' | 'playing' | 'resolved' | 'battle' | 'gameover';
  lastResult: string | null;
  map: GameMap;
  /** HP */
  hp: number;
  maxHp: number;
  /** ゴールド */
  gold: number;
  /** バトル中の状態（phase === 'battle' の時のみ有効） */
  battle: BattleState | null;
}
