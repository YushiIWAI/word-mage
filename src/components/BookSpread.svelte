<script lang="ts">
  import type { Snippet } from 'svelte';
  import paperGrunge from '../assets/textures/paper-grunge.jpg';
  import stoneTexture from '../assets/textures/stone-texture.jpg';
  import frameTop from '../assets/ui/classic-frame-top.png';
  import frameBottom from '../assets/ui/classic-frame-bottom.png';

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
  <!-- 本の表紙（革の縁） -->
  <div class="book-cover">
    <div class="book">
      <!-- 本の背表紙（中央の影＋綴じ糸） -->
      <div class="spine">
        <div class="spine-stitch"></div>
      </div>

      <!-- 左ページ -->
      <div class="page page-left">
        <!-- 紙の質感レイヤー -->
        <div class="paper-texture" style="background-image: url({paperGrunge})"></div>
        <div class="paper-grain" style="background-image: url({stoneTexture})"></div>
        <div class="page-frame-top" style="background-image: url({frameTop})"></div>
        <div class="page-frame-bottom" style="background-image: url({frameBottom})"></div>
        <div class="page-inner">
          {#if leftTitle}
            <h2 class="page-title">{leftTitle}</h2>
            <div class="title-ornament">❦ ❦ ❦</div>
          {/if}
          <div class="page-body">
            {@render leftContent()}
          </div>
        </div>
        <span class="page-number left">{pageNumber * 2 - 1}</span>
        <div class="page-edge-shadow left-edge"></div>
      </div>

      <!-- 右ページ -->
      <div class="page page-right">
        <div class="paper-texture" style="background-image: url({paperGrunge})"></div>
        <div class="paper-grain" style="background-image: url({stoneTexture})"></div>
        <div class="page-frame-top" style="background-image: url({frameTop})"></div>
        <div class="page-frame-bottom" style="background-image: url({frameBottom})"></div>
        <div class="page-inner">
          {#if rightTitle}
            <h2 class="page-title">{rightTitle}</h2>
            <div class="title-ornament">❦ ❦ ❦</div>
          {/if}
          <div class="page-body">
            {@render rightContent()}
          </div>
        </div>
        <span class="page-number right">{pageNumber * 2}</span>
        <div class="page-edge-shadow right-edge"></div>
      </div>
    </div>

    <!-- 本の角の金具 -->
    <div class="corner-metal top-left"></div>
    <div class="corner-metal top-right"></div>
    <div class="corner-metal bottom-left"></div>
    <div class="corner-metal bottom-right"></div>
  </div>
</div>

<style>
  .book-container {
    width: 100%;
    max-width: 960px;
    aspect-ratio: 1.6 / 1;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 革の表紙 */
  .book-cover {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 6px;
    background:
      linear-gradient(145deg, #4a3728 0%, #3d2b1f 30%, #2a1f14 100%);
    border-radius: 6px 10px 10px 6px;
    box-shadow:
      0 8px 40px rgba(0, 0, 0, 0.6),
      0 2px 10px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  }

  .corner-metal {
    position: absolute;
    width: 28px;
    height: 28px;
    border: 2.5px solid var(--gold-accent);
    opacity: 0.6;
    pointer-events: none;
  }
  .top-left { top: 3px; left: 3px; border-right: none; border-bottom: none; border-radius: 4px 0 0 0; }
  .top-right { top: 3px; right: 3px; border-left: none; border-bottom: none; border-radius: 0 4px 0 0; }
  .bottom-left { bottom: 3px; left: 3px; border-right: none; border-top: none; border-radius: 0 0 0 4px; }
  .bottom-right { bottom: 3px; right: 3px; border-left: none; border-top: none; border-radius: 0 0 4px 0; }

  .book {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    border-radius: 3px 6px 6px 3px;
    overflow: hidden;
  }

  /* 背表紙 */
  .spine {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 16px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.08) 25%,
      rgba(0, 0, 0, 0.02) 50%,
      rgba(0, 0, 0, 0.08) 75%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 10;
    pointer-events: none;
  }

  /* 綴じ糸の表現 */
  .spine-stitch {
    position: absolute;
    left: 50%;
    top: 10%;
    bottom: 10%;
    width: 1px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
      180deg,
      rgba(139, 119, 80, 0.3) 0px,
      rgba(139, 119, 80, 0.3) 8px,
      transparent 8px,
      transparent 16px
    );
  }

  /* ページ共通 */
  .page {
    flex: 1;
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .page-left {
    border-radius: 3px 0 0 3px;
    background:
      linear-gradient(135deg, #e0d5be 0%, #ece5d3 15%, #f5f0e1 40%, #f3edd8 100%);
  }

  .page-right {
    border-radius: 0 3px 3px 0;
    background:
      linear-gradient(225deg, #e0d5be 0%, #ece5d3 15%, #f5f0e1 40%, #f3edd8 100%);
  }

  /* 紙の質感 — 実画像テクスチャ */
  .paper-texture {
    position: absolute;
    inset: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.18;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  /* 石テクスチャで紙の繊維感を追加 */
  .paper-grain {
    position: absolute;
    inset: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  /* クラシックフレーム装飾（上下分割） */
  .page-frame-top, .page-frame-bottom {
    position: absolute;
    left: 4px;
    right: 4px;
    height: 40%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    opacity: 0.4;
    pointer-events: none;
  }
  .page-frame-top {
    top: 2px;
    background-position: top center;
  }
  .page-frame-bottom {
    bottom: 2px;
    background-position: bottom center;
  }

  /* ページ端の影（本の厚み） */
  .page-edge-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    pointer-events: none;
  }
  .left-edge {
    right: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.04) 100%);
  }
  .right-edge {
    left: 0;
    background: linear-gradient(270deg, transparent 0%, rgba(0, 0, 0, 0.04) 100%);
  }

  .page-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
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
    font-size: 0.65rem;
    margin-bottom: 16px;
    letter-spacing: 0.5em;
    opacity: 0.7;
  }

  .page-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .page-number {
    position: absolute;
    bottom: 20px;
    font-family: var(--font-story);
    font-size: 0.7rem;
    color: var(--ink-light);
    opacity: 0.5;
    z-index: 2;
  }
  .page-number.left { left: 50%; transform: translateX(-50%); }
  .page-number.right { right: 50%; transform: translateX(50%); }
</style>
