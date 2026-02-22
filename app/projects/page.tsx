import Link from "next/link";
import { projects } from "../../lib/projects";

function ProjectSection({
  title,
  items,
}: {
  title: string;
  items: typeof projects;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="text-sm font-semibold text-slate-900">{p.name}</div>
            <p className="mt-2 text-sm text-slate-600">{p.oneLiner}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const flagship = projects.filter((p) => p.category === "Flagship");
  const supporting = projects.filter((p) => p.category === "Supporting");

  return (
    <main className="bg-slate-50">
      <ProjectSection title="Flagship Projects" items={flagship} />
      <ProjectSection title="Supporting Projects" items={supporting} />
    </main>
  );
}