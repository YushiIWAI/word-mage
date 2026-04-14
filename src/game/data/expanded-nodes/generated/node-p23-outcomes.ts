// 古い書庫: [修飾語*] 炎が 書庫に [述語*]
import type { Outcome } from '../../../engine/types';

export const nodeP23Outcomes: Outcome[] = [
  // === 元テキスト: 優しい炎が書庫に隠れている ===
  {
    id: 'p23_orig',
    conditions: { s1: 'mod_gentle', s4: 'orig_p23_pred' },
    resultText: '優しい炎が書庫に隠れている。蝋燭の残り火が書架の奥でちらちら揺れている。本の背表紙が温かい色に染まっている。',
    damage: 1,
    quill: 4
  },

  // === 小さな × 各述語 ===
  {
    id: 'p23_small_whisper',
    conditions: { s1: 'mod_small', s4: 'pred_whisper' },
    resultText: '小さな炎が書庫に囁いている。蝋燭ほどの火が本のページをぱらぱらとめくる。何かを読み上げているようだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_small_sleep',
    conditions: { s1: 'mod_small', s4: 'pred_sleep' },
    resultText: '小さな炎が書庫に眠っている。燭台の上で揺れもせず静止している。息を吹きかけたら消えそうだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_small_sing',
    conditions: { s1: 'mod_small', s4: 'pred_sing' },
    resultText: '小さな炎が書庫に歌っている。ぱちぱちと微かな音を立てる。書架の間に子守唄のように響く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_small_entangle',
    conditions: { s1: 'mod_small', s4: 'pred_entangle' },
    resultText: '小さな炎が書庫に絡みついている。本の背表紙を這う蔦のように、細い火筋が棚を伝っている。燃えはしない。温いだけだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_small_flee',
    conditions: { s1: 'mod_small', s4: 'pred_flee' },
    resultText: '小さな炎が書庫を逃げていく。風もないのに蝋燭の火が棚の間を走り抜け、窓から消えた。暗くなった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_small_shine',
    conditions: { s1: 'mod_small', s4: 'pred_shine' },
    resultText: '小さな炎が書庫に輝いている。豆粒ほどの光が書架の奥を照らす。古い本の金文字が浮かび上がった。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p23_small_shine', name: '金文字の断片', description: '古い本から浮かび上がった一字。まだ光っている', sellPrice: 6 }]
  },
  {
    id: 'p23_small_rain_down',
    conditions: { s1: 'mod_small', s4: 'pred_rain_down' },
    resultText: '小さな炎が書庫に降り注いでいる。天井から火の粉が雪のように落ちてくる。本のページに穴が空いていく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p23_small_dance',
    conditions: { s1: 'mod_small', s4: 'pred_dance' },
    resultText: '小さな炎が書庫に踊っている。蝋燭の火が燭台を離れ、書架の間をくるくる回る。本が温かい影を落としている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_small_melt',
    conditions: { s1: 'mod_small', s4: 'pred_melt' },
    resultText: '小さな炎が書庫に溶けている。蝋燭が崩れ、蝋が本の上に垂れている。表紙に読めない文字を描いた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_small_laugh',
    conditions: { s1: 'mod_small', s4: 'pred_laugh' },
    resultText: '小さな炎が書庫に笑っている。ぱち、ぱちと弾ける音が楽しそうだ。書架の間が少し暖かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_small_wait',
    conditions: { s1: 'mod_small', s4: 'pred_wait' },
    resultText: '小さな炎が書庫に待っている。蝋燭の火が微動だにしない。誰かが来るのを知っていたようだ。',
    damage: 0,
    quill: 4
  },

  // === 優しい × 各述語 ===
  {
    id: 'p23_gentle_whisper',
    conditions: { s1: 'mod_gentle', s4: 'pred_whisper' },
    resultText: '優しい炎が書庫に囁いている。暖炉の残り火が本の内容を語っている。聞き取れたのは昔話の一節だった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p23_gentle_whisper', name: '語られた一節', description: '炎が囁いた昔話の切れ端。紙に写し取った', sellPrice: 8 }]
  },
  {
    id: 'p23_gentle_sleep',
    conditions: { s1: 'mod_gentle', s4: 'pred_sleep' },
    resultText: '優しい炎が書庫に眠っている。暖炉の中で燠火がゆっくり呼吸している。部屋全体が毛布のように温かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_gentle_sing',
    conditions: { s1: 'mod_gentle', s4: 'pred_sing' },
    resultText: '優しい炎が書庫に歌っている。暖炉の火が旋律を奏でている。本のページが風もないのにめくれ、歌に合わせて踊る。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p23_gentle_entangle',
    conditions: { s1: 'mod_gentle', s4: 'pred_entangle' },
    resultText: '優しい炎が書庫に絡みついている。温かな光が書架を包み込んでいる。本を手に取ると、指先まで温もりが伝わった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_gentle_flee',
    conditions: { s1: 'mod_gentle', s4: 'pred_flee' },
    resultText: '優しい炎が書庫を逃げていく。暖炉の火がそっと消えた。まるで役目を終えたように。本だけが温もりを覚えている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_gentle_shine',
    conditions: { s1: 'mod_gentle', s4: 'pred_shine' },
    resultText: '優しい炎が書庫に輝いている。柔らかな光が本の背表紙を琥珀色に染めている。読書灯として完璧だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_gentle_rain_down',
    conditions: { s1: 'mod_gentle', s4: 'pred_rain_down' },
    resultText: '優しい炎が書庫に降り注いでいる。天井から温かな光の粒が舞い降りる。本のページが金色に光った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p23_gentle_rain', name: '光の粒', description: '降り注いだ温かな光。掌の上で静かに揺れている', sellPrice: 8 }]
  },
  {
    id: 'p23_gentle_dance',
    conditions: { s1: 'mod_gentle', s4: 'pred_dance' },
    resultText: '優しい炎が書庫に踊っている。暖炉の火がゆらゆらとワルツを踏む。壁に映る影も一緒に踊っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_gentle_melt',
    conditions: { s1: 'mod_gentle', s4: 'pred_melt' },
    resultText: '優しい炎が書庫に溶けている。光が蜂蜜のように書架を流れ落ちる。本が琥珀に封じられたように見えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_gentle_laugh',
    conditions: { s1: 'mod_gentle', s4: 'pred_laugh' },
    resultText: '優しい炎が書庫に笑っている。暖炉の火が穏やかに揺れている。まるで面白い本を読んでいるようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_gentle_wait',
    conditions: { s1: 'mod_gentle', s4: 'pred_wait' },
    resultText: '優しい炎が書庫に待っている。暖炉に火が入っている。椅子が一脚、炉の前に置いてある。誰かのために。',
    damage: 0,
    quill: 5
  },

  // === 燃え盛る × 各述語 ===
  {
    id: 'p23_fire_whisper',
    conditions: { s1: 'mod_fire', s4: 'pred_whisper' },
    resultText: '燃え盛る炎が書庫に囁いている。轟音の中に声が混じる。本が灰になる寸前、書かれた言葉が叫んでいる。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p23_fire_sleep',
    conditions: { s1: 'mod_fire', s4: 'pred_sleep' },
    resultText: '燃え盛る炎が書庫に眠っている。火災の跡。壁は黒く焦げているが、今は静かだ。いつ目覚めるかわからない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_fire_sing',
    conditions: { s1: 'mod_fire', s4: 'pred_sing' },
    resultText: '燃え盛る炎が書庫に歌っている。業火が吠えるように鳴る。本が次々と燃え上がり、灰が舞い上がる。地獄の合唱だ。',
    damage: 5,
    quill: 3
  },
  {
    id: 'p23_fire_entangle',
    conditions: { s1: 'mod_fire', s4: 'pred_entangle' },
    resultText: '燃え盛る炎が書庫に絡みついている。書架が炎に巻かれている。本の背表紙が一冊ずつ剥がれ落ちる。知識が灰になっていく。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p23_fire_flee',
    conditions: { s1: 'mod_fire', s4: 'pred_flee' },
    resultText: '燃え盛る炎が書庫を逃げていく。火が窓を突き破って外へ飛び出した。書庫は焦げ跡だらけだが、本は残った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_fire_shine',
    conditions: { s1: 'mod_fire', s4: 'pred_shine' },
    resultText: '燃え盛る炎が書庫に輝いている。書庫全体が松明のように燃えている。遠くからでも見える。もう書庫ではない。灯台だ。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p23_fire_rain_down',
    conditions: { s1: 'mod_fire', s4: 'pred_rain_down' },
    resultText: '燃え盛る炎が書庫に降り注いでいる。天井が崩れ、火の塊が落ちてくる。本が一瞬で灰になる。逃げるしかない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p23_fire_dance',
    conditions: { s1: 'mod_fire', s4: 'pred_dance' },
    resultText: '燃え盛る炎が書庫に踊っている。火柱が書架の間を跳ね回る。紙吹雪のように灰が舞う。恐ろしく美しい。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p23_fire_melt',
    conditions: { s1: 'mod_fire', s4: 'pred_melt' },
    resultText: '燃え盛る炎が書庫に溶けている。石の壁が飴のように歪んでいる。本棚が崩れ、溶けた木と紙が混ざり合う。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p23_fire_laugh',
    conditions: { s1: 'mod_fire', s4: 'pred_laugh' },
    resultText: '燃え盛る炎が書庫に笑っている。ごうごうと鳴る火の中に哄笑が混じる。本が燃えるのが楽しくて仕方ないらしい。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p23_fire_wait',
    conditions: { s1: 'mod_fire', s4: 'pred_wait' },
    resultText: '燃え盛る炎が書庫に待っている。入口が炎の壁で塞がれている。中に何かあるのだろうが、取りに行けば焼かれる。',
    damage: 4,
    quill: 2
  },

  // === 堅い × 各述語 ===
  {
    id: 'p23_hard_whisper',
    conditions: { s1: 'mod_hard', s4: 'pred_whisper' },
    resultText: '堅い炎が書庫に囁いている。消えない火が書架の隅で低く唸っている。何百年も同じことを呟き続けているらしい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_hard_sleep',
    conditions: { s1: 'mod_hard', s4: 'pred_sleep' },
    resultText: '堅い炎が書庫に眠っている。結晶化した火が本棚の上に鎮座している。触ると温かい。割れない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_hard_sing',
    conditions: { s1: 'mod_hard', s4: 'pred_sing' },
    resultText: '堅い炎が書庫に歌っている。金属的な音を立てて炎が振動する。書架のガラスが共鳴して細かく震えている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_hard_entangle',
    conditions: { s1: 'mod_hard', s4: 'pred_entangle' },
    resultText: '堅い炎が書庫に絡みついている。石化した火の蔓が書架を締め上げている。本を抜こうとしても動かない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_hard_flee',
    conditions: { s1: 'mod_hard', s4: 'pred_flee' },
    resultText: '堅い炎が書庫を逃げていく。結晶の火が転がるように床を走り、壁の隙間から消えた。焦げ跡すら残さない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_hard_shine',
    conditions: { s1: 'mod_hard', s4: 'pred_shine' },
    resultText: '堅い炎が書庫に輝いている。宝石のような火が書架を照らしている。永遠の読書灯。風にも水にも消えない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p23_hard_shine', name: '不滅の灯火', description: '決して消えない炎の結晶。暖かいが熱くない', sellPrice: 10 }]
  },
  {
    id: 'p23_hard_rain_down',
    conditions: { s1: 'mod_hard', s4: 'pred_rain_down' },
    resultText: '堅い炎が書庫に降り注いでいる。火の粒が石のように硬く、本の表紙を叩いている。凹みが増えていく。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_hard_dance',
    conditions: { s1: 'mod_hard', s4: 'pred_dance' },
    resultText: '堅い炎が書庫に踊っている。結晶の火がかちかちと音を立てて跳ねる。床に小さな傷がつく。楽しそうではある。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_hard_melt',
    conditions: { s1: 'mod_hard', s4: 'pred_melt' },
    resultText: '堅い炎が書庫に溶けている。矛盾だ。だが結晶の火が確かに崩れ、液体のように書架を伝っている。温かい樹脂の匂いがする。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p23_hard_laugh',
    conditions: { s1: 'mod_hard', s4: 'pred_laugh' },
    resultText: '堅い炎が書庫に笑っている。かん、かんと乾いた音が鳴る。結晶が振動しているのだ。愉快そうだが不気味でもある。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_hard_wait',
    conditions: { s1: 'mod_hard', s4: 'pred_wait' },
    resultText: '堅い炎が書庫に待っている。入口の柱に埋め込まれた火の結晶が、来訪者を見定めるように光っている。番人のようだ。',
    damage: 1,
    quill: 4
  },

  // === 鋭い × 各述語 ===
  {
    id: 'p23_sharp_whisper',
    conditions: { s1: 'mod_sharp', s4: 'pred_whisper' },
    resultText: '鋭い炎が書庫に囁いている。針のような火が本のページを焦がしながら文字を読み上げる。聞き取れた言葉は呪文だった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p23_sharp_sleep',
    conditions: { s1: 'mod_sharp', s4: 'pred_sleep' },
    resultText: '鋭い炎が書庫に眠っている。刃物のような火が本棚の隙間に挟まっている。触れれば指を焼く。起こさない方がいい。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_sharp_sing',
    conditions: { s1: 'mod_sharp', s4: 'pred_sing' },
    resultText: '鋭い炎が書庫に歌っている。甲高い音が書架に響く。ガラスの本棚に罅が入った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_sharp_entangle',
    conditions: { s1: 'mod_sharp', s4: 'pred_entangle' },
    resultText: '鋭い炎が書庫に絡みついている。有刺鉄線のような火の筋が本を縛り上げている。手を出せば切れて焼ける。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_sharp_flee',
    conditions: { s1: 'mod_sharp', s4: 'pred_flee' },
    resultText: '鋭い炎が書庫を逃げていく。一閃。火の刃が棚を切り裂きながら窓から飛び出した。本が真っ二つに割れている。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_sharp_shine',
    conditions: { s1: 'mod_sharp', s4: 'pred_shine' },
    resultText: '鋭い炎が書庫に輝いている。直視できないほどの白い光。本の文字が焼き付いて壁に影絵のように映っている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p23_sharp_rain_down',
    conditions: { s1: 'mod_sharp', s4: 'pred_rain_down' },
    resultText: '鋭い炎が書庫に降り注いでいる。火の針が天井から降ってくる。本のページを貫通し、床に突き刺さる。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p23_sharp_dance',
    conditions: { s1: 'mod_sharp', s4: 'pred_dance' },
    resultText: '鋭い炎が書庫に踊っている。剣舞のように火の刃が旋回する。書架の角が削れていく。美しいが近寄れない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p23_sharp_melt',
    conditions: { s1: 'mod_sharp', s4: 'pred_melt' },
    resultText: '鋭い炎が書庫に溶けている。鋭さを失った火が水銀のように床を這う。踏むと足の裏を焼かれた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_sharp_laugh',
    conditions: { s1: 'mod_sharp', s4: 'pred_laugh' },
    resultText: '鋭い炎が書庫に笑っている。ぎし、ぎしと金属を擦るような音。本の表紙に焼き傷が走る。嘲笑だ。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_sharp_wait',
    conditions: { s1: 'mod_sharp', s4: 'pred_wait' },
    resultText: '鋭い炎が書庫に待っている。本棚の奥で白い火が揺れている。手を伸ばせば本を取れるが、指を焼かれるだろう。',
    damage: 2,
    quill: 3
  },

  // === 壊れた × 各述語 ===
  {
    id: 'p23_broken_whisper',
    conditions: { s1: 'mod_broken', s4: 'pred_whisper' },
    resultText: '壊れた炎が書庫に囁いている。消えかけの残り火がじじ、と音を立てる。聞き取れない。最後の一言を伝えようとしている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_broken_sleep',
    conditions: { s1: 'mod_broken', s4: 'pred_sleep' },
    resultText: '壊れた炎が書庫に眠っている。燭台に蝋の塊だけが残っている。芯が折れている。もう灯らない。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p23_broken_sing',
    conditions: { s1: 'mod_broken', s4: 'pred_sing' },
    resultText: '壊れた炎が書庫に歌っている。途切れ途切れの音。明滅する光が旋律を刻もうとして、刻めない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_broken_entangle',
    conditions: { s1: 'mod_broken', s4: 'pred_entangle' },
    resultText: '壊れた炎が書庫に絡みついている。煤の筋が書架を汚している。火はもう消えたのに、跡だけが残っている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_broken_flee',
    conditions: { s1: 'mod_broken', s4: 'pred_flee' },
    resultText: '壊れた炎が書庫を逃げていく。最後の火の粉がよろよろと床を転がり、敷居を越えて消えた。薄暗い書庫が残った。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_broken_shine',
    conditions: { s1: 'mod_broken', s4: 'pred_shine' },
    resultText: '壊れた炎が書庫に輝いている。明滅する光が本の背表紙を照らしたり消したり。読めそうで読めない題名がもどかしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_broken_rain_down',
    conditions: { s1: 'mod_broken', s4: 'pred_rain_down' },
    resultText: '壊れた炎が書庫に降り注いでいる。灰が雪のように積もり、足首まで埋まる。吸い込んだ煤で喉が焼けた。書架の本はすべて背表紙だけの抜け殻だった。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p23_broken_dance',
    conditions: { s1: 'mod_broken', s4: 'pred_dance' },
    resultText: '壊れた炎が書庫に踊っている。消えかけの火がふらふらと揺れる。踊りというより痙攣だ。もうすぐ止まる。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_broken_melt',
    conditions: { s1: 'mod_broken', s4: 'pred_melt' },
    resultText: '壊れた炎が書庫に溶けている。蝋燭が崩れた跡。蝋の水たまりの中に、半分焼けた栞が埋まっていた。',
    damage: 0,
    quill: 3,
    rewardItems: [{ id: 'item_p23_broken_melt', name: '焦げた栞', description: '蝋に埋まっていた栞。半分焼けて読めない', sellPrice: 4 }]
  },
  {
    id: 'p23_broken_laugh',
    conditions: { s1: 'mod_broken', s4: 'pred_laugh' },
    resultText: '壊れた炎が書庫に笑っている。ひゅう、ひゅうと息のような音。笑っているのか泣いているのかわからない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_broken_wait',
    conditions: { s1: 'mod_broken', s4: 'pred_wait' },
    resultText: '壊れた炎が書庫に待っている。燭台の上で最後の火が震えている。薪を、と言いたげだ。',
    damage: 0,
    quill: 3
  },

  // === 屈強な × 各述語 ===
  {
    id: 'p23_mighty_whisper',
    conditions: { s1: 'mod_mighty', s4: 'pred_whisper' },
    resultText: '屈強な炎が書庫に囁いている。大火の気配。まだ声を潜めているが、本棚が汗をかくように湿っている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p23_mighty_sleep',
    conditions: { s1: 'mod_mighty', s4: 'pred_sleep' },
    resultText: '屈強な炎が書庫に眠っている。炉の中で巨大な火が丸くなっている。寝息のような熱風が本のページを乾かしていく。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_mighty_sing',
    conditions: { s1: 'mod_mighty', s4: 'pred_sing' },
    resultText: '屈強な炎が書庫に歌っている。重低音が壁を震わせる。書架が倒れそうだ。本が棚から滑り落ちる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_mighty_entangle',
    conditions: { s1: 'mod_mighty', s4: 'pred_entangle' },
    resultText: '屈強な炎が書庫に絡みついている。太い火の腕が柱を抱き締めている。木材が軋む。書庫の骨組みが歪み始めた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p23_mighty_flee',
    conditions: { s1: 'mod_mighty', s4: 'pred_flee' },
    resultText: '屈強な炎が書庫を逃げていく。壁を突き破って火柱が飛び出した。書庫に大穴が空いたが、中の本は無事だった。',
    damage: 2,
    quill: 4,
    rewardItems: [{ id: 'item_p23_mighty_flee', name: '壁の破片', description: '炎が突き破った壁の一部。まだ温かい', sellPrice: 5 }]
  },
  {
    id: 'p23_mighty_shine',
    conditions: { s1: 'mod_mighty', s4: 'pred_shine' },
    resultText: '屈強な炎が書庫に輝いている。まぶしすぎて本の文字が見えない。書庫にいるのに何も読めない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p23_mighty_rain_down',
    conditions: { s1: 'mod_mighty', s4: 'pred_rain_down' },
    resultText: '屈強な炎が書庫に降り注いでいる。天井が抜け、火の柱が何本も落ちてくる。書庫が溶鉱炉になった。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p23_mighty_dance',
    conditions: { s1: 'mod_mighty', s4: 'pred_dance' },
    resultText: '屈強な炎が書庫に踊っている。地響きを立てて火柱が跳ねる。書架が薙ぎ倒される。豪快すぎる。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p23_mighty_melt',
    conditions: { s1: 'mod_mighty', s4: 'pred_melt' },
    resultText: '屈強な炎が書庫に溶けている。火が重力に負けて床に広がっている。溶岩のような熱が足元を這う。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p23_mighty_laugh',
    conditions: { s1: 'mod_mighty', s4: 'pred_laugh' },
    resultText: '屈強な炎が書庫に笑っている。ごうごうと炉が哄笑する。窓ガラスが震え、本棚から埃が舞い上がる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_mighty_wait',
    conditions: { s1: 'mod_mighty', s4: 'pred_wait' },
    resultText: '屈強な炎が書庫に待っている。暖炉の中で巨大な火が静かに構えている。薪を投げ込めば大火になる。投げ込まなければ、ただ温かい。',
    damage: 1,
    quill: 4
  },

  // === 凍てついた × 各述語 ===
  {
    id: 'p23_frozen_whisper',
    conditions: { s1: 'mod_frozen', s4: 'pred_whisper' },
    resultText: '凍てついた炎が書庫に囁いている。青い火が静かに揺れ、吐息のような冷気を吐く。本のページが霜で覆われていく。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p23_frozen_sleep',
    conditions: { s1: 'mod_frozen', s4: 'pred_sleep' },
    resultText: '凍てついた炎が書庫に眠っている。氷の中に封じられた火が青白く光っている。溶けない。燃えない。ただ在る。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_frozen_sing',
    conditions: { s1: 'mod_frozen', s4: 'pred_sing' },
    resultText: '凍てついた炎が書庫に歌っている。きいん、と耳鳴りのような音。書架のインクが凍り、文字が本から剥がれ落ちる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_frozen_entangle',
    conditions: { s1: 'mod_frozen', s4: 'pred_entangle' },
    resultText: '凍てついた炎が書庫に絡みついている。氷の火が樹氷のように書架を覆っている。美しいが、本はもう開けない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_frozen_flee',
    conditions: { s1: 'mod_frozen', s4: 'pred_flee' },
    resultText: '凍てついた炎が書庫を逃げていく。青い火が床に霜の道を残しながら去っていく。本の表紙が凍りついている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p23_frozen_shine',
    conditions: { s1: 'mod_frozen', s4: 'pred_shine' },
    resultText: '凍てついた炎が書庫に輝いている。青白い光がプリズムのように分かれ、書架に虹を映している。冷たい虹だ。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p23_frozen_shine', name: '冷たい虹', description: '凍った炎が作った虹の欠片。触ると指先が痺れる', sellPrice: 9 }]
  },
  {
    id: 'p23_frozen_rain_down',
    conditions: { s1: 'mod_frozen', s4: 'pred_rain_down' },
    resultText: '凍てついた炎が書庫に降り注いでいる。青い火の結晶が霰のように降る。本が凍り、ページが開かなくなる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_frozen_dance',
    conditions: { s1: 'mod_frozen', s4: 'pred_dance' },
    resultText: '凍てついた炎が書庫に踊っている。氷の火がくるくると回り、床に霜の紋様を描く。幾何学的で、美しい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p23_frozen_melt',
    conditions: { s1: 'mod_frozen', s4: 'pred_melt' },
    resultText: '凍てついた炎が書庫で溶けている。青白い水が書架を伝い落ち、床に薄い氷の膜を張る。足を滑らせて本棚に手をつくと、指先のインクが本に移った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p23_frozen_laugh',
    conditions: { s1: 'mod_frozen', s4: 'pred_laugh' },
    resultText: '凍てついた炎が書庫に笑っている。ぴき、ぴきと氷が割れる音。笑うたびに書架に亀裂が走る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p23_frozen_wait',
    conditions: { s1: 'mod_frozen', s4: 'pred_wait' },
    resultText: '凍てついた炎が書庫に待っている。入口の床に青い火が灯っている。踏めば凍る。避ければ通れるが、本棚も凍っている。',
    damage: 2,
    quill: 3
  },

  // === 透き通った × 各述語 ===
  {
    id: 'p23_clear_whisper',
    conditions: { s1: 'mod_clear', s4: 'pred_whisper' },
    resultText: '透き通った炎が書庫に囁いている。ほとんど見えない火が本の内容を音読している。声だけが書架に響く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_clear_sleep',
    conditions: { s1: 'mod_clear', s4: 'pred_sleep' },
    resultText: '透き通った炎が書庫に眠っている。空気が揺らいでいる場所がある。よく見ると、透明な火が丸くなって寝ている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_clear_sing',
    conditions: { s1: 'mod_clear', s4: 'pred_sing' },
    resultText: '透き通った炎が書庫に歌っている。見えない火が澄んだ音を立てる。書庫全体が楽器のように共鳴している。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p23_clear_entangle',
    conditions: { s1: 'mod_clear', s4: 'pred_entangle' },
    resultText: '透き通った炎が書庫に絡みついている。陽炎のような揺らぎが本棚を包んでいる。温かいが、何も燃えない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_clear_flee',
    conditions: { s1: 'mod_clear', s4: 'pred_flee' },
    resultText: '透き通った炎が書庫を逃げていく。空気の揺らぎが窓へ向かって流れた。去った後、書庫がほんの少し寒くなった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_clear_shine',
    conditions: { s1: 'mod_clear', s4: 'pred_shine' },
    resultText: '透き通った炎が書庫に輝いている。光源が見えないのに書庫が明るい。本の文字がどれも鮮明に読める。理想的な灯りだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p23_clear_shine', name: '透明な灯火', description: '見えない炎。持っているだけで手元が明るくなる', sellPrice: 12 }]
  },
  {
    id: 'p23_clear_rain_down',
    conditions: { s1: 'mod_clear', s4: 'pred_rain_down' },
    resultText: '透き通った炎が書庫に降り注いでいる。温かな空気が天井から流れ落ちる。本のページが乾いて、保存状態が良くなった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_clear_dance',
    conditions: { s1: 'mod_clear', s4: 'pred_dance' },
    resultText: '透き通った炎が書庫に踊っている。影だけが壁に映って踊る。火は見えないのに、影だけが舞っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_clear_melt',
    conditions: { s1: 'mod_clear', s4: 'pred_melt' },
    resultText: '透き通った炎が書庫に溶けている。空気に溶けた火が書庫全体をほんのり温めている。どこにいても温かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_clear_laugh',
    conditions: { s1: 'mod_clear', s4: 'pred_laugh' },
    resultText: '透き通った炎が書庫に笑っている。どこからか笑い声が聞こえる。姿は見えないが、機嫌がいいらしい。本の間から温もりが漏れる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_clear_wait',
    conditions: { s1: 'mod_clear', s4: 'pred_wait' },
    resultText: '透き通った炎が書庫に待っている。見えないが、あそこに何かがいる。空気の揺らぎ。手を伸ばすと温かかった。',
    damage: 0,
    quill: 4
  },

  // === 呪われた × 各述語 ===
  {
    id: 'p23_cursed_whisper',
    conditions: { s1: 'mod_cursed', s4: 'pred_whisper' },
    resultText: '呪われた炎が書庫に囁いている。紫の火が禁書の呪文を読み上げている。聞いてはいけない。だが耳を塞いでも聞こえる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p23_cursed_sleep',
    conditions: { s1: 'mod_cursed', s4: 'pred_sleep' },
    resultText: '呪われた炎が書庫に眠っている。黒い焔が燭台の上で微動だにしない。近くの本を開くと、全ページが同じ一文で埋め尽くされていた。「起こすな」。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p23_cursed_sing',
    conditions: { s1: 'mod_cursed', s4: 'pred_sing' },
    resultText: '呪われた炎が書庫に歌っている。不協和音が書架を震わせる。本の文字が書き変わっていく。元に戻せない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p23_cursed_entangle',
    conditions: { s1: 'mod_cursed', s4: 'pred_entangle' },
    resultText: '呪われた炎が書庫に絡みついている。黒い火の蔦が書架を締め上げ、本の内容を書き換えている。禁書が増殖している。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_cursed_flee',
    conditions: { s1: 'mod_cursed', s4: 'pred_flee' },
    resultText: '呪われた炎が書庫を逃げていく。紫の火が這うように去っていく。通った場所の本が全て白紙になっている。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_cursed_shine',
    conditions: { s1: 'mod_cursed', s4: 'pred_shine' },
    resultText: '呪われた炎が書庫に輝いている。紫の光に照らされた本の文字が浮かび上がる。読んではいけない知識だった。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p23_cursed_shine', name: '禁忌の頁', description: '呪いの光に浮かんだ知識。読むと頭痛がする', sellPrice: 7 }]
  },
  {
    id: 'p23_cursed_rain_down',
    conditions: { s1: 'mod_cursed', s4: 'pred_rain_down' },
    resultText: '呪われた炎が書庫に降り注いでいる。黒い火の雨が本を汚していく。触れた本の題名が消え、代わりに呪詛が浮かぶ。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p23_cursed_dance',
    conditions: { s1: 'mod_cursed', s4: 'pred_dance' },
    resultText: '呪われた炎が書庫に踊っている。黒い火が円を描いて回る。魔法陣だ。本棚が床から浮き始めた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p23_cursed_melt',
    conditions: { s1: 'mod_cursed', s4: 'pred_melt' },
    resultText: '呪われた炎が書庫に溶けている。黒い液体が書架を伝い、本に染み込んでいく。汚染された本は二度と読めない。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p23_cursed_laugh',
    conditions: { s1: 'mod_cursed', s4: 'pred_laugh' },
    resultText: '呪われた炎が書庫に笑っている。嘲るような哄笑。笑い声を聞いた本の文字が震え、紙面から滴り落ちる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p23_cursed_wait',
    conditions: { s1: 'mod_cursed', s4: 'pred_wait' },
    resultText: '呪われた炎が書庫に待っている。禁書の棚の前に紫の火が灯っている。罠か、それとも道標か。どちらにしても嫌な予感がする。',
    damage: 2,
    quill: 3
  },

  // === 眠い × 各述語 ===
  {
    id: 'p23_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s4: 'pred_whisper' },
    resultText: '眠い炎が書庫に囁いている。うとうとしながら何か呟いている。寝言だ。本の題名を読み上げているらしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_sleepy_sleep',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sleep' },
    resultText: '眠い炎が書庫に眠っている。完全に寝ている。本を枕にして。触っても温くない。深い眠りだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sing' },
    resultText: '眠い炎が書庫に歌っている。子守唄のような炎の揺らぎ。聞いていると瞼が重くなる。本を読む気力が消えた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p23_sleepy_entangle',
    conditions: { s1: 'mod_sleepy', s4: 'pred_entangle' },
    resultText: '眠い炎が書庫に絡みついている。温い火がだらりと書架にもたれかかっている。一緒にうたた寝に誘われそうだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s4: 'pred_flee' },
    resultText: '眠い炎が書庫を逃げていく。のそのそと床を這い、棚の下に潜り込んだ。逃げたというより、寝床を探しただけだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s4: 'pred_shine' },
    resultText: '眠い炎が書庫に輝いている。ぼんやりした光。夜灯のような柔らかさ。読書にはちょうどいい明るさだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_sleepy_rain_down',
    conditions: { s1: 'mod_sleepy', s4: 'pred_rain_down' },
    resultText: '眠い炎が書庫に降り注いでいる。温い光の粒がゆっくり降りてくる。蛍のようだ。書庫が眠りに包まれていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p23_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s4: 'pred_dance' },
    resultText: '眠い炎が書庫に踊っている。ゆらゆらと左右に揺れる。踊りというより、舟を漕いでいるだけだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s4: 'pred_melt' },
    resultText: '眠い炎が書庫に溶けている。蝋燭が崩れるように火がとろけていく。温い蝋の匂い。書庫が微睡みに沈む。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p23_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s4: 'pred_laugh' },
    resultText: '眠い炎が書庫に笑っている。寝ぼけた笑い声。夢の中で何か面白いことがあったらしい。つられて欠伸が出た。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p23_sleepy_wait',
    conditions: { s1: 'mod_sleepy', s4: 'pred_wait' },
    resultText: '眠い炎が書庫に待っている。半分目を閉じたまま。待っているのか眠っているのか、本人にもわかっていなさそうだ。',
    damage: 0,
    quill: 3
  },
];
