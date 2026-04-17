// Auto-generated from node-e03-outcomes.md
import type { Outcome } from '../../../engine/types';

export const nodeE03Outcomes: Outcome[] = [
  {
    id: 'e03_kitten_block',
    conditions: { s2: 'subj_kitten', s4: 'pred_block' },
    resultText: '呪われた子猫が森を塞いでいる。拾った者が捨てられなくなる猫が、森の入口に座っている。通ると背中に乗ってきた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e03_kitten_guard',
    conditions: { s2: 'subj_kitten', s4: 'pred_guard' },
    resultText: '呪われた子猫が森を守っている。この猫を拾うと捨てられない。森ごと持ち帰ることになる。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_kitten_chase',
    conditions: { s2: 'subj_kitten', s4: 'pred_chase' },
    resultText: '呪われた子猫が森を追いかけてくる。どこに逃げても戻ってくる。走り続けて息が上がる。それでも鳴き声は背後にある。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_kitten_gaze',
    conditions: { s2: 'subj_kitten', s4: 'pred_gaze' },
    resultText: '呪われた子猫が森を見つめている。どこに置いても戻ってくる猫が、じっと森を見ている。何が見えるのだろう。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_kitten_hide',
    conditions: { s2: 'subj_kitten', s4: 'pred_hide' },
    resultText: '呪われた子猫が森を隠している。道が消え、荊の茂みを彷徨ううちに腕と頬に無数の裂傷を負った。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_kitten_crush',
    conditions: { s2: 'subj_kitten', s4: 'pred_crush' },
    resultText: '呪われた子猫が森を砕いている。足元の地面が割れて踏み抜き、鋭い根に脛を貫かれて血が溢れた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_kitten_flee',
    conditions: { s2: 'subj_kitten', s4: 'pred_flee' },
    resultText: '呪われた子猫が森を逃げていく。捨てられない猫が自分から去る。安堵の次に、猫が恐れたものの足音が聞こえた。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_kitten_flee', name: '呪い猫の毛', description: '触ると指に張り付く。捨てられない', sellPrice: 8 }]
  },
  {
    id: 'e03_snake_block',
    conditions: { s2: 'subj_snake', s4: 'pred_block' },
    resultText: '呪われた蛇が森を塞いでいる。すり抜けようとした胴が鱗で擦られ、皮膚が背中一面に剥がれ落ちた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_snake_guard',
    conditions: { s2: 'subj_snake', s4: 'pred_guard' },
    resultText: '呪われた蛇が森を守っている。木の陰から飛びつき、胴に巻きついて締め上げられ、肋にひびが入る音が自分の中で響いた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_snake_chase',
    conditions: { s2: 'subj_snake', s4: 'pred_chase' },
    resultText: '呪われた蛇が森を追いかけてくる。逃げる背に牙が食い込み、腰の肉が大きく抉られて血が旅装を濡らした。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_snake_gaze',
    conditions: { s2: 'subj_snake', s4: 'pred_gaze' },
    resultText: '呪われた蛇が森を見つめている。木の上から落ちてきた胴が肩に巻きつき、関節が軋んで腕が使えなくなった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_snake_hide',
    conditions: { s2: 'subj_snake', s4: 'pred_hide' },
    resultText: '呪われた蛇が森を隠している。木陰から伸びた鱗だらけの胴に脚を払われ、転倒して頭を木の根に強打した。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_snake_crush',
    conditions: { s2: 'subj_snake', s4: 'pred_crush' },
    resultText: '呪われた蛇が森を砕いている。へし折られた巨木が肩に倒れかかり、鎖骨から腰まで骨が砕けた。息が浅い。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_snake_flee',
    conditions: { s2: 'subj_snake', s4: 'pred_flee' },
    resultText: '呪われた蛇が森を逃げていく。脱皮の殻を残して去った。殻が道を覆っている。',
    damage: 1,
    quill: 6,
    rewardItems: [{ id: 'item_e03_snake_flee', name: '呪蛇の脱殻', description: '脱皮のたびに大きくなる蛇の抜け殻。まだ成長している', sellPrice: 10 }]
  },
  {
    id: 'e03_dragon_block',
    conditions: { s2: 'subj_dragon', s4: 'pred_block' },
    resultText: '呪われた竜が森を塞いでいる。横なぎの爪が胸を裂き、肋が剥き出しになって倒れ込んだ。地面が血で黒く染まる。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_guard',
    conditions: { s2: 'subj_dragon', s4: 'pred_guard' },
    resultText: '呪われた竜が森を守っている。狂った尾の一振りで木々ごと吹き飛ばされ、幹に叩きつけられて腰骨が折れた。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_dragon_chase',
    conditions: { s2: 'subj_dragon', s4: 'pred_chase' },
    resultText: '呪われた竜が森を追いかけてくる。薙ぎ倒された巨木の下敷きになり、両脚が折れて引き摺り出すうちに血だまりができた。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_gaze',
    conditions: { s2: 'subj_dragon', s4: 'pred_gaze' },
    resultText: '呪われた竜が森を見つめている。動かないはずの竜が突然唸り、吐息の熱で皮膚が火脹れになって一歩も進めない。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_dragon_hide',
    conditions: { s2: 'subj_dragon', s4: 'pred_hide' },
    resultText: '呪われた竜が森を隠している。翼の風圧で幹に叩きつけられ、背骨に鈍い痛みが残り、立つと眩暈がする。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_dragon_crush',
    conditions: { s2: 'subj_dragon', s4: 'pred_crush' },
    resultText: '呪われた竜が森を砕いている。飛び散る木片が目と喉に刺さり、血を吐きながら地を這って逃げた。視界が赤い。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_dragon_flee',
    conditions: { s2: 'subj_dragon', s4: 'pred_flee' },
    resultText: '呪われた竜が森を逃げていく。暴走した竜が何かから逃げている。地鳴りが腹の底に響く。竜より恐ろしいものがすぐそこにいる。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_dragon_flee', name: '暴竜の鱗', description: '呪いに蝕まれた黒い鱗。熱い', sellPrice: 15 }]
  },
  {
    id: 'e03_butterfly_block',
    conditions: { s2: 'subj_butterfly', s4: 'pred_block' },
    resultText: '呪われた蝶が森を塞いでいる。掻き分けた群れの鱗粉が目に入り、皮膚が斑に腫れて熱を持った。視界が滲む。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_guard',
    conditions: { s2: 'subj_butterfly', s4: 'pred_guard' },
    resultText: '呪われた蝶が森を守っている。同じ場所を何度も歩かされ、気づけば靴が擦り切れ足裏が血塗れになっていた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_butterfly_chase',
    conditions: { s2: 'subj_butterfly', s4: 'pred_chase' },
    resultText: '呪われた蝶が森を追いかけてくる。群れに顔を覆われ、鱗粉で喉が焼けて呼吸が浅くなり、意識が遠のいた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_gaze',
    conditions: { s2: 'subj_butterfly', s4: 'pred_gaze' },
    resultText: '呪われた蝶が森を見つめている。羽の模様が目のように開閉する。視線の圧に息が詰まる。見られ続ける恐怖で足が竦む。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_butterfly_hide',
    conditions: { s2: 'subj_butterfly', s4: 'pred_hide' },
    resultText: '呪われた蝶が森を隠している。視界を奪われたまま歩き、崖から転落して肩と腰を強打した。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_butterfly_crush',
    conditions: { s2: 'subj_butterfly', s4: 'pred_crush' },
    resultText: '呪われた蝶が森を砕いている。朽ちた枝が頭上から落ち、こめかみを裂かれて血が片目を塞いだ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_butterfly_flee',
    conditions: { s2: 'subj_butterfly', s4: 'pred_flee' },
    resultText: '呪われた蝶が森を逃げていく。追いかけると迷子になる蝶が自分から去る。道が開けた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_wind_block',
    conditions: { s2: 'subj_wind', s4: 'pred_block' },
    resultText: '呪われた風が森を塞いでいる。帰り道を忘れて入口を彷徨ううち、荊と石に躓き、足裏と脛が血塗れになった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_wind_guard',
    conditions: { s2: 'subj_wind', s4: 'pred_guard' },
    resultText: '呪われた風が森を守っている。閉じ込められたまま夜を越し、低体温と飢えで意識が遠のき、倒木に膝を打ちつけた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_wind_chase',
    conditions: { s2: 'subj_wind', s4: 'pred_chase' },
    resultText: '呪われた風が森を追いかけてくる。背後から叩きつけられ、地面に投げ出された顔面から血が滲んだ。肩が抜けた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_gaze',
    conditions: { s2: 'subj_wind', s4: 'pred_gaze' },
    resultText: '呪われた風が森を見つめている。風に意志がある。立ち止まると体温を舐め取るように肌を撫でる。寒い。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_wind_hide',
    conditions: { s2: 'subj_wind', s4: 'pred_hide' },
    resultText: '呪われた風が森を隠している。霧の中で段差に気づかず転落し、背中と後頭部を岩に打ちつけた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_wind_crush',
    conditions: { s2: 'subj_wind', s4: 'pred_crush' },
    resultText: '呪われた風が森を砕いている。飛んできた折れ枝が脇腹に突き刺さり、引き抜くと血が噴き出した。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_wind_flee',
    conditions: { s2: 'subj_wind', s4: 'pred_flee' },
    resultText: '呪われた風が森を逃げていく。帰り道を忘れさせる風が去った。記憶が戻る。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_wind_flee', name: '忘れられた方角', description: '風が落としていった記憶の欠片。北がわかる', sellPrice: 8 }]
  },
  {
    id: 'e03_flame_block',
    conditions: { s2: 'subj_flame', s4: 'pred_block' },
    resultText: '呪われた炎が森を塞いでいる。壁に手をついた瞬間、手のひらから肘まで皮膚が焼け落ち、骨が見えた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_flame_guard',
    conditions: { s2: 'subj_flame', s4: 'pred_guard' },
    resultText: '呪われた炎が森を守っている。突然吹き出た火の手が背中を舐め、旅装ごと皮膚が焼け縮んだ。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_flame_chase',
    conditions: { s2: 'subj_flame', s4: 'pred_chase' },
    resultText: '呪われた炎が森を追いかけてくる。背を焼かれて転倒し、膝と肘の皮膚が地面に擦り剥け、火の粉で水ぶくれが広がった。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_flame_gaze',
    conditions: { s2: 'subj_flame', s4: 'pred_gaze' },
    resultText: '呪われた炎が森を見つめている。記憶された瞬間、炎の中の自分の姿が焼け爛れ、現実の頬に同じ火傷が現れた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_flame_hide',
    conditions: { s2: 'subj_flame', s4: 'pred_hide' },
    resultText: '呪われた炎が森を隠している。煙を吸って気管が焼け、血の混じった咳を吐きながら地面に倒れ伏した。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_flame_crush',
    conditions: { s2: 'subj_flame', s4: 'pred_crush' },
    resultText: '呪われた炎が森を砕いている。燃え崩れた大木が覆いかぶさり、火傷と骨折を同時に負って意識が飛んだ。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_flame_flee',
    conditions: { s2: 'subj_flame', s4: 'pred_flee' },
    resultText: '呪われた炎が森を逃げていく。記憶する炎が去った跡に、焦げた形だけが残っている。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_ice_block',
    conditions: { s2: 'subj_ice', s4: 'pred_block' },
    resultText: '呪われた氷が森を塞いでいる。踏み出した足が氷に縫いとめられ、引き抜く時に足首の皮膚が剥がれた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_ice_guard',
    conditions: { s2: 'subj_ice', s4: 'pred_guard' },
    resultText: '呪われた氷が森を守っている。触れた指先から氷が腕を這い上がり、肘の関節が凍って動かなくなった。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ice_chase',
    conditions: { s2: 'subj_ice', s4: 'pred_chase' },
    resultText: '呪われた氷が森を追いかけてくる。逃げる足元が凍って滑り、転倒して顔面を氷に打ちつけ、鼻と唇が裂けた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ice_gaze',
    conditions: { s2: 'subj_ice', s4: 'pred_gaze' },
    resultText: '呪われた氷が森を見つめている。視線が通った体に霜が走り、指先が黒く凍えて感覚を失った。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_ice_hide',
    conditions: { s2: 'subj_ice', s4: 'pred_hide' },
    resultText: '呪われた氷が森を隠している。凍った枝の塊が落ちて肩に直撃し、鎖骨が折れて腕がぶら下がった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ice_crush',
    conditions: { s2: 'subj_ice', s4: 'pred_crush' },
    resultText: '呪われた氷が森を砕いている。飛び散る氷塊と鋭い木片が全身を切り裂き、立てないほど血を失った。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_ice_flee',
    conditions: { s2: 'subj_ice', s4: 'pred_flee' },
    resultText: '呪われた氷が森を逃げていく。溶けない氷が溶けていく。呪いが解けたのだ。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_ice_flee', name: '解呪の雫', description: '呪いの氷が溶けた水。不思議と温かい', sellPrice: 12 }]
  },
  {
    id: 'e03_shadow_block',
    conditions: { s2: 'subj_shadow', s4: 'pred_block' },
    resultText: '呪われた影が森を塞いでいる。触れた手が影に沈み、引き戻した時には指三本が黒く失われていた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_shadow_guard',
    conditions: { s2: 'subj_shadow', s4: 'pred_guard' },
    resultText: '呪われた影が森を守っている。脚が影に飲まれかけ、膝から下の肉が黒く削れて剥がれ落ちた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_shadow_chase',
    conditions: { s2: 'subj_shadow', s4: 'pred_chase' },
    resultText: '呪われた影が森を追いかけてくる。追いつかれた踵が影に触れ、片足の感覚が消えて引き摺って逃げた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_shadow_gaze',
    conditions: { s2: 'subj_shadow', s4: 'pred_gaze' },
    resultText: '呪われた影が森を見つめている。視線を浴びた胸が冷たく痺れ、皮膚の下で血が固まったように紫に変色した。',
    damage: 3,
    quill: 6,
    rewardItems: [{ id: 'item_e03_shadow_gaze', name: '影の視線', description: '瓶の中で揺れる黒い光。覗かれている気がする', sellPrice: 10 }]
  },
  {
    id: 'e03_shadow_hide',
    conditions: { s2: 'subj_shadow', s4: 'pred_hide' },
    resultText: '呪われた影が森を隠している。闇の中で倒木に胸から突っ込み、肋に鋭い枝が刺さった。血が止まらない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_shadow_crush',
    conditions: { s2: 'subj_shadow', s4: 'pred_crush' },
    resultText: '呪われた影が森を砕いている。崩れる木の下敷きになり、胸郭が潰れて血の混じった息しか吐けなくなった。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_shadow_flee',
    conditions: { s2: 'subj_shadow', s4: 'pred_flee' },
    resultText: '呪われた影が森を逃げていく。影が去ると光が戻る。森に色が戻った。',
    damage: 0,
    quill: 7
  },
  {
    id: 'e03_song_block',
    conditions: { s2: 'subj_song', s4: 'pred_block' },
    resultText: '呪われた歌が森を塞いでいる。鼓膜が圧で破れ、耳から垂れた血が首まで流れた。平衡感覚が崩れる。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_song_guard',
    conditions: { s2: 'subj_song', s4: 'pred_guard' },
    resultText: '呪われた歌が森を守っている。操られた手が自分の首を絞め、気道が潰れかけて地面に倒れ込んだ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_song_chase',
    conditions: { s2: 'subj_song', s4: 'pred_chase' },
    resultText: '呪われた歌が森を追いかけてくる。頭蓋の内側で旋律が暴れ、鼻と耳から血が噴き出して膝から崩れ落ちた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_song_gaze',
    conditions: { s2: 'subj_song', s4: 'pred_gaze' },
    resultText: '呪われた歌が森を見つめている。見透かされた瞬間、胸の内側から焼けるような痛みが走り、血を吐いた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_song_hide',
    conditions: { s2: 'subj_song', s4: 'pred_hide' },
    resultText: '呪われた歌が森を隠している。同じ道を何度も踏み、靴が破れて足の裏が切り傷だらけになった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_song_crush',
    conditions: { s2: 'subj_song', s4: 'pred_crush' },
    resultText: '呪われた歌が森を砕いている。裂けた幹から飛んだ木片が腹に刺さり、引き抜いた穴から血が溢れ出した。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_song_flee',
    conditions: { s2: 'subj_song', s4: 'pred_flee' },
    resultText: '呪われた歌が森を逃げていく。頭から離れない歌が、ようやく消えた。静寂が戻る。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_song_flee', name: '残響の欠片', description: '呪いの歌の最後の一音。瓶の中で震えている', sellPrice: 8 }]
  },
  {
    id: 'e03_silence_block',
    conditions: { s2: 'subj_silence', s4: 'pred_block' },
    resultText: '呪われた沈黙が森を塞いでいる。声を絞り出そうとして喉の筋が裂け、血の混じった唾を地面に吐いた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_silence_guard',
    conditions: { s2: 'subj_silence', s4: 'pred_guard' },
    resultText: '呪われた沈黙が森を守っている。触れた途端声が奪われ、呼吸までも詰まり、胸を掻きむしって肌を血だらけにした。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_silence_chase',
    conditions: { s2: 'subj_silence', s4: 'pred_chase' },
    resultText: '呪われた沈黙が森を追いかけてくる。吸った息が肺の中で凍りついたように固まり、胸が張り裂けそうになって膝をついた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_gaze',
    conditions: { s2: 'subj_silence', s4: 'pred_gaze' },
    resultText: '呪われた沈黙が森を見つめている。視線のような圧が胸を潰し、肋の内側から血が滲み出して衣を赤く染めた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_hide',
    conditions: { s2: 'subj_silence', s4: 'pred_hide' },
    resultText: '呪われた沈黙が森を隠している。方角を失って木立にぶつかり、額を裂いて血が目に流れ込んだ。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_silence_crush',
    conditions: { s2: 'subj_silence', s4: 'pred_crush' },
    resultText: '呪われた沈黙が森を砕いている。音なく倒れた巨木が背後から襲い、腰骨が軋んで折れ、呼吸ができなくなった。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e03_silence_crush', name: '無音の木片', description: '叩いても音がしない木の欠片。呪いが染みている', sellPrice: 8 }]
  },
  {
    id: 'e03_silence_flee',
    conditions: { s2: 'subj_silence', s4: 'pred_flee' },
    resultText: '呪われた沈黙が森を逃げていく。音が戻る。鳥の声、風の音、葉擦れ。森が息を吹き返した。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_silence_flee', name: '森の声', description: '鳥と風と葉のざわめきが瓶の中で鳴っている', sellPrice: 12 }]
  },
  {
    id: 'e03_knight_block',
    conditions: { s2: 'subj_knight', s4: 'pred_block' },
    resultText: '呪われた騎士が森を塞いでいる。振り下ろされた黒い剣が肩を深く斬り裂き、腕が一瞬使えなくなった。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_knight_guard',
    conditions: { s2: 'subj_knight', s4: 'pred_guard' },
    resultText: '呪われた騎士が森を守っている。振り抜かれた大剣で胸を浅く斬られ、肋に沿って血の筋が走った。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_knight_chase',
    conditions: { s2: 'subj_knight', s4: 'pred_chase' },
    resultText: '呪われた騎士が森を追いかけてくる。追いつかれた背に剣が突き立ち、切先が腹から突き出た。血を吐く。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_knight_gaze',
    conditions: { s2: 'subj_knight', s4: 'pred_gaze' },
    resultText: '呪われた騎士が森を見つめている。赤い視線に射抜かれた胸が焼けるように痛み、肋の間から血の筋が滲んだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_knight_hide',
    conditions: { s2: 'subj_knight', s4: 'pred_hide' },
    resultText: '呪われた騎士が森を隠している。闇に潜む切先が太腿を掠め、太い血管を裂いて血が溢れ、足がふらついた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_knight_crush',
    conditions: { s2: 'subj_knight', s4: 'pred_crush' },
    resultText: '呪われた騎士が森を砕いている。折れた剣の一振りで胴を横に薙がれ、内臓の一部が露わになって意識が飛んだ。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_knight_flee',
    conditions: { s2: 'subj_knight', s4: 'pred_flee' },
    resultText: '呪われた騎士が森を逃げていく。鎧が軋む音が遠ざかる。呪いが解けたのか、別の主を見つけたのか。',
    damage: 1,
    quill: 7,
    rewardItems: [{ id: 'item_e03_knight_flee', name: '黒鎧の破片', description: '呪われた騎士が落とした鎧の欠片。まだ温かい', sellPrice: 10 }]
  },
  {
    id: 'e03_witch_block',
    conditions: { s2: 'subj_witch', s4: 'pred_block' },
    resultText: '呪われた魔女が森を塞いでいる。投げつけられた呪いが胸で弾け、肺の中を焼くような痛みが広がって血を吐いた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_witch_guard',
    conditions: { s2: 'subj_witch', s4: 'pred_guard' },
    resultText: '呪われた魔女が森を守っている。呪文の一閃で皮膚が背中から腰まで裂け、血が旅装を赤黒く染めた。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_witch_chase',
    conditions: { s2: 'subj_witch', s4: 'pred_chase' },
    resultText: '呪われた魔女が森を追いかけてくる。背中で呪文が破裂し、肩から腰まで火傷を負い、衣が焼け落ちた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_witch_gaze',
    conditions: { s2: 'subj_witch', s4: 'pred_gaze' },
    resultText: '呪われた魔女が森を見つめている。目が合った。蝕まれた瞳の奥から、呪いの残滓がこちらに染み出してくる。',
    damage: 2,
    quill: 7,
    rewardItems: [{ id: 'item_e03_witch_gaze', name: '魔女の片目', description: '呪いに蝕まれた硝子の義眼。覗くと森の真の姿が見える', sellPrice: 12 }]
  },
  {
    id: 'e03_witch_hide',
    conditions: { s2: 'subj_witch', s4: 'pred_hide' },
    resultText: '呪われた魔女が森を隠している。幻術の歪みで平衡感覚を失い、倒木に頭から突っ込んで額を深く裂いた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_witch_crush',
    conditions: { s2: 'subj_witch', s4: 'pred_crush' },
    resultText: '呪われた魔女が森を砕いている。暴発した魔法の余波で吹き飛ばされ、岩に叩きつけられて背骨に亀裂が入った。',
    damage: 5,
    quill: 4
  },
  {
    id: 'e03_witch_flee',
    conditions: { s2: 'subj_witch', s4: 'pred_flee' },
    resultText: '呪われた魔女が森を逃げていく。自分の呪いから逃げている。置き去りにされた呪いが足元に絡みつく。',
    damage: 2,
    quill: 7
  },
  {
    id: 'e03_king_block',
    conditions: { s2: 'subj_king', s4: 'pred_block' },
    resultText: '呪われた王が森を塞いでいる。すり抜けようとした腕を掴まれ、肘から先が金に変わって重みで千切れた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_king_guard',
    conditions: { s2: 'subj_king', s4: 'pred_guard' },
    resultText: '呪われた王が森を守っている。振り払った手が王の指に触れ、指先から手首まで金と化して感覚を失った。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_king_chase',
    conditions: { s2: 'subj_king', s4: 'pred_chase' },
    resultText: '呪われた王が森を追いかけてくる。掠められた脇腹の皮膚が金に変わり、重みで皮膚が裂けて血が溢れた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_king_gaze',
    conditions: { s2: 'subj_king', s4: 'pred_gaze' },
    resultText: '呪われた王が森を見つめている。食事もできない王が、じっと木々を見ている。触れたいが触れられない。',
    damage: 1,
    quill: 8,
    rewardItems: [{ id: 'item_e03_king_gaze', name: '黄金の涙', description: '王が泣いた跡。頬に張り付いた金の雫', sellPrice: 15 }]
  },
  {
    id: 'e03_king_hide',
    conditions: { s2: 'subj_king', s4: 'pred_hide' },
    resultText: '呪われた王が森を隠している。突き抜けようとして金の枝に頬と腕を切られ、金の粉が傷に入り込んで膿み始めた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_king_crush',
    conditions: { s2: 'subj_king', s4: 'pred_crush' },
    resultText: '呪われた王が森を砕いている。降ってきた金塊が肩と脚を直撃し、鎖骨と脛の骨が砕けて動けなくなった。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_king_flee',
    conditions: { s2: 'subj_king', s4: 'pred_flee' },
    resultText: '呪われた王が森を逃げていく。何も触れないように手を上げて走っている。哀れだ。',
    damage: 1,
    quill: 8
  },
  {
    id: 'e03_ghost_block',
    conditions: { s2: 'subj_ghost', s4: 'pred_block' },
    resultText: '呪われた亡霊が森を塞いでいる。泣き声を聞いた途端、胸の内から呪いが這い上がり、血の味が口に広がった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_guard',
    conditions: { s2: 'subj_ghost', s4: 'pred_guard' },
    resultText: '呪われた亡霊が森を守っている。触れた腕から呪いが肌に滲み、黒い筋が肩まで這い上がって皮膚が爛れた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_chase',
    conditions: { s2: 'subj_ghost', s4: 'pred_chase' },
    resultText: '呪われた亡霊が森を追いかけてくる。背中に透けた指が食い込み、胸の内側から骨が軋む痛みが突き上げた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_gaze',
    conditions: { s2: 'subj_ghost', s4: 'pred_gaze' },
    resultText: '呪われた亡霊が森を見つめている。苦しみの目。解放を求めている。だが手を出せない。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e03_ghost_hide',
    conditions: { s2: 'subj_ghost', s4: 'pred_hide' },
    resultText: '呪われた亡霊が森を隠している。靄に飲まれて歩き続けるうちに吐く息が真っ白に変わり、胸の芯が凍える痛みに貫かれた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_crush',
    conditions: { s2: 'subj_ghost', s4: 'pred_crush' },
    resultText: '呪われた亡霊が森を砕いている。倒れた枯れ木の下敷きになり、腰が軋んで折れ、呼吸ごとに痛みが走った。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_ghost_flee',
    conditions: { s2: 'subj_ghost', s4: 'pred_flee' },
    resultText: '呪われた亡霊が森を逃げていく。成仏したのだろうか。森に温かい光が差した。',
    damage: 0,
    quill: 8,
    rewardItems: [{ id: 'item_e03_ghost_flee', name: '成仏の光', description: '亡霊が残した温かい光。手のひらで揺れている', sellPrice: 10 }]
  },
  {
    id: 'e03_mirror_block',
    conditions: { s2: 'subj_mirror', s4: 'pred_block' },
    resultText: '呪われた鏡が森を塞いでいる。中の影に腕を掴まれ、引き摺り込まれかけた肩が脱臼して腕がぶら下がった。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_mirror_guard',
    conditions: { s2: 'subj_mirror', s4: 'pred_guard' },
    resultText: '呪われた鏡が森を守っている。鏡面に顔を近づけた瞬間、引き込む力に顎を割られ、口の中を切って血が垂れた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_mirror_chase',
    conditions: { s2: 'subj_mirror', s4: 'pred_chase' },
    resultText: '呪われた鏡が森を追いかけてくる。振り向き際に鏡面で額を強打し、鏡面は割れず、額だけが裂けて血が目に流れた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_gaze',
    conditions: { s2: 'subj_mirror', s4: 'pred_gaze' },
    resultText: '呪われた鏡が森を見つめている。鏡の中の自分が突然剣を抜き、現実の胸に同じ深さの傷が開いた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_hide',
    conditions: { s2: 'subj_mirror', s4: 'pred_hide' },
    resultText: '呪われた鏡が森を隠している。歪んだ道を信じて進み、崖に踏み出して転落、肩と肋を岩に打ちつけた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_mirror_crush',
    conditions: { s2: 'subj_mirror', s4: 'pred_crush' },
    resultText: '呪われた鏡が森を砕いている。連動して崩れた木々に押し潰され、胸郭が歪んで呼吸ごとに血を吐いた。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_mirror_flee',
    conditions: { s2: 'subj_mirror', s4: 'pred_flee' },
    resultText: '呪われた鏡が森を逃げていく。鏡が割れて破片が散る。映っていた影たちが解放された。',
    damage: 1,
    quill: 7
  },
  {
    id: 'e03_doll_block',
    conditions: { s2: 'subj_doll', s4: 'pred_block' },
    resultText: '呪われた人形が森を塞いでいる。通り過ぎた瞬間に背後から飛びつかれ、細い手が首を絞めて気道が潰れかけた。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_guard',
    conditions: { s2: 'subj_doll', s4: 'pred_guard' },
    resultText: '呪われた人形が森を守っている。泣き声に引き寄せられて覗き込んだ瞬間、針のような指が目元を裂いた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_doll_chase',
    conditions: { s2: 'subj_doll', s4: 'pred_chase' },
    resultText: '呪われた人形が森を追いかけてくる。振り向いた時には脚にしがみつかれ、陶器の歯が脛に深く食い込んだ。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_gaze',
    conditions: { s2: 'subj_doll', s4: 'pred_gaze' },
    resultText: '呪われた人形が森を見つめている。視線を浴びた胸が凍りつくように痺れ、皮膚の下の血管が紫に浮き上がった。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_doll_hide',
    conditions: { s2: 'subj_doll', s4: 'pred_hide' },
    resultText: '呪われた人形が森を隠している。跨ごうとした瞬間、人形が一斉に腕を伸ばし、脛と踝に爪の食い込んだ傷が残った。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_doll_crush',
    conditions: { s2: 'subj_doll', s4: 'pred_crush' },
    resultText: '呪われた人形が森を砕いている。抱擁の呪いを受けた腕が枯れて萎び、肘から先の肉が縄のように痩せ細った。',
    damage: 4,
    quill: 6,
    rewardItems: [{ id: 'item_e03_doll_crush', name: '呪い人形の腕', description: 'もげた腕。まだ指が動いている', sellPrice: 8 }]
  },
  {
    id: 'e03_doll_flee',
    conditions: { s2: 'subj_doll', s4: 'pred_flee' },
    resultText: '呪われた人形が森を逃げていく。振り返ると、木の幹にぶら下がって揺れている。逃げたのではない。待ち伏せだ。背筋が凍る。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_rain_block',
    conditions: { s2: 'subj_rain', s4: 'pred_block' },
    resultText: '呪われた雨が森を塞いでいる。飛び込んだ雨の下で足に根が生え、引き抜くとき足裏の肉が地面に残った。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_rain_guard',
    conditions: { s2: 'subj_rain', s4: 'pred_guard' },
    resultText: '呪われた雨が森を守っている。雨に打たれて脚の感覚が失われ、無理に動かすと膝の皮膚が裂けて血が滲んだ。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_rain_chase',
    conditions: { s2: 'subj_rain', s4: 'pred_chase' },
    resultText: '呪われた雨が森を追いかけてくる。追いつかれた脚に根が食い込み、引き剥がすときふくらはぎの肉が大きく抉れた。',
    damage: 4,
    quill: 5
  },
  {
    id: 'e03_rain_gaze',
    conditions: { s2: 'subj_rain', s4: 'pred_gaze' },
    resultText: '呪われた雨が森を見つめている。視線を浴びた額から血が滴り、気づけば頬に幾筋もの切り傷が刻まれていた。',
    damage: 3,
    quill: 6
  },
  {
    id: 'e03_rain_hide',
    conditions: { s2: 'subj_rain', s4: 'pred_hide' },
    resultText: '呪われた雨が森を隠している。気づけば両脚が根で縫い止められ、引き抜く際に膝から下の皮膚がまとめて剥がれた。',
    damage: 4,
    quill: 6
  },
  {
    id: 'e03_rain_crush',
    conditions: { s2: 'subj_rain', s4: 'pred_crush' },
    resultText: '呪われた雨が森を砕いている。沈む地面に腰まで嵌り、這い上がる間に泥が口に入り、血と混じった泥を吐き続けた。',
    damage: 5,
    quill: 5
  },
  {
    id: 'e03_rain_flee',
    conditions: { s2: 'subj_rain', s4: 'pred_flee' },
    resultText: '呪われた雨が森を逃げていく。雨が止んだ。足に生えかけた根が枯れた。',
    damage: 0,
    quill: 7,
    rewardItems: [{ id: 'item_e03_rain_flee', name: '呪雨の苗', description: '足に生えかけた根の残り。まだ湿っている', sellPrice: 8 }]
  },

  // --- 待っている (pred_wait) ---
  {
    id: 'e03_kitten_wait',
    conditions: { s2: 'subj_kitten', s4: 'pred_wait' },
    resultText: '呪われた子猫が森を待っている。木の根元に丸くなって、拾った者を捨てられなくする猫が誰かを待っている。目が合うと鳴いた。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e03_snake_wait',
    conditions: { s2: 'subj_snake', s4: 'pred_wait' },
    resultText: '呪われた蛇が森を待っている。待ち構えていた牙が足首に食い込み、引き剥がすとき踵の腱が切れた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_dragon_wait',
    conditions: { s2: 'subj_dragon', s4: 'pred_wait' },
    resultText: '呪われた竜が森を待っている。躍り出た爪が胴を横に薙ぎ、肋が裂けて臓腑が覗くほどの深手を負った。',
    damage: 5,
    quill: 3
  },
  {
    id: 'e03_butterfly_wait',
    conditions: { s2: 'subj_butterfly', s4: 'pred_wait' },
    resultText: '呪われた蝶が森を待っている。追えば迷子になる蝶が、木漏れ日の中でゆらゆら舞っている。ついていかなければ害はない。',
    damage: 0,
    quill: 5
  },
  {
    id: 'e03_wind_wait',
    conditions: { s2: 'subj_wind', s4: 'pred_wait' },
    resultText: '呪われた風が森を待っている。奥へ進んだ途端に突風が吹き、飛んできた枝が脇腹に刺さった。血が滲んで止まらない。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_flame_wait',
    conditions: { s2: 'subj_flame', s4: 'pred_wait' },
    resultText: '呪われた炎が森を待っている。踏んだ瞬間、靴が燃え、足の甲から脛まで皮膚が炎に炙られて縮んだ。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_ice_wait',
    conditions: { s2: 'subj_ice', s4: 'pred_wait' },
    resultText: '呪われた氷が森を待っている。滑った足が氷に突き刺さり、ふくらはぎの肉が切り裂かれて血で氷が赤く染まった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'e03_shadow_wait',
    conditions: { s2: 'subj_shadow', s4: 'pred_wait' },
    resultText: '呪われた影が森を待っている。踏み込んだ足首が影に飲まれ、引き抜いた時には足の指三本が黒く失われていた。',
    damage: 4,
    quill: 4
  },
  {
    id: 'e03_song_wait',
    conditions: { s2: 'subj_song', s4: 'pred_wait' },
    resultText: '呪われた歌が森を待っている。頭から離れない旋律が、梢の間からかすかに聞こえる。一節聴いただけで頭痛が走った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_silence_wait',
    conditions: { s2: 'subj_silence', s4: 'pred_wait' },
    resultText: '呪われた沈黙が森を待っている。喉が塞がれたまま息を吸おうとして、気管が裂けて血の泡を吐いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_knight_wait',
    conditions: { s2: 'subj_knight', s4: 'pred_wait' },
    resultText: '呪われた騎士が森を待っている。闇から伸びた剣が脇腹を深く抉り、旅装が血で張り付いて動かせなくなった。',
    damage: 4,
    quill: 3
  },
  {
    id: 'e03_witch_wait',
    conditions: { s2: 'subj_witch', s4: 'pred_wait' },
    resultText: '呪われた魔女が森を待っている。自分の呪いに蝕まれた魔女が、切り株に腰掛けて旅人を待っている。取引を持ちかけてくるだろう。',
    damage: 1,
    quill: 5,
    rewardItems: [{ id: 'item_e03_witch_wait', name: '呪いの触媒', description: '魔女が取引の礼に渡した小瓶。中身は動いている', sellPrice: 12 }]
  },
  {
    id: 'e03_king_wait',
    conditions: { s2: 'subj_king', s4: 'pred_wait' },
    resultText: '呪われた王が森を待っている。立ち上がり様に指先を掴まれ、腕が肘まで金と化して重みで垂れ下がった。',
    damage: 3,
    quill: 5
  },
  {
    id: 'e03_ghost_wait',
    conditions: { s2: 'subj_ghost', s4: 'pred_wait' },
    resultText: '呪われた亡霊が森を待っている。呪いに縛られた霊が、古い道標の前に佇んでいる。示す方角に従って歩き、同じ場所に戻ってきた。体力だけが減る。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_mirror_wait',
    conditions: { s2: 'subj_mirror', s4: 'pred_wait' },
    resultText: '呪われた鏡が森を待っている。気づかず踏んだ破片が足裏を貫き、鏡面に映った自分が嗤う中、靴を血で満たして歩いた。',
    damage: 3,
    quill: 4
  },
  {
    id: 'e03_doll_wait',
    conditions: { s2: 'subj_doll', s4: 'pred_wait' },
    resultText: '呪われた人形が森を待っている。夜に動く人形が、昼の森で枝に腰掛けている。首がゆっくりこちらを向いた。まだ昼なのに。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_rain_wait',
    conditions: { s2: 'subj_rain', s4: 'pred_wait' },
    resultText: '呪われた雨が森を待っている。浴びると動けなくなる雨雲が、樹冠の上で垂れ込めている。一滴が肩に落ち、足が一瞬止まった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_kitten_shine',
    conditions: { s2: 'subj_kitten', s4: 'pred_shine' },
    resultText: '呪われた子猫が森を輝く。無数の同じ顔の猫が、森の下草に燐光を撒き散らしている。踏まないように歩くと、光が道の形になって先へと伸びた。',
    damage: 0,
    quill: 6
  },
  {
    id: 'e03_snake_shine',
    conditions: { s2: 'subj_snake', s4: 'pred_shine' },
    resultText: '呪われた蛇が森を輝く。巨大な蛇の鱗が木漏れ日を集めて反射し、森の奥深くまで光の筋が走る。進むべき道を示しているのか、罠か、判断がつかない。',
    damage: 1,
    quill: 5
  },
  {
    id: 'e03_dragon_shine',
    conditions: { s2: 'subj_dragon', s4: 'pred_shine' },
    resultText: '呪われた竜が森を輝く。理性を失った竜の息が木々を燃やし、森が松明のような光の柱を次々に立てていく。走って逃げる間も背後が明るかった。',
    damage: 3,
    quill: 3
  },
  {
    id: 'e03_butterfly_shine',
    conditions: { s2: 'subj_butterfly', s4: 'pred_shine' },
    resultText: '呪われた蝶が森を輝く。追いかけると迷子になる蝶の鱗粉が、森の空気そのものを淡い虹色に染めた。進むほどに方向感覚が狂っていく。',
    damage: 2,
    quill: 6
  },
  {
    id: 'e03_wind_shine',
    conditions: { s2: 'subj_wind', s4: 'pred_shine' },
    resultText: '呪われた風が森を輝く。帰り道を忘れさせる風が葉叢を揺らすたびに、葉の裏が光を放つ。森じゅうの木が同時にまばたきをしているように見えた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_flame_shine',
    conditions: { s2: 'subj_flame', s4: 'pred_shine' },
    resultText: '呪われた炎が森を輝く。樹皮に貼り付いた火が消えず、燃え尽きず、ただ光り続ける。触れようとした手の毛が焦げた。',
    damage: 3,
    quill: 3
  },
  {
    id: 'e03_ice_shine',
    conditions: { s2: 'subj_ice', s4: 'pred_shine' },
    resultText: '呪われた氷が森を輝く。木々を包んだ氷柱がプリズムになって森に虹を散らす。息を呑むほど美しい。足元の氷にヒビを見つけて慎重に進んだ。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_shadow_shine',
    conditions: { s2: 'subj_shadow', s4: 'pred_shine' },
    resultText: '呪われた影が森を輝く。木の影が反転し、光の代わりに黒を放っている。闇だらけの森の中で、自分の影だけが白く浮かび上がった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_song_shine',
    conditions: { s2: 'subj_song', s4: 'pred_shine' },
    resultText: '呪われた歌が森を輝く。忘れられない旋律が音のまま光に変わり、森の枝葉の間を縫って流れる。耳を塞いでも光は目に届いた。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_silence_shine',
    conditions: { s2: 'subj_silence', s4: 'pred_shine' },
    resultText: '呪われた沈黙が森を輝く。鳥の声も虫の音もない森で、奪われた音たちが淡い光になって浮遊している。光を握りしめると冷たかった。',
    damage: 1,
    quill: 6
  },
  {
    id: 'e03_knight_shine',
    conditions: { s2: 'subj_knight', s4: 'pred_shine' },
    resultText: '呪われた騎士が森を輝く。霊騎士の鎧が森の奥でぼうと発光している。光に近づいたが、触れた途端に鎧は消え、あとに冷たい空気だけが残った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_witch_shine',
    conditions: { s2: 'subj_witch', s4: 'pred_shine' },
    resultText: '呪われた魔女が森を輝く。自らの呪いを灯にして魔女が森の真ん中で祭壇を築いている。光の輪に入ると意識が遠のく。輪の外を回って抜けた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_king_shine',
    conditions: { s2: 'subj_king', s4: 'pred_shine' },
    resultText: '呪われた王が森を輝く。廃王の亡骸が森の奥で朽ちかけながら、まだ金色に燃えている。王冠の光に魅せられた獣たちが周りに伏していた。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_ghost_shine',
    conditions: { s2: 'subj_ghost', s4: 'pred_shine' },
    resultText: '呪われた亡霊が森を輝く。成仏できぬ霊が木々の間を青白い燐光となって漂う。光を避けて歩いたが、冷気で指先の感覚が鈍った。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_mirror_shine',
    conditions: { s2: 'subj_mirror', s4: 'pred_shine' },
    resultText: '呪われた鏡が森を輝く。木の幹に嵌め込まれた鏡たちが互いを映し合い、森の奥まで光の回廊を作る。歩いていくと鏡の中に自分が増えていった。',
    damage: 2,
    quill: 5
  },
  {
    id: 'e03_doll_shine',
    conditions: { s2: 'subj_doll', s4: 'pred_shine' },
    resultText: '呪われた人形が森を輝く。夜に動く人形たちが枝々に吊るされ、今はガラスの瞳だけを光らせている。光を手がかりに進むと、瞳はすべて同じ方向を見ていた。',
    damage: 2,
    quill: 5,
    rewardItems: [{ id: 'item_e03_doll_shine', name: '人形のまなこ', description: 'ガラスでできた目玉。暗闇で淡く光り、見られている気がする', sellPrice: 8 }]
  },
  {
    id: 'e03_rain_shine',
    conditions: { s2: 'subj_rain', s4: 'pred_shine' },
    resultText: '呪われた雨が森を輝く。動けなくなる雨粒が樹冠の上で発光しながら停滞している。雨の下を抜けるとき、光の粒が肩に触れて一拍だけ足が止まった。',
    damage: 1,
    quill: 6
  },
];
