import Link from "next/link";

type LinkHubItem = {
  href: string;
  label: string;
  summary: string;
};

type LinkHubProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  links: LinkHubItem[];
  columns?: 2 | 3;
  className?: string;
};

export function LinkHub({
  title,
  eyebrow,
  description,
  links,
  columns = 2,
  className = "",
}: LinkHubProps) {
  if (!links.length) {
    return null;
  }

  return (
    <section className={`border-b border-rule ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-sm font-bold uppercase text-gold">{eyebrow}</p>
        ) : null}
        <h2 className="mt-4 text-2xl text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-3xl text-sm text-neutral-400 sm:text-base">
            {description}
          </p>
        ) : null}

        <div
          className={`mt-8 grid gap-4 sm:gap-6 ${
            columns === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block border border-rule bg-surface p-4 transition-colors hover:border-gold hover:bg-surface-raised sm:p-5"
            >
              <span className="font-bold text-white transition-colors group-hover:text-gold">
                {item.label}
              </span>
              <p className="mt-2 text-sm text-neutral-500">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
