<script lang="ts">
  import type { WordCard } from '../game/engine/types';

  interface Props {
    card: WordCard;
    index: number;
    onDragStart: (index: number) => void;
    onDragEnd: () => void;
    onClick?: (index: number) => void;
  }

  let { card, index, onDragStart, onDragEnd, onClick }: Props = $props();

  const categoryColors: Record<string, string> = {
    subject: 'var(--slot-subject)',
    predicate: 'var(--slot-predicate)',
    object: 'var(--slot-object)',
    modifier: 'var(--slot-modifier)',
    adverb: 'var(--slot-adverb)',
  };

  const categoryLabels: Record<string, string> = {
    subject: '主',
    predicate: '述',
    object: '対',
    modifier: '修',
    adverb: '副',
  };

  function handleDragStart(e: DragEvent) {
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());
    }
    onDragStart(index);
  }
</script>

<div
  class="hand-card"
  style:--card-color={categoryColors[card.category]}
  draggable="true"
  ondragstart={handleDragStart}
  ondragend={onDragEnd}
  onclick={() => onClick?.(index)}
  role="listitem"
>
  <span class="category-badge">{categoryLabels[card.category]}</span>
  <span class="card-text">{card.text}</span>
</div>

<style>
  .hand-card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 18px;
    background: var(--page-cream);
    border: 2px solid var(--card-color);
    border-radius: 6px;
    cursor: grab;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .hand-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  .hand-card:active {
    cursor: grabbing;
    transform: scale(0.95);
  }

  .category-badge {
    font-size: 0.65rem;
    color: var(--card-color);
    background: rgba(0, 0, 0, 0.06);
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
  }

  .card-text {
    font-family: var(--font-story);
    font-size: 1.1rem;
    color: var(--ink-dark);
    white-space: nowrap;
  }
</style>
