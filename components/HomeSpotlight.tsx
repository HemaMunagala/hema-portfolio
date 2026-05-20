import Link from "next/link";
import { focusAreas } from "../lib/site";
import { projects } from "../lib/projects";

export default function HomeSpotlight() {
  const flagship = projects.filter((project) => project.category === "Flagship");
  const featured = flagship.slice(0, 3);

  return (
    <section className="px-6 pb-14 pt-6">
      <div className="mx-auto grid max-w-6xl gap-8">
        <div className="section-card rounded-[2rem] px-7 py-8 sm:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="accent-dot" />
                What I Build
              </span>
              <h2 className="section-heading mt-5 text-4xl text-slate-950">
                Software that connects product experience with dependable data foundations.
              </h2>
            </div>

            <Link
              href="/projects"
              className="lift w-fit rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              View full project archive
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[1.5rem] border border-white/70 bg-white/75 p-5"
              >
                <h3 className="text-base font-semibold text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="section-card rounded-[2rem] px-7 py-8 sm:px-10">
            <span className="eyebrow">
              <span className="accent-dot" />
              Selected Work
            </span>
            <h2 className="section-heading mt-5 text-4xl text-slate-950">
              Flagship projects that show range across enterprise systems and product work.
            </h2>

            <div className="mt-8 grid gap-4">
              {featured.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="lift rounded-[1.5rem] border border-white/75 bg-white/80 p-5"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900">
                      {project.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {project.stack.slice(0, 3).join(" / ")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.oneLiner}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="section-card rounded-[2rem] px-7 py-8 sm:px-8">
            <span className="eyebrow">
              <span className="accent-dot" />
              Working Style
            </span>

            <div className="mt-6 space-y-5">
              {[
                "I like systems where the UI, API, and database decisions all matter together.",
                "My best work usually sits at the intersection of reliability, clarity, and practical delivery.",
                "I care about shipping software that is easier to debug, easier to trust, and easier to keep evolving.",
              ].map((line) => (
                <p
                  key={line}
                  className="rounded-[1.4rem] border border-white/75 bg-white/75 p-5 text-sm leading-7 text-slate-700"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
