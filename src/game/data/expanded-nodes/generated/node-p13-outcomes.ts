// 裂け目: 鋭い [主語*]が 裂け目から [述語*]
// 可変: s2(subject), s4(predicate) — 17×9=153通り + 元テキスト
import type { Outcome } from '../../../engine/types';

export const nodeP13Outcomes: Outcome[] = [
  // === 元テキスト ===
  {
    id: 'p13_orig',
    conditions: { s2: 'subj_song', s4: 'orig_p13_pred' },
    resultText: '鋭い歌が裂け目から囁いている。旋律に似た何かが岩の隙間から漏れ出し、耳の奥を引っ掻く。意味はないが、足が止まる。',
    damage: 2,
    quill: 3
  },

  // === 子猫 × 各述語 ===
  {
    id: 'p13_kitten_gaze',
    conditions: { s2: 'subj_kitten', s4: 'pred_gaze' },
    resultText: '鋭い子猫が裂け目から見つめている。闇の底に金色の双眸だけが浮かんでいる。瞬きしない。こちらが先に目を逸らした。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_kitten_whisper',
    conditions: { s2: 'subj_kitten', s4: 'pred_whisper' },
    resultText: '鋭い子猫が裂け目から囁いている。甲高い鳴き声が反響し、人語に聞こえる。「降りてこい」と言ったように思えた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_kitten_sing',
    conditions: { s2: 'subj_kitten', s4: 'pred_sing' },
    resultText: '鋭い子猫が裂け目から歌っている。喉を震わせる細い声が岩壁に反響し、和音のように聞こえる。野生の子猫がする声ではない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_kitten_flee',
    conditions: { s2: 'subj_kitten', s4: 'pred_flee' },
    resultText: '鋭い子猫が裂け目から逃げていく。暗闇の中を爪音だけが遠ざかる。何かから逃げているらしい。追いかける気にはならない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p13_kitten_shine',
    conditions: { s2: 'subj_kitten', s4: 'pred_shine' },
    resultText: '鋭い子猫が裂け目から輝く。毛並みが光を帯び、裂け目の底を照らしている。光源はない。子猫自身が発光している。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p13_kitten_shine', name: '猫の残光', description: '暗闇で微かに光る毛玉', sellPrice: 7 }]
  },
  {
    id: 'p13_kitten_rain_down',
    conditions: { s2: 'subj_kitten', s4: 'pred_rain_down' },
    resultText: '鋭い子猫が裂け目から降り注いでいる。無数の小さな影が上から落ちてくる。着地した子猫が一斉にこちらを見た。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_kitten_dance',
    conditions: { s2: 'subj_kitten', s4: 'pred_dance' },
    resultText: '鋭い子猫が裂け目から踊っている。岩の縁を軽やかに跳ね回り、爪が火花を散らす。楽しんでいるのか、威嚇しているのか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_kitten_melt',
    conditions: { s2: 'subj_kitten', s4: 'pred_melt' },
    resultText: '鋭い子猫が裂け目から溶けている。輪郭が滲んで闇に混ざっていく。最後に残ったのは、宙に浮く二つの目だけだった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_kitten_laugh',
    conditions: { s2: 'subj_kitten', s4: 'pred_laugh' },
    resultText: '鋭い子猫が裂け目から笑っている。口角が上がり、犬歯が覗く。猫の表情にしては人間じみている。背筋が冷えた。',
    damage: 2,
    quill: 4
  },

  // === 蛇 × 各述語 ===
  {
    id: 'p13_snake_gaze',
    conditions: { s2: 'subj_snake', s4: 'pred_gaze' },
    resultText: '鋭い蛇が裂け目から見つめている。縦長の瞳孔が暗闇に浮かび、瞬きを知らない。見つめ返すと体が硬直する。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_snake_whisper',
    conditions: { s2: 'subj_snake', s4: 'pred_whisper' },
    resultText: '鋭い蛇が裂け目から囁いている。舌が空気を割る音が言葉に聞こえる。何を言っているかは分からないが、耳が離せない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_snake_sing',
    conditions: { s2: 'subj_snake', s4: 'pred_sing' },
    resultText: '鋭い蛇が裂け目から歌っている。喉のない体が振動し、岩を楽器にして低い旋律を奏でている。蛇笛の逆だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_snake_flee',
    conditions: { s2: 'subj_snake', s4: 'pred_flee' },
    resultText: '鋭い蛇が裂け目から逃げていく。鱗が岩肌を擦る乾いた音が遠ざかる。裂け目の底に脱ぎ捨てた皮だけが残った。',
    damage: 0,
    quill: 3,
    rewardItems: [{ id: 'item_p13_snake_flee', name: '蛇の抜け殻', description: '鋭い鱗の跡が残る薄い皮', sellPrice: 5 }]
  },
  {
    id: 'p13_snake_shine',
    conditions: { s2: 'subj_snake', s4: 'pred_shine' },
    resultText: '鋭い蛇が裂け目から輝く。鱗の一枚一枚が光を反射し、裂け目の壁に無数の光点を投げかけている。宝石のように美しく、毒のように鮮やか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_snake_rain_down',
    conditions: { s2: 'subj_snake', s4: 'pred_rain_down' },
    resultText: '鋭い蛇が裂け目から降り注いでいる。天井の亀裂から細い体が次々と落ちてくる。地面が鱗で覆われていく。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p13_snake_dance',
    conditions: { s2: 'subj_snake', s4: 'pred_dance' },
    resultText: '鋭い蛇が裂け目から踊っている。鎌首をもたげ、左右に揺れる動きが催眠術のようだ。目が離せなくなる前に走った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_snake_melt',
    conditions: { s2: 'subj_snake', s4: 'pred_melt' },
    resultText: '鋭い蛇が裂け目から溶けている。鱗が液体になり、岩壁を伝って底へ流れ落ちる。毒なのか体液なのか。触れない方がいい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_snake_laugh',
    conditions: { s2: 'subj_snake', s4: 'pred_laugh' },
    resultText: '鋭い蛇が裂け目から笑っている。口を大きく開き、牙の間から空気が漏れる。笑い声には聞こえない。だが笑っている。',
    damage: 3,
    quill: 3
  },

  // === 竜 × 各述語 ===
  {
    id: 'p13_dragon_gaze',
    conditions: { s2: 'subj_dragon', s4: 'pred_gaze' },
    resultText: '鋭い竜が裂け目から見つめている。巨大な瞳が裂け目いっぱいに広がり、虹彩の奥に炎が揺れている。値踏みされている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_dragon_whisper',
    conditions: { s2: 'subj_dragon', s4: 'pred_whisper' },
    resultText: '鋭い竜が裂け目から囁いている。低い声が地面を振動させ、足裏から骨に伝わる。「去れ」と聞こえたが、竜語かもしれない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_dragon_sing',
    conditions: { s2: 'subj_dragon', s4: 'pred_sing' },
    resultText: '鋭い竜が裂け目から歌っている。地鳴りのような低音が旋律を持ち、岩壁に共鳴して裂け目全体が楽器になっている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_dragon_flee',
    conditions: { s2: 'subj_dragon', s4: 'pred_flee' },
    resultText: '鋭い竜が裂け目から逃げていく。地の底へ向かって翼をたたみ、落下していく。竜が逃げるほどのものが、この先にある。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_dragon_shine',
    conditions: { s2: 'subj_dragon', s4: 'pred_shine' },
    resultText: '鋭い竜が裂け目から輝く。鱗が溶岩のように赤く発光し、裂け目が火口に変わる。熱風が顔を焼く。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p13_dragon_rain_down',
    conditions: { s2: 'subj_dragon', s4: 'pred_rain_down' },
    resultText: '鋭い竜が裂け目から降り注いでいる。鱗の破片が上空から落下し、地面に突き刺さる。竜そのものではなく、竜の残骸だ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p13_dragon_dance',
    conditions: { s2: 'subj_dragon', s4: 'pred_dance' },
    resultText: '鋭い竜が裂け目から踊っている。巨体が岩壁を削りながら旋回し、裂け目が広がっていく。地形が変わるほどの踊り。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p13_dragon_melt',
    conditions: { s2: 'subj_dragon', s4: 'pred_melt' },
    resultText: '鋭い竜が裂け目から溶けている。鱗が一枚ずつ剥がれ落ち、赤い液体になって底へ流れる。竜の終わりを見ている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_dragon_laugh',
    conditions: { s2: 'subj_dragon', s4: 'pred_laugh' },
    resultText: '鋭い竜が裂け目から笑っている。腹の底から湧く笑い声が地震のように地面を揺らす。何がおかしいのかは、人間には分からない。',
    damage: 3,
    quill: 4
  },

  // === 蝶 × 各述語 ===
  {
    id: 'p13_butterfly_gaze',
    conditions: { s2: 'subj_butterfly', s4: 'pred_gaze' },
    resultText: '鋭い蝶が裂け目から見つめている。翅の模様が目玉に見え、瞬きもせずこちらを捉えている。風に揺れるたび視線が動く。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_butterfly_whisper',
    conditions: { s2: 'subj_butterfly', s4: 'pred_whisper' },
    resultText: '鋭い蝶が裂け目から囁いている。翅が擦れる音が言葉に聞こえる。耳を近づけると翅が頬を切った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_butterfly_sing',
    conditions: { s2: 'subj_butterfly', s4: 'pred_sing' },
    resultText: '鋭い蝶が裂け目から歌っている。翅の振動が超音波のような高音を生み、岩の表面に細かい亀裂が走る。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_butterfly_flee',
    conditions: { s2: 'subj_butterfly', s4: 'pred_flee' },
    resultText: '鋭い蝶が裂け目から逃げていく。刃のような翅が光を反射しながら遠ざかる。通り過ぎた草の葉が切れて落ちた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_butterfly_shine',
    conditions: { s2: 'subj_butterfly', s4: 'pred_shine' },
    resultText: '鋭い蝶が裂け目から輝く。翅の鱗粉が光を帯び、裂け目の暗闇にステンドグラスのような模様を映し出す。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p13_butterfly_shine', name: '蝶の鱗粉', description: '指先で光る粉。見る角度で色が変わる', sellPrice: 8 }]
  },
  {
    id: 'p13_butterfly_rain_down',
    conditions: { s2: 'subj_butterfly', s4: 'pred_rain_down' },
    resultText: '鋭い蝶が裂け目から降り注いでいる。翅の切れ端が紙吹雪のように舞い落ちる。触れると指先が切れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_butterfly_dance',
    conditions: { s2: 'subj_butterfly', s4: 'pred_dance' },
    resultText: '鋭い蝶が裂け目から踊っている。螺旋を描く飛行が刃の軌道に見える。近づいた虫が真っ二つに落ちた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_butterfly_melt',
    conditions: { s2: 'subj_butterfly', s4: 'pred_melt' },
    resultText: '鋭い蝶が裂け目から溶けている。翅が液体になり、虹色の水滴が岩壁を伝う。美しいが、触れた苔が枯れている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_butterfly_laugh',
    conditions: { s2: 'subj_butterfly', s4: 'pred_laugh' },
    resultText: '鋭い蝶が裂け目から笑っている。翅の紋様が歪んで笑顔に見える。風が吹くたび表情が変わる。気味が悪い。',
    damage: 1,
    quill: 3
  },

  // === 風 × 各述語 ===
  {
    id: 'p13_wind_gaze',
    conditions: { s2: 'subj_wind', s4: 'pred_gaze' },
    resultText: '鋭い風が裂け目から見つめている。吹き抜ける風に意志がある。顔に当たる空気の圧力が、視線のように一点に集中する。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_wind_whisper',
    conditions: { s2: 'subj_wind', s4: 'pred_whisper' },
    resultText: '鋭い風が裂け目から囁いている。細い隙間を通る風が笛のような音を立てる。方角を教えているのか、誘い込んでいるのか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_wind_sing',
    conditions: { s2: 'subj_wind', s4: 'pred_sing' },
    resultText: '鋭い風が裂け目から歌っている。岩の形が管楽器のように共鳴し、荒々しい旋律が谷間に響く。耳が痛い。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_wind_flee',
    conditions: { s2: 'subj_wind', s4: 'pred_flee' },
    resultText: '鋭い風が裂け目から逃げていく。突然の無風。裂け目が息を止めたように静まり返る。嵐の前の静けさかもしれない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_wind_shine',
    conditions: { s2: 'subj_wind', s4: 'pred_shine' },
    resultText: '鋭い風が裂け目から輝く。風に乗った砂粒が光を反射し、裂け目の中が金色の霧に包まれている。吸い込むと肺が焼ける。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_wind_rain_down',
    conditions: { s2: 'subj_wind', s4: 'pred_rain_down' },
    resultText: '鋭い風が裂け目から降り注いでいる。上空の裂け目から刃のような下降気流が叩きつける。立っていられない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p13_wind_dance',
    conditions: { s2: 'subj_wind', s4: 'pred_dance' },
    resultText: '鋭い風が裂け目から踊っている。乱気流が渦を巻き、小石や砂が螺旋を描いて舞い上がる。近づくと切り傷だらけになる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_wind_melt',
    conditions: { s2: 'subj_wind', s4: 'pred_melt' },
    resultText: '鋭い風が裂け目から溶けている。風が勢いを失い、空気が重くなっていく。裂け目の底から湿った匂いが立ち上る。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p13_wind_laugh',
    conditions: { s2: 'subj_wind', s4: 'pred_laugh' },
    resultText: '鋭い風が裂け目から笑っている。ひゅうひゅうと鳴る風の音が笑い声にしか聞こえない。何がおかしいのか、風に聞いても答えない。',
    damage: 1,
    quill: 3
  },

  // === 炎 × 各述語 ===
  {
    id: 'p13_flame_gaze',
    conditions: { s2: 'subj_flame', s4: 'pred_gaze' },
    resultText: '鋭い炎が裂け目から見つめている。揺れる炎の芯が瞳のように動き、こちらの動きを追っている。火に意識がある。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_flame_whisper',
    conditions: { s2: 'subj_flame', s4: 'pred_whisper' },
    resultText: '鋭い炎が裂け目から囁いている。爆ぜる音の合間に声が混じる。火に近づくと言葉が聞こえ、離れると消える。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_flame_sing',
    conditions: { s2: 'subj_flame', s4: 'pred_sing' },
    resultText: '鋭い炎が裂け目から歌っている。炎が大小に脈打ち、リズムを持って燃えている。燃料がないのに消えない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_flame_flee',
    conditions: { s2: 'subj_flame', s4: 'pred_flee' },
    resultText: '鋭い炎が裂け目から逃げていく。火の玉が岩壁を転がるように裂け目の底へ消えた。焦げ跡だけが道しるべのように残っている。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p13_flame_flee', name: '炎の焦げ跡', description: '触るとまだ温かい岩の欠片', sellPrice: 5 }]
  },
  {
    id: 'p13_flame_shine',
    conditions: { s2: 'subj_flame', s4: 'pred_shine' },
    resultText: '鋭い炎が裂け目から輝く。白熱した火柱が裂け目を貫き、昼のように明るくなる。目を開けていられない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p13_flame_rain_down',
    conditions: { s2: 'subj_flame', s4: 'pred_rain_down' },
    resultText: '鋭い炎が裂け目から降り注いでいる。火の粉が雨のように降り、地面の草が焼ける。裂け目が火山口に変わった。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p13_flame_dance',
    conditions: { s2: 'subj_flame', s4: 'pred_dance' },
    resultText: '鋭い炎が裂け目から踊っている。炎の舌が左右に揺れ、岩壁に影絵を映す。影は人の形をしている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_flame_melt',
    conditions: { s2: 'subj_flame', s4: 'pred_melt' },
    resultText: '鋭い炎が裂け目から溶けている。火が液体のように岩壁を伝い落ちる。溶岩ではない。炎そのものが溶けている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_flame_laugh',
    conditions: { s2: 'subj_flame', s4: 'pred_laugh' },
    resultText: '鋭い炎が裂け目から笑っている。爆ぜる音がけたたましく響き、炎が明滅する。火事場の笑い声だ。',
    damage: 3,
    quill: 3
  },

  // === 氷 × 各述語 ===
  {
    id: 'p13_ice_gaze',
    conditions: { s2: 'subj_ice', s4: 'pred_gaze' },
    resultText: '鋭い氷が裂け目から見つめている。氷柱の表面に映り込んだ自分の顔が、微かに違う表情をしている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_ice_whisper',
    conditions: { s2: 'subj_ice', s4: 'pred_whisper' },
    resultText: '鋭い氷が裂け目から囁いている。氷が軋む音が人語に聞こえる。気温が下がるにつれ、声が大きくなる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_ice_sing',
    conditions: { s2: 'subj_ice', s4: 'pred_sing' },
    resultText: '鋭い氷が裂け目から歌っている。風が氷柱の隙間を通り、グラスハープのような音色を奏でる。美しいが、指先が痺れ始めた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_ice_flee',
    conditions: { s2: 'subj_ice', s4: 'pred_flee' },
    resultText: '鋭い氷が裂け目から逃げていく。氷柱が次々と砕け落ち、裂け目の底へ滑り落ちていく。溶けているのではなく、退いている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p13_ice_shine',
    conditions: { s2: 'subj_ice', s4: 'pred_shine' },
    resultText: '鋭い氷が裂け目から輝く。結晶が光を分解し、裂け目の中に虹が架かっている。手を伸ばすと凍傷した。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_ice_rain_down',
    conditions: { s2: 'subj_ice', s4: 'pred_rain_down' },
    resultText: '鋭い氷が裂け目から降り注いでいる。針のような氷片が雨のように降る。地面が白く覆われ、血が点々と混じる。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p13_ice_dance',
    conditions: { s2: 'subj_ice', s4: 'pred_dance' },
    resultText: '鋭い氷が裂け目から踊っている。氷片が宙を舞い、ぶつかり合って高い音を立てる。風鈴のような音が不釣り合いに美しい。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_ice_melt',
    conditions: { s2: 'subj_ice', s4: 'pred_melt' },
    resultText: '鋭い氷が裂け目から溶けている。水滴が岩肌を伝い、底に水溜まりを作っている。映り込む空は裂け目の向こう側の空だ。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p13_ice_melt', name: '裂け目の雫', description: '溶けない水滴。中に空が映っている', sellPrice: 9 }]
  },
  {
    id: 'p13_ice_laugh',
    conditions: { s2: 'subj_ice', s4: 'pred_laugh' },
    resultText: '鋭い氷が裂け目から笑っている。亀裂が走るたびにきしむ音が上がる。割れる寸前の氷が、笑い声を上げている。',
    damage: 2,
    quill: 3
  },

  // === 影 × 各述語 ===
  {
    id: 'p13_shadow_gaze',
    conditions: { s2: 'subj_shadow', s4: 'pred_gaze' },
    resultText: '鋭い影が裂け目から見つめている。暗闇の中に暗闇より濃い部分がある。目を凝らすと、輪郭が人の形をしていた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_shadow_whisper',
    conditions: { s2: 'subj_shadow', s4: 'pred_whisper' },
    resultText: '鋭い影が裂け目から囁いている。声の出どころが分からない。自分の影が裂け目に向かって伸びているのに気づいた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_shadow_sing',
    conditions: { s2: 'subj_shadow', s4: 'pred_sing' },
    resultText: '鋭い影が裂け目から歌っている。声はない。だが暗闇が律動的に脈打ち、体の中に旋律が直接流れ込む。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_shadow_flee',
    conditions: { s2: 'subj_shadow', s4: 'pred_flee' },
    resultText: '鋭い影が裂け目から逃げていく。闇が薄くなり、裂け目の底が見えるようになった。何もない。影だけが住んでいた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_shadow_shine',
    conditions: { s2: 'subj_shadow', s4: 'pred_shine' },
    resultText: '鋭い影が裂け目から輝く。影が光るという矛盾が目を眩ませる。黒い光が視界を焼き、しばらく何も見えなくなった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p13_shadow_rain_down',
    conditions: { s2: 'subj_shadow', s4: 'pred_rain_down' },
    resultText: '鋭い影が裂け目から降り注いでいる。暗闇の切れ端が雪のように降り、触れた場所の色が消えていく。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_shadow_dance',
    conditions: { s2: 'subj_shadow', s4: 'pred_dance' },
    resultText: '鋭い影が裂け目から踊っている。壁に映る影が音もなく跳ね回る。光源がないのに影だけが動いている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_shadow_melt',
    conditions: { s2: 'subj_shadow', s4: 'pred_melt' },
    resultText: '鋭い影が裂け目から溶けている。闇が滴り落ち、黒い水溜まりを作っている。覗き込むと底がない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_shadow_laugh',
    conditions: { s2: 'subj_shadow', s4: 'pred_laugh' },
    resultText: '鋭い影が裂け目から笑っている。笑い声は自分のものに似ている。振り返ると、自分の影がない。',
    damage: 3,
    quill: 5
  },

  // === 歌 × 各述語 ===
  {
    id: 'p13_song_gaze',
    conditions: { s2: 'subj_song', s4: 'pred_gaze' },
    resultText: '鋭い歌が裂け目から見つめている。旋律が耳に届くたび、裂け目の奥に目があるような感覚がする。歌に見られている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_song_whisper',
    conditions: { s2: 'subj_song', s4: 'pred_whisper' },
    resultText: '鋭い歌が裂け目から囁いている。旋律に似た何かが岩の隙間から漏れ出し、耳の奥を引っ掻く。意味はないが、足が止まる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_song_sing',
    conditions: { s2: 'subj_song', s4: 'pred_sing' },
    resultText: '鋭い歌が裂け目から歌っている。歌が歌う。裂け目が共鳴箱になり、自己増殖する旋律が空気を満たす。頭の中まで占領される。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_song_flee',
    conditions: { s2: 'subj_song', s4: 'pred_flee' },
    resultText: '鋭い歌が裂け目から逃げていく。旋律が徐々に小さくなり、岩の奥へ消えた。静寂が戻ると耳鳴りだけが残った。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p13_song_shine',
    conditions: { s2: 'subj_song', s4: 'pred_shine' },
    resultText: '鋭い歌が裂け目から輝く。音が光に変わり、旋律の形が目に見える。高音は白く、低音は赤い。裂け目がオーロラのように染まった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p13_song_shine', name: '歌の光', description: '瓶に閉じ込めた旋律。振ると光る', sellPrice: 10 }]
  },
  {
    id: 'p13_song_rain_down',
    conditions: { s2: 'subj_song', s4: 'pred_rain_down' },
    resultText: '鋭い歌が裂け目から降り注いでいる。音の粒が上から落ちてくる。一粒一粒が違う音程で、着地すると弾ける。頭が割れそうだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p13_song_dance',
    conditions: { s2: 'subj_song', s4: 'pred_dance' },
    resultText: '鋭い歌が裂け目から踊っている。旋律がリズムを変え、テンポを上げ、体が勝手に動き出す。足が裂け目の縁に向かっている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_song_melt',
    conditions: { s2: 'subj_song', s4: 'pred_melt' },
    resultText: '鋭い歌が裂け目から溶けている。旋律が崩れ、音が不協和音に変わっていく。美しかった歌の残骸が、耳の中でざらつく。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p13_song_laugh',
    conditions: { s2: 'subj_song', s4: 'pred_laugh' },
    resultText: '鋭い歌が裂け目から笑っている。旋律が歪み、笑い声のフレーズが繰り返される。陽気な曲なのに寒気がする。',
    damage: 2,
    quill: 3
  },

  // === 沈黙 × 各述語 ===
  {
    id: 'p13_silence_gaze',
    conditions: { s2: 'subj_silence', s4: 'pred_gaze' },
    resultText: '鋭い沈黙が裂け目から見つめている。音が消えた空間が視線の重さを持つ。何もないのに、何かがいる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_silence_whisper',
    conditions: { s2: 'subj_silence', s4: 'pred_whisper' },
    resultText: '鋭い沈黙が裂け目から囁いている。音がないのに言葉が届く。鼓膜を介さず直接頭に入ってくる。止め方が分からない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_silence_sing',
    conditions: { s2: 'subj_silence', s4: 'pred_sing' },
    resultText: '鋭い沈黙が裂け目から歌っている。無音の歌。だが体が旋律を感じている。骨が振動し、血が拍子を刻む。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_silence_flee',
    conditions: { s2: 'subj_silence', s4: 'pred_flee' },
    resultText: '鋭い沈黙が裂け目から逃げていく。音が戻ってくる。風の音、虫の声、自分の呼吸。沈黙がいた間、全てが止まっていた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p13_silence_shine',
    conditions: { s2: 'subj_silence', s4: 'pred_shine' },
    resultText: '鋭い沈黙が裂け目から輝く。無音の空間が透明な光を放つ。光の中では声が出ない。叫んでも音にならない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_silence_rain_down',
    conditions: { s2: 'subj_silence', s4: 'pred_rain_down' },
    resultText: '鋭い沈黙が裂け目から降り注いでいる。音が一つずつ消えていく。鳥の声、風の音、足音。最後に心臓の音が消えかけて、走った。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p13_silence_dance',
    conditions: { s2: 'subj_silence', s4: 'pred_dance' },
    resultText: '鋭い沈黙が裂け目から踊っている。音のない空間が脈動し、広がったり縮んだりする。無音の波に酔う。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_silence_melt',
    conditions: { s2: 'subj_silence', s4: 'pred_melt' },
    resultText: '鋭い沈黙が裂け目から溶けている。静けさが薄れ、遠い音が少しずつ聞こえてくる。どこかで鐘が鳴っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_silence_laugh',
    conditions: { s2: 'subj_silence', s4: 'pred_laugh' },
    resultText: '鋭い沈黙が裂け目から笑っている。音のない笑い。横隔膜だけが動く感覚が体に伝わる。自分が笑っているのか、沈黙が笑わせているのか。',
    damage: 2,
    quill: 5
  },

  // === 騎士 × 各述語 ===
  {
    id: 'p13_knight_gaze',
    conditions: { s2: 'subj_knight', s4: 'pred_gaze' },
    resultText: '鋭い騎士が裂け目から見つめている。兜の隙間から光る目が、こちらの装備を値踏みしている。通行料を取る気だ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_knight_whisper',
    conditions: { s2: 'subj_knight', s4: 'pred_whisper' },
    resultText: '鋭い騎士が裂け目から囁いている。「引き返せ」。兜の奥から漏れる声は錆びている。忠告なのか脅迫なのか判断がつかない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_knight_sing',
    conditions: { s2: 'subj_knight', s4: 'pred_sing' },
    resultText: '鋭い騎士が裂け目から歌っている。軍歌の断片が金属の反響を伴って聞こえる。一人きりの騎士が、誰に聞かせるでもなく歌い続けている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_knight_flee',
    conditions: { s2: 'subj_knight', s4: 'pred_flee' },
    resultText: '鋭い騎士が裂け目から逃げていく。甲冑が岩に擦れる音が遠ざかる。騎士が逃げるとは。裂け目の底に何があるのか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_knight_shine',
    conditions: { s2: 'subj_knight', s4: 'pred_shine' },
    resultText: '鋭い騎士が裂け目から輝く。磨かれた甲冑が光を反射し、裂け目を照らす。眩しさが武器になっている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p13_knight_rain_down',
    conditions: { s2: 'subj_knight', s4: 'pred_rain_down' },
    resultText: '鋭い騎士が裂け目から降り注いでいる。甲冑の破片が上から落ちてくる。剣、兜、胸当て。騎士は一人だったはずだが、装備は数十人分ある。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_knight_dance',
    conditions: { s2: 'subj_knight', s4: 'pred_dance' },
    resultText: '鋭い騎士が裂け目から踊っている。剣を振り回す型稽古が、暗闘の中で踊りに見える。刃が空気を切る音だけが聞こえる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_knight_melt',
    conditions: { s2: 'subj_knight', s4: 'pred_melt' },
    resultText: '鋭い騎士が裂け目から溶けている。甲冑が錆びを通り越して液化し、岩壁を伝い落ちる。中身はとうにない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_knight_laugh',
    conditions: { s2: 'subj_knight', s4: 'pred_laugh' },
    resultText: '鋭い騎士が裂け目から笑っている。兜の中で反響する笑い声が金属音に変わり、不気味に長く続く。狂っている。',
    damage: 3,
    quill: 3
  },

  // === 魔女 × 各述語 ===
  {
    id: 'p13_witch_gaze',
    conditions: { s2: 'subj_witch', s4: 'pred_gaze' },
    resultText: '鋭い魔女が裂け目から見つめている。暗闇の中で目だけが光る。品定めする視線。こちらの手札を数えているようだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_witch_whisper',
    conditions: { s2: 'subj_witch', s4: 'pred_whisper' },
    resultText: '鋭い魔女が裂け目から囁いている。呪文の切れ端が耳に入り、頭の中で勝手に組み上がる。振り払うのに全力を使った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_witch_sing',
    conditions: { s2: 'subj_witch', s4: 'pred_sing' },
    resultText: '鋭い魔女が裂け目から歌っている。子守唄のような旋律が裂け目を満たす。聞いていると瞼が重くなる。危ない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_witch_flee',
    conditions: { s2: 'subj_witch', s4: 'pred_flee' },
    resultText: '鋭い魔女が裂け目から逃げていく。ローブの裾が暗闇に消える瞬間、何かが地面に落ちた。小さな薬瓶だ。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p13_witch_flee', name: '魔女の落とし物', description: '中身不明の薬瓶。ラベルが擦れて読めない', sellPrice: 8 }]
  },
  {
    id: 'p13_witch_shine',
    conditions: { s2: 'subj_witch', s4: 'pred_shine' },
    resultText: '鋭い魔女が裂け目から輝く。杖の先が青白く発光し、裂け目の壁に古代文字が浮かび上がる。読めないが、意味が体に染みる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_witch_rain_down',
    conditions: { s2: 'subj_witch', s4: 'pred_rain_down' },
    resultText: '鋭い魔女が裂け目から降り注いでいる。分裂した影が上から落ちてくる。どれが本体か分からない。全部が笑っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_witch_dance',
    conditions: { s2: 'subj_witch', s4: 'pred_dance' },
    resultText: '鋭い魔女が裂け目から踊っている。足元に魔法陣が浮かび、踊るたびに紋様が変わる。何を召喚しようとしているのか。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_witch_melt',
    conditions: { s2: 'subj_witch', s4: 'pred_melt' },
    resultText: '鋭い魔女が裂け目から溶けている。体が蝋のように崩れ、ローブだけが岩に張りつく。呪いの代償か、寿命か。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_witch_laugh',
    conditions: { s2: 'subj_witch', s4: 'pred_laugh' },
    resultText: '鋭い魔女が裂け目から笑っている。甲高い笑い声が裂け目に反響し、十人分の声に聞こえる。一人のはずなのに。',
    damage: 2,
    quill: 3
  },

  // === 王 × 各述語 ===
  {
    id: 'p13_king_gaze',
    conditions: { s2: 'subj_king', s4: 'pred_gaze' },
    resultText: '鋭い王が裂け目から見つめている。威厳のある眼差しが暗闇から突き刺さる。膝をつきたくなる衝動を堪えた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_king_whisper',
    conditions: { s2: 'subj_king', s4: 'pred_whisper' },
    resultText: '鋭い王が裂け目から囁いている。勅命のような声が岩に反響する。「ここは余の領土だ」。裂け目の底に王座があるらしい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_king_sing',
    conditions: { s2: 'subj_king', s4: 'pred_sing' },
    resultText: '鋭い王が裂け目から歌っている。国歌のような荘厳な旋律が響く。聴衆は岩壁だけ。亡国の王が一人で歌い続けている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_king_flee',
    conditions: { s2: 'subj_king', s4: 'pred_flee' },
    resultText: '鋭い王が裂け目から逃げていく。マントを翻し、暗闇の底へ消えた。王冠だけが裂け目の縁に転がっている。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p13_king_flee', name: '捨てられた王冠', description: '軽い。権威だけが重かったらしい', sellPrice: 12 }]
  },
  {
    id: 'p13_king_shine',
    conditions: { s2: 'subj_king', s4: 'pred_shine' },
    resultText: '鋭い王が裂け目から輝く。金糸の衣が光を放ち、裂け目が玉座の間のように照らされる。権威の残照だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_king_rain_down',
    conditions: { s2: 'subj_king', s4: 'pred_rain_down' },
    resultText: '鋭い王が裂け目から降り注いでいる。王の分身が上から次々と落ちてくる。全員が同じ顔で命令を叫んでいる。矛盾する勅令が交差する。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_king_dance',
    conditions: { s2: 'subj_king', s4: 'pred_dance' },
    resultText: '鋭い王が裂け目から踊っている。宮廷舞踏の型を一人で踏んでいる。相手のいない踊りが、裂け目の中で永遠に続く。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_king_melt',
    conditions: { s2: 'subj_king', s4: 'pred_melt' },
    resultText: '鋭い王が裂け目から溶けている。王の体が蝋人形のように崩れ、金の装飾だけが岩に残る。王とは器だった。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_king_laugh',
    conditions: { s2: 'subj_king', s4: 'pred_laugh' },
    resultText: '鋭い王が裂け目から笑っている。哄笑が岩壁に跳ね返り、嘲りの声に変わる。何もかもが可笑しいらしい。',
    damage: 2,
    quill: 3
  },

  // === 亡霊 × 各述語 ===
  {
    id: 'p13_ghost_gaze',
    conditions: { s2: 'subj_ghost', s4: 'pred_gaze' },
    resultText: '鋭い亡霊が裂け目から見つめている。半透明の眼窩にまだ視線が宿っている。死んでなお、何かを探し続けている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_ghost_whisper',
    conditions: { s2: 'subj_ghost', s4: 'pred_whisper' },
    resultText: '鋭い亡霊が裂け目から囁いている。生前の声の残滓が岩に染みついている。名前を呼ばれた気がしたが、聞き間違いだと思いたい。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_ghost_sing',
    conditions: { s2: 'subj_ghost', s4: 'pred_sing' },
    resultText: '鋭い亡霊が裂け目から歌っている。生きていた頃の歌が輪郭を失い、旋律だけが空気に漂う。悲しくはない。ただ遠い。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_ghost_flee',
    conditions: { s2: 'subj_ghost', s4: 'pred_flee' },
    resultText: '鋭い亡霊が裂け目から逃げていく。透明な体が岩壁をすり抜けて消えた。冷気だけが残っている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p13_ghost_shine',
    conditions: { s2: 'subj_ghost', s4: 'pred_shine' },
    resultText: '鋭い亡霊が裂け目から輝く。燐光が半透明の体を照らし、骨格が透けて見える。光源は胸の中にある。まだ燃えている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_ghost_rain_down',
    conditions: { s2: 'subj_ghost', s4: 'pred_rain_down' },
    resultText: '鋭い亡霊が裂け目から降り注いでいる。無数の亡霊が雨のように落ちてくる。地面に触れると消え、また降ってくる。終わらない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_ghost_dance',
    conditions: { s2: 'subj_ghost', s4: 'pred_dance' },
    resultText: '鋭い亡霊が裂け目から踊っている。体が透けるたびに動きが途切れ、また現れて続きを踊る。生前の記憶を繰り返している。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_ghost_melt',
    conditions: { s2: 'subj_ghost', s4: 'pred_melt' },
    resultText: '鋭い亡霊が裂け目から溶けている。すでに曖昧だった輪郭がさらに薄れ、空気に混ざっていく。二度目の死だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p13_ghost_laugh',
    conditions: { s2: 'subj_ghost', s4: 'pred_laugh' },
    resultText: '鋭い亡霊が裂け目から笑っている。空洞の口から声のない笑いが漏れる。何十年も同じことを繰り返しているらしい。',
    damage: 2,
    quill: 4
  },

  // === 鏡 × 各述語 ===
  {
    id: 'p13_mirror_gaze',
    conditions: { s2: 'subj_mirror', s4: 'pred_gaze' },
    resultText: '鋭い鏡が裂け目から見つめている。裂け目の壁面が鏡になり、自分の姿が映っている。映っている自分は、微かに首を傾げた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_mirror_whisper',
    conditions: { s2: 'subj_mirror', s4: 'pred_whisper' },
    resultText: '鋭い鏡が裂け目から囁いている。鏡面が微振動し、映り込んだ景色が歪むたびに音が漏れる。自分の声に似ている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_mirror_sing',
    conditions: { s2: 'subj_mirror', s4: 'pred_sing' },
    resultText: '鋭い鏡が裂け目から歌っている。鏡面が空気を震わせ、こちらの声を歪めて返す。反響が旋律になり、裂け目が合唱している。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_mirror_flee',
    conditions: { s2: 'subj_mirror', s4: 'pred_flee' },
    resultText: '鋭い鏡が裂け目から逃げていく。鏡面が奥へ後退し、映っていた自分の姿が小さくなっていく。手を伸ばしても届かない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_mirror_shine',
    conditions: { s2: 'subj_mirror', s4: 'pred_shine' },
    resultText: '鋭い鏡が裂け目から輝く。光源のない光を反射し、裂け目の中が白く飛ぶ。目が慣れると、鏡の中に別の裂け目が見えた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_mirror_rain_down',
    conditions: { s2: 'subj_mirror', s4: 'pred_rain_down' },
    resultText: '鋭い鏡が裂け目から降り注いでいる。鏡の破片が降り注ぎ、一片一片に違う自分が映っている。踏むと割れ、七年分の不運が降り積もる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_mirror_dance',
    conditions: { s2: 'subj_mirror', s4: 'pred_dance' },
    resultText: '鋭い鏡が裂け目から踊っている。回転する鏡面が光を乱反射させ、万華鏡のように景色が崩れる。酔いそうだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_mirror_melt',
    conditions: { s2: 'subj_mirror', s4: 'pred_melt' },
    resultText: '鋭い鏡が裂け目から溶けている。鏡面が水銀のように流れ落ち、銀色の水溜まりを作る。覗き込むと、鏡の中の世界が沈んでいくのが見えた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p13_mirror_laugh',
    conditions: { s2: 'subj_mirror', s4: 'pred_laugh' },
    resultText: '鋭い鏡が裂け目から笑っている。映り込んだ自分の顔が笑っている。こちらは笑っていないのに。鏡が自分の意志で動いている。',
    damage: 2,
    quill: 5
  },

  // === 人形 × 各述語 ===
  {
    id: 'p13_doll_gaze',
    conditions: { s2: 'subj_doll', s4: 'pred_gaze' },
    resultText: '鋭い人形が裂け目から見つめている。硝子の目が光を拾い、暗闇の中で二点だけが光る。首が微かに動いた気がした。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_doll_whisper',
    conditions: { s2: 'subj_doll', s4: 'pred_whisper' },
    resultText: '鋭い人形が裂け目から囁いている。紐を引くと喋る人形の仕掛けが、風で勝手に動いている。同じ言葉を繰り返す。「あそぼ」。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_doll_sing',
    conditions: { s2: 'subj_doll', s4: 'pred_sing' },
    resultText: '鋭い人形が裂け目から歌っている。オルゴールのような旋律が陶器の体から響く。蓋を開けた覚えはない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_doll_flee',
    conditions: { s2: 'subj_doll', s4: 'pred_flee' },
    resultText: '鋭い人形が裂け目から逃げていく。関節がぎこちなく動き、岩壁を這い降りていく。誰かの手で動かされているように見えるが、糸はない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p13_doll_shine',
    conditions: { s2: 'subj_doll', s4: 'pred_shine' },
    resultText: '鋭い人形が裂け目から輝く。磁器の肌が内側から発光し、ひび割れた箇所から光が漏れている。中に何かが入っている。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p13_doll_shine', name: '人形の光', description: '人形の欠片。握ると温かく光る', sellPrice: 7 }]
  },
  {
    id: 'p13_doll_rain_down',
    conditions: { s2: 'subj_doll', s4: 'pred_rain_down' },
    resultText: '鋭い人形が裂け目から降り注いでいる。大小さまざまな人形が落ちてくる。着地した人形が一斉に首をこちらに向けた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p13_doll_dance',
    conditions: { s2: 'subj_doll', s4: 'pred_dance' },
    resultText: '鋭い人形が裂け目から踊っている。バレエのように足を上げ、回転する。関節が軋む音がリズムを刻む。拍手を求めている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_doll_melt',
    conditions: { s2: 'subj_doll', s4: 'pred_melt' },
    resultText: '鋭い人形が裂け目から溶けている。蝋で出来ていたらしい。顔が崩れ、目と口が混ざり合う。最後まで笑顔を保とうとしていた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_doll_laugh',
    conditions: { s2: 'subj_doll', s4: 'pred_laugh' },
    resultText: '鋭い人形が裂け目から笑っている。口が動かないのに笑い声が聞こえる。腹話術の相方が、どこかに隠れている。',
    damage: 2,
    quill: 4
  },

  // === 雨 × 各述語 ===
  {
    id: 'p13_rain_gaze',
    conditions: { s2: 'subj_rain', s4: 'pred_gaze' },
    resultText: '鋭い雨が裂け目から見つめている。雨粒の一つ一つがレンズのように光を集め、無数の小さな目になっている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p13_rain_whisper',
    conditions: { s2: 'subj_rain', s4: 'pred_whisper' },
    resultText: '鋭い雨が裂け目から囁いている。雨音に声が混じる。水が岩を打つ音の合間に、聞き取れない言語が走る。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p13_rain_sing',
    conditions: { s2: 'subj_rain', s4: 'pred_sing' },
    resultText: '鋭い雨が裂け目から歌っている。水滴が岩肌を叩くリズムが旋律を成している。裂け目全体が打楽器になっている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p13_rain_flee',
    conditions: { s2: 'subj_rain', s4: 'pred_flee' },
    resultText: '鋭い雨が裂け目から逃げていく。雨が上向きに降り始め、裂け目から空へ吸い上げられていく。逆さまの雨。裂け目が乾いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p13_rain_shine',
    conditions: { s2: 'subj_rain', s4: 'pred_shine' },
    resultText: '鋭い雨が裂け目から輝く。雨粒が光を含み、落下する軌跡が光の線になる。裂け目に虹が架かっている。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p13_rain_shine', name: '裂け目の虹', description: '水滴に閉じ込めた虹。傾けると色が変わる', sellPrice: 9 }]
  },
  {
    id: 'p13_rain_rain_down',
    conditions: { s2: 'subj_rain', s4: 'pred_rain_down' },
    resultText: '鋭い雨が裂け目から降り注いでいる。針のような雨粒が岩を穿つ。水溜まりが赤い。雨自体が凶器になっている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p13_rain_dance',
    conditions: { s2: 'subj_rain', s4: 'pred_dance' },
    resultText: '鋭い雨が裂け目から踊っている。雨粒が重力を無視して螺旋を描き、水の彫刻を作っては崩す。美しいが、触れると切れる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p13_rain_melt',
    conditions: { s2: 'subj_rain', s4: 'pred_melt' },
    resultText: '鋭い雨が裂け目から溶けている。雨粒が空中で蒸発し、裂け目が霧に包まれる。視界がなくなり、足元が分からない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p13_rain_laugh',
    conditions: { s2: 'subj_rain', s4: 'pred_laugh' },
    resultText: '鋭い雨が裂け目から笑っている。雨音がけらけらと弾ける。天気雨のような明るさと、裂け目の暗さが噛み合わない。',
    damage: 1,
    quill: 4
  },
];
