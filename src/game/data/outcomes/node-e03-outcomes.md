# ノードE03「呪いの森」Outcome一覧

- **文構成**: 呪われた[subj*]が 森を [pred*]
- **可変スロット**: subj(初期: 影/subj_shadow) + pred(初期: 隠している/pred_hide)
- **固定**: 修飾語「呪われた」(mod_cursed) + 目的語「森」(を格)
- **ノードの文脈**: 呪いに蝕まれた森。呪われた何かが森を支配している
- **nodeType**: elite
- **を格有効述語(7)**: 塞いでいる, 守っている, 追いかけてくる, 見つめている, 隠している, 砕く, 逃げていく
- **格歪み(10)**: 眠っている, 絡みついている, 降り注いでいる, 囁いている, 待っている, 溶けている, 歌っている, 踊っている, 笑っている, 輝く → defaultOutcome
- **有効パターン**: 17 subj × 7 pred = 119

---

- **defaultOutcome**:
  - text: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
  - damage: 4
  - quill: 0

---

## 子猫

### 子猫 × 塞いでいる
- **ID**: e03_kitten_block
- **conditions**: { s1: 'subj_kitten', s2: 'pred_block' }
- **text**: 呪われた子猫が森を塞いでいる。拾った者が捨てられなくなる猫が、森の入口に座っている。通ると背中に乗ってきた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 子猫 × 守っている
- **ID**: e03_kitten_guard
- **conditions**: { s1: 'subj_kitten', s2: 'pred_guard' }
- **text**: 呪われた子猫が森を守っている。この猫を拾うと捨てられない。森ごと持ち帰ることになる。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 子猫 × 追いかけてくる
- **ID**: e03_kitten_chase
- **conditions**: { s1: 'subj_kitten', s2: 'pred_chase' }
- **text**: 呪われた子猫が森を追いかけてくる。どこに逃げても戻ってくる。捨てられない猫だ。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 子猫 × 見つめている
- **ID**: e03_kitten_gaze
- **conditions**: { s1: 'subj_kitten', s2: 'pred_gaze' }
- **text**: 呪われた子猫が森を見つめている。どこに置いても戻ってくる猫が、じっと森を見ている。何が見えるのだろう。
- **damage**: 1
- **quill**: 6
- **reward**: なし

### 子猫 × 隠している（初期値系）
- **ID**: e03_kitten_hide
- **conditions**: { s1: 'subj_kitten', s2: 'pred_hide' }
- **text**: 呪われた子猫が森を隠している。猫が通った跡が消え、道が見えなくなる。迷い込んだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 子猫 × 砕く
- **ID**: e03_kitten_crush
- **conditions**: { s1: 'subj_kitten', s2: 'pred_crush' }
- **text**: 呪われた子猫が森を砕いている。猫が歩くたびに木が枯れ、地面がひび割れる。呪いの力だ。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 子猫 × 逃げていく
- **ID**: e03_kitten_flee
- **conditions**: { s1: 'subj_kitten', s2: 'pred_flee' }
- **text**: 呪われた子猫が森を逃げていく。捨てられない猫が自分から去る。何かもっと恐ろしいものがいる。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '呪い猫の毛', description: '触ると指に張り付く。捨てられない', sellPrice: 8 }

---

## 蛇

### 蛇 × 塞いでいる
- **ID**: e03_snake_block
- **conditions**: { s1: 'subj_snake', s2: 'pred_block' }
- **text**: 呪われた蛇が森を塞いでいる。脱皮するたびに大きくなる蛇。もう道幅いっぱいに広がっている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 蛇 × 守っている
- **ID**: e03_snake_guard
- **conditions**: { s1: 'subj_snake', s2: 'pred_guard' }
- **text**: 呪われた蛇が森を守っている。脱皮するたびに大きくなる。この森に入る者はいない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 蛇 × 追いかけてくる
- **ID**: e03_snake_chase
- **conditions**: { s1: 'subj_snake', s2: 'pred_chase' }
- **text**: 呪われた蛇が森を追いかけてくる。脱皮するたびに大きくなり、速くなる。逃げ切れるか。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 蛇 × 見つめている
- **ID**: e03_snake_gaze
- **conditions**: { s1: 'subj_snake', s2: 'pred_gaze' }
- **text**: 呪われた蛇が森を見つめている。脱皮するたびに大きくなる蛇が、木の上からこちらを見下ろしている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蛇 × 隠している
- **ID**: e03_snake_hide
- **conditions**: { s1: 'subj_snake', s2: 'pred_hide' }
- **text**: 呪われた蛇が森を隠している。巨大な蛇が木々に巻きつき、森の奥を見せない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蛇 × 砕く
- **ID**: e03_snake_crush
- **conditions**: { s1: 'subj_snake', s2: 'pred_crush' }
- **text**: 呪われた蛇が森を砕いている。木を締め上げてへし折る。森が蛇の力で崩壊していく。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 蛇 × 逃げていく
- **ID**: e03_snake_flee
- **conditions**: { s1: 'subj_snake', s2: 'pred_flee' }
- **text**: 呪われた蛇が森を逃げていく。脱皮の殻を残して去った。殻が道を覆っている。
- **damage**: 1
- **quill**: 6
- **reward**: { name: '呪蛇の脱殻', description: '脱皮のたびに大きくなる蛇の抜け殻。まだ成長している', sellPrice: 10 }

