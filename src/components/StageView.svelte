<script lang="ts">
  import type { GameMap, MapNode, NodeDef, BattleNodeDef, ShopNodeDef, TreasureNodeDef } from '../game/engine/types';
  import { nodeDefs, battleNodeDefs, shopNodeDefs, treasureNodeDefs } from '../game/data/nodes';
  import { expandedNodeDefs, expandedBattleNodeDefs } from '../game/data/expanded-nodes';

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

      if (t < 1) {
        animFrameId = requestAnimationFrame(animate);
      } else {
        // アニメーション完了
        isMoving = false;
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
      <svg class="parallax-far-svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
        {#if stageIndex === 0}
          <!-- 森: 遠くの木々のシルエット -->
          <path d="M50,200 L50,100 L30,100 L60,30 L90,100 L70,100 L70,200" fill="var(--ink-dark)" opacity="0.08"/>
          <path d="M180,200 L180,110 L165,110 L190,50 L215,110 L200,110 L200,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M320,200 L320,90 L300,90 L340,25 L380,90 L360,90 L360,200" fill="var(--ink-dark)" opacity="0.07"/>
          <path d="M470,200 L470,105 L455,105 L480,45 L505,105 L490,105 L490,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M600,200 L600,95 L580,95 L620,30 L660,95 L640,95 L640,200" fill="var(--ink-dark)" opacity="0.08"/>
          <path d="M750,200 L750,110 L735,110 L760,50 L785,110 L770,110 L770,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M900,200 L900,100 L880,100 L920,30 L960,100 L940,100 L940,200" fill="var(--ink-dark)" opacity="0.07"/>
          <path d="M1050,200 L1050,105 L1035,105 L1060,45 L1085,105 L1070,105 L1070,200" fill="var(--ink-dark)" opacity="0.06"/>
        {:else if stageIndex === 1}
          <!-- 谷: 遠くの崖 -->
          <path d="M0,200 L40,100 L100,120 L160,80 L200,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M250,200 L300,90 L370,110 L420,70 L480,200" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M500,200 L550,100 L620,120 L680,80 L730,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M780,200 L830,90 L900,115 L960,75 L1020,200" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M1050,200 L1090,100 L1140,120 L1200,85" fill="var(--ink-dark)" opacity="0.06"/>
        {:else if stageIndex === 2}
          <!-- 山: 遠くの山脈 -->
          <path d="M-20,200 L80,50 L140,110 L200,30 L300,130 L380,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M350,200 L450,40 L520,100 L600,20 L700,120 L780,200" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M750,200 L850,50 L920,110 L1000,30 L1100,130 L1200,200" fill="var(--ink-dark)" opacity="0.06"/>
        {:else if stageIndex === 3}
          <!-- 城: 遠くの城壁 -->
          <path d="M20,200 L20,120 L30,120 L30,110 L40,110 L40,120 L80,120 L80,100 L90,100 L90,120 L130,120 L130,110 L140,110 L140,120 L150,120 L150,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M300,200 L300,115 L310,115 L310,105 L320,105 L320,115 L360,115 L360,95 L370,95 L370,115 L410,115 L410,105 L420,105 L420,115 L430,115 L430,200" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M600,200 L600,120 L610,120 L610,108 L620,108 L620,120 L660,120 L660,98 L670,98 L670,120 L710,120 L710,108 L720,108 L720,120 L730,120 L730,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M900,200 L900,115 L910,115 L910,105 L920,105 L920,115 L960,115 L960,95 L970,95 L970,115 L1010,115 L1010,105 L1020,105 L1020,115 L1030,115 L1030,200" fill="var(--ink-dark)" opacity="0.05"/>
        {:else if stageIndex === 4}
          <!-- 塔: 遠くの廃墟の塔 -->
          <path d="M100,200 L100,80 L95,80 L110,30 L125,80 L120,80 L120,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M400,200 L400,90 L395,90 L410,40 L425,90 L420,90 L420,200" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M700,200 L700,75 L695,75 L710,25 L725,75 L720,75 L720,200" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M1000,200 L1000,85 L995,85 L1010,35 L1025,85 L1020,85 L1020,200" fill="var(--ink-dark)" opacity="0.05"/>
        {/if}
      </svg>
    </div>

    <!-- 近景パララックス層 (1x速度) -->
    <div class="parallax-near" style="transform: translateX({-bgOffset}px)">
      <svg class="parallax-near-svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
        {#if stageIndex === 0}
          <!-- 森: 草、キノコ、小さな木 -->
          <!-- 草の群生 -->
          <path d="M20,175 L24,160 L28,175" fill="var(--ink-dark)" opacity="0.15"/>
          <path d="M30,175 L33,162 L36,175" fill="var(--ink-dark)" opacity="0.12"/>
          <path d="M25,175 L28,165 L31,175" fill="var(--ink-dark)" opacity="0.13"/>
          <!-- キノコ -->
          <path d="M100,175 L100,168 L96,168 C96,163 104,163 104,168 L100,168" fill="var(--ink-dark)" opacity="0.18"/>
          <!-- 小さな三角の木 -->
          <path d="M160,175 L160,155 L155,155 L165,135 L175,155 L170,155 L170,175" fill="var(--ink-dark)" opacity="0.14"/>
          <!-- 草 -->
          <path d="M220,175 L224,158 L228,175" fill="var(--ink-dark)" opacity="0.12"/>
          <path d="M230,175 L234,160 L238,175" fill="var(--ink-dark)" opacity="0.14"/>
          <!-- キノコ2 -->
          <path d="M300,175 L300,168 L296,168 C296,164 304,164 304,168 L300,168" fill="var(--ink-dark)" opacity="0.16"/>
          <path d="M310,175 L310,170 L307,170 C307,167 313,167 313,170 L310,170" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 草3 -->
          <path d="M380,175 L383,161 L386,175" fill="var(--ink-dark)" opacity="0.13"/>
          <path d="M388,175 L391,163 L394,175" fill="var(--ink-dark)" opacity="0.15"/>
          <!-- 小木2 -->
          <path d="M460,175 L460,158 L456,158 L464,140 L472,158 L468,158 L468,175" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 草4 -->
          <path d="M540,175 L543,162 L546,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M550,175 L553,160 L556,175" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- キノコ3 -->
          <path d="M620,175 L620,168 L616,168 C616,163 624,163 624,168 L620,168" fill="var(--ink-dark)" opacity="0.17"/>
          <!-- 繰り返し（ループ用） -->
          <path d="M720,175 L724,160 L728,175" fill="var(--ink-dark)" opacity="0.15"/>
          <path d="M730,175 L733,162 L736,175" fill="var(--ink-dark)" opacity="0.12"/>
          <path d="M800,175 L800,168 L796,168 C796,163 804,163 804,168 L800,168" fill="var(--ink-dark)" opacity="0.18"/>
          <path d="M860,175 L860,155 L855,155 L865,135 L875,155 L870,155 L870,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M940,175 L943,161 L946,175" fill="var(--ink-dark)" opacity="0.13"/>
          <path d="M1000,175 L1000,168 L996,168 C996,164 1004,164 1004,168 L1000,168" fill="var(--ink-dark)" opacity="0.16"/>
          <path d="M1080,175 L1083,161 L1086,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M1150,175 L1150,158 L1146,158 L1154,140 L1162,158 L1158,158 L1158,175" fill="var(--ink-dark)" opacity="0.12"/>
        {:else if stageIndex === 1}
          <!-- 谷: 岩、小石、枯れ草 -->
          <!-- 岩 -->
          <path d="M30,175 L25,165 L35,160 L45,165 L40,175" fill="var(--ink-dark)" opacity="0.15"/>
          <!-- 小石の群 -->
          <circle cx="100" cy="173" r="3" fill="var(--ink-dark)" opacity="0.12"/>
          <circle cx="108" cy="174" r="2" fill="var(--ink-dark)" opacity="0.10"/>
          <circle cx="104" cy="175" r="2.5" fill="var(--ink-dark)" opacity="0.11"/>
          <!-- 枯れ草 -->
          <path d="M170,175 L173,158 L176,175" fill="var(--ink-dark)" opacity="0.10"/>
          <path d="M175,175 L177,162 L179,175" fill="var(--ink-dark)" opacity="0.08"/>
          <!-- 岩2 -->
          <path d="M250,175 L242,162 L260,158 L268,164 L262,175" fill="var(--ink-dark)" opacity="0.14"/>
          <!-- 小石 -->
          <circle cx="330" cy="174" r="2" fill="var(--ink-dark)" opacity="0.10"/>
          <circle cx="336" cy="173" r="3" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 枯れ草2 -->
          <path d="M400,175 L403,160 L406,175" fill="var(--ink-dark)" opacity="0.09"/>
          <path d="M408,175 L410,164 L412,175" fill="var(--ink-dark)" opacity="0.08"/>
          <!-- 岩3 -->
          <path d="M480,175 L475,167 L488,162 L495,168 L490,175" fill="var(--ink-dark)" opacity="0.13"/>
          <!-- 繰り返し -->
          <path d="M580,175 L575,165 L585,160 L595,165 L590,175" fill="var(--ink-dark)" opacity="0.15"/>
          <circle cx="660" cy="173" r="3" fill="var(--ink-dark)" opacity="0.12"/>
          <circle cx="668" cy="174" r="2" fill="var(--ink-dark)" opacity="0.10"/>
          <path d="M730,175 L733,158 L736,175" fill="var(--ink-dark)" opacity="0.10"/>
          <path d="M810,175 L802,162 L820,158 L828,164 L822,175" fill="var(--ink-dark)" opacity="0.14"/>
          <circle cx="900" cy="174" r="2" fill="var(--ink-dark)" opacity="0.10"/>
          <path d="M970,175 L965,167 L978,162 L985,168 L980,175" fill="var(--ink-dark)" opacity="0.13"/>
          <path d="M1060,175 L1055,165 L1065,160 L1075,165 L1070,175" fill="var(--ink-dark)" opacity="0.15"/>
          <circle cx="1140" cy="173" r="3" fill="var(--ink-dark)" opacity="0.12"/>
        {:else if stageIndex === 2}
          <!-- 山: 岩、氷の結晶、雪 -->
          <!-- 尖った岩 -->
          <path d="M30,175 L35,155 L42,170 L48,150 L55,175" fill="var(--ink-dark)" opacity="0.14"/>
          <!-- 氷の結晶 -->
          <path d="M120,175 L125,160 L130,175" fill="rgba(150,180,210,0.15)"/>
          <path d="M123,168 L127,168" stroke="rgba(150,180,210,0.12)" stroke-width="1"/>
          <!-- 雪の丘 -->
          <path d="M190,175 C195,170 205,168 215,170 C220,172 225,175 230,175" fill="var(--ink-dark)" opacity="0.06"/>
          <!-- 岩2 -->
          <path d="M300,175 L308,152 L316,168 L322,148 L330,175" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 氷の結晶2 -->
          <path d="M400,175 L404,158 L408,175" fill="rgba(150,180,210,0.13)"/>
          <path d="M402,166 L406,166" stroke="rgba(150,180,210,0.10)" stroke-width="1"/>
          <!-- 雪の丘2 -->
          <path d="M470,175 C475,171 485,169 495,171 C500,173 505,175 510,175" fill="var(--ink-dark)" opacity="0.05"/>
          <!-- 繰り返し -->
          <path d="M580,175 L585,155 L592,170 L598,150 L605,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M670,175 L675,160 L680,175" fill="rgba(150,180,210,0.15)"/>
          <path d="M750,175 C755,170 765,168 775,170 C780,172 785,175 790,175" fill="var(--ink-dark)" opacity="0.06"/>
          <path d="M860,175 L868,152 L876,168 L882,148 L890,175" fill="var(--ink-dark)" opacity="0.12"/>
          <path d="M960,175 L964,158 L968,175" fill="rgba(150,180,210,0.13)"/>
          <path d="M1040,175 C1045,171 1055,169 1065,171 C1070,173 1075,175 1080,175" fill="var(--ink-dark)" opacity="0.05"/>
          <path d="M1140,175 L1145,155 L1152,170 L1158,150 L1165,175" fill="var(--ink-dark)" opacity="0.14"/>
        {:else if stageIndex === 3}
          <!-- 城: 石壁の断片、旗、松明 -->
          <!-- 石壁の断片 -->
          <rect x="25" y="162" width="20" height="13" fill="var(--ink-dark)" opacity="0.12" rx="1"/>
          <rect x="28" y="165" width="6" height="4" fill="var(--ink-dark)" opacity="0.06" rx="0.5"/>
          <!-- 旗 -->
          <line x1="120" y1="175" x2="120" y2="150" stroke="var(--ink-dark)" stroke-width="1" opacity="0.15"/>
          <path d="M120,150 L135,154 L120,158" fill="var(--gold-dim)" opacity="0.15"/>
          <!-- 松明 -->
          <line x1="220" y1="175" x2="220" y2="158" stroke="var(--ink-dark)" stroke-width="1.5" opacity="0.15"/>
          <path d="M217,158 L220,150 L223,158" fill="var(--gold-accent)" opacity="0.12"/>
          <!-- 石壁2 -->
          <rect x="310" y="164" width="18" height="11" fill="var(--ink-dark)" opacity="0.10" rx="1"/>
          <!-- 旗2 -->
          <line x1="420" y1="175" x2="420" y2="152" stroke="var(--ink-dark)" stroke-width="1" opacity="0.13"/>
          <path d="M420,152 L433,156 L420,160" fill="var(--gold-dim)" opacity="0.13"/>
          <!-- 松明2 -->
          <line x1="520" y1="175" x2="520" y2="158" stroke="var(--ink-dark)" stroke-width="1.5" opacity="0.13"/>
          <path d="M517,158 L520,150 L523,158" fill="var(--gold-accent)" opacity="0.10"/>
          <!-- 繰り返し -->
          <rect x="625" y="162" width="20" height="13" fill="var(--ink-dark)" opacity="0.12" rx="1"/>
          <line x1="720" y1="175" x2="720" y2="150" stroke="var(--ink-dark)" stroke-width="1" opacity="0.15"/>
          <path d="M720,150 L735,154 L720,158" fill="var(--gold-dim)" opacity="0.15"/>
          <line x1="820" y1="175" x2="820" y2="158" stroke="var(--ink-dark)" stroke-width="1.5" opacity="0.15"/>
          <path d="M817,158 L820,150 L823,158" fill="var(--gold-accent)" opacity="0.12"/>
          <rect x="910" y="164" width="18" height="11" fill="var(--ink-dark)" opacity="0.10" rx="1"/>
          <line x1="1020" y1="175" x2="1020" y2="152" stroke="var(--ink-dark)" stroke-width="1" opacity="0.13"/>
          <path d="M1020,152 L1033,156 L1020,160" fill="var(--gold-dim)" opacity="0.13"/>
          <line x1="1120" y1="175" x2="1120" y2="158" stroke="var(--ink-dark)" stroke-width="1.5" opacity="0.13"/>
          <path d="M1117,158 L1120,150 L1123,158" fill="var(--gold-accent)" opacity="0.10"/>
        {:else if stageIndex === 4}
          <!-- 塔: 瓦礫、割れた石、蜘蛛の巣 -->
          <!-- 瓦礫 -->
          <path d="M20,175 L25,168 L35,165 L40,170 L45,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M30,175 L32,172 L38,172 L36,175" fill="var(--ink-dark)" opacity="0.10"/>
          <!-- 蜘蛛の巣 -->
          <path d="M120,175 L120,160 L135,168" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.12"/>
          <path d="M120,168 L132,164" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.10"/>
          <path d="M124,175 L128,163" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.08"/>
          <!-- 割れた石 -->
          <path d="M220,175 L225,163 L228,168 L235,160 L240,175" fill="var(--ink-dark)" opacity="0.13"/>
          <!-- 瓦礫2 -->
          <path d="M330,175 L335,170 L342,167 L348,171 L352,175" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 蜘蛛の巣2 -->
          <path d="M440,175 L440,162 L453,169" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.11"/>
          <path d="M440,169 L450,166" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.09"/>
          <!-- 割れた石2 -->
          <path d="M540,175 L545,165 L548,170 L555,162 L560,175" fill="var(--ink-dark)" opacity="0.12"/>
          <!-- 繰り返し -->
          <path d="M640,175 L645,168 L655,165 L660,170 L665,175" fill="var(--ink-dark)" opacity="0.14"/>
          <path d="M740,175 L740,160 L755,168" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.12"/>
          <path d="M840,175 L845,163 L848,168 L855,160 L860,175" fill="var(--ink-dark)" opacity="0.13"/>
          <path d="M950,175 L955,170 L962,167 L968,171 L972,175" fill="var(--ink-dark)" opacity="0.12"/>
          <path d="M1060,175 L1060,162 L1073,169" fill="none" stroke="var(--ink-dark)" stroke-width="0.5" opacity="0.11"/>
          <path d="M1150,175 L1155,165 L1158,170 L1165,162 L1170,175" fill="var(--ink-dark)" opacity="0.12"/>
        {/if}
      </svg>
    </div>

    <!-- 道 -->
    <div class="road"></div>
    <div class="road-texture" style="transform: translateX({-bgOffset * 0.8}px); width: 300%"></div>

    <!-- 魔女シルエット -->
    <div class="witch" class:walking={isWalking} style="left: {witchLeft}%;">
      <svg viewBox="0 0 20 32" class="witch-svg">
        <!-- 帽子 -->
        <path d="M10,0 L7,8 L13,8 Z" fill="currentColor"/>
        <!-- 帽子のつば -->
        <path d="M5,8 L15,8 L14,10 L6,10 Z" fill="currentColor"/>
        <!-- 顔 -->
        <circle cx="10" cy="12" r="2.5" fill="currentColor"/>
        <!-- 体（ローブ） -->
        <path d="M7,14 L5,30 L15,30 L13,14 Z" fill="currentColor"/>
        <!-- 杖 -->
        <line x1="15" y1="12" x2="18" y2="30" stroke="currentColor" stroke-width="1"/>
      </svg>
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
  .stage-forest { background: linear-gradient(180deg, #1a3a1a 0%, #2d5a2d 60%, #4a3a2a 100%); }
  .stage-valley { background: linear-gradient(180deg, #5a4a3a 0%, #8a6a4a 60%, #6a5a3a 100%); }
  .stage-mountain { background: linear-gradient(180deg, #4a5a6a 0%, #6a7a8a 60%, #5a6a7a 100%); }
  .stage-castle { background: linear-gradient(180deg, #2a1a3a 0%, #3a2a4a 60%, #2a2a3a 100%); }
  .stage-tower { background: linear-gradient(180deg, #1a0a0a 0%, #3a1a1a 60%, #2a1a1a 100%); }

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
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  /* パララックス遠景 */
  .parallax-far {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    will-change: transform;
  }
  .parallax-far-svg {
    width: 100%;
    height: 100%;
  }

  /* パララックス近景 */
  .parallax-near {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    will-change: transform;
  }
  .parallax-near-svg {
    width: 100%;
    height: 100%;
  }

  /* 道 */
  .road {
    position: absolute;
    bottom: 25%;
    width: 100%;
    height: 3px;
    background: var(--gold-dim);
    opacity: 0.5;
    z-index: 2;
  }
  .road-texture {
    position: absolute;
    bottom: calc(25% - 2px);
    height: 7px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 8px,
      rgba(196, 162, 101, 0.15) 8px,
      rgba(196, 162, 101, 0.15) 10px
    );
    z-index: 2;
    will-change: transform;
  }

  /* 魔女シルエット */
  .witch {
    position: absolute;
    bottom: calc(25% + 3px);
    transform: translateX(-50%);
    width: 64px;
    height: 100px;
    z-index: 4;
    color: var(--ink-dark);
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    will-change: left;
  }

  .witch-svg {
    width: 100%;
    height: 100%;
  }

  /* 歩行時の上下揺れ + 足の動きを表現 */
  @keyframes walk-cycle {
    0% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
    15% { transform: translateX(-50%) translateY(-4px) rotate(-1deg); }
    30% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
    45% { transform: translateX(-50%) translateY(-4px) rotate(1deg); }
    60% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
    75% { transform: translateX(-50%) translateY(-4px) rotate(-1deg); }
    100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
  }

  .witch.walking {
    animation: walk-cycle 0.5s ease-in-out infinite;
  }

  /* イベント名 */
  .event-label {
    position: absolute;
    bottom: calc(25% + 110px);
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
