# LK Digital — Site + Landing Pages

Next.js project for [lkdigitalbrasil.com.br](https://lkdigitalbrasil.com.br). Contains:

- **Company site** (`/`, `/sobre`, `/servicos`, `/trabalhos`, `/contato`) — shared nav + footer
- **Landing pages** (`/dentistas`, `/advogados`, `/ecommerce`, `/negocios`) — nav-less, single-conversion (WhatsApp)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. No env vars required (all config is in `src/config/`)

## Point the domain

1. In Vercel project settings > Domains, add `lkdigitalbrasil.com.br`
2. Update DNS at your registrar:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`

## Config (TODO slots)

All content lives in `src/config/`:

| File | What to update |
|---|---|
| `agency.ts` | WhatsApp number, email, social links |
| `segments.ts` | Build-fee prices, demo URLs, WhatsApp messages per segment |
| `work.ts` | Portfolio items (screenshots, URLs, descriptions) |

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- No database, no CMS — content in typed config files
- CSS animations + IntersectionObserver (no animation libraries)
- Fonts: Playfair Display (headings) + Inter (body) via `next/font`