---

## 竜

### 竜 × 塞いでいる
- **ID**: e03_dragon_block
- **conditions**: { s1: 'subj_dragon', s2: 'pred_block' }
- **text**: 呪われた竜が森を塞いでいる。暴走した守護竜が森の入口に座り込んでいる。目に理性がない。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 竜 × 守っている
- **ID**: e03_dragon_guard
- **conditions**: { s1: 'subj_dragon', s2: 'pred_guard' }
- **text**: 呪われた竜が森を守っている。暴走した守護竜。守っているのか破壊しているのかわからない。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 竜 × 追いかけてくる
- **ID**: e03_dragon_chase
- **conditions**: { s1: 'subj_dragon', s2: 'pred_chase' }
- **text**: 呪われた竜が森を追いかけてくる。木々を薙ぎ倒しながら迫る。逃げるしかない。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 竜 × 見つめている
- **ID**: e03_dragon_gaze
- **conditions**: { s1: 'subj_dragon', s2: 'pred_gaze' }
- **text**: 呪われた竜が森を見つめている。目に理性がない。しかし動かない。呪いに縛られているのだ。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 竜 × 隠している
- **ID**: e03_dragon_hide
- **conditions**: { s1: 'subj_dragon', s2: 'pred_hide' }
- **text**: 呪われた竜が森を隠している。翼を広げて森全体を覆い隠す。中で何が起きているかわからない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 竜 × 砕く
- **ID**: e03_dragon_crush
- **conditions**: { s1: 'subj_dragon', s2: 'pred_crush' }
- **text**: 呪われた竜が森を砕いている。暴走した竜が木々を薙ぎ倒す。森が消滅しつつある。
- **damage**: 5
- **quill**: 3
- **reward**: なし

### 竜 × 逃げていく
- **ID**: e03_dragon_flee
- **conditions**: { s1: 'subj_dragon', s2: 'pred_flee' }
- **text**: 呪われた竜が森を逃げていく。暴走した竜が何かから逃げている。竜が恐れるものとは何だ。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '暴竜の鱗', description: '呪いに蝕まれた黒い鱗。熱い', sellPrice: 15 }

---

## 蝶

### 蝶 × 塞いでいる
- **ID**: e03_butterfly_block
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_block' }
- **text**: 呪われた蝶が森を塞いでいる。追いかけると迷子になる蝶の群れが、道を覆っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蝶 × 守っている
- **ID**: e03_butterfly_guard
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_guard' }
- **text**: 呪われた蝶が森を守っている。近づく者を迷わせる。蝶に導かれて同じ場所を回り続けた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蝶 × 追いかけてくる
- **ID**: e03_butterfly_chase
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_chase' }
- **text**: 呪われた蝶が森を追いかけてくる。追いかけると迷子になるが、追いかけてくる蝶も迷わせる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蝶 × 見つめている
- **ID**: e03_butterfly_gaze
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_gaze' }
- **text**: 呪われた蝶が森を見つめている。羽の模様が目のように開閉する。森全体が監視されている。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 蝶 × 隠している
- **ID**: e03_butterfly_hide
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_hide' }
- **text**: 呪われた蝶が森を隠している。群れが視界を覆い、道が見えない。蝶が晴れるまで動けない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 蝶 × 砕く
- **ID**: e03_butterfly_crush
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_crush' }
- **text**: 呪われた蝶が森を砕いている。蝶が止まった木から順に朽ちていく。鱗粉が呪いを撒いている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 蝶 × 逃げていく
- **ID**: e03_butterfly_flee
- **conditions**: { s1: 'subj_butterfly', s2: 'pred_flee' }
- **text**: 呪われた蝶が森を逃げていく。追いかけると迷子になる蝶が自分から去る。道が開けた。
- **damage**: 1
- **quill**: 6
- **reward**: なし

---

## 風

