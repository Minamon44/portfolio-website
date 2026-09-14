# Validation Strategy: 01 - Foundation

**Phase:** 1 — Foundation
**Project:** Data Science Portfolio
**Created:** 2026-09-14
**Nyquist Validation:** Enabled

---

## Validation Architecture

This phase establishes the design system foundation. Validation focuses on ensuring the scaffold renders correctly with all DESIGN.md tokens applied, responsive behavior works at all breakpoints, and the build pipeline succeeds.

---

## Dimension 1: Functional Correctness

### Requirements Coverage
- **LAYOUT-01**: Single-page layout with smooth anchor-based section navigation and fixed nav bar
- **LAYOUT-02**: Responsive layout adapting to desktop, tablet, and mobile breakpoints
- **LAYOUT-03**: Terminal-native design system from DESIGN.md

### Acceptance Criteria per Requirement

| Requirement | Acceptance Criteria | Validation Method |
|-------------|---------------------|-------------------|
| LAYOUT-01 | Page has sticky nav (56px), smooth scroll to anchors, nav links present | Automated: Playwright test + manual visual |
| LAYOUT-02 | Layout adapts at 1280px+, 1024px, 850px, 768px, 640px breakpoints | Automated: Visual regression + manual device toolbar |
| LAYOUT-03 | JetBrains Mono only font, cream canvas #fdfcfc, ink #201d1d, ASCII brackets, 96px rhythm, no shadows | Automated: Computed style checks + visual |

---

## Dimension 2: Design System Fidelity

### Token Parity Checklist

**Colors (all must match DESIGN.md exactly):**
- [ ] `--color-canvas` = `#fdfcfc` (body background)
- [ ] `--color-ink` = `#201d1d` (text color)
- [ ] `--color-hairline` = `rgba(15,0,0,0.12)` (section dividers)
- [ ] `--color-hairline-strong` = `#646262` (nav bottom border)
- [ ] `--color-surface-dark` = `#201d1d` (dark hero surface)
- [ ] Semantic colors defined (accent, warning, danger, success)

**Typography:**
- [ ] `--font-mono` = "JetBrains Mono Variable" with fallback stack
- [ ] `--text-display-xl` = 38px, weight 700
- [ ] `--text-heading-md` = 16px, weight 700
- [ ] `--text-body-md` = 16px, weight 400
- [ ] `--text-body-strong` = 16px, weight 500
- [ ] `--text-caption-md` = 14px, weight 400
- [ ] Line heights match DESIGN.md (1.5 for body, 2 for buttons)
- [ ] Zero letter spacing across all tokens

**Spacing:**
- [ ] `--spacing-section` = 96px (section rhythm)
- [ ] All spacing tokens from DESIGN.md present

**Rounded:**
- [ ] `--radius-none` = 0px (sections, nav, containers)
- [ ] `--radius-sm` = 4px (interactive elements)
- [ ] `--radius-full` = 9999px (avatars)

**Breakpoints:**
- [ ] `--breakpoint-desk-lg` = 1280px
- [ ] `--breakpoint-desk` = 1024px
- [ ] `--breakpoint-tab` = 850px
- [ ] `--breakpoint-tab-narrow` = 768px
- [ ] `--breakpoint-mob` = 640px

---

## Dimension 3: Component Behavior

### Navigation Component
- [ ] Fixed height 56px (`h-14`)
- [ ] `position: sticky`, `top: 0`, `z-index: 50`
- [ ] Background `var(--color-canvas)`
- [ ] Bottom border `1px solid var(--color-hairline)`
- [ ] ASCII wordmark at left (placeholder text for now)
- [ ] Nav links: Home, Experience, Projects, Skills, Education, Contact
- [ ] Links use `var(--color-mute)` default, `var(--color-ink)` hover
- [ ] Smooth scroll with 56px offset (via `scroll-padding-top`)

### SectionContainer Component
- [ ] Wrapper `<section>` with `id` prop
- [ ] `py-[var(--spacing-section)]` (96px vertical padding)
- [ ] `px-4` horizontal padding
- [ ] `max-w-[960px] mx-auto` (centered container)
- [ ] `aria-labelledby` for accessibility

### PageShell Component
- [ ] Renders Navigation
- [ ] Renders main content area with `id="main-content"`
- [ ] `min-h-screen` for full viewport height

---

## Dimension 4: Build & Deployment Pipeline

### Build Verification
```bash
# Must pass without errors
npm run build
# Output directory: ./out (static export)
# Contains: index.html, _next/, any static assets
```

