<script lang="ts">
  import type { Slot } from '../game/engine/types';

  interface Props {
    slot: Slot;
    onDrop: (slotIndex: number) => void;
    onExtract: (slotIndex: number) => void;
    index: number;
    isDragOver: boolean;
    onDragEnter: (index: number) => void;
    onDragLeave: () => void;
  }

  let { slot, onDrop, onExtract, index, isDragOver, onDragEnter, onDragLeave }: Props = $props();

  const categoryColors: Record<string, string> = {
    subject: 'var(--slot-subject)',
    predicate: 'var(--slot-predicate)',
    object: 'var(--slot-object)',
    modifier: 'var(--slot-modifier)',
    adverb: 'var(--slot-adverb)',
  };

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    onDrop(index);
  }

  function handleClick() {
    if (slot.word) {
      onExtract(index);
    }
  }
</script>

<button
  class="slot-word"
  class:empty={!slot.word}
  class:drag-over={isDragOver}
  style:--slot-color={categoryColors[slot.category]}
  ondragover={handleDragOver}
  ondrop={handleDrop}
  ondragenter={() => onDragEnter(index)}
  ondragleave={onDragLeave}
  onclick={handleClick}
  title={slot.word ? `${slot.category}: クリックで抜き取り` : `${slot.category}: 空`}
>
  {#if slot.word}
    <span class="word-text">{slot.word.text}</span>
  {:else}
    <span class="empty-mark">████</span>
  {/if}
  <span class="slot-indicator"></span>
</button>

<style>
  .slot-word {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    margin: 0 2px;
    border: 2px solid var(--slot-color);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--ink-dark);
    font-family: var(--font-story);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    min-height: 2.4rem;
  }

  .slot-word:hover {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 12px var(--slot-color);
  }

  .slot-word.drag-over {
    background: rgba(196, 162, 101, 0.2);
    border-color: var(--gold-accent);
    box-shadow: 0 0 20px var(--magic-glow);
    transform: scale(1.05);
  }

  .slot-word.empty {
    border-style: dashed;
    opacity: 0.7;
  }

  .word-text {
    position: relative;
    z-index: 1;
  }

  .empty-mark {
    color: var(--ink-light);
    letter-spacing: 2px;
    font-size: 1rem;
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
</style>
