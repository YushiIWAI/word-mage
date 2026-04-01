<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    leftTitle?: string;
    rightTitle?: string;
    pageNumber?: number;
    leftContent: Snippet;
    rightContent: Snippet;
  }

  let { leftTitle = '', rightTitle = '', pageNumber = 1, leftContent, rightContent }: Props = $props();
</script>

<div class="book-container">
  <div class="book">
    <!-- 本の背表紙（中央の影） -->
    <div class="spine"></div>

    <!-- 左ページ -->
    <div class="page page-left">
      <div class="page-inner">
        {#if leftTitle}
          <h2 class="page-title">{leftTitle}</h2>
          <div class="title-ornament">— ◆ —</div>
        {/if}
        <div class="page-body">
          {@render leftContent()}
        </div>
      </div>
      <span class="page-number left">{pageNumber * 2 - 1}</span>
    </div>

    <!-- 右ページ -->
    <div class="page page-right">
      <div class="page-inner">
        {#if rightTitle}
          <h2 class="page-title">{rightTitle}</h2>
          <div class="title-ornament">— ◆ —</div>
        {/if}
        <div class="page-body">
          {@render rightContent()}
        </div>
      </div>
      <span class="page-number right">{pageNumber * 2}</span>
    </div>
  </div>
</div>

<style>
  .book-container {
    width: 100%;
    max-width: 960px;
    aspect-ratio: 1.6 / 1;
    perspective: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    border-radius: 4px 8px 8px 4px;
    box-shadow:
      0 4px 30px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(0, 0, 0, 0.2),
      inset 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .spine {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 12px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.05) 30%,
      rgba(0, 0, 0, 0.0) 50%,
      rgba(0, 0, 0, 0.05) 70%,
      rgba(0, 0, 0, 0.15) 100%
    );
    z-index: 10;
    pointer-events: none;
  }

  .page {
    flex: 1;
    background: var(--page-cream);
    padding: 32px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .page-left {
    border-radius: 4px 0 0 4px;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      135deg,
      var(--page-aged) 0%,
      var(--page-cream) 30%,
      var(--page-cream) 100%
    );
  }

  .page-right {
    border-radius: 0 4px 4px 0;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      225deg,
      var(--page-aged) 0%,
      var(--page-cream) 30%,
      var(--page-cream) 100%
    );
  }

  /* 紙の質感 — ノイズ風のグラデーション */
  .page::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(139, 119, 80, 0.06) 0%, transparent 70%),
      radial-gradient(ellipse at 80% 20%, rgba(139, 119, 80, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .page-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .page-title {
    font-family: var(--font-story);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ink-medium);
    text-align: center;
    margin-bottom: 4px;
    letter-spacing: 0.1em;
  }

  .title-ornament {
    text-align: center;
    color: var(--gold-dim);
    font-size: 0.8rem;
    margin-bottom: 20px;
    letter-spacing: 0.3em;
  }

  .page-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .page-number {
    position: absolute;
    bottom: 16px;
    font-family: var(--font-story);
    font-size: 0.75rem;
    color: var(--ink-light);
  }
  .page-number.left { left: 32px; }
  .page-number.right { right: 32px; }
</style>
