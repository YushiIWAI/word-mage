<script lang="ts">
  import BookSpread from './components/BookSpread.svelte';
  import SlotWord from './components/SlotWord.svelte';
  import HandCard from './components/HandCard.svelte';
  import NodeMap from './components/NodeMap.svelte';
  import MagicEffect from './components/MagicEffect.svelte';
  import { nodeDefs, battleNodeDefs, shopNodeDefs, treasureNodeDefs, initialHand, mapNodes } from './game/data/nodes';
  import { createInitialState, swapWord, extractWord, insertWord, getSelectableNodeIds, applyDamage, addGold, addItems, buyCard, sellCard, sellItem } from './game/engine/state';
  import { resolveNode } from './game/engine/evaluate';
  import { initBattle, resolveBattleTurn, advanceBattleTurn, isEnemyDefeated, getCurrentEnemyAction } from './game/engine/battle';
  import type { Slot, NodeDef, BattleNodeDef, BattleState, ShopNodeDef, ShopItem, TreasureNodeDef, WordCard, PersistentEffect } from './game/engine/types';

  // ゲーム状態
  let gameState = $state(createInitialState([...initialHand], mapNodes));
  let selectableIds = $derived(getSelectableNodeIds(gameState.map));

  // 現在のノード（通常ノード、バトル、ショップ）
  let currentNodeDef = $state<NodeDef | null>(null);
  let currentBattleNode = $state<BattleNodeDef | null>(null);
  let currentShopNode = $state<ShopNodeDef | null>(null);
  let currentTreasureNode = $state<TreasureNodeDef | null>(null);
  let treasureOffered = $state<WordCard[]>([]); // treasure で提示されたカード
  let shopSoldIds = $state<Set<string>>(new Set());
  let currentSlots = $state<Slot[]>([]);

  // マップホバープレビュー
  let hoveredNodeId = $state<string | null>(null);

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
  let lastRewardCards = $state<WordCard[]>([]);
  let lastRewardItems = $state<import('./game/engine/types').Item[]>([]);

  // アニメーション
  let isTransitioning = $state(false);
  let magicEffectActive = $state(false);
  let magicEffectType = $state<'resolve' | 'damage' | 'heal' | 'reward'>('resolve');

  // HP割合
  let hpPercent = $derived(Math.max(0, (gameState.hp / gameState.maxHp) * 100));
  let enemyHpPercent = $derived(
    gameState.battle ? Math.max(0, (gameState.battle.enemyHp / gameState.battle.enemyMaxHp) * 100) : 0
  );

  // --- エフェクト ---
  function triggerMagicEffect(type: 'resolve' | 'damage' | 'heal' | 'reward') {
    magicEffectActive = false;
    // 次のフレームで再発火（連続使用に対応）
    requestAnimationFrame(() => {
      magicEffectType = type;
      magicEffectActive = true;
      setTimeout(() => { magicEffectActive = false; }, 1500);
    });
  }

  // --- 永続カード効果 ---
  function getPersistentBonus(type: PersistentEffect['type']): number {
    return gameState.hand
      .filter(c => c.persistent?.effect.type === type)
      .reduce((sum, c) => sum + (c.persistent!.effect as any).amount, 0);
  }

  // --- マップホバープレビュー ---
  function handleNodeHover(nodeId: string | null) {
    hoveredNodeId = nodeId;
  }

  let hoveredNodeInfo = $derived.by(() => {
    if (!hoveredNodeId) return null;
    const mapNode = gameState.map.nodes.find(n => n.id === hoveredNodeId);
    if (!mapNode) return null;
    const def = nodeDefs[mapNode.nodeDefId] ?? battleNodeDefs[mapNode.nodeDefId] ?? shopNodeDefs[mapNode.nodeDefId] ?? treasureNodeDefs[mapNode.nodeDefId];
    if (!def) return null;

    const typeLabels: Record<string, string> = {
      puzzle: '探索', elite: '強敵', rest: '休憩', shop: '商人',
      boss: 'ボス', battle: '戦闘', event: 'イベント', treasure: '宝箱',
    };

    let slotInfo = '';
    if ('slots' in def && def.slots) {
      const catSymbols: Record<string, string> = {
        modifier: '■', subject: '◆', object: '▲', object_ni: '▲',
        object_de: '▲', object_kara: '▲', adverb: '★', predicate: '●',
      };
      slotInfo = def.slots.map((s: any) => catSymbols[s.category] ?? '?').join(' ');
    }
    if ('enemyActions' in def) {
      slotInfo = '⚔ 複数ターン戦闘';
    }

    let apInfo = '';
    if ('actionPoints' in def) apInfo = `AP: ${def.actionPoints}`;

    return { title: def.title, type: typeLabels[def.nodeType] ?? def.nodeType, slotInfo, apInfo };
  });

  // --- マップ ---
  function handleSelectNode(mapNodeId: string) {
    const mapNode = gameState.map.nodes.find(n => n.id === mapNodeId);
    if (!mapNode) return;

    const updatedNodes = gameState.map.nodes.map(n =>
      n.id === mapNodeId ? { ...n, visited: true } : n
    );

    // ノードタイプ判定
    const battleDef = battleNodeDefs[mapNode.nodeDefId];
    const shopDef = shopNodeDefs[mapNode.nodeDefId];
    const treasureDef = treasureNodeDefs[mapNode.nodeDefId];
    const normalDef = nodeDefs[mapNode.nodeDefId];

    if (treasureDef) {
      // 宝箱
      currentTreasureNode = treasureDef;
      currentNodeDef = null;
      currentBattleNode = null;
      currentShopNode = null;
      // ランダムに pickCount 枚選ぶ
      const shuffled = [...treasureDef.cardPool].sort(() => Math.random() - 0.5);
      treasureOffered = shuffled.slice(0, treasureDef.pickCount);
      gameState = {
        ...gameState,
        phase: 'resolved',
        lastResult: treasureDef.flavorText,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
      };
    } else if (shopDef) {
      // ショップ
      currentShopNode = shopDef;
      currentNodeDef = null;
      currentBattleNode = null;
      shopSoldIds = new Set();
      gameState = {
        ...gameState,
        phase: 'shop',
        lastResult: null,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
      };
    } else if (battleDef) {
      // バトル開始
      currentBattleNode = battleDef;
      currentNodeDef = null;
      currentShopNode = null;
      currentTreasureNode = null;
      const battle = initBattle(battleDef);

      allBattleSlots = [...battle.enemySlots, ...battle.playerSlots];
      enemySlotCount = battle.enemySlots.length;

      gameState = {
        ...gameState,
        actionPoints: battleDef.actionPoints + getPersistentBonus('ap_bonus'),
        phase: 'battle',
        lastResult: null,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
        battle,
      };
    } else if (normalDef) {
      // 通常ノード
      currentNodeDef = normalDef;
      currentBattleNode = null;
      currentShopNode = null;
      currentTreasureNode = null;
      currentSlots = normalDef.slots.map(s => ({ ...s, word: s.word ? { ...s.word } : null }));

      gameState = {
        ...gameState,
        actionPoints: normalDef.actionPoints + getPersistentBonus('ap_bonus'),
        phase: 'playing',
        lastResult: null,
        map: { nodes: updatedNodes, currentNodeId: mapNodeId },
        battle: null,
      };
    }

    lastPlayerDamage = 0;
    lastEnemyDamage = 0;
    lastGold = 0;
    lastRewardCards = [];
    lastRewardItems = [];
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

  // --- ショップ操作 ---
  function handleBuyCard(shopItem: ShopItem, index: number) {
    const result = buyCard(gameState, { ...shopItem.card, id: shopItem.card.id + '_' + Date.now() }, shopItem.price);
    if (result) {
      gameState = result;
      shopSoldIds = new Set([...shopSoldIds, shopItem.card.id]);
    }
  }

  function handleSellCard(cardIndex: number) {
    if (!currentShopNode) return;
    const result = sellCard(gameState, cardIndex, currentShopNode.sellPricePerCard);
    if (result) gameState = result;
  }

  function handleSellItem(itemIndex: number) {
    const result = sellItem(gameState, itemIndex);
    if (result) gameState = result;
  }

  function handleLeaveShop() {
    handleReturnToMap();
  }

  // --- Treasure ---
  function handlePickTreasure(card: WordCard) {
    if (gameState.hand.length >= gameState.handLimit + getPersistentBonus('hand_limit')) return;
    gameState = { ...gameState, hand: [...gameState.hand, { ...card, id: card.id + '_' + Date.now() }] };
    treasureOffered = treasureOffered.filter(c => c.id !== card.id);
  }

  // --- 通常ノードの解決 ---
  function handleResolve() {
    if (!currentNodeDef) return;
    const result = resolveNode(currentNodeDef, currentSlots);

    lastPlayerDamage = result.damage;
    lastGold = result.gold;
    lastRewardCards = result.rewardCards ?? [];
    lastRewardItems = result.rewardItems ?? [];

    let newState = { ...gameState, phase: 'resolved' as const, lastResult: result.resultText };
    newState = applyDamage(newState, result.damage);
    newState = addGold(newState, result.gold);
    if (result.rewardItems) {
      newState = addItems(newState, result.rewardItems);
    }
    if (result.rewardCards && result.rewardCards.length > 0) {
      const effectiveLimit = newState.handLimit + getPersistentBonus('hand_limit');
      for (const card of result.rewardCards) {
        if (newState.hand.length < effectiveLimit) {
          newState = { ...newState, hand: [...newState.hand, { ...card, id: card.id + '_' + Date.now() }] };
        }
      }
    }
    gameState = newState;

    // エフェクト発火
    if (result.damage < 0) triggerMagicEffect('heal');
    else if (result.damage === 0 && (lastRewardCards.length > 0 || lastRewardItems.length > 0)) triggerMagicEffect('reward');
    else if (result.damage <= 2) triggerMagicEffect('resolve');
    else triggerMagicEffect('damage');
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

    if (defeated) triggerMagicEffect('reward');
    else if (result.playerDamage > 2) triggerMagicEffect('damage');
    else triggerMagicEffect('resolve');
  }

  // --- バトル次ターン ---
  function handleBattleNextTurn() {
    if (!currentBattleNode || !gameState.battle) return;

    const nextBattle = advanceBattleTurn(currentBattleNode, gameState.battle, 0); // damageは既に適用済み
    allBattleSlots = [...nextBattle.enemySlots, ...nextBattle.playerSlots];
    enemySlotCount = nextBattle.enemySlots.length;

    gameState = {
      ...gameState,
      actionPoints: currentBattleNode.actionPoints + getPersistentBonus('ap_bonus'),
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
      currentShopNode = null;
      currentTreasureNode = null;
      currentSlots = [];
      return;
    }

    isTransitioning = true;
    setTimeout(() => {
      gameState = { ...gameState, phase: 'map', lastResult: null, battle: null };
      currentNodeDef = null;
      currentBattleNode = null;
      currentShopNode = null;
      currentTreasureNode = null;
      currentSlots = [];
      allBattleSlots = [];
      isTransitioning = false;
    }, 500);
  }

  function handleRestart() {
    gameState = createInitialState([...initialHand], mapNodes);
    currentNodeDef = null;
    currentBattleNode = null;
    currentShopNode = null;
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
    gameState.phase === 'resolved' && currentNodeDef === null && currentBattleNode === null && currentShopNode === null && currentTreasureNode === null && gameState.hp > 0
  );

  let isBattleWon = $derived(
    gameState.phase === 'resolved' && currentBattleNode !== null && gameState.battle !== null && gameState.battle.enemyHp <= 0
  );

  let isBattleTurnResolved = $derived(
    gameState.phase === 'battle' && gameState.battle?.turnPhase === 'resolved'
  );
</script>

<div class="game-viewport" class:transitioning={isTransitioning}>
  <!-- 魔法エフェクト -->
  <MagicEffect active={magicEffectActive} type={magicEffectType} />

  <!-- ステータスバー（非バトル時のみ上部表示） -->
  {#if !currentBattleNode}
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
  {/if}

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
          <NodeMap map={gameState.map} {selectableIds} onSelect={handleSelectNode} onHover={handleNodeHover} />
        </div>
      {/snippet}
      {#snippet rightContent()}
        <div class="map-info">
          {#if hoveredNodeInfo}
            <div class="preview-card">
              <div class="preview-type">{hoveredNodeInfo.type}</div>
              <div class="preview-title">{hoveredNodeInfo.title}</div>
              {#if hoveredNodeInfo.slotInfo}
                <div class="preview-slots">{hoveredNodeInfo.slotInfo}</div>
              {/if}
              {#if hoveredNodeInfo.apInfo}
                <div class="preview-ap">{hoveredNodeInfo.apInfo}</div>
              {/if}
            </div>
          {:else}
            <p class="map-hint">光るノードを選んで進む</p>
          {/if}
          <div class="map-status">
            <span>手札: {gameState.hand.length}/{gameState.handLimit + getPersistentBonus('hand_limit')}</span>
            {#if gameState.items.length > 0}
              <span>アイテム: {gameState.items.length}</span>
            {/if}
          </div>
        </div>
      {/snippet}
    </BookSpread>

  {:else if currentTreasureNode}
    <!-- ===== 宝箱画面 ===== -->
    <BookSpread
      leftTitle={currentTreasureNode.title}
      rightTitle="見つけた言葉"
      pageNumber={gameState.map.nodes.filter(n => n.visited).length}
    >
      {#snippet leftContent()}
        <div class="treasure-content">
          <p class="treasure-flavor">{currentTreasureNode.flavorText}</p>
          <div class="treasure-cards">
            {#each treasureOffered as card}
              <button
                class="treasure-card"
                disabled={gameState.hand.length >= gameState.handLimit + getPersistentBonus('hand_limit')}
                onclick={() => handlePickTreasure(card)}
              >
                <span class="treasure-card-text">{card.text}</span>
                <span class="treasure-card-cat">{card.category === 'modifier' ? '修飾語' : card.category === 'subject' ? '主語' : card.category === 'predicate' ? '述語' : card.category === 'adverb' ? '副詞' : '対象語'}</span>
              </button>
            {/each}
            {#if treasureOffered.length === 0}
              <p class="treasure-done">すべて拾い終えた。</p>
            {/if}
          </div>
        </div>
      {/snippet}
      {#snippet rightContent()}
        <div class="treasure-content">
          <p class="map-hint">カードをクリックして手札に加える</p>
          <div class="map-status">
            <span>手札: {gameState.hand.length}/{gameState.handLimit + getPersistentBonus('hand_limit')}</span>
          </div>
          <button class="next-btn" onclick={handleReturnToMap}>先へ進む</button>
        </div>
      {/snippet}
    </BookSpread>

  {:else if currentShopNode && gameState.phase === 'shop'}
    <!-- ===== ショップ画面 ===== -->
    <BookSpread
      leftTitle={currentShopNode.title}
      rightTitle="あなたの持ち物"
      pageNumber={gameState.map.nodes.filter(n => n.visited).length}
    >
      {#snippet leftContent()}
        <div class="shop-content">
          <div class="shop-section">
            <div class="section-label" style="color: var(--gold-accent)">— 購入 —</div>
            <div class="shop-items">
              {#each currentShopNode.stock as item, i}
                {@const sold = shopSoldIds.has(item.card.id)}
                <button
                  class="shop-card"
                  class:sold
                  disabled={sold || gameState.gold < item.price || gameState.hand.length >= gameState.handLimit}
                  onclick={() => handleBuyCard(item, i)}
                >
                  <span class="shop-card-text">{item.card.text}</span>
                  {#if item.card.persistent}
                    <span class="shop-card-persistent">{item.card.persistent.description}</span>
                  {:else}
                    <span class="shop-card-category">{item.card.category === 'modifier' ? '修' : item.card.category === 'subject' ? '主' : item.card.category === 'predicate' ? '述' : '対'}</span>
                  {/if}
                  <span class="shop-card-price">{sold ? '売切' : item.price + ' G'}</span>
                </button>
              {/each}
            </div>
          </div>
        </div>
      {/snippet}

      {#snippet rightContent()}
        <div class="shop-content">
          <!-- 手札売却 -->
          <div class="shop-section">
            <div class="section-label" style="color: var(--ink-medium)">手札を売る（{currentShopNode.sellPricePerCard} G/枚）</div>
            <div class="shop-items">
              {#each gameState.hand as card, i}
                <button class="shop-card sellable" onclick={() => handleSellCard(i)}>
                  <span class="shop-card-text">{card.text}</span>
                  <span class="shop-card-price">+{currentShopNode.sellPricePerCard} G</span>
                </button>
              {/each}
            </div>
          </div>

          <!-- アイテム売却 -->
          {#if gameState.items.length > 0}
            <div class="shop-section">
              <div class="section-label" style="color: var(--gold-accent)">アイテムを売る</div>
              <div class="shop-items">
                {#each gameState.items as item, i}
                  <button class="shop-card sellable item-card" onclick={() => handleSellItem(i)}>
                    <span class="shop-card-text">{item.name}</span>
                    <span class="shop-card-desc">{item.description}</span>
                    <span class="shop-card-price">+{item.sellPrice} G</span>
                  </button>
                {/each}
              </div>
            </div>
          {/if}

          <div class="shop-footer">
            <div class="gold-display-large">{gameState.gold} G</div>
            <div class="hand-count-shop">手札: {gameState.hand.length} / {gameState.handLimit}</div>
          </div>

          <button class="next-btn" onclick={handleLeaveShop}>店を出る</button>
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
                      isDragging={draggingCardIndex !== null}
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
                      isDragging={draggingCardIndex !== null}
                      onDragEnter={handleSlotDragEnter}
                      onDragLeave={handleSlotDragLeave}
                    />
                  {/if}
                {/if}
              {/each}
            </div>
            <!-- プレイヤーHP・ゴールド -->
            <div class="player-status-row">
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
          {#if lastRewardCards.length > 0 || lastRewardItems.length > 0}
            <div class="reward-list">
              {#each lastRewardCards as card}
                <span class="reward-tag reward-card">+ 語「{card.text}」</span>
              {/each}
              {#each lastRewardItems as item}
                <span class="reward-tag reward-item">{item.name}</span>
              {/each}
            </div>
          {/if}
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
  .game-viewport.transitioning {
    animation: pageTurn 0.6s ease-in-out;
  }
  @keyframes pageTurn {
    0% { opacity: 1; transform: perspective(1200px) rotateY(0deg); }
    40% { opacity: 0.6; transform: perspective(1200px) rotateY(-8deg); }
    60% { opacity: 0.3; transform: perspective(1200px) rotateY(4deg); }
    100% { opacity: 1; transform: perspective(1200px) rotateY(0deg); }
  }

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
  .player-status-row { display: flex; align-items: center; gap: 12px; margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(59, 138, 94, 0.15); }

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

  .reward-list { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin: 6px 0; }
  .reward-tag {
    font-family: var(--font-story); font-size: 0.8rem; padding: 3px 10px;
    border-radius: 4px; animation: rewardAppear 0.5s ease-out;
  }
  .reward-card { color: var(--slot-subject); background: rgba(43, 94, 167, 0.1); border: 1px solid rgba(43, 94, 167, 0.3); }
  .reward-item { color: var(--gold-accent); background: rgba(196, 162, 101, 0.1); border: 1px solid rgba(196, 162, 101, 0.3); }
  @keyframes rewardAppear { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  .right-placeholder { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--ink-light); font-size: 0.9rem; font-style: italic; gap: 4px; }
  .next-btn { font-family: var(--font-story); font-size: 0.9rem; padding: 8px 24px; background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim); border-radius: 4px; cursor: pointer; align-self: center; margin-top: 8px; transition: all 0.3s; }
  .next-btn:hover { background: rgba(196,162,101,0.1); box-shadow: 0 0 16px var(--magic-glow); }

  .ending-page { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
  .ending-main { font-family: var(--font-story); font-size: 1.1rem; color: var(--ink-dark); line-height: 2; }
  .ending-sub { font-family: var(--font-story); font-size: 0.95rem; color: var(--ink-medium); line-height: 2; text-align: center; }
  .ending-fin { font-family: var(--font-story); font-size: 1.3rem; color: var(--gold-accent); letter-spacing: 0.3em; }
  .restart-btn { font-family: var(--font-story); font-size: 0.85rem; padding: 8px 20px; margin-top: 12px; background: none; color: var(--gold-accent); border: 1px solid var(--gold-dim); border-radius: 4px; cursor: pointer; transition: all 0.3s; }
  .restart-btn:hover { background: rgba(196,162,101,0.1); }

  /* --- マッププレビュー --- */
  .preview-card {
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    padding: 16px; border: 1px solid rgba(196,162,101,0.3); border-radius: 6px;
    background: rgba(196,162,101,0.05);
  }
  .preview-type { font-size: 0.7rem; color: var(--gold-accent); letter-spacing: 0.15em; text-transform: uppercase; }
  .preview-title { font-size: 1.1rem; color: var(--ink-dark); font-family: var(--font-story); }
  .preview-slots { font-size: 0.9rem; color: var(--ink-medium); letter-spacing: 0.3em; }
  .preview-ap { font-size: 0.75rem; color: var(--ink-light); }
  .map-status { display: flex; gap: 16px; color: var(--ink-light); font-size: 0.8rem; font-family: var(--font-story); margin-top: 16px; }

  /* --- 宝箱 --- */
  .treasure-content { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
  .treasure-flavor { font-family: var(--font-story); font-size: 0.95rem; color: var(--ink-medium); line-height: 1.8; text-align: center; font-style: italic; }
  .treasure-cards { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
  .treasure-card {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 12px 20px; border: 2px solid var(--gold-accent); border-radius: 6px;
    background: rgba(196,162,101,0.08); cursor: pointer;
    font-family: var(--font-story); transition: all 0.2s;
  }
  .treasure-card:hover:not(:disabled) { transform: scale(1.05); box-shadow: 0 0 16px var(--magic-glow); background: rgba(196,162,101,0.15); }
  .treasure-card:disabled { opacity: 0.4; cursor: not-allowed; }
  .treasure-card-text { font-size: 1.1rem; color: var(--ink-dark); }
  .treasure-card-cat { font-size: 0.7rem; color: var(--gold-dim); }
  .treasure-done { color: var(--ink-light); font-style: italic; font-size: 0.9rem; }

  /* --- ショップ --- */
  .shop-content { flex: 1; display: flex; flex-direction: column; gap: 12px; }
  .shop-section { display: flex; flex-direction: column; gap: 6px; }
  .shop-items { display: flex; flex-wrap: wrap; gap: 6px; }
  .shop-card {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
    padding: 8px 12px; border: 1px solid var(--gold-dim); border-radius: 4px;
    background: rgba(255,255,255,0.05); cursor: pointer;
    font-family: var(--font-story); transition: all 0.2s;
  }
  .shop-card:hover:not(:disabled) { background: rgba(196,162,101,0.12); box-shadow: 0 0 8px var(--magic-glow); }
  .shop-card:disabled { opacity: 0.4; cursor: not-allowed; }
  .shop-card.sold { border-style: dashed; }
  .shop-card.sellable { border-color: var(--ink-light); }
  .shop-card.sellable:hover { border-color: #a73b3b; background: rgba(167,59,59,0.08); }
  .shop-card.item-card { border-color: var(--gold-accent); }
  .shop-card-text { font-size: 0.95rem; color: var(--ink-dark); }
  .shop-card-category { font-size: 0.65rem; color: var(--ink-light); }
  .shop-card-persistent { font-size: 0.6rem; color: #7b3ba7; background: rgba(123,59,167,0.1); padding: 1px 6px; border-radius: 3px; }
  .shop-card-desc { font-size: 0.65rem; color: var(--ink-light); font-style: italic; }
  .shop-card-price { font-size: 0.75rem; color: var(--gold-accent); font-weight: 700; }
  .shop-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(0,0,0,0.08); }
  .gold-display-large { color: var(--gold-accent); font-size: 1.1rem; font-family: var(--font-story); }
  .hand-count-shop { color: var(--ink-light); font-size: 0.8rem; font-family: var(--font-story); }

  .hand-area { width: 100%; max-width: 960px; padding: 12px 24px; background: linear-gradient(180deg, rgba(61,43,31,0.9) 0%, rgba(26,20,16,0.95) 100%); border-radius: 8px; border: 1px solid rgba(196,162,101,0.2); box-shadow: inset 0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4); }
  .hand-cards { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; min-height: 56px; align-items: center; }
  .empty-hand { color: var(--ink-light); font-family: var(--font-story); font-size: 0.85rem; font-style: italic; }
</style>
