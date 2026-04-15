import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col justify-center px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        こんにちは、私のポートフォリオへようこそ。
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-8">
        Web 開発・UI デザイン・AI 活用をテーマに、日々の制作物や学びを発信しています。
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
        >
          Projects を見る
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          About
        </Link>
      </div>
    </main>
  );
}
