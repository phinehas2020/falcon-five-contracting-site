import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black tracking-tight text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm text-slate-700 sm:text-base">{children}</div>
    </section>
  );
}

