<script lang="ts">
  import BookSpread from './components/BookSpread.svelte';
  import SlotWord from './components/SlotWord.svelte';
  import HandCard from './components/HandCard.svelte';
  import { nodes, initialHand } from './game/data/nodes';
  import { createInitialState, swapWord, extractWord, insertWord } from './game/engine/state';
  import { resolveNode } from './game/engine/evaluate';
  import type { Slot } from './game/engine/types';

  // ゲーム状態
  let gameState = $state(createInitialState([...initialHand]));
  let currentNode = $derived(nodes[gameState.currentNodeIndex]);
  let currentSlots = $state<Slot[]>([...nodes[0].slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }))]);

  // ドラッグ状態
  let draggingCardIndex = $state<number | null>(null);
  let dragOverSlotIndex = $state<number | null>(null);

  // ページめくりアニメーション
  let isTransitioning = $state(false);

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
      // 空スロットなら挿し込み
      result = insertWord(gameState, slotIndex, draggingCardIndex, currentSlots);
    } else {
      // 語があれば入れ替え
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
    const resultText = resolveNode(currentNode, currentSlots);
    gameState = { ...gameState, phase: 'resolved', lastResult: resultText };
  }

  function handleNextNode() {
    const nextIndex = gameState.currentNodeIndex + 1;
    if (nextIndex >= nodes.length) {
      // ゲームクリア
      gameState = { ...gameState, lastResult: '……物語の最後のページをめくった。世界は、あなたが書き換えた言葉のまま、静かに息づいている。' };
      return;
    }

    isTransitioning = true;
    setTimeout(() => {
      const nextNode = nodes[nextIndex];
      currentSlots = nextNode.slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }));
      gameState = {
        ...gameState,
        currentNodeIndex: nextIndex,
        actionPoints: nextNode.actionPoints,
        phase: 'playing',
        lastResult: null,
      };
      isTransitioning = false;
    }, 600);
  }

  function buildCurrentText(): string {
    return currentSlots.map(s => s.word?.text ?? '████').join(' ');
  }
</script>

<div class="game-viewport" class:transitioning={isTransitioning}>
  <!-- 見開きの本 -->
  <BookSpread
    leftTitle={currentNode.title}
    rightTitle={gameState.phase === 'resolved' ? '書き換えの結果' : ''}
    pageNumber={gameState.currentNodeIndex + 1}
  >
    {#snippet leftContent()}
      <!-- 左ページ: イベント文 -->
      <div class="event-text">
        <div class="slots-container">
          {#each currentSlots as slot, i}
            <SlotWord
              {slot}
              index={i}
              onDrop={handleDropOnSlot}
              onExtract={handleExtract}
              isDragOver={dragOverSlotIndex === i}
              onDragEnter={handleSlotDragEnter}
              onDragLeave={handleSlotDragLeave}
            />
          {/each}
        </div>
      </div>

      <!-- AP表示 -->
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
      <!-- 右ページ: 結果 -->
      {#if gameState.phase === 'resolved' && gameState.lastResult}
        <div class="result-text" class:appear={gameState.phase === 'resolved'}>
          <p>{gameState.lastResult}</p>
        </div>
        {#if gameState.currentNodeIndex < nodes.length - 1}
          <button class="next-btn" onclick={handleNextNode}>
            次のページへ
          </button>
        {:else}
          <div class="ending">
            <p class="ending-text">— 了 —</p>
          </div>
        {/if}
      {:else}
        <div class="right-placeholder">
          <p>左の文章を書き換え、</p>
          <p>確定すると結果が現れる</p>
        </div>
      {/if}
    {/snippet}
  </BookSpread>

  <!-- 手札エリア（机の上） -->
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
    transition: opacity 0.6s ease;
  }

  .game-viewport.transitioning {
    opacity: 0.3;
  }

  /* 左ページ内 */
  .event-text {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slots-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    align-items: center;
    line-height: 2.5;
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

  /* 右ページ内 */
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
    from {
      opacity: 0;
      filter: blur(4px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
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

  .ending {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ending-text {
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
  }
</style>
