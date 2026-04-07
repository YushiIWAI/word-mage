// Auto-generated from node-p14-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP14Outcomes: Outcome[] = [
  {
    id: 'p14_kitten',
    conditions: { s2: 'subj_kitten' },
    resultText: '子猫が吊り橋を揺らしている。板の隙間を覗き込んでは、体を揺する。遊んでいるだけだ。猫をどかして渡った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p14_snake',
    conditions: { s2: 'subj_snake' },
    resultText: '蛇が吊り橋を揺らしている。ロープに巻きついた蛇が身をくねらせるたびに、橋が軋む。踏まないよう注意しながら渡る。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p14_dragon',
    conditions: { s2: 'subj_dragon' },
    resultText: '竜が吊り橋を揺らしている。巨体が橋の上を歩くだけで板が割れる。渡れるわけがない。遥か下の谷底を見ながら引き返した。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p14_butterfly',
    conditions: { s2: 'subj_butterfly' },
    resultText: '蝶が吊り橋を揺らしている。羽ばたきが橋に微かな振動を伝えている——気のせいかもしれない。蝶は気にせず飛んでいった。渡れた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p14_wind',
    conditions: { s2: 'subj_wind' },
    resultText: '風が吊り橋を揺らしている。自然な揺れだ。風が止む瞬間を見計らい、一気に駆け抜けた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p14_flame',
    conditions: { s2: 'subj_flame' },
    resultText: '炎が吊り橋を揺らしている。ロープの一本に火がついている。揺れは燃え進む振動だ。残ったロープを頼りに急いで渡る。足元が熱い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p14_ice',
    conditions: { s2: 'subj_ice' },
    resultText: '氷が吊り橋を揺らしている。板に張った氷が重みで軋み、橋全体が震えている。足を滑らせないよう四つん這いで渡った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p14_shadow',
    conditions: { s2: 'subj_shadow' },
    resultText: '影が吊り橋を揺らしている。橋の下に何かの影が揺れている。見下ろしても本体はない。影だけが橋板を叩いている。不気味だが、渡れた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p14_song',
    conditions: { s2: 'subj_song' },
    resultText: '歌が吊り橋を揺らしている。谷間に響く旋律がロープを震わせている。歌に合わせて歩くと、揺れが足取りを助けた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p14_song', name: '谷間の旋律', description: '吊り橋を渡るリズムが耳に残っている', sellPrice: 8 }]
  },
  {
    id: 'p14_silence',
    conditions: { s2: 'subj_silence' },
    resultText: '沈黙が吊り橋を揺らしている。風も、水音も、虫の声もない。なのに橋が揺れている。静寂そのものが振動を孕んでいる。足がすくんだ。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p14_silence', name: '無音の振動', description: '音のない揺れの記憶。手のひらがまだ痺れている', sellPrice: 10 }]
  },
  {
    id: 'p14_knight',
    conditions: { s2: 'subj_knight' },
    resultText: '騎士が吊り橋を揺らしている。重い甲冑のまま渡ろうとして、一歩ごとに橋が大きく揺れる。板が一枚落ちた。騎士が渡り終えるのを待ってからにした。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p14_witch',
    conditions: { s2: 'subj_witch' },
    resultText: '魔女が吊り橋を揺らしている。箒で橋板を叩いている。何かの呪文の一部らしい。「終わったよ」と振り向いた。橋は前より頑丈になっていた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p14_witch', name: '魔女の橋板', description: '呪文で補強された板の欠片。妙に丈夫', sellPrice: 12 }]
  },
  {
    id: 'p14_king',
    conditions: { s2: 'subj_king' },
    resultText: '王が吊り橋を揺らしている。橋の真ん中で足踏みをしている。「この橋は朕のものだ」と宣言し、通行料を要求された。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p14_ghost',
    conditions: { s2: 'subj_ghost' },
    resultText: '亡霊が吊り橋を揺らしている。透けた足が板を踏むたびに、橋が冷たく震える。すれ違うとき、笑い声が耳を掠めた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p14_mirror',
    conditions: { s2: 'subj_mirror' },
    resultText: '鏡が吊り橋を揺らしている。橋の中央に大きな鏡が立てかけてある。風を受けて揺れている。覗くと、自分が落ちる姿が映った。目を逸らして渡った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p14_doll',
    conditions: { s2: 'subj_doll' },
    resultText: '人形が吊り橋を揺らしている。指人形ほどの人形が、ロープの上で跳ねている。誰が動かしているのか。糸は見えない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p14_rain',
    conditions: { s2: 'subj_rain' },
    resultText: '雨が吊り橋を揺らしている。板を叩く雨粒が橋全体を震わせる。足元が滑る。手すりを握りしめ、濡れた板を一歩ずつ踏んだ。',
    damage: 2,
    quill: 3
  },
];
