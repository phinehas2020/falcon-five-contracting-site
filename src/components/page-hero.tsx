type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="space-y-4 py-8 sm:py-10">
      {eyebrow ? (
        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base text-slate-700 sm:text-lg">{description}</p>
    </section>
  );
}

