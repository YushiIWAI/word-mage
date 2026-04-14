// Auto-generated from node-p20-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP20Outcomes: Outcome[] = [
  {
    id: 'p20_kitten',
    conditions: { s2: 'subj_kitten' },
    resultText: '子猫が城壁を守っている。小さな体で石壁にしがみつき、通る者を威嚇している。鳴き声が可愛らしすぎて誰も止まらない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p20_snake',
    conditions: { s2: 'subj_snake' },
    resultText: '蛇が城壁を守っている。石の隙間という隙間に蛇が棲みついている。手をかけた瞬間、指を噛まれた。腫れた手で壁沿いに別の入口を探した。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p20_dragon',
    conditions: { s2: 'subj_dragon' },
    resultText: '竜が城壁を守っている。翼を広げ、城壁そのものが竜の体に見える。吐息の熱波だけで全身の皮膚が赤く焼けた。引き返すほかない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p20_butterfly',
    conditions: { s2: 'subj_butterfly' },
    resultText: '蝶が城壁を守っている。蝶の群れが壁面を覆い、近づくと一斉に舞い上がって視界を塞ぐ。鱗粉が目に沁みる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p20_wind',
    conditions: { s2: 'subj_wind' },
    resultText: '風が城壁を守っている。壁に沿って烈風が吹き、近づく者を押し返す。石礫が混じった突風に肌を削られながら、壁際を這って通り抜けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p20_flame',
    conditions: { s2: 'subj_flame' },
    resultText: '炎が城壁を守っている。城壁の上に火の帳が揺れている。石が赤く焼けて、近づくだけで肌がひりつく。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p20_ice',
    conditions: { s2: 'subj_ice' },
    resultText: '氷が城壁を守っている。壁面が分厚い氷に覆われ、手がかりを掴めばすぐ凍傷する。迂回路を探すしかない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p20_shadow',
    conditions: { s2: 'subj_shadow' },
    resultText: '影が城壁を守っている。壁に張りついた巨大な影が、通る者の影を飲み込もうとする。自分の影が引っ張られる。走って抜けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p20_song',
    conditions: { s2: 'subj_song' },
    resultText: '歌が城壁を守っている。壁から旋律が響き、聴く者の足を止める。耳を塞いで歩いたが、骨に振動が伝わる。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p20_song', name: '城壁の旋律', description: '壁に刻まれた楽譜の拓本。読むと頭の中で鳴る', sellPrice: 10 }]
  },
  {
    id: 'p20_silence',
    conditions: { s2: 'subj_silence' },
    resultText: '沈黙が城壁を守っている。音が消える。足音も息遣いも吸い込まれる。圧倒的な無音の中、方向感覚が狂い始めた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p20_knight',
    conditions: { s2: 'subj_knight' },
    resultText: '騎士が城壁を守っている。正門に立ちはだかり、通行を許さない。強行突破を試みた瞬間、盾で弾き飛ばされた。石畳に叩きつけられ、息が止まる。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p20_witch',
    conditions: { s2: 'subj_witch' },
    resultText: '魔女が城壁を守っている。壁の上に座り、下を覗き込んでいる。近づくと呪文が一言。足が一歩だけ動かなくなった。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_p20_witch', name: '魔女の城壁札', description: '壁に貼られていた護符。まだ微かに力がある', sellPrice: 8 }]
  },
  {
    id: 'p20_king',
    conditions: { s2: 'subj_king' },
    resultText: '王が城壁を守っている。王自ら城壁に立つとは、よほどの事態だ。王の一喝が空気を震わせ、膝が折れた。立ち上がれない。這って退いた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p20_ghost',
    conditions: { s2: 'subj_ghost' },
    resultText: '亡霊が城壁を守っている。かつてここで死んだ兵士だろうか。壁を通り抜けようとすると、冷たい手が肩を掴み、その箇所から体温が一気に失われた。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p20_ghost', name: '番兵の記章', description: '亡霊が落とした錆びた記章。名前が読めない', sellPrice: 7 }]
  },
  {
    id: 'p20_mirror',
    conditions: { s2: 'subj_mirror' },
    resultText: '鏡が城壁を守っている。壁面が鏡になっている。自分の姿が映り、向こう側が見えない。入口がどこかわからない。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p20_doll',
    conditions: { s2: 'subj_doll' },
    resultText: '人形が城壁を守っている。等身大の人形が城門の前に並んでいる。目が合った瞬間、足が竦んで動けなくなった。呪縛が解けたとき、半日が過ぎていた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p20_rain_subj',
    conditions: { s2: 'subj_rain' },
    resultText: '雨が城壁を守っている。城壁の周囲だけ豪雨が降っている。一歩踏み込んだだけで全身がずぶ濡れになった。視界がきかない。',
    damage: 2,
    quill: 4
  },
];
