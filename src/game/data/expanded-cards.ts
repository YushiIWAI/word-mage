import type { WordCard } from '../engine/types';

// === 修飾語 (modifier) 11枚 ===
export const expandedModifiers: WordCard[] = [
  { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] },
  { id: 'mod_gentle', text: '優しい', category: 'modifier', tags: ['gentle', 'weaken', 'positive'] },
  { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] },
  { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] },
  { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] },
  { id: 'mod_broken', text: '壊れた', category: 'modifier', tags: ['broken', 'weaken', 'size:small'] },
  { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] },
  { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] },
  { id: 'mod_clear', text: '透き通った', category: 'modifier', tags: ['clear', 'transparent', 'fragile'] },
  { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['cursed', 'dark', 'threat:high'] },
  { id: 'mod_sleepy', text: '眠い', category: 'modifier', tags: ['sleepy', 'slow', 'weaken'] },
];

// === 主語 (subject) 17枚 ===
export const expandedSubjects: WordCard[] = [
  { id: 'subj_kitten', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] },
  { id: 'subj_snake', text: '蛇', category: 'subject', tags: ['animal', 'poison', 'cunning'] },
  { id: 'subj_dragon', text: '竜', category: 'subject', tags: ['dragon', 'threat:high', 'fire'] },
  { id: 'subj_butterfly', text: '蝶', category: 'subject', tags: ['insect', 'fragile', 'beautiful'] },
  { id: 'subj_wind', text: '風', category: 'subject', tags: ['wind', 'nature', 'harmless'] },
  { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] },
  { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] },
  { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] },
  { id: 'subj_song', text: '歌', category: 'subject', tags: ['song', 'sound', 'intangible'] },
  { id: 'subj_silence', text: '沈黙', category: 'subject', tags: ['silence', 'void', 'intangible'] },
  { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] },
  { id: 'subj_witch', text: '魔女', category: 'subject', tags: ['human', 'magic', 'cursed'] },
  { id: 'subj_king', text: '王', category: 'subject', tags: ['human', 'authority', 'command'] },
  { id: 'subj_ghost', text: '亡霊', category: 'subject', tags: ['spirit', 'dead', 'intangible'] },
  { id: 'subj_mirror', text: '鏡', category: 'subject', tags: ['object', 'reflect', 'fragile'] },
  { id: 'subj_doll', text: '人形', category: 'subject', tags: ['object', 'uncanny', 'puppet'] },
  { id: 'subj_rain', text: '雨', category: 'subject', tags: ['water', 'nature', 'weather'] },
];

// === 述語 (predicate) 17枚 ===
export const expandedPredicates: WordCard[] = [
  { id: 'pred_block', text: '塞いでいる', category: 'predicate', tags: ['block', 'obstacle'] },
  { id: 'pred_guard', text: '守っている', category: 'predicate', tags: ['defend', 'guard', 'safe'] },
  { id: 'pred_chase', text: '追いかけてくる', category: 'predicate', tags: ['chase', 'pursuit', 'threat'] },
  { id: 'pred_wait', text: '待っている', category: 'predicate', tags: ['wait', 'ambush', 'patience'] },
  { id: 'pred_gaze', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] },
  { id: 'pred_whisper', text: '囁いている', category: 'predicate', tags: ['whisper', 'secret', 'lure'] },
  { id: 'pred_hide', text: '隠している', category: 'predicate', tags: ['hide', 'secret', 'treasure'] },
  { id: 'pred_sleep', text: '眠っている', category: 'predicate', tags: ['sleep', 'dormant', 'safe'] },
  { id: 'pred_sing', text: '歌っている', category: 'predicate', tags: ['sing', 'sound', 'magic'] },
  { id: 'pred_entangle', text: '絡みついている', category: 'predicate', tags: ['entangle', 'bind', 'restrict'] },
  { id: 'pred_flee', text: '逃げていく', category: 'predicate', tags: ['flee', 'retreat', 'safe'] },
  { id: 'pred_crush', text: '砕く', category: 'predicate', tags: ['crush', 'destroy', 'force'] },
  { id: 'pred_shine', text: '輝く', category: 'predicate', tags: ['shine', 'light', 'magic'] },
  { id: 'pred_rain_down', text: '降り注いでいる', category: 'predicate', tags: ['rain', 'pour', 'area'] },
  { id: 'pred_dance', text: '踊っている', category: 'predicate', tags: ['dance', 'move', 'chaos'] },
  { id: 'pred_melt', text: '溶けている', category: 'predicate', tags: ['melt', 'dissolve', 'change'] },
  { id: 'pred_laugh', text: '笑っている', category: 'predicate', tags: ['laugh', 'joy', 'uncanny'] },
];

// === 副詞 (adverb) 5枚 ===
export const expandedAdverbs: WordCard[] = [
  { id: 'adv_quiet', text: '静かに', category: 'adverb', tags: ['calm', 'weaken', 'peaceful'] },
  { id: 'adv_fierce', text: '激しく', category: 'adverb', tags: ['intense', 'strong', 'chaos'] },
  { id: 'adv_slow', text: 'ゆっくり', category: 'adverb', tags: ['slow', 'delay', 'patience'] },
  { id: 'adv_weak', text: '力なく', category: 'adverb', tags: ['weak', 'fade', 'decline'] },
  { id: 'adv_sudden', text: '突然', category: 'adverb', tags: ['sudden', 'surprise', 'instant'] },
];

// 全拡張カード配列
export const allExpandedCards: WordCard[] = [
  ...expandedModifiers,
  ...expandedSubjects,
  ...expandedPredicates,
  ...expandedAdverbs,
];

// 全カードの便利マップ
export const expandedCardMap: Record<string, WordCard> = Object.fromEntries(
  allExpandedCards.map(c => [c.id, c])
);
