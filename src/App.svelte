<script lang="ts">
  import BookSpread from './components/BookSpread.svelte';
  import SlotWord from './components/SlotWord.svelte';
  import HandCard from './components/HandCard.svelte';
  import NodeMap from './components/NodeMap.svelte';
  import { nodeDefs, initialHand, mapNodes } from './game/data/nodes';
  import { createInitialState, swapWord, extractWord, insertWord, getSelectableNodeIds, applyDamage, addGold } from './game/engine/state';
  import { resolveNode } from './game/engine/evaluate';
  import type { Slot, NodeDef } from './game/engine/types';

  // ゲーム状態
  let gameState = $state(createInitialState([...initialHand], mapNodes));
  let selectableIds = $derived(getSelectableNodeIds(gameState.map));

  // 現在のノード
  let currentNodeDef = $state<NodeDef | null>(null);
  let currentSlots = $state<Slot[]>([]);

  // ドラッグ状態
  let draggingCardIndex = $state<number | null>(null);
  let dragOverSlotIndex = $state<number | null>(null);

  // 直前の判定結果
  let lastDamage = $state<number>(0);
  let lastGold = $state<number>(0);

  // アニメーション
  let isTransitioning = $state(false);

  // HP割合
  let hpPercent = $derived(Math.max(0, (gameState.hp / gameState.maxHp) * 100));

  // --- マップ ---
  function handleSelectNode(mapNodeId: string) {
    const mapNode = gameState.map.nodes.find(n => n.id === mapNodeId);
    if (!mapNode) return;
    const def = nodeDefs[mapNode.nodeDefId];
    if (!def) return;

    const updatedNodes = gameState.map.nodes.map(n =>
      n.id === mapNodeId ? { ...n, visited: true } : n
    );

    currentNodeDef = def;
    currentSlots = def.slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }));

    gameState = {
      ...gameState,
      actionPoints: def.actionPoints,
      phase: 'playing',
      lastResult: null,
      map: { nodes: updatedNodes, currentNodeId: mapNodeId },
    };
    lastDamage = 0;
    lastGold = 0;
  }

  // --- パズル操作 ---
  function handleDragStartCard(index: number) { draggingCardIndex = index; }
  function handleDragEnd() { draggingCardIndex = null; dragOverSlotIndex = null; }
  function handleSlotDragEnter(index: number) { dragOverSlotIndex = index; }
  function handleSlotDragLeave() { dragOverSlotIndex = null; }

  function handleDropOnSlot(slotIndex: number) {
    if (draggingCardIndex === null) return;
    const slot = currentSlots[slotIndex];
    if (!slot) return;

    let result;
    if (slot.word === null) {
      result = insertWord(gameState, slotIndex, draggingCardIndex, currentSlots);
    } else {
      result = swapWord(gameState, slotIndex, draggingCardIndex, currentSlots);
    }
    if (result) {
      gameState = result.state;
      currentSlots = result.slots;
    }
    draggingCardIndex = null;
    dragOverSlotIndex = null;
  }

  function handleExtract(slotIndex: number) {
    const result = extractWord(gameState, slotIndex, currentSlots);
    if (result) {
      gameState = result.state;
      currentSlots = result.slots;
    }
  }

  function handleResolve() {
    if (!currentNodeDef) return;
    const result = resolveNode(currentNodeDef, currentSlots);

    lastDamage = result.damage;
    lastGold = result.gold;

    let newState = { ...gameState, phase: 'resolved' as const, lastResult: result.resultText };
    newState = applyDamage(newState, result.damage);
    newState = addGold(newState, result.gold);
    gameState = newState;
  }

  function handleReturnToMap() {
    const currentMapNode = gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId);
    if (currentMapNode && currentMapNode.nextIds.length === 0) {
      // ゲームクリア
      currentNodeDef = null;
      currentSlots = [];
      return;
    }

    isTransitioning = true;
    setTimeout(() => {
      gameState = { ...gameState, phase: 'map', lastResult: null };
      currentNodeDef = null;
      currentSlots = [];
      isTransitioning = false;
    }, 500);
  }

  function handleRestart() {
    gameState = createInitialState([...initialHand], mapNodes);
    currentNodeDef = null;
    currentSlots = [];
    lastDamage = 0;
    lastGold = 0;
  }

  function getSlotIndex(slotId: string): number {
    return currentSlots.findIndex(s => s.id === slotId);
  }

  let isGameClear = $derived(
    gameState.phase === 'resolved'
    && currentNodeDef === null
    && gameState.hp > 0
  );
</script>

