# Rojil Kusma — Portfolio

A clean, dark-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Design

- **Dark theme** with acid-yellow (`#E8FF47`) accents
- **Syne** display font paired with **DM Sans** body and **DM Mono** for code/labels
- Animated hero with stat cards, skill marquee ticker, alternating timeline experience layout
- Project cards with hover glow effects
- Fully responsive (mobile-first)

## Sections

1. **Hero** — Name, tagline, summary, stats card, and social links
2. **Skills Marquee** — Animated scrolling tech ticker
3. **Experience** — Alternating timeline with company details and highlights
4. **Projects** — 2-column grid: GUMP, VoIP App, Cargo Tracker, Versify
5. **Skills** — Categorized skill grid (Frontend, State, Backend, Cloud, Tools)
6. **Contact** — Big CTA + contact info + education + footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All content lives in **`app/data.ts`** — edit your name, experience, projects, skills, and contact info there.

Colors are in **`tailwind.config.ts`** under `theme.extend.colors`.

## Build

```bash
npm run build
npm start
```

## Deploy

Works out of the box on **Vercel** — just push to GitHub and connect the repo.
