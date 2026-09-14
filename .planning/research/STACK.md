# Technology Stack

**Project:** Data Science Portfolio (Terminal-Native Aesthetic)
**Researched:** 2026-09-14
**Overall confidence:** HIGH

## Recommended Stack

### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 16.3.x | React framework with App Router | Static export via `output: 'export'` is battle-tested. Turbopack default bundler in 16.x. App Router's Metadata API replaces all SEO plugins. React 19.2+ support is stable. |
| React | 19.2.x | UI library | Ships with Next.js 16. React Compiler auto-memoizes — cleaner code, fewer performance bugs. View Transitions API stable in 19.3. |
| TypeScript | 5.x | Type safety | Non-negotiable for maintainability. Next.js 16 supports TypeScript 7. |

### Styling
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | 4.3.x | Utility-first CSS | v4 uses CSS-first `@theme` configuration — no `tailwind.config.js`. Design tokens are native CSS variables. Automatic content detection. ~70% smaller output than v3. Custom monospaced font integrates cleanly via `@theme { --font-mono: ... }`. |
| `@tailwindcss/postcss` | 4.3.x | PostCSS integration for Next.js | Required for Tailwind v4 with Next.js App Router. |

### Typography
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `@fontsource-variable/jetbrains-mono` | 5.3.x | Self-hosted JetBrains Mono font | Variable font (single file, all weights). Self-hosted = zero external requests, no Google dependency. `font-display: swap` for zero layout shift. Matches DESIGN.md's requirement for 100% monospaced typography. |
| `next/font` | built-in | Font optimization | Use `next/font/google` for JetBrains_Mono as alternative — auto-self-hosted, zero layout shift, CSS variable injection. But `@fontsource-variable` gives more control over weight axes. |

**Decision: `@fontsource-variable/jetbrains-mono` over `next/font/google`**
Both work. `@fontsource-variable` is preferred because: (1) variable font = one file for all weights (400/500/700), (2) no Google Fonts dependency at all, (3) explicit control over which weights load. `next/font/google` is the fallback if you want zero-config — it auto-downloads and self-hosts at build time.

### Animations
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `motion` | 13.x | React animations | **IMPORTANT: Framer Motion is now Motion.** Package name is `motion`, import from `motion/react`. Scroll-triggered reveals, section entrance animations, smooth section navigation. Lightweight for a static portfolio. |

**What NOT to use:**
- `framer-motion` — deprecated package name. Use `motion` instead. `framer-motion` still works (it re-exports `motion`) but is the legacy name.
- `@react-spring` — heavier, more complex API. Motion is simpler for portfolio-grade animations.
- CSS-only animations — insufficient for scroll-triggered reveals and layout animations.

### Icons
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Lucide React | latest | Icon library | Clean, consistent, tree-shakeable. But for this terminal-native design, **use ASCII bracket markers instead of icons** per DESIGN.md. Lucide is only needed for the one or two places where ASCII isn't sufficient (e.g., external link icon). |

**Decision: Minimal icon usage**
DESIGN.md explicitly states: "Don't replace the ASCII bracket markers with SVG icons. The brackets are the icons." Use Lucide only for the GitHub/LinkedIn/email icons in the contact section — places where ASCII brackets would be confusing.

### SEO & Metadata
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js Metadata API | built-in | Per-page meta tags, OG, sitemap, robots.txt | Native to App Router. Replaces `next-seo` entirely. Type-safe `metadata` export and `generateMetadata` for dynamic content. File-based `app/sitemap.ts` and `app/robots.ts`. |
| `app/sitemap.ts` | built-in | XML sitemap generation | Runs at build time. Generates `/sitemap.xml` automatically. |
| `app/robots.ts` | built-in | robots.txt generation | Runs at build time. Generate `/robots.txt` automatically. |

**What NOT to use:**
- `next-seo` — unnecessary with App Router's native Metadata API. Its own docs recommend the built-in API.
- `next-sitemap` — unnecessary. `app/sitemap.ts` handles everything for a static site.

### Development Tools
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| ESLint | latest | Linting | Comes with `create-next-app`. |
| Prettier | latest | Code formatting | Optional but recommended for consistency. |
| `@tailwindcss/typography` | 4.x | Prose styling | Only if you need styled markdown content. Not essential for this project. |

### Deployment
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| GitHub Pages | free | Static hosting | Zero cost. Domain: `username.github.io`. |
| GitHub Actions | free | CI/CD | Auto-deploy on push to `main`. |
| `peaceiris/actions-gh-pages` | v4 | Deployment action | Publishes `out/` directory to `gh-pages` branch. Battle-tested, widely used. |

### Utilities
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `clsx` | latest | Conditional classnames | Tiny (200B). For conditional Tailwind classes. |
| `tailwind-merge` | latest | Tailwind class dedup | Avoids conflicting utilities. Used in `cn()` helper pattern. |

**What NOT to use:**
- `class-variance-authority` (CVA) — overkill for a portfolio. CVA is for complex component variant systems. You have ~5 component types, not 50.
- `shadcn/ui` — contradicts the terminal-native aesthetic. shadcn's components are designed for modern SaaS UI, not monospaced manpage layouts.
- `Radix UI` — same reason. Unnecessary complexity for a single-page portfolio.

