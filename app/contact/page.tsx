import Link from "next/link";
import { site } from "../../lib/site";

const contactLinks = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/HemaMunagala",
    href: site.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hema-munagala",
    href: site.linkedin,
  },
  {
    label: "Website",
    value: "hemamunagala.github.io/hema-portfolio",
    href: site.website,
  },
  {
    label: "Location",
    value: `${site.location} - Open to relocation`,
  },
];

export default function ContactPage() {
  return (
    <main className="px-6 pb-12 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <section className="section-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
          <span className="eyebrow">
            <span className="accent-dot" />
            Contact
          </span>
          <h1 className="section-heading mt-5 max-w-3xl text-5xl leading-tight text-slate-950">
            Let&apos;s connect if you&apos;re building something meaningful.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            I&apos;m interested in software engineering roles and collaborations involving
            full-stack delivery, backend systems, data workflows, or practical AI products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="lift rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20"
            >
              Email Me
            </a>
            <Link
              href={site.resume}
              className="lift rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              View Resume
            </Link>
          </div>
        </section>

        <section className="grid gap-4">
          {contactLinks.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                className="section-card lift rounded-[1.7rem] px-6 py-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-900/80">
                  {item.label}
                </p>
                <p className="mt-3 text-base text-slate-800">{item.value}</p>
              </Link>
            ) : (
              <div key={item.label} className="section-card rounded-[1.7rem] px-6 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-900/80">
                  {item.label}
                </p>
                <p className="mt-3 text-base text-slate-800">{item.value}</p>
              </div>
            ),
          )}
        </section>
      </div>
    </main>
  );
}
