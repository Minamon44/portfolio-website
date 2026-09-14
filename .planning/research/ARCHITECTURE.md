# Architecture Research

**Domain:** Data Science Portfolio (React/Next.js Static Export)
**Researched:** 2026-09-14
**Confidence:** HIGH

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Hero   │  │ Experience│  │ Projects │  │  Skills  │        │
│  │ Section │  │ Section  │  │ Section  │  │ Section  │        │
│  └────┬────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘        │
│       │            │            │            │              │
│  ┌────┴────┐  ┌────┴─────┐  ┌────┴─────┐                   │
│  │Education│  │ Contact  │  │  Footer  │                   │
│  │ Section │  │ Section  │  │ Section  │                   │
│  └─────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│                    Layout Layer                              │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Navigation (sticky nav)                 │    │
│  │              PageShell (single-page wrapper)         │    │
│  │              SectionContainer (96px rhythm)          │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    Design Token Layer                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │ Primitives│  │ Semantic │  │Component │                   │
│  │ (colors, │  │ (roles:  │  │ (button- │                   │
│  │ spacing) │  │  bg, ink)│  │  primary)│                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer                                │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │ content/ │  │ content/ │  │ content/ │                   │
│  │ hero.ts  │  │experience│  │projects.ts│                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **HeroSection** | Name, title, intro, CTA — the first impression | Dark surface card with monospaced typography |
| **ExperienceSection** | Professional timeline with roles and achievements | Timeline rows with ASCII bracket markers |
| **ProjectsSection** | Showcase 3-5 data science projects with summaries | Card grid with problem/method/result structure |
| **SkillsSection** | Technical proficiencies grouped by category | Categorized list with bracket markers |
| **EducationSection** | Degrees, certifications, courses | Timeline-style rows |
| **ContactSection** | Email, LinkedIn, GitHub links | Icon row with monospaced labels |
| **Navigation** | Sticky top nav with section links | 56px height, section-aware active state |
| **Footer** | Copyright and utility links | Caption typography, hairline border |
| **PageShell** | Single-page wrapper composing all sections | Scrollable container with 96px section rhythm |

## Recommended Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: fonts, metadata, global styles
│   ├── page.tsx                  # Single page: imports and composes all sections
│   └── globals.css               # Tailwind imports + design tokens (@theme)
│
├── components/                   # UI components
│   ├── layout/                   # Structural primitives
│   │   ├── PageShell.tsx         # Single-page wrapper
│   │   ├── SectionContainer.tsx  # 96px rhythm section wrapper
│   │   └── Navigation.tsx        # Sticky nav with section links
│   │
│   ├── sections/                 # Portfolio sections (organisms)
│   │   ├── HeroSection.tsx       # Hero with dark surface card
│   │   ├── ExperienceSection.tsx # Timeline rows
│   │   ├── ProjectsSection.tsx   # Project cards with data flow
│   │   ├── SkillsSection.tsx     # Categorized skill list
│   │   ├── EducationSection.tsx  # Degrees and certifications
│   │   └── ContactSection.tsx    # Contact links
│   │
│   └── ui/                       # Design-system primitives (atoms)
│       ├── Badge.tsx             # Bracket-marker badge
│       ├── Button.tsx            # Primary/secondary button variants
│       ├── ListRow.tsx           # ASCII-bracket list item
│       └── TimelineRow.tsx       # Timeline entry component
│
├── content/                      # Static content (data layer)
│   ├── hero.ts                   # Name, title, intro, CTA text
│   ├── experience.ts             # Professional experience entries
│   ├── projects.ts               # Project entries with metadata
│   ├── skills.ts                 # Technical skill categories
│   └── education.ts              # Degrees and certifications
│
├── hooks/                        # Custom React hooks
│   ├── useActiveSection.ts       # Scroll-spy for section tracking
│   └── useScrollToSection.ts     # Smooth scroll with offset calc
│
├── lib/                          # Utilities
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
│
└── types/                        # TypeScript interfaces
    ├── experience.ts             # ExperienceEntry type
    ├── project.ts                # ProjectEntry type
    └── section.ts                # SectionNav type
