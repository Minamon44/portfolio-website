# Project Research Summary

**Project:** Data Science Portfolio (Terminal-Native Aesthetic)
**Domain:** Personal portfolio website — static, single-page, resume-style
**Researched:** 2026-09-14
**Confidence:** HIGH

## Executive Summary

This is a personal data science portfolio website built as a static single-page application with a distinctive terminal-native aesthetic (cream canvas, monospaced typography, ASCII bracket markers). Experts in this domain build portfolios that prioritize case study depth over volume — 3-5 well-structured projects with problem-data-method-findings-impact narratives outperform 10 shallow notebook dumps. The terminal-native design from DESIGN.md is the key differentiator; every competing portfolio uses generic dark-mode glassmorphism or clean SaaS styling.

The recommended approach is Next.js 16 with static export (`output: 'export'`), Tailwind CSS v4 with `@theme` tokens, and GitHub Pages deployment. This stack is battle-tested for static portfolios: Next.js handles SEO metadata, sitemap, and font optimization natively; Tailwind v4's CSS-first configuration maps directly to DESIGN.md's design tokens; GitHub Pages provides zero-cost hosting with GitHub Actions CI/CD. The architecture follows content-data separation — all portfolio content lives in typed TypeScript files under `content/`, imported by section components — making updates trivial and type-safe.

The biggest risks are content quality (tutorial datasets, notebook dumps, accuracy bragging without business context) and design system drift (adding shadows, gradients, or sans-serif fonts that violate the terminal-native aesthetic). Both are preventable: enforce the case study structure from FEATURES.md for every project, and treat DESIGN.md as law — use only `@theme` tokens, never hardcode colors or fonts. The pitfall-to-phase mapping in PITFALLS.md provides specific prevention points for each phase.

## Key Findings

### Recommended Stack

Next.js 16 with App Router and static export is the clear winner. It provides the Metadata API (replacing `next-seo`), file-based sitemap/robots generation, font optimization via `next/font`, and Turbopack as the default bundler. Static export to GitHub Pages is a proven, zero-cost deployment path.

**Core technologies:**
- **Next.js 16.3.x** — React framework with App Router; static export via `output: 'export'` to `/out/`
- **React 19.2.x** — Ships with Next.js 16; React Compiler auto-memoizes
- **TypeScript 5.x** — Non-negotiable for content type safety
- **Tailwind CSS 4.3.x** — CSS-first `@theme` configuration replaces `tailwind.config.js`; maps directly to DESIGN.md tokens
- **@fontsource-variable/jetbrains-mono 5.3.x** — Self-hosted variable font, zero external requests, all weights in one file
- **Motion 13.x** — React animations (package renamed from `framer-motion`); scroll-triggered reveals
- **Lucide React** — Minimal usage; ASCII bracket markers are the primary visual language per DESIGN.md
- **clsx + tailwind-merge** — Conditional classnames with `cn()` helper pattern

**Deployment:** GitHub Actions + `actions/deploy-pages@v4` publishing `out/` directory. Requires `public/.nojekyll` (prevents Jekyll skipping `_next/`), `trailingSlash: true`, and `images: { unoptimized: true }` in next.config.ts.

**What NOT to use:** `next-seo`, `next-sitemap`, `shadcn/ui`, `Radix UI`, `class-variance-authority`, `framer-motion` (deprecated import), CSS Modules, styled-components.

### Expected Features

**Must have (table stakes):**
- Hero section with name, title, intro, and CTA (resume download) — first impression, 5-second rule
- Projects section with 3-5 case studies (problem→data→method→findings→impact→limitations) — the core of any DS portfolio
- Skills section with categorized technical proficiencies — recruiters filter by skills
- Experience section with professional timeline — shows career progression
- Education section with degrees and certifications — baseline credibility
- Contact section with email, LinkedIn, GitHub — recruiter needs to reach you
- Responsive layout (desktop + mobile) — 60%+ mobile traffic
- Smooth section navigation — single-page anchor-based scrolling
- GitHub links for each project — recruiters check code quality
- Data visualizations in project summaries — visual proof communicates faster than text
- Terminal-native design system from DESIGN.md — the differentiator

