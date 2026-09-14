# Pitfalls Research

**Domain:** Data science portfolio website (terminal-native aesthetic)
**Researched:** 2026-09-14
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Tutorial Dataset Graveyard

**What goes wrong:**
Portfolio showcases Titanic, Iris, MNIST, or House Prices projects — the same datasets every bootcamp graduate uses. Recruiters see these and immediately discount the candidate as someone who can follow tutorials but not solve real problems.

**Why it happens:**
Tutorial datasets are the path of least resistance. They come pre-cleaned, have known solutions, and are easy to find. Developers don't realize that hiring managers have seen Titanic predictions thousands of times.

**How to avoid:**
Every project must use real-world, self-sourced, or messy data. Document the data sourcing process explicitly. If a project uses a common dataset, it must demonstrate novel analysis beyond the standard approach (e.g., Titanic with survival analysis deep-dive, not just accuracy reporting). Better yet: use Kaggle datasets with domain-specific framing, public government data, or self-collected data.

**Warning signs:**
- Project descriptions mention "Titanic," "Iris," "House Prices," "MNIST"
- No mention of data sourcing, cleaning, or real-world context
- Notebook starts with `pd.read_csv('train.csv')` and no context

**Phase to address:**
Phase 2 (Content) — project data files must include data sourcing narrative and reject tutorial-only projects.

---

### Pitfall 2: Notebook Dump Without Narrative

**What goes wrong:**
Project sections show raw Jupyter notebook output — code cells, warning messages, matplotlib default styles — instead of a structured case study. The visitor sees output artifacts, not a professional analysis.

**Why it happens:**
Developers think the code speaks for itself. They copy-paste notebook cells into portfolio sections or link to a Colab notebook without curating the presentation.

**How to avoid:**
Every project must follow the case study structure from FEATURES.md: Problem → Data → Method → Findings → Impact → Limitations. Visualizations should be cleaned and styled (not matplotlib defaults). Link to GitHub repos for code — the portfolio shows the story, not the cells.

**Warning signs:**
- Project cards show raw code snippets without context
- Visualizations look like unstyled matplotlib/seaborn defaults
- No narrative between "here's the data" and "here's the model"
- Missing impact or limitations sections

**Phase to address:**
Phase 3 (UI Components) — ProjectCard component must enforce structured layout with narrative sections.

---

### Pitfall 3: Accuracy Bragging Without Business Context

**What goes wrong:**
Projects lead with "98% accuracy!" or "R² = 0.97" without explaining what problem was solved, why it matters, or what business outcome it drives. Recruiters see a number, not competence.

**Why it happens:**
Data scientists are trained to optimize metrics. They assume technical accuracy = proof of skill. But hiring managers care about problem framing, decision-making, and impact.

**How to avoid:**
Lead with business impact, not model metrics. Example: "This model identifies at-risk customers 30 days before churn, enabling targeted retention campaigns" beats "92% AUC on test set." Include metrics as supporting evidence, not the headline. Add "Limitations and Next Steps" sections to show maturity.

**Warning signs:**
- Project descriptions open with a metric number
- No mention of business context or real-world application
- Missing limitations or "what I didn't try" sections
- AutoML-only projects without manual modeling comparison

**Phase to address:**
Phase 2 (Content) — project content templates must require business framing before metrics.

---

### Pitfall 4: Design System Drift

**What goes wrong:**
Components slowly deviate from DESIGN.md's terminal-native aesthetic. Sans-serif fonts creep into secondary text. Drop shadows appear on cards. Gradient backgrounds replace the cream canvas. The portfolio loses its distinctive identity and becomes another generic template.

**Why it happens:**
The design system is austere. Developers second-guess "is this enough?" and add visual embellishments. Tailwind makes it easy to add `shadow-md` or `bg-gradient-to-r` without thinking about the design philosophy.

**How to avoid:**
Treat DESIGN.md as law, not inspiration. Use the `@theme` tokens exclusively — never hardcode colors or fonts. Create a linting rule or pre-commit check that flags non-token color values. The system's strength is its restraint: "There are no drop shadows in the system. Nothing lifts, nothing floats."

**Warning signs:**
- Any usage of `shadow-*` utility classes
- Any sans-serif font references (Inter, Roboto, system-ui)
- Colors not from the DESIGN.md palette
- Gradient backgrounds (`bg-gradient-*`)
- SVG icons replacing ASCII bracket markers

**Phase to address:**
Phase 1 (Foundation) — establish token-only styling discipline from the first component.

---

### Pitfall 5: Missing Responsive Breakpoints

**What goes wrong:**
The portfolio looks great on desktop but is unreadable on mobile. Text overflows containers, navigation is unusable, project cards stack poorly, and the 96px section rhythm becomes excessive on small screens.

**Why it happens:**
Desktop-first development. The developer builds at 1280px width and never tests at 640px. Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) are easy to forget.

**How to avoid:**
Mobile-first development. Build the mobile layout first, then enhance for larger screens. DESIGN.md specifies responsive behavior: hero display drops 38px → ~28px, section padding tightens from 96px → 64px → 48px, navigation collapses to hamburger drawer at 768px. Test at every breakpoint during development.

