<script lang="ts">
  import type { Slot } from '../game/engine/types';
  import { getParticle } from '../game/engine/types';

  interface Props {
    slot: Slot;
    onDrop: (slotIndex: number) => void;
    onExtract: (slotIndex: number) => void;
    index: number;
    isDragOver: boolean;
    isDragging: boolean; // 何かをドラッグ中かどうか
    onDragEnter: (index: number) => void;
    onDragLeave: () => void;
  }

  let { slot, onDrop, onExtract, index, isDragOver, isDragging = false, onDragEnter, onDragLeave }: Props = $props();

  const categoryColors: Record<string, string> = {
    subject: 'var(--slot-subject)',
    predicate: 'var(--slot-predicate)',
    object: 'var(--slot-object)',
    object_ni: 'var(--slot-object)',
    object_de: 'var(--slot-object)',
    object_kara: 'var(--slot-object)',
    modifier: 'var(--slot-modifier)',
    adverb: 'var(--slot-adverb)',
  };

  let particle = $derived(getParticle(slot.category));

  function handleDragOver(e: DragEvent) {
    if (slot.locked) return; // 固定スロットはドロップ不可
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e: DragEvent) {
    if (slot.locked) return; // 固定スロットはドロップ不可
    e.preventDefault();
    onDrop(index);
  }

  // Extract（クリックで抜き取り）は無効化。SwapとInsertのみ許可。
  function handleClick() {
    // 何もしない
  }
</script>

<span class="slot-group">
  <!-- 見えない拡張ドロップ領域（スロットの周囲にパディング） -->
  <span
    class="drop-zone"
    class:drop-active={isDragging}
    ondragover={handleDragOver}
    ondrop={handleDrop}
    ondragenter={() => onDragEnter(index)}
    ondragleave={onDragLeave}
  >
    <button
      class="slot-word"
      class:empty={!slot.word}
      class:locked={slot.locked}
      class:drag-over={isDragOver && !slot.locked}
      class:drag-ready={isDragging && !isDragOver && !slot.locked}
      style:--slot-color={categoryColors[slot.category] ?? 'var(--ink-light)'}
      onclick={handleClick}
      title={slot.locked ? slot.word?.text ?? '' : slot.word ? `クリックで抜き取り` : `空スロット`}
    >
      {#if slot.word}
        <span class="word-text">{slot.word.text}</span>
      {:else if slot.category === 'adverb'}
        <span class="empty-mark empty-adverb">···</span>
      {:else}
        <span class="empty-mark">████</span>
      {/if}
      <span class="slot-indicator"></span>
    </button>
  </span>{#if particle}<span class="particle">{particle}</span>{/if}
</span>

<style>
  .slot-group {
    display: inline-flex;
    align-items: center;
  }

  .drop-zone {
    display: inline-flex;
    padding: 8px;
    margin: -8px;
    border-radius: 8px;
    transition: background 0.2s;
  }

  .drop-zone.drop-active {
    /* ドラッグ中は当たり判定が広がっていることを微かに示す */
  }

  .slot-word {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: 2px solid var(--slot-color);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--ink-dark);
    font-family: var(--font-story);
    font-size: 1.15rem;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    min-height: 2.4rem;
    min-width: 3rem;
  }

  .slot-word:hover {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 12px var(--slot-color);
  }

  /* ドラッグ中のスロット: 「ここに置けるよ」を示す */
  .slot-word.drag-ready {
    border-color: var(--gold-dim);
    background: rgba(196, 162, 101, 0.06);
    transform: scale(1.02);
    box-shadow: 0 0 8px rgba(196, 162, 101, 0.3);
  }

  /* カードがスロットの上に来た時: 強い反応 */
  .slot-word.drag-over {
    background: rgba(196, 162, 101, 0.25);
    border-color: var(--gold-accent);
    box-shadow: 0 0 24px var(--magic-glow);
    transform: scale(1.1);
  }

  .slot-word.locked {
    border-color: transparent;
    background: transparent;
    cursor: default;
    opacity: 0.85;
  }
  .slot-word.locked:hover {
    background: transparent;
    box-shadow: none;
  }

  .slot-word.empty {
    border-style: dashed;
    opacity: 0.7;
  }
  .slot-word.empty.drag-ready {
    opacity: 1;
    border-style: solid;
  }

  .word-text {
    position: relative;
    z-index: 1;
  }

  .empty-mark {
    color: var(--ink-light);
    letter-spacing: 2px;
    font-size: 0.95rem;
  }
  .empty-adverb {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .slot-indicator {
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: var(--slot-color);
    opacity: 0.6;
    border-radius: 1px;
  }

  .particle {
    font-family: var(--font-story);
    font-size: 1.15rem;
    color: var(--ink-medium);
    padding: 0 2px;
    margin-right: 2px;
  }
</style>
