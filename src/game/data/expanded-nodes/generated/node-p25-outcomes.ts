// Auto-generated from node-p25-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP25Outcomes: Outcome[] = [
  {
    id: 'p25_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '小さな子猫が渡し場で待っている。親指ほどの猫が桟橋に座っている。渡し守ではないだろう。一緒に待つことにした。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が渡し場で待っている。擦り寄ってきて、舟の方へ歩いていく。猫について乗り込むと舟が動き出した。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が渡し場で待っている。炎をまとった猫が桟橋に座っている。木の桟橋が焦げ始めている。急いで舟を出した。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が渡し場で待っている。陶器の招き猫が桟橋に鎮座している。右足が対岸を指している。行けということか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が渡し場で待っている。硝子の爪。舟に乗ろうとしたら飛びかかってきた。渡し賃は血で払えということか。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が渡し場で待っている。ぬいぐるみが桟橋に落ちている。綿が出ている。誰かが対岸で待っているのか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が渡し場で待っている。虎のような体格の子猫が舟の上で堂々と座っている。渡し守を名乗っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が渡し場で待っている。氷の彫刻。桟橋の上で凍りついている。周りの川面が薄氷を張り始めている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が渡し場で待っている。硝子の猫。川面に映って二匹に見える。どちらが本物か、水面が教えてくれない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_clear_kitten', name: '水鏡猫の欠片', description: '水面に映った硝子猫の破片。裏表で違うものが見える', sellPrice: 10 }]
  },
  {
    id: 'p25_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が渡し場で待っている。舟に乗せても対岸に置いてきてもここに戻っている。渡し場を離れられない猫だ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が渡し場で待っている。舟の上で丸くなって寝ている。揺れが心地よいらしい。起こさず隣に座った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '小さな蛇が渡し場で待っている。指ほどの蛇が舟の縁に巻きついている。乗り込むと膝の上に落ちてきた。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が渡し場で待っている。腕に巻きついて温かい。水の上は冷えるから、と体温を分けてくれるのか。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が渡し場で待っている。炎の軌跡を残す蛇が桟橋をのたうっている。木の桟橋が燃え落ちる前に飛び乗った。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が渡し場で待っている。鉄の鱗の蛇が舟の繋ぎ綱に巻きついている。これでは舟が出せない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が渡し場で待っている。猛毒の牙。水面から鎌首をもたげている。川に入れない。舟を使うしかない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が渡し場で待っている。脱皮の途中で力尽きた蛇が桟橋に横たわっている。古い皮が半分残っている。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が渡し場で待っている。大蛇が川を横切るように横たわっている。橋になっている。渡れるが、揺れる。',
    damage: 2,
    quill: 6,
    rewardItems: [{ id: 'item_p25_mighty_snake', name: '大蛇の渡し鱗', description: '大蛇の胴を渡ったときに拾った鱗。滑り止めになる', sellPrice: 8 }]
  },
  {
    id: 'p25_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が渡し場で待っている。霜に覆われた蛇が桟橋に巻きついて凍っている。川面にも氷が広がっている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が渡し場で待っている。水の中を泳ぐと透けて見えない。飲み込んだものだけが水中を漂って見える。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が渡し場で待っている。脱皮するたびに大きくなる蛇。川幅と同じ太さになりつつある。渡し場が沈む。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が渡し場で待っている。舟底でとぐろを巻いて眠っている。同乗するしかない。踏まなければ大丈夫だろう。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '小さな竜が渡し場で待っている。手のひらサイズの竜が舟の舳先に座っている。小さな火を灯して航海灯の代わりだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p25_small_dragon', name: '竜灯の舟飾り', description: '小さな竜が灯した舳先の灯り。水面を金色に照らす', sellPrice: 12 }]
  },
  {
    id: 'p25_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が渡し場で待っている。穏やかな老竜が渡し守を務めている。「乗りなさい」。翼の上は舟より安定している。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が渡し場で待っている。全身が業火の竜が川を蒸発させている。渡し場の水が沸騰している。近づけない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p25_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が渡し場で待っている。城壁のような鱗の竜が川に沈んでいる。背中が橋になっている。渡れるが、恐ろしい。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が渡し場で待っている。金色の目。渡し賃を値踏みするように見据えてくる。何も持っていないと知ると興味を失った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が渡し場で待っている。翼は折れ、飛べない。川を渡りたいが泳げもしない。同じ境遇だ。一緒に舟を探した。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が渡し場で待っている。山のような巨体が渡し場を占拠している。舟が踏み潰されている。泳ぐしかない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が渡し場で待っている。白い竜の吐息が川を凍らせている。氷の上を歩いて渡れそうだが、割れるかもしれない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が渡し場で待っている。水晶の竜が川に浮かんでいる。体を通して川底が歪んで見える。不思議な舟だ。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が渡し場で待っている。暴走した守護竜が川を荒らしている。波が高い。渡れる状態ではない。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p25_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が渡し場で待っている。舟の上で居眠りしている。いびきで舟が揺れる。そっと乗り込んで、竜の寝息で対岸へ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が渡し場で待っている。花びらほどの蝶が舟の舳先に止まっている。風を待つように羽を広げている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が渡し場で待っている。対岸へひらひら飛んでいく。道を示しているのか。蝶の軌跡を追って舟を漕いだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が渡し場で待っている。炎の羽が水面を照らす。飛んだ跡の火の粉が川に落ちて消える。幻想的だが舟が燃えそうだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が渡し場で待っている。金属の羽の蝶が桟橋の杭に止まっている。金属音が川面に反響する。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が渡し場で待っている。刃の縁の羽が水面すれすれを飛ぶ。川面に細い切り筋が走る。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が渡し場で待っている。片羽がちぎれた蝶が桟橋に止まっている。対岸へ飛べない。同じだ。舟に乗せた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が渡し場で待っている。羽ばたきが水面に波を立てる。舟が揺れる。この蝶なら自力で対岸へ行けるだろうに。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が渡し場で待っている。霜の蝶。止まった水面が少しずつ凍っている。氷の上を歩けるかもしれない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が渡し場で待っている。透明な羽が川面と混ざって消える。蝶が飛んだ軌跡だけが光の筋として残る。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が渡し場で待っている。追いかけると必ず迷子になる蝶。川の上で追いかけたら、どちらの岸かわからなくなった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が渡し場で待っている。舟の縁で羽を閉じて眠っている。川の揺れが心地よいらしい。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が渡し場で待っている。そよ風が川面を撫でている。帆に風を受けて、ゆっくり対岸へ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が渡し場で待っている。温かい追い風。帆を張ると舟がすいすい進む。背中を押す風だ。',
    damage: -1,
    quill: 5
  },
  {
    id: 'p25_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が渡し場で待っている。熱風が川面から蒸気を上げている。舟の帆が焦げる。漕いで渡るしかない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が渡し場で待っている。対岸から吹く向かい風。舟が進まない。何度漕いでも押し戻される。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が渡し場で待っている。真空の刃が川の上を吹いている。帆が切り裂かれた。手漕ぎで渡るしかない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が渡し場で待っている。乱気流で舟がくるくる回る。方向が定まらない。漕いでも漕いでも同じ場所にいる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が渡し場で待っている。暴風で川面が荒れている。舟が転覆しそうだ。岸にしがみついてやり過ごした。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が渡し場で待っている。凍風が川面を凍らせていく。舟ではなく氷の上を歩いて渡った。滑った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が渡し場で待っている。澄んだ風が川面を渡る。対岸の景色が果てまで見える。帆に受けて、一気に渡った。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_clear_wind', name: '渡し場の清風', description: '瓶に詰めた川を渡る風。帆を膨らませてくれる', sellPrice: 10 }]
  },
  {
    id: 'p25_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が渡し場で待っている。吹かれると帰り道を忘れる風。渡った後、どちらから来たのかわからなくなった。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が渡し場で待っている。凪に近い。帆が膨らまない。生温い空気に包まれて、舟の上で眠ってしまった。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が渡し場で待っている。舟の舳先に蝋燭ほどの火が灯っている。暗い川面を照らす灯台代わりだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が渡し場で待っている。松明が桟橋に灯されている。暖かい光が夜の渡し場を照らしている。道標のようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が渡し場で待っている。大火が桟橋を飲み込んでいる。舟も燃えている。川に飛び込むしかなかった。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p25_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が渡し場で待っている。消えない炎が桟橋の先端で燃え続けている。水をかけても消えない。灯台のつもりか。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が渡し場で待っている。舟の繋ぎ綱を正確に焼き切った。舟が流れ出す。飛び乗って、流されるまま渡った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が渡し場で待っている。緑や紫に明滅する火。温かくない。鬼火のように川面を漂っている。不気味だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が渡し場で待っている。火柱が渡し場を照らしている。川が蒸気で煙っている。熱すぎて近づけない。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が渡し場で待っている。青白い鬼火が川面を漂っている。触れると凍る。川を渡る者を惑わす灯りだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が渡し場で待っている。ほぼ見えない炎。しかし確かに温かい。この灯りに導かれて対岸に辿り着いた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_clear_flame', name: '渡し火の欠片', description: '透明な炎の残り火。握ると手が温かく、道に迷わない', sellPrice: 12 }]
  },
  {
    id: 'p25_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が渡し場で待っている。燃やしたものの形を覚える炎。川面に過去の舟の幻が燃えている。どれが本物の舟か。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p25_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が渡し場で待っている。熾火が桟橋の隅で赤く明滅している。催眠的な揺れ。舟の上で意識を失いそうだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が渡し場で待っている。掌に収まる氷の欠片が川面を流れている。もう春が近いのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が渡し場で待っている。冷たいが痛くない。川の水で額を冷やすと旅の熱が引いた。',
    damage: -1,
    quill: 4
  },
  {
    id: 'p25_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が渡し場で待っている。炎を放つ氷が川面に浮いている。触れると凍傷と火傷を同時に負う。舟の底が焦げて凍る。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p25_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が渡し場で待っている。万年氷が川を完全に塞いでいる。舟は使えない。氷の上を歩いて渡った。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が渡し場で待っている。氷柱が川面から突き出している。舟の底を割りそうだ。氷を避けながら漕いだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が渡し場で待っている。ひび割れた氷が川を流れている。舟がぶつかってきしむ。慎重に漕いだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が渡し場で待っている。氷山が川を丸ごと塞いでいる。渡し場が無意味になっている。登って越えた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が渡し場で待っている。川全体が凍りついている。絶対零度の氷。近づくだけで手足の感覚がなくなる。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が渡し場で待っている。完全に透明な氷が川面を覆っている。下の魚が泳いでいるのが見える。歩いて渡った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が渡し場で待っている。溶けない氷が川を永遠に凍らせている。舟は出せない。氷の上を渡るしかない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が渡し場で待っている。ゆっくり溶ける氷が川に流れている。雫の音が子守唄のようだ。舟の上でうとうとした。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が渡し場で待っている。桟橋に小さな黒い染みがある。何の影かわからない。舟に乗ると影もついてきた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が渡し場で待っている。木陰のような心地よい影が舟を覆っている。日差しを遮ってくれる。安らぐ船旅だ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が渡し場で待っている。黒い炎で燃える影が川面に映っている。水に映った影が水中を燃やしている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p25_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が渡し場で待っている。固まった影が桟橋と舟を繋いでいる。影の鎖。切れない。舟が出せない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が渡し場で待っている。くっきりした影が長く対岸まで伸びている。影の上を歩けば渡れそうだが、縁で足が切れた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が渡し場で待っている。立体的にめくれ上がった影が水面でばたついている。舟の影と混ざって方向がわからない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が渡し場で待っている。巨大な影が川面を覆っている。日が差しているのに川が暗い。何の影なのか見上げても空は晴れている。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p25_mighty_shadow', name: '川影の帳', description: '渡し場の川を覆った巨大な影の端切れ。広げると日陰ができる', sellPrice: 8 }]
  },
  {
    id: 'p25_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が渡し場で待っている。影が地面に張りついて凍っている。影を踏むと足が冷える。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が渡し場で待っている。半透明の影が水面に溶けている。影なのか水面の揺らぎなのか、区別がつかない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が渡し場で待っている。触れたものが影になる。桟橋の板が一枚ずつ黒く平たくなっていく。急いで舟に乗った。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が渡し場で待っている。縮んだ影が舟底で動かない。光が動いても影は動かない。眠っている影だ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が渡し場で待っている。鼻歌が川面を渡ってくる。誰が歌っているのか。対岸か、水の中か。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が渡し場で待っている。子守唄が川面を渡ってくる。舟を漕ぐ手が軽くなる。傷が癒える気がする。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p25_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が渡し場で待っている。戦の歌が川を渡って響く。漕ぐ腕に力が入る。だが舟が速すぎて制御できない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が渡し場で待っている。止まらない歌が渡し場に響いている。他の音が聞こえない。水音も風の音も消えている。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が渡し場で待っている。金切り声が川面に反響する。水面が振動する。耳を塞いで漕いだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が渡し場で待っている。途中で止まる旋律が川面を漂う。続きは対岸にあるのかもしれない。漕いだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が渡し場で待っている。大合唱が川を揺らす。波が高い。舟が揺れて水が入ってきた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が渡し場で待っている。聴くと体が動かなくなる歌。舟の上で凍りついた。流されるまま対岸に着いた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が渡し場で待っている。純粋な旋律が川面を渡る。雑念が消え、漕ぐリズムと歌が一つになる。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p25_clear_song', name: '渡し歌の音叉', description: '透き通った歌の周波数を記録した音叉。弾くと心が澄む', sellPrice: 12 }]
  },
  {
    id: 'p25_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が渡し場で待っている。一度聴くと頭から離れない。漕ぎながら歌が頭を占領していく。対岸に着く頃には自分が何をしていたか忘れた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が渡し場で待っている。子守唄が川の揺れに混ざる。舟の上で意識が溶ける。気づいたら対岸にいた。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が渡し場で待っている。水音が一瞬だけ消えた。すぐに戻った。何だったのか。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が渡し場で待っている。静かな渡し場。言葉がなくても安らぐ。ゆっくり舟を漕いだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が渡し場で待っている。空気が焦げている。何かが爆発する前の静けさだ。急いで舟を出した。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が渡し場で待っている。声を出しても水音さえ消える。漕ぐ音もしない。無音の中で舟が進む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が渡し場で待っている。無言の圧。川の向こうから視線だけが突き刺さる。渡し守がいないのに、誰かが見ている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が渡し場で待っている。静寂に亀裂が入っている。どこかから微かなノイズが漏れている。水の下から。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が渡し場で待っている。圧倒的な無音が川を覆っている。水も風も黙っている。声を上げることすらできない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が渡し場で待っている。息も凍る静けさ。川面が鏡のように静止している。時間が止まったかのようだ。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が渡し場で待っている。完全な静寂の中で、川底まで透けて見える。水も空気も澄み渡っている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が渡し場で待っている。声を奪われた。舟の上で助けを呼べない。対岸に着くまで無言で漕いだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が渡し場で待っている。静寂が眠気を誘う。舟の揺れと合わさって、意識が遠くなる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が渡し場で待っている。子供の騎士が舟の上で仁王立ちしている。「わしが渡し守だ」。大きすぎる兜がずれた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が渡し場で待っている。剣を収め、「お乗りなさい」と舟に案内してくれた。対岸まで漕いでくれる。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が渡し場で待っている。炎に包まれた騎士が桟橋に立っている。近づけない。舟は騎士の後ろだ。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が渡し場で待っている。分厚い鎧の騎士が桟橋の入口を塞いでいる。表情が見えない。無言で通行を拒否している。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が渡し場で待っている。冷たい目で渡し賃を査定している。持ち物を全部見られた。値切りは通じそうにない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が渡し場で待っている。鎧はへこみ、剣は折れている。対岸へ帰れないでいる。一緒に舟に乗った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が渡し場で待っている。巨体の騎士が舟に乗っている。重すぎて舟が沈みかけている。一緒に乗ったら沈んだ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が渡し場で待っている。氷に閉じ込められた騎士が桟橋に立っている。舟を出そうとした姿勢のまま凍りついている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が渡し場で待っている。影の薄い騎士。気づかず桟橋を歩いた。背後で「お気をつけて」と聞こえた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が渡し場で待っている。黒い鎧の騎士が舟に乗せてくれるが、対岸に着くと元の岸に戻っている。永遠に渡れない。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p25_cursed_knight', name: '永遠の渡し守の指輪', description: '呪われた騎士が落とした指輪。嵌めると帰れなくなりそうだ', sellPrice: 10 }]
  },
  {
    id: 'p25_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が渡し場で待っている。舟の上で居眠りしている。揺れに身を任せている。渡し守としては失格だが、隣に座って一緒に揺られた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が渡し場で待っている。少女の魔女が舟の舳先に座っている。「渡し賃は名前だよ」。大きな帽子の下で笑っている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'p25_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が渡し場で待っている。薬草を煎じながら舟を待っている。「お乗り。川向こうに良い薬草がある」。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が渡し場で待っている。炎の魔女が舟に乗っている。舟が燃えている。水面に映る炎が二重に揺れる。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p25_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が渡し場で待っている。頑固な老魔女。「渡し賃は取引だ」。何かを差し出さなければ通さない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が渡し場で待っている。鉤鼻に鋭い目。「本当に対岸へ行きたいのか」。問い詰められて答えに窮した。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が渡し場で待っている。途切れ途切れの呪文を唱えるたびに舟がくるくる回る。目的地にたどり着けない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が渡し場で待っている。腕の太い魔女が一人で舟を漕いでいる。「乗れ。遅いぞ」。速い。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が渡し場で待っている。氷の魔女が川を凍らせている。舟は使えないが、氷の上を歩いて渡れる。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が渡し場で待っている。老いた魔女。向こうが透けている。「もう渡し守は引退だよ」と笑って消えた。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_clear_witch', name: '最後の渡し守の杖', description: '透き通った魔女が置いていった杖。水面に触れると舟が動く', sellPrice: 14 }]
  },
  {
    id: 'p25_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が渡し場で待っている。呪いに蝕まれた魔女が舟を漕いでくれるが、対岸につくたびに記憶が飛ぶ。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が渡し場で待っている。舟の上で大釜を抱えてうとうとしている。起こすと不機嫌そうに渡してくれた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が渡し場で待っている。子供が王冠をかぶって桟橋に立っている。「この川はわしのものだ。通行料を払え」。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が渡し場で待っている。質素な衣の王が自ら舟を漕いでくれた。「旅人を渡すのは王の務めだ」。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p25_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が渡し場で待っている。炎の冠の王が舟に乗っている。舟が燃えている。国もろとも燃えようとしている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p25_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が渡し場で待っている。石の玉座を舟に載せて微動だにしない。舟は沈みかけている。王は気にしていない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が渡し場で待っている。鷹の目で渡し賃を査定している。「それでは足りぬ。もう一つ出せ」。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が渡し場で待っている。王冠が歪み、目は虚ろ。舟に座って川を眺めている。国を失い、流れる先もない。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p25_broken_king', name: '流浪の王冠片', description: '壊れた王が落とした王冠の破片。まだ微かに輝いている', sellPrice: 10 }]
  },
  {
    id: 'p25_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が渡し場で待っている。戦士王が舟を占拠している。「余の舟だ」。力ずくで奪い返す気にはなれない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が渡し場で待っている。氷の玉座の王。川が凍っていく。渡し場ごと氷に覆われた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が渡し場で待っている。存在が希薄な王。舟に乗っているのに気づかなかった。一緒に対岸まで渡った。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が渡し場で待っている。触れたものが金になる王。舟の縁を握ったら金に変わった。舟が重くなり沈みかけた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p25_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が渡し場で待っている。玉座ごと舟に乗って居眠りしている。川に流されているが本人は気づいていない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が渡し場で待っている。子供の亡霊が桟橋に座って足をぶらぶらさせている。対岸に帰りたいらしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が渡し場で待っている。穏やかな霊が舟を漕いでくれる。微笑んだまま、対岸で消えた。渡し守だったのだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p25_gentle_ghost', name: '渡し守の霊火', description: '優しい亡霊が残した灯り。暗い水路でも道を示す', sellPrice: 12 }]
  },
  {
    id: 'p25_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が渡し場で待っている。火に焼かれた霊が川面を漂っている。水の上で炎が揺れる。近づくと舟が燃える。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が渡し場で待っている。何百年もここに立つ霊。渡し賃を払わなかった旅人を永遠に待っている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が渡し場で待っている。罪を見透かす目。「渡し賃は懺悔だ」。何を懺悔すればいいのか。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p25_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が渡し場で待っている。記憶を失った霊。自分が渡し守だったことも忘れている。ただ立っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が渡し場で待っている。鎧武者の亡霊が渡し場を占拠している。生前より強い。対岸は死者の国だ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p25_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が渡し場で待っている。冷気を纏った霊が桟橋に立っている。霜が舟に広がっていく。凍死者の霊だ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が渡し場で待っている。成仏しかけている霊。あと一人渡せば成仏できるらしい。乗った。霊は微笑んで消えた。',
    damage: 0,
    quill: 7
  },
  {
    id: 'p25_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が渡し場で待っている。呪いで成仏できない霊。この渡し場で永遠に旅人を待っている。渡し賃を受け取っても、舟は動かない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が渡し場で待っている。うつらうつらしている霊。存在感が薄れたり戻ったりする。舟を漕ぐ手が止まっている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が渡し場で待っている。手鏡が舟底に落ちていた。覗くと対岸の景色が映っている。もう着いたのかと錯覚した。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が渡し場で待っている。川面が鏡のように澄んでいる。映った自分が少し逞しく見える。漕ぐ力が湧いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が渡し場で待っている。鏡の中が燃えている。川面に映る炎が水の上を走る。舟底から熱が上がってくる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p25_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が渡し場で待っている。割れない鏡が桟橋を塞いでいる。押しても引いても動かない。鏡の横をすり抜けて舟に乗った。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が渡し場で待っている。割れ鏡の破片が桟橋に散らばっている。裸足で歩いたら足裏を切った。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が渡し場で待っている。ひび割れた鏡に映る川が何本にも分裂して見える。どの川が本物か。舟を出すのが怖い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p25_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が渡し場で待っている。巨大な姿見が川面に立っている。対岸が鏡に反転して映り、方向感覚を失う。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が渡し場で待っている。霜に覆われた鏡が桟橋に立っている。覗くと凍った川が見えた。別の渡し場の景色だ。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p25_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が渡し場で待っている。窓のような鏡。向こうに対岸が見える。通り抜けようとしたら硬い壁だった。結局舟で渡った。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が渡し場で待っている。覗くと自分の姿が鏡に残る。川面にも映り込む。水の中から自分が手を伸ばしてくる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p25_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が渡し場で待っている。鏡面が曇って遅れて映る。自分の寝顔が映っている。川の揺れが催眠術のようだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が渡し場で待っている。指人形が桟橋の杭に刺さっている。誰かの目印か。対岸にも一つ見える。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が渡し場で待っている。笑顔の人形が舟に座っている。一人で舟を出すのが寂しかったが、隣に人形がいると安心する。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が渡し場で待っている。燃えている藁人形が舟に乗っている。舟に火が移る前に蹴り出した。間一髪。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が渡し場で待っている。木彫りの人形が舟の舳先に立っている。船首像のようだ。表情がない。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が渡し場で待っている。関節が刃の人形が桟橋の上で揺れている。糸が見えない。風で動いたのか。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が渡し場で待っている。首がもげかけた人形が川に浮かんでいる。片目がこちらを見ている。拾い上げて舟に乗せた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が渡し場で待っている。等身大の木彫りゴーレムが舟を漕いでいる。命令を待っている。「対岸へ」と言うと動いた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が渡し場で待っている。氷の人形が桟橋で凍りついている。溶けたら二度と作れない。触れずに通り過ぎた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p25_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が渡し場で待っている。硝子の人形が水面に浮いている。中の液体が川の流れで揺れている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p25_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が渡し場で待っている。舟に乗せて対岸に置いてきたが、戻ると桟橋にいた。何度でも戻ってくる。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が渡し場で待っている。目を閉じた人形が舟底に横たわっている。揺れて目が開いたり閉じたりする。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が渡し場で待っている。霧雨が川面に細かな波紋を作っている。傘がなくても濡れない程度だ。',
    damage: 0,
    quill: 3
  },
  {
    id: 'p25_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が渡し場で待っている。温かい慈雨が降っている。旅の汚れが洗い流される。川面が柔らかく揺れている。',
    damage: -1,
    quill: 5
  },
  {
    id: 'p25_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が渡し場で待っている。火の雨が川面に降り注ぐ。蒸気が立ち上る。舟の帆に穴が開いていく。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が渡し場で待っている。雹が舟を打つ。バケツをひっくり返したような勢いだ。舟底に水が溜まっていく。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p25_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が渡し場で待っている。針のような雨が横殴りに吹く。視界がなくなる。対岸が見えないまま漕いだ。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p25_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が渡し場で待っている。リズムのおかしい雨。降ったり止んだりを繰り返す。水面の波紋が不規則だ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p25_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が渡し場で待っている。豪雨で川が氾濫しかけている。舟が流されそうだ。水位が桟橋を超えた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p25_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が渡し場で待っている。凍雨が舟を氷で覆っていく。舟が重くなって沈みかけている。氷を叩き割りながら漕いだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p25_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が渡し場で待っている。澄んだ雨が川を洗い清めている。濡れた跡が光る。穢れが流れていく。',
    damage: -1,
    quill: 6,
    rewardItems: [{ id: 'item_p25_clear_rain', name: '浄雨の川水', description: '澄んだ雨で清められた川の水。飲むと体が軽くなる', sellPrice: 10 }]
  },
  {
    id: 'p25_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が渡し場で待っている。浴びると動けなくなる雨。桟橋で足が根を張ったように止まった。舟に辿り着けない。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p25_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が渡し場で待っている。しとしとした雨音と川の揺れが合わさって、意識が遠のく。気づけば舟の上で眠っていた。',
    damage: 1,
    quill: 4
  },
];
