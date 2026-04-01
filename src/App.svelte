<script lang="ts">
  import BookSpread from './components/BookSpread.svelte';
  import SlotWord from './components/SlotWord.svelte';
  import HandCard from './components/HandCard.svelte';
  import NodeMap from './components/NodeMap.svelte';
  import { nodeDefs, battleNodeDefs, initialHand, mapNodes } from './game/data/nodes';
  import { createInitialState, swapWord, extractWord, insertWord, getSelectableNodeIds, applyDamage, addGold } from './game/engine/state';
  import { resolveNode } from './game/engine/evaluate';
  import { initBattle, resolveBattleTurn, advanceBattleTurn, isEnemyDefeated, getCurrentEnemyAction } from './game/engine/battle';
  import type { Slot, NodeDef, BattleNodeDef, BattleState } from './game/engine/types';

  // ゲーム状態
  let gameState = $state(createInitialState([...initialHand], mapNodes));
  let selectableIds = $derived(getSelectableNodeIds(gameState.map));

  // 現在のノード（通常ノードまたはバトルノード）
  let currentNodeDef = $state<NodeDef | null>(null);
  let currentBattleNode = $state<BattleNodeDef | null>(null);
  let currentSlots = $state<Slot[]>([]);

  // バトル用: どちらの文を操作しているか区別するための全スロット配列
  // バトル時は [敵スロット..., プレイヤースロット...] を結合
  let allBattleSlots = $state<Slot[]>([]);
  let enemySlotCount = $state(0);

  // ドラッグ状態
  let draggingCardIndex = $state<number | null>(null);
  let dragOverSlotIndex = $state<number | null>(null);

  // 直前の判定結果
  let lastPlayerDamage = $state(0);
  let lastEnemyDamage = $state(0);
  let lastGold = $state(0);

  // アニメーション
  let isTransitioning = $state(false);

  // HP割合
  let hpPercent = $derived(Math.max(0, (gameState.hp / gameState.maxHp) * 100));
  let enemyHpPercent = $derived(
    gameState.battle ? Math.max(0, (gameState.battle.enemyHp / gameState.battle.enemyMaxHp) * 100) : 0
  );

  // --- マップ ---
  function handleSelectNode(mapNodeId: string) {
    const mapNode = gameState.map.nodes.find(n => n.id === mapNodeId);
    if (!mapNode) return;

    const updatedNodes = gameState.map.nodes.map(n =>
      n.id === mapNodeId ? { ...n, visited: true } : n
    );

    // バトルノードか通常ノードかを判定
    const battleDef = battleNodeDefs[mapNode.nodeDefId];
    const normalDef = nodeDefs[mapNode.nodeDefId];

    if (battleDef) {
      // バトル開始
      currentBattleNode = battleDef;
      currentNodeDef = null;
      const battle = initBattle(battleDef);

      allBattleSlots = [...battle.enemySlots, ...battle.playerSlots];
      enemySlotCount = battle.enemySlots.length;

      gameState = {
        ...gameState,
        actionPoints: battleDef.actionPoints,
        phase: 'battle',
        lastResult: null,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
        battle,
      };
    } else if (normalDef) {
      // 通常ノード
      currentNodeDef = normalDef;
      currentBattleNode = null;
      currentSlots = normalDef.slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }));

      gameState = {
        ...gameState,
        actionPoints: normalDef.actionPoints,
        phase: 'playing',
        lastResult: null,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
        battle: null,
      };
    }

    lastPlayerDamage = 0;
    lastEnemyDamage = 0;
    lastGold = 0;
  }

  // --- 共通ドラッグ操作 ---
  function handleDragStartCard(index: number) { draggingCardIndex = index; }
  function handleDragEnd() { draggingCardIndex = null; dragOverSlotIndex = null; }
  function handleSlotDragEnter(index: number) { dragOverSlotIndex = index; }
  function handleSlotDragLeave() { dragOverSlotIndex = null; }

  // --- 通常ノードのスロット操作 ---
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

  // --- バトルのスロット操作（敵文+自文の統合スロット配列） ---
  function handleBattleDropOnSlot(slotIndex: number) {
    if (draggingCardIndex === null) return;
    const slot = allBattleSlots[slotIndex];
    if (!slot) return;

    let result;
    if (slot.word === null) {
      result = insertWord(gameState, slotIndex, draggingCardIndex, allBattleSlots);
    } else {
      result = swapWord(gameState, slotIndex, draggingCardIndex, allBattleSlots);
    }
    if (result) {
      gameState = result.state;
      allBattleSlots = result.slots;
    }
    draggingCardIndex = null;
    dragOverSlotIndex = null;
  }

  function handleBattleExtract(slotIndex: number) {
    const result = extractWord(gameState, slotIndex, allBattleSlots);
    if (result) {
      gameState = result.state;
      allBattleSlots = result.slots;
    }
  }

  // --- 通常ノードの解決 ---
  function handleResolve() {
    if (!currentNodeDef) return;
    const result = resolveNode(currentNodeDef, currentSlots);

    lastPlayerDamage = result.damage;
    lastGold = result.gold;

    let newState = { ...gameState, phase: 'resolved' as const, lastResult: result.resultText };
    newState = applyDamage(newState, result.damage);
    newState = addGold(newState, result.gold);
    gameState = newState;
  }

  // --- バトルターン解決 ---
  function handleBattleResolve() {
    if (!currentBattleNode || !gameState.battle) return;

    // allBattleSlotsから敵/プレイヤーのスロットを分離
    const enemySlots = allBattleSlots.slice(0, enemySlotCount);
    const playerSlots = allBattleSlots.slice(enemySlotCount);

    const battleWithSlots: BattleState = {
      ...gameState.battle,
      enemySlots,
      playerSlots,
    };

    const result = resolveBattleTurn(currentBattleNode, battleWithSlots);

    lastPlayerDamage = result.playerDamage;
    lastEnemyDamage = result.enemyDamage;

    const defeated = isEnemyDefeated(battleWithSlots, result.enemyDamage);

    let newState = {
      ...gameState,
      lastResult: result.resultText,
      battle: {
        ...battleWithSlots,
        enemyHp: Math.max(0, battleWithSlots.enemyHp - result.enemyDamage),
        turnResult: result.resultText,
        turnPhase: 'resolved' as const,
      },
    };
    newState = applyDamage(newState, result.playerDamage);

    if (defeated) {
      // 勝利
      newState = addGold(newState, currentBattleNode.victoryGold);
      lastGold = currentBattleNode.victoryGold;
      newState.phase = 'resolved';
      newState.lastResult = result.resultText + '\n\n' + currentBattleNode.enemyName + 'は倒れた。';
    } else {
      lastGold = 0;
    }

    gameState = newState;
  }

  // --- バトル次ターン ---
  function handleBattleNextTurn() {
    if (!currentBattleNode || !gameState.battle) return;

    const nextBattle = advanceBattleTurn(currentBattleNode, gameState.battle, 0); // damageは既に適用済み
    allBattleSlots = [...nextBattle.enemySlots, ...nextBattle.playerSlots];
    enemySlotCount = nextBattle.enemySlots.length;

    gameState = {
      ...gameState,
      actionPoints: currentBattleNode.actionPoints,
      battle: nextBattle,
      lastResult: null,
    };
    lastPlayerDamage = 0;
    lastEnemyDamage = 0;
  }

  // --- マップに戻る ---
  function handleReturnToMap() {
    const currentMapNode = gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId);
    if (currentMapNode && currentMapNode.nextIds.length === 0) {
      currentNodeDef = null;
      currentBattleNode = null;
      currentSlots = [];
      return;
    }

    isTransitioning = true;
    setTimeout(() => {
      gameState = { ...gameState, phase: 'map', lastResult: null, battle: null };
      currentNodeDef = null;
      currentBattleNode = null;
      currentSlots = [];
      allBattleSlots = [];
      isTransitioning = false;
    }, 500);
  }

  function handleRestart() {
    gameState = createInitialState([...initialHand], mapNodes);
    currentNodeDef = null;
    currentBattleNode = null;
    currentSlots = [];
    allBattleSlots = [];
    lastPlayerDamage = 0;
    lastEnemyDamage = 0;
    lastGold = 0;
  }

  function getSlotIndex(slotId: string): number {
    return currentSlots.findIndex(s => s.id === slotId);
  }

  function getBattleSlotIndex(slotId: string): number {
    return allBattleSlots.findIndex(s => s.id === slotId);
  }

  let isGameClear = $derived(
    gameState.phase === 'resolved' && currentNodeDef === null && currentBattleNode === null && gameState.hp > 0
  );

  let isBattleWon = $derived(
    gameState.phase === 'resolved' && currentBattleNode !== null && gameState.battle !== null && gameState.battle.enemyHp <= 0
  );

  let isBattleTurnResolved = $derived(
    gameState.phase === 'battle' && gameState.battle?.turnPhase === 'resolved'
  );
