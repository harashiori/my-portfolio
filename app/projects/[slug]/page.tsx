export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{slug}</h1>
      <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-7">
        このプロジェクトの詳細ページです。
      </p>
    </main>
  );
}
