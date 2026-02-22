import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold text-slate-900">
          Hema
        </Link>

        <div className="flex gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-700">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}