### 風 × 塞いでいる
- **ID**: e03_wind_block
- **conditions**: { s1: 'subj_wind', s2: 'pred_block' }
- **text**: 呪われた風が森を塞いでいる。吹かれると帰り道を忘れる。森の入口で立ち止まった。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 風 × 守っている
- **ID**: e03_wind_guard
- **conditions**: { s1: 'subj_wind', s2: 'pred_guard' }
- **text**: 呪われた風が森を守っている。帰り道を忘れさせる風が、侵入者を森に閉じ込める。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 風 × 追いかけてくる
- **ID**: e03_wind_chase
- **conditions**: { s1: 'subj_wind', s2: 'pred_chase' }
- **text**: 呪われた風が森を追いかけてくる。逃げても風に追いつかれる。方角がわからなくなった。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 風 × 見つめている
- **ID**: e03_wind_gaze
- **conditions**: { s1: 'subj_wind', s2: 'pred_gaze' }
- **text**: 呪われた風が森を見つめている。風に意志がある。木々の隙間から、じっとこちらを見ている。
- **damage**: 2
- **quill**: 6
- **reward**: なし

### 風 × 隠している
- **ID**: e03_wind_hide
- **conditions**: { s1: 'subj_wind', s2: 'pred_hide' }
- **text**: 呪われた風が森を隠している。帰り道を忘れさせる風が、森自体を霧に包んでいる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 風 × 砕く
- **ID**: e03_wind_crush
- **conditions**: { s1: 'subj_wind', s2: 'pred_crush' }
- **text**: 呪われた風が森を砕いている。帰り道を忘れさせるだけでなく、木々をへし折る暴風。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 風 × 逃げていく
- **ID**: e03_wind_flee
- **conditions**: { s1: 'subj_wind', s2: 'pred_flee' }
- **text**: 呪われた風が森を逃げていく。帰り道を忘れさせる風が去った。記憶が戻る。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '忘れられた方角', description: '風が落としていった記憶の欠片。北がわかる', sellPrice: 8 }

---

## 炎

### 炎 × 塞いでいる
- **ID**: e03_flame_block
- **conditions**: { s1: 'subj_flame', s2: 'pred_block' }
- **text**: 呪われた炎が森を塞いでいる。燃やしたものの形を覚える炎が、森の入口で壁を作っている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 炎 × 守っている
- **ID**: e03_flame_guard
- **conditions**: { s1: 'subj_flame', s2: 'pred_guard' }
- **text**: 呪われた炎が森を守っている。炎の中にかつての侵入者たちの姿が見える。記憶する番人だ。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 炎 × 追いかけてくる
- **ID**: e03_flame_chase
- **conditions**: { s1: 'subj_flame', s2: 'pred_chase' }
- **text**: 呪われた炎が森を追いかけてくる。逃げた跡を覚えて追ってくる。同じ道を二度使えない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 炎 × 見つめている
- **ID**: e03_flame_gaze
- **conditions**: { s1: 'subj_flame', s2: 'pred_gaze' }
- **text**: 呪われた炎が森を見つめている。炎の中にこちらの顔が映っている。記憶された。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 炎 × 隠している
- **ID**: e03_flame_hide
- **conditions**: { s1: 'subj_flame', s2: 'pred_hide' }
- **text**: 呪われた炎が森を隠している。煙で視界を奪い、炎の壁で森を覆う。中に何があるかわからない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 炎 × 砕く
- **ID**: e03_flame_crush
- **conditions**: { s1: 'subj_flame', s2: 'pred_crush' }
- **text**: 呪われた炎が森を砕いている。燃やしたものの形を覚えながら、森を灰に変えていく。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 炎 × 逃げていく
- **ID**: e03_flame_flee
- **conditions**: { s1: 'subj_flame', s2: 'pred_flee' }
- **text**: 呪われた炎が森を逃げていく。記憶する炎が去った跡に、焦げた形だけが残っている。
- **damage**: 2
- **quill**: 6
- **reward**: なし

---

## 氷

