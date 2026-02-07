import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <h1 className="text-5xl font-black text-slate-950">Page Not Found</h1>
      <p className="mt-4 max-w-xl text-sm text-slate-700 sm:text-base">
        The page you requested is unavailable. Use the links below to return to core Falcon Five pages.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-black uppercase tracking-wide text-white"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-black uppercase tracking-wide text-slate-900"
        >
          Services
        </Link>
      </div>
    </section>
  );
}
