// 古い鐘楼: [主語*]が 鐘楼で [副詞*] 鳴り続けている
// 可変: s1(subject), s4(adverb) — 17×5=85通り + 元テキスト
import type { Outcome } from '../../../engine/types';

export const nodeP27Outcomes: Outcome[] = [
  // === 元テキスト（風が鐘楼で静かに鳴り続けている）===
  {
    id: 'p27_orig',
    conditions: { s1: 'subj_wind', s4: 'adv_quiet' },
    resultText: '風が鐘楼で静かに鳴り続けている。錆びた鐘が微かに揺れ、遠い記憶のような音が谷に響く。',
    damage: 0,
    quill: 3
  },

  // === 子猫 ×副詞5 ===
  {
    id: 'p27_kitten_quiet',
    conditions: { s1: 'subj_kitten', s4: 'adv_quiet' },
    resultText: '子猫が鐘楼で静かに鳴り続けている。鐘の代わりに小さな声が響く。下ろしてやると喉を鳴らした。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_kitten_fierce',
    conditions: { s1: 'subj_kitten', s4: 'adv_fierce' },
    resultText: '子猫が鐘楼で激しく鳴り続けている。鐘が共鳴して割れそうだ。抱き上げると爪を立てられた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p27_kitten_slow',
    conditions: { s1: 'subj_kitten', s4: 'adv_slow' },
    resultText: '子猫が鐘楼でゆっくり鳴き続けている。眠たげな声だ。鐘の上で丸くなって目を閉じた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_kitten_weak',
    conditions: { s1: 'subj_kitten', s4: 'adv_weak' },
    resultText: '子猫が鐘楼で力なく鳴き続けている。もう声が出ない。急いで水を飲ませる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_kitten_sudden',
    conditions: { s1: 'subj_kitten', s4: 'adv_sudden' },
    resultText: '子猫が鐘楼で突然鳴き出した。鐘が一斉に鳴り響き、鳥が空へ飛び立つ。何に驚いたのだろう。',
    damage: 1,
    quill: 5
  },

  // === 蛇 ×副詞5 ===
  {
    id: 'p27_snake_quiet',
    conditions: { s1: 'subj_snake', s4: 'adv_quiet' },
    resultText: '蛇が鐘楼で静かに鳴り続けている。鐘に巻きつき、鱗が金属を擦る音がする。近づかない方がいい。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p27_snake_fierce',
    conditions: { s1: 'subj_snake', s4: 'adv_fierce' },
    resultText: '蛇が鐘楼で激しく鳴り続けている。鐘を揺らし、毒の霧が舞う。耳を塞いで駆け抜ける。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p27_snake_slow',
    conditions: { s1: 'subj_snake', s4: 'adv_slow' },
    resultText: '蛇が鐘楼でゆっくり鳴り続けている。冬眠前の蛇が鐘に絡んでいる。動きが鈍い。そっと通り過ぎる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_snake_weak',
    conditions: { s1: 'subj_snake', s4: 'adv_weak' },
    resultText: '蛇が鐘楼で力なく鳴り続けている。脱皮の最中らしい。古い皮が鐘に引っかかっている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_snake_sudden',
    conditions: { s1: 'subj_snake', s4: 'adv_sudden' },
    resultText: '蛇が鐘楼で突然鳴り出した。鐘を叩く尾が稲妻のように速い。警告だ。獲物がいる。',
    damage: 3,
    quill: 4
  },

  // === 竜 ×副詞5 ===
  {
    id: 'p27_dragon_quiet',
    conditions: { s1: 'subj_dragon', s4: 'adv_quiet' },
    resultText: '竜が鐘楼で静かに鳴り続けている。低い咆哮が鐘を震わせる。この鐘楼は竜の寝床だった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p27_dragon_fierce',
    conditions: { s1: 'subj_dragon', s4: 'adv_fierce' },
    resultText: '竜が鐘楼で激しく鳴り続けている。鐘が溶け、火の粉が雨のように降る。鐘楼が崩壊していく。',
    damage: 5,
    quill: 3
  },
  {
    id: 'p27_dragon_slow',
    conditions: { s1: 'subj_dragon', s4: 'adv_slow' },
    resultText: '竜が鐘楼でゆっくり鳴り続けている。老いた竜だ。鐘の音に合わせて歌っているようにも見える。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p27_dragon_slow', name: '老竜の喉笛', description: '鐘の音に合わせて震える竜の骨片', sellPrice: 10 }]
  },
  {
    id: 'p27_dragon_weak',
    conditions: { s1: 'subj_dragon', s4: 'adv_weak' },
    resultText: '竜が鐘楼で力なく鳴り続けている。翼が折れている。鐘に身を預けて動けない。水を持っていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_dragon_sudden',
    conditions: { s1: 'subj_dragon', s4: 'adv_sudden' },
    resultText: '竜が鐘楼で突然咆えた。鐘が粉々に砕け、衝撃波が谷を駆け抜ける。何が竜を怒らせたのか。',
    damage: 4,
    quill: 5
  },

  // === 蝶 ×副詞5 ===
  {
    id: 'p27_butterfly_quiet',
    conditions: { s1: 'subj_butterfly', s4: 'adv_quiet' },
    resultText: '蝶が鐘楼で静かに鳴り続けている。羽ばたきが鐘に触れるたび、透明な音がする。美しい。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p27_butterfly_fierce',
    conditions: { s1: 'subj_butterfly', s4: 'adv_fierce' },
    resultText: '蝶が鐘楼で激しく鳴り続けている。何百もの蝶の羽が鐘を叩く。嵐のようだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p27_butterfly_slow',
    conditions: { s1: 'subj_butterfly', s4: 'adv_slow' },
    resultText: '蝶が鐘楼でゆっくり鳴り続けている。羽を閉じたり開いたり。鐘がその度に甘い音を立てる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_butterfly_weak',
    conditions: { s1: 'subj_butterfly', s4: 'adv_weak' },
    resultText: '蝶が鐘楼で力なく鳴り続けている。片方の羽が破れている。最後の力で鐘に止まった。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_butterfly_sudden',
    conditions: { s1: 'subj_butterfly', s4: 'adv_sudden' },
    resultText: '蝶が鐘楼で突然鳴り出した。一斉に飛び立ち、鐘が大きく揺れる。空が色とりどりに染まった。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p27_butterfly_sudden', name: '色彩の鐘粉', description: '蝶が飛び立った後、鐘に残っていた鱗粉', sellPrice: 13 }]
  },

  // === 風 ×副詞5（元テキストは風×静かに、残り4つ）===
  {
    id: 'p27_wind_fierce',
    conditions: { s1: 'subj_wind', s4: 'adv_fierce' },
    resultText: '風が鐘楼で激しく鳴り続けている。嵐だ。鐘が千切れそうに揺れ、耳をつんざく音が鳴り止まない。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p27_wind_slow',
    conditions: { s1: 'subj_wind', s4: 'adv_slow' },
    resultText: '風が鐘楼でゆっくり鳴り続けている。そよ風が鐘を撫でるように鳴らす。午後の微睡みのよう。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_wind_weak',
    conditions: { s1: 'subj_wind', s4: 'adv_weak' },
    resultText: '風が鐘楼で力なく鳴り続けている。凪に近い。鐘が揺れているのかもわからない。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p27_wind_sudden',
    conditions: { s1: 'subj_wind', s4: 'adv_sudden' },
    resultText: '風が鐘楼で突然鳴り出した。竜巻のような突風。鐘が宙に浮きかけ、地面に叩きつけられた。',
    damage: 3,
    quill: 4
  },

  // === 炎 ×副詞5 ===
  {
    id: 'p27_flame_quiet',
    conditions: { s1: 'subj_flame', s4: 'adv_quiet' },
    resultText: '炎が鐘楼で静かに鳴り続けている。蝋燭のような火が鐘を温め、柔らかな音色が響く。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p27_flame_fierce',
    conditions: { s1: 'subj_flame', s4: 'adv_fierce' },
    resultText: '炎が鐘楼で激しく鳴り続けている。火柱が鐘を赤く染め、金属が歪む不吉な音がする。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p27_flame_slow',
    conditions: { s1: 'subj_flame', s4: 'adv_slow' },
    resultText: '炎が鐘楼でゆっくり鳴り続けている。残り火が鐘の縁を舐める。やがて灰になるだろう。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_flame_weak',
    conditions: { s1: 'subj_flame', s4: 'adv_weak' },
    resultText: '炎が鐘楼で力なく鳴り続けている。消えかけの灯火。鐘が冷えていく音がする。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_flame_sudden',
    conditions: { s1: 'subj_flame', s4: 'adv_sudden' },
    resultText: '炎が鐘楼で突然燃え上がった。爆発的な火柱。鐘が真っ赤に光り、夜空を照らす。',
    damage: 4,
    quill: 4
  },

  // === 氷 ×副詞5 ===
  {
    id: 'p27_ice_quiet',
    conditions: { s1: 'subj_ice', s4: 'adv_quiet' },
    resultText: '氷が鐘楼で静かに鳴り続けている。氷柱が鐘に触れ、硝子のような音色がする。冬の鐘だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p27_ice_fierce',
    conditions: { s1: 'subj_ice', s4: 'adv_fierce' },
    resultText: '氷が鐘楼で激しく鳴り続けている。吹雪が鐘に氷塊を叩きつける。耳が痛い。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p27_ice_slow',
    conditions: { s1: 'subj_ice', s4: 'adv_slow' },
    resultText: '氷が鐘楼でゆっくり鳴り続けている。霜が鐘を覆い、ひびが入るたび小さな音がする。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_ice_weak',
    conditions: { s1: 'subj_ice', s4: 'adv_weak' },
    resultText: '氷が鐘楼で力なく鳴り続けている。春が近い。溶けた水滴が鐘を叩くかすかな音。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_ice_sudden',
    conditions: { s1: 'subj_ice', s4: 'adv_sudden' },
    resultText: '氷が鐘楼で突然砕けた。鐘が氷の破片とともに落下し、地面に突き刺さった。',
    damage: 3,
    quill: 4
  },

  // === 影 ×副詞5 ===
  {
    id: 'p27_shadow_quiet',
    conditions: { s1: 'subj_shadow', s4: 'adv_quiet' },
    resultText: '影が鐘楼で静かに鳴り続けている。鐘に映る影が揺れるたび、音がする。触れるものは何もない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p27_shadow_fierce',
    conditions: { s1: 'subj_shadow', s4: 'adv_fierce' },
    resultText: '影が鐘楼で激しく鳴り続けている。鐘の影が実体化し、黒い鐘が本物を打ち鳴らす。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p27_shadow_slow',
    conditions: { s1: 'subj_shadow', s4: 'adv_slow' },
    resultText: '影が鐘楼でゆっくり鳴り続けている。日が傾き、影が伸びるたび鐘が揺れる。日没の鐘。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_shadow_weak',
    conditions: { s1: 'subj_shadow', s4: 'adv_weak' },
    resultText: '影が鐘楼で力なく鳴り続けている。曇天で影が薄い。鐘の音も消えかけている。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p27_shadow_sudden',
    conditions: { s1: 'subj_shadow', s4: 'adv_sudden' },
    resultText: '影が鐘楼で突然鳴り出した。太陽が雲から出た瞬間、影が一斉に鐘を打った。',
    damage: 2,
    quill: 5
  },

  // === 歌 ×副詞5 ===
  {
    id: 'p27_song_quiet',
    conditions: { s1: 'subj_song', s4: 'adv_quiet' },
    resultText: '歌が鐘楼で静かに鳴り続けている。鐘と歌が混ざり合い、どちらがどちらかわからない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p27_song_quiet', name: '鐘歌の欠片', description: '鐘と歌が混ざり合った音を閉じ込めた石', sellPrice: 9 }]
  },
  {
    id: 'p27_song_fierce',
    conditions: { s1: 'subj_song', s4: 'adv_fierce' },
    resultText: '歌が鐘楼で激しく鳴り続けている。狂ったような旋律。鐘が割れてもまだ歌っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p27_song_slow',
    conditions: { s1: 'subj_song', s4: 'adv_slow' },
    resultText: '歌が鐘楼でゆっくり鳴り続けている。子守歌のような旋律。眠気が襲ってくる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_song_weak',
    conditions: { s1: 'subj_song', s4: 'adv_weak' },
    resultText: '歌が鐘楼で力なく鳴り続けている。歌い手はもういない。残響だけが鐘に宿っている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_song_sudden',
    conditions: { s1: 'subj_song', s4: 'adv_sudden' },
    resultText: '歌が鐘楼で突然鳴り出した。誰もいないのに。鐘自身が歌い始めたのだ。',
    damage: 1,
    quill: 6
  },

  // === 沈黙 ×副詞5 ===
  {
    id: 'p27_silence_quiet',
    conditions: { s1: 'subj_silence', s4: 'adv_quiet' },
    resultText: '沈黙が鐘楼で静かに鳴り続けている。鐘は動いているのに音がしない。耳の奥が痛い。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p27_silence_fierce',
    conditions: { s1: 'subj_silence', s4: 'adv_fierce' },
    resultText: '沈黙が鐘楼で激しく鳴り続けている。音の無い衝撃波が体を貫く。耳鳴りが止まらない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p27_silence_slow',
    conditions: { s1: 'subj_silence', s4: 'adv_slow' },
    resultText: '沈黙が鐘楼でゆっくり鳴り続けている。音が一つずつ消えていく。やがて世界が静まった。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p27_silence_weak',
    conditions: { s1: 'subj_silence', s4: 'adv_weak' },
    resultText: '沈黙が鐘楼で力なく鳴り続けている。沈黙にも力があるのか。遠くで鳥が鳴くのが聞こえた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_silence_sudden',
    conditions: { s1: 'subj_silence', s4: 'adv_sudden' },
    resultText: '沈黙が鐘楼で突然鳴り出した。全ての音が一瞬で消え、空白だけが響く。息をするのも怖い。',
    damage: 3,
    quill: 5
  },

  // === 騎士 ×副詞5 ===
  {
    id: 'p27_knight_quiet',
    conditions: { s1: 'subj_knight', s4: 'adv_quiet' },
    resultText: '騎士が鐘楼で静かに鳴り続けている。剣の柄で鐘を叩いている。誰かを呼んでいるのだろう。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p27_knight_fierce',
    conditions: { s1: 'subj_knight', s4: 'adv_fierce' },
    resultText: '騎士が鐘楼で激しく鳴り続けている。警鐘だ。敵が来る。武器を取れと叫んでいる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p27_knight_slow',
    conditions: { s1: 'subj_knight', s4: 'adv_slow' },
    resultText: '騎士が鐘楼でゆっくり鳴り続けている。弔いの鐘。仲間を見送っているのだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_knight_weak',
    conditions: { s1: 'subj_knight', s4: 'adv_weak' },
    resultText: '騎士が鐘楼で力なく鳴り続けている。傷だらけだ。鐘を鳴らす力がもう残っていない。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_knight_sudden',
    conditions: { s1: 'subj_knight', s4: 'adv_sudden' },
    resultText: '騎士が鐘楼で突然鐘を鳴らした。出陣の合図。鎧が光り、馬が嘶く。',
    damage: 2,
    quill: 5
  },

  // === 魔女 ×副詞5 ===
  {
    id: 'p27_witch_quiet',
    conditions: { s1: 'subj_witch', s4: 'adv_quiet' },
    resultText: '魔女が鐘楼で静かに鳴り続けている。鐘に呪文を刻んでいる。音に魔力が乗っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p27_witch_fierce',
    conditions: { s1: 'subj_witch', s4: 'adv_fierce' },
    resultText: '魔女が鐘楼で激しく鳴り続けている。嵐を呼ぶ鐘だ。雷が鐘楼に落ちるが、魔女は笑っている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p27_witch_slow',
    conditions: { s1: 'subj_witch', s4: 'adv_slow' },
    resultText: '魔女が鐘楼でゆっくり鳴り続けている。一打ごとに花が咲く。鐘楼の周りが花畑になった。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p27_witch_weak',
    conditions: { s1: 'subj_witch', s4: 'adv_weak' },
    resultText: '魔女が鐘楼で力なく鳴り続けている。魔力が尽きかけている。鐘が鈍い音を立てる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_witch_sudden',
    conditions: { s1: 'subj_witch', s4: 'adv_sudden' },
    resultText: '魔女が鐘楼で突然鐘を鳴らした。空間が歪み、一瞬で景色が変わった。転移の鐘だ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p27_witch_sudden', name: '転移の鐘片', description: '空間を歪める力が残った鐘の破片', sellPrice: 15 }]
  },

  // === 王 ×副詞5 ===
  {
    id: 'p27_king_quiet',
    conditions: { s1: 'subj_king', s4: 'adv_quiet' },
    resultText: '王が鐘楼で静かに鳴り続けている。退位の日の鐘を自ら鳴らしている。寂しい音だ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_king_fierce',
    conditions: { s1: 'subj_king', s4: 'adv_fierce' },
    resultText: '王が鐘楼で激しく鳴り続けている。戦争の号令だ。鐘の音で地が震える。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p27_king_slow',
    conditions: { s1: 'subj_king', s4: 'adv_slow' },
    resultText: '王が鐘楼でゆっくり鳴り続けている。即位の儀式。荘厳な音が国中に響く。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_king_weak',
    conditions: { s1: 'subj_king', s4: 'adv_weak' },
    resultText: '王が鐘楼で力なく鳴り続けている。老いた王だ。もう腕が上がらない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_king_sudden',
    conditions: { s1: 'subj_king', s4: 'adv_sudden' },
    resultText: '王が鐘楼で突然鐘を鳴らした。「目を覚ませ！」と叫んでいる。何かが来る。',
    damage: 2,
    quill: 5
  },

  // === 亡霊 ×副詞5 ===
  {
    id: 'p27_ghost_quiet',
    conditions: { s1: 'subj_ghost', s4: 'adv_quiet' },
    resultText: '亡霊が鐘楼で静かに鳴り続けている。生前の習慣だろうか。毎晩同じ時刻に鳴らすらしい。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p27_ghost_fierce',
    conditions: { s1: 'subj_ghost', s4: 'adv_fierce' },
    resultText: '亡霊が鐘楼で激しく鳴り続けている。怒りの鐘。この場所で殺されたのだ。恨みが鐘を揺らす。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p27_ghost_slow',
    conditions: { s1: 'subj_ghost', s4: 'adv_slow' },
    resultText: '亡霊が鐘楼でゆっくり鳴り続けている。成仏しかけている。鐘の音が薄れていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_ghost_weak',
    conditions: { s1: 'subj_ghost', s4: 'adv_weak' },
    resultText: '亡霊が鐘楼で力なく鳴り続けている。もう何百年も鳴らしている。疲れないのだろうか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_ghost_sudden',
    conditions: { s1: 'subj_ghost', s4: 'adv_sudden' },
    resultText: '亡霊が鐘楼で突然鳴り出した。生者が来たことに気づいたのだ。歓迎なのか、拒絶なのか。',
    damage: 2,
    quill: 5
  },

  // === 鏡 ×副詞5 ===
  {
    id: 'p27_mirror_quiet',
    conditions: { s1: 'subj_mirror', s4: 'adv_quiet' },
    resultText: '鏡が鐘楼で静かに鳴り続けている。鐘に嵌め込まれた鏡が、音に合わせて光を反射する。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_mirror_fierce',
    conditions: { s1: 'subj_mirror', s4: 'adv_fierce' },
    resultText: '鏡が鐘楼で激しく鳴り続けている。割れた鏡の破片が鐘に当たり、銀色の雨が降る。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p27_mirror_slow',
    conditions: { s1: 'subj_mirror', s4: 'adv_slow' },
    resultText: '鏡が鐘楼でゆっくり鳴り続けている。鏡面に映る景色がゆっくりと過去に遡っていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_mirror_weak',
    conditions: { s1: 'subj_mirror', s4: 'adv_weak' },
    resultText: '鏡が鐘楼で力なく鳴り続けている。曇った鏡だ。何も映さない鐘の音。',
    damage: 0,
    quill: 2
  },
  {
    id: 'p27_mirror_sudden',
    conditions: { s1: 'subj_mirror', s4: 'adv_sudden' },
    resultText: '鏡が鐘楼で突然割れた。鐘が鳴り響き、破片の一つ一つに違う景色が映っている。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p27_mirror_sudden', name: '異景の破片', description: '覗くたびに違う景色が映る鏡の欠片', sellPrice: 11 }]
  },

  // === 人形 ×副詞5 ===
  {
    id: 'p27_doll_quiet',
    conditions: { s1: 'subj_doll', s4: 'adv_quiet' },
    resultText: '人形が鐘楼で静かに鳴り続けている。糸で吊られた人形が鐘を叩いている。誰が糸を引いている？',
    damage: 2,
    quill: 4
  },
  {
    id: 'p27_doll_fierce',
    conditions: { s1: 'subj_doll', s4: 'adv_fierce' },
    resultText: '人形が鐘楼で激しく鳴り続けている。何十体もの人形が鐘にしがみつき、揺らしている。不気味だ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p27_doll_slow',
    conditions: { s1: 'subj_doll', s4: 'adv_slow' },
    resultText: '人形が鐘楼でゆっくり鳴り続けている。ぜんまい仕掛けだ。もうすぐ止まる。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_doll_weak',
    conditions: { s1: 'subj_doll', s4: 'adv_weak' },
    resultText: '人形が鐘楼で力なく鳴り続けている。腕が取れかけている。それでもまだ鐘を叩こうとする。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p27_doll_sudden',
    conditions: { s1: 'subj_doll', s4: 'adv_sudden' },
    resultText: '人形が鐘楼で突然鳴り出した。目が光った。命令を受けたのだ。誰の命令だろう。',
    damage: 2,
    quill: 5
  },

  // === 雨 ×副詞5 ===
  {
    id: 'p27_rain_quiet',
    conditions: { s1: 'subj_rain', s4: 'adv_quiet' },
    resultText: '雨が鐘楼で静かに鳴り続けている。雨粒が鐘を叩く繊細な音色。聴き惚れてしまう。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p27_rain_fierce',
    conditions: { s1: 'subj_rain', s4: 'adv_fierce' },
    resultText: '雨が鐘楼で激しく鳴り続けている。豪雨が鐘を打ち鳴らす。雷鳴と鐘の音が混ざり合う。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p27_rain_slow',
    conditions: { s1: 'subj_rain', s4: 'adv_slow' },
    resultText: '雨が鐘楼でゆっくり鳴り続けている。霧雨だ。鐘に溜まった水滴がぽたりと落ちるたび、音がする。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p27_rain_weak',
    conditions: { s1: 'subj_rain', s4: 'adv_weak' },
    resultText: '雨が鐘楼で力なく鳴り続けている。止みかけの雨。最後の一滴が鐘を叩いて、静寂が訪れた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p27_rain_sudden',
    conditions: { s1: 'subj_rain', s4: 'adv_sudden' },
    resultText: '雨が鐘楼で突然鳴り出した。夕立だ。一瞬で全身が濡れ、鐘が怒ったように鳴り響く。',
    damage: 2,
    quill: 4
  },
];