### 氷 × 塞いでいる
- **ID**: e03_ice_block
- **conditions**: { s1: 'subj_ice', s2: 'pred_block' }
- **text**: 呪われた氷が森を塞いでいる。溶けない氷が道を覆っている。永遠の冬が広がっている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 氷 × 守っている
- **ID**: e03_ice_guard
- **conditions**: { s1: 'subj_ice', s2: 'pred_guard' }
- **text**: 呪われた氷が森を守っている。触れたものを凍らせる伝染する氷。森に手を出す者はいない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 氷 × 追いかけてくる
- **ID**: e03_ice_chase
- **conditions**: { s1: 'subj_ice', s2: 'pred_chase' }
- **text**: 呪われた氷が森を追いかけてくる。踏んだ地面が凍る。逃げるほど氷が広がる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 氷 × 見つめている
- **ID**: e03_ice_gaze
- **conditions**: { s1: 'subj_ice', s2: 'pred_gaze' }
- **text**: 呪われた氷が森を見つめている。氷の中に何かの目がある。じっとこちらを見ている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 氷 × 隠している
- **ID**: e03_ice_hide
- **conditions**: { s1: 'subj_ice', s2: 'pred_hide' }
- **text**: 呪われた氷が森を隠している。木々が氷に覆われ、道も森も見えない。白い世界だ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 氷 × 砕く
- **ID**: e03_ice_crush
- **conditions**: { s1: 'subj_ice', s2: 'pred_crush' }
- **text**: 呪われた氷が森を砕いている。凍った木が次々と砕け散る。森が消滅しつつある。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 氷 × 逃げていく
- **ID**: e03_ice_flee
- **conditions**: { s1: 'subj_ice', s2: 'pred_flee' }
- **text**: 呪われた氷が森を逃げていく。溶けない氷が溶けていく。呪いが解けたのだ。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '解呪の雫', description: '呪いの氷が溶けた水。不思議と温かい', sellPrice: 12 }

---

## 影

### 影 × 塞いでいる
- **ID**: e03_shadow_block
- **conditions**: { s1: 'subj_shadow', s2: 'pred_block' }
- **text**: 呪われた影が森を塞いでいる。影に触れたものが影になる。道が黒く塗りつぶされている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 影 × 守っている
- **ID**: e03_shadow_guard
- **conditions**: { s1: 'subj_shadow', s2: 'pred_guard' }
- **text**: 呪われた影が森を守っている。触れたものを影に変える。森に入った者は二度と出られない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 影 × 追いかけてくる
- **ID**: e03_shadow_chase
- **conditions**: { s1: 'subj_shadow', s2: 'pred_chase' }
- **text**: 呪われた影が森を追いかけてくる。逃げても影は速い。触れられたら影になる。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 影 × 見つめている
- **ID**: e03_shadow_gaze
- **conditions**: { s1: 'subj_shadow', s2: 'pred_gaze' }
- **text**: 呪われた影が森を見つめている。木々の影が全て一つの方向を向いている。こちらを見ている。
- **damage**: 3
- **quill**: 6
- **reward**: { name: '影の視線', description: '瓶の中で揺れる黒い光。覗かれている気がする', sellPrice: 10 }

### 影 × 隠している（初期値）
- **ID**: e03_shadow_hide
- **conditions**: { s1: 'subj_shadow', s2: 'pred_hide' }
- **text**: 呪われた影が森を隠している。影が森を覆い、光が届かない。道が見えない。闇の中を手探りで進む。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 影 × 砕く
- **ID**: e03_shadow_crush
- **conditions**: { s1: 'subj_shadow', s2: 'pred_crush' }
- **text**: 呪われた影が森を砕いている。影に触れた木が影に変わり、崩れる。森が闇に飲まれていく。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 影 × 逃げていく
- **ID**: e03_shadow_flee
- **conditions**: { s1: 'subj_shadow', s2: 'pred_flee' }
- **text**: 呪われた影が森を逃げていく。影が去ると光が戻る。森に色が戻った。
- **damage**: 0
- **quill**: 7
- **reward**: なし

---

## 歌

### 歌 × 塞いでいる
- **ID**: e03_song_block
- **conditions**: { s1: 'subj_song', s2: 'pred_block' }
- **text**: 呪われた歌が森を塞いでいる。一度聴くと頭から離れない歌が、壁のように森の入口に響いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 歌 × 守っている
- **ID**: e03_song_guard
- **conditions**: { s1: 'subj_song', s2: 'pred_guard' }
- **text**: 呪われた歌が森を守っている。聴いた者を操る旋律。足が勝手に引き返す。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 歌 × 追いかけてくる
- **ID**: e03_song_chase
- **conditions**: { s1: 'subj_song', s2: 'pred_chase' }
- **text**: 呪われた歌が森を追いかけてくる。逃げても歌は頭の中にある。正気が削れる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 歌 × 見つめている
- **ID**: e03_song_gaze
- **conditions**: { s1: 'subj_song', s2: 'pred_gaze' }
- **text**: 呪われた歌が森を見つめている。歌に目はない。だが聴いていると見透かされている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 歌 × 隠している
- **ID**: e03_song_hide
- **conditions**: { s1: 'subj_song', s2: 'pred_hide' }
- **text**: 呪われた歌が森を隠している。旋律が方向感覚を狂わせる。森の中で同じ場所を回り続けた。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 歌 × 砕く
- **ID**: e03_song_crush
- **conditions**: { s1: 'subj_song', s2: 'pred_crush' }
- **text**: 呪われた歌が森を砕いている。金切り声が木々を震わせ、幹が裂ける。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 歌 × 逃げていく
- **ID**: e03_song_flee
- **conditions**: { s1: 'subj_song', s2: 'pred_flee' }
- **text**: 呪われた歌が森を逃げていく。頭から離れない歌が、ようやく消えた。静寂が戻る。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '残響の欠片', description: '呪いの歌の最後の一音。瓶の中で震えている', sellPrice: 8 }

