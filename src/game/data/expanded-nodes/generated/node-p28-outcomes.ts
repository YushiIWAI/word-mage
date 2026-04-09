// 道端の篝火: [修飾語*] 篝火が [副詞*] 燃えている
// 可変: s1(modifier), s3(adverb) — 11×5=55通り + 元テキスト
import type { Outcome } from '../../../engine/types';

export const nodeP28Outcomes: Outcome[] = [
  // === 元テキスト（小さな篝火が静かに燃えている）===
  {
    id: 'p28_orig',
    conditions: { s1: 'mod_small', s3: 'adv_quiet' },
    resultText: '小さな篝火が静かに燃えている。旅人が残した火だろう。手をかざすと、ほんの少し温かい。',
    damage: 0,
    quill: 3
  },

  // === 小さな ×副詞（残り4つ）===
  {
    id: 'p28_small_fierce',
    conditions: { s1: 'mod_small', s3: 'adv_fierce' },
    resultText: '小さな篝火が激しく燃えている。小さいのにやけに元気だ。薪が弾けて火の粉が飛ぶ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p28_small_slow',
    conditions: { s1: 'mod_small', s3: 'adv_slow' },
    resultText: '小さな篝火がゆっくり燃えている。もう消えそうだ。薪を足してやると、少し元気になった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_small_weak',
    conditions: { s1: 'mod_small', s3: 'adv_weak' },
    resultText: '小さな篝火が力なく燃えている。雨に打たれたか。最後の一欠片が赤く光っている。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p28_small_sudden',
    conditions: { s1: 'mod_small', s3: 'adv_sudden' },
    resultText: '小さな篝火が突然燃え上がった。何かが落ちたのか？ 炎が一瞬大きくなり、また小さくなった。',
    damage: 1,
    quill: 4
  },

  // === 優しい ×副詞5 ===
  {
    id: 'p28_gentle_quiet',
    conditions: { s1: 'mod_gentle', s3: 'adv_quiet' },
    resultText: '優しい篝火が静かに燃えている。炎が揺れるたびに暖かい光が広がる。安心する。',
    damage: -1,
    quill: 4
  },
  {
    id: 'p28_gentle_fierce',
    conditions: { s1: 'mod_gentle', s3: 'adv_fierce' },
    resultText: '優しい篝火が激しく燃えている。矛盾した光景だ。炎は熱いのに、不思議と火傷しない。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p28_gentle_fierce', name: '矛盾の灯', description: '熱いのに火傷しない不思議な種火', sellPrice: 7 }]
  },
  {
    id: 'p28_gentle_slow',
    conditions: { s1: 'mod_gentle', s3: 'adv_slow' },
    resultText: '優しい篝火がゆっくり燃えている。まるで呼吸するように。ここで休んでいきなさいと言っている。',
    damage: -2,
    quill: 4
  },
  {
    id: 'p28_gentle_weak',
    conditions: { s1: 'mod_gentle', s3: 'adv_weak' },
    resultText: '優しい篝火が力なく燃えている。誰かの祈りが火を灯していた。祈り手はもういない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_gentle_sudden',
    conditions: { s1: 'mod_gentle', s3: 'adv_sudden' },
    resultText: '優しい篝火が突然灯った。足元にあった消えた焚き火だ。近づいたら勝手に火がついた。',
    damage: 0,
    quill: 5
  },

  // === 燃え盛る ×副詞5 ===
  {
    id: 'p28_fire_quiet',
    conditions: { s1: 'mod_fire', s3: 'adv_quiet' },
    resultText: '燃え盛る篝火が静かに燃えている。巨大な炎なのに音がしない。魔法の火だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p28_fire_fierce',
    conditions: { s1: 'mod_fire', s3: 'adv_fierce' },
    resultText: '燃え盛る篝火が激しく燃えている。火柱が空を焦がす。近づけない。迂回するしかない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p28_fire_slow',
    conditions: { s1: 'mod_fire', s3: 'adv_slow' },
    resultText: '燃え盛る篝火がゆっくり燃えている。溶岩のような炎。何日も燃え続けているらしい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p28_fire_weak',
    conditions: { s1: 'mod_fire', s3: 'adv_weak' },
    resultText: '燃え盛る篝火が力なく燃えている。かつては盛大だったのだろう。今は灰が多い。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_fire_sudden',
    conditions: { s1: 'mod_fire', s3: 'adv_sudden' },
    resultText: '燃え盛る篝火が突然爆発した。地中の何かに引火したのだ。慌てて飛び退く。',
    damage: 4,
    quill: 4
  },

  // === 堅い ×副詞5 ===
  {
    id: 'p28_hard_quiet',
    conditions: { s1: 'mod_hard', s3: 'adv_quiet' },
    resultText: '堅い篝火が静かに燃えている。石炭の火だ。硬い芯がいつまでも赤く光っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_hard_fierce',
    conditions: { s1: 'mod_hard', s3: 'adv_fierce' },
    resultText: '堅い篝火が激しく燃えている。鍛冶の炉のような火力。金属を溶かせそうだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p28_hard_slow',
    conditions: { s1: 'mod_hard', s3: 'adv_slow' },
    resultText: '堅い篝火がゆっくり燃えている。燃え尽きない炭がある。旅に持っていけるだろうか。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_ember', name: '消えない炭', description: '赤く光る小さな炭', sellPrice: 8 }]
  },
  {
    id: 'p28_hard_weak',
    conditions: { s1: 'mod_hard', s3: 'adv_weak' },
    resultText: '堅い篝火が力なく燃えている。炭が硬すぎて空気が入らないのだ。少し崩してやる。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_hard_sudden',
    conditions: { s1: 'mod_hard', s3: 'adv_sudden' },
    resultText: '堅い篝火が突然弾けた。炭が砲弾のように飛び散る。一つが額を掠めた。',
    damage: 3,
    quill: 3
  },

  // === 鋭い ×副詞5 ===
  {
    id: 'p28_sharp_quiet',
    conditions: { s1: 'mod_sharp', s3: 'adv_quiet' },
    resultText: '鋭い篝火が静かに燃えている。針のような炎だ。静かだが触れれば深く切れる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p28_sharp_fierce',
    conditions: { s1: 'mod_sharp', s3: 'adv_fierce' },
    resultText: '鋭い篝火が激しく燃えている。炎の先端が剣のように空を切る。近寄れない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p28_sharp_slow',
    conditions: { s1: 'mod_sharp', s3: 'adv_slow' },
    resultText: '鋭い篝火がゆっくり燃えている。蝋燭のような細い炎。周囲を鮮やかに照らしている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_sharp_weak',
    conditions: { s1: 'mod_sharp', s3: 'adv_weak' },
    resultText: '鋭い篝火が力なく燃えている。切れ味を失った炎。もう何も照らせない。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p28_sharp_sudden',
    conditions: { s1: 'mod_sharp', s3: 'adv_sudden' },
    resultText: '鋭い篝火が突然伸びた。槍のような炎が夜空を突く。何かの信号だろうか。',
    damage: 2,
    quill: 5
  },

  // === 壊れた ×副詞5 ===
  {
    id: 'p28_broken_quiet',
    conditions: { s1: 'mod_broken', s3: 'adv_quiet' },
    resultText: '壊れた篝火が静かに燃えている。石組みが崩れた焚き火跡。それでもまだ火が生きている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_broken_fierce',
    conditions: { s1: 'mod_broken', s3: 'adv_fierce' },
    resultText: '壊れた篝火が激しく燃えている。崩れた石の隙間から炎が吹き出している。地下火だ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p28_broken_slow',
    conditions: { s1: 'mod_broken', s3: 'adv_slow' },
    resultText: '壊れた篝火がゆっくり燃えている。崩壊しながら燃える。朽ちていく美しさがある。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_broken_weak',
    conditions: { s1: 'mod_broken', s3: 'adv_weak' },
    resultText: '壊れた篝火が力なく燃えている。もう形を保てない。最後の火が消えた時、石組みも崩れた。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p28_broken_sudden',
    conditions: { s1: 'mod_broken', s3: 'adv_sudden' },
    resultText: '壊れた篝火が突然崩れた。石が転がり、火が散らばる。足元に気をつけて進む。',
    damage: 2,
    quill: 3
  },

  // === 屈強な ×副詞5 ===
  {
    id: 'p28_mighty_quiet',
    conditions: { s1: 'mod_mighty', s3: 'adv_quiet' },
    resultText: '屈強な篝火が静かに燃えている。巨大な丸太を組んだ焚き火。安定した熱がある。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_mighty_fierce',
    conditions: { s1: 'mod_mighty', s3: 'adv_fierce' },
    resultText: '屈強な篝火が激しく燃えている。キャンプファイアどころではない。祭りの大篝火だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p28_mighty_slow',
    conditions: { s1: 'mod_mighty', s3: 'adv_slow' },
    resultText: '屈強な篝火がゆっくり燃えている。何日分もの薪がある。ここでゆっくり休める。',
    damage: -2,
    quill: 4
  },
  {
    id: 'p28_mighty_weak',
    conditions: { s1: 'mod_mighty', s3: 'adv_weak' },
    resultText: '屈強な篝火が力なく燃えている。こんな大きな火が弱るとは。何が火の力を奪ったのか。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p28_mighty_sudden',
    conditions: { s1: 'mod_mighty', s3: 'adv_sudden' },
    resultText: '屈強な篝火が突然燃え上がった。火の粉が竜巻のように舞う。壮観だが危険だ。',
    damage: 3,
    quill: 5
  },

  // === 凍てついた ×副詞5 ===
  {
    id: 'p28_frozen_quiet',
    conditions: { s1: 'mod_frozen', s3: 'adv_quiet' },
    resultText: '凍てついた篝火が静かに燃えている。青い炎だ。熱くない。むしろ冷たい。不思議な火。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p28_frozen_quiet', name: '冷たい青火', description: '触れると指先が凍る青い炎の欠片', sellPrice: 8 }]
  },
  {
    id: 'p28_frozen_fierce',
    conditions: { s1: 'mod_frozen', s3: 'adv_fierce' },
    resultText: '凍てついた篝火が激しく燃えている。氷の火柱。触れたものを凍らせる逆さまの炎。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p28_frozen_slow',
    conditions: { s1: 'mod_frozen', s3: 'adv_slow' },
    resultText: '凍てついた篝火がゆっくり燃えている。炎の形をした氷。溶ける気配がない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_frozen_weak',
    conditions: { s1: 'mod_frozen', s3: 'adv_weak' },
    resultText: '凍てついた篝火が力なく燃えている。青い光が点滅している。冷たい光が消えかけている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_frozen_sudden',
    conditions: { s1: 'mod_frozen', s3: 'adv_sudden' },
    resultText: '凍てついた篝火が突然弾けた。氷の破片が飛び散り、当たった木が凍りついた。',
    damage: 3,
    quill: 5
  },

  // === 透き通った ×副詞5 ===
  {
    id: 'p28_clear_quiet',
    conditions: { s1: 'mod_clear', s3: 'adv_quiet' },
    resultText: '透き通った篝火が静かに燃えている。ガラスのような炎。向こう側の景色が揺らいで見える。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p28_clear_fierce',
    conditions: { s1: 'mod_clear', s3: 'adv_fierce' },
    resultText: '透き通った篝火が激しく燃えている。透明な炎の中に、何かの幻が見える。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p28_clear_slow',
    conditions: { s1: 'mod_clear', s3: 'adv_slow' },
    resultText: '透き通った篝火がゆっくり燃えている。水晶のような炎。見つめていると心が洗われる。',
    damage: -1,
    quill: 5
  },
  {
    id: 'p28_clear_weak',
    conditions: { s1: 'mod_clear', s3: 'adv_weak' },
    resultText: '透き通った篝火が力なく燃えている。ほとんど見えない。でも確かにそこにある。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p28_clear_sudden',
    conditions: { s1: 'mod_clear', s3: 'adv_sudden' },
    resultText: '透き通った篝火が突然現れた。何もなかった場所に。まるで空気そのものが燃え出したように。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p28_clear_sudden', name: '空燃の瓶', description: '空気が燃えた跡を瓶に閉じ込めた。振ると光る', sellPrice: 14 }]
  },

  // === 呪われた ×副詞5 ===
  {
    id: 'p28_cursed_quiet',
    conditions: { s1: 'mod_cursed', s3: 'adv_quiet' },
    resultText: '呪われた篝火が静かに燃えている。紫の炎。近づくと気分が悪くなる。でも温かい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p28_cursed_fierce',
    conditions: { s1: 'mod_cursed', s3: 'adv_fierce' },
    resultText: '呪われた篝火が激しく燃えている。黒い炎が周囲の草を枯らす。呪いが広がっている。',
    damage: 5,
    quill: 3
  },
  {
    id: 'p28_cursed_slow',
    conditions: { s1: 'mod_cursed', s3: 'adv_slow' },
    resultText: '呪われた篝火がゆっくり燃えている。誰かの怨念が火を灯している。長い怨みだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p28_cursed_weak',
    conditions: { s1: 'mod_cursed', s3: 'adv_weak' },
    resultText: '呪われた篝火が力なく燃えている。呪いが解けかけている。もう少しで消えそうだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p28_cursed_sudden',
    conditions: { s1: 'mod_cursed', s3: 'adv_sudden' },
    resultText: '呪われた篝火が突然燃え上がった。地面に呪文の陣が浮かび上がる。罠だった。',
    damage: 4,
    quill: 4
  },

  // === 眠い ×副詞5 ===
  {
    id: 'p28_sleepy_quiet',
    conditions: { s1: 'mod_sleepy', s3: 'adv_quiet' },
    resultText: '眠い篝火が静かに燃えている。見ているだけで眠くなる。炎が子守歌を歌っているようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p28_sleepy_fierce',
    conditions: { s1: 'mod_sleepy', s3: 'adv_fierce' },
    resultText: '眠い篝火が激しく燃えている。寝ぼけているのか。炎があちこちに暴れている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p28_sleepy_slow',
    conditions: { s1: 'mod_sleepy', s3: 'adv_slow' },
    resultText: '眠い篝火がゆっくり燃えている。もう眠りかけだ。傍に座ると一緒に眠ってしまいそう。',
    damage: -1,
    quill: 3
  },
  {
    id: 'p28_sleepy_weak',
    conditions: { s1: 'mod_sleepy', s3: 'adv_weak' },
    resultText: '眠い篝火が力なく燃えている。完全に寝ている。起こすのも可哀想だ。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p28_sleepy_sudden',
    conditions: { s1: 'mod_sleepy', s3: 'adv_sudden' },
    resultText: '眠い篝火が突然起きた。びっくりして炎が大きくなった。すぐにまた小さくなる。',
    damage: 1,
    quill: 5
  },
];
