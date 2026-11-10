# SEO

Everything technical is already implemented. This file records what it is and
how to extend it.

## What is in place

| Item | Where |
|---|---|
| Per-page title, description, keywords | `site/lib/seo.ts` → `buildMetadata()`, called from each page's `generateMetadata` |
| Canonical URL + `hreflang` (en, fr, x-default) | `site/lib/seo.ts` |
| Open Graph + Twitter cards | `site/lib/seo.ts`, with a **generated image per page** |
| Social thumbnail generation | `site/lib/og.tsx` + `opengraph-image.tsx` in every route folder (1200×630 PNG, drawn on the fly) |
| XML sitemap | `site/app/sitemap.ts` — every route, both languages, blog posts included |
| `robots.txt` | `site/app/robots.ts` — allows the site, blocks `/api/`, points at the sitemap |
| Favicon | `site/app/icon.svg` — the bridge mark on navy |
| Structured data | `NGO` + `WebSite` JSON-LD in the layout; `Article` JSON-LD on blog posts |
| Language switch | `x-default` → English; each page declares its own alternates |

**Set the real domain** in `NEXT_PUBLIC_SITE_URL` (see `site/.env.local`).
It drives canonical URLs, the sitemap, `robots.txt` and the social card URLs.

## Keyword map

The global list lives in `site/lib/seo.ts` (`keywords`), and every page adds
its own terms on top. These are the terms the site is built around — chosen
for real search intent rather than volume, because the audience is a
Cameroonian audience searching in French and English.

### English
- Bridge of Hope Foundation
- disability inclusion Cameroon · people with disabilities Cameroon · persons with disabilities Yaoundé
- rehabilitation centre Yaoundé · rehabilitation services Cameroon · disability rehabilitation NGO
- vocational training for people with disabilities · assistive devices and therapy Cameroon
- disability rights Cameroon · disability advocacy Cameroon · inclusive development Cameroon
- empowerment of persons with disabilities Africa · livelihood training disability inclusion
- accessible communities Cameroon · social enterprise disability Cameroon
- Ekombitié Cameroon · non-profit disability Cameroon · support people with disabilities Cameroon
- donate to disability NGO Cameroon

### French
- Bridge of Hope Foundation
- handicap Cameroun · personnes handicapées Cameroun · personnes en situation de handicap Yaoundé
- centre de réhabilitation Yaoundé · réhabilitation Cameroun · ONG personnes handicapées Cameroun
- formation professionnelle personnes handicapées · accompagnement handicap Cameroun
- autonomisation personnes handicapées Cameroun · plaidoyer droits des personnes handicapées Cameroun
- inclusion des personnes handicapées Cameroun · atelier formation personnes handicapées
- fonds de dotation handicap Cameroun · don personnes handicapées Cameroun · Ekombitié Cameroun

### Per page

| Page | Extra terms |
|---|---|
| Home | — (carries the global list) |
| About | disability foundation Cameroon · fondation handicap Cameroun |
| Programmes | rehabilitation programmes Cameroon · vocational training disability Cameroon · programmes rééducation Cameroun |
| Founder | Christopher A. Ekom · Fondateur Bridge of Hope · business diplomacy Cameroon disability |
| The Record | disability NGO impact Cameroon · impact personnes handicapées Cameroun |
| Ecosystem | ACE Global Nexus · ACE-AGRO Farms Ekombitié · African business investment disability inclusion |
| Get involved | support disability NGO Cameroon · donate disability Cameroon · soutenir fondation handicap Cameroun · partenariat ONG Cameroun |
| Contact | Bridge of Hope contact Yaoundé · contact fondation handicap Cameroun |
| Journal | disability inclusion articles Cameroon ·/articles handicap · blog droits personnes handicapées |
| Legal pages | privacy policy · terms of use · cookie policy · accessibility statement |

## Writing for search

- One `h1` per page, in the display voice. It is the same line a reader sees.
- The lead paragraph of each page is the description that goes to Google.
- The journal exists to build topical authority on *disability inclusion in
  Cameroon* — each post targets one question a supporter, a funder or a
  family is actually typing.
- Internal links: every page links to the programmes, the record and the ask;
  every post links back to the foundation.

## Housekeeping

1. After deploying, submit `https://<domain>/sitemap.xml` in Google Search
   Console and Bing Webmaster Tools.
2. Check the social card once in the debugger (LinkedIn, WhatsApp, X) — the
   generated PNG is served from `/en/opengraph-image` and `/fr/opengraph-image`.
3. When a post is added to `site/lib/posts.ts`, the sitemap, the blog index,
   the "read next" rail and the Article structured data update automatically.
4. `noIndex` is available in `buildMetadata({ noIndex: true })` for pages that
   should not be indexed — it is not used anywhere today.
