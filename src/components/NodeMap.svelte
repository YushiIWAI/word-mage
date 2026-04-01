<script lang="ts">
  import type { GameMap, MapNode, NodeType } from '../game/engine/types';

  interface Props {
    map: GameMap;
    selectableIds: string[];
    onSelect: (nodeId: string) => void;
  }

  let { map, selectableIds, onSelect }: Props = $props();

  // 行ごとにグループ化
  let rows = $derived(groupByRow(map.nodes));

  function groupByRow(nodes: MapNode[]): MapNode[][] {
    const maxRow = Math.max(...nodes.map(n => n.row));
    const result: MapNode[][] = [];
    for (let r = 0; r <= maxRow; r++) {
      result.push(nodes.filter(n => n.row === r).sort((a, b) => a.col - b.col));
    }
    return result;
  }

  const nodeTypeLabels: Record<NodeType, string> = {
    puzzle: '⚔',
    rest: '♨',
    shop: '🏪',
    boss: '👑',
    event: '？',
  };

  function isSelectable(nodeId: string): boolean {
    return selectableIds.includes(nodeId);
  }

  function isVisited(node: MapNode): boolean {
    return node.visited;
  }

  function isCurrent(node: MapNode): boolean {
    return map.currentNodeId === node.id;
  }

  // エッジ（接続線）の計算
  type Edge = { from: MapNode; to: MapNode };
  let edges = $derived(computeEdges(map.nodes));

  function computeEdges(nodes: MapNode[]): Edge[] {
    const result: Edge[] = [];
    for (const node of nodes) {
      for (const nextId of node.nextIds) {
        const target = nodes.find(n => n.id === nextId);
        if (target) {
          result.push({ from: node, to: target });
        }
      }
    }
    return result;
  }

  // ノード位置の計算（SVG座標）
  const COL_WIDTH = 120;
  const ROW_HEIGHT = 80;
  const PADDING_X = 60;
  const PADDING_Y = 40;

  function nodeX(node: MapNode): number {
    return PADDING_X + node.col * COL_WIDTH;
  }

  function nodeY(node: MapNode): number {
    return PADDING_Y + node.row * ROW_HEIGHT;
  }
</script>

<div class="map-container">
  <h2 class="map-title">— 旅路を選べ —</h2>

  <div class="map-scroll">
    <svg
      class="map-svg"
      viewBox="0 0 {PADDING_X * 2 + 2 * COL_WIDTH} {PADDING_Y * 2 + 3 * ROW_HEIGHT}"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- 接続線 -->
      {#each edges as edge}
        <line
          x1={nodeX(edge.from)}
          y1={nodeY(edge.from) + 16}
          x2={nodeX(edge.to)}
          y2={nodeY(edge.to) - 16}
          class="edge"
          class:edge-visited={edge.from.visited}
        />
      {/each}

      <!-- ノード -->
      {#each map.nodes as node}
        <g
          class="map-node"
          class:selectable={isSelectable(node.id)}
          class:visited={isVisited(node)}
          class:current={isCurrent(node)}
          transform="translate({nodeX(node)}, {nodeY(node)})"
          onclick={() => isSelectable(node.id) && onSelect(node.id)}
          role="button"
          tabindex={isSelectable(node.id) ? 0 : -1}
          onkeydown={(e) => e.key === 'Enter' && isSelectable(node.id) && onSelect(node.id)}
        >
          <circle r="22" class="node-circle" />
          <text class="node-icon" text-anchor="middle" dominant-baseline="central">
            {nodeTypeLabels[node.nodeDefId.includes('boss') ? 'boss' : node.nodeDefId.includes('3b') ? 'rest' : 'puzzle']}
          </text>
        </g>
      {/each}
    </svg>
  </div>
</div>

<style>
  .map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .map-title {
    font-family: var(--font-story);
    font-size: 1.1rem;
    color: var(--gold-accent);
    letter-spacing: 0.2em;
    font-weight: 400;
  }

  .map-scroll {
    width: 100%;
    max-width: 400px;
  }

  .map-svg {
    width: 100%;
    height: auto;
  }

  .edge {
    stroke: var(--ink-light);
    stroke-width: 1.5;
    opacity: 0.3;
  }
  .edge-visited {
    stroke: var(--gold-dim);
    opacity: 0.6;
  }

  .node-circle {
    fill: var(--page-aged);
    stroke: var(--ink-light);
    stroke-width: 2;
    transition: all 0.3s;
  }

  .node-icon {
    font-size: 16px;
    fill: var(--ink-medium);
    pointer-events: none;
  }

  .map-node.visited .node-circle {
    fill: var(--leather-light);
    stroke: var(--gold-dim);
  }
  .map-node.visited .node-icon {
    fill: var(--page-cream);
  }

  .map-node.current .node-circle {
    fill: var(--gold-accent);
    stroke: var(--ink-dark);
  }

  .map-node.selectable {
    cursor: pointer;
  }
  .map-node.selectable .node-circle {
    stroke: var(--gold-accent);
    filter: drop-shadow(0 0 8px var(--magic-glow));
    animation: pulse 2s ease-in-out infinite;
  }

  .map-node:not(.selectable):not(.visited) {
    opacity: 0.4;
  }

  @keyframes pulse {
    0%, 100% { filter: drop-shadow(0 0 6px var(--magic-glow)); }
    50% { filter: drop-shadow(0 0 14px var(--magic-glow)); }
  }
</style>
