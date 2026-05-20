import Link from "next/link";
import { projects } from "../../lib/projects";

function ProjectGroup({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: typeof projects;
}) {
  return (
    <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">
            <span className="accent-dot" />
            {title}
          </span>
          <h2 className="section-heading mt-5 text-4xl text-slate-950">{title}</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">{intro}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="lift rounded-[1.6rem] border border-white/75 bg-white/80 p-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-950">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{project.oneLiner}</p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {project.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const flagship = projects.filter((project) => project.category === "Flagship");
  const supporting = projects.filter((project) => project.category === "Supporting");

  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl gap-8">
        <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
          <span className="eyebrow">
            <span className="accent-dot" />
            Project Portfolio
          </span>
          <h1 className="section-heading mt-5 max-w-4xl text-5xl leading-tight text-slate-950">
            A mix of enterprise engineering, data workflow tooling, and applied AI product work.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            These projects reflect the kind of problems I like solving: dependable systems,
            data quality, operational clarity, and end-to-end product delivery.
          </p>
        </section>

        <ProjectGroup
          title="Flagship Projects"
          intro="Deeper case-study work with stronger ownership across architecture, implementation, and system behavior."
          items={flagship}
        />

        <ProjectGroup
          title="Supporting Projects"
          intro="Additional projects that highlight technical breadth across computer vision, data pipelines, and interface-driven workflows."
          items={supporting}
        />
      </div>
    </main>
  );
}
