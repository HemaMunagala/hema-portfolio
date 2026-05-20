import Link from "next/link";
import { site } from "../../lib/site";

export default function ResumePage() {
  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl gap-8">
        <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
          <span className="eyebrow">
            <span className="accent-dot" />
            Resume
          </span>
          <h1 className="section-heading mt-5 text-5xl leading-tight text-slate-950">
            A clean snapshot of experience, projects, and technical strengths.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Keep this PDF aligned with what you submit in applications so the site and your
            resume tell the same story.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.resume}
              className="lift rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20"
              download
            >
              Download Resume
            </a>
            <Link
              href={site.resume}
              target="_blank"
              className="lift rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Open PDF
            </Link>
          </div>
        </section>

        <section className="section-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <iframe
            src={site.resume}
            title="Hema Munagala resume"
            className="min-h-[70vh] w-full rounded-[1.5rem] border border-white/70 bg-white"
          />
        </section>
      </div>
    </main>
  );
}
