import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
};

export default function ProjectCard({ slug, title, description, tags = [] }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block group">
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600">
        <h2 className="text-lg font-semibold group-hover:underline">{title}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
