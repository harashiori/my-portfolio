@AGENTS.md

# CLAUDE.md

このプロジェクトは Next.js (App Router) を使用した個人ポートフォリオサイトです。
Claude Code による AI 駆動開発を前提としており、以下の方針に従ってコード生成・編集を行ってください。

## 🎯 プロジェクトの目的
- シンプルで見やすいポートフォリオサイトを作る
- 最低限のページ構成で公開できる状態を目指す
- Tailwind CSS を使って軽量で統一感のあるデザインにする
- 後から拡張しやすい構造にする

## 🧱 技術スタック
- Next.js 16（App Router）
- React
- Tailwind CSS
- TypeScript
- Turbopack
- Claude Code（AI 駆動開発）

## 📁 ページ構成
app/
├─ page.tsx                # Home（ヒーローセクションあり）
├─ about/
│   └─ page.tsx            # About Me
├─ projects/
│   ├─ page.tsx            # Projects List
│   └─ [slug]/
│        └─ page.tsx       # Project Detail
├─ ai-log/
│   └─ page.tsx            # AI Development Log
└─ contact/
    └─ page.tsx            # Contact Page

components/
├─ Header.tsx
├─ Footer.tsx
└─ ProjectCard.tsx

## 🎨 デザイン方針
- Tailwind CSS を使用
- シンプルで読みやすい UI
- 過度なアニメーションは不要
- 余白を広めに取り、視認性を重視
- アクセントカラーは緑系

## 🧩 Claude Code への指示ルール
- 既存コードを壊さずに編集すること
- 必要な場合はファイルを新規作成してよい
- Tailwind を使ったシンプルな UI を優先
- App Router の構造に従うこと
- 動作確認が必要な場合はコードブロックで示すこと
- 不要な依存関係は追加しない

## 🚀 今後追加予定
- プロフィール画像の追加
- プロジェクトデータの JSON 化
- ダークモード対応
- AI Log の自動生成機能