---

## 沈黙

### 沈黙 × 塞いでいる
- **ID**: e03_silence_block
- **conditions**: { s1: 'subj_silence', s2: 'pred_block' }
- **text**: 呪われた沈黙が森を塞いでいる。声を奪う沈黙が壁のように立ちはだかる。助けも呼べない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 沈黙 × 守っている
- **ID**: e03_silence_guard
- **conditions**: { s1: 'subj_silence', s2: 'pred_guard' }
- **text**: 呪われた沈黙が森を守っている。触れた者も黙らせる。森は永遠に静かだ。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 沈黙 × 追いかけてくる
- **ID**: e03_silence_chase
- **conditions**: { s1: 'subj_silence', s2: 'pred_chase' }
- **text**: 呪われた沈黙が森を追いかけてくる。背後から音が消えていく。振り返ると世界が無音だ。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 沈黙 × 見つめている
- **ID**: e03_silence_gaze
- **conditions**: { s1: 'subj_silence', s2: 'pred_gaze' }
- **text**: 呪われた沈黙が森を見つめている。音がない。だが圧力がある。森が押し黙って見ている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 沈黙 × 隠している
- **ID**: e03_silence_hide
- **conditions**: { s1: 'subj_silence', s2: 'pred_hide' }
- **text**: 呪われた沈黙が森を隠している。音が消え、方角もわからない。無音の森は地図に載らない。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 沈黙 × 砕く
- **ID**: e03_silence_crush
- **conditions**: { s1: 'subj_silence', s2: 'pred_crush' }
- **text**: 呪われた沈黙が森を砕いている。音を奪われた木々が、声なく倒れていく。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '無音の木片', description: '叩いても音がしない木の欠片。呪いが染みている', sellPrice: 8 }

### 沈黙 × 逃げていく
- **ID**: e03_silence_flee
- **conditions**: { s1: 'subj_silence', s2: 'pred_flee' }
- **text**: 呪われた沈黙が森を逃げていく。音が戻る。鳥の声、風の音、葉擦れ。森が息を吹き返した。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '森の声', description: '鳥と風と葉のざわめきが瓶の中で鳴っている', sellPrice: 12 }

---

## 騎士

### 騎士 × 塞いでいる
- **ID**: e03_knight_block
- **conditions**: { s1: 'subj_knight', s2: 'pred_block' }
- **text**: 呪われた騎士が森を塞いでいる。黒い鎧の騎士。兜の奥の目が赤く光る。通さない。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 騎士 × 守っている
- **ID**: e03_knight_guard
- **conditions**: { s1: 'subj_knight', s2: 'pred_guard' }
- **text**: 呪われた騎士が森を守っている。呪いで鎧から出られない騎士が、森の番人を強いられている。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 騎士 × 追いかけてくる
- **ID**: e03_knight_chase
- **conditions**: { s1: 'subj_knight', s2: 'pred_chase' }
- **text**: 呪われた騎士が森を追いかけてくる。鎧が軋む音が背後から迫る。目が赤い。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 騎士 × 見つめている
- **ID**: e03_knight_gaze
- **conditions**: { s1: 'subj_knight', s2: 'pred_gaze' }
- **text**: 呪われた騎士が森を見つめている。兜の隙間から赤い光。動かないが、ずっとこちらを見ている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 騎士 × 隠している
- **ID**: e03_knight_hide
- **conditions**: { s1: 'subj_knight', s2: 'pred_hide' }
- **text**: 呪われた騎士が森を隠している。騎士の立つ場所から先が見えない。黒い鎧が闇を纏っている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 騎士 × 砕く
- **ID**: e03_knight_crush
- **conditions**: { s1: 'subj_knight', s2: 'pred_crush' }
- **text**: 呪われた騎士が森を砕いている。折れた剣で木を薙ぎ倒す。破壊だけが残った忠誠。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 騎士 × 逃げていく
- **ID**: e03_knight_flee
- **conditions**: { s1: 'subj_knight', s2: 'pred_flee' }
- **text**: 呪われた騎士が森を逃げていく。鎧が軋む音が遠ざかる。呪いが解けたのか、別の主を見つけたのか。
- **damage**: 1
- **quill**: 7
- **reward**: { name: '黒鎧の破片', description: '呪われた騎士が落とした鎧の欠片。まだ温かい', sellPrice: 10 }

