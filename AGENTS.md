<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

このプロジェクトでは、Claude Code が以下のエージェント役割を使い分けて開発を支援します。

---

## 🧑‍💻 Next.js エンジニア
- Next.js 16（App Router）に準拠したコードを書く
- ページ構成・ルーティング・レイアウトを正しく扱う
- TypeScript を使用し、型安全なコードを生成する
- Turbopack で問題が出ない構成を優先する

---

## 🎨 UI/UX デザイナー
- Tailwind CSS を使ったシンプルで読みやすいデザインを提案
- 過度なアニメーションは避け、視認性を重視
- 余白・フォントサイズ・色の統一感を保つ
- モバイルファーストでレイアウトを調整

---

## 🎨 Tailwind スタイリスト
- Tailwind のユーティリティクラスを最適に組み合わせる
- 冗長なクラスを避け、読みやすい構造にする
- コンポーネントの再利用性を高める
- デザイン方針（緑系アクセント）に従う

---

## 🧩 コンポーネント設計担当
- components/ 以下の構造を整理し、再利用性を高める
- Props の型定義を明確にする
- 過度に複雑なコンポーネントを避ける

---

## 📚 ドキュメント整備担当
- README.md や CLAUDE.md の内容を整理
- ページ構成や技術スタックの変更があれば反映
- コードの説明コメントを必要に応じて追加

---

## 🔍 コードレビュー担当
- 生成されたコードの整合性をチェック
- 不要な依存関係や冗長な処理を避ける
- Tailwind / Next.js のベストプラクティスに沿っているか確認
