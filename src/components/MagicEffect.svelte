<script lang="ts">
  interface Props {
    active: boolean;
    type?: 'resolve' | 'damage' | 'heal' | 'reward';
  }

  let { active, type = 'resolve' }: Props = $props();

  // パーティクル生成
  let particles = $derived(active ? generateParticles(type) : []);

  function generateParticles(effectType: string): Array<{
    id: number; x: number; y: number; size: number;
    delay: number; duration: number; color: string;
  }> {
    const count = effectType === 'reward' ? 20 : 12;
    const colors: Record<string, string[]> = {
      resolve: ['#c4a265', '#e8d5a0', '#fff8e7', '#a08040'],
      damage: ['#a73b3b', '#c45050', '#ff8080', '#802020'],
      heal: ['#3b8a5e', '#5ab87a', '#90e0b0', '#207040'],
      reward: ['#c4a265', '#e8d5a0', '#7b3ba7', '#c084fc'],
    };
    const palette = colors[effectType] ?? colors.resolve;

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 30 + Math.random() * 40,
      y: 30 + Math.random() * 40,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 0.3,
      duration: 0.6 + Math.random() * 0.8,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));
  }
</script>

{#if active}
  <div class="magic-overlay" class:damage={type === 'damage'} class:heal={type === 'heal'} class:reward={type === 'reward'}>
    <!-- 背景フラッシュ -->
    <div class="flash" class:flash-gold={type === 'resolve' || type === 'reward'} class:flash-red={type === 'damage'} class:flash-green={type === 'heal'}></div>

    <!-- パーティクル -->
    {#each particles as p (p.id)}
      <div
        class="particle"
        style="
          left: {p.x}%;
          top: {p.y}%;
          width: {p.size}px;
          height: {p.size}px;
          background: {p.color};
          animation-delay: {p.delay}s;
          animation-duration: {p.duration}s;
        "
      ></div>
    {/each}
  </div>
{/if}

<style>
  .magic-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 20;
    overflow: hidden;
    border-radius: inherit;
  }

  .flash {
    position: absolute;
    inset: 0;
    animation: flashPulse 0.6s ease-out forwards;
  }
  .flash-gold { background: radial-gradient(ellipse at 50% 50%, rgba(196, 162, 101, 0.25) 0%, transparent 70%); }
  .flash-red { background: radial-gradient(ellipse at 50% 50%, rgba(167, 59, 59, 0.2) 0%, transparent 70%); }
  .flash-green { background: radial-gradient(ellipse at 50% 50%, rgba(59, 138, 94, 0.2) 0%, transparent 70%); }

  @keyframes flashPulse {
    0% { opacity: 0; transform: scale(0.8); }
    30% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.2); }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    animation: particleRise ease-out forwards;
    box-shadow: 0 0 6px currentColor;
  }

  @keyframes particleRise {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: translateY(-40px) scale(0.3);
    }
  }
</style>
