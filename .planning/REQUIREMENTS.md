# Requirements: Data Science Portfolio

**Defined:** 2026-09-14
**Core Value:** Visitors immediately understand who this person is professionally and can explore their data science work in a distinctive, memorable presentation.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Layout & Design

- [ ] **LAYOUT-01**: Single-page layout with smooth anchor-based section navigation and fixed nav bar
- [ ] **LAYOUT-02**: Responsive layout adapting to desktop, tablet, and mobile breakpoints
- [ ] **LAYOUT-03**: Terminal-native design system from DESIGN.md (JetBrains Mono typography, warm cream #fdfcfc canvas, near-black #201d1d ink, ASCII bracket markers, flat surfaces with no shadows, 4px radius on interactive elements)

### Hero

- [ ] **HERO-01**: Hero section with name, professional title, short intro paragraph, and call-to-action
- [ ] **HERO-02**: Resume/CV download link (PDF) accessible from hero or contact section

### Projects

- [ ] **PROJ-01**: Projects section displaying 3-5 data science case studies
- [ ] **PROJ-02**: Full case study narrative structure (Problem, Data, Method, Findings, Impact)
- [ ] **PROJ-03**: Data visualizations embedded in project summaries (1-2 key charts per project as visual anchors)
- [ ] **PROJ-04**: GitHub repository links for each project
- [ ] **PROJ-05**: Business impact quantification in project narratives (outcomes over accuracy scores)

### Skills

- [ ] **SKILLS-01**: Skills section with categorized technical proficiencies (languages, frameworks, tools, domains)

### Experience

- [ ] **EXP-01**: Experience section with professional timeline showing career progression and key achievements

### Education

- [ ] **EDU-01**: Education section with degrees, relevant certifications, and courses

### Contact

- [ ] **CONTACT-01**: Contact section with email, LinkedIn, and GitHub links (prominent placement, working links)

### Deployment

- [ ] **DEPLOY-01**: Next.js static export configuration (output: 'export', trailingSlash, images.unoptimized)
- [ ] **DEPLOY-02**: GitHub Pages deployment via GitHub Actions workflow (.nojekyll, correct basePath)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Projects

- **PROJ-06**: Deployed interactive demo links for each project (Streamlit, Gradio, Hugging Face Spaces)
- **PROJ-07**: Honest limitations and "what didn't work" sections in project writeups
- **PROJ-08**: Project filtering/categorization (by domain, technique, or project type)

### Enhanced UX

- **UX-01**: Project filtering UI (trigger: when 4+ projects exist)

### Content

- **CONT-01**: Blog integration (trigger: when writing consistently and want to showcase thought leadership)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog / writing section | Not needed for resume-style portfolio; link to external blog instead |
| CMS / admin panel | Content is static, edited in code; CMS adds backend complexity |
| Backend / API | Fully static site for GitHub Pages; no server needed |
| OAuth or user accounts | No dynamic user features in a static portfolio |
| Dark mode toggle | Design system uses single cream canvas theme per DESIGN.md |
| Multi-page routing | Single-page scrolling layout is standard for portfolio sites |
| Contact form | Direct email link is sufficient; forms require backend/email service |
| Over-designed animations | Recruiters spend 90 seconds; minimal purposeful transitions only |
| Tutorial dataset projects | Signals tutorial following, not problem solving; use real-world data |
| Kaggle scores without context | Leaderboard rank without narrative is just a number |
| AutoML-only projects | Proves you can run software, not that you understand the science |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| LAYOUT-01 | Phase 1 | Pending |
| LAYOUT-02 | Phase 1 | Pending |
| LAYOUT-03 | Phase 1 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| PROJ-01 | Phase 2 | Pending |
| PROJ-02 | Phase 2 | Pending |
| PROJ-03 | Phase 2 | Pending |
| PROJ-04 | Phase 2 | Pending |
| PROJ-05 | Phase 2 | Pending |
| SKILLS-01 | Phase 2 | Pending |
| EXP-01 | Phase 2 | Pending |
| EDU-01 | Phase 2 | Pending |
| CONTACT-01 | Phase 2 | Pending |
| DEPLOY-01 | Phase 5 | Pending |
| DEPLOY-02 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 16 total
- Mapped to phases: 16
- Unmapped: 0

---
*Requirements defined: 2026-09-14*
*Last updated: 2026-09-14 after roadmap creation*
