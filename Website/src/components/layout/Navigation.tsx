import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav
      className="sticky top-0 z-50 h-14 w-full bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="h-full max-w-[960px] mx-auto px-4 flex items-center justify-between">
        <span className="font-[var(--font-mono)] text-[var(--text-heading-md)] font-bold">
          PORTFOLIO
        </span>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors text-[var(--text-body-strong)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
