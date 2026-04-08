import type { BattleNodeDef } from '../../engine/types';
import { boss02PlayerOutcomes, boss02Enemy1Outcomes, boss02Enemy2Outcomes, boss02Enemy3Outcomes } from './generated/node-boss02-outcomes';

// 敵文⑤ outcomes: 王の[subj*]が 魔女の声を 奪っている — subj可変
const boss02Enemy5Outcomes = [
  { id: 'boss02_e5_shadow', conditions: { s1: 'subj_shadow' }, resultText: '王の影が魔女の声を奪う。叫ぼうとしても、口から音が出ない。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_silence', conditions: { s1: 'subj_silence' }, resultText: '王の沈黙が魔女の声を奪う。喉が締まる。言葉を紡ぐ力が消えていく。', playerDamage: 4, enemyDamage: 0 },
  { id: 'boss02_e5_knight', conditions: { s1: 'subj_knight' }, resultText: '王の騎士が魔女の声を奪う。鎧の手が口を塞ぐ。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_snake', conditions: { s1: 'subj_snake' }, resultText: '王の蛇が喉に巻きつき、声を奪う。毒が声帯を麻痺させる。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_witch', conditions: { s1: 'subj_witch' }, resultText: '王の魔女が呪文で声を奪う。同じ魔女なのに、こちらの呪文を上書きする。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_doll', conditions: { s1: 'subj_doll' }, resultText: '王の人形が代わりに喋り出す。自分の声が人形の口から聞こえる。不気味だが、奪われはしなかった。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss02_e5_mirror', conditions: { s1: 'subj_mirror' }, resultText: '王の鏡が声を吸い込む。鏡の中の自分が口を動かしている。こちらは無音。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss02_e5_ghost', conditions: { s1: 'subj_ghost' }, resultText: '王の亡霊が声を吸い取る。死者の口から自分の声が響く。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss02_e5_song', conditions: { s1: 'subj_song' }, resultText: '王の歌が魔女の声を上書きする。自分の意思と違う歌が口から出る。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss02_e5_king', conditions: { s1: 'subj_king' }, resultText: '王自身が声を奪う。「お前の声は不要だ。」絶対の命令。逆らえない。', playerDamage: 4, enemyDamage: 0 },
  { id: 'boss02_e5_dragon', conditions: { s1: 'subj_dragon' }, resultText: '王の竜が咆哮で声をかき消す。耳鳴りが残り、自分の声が聞こえない。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_flame', conditions: { s1: 'subj_flame' }, resultText: '王の炎が喉を焼く。声を出すと痛い。黙るしかない。', playerDamage: 3, enemyDamage: 0 },
  { id: 'boss02_e5_ice', conditions: { s1: 'subj_ice' }, resultText: '王の氷が喉を凍らせる。声が凍って、白い欠片となって口から落ちた。', playerDamage: 2, enemyDamage: 0 },
  { id: 'boss02_e5_wind', conditions: { s1: 'subj_wind' }, resultText: '王の風が声をさらう。叫んでも風に混ざって消えてしまう。', playerDamage: 1, enemyDamage: 0 },
  { id: 'boss02_e5_kitten', conditions: { s1: 'subj_kitten' }, resultText: '王の子猫が鳴く。その声に魔女の呪文がかき消される——わけがない。ただの子猫だ。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss02_e5_butterfly', conditions: { s1: 'subj_butterfly' }, resultText: '王の蝶が口元を舞う。邪魔だが、声は奪えない。', playerDamage: 0, enemyDamage: 0 },
  { id: 'boss02_e5_rain', conditions: { s1: 'subj_rain' }, resultText: '王の雨が降り注ぐ。口に入った水で咳き込む。声が途切れた。', playerDamage: 1, enemyDamage: 0 },
];