<div class="game-viewport" class:transitioning={isTransitioning}>

  <!-- ステータスバー（常時表示） -->
  <div class="status-top">
    <div class="hp-bar">
      <span class="hp-label">HP</span>
      <div class="hp-track">
        <div class="hp-fill" style:width="{hpPercent}%"
             class:hp-danger={gameState.hp <= 5}
             class:hp-warn={gameState.hp > 5 && gameState.hp <= 10}></div>
      </div>
      <span class="hp-text">{gameState.hp}/{gameState.maxHp}</span>
    </div>
    <div class="gold-display">{gameState.gold} G</div>
  </div>

  {#if gameState.phase === 'gameover'}
    <!-- ゲームオーバー -->
    <BookSpread pageNumber={99}>
      {#snippet leftContent()}
        <div class="ending-page">
          <p class="ending-main">本は閉じられた。</p>
          <p class="ending-sub">物語は途中で途絶え、<br>ページは二度と開かない。</p>
        </div>
      {/snippet}
      {#snippet rightContent()}
        <div class="ending-page">
          <p class="ending-fin">— GAME OVER —</p>
          <button class="restart-btn" onclick={handleRestart}>最初からやり直す</button>
        </div>
      {/snippet}
    </BookSpread>

  {:else if isGameClear}
    <!-- ゲームクリア -->
    <BookSpread pageNumber={99}>
      {#snippet leftContent()}
        <div class="ending-page">
          <p class="ending-main">物語の最後のページをめくった。</p>
          <p class="ending-sub">世界は、あなたが書き換えた言葉のまま、<br>静かに息づいている。</p>
        </div>
      {/snippet}
      {#snippet rightContent()}
        <div class="ending-page">
          <p class="ending-fin">— 了 —</p>
          <button class="restart-btn" onclick={handleRestart}>もう一度</button>
        </div>
      {/snippet}
    </BookSpread>

  {:else if gameState.phase === 'map' && !currentNodeDef}
    <!-- マップ画面 -->
    <BookSpread pageNumber={1}>
      {#snippet leftContent()}
        <div class="map-page">
          <NodeMap map={gameState.map} {selectableIds} onSelect={handleSelectNode} />
        </div>
      {/snippet}
      {#snippet rightContent()}
        <div class="map-info">
          <p class="map-hint">光るノードを選んで進む</p>
        </div>
      {/snippet}
    </BookSpread>

  {:else if currentNodeDef}
    <!-- パズル画面 -->
    <BookSpread
      leftTitle={currentNodeDef.title}
      rightTitle={gameState.phase === 'resolved' ? '書き換えの結果' : ''}
      pageNumber={gameState.map.nodes.filter(n => n.visited).length}
    >
      {#snippet leftContent()}
        <div class="event-text">
          <div class="sentence-container">
            {#each currentNodeDef.sentence as part}
              {#if part.type === 'fixed'}
                <span class="fixed-text">{part.text}</span>
              {:else}
                {@const idx = getSlotIndex(part.slotId)}
                {#if idx >= 0}
                  <SlotWord
                    slot={currentSlots[idx]}
                    index={idx}
                    onDrop={handleDropOnSlot}
                    onExtract={handleExtract}
                    isDragOver={dragOverSlotIndex === idx}
                    onDragEnter={handleSlotDragEnter}
                    onDragLeave={handleSlotDragLeave}
                  />
                {/if}
              {/if}
            {/each}
          </div>
        </div>

        <div class="action-bar">
          <span class="ap-display">残り {gameState.actionPoints} 手</span>
          {#if gameState.phase === 'playing'}
            <button class="resolve-btn" onclick={handleResolve}>書き換えを確定する</button>
          {/if}
        </div>
      {/snippet}

      {#snippet rightContent()}
        {#if gameState.phase === 'resolved' && gameState.lastResult}
          <div class="result-text appear">
            <p>{gameState.lastResult}</p>
          </div>
          <div class="result-stats">
            {#if lastDamage > 0}
              <span class="stat-damage">-{lastDamage} HP</span>
            {:else if lastDamage < 0}
              <span class="stat-heal">+{-lastDamage} HP</span>
            {:else}
              <span class="stat-nodamage">ダメージなし</span>
            {/if}
            {#if lastGold > 0}
              <span class="stat-gold">+{lastGold} G</span>
            {/if}
          </div>
          {#if gameState.hp > 0}
            {@const currentMapNode = gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId)}
            {#if currentMapNode && currentMapNode.nextIds.length > 0}
              <button class="next-btn" onclick={handleReturnToMap}>次のページへ</button>
            {:else}
              <button class="next-btn" onclick={handleReturnToMap}>物語を閉じる</button>
            {/if}
          {/if}
        {:else}
          <div class="right-placeholder">
            <p>左の文章を書き換え、</p>
            <p>確定すると結果が現れる</p>
          </div>
        {/if}
      {/snippet}
    </BookSpread>
  {/if}

  <!-- 手札エリア -->
  <div class="hand-area">
    <div class="hand-cards" role="list">
      {#each gameState.hand as card, i}
        <HandCard {card} index={i} onDragStart={handleDragStartCard} onDragEnd={handleDragEnd} />
      {/each}
      {#if gameState.hand.length === 0}
        <span class="empty-hand">手札なし</span>
      {/if}
    </div>
  </div>
</div>

<style>
  .game-viewport {
    width: 100vw; height: 100vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 12px; padding: 12px 20px 20px;
    background: radial-gradient(ellipse at 50% 30%, rgba(60, 40, 20, 0.8) 0%, rgba(10, 8, 6, 1) 70%);
    transition: opacity 0.5s ease;
  }
  .game-viewport.transitioning { opacity: 0.3; }

  /* --- ステータスバー --- */
  .status-top {
    width: 100%; max-width: 960px;
    display: flex; align-items: center; gap: 16px;
    padding: 0 8px;
  }
  .hp-bar { display: flex; align-items: center; gap: 8px; flex: 1; }
  .hp-label { color: var(--page-cream); font-family: var(--font-story); font-size: 0.8rem; }
  .hp-track {
    flex: 1; height: 10px; background: rgba(255,255,255,0.1);
    border-radius: 5px; overflow: hidden;
  }
  .hp-fill {
    height: 100%; background: #5a9e5a; border-radius: 5px;
    transition: width 0.5s ease;
  }
  .hp-fill.hp-warn { background: #c4a265; }
  .hp-fill.hp-danger { background: #a73b3b; }
  .hp-text { color: var(--page-cream); font-family: var(--font-story); font-size: 0.8rem; min-width: 50px; text-align: right; }
  .gold-display {
    color: var(--gold-accent); font-family: var(--font-story); font-size: 0.9rem;
    min-width: 50px; text-align: right;
  }

  /* --- マップ --- */
  .map-page { flex: 1; display: flex; align-items: center; justify-content: center; }
  .map-info { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .map-hint { color: var(--ink-light); font-size: 0.9rem; font-style: italic; }

  /* --- パズル --- */
  .event-text { flex: 1; display: flex; align-items: center; justify-content: center; }
  .sentence-container {
    display: flex; flex-wrap: wrap; gap: 2px;
    justify-content: center; align-items: center; line-height: 2.8;
  }
  .fixed-text {
    font-family: var(--font-story); font-size: 1.15rem; color: var(--ink-medium);
    padding: 0 2px;
  }
  .action-bar {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.08);
  }
  .ap-display { font-size: 0.85rem; color: var(--ink-light); font-family: var(--font-story); }
  .resolve-btn {
    font-family: var(--font-story); font-size: 0.85rem; padding: 6px 16px;
    background: var(--ink-dark); color: var(--page-cream);
    border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s;
  }
  .resolve-btn:hover { background: var(--leather-light); box-shadow: 0 0 12px var(--magic-glow); }

  /* --- 結果 --- */
  .result-text {
    flex: 1; display: flex; align-items: center; justify-content: center;
    font-family: var(--font-story); font-size: 1.05rem; line-height: 2; color: var(--ink-dark);
  }
  .result-text.appear { animation: inkAppear 1s ease-out; }
  @keyframes inkAppear { from { opacity: 0; filter: blur(4px); } to { opacity: 1; filter: blur(0); } }

  .result-stats {
    display: flex; gap: 16px; justify-content: center; margin: 8px 0;
    font-family: var(--font-story); font-size: 0.9rem;
  }
  .stat-damage { color: #a73b3b; }
  .stat-heal { color: #5a9e5a; }
  .stat-nodamage { color: var(--ink-light); }
  .stat-gold { color: var(--gold-accent); }

  .right-placeholder {
    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    color: var(--ink-light); font-size: 0.9rem; font-style: italic; gap: 4px;
  }
  .next-btn {
    font-family: var(--font-story); font-size: 0.9rem; padding: 8px 24px;
    background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim);
    border-radius: 4px; cursor: pointer; align-self: center; margin-top: 8px; transition: all 0.3s;
  }
  .next-btn:hover { background: rgba(196,162,101,0.1); box-shadow: 0 0 16px var(--magic-glow); }

  /* --- エンディング --- */
  .ending-page { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
  .ending-main { font-family: var(--font-story); font-size: 1.1rem; color: var(--ink-dark); line-height: 2; }
  .ending-sub { font-family: var(--font-story); font-size: 0.95rem; color: var(--ink-medium); line-height: 2; text-align: center; }
  .ending-fin { font-family: var(--font-story); font-size: 1.3rem; color: var(--gold-accent); letter-spacing: 0.3em; }
  .restart-btn {
    font-family: var(--font-story); font-size: 0.85rem; padding: 8px 20px; margin-top: 12px;
    background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim);
    border-radius: 4px; cursor: pointer; transition: all 0.3s;
  }
  .restart-btn:hover { background: rgba(196,162,101,0.1); }

  /* --- 手札エリア --- */
  .hand-area {
    width: 100%; max-width: 960px; padding: 12px 24px;
    background: linear-gradient(180deg, rgba(61,43,31,0.9) 0%, rgba(26,20,16,0.95) 100%);
    border-radius: 8px; border: 1px solid rgba(196,162,101,0.2);
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4);
  }
  .hand-cards { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; min-height: 56px; align-items: center; }
  .empty-hand { color: var(--ink-light); font-family: var(--font-story); font-size: 0.85rem; font-style: italic; }
</style>
