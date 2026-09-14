# Discussion Log: 01 - Foundation

**Phase:** 1 — Foundation
**Date:** 2026-09-14
**Project:** Data Science Portfolio

---

## Discussion Summary

Two gray areas discussed, both resolved with recommended approaches.

---

## Area 1: Tailwind v4 @theme Token Mapping

**Options presented:**
1. Full token parity (Recommended) — Map all DESIGN.md tokens to @theme
2. Minimal token mapping — Colors and spacing only
3. Hybrid approach — Font in @theme, rest in CSS variables

**User selection:** Full token parity (Recommended)

**Rationale:** DESIGN.md is the single source of truth. Full parity ensures zero drift. Tailwind v4's @theme directive is built for CSS-first token configuration.

**Decision:** Define all color, spacing, typography, and rounded tokens as CSS custom properties in globals.css @theme block. Use @fontsource-variable/jetbrains-mono for self-hosted font.

---

## Area 2: Responsive Breakpoint Mapping

**Options presented:**
1. Full 5-breakpoint mapping (Recommended) — All 5 DESIGN.md breakpoints as custom names
2. Default + 1 custom — Tailwind defaults + 850px tablet
3. Defaults only — Map DESIGN.md to closest Tailwind defaults

**User selection:** Full 5-breakpoint mapping (Recommended)

**Rationale:** DESIGN.md specifies precise breakpoint behavior. Custom breakpoint names preserve design intent exactly.

**Decision:** Extend Tailwind with custom breakpoints:
- `--breakpoint-desk-lg: 1280px`
- `--breakpoint-desk: 1024px`
- `--breakpoint-tab: 850px`
- `--breakpoint-tab-narrow: 768px`
- `--breakpoint-mob: 640px`

Usage: `desk-lg:`, `desk:`, `tab:`, `tab-narrow:`, `mob:`

---

## Additional Decisions (Agent Discretion)

### Sticky Nav Implementation
**Decision:** CSS `position: sticky` with `top: 0` and `z-index: 50` on nav element. 56px height from DESIGN.md creates scroll offset for anchor links.

### Component Structure
**Decision:** Three layout primitives in Phase 1:
- `PageShell` — Root layout wrapper with sticky nav and main content
- `SectionContainer` — 96px vertical rhythm, max-width 960px
- `Navigation` — 56px sticky nav bar with ASCII wordmark placeholder

---

## Deferred Ideas

- Dark hero TUI mockup → Phase 3 (Section Components)
- Animation/transition tokens → Phase 3+ (Motion)
- Font weight axis verification → During implementation

---

## Scope Guardrail Enforced

Phase 1 delivers ONLY: design tokens, layout primitives, sticky navigation, responsive breakpoints.
NOT included: section content, scroll navigation logic, deployment configuration.

---

*Log created: 2026-09-14*
