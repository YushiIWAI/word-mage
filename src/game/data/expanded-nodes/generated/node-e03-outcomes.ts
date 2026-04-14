// Auto-generated from node-e03-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeE03Outcomes: Outcome[] = [
  {
    id: 'e03_kitten_block',
    conditions: { s1: 'subj_kitten', s2: 'pred_block' },
    resultText: '呪われた子猫が森を塞いでいる。拾った者が捨てられなくなる猫が、森の入口に座っている。通ると背中に乗ってきた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e03_kitten_guard',
    conditions: { s1: 'subj_kitten', s2: 'pred_guard' },
    resultText: '呪われた子猫が森を守っている。この猫を拾うと捨てられない。森ごと持ち帰ることになる。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_kitten_chase',
    conditions: { s1: 'subj_kitten', s2: 'pred_chase' },
    resultText: '呪われた子猫が森を追いかけてくる。どこに逃げても戻ってくる。走り続けて息が上がる。それでも鳴き声は背後にある。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_kitten_gaze',
    conditions: { s1: 'subj_kitten', s2: 'pred_gaze' },
    resultText: '呪われた子猫が森を見つめている。どこに置いても戻ってくる猫が、じっと森を見ている。何が見えるのだろう。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_kitten_hide',
    conditions: { s1: 'subj_kitten', s2: 'pred_hide' },
    resultText: '呪われた子猫が森を隠している。猫が通った跡が消え、道が見えなくなる。迷い込んだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_kitten_crush',
    conditions: { s1: 'subj_kitten', s2: 'pred_crush' },
    resultText: '呪われた子猫が森を砕いている。猫が歩くたびに木が枯れ、地面がひび割れる。呪いの力だ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_kitten_flee',
    conditions: { s1: 'subj_kitten', s2: 'pred_flee' },
    resultText: '呪われた子猫が森を逃げていく。捨てられない猫が自分から去る。安堵の次に、猫が恐れたものの足音が聞こえた。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_kitten_flee', name: '呪い猫の毛', description: '触ると指に張り付く。捨てられない', sellPrice: 8 }]
  },
  {
    id: 'e03_snake_block',
    conditions: { s1: 'subj_snake', s2: 'pred_block' },
    resultText: '呪われた蛇が森を塞いでいる。脱皮するたびに大きくなる蛇。もう道幅いっぱいに広がっている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_snake_guard',
    conditions: { s1: 'subj_snake', s2: 'pred_guard' },
    resultText: '呪われた蛇が森を守っている。脱皮するたびに大きくなる。この森に入る者はいない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_snake_chase',
    conditions: { s1: 'subj_snake', s2: 'pred_chase' },
    resultText: '呪われた蛇が森を追いかけてくる。脱皮するたびに大きくなり、速くなる。逃げ切れるか。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_snake_gaze',
    conditions: { s1: 'subj_snake', s2: 'pred_gaze' },
    resultText: '呪われた蛇が森を見つめている。脱皮するたびに大きくなる蛇が、木の上からこちらを見下ろしている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_snake_hide',
    conditions: { s1: 'subj_snake', s2: 'pred_hide' },
    resultText: '呪われた蛇が森を隠している。巨大な蛇が木々に巻きつき、森の奥を見せない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_snake_crush',
    conditions: { s1: 'subj_snake', s2: 'pred_crush' },
    resultText: '呪われた蛇が森を砕いている。木を締め上げてへし折る。森が蛇の力で崩壊していく。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_snake_flee',
    conditions: { s1: 'subj_snake', s2: 'pred_flee' },
    resultText: '呪われた蛇が森を逃げていく。脱皮の殻を残して去った。殻が道を覆っている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_e03_snake_flee', name: '呪蛇の脱殻', description: '脱皮のたびに大きくなる蛇の抜け殻。まだ成長している', sellPrice: 10 }]
  },
  {
    id: 'e03_dragon_block',
    conditions: { s1: 'subj_dragon', s2: 'pred_block' },
    resultText: '呪われた竜が森を塞いでいる。暴走した守護竜が森の入口に座り込んでいる。目に理性がない。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_guard',
    conditions: { s1: 'subj_dragon', s2: 'pred_guard' },
    resultText: '呪われた竜が森を守っている。暴走した守護竜。守っているのか破壊しているのかわからない。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_dragon_chase',
    conditions: { s1: 'subj_dragon', s2: 'pred_chase' },
    resultText: '呪われた竜が森を追いかけてくる。木々を薙ぎ倒しながら迫る。逃げるしかない。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_gaze',
    conditions: { s1: 'subj_dragon', s2: 'pred_gaze' },
    resultText: '呪われた竜が森を見つめている。目に理性がない。しかし動かない。呪いに縛られているのだ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_dragon_hide',
    conditions: { s1: 'subj_dragon', s2: 'pred_hide' },
    resultText: '呪われた竜が森を隠している。翼を広げて森全体を覆い隠す。中で何が起きているかわからない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_dragon_crush',
    conditions: { s1: 'subj_dragon', s2: 'pred_crush' },
    resultText: '呪われた竜が森を砕いている。暴走した竜が木々を薙ぎ倒す。森が消滅しつつある。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_flee',
    conditions: { s1: 'subj_dragon', s2: 'pred_flee' },
    resultText: '呪われた竜が森を逃げていく。暴走した竜が何かから逃げている。地鳴りが腹の底に響く。竜より恐ろしいものがすぐそこにいる。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_dragon_flee', name: '暴竜の鱗', description: '呪いに蝕まれた黒い鱗。熱い', sellPrice: 15 }]
  },
  {
    id: 'e03_butterfly_block',
    conditions: { s1: 'subj_butterfly', s2: 'pred_block' },
    resultText: '呪われた蝶が森を塞いでいる。追いかけると迷子になる蝶の群れが、道を覆っている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_guard',
    conditions: { s1: 'subj_butterfly', s2: 'pred_guard' },
    resultText: '呪われた蝶が森を守っている。近づく者を迷わせる。蝶に導かれて同じ場所を回り続けた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_chase',
    conditions: { s1: 'subj_butterfly', s2: 'pred_chase' },
    resultText: '呪われた蝶が森を追いかけてくる。追いかけると迷子になるが、追いかけてくる蝶も迷わせる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_gaze',
    conditions: { s1: 'subj_butterfly', s2: 'pred_gaze' },
    resultText: '呪われた蝶が森を見つめている。羽の模様が目のように開閉する。視線の圧に息が詰まる。見られ続ける恐怖で足が竦む。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_butterfly_hide',
    conditions: { s1: 'subj_butterfly', s2: 'pred_hide' },
    resultText: '呪われた蝶が森を隠している。群れが視界を覆い、道が見えない。蝶が晴れるまで動けない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_crush',
    conditions: { s1: 'subj_butterfly', s2: 'pred_crush' },
    resultText: '呪われた蝶が森を砕いている。蝶が止まった木から順に朽ちていく。鱗粉が呪いを撒いている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_butterfly_flee',
    conditions: { s1: 'subj_butterfly', s2: 'pred_flee' },
    resultText: '呪われた蝶が森を逃げていく。追いかけると迷子になる蝶が自分から去る。道が開けた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_wind_block',
    conditions: { s1: 'subj_wind', s2: 'pred_block' },
    resultText: '呪われた風が森を塞いでいる。吹かれると帰り道を忘れる。森の入口で立ち止まった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_guard',
    conditions: { s1: 'subj_wind', s2: 'pred_guard' },
    resultText: '呪われた風が森を守っている。帰り道を忘れさせる風が、侵入者を森に閉じ込める。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_chase',
    conditions: { s1: 'subj_wind', s2: 'pred_chase' },
    resultText: '呪われた風が森を追いかけてくる。逃げても風に追いつかれる。方角がわからなくなった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_gaze',
    conditions: { s1: 'subj_wind', s2: 'pred_gaze' },
    resultText: '呪われた風が森を見つめている。風に意志がある。立ち止まると体温を舐め取るように肌を撫でる。寒い。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_wind_hide',
    conditions: { s1: 'subj_wind', s2: 'pred_hide' },
    resultText: '呪われた風が森を隠している。帰り道を忘れさせる風が、森自体を霧に包んでいる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_crush',
    conditions: { s1: 'subj_wind', s2: 'pred_crush' },
    resultText: '呪われた風が森を砕いている。帰り道を忘れさせるだけでなく、木々をへし折る暴風。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_wind_flee',
    conditions: { s1: 'subj_wind', s2: 'pred_flee' },
    resultText: '呪われた風が森を逃げていく。帰り道を忘れさせる風が去った。記憶が戻る。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_wind_flee', name: '忘れられた方角', description: '風が落としていった記憶の欠片。北がわかる', sellPrice: 8 }]
  },
  {
    id: 'e03_flame_block',
    conditions: { s1: 'subj_flame', s2: 'pred_block' },
    resultText: '呪われた炎が森を塞いでいる。燃やしたものの形を覚える炎が、森の入口で壁を作っている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_flame_guard',
    conditions: { s1: 'subj_flame', s2: 'pred_guard' },
    resultText: '呪われた炎が森を守っている。炎の中にかつての侵入者たちの姿が見える。記憶する番人だ。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_flame_chase',
    conditions: { s1: 'subj_flame', s2: 'pred_chase' },
    resultText: '呪われた炎が森を追いかけてくる。逃げた跡を覚えて追ってくる。同じ道を二度使えない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_flame_gaze',
    conditions: { s1: 'subj_flame', s2: 'pred_gaze' },
    resultText: '呪われた炎が森を見つめている。炎の中にこちらの顔が映っている。記憶された。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_flame_hide',
    conditions: { s1: 'subj_flame', s2: 'pred_hide' },
    resultText: '呪われた炎が森を隠している。煙で視界を奪い、炎の壁で森を覆う。中に何があるかわからない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_flame_crush',
    conditions: { s1: 'subj_flame', s2: 'pred_crush' },
    resultText: '呪われた炎が森を砕いている。燃やしたものの形を覚えながら、森を灰に変えていく。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_flame_flee',
    conditions: { s1: 'subj_flame', s2: 'pred_flee' },
    resultText: '呪われた炎が森を逃げていく。記憶する炎が去った跡に、焦げた形だけが残っている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_ice_block',
    conditions: { s1: 'subj_ice', s2: 'pred_block' },
    resultText: '呪われた氷が森を塞いでいる。溶けない氷が道を覆っている。永遠の冬が広がっている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_ice_guard',
    conditions: { s1: 'subj_ice', s2: 'pred_guard' },
    resultText: '呪われた氷が森を守っている。触れたものを凍らせる伝染する氷。森に手を出す者はいない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ice_chase',
    conditions: { s1: 'subj_ice', s2: 'pred_chase' },
    resultText: '呪われた氷が森を追いかけてくる。踏んだ地面が凍る。逃げるほど氷が広がる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ice_gaze',
    conditions: { s1: 'subj_ice', s2: 'pred_gaze' },
    resultText: '呪われた氷が森を見つめている。氷の中に何かの目がある。じっとこちらを見ている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_ice_hide',
    conditions: { s1: 'subj_ice', s2: 'pred_hide' },
    resultText: '呪われた氷が森を隠している。木々が氷に覆われ、道も森も見えない。白い世界だ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ice_crush',
    conditions: { s1: 'subj_ice', s2: 'pred_crush' },
    resultText: '呪われた氷が森を砕いている。凍った木が次々と砕け散る。森が消滅しつつある。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_ice_flee',
    conditions: { s1: 'subj_ice', s2: 'pred_flee' },
    resultText: '呪われた氷が森を逃げていく。溶けない氷が溶けていく。呪いが解けたのだ。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_ice_flee', name: '解呪の雫', description: '呪いの氷が溶けた水。不思議と温かい', sellPrice: 12 }]
  },
  {
    id: 'e03_shadow_block',
    conditions: { s1: 'subj_shadow', s2: 'pred_block' },
    resultText: '呪われた影が森を塞いでいる。影に触れたものが影になる。道が黒く塗りつぶされている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_shadow_guard',
    conditions: { s1: 'subj_shadow', s2: 'pred_guard' },
    resultText: '呪われた影が森を守っている。触れたものを影に変える。森に入った者は二度と出られない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_shadow_chase',
    conditions: { s1: 'subj_shadow', s2: 'pred_chase' },
    resultText: '呪われた影が森を追いかけてくる。逃げても影は速い。触れられたら影になる。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_shadow_gaze',
    conditions: { s1: 'subj_shadow', s2: 'pred_gaze' },
    resultText: '呪われた影が森を見つめている。木々の影が全て一つの方向を向いている。こちらを見ている。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e03_shadow_gaze', name: '影の視線', description: '瓶の中で揺れる黒い光。覗かれている気がする', sellPrice: 10 }]
  },
  {
    id: 'e03_shadow_hide',
    conditions: { s1: 'subj_shadow', s2: 'pred_hide' },
    resultText: '呪われた影が森を隠している。影が森を覆い、光が届かない。道が見えない。闇の中を手探りで進む。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_shadow_crush',
    conditions: { s1: 'subj_shadow', s2: 'pred_crush' },
    resultText: '呪われた影が森を砕いている。影に触れた木が影に変わり、崩れる。森が闇に飲まれていく。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_shadow_flee',
    conditions: { s1: 'subj_shadow', s2: 'pred_flee' },
    resultText: '呪われた影が森を逃げていく。影が去ると光が戻る。森に色が戻った。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e03_song_block',
    conditions: { s1: 'subj_song', s2: 'pred_block' },
    resultText: '呪われた歌が森を塞いでいる。一度聴くと頭から離れない歌が、壁のように森の入口に響いている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_song_guard',
    conditions: { s1: 'subj_song', s2: 'pred_guard' },
    resultText: '呪われた歌が森を守っている。聴いた者を操る旋律。足が勝手に引き返す。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_song_chase',
    conditions: { s1: 'subj_song', s2: 'pred_chase' },
    resultText: '呪われた歌が森を追いかけてくる。逃げても歌は頭の中にある。正気が削れる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_song_gaze',
    conditions: { s1: 'subj_song', s2: 'pred_gaze' },
    resultText: '呪われた歌が森を見つめている。歌に目はない。だが聴いていると見透かされている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_song_hide',
    conditions: { s1: 'subj_song', s2: 'pred_hide' },
    resultText: '呪われた歌が森を隠している。旋律が方向感覚を狂わせる。森の中で同じ場所を回り続けた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_song_crush',
    conditions: { s1: 'subj_song', s2: 'pred_crush' },
    resultText: '呪われた歌が森を砕いている。金切り声が木々を震わせ、幹が裂ける。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_song_flee',
    conditions: { s1: 'subj_song', s2: 'pred_flee' },
    resultText: '呪われた歌が森を逃げていく。頭から離れない歌が、ようやく消えた。静寂が戻る。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_song_flee', name: '残響の欠片', description: '呪いの歌の最後の一音。瓶の中で震えている', sellPrice: 8 }]
  },
  {
    id: 'e03_silence_block',
    conditions: { s1: 'subj_silence', s2: 'pred_block' },
    resultText: '呪われた沈黙が森を塞いでいる。声を奪う沈黙が壁のように立ちはだかる。助けも呼べない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_silence_guard',
    conditions: { s1: 'subj_silence', s2: 'pred_guard' },
    resultText: '呪われた沈黙が森を守っている。触れた者も黙らせる。森は永遠に静かだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_silence_chase',
    conditions: { s1: 'subj_silence', s2: 'pred_chase' },
    resultText: '呪われた沈黙が森を追いかけてくる。背後から音が消えていく。振り返ると世界が無音だ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_gaze',
    conditions: { s1: 'subj_silence', s2: 'pred_gaze' },
    resultText: '呪われた沈黙が森を見つめている。音がない。だが圧力がある。森が押し黙って見ている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_hide',
    conditions: { s1: 'subj_silence', s2: 'pred_hide' },
    resultText: '呪われた沈黙が森を隠している。音が消え、方角もわからない。無音の森は地図に載らない。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_crush',
    conditions: { s1: 'subj_silence', s2: 'pred_crush' },
    resultText: '呪われた沈黙が森を砕いている。音を奪われた木々が、声なく倒れていく。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e03_silence_crush', name: '無音の木片', description: '叩いても音がしない木の欠片。呪いが染みている', sellPrice: 8 }]
  },
  {
    id: 'e03_silence_flee',
    conditions: { s1: 'subj_silence', s2: 'pred_flee' },
    resultText: '呪われた沈黙が森を逃げていく。音が戻る。鳥の声、風の音、葉擦れ。森が息を吹き返した。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_silence_flee', name: '森の声', description: '鳥と風と葉のざわめきが瓶の中で鳴っている', sellPrice: 12 }]
  },
  {
    id: 'e03_knight_block',
    conditions: { s1: 'subj_knight', s2: 'pred_block' },
    resultText: '呪われた騎士が森を塞いでいる。黒い鎧の騎士。兜の奥の目が赤く光る。通さない。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_knight_guard',
    conditions: { s1: 'subj_knight', s2: 'pred_guard' },
    resultText: '呪われた騎士が森を守っている。呪いで鎧から出られない騎士が、森の番人を強いられている。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_knight_chase',
    conditions: { s1: 'subj_knight', s2: 'pred_chase' },
    resultText: '呪われた騎士が森を追いかけてくる。鎧が軋む音が背後から迫る。目が赤い。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_knight_gaze',
    conditions: { s1: 'subj_knight', s2: 'pred_gaze' },
    resultText: '呪われた騎士が森を見つめている。兜の隙間から赤い光。動かないが、ずっとこちらを見ている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_knight_hide',
    conditions: { s1: 'subj_knight', s2: 'pred_hide' },
    resultText: '呪われた騎士が森を隠している。騎士の立つ場所から先が見えない。黒い鎧が闇を纏っている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_knight_crush',
    conditions: { s1: 'subj_knight', s2: 'pred_crush' },
    resultText: '呪われた騎士が森を砕いている。折れた剣で木を薙ぎ倒す。破壊だけが残った忠誠。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_knight_flee',
    conditions: { s1: 'subj_knight', s2: 'pred_flee' },
    resultText: '呪われた騎士が森を逃げていく。鎧が軋む音が遠ざかる。呪いが解けたのか、別の主を見つけたのか。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e03_knight_flee', name: '黒鎧の破片', description: '呪われた騎士が落とした鎧の欠片。まだ温かい', sellPrice: 10 }]
  },
  {
    id: 'e03_witch_block',
    conditions: { s1: 'subj_witch', s2: 'pred_block' },
    resultText: '呪われた魔女が森を塞いでいる。自分の呪いに蝕まれた魔女が道に立っている。体の一部が変異している。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_witch_guard',
    conditions: { s1: 'subj_witch', s2: 'pred_guard' },
    resultText: '呪われた魔女が森を守っている。この呪いの森は彼女が作った。自分の呪いに蝕まれながらも守っている。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_witch_chase',
    conditions: { s1: 'subj_witch', s2: 'pred_chase' },
    resultText: '呪われた魔女が森を追いかけてくる。途切れ途切れの呪文が背後から迫る。何が飛んでくるかわからない。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_witch_gaze',
    conditions: { s1: 'subj_witch', s2: 'pred_gaze' },
    resultText: '呪われた魔女が森を見つめている。目が合った。蝕まれた瞳の奥から、呪いの残滓がこちらに染み出してくる。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_witch_gaze', name: '魔女の片目', description: '呪いに蝕まれた硝子の義眼。覗くと森の真の姿が見える', sellPrice: 12 }]
  },
  {
    id: 'e03_witch_hide',
    conditions: { s1: 'subj_witch', s2: 'pred_hide' },
    resultText: '呪われた魔女が森を隠している。幻術で森を覆い隠す。呪いで術が暴走し、森ごと消えかけている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_witch_crush',
    conditions: { s1: 'subj_witch', s2: 'pred_crush' },
    resultText: '呪われた魔女が森を砕いている。暴走した魔法が木々を薙ぎ倒す。制御できていない。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_witch_flee',
    conditions: { s1: 'subj_witch', s2: 'pred_flee' },
    resultText: '呪われた魔女が森を逃げていく。自分の呪いから逃げている。置き去りにされた呪いが足元に絡みつく。',
    damage: 2,
    quill: 7
  },
  {
    id: 'e03_king_block',
    conditions: { s1: 'subj_king', s2: 'pred_block' },
    resultText: '呪われた王が森を塞いでいる。触れたものが金になる王が、金の木の前に座っている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_king_guard',
    conditions: { s1: 'subj_king', s2: 'pred_guard' },
    resultText: '呪われた王が森を守っている。触れたものが金になる。森が金に変わっていく。守っているのか、殺しているのか。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_king_chase',
    conditions: { s1: 'subj_king', s2: 'pred_chase' },
    resultText: '呪われた王が森を追いかけてくる。触れられたら金になる。走った。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_king_gaze',
    conditions: { s1: 'subj_king', s2: 'pred_gaze' },
    resultText: '呪われた王が森を見つめている。食事もできない王が、じっと木々を見ている。触れたいが触れられない。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e03_king_gaze', name: '黄金の涙', description: '王が泣いた跡。頬に張り付いた金の雫', sellPrice: 15 }]
  },
  {
    id: 'e03_king_hide',
    conditions: { s1: 'subj_king', s2: 'pred_hide' },
    resultText: '呪われた王が森を隠している。金の木々で森を覆い、中を見せない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_king_crush',
    conditions: { s1: 'subj_king', s2: 'pred_crush' },
    resultText: '呪われた王が森を砕いている。金になった木は脆い。王が触れるたびに砕け散る。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_king_flee',
    conditions: { s1: 'subj_king', s2: 'pred_flee' },
    resultText: '呪われた王が森を逃げていく。何も触れないように手を上げて走っている。哀れだ。',
    damage: 1,
    quill: 8
  },
  {
    id: 'e03_ghost_block',
    conditions: { s1: 'subj_ghost', s2: 'pred_block' },
    resultText: '呪われた亡霊が森を塞いでいる。呪いに縛られて成仏できない霊が、道を塞いで泣いている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_guard',
    conditions: { s1: 'subj_ghost', s2: 'pred_guard' },
    resultText: '呪われた亡霊が森を守っている。呪いを振りまく媒介としての霊。近づくと呪いがうつる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_chase',
    conditions: { s1: 'subj_ghost', s2: 'pred_chase' },
    resultText: '呪われた亡霊が森を追いかけてくる。苦しみの表情で迫る。成仏できない怒りをぶつけている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_gaze',
    conditions: { s1: 'subj_ghost', s2: 'pred_gaze' },
    resultText: '呪われた亡霊が森を見つめている。苦しみの目。解放を求めている。だが手を出せない。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e03_ghost_hide',
    conditions: { s1: 'subj_ghost', s2: 'pred_hide' },
    resultText: '呪われた亡霊が森を隠している。霊の靄で森が見えない。迷い込んだら出られない。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_crush',
    conditions: { s1: 'subj_ghost', s2: 'pred_crush' },
    resultText: '呪われた亡霊が森を砕いている。怨念で木々が枯れ、倒れていく。呪いの力が森を殺す。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_flee',
    conditions: { s1: 'subj_ghost', s2: 'pred_flee' },
    resultText: '呪われた亡霊が森を逃げていく。成仏したのだろうか。森に温かい光が差した。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_ghost_flee', name: '成仏の光', description: '亡霊が残した温かい光。手のひらで揺れている', sellPrice: 10 }]
  },
  {
    id: 'e03_mirror_block',
    conditions: { s1: 'subj_mirror', s2: 'pred_block' },
    resultText: '呪われた鏡が森を塞いでいる。覗いた者の姿が鏡に残る。鏡の中で影たちが蠢いている。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_mirror_guard',
    conditions: { s1: 'subj_mirror', s2: 'pred_guard' },
    resultText: '呪われた鏡が森を守っている。覗いた者を捕える鏡。森の番人として完璧だ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_mirror_chase',
    conditions: { s1: 'subj_mirror', s2: 'pred_chase' },
    resultText: '呪われた鏡が森を追いかけてくる。どこを向いても鏡がある。自分の顔が映り続ける。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_gaze',
    conditions: { s1: 'subj_mirror', s2: 'pred_gaze' },
    resultText: '呪われた鏡が森を見つめている。鏡の中の自分が動かない。こちらを見つめている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_hide',
    conditions: { s1: 'subj_mirror', s2: 'pred_hide' },
    resultText: '呪われた鏡が森を隠している。鏡の反射で森の形が歪む。実際の道と映った道が食い違う。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_crush',
    conditions: { s1: 'subj_mirror', s2: 'pred_crush' },
    resultText: '呪われた鏡が森を砕いている。鏡に映った森が砕け、現実の森も連動して崩れる。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_mirror_flee',
    conditions: { s1: 'subj_mirror', s2: 'pred_flee' },
    resultText: '呪われた鏡が森を逃げていく。鏡が割れて破片が散る。映っていた影たちが解放された。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e03_doll_block',
    conditions: { s1: 'subj_doll', s2: 'pred_block' },
    resultText: '呪われた人形が森を塞いでいる。夜になると位置が変わる人形が、道のど真ん中にいる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_guard',
    conditions: { s1: 'subj_doll', s2: 'pred_guard' },
    resultText: '呪われた人形が森を守っている。人間の魂が閉じ込められた人形が、泣き声をあげている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_doll_chase',
    conditions: { s1: 'subj_doll', s2: 'pred_chase' },
    resultText: '呪われた人形が森を追いかけてくる。目を離した隙に近づいている。走った。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_gaze',
    conditions: { s1: 'subj_doll', s2: 'pred_gaze' },
    resultText: '呪われた人形が森を見つめている。首だけがゆっくり回ってこちらを向く。背筋が凍る。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_doll_hide',
    conditions: { s1: 'subj_doll', s2: 'pred_hide' },
    resultText: '呪われた人形が森を隠している。人形が木の根元に並んでいる。その先が見えない。行くなという意味か。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_crush',
    conditions: { s1: 'subj_doll', s2: 'pred_crush' },
    resultText: '呪われた人形が森を砕いている。人形が木を抱きしめると、木が枯れて砕ける。呪いの抱擁だ。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e03_doll_crush', name: '呪い人形の腕', description: 'もげた腕。まだ指が動いている', sellPrice: 8 }]
  },
  {
    id: 'e03_doll_flee',
    conditions: { s1: 'subj_doll', s2: 'pred_flee' },
    resultText: '呪われた人形が森を逃げていく。振り返ると、木の幹にぶら下がって揺れている。逃げたのではない。待ち伏せだ。背筋が凍る。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_rain_block',
    conditions: { s1: 'subj_rain', s2: 'pred_block' },
    resultText: '呪われた雨が森を塞いでいる。浴びた者がその場から動けなくなる雨が、道を覆っている。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_rain_guard',
    conditions: { s1: 'subj_rain', s2: 'pred_guard' },
    resultText: '呪われた雨が森を守っている。浴びた者が動けなくなる。森に入った者は雨に捕らえられる。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_rain_chase',
    conditions: { s1: 'subj_rain', s2: 'pred_chase' },
    resultText: '呪われた雨が森を追いかけてくる。逃げても雨雲が追ってくる。足に根が生え始めた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_rain_gaze',
    conditions: { s1: 'subj_rain', s2: 'pred_gaze' },
    resultText: '呪われた雨が森を見つめている。雨粒の一つ一つが目のように光っている。見られている。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_rain_hide',
    conditions: { s1: 'subj_rain', s2: 'pred_hide' },
    resultText: '呪われた雨が森を隠している。豪雨で視界がない。足元が見えない。根が生え始めていることに気づかなかった。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_rain_crush',
    conditions: { s1: 'subj_rain', s2: 'pred_crush' },
    resultText: '呪われた雨が森を砕いている。降るたびに地面が沈む。森が泥の中に沈んでいく。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_rain_flee',
    conditions: { s1: 'subj_rain', s2: 'pred_flee' },
    resultText: '呪われた雨が森を逃げていく。雨が止んだ。足に生えかけた根が枯れた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_rain_flee', name: '呪雨の苗', description: '足に生えかけた根の残り。まだ湿っている', sellPrice: 8 }]
  },

  // --- 待っている (pred_wait) ---
  {
    id: 'e03_kitten_wait',
    conditions: { s1: 'subj_kitten', s2: 'pred_wait' },
    resultText: '呪われた子猫が森を待っている。木の根元に丸くなって、拾った者を捨てられなくする猫が誰かを待っている。目が合うと鳴いた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e03_snake_wait',
    conditions: { s1: 'subj_snake', s2: 'pred_wait' },
    resultText: '呪われた蛇が森を待っている。脱皮のたびに大きくなる蛇が、獣道の脇で舌をちろちろ出している。次の獲物を待っている。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_dragon_wait',
    conditions: { s1: 'subj_dragon', s2: 'pred_wait' },
    resultText: '呪われた竜が森を待っている。暴走した守護竜が森の奥で蹲っている。理性のない目が木々の隙間からこちらを覗く。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_butterfly_wait',
    conditions: { s1: 'subj_butterfly', s2: 'pred_wait' },
    resultText: '呪われた蝶が森を待っている。追えば迷子になる蝶が、木漏れ日の中でゆらゆら舞っている。ついていかなければ害はない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e03_wind_wait',
    conditions: { s1: 'subj_wind', s2: 'pred_wait' },
    resultText: '呪われた風が森を待っている。帰り道を忘れさせる風が、森の入口で凪いでいる。奥に進めば吹き始めるだろう。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_flame_wait',
    conditions: { s1: 'subj_flame', s2: 'pred_wait' },
    resultText: '呪われた炎が森を待っている。燃やしたものの形を覚える炎が、落ち葉の下で息を潜めている。一歩踏めば靴の形に火がつく。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_ice_wait',
    conditions: { s1: 'subj_ice', s2: 'pred_wait' },
    resultText: '呪われた氷が森を待っている。溶けない氷が根元に積もり、永遠の冬を広げている。木々の葉が一枚ずつ凍っていく。',
    damage: 3,
    quill: 3
  },
  {
    id: 'e03_shadow_wait',
    conditions: { s1: 'subj_shadow', s2: 'pred_wait' },
    resultText: '呪われた影が森を待っている。触れたものを影にする影が、大樹の根元で広がっている。森は影が待つのに都合がいい場所だ。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_song_wait',
    conditions: { s1: 'subj_song', s2: 'pred_wait' },
    resultText: '呪われた歌が森を待っている。頭から離れない旋律が、梢の間からかすかに聞こえる。一節聴いただけで頭痛が走った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_silence_wait',
    conditions: { s1: 'subj_silence', s2: 'pred_wait' },
    resultText: '呪われた沈黙が森を待っている。声を奪う沈黙が森を満たしている。鳥も虫も黙っている。足音だけが響く。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_knight_wait',
    conditions: { s1: 'subj_knight', s2: 'pred_wait' },
    resultText: '呪われた騎士が森を待っている。黒い鎧の騎士が木の幹に背を預け、赤い目だけが暗闇で光っている。待ち伏せだ。',
    damage: 4,
    quill: 3
  },
  {
    id: 'e03_witch_wait',
    conditions: { s1: 'subj_witch', s2: 'pred_wait' },
    resultText: '呪われた魔女が森を待っている。自分の呪いに蝕まれた魔女が、切り株に腰掛けて旅人を待っている。取引を持ちかけてくるだろう。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_e03_witch_wait', name: '呪いの触媒', description: '魔女が取引の礼に渡した小瓶。中身は動いている', sellPrice: 12 }]
  },
  {
    id: 'e03_king_wait',
    conditions: { s1: 'subj_king', s2: 'pred_wait' },
    resultText: '呪われた王が森を待っている。触れたものが金になる王が、森の奥で一人座っている。周りの木々が金色に輝いている。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_wait',
    conditions: { s1: 'subj_ghost', s2: 'pred_wait' },
    resultText: '呪われた亡霊が森を待っている。呪いに縛られた霊が、古い道標の前に佇んでいる。示す方角に従って歩き、同じ場所に戻ってきた。体力だけが減る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_mirror_wait',
    conditions: { s1: 'subj_mirror', s2: 'pred_wait' },
    resultText: '呪われた鏡が森を待っている。覗いた者の姿を閉じ込める鏡が、苔むした岩に立てかけてある。森の暗さで気づきにくい。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_doll_wait',
    conditions: { s1: 'subj_doll', s2: 'pred_wait' },
    resultText: '呪われた人形が森を待っている。夜に動く人形が、昼の森で枝に腰掛けている。首がゆっくりこちらを向いた。まだ昼なのに。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_rain_wait',
    conditions: { s1: 'subj_rain', s2: 'pred_wait' },
    resultText: '呪われた雨が森を待っている。浴びると動けなくなる雨雲が、樹冠の上で垂れ込めている。一滴が肩に落ち、足が一瞬止まった。',
    damage: 2,
    quill: 5
  },
];