## Complete Installation

```bash
# Core
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias

# Animation
npm install motion

# Font (variable weight, self-hosted)
npm install @fontsource-variable/jetbrains-mono

# Icons (minimal usage)
npm install lucide-react

# Utilities
npm install clsx tailwind-merge

# Dev dependencies (already included with create-next-app)
# tailwindcss, @tailwindcss/postcss, typescript, eslint
```

## Critical Configuration

### `next.config.ts`
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // Static export to /out
  images: {
    unoptimized: true,        // Required — no server for image optimization
  },
  trailingSlash: true,        // GitHub Pages: /about/ not /about
  // basePath: '/repo-name',  // Uncomment if deploying to username.github.io/repo-name/
  // assetPrefix: '/repo-name', // Uncomment alongside basePath
}

export default nextConfig
```

### `src/app/globals.css` (Tailwind v4)
```css
@import "tailwindcss";
@import "@fontsource-variable/jetbrains-mono";

@theme {
  /* Terminal-native palette from DESIGN.md */
  --color-ink: #201d1d;
  --color-ink-deep: #0f0000;
  --color-canvas: #fdfcfc;
  --color-surface-soft: #f8f7f7;
  --color-surface-card: #f1eeee;
  --color-surface-dark: #201d1d;
  --color-surface-dark-elevated: #302c2c;
  --color-hairline: rgba(15, 0, 0, 0.12);
  --color-body: #424245;
  --color-mute: #646262;
  --color-stone: #6e6e73;
  --color-ash: #9a9898;
  --color-charcoal: #302c2c;

  /* Typography — 100% monospaced */
  --font-mono: "JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Spacing */
  --spacing-section: 96px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-none: 0px;
  --radius-full: 9999px;
}
```

### `src/app/layout.tsx` (Font setup)
```typescript
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-mono bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
```

### `public/.nojekyll`
Empty file. Prevents GitHub Pages from ignoring `_next/` directories (Jekyll skips underscored paths).

## Deployment Setup

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
```

### GitHub Repo Settings
1. Settings → Pages → Source: "GitHub Actions"
2. No `gh-pages` branch needed with the new `actions/deploy-pages` approach

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 16 | Astro | Astro is great for content sites but Next.js has better React ecosystem support and static export maturity |
| Framework | Next.js 16 | Vite + React | Vite works but loses Metadata API, sitemap.ts, robots.ts conventions — you'd build those manually |
| Styling | Tailwind CSS v4 | CSS Modules | Tailwind's `@theme` tokens map directly to DESIGN.md's design system. CSS Modules would require manual token management |
| Styling | Tailwind CSS v4 | styled-components | SSR issues with static export, larger bundle, less maintainable for design tokens |
| Animation | Motion | GSAP | GSAP is heavier (43KB vs ~15KB) and more complex. Motion's React integration is cleaner for scroll-triggered reveals |
| Animation | Motion | CSS animations only | Can't do scroll-triggered reveals or layout animations without JS |
| Font | @fontsource-variable | next/font/google | Both work. fontsource gives more control; next/font is zero-config |
| Icons | Lucide React | React Icons | Lucide is lighter, more consistent. React Icons imports everything |
| Deployment | GitHub Actions + Pages | Vercel | Vercel is easier but costs money. GitHub Pages is free and sufficient for static export |
| Component lib | None (custom) | shadcn/ui | Contradicts terminal-native design. shadcn's components are SaaS-style, not manpage-style |

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Next.js 16 + static export | HIGH | Well-documented, battle-tested pattern. Multiple production examples verified. |
| Tailwind CSS v4 + @theme | HIGH | CSS-first config is stable since v4.0 (Jan 2025). 4.3.x is current. |
| Motion (formerly Framer Motion) | HIGH | Package rename from framer-motion to motion is complete. 13.x is stable. |
| @fontsource-variable/jetbrains-mono | HIGH | v5.3.x, 800K+ weekly downloads. Variable font with all weights. |
| GitHub Pages deployment | HIGH | Multiple verified approaches. `actions/deploy-pages@v4` is the modern path. |
| Terminal-native design feasibility | HIGH | DESIGN.md is extremely detailed. Every token, component, and breakpoint is specified. |

## Sources

- Next.js static export docs: https://nextjs.org/docs/pages/guides/static-exports (verified Sep 2026)
- Tailwind CSS v4 theme docs: https://tailwindcss.com/docs/theme (verified Sep 2026)
- Motion for React docs: https://motion.dev/docs/react (verified Sep 2026)
- @fontsource-variable/jetbrains-mono: https://www.npmjs.com/package/@fontsource-variable/jetbrains-mono (verified Sep 2026)
- GitHub Pages deployment guide: https://rahhuul.github.io/blog/nextjs-static-export-github-pages-guide/ (verified Sep 2026)
- Next.js SEO with App Router: https://patrickstox.com/technical-seo/platform-seo/js-frameworks/next-seo/ (verified Sep 2026)
- Project DESIGN.md: `/home/mina/Projects/Portfolio Website/DESIGN.md`
