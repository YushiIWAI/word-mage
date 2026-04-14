// Auto-generated from node-p15-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP15Outcomes: Outcome[] = [
  {
    id: 'p15_kitten',
    conditions: { s2: 'subj_kitten' },
    resultText: '子猫が砂丘に眠っている。丸くなって砂に埋もれかけている。鼻先の砂粒を払い、起こさずに通り過ぎた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p15_snake',
    conditions: { s2: 'subj_snake' },
    resultText: '蛇が砂丘に眠っている。砂の下にとぐろの輪郭が透けている。踏まぬよう足元を選びながら、慎重に通り過ぎた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p15_dragon',
    conditions: { s2: 'subj_dragon' },
    resultText: '竜が砂丘に眠っている。砂丘だと思っていたものが竜の背中だった。鱗が発する熱で靴底が溶ける。焦げた足を引きずりながら後退した。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p15_dragon', name: '竜鱗の砂', description: '竜の鱗が砂に混じっている。微かに熱い', sellPrice: 15 }]
  },
  {
    id: 'p15_butterfly',
    conditions: { s2: 'subj_butterfly' },
    resultText: '蝶が砂丘に眠っている。羽を閉じたまま、風に吹かれても動かない。花のない砂漠で、何の夢を見ているのか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p15_wind',
    conditions: { s2: 'subj_wind' },
    resultText: '風が砂丘に眠っている。空気が完全に凪いで、砂の一粒も動かない。不自然なほどの静寂が広がっている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p15_flame',
    conditions: { s2: 'subj_flame' },
    resultText: '炎が砂丘に眠っている。砂の表面が微かに熱い。掘ると、硝子になった砂の層が現れた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p15_flame', name: '硝子の砂', description: '炎で焼かれて硝子になった砂。透き通っている', sellPrice: 12 }]
  },
  {
    id: 'p15_ice',
    conditions: { s2: 'subj_ice' },
    resultText: '氷が砂丘に眠っている。灼熱の砂漠の地下に、溶けない氷の塊がある。掘り出した掌に冷気が染みる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p15_shadow',
    conditions: { s2: 'subj_shadow' },
    resultText: '影が砂丘に眠っている。日差しの真下なのに、砂丘の一角だけが暗い。足を踏み入れると、影が足首を掴む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p15_song',
    conditions: { s2: 'subj_song' },
    resultText: '歌が砂丘に眠っている。耳を砂に当てると、遠い旋律が聞こえる。砂の中に封じられた誰かの声だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p15_silence',
    conditions: { s2: 'subj_silence' },
    resultText: '沈黙が砂丘に眠っている。この丘に近づくと足音が消える。声を出しても、砂が吸い込む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p15_knight',
    conditions: { s2: 'subj_knight' },
    resultText: '騎士が砂丘に眠っている。剣を胸に抱いたまま、甲冑姿で横たわっている。砂が風紋を描いて鎧を覆い始めている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p15_witch',
    conditions: { s2: 'subj_witch' },
    resultText: '魔女が砂丘に眠っている。杖を抱いたまま横たわっている。寝息に合わせて呪力が漏れ、近づいた足が砂に沈む。膝まで埋まり、抜け出すのに体力を使い果たした。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p15_king',
    conditions: { s2: 'subj_king' },
    resultText: '王が砂丘に眠っている。玉座ごと砂に沈みかけている。傾いた王冠の向こうに、かつての王国はもうない。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p15_king', name: '砂まみれの王冠', description: '砂に埋もれた王冠。もう誰も被らない', sellPrice: 18 }]
  },
  {
    id: 'p15_ghost',
    conditions: { s2: 'subj_ghost' },
    resultText: '亡霊が砂丘に眠っている。砂の下に透けた輪郭が見える。踏んだ瞬間、冷気が足から全身を駆け上がり、指先の感覚が消えた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p15_mirror',
    conditions: { s2: 'subj_mirror' },
    resultText: '鏡が砂丘に眠っている。砂を払うと、鏡面に空ではなく地底の闇が映っている。覗き込みすぎないほうがいい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p15_doll',
    conditions: { s2: 'subj_doll' },
    resultText: '人形が砂丘に眠っている。横たわった人形の上を、砂が少しずつ流れている。掘り出すと、閉じていた目がゆっくり開いた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p15_rain',
    conditions: { s2: 'subj_rain' },
    resultText: '雨が砂丘に眠っている。乾いた砂の奥に、古い雨の記憶が染みている。掌で掘ると、指の間から水が滲んだ。',
    damage: 0,
    quill: 6
  },
];
