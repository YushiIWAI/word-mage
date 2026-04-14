// 渡し場: 透き通った [主語*]が 渡し場で [述語*]
import type { Outcome } from '../../../engine/types';

export const nodeP25Outcomes: Outcome[] = [
  // === 元テキスト ===
  {
    id: 'p25_orig',
    conditions: { s2: 'subj_ghost', s4: 'orig_p25_pred' },
    resultText: '透き通った亡霊が渡し場で待っている。桟橋の端に腰を下ろし、水面を見つめている。隣に座ると、膝から体温が抜けていった。',
    damage: 2,
    quill: 3
  },

  // === 子猫 × 述語 ===
  {
    id: 'p25_kitten_gaze',
    conditions: { s2: 'subj_kitten', s4: 'pred_gaze' },
    resultText: '透き通った子猫が渡し場で見つめている。硝子の瞳が対岸を映している。何が見えているのか、生きている者にはわからない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_kitten_whisper',
    conditions: { s2: 'subj_kitten', s4: 'pred_whisper' },
    resultText: '透き通った子猫が渡し場で囁いている。鳴き声のような、祈りのような音が桟橋を這う。渡し守はうなずいた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_kitten_sleep',
    conditions: { s2: 'subj_kitten', s4: 'pred_sleep' },
    resultText: '透き通った子猫が渡し場で眠っている。桟橋の板の上で丸くなっている。体を通して川底の石が見える。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_kitten_sing',
    conditions: { s2: 'subj_kitten', s4: 'pred_sing' },
    resultText: '透き通った子猫が渡し場で歌っている。水の流れに合わせた旋律。舟が一艘、岸に寄ってきた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_kitten_flee',
    conditions: { s2: 'subj_kitten', s4: 'pred_flee' },
    resultText: '透き通った子猫が渡し場で逃げていく。水面を駆け、対岸へ消えた。足跡が波紋になって広がる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_kitten_shine',
    conditions: { s2: 'subj_kitten', s4: 'pred_shine' },
    resultText: '透き通った子猫が渡し場で輝く。朝日を浴びてプリズムになった。桟橋が虹色に染まる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_kitten_dance',
    conditions: { s2: 'subj_kitten', s4: 'pred_dance' },
    resultText: '透き通った子猫が渡し場で踊っている。桟橋の板をリズミカルに叩く足音。渡し守が手拍子を打つ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_kitten_melt',
    conditions: { s2: 'subj_kitten', s4: 'pred_melt' },
    resultText: '透き通った子猫が渡し場で溶けている。水たまりになって桟橋の隙間から川に落ちていく。渡し賃は払えたのか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_kitten_laugh',
    conditions: { s2: 'subj_kitten', s4: 'pred_laugh' },
    resultText: '透き通った子猫が渡し場で笑っている。口が三日月になっている。猫は笑わない。これは猫ではない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_kitten_wait',
    conditions: { s2: 'subj_kitten', s4: 'pred_wait' },
    resultText: '透き通った子猫が渡し場で待っている。桟橋の端で尻尾を揺らしている。舟が来ても乗らない。迎えを待っている。',
    damage: 0,
    quill: 4
  },

  // === 蛇 × 述語 ===
  {
    id: 'p25_snake_gaze',
    conditions: { s2: 'subj_snake', s4: 'pred_gaze' },
    resultText: '透き通った蛇が渡し場で見つめている。水中から硝子の眼がこちらを追う。足を止めた瞬間、靴の中が冷たくなった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_snake_whisper',
    conditions: { s2: 'subj_snake', s4: 'pred_whisper' },
    resultText: '透き通った蛇が渡し場で囁いている。舌が空気を舐めるたび、値が上がる。財布が軽くなった気がして手を当てた。本当に軽い。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_snake_sleep',
    conditions: { s2: 'subj_snake', s4: 'pred_sleep' },
    resultText: '透き通った蛇が渡し場で眠っている。とぐろを巻いて桟橋を塞いでいる。踏めば起きる。迂回する道はない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_snake_sing',
    conditions: { s2: 'subj_snake', s4: 'pred_sing' },
    resultText: '透き通った蛇が渡し場で歌っている。骨のない体が波打ち、水面に波紋を刻む。笛の音に似た歌だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_snake_flee',
    conditions: { s2: 'subj_snake', s4: 'pred_flee' },
    resultText: '透き通った蛇が渡し場で逃げていく。水中に滑り込み、透明なまま消えた。道が開いた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_snake_shine',
    conditions: { s2: 'subj_snake', s4: 'pred_shine' },
    resultText: '透き通った蛇が渡し場で輝く。鱗が光を集め、川面に光の道を作った。あれが渡し場の案内か。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_snake_dance',
    conditions: { s2: 'subj_snake', s4: 'pred_dance' },
    resultText: '透き通った蛇が渡し場で踊っている。鎌首が左右に揺れる。目を逸らせない。気づくと一歩、桟橋の縁に寄っていた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_snake_melt',
    conditions: { s2: 'subj_snake', s4: 'pred_melt' },
    resultText: '透き通った蛇が渡し場で溶けている。長い体が水飴のように桟橋に広がる。蛇だった水が川に流れていく。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_snake_laugh',
    conditions: { s2: 'subj_snake', s4: 'pred_laugh' },
    resultText: '透き通った蛇が渡し場で笑っている。口が裂けるほど開いている。牙はないが、笑い声が骨に響く。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_snake_wait',
    conditions: { s2: 'subj_snake', s4: 'pred_wait' },
    resultText: '透き通った蛇が渡し場で待っている。透明な体で待ち伏せる矛盾。だが足首に巻きつかれるまで、そこにいることに気づかなかった。',
    damage: 2,
    quill: 3
  },

  // === 竜 × 述語 ===
  {
    id: 'p25_dragon_gaze',
    conditions: { s2: 'subj_dragon', s4: 'pred_gaze' },
    resultText: '透き通った竜が渡し場で見つめている。水晶の瞳に映る対岸。竜が見つめる先に、渡る価値があるのかもしれない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_dragon_whisper',
    conditions: { s2: 'subj_dragon', s4: 'pred_whisper' },
    resultText: '透き通った竜が渡し場で囁いている。大きな体から小さな声。川の名前を教えてくれた。忘却の川だと。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_dragon_sleep',
    conditions: { s2: 'subj_dragon', s4: 'pred_sleep' },
    resultText: '透き通った竜が渡し場で眠っている。体が桟橋からはみ出し、川を堰き止めている。水位が上がり始めた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_dragon_sing',
    conditions: { s2: 'subj_dragon', s4: 'pred_sing' },
    resultText: '透き通った竜が渡し場で歌っている。低い咆哮が旋律になる。川が共鳴し、舟が自ら岸に寄ってきた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p25_dragon_flee',
    conditions: { s2: 'subj_dragon', s4: 'pred_flee' },
    resultText: '透き通った竜が渡し場で逃げていく。翼を広げ、空へ飛び立った。硝子の翼が光を散らす。見惚れた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_dragon_shine',
    conditions: { s2: 'subj_dragon', s4: 'pred_shine' },
    resultText: '透き通った竜が渡し場で輝く。全身が灯台になった。対岸への道が光の中に浮かび上がる。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_dragon_shine', name: '灯竜の鱗', description: '光を帯びた透明な鱗。暗い水面を照らす', sellPrice: 10 }]
  },
  {
    id: 'p25_dragon_dance',
    conditions: { s2: 'subj_dragon', s4: 'pred_dance' },
    resultText: '透き通った竜が渡し場で踊っている。巨体が桟橋を揺らす。板が軋み、釘が飛んで膝を裂いた。渡る前に壊れそうだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_dragon_melt',
    conditions: { s2: 'subj_dragon', s4: 'pred_melt' },
    resultText: '透き通った竜が渡し場で溶けている。巨大な水の塊が崩れ、川の水位が上がった。渡し場が半分沈んだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_dragon_laugh',
    conditions: { s2: 'subj_dragon', s4: 'pred_laugh' },
    resultText: '透き通った竜が渡し場で笑っている。腹の中が見える。最後に渡った者の骨が見えた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_dragon_wait',
    conditions: { s2: 'subj_dragon', s4: 'pred_wait' },
    resultText: '透き通った竜が渡し場で待っている。千年前から待っている。傍に立つと、竜の悲しみが空気を伝って胸を圧した。息が浅くなる。',
    damage: 2,
    quill: 5
  },

  // === 蝶 × 述語 ===
  {
    id: 'p25_butterfly_gaze',
    conditions: { s2: 'subj_butterfly', s4: 'pred_gaze' },
    resultText: '透き通った蝶が渡し場で見つめている。翅の模様が目のように開閉する。川を渡る資格を審査している。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_butterfly_whisper',
    conditions: { s2: 'subj_butterfly', s4: 'pred_whisper' },
    resultText: '透き通った蝶が渡し場で囁いている。翅を震わせて音を出す。対岸に花が咲いていると告げている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_butterfly_sleep',
    conditions: { s2: 'subj_butterfly', s4: 'pred_sleep' },
    resultText: '透き通った蝶が渡し場で眠っている。翅を閉じて杭に止まっている。硝子の標本のように動かない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_butterfly_sing',
    conditions: { s2: 'subj_butterfly', s4: 'pred_sing' },
    resultText: '透き通った蝶が渡し場で歌っている。翅の振動が旋律になる。蝶が歌うと、舟が岸を離れる。乗らねば。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_butterfly_flee',
    conditions: { s2: 'subj_butterfly', s4: 'pred_flee' },
    resultText: '透き通った蝶が渡し場で逃げていく。川面すれすれを飛び、対岸の森に消えた。道案内だったのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_butterfly_shine',
    conditions: { s2: 'subj_butterfly', s4: 'pred_shine' },
    resultText: '透き通った蝶が渡し場で輝く。翅が万華鏡になり、水面に色を散らす。渡し場が一瞬だけ美しい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_butterfly_shine', name: '万華鏡の翅', description: '水に触れると色が変わる蝶の翅', sellPrice: 10 }]
  },
  {
    id: 'p25_butterfly_dance',
    conditions: { s2: 'subj_butterfly', s4: 'pred_dance' },
    resultText: '透き通った蝶が渡し場で踊っている。数十匹に見える。一匹が残像を引いているだけだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_butterfly_melt',
    conditions: { s2: 'subj_butterfly', s4: 'pred_melt' },
    resultText: '透き通った蝶が渡し場で溶けている。翅から鱗粉が落ち、水面に虹の膜を作る。蝶は骨組みだけになった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_butterfly_laugh',
    conditions: { s2: 'subj_butterfly', s4: 'pred_laugh' },
    resultText: '透き通った蝶が渡し場で笑っている。翅の模様が笑顔に変わった。裏返すと泣き顔になる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_butterfly_wait',
    conditions: { s2: 'subj_butterfly', s4: 'pred_wait' },
    resultText: '透き通った蝶が渡し場で待っている。花のない桟橋で、何を待つのか。渡し守の肩に止まった。',
    damage: 0,
    quill: 4
  },

  // === 風 × 述語 ===
  {
    id: 'p25_wind_gaze',
    conditions: { s2: 'subj_wind', s4: 'pred_gaze' },
    resultText: '透き通った風が渡し場で見つめている。空気が渦を巻き、視線のように肌を撫でる。風に見られている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_wind_whisper',
    conditions: { s2: 'subj_wind', s4: 'pred_whisper' },
    resultText: '透き通った風が渡し場で囁いている。桟橋の隙間を通り抜ける音が言葉に聞こえる。「渡れ」と。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_wind_sleep',
    conditions: { s2: 'subj_wind', s4: 'pred_sleep' },
    resultText: '透き通った風が渡し場で眠っている。無風。水面が鏡のように静まり返っている。帆は動かない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_wind_sing',
    conditions: { s2: 'subj_wind', s4: 'pred_sing' },
    resultText: '透き通った風が渡し場で歌っている。桟橋の柱が笛になり、川全体が楽器になった。舟が風に乗って滑り出す。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_wind_flee',
    conditions: { s2: 'subj_wind', s4: 'pred_flee' },
    resultText: '透き通った風が渡し場で逃げていく。突風が一瞬で去り、帽子だけ対岸に飛ばされた。取りに行かねば。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_wind_shine',
    conditions: { s2: 'subj_wind', s4: 'pred_shine' },
    resultText: '透き通った風が渡し場で輝く。大気が光を帯び、川面が銀色に染まる。渡し場が神域のように見えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_wind_dance',
    conditions: { s2: 'subj_wind', s4: 'pred_dance' },
    resultText: '透き通った風が渡し場で踊っている。砂埃が舞い上がり、旅人の形を作っては崩れる。風の記憶だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_wind_melt',
    conditions: { s2: 'subj_wind', s4: 'pred_melt' },
    resultText: '透き通った風が渡し場で溶けている。風が消え、川霧が桟橋を飲んだ。三歩先が見えない。足元の板が腐っているのに気づかず、片足が抜けた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_wind_laugh',
    conditions: { s2: 'subj_wind', s4: 'pred_laugh' },
    resultText: '透き通った風が渡し場で笑っている。突風が桟橋を揺らし、板が軋む。帽子が川に落ち、荷物の紐が緩んだ。風が奪えるものを全部奪っていく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_wind_wait',
    conditions: { s2: 'subj_wind', s4: 'pred_wait' },
    resultText: '透き通った風が渡し場で待っている。帆を膨らませる準備ができている。あとは乗り手を待つだけだ。',
    damage: 0,
    quill: 4
  },

  // === 炎 × 述語 ===
  {
    id: 'p25_flame_gaze',
    conditions: { s2: 'subj_flame', s4: 'pred_gaze' },
    resultText: '透き通った炎が渡し場で見つめている。青白い火が桟橋の先端で揺れている。見返した瞬間、眉が焦げた。見えない炎は距離を誤らせる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_flame_whisper',
    conditions: { s2: 'subj_flame', s4: 'pred_whisper' },
    resultText: '透き通った炎が渡し場で囁いている。燃える音が言葉に聞こえる。渡し賃を値切ろうとしている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_flame_sleep',
    conditions: { s2: 'subj_flame', s4: 'pred_sleep' },
    resultText: '透き通った炎が渡し場で眠っている。灯籠の中で小さくなった火。風が吹いても揺れない。深い眠りだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_flame_sing',
    conditions: { s2: 'subj_flame', s4: 'pred_sing' },
    resultText: '透き通った炎が渡し場で歌っている。薪が爆ぜる音がリズムを刻む。篝火の歌に舟が引き寄せられてくる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_flame_flee',
    conditions: { s2: 'subj_flame', s4: 'pred_flee' },
    resultText: '透き通った炎が渡し場で逃げていく。火の玉が水面を跳ね、対岸で消えた。暗闇が戻った。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_flame_shine',
    conditions: { s2: 'subj_flame', s4: 'pred_shine' },
    resultText: '透き通った炎が渡し場で輝く。桟橋全体が青白い光に包まれた。熱はない。渡し場が幽世の門に見える。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_flame_dance',
    conditions: { s2: 'subj_flame', s4: 'pred_dance' },
    resultText: '透き通った炎が渡し場で踊っている。桟橋の板を焦がしながら飛び跳ねる。木造の渡し場が燃え始めた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_flame_melt',
    conditions: { s2: 'subj_flame', s4: 'pred_melt' },
    resultText: '透き通った炎が渡し場で溶けている。火が液体になって桟橋を流れる。触れても熱くない。冷たい火だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_flame_laugh',
    conditions: { s2: 'subj_flame', s4: 'pred_laugh' },
    resultText: '透き通った炎が渡し場で笑っている。炎が大きく揺れ、人の顔に見える。口を開けて笑っている。逃げた。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_flame_wait',
    conditions: { s2: 'subj_flame', s4: 'pred_wait' },
    resultText: '透き通った炎が渡し場で待っている。灯台の火が消えずにいる。誰かが帰ってくるのを待っている。',
    damage: 1,
    quill: 4
  },

  // === 氷 × 述語 ===
  {
    id: 'p25_ice_gaze',
    conditions: { s2: 'subj_ice', s4: 'pred_gaze' },
    resultText: '透き通った氷が渡し場で見つめている。氷柱の中に目がある。見つめ返した途端、指先の感覚が消えた。数えられた者は少しずつ凍る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_ice_whisper',
    conditions: { s2: 'subj_ice', s4: 'pred_whisper' },
    resultText: '透き通った氷が渡し場で囁いている。氷が軋む音が言葉になる。川が凍る前に渡れ、と。急いだ拍子に膝を板に打ちつけた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_ice_sleep',
    conditions: { s2: 'subj_ice', s4: 'pred_sleep' },
    resultText: '透き通った氷が渡し場で眠っている。川面が凍りつき、渡し場ごと閉じ込められた。靴底が氷に張りつき、引き剥がすのに体力を使った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_ice_sing',
    conditions: { s2: 'subj_ice', s4: 'pred_sing' },
    resultText: '透き通った氷が渡し場で歌っている。氷が割れる音が和音になる。春が近い。氷の渡し場はもうすぐ終わる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_ice_flee',
    conditions: { s2: 'subj_ice', s4: 'pred_flee' },
    resultText: '透き通った氷が渡し場で逃げていく。氷が割れて流氷になり、下流へ去った。渡し場に水が戻る。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_ice_shine',
    conditions: { s2: 'subj_ice', s4: 'pred_shine' },
    resultText: '透き通った氷が渡し場で輝く。凍った川面が鏡になり、空を映している。歩いて渡れそうだ。美しい罠かもしれない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_ice_dance',
    conditions: { s2: 'subj_ice', s4: 'pred_dance' },
    resultText: '透き通った氷が渡し場で踊っている。氷柱が風に揺れ、ぶつかり合う。硝子の風鈴のような音がする。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_ice_melt',
    conditions: { s2: 'subj_ice', s4: 'pred_melt' },
    resultText: '透き通った氷が渡し場で溶けている。桟橋に水溜まりが広がる。氷の中に閉じ込められていた花が現れた。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p25_ice_melt', name: '氷中花', description: '溶けない氷に閉じ込められた小さな花', sellPrice: 7 }]
  },
  {
    id: 'p25_ice_laugh',
    conditions: { s2: 'subj_ice', s4: 'pred_laugh' },
    resultText: '透き通った氷が渡し場で笑っている。ひび割れが笑顔の形に走る。足を乗せた瞬間、氷が砕けて片足が川に落ちた。水が骨まで冷たい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_ice_wait',
    conditions: { s2: 'subj_ice', s4: 'pred_wait' },
    resultText: '透き通った氷が渡し場で待っている。冬が来るのを待っている。川が完全に凍れば、渡し場はいらなくなる。',
    damage: 1,
    quill: 4
  },

  // === 影 × 述語 ===
  {
    id: 'p25_shadow_gaze',
    conditions: { s2: 'subj_shadow', s4: 'pred_gaze' },
    resultText: '透き通った影が渡し場で見つめている。透明な影。矛盾しているが、確かにそこにいる。視線だけが濃い。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_shadow_whisper',
    conditions: { s2: 'subj_shadow', s4: 'pred_whisper' },
    resultText: '透き通った影が渡し場で囁いている。自分の影が口を動かしている。渡るなと言っている。自分の影が。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_shadow_sleep',
    conditions: { s2: 'subj_shadow', s4: 'pred_sleep' },
    resultText: '透き通った影が渡し場で眠っている。本体のない影が桟橋に横たわっている。踏んでも起きなかった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_shadow_sing',
    conditions: { s2: 'subj_shadow', s4: 'pred_sing' },
    resultText: '透き通った影が渡し場で歌っている。歌声の出どころがわからない。影が歌うたびに水面が揺れる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_shadow_flee',
    conditions: { s2: 'subj_shadow', s4: 'pred_flee' },
    resultText: '透き通った影が渡し場で逃げていく。日が差した途端、消えた。影が光から逃げた。当然だ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_shadow_shine',
    conditions: { s2: 'subj_shadow', s4: 'pred_shine' },
    resultText: '透き通った影が渡し場で輝く。影が光る。あり得ないことが起きている。渡し場の法則が乱れている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_shadow_dance',
    conditions: { s2: 'subj_shadow', s4: 'pred_dance' },
    resultText: '透き通った影が渡し場で踊っている。誰もいないのに影だけが踊る。足音はしない。拍手もない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_shadow_melt',
    conditions: { s2: 'subj_shadow', s4: 'pred_melt' },
    resultText: '透き通った影が渡し場で溶けている。影が地面に染み込み、桟橋の板が黒く染まる。黒い板を踏んだ足が重い。影が靴底に張りついている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_shadow_laugh',
    conditions: { s2: 'subj_shadow', s4: 'pred_laugh' },
    resultText: '透き通った影が渡し場で笑っている。こちらの影が勝手に笑っている。自分は笑っていないのに。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_shadow_wait',
    conditions: { s2: 'subj_shadow', s4: 'pred_wait' },
    resultText: '透き通った影が渡し場で待っている。夕暮れを待っている。日が傾くにつれ影が伸び、足元に触れた。急に寒気がした。',
    damage: 2,
    quill: 4
  },

  // === 歌 × 述語 ===
  {
    id: 'p25_song_gaze',
    conditions: { s2: 'subj_song', s4: 'pred_gaze' },
    resultText: '透き通った歌が渡し場で見つめている。旋律が空気に漂い、こちらを向いている。歌に見られている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_song_whisper',
    conditions: { s2: 'subj_song', s4: 'pred_whisper' },
    resultText: '透き通った歌が渡し場で囁いている。川の流れに混じって聞こえる。渡し守の子守歌の残響だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_song_sleep',
    conditions: { s2: 'subj_song', s4: 'pred_sleep' },
    resultText: '透き通った歌が渡し場で眠っている。誰かが歌いかけてやめた歌。途切れたまま桟橋に残っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_song_sing',
    conditions: { s2: 'subj_song', s4: 'pred_sing' },
    resultText: '透き通った歌が渡し場で歌っている。歌が歌を歌う。自己言及の旋律が川面を震わせる。舟が踊り始めた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_song_sing', name: '自己言及の楽譜', description: '歌が歌を歌うための譜面。読むと頭が回る', sellPrice: 11 }]
  },
  {
    id: 'p25_song_flee',
    conditions: { s2: 'subj_song', s4: 'pred_flee' },
    resultText: '透き通った歌が渡し場で逃げていく。風に乗って対岸へ流れた。追いかけたければ渡るしかない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_song_shine',
    conditions: { s2: 'subj_song', s4: 'pred_shine' },
    resultText: '透き通った歌が渡し場で輝く。音符が光の粒になって川面を照らす。歌に導かれて渡る。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_song_shine', name: '光る音符', description: '川面から拾った音符。まだ微かに光っている', sellPrice: 9 }]
  },
  {
    id: 'p25_song_dance',
    conditions: { s2: 'subj_song', s4: 'pred_dance' },
    resultText: '透き通った歌が渡し場で踊っている。旋律が跳ね、拍子が弾む。足が勝手に動き出す。踊りながら渡った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_song_melt',
    conditions: { s2: 'subj_song', s4: 'pred_melt' },
    resultText: '透き通った歌が渡し場で溶けている。音が水に溶けていく。川が歌を飲み込んだ。もう聞こえない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_song_laugh',
    conditions: { s2: 'subj_song', s4: 'pred_laugh' },
    resultText: '透き通った歌が渡し場で笑っている。陽気な旋律が桟橋に響く。渡し守が機嫌よく舟を出した。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_song_wait',
    conditions: { s2: 'subj_song', s4: 'pred_wait' },
    resultText: '透き通った歌が渡し場で待っている。歌い手を待っている。誰かが口ずさめば完成する歌だ。',
    damage: 0,
    quill: 5
  },

  // === 沈黙 × 述語 ===
  {
    id: 'p25_silence_gaze',
    conditions: { s2: 'subj_silence', s4: 'pred_gaze' },
    resultText: '透き通った沈黙が渡し場で見つめている。音のない圧力が桟橋を包む。声を出そうとしたが、喉が詰まって音にならなかった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_silence_whisper',
    conditions: { s2: 'subj_silence', s4: 'pred_whisper' },
    resultText: '透き通った沈黙が渡し場で囁いている。沈黙が囁く矛盾。聞こえないはずの声に耳を傾けるうち、自分の呼吸音が遠くなった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_silence_sleep',
    conditions: { s2: 'subj_silence', s4: 'pred_sleep' },
    resultText: '透き通った沈黙が渡し場で眠っている。静寂が深まり、川の音すら消えた。自分の心臓の音だけが響く。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_silence_sing',
    conditions: { s2: 'subj_silence', s4: 'pred_sing' },
    resultText: '透き通った沈黙が渡し場で歌っている。無音の旋律。口を開けているが音がない。だが確かに歌だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_silence_flee',
    conditions: { s2: 'subj_silence', s4: 'pred_flee' },
    resultText: '透き通った沈黙が渡し場で逃げていく。音が戻った。川のせせらぎ、鳥の声、風の音。渡し場が賑やかになった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_silence_shine',
    conditions: { s2: 'subj_silence', s4: 'pred_shine' },
    resultText: '透き通った沈黙が渡し場で輝く。静寂が光を帯びた。音のない光。渡し場が聖域のように感じられる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_silence_dance',
    conditions: { s2: 'subj_silence', s4: 'pred_dance' },
    resultText: '透き通った沈黙が渡し場で踊っている。水飛沫も足音も吸い込まれる。一緒に踊れと手を引かれた気がして、膝が折れた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_silence_melt',
    conditions: { s2: 'subj_silence', s4: 'pred_melt' },
    resultText: '透き通った沈黙が渡し場で溶けている。少しずつ音が漏れ出す。川のせせらぎが戻ってきた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_silence_laugh',
    conditions: { s2: 'subj_silence', s4: 'pred_laugh' },
    resultText: '透き通った沈黙が渡し場で笑っている。音のない笑い。空気が震えているのに何も聞こえない。耳がおかしくなる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_silence_wait',
    conditions: { s2: 'subj_silence', s4: 'pred_wait' },
    resultText: '透き通った沈黙が渡し場で待っている。言葉を待っている。誰かが声を発すれば壊れる沈黙だ。',
    damage: 1,
    quill: 4
  },

  // === 騎士 × 述語 ===
  {
    id: 'p25_knight_gaze',
    conditions: { s2: 'subj_knight', s4: 'pred_gaze' },
    resultText: '透き通った騎士が渡し場で見つめている。硝子の甲冑を着た騎士が桟橋に立っている。通行料を請求された。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_knight_whisper',
    conditions: { s2: 'subj_knight', s4: 'pred_whisper' },
    resultText: '透き通った騎士が渡し場で囁いている。兜の中から掠れた声。この先に待つものを教えてくれた。忠告だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_knight_sleep',
    conditions: { s2: 'subj_knight', s4: 'pred_sleep' },
    resultText: '透き通った騎士が渡し場で眠っている。剣を杖にして立ったまま眠っている。甲冑の中が空だと気づいた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_knight_sing',
    conditions: { s2: 'subj_knight', s4: 'pred_sing' },
    resultText: '透き通った騎士が渡し場で歌っている。軍歌ではない。故郷の子守歌だ。兜の中で声が反響している。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_knight_flee',
    conditions: { s2: 'subj_knight', s4: 'pred_flee' },
    resultText: '透き通った騎士が渡し場で逃げていく。甲冑を脱ぎ捨てて走り去った。硝子の甲冑だけが桟橋に残った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_knight_shine',
    conditions: { s2: 'subj_knight', s4: 'pred_shine' },
    resultText: '透き通った騎士が渡し場で輝く。甲冑が朝日を受けて光の柱になった。渡し場の目印として完璧だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_knight_dance',
    conditions: { s2: 'subj_knight', s4: 'pred_dance' },
    resultText: '透き通った騎士が渡し場で踊っている。剣舞。硝子の剣が弧を描き、光の輪を作る。見事だが危ない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_knight_melt',
    conditions: { s2: 'subj_knight', s4: 'pred_melt' },
    resultText: '透き通った騎士が渡し場で溶けている。甲冑が崩れ、中から水があふれ出す。騎士は水でできていた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_knight_laugh',
    conditions: { s2: 'subj_knight', s4: 'pred_laugh' },
    resultText: '透き通った騎士が渡し場で笑っている。兜の奥から笑い声。何がおかしいのか。渡し賃を見て笑っている。安すぎると。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_knight_wait',
    conditions: { s2: 'subj_knight', s4: 'pred_wait' },
    resultText: '透き通った騎士が渡し場で待っている。主君を待っている。もう二百年待っている。忠誠は透明になっても消えない。',
    damage: 1,
    quill: 5
  },

  // === 魔女 × 述語 ===
  {
    id: 'p25_witch_gaze',
    conditions: { s2: 'subj_witch', s4: 'pred_gaze' },
    resultText: '透き通った魔女が渡し場で見つめている。水面に映る自分を見ている。水面の魔女は透き通っていない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_witch_whisper',
    conditions: { s2: 'subj_witch', s4: 'pred_whisper' },
    resultText: '透き通った魔女が渡し場で囁いている。呪文を唱えている。舟が勝手に動き出し、川を渡り始めた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_witch_sleep',
    conditions: { s2: 'subj_witch', s4: 'pred_sleep' },
    resultText: '透き通った魔女が渡し場で眠っている。箒を抱いて桟橋に寝転がっている。起こすべきか。関わらぬべきか。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_witch_sing',
    conditions: { s2: 'subj_witch', s4: 'pred_sing' },
    resultText: '透き通った魔女が渡し場で歌っている。呪歌。川の流れが逆転し、対岸から舟がやってきた。便利な魔法だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_witch_flee',
    conditions: { s2: 'subj_witch', s4: 'pred_flee' },
    resultText: '透き通った魔女が渡し場で逃げていく。箒に飛び乗り、川の上を低空で去った。何から逃げているのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_witch_shine',
    conditions: { s2: 'subj_witch', s4: 'pred_shine' },
    resultText: '透き通った魔女が渡し場で輝く。杖の先が光り、渡し場全体を照らした。渡し守が目を細める。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_witch_dance',
    conditions: { s2: 'subj_witch', s4: 'pred_dance' },
    resultText: '透き通った魔女が渡し場で踊っている。箒を相手にワルツを踊る。水面に波紋が広がり、魚が跳ねた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_witch_melt',
    conditions: { s2: 'subj_witch', s4: 'pred_melt' },
    resultText: '透き通った魔女が渡し場で溶けている。水を被ったわけではない。自分から溶けている。魔力が尽きたのだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_witch_laugh',
    conditions: { s2: 'subj_witch', s4: 'pred_laugh' },
    resultText: '透き通った魔女が渡し場で笑っている。甲高い笑い声が川に反響し、鼓膜の奥で鳴り止まない。渡し守が耳を塞いだ。真似するべきだった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_witch_wait',
    conditions: { s2: 'subj_witch', s4: 'pred_wait' },
    resultText: '透き通った魔女が渡し場で待っている。弟子を待っているらしい。透明になる魔法を教えてくれると言う。',
    damage: 1,
    quill: 4
  },

  // === 王 × 述語 ===
  {
    id: 'p25_king_gaze',
    conditions: { s2: 'subj_king', s4: 'pred_gaze' },
    resultText: '透き通った王が渡し場で見つめている。硝子の冠をかぶった王が対岸を睨んでいる。あちらは元は王の領土だった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_king_whisper',
    conditions: { s2: 'subj_king', s4: 'pred_whisper' },
    resultText: '透き通った王が渡し場で囁いている。命令を囁いている。だが透明な王の言葉は誰にも届かない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_king_sleep',
    conditions: { s2: 'subj_king', s4: 'pred_sleep' },
    resultText: '透き通った王が渡し場で眠っている。王座を失い、渡し場の板の上で眠る。冠だけが光っている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_king_sing',
    conditions: { s2: 'subj_king', s4: 'pred_sing' },
    resultText: '透き通った王が渡し場で歌っている。国歌だ。滅んだ国の国歌を一人で歌っている。川だけが聴いている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p25_king_sing', name: '亡国の譜', description: '滅んだ国の国歌。聴く者はもういない', sellPrice: 12 }]
  },
  {
    id: 'p25_king_flee',
    conditions: { s2: 'subj_king', s4: 'pred_flee' },
    resultText: '透き通った王が渡し場で逃げていく。冠を置いて舟に飛び乗った。亡命だ。渡し守は何も言わなかった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_king_shine',
    conditions: { s2: 'subj_king', s4: 'pred_shine' },
    resultText: '透き通った王が渡し場で輝く。失った威厳が光になって戻ってきた。渡し守が頭を下げた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_king_dance',
    conditions: { s2: 'subj_king', s4: 'pred_dance' },
    resultText: '透き通った王が渡し場で踊っている。宮廷舞踏。だが相手はいない。一人で踊る王を、川が映している。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_king_melt',
    conditions: { s2: 'subj_king', s4: 'pred_melt' },
    resultText: '透き通った王が渡し場で溶けている。冠から溶け始め、最後に手が残った。手だけが杖を握っていた。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_king_laugh',
    conditions: { s2: 'subj_king', s4: 'pred_laugh' },
    resultText: '透き通った王が渡し場で笑っている。すべてを失った者の笑い。渡し守すら目を逸らした。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_king_wait',
    conditions: { s2: 'subj_king', s4: 'pred_wait' },
    resultText: '透き通った王が渡し場で待っている。迎えの使者を待っている。使者は来ない。王国はもうない。',
    damage: 1,
    quill: 5
  },

  // === 亡霊 × 述語（orig以外） ===
  {
    id: 'p25_ghost_gaze',
    conditions: { s2: 'subj_ghost', s4: 'pred_gaze' },
    resultText: '透き通った亡霊が渡し場で見つめている。此岸と彼岸の間で、どちらにも属さない目がこちらを見ている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_ghost_whisper',
    conditions: { s2: 'subj_ghost', s4: 'pred_whisper' },
    resultText: '透き通った亡霊が渡し場で囁いている。生前の名前を繰り返している。もう誰も覚えていない名前を。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_ghost_sleep',
    conditions: { s2: 'subj_ghost', s4: 'pred_sleep' },
    resultText: '透き通った亡霊が渡し場で眠っている。死者が眠る。二重の静寂。桟橋が墓標に見えた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_ghost_sing',
    conditions: { s2: 'subj_ghost', s4: 'pred_sing' },
    resultText: '透き通った亡霊が渡し場で歌っている。生前に好きだった歌。歌詞はもう思い出せないが、旋律だけが残っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_ghost_flee',
    conditions: { s2: 'subj_ghost', s4: 'pred_flee' },
    resultText: '透き通った亡霊が渡し場で逃げていく。対岸へ渡ることを拒んでいる。あちらに行けば、本当に終わるから。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_ghost_shine',
    conditions: { s2: 'subj_ghost', s4: 'pred_shine' },
    resultText: '透き通った亡霊が渡し場で輝く。成仏の光だ。穏やかに微笑み、川を渡っていった。舟はいらなかった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_ghost_shine', name: '成仏の残り火', description: '亡霊が渡った後に残った淡い光', sellPrice: 10 }]
  },
  {
    id: 'p25_ghost_dance',
    conditions: { s2: 'subj_ghost', s4: 'pred_dance' },
    resultText: '透き通った亡霊が渡し場で踊っている。盆踊りのような輪。一人で輪になれるのは、亡霊だからか。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_ghost_melt',
    conditions: { s2: 'subj_ghost', s4: 'pred_melt' },
    resultText: '透き通った亡霊が渡し場で溶けている。形を保てなくなっている。忘れられた者は消える。それが法則だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_ghost_laugh',
    conditions: { s2: 'subj_ghost', s4: 'pred_laugh' },
    resultText: '透き通った亡霊が渡し場で笑っている。死者が笑う。何がおかしいのか聞けない。聞きたくもない。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_ghost_wait',
    conditions: { s2: 'subj_ghost', s4: 'pred_wait' },
    resultText: '透き通った亡霊が渡し場で待っている。舟を待っているのか、許しを待っているのか。川だけが知っている。',
    damage: 2,
    quill: 4
  },

  // === 鏡 × 述語 ===
  {
    id: 'p25_mirror_gaze',
    conditions: { s2: 'subj_mirror', s4: 'pred_gaze' },
    resultText: '透き通った鏡が渡し場で見つめている。鏡に映るのは対岸の景色。だが対岸には何もないはずだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_mirror_whisper',
    conditions: { s2: 'subj_mirror', s4: 'pred_whisper' },
    resultText: '透き通った鏡が渡し場で囁いている。鏡面が波打ち、声を出している。映した者の言葉を繰り返している。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mirror_sleep',
    conditions: { s2: 'subj_mirror', s4: 'pred_sleep' },
    resultText: '透き通った鏡が渡し場で眠っている。何も映さない鏡。曇っているのではない。目を閉じている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mirror_sing',
    conditions: { s2: 'subj_mirror', s4: 'pred_sing' },
    resultText: '透き通った鏡が渡し場で歌っている。川の歌を映して反響させている。二重唱になった。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_mirror_flee',
    conditions: { s2: 'subj_mirror', s4: 'pred_flee' },
    resultText: '透き通った鏡が渡し場で逃げていく。川に飛び込んだ。水面が鏡になり、区別がつかなくなった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mirror_shine',
    conditions: { s2: 'subj_mirror', s4: 'pred_shine' },
    resultText: '透き通った鏡が渡し場で輝く。太陽を捕まえて渡し場を照らす。眩しくて前が見えない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mirror_dance',
    conditions: { s2: 'subj_mirror', s4: 'pred_dance' },
    resultText: '透き通った鏡が渡し場で踊っている。角度が変わるたびに違う世界が映る。百の渡し場が明滅する。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_mirror_melt',
    conditions: { s2: 'subj_mirror', s4: 'pred_melt' },
    resultText: '透き通った鏡が渡し場で溶けている。水銀が流れ出し、桟橋が銀色に染まる。映すものを失った鏡の最期。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_mirror_laugh',
    conditions: { s2: 'subj_mirror', s4: 'pred_laugh' },
    resultText: '透き通った鏡が渡し場で笑っている。映っているのは自分の顔だ。自分は笑っていない。鏡だけが笑っている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_mirror_wait',
    conditions: { s2: 'subj_mirror', s4: 'pred_wait' },
    resultText: '透き通った鏡が渡し場で待っている。覗き込む者を待っている。映した者の姿を永遠に留めるために。',
    damage: 2,
    quill: 4
  },

  // === 人形 × 述語 ===
  {
    id: 'p25_doll_gaze',
    conditions: { s2: 'subj_doll', s4: 'pred_gaze' },
    resultText: '透き通った人形が渡し場で見つめている。硝子の目が動かない。だが確かにこちらを追っている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_doll_whisper',
    conditions: { s2: 'subj_doll', s4: 'pred_whisper' },
    resultText: '透き通った人形が渡し場で囁いている。口が動いていないのに声がする。腹話術の逆だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_doll_sleep',
    conditions: { s2: 'subj_doll', s4: 'pred_sleep' },
    resultText: '透き通った人形が渡し場で眠っている。目を閉じた人形が桟橋に横たわっている。誰かが置いていったのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_doll_sing',
    conditions: { s2: 'subj_doll', s4: 'pred_sing' },
    resultText: '透き通った人形が渡し場で歌っている。ぜんまい仕掛けの歌声。同じ旋律が繰り返される。ぜんまいが切れない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_doll_flee',
    conditions: { s2: 'subj_doll', s4: 'pred_flee' },
    resultText: '透き通った人形が渡し場で逃げていく。糸で吊られたまま走っている。糸の先は見えない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_doll_shine',
    conditions: { s2: 'subj_doll', s4: 'pred_shine' },
    resultText: '透き通った人形が渡し場で輝く。硝子の体に光が入り、ランタンのようになった。渡し場を照らしている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_doll_dance',
    conditions: { s2: 'subj_doll', s4: 'pred_dance' },
    resultText: '透き通った人形が渡し場で踊っている。糸がない。自分の意志で踊っている。それが一番恐ろしい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_doll_melt',
    conditions: { s2: 'subj_doll', s4: 'pred_melt' },
    resultText: '透き通った人形が渡し場で溶けている。蝋人形だった。川の湿気で少しずつ崩れている。顔が最後まで残った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_doll_laugh',
    conditions: { s2: 'subj_doll', s4: 'pred_laugh' },
    resultText: '透き通った人形が渡し場で笑っている。作り笑いではない。本物の笑い。人形は笑わない。これは人形ではない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_doll_wait',
    conditions: { s2: 'subj_doll', s4: 'pred_wait' },
    resultText: '透き通った人形が渡し場で待っている。持ち主を待っている。捨てられたとは思っていない。まだ。',
    damage: 1,
    quill: 4
  },

  // === 雨 × 述語 ===
  {
    id: 'p25_rain_gaze',
    conditions: { s2: 'subj_rain', s4: 'pred_gaze' },
    resultText: '透き通った雨が渡し場で見つめている。一粒一粒が目のように光る。空から見下ろされている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_rain_whisper',
    conditions: { s2: 'subj_rain', s4: 'pred_whisper' },
    resultText: '透き通った雨が渡し場で囁いている。雨粒が桟橋を叩く音が言葉に聞こえる。急げと言っている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_rain_sleep',
    conditions: { s2: 'subj_rain', s4: 'pred_sleep' },
    resultText: '透き通った雨が渡し場で眠っている。雨粒が空中で止まっている。時が凍ったのか。濡れずに渡れた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_rain_sing',
    conditions: { s2: 'subj_rain', s4: 'pred_sing' },
    resultText: '透き通った雨が渡し場で歌っている。桟橋が木琴になった。大粒の雨が旋律を奏でる。渡し守が口笛で伴奏した。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_rain_flee',
    conditions: { s2: 'subj_rain', s4: 'pred_flee' },
    resultText: '透き通った雨が渡し場で逃げていく。上に向かって降る雨。空に帰っていく。晴れ間が広がった。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_rain_shine',
    conditions: { s2: 'subj_rain', s4: 'pred_shine' },
    resultText: '透き通った雨が渡し場で輝く。雨粒が宝石になって降り注ぐ。桟橋が光の粒で覆われた。美しい。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_rain_dance',
    conditions: { s2: 'subj_rain', s4: 'pred_dance' },
    resultText: '透き通った雨が渡し場で踊っている。雨粒が跳ね、水面で二度三度と踊る。桟橋が水浸しになった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_rain_melt',
    conditions: { s2: 'subj_rain', s4: 'pred_melt' },
    resultText: '透き通った雨が渡し場で溶けている。雨が川に溶ける。当たり前のことだ。だが今日は雨が泣いているように見えた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_rain_laugh',
    conditions: { s2: 'subj_rain', s4: 'pred_laugh' },
    resultText: '透き通った雨が渡し場で笑っている。大粒の雨が弾ける音が笑い声に聞こえる。土砂降りの嘲笑。',
    damage: 2,
    quill: 2
  },
  {
    id: 'p25_rain_wait',
    conditions: { s2: 'subj_rain', s4: 'pred_wait' },
    resultText: '透き通った雨が渡し場で待っている。降り始めを待つ雨雲が桟橋の上に垂れ込めている。渡るなら今だ。',
    damage: 1,
    quill: 3
  }
];
