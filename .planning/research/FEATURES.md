# Feature Research

**Domain:** Data science portfolio website
**Researched:** 2026-09-14
**Confidence:** HIGH (consensus across 15+ authoritative sources: TailorCV, KDnuggets, Dataquest, Intuit, Portfolio Studio, Learnist, nb-data.com, Towards Data Science)

## Feature Landscape

### Table Stakes (Users Expect These)

Features recruiters and hiring managers assume exist. Missing these = portfolio feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero section with name, title, intro, and CTA | First impression; visitors must understand who you are in 5 seconds | LOW | PROJECT.md already specifies this |
| Projects section with 3-5 case studies | The core of any data science portfolio; this is what gets interviews | HIGH | Each project needs problem-data-method-findings-impact-limitations structure |
| Skills section (technical proficiencies) | Recruiters filter by skills (Python, SQL, ML, visualization tools) | LOW | Categorize: languages, frameworks, tools, domains |
| Experience section (professional timeline) | Shows career progression and real-world context | MEDIUM | Timeline format works well; include company, role, key achievements |
| Education section (degrees, certifications, courses) | Baseline credibility check | LOW | Include relevant certifications (Google, IBM, AWS) |
| Contact section (email, LinkedIn, GitHub) | Recruiter needs to reach you; friction = lost opportunity | LOW | Prominent placement, working links |
| Responsive layout (desktop, tablet, mobile) | 60%+ of web traffic is mobile; broken mobile = instant rejection | MEDIUM | Mobile-first approach recommended |
| Smooth section navigation | Single-page layout requires easy movement between sections | LOW | Anchor-based smooth scrolling; fixed nav bar |
| Clean project READMEs (problem, approach, result) | GitHub READMEs are the "front door" — recruiters read them before code | MEDIUM | Structure: title, overview, motivation, data sources, key findings, methods, how to reproduce, limitations |
| GitHub links for each project | Recruiters check code quality, commit history, documentation | LOW | Link from project cards; ensure repos are public with proper READMEs |
| Data visualizations in project summaries | Visual proof communicates faster than text; shows visualization skill | MEDIUM | Include 1-2 key charts per project as visual anchors |
| Professional summary / bio | Context for who you are beyond code; shows communication ability | LOW | 2-3 sentences: who you are, what you do, what excites you |

### Differentiators (Competitive Advantage)

Features that set this portfolio apart from typical data science portfolios. Not required, but valued.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| End-to-end project case studies | Shows full pipeline: problem framing → data sourcing → analysis → deployment → recommendation. This is the #1 differentiator per every source. | HIGH | Each project should be a complete story, not just a notebook dump |
| Deployed interactive demos | Live proof the model works outside your machine; strongest signal to recruiters | HIGH | Streamlit, Gradio, or Hugging Face Spaces for each project. Even minimal deployment beats static notebooks |
| Data sourcing documentation | Shows you can handle real-world data acquisition, not just Kaggle downloads | MEDIUM | Document where data came from, what was messy, how you cleaned it |
| Honest limitations & "what didn't work" | Signals maturity and senior-level thinking; separates you from 80% of candidates | LOW | Add "Limitations and Next Steps" section to each project |
| Business impact quantification | Recruiters care about outcomes, not just accuracy scores | LOW | "This model could reduce churn by X%" beats "98% accuracy" |
| Terminal-native design aesthetic | Distinctive, memorable presentation that stands out from template portfolios | MEDIUM | Already defined in DESIGN.md — this IS our differentiator |
| Project filtering / categorization | Lets recruiters find relevant work fast (by domain, technique, or project type) | MEDIUM | Filter by: NLP, Computer Vision, Time Series, EDA, Deployment |
| Resume / CV download link | Many recruiters still want a PDF; makes the portfolio a complete package | LOW | Simple PDF link in hero or contact section |
| "What I didn't try" sections | Shows deliberate decision-making, not just accidental success | LOW | "I considered X but chose Y because Z" — highest-signal paragraph per TailorCV |
| Markdown narration in project pages | Turns code into story; shows communication skill | MEDIUM | Not just code cells — explain every decision with reasoning |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Blog / writing section | "Show thought leadership" | Out of scope per PROJECT.md; blogs require ongoing maintenance and dilute focus | Link to external blog (Medium, Substack) instead |
| Dark mode toggle | "Users expect it" | Design system uses single cream canvas theme; toggle adds complexity without value for a resume-style portfolio | Respect DESIGN.md single-theme decision |
| CMS / admin panel | "Easy content updates" | Static site edited in code; CMS adds backend complexity and security surface | Edit content in code; use components for easy updates |
| Backend / API | "Dynamic features" | Fully static site for GitHub Pages; backend = hosting cost, maintenance, security | Keep everything static; link to external services |
| Multi-page routing | "Better SEO" | Single-page scrolling is the standard for portfolio sites; multi-page hurts UX for a resume-style layout | Single-page with smooth section navigation |
| Over-designed animations | "Make it impressive" | Animations distract from content; recruiters spend 90 seconds — every millisecond counts | Minimal, purposeful transitions only |
| Tutorial dataset projects (Titanic, Iris, MNIST) | "Everyone includes them" | Signals you can follow tutorials, not solve problems; seen thousands of times by recruiters | Use real-world or self-sourced data instead |
| Kaggle competition scores | "Shows competence" | Without context, a leaderboard rank is just a number; doesn't show thinking | Include Kaggle projects only with full case study writeup |
| AutoML-only projects | "Shows modern tools" | Proves you can run software, not that you understand the science | Use AutoML as one benchmark among several; show manual modeling too |
| "Services" section | "Looks professional" | This is a personal portfolio, not a business website; services imply freelancing | Keep focus on skills and projects |
| Contact form | "Easy to reach you" | Forms require backend/email service; adds complexity without benefit | Direct email link + LinkedIn is sufficient |

