type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-sm font-bold uppercase text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl text-4xl text-white sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
