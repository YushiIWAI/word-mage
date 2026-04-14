// Auto-generated from node-p12-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeP12Outcomes: Outcome[] = [
  {
    id: 'p12_small_kitten',
    conditions: { s1: 'mod_small', s2: 'subj_kitten' },
    resultText: '小さな子猫が庭を見つめている。石畳の割れ目に生えた花に、鈴のような目を向けている。こちらには気づいていない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_gentle_kitten',
    conditions: { s1: 'mod_gentle', s2: 'subj_kitten' },
    resultText: '優しい子猫が庭を見つめている。足元に擦り寄ってから、庭の奥を振り返る。何か見せたいものがあるらしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_fire_kitten',
    conditions: { s1: 'mod_fire', s2: 'subj_kitten' },
    resultText: '燃え盛る子猫が庭を見つめている。炎をまとった猫が擦り寄ってきた。服の裾が焦げ、慌てて叩き消す。猫は悪気なく燃えている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_hard_kitten',
    conditions: { s1: 'mod_hard', s2: 'subj_kitten' },
    resultText: '堅い子猫が庭を見つめている。陶器の招き猫が石畳の端に鎮座している。目だけがゆっくりと庭を追う。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_kitten',
    conditions: { s1: 'mod_sharp', s2: 'subj_kitten' },
    resultText: '鋭い子猫が庭を見つめている。硝子の破片のような爪を石畳に立てて、獲物を待つ目をしている。手を伸ばした指先に三本の赤い線が走った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_broken_kitten',
    conditions: { s1: 'mod_broken', s2: 'subj_kitten' },
    resultText: '壊れた子猫が庭を見つめている。ぬいぐるみだ。雑草に半分埋もれて、硝子の目だけが庭を映している。綿が石畳に散っている。',
    damage: 0,
    quill: 4,
    rewardItems: [{ id: 'item_p12_broken_kitten', name: '庭のぬいぐるみ', description: '雑草の匂いが染みた綿の猫。片目が取れている', sellPrice: 5 }]
  },
  {
    id: 'p12_mighty_kitten',
    conditions: { s1: 'mod_mighty', s2: 'subj_kitten' },
    resultText: '屈強な子猫が庭を見つめている。子猫サイズの虎だ。石畳を低く唸りながら睨んでいる。この庭の番人を自称しているらしい。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p12_mighty_kitten', name: '庭番の髭', description: '虎のような子猫の髭。庭の匂いがする', sellPrice: 7 }]
  },
  {
    id: 'p12_frozen_kitten',
    conditions: { s1: 'mod_frozen', s2: 'subj_kitten' },
    resultText: '凍てついた子猫が庭を見つめている。氷の彫刻が石畳の隅に置かれている。中でまだ瞬きをしている。庭の草に霜が降りた。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p12_frozen_kitten', name: '霜の結晶', description: '庭草についた霜。猫の形に見える', sellPrice: 7 }]
  },
  {
    id: 'p12_clear_kitten',
    conditions: { s1: 'mod_clear', s2: 'subj_kitten' },
    resultText: '透き通った子猫が庭を見つめている。硝子の猫。心臓が透けて見える。石畳の模様が猫の体を通って揺らいでいる。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_kitten', name: '硝子猫の涙', description: '透明な一滴。石畳の上で虹色に光る', sellPrice: 12 }]
  },
  {
    id: 'p12_cursed_kitten',
    conditions: { s1: 'mod_cursed', s2: 'subj_kitten' },
    resultText: '呪われた子猫が庭を見つめている。追い払おうとしても、気づくと足元にいる。庭から出ても、庭に戻される。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_kitten',
    conditions: { s1: 'mod_sleepy', s2: 'subj_kitten' },
    resultText: '眠い子猫が庭を見つめている。見つめているというより、半目で石畳の上に溶けている。あくびが伝染した。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_snake',
    conditions: { s1: 'mod_small', s2: 'subj_snake' },
    resultText: '小さな蛇が庭を見つめている。石畳の隙間から舌をちろちろ出している。指ほどの細さ。庭の温度を測っているようだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_snake',
    conditions: { s1: 'mod_gentle', s2: 'subj_snake' },
    resultText: '優しい蛇が庭を見つめている。庭の害虫を静かに飲み込んでいる。こちらに巻きつくと温かい。庭の守り手らしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_gentle_snake', name: '蛇の抜け殻', description: '庭の隅に残された薄い皮。光に透ける', sellPrice: 8 }]
  },
  {
    id: 'p12_fire_snake',
    conditions: { s1: 'mod_fire', s2: 'subj_snake' },
    resultText: '燃え盛る蛇が庭を見つめている。炎の軌跡を描きながら石畳を這い寄る。足に巻きつかれ、火傷が肌を焼いた。振りほどいても痕が消えない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_hard_snake',
    conditions: { s1: 'mod_hard', s2: 'subj_snake' },
    resultText: '堅い蛇が庭を見つめている。鉄の鱗がこすれて石畳に火花が散る。庭を一周する溝が刻まれている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_snake',
    conditions: { s1: 'mod_sharp', s2: 'subj_snake' },
    resultText: '鋭い蛇が庭を見つめている。猛毒の牙が石畳に光る。一歩踏み出した瞬間、足首に激痛が走った。毒が脈を辿って熱く昇る。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_broken_snake',
    conditions: { s1: 'mod_broken', s2: 'subj_snake' },
    resultText: '壊れた蛇が庭を見つめている。脱皮の途中で力尽きている。古い皮が石畳にへばりついている。庭の片隅で動けずにいる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_mighty_snake',
    conditions: { s1: 'mod_mighty', s2: 'subj_snake' },
    resultText: '屈強な蛇が庭を見つめている。胴回りが人の腰ほどある。とぐろが解かれ、締め上げられた。肋骨が軋み、息ができない。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_frozen_snake',
    conditions: { s1: 'mod_frozen', s2: 'subj_snake' },
    resultText: '凍てついた蛇が庭を見つめている。氷の中で螺旋を描いたまま固まっている。鱗に霜が降りて、石畳まで白い。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_clear_snake',
    conditions: { s1: 'mod_clear', s2: 'subj_snake' },
    resultText: '透き通った蛇が庭を見つめている。骨格が美しい。体内に石畳の模様が透けて映り、どこが蛇でどこが庭かわからない。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_snake', name: '蛇の透き通った鱗', description: '一枚だけ落ちていた。レンズのように景色を歪める', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_snake',
    conditions: { s1: 'mod_cursed', s2: 'subj_snake' },
    resultText: '呪われた蛇が庭を見つめている。脱皮するたびに大きくなる蛇。逃げ場が狭まり、鱗が体に押しつけられる。呪いの鱗に触れた肌が黒く痺れ、腕の感覚が消えた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_sleepy_snake',
    conditions: { s1: 'mod_sleepy', s2: 'subj_snake' },
    resultText: '眠い蛇が庭を見つめている。とぐろを巻いて日向ぼっこをしているだけだ。踏まなければ無害。石畳が温かい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_dragon',
    conditions: { s1: 'mod_small', s2: 'subj_dragon' },
    resultText: '小さな竜が庭を見つめている。手のひらサイズ。石畳の上に座って、雑草に小さな火を吐いている。庭の手入れのつもりらしい。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_small_dragon', name: '竜の焼き草', description: '小さな竜が焼いた雑草。ほんのり温かい', sellPrice: 8 }]
  },
  {
    id: 'p12_gentle_dragon',
    conditions: { s1: 'mod_gentle', s2: 'subj_dragon' },
    resultText: '優しい竜が庭を見つめている。穏やかな老竜だ。翼を畳んで石畳に座り、荒れた庭を静かに眺めている。哀しそうな目をしている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p12_fire_dragon',
    conditions: { s1: 'mod_fire', s2: 'subj_dragon' },
    resultText: '燃え盛る竜が庭を見つめている。全身が業火だ。石畳が赤く焼けて割れていく。雑草など一瞬で灰になった。庭ごと焼き尽くされる。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p12_hard_dragon',
    conditions: { s1: 'mod_hard', s2: 'subj_dragon' },
    resultText: '堅い竜が庭を見つめている。城壁のような鱗。石畳の上に伏せると、竜自身が庭の一部に見える。動く気配がない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_dragon',
    conditions: { s1: 'mod_sharp', s2: 'subj_dragon' },
    resultText: '鋭い竜が庭を見つめている。金色の目が庭の隅々まで射抜く。爪の一振りが風を裂き、頬をかすめた。血が一筋。品定めの結果らしい。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_broken_dragon',
    conditions: { s1: 'mod_broken', s2: 'subj_dragon' },
    resultText: '壊れた竜が庭を見つめている。翼は折れ、鱗は剥がれている。荒れた庭と荒れた竜。どちらも手入れを忘れられたものだ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_broken_dragon', name: '竜の剥がれ鱗', description: '庭の石畳に落ちていた。苔がついている', sellPrice: 10 }]
  },
  {
    id: 'p12_mighty_dragon',
    conditions: { s1: 'mod_mighty', s2: 'subj_dragon' },
    resultText: '屈強な竜が庭を見つめている。山のような体。翼の風圧で体が吹き飛ばされ、石畳に叩きつけられた。竜はこちらに興味がない。それが救いだ。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p12_frozen_dragon',
    conditions: { s1: 'mod_frozen', s2: 'subj_dragon' },
    resultText: '凍てついた竜が庭を見つめている。白い竜の吐息が吹雪になる。庭を横切ろうとした足が氷に取られ、指先の感覚が消えた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_clear_dragon',
    conditions: { s1: 'mod_clear', s2: 'subj_dragon' },
    resultText: '透き通った竜が庭を見つめている。水晶の竜。体を通して庭の景色が歪んで見える。かつての美しい庭が、竜の体に映っている。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_p12_clear_dragon', name: '水晶竜の涙', description: '庭の記憶が閉じ込められた透明な滴', sellPrice: 15 }]
  },
  {
    id: 'p12_cursed_dragon',
    conditions: { s1: 'mod_cursed', s2: 'subj_dragon' },
    resultText: '呪われた竜が庭を見つめている。目に理性がない。尾の一振りが石畳を砕き、破片が体を打つ。逃げ場がない。かつて守護竜だった名残が、かえって恐ろしい。',
    damage: 5,
    quill: 3
  },
  {
    id: 'p12_sleepy_dragon',
    conditions: { s1: 'mod_sleepy', s2: 'subj_dragon' },
    resultText: '眠い竜が庭を見つめている。石畳の上で居眠りしている。いびきで雑草が揺れる。見つめているというより、薄目を開けただけだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_butterfly',
    conditions: { s1: 'mod_small', s2: 'subj_butterfly' },
    resultText: '小さな蝶が庭を見つめている。花びらと見間違うほど小さい。石畳の割れ目に咲いた花の上で、羽を閉じている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_gentle_butterfly',
    conditions: { s1: 'mod_gentle', s2: 'subj_butterfly' },
    resultText: '優しい蝶が庭を見つめている。指先に止まって離れない。羽の模様が笑っているように見える。荒れた庭にも花は咲く。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_gentle_butterfly', name: '蝶の鱗粉', description: '指先に残った金色の粉。庭の花の匂いがする', sellPrice: 7 }]
  },
  {
    id: 'p12_fire_butterfly',
    conditions: { s1: 'mod_fire', s2: 'subj_butterfly' },
    resultText: '燃え盛る蝶が庭を見つめている。羽が炎でできている。肩に止まり、服に火が移った。払い落としたが、火傷の痕がじくじくと痛む。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_hard_butterfly',
    conditions: { s1: 'mod_hard', s2: 'subj_butterfly' },
    resultText: '堅い蝶が庭を見つめている。金属の羽が石畳に触れて、澄んだ音を立てる。風が吹いても微動だにしない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_butterfly',
    conditions: { s1: 'mod_sharp', s2: 'subj_butterfly' },
    resultText: '鋭い蝶が庭を見つめている。すれ違いざまに頬が切れた。羽の縁が刃だ。石畳の上に細い血の線が一本引かれた。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_broken_butterfly',
    conditions: { s1: 'mod_broken', s2: 'subj_butterfly' },
    resultText: '壊れた蝶が庭を見つめている。片羽がちぎれて、石畳の上で螺旋を描いている。飛べないまま、庭から目を離さない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_mighty_butterfly',
    conditions: { s1: 'mod_mighty', s2: 'subj_butterfly' },
    resultText: '屈強な蝶が庭を見つめている。羽ばたきで石畳の砂が舞う。蝶のくせに風を起こす。庭の落ち葉が一掃された。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_frozen_butterfly',
    conditions: { s1: 'mod_frozen', s2: 'subj_butterfly' },
    resultText: '凍てついた蝶が庭を見つめている。霜の結晶が羽の形をしている。手に止まった瞬間、指先から腕まで霜が這い上がった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_clear_butterfly',
    conditions: { s1: 'mod_clear', s2: 'subj_butterfly' },
    resultText: '透き通った蝶が庭を見つめている。羽が透明で、止まると景色に溶ける。石畳の模様だけが蝶の形に揺れている。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_butterfly', name: '透明な羽の欠片', description: '蝶が残した鱗粉。光に翳すと庭が見える', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_butterfly',
    conditions: { s1: 'mod_cursed', s2: 'subj_butterfly' },
    resultText: '呪われた蝶が庭を見つめている。追いかけると石畳の配置が変わる。気づくと庭の入口がわからなくなっている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_butterfly',
    conditions: { s1: 'mod_sleepy', s2: 'subj_butterfly' },
    resultText: '眠い蝶が庭を見つめている。石畳に咲いた花の上で羽を閉じたまま動かない。起こしても隣の花に移るだけだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_wind',
    conditions: { s1: 'mod_small', s2: 'subj_wind' },
    resultText: '小さな風が庭を見つめている。頬を撫でるそよ風。石畳の隙間の草を揺らして、通り過ぎた。それだけのことだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_wind',
    conditions: { s1: 'mod_gentle', s2: 'subj_wind' },
    resultText: '優しい風が庭を見つめている。花の匂いを運ぶ温かい風。荒れた庭にも、どこかから種を運んでくる。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_gentle_wind', name: '風が運んだ種', description: '庭に根づくかもしれない。小さくて丸い', sellPrice: 6 }]
  },
  {
    id: 'p12_fire_wind',
    conditions: { s1: 'mod_fire', s2: 'subj_wind' },
    resultText: '燃え盛る風が庭を見つめている。熱風が石畳を焼く。吸い込んだ空気が喉を灼き、肌の水分が奪われて唇が裂けた。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p12_hard_wind',
    conditions: { s1: 'mod_hard', s2: 'subj_wind' },
    resultText: '堅い風が庭を見つめている。同じ方向にしか吹かない風。何百年も同じ砂を同じ石畳に叩きつけている。石が削れている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_wind',
    conditions: { s1: 'mod_sharp', s2: 'subj_wind' },
    resultText: '鋭い風が庭を見つめている。真空の刃。石畳の角が削れ、雑草が根元から切り落とされた。頬にも細い切り傷。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_broken_wind',
    conditions: { s1: 'mod_broken', s2: 'subj_wind' },
    resultText: '壊れた風が庭を見つめている。方向が定まらない乱気流。石畳の落ち葉が円を描いては散り、また集まる。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_mighty_wind',
    conditions: { s1: 'mod_mighty', s2: 'subj_wind' },
    resultText: '屈強な風が庭を見つめている。すべてを押し流す突風に体が浮き、石畳に叩きつけられた。立ち上がれない。風が体を地面に縫い止めている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p12_frozen_wind',
    conditions: { s1: 'mod_frozen', s2: 'subj_wind' },
    resultText: '凍てついた風が庭を見つめている。吹雪を伴う凍風。石畳に氷が張り、雑草が白い彫刻に変わった。息が凍る。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_clear_wind',
    conditions: { s1: 'mod_clear', s2: 'subj_wind' },
    resultText: '透き通った風が庭を見つめている。空気が澄み渡る。荒れた庭の奥まで見通せる。かつての石畳の美しい配列が見えた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p12_cursed_wind',
    conditions: { s1: 'mod_cursed', s2: 'subj_wind' },
    resultText: '呪われた風が庭を見つめている。吹かれると帰り道を忘れる。庭の出口がどこだったか、もうわからない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_sleepy_wind',
    conditions: { s1: 'mod_sleepy', s2: 'subj_wind' },
    resultText: '眠い風が庭を見つめている。生温い春風。石畳の上で意識がぼんやりする。気づくと庭の隅で横になっていた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_flame',
    conditions: { s1: 'mod_small', s2: 'subj_flame' },
    resultText: '小さな炎が庭を見つめている。蝋燭ほどの火が石畳の上で揺れている。風が吹けば消える。それでも庭を照らしている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_gentle_flame',
    conditions: { s1: 'mod_gentle', s2: 'subj_flame' },
    resultText: '優しい炎が庭を見つめている。暖炉のような火が石畳の中央に灯っている。揺れる光が、荒れた庭を柔らかく包む。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_fire_flame',
    conditions: { s1: 'mod_fire', s2: 'subj_flame' },
    resultText: '燃え盛る炎が庭を見つめている。制御不能の大火。石畳が焼けて割れ、庭が炉のようだ。雑草も石も等しく燃える。',
    damage: 5,
    quill: 1
  },
  {
    id: 'p12_hard_flame',
    conditions: { s1: 'mod_hard', s2: 'subj_flame' },
    resultText: '堅い炎が庭を見つめている。水をかけても消えない。石畳の一角で何年も燃え続けているらしい。雑草が近づかない。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_p12_hard_flame', name: '不滅の灯', description: '石畳の欠片にくっついた小さな炎。消えない', sellPrice: 12 }]
  },
  {
    id: 'p12_sharp_flame',
    conditions: { s1: 'mod_sharp', s2: 'subj_flame' },
    resultText: '鋭い炎が庭を見つめている。触れたものの形を正確に切り取る炎。袖口を舐められ、布が一瞬で人の腕の形に焼け落ちた。肌に精密な火傷が残る。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_broken_flame',
    conditions: { s1: 'mod_broken', s2: 'subj_flame' },
    resultText: '壊れた炎が庭を見つめている。緑と紫に明滅する炎。温かくない。石畳を照らす光がおかしな色をしている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_mighty_flame',
    conditions: { s1: 'mod_mighty', s2: 'subj_flame' },
    resultText: '屈強な炎が庭を見つめている。火柱が天を衝く。熱気の壁に阻まれ、肌が水膨れになる。息を吸うと肺が焼け、意識が遠のいた。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p12_frozen_flame',
    conditions: { s1: 'mod_frozen', s2: 'subj_flame' },
    resultText: '凍てついた炎が庭を見つめている。燃えているのに冷たい。青白い炎が石畳に霜を広げ、通り抜けた足が膝まで凍傷に覆われた。歩くたびに皮が剥がれる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_clear_flame',
    conditions: { s1: 'mod_clear', s2: 'subj_flame' },
    resultText: '透き通った炎が庭を見つめている。ほぼ見えない火。空気の揺らぎだけで存在がわかる。石畳の汚れだけが焼けて消えた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_flame', name: '浄火の灰', description: '透明な炎が庭を清めた痕。白くて軽い', sellPrice: 9 }]
  },
  {
    id: 'p12_cursed_flame',
    conditions: { s1: 'mod_cursed', s2: 'subj_flame' },
    resultText: '呪われた炎が庭を見つめている。燃やしたものの形を覚える火。炎の中にかつての庭が見え、手を伸ばした。指先が焼け、記憶の代価を払わされた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_flame',
    conditions: { s1: 'mod_sleepy', s2: 'subj_flame' },
    resultText: '眠い炎が庭を見つめている。今にも消えそうな熾火。石畳の隅で赤く明滅している。見つめているうちに、こちらも眠くなる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_ice',
    conditions: { s1: 'mod_small', s2: 'subj_ice' },
    resultText: '小さな氷が庭を見つめている。掌に収まる氷の欠片が石畳に転がっている。溶ける前に庭の景色を映して消えた。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_ice',
    conditions: { s1: 'mod_gentle', s2: 'subj_ice' },
    resultText: '優しい氷が庭を見つめている。冷たいが痛くない。石畳の熱を引いて、庭に涼しさを運んでいる。花が長持ちしそうだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_fire_ice',
    conditions: { s1: 'mod_fire', s2: 'subj_ice' },
    resultText: '燃え盛る氷が庭を見つめている。炎を放つ氷。近づいた手が凍傷と火傷を同時に負った。どちらの痛みかわからない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'p12_hard_ice',
    conditions: { s1: 'mod_hard', s2: 'subj_ice' },
    resultText: '堅い氷が庭を見つめている。万年氷だ。石畳を覆って鋼のように硬い。叩いた拳の骨が軋み、冷気で手が動かなくなった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_sharp_ice',
    conditions: { s1: 'mod_sharp', s2: 'subj_ice' },
    resultText: '鋭い氷が庭を見つめている。氷柱が石畳の隙間から突き出している。庭を歩けば足を裂かれる。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_broken_ice',
    conditions: { s1: 'mod_broken', s2: 'subj_ice' },
    resultText: '壊れた氷が庭を見つめている。ひび割れた氷の破片が石畳に散らばっている。踏むたびに砕けて、下から暗い水が滲む。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_mighty_ice',
    conditions: { s1: 'mod_mighty', s2: 'subj_ice' },
    resultText: '屈強な氷が庭を見つめている。山のような氷塊が庭を押し潰している。冷気だけで体温が奪われ、足が痺れて膝をつく。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p12_frozen_ice',
    conditions: { s1: 'mod_frozen', s2: 'subj_ice' },
    resultText: '凍てついた氷が庭を見つめている。氷の中の氷。近づくだけで手が動かなくなる。石畳の上の空気が結晶化して落ちている。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_clear_ice',
    conditions: { s1: 'mod_clear', s2: 'subj_ice' },
    resultText: '透き通った氷が庭を見つめている。完全に透明な氷。あることに気づかず手を突いた。石畳の模様がレンズのように歪んで見える。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p12_clear_ice', name: '透明な氷の欠片', description: '庭の景色を閉じ込めた氷。なかなか溶けない', sellPrice: 8 }]
  },
  {
    id: 'p12_cursed_ice',
    conditions: { s1: 'mod_cursed', s2: 'subj_ice' },
    resultText: '呪われた氷が庭を見つめている。溶けない氷が庭に永遠の冬を広げている。足を踏み入れた途端、靴の中まで凍りつき、一歩も動けなくなった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_sleepy_ice',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ice' },
    resultText: '眠い氷が庭を見つめている。ゆっくり溶けていく氷。しずくが石畳を叩く音が子守唄のようだ。庭が少しずつ潤っていく。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_shadow',
    conditions: { s1: 'mod_small', s2: 'subj_shadow' },
    resultText: '小さな影が庭を見つめている。石畳に黒い染みが一つ。何の影かわからない。日が傾いても動かない。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_shadow',
    conditions: { s1: 'mod_gentle', s2: 'subj_shadow' },
    resultText: '優しい影が庭を見つめている。木陰のような涼しさ。石畳の熱を和らげて、庭に安らぎを与えている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_fire_shadow',
    conditions: { s1: 'mod_fire', s2: 'subj_shadow' },
    resultText: '燃え盛る影が庭を見つめている。影自体が黒い炎で燃えている。逃げ遅れた足首を影が舐め、皮膚が黒く膨れ上がった。踏むたびに水疱が潰れる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_hard_shadow',
    conditions: { s1: 'mod_hard', s2: 'subj_shadow' },
    resultText: '堅い影が庭を見つめている。石畳に貼りついて固まった影。剥がそうとしても剥がれない。庭の一部になっている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_shadow',
    conditions: { s1: 'mod_sharp', s2: 'subj_shadow' },
    resultText: '鋭い影が庭を見つめている。輪郭がくっきりしすぎている。影の縁を踏んだ足の裏に、刃物のような痛みが走った。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_broken_shadow',
    conditions: { s1: 'mod_broken', s2: 'subj_shadow' },
    resultText: '壊れた影が庭を見つめている。立体的にめくれ上がっている。石畳から浮いて、平面に戻れずにもがいている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_mighty_shadow',
    conditions: { s1: 'mod_mighty', s2: 'subj_shadow' },
    resultText: '屈強な影が庭を見つめている。庭全体を覆う巨大な影。影の中に踏み入れると体が重くなり、膝が沈む。影の圧力で息が浅くなる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_frozen_shadow',
    conditions: { s1: 'mod_frozen', s2: 'subj_shadow' },
    resultText: '凍てついた影が庭を見つめている。石畳に張りついて動けない。本体はとうに去ったのに、影だけが庭に残されている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_clear_shadow',
    conditions: { s1: 'mod_clear', s2: 'subj_shadow' },
    resultText: '透き通った影が庭を見つめている。半透明の影。石畳の模様が影を通して見える。存在が薄れかけている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_cursed_shadow',
    conditions: { s1: 'mod_cursed', s2: 'subj_shadow' },
    resultText: '呪われた影が庭を見つめている。自分の影が足元から剥がれ、庭の影に飲まれた。体の半分が暗く冷たくなり、感覚が薄れていく。',
    damage: 3,
    quill: 5,
    rewardItems: [{ id: 'item_p12_cursed_shadow', name: '影の欠片', description: '石畳から剥がれた黒い破片。手に貼りつく', sellPrice: 7 }]
  },
  {
    id: 'p12_sleepy_shadow',
    conditions: { s1: 'mod_sleepy', s2: 'subj_shadow' },
    resultText: '眠い影が庭を見つめている。正午の影。石畳の真下に小さく縮んで動かない。夕方までここにいるつもりらしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_song',
    conditions: { s1: 'mod_small', s2: 'subj_song' },
    resultText: '小さな歌が庭を見つめている。鼻歌が石畳の隙間から聞こえる。誰が歌っているかわからない。旋律だけが庭に漂う。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_gentle_song',
    conditions: { s1: 'mod_gentle', s2: 'subj_song' },
    resultText: '優しい歌が庭を見つめている。子守唄だ。石畳の上に座って聴いていると、庭の荒れが気にならなくなる。',
    damage: -1,
    quill: 6
  },
  {
    id: 'p12_fire_song',
    conditions: { s1: 'mod_fire', s2: 'subj_song' },
    resultText: '燃え盛る歌が庭を見つめている。戦の歌。聴くと血が沸く。石畳を踏む足取りが力強くなる。だが庭に敵はいない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_hard_song',
    conditions: { s1: 'mod_hard', s2: 'subj_song' },
    resultText: '堅い歌が庭を見つめている。一度始まると止まらない歌。石畳に刻まれた旋律が、庭に響き続けている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_song',
    conditions: { s1: 'mod_sharp', s2: 'subj_song' },
    resultText: '鋭い歌が庭を見つめている。金切り声のような高音。石畳にひびが走った。耳を塞いでも骨に響く。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_broken_song',
    conditions: { s1: 'mod_broken', s2: 'subj_song' },
    resultText: '壊れた歌が庭を見つめている。途中で止まる旋律。続きを知る者はいない。石畳の間で、同じ節が繰り返されている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_mighty_song',
    conditions: { s1: 'mod_mighty', s2: 'subj_song' },
    resultText: '屈強な歌が庭を見つめている。大地を震わせる合唱。振動が足の裏から内臓に響き、立っていられない。歯がガチガチ鳴る。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_frozen_song',
    conditions: { s1: 'mod_frozen', s2: 'subj_song' },
    resultText: '凍てついた歌が庭を見つめている。聴いた者の足が止まる。石畳の上で動けなくなった。歌が終わるまで待つしかない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_clear_song',
    conditions: { s1: 'mod_clear', s2: 'subj_song' },
    resultText: '透き通った歌が庭を見つめている。純粋な旋律が庭に響く。雑念が消え、荒れた庭の奥に、かつての花壇の跡が見えた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_song', name: '庭の旋律', description: '耳に残る澄んだ音。庭の記憶を呼び覚ます', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_song',
    conditions: { s1: 'mod_cursed', s2: 'subj_song' },
    resultText: '呪われた歌が庭を見つめている。一度聴くと頭から離れない。石畳を歩きながら、気づくと口ずさんでいる。止められない。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_song',
    conditions: { s1: 'mod_sleepy', s2: 'subj_song' },
    resultText: '眠い歌が庭を見つめている。子守唄。石畳の上で膝を抱えると、意識が遠くなる。庭の草が布団のように柔らかく見えた。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_silence',
    conditions: { s1: 'mod_small', s2: 'subj_silence' },
    resultText: '小さな沈黙が庭を見つめている。ふと音が途切れた。虫も風も止まり、石畳だけが残った。一瞬の静寂。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_silence',
    conditions: { s1: 'mod_gentle', s2: 'subj_silence' },
    resultText: '優しい沈黙が庭を見つめている。言葉がなくても安らぐ静けさ。荒れた庭が、この沈黙の中では美しく見える。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_gentle_silence', name: '庭の静寂', description: '持っている間だけ心が凪ぐ。石の匂いがする', sellPrice: 7 }]
  },
  {
    id: 'p12_fire_silence',
    conditions: { s1: 'mod_fire', s2: 'subj_silence' },
    resultText: '燃え盛る沈黙が庭を見つめている。空気が焦げている。叫ぼうとしても声が出ず、喉が焼けるように痛む。熱い沈黙が体を蝕む。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_hard_silence',
    conditions: { s1: 'mod_hard', s2: 'subj_silence' },
    resultText: '堅い沈黙が庭を見つめている。何を叫んでも吸い込まれて消える。音のない圧迫に耳鳴りが始まり、頭が割れそうだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_sharp_silence',
    conditions: { s1: 'mod_sharp', s2: 'subj_silence' },
    resultText: '鋭い沈黙が庭を見つめている。言葉より痛い無言。石畳の上に立つと、自分の息だけが庭に刺さる。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_broken_silence',
    conditions: { s1: 'mod_broken', s2: 'subj_silence' },
    resultText: '壊れた沈黙が庭を見つめている。静寂のはずなのに、石畳の下からノイズが混じる。何かが漏れ出している。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_mighty_silence',
    conditions: { s1: 'mod_mighty', s2: 'subj_silence' },
    resultText: '屈強な沈黙が庭を見つめている。圧倒的な無音。石畳も雑草も、庭のすべてが沈黙に押し潰されている。声が出ない。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_frozen_silence',
    conditions: { s1: 'mod_frozen', s2: 'subj_silence' },
    resultText: '凍てついた沈黙が庭を見つめている。息も凍る静けさ。心臓の音が遠くなり、指先から感覚が消えていく。凍った沈黙が体の熱を吸っている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_clear_silence',
    conditions: { s1: 'mod_clear', s2: 'subj_silence' },
    resultText: '透き通った沈黙が庭を見つめている。泉のように澄んだ静寂。石畳の隅まで見通せる。庭の本来の姿が浮かび上がる。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_silence', name: '静寂の欠片', description: '持っている間だけ、雑音が消える。庭の匂いがする', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_silence',
    conditions: { s1: 'mod_cursed', s2: 'subj_silence' },
    resultText: '呪われた沈黙が庭を見つめている。声が出ない。口は動くが音にならない。石畳の庭が、声を奪う場所になっている。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_sleepy_silence',
    conditions: { s1: 'mod_sleepy', s2: 'subj_silence' },
    resultText: '眠い沈黙が庭を見つめている。午後の図書館のような静けさ。石畳の温もりが心地よく、まぶたが重くなる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_knight',
    conditions: { s1: 'mod_small', s2: 'subj_knight' },
    resultText: '小さな騎士が庭を見つめている。子供の騎士だ。大きすぎる兜で前が見えず、石畳に躓いている。それでも庭を守る気らしい。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_small_knight', name: '小さな兜飾り', description: '騎士が落とした羽飾り。手のひらに収まる', sellPrice: 7 }]
  },
  {
    id: 'p12_gentle_knight',
    conditions: { s1: 'mod_gentle', s2: 'subj_knight' },
    resultText: '優しい騎士が庭を見つめている。剣を鞘に収め、石畳の隙間から草を抜いている。庭の手入れをしてくれているのだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_gentle_knight', name: '騎士の手袋', description: '草の汁と土がついている。丁寧に使い込まれた手袋', sellPrice: 8 }]
  },
  {
    id: 'p12_fire_knight',
    conditions: { s1: 'mod_fire', s2: 'subj_knight' },
    resultText: '燃え盛る騎士が庭を見つめている。鎧ごと炎に包まれ、巡回する騎士とすれ違った。熱波で髪が縮れ、肌がひりつく。離れても火傷の痛みが残る。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_hard_knight',
    conditions: { s1: 'mod_hard', s2: 'subj_knight' },
    resultText: '堅い騎士が庭を見つめている。分厚い鎧。石畳の上で微動だにしない。表情が見えない。庭の門番のようだ。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_sharp_knight',
    conditions: { s1: 'mod_sharp', s2: 'subj_knight' },
    resultText: '鋭い騎士が庭を見つめている。構えに無駄がない。一歩踏み出した瞬間、剣の切っ先が喉元に突きつけられた。下がる間に切っ先が顎を裂き、血が首筋を伝う。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_broken_knight',
    conditions: { s1: 'mod_broken', s2: 'subj_knight' },
    resultText: '壊れた騎士が庭を見つめている。鎧はへこみ、剣は折れている。それでも石畳の上に立ち、荒れた庭を守っている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_broken_knight', name: '折れた剣の柄', description: '騎士が握り続けた柄。手の形に磨り減っている', sellPrice: 8 }]
  },
  {
    id: 'p12_mighty_knight',
    conditions: { s1: 'mod_mighty', s2: 'subj_knight' },
    resultText: '屈強な騎士が庭を見つめている。巨体の重装騎士。盾で押し返され、石畳に倒れた。立ち上がる前に鉄の足が地面を揺らす。通る気はないようだ。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_frozen_knight',
    conditions: { s1: 'mod_frozen', s2: 'subj_knight' },
    resultText: '凍てついた騎士が庭を見つめている。剣を振り上げた姿勢のまま氷に閉じ込められている。石畳に霜の足跡が残っている。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_clear_knight',
    conditions: { s1: 'mod_clear', s2: 'subj_knight' },
    resultText: '透き通った騎士が庭を見つめている。影の薄い騎士。石畳の前に立っているのに気づかなかった。庭を静かに見守っていたらしい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_cursed_knight',
    conditions: { s1: 'mod_cursed', s2: 'subj_knight' },
    resultText: '呪われた騎士が庭を見つめている。兜の奥の赤い目と視線が合った瞬間、呪いが伝染したように体が重くなる。足が石畳に根を張る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_knight',
    conditions: { s1: 'mod_sleepy', s2: 'subj_knight' },
    resultText: '眠い騎士が庭を見つめている。見張り番のはずが、石畳にもたれて舟を漕いでいる。槍が傾いて庭の草に沈んだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_witch',
    conditions: { s1: 'mod_small', s2: 'subj_witch' },
    resultText: '小さな魔女が庭を見つめている。少女の魔女だ。大きな帽子で顔が隠れている。石畳の隙間の花を集めている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_gentle_witch',
    conditions: { s1: 'mod_gentle', s2: 'subj_witch' },
    resultText: '優しい魔女が庭を見つめている。薬草を煎じている。荒れた庭に自生した薬草を、怖い顔で丁寧に摘んでいる。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_gentle_witch', name: '魔女の薬草束', description: '庭で摘んだ薬草。苦いが効く', sellPrice: 9 }]
  },
  {
    id: 'p12_fire_witch',
    conditions: { s1: 'mod_fire', s2: 'subj_witch' },
    resultText: '燃え盛る魔女が庭を見つめている。炎の魔法で全身を包んでいる。石畳が焼け、庭が赤く染まった。怒りの形相。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_hard_witch',
    conditions: { s1: 'mod_hard', s2: 'subj_witch' },
    resultText: '堅い魔女が庭を見つめている。石のように頑固な老魔女。石畳の上に立ちはだかって、一言も発さない。取引を持ちかけるまで動かないだろう。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_sharp_witch',
    conditions: { s1: 'mod_sharp', s2: 'subj_witch' },
    resultText: '鋭い魔女が庭を見つめている。鉤鼻に鋭い目。視線が触れるだけで思考が読まれ、頭の奥がずきんと痛む。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_broken_witch',
    conditions: { s1: 'mod_broken', s2: 'subj_witch' },
    resultText: '壊れた魔女が庭を見つめている。魔力が暴走している。漏れた呪文の破片が肌を焼き、石畳ごと体が歪む感覚がする。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_mighty_witch',
    conditions: { s1: 'mod_mighty', s2: 'subj_witch' },
    resultText: '屈強な魔女が庭を見つめている。杖ではなく拳で雑草を引き抜いている。腕が太い。庭の手入れが荒っぽい。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_frozen_witch',
    conditions: { s1: 'mod_frozen', s2: 'subj_witch' },
    resultText: '凍てついた魔女が庭を見つめている。氷の魔法が漏れている。漏れた冷気を浴び、足元から凍りつく。指先の感覚がなくなった。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_clear_witch',
    conditions: { s1: 'mod_clear', s2: 'subj_witch' },
    resultText: '透き通った魔女が庭を見つめている。老いて存在が希薄だ。向こうの石畳が透けて見える。庭の記憶を辿っているようだ。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_clear_witch', name: '庭の記憶', description: '魔女が残した薄い光。中にかつての庭が見える', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_witch',
    conditions: { s1: 'mod_cursed', s2: 'subj_witch' },
    resultText: '呪われた魔女が庭を見つめている。自分の呪いに蝕まれた魔女。近づいた途端、同じ蔦が足首に絡みつき、引き剥がした皮膚ごと血が滲んだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_sleepy_witch',
    conditions: { s1: 'mod_sleepy', s2: 'subj_witch' },
    resultText: '眠い魔女が庭を見つめている。石畳の上でうとうとしている。大釜が庭の隅でぐつぐつ煮えている。何の薬かは聞かない方がいい。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_king',
    conditions: { s1: 'mod_small', s2: 'subj_king' },
    resultText: '小さな王が庭を見つめている。子供が王冠をかぶっている。石畳の上に座り込んで、雑草の国を統べている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_small_king', name: '雑草の王冠', description: '子供が編んだ草冠。少し歪んでいる', sellPrice: 5 }]
  },
  {
    id: 'p12_gentle_king',
    conditions: { s1: 'mod_gentle', s2: 'subj_king' },
    resultText: '優しい王が庭を見つめている。衣は質素で手が荒れている。荒れた庭を見て、自ら石畳の草を抜いている。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p12_fire_king',
    conditions: { s1: 'mod_fire', s2: 'subj_king' },
    resultText: '燃え盛る王が庭を見つめている。炎の冠を戴く王。石畳が赤く焼けている。庭もろとも燃え尽きようとしている。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p12_hard_king',
    conditions: { s1: 'mod_hard', s2: 'subj_king' },
    resultText: '堅い王が庭を見つめている。微動だにしない。石畳の上に石像のように立ち、法を一言で下す表情をしている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_sharp_king',
    conditions: { s1: 'mod_sharp', s2: 'subj_king' },
    resultText: '鋭い王が庭を見つめている。鷹のような目で石畳の隅々まで見据えている。庭の荒れ具合から、何が起きたか読み取ったようだ。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_broken_king',
    conditions: { s1: 'mod_broken', s2: 'subj_king' },
    resultText: '壊れた王が庭を見つめている。王冠が歪み、目は虚ろ。荒れた庭に荒れた王。どちらが先に壊れたのだろう。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_p12_broken_king', name: '歪んだ王冠の欠片', description: '金属片。王の名が刻まれているが読めない', sellPrice: 9 }]
  },
  {
    id: 'p12_mighty_king',
    conditions: { s1: 'mod_mighty', s2: 'subj_king' },
    resultText: '屈強な王が庭を見つめている。戦士王。振り向きざまの拳が風を裂き、かすめた頬骨が割れた音を立てた。片目が視界から消える。',
    damage: 3,
    quill: 3
  },
  {
    id: 'p12_frozen_king',
    conditions: { s1: 'mod_frozen', s2: 'subj_king' },
    resultText: '凍てついた王が庭を見つめている。氷の玉座に座っている。王の吐息が吹雪となり、体温が奪われて膝が震える。永遠の冬に飲まれていく。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_clear_king',
    conditions: { s1: 'mod_clear', s2: 'subj_king' },
    resultText: '透き通った王が庭を見つめている。存在が希薄な王。臣下は透けた王を見て見ぬふりをする。庭だけが王を見つめ返している。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_clear_king', name: '透けた印璽', description: '王が握っていた印。文字だけが宙に浮いている', sellPrice: 11 }]
  },
  {
    id: 'p12_cursed_king',
    conditions: { s1: 'mod_cursed', s2: 'subj_king' },
    resultText: '呪われた王が庭を見つめている。触れたものが金になる王。石畳の草に手を伸ばし、引っ込めた。庭の美しさを壊したくないのだ。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_p12_cursed_king', name: '金色の雑草', description: '王が触れてしまった一本。美しいが生きていない', sellPrice: 15 }]
  },
  {
    id: 'p12_sleepy_king',
    conditions: { s1: 'mod_sleepy', s2: 'subj_king' },
    resultText: '眠い王が庭を見つめている。石畳の縁に腰かけて居眠りしている。王冠がずれている。庭の手入れは側近に任せたらしい。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_ghost',
    conditions: { s1: 'mod_small', s2: 'subj_ghost' },
    resultText: '小さな亡霊が庭を見つめている。子供の亡霊だ。石畳の上を走り回った笑い声だけが聞こえる。姿は見えない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_gentle_ghost',
    conditions: { s1: 'mod_gentle', s2: 'subj_ghost' },
    resultText: '優しい亡霊が庭を見つめている。生前の面影がかすかに残っている。庭の花に手を伸ばして、すり抜けた。微笑んで消えた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p12_fire_ghost',
    conditions: { s1: 'mod_fire', s2: 'subj_ghost' },
    resultText: '燃え盛る亡霊が庭を見つめている。炎をまとって石畳を彷徨う。火に焼かれた死に方の霊だ。庭の草が黒く焦げていく。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_hard_ghost',
    conditions: { s1: 'mod_hard', s2: 'subj_ghost' },
    resultText: '堅い亡霊が庭を見つめている。同じ場所に何百年も立っている。石畳が敷かれる前からここにいたらしい。動く気配がない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_ghost',
    conditions: { s1: 'mod_sharp', s2: 'subj_ghost' },
    resultText: '鋭い亡霊が庭を見つめている。こちらの罪を見透かす目と合った瞬間、胸の奥に鋭い痛みが走った。視線が心臓を刺している。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_broken_ghost',
    conditions: { s1: 'mod_broken', s2: 'subj_ghost' },
    resultText: '壊れた亡霊が庭を見つめている。自分が何者かも忘れた霊。石畳の上で同じ場所を行ったり来たりしている。輪郭が溶けている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_mighty_ghost',
    conditions: { s1: 'mod_mighty', s2: 'subj_ghost' },
    resultText: '屈強な亡霊が庭を見つめている。鎧武者の亡霊。音もなく近づき、すり抜けられた。体の芯が凍り、膝から崩れた。生者の温もりが霊に吸われていく。',
    damage: 4,
    quill: 3
  },
  {
    id: 'p12_frozen_ghost',
    conditions: { s1: 'mod_frozen', s2: 'subj_ghost' },
    resultText: '凍てついた亡霊が庭を見つめている。冷気を纏った霊が近づき、手を差し伸べた。握り返すと骨まで冷え、しばらく指が動かなくなった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_clear_ghost',
    conditions: { s1: 'mod_clear', s2: 'subj_ghost' },
    resultText: '透き通った亡霊が庭を見つめている。成仏しかけている。石畳の向こうが透けて見える。あと少しで消える。庭に何か言い残したそうだ。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_p12_clear_ghost', name: '亡霊の言伝', description: '石畳に残った文字。読めるのは一行だけ', sellPrice: 10 }]
  },
  {
    id: 'p12_cursed_ghost',
    conditions: { s1: 'mod_cursed', s2: 'subj_ghost' },
    resultText: '呪われた亡霊が庭を見つめている。呪いに縛られて成仏できない。苦しみの波動が庭に漏れ、近づくだけで全身に倦怠感がのしかかる。',
    damage: 3,
    quill: 4
  },
  {
    id: 'p12_sleepy_ghost',
    conditions: { s1: 'mod_sleepy', s2: 'subj_ghost' },
    resultText: '眠い亡霊が庭を見つめている。うつらうつらしている。存在感が薄れたり戻ったりする。石畳の上で、まどろんでいる。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_mirror',
    conditions: { s1: 'mod_small', s2: 'subj_mirror' },
    resultText: '小さな鏡が庭を見つめている。手鏡が石畳に落ちている。覗くと自分の目と、荒れた庭が映っている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_mirror',
    conditions: { s1: 'mod_gentle', s2: 'subj_mirror' },
    resultText: '優しい鏡が庭を見つめている。映った庭が少しだけ美しく見える。雑草が花に、ひび割れが模様に見えた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'p12_fire_mirror',
    conditions: { s1: 'mod_fire', s2: 'subj_mirror' },
    resultText: '燃え盛る鏡が庭を見つめている。鏡面に炎が映っている。覗き込んだ瞬間、鏡の中の炎がこちらに飛び出し、頬を灼いた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_hard_mirror',
    conditions: { s1: 'mod_hard', s2: 'subj_mirror' },
    resultText: '堅い鏡が庭を見つめている。石畳に埋め込まれた鏡。何をしても割れない。庭の空を映し続けて、傷ひとつない。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_sharp_mirror',
    conditions: { s1: 'mod_sharp', s2: 'subj_mirror' },
    resultText: '鋭い鏡が庭を見つめている。割れた鏡の破片が石畳に散らばっている。縁が刃のように鋭い。裸足では歩けない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p12_broken_mirror',
    conditions: { s1: 'mod_broken', s2: 'subj_mirror' },
    resultText: '壊れた鏡が庭を見つめている。ひび割れた鏡面に庭が映る。自分の顔が何人にも分裂している。どれが本物かわからない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_mighty_mirror',
    conditions: { s1: 'mod_mighty', s2: 'subj_mirror' },
    resultText: '屈強な鏡が庭を見つめている。人の背丈を超える姿見が石畳の真ん中に立っている。庭が丸ごと映っている。圧倒的な存在感。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_frozen_mirror',
    conditions: { s1: 'mod_frozen', s2: 'subj_mirror' },
    resultText: '凍てついた鏡が庭を見つめている。鏡面が凍って霜で覆われている。覗き込むと冷気が顔を打ち、まつ毛が凍りついた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_clear_mirror',
    conditions: { s1: 'mod_clear', s2: 'subj_mirror' },
    resultText: '透き通った鏡が庭を見つめている。鏡なのに向こうが透けている。通り抜けようとしたが、手が当たった。鏡の向こうに、手入れされた庭が見える。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_p12_clear_mirror', name: '鏡の庭の花', description: '鏡の向こうから零れ落ちた花弁。どこにも咲いていない花', sellPrice: 15 }]
  },
  {
    id: 'p12_cursed_mirror',
    conditions: { s1: 'mod_cursed', s2: 'subj_mirror' },
    resultText: '呪われた鏡が庭を見つめている。覗くと、自分の姿が鏡の中に残った。鏡の中の庭で、もう一人の自分が歩いている。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_mirror',
    conditions: { s1: 'mod_sleepy', s2: 'subj_mirror' },
    resultText: '眠い鏡が庭を見つめている。鏡面がぼんやり曇っている。映像が遅れて映る。自分の寝顔が映った。庭が眠たそうだ。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_small_doll',
    conditions: { s1: 'mod_small', s2: 'subj_doll' },
    resultText: '小さな人形が庭を見つめている。指人形ほどの大きさ。石畳の隙間に座っている。誰かが置いたのか、落としたのか。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_doll',
    conditions: { s1: 'mod_gentle', s2: 'subj_doll' },
    resultText: '優しい人形が庭を見つめている。抱きしめられてくたくたになった人形。笑顔が縫ってある。石畳の上で庭を見守っている。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_fire_doll',
    conditions: { s1: 'mod_fire', s2: 'subj_doll' },
    resultText: '燃え盛る人形が庭を見つめている。藁人形が燃えている。近づいた途端、人形の炎が飛び移り、服の裾が焦げた。祭りの火は人を選ばない。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p12_hard_doll',
    conditions: { s1: 'mod_hard', s2: 'subj_doll' },
    resultText: '堅い人形が庭を見つめている。木彫りの人形。関節がなく、表情もない。石畳の上に直立して、庭を見据えている。',
    damage: 1,
    quill: 3
  },
  {
    id: 'p12_sharp_doll',
    conditions: { s1: 'mod_sharp', s2: 'subj_doll' },
    resultText: '鋭い人形が庭を見つめている。関節が刃になった操り人形。糸は見えない。すれ違いざまに腕を切られた。浅いが鋭い傷。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_broken_doll',
    conditions: { s1: 'mod_broken', s2: 'subj_doll' },
    resultText: '壊れた人形が庭を見つめている。首がもげかけている。残った片目でこちらを見ている。石畳の染みのように、ずっとそこにいる。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_mighty_doll',
    conditions: { s1: 'mod_mighty', s2: 'subj_doll' },
    resultText: '屈強な人形が庭を見つめている。等身大の木彫り人形。腕が丸太のように太い。石畳の門番のように立っている。命令を待っている。',
    damage: 1,
    quill: 4
  },
  {
    id: 'p12_frozen_doll',
    conditions: { s1: 'mod_frozen', s2: 'subj_doll' },
    resultText: '凍てついた人形が庭を見つめている。氷でできた人形。繊細な造形だ。石畳の上で少しずつ溶けている。溶けたら二度と作れない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'p12_clear_doll',
    conditions: { s1: 'mod_clear', s2: 'subj_doll' },
    resultText: '透き通った人形が庭を見つめている。硝子の人形。中に何かの液体が入っている。石畳の光を受けて、庭に色とりどりの影を落としている。',
    damage: 0,
    quill: 6,
    rewardItems: [{ id: 'item_p12_clear_doll', name: '硝子人形の欠片', description: '中の液体が少し漏れた。甘い匂いがする', sellPrice: 8 }]
  },
  {
    id: 'p12_cursed_doll',
    conditions: { s1: 'mod_cursed', s2: 'subj_doll' },
    resultText: '呪われた人形が庭を見つめている。目を逸らすと背後に立っている。振り向くたびに近づいてくる。触れられた腕が冷たく痺れた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'p12_sleepy_doll',
    conditions: { s1: 'mod_sleepy', s2: 'subj_doll' },
    resultText: '眠い人形が庭を見つめている。目を閉じた人形。横にすると目が閉じるあの仕掛けだ。石畳に横たえると、庭ごと眠りに沈んだ。',
    damage: 0,
    quill: 5
  },
  {
    id: 'p12_small_rain',
    conditions: { s1: 'mod_small', s2: 'subj_rain' },
    resultText: '小さな雨が庭を見つめている。霧雨だ。石畳が薄く濡れて光っている。傘がなくても気にならない程度の雨。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_gentle_rain',
    conditions: { s1: 'mod_gentle', s2: 'subj_rain' },
    resultText: '優しい雨が庭を見つめている。慈雨。渇いた石畳を潤している。雑草が少しだけ背を伸ばした。庭が息を吹き返す。',
    damage: -1,
    quill: 7,
    rewardItems: [{ id: 'item_p12_gentle_rain', name: '慈雨の雫', description: '庭を潤した雨の一滴。瓶に入れると光る', sellPrice: 10 }]
  },
  {
    id: 'p12_fire_rain',
    conditions: { s1: 'mod_fire', s2: 'subj_rain' },
    resultText: '燃え盛る雨が庭を見つめている。火の雨。空から灼熱の滴が降る。石畳が焦げて割れ、庭が焼野原になっていく。',
    damage: 5,
    quill: 2
  },
  {
    id: 'p12_hard_rain',
    conditions: { s1: 'mod_hard', s2: 'subj_rain' },
    resultText: '堅い雨が庭を見つめている。雹だ。石のような氷が石畳を叩く。雑草が折れ、庭が白い粒で覆われた。',
    damage: 3,
    quill: 2
  },
  {
    id: 'p12_sharp_rain',
    conditions: { s1: 'mod_sharp', s2: 'subj_rain' },
    resultText: '鋭い雨が庭を見つめている。針のような雨粒が石畳を叩く。肌に刺さる。庭を駆け抜けたが、腕が赤くなった。',
    damage: 2,
    quill: 3
  },
  {
    id: 'p12_broken_rain',
    conditions: { s1: 'mod_broken', s2: 'subj_rain' },
    resultText: '壊れた雨が庭を見つめている。途切れ途切れに降る。リズムがおかしい。石畳の一部だけ濡れて、隣は乾いている。',
    damage: 0,
    quill: 4
  },
  {
    id: 'p12_mighty_rain',
    conditions: { s1: 'mod_mighty', s2: 'subj_rain' },
    resultText: '屈強な雨が庭を見つめている。豪雨。滝のような水が石畳を打つ。庭が川になった。足首まで水に浸かっている。',
    damage: 4,
    quill: 2
  },
  {
    id: 'p12_frozen_rain',
    conditions: { s1: 'mod_frozen', s2: 'subj_rain' },
    resultText: '凍てついた雨が庭を見つめている。凍雨が肌を打ち、触れた端から凍りつく。髪が白くなり、指先の感覚が消えた。庭が氷の鏡になった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'p12_clear_rain',
    conditions: { s1: 'mod_clear', s2: 'subj_rain' },
    resultText: '透き通った雨が庭を見つめている。異常に澄んだ雨。石畳が洗われ、かつての美しい紋様が浮かび上がった。庭が本来の姿を取り戻していく。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_p12_clear_rain', name: '庭の紋様の拓本', description: '雨に洗われた石畳の模様。何かの文字に見える', sellPrice: 12 }]
  },
  {
    id: 'p12_cursed_rain',
    conditions: { s1: 'mod_cursed', s2: 'subj_rain' },
    resultText: '呪われた雨が庭を見つめている。浴びるとその場から動けなくなる。石畳の上で立ち尽くしている。根が生えたようだ。',
    damage: 2,
    quill: 4
  },
  {
    id: 'p12_sleepy_rain',
    conditions: { s1: 'mod_sleepy', s2: 'subj_rain' },
    resultText: '眠い雨が庭を見つめている。しとしとと降り続く雨。石畳を叩く音が子守唄のようだ。庭全体が微睡んでいる。',
    damage: 0,
    quill: 5
  },
];
