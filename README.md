# Nkosi Hut — Digital Solutions Agency

> South African tech agency specializing in website development, mobile applications, UI/UX design, and cloud solutions.

🌐 **Live:** [nkosihut.co.za](https://nkosihut.co.za)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Domain:** nkosihut.co.za

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Nhlanhla30/nkosi-hut.git
cd nkosi-hut

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
nkosi-hut/
├── public/
│   ├── images/          # Logo assets and images
│   ├── robots.txt       # Search engine crawl rules
│   └── manifest.json    # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles + Tailwind
│   │   ├── layout.tsx   # Root layout (fonts, meta, SEO)
│   │   ├── page.tsx     # Homepage
│   │   └── sitemap.ts   # Dynamic sitemap generation
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, Services, WhyUs, Process, CTA
│   │   └── ui/          # Reusable components (Button, Reveal, Logo)
│   └── lib/
│       ├── constants.ts # Site config, data, content
│       └── utils.ts     # Utility functions
├── tailwind.config.ts   # Tailwind + brand design system
├── tsconfig.json        # TypeScript config
└── next.config.ts       # Next.js config
```

## Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

### Environment Setup

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add custom domain `nkosihut.co.za`
4. SSL is auto-configured

## License

Copyright © 2026 Nkosi Hut. All rights reserved.