**Should have (competitive advantage):**
- End-to-end project case studies — #1 differentiator per every source
- Deployed interactive demos (Streamlit, Hugging Face Spaces) — live proof beats static notebooks
- Honest limitations & "what didn't work" — signals senior-level thinking
- Business impact quantification — "reduce churn by X%" beats "98% accuracy"
- Data sourcing documentation — shows real-world data handling

**Defer (v2+):**
- Blog integration — requires ongoing maintenance, dilute focus
- Interactive project explorer — only needed at 6+ projects
- Testimonials — needs colleague input
- Dark mode toggle — violates DESIGN.md single-theme decision
- Contact form — requires backend; direct email link is sufficient
- CMS/admin panel — static site edited in code

### Architecture Approach

The architecture follows a bottom-up build with content-data separation. All portfolio content lives in typed TypeScript files (`content/*.ts`), imported by section components that render it. A single `page.tsx` composes all sections in order. Three-tier design tokens (primitives → semantic → component) are defined in CSS via Tailwind v4 `@theme`. The build order is: design tokens → layout shell → content data + UI primitives → section components → scroll hooks → page composition. No global state management is needed — components are stateless renderers.

**Major components:**
1. **Design Token Layer** — `globals.css` with `@theme` tokens from DESIGN.md (colors, fonts, spacing, radii)
2. **Layout Layer** — `PageShell`, `SectionContainer` (96px rhythm), `Navigation` (sticky, 56px)
3. **Content Layer** — Typed data files (`hero.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`)
4. **UI Primitives** — `Badge`, `Button`, `ListRow`, `TimelineRow` (atoms from DESIGN.md)
5. **Section Components** — `HeroSection`, `ExperienceSection`, `ProjectsSection`, `SkillsSection`, `EducationSection`, `ContactSection`
6. **Hooks** — `useActiveSection` (scroll-spy), `useScrollToSection` (smooth scroll with offset)

**Critical path:** `globals.css` → `PageShell` → `Navigation` → `HeroSection` → `page.tsx` composition

**Parallelization:** Wave 1 (tokens + content data) → Wave 2 (layout + UI primitives) → Wave 3 (all sections in parallel) → Wave 4 (hooks + composition)

### Critical Pitfalls

1. **Tutorial Dataset Graveyard** — Titanic/Iris/MNIST projects signal tutorial-following, not problem-solving. Prevention: every project must use real-world or self-sourced data with documented sourcing narrative. Address in Phase 2 (Content).

2. **Notebook Dump Without Narrative** — Raw Jupyter output instead of structured case studies. Prevention: enforce Problem→Data→Method→Findings→Impact→Limitations structure. Link to GitHub for code; portfolio shows the story. Address in Phase 4 (Sections).

3. **Accuracy Bragging Without Business Context** — "98% accuracy" without explaining what problem was solved. Prevention: lead with business impact, use metrics as supporting evidence. Add "Limitations and Next Steps" sections. Address in Phase 2 (Content).

4. **Design System Drift** — Sans-serif fonts, drop shadows, gradients creeping in. Prevention: treat DESIGN.md as law, use `@theme` tokens exclusively, never hardcode colors. Address in Phase 1 (Foundation).

5. **Missing Responsive Breakpoints** — Desktop-first development breaks mobile. Prevention: mobile-first development, test at 640px/768px/1024px/1280px. DESIGN.md specifies: hero drops 38px→28px, section padding tightens 96px→64px→48px, nav collapses at 768px. Address in Phase 3 (UI Components).

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation — Design Tokens + Layout Shell
**Rationale:** Architecture dictates bottom-up build. Design tokens are the foundation for every component. Layout shell (PageShell, Navigation, SectionContainer) must exist before any section can render.
**Delivers:** `globals.css` with all `@theme` tokens, `PageShell`, `SectionContainer` (96px rhythm), `Navigation` (sticky nav), `cn()` utility, root layout with font setup.
**Addresses:** Terminal-native design system from DESIGN.md, responsive layout foundation.
**Avoids:** Design system drift — establishing token-only discipline from the first component.
**Stack:** Tailwind CSS v4 `@theme`, `@fontsource-variable/jetbrains-mono`, Next.js App Router layout.
**Research flags:** None — well-documented patterns.

