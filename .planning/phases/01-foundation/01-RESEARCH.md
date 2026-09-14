# Phase Research: 01 - Foundation

**Phase:** 1 — Foundation
**Project:** Data Science Portfolio
**Researched:** 2026-09-14
**Confidence:** HIGH

---

## Executive Summary

Phase 1 establishes the design system foundation for a terminal-native data science portfolio. The implementation uses Next.js 16 with static export, Tailwind CSS v4's @theme directive for CSS-first token configuration, and self-hosted JetBrains Mono. All DESIGN.md tokens are mapped to CSS custom properties in globals.css. The phase delivers three layout primitives (PageShell, SectionContainer, Navigation) with sticky navigation and responsive breakpoints matching DESIGN.md exactly.

---

## Technical Approach

### 1. Project Scaffolding

```bash
# Create Next.js 16 project with TypeScript, Tailwind, ESLint
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

# Install additional dependencies
npm install @fontsource-variable/jetbrains-mono motion
npm install -D @types/node
```

**Key versions:**
- Next.js: 16.x (App Router)
- React: 19.x
- TypeScript: 5.x
- Tailwind CSS: 4.x (via @tailwindcss/postcss)
- Motion: 13.x (was framer-motion)
- @fontsource-variable/jetbrains-mono: 5.x

### 2. Tailwind v4 @theme Implementation

**File:** `src/app/globals.css`

```css
@import "tailwindcss";
@import "@fontsource-variable/jetbrains-mono";

@theme {
  /* Colors - mapped from DESIGN.md */
  --color-primary: #201d1d;
  --color-on-primary: #fdfcfc;
  --color-ink: #201d1d;
  --color-ink-deep: #0f0000;
  --color-charcoal: #302c2c;
  --color-body: #424245;
  --color-mute: #646262;
  --color-stone: #6e6e73;
  --color-ash: #9a9898;
  --color-canvas: #fdfcfc;
  --color-surface-soft: #f8f7f7;
  --color-surface-card: #f1eeee;
  --color-surface-dark: #201d1d;
  --color-surface-dark-elevated: #302c2c;
  --color-hairline: rgba(15,0,0,0.12);
  --color-hairline-strong: #646262;
  --color-on-dark: #fdfcfc;
  --color-on-dark-mute: #9a9898;
  --color-accent: #007aff;
  --color-accent-hover: #0056b3;
  --color-accent-active: #004085;
  --color-warning: #ff9f0a;
  --color-warning-hover: #cc7f08;
  --color-warning-active: #995f06;
  --color-danger: #ff3b30;
  --color-danger-hover: #d70015;
  --color-danger-active: #a50011;
  --color-success: #30d158;

  /* Typography - mapped from DESIGN.md */
  --font-mono: "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --text-display-xl: 38px;
  --text-heading-md: 16px;
  --text-body-md: 16px;
  --text-body-strong: 16px;
  --text-body-tight: 16px;
  --text-link-md: 16px;
  --text-button-md: 16px;
  --text-caption-md: 14px;
  --leading-display-xl: 1.5;
  --leading-heading-md: 1.5;
  --leading-body-md: 1.5;
  --leading-body-strong: 1.5;
  --leading-body-tight: 1;
  --leading-link-md: 1.5;
  --leading-button-md: 2;
  --leading-caption-md: 2;
  --font-weight-display-xl: 700;
  --font-weight-heading-md: 700;
  --font-weight-body-md: 400;
  --font-weight-body-strong: 500;
  --font-weight-body-tight: 500;
  --font-weight-link-md: 400;
  --font-weight-button-md: 500;
  --font-weight-caption-md: 400;
  --tracking-display-xl: 0;
  --tracking-heading-md: 0;
  --tracking-body-md: 0;
  --tracking-body-strong: 0;
  --tracking-body-tight: 0;
  --tracking-link-md: 0;
  --tracking-button-md: 0;
  --tracking-caption-md: 0;

  /* Spacing - mapped from DESIGN.md */
  --spacing-xxs: 1px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
  --spacing-section: 96px;

  /* Rounded - mapped from DESIGN.md */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-full: 9999px;

  /* Breakpoints - custom 5-breakpoint mapping from DESIGN.md */
  --breakpoint-desk-lg: 1280px;
  --breakpoint-desk: 1024px;
  --breakpoint-tab: 850px;
  --breakpoint-tab-narrow: 768px;
  --breakpoint-mob: 640px;
}

/* Base styles */
* {
  font-family: var(--font-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-canvas);
  color: var(--color-ink);
  font-size: var(--text-body-md);
  font-weight: var(--font-weight-body-md);
  line-height: var(--leading-body-md);
}

/* Focus visible for accessibility */
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 2px;
}

/* Smooth scroll offset for sticky nav */
html {
  scroll-padding-top: 56px;
}
```

### 3. Font Loading Strategy

