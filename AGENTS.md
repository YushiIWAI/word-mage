# AGENTS.md — Codex 向け指示

## 作業場所

- 正規作業場所: `/Users/yushiiwai/Developer/word-mage`
- 旧 clone（`~/Documents/GitHub/word-mage`）は iCloud dataless による object DB 欠損（`fatal: unable to read <sha>` エラーの原因）を抱える。触らない
- Mac 間共有は GitHub の push / pull のみ信頼

## コンテキスト読み込み（最重要）

作業開始時に以下を読む:

1. `CLAUDE.md` — プロジェクト規約・ゲームデザイン・技術スタック
2. `.handoff.md` — 前回セッションからの引き継ぎ

## プロジェクト概要

Slay the Spire 的ノード進行 × 自然言語書き換え × 手札管理パズルゲーム。Svelte 5 + TypeScript + Vite。GitHub Pages デプロイ（`gh-pages` branch、`npx gh-pages -d dist` で更新）。

## デプロイ

```bash
npm run build && npx gh-pages -d dist
```

公開 URL: https://yushiiwai.github.io/word-mage/

## セッション管理

- 作業終了時: 作業状態を `.handoff.md` に記録
- `.handoff.md` は Claude Code と Codex の間で共有される引き継ぎファイル
- Claude Code と Codex は同じ作業ツリーを同時に触らない
