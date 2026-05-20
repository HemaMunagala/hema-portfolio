import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/75 bg-white/80 p-6 sm:p-7">
      <h2 className="section-heading text-3xl text-slate-950">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-700">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-teal-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-5xl gap-8">
        <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
          <Link href="/projects" className="accent-link text-sm text-slate-600">
            Back to Projects
          </Link>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900"
              >
                {tech}
              </span>
            ))}
          </div>

          <h1 className="section-heading mt-6 text-5xl leading-tight text-slate-950">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {project.oneLiner}
          </p>
        </section>

        {project.caseStudy ? (
          <div className="section-card grid gap-5 rounded-[2rem] p-5 sm:p-6">
            <Section title="Problem">
              <p>{project.caseStudy.problem}</p>
            </Section>

            <Section title="Role">
              <p>{project.caseStudy.role}</p>
            </Section>

            <Section title="Architecture">
              <BulletList items={project.caseStudy.architecture} />
            </Section>

            <Section title="Key Work">
              <BulletList items={project.caseStudy.keyWork} />
            </Section>

            <Section title="Impact">
              <BulletList items={project.caseStudy.impact} />
            </Section>
          </div>
        ) : (
          <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10">
            <h2 className="section-heading text-3xl text-slate-950">Project Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              This project is included to show technical breadth. A deeper written case study
              can be added later with screenshots, architecture notes, or implementation tradeoffs.
            </p>

            <div className="mt-6">
              <BulletList items={project.highlights} />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