### Phase 2: Content Data Files
**Rationale:** Content-data separation means data files can be built in parallel with Phase 1 (no UI dependency). Must complete before section components. This is where content quality pitfalls are prevented.
**Delivers:** Typed content files: `hero.ts`, `experience.ts`, `projects.ts` (3-5 case studies), `skills.ts`, `education.ts`. TypeScript interfaces for all data shapes.
**Addresses:** Hero section, Projects case studies, Skills, Experience, Education, Contact — all table-stakes features.
**Avoids:** Tutorial dataset graveyard (enforce real-world data), notebook dump (enforce case study structure), accuracy bragging (enforce business-first framing).
**Stack:** TypeScript interfaces, typed data arrays.
**Research flags:** Content quality review needed — ensure project narratives follow case study structure.

### Phase 3: UI Primitives
**Rationale:** Design-system atoms must exist before section components can use them. Depends on Phase 1 tokens for styling.
**Delivers:** `Badge.tsx` (bracket-marker badge), `Button.tsx` (primary/secondary variants), `ListRow.tsx` (ASCII-bracket list item), `TimelineRow.tsx` (timeline entry).
**Addresses:** Reusable components for all sections.
**Avoids:** Design system drift — components use only `@theme` tokens.
**Stack:** Tailwind CSS, React components.
**Research flags:** None — straightforward component extraction from DESIGN.md specs.

### Phase 4: Section Components
**Rationale:** Depends on Phase 1 (layout), Phase 2 (content data), and Phase 3 (UI primitives). Each section is independent and can be built in parallel once dependencies are met.
**Delivers:** `HeroSection`, `ExperienceSection`, `ProjectsSection`, `SkillsSection`, `EducationSection`, `ContactSection`. Each section imports from `content/` and renders using UI primitives.
**Addresses:** All portfolio sections, responsive behavior, data visualization anchors.
**Avoids:** Notebook dump (ProjectCard enforces structured layout), missing responsive breakpoints (mobile-first per DESIGN.md).
**Stack:** React components, Motion for scroll-triggered reveals.
**Research flags:** Section-specific research may be needed for ProjectsSection (complex card layout with data viz) and responsive behavior patterns.

### Phase 5: Scroll Navigation + Integration
**Rationale:** Depends on Phase 4 (sections must have IDs for scroll targeting). Last functional phase before polish.
**Delivers:** `useActiveSection` hook (IntersectionObserver scroll-spy), `useScrollToSection` hook (smooth scroll with 56px offset), `page.tsx` composition (imports and orders all sections), mobile navigation (hamburger drawer at 768px).
**Addresses:** Smooth section navigation, sticky nav with active state, mobile navigation.
**Avoids:** Navigation that disappears on scroll, slow scroll-to-section, no mobile navigation strategy.
**Stack:** IntersectionObserver API, `window.scrollTo`, React hooks.
**Research flags:** Mobile navigation pattern (hamburger drawer) may need research.

### Phase 6: Polish + Deployment
**Rationale:** Final phase. Depends on everything above. SEO, deployment, performance optimization, and final responsive testing.
**Delivers:** SEO metadata (OG tags, sitemap.ts, robots.ts), GitHub Actions deployment workflow, `public/.nojekyll`, responsive testing at all breakpoints, performance optimization (lazy loading below fold), custom 404 page, pre-launch checklist verification.
**Addresses:** SEO metadata, GitHub Pages deployment, performance, 404 handling.
**Avoids:** Missing .nojekyll, broken basePath, missing SEO metadata, broken external links.
**Stack:** GitHub Actions, `actions/deploy-pages@v4`, Next.js Metadata API.
**Research flags:** None — deployment patterns are well-documented.

### Phase Ordering Rationale

