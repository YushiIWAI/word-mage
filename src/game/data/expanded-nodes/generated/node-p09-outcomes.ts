// 枯れ井戸: [修飾語*] 鏡が 井戸に [述語*]
import type { Outcome } from '../../../engine/types';

export const nodeP09Outcomes: Outcome[] = [
  // === 元テキスト: 呪われた鏡が井戸に沈んでいる ===
  {
    id: 'p09_orig',
    conditions: { s1: 'mod_cursed', s4: 'orig_p09_pred' },
    resultText: '呪われた鏡が井戸の底に沈んでいる。覗き込むと、水面のない暗がりの中に自分の顔が映る。映った顔が先にこちらへ手を振った。',
    damage: 2,
    quill: 3
  },

  // === 小さな × 各述語 ===
  {
    id: 'p09_small_whisper',
    conditions: { s1: 'mod_small', s4: 'pred_whisper' },
    resultText: '小さな鏡が井戸に囁いている。手鏡ほどの破片が、井戸の壁に引っかかって震えている。耳を寄せると、忘れた名前を呼ばれた気がした。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_small_sleep',
    conditions: { s1: 'mod_small', s4: 'pred_sleep' },
    resultText: '小さな鏡が井戸に眠っている。掌に収まるほどの丸い鏡が、苔の上で静かに伏せている。拾い上げても、何も映さなかった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_small_sing',
    conditions: { s1: 'mod_small', s4: 'pred_sing' },
    resultText: '小さな鏡が井戸に歌っている。風が井戸を吹き抜けるたび、底の鏡片が共鳴して高い音を立てる。子守歌のような旋律だった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_small_entangle',
    conditions: { s1: 'mod_small', s4: 'pred_entangle' },
    resultText: '小さな鏡が井戸に絡みついている。蔦のように石壁に食い込んだ鏡の破片が、井戸の内壁を覆っている。手を入れると、指先が切れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_small_flee',
    conditions: { s1: 'mod_small', s4: 'pred_flee' },
    resultText: '小さな鏡が井戸に逃げていく。手鏡が宙を滑るように飛び、井戸の中へ落ちた。追いかける間もなく、底で砕ける音がした。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_small_shine',
    conditions: { s1: 'mod_small', s4: 'pred_shine' },
    resultText: '小さな鏡が井戸に輝く。枯れた井戸の底で、豆粒ほどの光が瞬いている。覗き込むと、光は消えた。目を逸らすと、また光った。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_small_shine', name: '豆粒の灯', description: '目を逸らした時だけ光る小さな欠片。手の中では決して光らない', sellPrice: 7 }]
  },
  {
    id: 'p09_small_rain_down',
    conditions: { s1: 'mod_small', s4: 'pred_rain_down' },
    resultText: '小さな鏡が井戸に降り注いでいる。砂粒のような鏡の欠片が、空から井戸の中へ静かに降っている。手に受けると、掌に細い傷ができた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_small_dance',
    conditions: { s1: 'mod_small', s4: 'pred_dance' },
    resultText: '小さな鏡が井戸に踊っている。井戸の縁で、手鏡がくるくると回転している。風もないのに止まらない。触れたら指を弾かれた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_small_melt',
    conditions: { s1: 'mod_small', s4: 'pred_melt' },
    resultText: '小さな鏡が井戸に溶けている。銀色の液体が井戸の内壁を伝って流れ落ちている。触れると冷たく、指先が少し痺れた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_small_laugh',
    conditions: { s1: 'mod_small', s4: 'pred_laugh' },
    resultText: '小さな鏡が井戸に笑っている。底から聞こえる甲高い声は、鏡面の振動だった。笑い声は夜まで続いた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_small_wait',
    conditions: { s1: 'mod_small', s4: 'pred_wait' },
    resultText: '小さな鏡が井戸に待っている。底を覗くと、鏡がこちらを見上げている。手を伸ばすと、ちょうど届く位置にあった。最初からそうだったように。',
    damage: 0,
    quill: 4
  },

  // === 優しい × 各述語 ===
  {
    id: 'p09_gentle_whisper',
    conditions: { s1: 'mod_gentle', s4: 'pred_whisper' },
    resultText: '優しい鏡が井戸に囁いている。映る顔を少しだけ綺麗にして返してくれる鏡だ。囁きの内容は、褒め言葉だった。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_gentle_whisper', name: '褒め言葉の欠片', description: '耳に当てると、自分だけに聞こえる優しい声がする', sellPrice: 7 }]
  },
  {
    id: 'p09_gentle_sleep',
    conditions: { s1: 'mod_gentle', s4: 'pred_sleep' },
    resultText: '優しい鏡が井戸に眠っている。覗き込む者の顔を、穏やかな表情に映し替える鏡。今は誰も覗かないので、静かに眠っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_sing',
    conditions: { s1: 'mod_gentle', s4: 'pred_sing' },
    resultText: '優しい鏡が井戸に歌っている。井戸に反響する歌声は、疲れた体に染み込むように温かい。鏡は覗く者の好きな歌を知っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_gentle_entangle',
    conditions: { s1: 'mod_gentle', s4: 'pred_entangle' },
    resultText: '優しい鏡が井戸に絡みついている。柔らかな光の糸が井戸の壁を這い、苔を照らしている。触れると温かく、傷が少し癒えた。',
    damage: -1,
    quill: 4
  },
  {
    id: 'p09_gentle_flee',
    conditions: { s1: 'mod_gentle', s4: 'pred_flee' },
    resultText: '優しい鏡が井戸に逃げていく。近づくと恥ずかしそうに光を弱め、そっと井戸の底へ沈んでいった。追わないことにした。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_gentle_shine',
    conditions: { s1: 'mod_gentle', s4: 'pred_shine' },
    resultText: '優しい鏡が井戸に輝く。月明かりのような柔らかな光が井戸の底から溢れている。覗き込むと、自分の顔が少し微笑んで見えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_gentle_rain_down',
    conditions: { s1: 'mod_gentle', s4: 'pred_rain_down' },
    resultText: '優しい鏡が井戸に降り注いでいる。光の粒が雪のように落ちてくる。手に受けると、温かい。傷に触れると、痛みが少し引いた。',
    damage: -1,
    quill: 4
  },
  {
    id: 'p09_gentle_dance',
    conditions: { s1: 'mod_gentle', s4: 'pred_dance' },
    resultText: '優しい鏡が井戸に踊っている。光の反射がゆらゆらと壁を巡り、井戸の中を柔らかく照らしている。見ていると眠くなった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_melt',
    conditions: { s1: 'mod_gentle', s4: 'pred_melt' },
    resultText: '優しい鏡が井戸に溶けている。銀色の水が井戸の底に薄く広がり、覗く者の顔を穏やかに映す。飲めそうな気がしたが、やめておいた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_gentle_laugh',
    conditions: { s1: 'mod_gentle', s4: 'pred_laugh' },
    resultText: '優しい鏡が井戸に笑っている。くすくすと控えめな笑い声が反響する。悪意はない。むしろ、少し元気が出た。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_gentle_wait',
    conditions: { s1: 'mod_gentle', s4: 'pred_wait' },
    resultText: '優しい鏡が井戸に待っている。ずっとここで、誰かが覗き込むのを待っていたらしい。映った顔に、鏡の方が嬉しそうだった。',
    damage: 0,
    quill: 5
  },

  // === 燃え盛る × 各述語 ===
  {
    id: 'p09_fire_whisper',
    conditions: { s1: 'mod_fire', s4: 'pred_whisper' },
    resultText: '燃え盛る鏡が井戸に囁いている。炎に包まれた鏡面が、熱波とともに言葉を吐く。近づくと眉が焦げた。囁きの内容は聞き取れなかった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_fire_sleep',
    conditions: { s1: 'mod_fire', s4: 'pred_sleep' },
    resultText: '燃え盛る鏡が井戸に眠っている。炎を纏ったまま底に横たわっている。枯れた井戸なので燃え移るものがない。静かな焚き火のようだった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_fire_sing',
    conditions: { s1: 'mod_fire', s4: 'pred_sing' },
    resultText: '燃え盛る鏡が井戸に歌っている。炎が空気を震わせ、井戸全体が共鳴する。歌声は美しいが、近寄れば火傷する。遠くから聴いた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_fire_entangle',
    conditions: { s1: 'mod_fire', s4: 'pred_entangle' },
    resultText: '燃え盛る鏡が井戸に絡みついている。炎の触手が石壁を這い回り、井戸全体を炉のように熱している。近づいただけで服が焦げた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_fire_flee',
    conditions: { s1: 'mod_fire', s4: 'pred_flee' },
    resultText: '燃え盛る鏡が井戸に逃げていく。火柱を引きずりながら井戸の底へ落ちていった。煙が立ち昇り、しばらく咳が止まらなかった。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p09_fire_shine',
    conditions: { s1: 'mod_fire', s4: 'pred_shine' },
    resultText: '燃え盛る鏡が井戸に輝く。炎と鏡面が互いに光を増幅し、枯れた井戸が灯台のように周囲を照らしている。眩しくて目を開けていられない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_fire_rain_down',
    conditions: { s1: 'mod_fire', s4: 'pred_rain_down' },
    resultText: '燃え盛る鏡が井戸に降り注いでいる。炎を帯びた鏡の破片が空から降る。井戸の周囲が焼け野原になっている。逃げるしかなかった。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p09_fire_dance',
    conditions: { s1: 'mod_fire', s4: 'pred_dance' },
    resultText: '燃え盛る鏡が井戸に踊っている。炎が井戸の中で渦を巻き、鏡面が回転するたびに火の粉が飛ぶ。美しいが、危険だった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_fire_melt',
    conditions: { s1: 'mod_fire', s4: 'pred_melt' },
    resultText: '燃え盛る鏡が井戸に溶けている。自らの炎で溶けた銀が、赤く光りながら井戸の底を満たしている。熱気で顔が痛い。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_fire_laugh',
    conditions: { s1: 'mod_fire', s4: 'pred_laugh' },
    resultText: '燃え盛る鏡が井戸に笑っている。炎が弾けるたびに、嘲るような音が響く。覗き込んだ顔が炎に照らされ、鏡の中で燃えていた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_fire_wait',
    conditions: { s1: 'mod_fire', s4: 'pred_wait' },
    resultText: '燃え盛る鏡が井戸に待っている。炎は消えない。枯れた井戸の底で、何百年も誰かを待ち続けているのだろう。手を出す気にはなれなかった。',
    damage: 2,
    quill: 3
  },

  // === 堅い × 各述語 ===
  {
    id: 'p09_hard_whisper',
    conditions: { s1: 'mod_hard', s4: 'pred_whisper' },
    resultText: '堅い鏡が井戸に囁いている。鋼鉄のように硬い鏡面が、低い振動で言葉を伝える。内容は判然としないが、命令のような口調だった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_hard_sleep',
    conditions: { s1: 'mod_hard', s4: 'pred_sleep' },
    resultText: '堅い鏡が井戸に眠っている。石のように重い鏡が底に沈んでいる。引き上げようとしたが、びくともしなかった。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p09_hard_sing',
    conditions: { s1: 'mod_hard', s4: 'pred_sing' },
    resultText: '堅い鏡が井戸に歌っている。金属的な共鳴が井戸に反響し、頭の奥に響く。歌というより、鐘を叩いたときの余韻に似ていた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_hard_entangle',
    conditions: { s1: 'mod_hard', s4: 'pred_entangle' },
    resultText: '堅い鏡が井戸に絡みついている。鉄の根のように井戸の壁に食い込み、石組みを圧迫している。井戸自体が軋んでいる。',
    damage: 1,
    quill: 2
  },
  {
    id: 'p09_hard_flee',
    conditions: { s1: 'mod_hard', s4: 'pred_flee' },
    resultText: '堅い鏡が井戸に逃げていく。重い音を立てて井戸の底へ転がり落ちた。追いかける術がない。井戸が少し揺れた。',
    damage: 1,
    quill: 2
  },
  {
    id: 'p09_hard_shine',
    conditions: { s1: 'mod_hard', s4: 'pred_shine' },
    resultText: '堅い鏡が井戸に輝く。磨き上げられた鋼鉄の表面が、わずかな光を集めて底から返す。硬質な光だった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_hard_rain_down',
    conditions: { s1: 'mod_hard', s4: 'pred_rain_down' },
    resultText: '堅い鏡が井戸に降り注いでいる。鉄塊のような鏡の破片が空から落ちてくる。井戸の縁が砕け、石が飛び散った。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_hard_dance',
    conditions: { s1: 'mod_hard', s4: 'pred_dance' },
    resultText: '堅い鏡が井戸の中で跳ねている。壁に当たるたびに火花が散り、石が削れて粉になる。割れもしない。底で立ち止まり、また跳ねた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_hard_melt',
    conditions: { s1: 'mod_hard', s4: 'pred_melt' },
    resultText: '堅い鏡が井戸に溶けている。あれほど硬かった表面が、飴のようにゆっくり崩れていく。何がこれを溶かしているのかは分からない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_hard_laugh',
    conditions: { s1: 'mod_hard', s4: 'pred_laugh' },
    resultText: '堅い鏡が井戸に笑っている。金属がきしむような笑い声が底から響く。不快な音だが、止める手段がない。',
    damage: 1,
    quill: 2
  },
  {
    id: 'p09_hard_wait',
    conditions: { s1: 'mod_hard', s4: 'pred_wait' },
    resultText: '堅い鏡が井戸に待っている。何年経っても錆びず、欠けず、底に鎮座している。待つことに関しては、誰よりも得意なのだろう。',
    damage: 1,
    quill: 3
  },

  // === 鋭い × 各述語 ===
  {
    id: 'p09_sharp_whisper',
    conditions: { s1: 'mod_sharp', s4: 'pred_whisper' },
    resultText: '鋭い鏡が井戸に囁いている。刃のような縁を持つ鏡が、切れるような声で何かを告げる。聞き取ろうと耳を寄せたら、耳朶が切れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_sleep',
    conditions: { s1: 'mod_sharp', s4: 'pred_sleep' },
    resultText: '鋭い鏡が井戸に眠っている。剃刀のような破片が底に散らばっている。眠っているうちはいい。起こさないようにそっと離れた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sharp_sing',
    conditions: { s1: 'mod_sharp', s4: 'pred_sing' },
    resultText: '鋭い鏡が井戸に歌っている。金切り声のような高音が井戸から立ち昇る。美しいと感じた瞬間、鼻血が出た。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_sharp_entangle',
    conditions: { s1: 'mod_sharp', s4: 'pred_entangle' },
    resultText: '鋭い鏡が井戸に絡みついている。刃物のような破片が蜘蛛の巣のように井戸の内壁を覆っている。手を入れれば指を失う。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_sharp_flee',
    conditions: { s1: 'mod_sharp', s4: 'pred_flee' },
    resultText: '鋭い鏡が井戸に逃げていく。回転しながら井戸の中へ落ちていった。通り過ぎるとき、頬に一筋の赤い線が走った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_shine',
    conditions: { s1: 'mod_sharp', s4: 'pred_shine' },
    resultText: '鋭い鏡が井戸に輝く。刃のような光が井戸から真っ直ぐ空へ伸びている。目に入ったら失明しそうだ。横を向いて通り過ぎた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_sharp_rain_down',
    conditions: { s1: 'mod_sharp', s4: 'pred_rain_down' },
    resultText: '鋭い鏡が井戸に降り注いでいる。ガラスの刃が空から降る。井戸の周囲の地面が傷だらけになっている。走って逃げた。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p09_sharp_dance',
    conditions: { s1: 'mod_sharp', s4: 'pred_dance' },
    resultText: '鋭い鏡が井戸に踊っている。破片が宙を舞い、互いにぶつかって火花を散らす。近づけば切り刻まれる。遠くから見物した。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_sharp_melt',
    conditions: { s1: 'mod_sharp', s4: 'pred_melt' },
    resultText: '鋭い鏡が井戸に溶けている。あれほど鋭かった縁が丸くなり、銀色の水溜まりになりつつある。もう少し待てば安全かもしれない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_sharp_laugh',
    conditions: { s1: 'mod_sharp', s4: 'pred_laugh' },
    resultText: '鋭い鏡が井戸に笑っている。甲高い笑い声が刃のように空気を切る。耳を塞いでも、頭の中で響いた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_sharp_wait',
    conditions: { s1: 'mod_sharp', s4: 'pred_wait' },
    resultText: '鋭い鏡が井戸に待っている。底で刃を上に向けて横たわっている。落ちてくる者を待っているのだ。縁には近づかなかった。',
    damage: 2,
    quill: 3
  },

  // === 壊れた × 各述語 ===
  {
    id: 'p09_broken_whisper',
    conditions: { s1: 'mod_broken', s4: 'pred_whisper' },
    resultText: '壊れた鏡が井戸に囁いている。割れた面がそれぞれ違う言葉を呟く。矛盾した助言が同時に聞こえて、余計に迷った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_broken_sleep',
    conditions: { s1: 'mod_broken', s4: 'pred_sleep' },
    resultText: '壊れた鏡が井戸に眠っている。砕けた破片が底に散らばり、それぞれが少しずつ違う空を映している。どれも、ここではない場所の空だった。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p09_broken_sleep', name: '異郷の空片', description: '覗くたびに違う空が映る鏡の欠片。どの空もここではない', sellPrice: 8 }]
  },
  {
    id: 'p09_broken_sing',
    conditions: { s1: 'mod_broken', s4: 'pred_sing' },
    resultText: '壊れた鏡が井戸に歌っている。割れ目から漏れる音が不協和音を奏でる。壊れているのに歌い続けている。止め方が分からない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_broken_entangle',
    conditions: { s1: 'mod_broken', s4: 'pred_entangle' },
    resultText: '壊れた鏡が井戸に絡みついている。破片同士が互いに噛み合い、歪な網を作っている。何かを捕らえようとしているのか、自分が崩れないよう支え合っているのか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_broken_flee',
    conditions: { s1: 'mod_broken', s4: 'pred_flee' },
    resultText: '壊れた鏡が井戸に逃げていく。破片がばらばらに飛び散りながら井戸の中へ落ちた。逃げたかったのか、落ちただけなのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_broken_shine',
    conditions: { s1: 'mod_broken', s4: 'pred_shine' },
    resultText: '壊れた鏡が井戸に輝く。割れた面がそれぞれ違う角度で光を返し、井戸の中が万華鏡のようになっている。美しいが、少し目が眩む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p09_broken_rain_down',
    conditions: { s1: 'mod_broken', s4: 'pred_rain_down' },
    resultText: '壊れた鏡が井戸に降り注いでいる。空から砕けた鏡の雨が降っている。もとは一枚の大きな鏡だったのかもしれない。今は粉々だ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_broken_dance',
    conditions: { s1: 'mod_broken', s4: 'pred_dance' },
    resultText: '壊れた鏡が井戸に踊っている。破片が不揃いに跳ねる。壊れる前の動きを思い出そうとしているように見えた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_broken_melt',
    conditions: { s1: 'mod_broken', s4: 'pred_melt' },
    resultText: '壊れた鏡が井戸に溶けている。破片の境目が曖昧になり、ゆっくりと一つに戻ろうとしている。修復なのか、消滅なのか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_broken_laugh',
    conditions: { s1: 'mod_broken', s4: 'pred_laugh' },
    resultText: '壊れた鏡が井戸に笑っている。割れた面がそれぞれ違う表情で笑う。どの顔も自分のはずなのに、一つも見覚えがなかった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_broken_wait',
    conditions: { s1: 'mod_broken', s4: 'pred_wait' },
    resultText: '壊れた鏡が井戸に待っている。砕けたまま、誰かが拾い集めてくれるのを待っているのだろう。そんな暇はなかった。',
    damage: 0,
    quill: 3
  },

  // === 屈強な × 各述語 ===
  {
    id: 'p09_mighty_whisper',
    conditions: { s1: 'mod_mighty', s4: 'pred_whisper' },
    resultText: '屈強な鏡が井戸に囁いている。分厚い鏡面から発せられる声は低く、地鳴りのように腹に響く。囁きなのに、体が震えた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_mighty_sleep',
    conditions: { s1: 'mod_mighty', s4: 'pred_sleep' },
    resultText: '屈強な鏡が井戸に眠っている。井戸の底を完全に塞ぐほどの巨大な鏡が横たわっている。動かす手段が思い浮かばない。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p09_mighty_sing',
    conditions: { s1: 'mod_mighty', s4: 'pred_sing' },
    resultText: '屈強な鏡が井戸に歌っている。力強い共鳴が井戸を揺らし、周囲の地面にひびが入った。歌声は雄々しいが、迷惑だ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_mighty_entangle',
    conditions: { s1: 'mod_mighty', s4: 'pred_entangle' },
    resultText: '屈強な鏡が井戸に絡みついている。太い腕のような鏡面の突起が井戸を締め上げている。石壁が悲鳴を上げて崩れ始めた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p09_mighty_flee',
    conditions: { s1: 'mod_mighty', s4: 'pred_flee' },
    resultText: '屈強な鏡が井戸に逃げていく。あの巨体が井戸に入るのかと思ったが、するりと吸い込まれた。井戸の方が広がったように見えた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_mighty_shine',
    conditions: { s1: 'mod_mighty', s4: 'pred_shine' },
    resultText: '屈強な鏡が井戸に輝く。圧倒的な光量が井戸から噴き出し、昼間のように周囲を照らす。力で光っている。そう感じた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_mighty_rain_down',
    conditions: { s1: 'mod_mighty', s4: 'pred_rain_down' },
    resultText: '屈強な鏡が井戸に降り注いでいる。盾ほどの大きさの鏡が次々と空から落ちてくる。地面が陥没した。全力で走って逃げた。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p09_mighty_dance',
    conditions: { s1: 'mod_mighty', s4: 'pred_dance' },
    resultText: '屈強な鏡が井戸に踊っている。地響きを立てて跳ねるたびに、井戸の石組みが崩れていく。豪快で、破壊的だった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_mighty_melt',
    conditions: { s1: 'mod_mighty', s4: 'pred_melt' },
    resultText: '屈強な鏡が井戸に溶けている。あの頑丈な鏡面が飴のように崩れていく。強さは永遠ではないということだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_mighty_laugh',
    conditions: { s1: 'mod_mighty', s4: 'pred_laugh' },
    resultText: '屈強な鏡が井戸に笑っている。腹の底から湧き上がるような笑い声が井戸を揺らす。何がそんなに可笑しいのか、誰にも分からない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_mighty_wait',
    conditions: { s1: 'mod_mighty', s4: 'pred_wait' },
    resultText: '屈強な鏡が井戸に待っている。微動だにせず、井戸の底に構えている。挑戦者を待つ武人のような佇まいだった。',
    damage: 1,
    quill: 3
  },

  // === 凍てついた × 各述語 ===
  {
    id: 'p09_frozen_whisper',
    conditions: { s1: 'mod_frozen', s4: 'pred_whisper' },
    resultText: '凍てついた鏡が井戸に囁いている。霜に覆われた鏡面から、白い息のような声が漏れる。言葉の一つ一つが凍って、空中で止まった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_frozen_sleep',
    conditions: { s1: 'mod_frozen', s4: 'pred_sleep' },
    resultText: '凍てついた鏡が井戸に眠っている。氷の中に閉じ込められた鏡が、井戸の底で凍結している。映っているのは、遠い冬の景色だった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_frozen_sing',
    conditions: { s1: 'mod_frozen', s4: 'pred_sing' },
    resultText: '凍てついた鏡が井戸に歌っている。氷が軋む音が旋律を奏でる。寒さが骨に染みるが、歌は澄んで美しかった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p09_frozen_entangle',
    conditions: { s1: 'mod_frozen', s4: 'pred_entangle' },
    resultText: '凍てついた鏡が井戸に絡みついている。氷の結晶が鏡面から伸び、井戸の壁を凍りつかせている。触れた指先の感覚がなくなった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_frozen_flee',
    conditions: { s1: 'mod_frozen', s4: 'pred_flee' },
    resultText: '凍てついた鏡が井戸に逃げていく。氷の軌跡を残しながら井戸の中へ滑り落ちた。後には霜柱だけが残った。',
    damage: 1,
    quill: 2
  },
  {
    id: 'p09_frozen_shine',
    conditions: { s1: 'mod_frozen', s4: 'pred_shine' },
    resultText: '凍てついた鏡が井戸に輝く。氷と鏡面が光を屈折させ、虹色の光が井戸から立ち昇っている。冷たく、美しい。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p09_frozen_shine', name: '虹氷の鏡片', description: '溶けない氷に閉じ込められた鏡。傾けると七色の光を散らす', sellPrice: 9 }]
  },
  {
    id: 'p09_frozen_rain_down',
    conditions: { s1: 'mod_frozen', s4: 'pred_rain_down' },
    resultText: '凍てついた鏡が井戸に降り注いでいる。氷漬けの鏡の破片が雹のように降ってくる。頭を庇ったが、肩を打たれた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p09_frozen_dance',
    conditions: { s1: 'mod_frozen', s4: 'pred_dance' },
    resultText: '凍てついた鏡が井戸の縁で回転している。触れた石が次々と凍りつき、白い霧が立ち上る。手がかじかんで感覚がなくなった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_frozen_melt',
    conditions: { s1: 'mod_frozen', s4: 'pred_melt' },
    resultText: '凍てついた鏡が井戸に溶けている。氷が溶け、鏡面が露出し、さらに鏡自体も溶けていく。二重の融解。井戸の底に水溜まりができた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_frozen_laugh',
    conditions: { s1: 'mod_frozen', s4: 'pred_laugh' },
    resultText: '凍てついた鏡が井戸に笑っている。氷が割れるような乾いた笑い声が反響する。笑うたびに冷気が強まり、吐く息が白くなった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_frozen_wait',
    conditions: { s1: 'mod_frozen', s4: 'pred_wait' },
    resultText: '凍てついた鏡が井戸に待っている。凍結したまま、春を待つように底に沈んでいる。だがこの井戸に春は来ない。',
    damage: 1,
    quill: 4
  },

  // === 透き通った × 各述語 ===
  {
    id: 'p09_clear_whisper',
    conditions: { s1: 'mod_clear', s4: 'pred_whisper' },
    resultText: '透き通った鏡が井戸に囁いている。ガラスのように透明な鏡から、澄んだ声が聞こえる。言葉の意味は分からないが、真実を告げている気がした。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_clear_sleep',
    conditions: { s1: 'mod_clear', s4: 'pred_sleep' },
    resultText: '透き通った鏡が井戸に眠っている。そこに鏡があると気づくまで時間がかかった。透明すぎて、井戸の底の石と見分けがつかない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_clear_sing',
    conditions: { s1: 'mod_clear', s4: 'pred_sing' },
    resultText: '透き通った鏡が井戸に歌っている。水晶のように透明な声が井戸に響く。聴いていると心まで透き通るようだった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p09_clear_sing', name: '透明な歌声の瓶', description: '栓を抜くと水晶の声が零れる。一度きり、心を澄ませてくれる', sellPrice: 12 }]
  },
  {
    id: 'p09_clear_entangle',
    conditions: { s1: 'mod_clear', s4: 'pred_entangle' },
    resultText: '透き通った鏡が井戸に絡みついている。見えない糸のように井戸を縛っている。触れると確かに硬い感触がある。見えないから余計に厄介だ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_clear_flee',
    conditions: { s1: 'mod_clear', s4: 'pred_flee' },
    resultText: '透き通った鏡が井戸に逃げていく。透明な鏡が空気に溶けるように消えた。逃げたのか、最初からなかったのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_clear_shine',
    conditions: { s1: 'mod_clear', s4: 'pred_shine' },
    resultText: '透き通った鏡が井戸に輝く。透明な鏡面が純粋な光を放ち、井戸の隅々まで照らし出す。隠し事ができない光だった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p09_clear_rain_down',
    conditions: { s1: 'mod_clear', s4: 'pred_rain_down' },
    resultText: '透き通った鏡が井戸に降り注いでいる。見えない破片が空から降ってくる。頬に痛みを感じて初めて、当たったことに気づいた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_clear_dance',
    conditions: { s1: 'mod_clear', s4: 'pred_dance' },
    resultText: '透き通った鏡が井戸に踊っている。空中に透明な何かが舞っているのが、光の屈折でかろうじて分かる。幽霊の踊りのようだった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_clear_melt',
    conditions: { s1: 'mod_clear', s4: 'pred_melt' },
    resultText: '透き通った鏡が井戸に溶けている。透明な液体が井戸の壁を伝っている。水と見分けがつかない。舐めてみたら、舌が少し痺れた。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_clear_laugh',
    conditions: { s1: 'mod_clear', s4: 'pred_laugh' },
    resultText: '透き通った鏡が井戸に笑っている。姿は見えないのに、澄んだ笑い声だけが聞こえる。楽しそうだが、少し怖い。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p09_clear_wait',
    conditions: { s1: 'mod_clear', s4: 'pred_wait' },
    resultText: '透き通った鏡が井戸に待っている。見えない鏡がそこにあることを、直感だけが告げている。手を伸ばすと、確かに触れた。',
    damage: 0,
    quill: 4
  },

  // === 呪われた × 各述語（orig_p09_pred以外） ===
  {
    id: 'p09_cursed_whisper',
    conditions: { s1: 'mod_cursed', s4: 'pred_whisper' },
    resultText: '呪われた鏡が井戸に囁いている。映る者の秘密を暴く声が、井戸の底から這い上がってくる。聞いてはいけない。だが、足が動かなかった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_cursed_sleep',
    conditions: { s1: 'mod_cursed', s4: 'pred_sleep' },
    resultText: '呪われた鏡が井戸に眠っている。覗き込んだ者を道連れに眠らせる鏡だ。井戸の縁に、眠ったまま倒れている旅人がいた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p09_cursed_sing',
    conditions: { s1: 'mod_cursed', s4: 'pred_sing' },
    resultText: '呪われた鏡が井戸に歌っている。聴いた者は三日三晩その旋律が頭から離れなくなる。耳を塞いだが、骨伝導で聞こえた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_cursed_entangle',
    conditions: { s1: 'mod_cursed', s4: 'pred_entangle' },
    resultText: '呪われた鏡が井戸に絡みついている。呪いの根が井戸を蝕み、近づく者の影を捕らえる。影を踏まれて、膝から崩れた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p09_cursed_flee',
    conditions: { s1: 'mod_cursed', s4: 'pred_flee' },
    resultText: '呪われた鏡が井戸に逃げていく。呪いを撒き散らしながら井戸の底へ沈んでいった。逃げた先で、また誰かを呪うのだろう。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p09_cursed_shine',
    conditions: { s1: 'mod_cursed', s4: 'pred_shine' },
    resultText: '呪われた鏡が井戸に輝く。禍々しい紫の光が井戸から溢れ、見つめた者の目に残像を焼き付ける。しばらく視界の隅に紫が残った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p09_cursed_rain_down',
    conditions: { s1: 'mod_cursed', s4: 'pred_rain_down' },
    resultText: '呪われた鏡が井戸に降り注いでいる。空から降る鏡の破片一つ一つに呪いが宿っている。当たった場所が黒く変色した。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p09_cursed_dance',
    conditions: { s1: 'mod_cursed', s4: 'pred_dance' },
    resultText: '呪われた鏡が井戸に踊っている。見た者を踊り狂わせる呪いの舞。目を逸らすのが一瞬遅れ、足が勝手に数歩踏んだ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p09_cursed_melt',
    conditions: { s1: 'mod_cursed', s4: 'pred_melt' },
    resultText: '呪われた鏡が井戸の中で溶けている。黒い液体が底に広がり、そこに映る空は夜だった。今は昼なのに。液体に触れた指先が冷たく痺れる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p09_cursed_laugh',
    conditions: { s1: 'mod_cursed', s4: 'pred_laugh' },
    resultText: '呪われた鏡が井戸に笑っている。呪われた者たちの声が混じった笑い声。何十人分もの声が重なり、井戸が震えている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p09_cursed_wait',
    conditions: { s1: 'mod_cursed', s4: 'pred_wait' },
    resultText: '呪われた鏡が井戸に待っている。覗き込む者を永遠に待ち続ける呪い。井戸の周りの草が枯れ、虫の声が消えている。',
    damage: 1,
    quill: 4
  },

  // === 眠い × 各述語 ===
  {
    id: 'p09_sleepy_whisper',
    conditions: { s1: 'mod_sleepy', s4: 'pred_whisper' },
    resultText: '眠い鏡が井戸に囁いている。ぼんやりとした声が聞こえる。囁いているのか、寝言なのか判然としない。こちらまで眠くなった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_sleep',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sleep' },
    resultText: '眠い鏡が井戸に眠っている。当然のことだが、当然すぎて面白くない。鏡も同意見らしく、寝返りすら打たなかった。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p09_sleepy_sing',
    conditions: { s1: 'mod_sleepy', s4: 'pred_sing' },
    resultText: '眠い鏡が井戸に歌っている。子守歌のような、途切れ途切れの旋律。歌の途中で何度も寝落ちしかけている。つられて欠伸が出た。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p09_sleepy_entangle',
    conditions: { s1: 'mod_sleepy', s4: 'pred_entangle' },
    resultText: '眠い鏡が井戸に絡みついている。だるそうに井戸の壁にもたれかかっている、と言った方が正しい。力がないので、押せばずれた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_flee',
    conditions: { s1: 'mod_sleepy', s4: 'pred_flee' },
    resultText: '眠い鏡が井戸に逃げていく。のろのろと井戸の底へ沈んでいった。逃げるというより、眠る場所を探しているだけだった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_shine',
    conditions: { s1: 'mod_sleepy', s4: 'pred_shine' },
    resultText: '眠い鏡が井戸に輝く。ぼんやりとした光が井戸から漏れている。明るいのか暗いのか分からない。半分寝ているような光だ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_rain_down',
    conditions: { s1: 'mod_sleepy', s4: 'pred_rain_down' },
    resultText: '眠い鏡が井戸に降り注いでいる。ゆっくり、ゆっくり、鏡の欠片が空から落ちてくる。避ける余裕は十分にあった。',
    damage: 1,
    quill: 2
  },
  {
    id: 'p09_sleepy_dance',
    conditions: { s1: 'mod_sleepy', s4: 'pred_dance' },
    resultText: '眠い鏡が井戸に踊っている。踊りというより、ふらふらと揺れているだけだ。酔っ払いの千鳥足に似ていた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_melt',
    conditions: { s1: 'mod_sleepy', s4: 'pred_melt' },
    resultText: '眠い鏡が井戸に溶けている。溶けているのか、ただぐったりしているのか。鏡の縁がだらしなく垂れ下がっている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_laugh',
    conditions: { s1: 'mod_sleepy', s4: 'pred_laugh' },
    resultText: '眠い鏡が井戸に笑っている。寝ぼけた笑い声が時々聞こえる。夢の中で何か面白いものを見ているらしい。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p09_sleepy_wait',
    conditions: { s1: 'mod_sleepy', s4: 'pred_wait' },
    resultText: '眠い鏡が井戸に待っている。待っているのか眠っているのか、本人にも分かっていないだろう。どちらでも同じことだ。',
    damage: 0,
    quill: 3
  }
];