---

## 魔女

### 魔女 × 塞いでいる
- **ID**: e03_witch_block
- **conditions**: { s1: 'subj_witch', s2: 'pred_block' }
- **text**: 呪われた魔女が森を塞いでいる。自分の呪いに蝕まれた魔女が道に立っている。体の一部が変異している。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 魔女 × 守っている
- **ID**: e03_witch_guard
- **conditions**: { s1: 'subj_witch', s2: 'pred_guard' }
- **text**: 呪われた魔女が森を守っている。この呪いの森は彼女が作った。自分の呪いに蝕まれながらも守っている。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 魔女 × 追いかけてくる
- **ID**: e03_witch_chase
- **conditions**: { s1: 'subj_witch', s2: 'pred_chase' }
- **text**: 呪われた魔女が森を追いかけてくる。途切れ途切れの呪文が背後から迫る。何が飛んでくるかわからない。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 魔女 × 見つめている
- **ID**: e03_witch_gaze
- **conditions**: { s1: 'subj_witch', s2: 'pred_gaze' }
- **text**: 呪われた魔女が森を見つめている。自分の呪いに蝕まれた目で、森の行く末を見ている。
- **damage**: 2
- **quill**: 7
- **reward**: { name: '魔女の片目', description: '呪いに蝕まれた硝子の義眼。覗くと森の真の姿が見える', sellPrice: 12 }

### 魔女 × 隠している
- **ID**: e03_witch_hide
- **conditions**: { s1: 'subj_witch', s2: 'pred_hide' }
- **text**: 呪われた魔女が森を隠している。幻術で森を覆い隠す。呪いで術が暴走し、森ごと消えかけている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 魔女 × 砕く
- **ID**: e03_witch_crush
- **conditions**: { s1: 'subj_witch', s2: 'pred_crush' }
- **text**: 呪われた魔女が森を砕いている。暴走した魔法が木々を薙ぎ倒す。制御できていない。
- **damage**: 5
- **quill**: 4
- **reward**: なし

### 魔女 × 逃げていく
- **ID**: e03_witch_flee
- **conditions**: { s1: 'subj_witch', s2: 'pred_flee' }
- **text**: 呪われた魔女が森を逃げていく。自分の呪いから逃げている。呪いだけが森に残った。
- **damage**: 2
- **quill**: 7
- **reward**: なし

---

## 王

### 王 × 塞いでいる
- **ID**: e03_king_block
- **conditions**: { s1: 'subj_king', s2: 'pred_block' }
- **text**: 呪われた王が森を塞いでいる。触れたものが金になる王が、金の木の前に座っている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 王 × 守っている
- **ID**: e03_king_guard
- **conditions**: { s1: 'subj_king', s2: 'pred_guard' }
- **text**: 呪われた王が森を守っている。触れたものが金になる。森が金に変わっていく。守っているのか、殺しているのか。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 王 × 追いかけてくる
- **ID**: e03_king_chase
- **conditions**: { s1: 'subj_king', s2: 'pred_chase' }
- **text**: 呪われた王が森を追いかけてくる。触れられたら金になる。走った。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 王 × 見つめている
- **ID**: e03_king_gaze
- **conditions**: { s1: 'subj_king', s2: 'pred_gaze' }
- **text**: 呪われた王が森を見つめている。食事もできない王が、じっと木々を見ている。触れたいが触れられない。
- **damage**: 2
- **quill**: 8
- **reward**: { name: '黄金の涙', description: '王が泣いた跡。頬に張り付いた金の雫', sellPrice: 15 }

### 王 × 隠している
- **ID**: e03_king_hide
- **conditions**: { s1: 'subj_king', s2: 'pred_hide' }
- **text**: 呪われた王が森を隠している。金の木々で森を覆い、中を見せない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 王 × 砕く
- **ID**: e03_king_crush
- **conditions**: { s1: 'subj_king', s2: 'pred_crush' }
- **text**: 呪われた王が森を砕いている。金になった木は脆い。王が触れるたびに砕け散る。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 王 × 逃げていく
- **ID**: e03_king_flee
- **conditions**: { s1: 'subj_king', s2: 'pred_flee' }
- **text**: 呪われた王が森を逃げていく。何も触れないように手を上げて走っている。哀れだ。
- **damage**: 1
- **quill**: 8
- **reward**: なし