export const nodeBOSS02: BattleNodeDef = {
  id: 'node_boss02',
  title: '黒き王',
  nodeType: 'boss',
  enemyName: '黒き王',
  enemyHp: 25,
  actionPoints: 5,
  enemyActions: [
    // 敵文① (ターン1,6,11...): [mod*]王が 魔女に 命じている — mod可変、弱体化:低
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '王が 魔女に 命じている' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_cursed', text: '呪われた', category: 'modifier', tags: ['curse', 'dark', 'threat:high'] } },
      ],
      outcomes: boss02Enemy1Outcomes as any,
      defaultOutcome: {
        resultText: '呪われた王が魔女に命じている。「跪け」黒い声が骨まで響く。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文② (ターン2,7,12...): 王の[subj*]が 魔女を 追いかけてくる — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '王の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女を 追いかけてくる' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
      ],
      outcomes: boss02Enemy2Outcomes as any,
      defaultOutcome: {
        resultText: '王の影が魔女を追いかけてくる。逃げ場がない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
    // 敵文③ (ターン3,8,13...): [mod*]沈黙が 魔女を [pred*] — 2スロット可変、弱体化:高
    {
      sentence: [
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '沈黙が 魔女を' },
        { type: 'slot', slotId: 's2' },
      ],
      slots: [
        { id: 's1', category: 'modifier', word: { id: 'mod_frozen', text: '凍てついた', category: 'modifier', tags: ['ice', 'cold', 'frozen'] } },
        { id: 's2', category: 'predicate', word: { id: 'pred_gaze', text: '見つめている', category: 'predicate', tags: ['gaze', 'watch', 'observe'] } },
      ],
      outcomes: boss02Enemy3Outcomes as any,
      defaultOutcome: {
        resultText: '文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文④ (ターン4,9,14...): 王の言葉が 世界を 凍らせている — 固定攻撃、弱体化:不可
    {
      sentence: [
        { type: 'fixed', text: '王の言葉が' },
        { type: 'fixed', text: '世界を' },
        { type: 'fixed', text: '凍らせている' },
      ],
      slots: [],
      outcomes: [],
      defaultOutcome: {
        resultText: '王が一言呟いた。それだけで空気が凍り、地面が白くなる。言葉の力が世界を縛る。',
        playerDamage: 4,
        enemyDamage: 0,
      },
    },
    // 敵文⑤ (ターン5,10,15...): 王の[subj*]が 魔女の声を 奪っている — subj可変、弱体化:中
    {
      sentence: [
        { type: 'fixed', text: '王の' },
        { type: 'slot', slotId: 's1' },
        { type: 'fixed', text: '魔女の声を' },
        { type: 'fixed', text: '奪っている' },
      ],
      slots: [
        { id: 's1', category: 'subject', word: { id: 'subj_shadow', text: '影', category: 'subject', tags: ['shadow', 'dark', 'intangible'] } },
      ],
      outcomes: boss02Enemy5Outcomes as any,
      defaultOutcome: {
        resultText: '王の影が魔女の声を奪う。叫ぼうとしても音が出ない。',
        playerDamage: 3,
        enemyDamage: 0,
      },
    },
  ],
  // プレイヤー行動文: [mod*][subj*]が 王に 立ち向かう
  playerAction: {
    sentence: [
      { type: 'slot', slotId: 's1' },
      { type: 'slot', slotId: 's2' },
      { type: 'fixed', text: '王に 立ち向かう' },
    ],
    slots: [
      { id: 's1', category: 'modifier', word: { id: 'mod_mighty', text: '屈強な', category: 'modifier', tags: ['mighty', 'strong', 'threat:high'] } },
      { id: 's2', category: 'subject', word: { id: 'subj_knight', text: '騎士', category: 'subject', tags: ['human', 'combat', 'defend'] } },
    ],
    outcomes: boss02PlayerOutcomes as any,
    defaultOutcome: {
      resultText: '書き換えた言葉が王の前で力を失う。玉座の威圧に押し戻された。',
      playerDamage: 0,
      enemyDamage: 0,
    },
  },
  victoryQuill: 20,
};
