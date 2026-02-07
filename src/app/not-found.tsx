import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <p className="font-display text-8xl text-gold sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist. Head back home or check
          out our services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex bg-gold px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-bright"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="inline-flex border border-neutral-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