```

### Structure Rationale

- **components/sections/**: Each portfolio section is a self-contained organism that owns its layout and data rendering. Sections are NOT routes — they are components composed into a single page.
- **content/**: All portfolio content lives in typed data files, NOT hardcoded in components. This separates content from presentation and makes updates trivial.
- **components/ui/**: Design-system atoms (buttons, badges, list rows) extracted from DESIGN.md token definitions. Reusable across sections.
- **hooks/**: Scroll-based navigation logic (active section tracking, smooth scroll) is extracted from components into dedicated hooks for testability.
- **types/**: TypeScript interfaces for every data shape. Ensures content files match component prop expectations.

## Architectural Patterns

### Pattern 1: Content-Data Separation

**What:** All portfolio content lives in typed data files under `content/`, NOT inside component JSX. Components receive data via imports and render it.

**When to use:** Always for static portfolio sites. Content changes frequently; components change rarely.

**Trade-offs:**
- (+) Updating content requires editing one data file, not hunting through JSX
- (+) Type safety catches content structure errors at build time
- (+) Easy to swap content for different audiences (e.g., different resume versions)
- (-) Extra indirection layer (minor)

**Example:**
```typescript
// content/projects.ts
export const PROJECTS: ProjectEntry[] = [
  {
    title: "Customer Churn Prediction",
    description: "Predicted which customers will churn in the next 30 days...",
    problem: "Retention outreach prioritization",
    method: "Gradient boosting with feature engineering",
    result: "87% AUC, identified 3 key churn indicators",
    technologies: ["Python", "XGBoost", "pandas", "scikit-learn"],
    githubUrl: "https://github.com/...",
  },
];

// components/sections/ProjectsSection.tsx
import { PROJECTS } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
```

### Pattern 2: Section Composition via Page Shell

**What:** A single `page.tsx` orchestrates all sections in order. Each section is a self-contained component with its own `id` for scroll targeting.

**When to use:** Single-page portfolios. Avoids routing overhead while maintaining clean component boundaries.

**Trade-offs:**
- (+) Simple mental model — one page, many sections
- (+) Smooth scroll navigation without route changes
- (+) Better SEO for a single-page resume-style site
- (-) All sections load together (mitigated by static export)

**Example:**
```typescript
// app/page.tsx
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
```

### Pattern 3: Three-Tier Design Tokens

**What:** Design tokens organized in three layers — primitives (raw values), semantic (roles), and component (specific overrides). All defined in CSS via Tailwind v4 `@theme`.

**When to use:** Always. The terminal-native design system from DESIGN.md maps perfectly to this pattern.

**Trade-offs:**
- (+) Single source of truth for all visual decisions
- (+) Components reference semantic tokens, not raw values
- (+) Easy to adjust primitives without touching component code
- (-) Slight upfront overhead defining the token hierarchy

**Example:**
```css
/* globals.css */
@import "tailwindcss";

/* Tier 1: Primitives (raw palette from DESIGN.md) */
@theme {
  --color-ink: #201d1d;
  --color-ink-deep: #0f0000;
  --color-canvas: #fdfcfc;
  --color-surface-soft: #f8f7f7;
  --color-surface-card: #f1eeee;
  --color-surface-dark: #201d1d;
  --color-hairline: rgba(15,0,0,0.12);
  --color-accent: #007aff;
  --color-muted: #646262;
  --color-body: #424245;

  --font-mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;

  --spacing-section: 96px;
  --radius-sm: 4px;
  --radius-none: 0px;
}

/* Tier 2: Semantic (role-based aliases) */
:root {
  --bg: var(--color-canvas);
  --fg: var(--color-ink);
  --fg-body: var(--color-body);
  --fg-muted: var(--color-muted);
  --border: var(--color-hairline);
  --surface: var(--color-surface-soft);
  --surface-card: var(--color-surface-card);
}

