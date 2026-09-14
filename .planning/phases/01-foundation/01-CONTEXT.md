# Phase Context: 01 - Foundation

**Phase:** 1 — Foundation
**Date:** 2026-09-14
**Project:** Data Science Portfolio

---

## Domain

Build the fully styled, responsive page scaffold with terminal-native design tokens — the design system foundation that all subsequent phases depend on.

---

## Decisions

### Tailwind v4 @theme Token Mapping
**Decision:** Full token parity — map all DESIGN.md tokens (colors, spacing, typography, rounded) to Tailwind v4's @theme directive in globals.css.

**Rationale:** DESIGN.md is the single source of truth. Full parity ensures zero drift between design spec and implementation. Tailwind v4's @theme directive is built for exactly this — CSS-first token configuration.

**Implementation:**
- Define all color tokens as `--color-*` CSS custom properties
- Define all spacing tokens as `--spacing-*` CSS custom properties
- Define all typography tokens as `--font-*`, `--text-*`, `--leading-*`, `--tracking-*`, `--font-weight-*` CSS custom properties
- Define rounded tokens as `--radius-*` CSS custom properties
- Use `@fontsource-variable/jetbrains-mono` for self-hosted font; define `--font-mono: "JetBrains Mono", monospace`
- No Tailwind config file needed — everything in `globals.css` @theme block

### Responsive Breakpoint Mapping
**Decision:** Full 5-breakpoint mapping — extend Tailwind with all 5 DESIGN.md breakpoints using custom names.

**Rationale:** DESIGN.md specifies precise breakpoint behavior at 1280px+, 1024px, 850px, 768px, and 640px. Using custom breakpoint names preserves the design intent exactly.

**Implementation:**
```css
@theme {
  --breakpoint-desk-lg: 1280px;
  --breakpoint-desk: 1024px;
  --breakpoint-tab: 850px;
  --breakpoint-tab-narrow: 768px;
  --breakpoint-mob: 640px;
}
```
Use in components: `desk-lg:`, `desk:`, `tab:`, `tab-narrow:`, `mob:`

### Sticky Nav Implementation
**Decision:** CSS `position: sticky` with `top: 0` and `z-index: 50` on the nav element. The 56px height from DESIGN.md (`primary-nav` component) creates the scroll offset for anchor links.

**Rationale:** Sticky is simpler than fixed, performs better, and naturally handles the 56px offset for smooth scroll anchor positioning.

### Component Structure
**Decision:** Create three layout primitives in Phase 1:
- `PageShell` — root layout wrapper with sticky nav and main content area
- `SectionContainer` — wraps each section with 96px vertical rhythm and max-width 960px
- `Navigation` — the 56px sticky nav bar with ASCII wordmark placeholder and nav links

---

## Deferred Ideas

- **Dark hero TUI mockup component** — belongs in Phase 3 (Section Components) as it's the hero section content, not layout scaffold
- **Animation/transition tokens** — DESIGN.md has no hover states; Motion animations added in Phase 3+
- **Font weight verification** — verify @fontsource-variable/jetbrains-mono provides 400/500/700 axes during implementation

---

## Canonical Refs

- `/home/mina/Projects/Portfolio Website/DESIGN.md` — Full design system spec (colors, typography, spacing, components, responsive behavior)
- `/home/mina/Projects/Portfolio Website/.planning/PROJECT.md` — Project context and constraints
- `/home/mina/Projects/Portfolio Website/.planning/REQUIREMENTS.md` — v1 requirements (LAYOUT-01, LAYOUT-02, LAYOUT-03 mapped to Phase 1)
- `/home/mina/Projects/Portfolio Website/.planning/ROADMAP.md` — Phase 1 goal and success criteria
- `/home/mina/Projects/Portfolio Website/.planning/research/STACK.md` — Stack research: Next.js 16 static export, Tailwind v4, JetBrains Mono
- `/home/mina/Projects/Portfolio Website/.planning/research/SUMMARY.md` — Research synthesis with Phase 1 as "Foundation"

---

## Code Context

No existing codebase — greenfield project. Phase 1 creates the foundation from scratch.

---

## Scope Guardrail

Phase 1 delivers **only** the page scaffold: design tokens, layout primitives, sticky navigation, and responsive breakpoints. No section content (hero, projects, skills, etc.), no scroll navigation logic, no deployment configuration. Those are Phase 2+.

---

*Context captured: 2026-09-14*
