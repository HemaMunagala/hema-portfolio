import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <section className="section-card mx-auto max-w-4xl rounded-[2rem] px-7 py-10 text-center sm:px-10">
        <span className="eyebrow">
          <span className="accent-dot" />
          Not Found
        </span>
        <h1 className="section-heading mt-5 text-5xl text-slate-950">Page not found</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
          The page you were looking for is not here anymore, or the link was never finished.
          Let&apos;s get you back to the main portfolio content.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="lift rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="lift rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