/* Tier 3: Component (only where needed) */
/* Typically empty for this project — semantic tokens cover most cases */
```

## Data Flow

### Request Flow (Static Export)

```
Build Time:
  content/*.ts → page.tsx → sections → Static HTML/CSS/JS → out/

Runtime (Browser):
  User scrolls → useActiveSection hook → Navigation highlights
  User clicks nav → useScrollToSection → smooth scroll to section id
```

### State Management

```
┌─────────────────────────────────────────┐
│           React State (minimal)          │
├─────────────────────────────────────────┤
│  useActiveSection                       │
│    ↓ (scroll position)                  │
│  Navigation (active section highlight)  │
│                                         │
│  useScrollToSection                     │
│    ↓ (click handler)                    │
│  window.scrollTo (smooth)               │
└─────────────────────────────────────────┘

No global state needed — this is a static site.
Components are stateless renderers of content data.
```

### Key Data Flows

1. **Content → Components:** `content/*.ts` files import into section components. Components render data directly. No fetching, no loading states.
2. **Scroll → Navigation:** `useActiveSection` hook uses `IntersectionObserver` or scroll position to track which section is visible. Navigation updates active link.
3. **Navigation Click → Scroll:** `useScrollToSection` hook calculates offset for fixed nav height, calls `window.scrollTo({ behavior: 'smooth' })`.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k visitors | Current architecture is perfect — static export on GitHub Pages |
| 1k-100k visitors | No changes needed — GitHub Pages CDN handles this trivially |
| 100k+ visitors | Still fine — static files are cacheable; no dynamic content |

### Scaling Priorities

1. **First bottleneck:** None expected — this is a static portfolio on GitHub Pages
2. **Second bottleneck:** N/A — architecture is intentionally simple

## Anti-Patterns

### Anti-Pattern 1: Content Inside Components

**What people do:** Hardcode portfolio content directly in JSX (e.g., `<p>I am a data scientist...</p>` inside `HeroSection.tsx`).

**Why it's wrong:** Content changes require editing component code. No type safety on content structure. Impossible to swap content for different audiences.

**Do this instead:** Keep all content in typed data files under `content/`. Components receive data via imports and render it.

### Anti-Pattern 2: Routes for Sections

**What people do:** Create separate routes for each section (`/experience`, `/projects`, `/skills`) on a single-page portfolio.

**Why it's wrong:** Adds routing complexity without benefit. Breaks smooth scroll navigation. Forces full page re-renders on "navigation."

**Do this instead:** Use section IDs with smooth scroll navigation. One page, many sections. Navigation is just scroll-to-anchor.

### Anti-Pattern 3: Shadow/Glass Effects

**What people do:** Add drop shadows, glassmorphism, or gradient backgrounds to make sections "stand out."

**Why it's wrong:** Violates the terminal-native design system from DESIGN.md. The design explicitly states: "There are no drop shadows in the system. Nothing lifts, nothing floats."

**Do this instead:** Use the design system's elevation vocabulary: hairline borders (`1px solid hairline`), dark surface for hero only, 4px radius on interactive elements only.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| GitHub Pages | Static export via `output: "export"` | No server-side logic, no API routes |
| JetBrains Mono | Google Fonts / self-hosted | Free, open-source; fall back to IBM Plex Mono |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| content/ → sections/ | TypeScript imports | Sections import typed data arrays |
| sections/ → layout/ | Component composition | Sections are children of PageShell |
| hooks/ → components/ | Hook returns | useActiveSection returns activeSection string |
| ui/ → sections/ | Component reuse | Sections use shared Button, Badge, ListRow |

## Build Order Implications

The architecture dictates a bottom-up build sequence. Each layer depends on the layer below it.

### Phase Dependencies

```
Phase 1: Foundation (Design Tokens + Layout)
  globals.css (@theme tokens) → Navigation → PageShell → SectionContainer
  Must complete BEFORE any section can render correctly.

Phase 2: Content Data Files
  content/hero.ts, content/experience.ts, content/projects.ts, ...
  Can be built in parallel with Phase 1 (no UI dependency).
  Must complete BEFORE section components.

Phase 3: UI Primitives
  ui/Button.tsx, ui/Badge.tsx, ui/ListRow.tsx, ui/TimelineRow.tsx
  Depends on: Phase 1 (tokens for styling)
  Must complete BEFORE section components.

Phase 4: Section Components
  sections/HeroSection.tsx → sections/ExperienceSection.tsx → ...
  Depends on: Phase 1 (layout), Phase 2 (content data), Phase 3 (UI primitives)
  Each section is independent — can be built in parallel once dependencies are met.

Phase 5: Scroll Navigation
  hooks/useActiveSection.ts, hooks/useScrollToSection.ts
  Depends on: Phase 4 (sections must have IDs for scroll targeting)
  Must complete AFTER all sections are rendered.

Phase 6: Integration & Polish
  app/page.tsx composition, responsive adjustments, final testing
  Depends on: Everything above.
```

### Critical Path

```
globals.css → PageShell → Navigation → HeroSection → page.tsx composition
```

The critical path is: design tokens → layout shell → navigation → hero (first visible section) → page composition. Everything else can be parallelized around this spine.

### Parallelization Opportunities

| Wave | Tasks | Dependencies |
|------|-------|--------------|
| Wave 1 | globals.css, content/*.ts (all data files) | None |
| Wave 2 | PageShell, Navigation, ui/* primitives | Wave 1 (tokens) |
| Wave 3 | All section components (parallel) | Wave 2 (layout + UI) + Wave 2 (content data) |
| Wave 4 | hooks/*, page.tsx composition | Wave 3 (sections exist) |

## Sources

- Next.js portfolio architecture patterns (Medium, 2026-03)
- React portfolio component structure (DeepWiki, multiple projects)
- Data science portfolio best practices (Noble Desktop, TailorCV, Intuit)
- Tailwind CSS v4 @theme directive (official docs, DesignDev.io, DEV Community)
- DESIGN.md terminal-native design system (project root)

---
*Architecture research for: Data Science Portfolio*
*Researched: 2026-09-14*
