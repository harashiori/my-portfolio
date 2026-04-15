export default function AiLogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">AI Log</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        AI ツールを使った開発の記録・気づき・実験ログをまとめています。
      </p>
      <ul className="mt-10 space-y-4">
        <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <time className="text-xs text-zinc-400">2026-04-15</time>
          <h2 className="mt-1 font-medium">Claude Code でポートフォリオを構築</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            AI と対話しながらフォルダ構成・コンポーネント設計を行いました。
          </p>
        </li>
      </ul>
    </main>
  );
}