---

## 亡霊

### 亡霊 × 塞いでいる
- **ID**: e03_ghost_block
- **conditions**: { s1: 'subj_ghost', s2: 'pred_block' }
- **text**: 呪われた亡霊が森を塞いでいる。呪いに縛られて成仏できない霊が、道を塞いで泣いている。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 亡霊 × 守っている
- **ID**: e03_ghost_guard
- **conditions**: { s1: 'subj_ghost', s2: 'pred_guard' }
- **text**: 呪われた亡霊が森を守っている。呪いを振りまく媒介としての霊。近づくと呪いがうつる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 亡霊 × 追いかけてくる
- **ID**: e03_ghost_chase
- **conditions**: { s1: 'subj_ghost', s2: 'pred_chase' }
- **text**: 呪われた亡霊が森を追いかけてくる。苦しみの表情で迫る。成仏できない怒りをぶつけている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 亡霊 × 見つめている
- **ID**: e03_ghost_gaze
- **conditions**: { s1: 'subj_ghost', s2: 'pred_gaze' }
- **text**: 呪われた亡霊が森を見つめている。苦しみの目。解放を求めている。だが手を出せない。
- **damage**: 2
- **quill**: 7
- **reward**: なし

### 亡霊 × 隠している
- **ID**: e03_ghost_hide
- **conditions**: { s1: 'subj_ghost', s2: 'pred_hide' }
- **text**: 呪われた亡霊が森を隠している。霊の靄で森が見えない。迷い込んだら出られない。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 亡霊 × 砕く
- **ID**: e03_ghost_crush
- **conditions**: { s1: 'subj_ghost', s2: 'pred_crush' }
- **text**: 呪われた亡霊が森を砕いている。怨念で木々が枯れ、倒れていく。呪いの力が森を殺す。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 亡霊 × 逃げていく
- **ID**: e03_ghost_flee
- **conditions**: { s1: 'subj_ghost', s2: 'pred_flee' }
- **text**: 呪われた亡霊が森を逃げていく。成仏したのだろうか。森に温かい光が差した。
- **damage**: 0
- **quill**: 8
- **reward**: { name: '成仏の光', description: '亡霊が残した温かい光。手のひらで揺れている', sellPrice: 10 }

---

## 鏡

### 鏡 × 塞いでいる
- **ID**: e03_mirror_block
- **conditions**: { s1: 'subj_mirror', s2: 'pred_block' }
- **text**: 呪われた鏡が森を塞いでいる。覗いた者の姿が鏡に残る。鏡の中で影たちが蠢いている。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 鏡 × 守っている
- **ID**: e03_mirror_guard
- **conditions**: { s1: 'subj_mirror', s2: 'pred_guard' }
- **text**: 呪われた鏡が森を守っている。覗いた者を捕える鏡。森の番人として完璧だ。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 鏡 × 追いかけてくる
- **ID**: e03_mirror_chase
- **conditions**: { s1: 'subj_mirror', s2: 'pred_chase' }
- **text**: 呪われた鏡が森を追いかけてくる。どこを向いても鏡がある。自分の顔が映り続ける。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 鏡 × 見つめている
- **ID**: e03_mirror_gaze
- **conditions**: { s1: 'subj_mirror', s2: 'pred_gaze' }
- **text**: 呪われた鏡が森を見つめている。鏡の中の自分が動かない。こちらを見つめている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 鏡 × 隠している
- **ID**: e03_mirror_hide
- **conditions**: { s1: 'subj_mirror', s2: 'pred_hide' }
- **text**: 呪われた鏡が森を隠している。鏡の反射で森の形が歪む。実際の道と映った道が食い違う。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 鏡 × 砕く
- **ID**: e03_mirror_crush
- **conditions**: { s1: 'subj_mirror', s2: 'pred_crush' }
- **text**: 呪われた鏡が森を砕いている。鏡に映った森が砕け、現実の森も連動して崩れる。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 鏡 × 逃げていく
- **ID**: e03_mirror_flee
- **conditions**: { s1: 'subj_mirror', s2: 'pred_flee' }
- **text**: 呪われた鏡が森を逃げていく。鏡が割れて破片が散る。映っていた影たちが解放された。
- **damage**: 2
- **quill**: 7
- **reward**: なし

---

## 人形