### Type Safety
```bash
# Must pass without errors
npx tsc --noEmit
```

### Linting
```bash
# Must pass without errors
npm run lint
```

### GitHub Actions Workflow
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] Uses `actions/deploy-pages@v4`
- [ ] Builds on push to main
- [ ] Uploads `./out` artifact
- [ ] Deploys to GitHub Pages environment

---

## Dimension 5: Performance Baseline

### Core Web Vitals Targets (Phase 1 Scaffold)
- **LCP** < 2.5s (static HTML + CSS only, no JS hydration blocking)
- **CLS** < 0.1 (no layout shifts - font loading with `font-display: swap`)
- **FID** < 100ms (minimal interactive elements)

### Bundle Size Targets
- **Total JS** < 50KB gzipped (static export, minimal React)
- **CSS** < 15KB gzipped (Tailwind purged)

---

## Dimension 6: Accessibility (WCAG AA)

- [ ] Semantic HTML structure (nav, main, section)
- [ ] ARIA labels on navigation
- [ ] Focus visible styles (`:focus-visible`)
- [ ] Color contrast ratios (cream/ink = 12.6:1, exceeds 4.5:1)
- [ ] Smooth scroll with `scroll-padding-top` for keyboard navigation
- [ ] `lang="en"` on html element

---

## Dimension 7: Security

- [ ] No inline scripts (CSP compatible)
- [ ] No eval or dangerous patterns
- [ ] Static export - no server-side attack surface
- [ ] GitHub Pages serves static files only

---

## Dimension 8: Edge Coverage (from Requirements)

Per LAYOUT-01, LAYOUT-02, LAYOUT-03, these edges must be tested:

| Edge Case | Test Approach |
|-----------|---------------|
| Mobile viewport (320px) | Device toolbar / Playwright mobile viewport |
| Tablet narrow (768px) | Device toolbar - hamburger breakpoint |
| Tablet (850px) | Device toolbar |
| Desktop (1024px) | Device toolbar |
| Desktop large (1280px+) | Device toolbar |
| Very long content | Add many sections, verify scroll |
| Keyboard navigation | Tab through nav links, verify focus |
| Reduced motion preference | `@media (prefers-reduced-motion)` |
| High contrast mode | OS high contrast, verify visibility |
| Print stylesheet | `@media print` - nav hidden, content visible |

---

## Validation Commands

### Automated Verification
```bash
# Full pipeline
npm run build && npx tsc --noEmit && npm run lint

# Visual regression (requires Playwright setup)
# npx playwright test --project=chromium

# Token parity check (custom script)
# node scripts/verify-tokens.js
```

### Manual Verification Checklist
- [ ] Open `http://localhost:3000` (dev) or `./out/index.html` (production build)
- [ ] Verify font is JetBrains Mono (not fallback)
- [ ] Verify background is #fdfcfc
- [ ] Verify text color is #201d1d
- [ ] Resize browser to each breakpoint, verify layout adapts
- [ ] Click nav links, verify smooth scroll with 56px offset
- [ ] Verify nav stays sticky on scroll
- [ ] Verify 96px gap between sections
- [ ] Verify no shadows, gradients, or decorative elements
- [ ] Verify ASCII bracket markers available as CSS variables

---

## Failure Modes

| Check | Fails When |
|-------|------------|
| `npm run build` | Non-zero exit, or `./out` directory missing |
| `npx tsc --noEmit` | Non-zero exit, or type errors in output |
| `npm run lint` | Non-zero exit, or ESLint errors |
| Token parity | Any computed style doesn't match DESIGN.md value |
| Responsive | Layout doesn't adapt at specified breakpoints |
| Sticky nav | Nav doesn't stay fixed, or scroll offset wrong |
| Accessibility | Contrast < 4.5:1, missing ARIA, focus not visible |

---

## Gate Criteria

**Phase 1 is VALIDATED when:**
1. ✅ All 3 requirements (LAYOUT-01, LAYOUT-02, LAYOUT-03) have passing acceptance criteria
2. ✅ All DESIGN.md tokens mapped and verified in computed styles
3. ✅ Build, typecheck, lint all pass
4. ✅ GitHub Actions workflow file exists and is syntactically correct
5. ✅ Manual visual verification at all 5 breakpoints passes
6. ✅ No console errors in browser

**Blockers:**
- Any TypeScript error
- Any ESLint error
- Build failure
- Token mismatch on critical tokens (canvas, ink, font-family)
- Sticky nav not working

---

*Validation strategy created: 2026-09-14*