**Warning signs:**
- No `sm:` or `md:` responsive classes in component code
- Fixed pixel widths that don't adapt
- Navigation that doesn't collapse on mobile
- Section padding that doesn't tighten at smaller viewports
- Touch targets below 36px height

**Phase to address:**
Phase 3 (UI Components) — every component must be built with responsive behavior from the start.

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcoded content in JSX | Faster initial build | Content changes require editing component code; no type safety on content structure | Never — use content/ data files per ARCHITECTURE.md |
| Non-token colors (`bg-[#123456]`) | Quick visual fix | Drifts from design system; inconsistent styling across components | Never — use DESIGN.md tokens |
| Skipping `trailingSlash: true` | Faster config | Broken links on GitHub Pages (all paths become /path/index.html) | Never — GitHub Pages requirement |
| Skipping `images: { unoptimized: true }` | Cleaner config | Build fails for static export (no server for image optimization) | Never — static export requirement |
| Adding `next-seo` or `next-sitemap` | Familiar SEO tool | Redundant with Next.js App Router Metadata API; extra dependency | Never — built-in API covers everything |
| Using `framer-motion` import | Muscle memory from older projects | Deprecated package name; still works but signals outdated knowledge | Acceptable during migration — use `motion/react` |
| Omitting `public/.nojekyll` | Don't know about it | GitHub Pages ignores `_next/` directories (Jekyll skips underscored paths) | Never — required for Next.js on GitHub Pages |
| Global state management (Redux, Zustand) | "What if I need it?" | Massive overkill for a static site with zero dynamic state | Never — components are stateless renderers |

## Integration Gotchas

