<script lang="ts">
  import type { GameMap, MapNode, NodeDef, BattleNodeDef, ShopNodeDef, TreasureNodeDef } from '../game/engine/types';
  import { nodeDefs, battleNodeDefs, shopNodeDefs, treasureNodeDefs } from '../game/data/nodes';
  import { expandedNodeDefs, expandedBattleNodeDefs } from '../game/data/expanded-nodes';

  interface Props {
    map: GameMap;
    selectableIds: string[];
    onSelect: (nodeId: string) => void;
    onHover: (nodeId: string | null) => void;
    dynamicShopDef?: ShopNodeDef | null;
    dynamicTreasureDef?: TreasureNodeDef | null;
    stageIndex?: number;
    stageName?: string;
  }

  let { map, selectableIds, onSelect, onHover, dynamicShopDef = null, dynamicTreasureDef = null, stageIndex = 0, stageName = '' }: Props = $props();

  const allNodeDefs = { ...nodeDefs, ...expandedNodeDefs };

  function getNodeDef(node: MapNode) {
    return allNodeDefs[node.nodeDefId] ?? battleNodeDefs[node.nodeDefId] ?? expandedBattleNodeDefs[node.nodeDefId] ?? shopNodeDefs[node.nodeDefId] ?? treasureNodeDefs[node.nodeDefId]
      ?? (dynamicShopDef && dynamicShopDef.id === node.nodeDefId ? dynamicShopDef : null)
      ?? (dynamicTreasureDef && dynamicTreasureDef.id === node.nodeDefId ? dynamicTreasureDef : null)
      ?? null;
  }

  const typeLabels: Record<string, string> = {
    puzzle: '道', elite: '危', rest: '泉', shop: '商',
    boss: '門', battle: '戦', treasure: '宝', event: '謎',
  };

  function isSelectable(nodeId: string): boolean {
    return selectableIds.includes(nodeId);
  }

  let visibleNodes = $derived(map.nodes);

  type Edge = { from: MapNode; to: MapNode };
  let edges = $derived(
    visibleNodes.flatMap(n =>
      n.nextIds
        .map(nid => ({ from: n, to: map.nodes.find(t => t.id === nid)! }))
        .filter(e => e.to)
    )
  );

  // レイアウト定数
  const COL_WIDTH = 160;
  const ROW_HEIGHT = 130;
  const PADDING_X = 80;
  const PADDING_Y = 60;
  const NODE_RADIUS = 30;
  const ICON_SIZE = 14;

  // 表示窓（固定サイズ）
  const VIEW_WIDTH = PADDING_X * 2 + 2 * COL_WIDTH;
  const VIEW_HEIGHT = ROW_HEIGHT * 3.2;

  let maxRow = $derived(Math.max(0, ...visibleNodes.map(n => n.row)));
  let totalHeight = $derived(PADDING_Y * 2 + maxRow * ROW_HEIGHT + 60);

  function nodeX(node: MapNode): number { return PADDING_X + node.col * COL_WIDTH; }
  // Y座標を反転: row=0が下、row=maxが上
  function nodeY(node: MapNode): number { return PADDING_Y + (maxRow - node.row) * ROW_HEIGHT; }

  // --- カメラ制御（lerp方式） ---
  let currentViewY = $state(0);
  let animFrameId = $state(0);
  let initialized = $state(false);

  // ターゲットY: 選択可能ノードを基準
  let targetViewY = $derived.by(() => {
    let focusY = PADDING_Y;

    if (selectableIds.length > 0) {
      const ys = selectableIds.map(id => {
        const n = map.nodes.find(nd => nd.id === id);
        return n ? nodeY(n) : 0;
      });
      focusY = ys.reduce((a, b) => a + b, 0) / ys.length;
    } else if (map.currentNodeId) {
      const cur = map.nodes.find(n => n.id === map.currentNodeId);
      if (cur) focusY = nodeY(cur);
    } else {
      const visited = map.nodes.filter(n => n.visited);
      if (visited.length > 0) {
        const last = visited.reduce((a, b) => a.row > b.row ? a : b);
        focusY = nodeY(last);
      }
    }

    // フォーカス位置が窓の中央やや下に来るように（下→上進行）
    const raw = focusY - VIEW_HEIGHT * 0.55;
    const maxScroll = Math.max(0, totalHeight - VIEW_HEIGHT);
    return Math.max(0, Math.min(raw, maxScroll));
  });

  // lerp アニメーションループ
  function animateCamera() {
    const diff = targetViewY - currentViewY;
    if (Math.abs(diff) > 0.3) {
      currentViewY += diff * 0.08;
    } else {
      currentViewY = targetViewY;
    }
    animFrameId = requestAnimationFrame(animateCamera);
  }

  $effect(() => {
    if (!initialized) {
      // 初回は即座にセット
      currentViewY = targetViewY;
      initialized = true;
    }
    // アニメーションループ開始
    animFrameId = requestAnimationFrame(animateCamera);
    return () => cancelAnimationFrame(animFrameId);
  });
