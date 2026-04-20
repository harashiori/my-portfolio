import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6">
      <p className="text-sm font-medium tracking-widest text-green-600 uppercase">
        Web Developer
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900">
        hara shiori
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
        Web 開発と UI デザインを軸に、使いやすくシンプルなものづくりをしています。
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
        >
          Projects を見る
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-zinc-400 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200"
        >
          About
        </Link>
      </div>
    </main>
  );
}