```typescript
// src/app/layout.tsx
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";

export const metadata = {
  title: "Data Science Portfolio",
  description: "Professional data science portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

The `@fontsource-variable/jetbrains-mono` package provides a variable font with weights 400-700 in a single file. The CSS import handles `@font-face` with `font-display: swap` by default.

### 4. Layout Primitives Architecture

**File Structure:**
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── PageShell.tsx
│   │   ├── SectionContainer.tsx
│   │   └── Navigation.tsx
│   └── ui/
│       └── (future UI primitives)
```

**PageShell.tsx** - Root layout wrapper:
```tsx
// src/components/layout/PageShell.tsx
import { Navigation } from "./Navigation";
import { SectionContainer } from "./SectionContainer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="pt-0">
        {children}
      </main>
    </div>
  );
}
```

**SectionContainer.tsx** - Section wrapper with 96px rhythm:
```tsx
// src/components/layout/SectionContainer.tsx
import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] px-4 max-w-[960px] mx-auto ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  );
}
```

**Navigation.tsx** - 56px sticky nav with ASCII wordmark:
```tsx
// src/components/layout/Navigation.tsx
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav
      className="sticky top-0 z-50 h-14 w-full bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="h-full max-w-[960px] mx-auto px-4 flex items-center justify-between">
        {/* ASCII wordmark placeholder - will be replaced with actual block-pixel ASCII */}
        <span className="font-[var(--font-mono)] text-[var(--text-heading-md)] font-bold">
          PORTFOLIO
        </span>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors text-[var(--text-body-strong)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

### 5. Responsive Breakpoints Usage

In components, use custom breakpoint prefixes:

```tsx
// Example usage in components
<div className="grid grid-cols-1 tab:grid-cols-2 desk:grid-cols-3 desk-lg:grid-cols-4 gap-4">
  {/* Content */}
</div>

// Section padding responsive
<section className="py-[var(--spacing-section)] mob:py-12 tab:py-16 desk:py-[var(--spacing-section)]">
  {/* Content */}
</div>

// Font size responsive
<h1 className="text-[var(--text-display-xl)] mob:text-5xl tab:text-6xl desk:text-7xl desk-lg:text-[var(--text-display-xl)]">
  Title
</h1>
```

### 6. Sticky Nav Scroll Offset

The 56px sticky nav height is handled by:
1. `scroll-padding-top: 56px` in globals.css (on `html`)
2. Anchor links automatically offset by this amount
3. Nav has `z-index: 50` to stay above content

### 7. Next.js Static Export Configuration

**File:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optional: if deploying to username.github.io/repo-name
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
```

### 8. GitHub Pages Deployment

**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**File:** `public/.nojekyll` (empty file - tells GitHub Pages not to process with Jekyll)

### 9. Verify Commands

```bash
# Build (outputs to ./out)
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Test (if tests exist)
npm test

# Full verification pipeline
npm run build && npx tsc --noEmit && npm run lint
```

---

## Validation Strategy

Per DESIGN.md constraints and Phase 1 success criteria:

| Success Criterion | Validation Method |
|-------------------|-------------------|
| JetBrains Mono only font | Visual inspection + `getComputedStyle` check |
| Warm cream background | Visual inspection + computed style check |
| Responsive at 5 breakpoints | Browser dev tools device toolbar |
| Sticky nav 56px fixed | Visual + `position: sticky` verification |
| 96px section rhythm | Visual + computed padding check |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Tailwind v4 @theme syntax differences | Low | Medium | Verified against official docs; v4 stable since Jan 2025 |
| GitHub Pages basePath issues | Medium | High | Document both username.github.io and username.github.io/repo-name configs |
| Font weight axes missing | Low | Medium | @fontsource-variable provides 400-700; verify in browser |
| Scroll offset not working | Low | Medium | Test anchor navigation thoroughly |

---

## Files to Create/Modify

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.ts` | Static export config |
| `tsconfig.json` | TypeScript config |
| `src/app/globals.css` | Tailwind v4 @theme + base styles |
| `src/app/layout.tsx` | Root layout with font import |
| `src/app/page.tsx` | Main page composing PageShell |
| `src/components/layout/PageShell.tsx` | Root layout wrapper |
| `src/components/layout/SectionContainer.tsx` | Section wrapper with rhythm |
| `src/components/layout/Navigation.tsx` | Sticky navigation |
| `.github/workflows/deploy.yml` | GitHub Actions deployment |
| `public/.nojekyll` | GitHub Pages Jekyll bypass |

---

## Dependencies Between Tasks

```
1. Project scaffold (package.json, tsconfig, next.config.ts)
2. Tailwind v4 @theme in globals.css
3. Font loading in layout.tsx
4. Layout primitives (PageShell, SectionContainer, Navigation)
5. Main page composition in page.tsx
6. GitHub Actions workflow
7. Verify build + lint + typecheck
```

---

## Out of Scope for This Phase

- Hero section content (Phase 2)
- Projects section (Phase 2)
- Skills/Experience/Education/Contact sections (Phase 2)
- Scroll navigation logic (Phase 4)
- SEO metadata (Phase 5)
- 404 page (Phase 5)
- Performance optimization (Phase 5)

---

*Research completed: 2026-09-14*
