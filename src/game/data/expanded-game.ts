/**
 * 拡張版15ノードゲームの設定
 * URL: ?mode=expanded でアクセス
 */
import type { WordCard, MapNode } from '../engine/types';
import { expandedModifiers, expandedSubjects, expandedPredicates, expandedAdverbs } from './expanded-cards';

// --- 初期手札（5枚: mod×2, subj×1, pred×1, adv×1）---
// 固定版（後方互換）
export const expandedInitialHand: WordCard[] = [
  expandedModifiers.find(c => c.id === 'mod_small')!,    // 小さな
  expandedModifiers.find(c => c.id === 'mod_gentle')!,   // 優しい
  expandedSubjects.find(c => c.id === 'subj_kitten')!,   // 子猫
  expandedPredicates.find(c => c.id === 'pred_flee')!,    // 逃げていく
  expandedAdverbs.find(c => c.id === 'adv_quiet')!,      // 静かに
];

// ランダム版: 品詞ごとの枚数は固定、中身をロスターからランダム選出（重複なし）
export function generateRandomHand(): WordCard[] {
  const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
  return [
    ...shuffle(expandedModifiers).slice(0, 2),
    ...shuffle(expandedSubjects).slice(0, 1),
    ...shuffle(expandedPredicates).slice(0, 1),
    ...shuffle(expandedAdverbs).slice(0, 1),
  ];
}

// --- 15ノードマップ（分岐あり）---
//
//          A (忘れられた橋)        row 0
//         / \
//      P06   P14                  row 1
//       / \  / \
//     P07  B    P15               row 2
//       \  |  /
//      P08   P09                  row 3
//       \   /
//      P10  P11                   row 4
//        \ /
//         C (霧の街道)            row 5
//        / \
//      P12  P13                   row 6
//        \ /
//         D (泉の声)              row 7
//         |
//         E (王の間)              row 8
//
export const expandedMapNodes: MapNode[] = [
  // Row 0
  { id: 'ex_a',   nodeDefId: 'node_a',   row: 0, col: 1, nextIds: ['ex_p06', 'ex_p14'], visited: false },
  // Row 1
  { id: 'ex_p06', nodeDefId: 'node_p06', row: 1, col: 0, nextIds: ['ex_p07', 'ex_b'],   visited: false },
  { id: 'ex_p14', nodeDefId: 'node_p14', row: 1, col: 2, nextIds: ['ex_b', 'ex_p15'],   visited: false },
  // Row 2
  { id: 'ex_p07', nodeDefId: 'node_p07', row: 2, col: 0, nextIds: ['ex_p08', 'ex_p09'], visited: false },
  { id: 'ex_b',   nodeDefId: 'node_b',   row: 2, col: 1, nextIds: ['ex_p08', 'ex_p09'], visited: false },
  { id: 'ex_p15', nodeDefId: 'node_p15', row: 2, col: 2, nextIds: ['ex_p08', 'ex_p09'], visited: false },
  // Row 3
  { id: 'ex_p08', nodeDefId: 'node_p08', row: 3, col: 0, nextIds: ['ex_p10', 'ex_p11'], visited: false },
  { id: 'ex_p09', nodeDefId: 'node_p09', row: 3, col: 2, nextIds: ['ex_p10', 'ex_p11'], visited: false },
  // Row 4
  { id: 'ex_p10', nodeDefId: 'node_p10', row: 4, col: 0, nextIds: ['ex_c'],             visited: false },
  { id: 'ex_p11', nodeDefId: 'node_p11', row: 4, col: 2, nextIds: ['ex_c'],             visited: false },
  // Row 5
  { id: 'ex_c',   nodeDefId: 'node_c',   row: 5, col: 1, nextIds: ['ex_p12', 'ex_p13'], visited: false },
  // Row 6
  { id: 'ex_p12', nodeDefId: 'node_p12', row: 6, col: 0, nextIds: ['ex_d'],             visited: false },
  { id: 'ex_p13', nodeDefId: 'node_p13', row: 6, col: 2, nextIds: ['ex_d'],             visited: false },
  // Row 7
  { id: 'ex_d',   nodeDefId: 'node_d',   row: 7, col: 1, nextIds: ['ex_e'],             visited: false },
  // Row 8
  { id: 'ex_e',   nodeDefId: 'node_e',   row: 8, col: 1, nextIds: [],                   visited: false },
];
