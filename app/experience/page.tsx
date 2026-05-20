import { experience } from "../../lib/site";

export default function ExperiencePage() {
  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl gap-8">
        <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
          <span className="eyebrow">
            <span className="accent-dot" />
            Experience
          </span>
          <h1 className="section-heading mt-5 max-w-4xl text-5xl leading-tight text-slate-950">
            Experience across enterprise transportation systems, product interfaces, and AI-backed workflows.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            My experience blends application development, backend logic, and data reliability work,
            with an emphasis on building software that supports real operational teams.
          </p>
        </section>

        <section className="grid gap-5">
          {experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="section-card rounded-[2rem] px-7 py-8 sm:px-10"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-900/80">
                    {entry.company}
                  </p>
                  <h2 className="section-heading mt-3 text-4xl text-slate-950">{entry.role}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                    {entry.description}
                  </p>
                </div>
                <p className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600">
                  {entry.location}
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {entry.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.35rem] border border-white/75 bg-white/75 p-5 text-sm leading-7 text-slate-700"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
