<script lang="ts">
  import type { GameMap, MapNode, NodeDef, BattleNodeDef, ShopNodeDef } from '../game/engine/types';
  import { nodeDefs, battleNodeDefs, shopNodeDefs } from '../game/data/nodes';

  interface Props {
    map: GameMap;
    selectableIds: string[];
    onSelect: (nodeId: string) => void;
    onHover: (nodeId: string | null) => void;
  }

  let { map, selectableIds, onSelect, onHover }: Props = $props();

  function getNodeDef(node: MapNode) {
    return nodeDefs[node.nodeDefId] ?? battleNodeDefs[node.nodeDefId] ?? shopNodeDefs[node.nodeDefId];
  }

  const typeIcons: Record<string, string> = {
    puzzle: '✦', elite: '✧', rest: '泉', shop: '⚖',
    boss: '門', battle: '⚔', event: '？', treasure: '鍵',
  };

  function isSelectable(nodeId: string): boolean {
    return selectableIds.includes(nodeId);
  }

  type Edge = { from: MapNode; to: MapNode };
  let edges = $derived(map.nodes.flatMap(n =>
    n.nextIds.map(nid => ({ from: n, to: map.nodes.find(t => t.id === nid)! })).filter(e => e.to)
  ));

  const COL_WIDTH = 130;
  const ROW_HEIGHT = 90;
  const PADDING_X = 65;
  const PADDING_Y = 40;

  function nodeX(node: MapNode): number { return PADDING_X + node.col * COL_WIDTH; }
  function nodeY(node: MapNode): number { return PADDING_Y + node.row * ROW_HEIGHT; }
</script>

<div class="map-container">
  <h2 class="map-title">— 旅路を選べ —</h2>
  <div class="map-scroll">
    <svg class="map-svg"
      viewBox="0 0 {PADDING_X * 2 + 2 * COL_WIDTH} {PADDING_Y * 2 + 4 * ROW_HEIGHT}"
      preserveAspectRatio="xMidYMid meet"
    >
      {#each edges as edge}
        <line
          x1={nodeX(edge.from)} y1={nodeY(edge.from) + 22}
          x2={nodeX(edge.to)} y2={nodeY(edge.to) - 22}
          class="edge" class:edge-visited={edge.from.visited}
        />
      {/each}

      {#each map.nodes as node}
        {@const def = getNodeDef(node)}
        <g
          class="map-node"
          class:selectable={isSelectable(node.id)}
          class:visited={node.visited}
          class:current={map.currentNodeId === node.id}
          class:boss={def?.nodeType === 'boss'}
          class:elite={def?.nodeType === 'elite'}
          class:rest={def?.nodeType === 'rest'}
          class:shop={def?.nodeType === 'shop'}
          class:battle={def?.nodeType === 'battle'}
          transform="translate({nodeX(node)}, {nodeY(node)})"
          onclick={() => isSelectable(node.id) && onSelect(node.id)}
          onmouseenter={() => isSelectable(node.id) && onHover(node.id)}
          onmouseleave={() => onHover(null)}
          role="button"
          tabindex={isSelectable(node.id) ? 0 : -1}
          onfocus={() => isSelectable(node.id) && onHover(node.id)}
          onblur={() => onHover(null)}
          onkeydown={(e) => e.key === 'Enter' && isSelectable(node.id) && onSelect(node.id)}
        >
          <circle r="22" class="node-circle" />
          <text class="node-icon" text-anchor="middle" dominant-baseline="central" font-size="14">
            {def ? typeIcons[def.nodeType] ?? '✦' : '?'}
          </text>
          {#if def}
            <text class="node-label" text-anchor="middle" y="34" font-size="10">
              {def.title}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>
</div>

<style>
  .map-container { display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .map-title { font-family: var(--font-story); font-size: 1.1rem; color: var(--gold-accent); letter-spacing: 0.2em; font-weight: 400; }
  .map-scroll { width: 100%; max-width: 420px; }
  .map-svg { width: 100%; height: auto; }

  .edge { stroke: var(--ink-light); stroke-width: 1.5; opacity: 0.3; }
  .edge-visited { stroke: var(--gold-dim); opacity: 0.6; }

  .node-circle { fill: var(--page-aged); stroke: var(--ink-light); stroke-width: 2; transition: all 0.3s; }
  .node-icon { fill: var(--ink-medium); pointer-events: none; }
  .node-label { fill: var(--ink-medium); font-family: var(--font-story); pointer-events: none; }

  .map-node.visited .node-circle { fill: var(--leather-light); stroke: var(--gold-dim); }
  .map-node.visited .node-icon, .map-node.visited .node-label { fill: var(--page-cream); }
  .map-node.current .node-circle { fill: var(--gold-accent); stroke: var(--ink-dark); }
  .map-node.boss .node-circle { stroke-width: 3; }
  .map-node.boss .node-icon { font-size: 16px; }
  .map-node.elite .node-circle { stroke: #a73b3b; }
  .map-node.battle .node-circle { stroke: #a73b3b; }
  .map-node.rest .node-circle { stroke: #3b8a5e; }
  .map-node.shop .node-circle { stroke: var(--gold-accent); }

  .map-node.selectable { cursor: pointer; }
  .map-node.selectable .node-circle {
    stroke: var(--gold-accent);
    filter: drop-shadow(0 0 8px var(--magic-glow));
    animation: pulse 2s ease-in-out infinite;
  }
  .map-node:not(.selectable):not(.visited) { opacity: 0.4; }

  @keyframes pulse {
    0%, 100% { filter: drop-shadow(0 0 6px var(--magic-glow)); }
    50% { filter: drop-shadow(0 0 14px var(--magic-glow)); }
  }
</style>
