# ノードP22「水車小屋」Outcome一覧

- **文構成**: 古い水車が 川を [pred*]
- **可変スロット**: pred のみ（7有効述語 = 7パターン）
- **固定**: 修飾語「古い」（ロスター外） + 主語「水車」（ロスター外） + 目的語「川」(を格)
- **ノードの文脈**: 川沿いの水車小屋。水車が不思議な動きをしている。「動詞選び」パズル
- **プール**: 中盤 | AP: 2
- **を格で有効な述語（7種）**: 塞いでいる, 守っている, 追いかけてくる, 見つめている, 隠している, 砕く, 逃げていく
- **歪み**: 10述語（defaultOutcomeで一括処理）

### rewardItems集計
有効7パターン中、1個（14.3%）にrewardItems付与

---

# 有効パターン

---

### 塞いでいる（pred_block）
- **ID**: p22_block
- **conditions**: { s4: 'pred_block' }
- **text**: 古い水車が川を塞いでいる。歯車が軋みながら動き、水の流れを完全に堰き止めている。下流が干上がり始めた。
- **damage**: 3
- **quill**: 2
- **reward**: なし

### 守っている（pred_guard）
- **ID**: p22_guard
- **conditions**: { s4: 'pred_guard' }
- **text**: 古い水車が川を守っている。上流から流れてくる瓦礫や汚泥を水車が掬い上げ、岸に弾いている。川の水が澄んでいる。
- **damage**: 0
- **quill**: 6
- **reward**: { name: '澄み水の瓶', description: '水車が守った川の水。驚くほど透き通っている', sellPrice: 10 }

### 追いかけてくる（pred_chase）
- **ID**: p22_chase
- **conditions**: { s4: 'pred_chase' }
- **text**: 古い水車が川を追いかけてくる。軸ごと岸を離れ、水流に沿ってこちらに転がってくる。歯車がごとごと鳴って不気味だ。
- **damage**: 3
- **quill**: 4
- **reward**: なし

### 見つめている（pred_gaze）
- **ID**: p22_gaze
- **conditions**: { s4: 'pred_gaze' }
- **text**: 古い水車が川を見つめている。回転が止まり、水車の隙間から水面を覗き込んでいるように見える。川に何か映っているのか。
- **damage**: 1
- **quill**: 5
- **reward**: なし

### 隠している（pred_hide）
- **ID**: p22_hide
- **conditions**: { s4: 'pred_hide' }
- **text**: 古い水車が川を隠している。水車の羽板が扇のように広がり、川面を覆い尽くしている。水音だけが聞こえる。
- **damage**: 2
- **quill**: 4
- **reward**: なし

### 砕く（pred_crush）
- **ID**: p22_crush
- **conditions**: { s4: 'pred_crush' }
- **text**: 古い水車が川を砕いている。凍った川面を歯車が噛み砕き、氷片を撒き散らしている。氷の破片が頬を掠めた。
- **damage**: 2
- **quill**: 5
- **reward**: なし

### 逃げていく（pred_flee）
- **ID**: p22_flee
- **conditions**: { s4: 'pred_flee' }
- **text**: 古い水車が川を逃げていく。流れに乗って水車がゆっくり下流へ去っていく。小屋だけが残された。
- **damage**: 0
- **quill**: 4
- **reward**: なし

---

- **defaultOutcome**:
  - text: 文が歪んだ。言葉が世界に馴染まず、宙に散る。体に鈍い痛みが走る。
  - damage: 4
  - quill: 0

---

# 統計レポート

| 項目 | 値 |
|------|---|
| 有効outcome数 | 7 |
| rewardItem数 | 1 |
| reward率 | 14.3% |
| damage平均 | 1.57 |
| quill平均 | 4.29 |
| damage=0の割合 | 28.6% (2/7) |
| damage>=4の割合 | 0.0% (0/7) |
| quill>=6の割合 | 14.3% (1/7) |
