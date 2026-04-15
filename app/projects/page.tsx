import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description: "Next.js と TypeScript で構築したサンプルプロジェクトです。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description: "AI を活用したコンテンツ生成ツールです。",
    tags: ["React", "OpenAI API"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        これまでに手がけたプロジェクトの一覧です。
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}
