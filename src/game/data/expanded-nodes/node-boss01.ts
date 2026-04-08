import type { BattleNodeDef } from '../../engine/types';
import { boss01PlayerOutcomes, boss01Enemy1Outcomes, boss01Enemy2Outcomes, boss01Enemy3Outcomes } from './generated/node-boss01-outcomes';

// 敵文⑤ outcomes: 古竜の[subj*]が 空から 降りてくる — subj可変
const boss01Enemy5Outcomes = [
  { id: 'boss01_e5_flame', conditions: { s1: 'subj_flame' }, resultText: '古竜の炎が空から降りてくる。火の雨。焼けた石の匂いが充満する。', playerDamage: 4, enemyDamage: 0 },
  { id: 'boss01_e5_ice', conditions: { s1: 'subj_ice' }, resultText: '古竜の氷が空から降りてくる。氷柱の槍が次々と地面に突き刺さる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss01_e5_shadow', conditions: { s1: 'subj_shadow' }, resultText: '古竜の影が空から落ちてくる。巨大な翼の影が世界を覆い、視界が消える。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss01_e5_dragon', conditions: { s1: 'subj_dragon' }, resultText: '古竜の子竜が空から降りてくる。小さくても竜は竜。爪と牙が鋭い。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss01_e5_wind', conditions: { s1: 'subj_wind' }, resultText: '古竜の風が空から降りてくる。翼の起こす突風が体を吹き飛ばす。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss01_e5_rain', conditions: { s1: 'subj_rain' }, resultText: '古竜の雨が空から降る。ぬるい。竜の唾液だ。不快だが痛くはない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss01_e5_song', conditions: { s1: 'subj_song' }, resultText: '古竜の歌が空から降りてくる。低い唸りが骨に響く。頭が割れそうだ。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss01_e5_silence', conditions: { s1: 'subj_silence' }, resultText: '古竜の沈黙が空から降りてくる。すべての音が消え、呼吸すら聞こえない恐怖。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss01_e5_knight', conditions: { s1: 'subj_knight' }, resultText: '古竜に掴まれた騎士が空から落とされる。こちら目がけて。鎧の塊が衝突する。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss01_e5_kitten', conditions: { s1: 'subj_kitten' }, resultText: '古竜の背中から子猫が飛び降りてくる。ふわりと着地。何の脅威もない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss01_e5_butterfly', conditions: { s1: 'subj_butterfly' }, resultText: '古竜の鱗の隙間から蝶が飛び出す。ひらひらと舞い降りる。美しいだけだ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss01_e5_snake', conditions: { s1: 'subj_snake' }, resultText: '古竜の口から蛇が落ちてくる。地面を這いまわり、足首に噛みつく。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss01_e5_witch', conditions: { s1: 'subj_witch' }, resultText: '古竜の背に乗った魔女が呪文を降り注がせる。黒い光が体を貫く。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss01_e5_king', conditions: { s1: 'subj_king' }, resultText: '古竜の王が空から降りてくる。竜の王。圧倒的な威圧。膝が折れそうだ。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss01_e5_ghost', conditions: { s1: 'subj_ghost' }, resultText: '古竜の亡霊が空から滲み出る。かつての古竜の残像。冷気が骨を刺す。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss01_e5_mirror', conditions: { s1: 'subj_mirror' }, resultText: '古竜の鏡が空から落ちてくる。割れた破片に自分の恐怖した顔が映る。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss01_e5_doll', conditions: { s1: 'subj_doll' }, resultText: '古竜の巣から人形が落ちてくる。何かの獲物の持ち物だったのか。当たっても痛くない。', playerDamage: 0, enemyDamage: 0 },
];

export const nodeBOSS01: BattleNodeDef = {
  id: 'node_boss01',
  title: '古竜',
  nodeType: 'boss',
  enemyName: '古竜',
  enemyHp: 30,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,6,11...): [mod*]古竜が 大地を 焼いている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '古竜が 大地を 焼いている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_fire', text: '燃え盛る', category: 'modifier', tags: ['fire', 'intense', 'threat:high'] } },
      ],
      outcomes: boss01Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '燃え盛る古竜が大地を焼き尽くす。炎の壁が迫る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,7,12...): 古竜の[subj*]が 魔女に 降り注いでいる — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '古竜の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女に 降り注いでいる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
      ],
      outcomes: boss01Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '古竜の炎が魔女に降り注ぐ。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,8,13...): [mod*][subj*]が 古竜に 砕かれている — 2スロット可変、弱体化:高
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'slot', slotId: 's2' },
        { type: 'fixed', text: '古竜に 砕かれている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
        { id: 's2', category: 'subject', word: { id: 'subj_ice', text: '氷', category: 'subject', tags: ['ice', 'nature', 'cold'] } },
      ],
      outcomes: boss01Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '古竜が全てを砕く。世界が軋む。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,9,14...): 古竜が 翼を広げて 咆哮している — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '古竜が' },
        { type: 'fixed', text: '翼を広げて' },
        { type: 'fixed', text: '咆哮している' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '古竜が翼を広げて咆哮する。空気が震え、大地が裂ける。音だけで体が吹き飛ばされそうだ。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文⑤ (ターン5,10,15...): 古竜の[subj*]が 空から 降りてくる — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '古竜の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '空から 降りてくる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_flame', text: '炎', category: 'subject', tags: ['fire', 'nature', 'destructive'] } },
      ],
      outcomes: boss01Enemy5Outcomes as any,
      defaultOutcome: {
        resultText: '古竜の炎が空から降りてくる。逃げ場がない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 古竜を 砕く
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '古竜を 砕く' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_sharp', text: '鋭い', category: 'modifier', tags: ['sharp', 'weapon', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
    ],
    outcomes: boss01PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えが古竜の鱗に弾かれた。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 20,
};
