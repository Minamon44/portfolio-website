# Roadmap: Data Science Portfolio

**Created:** 2026-09-14
**Completed:** 2026-09-14
**Granularity:** Standard (5 phases)
**Mode:** MVP (Vertical slices per phase)
**Status:** ✓ Complete

## Phases

- [x] **Phase 1: Foundation** — Design tokens, layout shell, and responsive scaffolding
- [x] **Phase 2: Content Data Files** — Typed TypeScript content for all sections
- [x] **Phase 3: Section Components** — All portfolio sections rendered with content data
- [x] **Phase 4: Scroll Navigation + Integration** — Smooth scrolling, scroll-spy, mobile nav, page composition
- [x] **Phase 5: Polish + Deployment** — SEO, GitHub Pages deployment, performance, 404 handling

## Phase Details

### Phase 1: Foundation ✓
**Goal:** Visitors see a fully styled, responsive page scaffold with terminal-native design tokens — monospaced typography, warm cream canvas, ASCII bracket markers, and sticky navigation — before any portfolio content exists.
**Mode:** mvp
**Depends on:** Nothing (first phase)
**Requirements**: LAYOUT-01, LAYOUT-02, LAYOUT-03
**Success Criteria** (what must be TRUE):
  1. Page renders with JetBrains Mono as the only font family across all text roles — zero sans-serif
  2. Background is warm cream (#fdfcfc) with near-black (#201d1d) ink, verified across all text elements
  3. Layout adapts visibly at desktop (1280px+), tablet (768-1024px), and mobile (<640px) breakpoints
  4. Sticky navigation bar (56px) is visible and stays fixed on scroll
  5. Section containers maintain 96px vertical rhythm between sections
**Plans**: 01-01 (Foundation Scaffold), 01-02 (Deployment + Verification)

### Phase 2: Content Data Files ✓
**Goal:** All portfolio content exists as typed TypeScript data files with real-world project narratives following the case study structure — ready for section components to consume.
**Mode:** mvp
**Depends on:** Phase 1
**Requirements**: HERO-01, HERO-02, PROJ-01, PROJ-02, PROJ-03, PROJ-04, PROJ-05, SKILLS-01, EXP-01, EDU-01, CONTACT-01
**Success Criteria** (what must be TRUE):
  1. Hero data includes name, title, intro paragraph, and a working CTA link (resume download or email)
  2. 3-5 project case studies each have Problem, Data, Method, Findings, and Impact sections — no tutorial datasets (Titanic/Iris/MNIST)
  3. Each project includes a GitHub repository link and at least one data visualization anchor (chart description or embed)
  4. Project narratives lead with business impact quantification, not accuracy scores
  5. Skills data is categorized into languages, frameworks, tools, and domain expertise — all entries are real proficiencies
**Plans**: 02-01 (Content Data Files)

### Phase 3: Section Components ✓
**Goal:** Every portfolio section is rendered as a visible, styled React component with content data — hero, projects, skills, experience, education, and contact sections all appear on the page.
**Mode:** mvp
**Depends on:** Phase 1, Phase 2
**Requirements**: HERO-01, PROJ-01, PROJ-02, SKILLS-01, EXP-01, EDU-01, CONTACT-01
**Success Criteria** (what must be TRUE):
  1. Hero section displays name, professional title, short intro, and a visible call-to-action link
  2. Projects section renders 3-5 case study cards with problem/data/method/findings/impact structure and GitHub links
  3. Skills section shows categorized proficiencies using ASCII bracket markers from the design system
  4. Experience section displays a professional timeline with career progression and key achievements
  5. Education section shows degrees, certifications, and courses with proper formatting
  6. Contact section displays email, LinkedIn, and GitHub links — all are clickable and lead to correct destinations
**Plans**: 03-01 (Section Components)

### Phase 4: Scroll Navigation + Integration ✓
**Goal:** The single-page portfolio functions as a cohesive experience — smooth scroll between sections, active navigation state reflects current position, and mobile users can navigate via a hamburger menu.
**Mode:** mvp
**Depends on:** Phase 3
**Requirements**: LAYOUT-01
**Success Criteria** (what must be TRUE):
  1. Clicking a navigation link smoothly scrolls to the corresponding section with a 56px offset (below sticky nav)
  2. The navigation bar highlights the currently visible section as the user scrolls
  3. On mobile (<768px), a hamburger menu provides access to all section links
  4. All sections are composed in correct order on a single page — no missing sections, no duplicate rendering
**Plans**: 04-01 (Scroll Navigation + Integration)

### Phase 5: Polish + Deployment ✓
**Goal:** The portfolio is live on GitHub Pages, passes basic SEO checks, handles edge cases (404, performance), and is ready for recruiters to visit.
**Mode:** mvp
**Depends on:** Phase 4
**Requirements**: DEPLOY-01, DEPLOY-02
**Success Criteria** (what must be TRUE):
  1. Site deploys to GitHub Pages via GitHub Actions — accessible at the public URL
  2. `next.config.ts` has `output: 'export'`, `trailingSlash: true`, and `images: { unoptimized: true }`
  3. `.nojekyll` file exists in the public directory — GitHub Pages serves `_next/` assets correctly
  4. Page includes SEO metadata (title, description, Open Graph tags) visible in browser dev tools
  5. Custom 404 page exists and displays a styled error message
**Plans**: 05-01 (Polish + Deployment)

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/2 | ✓ Complete | 2026-09-14 |
| 2. Content Data Files | 1/1 | ✓ Complete | 2026-09-14 |
| 3. Section Components | 1/1 | ✓ Complete | 2026-09-14 |
| 4. Scroll Navigation + Integration | 1/1 | ✓ Complete | 2026-09-14 |
| 5. Polish + Deployment | 1/1 | ✓ Complete | 2026-09-14 |

---
*Roadmap created: 2026-09-14*
*Roadmap completed: 2026-09-14*
