<script lang="ts">
  import type { GameMap, MapNode, NodeDef, BattleNodeDef, ShopNodeDef, TreasureNodeDef } from '../game/engine/types';
  import { nodeDefs, battleNodeDefs, shopNodeDefs, treasureNodeDefs } from '../game/data/nodes';
  import { expandedNodeDefs, expandedBattleNodeDefs } from '../game/data/expanded-nodes';

  // ── スプライト画像インポート ──
  import witchIdle from '../assets/sprites/witch-idle.png';
  import witchWalk1 from '../assets/sprites/witch-walk-1.png';
  import witchWalk2 from '../assets/sprites/witch-walk-2.png';

  import bgForestFar from '../assets/sprites/bg-forest-far.png';
  import bgForestMid from '../assets/sprites/bg-forest-mid.png';
  import bgForestNear from '../assets/sprites/bg-forest-near.png';
  import roadForest from '../assets/sprites/road-forest.png';

  import bgValleyFar from '../assets/sprites/bg-valley-far.png';
  import bgValleyMid from '../assets/sprites/bg-valley-mid.png';
  import bgValleyNear from '../assets/sprites/bg-valley-near.png';
  import roadValley from '../assets/sprites/road-valley.png';

  import bgMountainFar from '../assets/sprites/bg-mountain-far.png';
  import bgMountainMid from '../assets/sprites/bg-mountain-mid.png';
  import bgMountainNear from '../assets/sprites/bg-mountain-near.png';
  import roadMountain from '../assets/sprites/road-mountain.png';

  import bgCastleFar from '../assets/sprites/bg-castle-far.png';
  import bgCastleMid from '../assets/sprites/bg-castle-mid.png';
  import bgCastleNear from '../assets/sprites/bg-castle-near.png';
  import roadCastle from '../assets/sprites/road-castle.png';

  import bgTowerFar from '../assets/sprites/bg-tower-far.png';
  import bgTowerMid from '../assets/sprites/bg-tower-mid.png';
  import bgTowerNear from '../assets/sprites/bg-tower-near.png';
  import roadTower from '../assets/sprites/road-tower.png';

  // 面ごとのスプライトマップ
  const stageBg = [
    { far: bgForestFar, mid: bgForestMid, near: bgForestNear, road: roadForest },
    { far: bgValleyFar, mid: bgValleyMid, near: bgValleyNear, road: roadValley },
    { far: bgMountainFar, mid: bgMountainMid, near: bgMountainNear, road: roadMountain },
    { far: bgCastleFar, mid: bgCastleMid, near: bgCastleNear, road: roadCastle },
    { far: bgTowerFar, mid: bgTowerMid, near: bgTowerNear, road: roadTower },
  ];

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

  function getNodeType(node: MapNode): string {
    if (node.nodeDefId === '__start__') return 'start';
    const def = getNodeDef(node);
    return def?.nodeType ?? 'puzzle';
  }

  // 現在ノードのインデックス（魔女の位置）
  let currentNodeIndex = $derived.by(() => {
    if (map.currentNodeId) {
      const idx = map.nodes.findIndex(n => n.id === map.currentNodeId);
      if (idx >= 0) return idx;
    }
    // fallback: 最後の訪問済みノード
    for (let i = map.nodes.length - 1; i >= 0; i--) {
      if (map.nodes[i].visited) return i;
    }
    return 0;
  });

  // 現在ノードの名前
  let currentNodeName = $derived.by(() => {
    const node = map.nodes[currentNodeIndex];
    if (!node || node.nodeDefId === '__start__') return '';
    const def = getNodeDef(node);
    return def?.title ?? '';
  });

  // --- 歩行アニメーション状態 ---
  let isMoving = $state(false);
  let witchLeft = $state(30); // 魔女のleft%（30%が開始位置）
  let bgOffset = $state(0); // 背景パララックスオフセット（px）
  let showArrivalName = $state(false); // 到着時のノード名を表示するか
  let arrivalNodeName = $state(''); // 到着時に表示するノード名
  let animFrameId = 0;

  // 魔女が歩行中か（アニメーション中 or 選択可能ノードがない＝進行中）
  let isWalking = $derived(isMoving);

  // 魔女スプライトフレーム（歩行アニメ用）
  let witchFrame = $state(0); // 0=idle, 1=walk1, 2=walk2
  let walkFrameTimer = 0;
  const WALK_FRAME_INTERVAL = 200; // ms
  const witchFrames = [witchIdle, witchWalk1, witchWalk2];
  let witchSrc = $derived(isWalking ? witchFrames[witchFrame] : witchIdle);

  // 現在面のスプライト
  let currentBg = $derived(stageBg[stageIndex ?? 0] ?? stageBg[0]);

  // 面タイトル
  const stageNames = ['森', '谷', '山', '城', '塔'];

  // ノード移動時のアニメーション
  const WALK_DURATION = 2000; // ms
  const WALK_START = 30; // left%
  const WALK_END = 70; // left%
  const BG_SCROLL_DISTANCE = 120; // px

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function startMovement(nodeId: string) {
    if (isMoving) return;
    isMoving = true;
    showArrivalName = false;

    // 魔女を開始位置にリセット（瞬間移動）
    witchLeft = WALK_START;

    const startOffset = bgOffset;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / WALK_DURATION);
      const eased = easeInOutCubic(t);

      // 魔女を左から右にスライド
      witchLeft = WALK_START + (WALK_END - WALK_START) * eased;
      // 背景をスクロール
      bgOffset = startOffset + BG_SCROLL_DISTANCE * eased;

      // 歩行中のフレーム切り替え（walk1 ⇄ walk2 を WALK_FRAME_INTERVAL ごと）
      witchFrame = Math.floor(elapsed / WALK_FRAME_INTERVAL) % 2 === 0 ? 1 : 2;

      if (t < 1) {
        animFrameId = requestAnimationFrame(animate);
      } else {
        // アニメーション完了
        isMoving = false;
        witchFrame = 0; // idle に戻す
        // ループ用にオフセットを正規化（装飾要素のリピート幅で割る）
        bgOffset = bgOffset % 600;

        // 到着ノード名を表示
        const node = map.nodes.find(n => n.id === nodeId);
        if (node && node.nodeDefId !== '__start__') {
          const def = getNodeDef(node);
          arrivalNodeName = def?.title ?? '';
          if (arrivalNodeName) {
            showArrivalName = true;
          }
        }

        // ゲームロジックを実行
        onSelect(nodeId);
      }
    }

    animFrameId = requestAnimationFrame(animate);
  }

  function handleNodeClick(nodeId: string) {
    if (isMoving) return; // アニメーション中はクリック無効
    showArrivalName = false;
    startMovement(nodeId);
  }

  // コンポーネント破棄時にアニメーションをキャンセル
  $effect(() => {
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  });
</script>