## Feature Dependencies

```
[Hero Section]
    └──requires──> [Design System from DESIGN.md]
    └──enhances──> [Resume Download Link]

[Projects Section]
    └──requires──> [Design System from DESIGN.md]
    └──requires──> [Responsive Layout]
    └──enhances──> [Project Filtering / Categorization]
    └──enhances──> [Deployed Demo Links]
    └──enhances──> [GitHub Repository Links]

[Skills Section]
    └──requires──> [Design System from DESIGN.md]

[Experience Section]
    └──requires──> [Design System from DESIGN.md]

[Education Section]
    └──requires──> [Design System from DESIGN.md]

[Contact Section]
    └──requires──> [Design System from DESIGN.md]
    └──enhances──> [Resume Download Link]

[Responsive Layout]
    └──requires──> [Design System from DESIGN.md]
    └──requires──> [All Content Sections]

[Smooth Section Navigation]
    └──requires──> [Single-Page Layout]
    └──requires──> [All Content Sections]

[Deployed Demo Links]
    └──conflicts──> [Static-Only Constraint]  // Must externalize demos
```

### Dependency Notes

- **All sections require Design System:** The terminal-native aesthetic from DESIGN.md is the foundation; every component must respect it
- **Projects Section requires Responsive Layout:** Project cards must adapt to mobile; complex layouts break on small screens
- **Deployed Demo Links conflict with Static-Only:** Demos must be hosted externally (Streamlit Cloud, Hugging Face Spaces, Vercel) — the portfolio site itself remains static
- **Project Filtering enhances Projects Section:** Adds complexity but significantly improves recruiter UX when there are 3+ projects
- **Resume Download enhances Hero and Contact:** Simple PDF link; no backend needed

## MVP Definition

### Launch With (v1)

Minimum viable portfolio — what's needed to get interviews.

- [ ] Hero section with name, title, intro, and CTA (resume download)
- [ ] Projects section with 3 well-written case studies (problem-data-method-findings-impact)
- [ ] Skills section with categorized technical proficiencies
- [ ] Experience section with professional timeline
- [ ] Education section with degrees and certifications
- [ ] Contact section with email, LinkedIn, GitHub links
- [ ] Responsive layout (desktop + mobile)
- [ ] Smooth section navigation
- [ ] GitHub links for each project
- [ ] At least 1 data visualization per project as visual anchor
- [ ] Terminal-native design system from DESIGN.md

### Add After Validation (v1.x)

Features to add once core is working and getting feedback.

- [ ] Project filtering / categorization (trigger: when there are 4+ projects)
- [ ] Deployed demo links for each project (trigger: when Streamlit/Gradio apps are built)
- [ ] "What I didn't try" sections in project writeups (trigger: when project content is finalized)
- [ ] Business impact quantification (trigger: when projects have measurable outcomes)

### Future Consideration (v2+)

Features to defer until portfolio is established.

