import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] px-4 max-w-[960px] mx-auto ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  );
}