<div class="stage-view">
  <!-- 歩行シーン -->
  <div class="scene"
    class:stage-forest={stageIndex === 0}
    class:stage-valley={stageIndex === 1}
    class:stage-mountain={stageIndex === 2}
    class:stage-castle={stageIndex === 3}
    class:stage-tower={stageIndex === 4}
  >
    <!-- 面タイトル -->
    <h2 class="stage-title">{stageName ? `第${(stageIndex ?? 0) + 1}面: ${stageName}` : '旅路を選ぶ'}</h2>

    <!-- 遠景パララックス層 (0.3x速度) -->
    <div class="parallax-far" style="transform: translateX({-bgOffset * 0.3}px)">
      <img src={currentBg.far} alt="" class="parallax-img" />
      <img src={currentBg.far} alt="" class="parallax-img" />
      <img src={currentBg.far} alt="" class="parallax-img" />
    </div>

    <!-- 中景パララックス層 (0.5x速度) -->
    <div class="parallax-mid" style="transform: translateX({-bgOffset * 0.5}px)">
      <img src={currentBg.mid} alt="" class="parallax-img" />
      <img src={currentBg.mid} alt="" class="parallax-img" />
      <img src={currentBg.mid} alt="" class="parallax-img" />
    </div>

    <!-- 道 (0.8x速度) -->
    <div class="road-layer" style="transform: translateX({-bgOffset * 0.8}px)">
      <img src={currentBg.road} alt="" class="parallax-img road-img" />
      <img src={currentBg.road} alt="" class="parallax-img road-img" />
      <img src={currentBg.road} alt="" class="parallax-img road-img" />
    </div>

    <!-- 前景パララックス層 (1x速度) -->
    <div class="parallax-near" style="transform: translateX({-bgOffset}px)">
      <img src={currentBg.near} alt="" class="parallax-img" />
      <img src={currentBg.near} alt="" class="parallax-img" />
      <img src={currentBg.near} alt="" class="parallax-img" />
    </div>

    <!-- 魔女スプライト -->
    <div class="witch" class:walking={isWalking} style="left: {witchLeft}%;">
      <img src={witchSrc} alt="魔女" class="witch-sprite" />
    </div>

    <!-- ノード到着時のイベント名表示 -->
    {#if showArrivalName && arrivalNodeName}
      <div class="event-label" style="left: {witchLeft}%;">{arrivalNodeName}</div>
    {:else if !isMoving && currentNodeName}
      <div class="event-label" style="left: {witchLeft}%;">{currentNodeName}</div>
    {/if}
  </div>

  <!-- 進行バー -->
  <div class="progress-bar">
    {#each map.nodes as node, i}
      {@const nodeType = getNodeType(node)}
      <button class="progress-node"
        class:visited={node.visited}
        class:current={map.currentNodeId === node.id}
        class:selectable={isSelectable(node.id) && !isMoving}
        onclick={() => isSelectable(node.id) && handleNodeClick(node.id)}
        onmouseenter={() => onHover(node.id)}
        onmouseleave={() => onHover(null)}
        tabindex={isSelectable(node.id) && !isMoving ? 0 : -1}
        onfocus={() => onHover(node.id)}
        onblur={() => onHover(null)}
        onkeydown={(e) => e.key === 'Enter' && isSelectable(node.id) && handleNodeClick(node.id)}
      >
        <svg viewBox="0 0 18 18" class="progress-icon">
          {#if nodeType === 'start'}
            <path d="M9,2 L10.5,7 L16,7 L11.5,10.5 L13,16 L9,12.5 L5,16 L6.5,10.5 L2,7 L7.5,7 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
          {:else if nodeType === 'puzzle'}
            <path d="M4,15 C5.5,11 7,13 9,9 C11,5 12.5,7 15,3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M5.5,16.5 C7,12.5 8.5,14.5 10.5,10.5 C12.5,6.5 14,8.5 16.5,4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          {:else if nodeType === 'elite'}
            <path d="M5,14 C5.5,10 4,8 5.5,4 C6,6 6.5,5 7,3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8,15 C8.5,11 8,8 9,4 C9.5,6 9.5,5 10,2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.5,14 C12,10 11,8 12.5,5 C13,7 13.5,5.5 14,3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          {:else if nodeType === 'rest'}
            <path d="M9,3 C9,3 7,7 7,9 C7,11 8,12 9,12 C10,12 11,11 11,9 C11,7 9,3 9,3Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M5,14.5 C6.5,13.5 11.5,13.5 13,14.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M4,16.5 C6,15 12,15 14,16.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          {:else if nodeType === 'shop'}
            <path d="M9,3 L9,14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M4,5.5 L14,5.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M4,5.5 L3,9 C3,9 5,10 5,9 L4,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M14,5.5 L13,9 C13,9 15,10 15,9 L14,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M6.5,14 L11.5,14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          {:else if nodeType === 'boss'}
            <path d="M4,16 L4,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M14,16 L14,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M4,4 C4,0 14,0 14,4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M3,16 L5,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13,16 L15,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          {:else if nodeType === 'battle'}
            <path d="M4,14 L14,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14,14 L4,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3.5,14.5 L5.5,14.5 L5.5,12.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M14.5,14.5 L12.5,14.5 L12.5,12.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          {:else if nodeType === 'treasure'}
            <circle cx="9" cy="5.5" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <path d="M9,8.5 L9,15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M9,12 L11.5,12" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M9,14 L11,14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          {:else if nodeType === 'event'}
            <path d="M6,5 C6,2 12,1.5 12,5 C12,7.5 9,7.5 9,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="9" cy="13.5" r="1" fill="currentColor"/>
          {:else}
            <path d="M4,15 C5.5,11 7,13 9,9 C11,5 12.5,7 15,3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          {/if}
        </svg>
      </button>
      {#if i < map.nodes.length - 1}
        <div class="progress-line" class:visited={node.visited}></div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .stage-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  /* === 歩行シーン (上部 70%) === */
  .scene {
    flex: 7;
    position: relative;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    transition: background 0.6s ease;
  }

  /* 面ごとの背景 */
  .stage-forest { background: linear-gradient(180deg, #e8d2a7 0%, #c4b48a 40%, #6a7a4a 100%); }
  .stage-valley { background: linear-gradient(180deg, #e1a247 0%, #c89040 40%, #8a6a3a 100%); }
  .stage-mountain { background: linear-gradient(180deg, #678098 0%, #5a7088 40%, #4a5a6a 100%); }
  .stage-castle { background: linear-gradient(180deg, #493c6e 0%, #3a2a4a 40%, #2a2a3a 100%); }
  .stage-tower { background: linear-gradient(180deg, #690c0a 0%, #3a1a1a 40%, #1a0a0a 100%); }

  .stage-title {
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: var(--font-story);
    font-size: 0.9rem;
    color: var(--gold-accent);
    letter-spacing: 0.2em;
    font-weight: 400;
    margin: 0;
    z-index: 3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.7), 0 0 12px rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.3);
    padding: 4px 16px;
    border-radius: 4px;
    display: inline-block;
  }

  /* 共通パララックス層スタイル */
  .parallax-far, .parallax-mid, .parallax-near, .road-layer {
    position: absolute;
    left: 0;
    display: flex;
    pointer-events: none;
    will-change: transform;
  }
  .parallax-img {
    image-rendering: pixelated;
    display: block;
    flex-shrink: 0;
  }

  /* 遠景 (z:1) */
  .parallax-far {
    bottom: 15%;
    height: 55%;
    z-index: 1;
  }
  .parallax-far .parallax-img {
    height: 100%;
    width: auto;
  }

  /* 中景 (z:2) */
  .parallax-mid {
    bottom: 15%;
    height: 55%;
    z-index: 2;
  }
  .parallax-mid .parallax-img {
    height: 100%;
    width: auto;
  }

  /* 道 (z:3) */
  .road-layer {
    bottom: 18%;
    height: 10%;
    z-index: 3;
  }
  .road-img {
    height: 100%;
    width: auto;
  }

  /* 前景 (z:4) */
  .parallax-near {
    bottom: 10%;
    height: 20%;
    z-index: 4;
  }
  .parallax-near .parallax-img {
    height: 100%;
    width: auto;
  }

  /* 魔女スプライト */
  .witch {
    position: absolute;
    bottom: calc(18% + 10px);
    transform: translateX(-50%);
    z-index: 5;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    will-change: left;
  }

  .witch-sprite {
    width: 128px;
    height: 128px;
    image-rendering: pixelated;
    display: block;
  }

  /* 歩行時の上下揺れ */
  @keyframes walk-cycle {
    0% { transform: translateX(-50%) translateY(0px); }
    25% { transform: translateX(-50%) translateY(-3px); }
    50% { transform: translateX(-50%) translateY(0px); }
    75% { transform: translateX(-50%) translateY(-3px); }
    100% { transform: translateX(-50%) translateY(0px); }
  }

  .witch.walking {
    animation: walk-cycle 0.4s ease-in-out infinite;
  }

  /* イベント名 */
  .event-label {
    position: absolute;
    bottom: calc(18% + 115px);
    transform: translateX(-50%);
    font-family: var(--font-story);
    font-size: 0.85rem;
    color: var(--page-cream);
    text-shadow: 0 1px 6px rgba(0,0,0,0.6);
    white-space: nowrap;
    z-index: 4;
    letter-spacing: 0.1em;
    animation: fade-in 0.4s ease-out;
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateX(-50%) translateY(6px); }
    to { opacity: 0.9; transform: translateX(-50%) translateY(0); }
  }

  /* === 進行バー (下部 30%) === */
  .progress-bar {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 8px 12px;
    background: var(--page-aged);
    border-top: 1px solid var(--ink-light);
    border-radius: 0 0 4px 4px;
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .progress-node {
    width: 28px;
    height: 28px;
    min-width: 28px;
    border: none;
    background: none;
    cursor: default;
    opacity: 0.3;
    padding: 2px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .progress-icon {
    width: 100%;
    height: 100%;
    color: var(--ink-medium);
  }

  /* 訪問済み */
  .progress-node.visited {
    opacity: 0.6;
  }
  .progress-node.visited .progress-icon {
    color: var(--gold-dim);
  }

  /* 現在位置 */
  .progress-node.current {
    opacity: 1;
    transform: scale(1.3);
  }
  .progress-node.current .progress-icon {
    color: var(--gold-accent);
  }

  /* 選択可能 */
  .progress-node.selectable {
    cursor: pointer;
    opacity: 1;
    animation: pulse-progress 2s ease-in-out infinite;
  }
  .progress-node.selectable .progress-icon {
    color: var(--gold-accent);
    filter: drop-shadow(0 0 4px var(--magic-glow));
  }

  @keyframes pulse-progress {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px var(--magic-glow)); }
    50% { transform: scale(1.15); filter: drop-shadow(0 0 6px var(--magic-glow)); }
  }

  /* 進行線 */
  .progress-line {
    width: 8px;
    min-width: 8px;
    height: 2px;
    background: var(--ink-light);
    opacity: 0.2;
  }
  .progress-line.visited {
    background: var(--gold-dim);
    opacity: 0.5;
  }
</style>
