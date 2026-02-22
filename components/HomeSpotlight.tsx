import Link from "next/link";
import { projects } from "../lib/projects";

export default function HomeSpotlight() {
  const grit = projects.find((p) => p.slug === "grit");
  const featured = projects.filter(
    (p) => p.category === "Flagship" && p.slug !== "grit"
  );

  if (!grit) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      {/* Spotlight */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Hero Project Spotlight
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-slate-900">{grit.name}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{grit.oneLiner}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {grit.stack.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/projects/${grit.slug}`}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Read Case Study
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Featured Flagships */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-slate-900">Featured Projects</h3>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 3).map((p) => (
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
      </div>
    </section>
  );
}