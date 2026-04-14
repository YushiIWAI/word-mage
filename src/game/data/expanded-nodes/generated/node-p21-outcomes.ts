// 夜の十字路: 屈強な [主語*]が 十字路に [述語*]
import type { Outcome } from '../../../engine/types';

export const nodeP21Outcomes: Outcome[] = [
  // ── 元テキスト ──
  {
    id: 'p21_orig',
    conditions: { s2: 'subj_witch', s4: 'orig_p21_pred' },
    resultText: '屈強な魔女が十字路に立っている。四つ辻の真ん中に仁王立ちし、どの道も通さないと全身で語っている。交渉の余地はない。',
    damage: 2,
    quill: 3
  },

  // ── 子猫 × 述語 ──
  {
    id: 'p21_kitten_whisper',
    conditions: { s2: 'subj_kitten', s4: 'pred_whisper' },
    resultText: '屈強な子猫が十字路に囁いている。虎のような体格の猫が、石畳に顔を寄せて何か呟いている。道が一本、微かに光った。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p21_kitten_whisper', name: '光る道しるべ', description: '子猫が囁いた石畳の欠片。暗い夜道でほのかに光る', sellPrice: 7 }]
  },
  {
    id: 'p21_kitten_sleep',
    conditions: { s2: 'subj_kitten', s4: 'pred_sleep' },
    resultText: '屈強な子猫が十字路に眠っている。巨大な猫が四つ辻を占領して寝ている。跨いで通るしかない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_kitten_sing',
    conditions: { s2: 'subj_kitten', s4: 'pred_sing' },
    resultText: '屈強な子猫が十字路に歌っている。太い喉から地鳴りのような歌声が響く。石畳が振動している。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_kitten_entangle',
    conditions: { s2: 'subj_kitten', s4: 'pred_entangle' },
    resultText: '屈強な子猫が十字路に絡みついている。四つ辻の道標に巻きついて離れない。爪が柱に深く食い込んでいる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_kitten_flee',
    conditions: { s2: 'subj_kitten', s4: 'pred_flee' },
    resultText: '屈強な子猫が十字路に逃げていく。こちらを見た途端、驚いたように北の道へ走り去った。地面に爪痕だけが残る。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p21_kitten_shine',
    conditions: { s2: 'subj_kitten', s4: 'pred_shine' },
    resultText: '屈強な子猫が十字路に輝く。月光を浴びた毛並みが黄金に光る。四つの道すべてが照らされた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p21_kitten_rain_down',
    conditions: { s2: 'subj_kitten', s4: 'pred_rain_down' },
    resultText: '屈強な子猫が十字路に降り注いでいる。空から次々と猫が降ってくる。地面に着地するたび、石畳が割れる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_kitten_dance',
    conditions: { s2: 'subj_kitten', s4: 'pred_dance' },
    resultText: '屈強な子猫が十字路に踊っている。筋肉質の猫が四つ辻でステップを踏む。地面が揺れる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_kitten_melt',
    conditions: { s2: 'subj_kitten', s4: 'pred_melt' },
    resultText: '屈強な子猫が十字路に溶けている。巨大な猫の輪郭が崩れ、石畳に広がっていく。温かい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_kitten_laugh',
    conditions: { s2: 'subj_kitten', s4: 'pred_laugh' },
    resultText: '屈強な子猫が十字路に笑っている。口を開けて歯を見せている。笑顔に見えるが、牙が太い。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_kitten_wait',
    conditions: { s2: 'subj_kitten', s4: 'pred_wait' },
    resultText: '屈強な子猫が十字路に待っている。四つ辻の中央にどっしり座り、誰かを待っている。こちらではないらしい。通してくれた。',
    damage: 0,
    quill: 4
  },

  // ── 蛇 × 述語 ──
  {
    id: 'p21_snake_whisper',
    conditions: { s2: 'subj_snake', s4: 'pred_whisper' },
    resultText: '屈強な蛇が十字路に囁いている。太い蛇が石畳に腹をつけて振動を送っている。地面が微かに震え、足裏に言葉が伝わる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_snake_sleep',
    conditions: { s2: 'subj_snake', s4: 'pred_sleep' },
    resultText: '屈強な蛇が十字路に眠っている。丸太ほどの蛇がとぐろを巻いている。起こさなければ通れるが、道が狭い。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p21_snake_sing',
    conditions: { s2: 'subj_snake', s4: 'pred_sing' },
    resultText: '屈強な蛇が十字路に歌っている。鎌首をもたげ、シューシューと旋律を刻む。催眠的な響きだ。足が動かなくなりかけた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_snake_entangle',
    conditions: { s2: 'subj_snake', s4: 'pred_entangle' },
    resultText: '屈強な蛇が十字路に絡みついている。四本の道標すべてに蛇が巻きつき、文字が読めない。勘で選んだ道は、三歩進んで行き止まりだった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_snake_flee',
    conditions: { s2: 'subj_snake', s4: 'pred_flee' },
    resultText: '屈強な蛇が十字路に逃げていく。こちらに気づくと、意外な速さで西の道へ滑っていった。鱗の跡が光っている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p21_snake_shine',
    conditions: { s2: 'subj_snake', s4: 'pred_shine' },
    resultText: '屈強な蛇が十字路に輝く。鱗が月光を反射し、四方に虹色の光を散らす。美しいが、目が眩む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_snake_rain_down',
    conditions: { s2: 'subj_snake', s4: 'pred_rain_down' },
    resultText: '屈強な蛇が十字路に降り注いでいる。空から太い蛇が何匹も落ちてくる。地面に叩きつけられてもすぐ動き出す。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p21_snake_dance',
    conditions: { s2: 'subj_snake', s4: 'pred_dance' },
    resultText: '屈強な蛇が十字路に踊っている。鎌首を揺らし、笛もないのに蛇使いの踊りを舞う。気づけば膝が折れていた。蛇と同じ高さで目が合う。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_snake_melt',
    conditions: { s2: 'subj_snake', s4: 'pred_melt' },
    resultText: '屈強な蛇が十字路に溶けている。鱗が液体になり、石畳の隙間に染み込んでいく。靴底を突き抜けて、足の裏がぬるい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_snake_laugh',
    conditions: { s2: 'subj_snake', s4: 'pred_laugh' },
    resultText: '屈強な蛇が十字路に笑っている。口を大きく開け、牙を見せている。笑い声はしないが、空気が震えている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_snake_wait',
    conditions: { s2: 'subj_snake', s4: 'pred_wait' },
    resultText: '屈強な蛇が十字路に待っている。とぐろを巻いて微動だにしない。横を通り抜けた瞬間、尾が足首に触れた。心臓が一拍飛ぶ。',
    damage: 2,
    quill: 4
  },

  // ── 竜 × 述語 ──
  {
    id: 'p21_dragon_whisper',
    conditions: { s2: 'subj_dragon', s4: 'pred_whisper' },
    resultText: '屈強な竜が十字路に囁いている。巨体を折りたたみ、地面に顔を寄せている。石畳にひびが入り、そこから漏れる声の振動で鼓膜が裂け、鼻血が垂れた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_dragon_sleep',
    conditions: { s2: 'subj_dragon', s4: 'pred_sleep' },
    resultText: '屈強な竜が十字路に眠っている。四つの道すべてが竜の体で塞がれている。翼の隙間を這って通る。息を止めて。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_dragon_sing',
    conditions: { s2: 'subj_dragon', s4: 'pred_sing' },
    resultText: '屈強な竜が十字路に歌っている。大地が共鳴する低音。建物の壁にひびが走る。耳を塞いでも体の芯が揺れる。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p21_dragon_entangle',
    conditions: { s2: 'subj_dragon', s4: 'pred_entangle' },
    resultText: '屈強な竜が十字路に絡みついている。長い首と尾が四方の道に伸び、街そのものを締め上げている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p21_dragon_flee',
    conditions: { s2: 'subj_dragon', s4: 'pred_flee' },
    resultText: '屈強な竜が十字路に逃げていく。こちらを見た途端、翼を広げて飛び去った。竜が恐れるものが近くにいるのか。',
    damage: 0,
    quill: 5,
    rewardItems: [{ id: 'item_p21_dragon_flee', name: '竜の落とし鱗', description: '飛び去る竜が落とした一枚の鱗。握ると微かに震えている', sellPrice: 8 }]
  },
  {
    id: 'p21_dragon_shine',
    conditions: { s2: 'subj_dragon', s4: 'pred_shine' },
    resultText: '屈強な竜が十字路に輝く。鱗が月光を受けて白熱する。十字路が真昼のように明るい。影が四方に長く伸びた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_dragon_rain_down',
    conditions: { s2: 'subj_dragon', s4: 'pred_rain_down' },
    resultText: '屈強な竜が十字路に降り注いでいる。空を覆い尽くす翼から、鱗が雨のように剥がれ落ちる。一枚一枚が刃物だ。',
    damage: 5,
    quill: 3
  },
  {
    id: 'p21_dragon_dance',
    conditions: { s2: 'subj_dragon', s4: 'pred_dance' },
    resultText: '屈強な竜が十字路に踊っている。尾を振り、翼を広げ、四つ辻を舞台にする。踏み潰されないよう壁に張りつく。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p21_dragon_melt',
    conditions: { s2: 'subj_dragon', s4: 'pred_melt' },
    resultText: '屈強な竜が十字路に溶けている。鱗が蝋のように崩れ、石畳を焦がしながら流れていく。逃げ遅れた足の甲を熱い竜の体液が焼いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_dragon_laugh',
    conditions: { s2: 'subj_dragon', s4: 'pred_laugh' },
    resultText: '屈強な竜が十字路に笑っている。喉の奥から轟音が漏れる。笑うたびに炎が零れた。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p21_dragon_wait',
    conditions: { s2: 'subj_dragon', s4: 'pred_wait' },
    resultText: '屈強な竜が十字路に待っている。黄金の瞳がこちらを見据えている。通行料を求めているのか、挑戦者を待っているのか。',
    damage: 4,
    quill: 4
  },

  // ── 蝶 × 述語 ──
  {
    id: 'p21_butterfly_whisper',
    conditions: { s2: 'subj_butterfly', s4: 'pred_whisper' },
    resultText: '屈強な蝶が十字路に囁いている。鋼のような翅を震わせ、空気に文様を刻む。読める者にだけ意味がわかる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_butterfly_sleep',
    conditions: { s2: 'subj_butterfly', s4: 'pred_sleep' },
    resultText: '屈強な蝶が十字路に眠っている。道標の上で翅を閉じている。触れると硬い。鉄でできているようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_butterfly_sing',
    conditions: { s2: 'subj_butterfly', s4: 'pred_sing' },
    resultText: '屈強な蝶が十字路に歌っている。翅の振動が高周波の旋律を生む。耳の奥がきんと鳴り、しばらく右耳が聞こえなくなった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_butterfly_entangle',
    conditions: { s2: 'subj_butterfly', s4: 'pred_entangle' },
    resultText: '屈強な蝶が十字路に絡みついている。道標に翅を巻きつけ、離れない。力ずくで引き剥がそうとしたが、柱のほうが折れた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_butterfly_flee',
    conditions: { s2: 'subj_butterfly', s4: 'pred_flee' },
    resultText: '屈強な蝶が十字路に逃げていく。重たい羽音を残して東の道へ飛んでいった。風圧で帽子が飛ぶ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_butterfly_shine',
    conditions: { s2: 'subj_butterfly', s4: 'pred_shine' },
    resultText: '屈強な蝶が十字路に輝く。鱗粉が月光を吸い込み、翅全体が灯籠のように光る。四つの道が照らし出された。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p21_butterfly_shine', name: '蝶の鱗粉灯', description: '瓶に集めた光る鱗粉。振ると小さな灯籠のように辺りを照らす', sellPrice: 11 }]
  },
  {
    id: 'p21_butterfly_rain_down',
    conditions: { s2: 'subj_butterfly', s4: 'pred_rain_down' },
    resultText: '屈強な蝶が十字路に降り注いでいる。空から鋼の蝶が次々と落ちてくる。翅の縁が肩と頬を切り裂き、血が散る。顔を庇った腕にも無数の裂傷。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_butterfly_dance',
    conditions: { s2: 'subj_butterfly', s4: 'pred_dance' },
    resultText: '屈強な蝶が十字路に踊っている。重い翅を打ち鳴らし、空気を叩く。即興の拍子に道標が共鳴する。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_butterfly_melt',
    conditions: { s2: 'subj_butterfly', s4: 'pred_melt' },
    resultText: '屈強な蝶が十字路に溶けている。鋼の翅が液体になり、石畳に広がる。銀色の水たまりに月が映っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_butterfly_laugh',
    conditions: { s2: 'subj_butterfly', s4: 'pred_laugh' },
    resultText: '屈強な蝶が十字路に笑っている。翅の模様が顔に見える。風が吹くたびに表情が変わり、どれも嘲笑だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_butterfly_wait',
    conditions: { s2: 'subj_butterfly', s4: 'pred_wait' },
    resultText: '屈強な蝶が十字路に待っている。道標の天辺に止まり、翅を閉じている。通る者を品定めしている目つきだ。',
    damage: 1,
    quill: 4
  },

  // ── 風 × 述語 ──
  {
    id: 'p21_wind_whisper',
    conditions: { s2: 'subj_wind', s4: 'pred_whisper' },
    resultText: '屈強な風が十字路に囁いている。四方から吹き寄せる風が渦を巻き、中心で人の声に聞こえる。道を教えているのか、惑わしているのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_wind_sleep',
    conditions: { s2: 'subj_wind', s4: 'pred_sleep' },
    resultText: '屈強な風が十字路に眠っている。不自然な凪。空気が重く、一歩ごとに抵抗がある。起きたらどうなるか考えたくない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_wind_sing',
    conditions: { s2: 'subj_wind', s4: 'pred_sing' },
    resultText: '屈強な風が十字路に歌っている。建物の隙間を通り抜ける突風が、低い咆哮のような旋律を奏でる。壁が震えている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_wind_entangle',
    conditions: { s2: 'subj_wind', s4: 'pred_entangle' },
    resultText: '屈強な風が十字路に絡みついている。竜巻が道標を軸にして回っている。近づけば巻き込まれる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_wind_flee',
    conditions: { s2: 'subj_wind', s4: 'pred_flee' },
    resultText: '屈強な風が十字路に逃げていく。突然の突風が南の道を駆け抜け、砂埃だけが残った。嵐の前触れか、後始末か。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p21_wind_shine',
    conditions: { s2: 'subj_wind', s4: 'pred_shine' },
    resultText: '屈強な風が十字路に輝く。風に乗った砂粒が月光を反射し、光の渦が四つ辻を包む。美しいが目を開けていられない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_wind_rain_down',
    conditions: { s2: 'subj_wind', s4: 'pred_rain_down' },
    resultText: '屈強な風が十字路に降り注いでいる。上空から叩きつけるような下降気流で石畳に叩き伏せられ、頬骨と肋骨を打った。這うしかない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p21_wind_dance',
    conditions: { s2: 'subj_wind', s4: 'pred_dance' },
    resultText: '屈強な風が十字路に踊っている。四方から吹く風が組み合い、螺旋を描く。巻き込まれた木の葉が踊り子のように舞う。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_wind_melt',
    conditions: { s2: 'subj_wind', s4: 'pred_melt' },
    resultText: '屈強な風が十字路に溶けている。風が重さを持ち、液体のように地面に溜まっている。膝まで浸かって歩く。息苦しい。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_wind_laugh',
    conditions: { s2: 'subj_wind', s4: 'pred_laugh' },
    resultText: '屈強な風が十字路に笑っている。突風が吹くたびに、建物の隙間から嘲るような音が響く。帽子を奪われ、追えば追うほど遠ざかる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_wind_wait',
    conditions: { s2: 'subj_wind', s4: 'pred_wait' },
    resultText: '屈強な風が十字路に待っている。四つ辻だけ無風。一歩踏み出した瞬間、四方から一斉に叩きつけられ、体が宙で捻じれて石畳に落ちた。背中が痺れて動かない。',
    damage: 3,
    quill: 3
  },

  // ── 炎 × 述語 ──
  {
    id: 'p21_flame_whisper',
    conditions: { s2: 'subj_flame', s4: 'pred_whisper' },
    resultText: '屈強な炎が十字路に囁いている。石畳の隙間から立ち上る炎が、爆ぜる音で何かを語る。聞き取れない。近づくと火傷する。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_flame_sleep',
    conditions: { s2: 'subj_flame', s4: 'pred_sleep' },
    resultText: '屈強な炎が十字路に眠っている。種火が石畳の割れ目に潜んでいる。踏めば燃え上がる。慎重に避けて通る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_flame_sing',
    conditions: { s2: 'subj_flame', s4: 'pred_sing' },
    resultText: '屈強な炎が十字路に歌っている。火柱が律動的に脈打ち、爆ぜる音が旋律になる。熱気で空気が歪む。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p21_flame_entangle',
    conditions: { s2: 'subj_flame', s4: 'pred_entangle' },
    resultText: '屈強な炎が十字路に絡みついている。道標が炎に包まれ、文字が溶けている。どの道がどこへ行くかわからない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_flame_flee',
    conditions: { s2: 'subj_flame', s4: 'pred_flee' },
    resultText: '屈強な炎が十字路に逃げていく。火の玉が西の道を転がっていった。焦げた石畳の匂いが残る。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p21_flame_shine',
    conditions: { s2: 'subj_flame', s4: 'pred_shine' },
    resultText: '屈強な炎が十字路に輝く。炎が純白に燃え、十字路を真昼のように照らす。影が一切消えた場所を歩くと、目の焦点が合わなくなる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_flame_rain_down',
    conditions: { s2: 'subj_flame', s4: 'pred_rain_down' },
    resultText: '屈強な炎が十字路に降り注いでいる。火の雨。空から燃える塊が落ちてくる。走り抜けるしかない。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p21_flame_dance',
    conditions: { s2: 'subj_flame', s4: 'pred_dance' },
    resultText: '屈強な炎が十字路に踊っている。火柱が人の形をとり、四つ辻で輪になって踊る。近づけば仲間に入れられる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_flame_melt',
    conditions: { s2: 'subj_flame', s4: 'pred_melt' },
    resultText: '屈強な炎が十字路に溶けている。炎が液体になり、溶岩のように石畳を流れる。靴底が焦げる匂いがする。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p21_flame_laugh',
    conditions: { s2: 'subj_flame', s4: 'pred_laugh' },
    resultText: '屈強な炎が十字路に笑っている。爆ぜる音が笑い声に聞こえる。火が大きくなるたびに声が高くなる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_flame_wait',
    conditions: { s2: 'subj_flame', s4: 'pred_wait' },
    resultText: '屈強な炎が十字路に待っている。四つ辻の中央で揺らめく炎。近づくと火勢が増し、離れると弱まる。誘っている。',
    damage: 2,
    quill: 4
  },

  // ── 氷 × 述語 ──
  {
    id: 'p21_ice_whisper',
    conditions: { s2: 'subj_ice', s4: 'pred_whisper' },
    resultText: '屈強な氷が十字路に囁いている。氷柱が風で触れ合い、澄んだ音を立てる。言葉に聞こえるのは気のせいか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_ice_sleep',
    conditions: { s2: 'subj_ice', s4: 'pred_sleep' },
    resultText: '屈強な氷が十字路に眠っている。地面が厚い氷に覆われ、滑る。四方の道すべてが凍りついている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_ice_sing',
    conditions: { s2: 'subj_ice', s4: 'pred_sing' },
    resultText: '屈強な氷が十字路に歌っている。氷壁が共鳴し、透明な音が四方に広がる。美しいが、聴き続けると体温が奪われる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p21_ice_entangle',
    conditions: { s2: 'subj_ice', s4: 'pred_entangle' },
    resultText: '屈強な氷が十字路に絡みついている。氷柱が道標を包み込み、建物の壁にまで伸びている。通路が狭い。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_ice_flee',
    conditions: { s2: 'subj_ice', s4: 'pred_flee' },
    resultText: '屈強な氷が十字路に逃げていく。氷が音を立てて砕け、破片が北の道に吸い込まれていく。冷気だけが残る。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p21_ice_shine',
    conditions: { s2: 'subj_ice', s4: 'pred_shine' },
    resultText: '屈強な氷が十字路に輝く。月光を受けた氷面が鏡のように光る。四方の道が氷の中に映り、どれが本物かわからない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_ice_rain_down',
    conditions: { s2: 'subj_ice', s4: 'pred_rain_down' },
    resultText: '屈強な氷が十字路に降り注いでいる。空から氷塊が落ちてくる。石畳が砕け、破片が飛び散る。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p21_ice_dance',
    conditions: { s2: 'subj_ice', s4: 'pred_dance' },
    resultText: '屈強な氷が十字路に踊っている。氷柱が回転しながら位置を変える。隙間を読み違えて氷柱に胸を打たれ、弾き飛ばされた。肋骨が軋む。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_ice_melt',
    conditions: { s2: 'subj_ice', s4: 'pred_melt' },
    resultText: '屈強な氷が十字路に溶けている。季節外れの雪解け。水が四方の道に流れ、足元が川になっている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p21_ice_laugh',
    conditions: { s2: 'subj_ice', s4: 'pred_laugh' },
    resultText: '屈強な氷が十字路に笑っている。氷が軋む音が笑い声に聞こえる。吐く息が白くなり、指先から順に感覚が遠のいていく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_ice_wait',
    conditions: { s2: 'subj_ice', s4: 'pred_wait' },
    resultText: '屈強な氷が十字路に待っている。触れた者を閉じ込める氷が、道の真ん中で静かに佇んでいる。表面に手形がいくつもある。',
    damage: 2,
    quill: 4
  },

  // ── 影 × 述語 ──
  {
    id: 'p21_shadow_whisper',
    conditions: { s2: 'subj_shadow', s4: 'pred_whisper' },
    resultText: '屈強な影が十字路に囁いている。地面に広がる影が脈動し、耳に直接声が届く。教えられた道を選んだが、景色に覚えがない。引き返せない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_shadow_sleep',
    conditions: { s2: 'subj_shadow', s4: 'pred_sleep' },
    resultText: '屈強な影が十字路に眠っている。四つ辻全体が深い影に沈んでいる。月が出ているのに暗い。影を踏んで渡ると、体温を一枚剥がされた気がした。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_shadow_sing',
    conditions: { s2: 'subj_shadow', s4: 'pred_sing' },
    resultText: '屈強な影が十字路に歌っている。影から低い歌声が湧き上がる。歌に合わせて自分の影が伸び、足首を掴もうとする。振り払って走った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_shadow_entangle',
    conditions: { s2: 'subj_shadow', s4: 'pred_entangle' },
    resultText: '屈強な影が十字路に絡みついている。道標に影が巻きつき、触れると自分の影も引き寄せられる。足が動かない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_shadow_flee',
    conditions: { s2: 'subj_shadow', s4: 'pred_flee' },
    resultText: '屈強な影が十字路に逃げていく。月が雲に隠れた瞬間、影が滑るように南の道へ消えた。自分の影だけが残った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_shadow_shine',
    conditions: { s2: 'subj_shadow', s4: 'pred_shine' },
    resultText: '屈強な影が十字路に輝く。影なのに光っている。黒い光。見つめると目の奥が痛む。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_shadow_rain_down',
    conditions: { s2: 'subj_shadow', s4: 'pred_rain_down' },
    resultText: '屈強な影が十字路に降り注いでいる。上から闇が降ってくる。月が見えなくなり、手元すら見えない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_shadow_dance',
    conditions: { s2: 'subj_shadow', s4: 'pred_dance' },
    resultText: '屈強な影が十字路に踊っている。月光の下、主のない影が四つ辻で輪舞する。自分の影が勝手に輪に加わり、体ごと三歩引きずられた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_shadow_melt',
    conditions: { s2: 'subj_shadow', s4: 'pred_melt' },
    resultText: '屈強な影が十字路に溶けている。影が液体のように地面に広がり、四方の道を黒く染めている。膝まで沈んだところで、何かが脛を撫でた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_shadow_laugh',
    conditions: { s2: 'subj_shadow', s4: 'pred_laugh' },
    resultText: '屈強な影が十字路に笑っている。影が震えている。笑い声はしないが、嘲りが伝わる。振り向くと、自分の影が一瞬だけ別の形をしていた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_shadow_wait',
    conditions: { s2: 'subj_shadow', s4: 'pred_wait' },
    resultText: '屈強な影が十字路に待っている。四つ辻の中央に濃い影が溜まっている。踏み入れた者の影を奪うつもりだ。',
    damage: 2,
    quill: 4
  },

  // ── 歌 × 述語 ──
  {
    id: 'p21_song_whisper',
    conditions: { s2: 'subj_song', s4: 'pred_whisper' },
    resultText: '屈強な歌が十字路に囁いている。力強い旋律が小声で奏でられる。抑えた声量が逆に圧迫感を生む。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_song_sleep',
    conditions: { s2: 'subj_song', s4: 'pred_sleep' },
    resultText: '屈強な歌が十字路に眠っている。かつて誰かが歌った旋律が、石畳に染みついて眠っている。足音で微かに共鳴する。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p21_song_sing',
    conditions: { s2: 'subj_song', s4: 'pred_sing' },
    resultText: '屈強な歌が十字路に歌っている。歌自身が歌っている。壁を揺らし、石を震わせる。旋律に逆らって歩くのが難しい。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_p21_song_sing', name: '十字路の旋律', description: '四方に響く歌の断片。口ずさむと方角がわかる', sellPrice: 8 }]
  },
  {
    id: 'p21_song_entangle',
    conditions: { s2: 'subj_song', s4: 'pred_entangle' },
    resultText: '屈強な歌が十字路に絡みついている。旋律が耳から離れない。頭の中で繰り返され、他のことが考えられなくなる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_song_flee',
    conditions: { s2: 'subj_song', s4: 'pred_flee' },
    resultText: '屈強な歌が十字路に逃げていく。旋律が北の道に吸い込まれていく。追いかけたくなるが、足を止めた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_song_shine',
    conditions: { s2: 'subj_song', s4: 'pred_shine' },
    resultText: '屈強な歌が十字路に輝く。旋律が光を帯び、音符が目に見える。四つの道がそれぞれ違う色に染まった。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p21_song_shine', name: '色づいた音符', description: '光る旋律の欠片。耳に近づけると道の色が見える', sellPrice: 10 }]
  },
  {
    id: 'p21_song_rain_down',
    conditions: { s2: 'subj_song', s4: 'pred_rain_down' },
    resultText: '屈強な歌が十字路に降り注いでいる。空から旋律が落ちてくる。一音一音が重く、肩にのしかかる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_song_dance',
    conditions: { s2: 'subj_song', s4: 'pred_dance' },
    resultText: '屈強な歌が十字路に踊っている。旋律がリズムを変え、弾むように四方に散る。体が勝手に拍子を取り始める。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_song_melt',
    conditions: { s2: 'subj_song', s4: 'pred_melt' },
    resultText: '屈強な歌が十字路に溶けている。力強かった旋律が崩れ、不協和音になっていく。胃の底が持ち上がり、立ち止まって壁に手をつく。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_song_laugh',
    conditions: { s2: 'subj_song', s4: 'pred_laugh' },
    resultText: '屈強な歌が十字路に笑っている。旋律が跳ね、弾け、笑い声のように響く。陽気だが、少し狂っている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_song_wait',
    conditions: { s2: 'subj_song', s4: 'pred_wait' },
    resultText: '屈強な歌が十字路に待っている。最初の一音だけが鳴り、続きを待っている。こちらが歌い継がなければ先に進めない。',
    damage: 1,
    quill: 5
  },

  // ── 沈黙 × 述語 ──
  {
    id: 'p21_silence_whisper',
    conditions: { s2: 'subj_silence', s4: 'pred_whisper' },
    resultText: '屈強な沈黙が十字路に囁いている。無音なのに声が聞こえる。頭の中に直接響く。耳を塞いでも変わらない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_silence_sleep',
    conditions: { s2: 'subj_silence', s4: 'pred_sleep' },
    resultText: '屈強な沈黙が十字路に眠っている。音が完全に消えている。自分の心臓の音すら聞こえない。不安になる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_silence_sing',
    conditions: { s2: 'subj_silence', s4: 'pred_sing' },
    resultText: '屈強な沈黙が十字路に歌っている。音のない歌。空気の振動だけが体に伝わる。骨が共鳴する。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p21_silence_sing', name: '無音の共鳴石', description: '握ると骨の奥が震える石。音は聞こえないのに、何かが伝わる', sellPrice: 11 }]
  },
  {
    id: 'p21_silence_entangle',
    conditions: { s2: 'subj_silence', s4: 'pred_entangle' },
    resultText: '屈強な沈黙が十字路に絡みついている。声を出そうとすると喉が詰まる。足音も消える。音を奪われたまま歩く。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_silence_flee',
    conditions: { s2: 'subj_silence', s4: 'pred_flee' },
    resultText: '屈強な沈黙が十字路に逃げていく。突然、虫の声が戻ってきた。風の音が聞こえる。沈黙がどこかへ去ったのだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_silence_shine',
    conditions: { s2: 'subj_silence', s4: 'pred_shine' },
    resultText: '屈強な沈黙が十字路に輝く。無音の空間が月光を吸い込み、静けさが目に見える光になっている。触れると音が消える。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p21_silence_rain_down',
    conditions: { s2: 'subj_silence', s4: 'pred_rain_down' },
    resultText: '屈強な沈黙が十字路に降り注いでいる。空から無音が降ってくる。頭に当たるたび記憶が一つ、音を失っていく。母の声が思い出せない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_silence_dance',
    conditions: { s2: 'subj_silence', s4: 'pred_dance' },
    resultText: '屈強な沈黙が十字路に踊っている。音もなく空気が揺れる。見えない腕に肩を掴まれ、一回転させられた。方角がわからなくなった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_silence_melt',
    conditions: { s2: 'subj_silence', s4: 'pred_melt' },
    resultText: '屈強な沈黙が十字路に溶けている。無音が液体になり、足元に溜まっている。浸かった足が痺れる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_silence_laugh',
    conditions: { s2: 'subj_silence', s4: 'pred_laugh' },
    resultText: '屈強な沈黙が十字路に笑っている。音がないのに笑いの気配がある。つられて口を開けたが、自分の声も出なくなっていた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_silence_wait',
    conditions: { s2: 'subj_silence', s4: 'pred_wait' },
    resultText: '屈強な沈黙が十字路に待っている。四つ辻に入った瞬間、すべての音が消えた。沈黙が口を開けて待っていた。',
    damage: 2,
    quill: 4
  },

  // ── 騎士 × 述語 ──
  {
    id: 'p21_knight_whisper',
    conditions: { s2: 'subj_knight', s4: 'pred_whisper' },
    resultText: '屈強な騎士が十字路に囁いている。兜の奥から低い声が漏れる。道を尋ねているのか、警告しているのか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_knight_sleep',
    conditions: { s2: 'subj_knight', s4: 'pred_sleep' },
    resultText: '屈強な騎士が十字路に眠っている。甲冑姿のまま道の真ん中で寝ている。鎧が月光を鈍く反射している。起こす勇気はない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p21_knight_sing',
    conditions: { s2: 'subj_knight', s4: 'pred_sing' },
    resultText: '屈強な騎士が十字路に歌っている。兜の中で反響する軍歌が、四方の道に響く。士気が上がるような、沈むような歌だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_knight_entangle',
    conditions: { s2: 'subj_knight', s4: 'pred_entangle' },
    resultText: '屈強な騎士が十字路に絡みついている。四本の道標にそれぞれ腕と脚を縛られている。誰かに罰を受けたらしい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_knight_flee',
    conditions: { s2: 'subj_knight', s4: 'pred_flee' },
    resultText: '屈強な騎士が十字路に逃げていく。重い甲冑を鳴らしながら東の道に消えた。何から逃げているのか。背後を見た。何もいない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_knight_shine',
    conditions: { s2: 'subj_knight', s4: 'pred_shine' },
    resultText: '屈強な騎士が十字路に輝く。磨き上げられた甲冑が月光を跳ね返す。四つの道に光の筋が走った。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_knight_rain_down',
    conditions: { s2: 'subj_knight', s4: 'pred_rain_down' },
    resultText: '屈強な騎士が十字路に降り注いでいる。空から鎧武者が降ってくる。着地のたびに石畳が砕ける。戦場が空から来た。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p21_knight_dance',
    conditions: { s2: 'subj_knight', s4: 'pred_dance' },
    resultText: '屈強な騎士が十字路に踊っている。剣を振り回しながら舞う。型稽古のようでもあり、狂気のようでもある。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_knight_melt',
    conditions: { s2: 'subj_knight', s4: 'pred_melt' },
    resultText: '屈強な騎士が十字路に溶けている。甲冑の中身が液体になって流れ出している。兜だけが残り、空を見上げている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_knight_laugh',
    conditions: { s2: 'subj_knight', s4: 'pred_laugh' },
    resultText: '屈強な騎士が十字路に笑っている。兜の中で反響する笑い声。すれ違いざまに肩を叩かれた。鉄の手甲の重さが、翌朝まで残った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_knight_wait',
    conditions: { s2: 'subj_knight', s4: 'pred_wait' },
    resultText: '屈強な騎士が十字路に待っている。剣を地面に突き立て、通行者を待っている。一騎打ちを申し込む気配がある。',
    damage: 2,
    quill: 4
  },

  // ── 魔女 × 述語（元テキストの述語以外） ──
  {
    id: 'p21_witch_whisper',
    conditions: { s2: 'subj_witch', s4: 'pred_whisper' },
    resultText: '屈強な魔女が十字路に囁いている。四つ辻にしゃがみ込み、石畳に呪文を刻んでいる。一節が耳に残り、そのせいで今夜は眠れない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_witch_sleep',
    conditions: { s2: 'subj_witch', s4: 'pred_sleep' },
    resultText: '屈強な魔女が十字路に眠っている。道の真ん中で大の字になっている。近づくと呪いの寝言が聞こえた。急いで通り過ぎる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_witch_sing',
    conditions: { s2: 'subj_witch', s4: 'pred_sing' },
    resultText: '屈強な魔女が十字路に歌っている。太い声で呪歌を唱えている。石畳に模様が浮かび上がり、道が変わっていく。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p21_witch_entangle',
    conditions: { s2: 'subj_witch', s4: 'pred_entangle' },
    resultText: '屈強な魔女が十字路に絡みついている。道標を抱え込んで離さない。魔女ごと引き倒さないと通れない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_witch_flee',
    conditions: { s2: 'subj_witch', s4: 'pred_flee' },
    resultText: '屈強な魔女が十字路に逃げていく。箒もなしに走っている。あの体格で速い。何かを落としていった。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p21_witch_flee', name: '魔女の落とし物', description: '急いで逃げた魔女が落とした小瓶。中身が光っている', sellPrice: 9 }]
  },
  {
    id: 'p21_witch_shine',
    conditions: { s2: 'subj_witch', s4: 'pred_shine' },
    resultText: '屈強な魔女が十字路に輝く。全身が魔力で光っている。四つの道に魔女の影が四つ伸び、それぞれが違う方向を指す。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p21_witch_rain_down',
    conditions: { s2: 'subj_witch', s4: 'pred_rain_down' },
    resultText: '屈強な魔女が十字路に降り注いでいる。空から次々と魔女が降ってくる。全員同じ顔だ。着地するなり四方に散っていく。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_witch_dance',
    conditions: { s2: 'subj_witch', s4: 'pred_dance' },
    resultText: '屈強な魔女が十字路に踊っている。ワルプルギスの夜のように、ひとりで輪を描いて踊る。地面に魔法陣が刻まれていく。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_witch_melt',
    conditions: { s2: 'subj_witch', s4: 'pred_melt' },
    resultText: '屈強な魔女が十字路に溶けている。水をかけられたように崩れていく。帽子だけが石畳に残った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_witch_laugh',
    conditions: { s2: 'subj_witch', s4: 'pred_laugh' },
    resultText: '屈強な魔女が十字路に笑っている。腹の底から響く哄笑。笑い声を浴びた肌がひりつき、服の下に小さな痣ができていた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_witch_wait',
    conditions: { s2: 'subj_witch', s4: 'pred_wait' },
    resultText: '屈強な魔女が十字路に待っている。腕組みをして立っている。迷い人に道を教える趣味があるらしい。代わりに何かを要求する目つきだ。',
    damage: 1,
    quill: 4
  },

  // ── 王 × 述語 ──
  {
    id: 'p21_king_whisper',
    conditions: { s2: 'subj_king', s4: 'pred_whisper' },
    resultText: '屈強な王が十字路に囁いている。王冠を被ったまま膝をつき、石畳に耳を当てている。地下から何か聞こえるらしい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_king_sleep',
    conditions: { s2: 'subj_king', s4: 'pred_sleep' },
    resultText: '屈強な王が十字路に眠っている。玉座もなしに道の真ん中で寝ている。王冠が転がっている。拾うべきか迷う。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_king_sing',
    conditions: { s2: 'subj_king', s4: 'pred_sing' },
    resultText: '屈強な王が十字路に歌っている。朗々と軍歌を歌い上げる。声に力があり、四方から兵士が集まりそうな響きだ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_king_entangle',
    conditions: { s2: 'subj_king', s4: 'pred_entangle' },
    resultText: '屈強な王が十字路に絡みついている。自らの紫のマントが道標に絡まり、身動きが取れない。威厳を保とうとしている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_king_flee',
    conditions: { s2: 'subj_king', s4: 'pred_flee' },
    resultText: '屈強な王が十字路に逃げていく。王冠を落としながら北の道に消えた。反乱か、それとも。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p21_king_flee', name: '落とされた王冠', description: '逃げる王が落とした王冠。軽い。中が空洞だ', sellPrice: 12 }]
  },
  {
    id: 'p21_king_shine',
    conditions: { s2: 'subj_king', s4: 'pred_shine' },
    resultText: '屈強な王が十字路に輝く。王冠と甲冑が黄金の光を放つ。四つの道すべてに王の影が落ちる。威厳がある。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_king_rain_down',
    conditions: { s2: 'subj_king', s4: 'pred_rain_down' },
    resultText: '屈強な王が十字路に降り注いでいる。空から王冠が降ってくる。地面に突き刺さり、どれも本物に見える。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_king_dance',
    conditions: { s2: 'subj_king', s4: 'pred_dance' },
    resultText: '屈強な王が十字路に踊っている。宮廷舞踏のステップだが、相手がいない。ひとりで優雅に回っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_king_melt',
    conditions: { s2: 'subj_king', s4: 'pred_melt' },
    resultText: '屈強な王が十字路に溶けている。黄金の甲冑から王が流れ出している。王冠だけが形を保ち、空を見上げている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_king_laugh',
    conditions: { s2: 'subj_king', s4: 'pred_laugh' },
    resultText: '屈強な王が十字路に笑っている。見下ろすような笑い。背筋が勝手に伸び、膝が折れそうになる。王の前では誰もが臣下になる。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_king_wait',
    conditions: { s2: 'subj_king', s4: 'pred_wait' },
    resultText: '屈強な王が十字路に待っている。道の中央に立ち、腕を組んでいる。目を合わせた瞬間、足が縫い止められた。許しが出るまで動けない。',
    damage: 2,
    quill: 4
  },

  // ── 亡霊 × 述語 ──
  {
    id: 'p21_ghost_whisper',
    conditions: { s2: 'subj_ghost', s4: 'pred_whisper' },
    resultText: '屈強な亡霊が十字路に囁いている。透けた体から低い声が漏れる。道を間違えるなと言っている。どの道が正しいかは教えてくれない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_ghost_sleep',
    conditions: { s2: 'subj_ghost', s4: 'pred_sleep' },
    resultText: '屈強な亡霊が十字路に眠っている。宙に浮いたまま目を閉じている。成仏しきれないまま眠りについたのだろう。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_ghost_sing',
    conditions: { s2: 'subj_ghost', s4: 'pred_sing' },
    resultText: '屈強な亡霊が十字路に歌っている。生前の軍歌だろうか。力強い声だが、どこか遠い。涙が出そうになる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_ghost_entangle',
    conditions: { s2: 'subj_ghost', s4: 'pred_entangle' },
    resultText: '屈強な亡霊が十字路に絡みついている。道標に抱きついて離れない。生前の記憶がこの場所に縛りつけているのだろう。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_ghost_flee',
    conditions: { s2: 'subj_ghost', s4: 'pred_flee' },
    resultText: '屈強な亡霊が十字路に逃げていく。こちらを見た瞬間、怯えた顔で西の道に消えた。亡霊が怖がるとは。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_ghost_shine',
    conditions: { s2: 'subj_ghost', s4: 'pred_shine' },
    resultText: '屈強な亡霊が十字路に輝く。透き通った体が青白く発光する。四つの道に幽かな光が差した。道案内にはなる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_ghost_rain_down',
    conditions: { s2: 'subj_ghost', s4: 'pred_rain_down' },
    resultText: '屈強な亡霊が十字路に降り注いでいる。空から無数の亡霊が降ってくる。通り抜けられるたびに体温が抜かれ、歯の根が合わなくなる。指先から感覚が消えていく。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_ghost_dance',
    conditions: { s2: 'subj_ghost', s4: 'pred_dance' },
    resultText: '屈強な亡霊が十字路に踊っている。生前の宴の記憶だろうか。宙に浮いたまま、相手のいないダンスを続けている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_ghost_melt',
    conditions: { s2: 'subj_ghost', s4: 'pred_melt' },
    resultText: '屈強な亡霊が十字路に溶けている。輪郭がぼやけ、霧になっていく。成仏ではない。拡散だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_ghost_laugh',
    conditions: { s2: 'subj_ghost', s4: 'pred_laugh' },
    resultText: '屈強な亡霊が十字路に笑っている。透けた体を震わせて笑う。何が面白いのか。死者のユーモアはわからない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_ghost_wait',
    conditions: { s2: 'subj_ghost', s4: 'pred_wait' },
    resultText: '屈強な亡霊が十字路に待っている。何百年も同じ場所に立ち続けている気配がある。待ち人はもう来ないだろう。',
    damage: 1,
    quill: 5
  },

  // ── 鏡 × 述語 ──
  {
    id: 'p21_mirror_whisper',
    conditions: { s2: 'subj_mirror', s4: 'pred_whisper' },
    resultText: '屈強な鏡が十字路に囁いている。鏡面が震え、映った像の口が動いている。唇を読もうとして額を寄せた。額が氷のように冷たい鏡面に触れ、離れない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_mirror_sleep',
    conditions: { s2: 'subj_mirror', s4: 'pred_sleep' },
    resultText: '屈強な鏡が十字路に眠っている。曇った鏡面に何も映らない。覗き込むと、自分の顔が一瞬遅れて現れた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_mirror_sing',
    conditions: { s2: 'subj_mirror', s4: 'pred_sing' },
    resultText: '屈強な鏡が十字路に歌っている。鏡面が振動し、澄んだ高音を発する。共鳴で歯の奥が疼き、こめかみに鈍い痛みが走る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_mirror_entangle',
    conditions: { s2: 'subj_mirror', s4: 'pred_entangle' },
    resultText: '屈強な鏡が十字路に絡みついている。割れた鏡の破片が道標に食い込んでいる。触れると映り込んだ指が動かない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_mirror_flee',
    conditions: { s2: 'subj_mirror', s4: 'pred_flee' },
    resultText: '屈強な鏡が十字路に逃げていく。鏡が滑るように南の道に消えた。映っていた自分の顔が置き去りにされた気がする。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p21_mirror_shine',
    conditions: { s2: 'subj_mirror', s4: 'pred_shine' },
    resultText: '屈強な鏡が十字路に輝く。月光を集めて四方に撒き散らす。道が四本とも白く光っている。どれも正しく見える。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p21_mirror_rain_down',
    conditions: { s2: 'subj_mirror', s4: 'pred_rain_down' },
    resultText: '屈強な鏡が十字路に降り注いでいる。空から鏡の破片が降ってくる。肩と頭頂に破片が突き刺さり、血と一緒に自分の目が映る破片が転げ落ちた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p21_mirror_dance',
    conditions: { s2: 'subj_mirror', s4: 'pred_dance' },
    resultText: '屈強な鏡が十字路に踊っている。鏡が回転し、映った景色が万華鏡のように変わる。目が回る。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_mirror_melt',
    conditions: { s2: 'subj_mirror', s4: 'pred_melt' },
    resultText: '屈強な鏡が十字路に溶けている。水銀のように流れ、石畳を銀色に染めている。踏んで渡ったら、靴底に自分の顔が貼りついて取れない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_mirror_laugh',
    conditions: { s2: 'subj_mirror', s4: 'pred_laugh' },
    resultText: '屈強な鏡が十字路に笑っている。映った自分の顔が笑っている。こちらは笑っていないのに。口元の筋肉がひきつり、同じ笑みを作らされた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_mirror_wait',
    conditions: { s2: 'subj_mirror', s4: 'pred_wait' },
    resultText: '屈強な鏡が十字路に待っている。道の真ん中に立つ全身鏡。覗き込まずには通れない配置だ。映った自分が首を振った。',
    damage: 2,
    quill: 5
  },

  // ── 人形 × 述語 ──
  {
    id: 'p21_doll_whisper',
    conditions: { s2: 'subj_doll', s4: 'pred_whisper' },
    resultText: '屈強な人形が十字路に囁いている。等身大の人形が口を動かしている。聞き取れない。耳を近づける気にはなれない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_doll_sleep',
    conditions: { s2: 'subj_doll', s4: 'pred_sleep' },
    resultText: '屈強な人形が十字路に眠っている。目を閉じた大きな人形が道の真ん中に横たわっている。寝ているだけだと思いたい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_doll_sing',
    conditions: { s2: 'subj_doll', s4: 'pred_sing' },
    resultText: '屈強な人形が十字路に歌っている。ぎこちない口の動きから子守歌が漏れる。誰に聞かせているのか。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_doll_entangle',
    conditions: { s2: 'subj_doll', s4: 'pred_entangle' },
    resultText: '屈強な人形が十字路に絡みついている。操り糸が道標に巻きつき、人形が宙吊りになっている。糸を辿ると空に消えている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_doll_flee',
    conditions: { s2: 'subj_doll', s4: 'pred_flee' },
    resultText: '屈強な人形が十字路に逃げていく。ぎくしゃくした動きで北の道に走っていった。操り主はどこにいる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_doll_shine',
    conditions: { s2: 'subj_doll', s4: 'pred_shine' },
    resultText: '屈強な人形が十字路に輝く。硝子の目が月光を反射し、四方に光を放つ。美しいが、目が合うと動けなくなる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_doll_rain_down',
    conditions: { s2: 'subj_doll', s4: 'pred_rain_down' },
    resultText: '屈強な人形が十字路に降り注いでいる。空から人形が落ちてくる。地面に叩きつけられても壊れず、ゆっくり起き上がる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_doll_dance',
    conditions: { s2: 'subj_doll', s4: 'pred_dance' },
    resultText: '屈強な人形が十字路に踊っている。糸に操られるように四肢を振る。踊りは上手いが、関節が軋む音がする。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_doll_melt',
    conditions: { s2: 'subj_doll', s4: 'pred_melt' },
    resultText: '屈強な人形が十字路に溶けている。蝋でできていたらしい。夜なのに溶けている。表情が崩れていく。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p21_doll_laugh',
    conditions: { s2: 'subj_doll', s4: 'pred_laugh' },
    resultText: '屈強な人形が十字路に笑っている。ぜんまい仕掛けのように首を傾げて笑う。笑い声が止まらない。耳を塞いで通る。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_doll_wait',
    conditions: { s2: 'subj_doll', s4: 'pred_wait' },
    resultText: '屈強な人形が十字路に待っている。道の真ん中に座っている。目がこちらを追っている。近づくと腕を伸ばしてきた。',
    damage: 2,
    quill: 4
  },

  // ── 雨 × 述語 ──
  {
    id: 'p21_rain_whisper',
    conditions: { s2: 'subj_rain', s4: 'pred_whisper' },
    resultText: '屈強な雨が十字路に囁いている。豪雨の音の中に声が混じっている。雨粒の一つ一つが言葉を運んでいる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p21_rain_sleep',
    conditions: { s2: 'subj_rain', s4: 'pred_sleep' },
    resultText: '屈強な雨が十字路に眠っている。雨粒が空中で止まっている。時間が止まったような四つ辻。触れると冷たい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p21_rain_sing',
    conditions: { s2: 'subj_rain', s4: 'pred_sing' },
    resultText: '屈強な雨が十字路に歌っている。石畳を叩く雨音がリズムを刻み、旋律になる。ずぶ濡れだが、聴き入ってしまう。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_rain_entangle',
    conditions: { s2: 'subj_rain', s4: 'pred_entangle' },
    resultText: '屈強な雨が十字路に絡みついている。雨が糸のように道標に巻きつき、水の檻を作っている。突っ切った肩に水の縄が残り、皮膚が擦り剥けて血が滲む。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p21_rain_flee',
    conditions: { s2: 'subj_rain', s4: 'pred_flee' },
    resultText: '屈強な雨が十字路に逃げていく。雨雲が急に東へ流れた。四つ辻だけ晴れ間が覗く。水たまりが光っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p21_rain_shine',
    conditions: { s2: 'subj_rain', s4: 'pred_shine' },
    resultText: '屈強な雨が十字路に輝く。雨粒が月光を受けて銀の粒になる。四つの道に光の雨が降り注ぐ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p21_rain_rain_down',
    conditions: { s2: 'subj_rain', s4: 'pred_rain_down' },
    resultText: '屈強な雨が十字路に降り注いでいる。豪雨。前が見えない。石畳が川になり、足を取られる。這うように進む。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p21_rain_dance',
    conditions: { s2: 'subj_rain', s4: 'pred_dance' },
    resultText: '屈強な雨が十字路に踊っている。雨粒が跳ね、水柱が人の形を取って踊る。水の舞踏会だ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p21_rain_melt',
    conditions: { s2: 'subj_rain', s4: 'pred_melt' },
    resultText: '屈強な雨が十字路に溶けている。雨が石畳を侵食し、道の形が崩れていく。足元が柔らかい。沈みそうだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p21_rain_laugh',
    conditions: { s2: 'subj_rain', s4: 'pred_laugh' },
    resultText: '屈強な雨が十字路に笑っている。雨音が笑い声に聞こえる。叩きつけるように降る雨が、嘲っているようだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p21_rain_wait',
    conditions: { s2: 'subj_rain', s4: 'pred_wait' },
    resultText: '屈強な雨が十字路に待っている。四つ辻の上空にだけ雨雲が停滞している。足を踏み入れた瞬間、土砂降りが始まった。',
    damage: 2,
    quill: 3
  },
];
