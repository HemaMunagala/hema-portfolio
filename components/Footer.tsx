import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16">
      <div className="section-card mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-heading text-2xl text-slate-950">{site.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Building reliable software experiences across data systems, backend automation,
            and full-stack products.
          </p>
        </div>

        <div className="text-sm text-slate-600 sm:text-right">
          <p>{site.location}</p>
          <p className="mt-1">{site.email}</p>
          <p className="mt-3">(c) {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
