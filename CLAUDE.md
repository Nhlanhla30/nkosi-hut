# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Next.js)
npm run build      # Production build
npm run lint       # ESLint via next lint
npm run format     # Prettier (writes in-place)
```

No test suite is configured.

## Architecture

This is a **Next.js 15 (App Router)** marketing site for Nkosi Hut, a South African digital agency. It uses **TypeScript**, **Tailwind CSS v3**, and **Framer Motion** for animations.

### Directory structure

```
src/
  app/                  # Next.js App Router pages
    layout.tsx          # Root layout: fonts, SEO metadata, JSON-LD, Navbar/Footer
    page.tsx            # Home page — composes section components
    about/page.tsx
    contact/page.tsx    # Client component with Formspree form submission
  components/
    layout/             # Navbar, Footer
    sections/           # Full-page sections: Hero, Services, WhyUs, Process, CTA
    ui/                 # Reusable primitives: Button, Reveal, Logo
  lib/
    constants.ts        # All site content: siteConfig, navLinks, services, processSteps, whyUsReasons, techStack
    utils.ts            # cn() helper (clsx wrapper)
```

### Key conventions

- **All site content** (copy, nav links, services, etc.) lives in `src/lib/constants.ts` — edit there, not inline in components.
- **`<Button>`** automatically uses `<Link>` for internal routes (`/...`) and `<a>` for anchors (`#...`), external URLs, and `mailto:` links.
- **`<Reveal>`** is a Framer Motion wrapper for scroll-triggered fade-in animations. It requires `"use client"` in the consuming tree if used inside a Server Component.
- **Animations** use `whileInView` with `viewport={{ once: true }}` — they fire once on scroll.

### Styling

- Tailwind config extends with semantic token aliases: `brand-primary`, `brand-accent`, `surface-dark`, `text-primary`, `text-secondary`, `border` — use these instead of raw colours.
- Custom CSS utilities in `globals.css`: `.gradient-text` (green gradient text), `.bg-grid` (subtle grid background), `.section-label` (small-caps accent label with line prefix).
- Fonts: `font-display` → Outfit, `font-mono` → JetBrains Mono (set via CSS variables in `layout.tsx`).
- Max content width is `1200px`; horizontal padding uses `clamp(20px, 5vw, 80px)`.

### Forms

The contact form (`/contact`) submits to Formspree. The endpoint ID is set in `src/app/contact/page.tsx` as `FORMSPREE_ENDPOINT`.
