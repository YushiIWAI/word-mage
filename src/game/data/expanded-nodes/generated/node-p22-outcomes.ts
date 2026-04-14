// Auto-generated from node-p22-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP22Outcomes: Outcome[] = [
  {
    id: 'p22_block',
    conditions: { s4: 'pred_block' },
    resultText: '古い水車が川を塞いでいる。歯車が軋みながら動き、水の流れを完全に堰き止めている。溢れた水が足元を浸し、泥に足を取られて膝を打った。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p22_guard',
    conditions: { s4: 'pred_guard' },
    resultText: '古い水車が川を守っている。上流から流れてくる瓦礫や汚泥を水車が掬い上げ、岸に弾いている。川の水が澄んでいる。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p22_guard', name: '澄み水の瓶', description: '水車が守った川の水。驚くほど透き通っている', sellPrice: 10 }]
  },
  {
    id: 'p22_chase',
    conditions: { s4: 'pred_chase' },
    resultText: '古い水車が川を追いかけてくる。軸ごと岸を離れ、水流に沿ってこちらに転がってくる。逃げ遅れて脚を巻き込まれ、泥水の中に叩きつけられた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p22_gaze',
    conditions: { s4: 'pred_gaze' },
    resultText: '古い水車が川を見つめている。回転が止まり、水車の隙間から水面を覗き込んでいるように見える。川に何か映っているのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p22_hide',
    conditions: { s4: 'pred_hide' },
    resultText: '古い水車が川を隠している。水車の羽板が扇のように広がり、川面を覆い尽くしている。水音だけが聞こえる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p22_crush',
    conditions: { s4: 'pred_crush' },
    resultText: '古い水車が川を砕いている。凍った川面を歯車が噛み砕き、氷片を撒き散らしている。氷の破片が頬を掠めた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p22_flee',
    conditions: { s4: 'pred_flee' },
    resultText: '古い水車が川を逃げていく。流れに乗って水車がゆっくり下流へ去っていく。小屋だけが残された。',
    damage: 0,
    quill: 4
  },
];
