import { siteConfig } from "@/lib/site-data";

type CtaStripProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CtaStrip({
  title = "Need emergency help right now?",
  description = "Call Falcon Five for 24/7 emergency plumbing and AC dispatch across Greater Waco.",
  className = "",
}: CtaStripProps) {
  return (
    <section className={`rounded-3xl bg-slate-950 p-7 text-white sm:p-10 ${className}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{title}</h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-64">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-amber-300"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/30 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-white"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}

