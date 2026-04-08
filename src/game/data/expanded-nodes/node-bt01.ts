import type { BattleNodeDef } from '../../engine/types';
import { bt01PlayerOutcomes, bt01Enemy1Outcomes, bt01Enemy2Outcomes } from './generated/node-bt01-outcomes';

// 敵文③ outcomes: 森番が [subj*]を 投げつけている — 主語可変
const bt01Enemy3Outcomes = [
  // 脅威高い主語 → 高ダメージ（投げつけること自体が危険）
  { id: 'bt01_e3_dragon', conditions: { s1: 'subj_dragon' }, resultText: '森番が竜を掴み上げ、投げつけてきた。竜の体が炎を撒き散らしながら飛んでくる。', playerDamage: 4, enemyDamage: 0 },
  { id: 'bt01_e3_flame', conditions: { s1: 'subj_flame' }, resultText: '森番が炎の塊を投げつけてきた。空気が焦げ、髪が縮れる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt01_e3_ice', conditions: { s1: 'subj_ice' }, resultText: '森番が氷の塊を投げつけてきた。砕けた破片が頬を切る。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt01_e3_knight', conditions: { s1: 'subj_knight' }, resultText: '森番が騎士の鎧ごと投げつけてきた。金属の塊が地面に轟音を立てる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt01_e3_king', conditions: { s1: 'subj_king' }, resultText: '森番が王を投げつけてきた。玉座ごと飛んできて、重い。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt01_e3_ghost', conditions: { s1: 'subj_ghost' }, resultText: '森番が亡霊を投げつけてきた。すり抜けていった。冷気だけが残る。', playerDamage: 1, enemyDamage: 0 },
  { id: 'bt01_e3_snake', conditions: { s1: 'subj_snake' }, resultText: '森番が蛇を投げつけてきた。巻きつかれ、毒牙が腕に刺さる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'bt01_e3_witch', conditions: { s1: 'subj_witch' }, resultText: '森番が魔女を投げた——いや、自分自身が投げられた感覚。混乱する。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt01_e3_mirror', conditions: { s1: 'subj_mirror' }, resultText: '森番が鏡を投げつけてきた。砕けた破片が光を乱反射して目を灼く。', playerDamage: 2, enemyDamage: 0 },
  { id: 'bt01_e3_doll', conditions: { s1: 'subj_doll' }, resultText: '森番が人形を投げつけてきた。当たっても痛くないが、人形の目がこちらを見ている。', playerDamage: 1, enemyDamage: 0 },
  // 脅威低い主語 → 低～0ダメージ
  { id: 'bt01_e3_kitten', conditions: { s1: 'subj_kitten' }, resultText: '森番が子猫を投げつけてきた。子猫は宙で身をひるがえし、すたりと着地した。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt01_e3_butterfly', conditions: { s1: 'subj_butterfly' }, resultText: '森番が蝶を投げた。ひらひらと舞い上がり、どこかへ飛んでいった。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt01_e3_wind', conditions: { s1: 'subj_wind' }, resultText: '森番が風を掴もうとする。手の中をすり抜けて、何も飛んでこない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt01_e3_shadow', conditions: { s1: 'subj_shadow' }, resultText: '森番が影を投げつけてきた。黒い塊が体を通過する。冷たいが、傷はない。', playerDamage: 1, enemyDamage: 0 },
  { id: 'bt01_e3_song', conditions: { s1: 'subj_song' }, resultText: '森番が歌を投げた——叫び声が音の塊となって飛んでくる。耳が痛い。', playerDamage: 1, enemyDamage: 0 },
  { id: 'bt01_e3_silence', conditions: { s1: 'subj_silence' }, resultText: '森番が沈黙を投げた。あたりから音が消え、一瞬の空白。しかし傷はない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'bt01_e3_rain', conditions: { s1: 'subj_rain' }, resultText: '森番が雨を投げた。水飛沫が顔にかかる。冷たいだけだ。', playerDamage: 0, enemyDamage: 0 },
];

export const nodeBT01: BattleNodeDef = {
  id: 'node_bt01',
  title: '森番',
  nodeType: 'battle',
  enemyName: '森番',
  enemyHp: 15,
  actionPoints: 4,
  enemyActions: [
    // 敵文① (ターン1,5,9...): [mod*]森番が 魔女を 追いかけてくる — mod可変、弱体化:低
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '森番' },
        { type: 'fixed', text: 'が' },
        { type: 'fixed', text: '魔女を' },
        { type: 'fixed', text: '追いかけてくる' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
      ],
      outcomes: bt01Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '森番が猛然と迫ってくる。巨木のような腕が振り下ろされた。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,6,10...): 森番が [mod*]根を 振り下ろしている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'fixed', text: '森番が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '根を' },
        { type: 'fixed', text: '振り下ろしている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_hard', text: '堅い', category: 'modifier', tags: ['hard', 'durable', 'defend'] } },
      ],
      outcomes: bt01Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '堅い根が振り下ろされ、地面が割れた。',
        playerDamage: 2,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,7,11...): 森番が [subj*]を 投げつけている — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '森番が' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '投げつけている' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] } },
      ],
      outcomes: bt01Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '森番が何かを投げつけてきた。重い衝撃が走る。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,8,12...): 森番の怒りが 森を 震わせている — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '森番の怒りが' },
        { type: 'fixed', text: '森を' },
        { type: 'fixed', text: '震わせている' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '森番が咆哮した。大地が揺れ、木々が軋む。逃げ場がない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
  ],
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '森番を' },
      { type: 'fixed', text: '打つ' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_small', text: '小さな', category: 'modifier', tags: ['size:small', 'weaken'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_kitten', text: '子猫', category: 'subject', tags: ['animal', 'small', 'harmless'] } },
    ],
    outcomes: bt01PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが森番に届かない。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 8,
};
