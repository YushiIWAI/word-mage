/**
 * 半ランダムマップ生成エンジン
 * 一本道8ノード: start → puzzle → treasure → puzzle → battle → shop → puzzle → boss
 */
import type { MapNode, ShopNodeDef, TreasureNodeDef } from './types';
import { generateShop, generateTreasure } from '../data/expanded-nodes/shops';

// --- 層構成定義（一本道） ---

interface LayerConfig {
  type: 'start' | 'puzzle' | 'treasure' | 'shop' | 'boss' | 'battle';
}

const LAYER_CONFIGS: LayerConfig[] = [
  { type: 'start' },     // 層0: スタート（自動通過）
  { type: 'puzzle' },     // 層1: 最初のパズル
  { type: 'treasure' },   // 層2: トレジャー
  { type: 'puzzle' },     // 層3: パズル
  { type: 'battle' },     // 層4: バトル
  { type: 'shop' },       // 層5: ショップ
  { type: 'puzzle' },     // 層6: パズル
  { type: 'boss' },       // 層7: ボス
];

// --- ノード定義IDプール ---

const START_NODE_DEF_ID = '__start__';

const PUZZLE_POOL = [
  'node_a', 'node_b', 'node_c', 'node_d',
  'node_p06', 'node_p07', 'node_p08', 'node_p09', 'node_p10',
  'node_p11', 'node_p12', 'node_p13', 'node_p14', 'node_p15',
  'node_p16', 'node_p17', 'node_p18', 'node_p19', 'node_p20',
  'node_p21', 'node_p22', 'node_p23', 'node_p24', 'node_p25', 'node_p26',
  'node_e01', 'node_e02', 'node_e03', 'node_e04', 'node_e05', 'node_e06',
  'node_r01', 'node_r02', 'node_r03', 'node_r04', 'node_r05',
];
const BATTLE_POOL = ['node_bt01', 'node_bt02', 'node_bt03', 'node_bt04'];
const BOSS_POOL = ['node_boss01', 'node_boss02', 'node_boss03'];

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

export interface GeneratedMap {
  nodes: MapNode[];
  shopDef: ShopNodeDef;
  treasureDef: TreasureNodeDef;
}

// --- メイン関数 ---

export function generateMap(): GeneratedMap {
  const shopDef = generateShop();
  const treasureDef = generateTreasure();

  // puzzleノードをシャッフル
  const shuffledPuzzles = shuffle(PUZZLE_POOL);
  let puzzleIdx = 0;

  const nodes: MapNode[] = [];

  for (let layerIdx = 0; layerIdx < LAYER_CONFIGS.length; layerIdx++) {
    const config = LAYER_CONFIGS[layerIdx];

    let nodeDefId: string;
    switch (config.type) {
      case 'start':
        nodeDefId = START_NODE_DEF_ID;
        break;
      case 'puzzle':
        nodeDefId = shuffledPuzzles[puzzleIdx++];
        break;
      case 'treasure':
        nodeDefId = treasureDef.id;
        break;
      case 'shop':
        nodeDefId = shopDef.id;
        break;
      case 'battle':
        nodeDefId = BATTLE_POOL[Math.floor(Math.random() * BATTLE_POOL.length)];
        break;
      case 'boss':
        nodeDefId = BOSS_POOL[Math.floor(Math.random() * BOSS_POOL.length)];
        break;
    }

    const isLast = layerIdx === LAYER_CONFIGS.length - 1;
    const nextId = isLast ? [] : [`map_${layerIdx + 1}_0`];

    nodes.push({
      id: `map_${layerIdx}_0`,
      nodeDefId,
      row: layerIdx,
      col: 1,
      nextIds: nextId,
      visited: false,
    });
  }

  // 層0を自動通過済みにする
  nodes[0].visited = true;

  return { nodes, shopDef, treasureDef };
}
