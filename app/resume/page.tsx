import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Resume</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Download the PDF or view it in a new tab.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            download
          >
            Download Resume
          </a>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            View in New Tab
          </Link>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          Tip: Keep this PDF identical to what you submit in applications.
        </div>
      </section>
    </main>
  );
}