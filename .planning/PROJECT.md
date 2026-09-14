# Data Science Portfolio

## What This Is

A professional single-page portfolio website for a Data Scientist/Analyst, deployed on GitHub Pages. Built with React/Next.js (static export) using a terminal-native design aesthetic — all-monospaced typography, warm cream canvas, ASCII bracket markers, and flat surfaces with no shadows. The site presents skills, experience, education, projects, and contact information in a resume-style layout.

## Core Value

Visitors immediately understand who this person is professionally and can explore their data science work — projects, skills, and experience — in a distinctive, memorable presentation.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Single-page portfolio with smooth section navigation
- [ ] Hero section with name, title, short intro, and call-to-action
- [ ] Experience section with professional background timeline
- [ ] Projects section showcasing data science work (notebooks, dashboards, ML models, visualizations)
- [ ] Skills section displaying technical proficiencies
- [ ] Education section with degrees, certifications, and courses
- [ ] Contact section with email, LinkedIn, and GitHub links
- [ ] Terminal-native design system from DESIGN.md (monospaced font, cream canvas, ASCII markers, flat surfaces)
- [ ] Responsive layout adapting to desktop, tablet, and mobile
- [ ] Static export for GitHub Pages deployment
- [ ] GitHub Pages deployment configuration

### Out of Scope

- Blog / writing section — not needed for resume-style portfolio
- CMS or admin panel — content is static, edited in code
- Backend / API — fully static site
- OAuth or user accounts — no dynamic user features
- Dark mode toggle — design system uses single cream canvas theme
- Multi-page routing — single-page scrolling layout

## Context

- **Domain**: Personal portfolio / professional presence for data science
- **Design reference**: DESIGN.md in project root defines the full design system — terminal-native aesthetic inspired by OpenCode's marketing site. JetBrains Mono (open-source substitute for Berkeley Mono), warm cream #fdfcfc canvas, near-black #201d1d ink, ASCII bracket markers [+]/[-] as bullets, 4px border radius on interactive elements, no shadows, single dark hero surface, 96px section rhythm
- **Deployment**: GitHub Pages via static export from Next.js
- **Font**: JetBrains Mono (free) as primary, with IBM Plex Mono and Geist Mono as fallbacks — approximating Berkeley Mono's metrics
- **Content types**: Data science projects (Jupyter notebooks, dashboards, ML models), data visualizations, professional achievements

## Constraints

- **Tech stack**: React/Next.js with static export — must work on GitHub Pages (no SSR, no server functions)
- **Typography**: 100% monospaced — JetBrains Mono across every text role, no sans-serif anywhere
- **Design fidelity**: Must follow DESIGN.md tokens — colors, spacing, typography, component specs
- **Deployment**: GitHub Pages only — static HTML/CSS/JS output
- **Budget**: Free hosting (GitHub Pages), free fonts (JetBrains Mono)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js with static export | Modern React framework with excellent static export support for GitHub Pages | — Pending |
| JetBrains Mono over Berkeley Mono | Berkeley Mono is paid/commercial; JetBrains Mono is the closest free match (~3% metric difference) | — Pending |
| Single-page layout | Resume-style portfolio works best as one scrollable page with section navigation | — Pending |
| Terminal-native design from DESIGN.md | Distinctive aesthetic that stands out from typical portfolio templates | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-14 after initialization*