- [ ] Blog integration (trigger: when writing consistently and want to showcase thought leadership)
- [ ] Interactive project explorer (trigger: when 6+ projects exist and navigation becomes complex)
- [ ] Testimonials / recommendations (trigger: when colleagues provide feedback)

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Hero section | HIGH | LOW | P1 |
| Projects case studies | HIGH | HIGH | P1 |
| Skills section | MEDIUM | LOW | P1 |
| Experience section | MEDIUM | LOW | P1 |
| Education section | MEDIUM | LOW | P1 |
| Contact section | HIGH | LOW | P1 |
| Responsive layout | HIGH | MEDIUM | P1 |
| Smooth navigation | MEDIUM | LOW | P1 |
| GitHub links | HIGH | LOW | P1 |
| Data visualizations | MEDIUM | MEDIUM | P1 |
| Resume download | HIGH | LOW | P1 |
| Deployed demo links | HIGH | HIGH | P2 |
| Project filtering | MEDIUM | MEDIUM | P2 |
| Honest limitations sections | MEDIUM | LOW | P2 |
| Business impact quantification | MEDIUM | LOW | P2 |
| Blog integration | LOW | HIGH | P3 |
| Interactive project explorer | LOW | HIGH | P3 |
| Testimonials | LOW | MEDIUM | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Matt Chapman (TDS viral) | Dinesh Barri (React/Tailwind) | Megan ES (React/Vite) | Our Approach |
|---------|--------------------------|-------------------------------|----------------------|--------------|
| Hero section | Simple name + title | Typewriter effect + role rotation | Clean intro | Terminal-native with ASCII markers |
| Projects | 7 projects, 2-sentence descriptions | 5 projects with live demos | Carousel of projects | 3-5 case studies with full narrative |
| Design | Black-and-white minimal | Dark mode, glassmorphism, Framer Motion | Clean professional | Cream canvas, monospaced, ASCII brackets |
| Deployed demos | GitHub links only | Live Netlify demos | GitHub links | External demos (Streamlit, Hugging Face) |
| Skills | Listed in text | Categorized with visual indicators | Listed in about section | Terminal-native skill display |
| Navigation | Simple scroll | Smooth scroll with offset | React Scroll | Smooth section navigation |
| Tech stack | Jekyll (zero code) | React + Tailwind + Framer Motion | React + Tailwind + Vite | Next.js static export |
| Hosting | GitHub Pages | Cloudflare Pages | GitHub Pages | GitHub Pages |

## Sources

- [TailorCV: Data Scientist Portfolio Guide](https://thetailorcv.com/blog/data-scientist-portfolio-guide) — Most comprehensive guide; emphasizes depth over volume, case study structure, honest limitations
- [KDnuggets: Building an End-to-End Portfolio Project](https://www.kdnuggets.com/building-an-end-to-end-data-science-portfolio-project) — 9-stage pipeline framework: problem framing → SQL → cleaning → EDA → features → modeling → evaluation → deployment → dashboard
- [Data Science Society: How to Build a Portfolio That Gets You Hired](https://www.datasciencesociety.net/how-to-build-a-portfolio-website-that-actually-gets-you-hired/) — Hiring-ready components, mobile responsiveness, performance optimization
- [Scaler: How to Build a Winning Data Science Portfolio](https://www.scaler.com/blog/data-science-portfolio/) — Project structure, storytelling, visual appeal, technical SEO
- [nb-data.com: The Portfolio Rubric Data Science Hiring Managers Use](https://www.nb-data.com/p/the-portfolio-rubric-data-science) — 6-dimension rubric: problem framing, data realism, evaluation rigor, deployment thinking, communication, engineering quality
- [Learnist: 12 Mistakes to Avoid](https://www.learnist.org/data-science-portfolio-mistakes-2026/) — Anti-patterns: tutorial datasets, no business question, data leakage, no documentation, AutoML-only
- [Intuit: How to Build a Data Science Portfolio](https://www.intuit.com/blog/social-responsibility/job-readiness/data-science-portfolio/) — Core skills to showcase, storytelling framework, platform recommendations
- [Portfolio Studio: Data Science Portfolio Website](https://portfoliostudio.dev/blog/data-science-portfolio-website) — Case study structure (Problem-Data-Method-Findings-Impact-Limitations), layered technical depth
- [Ali Jabbary: The Portfolio That Gets You Hired 2026](https://alijabbary.com/blog/portfolio-that-gets-you-hired-2026) — Three ingredients: real question, messy self-sourced data, deployed result
- [Matt Chapman: The Portfolio That Got Me a Data Scientist Job](https://towardsdatascience.com/the-portfolio-that-got-me-a-data-scientist-job-513cc821bfe4/) — Viral TDS article; simple, pretty, short, no web dev overhead
- [DataExpertise: How to Build a DS Portfolio 2026](https://www.dataexpertise.in/data-science-portfolio-guide-2026/) — 5 project ideas, domain specialization, README structure

---
*Feature research for: Data Science Portfolio*
*Researched: 2026-09-14*
