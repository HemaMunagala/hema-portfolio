import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-slate-500">
              Hello, I’m
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Hema Munagala
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-800">
              Software Engineer | Full-Stack & Data Systems
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Software Engineer focused on backend automation,
              relational data integrity, and production-ready
              full-stack platforms.
            </p>

<div className="mt-10 flex gap-5">
  <Link
    href="/projects"
    className="rounded-xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white"
  >
    View Projects
  </Link>

  <Link
    href="/resume"
    className="rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-900"
  >
    Resume
  </Link>
</div>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/photo.jpg"
                alt="Hema Munagala"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}