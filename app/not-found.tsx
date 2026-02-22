import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-slate-600">
          The page you’re looking for doesn’t exist (or moved). Head back to Projects.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}