- **Bottom-up build:** Architecture requires tokens before layout, layout before sections, sections before navigation. This order is non-negotiable.
- **Content parallel with foundation:** Content data files have no UI dependency and can be built alongside Phase 1, but are sequenced as Phase 2 for clarity.
- **Sections before navigation:** Scroll-spy hooks need section IDs to target. Navigation is the integration layer.
- **Polish last:** SEO, deployment, and performance are finishing touches that depend on all functional components existing.
- **Pitfall prevention embedded:** Each phase has specific pitfalls it prevents (design drift in Phase 1, content quality in Phase 2, responsive in Phase 3-4, deployment in Phase 6).

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (Sections):** ProjectsSection complex card layout with data visualization embedding — may need research on chart integration patterns
- **Phase 5 (Navigation):** Mobile hamburger drawer pattern — specific implementation for terminal-native aesthetic

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Tailwind v4 `@theme` + Next.js layout — well-documented, established patterns
- **Phase 2 (Content):** TypeScript data files — straightforward typing
- **Phase 3 (UI Primitives):** Simple React components from DESIGN.md specs
- **Phase 6 (Polish):** GitHub Pages deployment — multiple verified guides

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Next.js 16 static export, Tailwind v4, Motion — all verified with official docs, current versions confirmed |
| Features | HIGH | 15+ authoritative sources (TailorCV, KDnuggets, nb-data.com, etc.) with strong consensus on case study structure and anti-patterns |
| Architecture | HIGH | Content-data separation, bottom-up build, single-page composition — standard patterns with clear rationale from DESIGN.md |
| Pitfalls | HIGH | Comprehensive coverage from multiple sources; pitfall-to-phase mapping provided; "looks done but isn't" checklist included |

**Overall confidence:** HIGH

### Gaps to Address

- **Project content quality:** The research defines WHAT good content looks like (case study structure, business framing, honest limitations) but the actual project narratives must be written during Phase 2. Content review should be a verification step.
- **Data visualization embedding:** How to include charts in project cards within a static export — may need research on chart libraries compatible with static rendering (Chart.js, Recharts, or static image generation).
- **Mobile navigation specifics:** DESIGN.md mentions hamburger drawer at 768px but doesn't specify the exact interaction pattern. Phase 5 planning should research this.
- **Font weight configuration:** `@fontsource-variable/jetbrains-mono` variable font weight axes need verification — ensure 400/500/700 load correctly.
- **GitHub Pages basePath:** If deploying to `username.github.io/repo-name/` (not `username.github.io`), `basePath` must be set. Confirm deployment target during Phase 6.

## Sources

### Primary (HIGH confidence)
- Next.js static export docs — https://nextjs.org/docs/pages/guides/static-exports (verified Sep 2026)
- Tailwind CSS v4 theme docs — https://tailwindcss.com/docs/theme (verified Sep 2026)
- Motion for React docs — https://motion.dev/docs/react (verified Sep 2026)
- @fontsource-variable/jetbrains-mono — https://www.npmjs.com/package/@fontsource-variable/jetbrains-mono (verified Sep 2026)
- GitHub Pages deployment guide — https://rahhuul.github.io/blog/nextjs-static-export-github-pages-guide/ (verified Sep 2026)
- Project DESIGN.md — terminal-native design system (project root)

### Secondary (MEDIUM confidence)
- TailorCV: Data Scientist Portfolio Guide — case study structure, tutorial dataset warnings, honest limitations emphasis
- KDnuggets: Building an End-to-End Portfolio Project — 9-stage pipeline framework
- nb-data.com: Portfolio Rubric — 6-dimension hiring manager rubric
- Learnist: 12 Mistakes to Avoid — anti-patterns and recovery strategies
- Portfolio Studio: Data Science Portfolio Website — case study structure (Problem-Data-Method-Findings-Impact-Limitations)
- Matt Chapman: The Portfolio That Got Me a Job — simplicity over complexity

### Tertiary (LOW confidence)
- Ali Jabbary: Portfolio That Gets You Hired 2026 — real question, messy data, deployed result (single source, needs validation)
- DataExpertise: How to Build a DS Portfolio 2026 — domain specialization recommendations (single source)

---
*Research completed: 2026-09-14*
*Ready for roadmap: yes*
