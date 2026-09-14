# Walking Skeleton — Data Science Portfolio

**Phase:** 1
**Generated:** 2026-09-14

## Capability Proven End-to-End

A visitor lands on the deployed portfolio homepage and sees a fully styled, responsive page scaffold with terminal-native design tokens — monospaced JetBrains Mono typography, warm cream canvas (#fdfcfc), near-black ink (#201d1d), ASCII bracket markers available, 96px section rhythm, and a 56px sticky navigation bar that stays fixed on scroll — before any portfolio content exists.

## Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 16 App Router with static export (`output: 'export'`) | Battle-tested for GitHub Pages; Turbopack default; native Metadata API replaces SEO plugins; React 19 support stable |
| Data layer | None (static content in TypeScript files) | No backend needed for portfolio; content edited in code; GitHub Pages serves static files only |
| Auth | None | No user accounts, no dynamic features; fully static site |
| Deployment target | GitHub Pages via GitHub Actions (`actions/deploy-pages@v4`) | Zero cost; automatic on push to main; `actions/upload-pages-artifact@v3` publishes `./out/` |
| Directory layout | `src/app/` (App Router), `src/components/layout/` (PageShell, SectionContainer, Navigation), `src/components/ui/` (future primitives), `content/` (Phase 2+ data files) | Feature-adjacent layout primitives; content-data separation for type safety and maintainability |
| Styling | Tailwind CSS v4 with `@theme` directive in `globals.css` | CSS-first token configuration maps directly to DESIGN.md; no `tailwind.config.js`; ~70% smaller output |
| Typography | `@fontsource-variable/jetbrains-mono` (variable font, self-hosted) | Single file for all weights (400/500/700); zero external requests; `font-display: swap` for zero CLS |
| Animations | `motion` (formerly Framer Motion) | React animations for scroll-triggered reveals in Phase 3+; lightweight (~15KB) |

## Stack Touched in Phase 1

- [x] Project scaffold (Next.js 16, TypeScript, Tailwind v4, ESLint, Turbopack)
- [x] Routing — single page at `/` with anchor-based section navigation
- [x] Database — N/A (static content, no database)
- [x] UI — Sticky navigation (56px) with ASCII wordmark + 6 section links; 6 SectionContainers with 96px rhythm; PageShell root layout
- [x] Deployment — GitHub Actions workflow configured; `next.config.ts` with `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`; `public/.nojekyll` present; ready for `git push origin main`

## Out of Scope (Deferred to Later Slices)

> Anything that is *not* in the skeleton. Be explicit — this list prevents future phases from re-litigating Phase 1's minimalism.

- Hero section content (name, title, intro, CTA) — Phase 2
- Projects section with case studies — Phase 2/3
- Skills/Experience/Education/Contact sections — Phase 2/3
- Mobile hamburger navigation drawer — Phase 4
- Scroll-spy active nav highlighting — Phase 4
- SEO metadata (Open Graph, sitemap, robots) — Phase 5
- Custom 404 page — Phase 5
- Performance optimization (lazy loading, image optimization) — Phase 5
- Data visualization embedding in projects — Phase 3/4
- Resume/CV PDF download — Phase 2

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without altering its architectural decisions:

- **Phase 2:** Content Data Files — Typed TypeScript data for all sections (hero, projects, skills, experience, education, contact) with real-world narratives
- **Phase 3:** Section Components — All portfolio sections rendered as visible, styled React components consuming content data
- **Phase 4:** Scroll Navigation + Integration — Smooth scroll, scroll-spy active state, mobile hamburger menu, page composition
- **Phase 5:** Polish + Deployment — SEO metadata, GitHub Pages deployment verification, performance, 404 handling, pre-launch checklist