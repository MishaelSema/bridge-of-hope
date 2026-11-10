# Images needed — Bridge of Hope Foundation

**Status: nineteen slots are now filled** with photographs from the
foundation's own archive (see `IMAGE-CREDITS.md`). This file lists what is
still standing in for a photograph, and what remains to be shot.

Send the files with the names given here; I will wire them in, rewrite the
alt text (English and French), and update the credits.

**Preparation:** publish as WebP, longest edge 1600px, quality 78. The
conversion script is `site/scripts/convert-bulk-images.cjs` — drop the raw
files in `site/content-images/`, add the entry to its map, and run it.

---

## Still to be shot

| File name | What to shoot | Where it appears now (stock placeholder) | Shape / size |
|---|---|---|---|
| `card-skills.jpg` | **Skills & livelihoods.** A workshop: tailoring, carpentry, ICT lab, crafts. The tools and the hands, mid-work. | Home, card 2 — `tailor-workshop` | Portrait or square, 1600×2000 |
| `about-problem.jpg` | **The problem, made visible.** A young person at work or in the street in a rural community. Not staged hardship. | About, problem section — `youth-working` | Landscape 4:3, 1600×1200 |
| `about-farm.jpg` | **Income.** The poultry unit or the farm, with the equipment that makes it an income rather than a gift. | About, sustainability — `poultry-farm` | Landscape 3:2, 1600×1067 |
| `programmes-hero.jpg` | **The workshops.** Carpentry, tailoring or the ICT lab in action — the place where skills are taught to the standard of the labour market. | Programmes page band — `carpentry` | Landscape, 2400×1350 |
| `impact-reporting.jpg` | **The paper trail.** Reports, monitoring notes, a clipboard, a quarterly review in progress. Honest, not corporate. | The Record, reporting section — `business-plan` | Landscape 3:2, 1600×1067 |
| `ecosystem-farm.jpg` | **The demonstration farm.** A training session on the farm — a trainee learning agriculture where the produce is grown. | The Ecosystem, closing section — `farm-rain` | Landscape 3:2, 1600×1067 |
| `involved-hands.jpg` | **Where support lands.** Close on the tools, the materials, the learning — not a portrait. | Get involved, closing section — `tailoring-unit` | Landscape 4:3, 1600×1200 |
| `contact-hero.jpg` | **Headquarters and the road.** The Yaoundé office, or the road out to Ekombitié. | Contact page band — `yaounde-city` | Landscape, 2400×1350 |
| `post-programmes.jpg` | A trainee in a workshop | Journal, "Six programmes, one pathway" — `tailor-workshop` | Landscape 3:2 |
| `post-ekombitie.jpg` | The land at Ekombitié | Journal, "Ekombitié" — `farm-rain` | Landscape 3:2 |
| `post-measure.jpg` | Monitoring in progress — a notebook, a visit, a review | Journal, "What we measure" — `business-plan` | Landscape 3:2 |

## Held in reserve

Two archive photographs are not yet published and are ready when a slot
opens: `community-table.webp` (guests in conversation at a community dinner)
and `crutches-phone.webp` (a participant using crutches).

## Also needed

| Asset | Spec | Why |
|---|---|---|
| **Logo / wordmark** | SVG preferred (or transparent PNG, 2000px wide) | The site sets "Bridge of Hope" in Archivo type. A real mark would let the wordmark carry the bridge motif. |
| **Favicon** | Already supplied — `favicon.svg`, `favicon.ico`, touch icons, manifest | Nothing needed. |
| **Social share image** | Already supplied — `bridge_of_hope_opengraph_1200x630.png` | Nothing needed. |

---

## Rules for the shoot

- **Your own people, your own places.** No stock photography of strangers — it
  is not a style preference here, it is the foundation's credibility.
- **Consent releases** for every identifiable person, especially persons with
  disabilities and children. Say who they are and what the photograph shows.
- **Captions must be true.** If a caption names a place, a person, a date or
  an activity, the photograph must show exactly that. The site states plainly
  which figures are targets rather than results, and the photography has to
  hold the same line.
- **Do not photograph a person's disability as the subject.** Photograph the
  person doing the thing — working, learning, training, deciding.
- **Files:** WebP, sRGB, longest edge 1600px, quality 78, no more than ~300 KB
  each. Landscape shots at 16:9 or 3:2; portraits at 4:5.
- **Send them in one folder** named as above, and I will wire them in, adjust
  the crops, rewrite the alt text in both languages and update the credits.

---

## When the files arrive

1. Drop the raw files into `site/content-images/`.
2. Add an entry to `site/scripts/convert-bulk-images.cjs` and run it, so the
   WebP lands in `site/public/images/` with the right name.
3. I update `site/lib/images.ts` — path, alt text (English and French), credit.
4. I update the captions in `site/lib/i18n.ts` and `site/lib/pages.ts`.
5. I re-check the crops at 390 / 768 / 1440 and re-run the accessibility pass.
6. I update `IMAGE-CREDITS.md` and deploy.