Common mistakes when connecting to external services.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| GitHub Pages | Deploying from `main` branch directly | Use GitHub Actions with `actions/deploy-pages@v4` — publish from `out/` directory |
| GitHub Pages | Forgetting `basePath` for non-username repos | If deploying to `username.github.io/repo-name/`, uncomment `basePath: '/repo-name'` in next.config.ts |
| GitHub Pages | Missing `.nojekyll` file | Create empty `public/.nojekyll` — prevents Jekyll from ignoring `_next/` |
| GitHub Pages | Using `gh-pages` branch with modern Actions | Use `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4` — no branch needed |
| JetBrains Mono font | Loading from Google Fonts CDN | Self-host via `@fontsource-variable/jetbrains-mono` — zero external requests, faster load |
| Static export | Using `next/image` without config | Set `images: { unoptimized: true }` in next.config.ts — no server for optimization |
| Static export | Using API routes or server actions | Remove all server-side code — static export cannot include API routes |
| Tailwind CSS v4 | Using v3 `tailwind.config.js` | v4 uses CSS-first `@theme` in globals.css — no config file needed |
| Motion (framer-motion) | Importing from `framer-motion` | Import from `motion/react` — `framer-motion` is the deprecated name |

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unoptimized images (static export) | Slow LCP, large bundle size | Use `next/image` with `unoptimized: true`, compress images before build, use WebP format | Breaks immediately — static export has no server-side optimization |
| Missing `font-display: swap` | FOIT (flash of invisible text) while font loads | `@fontsource-variable/jetbrains-mono` includes swap by default; verify in network tab | Breaks at any network speed — visible blank text during load |
| Large JavaScript bundle from animations | Slow TTI on mobile, jank during scroll | Motion is ~15KB; avoid importing the entire library. Tree-shake unused animation variants | Breaks on mobile devices with slower processors |
| No lazy loading below the fold | All sections load at once even if not visible | Use React.lazy or dynamic imports for sections below the fold (Projects, Skills, Education) | Breaks as content grows — more sections = larger initial load |
| Inline styles in content data | Hard to maintain, no Tailwind purging | Use Tailwind classes in content data, not style objects | Minor — but makes token-based theming impossible |

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Exposing personal email in HTML | Email scraping by bots | Use a mailto link with encoded address, or link to a contact form on a separate page (but we're static, so mailto is acceptable) |
| Hardcoding API keys for demo deployments | Key exposure in static output | Never put API keys in client-side code. If demos use external APIs, proxy through a serverless function |
| Linking to private GitHub repos | 404 errors for recruiters | Verify all linked repos are public before launch. Add a pre-launch checklist item |
| Including real client data in project descriptions | Privacy/compliance violation | Anonymize all client names and data. Use "a Fortune 500 retailer" not "Walmart" |
| Missing Content Security Policy | XSS risk from user-generated content | Not critical for static site, but add CSP headers via GitHub Pages config if possible |

## UX Pitfalls

Common user experience mistakes in portfolio sites.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No clear CTA in hero section | Visitor doesn't know what to do next | Hero must have a prominent call-to-action: "Download Resume" or "View Projects" |
| Navigation that disappears on scroll | Visitor loses orientation in long page | Sticky nav with section-aware active state (use IntersectionObserver) |
| Project cards without links | Visitor can't explore the actual work | Every project card must link to GitHub repo and/or live demo |
| Too much text, no visual anchors | Visitor scans but doesn't read | Each project needs 1-2 key visualizations as visual anchors (per FEATURES.md) |
| No mobile navigation strategy | Mobile visitors can't navigate between sections | Hamburger menu or collapsible nav at 768px breakpoint |
| Slow scroll-to-section | Visitor clicks nav, waits for scroll to finish | Use `behavior: 'smooth'` with offset calculation for fixed nav height (56px) |
| No loading state indicator | Visitor sees blank page during font load | Use `font-display: swap` and ensure body text is visible immediately |
| Footer links that 404 | Broken trust — visitor sees unprofessional errors | Pre-launch: verify every external link works |

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Hero section:** Often missing the CTA button — verify resume download link works
- [ ] **Project cards:** Often missing GitHub links — verify every project has a working repo link
- [ ] **Responsive layout:** Often looks fine at 1280px but breaks at 640px — verify mobile layout
- [ ] **Navigation:** Often missing active state tracking — verify scroll-spy highlights current section
- [ ] **Footer:** Often missing or generic — verify it follows DESIGN.md's caption-md typography
- [ ] **SEO metadata:** Often missing OG tags — verify `metadata` export in layout.tsx
- [ ] **Font loading:** Often misses JetBrains Mono — verify font loads and renders monospaced everywhere
- [ ] **404 handling:** Often missing — GitHub Pages returns generic 404; add a custom `app/not-found.tsx`
- [ ] **Base path:** Often forgotten for non-username repos — verify `basePath` is set correctly in next.config.ts
- [ ] **Content data types:** Often loosely typed — verify all content files have strict TypeScript interfaces

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Tutorial dataset projects | LOW | Replace project content with real-world data projects; update content/projects.ts |
| Notebook dump | MEDIUM | Rewrite project narratives following case study structure; restyle visualizations |
| Accuracy bragging | LOW | Rewrite project descriptions to lead with business impact; add limitations sections |
| Design system drift | MEDIUM | Audit all components against DESIGN.md tokens; replace hardcoded values with tokens |
| Missing responsive | MEDIUM | Add responsive classes to existing components; test at each breakpoint |
| Broken GitHub Pages deploy | LOW | Add missing `.nojekyll`, verify `basePath`, check `next.config.ts` settings |
| Missing font | LOW | Add `@fontsource-variable/jetbrains-mono` import; verify in layout.tsx |
| 404 links | LOW | Audit all external links; fix or remove broken ones |

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Tutorial dataset graveyard | Phase 2 (Content) | Review all project data sources; reject tutorial-only datasets |
| Notebook dump without narrative | Phase 2 (Content) | Verify each project has problem-data-method-findings-impact structure |
| Accuracy bragging | Phase 2 (Content) | Verify business context leads, metrics support |
| Design system drift | Phase 1 (Foundation) | Audit component code against DESIGN.md tokens |
| Missing responsive breakpoints | Phase 3 (UI Components) | Test at 640px, 768px, 1024px, 1280px viewports |
| Missing .nojekyll | Phase 5 (Deployment) | Verify public/.nojekyll exists before first deploy |
| Broken base path | Phase 5 (Deployment) | Verify basePath matches GitHub repo name |
| Missing SEO metadata | Phase 6 (Polish) | Verify metadata export, OG tags, sitemap.xml, robots.txt |
| Navigation scroll-spy | Phase 3 (UI Components) | Verify active section highlights on scroll |
| Mobile navigation | Phase 3 (UI Components) | Verify hamburger drawer at 768px breakpoint |

## Sources

- [TailorCV: Data Scientist Portfolio Guide](https://thetailorcv.com/blog/data-scientist-portfolio-guide) — tutorial dataset warning, case study structure, honest limitations emphasis
- [Learnist: 12 Mistakes to Avoid](https://www.learnist.org/data-science-portfolio-mistakes-2026/) — anti-patterns: tutorial datasets, no business question, data leakage, no documentation
- [nb-data.com: Portfolio Rubric](https://www.nb-data.com/p/the-portfolio-rubric-data-science) — 6-dimension rubric for hiring managers
- [Matt Chapman: Portfolio That Got Me a Job](https://towardsdatascience.com/the-portfolio-that-got-me-a-data-scientist-job-513cc821bfe4/) — simplicity over complexity, short descriptions
- [Ali Jabbary: Portfolio That Gets You Hired 2026](https://alijabbary.com/blog/portfolio-that-gets-you-hired-2026/) — real question, messy data, deployed result
- [Next.js static export docs](https://nextjs.org/docs/pages/guides/static-exports) — `output: 'export'` requirements and limitations
- [GitHub Pages deployment guide](https://rahhuul.github.io/blog/nextjs-static-export-github-pages-guide/) — `.nojekyll`, `basePath`, image optimization gotchas
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs/theme) — `@theme` directive replaces config file
- DESIGN.md terminal-native design system (project root) — "no drop shadows, nothing lifts, nothing floats"

---
*Pitfalls research for: Data Science Portfolio*
*Researched: 2026-09-14*