</script>

<div class="game-viewport" class:transitioning={isTransitioning}>

  <!-- ステータスバー -->
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

  {:else if gameState.phase === 'map' && !currentNodeDef && !currentBattleNode}
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

  {:else if currentBattleNode && gameState.battle}
    <!-- ===== バトル画面 ===== -->
    {@const battle = gameState.battle}
    {@const enemyAction = getCurrentEnemyAction(currentBattleNode, battle.turn)}
    <BookSpread
      leftTitle="{currentBattleNode.enemyName} — Turn {battle.turn + 1}"
      rightTitle={battle.turnPhase === 'resolved' || isBattleWon ? '結果' : ''}
      pageNumber={gameState.map.nodes.filter(n => n.visited).length}
    >
      {#snippet leftContent()}
        <div class="battle-sentences">
          <!-- 敵の行動文 -->
          <div class="battle-section enemy-section">
            <div class="section-label enemy-label">敵の行動</div>
            <div class="enemy-hp-row">
              <span class="enemy-hp-label">{currentBattleNode.enemyName}</span>
              <div class="enemy-hp-track">
                <div class="enemy-hp-fill" style:width="{enemyHpPercent}%"></div>
              </div>
              <span class="enemy-hp-text">{battle.enemyHp}/{battle.enemyMaxHp}</span>
            </div>
            <div class="sentence-container">
              {#each enemyAction.sentence as part}
                {#if part.type === 'fixed'}
                  <span class="fixed-text">{part.text}</span>
                {:else}
                  {@const idx = getBattleSlotIndex(part.slotId)}
                  {#if idx >= 0}
                    <SlotWord
                      slot={allBattleSlots[idx]}
                      index={idx}
                      onDrop={handleBattleDropOnSlot}
                      onExtract={handleBattleExtract}
                      isDragOver={dragOverSlotIndex === idx}
                      onDragEnter={handleSlotDragEnter}
                      onDragLeave={handleSlotDragLeave}
                    />
                  {/if}
                {/if}
              {/each}
            </div>
          </div>

          <!-- プレイヤーの行動文 -->
          <div class="battle-section player-section">
            <div class="section-label player-label">あなたの行動</div>
            <div class="sentence-container">
              {#each currentBattleNode.playerAction.sentence as part}
                {#if part.type === 'fixed'}
                  <span class="fixed-text">{part.text}</span>
                {:else}
                  {@const idx = getBattleSlotIndex(part.slotId)}
                  {#if idx >= 0}
                    <SlotWord
                      slot={allBattleSlots[idx]}
                      index={idx}
                      onDrop={handleBattleDropOnSlot}
                      onExtract={handleBattleExtract}
                      isDragOver={dragOverSlotIndex === idx}
                      onDragEnter={handleSlotDragEnter}
                      onDragLeave={handleSlotDragLeave}
                    />
                  {/if}
                {/if}
              {/each}
            </div>
          </div>
        </div>

        <div class="action-bar">
          <span class="ap-display">残り {gameState.actionPoints} 手</span>
          {#if battle.turnPhase === 'writing' && !isBattleWon}
            <button class="resolve-btn" onclick={handleBattleResolve}>書き換えを確定する</button>
          {/if}
        </div>
      {/snippet}

      {#snippet rightContent()}
        {#if isBattleWon && gameState.lastResult}
          <div class="result-text appear">
            <p style="white-space: pre-line">{gameState.lastResult}</p>
          </div>
          <div class="result-stats">
            {#if lastPlayerDamage > 0}<span class="stat-damage">-{lastPlayerDamage} HP</span>{/if}
            {#if lastEnemyDamage > 0}<span class="stat-enemy-damage">敵に {lastEnemyDamage} ダメージ</span>{/if}
            {#if lastGold > 0}<span class="stat-gold">+{lastGold} G</span>{/if}
          </div>
          <button class="next-btn" onclick={handleReturnToMap}>
            {gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId)?.nextIds.length ? '次のページへ' : '物語を閉じる'}
          </button>
        {:else if battle.turnPhase === 'resolved' && battle.turnResult}
          <div class="result-text appear">
            <p style="white-space: pre-line">{battle.turnResult}</p>
          </div>
          <div class="result-stats">
            {#if lastPlayerDamage > 0}<span class="stat-damage">-{lastPlayerDamage} HP</span>{/if}
            {#if lastEnemyDamage > 0}<span class="stat-enemy-damage">敵に {lastEnemyDamage} ダメージ</span>{/if}
          </div>
          {#if gameState.hp > 0}
            <button class="next-btn" onclick={handleBattleNextTurn}>次のターンへ</button>
          {/if}
        {:else}
          <div class="right-placeholder">
            <p>敵の行動を弱め、</p>
            <p>自分の行動を強めよ</p>
          </div>
        {/if}
      {/snippet}
    </BookSpread>

  {:else if currentNodeDef}
    <!-- ===== 通常パズル画面 ===== -->
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
                    isDragging={draggingCardIndex !== null}
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
          <div class="result-text appear"><p>{gameState.lastResult}</p></div>
          <div class="result-stats">
            {#if lastPlayerDamage > 0}<span class="stat-damage">-{lastPlayerDamage} HP</span>
            {:else if lastPlayerDamage < 0}<span class="stat-heal">+{-lastPlayerDamage} HP</span>
            {:else}<span class="stat-nodamage">ダメージなし</span>{/if}
            {#if lastGold > 0}<span class="stat-gold">+{lastGold} G</span>{/if}
          </div>
          {#if gameState.hp > 0}
            {@const mn = gameState.map.nodes.find(n => n.id === gameState.map.currentNodeId)}
            <button class="next-btn" onclick={handleReturnToMap}>
              {mn && mn.nextIds.length > 0 ? '次のページへ' : '物語を閉じる'}
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

  .status-top { width: 100%; max-width: 960px; display: flex; align-items: center; gap: 16px; padding: 0 8px; }
  .hp-bar { display: flex; align-items: center; gap: 8px; flex: 1; }
  .hp-label { color: var(--page-cream); font-family: var(--font-story); font-size: 0.8rem; }
  .hp-track { flex: 1; height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; overflow: hidden; }
  .hp-fill { height: 100%; background: #5a9e5a; border-radius: 5px; transition: width 0.5s ease; }
  .hp-fill.hp-warn { background: #c4a265; }
  .hp-fill.hp-danger { background: #a73b3b; }
  .hp-text { color: var(--page-cream); font-family: var(--font-story); font-size: 0.8rem; min-width: 50px; text-align: right; }
  .gold-display { color: var(--gold-accent); font-family: var(--font-story); font-size: 0.9rem; min-width: 50px; text-align: right; }

  .map-page { flex: 1; display: flex; align-items: center; justify-content: center; }
  .map-info { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .map-hint { color: var(--ink-light); font-size: 0.9rem; font-style: italic; }

  /* バトル */
  .battle-sentences { flex: 1; display: flex; flex-direction: column; gap: 12px; justify-content: center; }
  .battle-section { padding: 10px; border-radius: 6px; }
  .enemy-section { background: rgba(167, 59, 59, 0.06); border: 1px solid rgba(167, 59, 59, 0.15); }
  .player-section { background: rgba(59, 138, 94, 0.06); border: 1px solid rgba(59, 138, 94, 0.15); }
  .section-label { font-family: var(--font-story); font-size: 0.75rem; margin-bottom: 6px; letter-spacing: 0.1em; }
  .enemy-label { color: #a73b3b; }
  .player-label { color: #3b8a5e; }

  .enemy-hp-row { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
  .enemy-hp-label { font-family: var(--font-story); font-size: 0.7rem; color: var(--ink-medium); min-width: 60px; }
  .enemy-hp-track { flex: 1; height: 6px; background: rgba(0,0,0,0.08); border-radius: 3px; overflow: hidden; }
  .enemy-hp-fill { height: 100%; background: #a73b3b; border-radius: 3px; transition: width 0.5s ease; }
  .enemy-hp-text { font-family: var(--font-story); font-size: 0.7rem; color: var(--ink-medium); min-width: 40px; text-align: right; }

  /* 共通 */
  .event-text { flex: 1; display: flex; align-items: center; justify-content: center; }
  .sentence-container { display: flex; flex-wrap: wrap; gap: 2px; justify-content: center; align-items: center; line-height: 2.6; }
  .fixed-text { font-family: var(--font-story); font-size: 1.15rem; color: var(--ink-medium); padding: 0 2px; }
  .action-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(0,0,0,0.08); }
  .ap-display { font-size: 0.85rem; color: var(--ink-light); font-family: var(--font-story); }
  .resolve-btn { font-family: var(--font-story); font-size: 0.85rem; padding: 6px 16px; background: var(--ink-dark); color: var(--page-cream); border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
  .resolve-btn:hover { background: var(--leather-light); box-shadow: 0 0 12px var(--magic-glow); }

  .result-text { flex: 1; display: flex; align-items: center; justify-content: center; font-family: var(--font-story); font-size: 1rem; line-height: 2; color: var(--ink-dark); }
  .result-text.appear { animation: inkAppear 1s ease-out; }
  @keyframes inkAppear { from { opacity: 0; filter: blur(4px); } to { opacity: 1; filter: blur(0); } }

  .result-stats { display: flex; gap: 12px; justify-content: center; margin: 6px 0; font-family: var(--font-story); font-size: 0.85rem; flex-wrap: wrap; }
  .stat-damage { color: #a73b3b; }
  .stat-heal { color: #5a9e5a; }
  .stat-nodamage { color: var(--ink-light); }
  .stat-gold { color: var(--gold-accent); }
  .stat-enemy-damage { color: #3b7ea7; }

  .right-placeholder { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--ink-light); font-size: 0.9rem; font-style: italic; gap: 4px; }
  .next-btn { font-family: var(--font-story); font-size: 0.9rem; padding: 8px 24px; background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim); border-radius: 4px; cursor: pointer; align-self: center; margin-top: 8px; transition: all 0.3s; }
  .next-btn:hover { background: rgba(196,162,101,0.1); box-shadow: 0 0 16px var(--magic-glow); }

  .ending-page { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
  .ending-main { font-family: var(--font-story); font-size: 1.1rem; color: var(--ink-dark); line-height: 2; }
  .ending-sub { font-family: var(--font-story); font-size: 0.95rem; color: var(--ink-medium); line-height: 2; text-align: center; }
  .ending-fin { font-family: var(--font-story); font-size: 1.3rem; color: var(--gold-accent); letter-spacing: 0.3em; }
  .restart-btn { font-family: var(--font-story); font-size: 0.85rem; padding: 8px 20px; margin-top: 12px; background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim); border-radius: 4px; cursor: pointer; transition: all 0.3s; }
  .restart-btn:hover { background: rgba(196,162,101,0.1); }

  .hand-area { width: 100%; max-width: 960px; padding: 12px 24px; background: linear-gradient(180deg, rgba(61,43,31,0.9) 0%, rgba(26,20,16,0.95) 100%); border-radius: 8px; border: 1px solid rgba(196,162,101,0.2); box-shadow: inset 0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4); }
  .hand-cards { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; min-height: 56px; align-items: center; }
  .empty-hand { color: var(--ink-light); font-family: var(--font-story); font-size: 0.85rem; font-style: italic; }
</style>
