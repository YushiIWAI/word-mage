// 霧の湖: [修飾語*] 子猫が 湖に [述語*]
import type { Outcome } from '../../../engine/types';

export const nodeP18Outcomes: Outcome[] = [
  // === 元テキスト: 凍てついた子猫が湖に浮かんでいる ===
  {
    id: 'p18_orig',
    conditions: { s1: 'mod_frozen', s4: 'orig_p18_pred' },
    resultText: '凍てついた子猫が湖に浮かんでいる。氷の彫刻のような猫が水面を漂っている。中でまだ息をしている。手で温めると、氷が薄くなった。',
    damage: 1,
    quill: 3
  },

  // === 小さな × 述語11 ===
  {
    id: 'p18_small_whisper',
    conditions: { s1: 'mod_small', s4: 'pred_whisper' },
    resultText: '小さな子猫が湖に囁いている。水面に顔を近づけて、鈴のような声で何か話しかけている。湖が微かに波紋を返した。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_small_sleep',
    conditions: { s1: 'mod_small', s4: 'pred_sleep' },
    resultText: '小さな子猫が湖に眠っている。蓮の葉の上で丸くなっている。手のひらに乗るほど小さい。起こさないように通り過ぎた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_small_sing',
    conditions: { s1: 'mod_small', s4: 'pred_sing' },
    resultText: '小さな子猫が湖に歌っている。細い声が水面を撫でている。魚が一匹、歌に誘われて跳ねた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_small_entangle',
    conditions: { s1: 'mod_small', s4: 'pred_entangle' },
    resultText: '小さな子猫が湖に絡みついている。水草に前足が絡まって、もがいている。ほどいてやった。ずぶ濡れの猫が震えている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_small_flee',
    conditions: { s1: 'mod_small', s4: 'pred_flee' },
    resultText: '小さな子猫が湖に逃げていく。水面を蹴って駆けていく。足跡が波紋になって広がる。追いつけなかった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_small_shine',
    conditions: { s1: 'mod_small', s4: 'pred_shine' },
    resultText: '小さな子猫が湖に輝く。毛先が露のように光っている。湖面に星がもう一つ増えたように見える。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p18_small_shine', name: '湖の星粒', description: '猫の毛先についていた露。瓶に入れるとまだ光る', sellPrice: 8 }]
  },
  {
    id: 'p18_small_rain_down',
    conditions: { s1: 'mod_small', s4: 'pred_rain_down' },
    resultText: '小さな子猫が湖に降り注いでいる。霧の中から、手のひらサイズの猫が次々と降ってくる。湖面がぱしゃぱしゃと鳴っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_small_dance',
    conditions: { s1: 'mod_small', s4: 'pred_dance' },
    resultText: '小さな子猫が湖に踊っている。水面をくるくると回っている。足が濡れるのも構わず、楽しそうだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_small_melt',
    conditions: { s1: 'mod_small', s4: 'pred_melt' },
    resultText: '小さな子猫が湖に溶けている。輪郭がぼやけて湖水と混ざり合っていく。最後に耳の形だけが残り、それも消えた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_small_laugh',
    conditions: { s1: 'mod_small', s4: 'pred_laugh' },
    resultText: '小さな子猫が湖に笑っている。にゃあにゃあと声を上げて、水面に映る自分の顔を見ている。ただ遊んでいるだけだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_small_wait',
    conditions: { s1: 'mod_small', s4: 'pred_wait' },
    resultText: '小さな子猫が湖に待っている。岸辺に座って、じっとこちらを見ている。近づくと擦り寄ってきた。誰かを待っていたらしい。',
    damage: 0,
    quill: 4
  },

  // === 優しい × 述語11 ===
  {
    id: 'p18_gentle_whisper',
    conditions: { s1: 'mod_gentle', s4: 'pred_whisper' },
    resultText: '優しい子猫が湖に囁いている。水面に鼻先をつけて、そっと何か伝えている。湖の色が少しだけ明るくなった気がする。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_gentle_sleep',
    conditions: { s1: 'mod_gentle', s4: 'pred_sleep' },
    resultText: '優しい子猫が湖に眠っている。水辺の草の上で穏やかに寝息を立てている。近くにいると心が落ち着く。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_gentle_sing',
    conditions: { s1: 'mod_gentle', s4: 'pred_sing' },
    resultText: '優しい子猫が湖に歌っている。喉を鳴らすような旋律が水面に広がっていく。湖全体が子守唄に包まれている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p18_gentle_sing', name: '猫の子守唄', description: '聴くと瞼が重くなる。眠くはないのに安心する', sellPrice: 8 }]
  },
  {
    id: 'p18_gentle_entangle',
    conditions: { s1: 'mod_gentle', s4: 'pred_entangle' },
    resultText: '優しい子猫が湖に絡みついている。水草を体に巻きつけて、花冠のようにしている。遊びの一環らしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_gentle_flee',
    conditions: { s1: 'mod_gentle', s4: 'pred_flee' },
    resultText: '優しい子猫が湖に逃げていく。振り返りながら走っている。追ってほしいのか、逃げたいのか。湖の霧に消えた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_gentle_shine',
    conditions: { s1: 'mod_gentle', s4: 'pred_shine' },
    resultText: '優しい子猫が湖に輝く。柔らかな光が毛並みから滲み出ている。湖面が温かな色に染まった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_gentle_rain_down',
    conditions: { s1: 'mod_gentle', s4: 'pred_rain_down' },
    resultText: '優しい子猫が湖に降り注いでいる。綿毛のような猫が霧の中からふわふわと降ってくる。湖面に着くと波紋もなく溶けた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_gentle_dance',
    conditions: { s1: 'mod_gentle', s4: 'pred_dance' },
    resultText: '優しい子猫が湖に踊っている。前足で水面を軽く叩きながら、ゆっくり回っている。穏やかな踊りだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_gentle_melt',
    conditions: { s1: 'mod_gentle', s4: 'pred_melt' },
    resultText: '優しい子猫が湖に溶けている。湖水に溶けていく表情が穏やかだ。水面全体が優しい温度になった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_gentle_laugh',
    conditions: { s1: 'mod_gentle', s4: 'pred_laugh' },
    resultText: '優しい子猫が湖に笑っている。目を細めて、にこにこしている。何がおかしいのかはわからない。つられて笑った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_gentle_wait',
    conditions: { s1: 'mod_gentle', s4: 'pred_wait' },
    resultText: '優しい子猫が湖に待っている。尻尾をゆらゆら揺らして、辛抱強くこちらを見ている。急かさない。',
    damage: 0,
    quill: 4
  },

  // === 燃え盛る × 述語11 ===
  {
    id: 'p18_fire_whisper',
    conditions: { s1: 'mod_fire', s4: 'pred_whisper' },
    resultText: '燃え盛る子猫が湖に囁いている。炎をまとった猫が水面に顔を近づけている。囁きのたびに蒸気が立つ。湖が煮えかけている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_fire_sleep',
    conditions: { s1: 'mod_fire', s4: 'pred_sleep' },
    resultText: '燃え盛る子猫が湖に眠っている。炎をまとったまま水辺に丸くなり、周囲の水が蒸発して地面が露出している。猫の寝息に合わせて炎が強弱する。湖がじわじわ縮んでい���。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_fire_sing',
    conditions: { s1: 'mod_fire', s4: 'pred_sing' },
    resultText: '燃え盛る子猫が湖に歌っている。炎の旋律が水面を焦がしていく。歌が高まるたび湖が縮む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_fire_entangle',
    conditions: { s1: 'mod_fire', s4: 'pred_entangle' },
    resultText: '燃え盛る子猫が湖に絡みついている。水草に絡んだ炎の猫が、もがくたびに水中に火の尾を引く。湖がぬるくなっていく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_fire_flee',
    conditions: { s1: 'mod_fire', s4: 'pred_flee' },
    resultText: '燃え盛る子猫が湖に逃げていく。水面を走ると火の道ができた。道は一瞬で消えたが、湖面が揺れている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_fire_shine',
    conditions: { s1: 'mod_fire', s4: 'pred_shine' },
    resultText: '燃え盛る子猫が湖に輝く。炎と湖面が共鳴して、猫が太陽のように見える。目を開けていられない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_fire_rain_down',
    conditions: { s1: 'mod_fire', s4: 'pred_rain_down' },
    resultText: '燃え盛る子猫が湖に降り注いでいる。火の玉のような猫が空から落ちてくる。着水のたびに爆発的な蒸気が上がる。熱気に煽られた岩で膝を打ち、衣に火がついた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p18_fire_dance',
    conditions: { s1: 'mod_fire', s4: 'pred_dance' },
    resultText: '燃え盛る子猫が湖に踊っている。水面で炎の輪を描きながら回転している。湖が温泉になりかけている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_fire_melt',
    conditions: { s1: 'mod_fire', s4: 'pred_melt' },
    resultText: '燃え盛る子猫が湖に溶けている。炎が湖水と混ざり、湖全体がオレンジ色に染まった。熱い。足を浸けたら火傷した。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p18_fire_laugh',
    conditions: { s1: 'mod_fire', s4: 'pred_laugh' },
    resultText: '燃え盛る子猫が湖に笑っている。ぱちぱちと弾ける炎が笑い声に聞こえる。愉快そうだ。湖が煮立っている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_fire_wait',
    conditions: { s1: 'mod_fire', s4: 'pred_wait' },
    resultText: '燃え盛る子猫が湖に待っている。岸辺に座り、尻尾で地面を叩くたびに火花が散る。焦げた草の円が少しずつ広がっている。こちらに気づくと、嬉しそうに炎を膨らませた。',
    damage: 2,
    quill: 3
  },

  // === 堅い × 述語11 ===
  {
    id: 'p18_hard_whisper',
    conditions: { s1: 'mod_hard', s4: 'pred_whisper' },
    resultText: '堅い子猫が湖に囁いている。陶器の猫が水面に顔を寄せている。声は出ないが、口がかすかに動いている。湖だけが聞いている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_hard_sleep',
    conditions: { s1: 'mod_hard', s4: 'pred_sleep' },
    resultText: '堅い子猫が湖に眠っている。石像の猫が岸辺に沈みかけている。苔が生えている。ずいぶん長い眠りらしい。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_hard_sing',
    conditions: { s1: 'mod_hard', s4: 'pred_sing' },
    resultText: '堅い子猫が湖に歌っている。陶器がきぃきぃと軋む音が旋律になっている。不思議と耳に残る歌だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_hard_entangle',
    conditions: { s1: 'mod_hard', s4: 'pred_entangle' },
    resultText: '堅い子猫が湖に絡みついている。水草が石の猫に巻きついて動けなくなっている。猫は気にしていない。石だから。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_hard_flee',
    conditions: { s1: 'mod_hard', s4: 'pred_flee' },
    resultText: '堅い子猫が湖に逃げていく。ごとごとと鈍い音を立てて水辺を走っていく。重すぎてすぐ沈んだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_hard_shine',
    conditions: { s1: 'mod_hard', s4: 'pred_shine' },
    resultText: '堅い子猫が湖に輝く。釉薬の表面が光を反射している。湖底まで光が届いた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_hard_rain_down',
    conditions: { s1: 'mod_hard', s4: 'pred_rain_down' },
    resultText: '堅い子猫が湖に降り注いでいる。石の猫が空から落ちてくる。着水のたびに湖が揺れ、水柱が上がる。肩を掠めた一体で骨がきしみ、血が滲んだ。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p18_hard_dance',
    conditions: { s1: 'mod_hard', s4: 'pred_dance' },
    resultText: '堅い子猫が湖に踊っている。陶器の足がかちかちと水面を叩いている。割れそうで割れない。意外に軽やかだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_hard_melt',
    conditions: { s1: 'mod_hard', s4: 'pred_melt' },
    resultText: '堅い子猫が湖に溶けている。石が水に溶けるはずがない。なのに輪郭がぼやけていく。湖底に猫の形の染みだけが残った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p18_hard_laugh',
    conditions: { s1: 'mod_hard', s4: 'pred_laugh' },
    resultText: '堅い子猫が湖に笑っている。招き猫の笑顔だ。塗料が剥げかけている。それでも笑っている。少し不気味だ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_hard_wait',
    conditions: { s1: 'mod_hard', s4: 'pred_wait' },
    resultText: '堅い子猫が湖に待っている。岸辺の石像が水面を見つめている。いつからここにいるのか。苔の厚さが年月を語っている。',
    damage: 1,
    quill: 3
  },

  // === 鋭い × 述語11 ===
  {
    id: 'p18_sharp_whisper',
    conditions: { s1: 'mod_sharp', s4: 'pred_whisper' },
    resultText: '鋭い子猫が湖に囁いている。硝子の爪を持つ猫が、水面に鋭い声を落としている。波紋が刃物のように広がった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_sharp_sleep',
    conditions: { s1: 'mod_sharp', s4: 'pred_sleep' },
    resultText: '鋭い子猫が湖に眠っている。爪を立てたまま寝ている。水草がずたずたに裂かれている。寝相が悪いらしい。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_sharp_sing',
    conditions: { s1: 'mod_sharp', s4: 'pred_sing' },
    resultText: '鋭い子猫が湖に歌っている。高く尖った声が水面を切り裂いている。湖面に亀裂が走った——ように見えた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_sharp_entangle',
    conditions: { s1: 'mod_sharp', s4: 'pred_entangle' },
    resultText: '鋭い子猫が湖に絡みついている。水草に爪を引っ掛けて暴れている。水草が千切れていく。解放されると、こちらに爪を向けた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_sharp_flee',
    conditions: { s1: 'mod_sharp', s4: 'pred_flee' },
    resultText: '鋭い子猫が湖に逃げていく。水面を蹴る爪が水を切って、鋭い飛沫を飛ばす。頬を掠めた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_sharp_shine',
    conditions: { s1: 'mod_sharp', s4: 'pred_shine' },
    resultText: '鋭い子猫が湖に輝く。爪の先が光を集めて、レンズのように一点を灼いている。水面に焦げ跡ができた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_sharp_rain_down',
    conditions: { s1: 'mod_sharp', s4: 'pred_rain_down' },
    resultText: '鋭い子猫が湖に降り注いでいる。爪を立てた猫が霧の中から降ってくる。腕と頬を爪で裂かれ、血がぽたぽた垂れた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p18_sharp_dance',
    conditions: { s1: 'mod_sharp', s4: 'pred_dance' },
    resultText: '鋭い子猫が湖に踊っている。爪先で水面を引っ掻きながら回転している。水面に模様が刻まれていく。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_sharp_melt',
    conditions: { s1: 'mod_sharp', s4: 'pred_melt' },
    resultText: '鋭い子猫が湖に溶けている。最後まで残ったのは爪だった。湖底に光る破片が沈んでいく。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_sharp_laugh',
    conditions: { s1: 'mod_sharp', s4: 'pred_laugh' },
    resultText: '鋭い子猫が湖に笑っている。牙を見せて笑っている。笑い声が耳に刺さる。笑われている気がする。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_sharp_wait',
    conditions: { s1: 'mod_sharp', s4: 'pred_wait' },
    resultText: '鋭い子猫が湖に待っている。爪を研ぎながらこちらを見ている。獲物を待つ目だ。通り過ぎるのに勇気がいった。',
    damage: 2,
    quill: 3
  },

  // === 壊れた × 述語11 ===
  {
    id: 'p18_broken_whisper',
    conditions: { s1: 'mod_broken', s4: 'pred_whisper' },
    resultText: '壊れた子猫が湖に囁いている。ぬいぐるみの猫が水面に口をつけている。綿が濡れて声が出ない。それでも囁き続けている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_broken_sleep',
    conditions: { s1: 'mod_broken', s4: 'pred_sleep' },
    resultText: '壊れた子猫が湖に眠っている。綿の出たぬいぐるみが水辺に転がっている。誰かがここに置いていったのだろう。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_broken_sing',
    conditions: { s1: 'mod_broken', s4: 'pred_sing' },
    resultText: '壊れた子猫が湖に歌っている。ぬいぐるみの中のオルゴールが壊れかけの旋律を奏でている。同じところで止まり、また最初から。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p18_broken_sing', name: '壊れたオルゴール', description: '同じ三小節を繰り返す。直し方がわからない', sellPrice: 6 }]
  },
  {
    id: 'p18_broken_entangle',
    conditions: { s1: 'mod_broken', s4: 'pred_entangle' },
    resultText: '壊れた子猫が湖に絡みついている。ぬいぐるみの糸がほどけて水草と一体化している。どこまでが猫でどこからが湖かわからない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_broken_flee',
    conditions: { s1: 'mod_broken', s4: 'pred_flee' },
    resultText: '壊れた子猫が湖に逃げていく。綿を撒き散らしながら水面を転がっていく。追う気にならなかった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_broken_shine',
    conditions: { s1: 'mod_broken', s4: 'pred_shine' },
    resultText: '壊れた子猫が湖に輝く。ぬいぐるみの目のガラスビーズだけが光を返している。本体はぼろぼろだ。目だけが生きている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_broken_rain_down',
    conditions: { s1: 'mod_broken', s4: 'pred_rain_down' },
    resultText: '壊れた子猫が湖に降り注いでいる。綿と布切れが霧の中から降ってくる。湖面がぬいぐるみの残骸で埋まっていく。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_broken_dance',
    conditions: { s1: 'mod_broken', s4: 'pred_dance' },
    resultText: '壊れた子猫が湖に踊っている。片足が取れかけたぬいぐるみが、ぎこちなく回っている。風に揺られているだけかもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_broken_melt',
    conditions: { s1: 'mod_broken', s4: 'pred_melt' },
    resultText: '壊れた子猫が湖に溶けている。綿が水を吸って膨らみ、ゆっくり崩れていく。ぬいぐるみが湖に還っていく。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_broken_laugh',
    conditions: { s1: 'mod_broken', s4: 'pred_laugh' },
    resultText: '壊れた子猫が湖に笑っている。ぬいぐるみの縫い目が裂けて、笑っているように見える。笑顔が縫い直せない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_broken_wait',
    conditions: { s1: 'mod_broken', s4: 'pred_wait' },
    resultText: '壊れた子猫が湖に待っている。岸辺にぬいぐるみが座っている。持ち主を待っているのだろう。もう来ないだろう。',
    damage: 0,
    quill: 4
  },

  // === 屈強な × 述語11 ===
  {
    id: 'p18_mighty_whisper',
    conditions: { s1: 'mod_mighty', s4: 'pred_whisper' },
    resultText: '屈強な子猫が湖に囁いている。虎のような体格の猫が水面に太い声を落としている。地響きのような囁きだ。魚が逃げた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_mighty_sleep',
    conditions: { s1: 'mod_mighty', s4: 'pred_sleep' },
    resultText: '屈強な子猫が湖に眠っている。巨体の猫が岸辺を占領して寝ている。いびきで水面が震えている。起こしたくない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_mighty_sing',
    conditions: { s1: 'mod_mighty', s4: 'pred_sing' },
    resultText: '屈強な子猫が湖に歌っている。腹の底から響く低い声が湖面を振動させている。意外と上手い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p18_mighty_entangle',
    conditions: { s1: 'mod_mighty', s4: 'pred_entangle' },
    resultText: '屈強な子猫が湖に絡みついている。水草に絡まっているが、力任せに引きちぎっている。湖底が掘り返されていく。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_mighty_flee',
    conditions: { s1: 'mod_mighty', s4: 'pred_flee' },
    resultText: '屈強な子猫が湖に逃げていく。水面を豪快に蹴って走っていく。津波のような波が岸を洗った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_mighty_shine',
    conditions: { s1: 'mod_mighty', s4: 'pred_shine' },
    resultText: '屈強な子猫が湖に輝く。筋肉質な猫が日光を浴びて毛並みを光らせている。立派だ。見惚れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_mighty_rain_down',
    conditions: { s1: 'mod_mighty', s4: 'pred_rain_down' },
    resultText: '屈強な子猫が湖に降り注いでいる。巨大な猫が空から落ちてくる。着水のたびに湖が溢れる。岸が浸水した。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p18_mighty_dance',
    conditions: { s1: 'mod_mighty', s4: 'pred_dance' },
    resultText: '屈強な子猫が湖に踊っている。力強い足踏みで水柱が上がる。踊りというより水遊びに近い。全身びしょ濡れだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p18_mighty_melt',
    conditions: { s1: 'mod_mighty', s4: 'pred_melt' },
    resultText: '屈強な子猫が湖に溶けている。あの虎のような体が湖水に混ざり、水が筋肉質に盛り上がる。波が立つたび獣の力が伝わってくる。この湖で泳ぐのはやめた方がいい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_mighty_laugh',
    conditions: { s1: 'mod_mighty', s4: 'pred_laugh' },
    resultText: '屈強な子猫が湖に笑っている。腹を抱えて笑っている。体が大きいぶん、笑い声も大きい。湖面が揺れている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_mighty_wait',
    conditions: { s1: 'mod_mighty', s4: 'pred_wait' },
    resultText: '屈強な子猫が湖に待っている。巨体が道を塞いでいる。横を通ろうとしたら、ごろんと転がって場所を空けた。',
    damage: 1,
    quill: 3
  },

  // === 凍てついた × 述語11 ===
  {
    id: 'p18_frozen_whisper',
    conditions: { s1: 'mod_frozen', s4: 'pred_whisper' },
    resultText: '凍てついた子猫が湖に囁いている。氷の息が水面を撫でるたび、湖面に霜が広がっていく。囁きが凍っている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_frozen_sleep',
    conditions: { s1: 'mod_frozen', s4: 'pred_sleep' },
    resultText: '凍てついた子猫が湖に眠っている。氷漬けの猫が水底に沈んでいる。目を閉じたまま動かない。手を伸ばしたが届かなかった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_frozen_sing',
    conditions: { s1: 'mod_frozen', s4: 'pred_sing' },
    resultText: '凍てついた子猫が湖に歌っている。凍った喉から硝子の音色が漏れている。湖面が歌に合わせて凍っていく。美しい。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p18_frozen_sing', name: '氷の音色', description: '瓶に入れておくと、寒い夜に微かに鳴る', sellPrice: 10 }]
  },
  {
    id: 'p18_frozen_entangle',
    conditions: { s1: 'mod_frozen', s4: 'pred_entangle' },
    resultText: '凍てついた子猫が湖に絡みついている。水草が猫ごと凍りついて、氷の彫刻になっている。動けない。触ると指が貼りついた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_frozen_flee',
    conditions: { s1: 'mod_frozen', s4: 'pred_flee' },
    resultText: '凍てついた子猫が湖に逃げていく。氷の足で水面を走る。通った跡が凍って道になった。その道を渡れた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_frozen_shine',
    conditions: { s1: 'mod_frozen', s4: 'pred_shine' },
    resultText: '凍てついた子猫が湖に輝く。氷の毛並みがプリズムのように光を分解している。湖面に虹が映っている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p18_frozen_rain_down',
    conditions: { s1: 'mod_frozen', s4: 'pred_rain_down' },
    resultText: '凍てついた子猫が湖に降り注いでいる。氷の猫が霰のように降ってくる。湖面が砕けた氷で白く染まっていく。寒い。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_frozen_dance',
    conditions: { s1: 'mod_frozen', s4: 'pred_dance' },
    resultText: '凍てついた子猫が湖に踊っている。氷の足がスケートのように水面を滑っている。通った跡に模様が刻まれていく。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p18_frozen_melt',
    conditions: { s1: 'mod_frozen', s4: 'pred_melt' },
    resultText: '凍てついた子猫が湖に溶けている。氷が少しずつ解けて、猫の形が崩れていく。最後に温かい水だけが残った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_frozen_laugh',
    conditions: { s1: 'mod_frozen', s4: 'pred_laugh' },
    resultText: '凍てついた子猫が湖に笑っている。氷の表情が笑顔のまま固まっている。溶けても笑顔は変わらない。怖い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_frozen_wait',
    conditions: { s1: 'mod_frozen', s4: 'pred_wait' },
    resultText: '凍てついた子猫が湖に待っている。氷漬けのまま岸辺に立っている。春を待っているのかもしれない。',
    damage: 1,
    quill: 3
  },

  // === 透き通った × 述語11 ===
  {
    id: 'p18_clear_whisper',
    conditions: { s1: 'mod_clear', s4: 'pred_whisper' },
    resultText: '透き通った子猫が湖に囁いている。硝子のような猫が水面に声を落としている。声も透明で、何を言っているのか聞こえない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_clear_sleep',
    conditions: { s1: 'mod_clear', s4: 'pred_sleep' },
    resultText: '透き通った子猫が湖に眠っている。透明な猫が水中に沈んでいる。よく見ないとわからない。寝息だけが水面を揺らしている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_clear_sing',
    conditions: { s1: 'mod_clear', s4: 'pred_sing' },
    resultText: '透き通った子猫が湖に歌っている。澄んだ声が湖水と共鳴して、湖全体が楽器になっている。水底から光が昇ってきた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p18_clear_sing', name: '湖底の共鳴', description: '耳を澄ますと、まだ水の歌が聴こえる気がする', sellPrice: 12 }]
  },
  {
    id: 'p18_clear_entangle',
    conditions: { s1: 'mod_clear', s4: 'pred_entangle' },
    resultText: '透き通った子猫が湖に絡みついている。水草と猫の区別がつかない。透明な体が水中の景色と混ざり合っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_clear_flee',
    conditions: { s1: 'mod_clear', s4: 'pred_flee' },
    resultText: '透き通った子猫が湖に逃げていく。走っていく姿がだんだん見えなくなる。水と猫の境界が消えた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_clear_shine',
    conditions: { s1: 'mod_clear', s4: 'pred_shine' },
    resultText: '透き通った子猫が湖に輝く。光が猫の体を通り抜けて、湖底に猫の影だけが踊っている。美しい。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p18_clear_rain_down',
    conditions: { s1: 'mod_clear', s4: 'pred_rain_down' },
    resultText: '透き通った子猫が湖に降り注いでいる。透明な雨粒が猫の形をしている。湖面に落ちると見分けがつかなくなる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_clear_dance',
    conditions: { s1: 'mod_clear', s4: 'pred_dance' },
    resultText: '透き通った子猫が湖に踊っている。水面に波紋だけが生まれている。踊り手の姿は見えない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_clear_melt',
    conditions: { s1: 'mod_clear', s4: 'pred_melt' },
    resultText: '透き通った子猫が湖に溶けている。もともと透明だった猫が湖に溶けていく。何が変わったのかわからない。でも、もういない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_clear_laugh',
    conditions: { s1: 'mod_clear', s4: 'pred_laugh' },
    resultText: '透き通った子猫が湖に笑っている。姿は見えないのに、笑い声だけが水面から聞こえる。楽しそうだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_clear_wait',
    conditions: { s1: 'mod_clear', s4: 'pred_wait' },
    resultText: '透き通った子猫が湖に待っている。見えない猫が岸辺にいる気配がする。足元の草だけがわずかに凹んでいる。',
    damage: 0,
    quill: 4
  },

  // === 呪われた × 述語11 ===
  {
    id: 'p18_cursed_whisper',
    conditions: { s1: 'mod_cursed', s4: 'pred_whisper' },
    resultText: '呪われた子猫が湖に囁いている。禍々しい猫が水面に呪詛を落としている。湖水が黒く濁っていく。耳を塞いだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_cursed_sleep',
    conditions: { s1: 'mod_cursed', s4: 'pred_sleep' },
    resultText: '呪われた子猫が湖に眠っている。黒い猫が水辺で丸くなっている。三歩近づいたところで、昨夜見た悪夢が白昼のまま再生された。二歩で引き返した。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_cursed_sing',
    conditions: { s1: 'mod_cursed', s4: 'pred_sing' },
    resultText: '呪われた子猫が湖に歌っている。呪いの旋律が水面を這っていく。聴いた魚が腹を見せて浮いた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p18_cursed_entangle',
    conditions: { s1: 'mod_cursed', s4: 'pred_entangle' },
    resultText: '呪われた子猫が湖に絡みついている。黒い毛が水草のように湖底に根を張っている。猫が湖を呪っている。水が苦い。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_cursed_flee',
    conditions: { s1: 'mod_cursed', s4: 'pred_flee' },
    resultText: '呪われた子猫が湖に逃げていく。通った跡の水が腐っていく。逃げてくれて助かった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p18_cursed_shine',
    conditions: { s1: 'mod_cursed', s4: 'pred_shine' },
    resultText: '呪われた子猫が湖に輝く。不吉な紫の光が水面を照らしている。美しいが、見つめてはいけない気がする。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p18_cursed_rain_down',
    conditions: { s1: 'mod_cursed', s4: 'pred_rain_down' },
    resultText: '呪われた子猫が湖に降り注いでいる。呪いの猫が空から降ってくる。湖が穢れていく。水に触れた草が枯れた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p18_cursed_dance',
    conditions: { s1: 'mod_cursed', s4: 'pred_dance' },
    resultText: '呪われた子猫が湖に踊っている。黒い猫が水面をぐるぐると回り続けている。三日三晩踊っているらしい。足跡が湖面に呪いの紋様を描いている。助けたいが、触れたら伝染する。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p18_cursed_melt',
    conditions: { s1: 'mod_cursed', s4: 'pred_melt' },
    resultText: '呪われた子猫が湖に溶けている。黒い泥のように溶けていく。湖全体が呪われた。もう飲めない水だ。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p18_cursed_laugh',
    conditions: { s1: 'mod_cursed', s4: 'pred_laugh' },
    resultText: '呪われた子猫が湖に笑っている。けたけたと笑っている。何がおかしいのか。笑い声が頭に貼りつく。しばらく耳鳴りが止まなかった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p18_cursed_wait',
    conditions: { s1: 'mod_cursed', s4: 'pred_wait' },
    resultText: '呪われた子猫が湖に待っている。黒い猫がじっとこちらを見ている。目を合わせると動けなくなった。猫が近づいてくる。',
    damage: 2,
    quill: 3
  },

  // === 眠い × 述語11 ===
  {
    id: 'p18_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s4: 'pred_whisper' },
    resultText: '眠い子猫が湖に囁いている。半分閉じた目で水面に何か呟いている。声が途切れ途切れだ。自分でも何を言っているかわかっていない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_sleep',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sleep' },
    resultText: '眠い子猫が湖に眠っている。当然のように眠っている。寝息が穏やかだ。隣に座ったら、こちらも眠くなった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sing' },
    resultText: '眠い子猫が湖に歌っている。子守唄を歌いながら自分で眠くなっている。歌が遅くなって、止まった。寝た。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_entangle',
    conditions: { s1: 'mod_sleepy', s4: 'pred_entangle' },
    resultText: '眠い子猫が湖に絡みついている。水草に絡まったまま寝ている。ほどこうとしたが、しがみつかれた。毛布と間違えているらしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s4: 'pred_flee' },
    resultText: '眠い子猫が湖に逃げていく。ふらふらと走っていく。三歩で転んだ。起き上がって、また三歩。また転んだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s4: 'pred_shine' },
    resultText: '眠い子猫が湖に輝く。あくびをした拍子に、口の中から淡い光が漏れた。夢の光かもしれない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_sleepy_rain_down',
    conditions: { s1: 'mod_sleepy', s4: 'pred_rain_down' },
    resultText: '眠い子猫が湖に降り注いでいる。居眠りしている猫が空からぽとぽと落ちてくる。着水しても起きない。湖面に寝息が浮いている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p18_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s4: 'pred_dance' },
    resultText: '眠い子猫が湖に踊っている。ふらふらと揺れているだけだ。踊りというより寝ぼけているだけだ。足がもつれて水に落ちた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s4: 'pred_melt' },
    resultText: '眠い子猫が湖に溶けている。夢うつつのまま輪郭がぼやけていく。猫本人は気づいていない。夢の中ではまだ形がある。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p18_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s4: 'pred_laugh' },
    resultText: '眠い子猫が湖に笑っている。寝ながら笑っている。いい夢を見ているらしい。顔が幸せそうだ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p18_sleepy_wait',
    conditions: { s1: 'mod_sleepy', s4: 'pred_wait' },
    resultText: '眠い子猫が湖に待っている。目を細めてこちらを見ている。待っているのか、寝かけているのか。区別がつかない。',
    damage: 0,
    quill: 3
  }
];
