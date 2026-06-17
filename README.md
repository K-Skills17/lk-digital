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
3. Set env var: `NEXT_PUBLIC_SITE_URL` = `https://lkdigitalbrasil.com.br` (used for absolute OG image URLs)

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

## OG Image Previews (WhatsApp / Social)

Every page generates a branded 1200x630 OG image via `@vercel/og`. When you share a link on WhatsApp, it shows a branded card with the page title and LK Digital branding.

- **Route**: `/api/og?title=...&subtitle=...&segment=...`
- Hit the route directly in a browser to preview the image.
- Each page's metadata points to its own OG image via absolute URL.

**WhatsApp cache caveat**: WhatsApp caches link previews aggressively. The correct OG tags must be live BEFORE the link is shared widely. To force a re-scrape after changes, paste the URL into [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) and click "Scrape Again". Do not rely on WhatsApp re-fetching on its own.

## Flyer Generator

Internal tool to generate branded marketing images (PNG) without design software.

- **Route**: `/api/flyer?headline=...&subline=...&cta=...&segment=...&format=square|story`
- **Formats**: `square` (1080x1080, feed/WhatsApp) or `story` (1080x1920, Stories/Status)
- **Admin page**: `/admin/flyers` — form to set params, preview, and download the PNG.
- All images use brand tokens (dark bg, gold accent, Playfair + Inter).

**Media licensing rule**: Flyers use brand-generated backgrounds only (gradients, geometric gold motifs). Never use unlicensed web imagery. If a photo is needed, use an explicitly licensed free-stock image (Unsplash/Pexels) passed by URL.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- `@vercel/og` (Satori) for OG images + flyer generation
- No database, no CMS — content in typed config files
- CSS animations + IntersectionObserver (no animation libraries)
- Fonts: Playfair Display (headings) + Inter (body) via `next/font`
