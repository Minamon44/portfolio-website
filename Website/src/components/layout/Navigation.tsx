"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(
    navLinks.map((link) => link.href.replace("#", ""))
  );

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-[var(--text-body-strong)] ${
                  isActive
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-5 h-0.5 bg-[var(--color-ink)] transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--color-ink)] transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--color-ink)] transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg transition-colors ${
                    isActive
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
