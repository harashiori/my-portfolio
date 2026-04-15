# My Portfolio

Next.js (App Router) で構築したポートフォリオサイトです。

## 技術スタック

- [Next.js 16](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Geist Font](https://vercel.com/font)

## ローカル開発

依存パッケージをインストールし、開発サーバーを起動します。

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと結果を確認できます。

## フォルダ構成

```
my-portfolio/
├── app/                        # App Router のルート定義
│   ├── layout.tsx              # ルートレイアウト（Header / Footer を配置）
│   ├── page.tsx                # ホームページ (/)
│   ├── about/
│   │   └── page.tsx            # About (/about)
│   ├── projects/
│   │   ├── page.tsx            # プロジェクト一覧 (/projects)
│   │   └── [slug]/
│   │       └── page.tsx        # プロジェクト詳細 (/projects/:slug)
│   ├── ai-log/
│   │   └── page.tsx            # AI 開発ログ (/ai-log)
│   ├── contact/
│   │   └── page.tsx            # コンタクト (/contact)
│   └── globals.css             # グローバルスタイル
├── components/                 # 共通コンポーネント
│   ├── Header.tsx              # ナビゲーションヘッダー
│   ├── Footer.tsx              # フッター
│   └── ProjectCard.tsx         # プロジェクト一覧カード
└── public/
    └── images/                 # 静的画像ファイル
```

## ページ一覧

| パス | 説明 |
|---|---|
| `/` | ホーム |
| `/about` | 自己紹介 |
| `/projects` | 制作物一覧 |
| `/projects/:slug` | 制作物の詳細 |
| `/ai-log` | AI 活用の開発ログ |
| `/contact` | お問い合わせ |

## デプロイ

[Vercel](https://vercel.com) へのデプロイを推奨します。GitHub リポジトリを連携するだけで自動デプロイが設定できます。

詳細は [Next.js デプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
