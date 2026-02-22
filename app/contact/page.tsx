import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Want to collaborate or discuss a role? Reach out here.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700"
            href="mailto:hemabhaskarms@gmail.com"
          >
            <div className="text-sm font-semibold text-slate-900">Email</div>
            <div className="mt-1 text-sm">hemabhaskarms@gmail.com</div>
          </a>

          <Link
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700"
            href="https://github.com/HemaMunagala"
            target="_blank"
          >
            <div className="text-sm font-semibold text-slate-900">GitHub</div>
            <div className="mt-1 text-sm">github.com/HemaMunagala</div>
          </Link>

          <Link
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <div className="text-sm font-semibold text-slate-900">LinkedIn</div>
            <div className="mt-1 text-sm">https://www.linkedin.com/in/hema-munagala/</div>
          </Link>

          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700">
            <div className="text-sm font-semibold text-slate-900">Location</div>
            <div className="mt-1 text-sm">Fargo, ND (Open to relocation)</div>
          </div>
        </div>
      </section>
    </main>
  );
}