</script>

<div class="map-container">
  <h2 class="map-title">{stageName ? `第${stageIndex + 1}面: ${stageName}` : '旅路を選ぶ'}</h2>
  <div class="map-viewport">
    <svg class="map-svg"
      viewBox="0 {currentViewY} {VIEW_WIDTH} {VIEW_HEIGHT}"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- 上端フェードマスク（先の道が霧に消える） -->
      <defs>
        <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="white" stop-opacity="0"/>
          <stop offset="10%" stop-color="white" stop-opacity="0.2"/>
          <stop offset="35%" stop-color="white" stop-opacity="1"/>
          <stop offset="100%" stop-color="white" stop-opacity="1"/>
        </linearGradient>
        <mask id="fadeMask">
          <rect x="0" y="{currentViewY}" width="{VIEW_WIDTH}" height="{VIEW_HEIGHT}" fill="url(#fadeTop)"/>
        </mask>
      </defs>

      <g mask="url(#fadeMask)">
      <!-- 道の線 -->
      {#each edges as edge}
        <line
          x1={nodeX(edge.from)} y1={nodeY(edge.from) + NODE_RADIUS + 4}
          x2={nodeX(edge.to)} y2={nodeY(edge.to) - NODE_RADIUS - 4}
          class="edge" class:edge-visited={edge.from.visited}
        />
      {/each}

      <!-- ノード -->
      {#each visibleNodes as node}
        {@const isStart = node.nodeDefId === '__start__'}
        {@const def = isStart ? null : getNodeDef(node)}
        {@const nodeType = isStart ? 'start' : (def?.nodeType ?? 'puzzle')}
        <g
          class="map-node"
          class:selectable={isSelectable(node.id)}
          class:visited={node.visited}
          class:current={map.currentNodeId === node.id}
          class:type-boss={nodeType === 'boss'}
          class:type-elite={nodeType === 'elite'}
          class:type-rest={nodeType === 'rest'}
          class:type-shop={nodeType === 'shop'}
          class:type-battle={nodeType === 'battle'}
          class:type-treasure={nodeType === 'treasure'}
          transform="translate({nodeX(node)}, {nodeY(node)})"
          onclick={() => isSelectable(node.id) && onSelect(node.id)}
          onmouseenter={() => onHover(node.id)}
          onmouseleave={() => onHover(null)}
          role="button"
          tabindex={isSelectable(node.id) ? 0 : -1}
          onfocus={() => onHover(node.id)}
          onblur={() => onHover(null)}
          onkeydown={(e) => e.key === 'Enter' && isSelectable(node.id) && onSelect(node.id)}
        >
          <circle r="{NODE_RADIUS + 6}" class="node-ring" />
          <circle r="{NODE_RADIUS}" class="node-circle" />
          <g class="node-icon-svg" transform="translate(-{ICON_SIZE}, -{ICON_SIZE}) scale({NODE_RADIUS / 18})">
            {#if nodeType === 'start'}
              <!-- スタート: 小さな星（旅の始まり） -->
              <path d="M9,2 L10.5,7 L16,7 L11.5,10.5 L13,16 L9,12.5 L5,16 L6.5,10.5 L2,7 L7.5,7 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
            {:else if nodeType === 'puzzle'}
              <path d="M4,15 C5.5,11 7,13 9,9 C11,5 12.5,7 15,3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5,16.5 C7,12.5 8.5,14.5 10.5,10.5 C12.5,6.5 14,8.5 16.5,4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            {:else if nodeType === 'elite'}
              <path d="M5,14 C5.5,10 4,8 5.5,4 C6,6 6.5,5 7,3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8,15 C8.5,11 8,8 9,4 C9.5,6 9.5,5 10,2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.5,14 C12,10 11,8 12.5,5 C13,7 13.5,5.5 14,3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            {:else if nodeType === 'rest'}
              <path d="M9,3 C9,3 7,7 7,9 C7,11 8,12 9,12 C10,12 11,11 11,9 C11,7 9,3 9,3Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5,14.5 C6.5,13.5 11.5,13.5 13,14.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M4,16.5 C6,15 12,15 14,16.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            {:else if nodeType === 'shop'}
              <path d="M9,3 L9,14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M4,5.5 L14,5.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M4,5.5 L3,9 C3,9 5,10 5,9 L4,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14,5.5 L13,9 C13,9 15,10 15,9 L14,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5,14 L11.5,14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            {:else if nodeType === 'boss'}
              <path d="M4,16 L4,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M14,16 L14,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M4,4 C4,0 14,0 14,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3,16 L5,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M13,16 L15,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            {:else if nodeType === 'battle'}
              <path d="M4,14 L14,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14,14 L4,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3.5,14.5 L5.5,14.5 L5.5,12.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5,14.5 L12.5,14.5 L12.5,12.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5,3.5 L5.5,3.5 L5.5,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5,3.5 L12.5,3.5 L12.5,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            {:else if nodeType === 'treasure'}
              <circle cx="9" cy="5.5" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/>
              <path d="M9,8.5 L9,15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M9,12 L11.5,12" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <path d="M9,14 L11,14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            {:else if nodeType === 'event'}
              <path d="M6,5 C6,2 12,1.5 12,5 C12,7.5 9,7.5 9,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="9" cy="13.5" r="1" fill="currentColor"/>
            {:else}
              <path d="M4,15 C5.5,11 7,13 9,9 C11,5 12.5,7 15,3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5,16.5 C7,12.5 8.5,14.5 10.5,10.5 C12.5,6.5 14,8.5 16.5,4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            {/if}
          </g>
          <text class="node-title" text-anchor="middle" y="{NODE_RADIUS + 20}" font-size="13">
            {isStart ? '旅の始まり' : (def ? def.title : '???')}
          </text>
        </g>
      {/each}
      </g> <!-- fadeMask group -->
    </svg>
  </div>
</div>

<style>
  .map-container { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .map-title {
    font-family: var(--font-story);
    font-size: 1rem;
    color: var(--gold-accent);
    letter-spacing: 0.2em;
    font-weight: 400;
    margin: 0;
  }

  .map-viewport {
    width: 100%;
    max-width: 420px;
    overflow: hidden;
  }

  .map-svg {
    width: 100%;
    height: auto;
  }

  /* 道の線 */
  .edge { stroke: var(--ink-medium); stroke-width: 1.5; opacity: 0.3; stroke-dasharray: 5 4; }
  .edge-visited { stroke: var(--gold-dim); opacity: 0.6; stroke-dasharray: none; stroke-width: 2; }

  /* --- ノード基本: しっかり存在感を出す --- */
  .node-ring {
    fill: none;
    stroke: var(--ink-medium);
    stroke-width: 1.5;
    opacity: 0.3;
    transition: all 0.3s;
  }

  .node-circle {
    fill: var(--page-cream);
    stroke: var(--ink-medium);
    stroke-width: 2;
    transition: all 0.3s;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
  }

  .node-icon-svg {
    color: var(--ink-dark);
    pointer-events: none;
  }
  .node-icon-svg path, .node-icon-svg circle {
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .node-title {
    fill: var(--ink-dark);
    font-family: var(--font-story);
    font-weight: 700;
    pointer-events: none;
  }

  /* --- 訪問済み: 通過した感 --- */
  .map-node.visited .node-circle {
    fill: var(--leather-light);
    stroke: var(--gold-dim);
    opacity: 0.6;
    filter: none;
  }
  .map-node.visited .node-ring { stroke: var(--gold-dim); opacity: 0.2; }
  .map-node.visited .node-icon-svg { color: var(--page-cream); opacity: 0.7; }
  .map-node.visited .node-title { fill: var(--ink-light); opacity: 0.5; }

  /* --- 現在位置 --- */
  .map-node.current .node-circle { fill: var(--gold-accent); stroke: var(--ink-dark); stroke-width: 2.5; }
  .map-node.current .node-icon-svg { color: var(--ink-dark); }
  .map-node.current .node-title { fill: var(--ink-dark); }

  /* --- タイプ別の枠色 --- */
  .map-node.type-boss .node-circle { stroke-width: 3; stroke: var(--ink-dark); }
  .map-node.type-boss .node-ring { stroke: var(--ink-dark); stroke-width: 2; opacity: 0.4; }

  .map-node.type-elite .node-circle { stroke: #8b2020; stroke-width: 2.5; }
  .map-node.type-elite .node-ring { stroke: #8b2020; opacity: 0.35; }

  .map-node.type-battle .node-circle { stroke: #8b2020; stroke-width: 2.5; }
  .map-node.type-battle .node-ring { stroke: #8b2020; opacity: 0.35; }

  .map-node.type-rest .node-circle { stroke: #2d6e46; stroke-width: 2.5; }
  .map-node.type-rest .node-ring { stroke: #2d6e46; opacity: 0.35; }

  .map-node.type-shop .node-circle { stroke: var(--gold-accent); stroke-width: 2.5; }
  .map-node.type-shop .node-ring { stroke: var(--gold-accent); opacity: 0.35; }

  .map-node.type-treasure .node-circle { stroke: var(--gold-accent); stroke-width: 2.5; }
  .map-node.type-treasure .node-ring { stroke: var(--gold-accent); opacity: 0.35; }

  /* --- 選択可能: 最も目立つ --- */
  .map-node.selectable { cursor: pointer; }
  .map-node.selectable .node-circle {
    fill: var(--page-cream);
    stroke: var(--gold-accent);
    stroke-width: 2.5;
    filter: drop-shadow(0 0 8px var(--magic-glow)) drop-shadow(0 0 16px rgba(196, 162, 101, 0.3));
    animation: pulse 2.5s ease-in-out infinite;
  }
  .map-node.selectable .node-ring {
    stroke: var(--gold-accent);
    opacity: 0.5;
    animation: pulse-ring 2.5s ease-in-out infinite;
  }
  .map-node.selectable .node-icon-svg { color: var(--ink-dark); }
  .map-node.selectable .node-title { fill: var(--ink-dark); font-weight: 700; }

  /* --- 未到達: やや薄いが見える --- */
  .map-node:not(.selectable):not(.visited):not(.current) { opacity: 0.5; }

  @keyframes pulse {
    0%, 100% { filter: drop-shadow(0 0 4px var(--magic-glow)); }
    50% { filter: drop-shadow(0 0 10px var(--magic-glow)); }
  }
  @keyframes pulse-ring {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
</style>
