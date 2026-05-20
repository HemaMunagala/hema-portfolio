import Image from "next/image";
import Link from "next/link";
import { quickFacts, site } from "../lib/site";

export default function Hero() {
  return (
    <section className="px-6 pb-10 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="section-card rounded-[2rem] px-7 py-10 sm:px-10 sm:py-12">
          <span className="eyebrow">
            <span className="accent-dot" />
            Open to opportunities
          </span>

          <h1 className="section-heading mt-6 max-w-3xl text-5xl leading-none text-slate-950 sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium text-slate-800 sm:text-xl">
            {site.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {site.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="lift rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="lift rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Get In Touch
            </Link>
            <Link
              href="/resume"
              className="lift rounded-full border border-transparent bg-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-teal-900"
            >
              Resume
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 text-sm leading-6 text-slate-700"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="section-card relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-teal-700/15 via-amber-500/10 to-transparent" />
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/photo.jpg"
                alt="Portrait of Hema Munagala"
                width={720}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="section-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-900/80">
              Current Focus
            </p>
            <p className="mt-4 section-heading text-3xl leading-tight text-slate-950">
              Reliable systems with real-world operational impact.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              I enjoy projects where data quality matters, workflows need to be dependable,
              and the software has to serve people doing real work every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