### 人形 × 塞いでいる
- **ID**: e03_doll_block
- **conditions**: { s1: 'subj_doll', s2: 'pred_block' }
- **text**: 呪われた人形が森を塞いでいる。夜になると位置が変わる人形が、道のど真ん中にいる。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 人形 × 守っている
- **ID**: e03_doll_guard
- **conditions**: { s1: 'subj_doll', s2: 'pred_guard' }
- **text**: 呪われた人形が森を守っている。人間の魂が閉じ込められた人形が、泣き声をあげている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 人形 × 追いかけてくる
- **ID**: e03_doll_chase
- **conditions**: { s1: 'subj_doll', s2: 'pred_chase' }
- **text**: 呪われた人形が森を追いかけてくる。目を離した隙に近づいている。走った。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 人形 × 見つめている
- **ID**: e03_doll_gaze
- **conditions**: { s1: 'subj_doll', s2: 'pred_gaze' }
- **text**: 呪われた人形が森を見つめている。首だけがゆっくり回ってこちらを向く。背筋が凍る。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 人形 × 隠している
- **ID**: e03_doll_hide
- **conditions**: { s1: 'subj_doll', s2: 'pred_hide' }
- **text**: 呪われた人形が森を隠している。人形が木の根元に並んでいる。その先が見えない。行くなという意味か。
- **damage**: 3
- **quill**: 5
- **reward**: なし

### 人形 × 砕く
- **ID**: e03_doll_crush
- **conditions**: { s1: 'subj_doll', s2: 'pred_crush' }
- **text**: 呪われた人形が森を砕いている。人形が木を抱きしめると、木が枯れて砕ける。呪いの抱擁だ。
- **damage**: 4
- **quill**: 6
- **reward**: { name: '呪い人形の腕', description: 'もげた腕。まだ指が動いている', sellPrice: 8 }

### 人形 × 逃げていく
- **ID**: e03_doll_flee
- **conditions**: { s1: 'subj_doll', s2: 'pred_flee' }
- **text**: 呪われた人形が森を逃げていく。振り返ると、木の幹にぶら下がって揺れている。逃げたのではなかった。
- **damage**: 2
- **quill**: 6
- **reward**: なし

---

## 雨

### 雨 × 塞いでいる
- **ID**: e03_rain_block
- **conditions**: { s1: 'subj_rain', s2: 'pred_block' }
- **text**: 呪われた雨が森を塞いでいる。浴びた者がその場から動けなくなる雨が、道を覆っている。
- **damage**: 4
- **quill**: 4
- **reward**: なし

### 雨 × 守っている
- **ID**: e03_rain_guard
- **conditions**: { s1: 'subj_rain', s2: 'pred_guard' }
- **text**: 呪われた雨が森を守っている。浴びた者が動けなくなる。森に入った者は雨に捕らえられる。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 雨 × 追いかけてくる
- **ID**: e03_rain_chase
- **conditions**: { s1: 'subj_rain', s2: 'pred_chase' }
- **text**: 呪われた雨が森を追いかけてくる。逃げても雨雲が追ってくる。足に根が生え始めた。
- **damage**: 4
- **quill**: 5
- **reward**: なし

### 雨 × 見つめている
- **ID**: e03_rain_gaze
- **conditions**: { s1: 'subj_rain', s2: 'pred_gaze' }
- **text**: 呪われた雨が森を見つめている。雨粒の一つ一つが目のように光っている。見られている。
- **damage**: 3
- **quill**: 6
- **reward**: なし

### 雨 × 隠している
- **ID**: e03_rain_hide
- **conditions**: { s1: 'subj_rain', s2: 'pred_hide' }
- **text**: 呪われた雨が森を隠している。豪雨で視界がない。足元が見えない。根が生え始めていることに気づかなかった。
- **damage**: 4
- **quill**: 6
- **reward**: なし

### 雨 × 砕く
- **ID**: e03_rain_crush
- **conditions**: { s1: 'subj_rain', s2: 'pred_crush' }
- **text**: 呪われた雨が森を砕いている。降るたびに地面が沈む。森が泥の中に沈んでいく。
- **damage**: 5
- **quill**: 5
- **reward**: なし

### 雨 × 逃げていく
- **ID**: e03_rain_flee
- **conditions**: { s1: 'subj_rain', s2: 'pred_flee' }
- **text**: 呪われた雨が森を逃げていく。雨が止んだ。足に生えかけた根が枯れた。
- **damage**: 0
- **quill**: 7
- **reward**: { name: '呪雨の苗', description: '足に生えかけた根の残り。まだ湿っている', sellPrice: 8 }

---

## 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 119 |
| rewardItem数 | 23 |
| reward率 | 19.3% |
| damage平均 | 3.1 |
| quill平均 | 5.5 |
| damage=0の割合 | 9.2% (11/119) |
| damage≥4の割合 | 39.5% (47/119) |
| quill≥6の割合 | 39.5% (47/119) |
