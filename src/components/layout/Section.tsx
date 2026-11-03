import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function Section({ children, className = "", innerClassName = "", id }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={`mx-auto w-full max-w-page px-4 md:px-8 ${innerClassName}`}>{children}</div>
    </section>
  );
}
