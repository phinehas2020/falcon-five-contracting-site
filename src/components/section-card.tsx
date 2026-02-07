import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="border border-rule bg-surface-raised p-6 sm:p-8">
      <h2 className="text-2xl text-white sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-sm text-neutral-400 sm:text-base">
        {children}
      </div>
    </section>
  );
}
