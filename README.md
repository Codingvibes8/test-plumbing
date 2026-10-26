# ApexFlow Plumbing & Heating — Landing Page

A dark-themed, conversion-focused landing page for a plumbing & heating business (Slough, Windsor, Maidenhead & surrounds).

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Sticky glass navbar with click-to-call and 24/7 emergency bar
- Hero with gradient headline and dual CTAs (quote + phone)
- Trust bar (years experience, rating, reviews, emergency availability)
- Service cards (leak repairs, boilers, central heating, bathrooms)
- Local SEO coverage section with postcodes (SL1–SL9, HP9)
- Project gallery, verified customer reviews, transparent pricing
- FAQ + closing CTA banner + footer
- JSON-LD `PlumbingService` schema in `src/app/schema.ts` for local SEO

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Inter font, metadata)
│   ├── page.tsx            # Landing page composition
│   ├── globals.css         # Tailwind v4 + custom utilities
│   └── schema.ts           # JSON-LD local business schema
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    └── sections/
        ├── Hero.tsx
        ├── TrustBar.tsx
        ├── ServiceCards.tsx
        ├── LocalSeo.tsx
        ├── ProjectGallery.tsx
        ├── SocialProof.tsx
        ├── Pricing.tsx
        ├── FAQ.tsx
        └── CtaBanner.tsx
```
