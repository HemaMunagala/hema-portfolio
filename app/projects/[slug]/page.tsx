import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../lib/projects";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const cs = project.caseStudy;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/projects" className="text-sm text-slate-600">
          ← Back to Projects
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          {project.name}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {project.oneLiner}
        </p>

        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-white px-3 py-1 text-sm text-slate-700 border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {cs ? (
          <>
            <Section title="Problem">
              <p>{cs.problem}</p>
            </Section>

            <Section title="My Role">
              <p>{cs.role}</p>
            </Section>

            <Section title="Architecture">
              <BulletList items={cs.architecture} />
            </Section>

            <Section title="Key Work">
              <BulletList items={cs.keyWork} />
            </Section>

            <Section title="Impact">
              <BulletList items={cs.impact} />
            </Section>
            <Section title="Screenshots & Notes">
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                    Add screenshots (UI, workflow, diagrams) and any measurable outcomes here.
                    We’ll fill this per project next.
                </div>
            </Section>
          </>
        ) : (
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            Detailed case study coming soon.
          </div>
        )}
      </section>
    </main>
  );
}