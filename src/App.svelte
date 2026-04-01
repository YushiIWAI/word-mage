<script lang="ts">
  import BookSpread from './components/BookSpread.svelte';
  import SlotWord from './components/SlotWord.svelte';
  import HandCard from './components/HandCard.svelte';
  import NodeMap from './components/NodeMap.svelte';
  import { nodeDefs, initialHand, mapNodes } from './game/data/nodes';
  import { createInitialState, swapWord, extractWord, insertWord, getSelectableNodeIds } from './game/engine/state';
  import { resolveNode } from './game/engine/evaluate';
  import type { Slot, NodeDef, SentencePart } from './game/engine/types';

  // ゲーム状態
  let gameState = $state(createInitialState([...initialHand], mapNodes));
  let selectableIds = $derived(getSelectableNodeIds(gameState.map));

  // 現在のノード関連
  let currentNodeDef = $state<NodeDef | null>(null);
  let currentSlots = $state<Slot[]>([]);

  // ドラッグ状態
  let draggingCardIndex = $state<number | null>(null);
  let dragOverSlotIndex = $state<number | null>(null);

  // ページめくりアニメーション
  let isTransitioning = $state(false);

  // --- マップ画面 ---
  function handleSelectNode(mapNodeId: string) {
    const mapNode = gameState.map.nodes.find(n => n.id === mapNodeId);
    if (!mapNode) return;

    const def = nodeDefs[mapNode.nodeDefId];
    if (!def) return;

    // マップ更新
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
  }

  // --- パズル操作 ---
  function handleDragStartCard(index: number) {
    draggingCardIndex = index;
  }

  function handleDragEnd() {
    draggingCardIndex = null;
    dragOverSlotIndex = null;
  }

  function handleSlotDragEnter(index: number) {
    dragOverSlotIndex = index;
  }

  function handleSlotDragLeave() {
    dragOverSlotIndex = null;
  }

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
    const resultText = resolveNode(currentNodeDef, currentSlots);
    gameState = { ...gameState, phase: 'resolved', lastResult: resultText };
  }

  function handleReturnToMap() {
    // ボスクリア後はゲームクリア
    const currentMapNode = gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId);
    if (currentMapNode && currentMapNode.nextIds.length === 0) {
      gameState = {
        ...gameState,
        phase: 'resolved',
        lastResult: '……物語の最後のページをめくった。\n世界は、あなたが書き換えた言葉のまま、静かに息づいている。',
      };
      currentNodeDef = null;
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

  /** sentenceパーツからスロットのインデックスを引く */
  function getSlotIndex(slotId: string): number {
    return currentSlots.findIndex(s => s.id === slotId);
  }
</script>

<div class="game-viewport" class:transitioning={isTransitioning}>
  {#if gameState.phase === 'map' && !currentNodeDef}
    <!-- マップ画面 -->
    <div class="map-screen">
      <BookSpread pageNumber={1}>
        {#snippet leftContent()}
          <div class="map-page">
            <NodeMap
              map={gameState.map}
              {selectableIds}
              onSelect={handleSelectNode}
            />
          </div>
        {/snippet}
        {#snippet rightContent()}
          <div class="map-info">
            <p class="map-hint">光るノードを選んで進む</p>
            <div class="hand-count">
              手札: {gameState.hand.length} / {gameState.handLimit}
            </div>
          </div>
        {/snippet}
      </BookSpread>
    </div>
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
              {#if part.type === 'particle'}
                <span class="particle">{part.text}</span>
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

        <div class="status-bar">
          <span class="ap-display">
            残り {gameState.actionPoints} 手
          </span>
          {#if gameState.phase === 'playing'}
            <button class="resolve-btn" onclick={handleResolve}>
              書き換えを確定する
            </button>
          {/if}
        </div>
      {/snippet}

      {#snippet rightContent()}
        {#if gameState.phase === 'resolved' && gameState.lastResult}
          <div class="result-text appear">
            <p>{gameState.lastResult}</p>
          </div>
          {#if gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId)?.nextIds.length}
            <button class="next-btn" onclick={handleReturnToMap}>
              次のページへ
            </button>
          {:else}
            <button class="next-btn" onclick={handleReturnToMap}>
              物語を閉じる
            </button>
          {/if}
        {:else}
          <div class="right-placeholder">
            <p>左の文章を書き換え、</p>
            <p>確定すると結果が現れる</p>
          </div>
        {/if}
      {/snippet}
    </BookSpread>
  {:else}
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
        </div>
      {/snippet}
    </BookSpread>
  {/if}

  <!-- 手札エリア（常に表示） -->
  <div class="hand-area">
    <div class="hand-cards" role="list">
      {#each gameState.hand as card, i}
        <HandCard
          {card}
          index={i}
          onDragStart={handleDragStartCard}
          onDragEnd={handleDragEnd}
        />
      {/each}
      {#if gameState.hand.length === 0}
        <span class="empty-hand">手札なし</span>
      {/if}
    </div>
  </div>
</div>

<style>
  .game-viewport {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(60, 40, 20, 0.8) 0%, rgba(10, 8, 6, 1) 70%);
    transition: opacity 0.5s ease;
  }

  .game-viewport.transitioning {
    opacity: 0.3;
  }

  /* マップ画面 */
  .map-screen {
    width: 100%;
    max-width: 960px;
  }

  .map-page {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .map-hint {
    color: var(--ink-light);
    font-size: 0.9rem;
    font-style: italic;
  }

  .hand-count {
    color: var(--ink-medium);
    font-size: 0.85rem;
  }

  /* パズル画面 */
  .event-text {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sentence-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    justify-content: center;
    align-items: center;
    line-height: 2.8;
  }

  .particle {
    font-family: var(--font-story);
    font-size: 1.2rem;
    color: var(--ink-medium);
    padding: 0 2px;
    align-self: center;
  }

  .status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .ap-display {
    font-size: 0.85rem;
    color: var(--ink-light);
    font-family: var(--font-story);
  }

  .resolve-btn {
    font-family: var(--font-story);
    font-size: 0.85rem;
    padding: 6px 16px;
    background: var(--ink-dark);
    color: var(--page-cream);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .resolve-btn:hover {
    background: var(--leather-light);
    box-shadow: 0 0 12px var(--magic-glow);
  }

  /* 右ページ */
  .result-text {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-story);
    font-size: 1.05rem;
    line-height: 2;
    color: var(--ink-dark);
  }

  .result-text.appear {
    animation: inkAppear 1s ease-out;
  }

  @keyframes inkAppear {
    from { opacity: 0; filter: blur(4px); }
    to { opacity: 1; filter: blur(0); }
  }

  .right-placeholder {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--ink-light);
    font-size: 0.9rem;
    font-style: italic;
    gap: 4px;
  }

  .next-btn {
    font-family: var(--font-story);
    font-size: 0.9rem;
    padding: 8px 24px;
    background: none;
    color: var(--gold-accent);
    border: 1px solid var(--gold-dim);
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    margin-top: 12px;
    transition: all 0.3s;
  }

  .next-btn:hover {
    background: rgba(196, 162, 101, 0.1);
    box-shadow: 0 0 16px var(--magic-glow);
  }

  /* ゲームクリア */
  .ending-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .ending-main {
    font-family: var(--font-story);
    font-size: 1.1rem;
    color: var(--ink-dark);
    line-height: 2;
  }

  .ending-sub {
    font-family: var(--font-story);
    font-size: 0.95rem;
    color: var(--ink-medium);
    line-height: 2;
    text-align: center;
  }

  .ending-fin {
    font-family: var(--font-story);
    font-size: 1.3rem;
    color: var(--gold-accent);
    letter-spacing: 0.3em;
  }

  /* 手札エリア */
  .hand-area {
    width: 100%;
    max-width: 960px;
    padding: 16px 24px;
    background:
      linear-gradient(180deg, rgba(61, 43, 31, 0.9) 0%, rgba(26, 20, 16, 0.95) 100%);
    border-radius: 8px;
    border: 1px solid rgba(196, 162, 101, 0.2);
    box-shadow:
      inset 0 2px 8px rgba(0, 0, 0, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.4);
  }

  .hand-cards {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 60px;
    align-items: center;
  }

  .empty-hand {
    color: var(--ink-light);
    font-family: var(--font-story);
    font-size: 0.85rem;
    font-style: italic;
  }
</style>
