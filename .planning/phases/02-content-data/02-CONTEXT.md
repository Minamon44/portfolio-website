# Phase Context: 02 - Content Data Files

**Phase:** 2 — Content Data Files
**Date:** 2026-09-14
**Project:** Data Science Portfolio

---

## Domain

Create typed TypeScript content data files for all portfolio sections — hero, projects, skills, experience, education, and contact — with real-world project narratives following the case study structure.

---

## Decisions

### Content Data Structure
**Decision:** Create separate TypeScript data files for each section in a `content/` directory.

**Rationale:** Separating content from components allows easy updates without touching component code. TypeScript provides type safety and autocompletion.

**Implementation:**
- `content/hero.ts` — Name, title, intro, CTA
- `content/projects.ts` — 3-5 case studies with Problem/Data/Method/Findings/Impact
- `content/skills.ts` — Categorized proficiencies (languages, frameworks, tools, domains)
- `content/experience.ts` — Professional timeline with career progression
- `content/education.ts` — Degrees, certifications, courses
- `content/contact.ts` — Email, LinkedIn, GitHub links

### Project Case Study Structure
**Decision:** Each project follows the Problem → Data → Method → Findings → Impact structure.

**Rationale:** This structure tells a compelling story: what problem was solved, what data was used, how it was approached, what was discovered, and what impact it had. Business impact leads, not accuracy scores.

**Implementation:**
```typescript
interface Project {
  id: string;
  title: string;
  problem: string;
  data: string;
  method: string;
  findings: string;
  impact: string;
  github: string;
  visualization?: string;
}
```

### Skills Categorization
**Decision:** Skills organized into 4 categories: languages, frameworks, tools, domains.

**Rationale:** Clear categorization helps recruiters quickly assess technical fit.

**Implementation:**
```typescript
interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  domains: string[];
}
```

---

## Deferred Ideas

- **Blog integration** — Not needed for resume-style portfolio
- **Project filtering UI** — Belongs in Phase 4 (navigation integration)
- **Interactive demos** — Deferred to v2 requirements

---

## Canonical Refs

- `/home/mina/Projects/Portfolio_Website/DESIGN.md` — Design system tokens
- `/home/mina/Projects/Portfolio_Website/.planning/PROJECT.md` — Project context
- `/home/mina/Projects/Portfolio_Website/.planning/REQUIREMENTS.md` — v1 requirements
- `/home/mina/Projects/Portfolio_Website/.planning/ROADMAP.md` — Phase 2 goal and success criteria

---

## Scope Guardrail

Phase 2 delivers **only** the content data files. No component rendering (Phase 3), no navigation logic (Phase 4), no deployment configuration (Phase 5).

---
*Context captured: 2026-09-14*
