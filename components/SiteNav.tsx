import Link from "next/link";
import { site } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <nav className="section-card mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900 text-xs font-bold uppercase tracking-[0.24em] text-white">
            HM
          </span>
          <span className="hidden sm:block">{site.shortName}</span>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-white hover:text-slate-950"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
