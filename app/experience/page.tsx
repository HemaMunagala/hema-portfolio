export default function ExperiencePage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Experience</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Software engineering experience across full-stack platforms, data systems,
          and production workflows.
        </p>

        <div className="mt-10 space-y-6">
          {/* UGPTI */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Research Intern (Software Engineer) · UGPTI, NDSU
              </h2>
              <p className="text-sm text-slate-500">Fargo, ND</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Built full-stack modules for transportation data workflows using React, REST APIs, and SQL Server.</li>
              <li>Designed and optimized stored procedures to enforce relational integrity and reduce data inconsistencies.</li>
              <li>Implemented ingestion/validation logic for structured datasets to improve reliability of reporting pipelines.</li>
              <li>Debugged production issues and delivered stable updates aligned with operational requirements.</li>
            </ul>
          </div>

          {/* Solomon's */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                NLP Engineer Intern · Solomon&apos;s International
              </h2>
              <p className="text-sm text-slate-500">India</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Developed NLP models using BERT/Transformers for catalog review analysis and product search/recommendations.</li>
              <li>Built a MERN platform and tested API integrations using Postman to ensure end-to-end correctness.</li>
              <li>Improved relevance and usability of e-commerce search and recommendation flows with model-driven insights.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}