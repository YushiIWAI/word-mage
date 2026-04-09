/**
 * 5面構成マップ生成エンジン
 * 各面9ノードの一本道。面ごとにHP/AP/手札リセット。
 * puzzleノードは5面分まとめてシャッフルし重複なし配分。
 */
import type { MapNode, ShopNodeDef, TreasureNodeDef } from './types';
import { generateShop, generateTreasure } from '../data/expanded-nodes/shops';

// --- 面構成定義 ---

type NodeType = 'start' | 'puzzle' | 'treasure' | 'shop' | 'boss' | 'battle' | 'rest' | 'elite';

interface LayerConfig {
  type: NodeType;
}

interface StageConfig {
  name: string;
  theme: string;
  layers: LayerConfig[];
  bossId?: string;
}

const STAGES: StageConfig[] = [
  {
    name: '森',
    theme: '序盤',
    layers: [
      { type: 'start' },
      { type: 'shop' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'treasure' },
      { type: 'battle' },
      { type: 'puzzle' },
    ],
  },
  {
    name: '谷',
    theme: '中盤',
    layers: [
      { type: 'start' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'rest' },
      { type: 'puzzle' },
      { type: 'battle' },
      { type: 'boss' },
    ],
    bossId: 'node_boss01',
  },
  {
    name: '山',
    theme: '中盤',
    layers: [
      { type: 'start' },
      { type: 'shop' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'treasure' },
      { type: 'elite' },
      { type: 'battle' },
      { type: 'puzzle' },
    ],
  },
  {
    name: '城',
    theme: '終盤',
    layers: [
      { type: 'start' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'rest' },
      { type: 'elite' },
      { type: 'battle' },
      { type: 'boss' },
    ],
    bossId: 'node_boss02',
  },
  {
    name: '塔',
    theme: '最終',
    layers: [
      { type: 'start' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'puzzle' },
      { type: 'rest' },
      { type: 'elite' },
      { type: 'battle' },
      { type: 'boss' },
    ],
    bossId: 'node_boss03',
  },
];

// --- ノード定義IDプール ---

const START_NODE_DEF_ID = '__start__';

const NODE_POOL = [
  'node_a', 'node_b', 'node_c', 'node_d',
  'node_p06', 'node_p07', 'node_p08', 'node_p09', 'node_p10',
  'node_p11', 'node_p12', 'node_p13', 'node_p14', 'node_p15',
  'node_p16', 'node_p17', 'node_p18', 'node_p19', 'node_p20',
  'node_p21', 'node_p22', 'node_p23', 'node_p24', 'node_p25', 'node_p26',
  'node_p27', 'node_p28',
  'node_e01', 'node_e02', 'node_e03', 'node_e04', 'node_e05', 'node_e06',
  'node_r01', 'node_r02', 'node_r03', 'node_r04', 'node_r05',
];
const BATTLE_POOL = ['node_bt01', 'node_bt02', 'node_bt03', 'node_bt04'];

// --- ノードタイプ判定用IDセット ---
const REST_IDS = new Set(['node_p06', 'node_p12', 'node_r01', 'node_r02', 'node_r03', 'node_r04', 'node_r05']);
const ELITE_IDS = new Set(['node_e01', 'node_e02', 'node_e03', 'node_e04', 'node_e05', 'node_e06']);

// --- ユーティリティ ---

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- 戻り値型 ---

/** 後方互換: 1面分のマップ（旧APIと同構造） */
export interface GeneratedMap {
  nodes: MapNode[];
  shopDef: ShopNodeDef;
  treasureDef: TreasureNodeDef;
}

/** 5面構成の1面分 */
export interface GeneratedStage {
  stageIndex: number;
  stageName: string;
  stageTheme: string;
  nodes: MapNode[];
  shopDef?: ShopNodeDef;
  treasureDef?: TreasureNodeDef;
}

// --- メイン関数 ---

/** 5面分のマップをまとめて生成 */
export function generateAllStages(): GeneratedStage[] {
  // 1. 全NODE_POOLをシャッフルし、タイプ別に分離
  const allShuffled = shuffle(NODE_POOL);
  const restNodes = allShuffled.filter(id => REST_IDS.has(id));
  const eliteNodes = allShuffled.filter(id => ELITE_IDS.has(id));
  const normalPuzzles = allShuffled.filter(id => !REST_IDS.has(id) && !ELITE_IDS.has(id));

  let puzzleIdx = 0;
  let restIdx = 0;
  let eliteIdx = 0;
  const battleShuffled = shuffle(BATTLE_POOL);
  let battleIdx = 0;

  return STAGES.map((stage, stageIndex) => {
    // 面ごとにshop/treasure定義を生成（必要な面のみ）
    const hasShop = stage.layers.some(l => l.type === 'shop');
    const hasTreasure = stage.layers.some(l => l.type === 'treasure');
    const shopDef = hasShop ? generateShop(stageIndex) : undefined;
    const treasureDef = hasTreasure ? generateTreasure() : undefined;

    const nodes: MapNode[] = [];

    for (let layerIdx = 0; layerIdx < stage.layers.length; layerIdx++) {
      const config = stage.layers[layerIdx];
      let nodeDefId: string;

      switch (config.type) {
        case 'start':
          nodeDefId = START_NODE_DEF_ID;
          break;
        case 'puzzle':
          nodeDefId = normalPuzzles[puzzleIdx % normalPuzzles.length];
          puzzleIdx++;
          break;
        case 'rest':
          nodeDefId = restNodes[restIdx % restNodes.length];
          restIdx++;
          break;
        case 'elite':
          nodeDefId = eliteNodes[eliteIdx % eliteNodes.length];
          eliteIdx++;
          break;
        case 'treasure':
          nodeDefId = treasureDef!.id;
          break;
        case 'shop':
          nodeDefId = shopDef!.id;
          break;
        case 'battle':
          nodeDefId = battleShuffled[battleIdx % battleShuffled.length];
          battleIdx++;
          break;
        case 'boss':
          nodeDefId = stage.bossId!;
          break;
      }

      const isLast = layerIdx === stage.layers.length - 1;
      const nextId = isLast ? [] : [`stage${stageIndex}_${layerIdx + 1}`];

      nodes.push({
        id: `stage${stageIndex}_${layerIdx}`,
        nodeDefId,
        row: layerIdx,
        col: 1,
        nextIds: nextId,
        visited: false,
      });
    }

    // 層0（start）を自動通過済みにする
    nodes[0].visited = true;

    return {
      stageIndex,
      stageName: stage.name,
      stageTheme: stage.theme,
      nodes,
      shopDef,
      treasureDef,
    };
  });
}

/** 後方互換: 1面分のマップ生成（旧API） */
export function generateMap(): GeneratedMap {
  const stages = generateAllStages();
  const first = stages[0];
  return {
    nodes: first.nodes,
    shopDef: first.shopDef ?? generateShop(),
    treasureDef: first.treasureDef ?? generateTreasure(),
  };
}

/** 面の総数を返す */
export const TOTAL_STAGES = STAGES.length;

/** 面の名前を返す */
export function getStageName(stageIndex: number): string {
  return STAGES[stageIndex]?.name ?? '';
}

/** 面のテーマを返す */
export function getStageTheme(stageIndex: number): string {
  return STAGES[stageIndex]?.theme ?? '';
}
