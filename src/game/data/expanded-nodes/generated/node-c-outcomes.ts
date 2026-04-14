// Auto-generated from node-c-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeCOutcomes: Outcome[] = [
  {
    id: 'c_orig_orig',
    conditions: { s2: 'orig_c_subj', s4: 'orig_c_pred' },
    resultText: '呪われた荊が街道を覆っている。黒い棘が石畳に食い込み、触れた者を離さない。強引にもぎ取って進む。',
    damage: 3,
    quill: 2
  },
  {
    id: 'c_kitten_cover',
    conditions: { s2: 'subj_kitten', s4: 'orig_c_pred' },
    resultText: '呪われた子猫が街道を覆っている。何十匹もの猫が道に伏せている。どの猫も同じ顔をしていて、拾った者が捨てられなくなるという。踏まないように進む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_snake_cover',
    conditions: { s2: 'subj_snake', s4: 'orig_c_pred' },
    resultText: '呪われた蛇が街道を覆っている。脱皮を繰り返して巨大化した蛇が、抜け殻ごと道を埋めている。皮を踏むと足がもつれる。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_c_snake_cover', name: '呪蛇の抜け殻', description: '踏むと足がもつれる。靴に巻くと逆に足取りが軽い', sellPrice: 10 }]
  },
  {
    id: 'c_dragon_cover',
    conditions: { s2: 'subj_dragon', s4: 'orig_c_pred' },
    resultText: '呪われた竜が街道を覆っている。暴走した守護竜が翼を広げて街道を塞いでいる。目に理性がない。迂回するしかない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'c_butterfly_cover',
    conditions: { s2: 'subj_butterfly', s4: 'orig_c_pred' },
    resultText: '呪われた蝶が街道を覆っている。追いかけると迷子になる蝶が、群れをなして視界を塞ぐ。目を閉じて歩き、何度も躓いた。膝が腫れている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_wind_cover',
    conditions: { s2: 'subj_wind', s4: 'orig_c_pred' },
    resultText: '呪われた風が街道を覆っている。帰り道を忘れさせる風が霧のように低く淀む。息を止めて駆け抜ける。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_flame_cover',
    conditions: { s2: 'subj_flame', s4: 'orig_c_pred' },
    resultText: '呪われた炎が街道を覆っている。燃やしたものの幻を映す炎が、かつての旅人たちの影を揺らめかせている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_ice_cover',
    conditions: { s2: 'subj_ice', s4: 'orig_c_pred' },
    resultText: '呪われた氷が街道を覆っている。溶けない氷が石畳を呑み込み、永遠の冬を広げている。滑りながら渡る。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_shadow_cover',
    conditions: { s2: 'subj_shadow', s4: 'orig_c_pred' },
    resultText: '呪われた影が街道を覆っている。触れたものを影に変える闇が、道を黒く塗りつぶしている。自分の影が引き摺られる感覚がある。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_c_shadow_cover', name: '影の切れ端', description: '誰のものでもない影。灯りに当てると震える', sellPrice: 8 }]
  },
  {
    id: 'c_song_cover',
    conditions: { s2: 'subj_song', s4: 'orig_c_pred' },
    resultText: '呪われた歌が街道を覆っている。頭から離れない旋律が霧のように漂い、正気を少しずつ削る。耳を塞いでも骨に響く。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_silence_cover',
    conditions: { s2: 'subj_silence', s4: 'orig_c_pred' },
    resultText: '呪われた沈黙が街道を覆っている。声を奪う静けさが道を満たしている。口を開いても音が出ない。足音だけが聞こえる。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_silence_cover', name: '沈黙の欠片', description: '握ると周囲の音が一瞬途切れる', sellPrice: 12 }]
  },
  {
    id: 'c_knight_cover',
    conditions: { s2: 'subj_knight', s4: 'orig_c_pred' },
    resultText: '呪われた騎士が街道を覆っている。黒い甲冑の騎士が大の字に倒れて道を塞いでいる。鎧から出られないのだ。乗り越えようとしたら、腕が動いて脛を掴まれた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_witch_cover',
    conditions: { s2: 'subj_witch', s4: 'orig_c_pred' },
    resultText: '呪われた魔女が街道を覆っている。自分の呪いに蝕まれた魔女が、変異した体で道を這っている。触れると呪いが移るという。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_king_cover',
    conditions: { s2: 'subj_king', s4: 'orig_c_pred' },
    resultText: '呪われた王が街道を覆っている。触れたものが金になる王が、街道ごと黄金に変えてしまった。美しいが、歩くと靴が張りつく。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_king_cover', name: '黄金の石畳', description: '街道の一片。重い。きらきら光る', sellPrice: 15 }]
  },
  {
    id: 'c_ghost_cover',
    conditions: { s2: 'subj_ghost', s4: 'orig_c_pred' },
    resultText: '呪われた亡霊が街道を覆っている。成仏できない霊たちが、もやのように道を漂っている。通り抜けると体が冷える。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_mirror_cover',
    conditions: { s2: 'subj_mirror', s4: 'orig_c_pred' },
    resultText: '呪われた鏡が街道を覆っている。覗いた者の影が鏡の中に残る鏡が、割れて石畳に散らばっている。破片を踏みながら進む。靴底を貫いて足裏が切れた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_doll_cover',
    conditions: { s2: 'subj_doll', s4: 'orig_c_pred' },
    resultText: '呪われた人形が街道を覆っている。夜になると動く人形が、何体も道に並んでこちらを見ている。昼なのに目が追ってくる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_rain_cover',
    conditions: { s2: 'subj_rain', s4: 'orig_c_pred' },
    resultText: '呪われた雨が街道を覆っている。浴びた者を動けなくする雨が、低い雲から絶え間なく降り注ぐ。足元に水が溜まり、根が生えたように重い。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_orig_block',
    conditions: { s2: 'orig_c_subj', s4: 'pred_block' },
    resultText: '呪われた荊が街道を塞いでいる。黒い蔓が壁のように立ちはだかる。切っても切っても生えてくる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_kitten_block',
    conditions: { s2: 'subj_kitten', s4: 'pred_block' },
    resultText: '呪われた子猫が街道を塞いでいる。拾った者が捨てられなくなる猫が、道の真ん中に座っている。目を合わせたら終わりだ。目を逸らして通る。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_c_kitten_block', name: '猫の呪鈴', description: '鳴らすと猫が寄ってくる。止め方は誰も知らない', sellPrice: 8 }]
  },
  {
    id: 'c_snake_block',
    conditions: { s2: 'subj_snake', s4: 'pred_block' },
    resultText: '呪われた蛇が街道を塞いでいる。脱皮するたびに大きくなる蛇が、とぐろを巻いて道を埋めている。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_dragon_block',
    conditions: { s2: 'subj_dragon', s4: 'pred_block' },
    resultText: '呪われた竜が街道を塞いでいる。暴走の呪いで動けなくなった竜が、街道を丸ごと遮っている。近づくと熱い。',
    damage: 5,
    quill: 1
  },
  {
    id: 'c_butterfly_block',
    conditions: { s2: 'subj_butterfly', s4: 'pred_block' },
    resultText: '呪われた蝶が街道を塞いでいる。不吉の前兆の蝶の群れが、壁のように宙に浮いている。手で払うと指先がしびれる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_block',
    conditions: { s2: 'subj_wind', s4: 'pred_block' },
    resultText: '呪われた風が街道を塞いでいる。帰り道を忘れさせる風が壁のように吹きつけ、一歩も前に進めない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_flame_block',
    conditions: { s2: 'subj_flame', s4: 'pred_block' },
    resultText: '呪われた炎が街道を塞いでいる。燃えた町の幻を映す炎が、街道を横断する火の壁になっている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_ice_block',
    conditions: { s2: 'subj_ice', s4: 'pred_block' },
    resultText: '呪われた氷が街道を塞いでいる。溶けない呪いの氷が街道を壁のように封じている。叩いても罅すら入らない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'c_shadow_block',
    conditions: { s2: 'subj_shadow', s4: 'pred_block' },
    resultText: '呪われた影が街道を塞いでいる。触れたものを影に変える闇が、壁のように立ち上がっている。足を踏み入れたら戻れない気がする。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_song_block',
    conditions: { s2: 'subj_song', s4: 'pred_block' },
    resultText: '呪われた歌が街道を塞いでいる。一度聴くと頭から離れない旋律が、見えない壁のように立ちはだかる。近づくほど足が鈍る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_silence_block',
    conditions: { s2: 'subj_silence', s4: 'pred_block' },
    resultText: '呪われた沈黙が街道を塞いでいる。音を飲み込む沈黙が、壁のように道を遮る。踏み込んだ瞬間、自分の心音すら消えた。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_silence_block', name: '無音の石', description: '握ると周囲から音が消える。離すまで', sellPrice: 12 }]
  },
  {
    id: 'c_knight_block',
    conditions: { s2: 'subj_knight', s4: 'pred_block' },
    resultText: '呪われた騎士が街道を塞いでいる。鎧から出られない騎士が、剣を構えて道に立つ。兜の奥の赤い目は、敵味方の区別がついていない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_witch_block',
    conditions: { s2: 'subj_witch', s4: 'pred_block' },
    resultText: '呪われた魔女が街道を塞いでいる。自分の呪いに蝕まれた魔女が、通行料代わりに呪いの一つを引き取れと言う。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_witch_block', name: '魔女の小瓶', description: '中に黒い霧が詰まっている。蓋は開けないほうがいい', sellPrice: 10 }]
  },
  {
    id: 'c_king_block',
    conditions: { s2: 'subj_king', s4: 'pred_block' },
    resultText: '呪われた王が街道を塞いでいる。触れたものが金になる王が、街道の真ん中で動けずにいる。すり抜けるとき、袖が王の指に触れた。袖口が金色に硬くなっていく。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_ghost_block',
    conditions: { s2: 'subj_ghost', s4: 'pred_block' },
    resultText: '呪われた亡霊が街道を塞いでいる。成仏できない霊が苦しみの形相で立っている。すり抜けようとすると、冷たい手が服を掴む。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_mirror_block',
    conditions: { s2: 'subj_mirror', s4: 'pred_block' },
    resultText: '呪われた鏡が街道を塞いでいる。巨大な鏡が道を遮り、覗いた者の影を呑み込もうとする。目を伏せて脇を通ったが、影が一瞬遅れてついてきた。足元がふらつく。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_doll_block',
    conditions: { s2: 'subj_doll', s4: 'pred_block' },
    resultText: '呪われた人形が街道を塞いでいる。夜になると動く人形が、昼間は道の真ん中で固まっている。どかそうとすると、手が貼りつく。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_rain_block',
    conditions: { s2: 'subj_rain', s4: 'pred_block' },
    resultText: '呪われた雨が街道を塞いでいる。一帯だけに降る雨が水の壁を作り、浴びた者の足を縫い止める。遠回りする。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_orig_guard',
    conditions: { s2: 'orig_c_subj', s4: 'pred_guard' },
    resultText: '呪われた荊が街道を守っている。呪いの棘が不法者から道を守る。正しき旅人には道を開く——はずだが、棘は区別しない。腕に引っかき傷が残った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_kitten_guard',
    conditions: { s2: 'subj_kitten', s4: 'pred_guard' },
    resultText: '呪われた子猫が街道を守っている。拾った者が捨てられなくなる猫が、番猫として街道に居座っている。妙に頼もしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_c_kitten_guard', name: '番猫の毛玉', description: '持っていると何かに見守られている気がする', sellPrice: 8 }]
  },
  {
    id: 'c_snake_guard',
    conditions: { s2: 'subj_snake', s4: 'pred_guard' },
    resultText: '呪われた蛇が街道を守っている。際限なく大きくなる蛇が、街道の両脇に体を横たえて番をしている。通り過ぎるとき、尾が足首に触れた。鱗の冷たさが骨まで沁みる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_dragon_guard',
    conditions: { s2: 'subj_dragon', s4: 'pred_guard' },
    resultText: '呪われた竜が街道を守っている。かつての守護竜が呪いで暴走し、守ることと壊すことの区別を失った。街道は安全だが、旅人が危険だ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'c_butterfly_guard',
    conditions: { s2: 'subj_butterfly', s4: 'pred_guard' },
    resultText: '呪われた蝶が街道を守っている。追いかけると迷子になる蝶が、侵入者を追いかけて道に迷わせる。ありがたいのか迷惑なのかわからない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_guard',
    conditions: { s2: 'subj_wind', s4: 'pred_guard' },
    resultText: '呪われた風が街道を守っている。帰り道を忘れさせる風が、敵も味方も追い返す。通り抜けたが、自分の名前を思い出すのに時間がかかった。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_wind_guard', name: '忘却の風切り羽', description: '扇ぐと相手が直前の記憶を失う。自分も忘れることがある', sellPrice: 15 }]
  },
  {
    id: 'c_flame_guard',
    conditions: { s2: 'subj_flame', s4: 'pred_guard' },
    resultText: '呪われた炎が街道を守っている。過去に燃えた町の幻を映す炎が、松明のように街道の両脇に灯っている。幻に気を取られ、石畳の段差で足を挫いた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_ice_guard',
    conditions: { s2: 'subj_ice', s4: 'pred_guard' },
    resultText: '呪われた氷が街道を守っている。溶けない氷が街道を冷気で包み、侵入者を凍りつかせる。駆け抜けたが、指先が紫に変わっていた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_shadow_guard',
    conditions: { s2: 'subj_shadow', s4: 'pred_guard' },
    resultText: '呪われた影が街道を守っている。増え続ける影が、街道を通る者の影に混ざって監視している。見張りとしては優秀だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_song_guard',
    conditions: { s2: 'subj_song', s4: 'pred_guard' },
    resultText: '呪われた歌が街道を守っている。正気を削る旋律が街道に響き、近づく者を追い返す。守護と呪いの境目がわからない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_silence_guard',
    conditions: { s2: 'subj_silence', s4: 'pred_guard' },
    resultText: '呪われた沈黙が街道を守っている。声を奪う沈黙が結界のように道を囲む。叫び声が封じられるのだから、確かに平和ではある。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_c_silence_guard', name: '結界の沈黙', description: '置いた場所の周囲から音が消える。拾うと戻る', sellPrice: 12 }]
  },
  {
    id: 'c_knight_guard',
    conditions: { s2: 'subj_knight', s4: 'pred_guard' },
    resultText: '呪われた騎士が街道を守っている。鎧から出られない騎士が、呪われたまま衛兵の任を続けている。通行を求めたら、槍の柄で肩を打たれた。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_knight_guard', name: '黒騎士の誓約書', description: '読めない文字で書かれた誓い。握ると手が震える', sellPrice: 10 }]
  },
  {
    id: 'c_witch_guard',
    conditions: { s2: 'subj_witch', s4: 'pred_guard' },
    resultText: '呪われた魔女が街道を守っている。自分の呪いに蝕まれながらも、街道に結界を張り続けている。義務感だけが呪いより強い。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_c_witch_guard', name: '魔女の結界石', description: '薄い紫色に光る。呪いと守護の両方の気配がする', sellPrice: 15 }]
  },
  {
    id: 'c_king_guard',
    conditions: { s2: 'subj_king', s4: 'pred_guard' },
    resultText: '呪われた王が街道を守っている。触れたものが金になる王が、街道に触れまいと空中で手を掲げている。滑稽で、悲しい姿だ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_c_king_guard', name: '王の金指輪', description: '指にはめると抜けなくなると噂されている。はめなければ安全', sellPrice: 18 }]
  },
  {
    id: 'c_ghost_guard',
    conditions: { s2: 'subj_ghost', s4: 'pred_guard' },
    resultText: '呪われた亡霊が街道を守っている。成仏できない霊が、生前の職務を続けている。「通行証を」と言うが、声は風にしか聞こえない。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_c_ghost_guard', name: '亡霊の通行証', description: '白紙に見えるが、傾けると文字が浮かぶ', sellPrice: 10 }]
  },
  {
    id: 'c_mirror_guard',
    conditions: { s2: 'subj_mirror', s4: 'pred_guard' },
    resultText: '呪われた鏡が街道を守っている。道の両脇に立つ鏡が、通る者の姿を記録している。悪意ある者は鏡の中に閉じ込められるという。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_doll_guard',
    conditions: { s2: 'subj_doll', s4: 'pred_guard' },
    resultText: '呪われた人形が街道を守っている。夜になると動く人形が、昼は番兵のように道に並んでいる。不気味だが、泥棒は寄りつかないだろう。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_rain_guard',
    conditions: { s2: 'subj_rain', s4: 'pred_guard' },
    resultText: '呪われた雨が街道を守っている。動けなくなる雨が侵入者を足止めする。街道自体は濡れていない。雨は敵だけに降る。',
    damage: 1,
    quill: 6
  },
  {
    id: 'c_orig_chase',
    conditions: { s2: 'orig_c_subj', s4: 'pred_chase' },
    resultText: '呪われた荊が街道を追いかけてくる。蔓が生き物のように石畳を這い、足首に絡みつく。引き千切って走ったが、棘の跡が腫れた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_kitten_chase',
    conditions: { s2: 'subj_kitten', s4: 'pred_chase' },
    resultText: '呪われた子猫が街道を追いかけてくる。拾った者が捨てられなくなる猫が、まだ拾ってもいないのに追ってくる。振り向くたびに近づいている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'c_snake_chase',
    conditions: { s2: 'subj_snake', s4: 'pred_chase' },
    resultText: '呪われた蛇が街道を追いかけてくる。脱皮しながら巨大化する蛇が、這うたびに太くなりながら迫る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_dragon_chase',
    conditions: { s2: 'subj_dragon', s4: 'pred_chase' },
    resultText: '呪われた竜が街道を追いかけてくる。暴走した竜が、理性なく街道を駆ける。逃げるしかない。地面が揺れる。',
    damage: 5,
    quill: 1
  },
  {
    id: 'c_butterfly_chase',
    conditions: { s2: 'subj_butterfly', s4: 'pred_chase' },
    resultText: '呪われた蝶が街道を追いかけてくる。追いかけると迷子になる蝶が、逆にこちらを追ってくる。振り切れば安全だが、振り切れるか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_chase',
    conditions: { s2: 'subj_wind', s4: 'pred_chase' },
    resultText: '呪われた風が街道を追いかけてくる。帰り道を忘れさせる風が背後から迫る。追いつかれたら、もう戻れない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_flame_chase',
    conditions: { s2: 'subj_flame', s4: 'pred_chase' },
    resultText: '呪われた炎が街道を追いかけてくる。燃えた町の幻を映す炎が、新しい記憶を求めて這い寄る。',
    damage: 4,
    quill: 4
  },
  {
    id: 'c_ice_chase',
    conditions: { s2: 'subj_ice', s4: 'pred_chase' },
    resultText: '呪われた氷が街道を追いかけてくる。永遠の冬を広げる氷が、足元から這い上がる。走るたびに靴の底が凍る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_shadow_chase',
    conditions: { s2: 'subj_shadow', s4: 'pred_chase' },
    resultText: '呪われた影が街道を追いかけてくる。触れたものを影に変える闇が、自分の影を伝って迫る。振り返ると影が二つある。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_song_chase',
    conditions: { s2: 'subj_song', s4: 'pred_chase' },
    resultText: '呪われた歌が街道を追いかけてくる。頭から離れない旋律が、逃げるほど大きくなる。耳を塞いでも骨から響く。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_silence_chase',
    conditions: { s2: 'subj_silence', s4: 'pred_chase' },
    resultText: '呪われた沈黙が街道を追いかけてくる。声を奪う静けさが、背後からじわじわと迫る。足音が消え、息の音が消え、やがて心音だけになる。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_c_silence_chase', name: '追う沈黙の瓶', description: '蓋を開けると周囲が一瞬静まる。閉じないと追いかけてくる', sellPrice: 12 }]
  },
  {
    id: 'c_knight_chase',
    conditions: { s2: 'subj_knight', s4: 'pred_chase' },
    resultText: '呪われた騎士が街道を追いかけてくる。鎧から出られない騎士が、がしゃがしゃと音を立てて迫る。速くはないが、止まらない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_witch_chase',
    conditions: { s2: 'subj_witch', s4: 'pred_chase' },
    resultText: '呪われた魔女が街道を追いかけてくる。自分の呪いを誰かに押し付けたい魔女が、必死の形相で走ってくる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_king_chase',
    conditions: { s2: 'subj_king', s4: 'pred_chase' },
    resultText: '呪われた王が街道を追いかけてくる。触れたものが金になる王が、金の靴で重そうに走る。遅いが、触れられたら終わりだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_ghost_chase',
    conditions: { s2: 'subj_ghost', s4: 'pred_chase' },
    resultText: '呪われた亡霊が街道を追いかけてくる。成仏できない霊が、生者の体温を求めて漂ってくる。壁を抜けるので逃げ場がない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_mirror_chase',
    conditions: { s2: 'subj_mirror', s4: 'pred_chase' },
    resultText: '呪われた鏡が街道を追いかけてくる。水たまりや窓ガラスに映る自分の顔が、少しずつ別人になっていく。鏡の中の何かが追ってきている。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_mirror_chase', name: '追跡鏡の破片', description: '持っていると背後に誰かの視線を感じる', sellPrice: 10 }]
  },
  {
    id: 'c_doll_chase',
    conditions: { s2: 'subj_doll', s4: 'pred_chase' },
    resultText: '呪われた人形が街道を追いかけてくる。振り返ると止まっている。前を向くと、足音が聞こえる。だるまさんが転んだの要領だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'c_rain_chase',
    conditions: { s2: 'subj_rain', s4: 'pred_chase' },
    resultText: '呪われた雨が街道を追いかけてくる。動けなくなる雨の範囲が、じりじりと広がっている。数滴浴びて、足が一瞬根を張った。もがいて引き抜く。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_orig_gaze',
    conditions: { s2: 'orig_c_subj', s4: 'pred_gaze' },
    resultText: '呪われた荊が街道を見つめている。棘の先端がこちらに向いている。植物のはずなのに、目があるように感じる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_kitten_gaze',
    conditions: { s2: 'subj_kitten', s4: 'pred_gaze' },
    resultText: '呪われた子猫が街道を見つめている。拾った者が捨てられなくなる猫が、道の隅からじっとこちらを見ている。目を逸らすと、別の場所からまた見ている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_snake_gaze',
    conditions: { s2: 'subj_snake', s4: 'pred_gaze' },
    resultText: '呪われた蛇が街道を見つめている。脱皮を繰り返す蛇が、街道の行く末を見定めている。舌がちろちろと空気を読む。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_dragon_gaze',
    conditions: { s2: 'subj_dragon', s4: 'pred_gaze' },
    resultText: '呪われた竜が街道を見つめている。暴走した竜が、一瞬だけ正気に戻り、自分が壊した街道を見ている。哀しげな目だ。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_c_dragon_gaze', name: '守護竜の鱗', description: '触れると温かい。微かに震えている', sellPrice: 15 }]
  },
  {
    id: 'c_butterfly_gaze',
    conditions: { s2: 'subj_butterfly', s4: 'pred_gaze' },
    resultText: '呪われた蝶が街道を見つめている。羽の模様が目のように見える。道を行く者を、無数の目が追っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_gaze',
    conditions: { s2: 'subj_wind', s4: 'pred_gaze' },
    resultText: '呪われた風が街道を見つめている。帰り道を忘れさせる風が、凪いで街道を観察している。次にどちらから吹くかを考えている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_flame_gaze',
    conditions: { s2: 'subj_flame', s4: 'pred_gaze' },
    resultText: '呪われた炎が街道を見つめている。燃えた町の幻を映す炎が、揺れながらこちらを見ている。見つめ返したら、瞼の裏に焼き跡が残った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_ice_gaze',
    conditions: { s2: 'subj_ice', s4: 'pred_gaze' },
    resultText: '呪われた氷が街道を見つめている。氷の表面に顔が浮かんでいる。閉じ込められた者の顔だ。口が動いている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_shadow_gaze',
    conditions: { s2: 'subj_shadow', s4: 'pred_gaze' },
    resultText: '呪われた影が街道を見つめている。増え続ける影の群れが、道を通る者をじっと観察している。影には目がないのに、視線を感じる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_song_gaze',
    conditions: { s2: 'subj_song', s4: 'pred_gaze' },
    resultText: '呪われた歌が街道を見つめている。頭から離れない旋律が、耳の奥から意識を覗き込んでくる。こめかみが脈打ち、視界が歪む。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_silence_gaze',
    conditions: { s2: 'subj_silence', s4: 'pred_gaze' },
    resultText: '呪われた沈黙が街道を見つめている。声を奪う静けさが、音もなくこちらを見ている。見つめ返すと、自分の声がかすれていく。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_knight_gaze',
    conditions: { s2: 'subj_knight', s4: 'pred_gaze' },
    resultText: '呪われた騎士が街道を見つめている。鎧から出られない騎士が、兜の隙間から街道を見ている。かつて自分が守った道だ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'c_witch_gaze',
    conditions: { s2: 'subj_witch', s4: 'pred_gaze' },
    resultText: '呪われた魔女が街道を見つめている。自分の呪いに蝕まれた魔女が、変異した目で道を睨む。その目で見られると足が重くなる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_king_gaze',
    conditions: { s2: 'subj_king', s4: 'pred_gaze' },
    resultText: '呪われた王が街道を見つめている。触れたものが金になる王が、何にも触れずにただ道を見ている。かつて自分の領地だった道を。',
    damage: 0,
    quill: 6
  },
  {
    id: 'c_ghost_gaze',
    conditions: { s2: 'subj_ghost', s4: 'pred_gaze' },
    resultText: '呪われた亡霊が街道を見つめている。成仏できない霊が、苦しみの表情でこちらを見ている。口が何かを伝えようとしている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_mirror_gaze',
    conditions: { s2: 'subj_mirror', s4: 'pred_gaze' },
    resultText: '呪われた鏡が街道を見つめている。道端の鏡が、通る者の姿を映し続けている。鏡の中の自分だけが、こちらを見つめて笑った。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_c_mirror_gaze', name: '笑う鏡の破片', description: '映るものがすべて少しだけ笑顔に見える', sellPrice: 8 }]
  },
  {
    id: 'c_doll_gaze',
    conditions: { s2: 'subj_doll', s4: 'pred_gaze' },
    resultText: '呪われた人形が街道を見つめている。道に並ぶ人形たちの首が、通る者を追ってゆっくり回る。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_rain_gaze',
    conditions: { s2: 'subj_rain', s4: 'pred_gaze' },
    resultText: '呪われた雨が街道を見つめている。低い雲から落ちてこない雨粒が、宙に浮いたままこちらを映している。無数の小さな鏡だ。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_c_rain_gaze', name: '浮かぶ雨粒', description: '手のひらの上で浮いたまま落ちない水滴。中に小さな景色が映る', sellPrice: 12 }]
  },
  {
    id: 'c_orig_hide',
    conditions: { s2: 'orig_c_subj', s4: 'pred_hide' },
    resultText: '呪われた荊が街道を隠している。黒い蔓が石畳を覆い、道の形が見えない。踏み外せば棘に刺さる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_kitten_hide',
    conditions: { s2: 'subj_kitten', s4: 'pred_hide' },
    resultText: '呪われた子猫が街道を隠している。拾った者が捨てられなくなる猫が、道に座って通せんぼしている。可愛さで道を見失わせる手口だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_snake_hide',
    conditions: { s2: 'subj_snake', s4: 'pred_hide' },
    resultText: '呪われた蛇が街道を隠している。巨大化した蛇の体が道を覆い、どこが街道かわからない。鱗の上を歩いたら、寝返りで振り落とされた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_dragon_hide',
    conditions: { s2: 'subj_dragon', s4: 'pred_hide' },
    resultText: '呪われた竜が街道を隠している。暴走した竜が翼で道を覆い、何かを守るように伏せている。街道の下に何があるのか。',
    damage: 4,
    quill: 4
  },
  {
    id: 'c_butterfly_hide',
    conditions: { s2: 'subj_butterfly', s4: 'pred_hide' },
    resultText: '呪われた蝶が街道を隠している。追いかけると迷子になる蝶の群れが、道の目印を鱗粉で消している。足元だけを見て進む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_hide',
    conditions: { s2: 'subj_wind', s4: 'pred_hide' },
    resultText: '呪われた風が街道を隠している。帰り道を忘れさせる風が砂を巻き上げ、道の痕跡を消している。彷徨ううちに日が暮れ、体力が削られた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_flame_hide',
    conditions: { s2: 'subj_flame', s4: 'pred_hide' },
    resultText: '呪われた炎が街道を隠している。燃えた町の幻を映す炎が、陽炎のように道を歪めて見せる。まっすぐ歩いたはずが、同じ場所に戻る。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_flame_hide', name: '陽炎の灯', description: '揺らめく灯り。かざすと隠されたものが浮かぶ', sellPrice: 12 }]
  },
  {
    id: 'c_ice_hide',
    conditions: { s2: 'subj_ice', s4: 'pred_hide' },
    resultText: '呪われた氷が街道を隠している。透明な氷が街道の上に張り、道が氷の下に沈んでいる。割ろうとしても罅が入らない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_shadow_hide',
    conditions: { s2: 'subj_shadow', s4: 'pred_hide' },
    resultText: '呪われた影が街道を隠している。触れたものを影に変える闇が、道ごと影の中に呑み込んでいる。手探りで進む。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_song_hide',
    conditions: { s2: 'subj_song', s4: 'pred_hide' },
    resultText: '呪われた歌が街道を隠している。頭から離れない旋律に気を取られ、足元の道を見失う。溝に落ちて足首を捻った。歌は笑うように続く。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_silence_hide',
    conditions: { s2: 'subj_silence', s4: 'pred_hide' },
    resultText: '呪われた沈黙が街道を隠している。声を奪う沈黙が霧のように道を包む。音を頼りにできない。助けを呼ぼうにも声が出ず、のどが潰れたように痛んだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_knight_hide',
    conditions: { s2: 'subj_knight', s4: 'pred_hide' },
    resultText: '呪われた騎士が街道を隠している。黒い鎧の騎士が、マントで道を覆い隠している。マントを剥がそうとしたら、鉄の手甲で手の甲を打たれた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_witch_hide',
    conditions: { s2: 'subj_witch', s4: 'pred_hide' },
    resultText: '呪われた魔女が街道を隠している。自分の呪いに蝕まれた魔女が、幻術で道を消している。通行人が来ないほうが、呪いが広がらないから。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_c_witch_hide', name: '魔女の善意の瓶', description: '中に小さな幻が入っている。振ると道が見える', sellPrice: 15 }]
  },
  {
    id: 'c_king_hide',
    conditions: { s2: 'subj_king', s4: 'pred_hide' },
    resultText: '呪われた王が街道を隠している。触れたものが金になる王が、自分の領地を隠して誰も来ないようにしている。黄金の災厄を広げまいとして。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_c_king_hide', name: '隠された王道の地図', description: '黄金の道が描かれた羊皮紙。行き先は読めない', sellPrice: 15 }]
  },
  {
    id: 'c_ghost_hide',
    conditions: { s2: 'subj_ghost', s4: 'pred_hide' },
    resultText: '呪われた亡霊が街道を隠している。成仏できない霊たちが、もやになって道を消している。隠しているのではなく、漂っているだけかもしれない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_mirror_hide',
    conditions: { s2: 'subj_mirror', s4: 'pred_hide' },
    resultText: '呪われた鏡が街道を隠している。道の両脇に立つ鏡が景色を反射し、道がどこにあるのかわからなくなっている。鏡に額をぶつけた。境目が見えない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_doll_hide',
    conditions: { s2: 'subj_doll', s4: 'pred_hide' },
    resultText: '呪われた人形が街道を隠している。何体もの人形が道に積み重なり、石畳を覆い隠している。踏んだ瞬間、目が開き、足首を掴む手の感触。振り払って駆けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_rain_hide',
    conditions: { s2: 'subj_rain', s4: 'pred_hide' },
    resultText: '呪われた雨が街道を隠している。動けなくなる雨が水溜りを作り、道の形を消している。どこを踏んでも足首まで沈む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'c_orig_flee',
    conditions: { s2: 'orig_c_subj', s4: 'pred_flee' },
    resultText: '呪われた荊が街道を逃げていく。蔓が石畳を這って街道の先へ去っていく。通った跡に黒い汁が残る。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_kitten_flee',
    conditions: { s2: 'subj_kitten', s4: 'pred_flee' },
    resultText: '呪われた子猫が街道を逃げていく。拾った者が捨てられなくなる猫が、珍しく逃げている。追いかけてはいけない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_snake_flee',
    conditions: { s2: 'subj_snake', s4: 'pred_flee' },
    resultText: '呪われた蛇が街道を逃げていく。脱皮しながら巨大化する蛇が、自分の大きさに怯えて逃げている。抜け殻が道に残る。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_c_snake_flee', name: '呪蛇の脱皮殻', description: '透き通った蛇の皮。まだ温かい', sellPrice: 8 }]
  },
  {
    id: 'c_dragon_flee',
    conditions: { s2: 'subj_dragon', s4: 'pred_flee' },
    resultText: '呪われた竜が街道を逃げていく。暴走した竜が、わずかに残った理性で街道から飛び去る。地面に焦げ跡が残る。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_butterfly_flee',
    conditions: { s2: 'subj_butterfly', s4: 'pred_flee' },
    resultText: '呪われた蝶が街道を逃げていく。追いかけると迷子になる蝶が、追いかけられる前に逃げている。賢い蝶だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_wind_flee',
    conditions: { s2: 'subj_wind', s4: 'pred_flee' },
    resultText: '呪われた風が街道を逃げていく。帰り道を忘れさせる風が、自分の帰り道を忘れて去っていく。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_c_wind_flee', name: '迷い風の羽根', description: '放すと必ず違う方角に飛んでいく', sellPrice: 10 }]
  },
  {
    id: 'c_flame_flee',
    conditions: { s2: 'subj_flame', s4: 'pred_flee' },
    resultText: '呪われた炎が街道を逃げていく。燃えた町の幻を映す炎が、新しい記憶を求めて街道の先へ走る。追うと火傷する。',
    damage: 1,
    quill: 4
  },
  {
    id: 'c_ice_flee',
    conditions: { s2: 'subj_ice', s4: 'pred_flee' },
    resultText: '呪われた氷が街道を逃げていく。永遠の冬を広げる氷が、より冷たい場所を求めて退いていく。濡れた石畳が残る。',
    damage: 0,
    quill: 4
  },
  {
    id: 'c_shadow_flee',
    conditions: { s2: 'subj_shadow', s4: 'pred_flee' },
    resultText: '呪われた影が街道を逃げていく。増え続ける影が、光を恐れて這うように去る。だが自分の影だけが、少し重くなった気がする。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_song_flee',
    conditions: { s2: 'subj_song', s4: 'pred_flee' },
    resultText: '呪われた歌が街道を逃げていく。頭から離れない旋律が、風に乗って遠ざかる。やっと静かになった。耳鳴りだけが残る。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_silence_flee',
    conditions: { s2: 'subj_silence', s4: 'pred_flee' },
    resultText: '呪われた沈黙が街道を逃げていく。声を奪う静けさが退き、鳥の声が戻ってくる。一瞬だけ世界が鮮やかに聞こえる。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_c_silence_flee', name: '還った声の粒', description: '耳に当てると、かつて奪われた誰かの声が聞こえる', sellPrice: 10 }]
  },
  {
    id: 'c_knight_flee',
    conditions: { s2: 'subj_knight', s4: 'pred_flee' },
    resultText: '呪われた騎士が街道を逃げていく。鎧から出られない騎士が、がしゃがしゃと音を立てて去る。呪いから逃げているのだ。無駄だが。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_witch_flee',
    conditions: { s2: 'subj_witch', s4: 'pred_flee' },
    resultText: '呪われた魔女が街道を逃げていく。自分の呪いから逃げる魔女。走るたびに変異した部分が増えている。間に合うのか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_king_flee',
    conditions: { s2: 'subj_king', s4: 'pred_flee' },
    resultText: '呪われた王が街道を逃げていく。触れたものが金になる王が、何にも触れないように両手を上げて走る。金の靴が重そうだ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'c_ghost_flee',
    conditions: { s2: 'subj_ghost', s4: 'pred_flee' },
    resultText: '呪われた亡霊が街道を逃げていく。成仏できない霊が、何かに怯えて消えていく。亡霊が恐れるものとは何だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_mirror_flee',
    conditions: { s2: 'subj_mirror', s4: 'pred_flee' },
    resultText: '呪われた鏡が街道を逃げていく。鏡の中の影たちが、映るたびに縁から飛び出そうとしている。一つが逃げ出した。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_doll_flee',
    conditions: { s2: 'subj_doll', s4: 'pred_flee' },
    resultText: '呪われた人形が街道を逃げていく。夜になると動く人形が、まだ昼なのに走っている。よほど恐ろしいことがあったのだろう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_rain_flee',
    conditions: { s2: 'subj_rain', s4: 'pred_flee' },
    resultText: '呪われた雨が街道を逃げていく。動けなくなる雨が、雲ごと遠ざかっていく。水溜りだけが残り、やがて乾く。',
    damage: 0,
    quill: 4
  },
  {
    id: 'c_orig_crush',
    conditions: { s2: 'orig_c_subj', s4: 'pred_crush' },
    resultText: '呪われた荊が街道を砕く。黒い根が石畳を持ち上げ、道を粉々にする。瓦礫の上を歩く。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_kitten_crush',
    conditions: { s2: 'subj_kitten', s4: 'pred_crush' },
    resultText: '呪われた子猫が街道を砕く。拾った者が捨てられなくなる猫が、小さな肉球で石畳を叩いている。道は砕けないが、心が砕ける。',
    damage: 0,
    quill: 6
  },
  {
    id: 'c_snake_crush',
    conditions: { s2: 'subj_snake', s4: 'pred_crush' },
    resultText: '呪われた蛇が街道を砕く。際限なく巨大化する蛇が、体重で石畳を割りながら這う。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_dragon_crush',
    conditions: { s2: 'subj_dragon', s4: 'pred_crush' },
    resultText: '呪われた竜が街道を砕く。暴走した竜の尾が街道を叩き割る。粉塵で前が見えない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'c_butterfly_crush',
    conditions: { s2: 'subj_butterfly', s4: 'pred_crush' },
    resultText: '呪われた蝶が街道を砕く。追いかけると迷子になる蝶の群れが降り立つたびに、石畳に罅が入る。羽の振動が呪力を帯びている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_wind_crush',
    conditions: { s2: 'subj_wind', s4: 'pred_crush' },
    resultText: '呪われた風が街道を砕く。帰り道を忘れさせる風が、暴風となって石畳を剥がしていく。道を忘れるのではなく、道ごと消す気だ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_flame_crush',
    conditions: { s2: 'subj_flame', s4: 'pred_crush' },
    resultText: '呪われた炎が街道を砕く。燃えた町の幻を映す炎が石畳を焼き、膨張と収縮で割っていく。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_ice_crush',
    conditions: { s2: 'subj_ice', s4: 'pred_crush' },
    resultText: '呪われた氷が街道を砕く。溶けない氷が石畳の隙間で膨張し、道を内側から割る。霜柱が牙のように突き出ている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_shadow_crush',
    conditions: { s2: 'subj_shadow', s4: 'pred_crush' },
    resultText: '呪われた影が街道を砕く。触れたものを影に変える闇が、石畳を黒く侵食して崩していく。影に触れた石が、砂のように散る。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_song_crush',
    conditions: { s2: 'subj_song', s4: 'pred_crush' },
    resultText: '呪われた歌が街道を砕く。正気を削る旋律が、共鳴して石畳を振動させる。硝子が割れるように道が砕けていく。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_c_song_crush', name: '共鳴石の破片', description: '歌うと震える。周囲のものも微かに揺れる', sellPrice: 10 }]
  },
  {
    id: 'c_silence_crush',
    conditions: { s2: 'subj_silence', s4: 'pred_crush' },
    resultText: '呪われた沈黙が街道を砕く。音を飲み込む沈黙が、衝撃波のように道を割る。音がないのに、壊れていく。',
    damage: 3,
    quill: 5
  },
  {
    id: 'c_knight_crush',
    conditions: { s2: 'subj_knight', s4: 'pred_crush' },
    resultText: '呪われた騎士が街道を砕く。鎧から出られない騎士が、剣を振り回して道を壊している。呪いの苛立ちを石にぶつけている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_witch_crush',
    conditions: { s2: 'subj_witch', s4: 'pred_crush' },
    resultText: '呪われた魔女が街道を砕く。暴走した魔力が地面を割る。本人も制御できていない。足元から放射状に罅が走る。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_king_crush',
    conditions: { s2: 'subj_king', s4: 'pred_crush' },
    resultText: '呪われた王が街道を砕く。触れたものが金になる王が、黄金化した石畳を拳で叩き割っている。飛び散った金の破片が頬を切った。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_c_king_crush', name: '金の石畳の欠片', description: '半分が金、半分が石。呪いの境目が見える', sellPrice: 15 }]
  },
  {
    id: 'c_ghost_crush',
    conditions: { s2: 'subj_ghost', s4: 'pred_crush' },
    resultText: '呪われた亡霊が街道を砕く。成仏できない霊の怨念が、足元の石畳に罅を入れる。怒りが実体化しかけている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_mirror_crush',
    conditions: { s2: 'subj_mirror', s4: 'pred_crush' },
    resultText: '呪われた鏡が街道を砕く。道に散らばった鏡の破片が、反射した光で石畳を焼き切る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_doll_crush',
    conditions: { s2: 'subj_doll', s4: 'pred_crush' },
    resultText: '呪われた人形が街道を砕く。夜になると動く人形が、木槌を持って石畳を叩いている。昼間なのに動いている。跳ねた石が脛に当たった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_rain_crush',
    conditions: { s2: 'subj_rain', s4: 'pred_crush' },
    resultText: '呪われた雨が街道を砕く。一滴が岩に穴を開ける雨。動けなくなる呪いは関係なく、ただ降り続けるだけで道を削り取る。',
    damage: 3,
    quill: 4
  },

  // --- 待っている (pred_wait) ---
  {
    id: 'c_kitten_wait',
    conditions: { s2: 'subj_kitten', s4: 'pred_wait' },
    resultText: '呪われた子猫が街道を待っている。石畳の上に座り、通る者を見つめている。拾えば捨てられない。知っているのに足が止まる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_snake_wait',
    conditions: { s2: 'subj_snake', s4: 'pred_wait' },
    resultText: '呪われた蛇が街道を待っている。脱皮を繰り返して太くなった蛇が、街道脇の草むらに潜んでいる。次の獲物を待つ目が光る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_dragon_wait',
    conditions: { s2: 'subj_dragon', s4: 'pred_wait' },
    resultText: '呪われた竜が街道を待っている。暴走した守護竜が道の先で蹲り、目に理性のないまま何かを待ち続けている。近づけば焼かれる。',
    damage: 5,
    quill: 3
  },
  {
    id: 'c_butterfly_wait',
    conditions: { s2: 'subj_butterfly', s4: 'pred_wait' },
    resultText: '呪われた蝶が街道を待っている。追いかけると迷子になる蝶が、道の分かれ目でひらひら舞っている。ついていかなければ無害だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'c_wind_wait',
    conditions: { s2: 'subj_wind', s4: 'pred_wait' },
    resultText: '呪われた風が街道を待っている。帰り道を忘れさせる風が、街道の先で凪いでいる。一歩踏み出した瞬間に吹くだろう。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_flame_wait',
    conditions: { s2: 'subj_flame', s4: 'pred_wait' },
    resultText: '呪われた炎が街道を待っている。燃やしたものの形を覚える炎が、街道の敷石の隙間で揺れている。踏めば靴の形に燃え移る。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_ice_wait',
    conditions: { s2: 'subj_ice', s4: 'pred_wait' },
    resultText: '呪われた氷が街道を待っている。溶けない氷が道の窪みに溜まり、永遠の冬を広げ続ける。近づくと足元から冷気が這い上がる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'c_shadow_wait',
    conditions: { s2: 'subj_shadow', s4: 'pred_wait' },
    resultText: '呪われた影が街道を待っている。触れたものを影にする影が、日向の真ん中で待ち構えている。陽が差すほど影は濃い。',
    damage: 4,
    quill: 4
  },
  {
    id: 'c_song_wait',
    conditions: { s2: 'subj_song', s4: 'pred_wait' },
    resultText: '呪われた歌が街道を待っている。一度聴くと頭から離れない旋律が、風に乗って流れてくる。耳を塞いだが遅かった。頭の奥で旋律が渦を巻き始める。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_silence_wait',
    conditions: { s2: 'subj_silence', s4: 'pred_wait' },
    resultText: '呪われた沈黙が街道を待っている。声を奪う沈黙が、街道の先に溜まっている。入れば叫んでも音が出ない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_knight_wait',
    conditions: { s2: 'subj_knight', s4: 'pred_wait' },
    resultText: '呪われた騎士が街道を待っている。黒い鎧の騎士が道の真ん中に立ち、兜の奥の赤い目がこちらを捉えている。逃げても追ってくる類だ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'c_witch_wait',
    conditions: { s2: 'subj_witch', s4: 'pred_wait' },
    resultText: '呪われた魔女が街道を待っている。自分の呪いに蝕まれた魔女が、道端に座り込んで旅人を待っている。何の用かは聞かない方がいい。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_king_wait',
    conditions: { s2: 'subj_king', s4: 'pred_wait' },
    resultText: '呪われた王が街道を待っている。触れたものが金になる王が、街道の真ん中で手を広げている。握手を求めているのか。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_c_king_wait', name: '黄金の手形', description: '王が街道に残した手のひらの跡。石畳が金に変わっている', sellPrice: 15 }]
  },
  {
    id: 'c_ghost_wait',
    conditions: { s2: 'subj_ghost', s4: 'pred_wait' },
    resultText: '呪われた亡霊が街道を待っている。呪いに縛られた霊が、街道の十字路に立ち尽くしている。すれ違った瞬間、体温が一気に下がった。歯の根が合わない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'c_mirror_wait',
    conditions: { s2: 'subj_mirror', s4: 'pred_wait' },
    resultText: '呪われた鏡が街道を待っている。覗いた者の姿を閉じ込める鏡が、道の脇に立てかけてある。親切な罠だ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'c_doll_wait',
    conditions: { s2: 'subj_doll', s4: 'pred_wait' },
    resultText: '呪われた人形が街道を待っている。夜になると動く人形が、昼の街道で座って待っている。まだ昼だ。今なら通れる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'c_rain_wait',
    conditions: { s2: 'subj_rain', s4: 'pred_wait' },
    resultText: '呪われた雨が街道を待っている。浴びた者がその場から動けなくなる雨雲が、街道の上空で停滞している。最初の一滴はまだ落ちていない。',
    damage: 1,
    quill: 5
  },
];
