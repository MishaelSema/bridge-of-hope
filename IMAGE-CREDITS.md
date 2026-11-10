# Image credits

## The foundation's own photographs

Nineteen photographs from the foundation's archive are now published across the
site. They are the foundation's own — no stock licence applies, and no credit
to a third party is required. Each still carries a credit line beneath it
reading *"Photograph: the foundation's own archive"*, so a reader can tell at a
glance which pictures are archival and which are still standing in for the
foundation's current work.

| File | Shows | Published as |
|---|---|---|
| `event-group.webp` | Group photograph at a foundation gathering | Home hero, slide 1 |
| `founder-cane.webp` | The founder seated, in traditional dress | Home hero, slide 2 · Founder page band |
| `award-certificate.webp` | A certificate presented beside a participant with a white cane | Home hero, slide 3 · Journal |
| `expo-power-africa.webp` | A group at a Power Africa booth | Home hero, slide 4 |
| `crutches-man.webp` | A participant using crutches at an event | Home, card 1 |
| `advocacy-handshake.webp` | A handshake with a community leader using crutches | Home, card 3 |
| `founder-portrait.webp` | Studio portrait of the founder | Home, founder section |
| `founder-lanyard.webp` | The founder at an international event | Founder page |
| `meeting-speaking.webp` | A working discussion in a lounge | About page band |
| `association-banner.webp` | The Bridge of Hope Cameroon Association banner | About page, values band |
| `award-smile.webp` | An award ceremony | The Record page band |
| `award-group.webp` | A group after an award ceremony | The Record page, recognition |
| `advocacy-handover.webp` | A document presented to a community leader | The Record page, recognition |
| `expo-selfie.webp` | The founder at an international trade show | The Ecosystem page |
| `applause.webp` | Guests applauding at a gathering | Get involved page band |
| `community-table.webp` | Guests in conversation at a community dinner | Reserved |
| `crutches-phone.webp` | A participant using crutches | Reserved |
| `expo-scooter.webp` | A participant on a mobility scooter at a trade show | Journal |
| `event-networking.webp` | Guests in conversation at a reception | The Ecosystem page band |

**Two checks before publication:** confirm that every person who is
recognisable has given consent for the web, and confirm the captions name
roles correctly — several of these people are partners or participants rather
than beneficiaries, and the captions must not imply otherwise.

**Orientation.** Seven of the archive photographs were stored sideways by the
phones that took them — the rotation lived in the file's metadata rather than
in its pixels. `site/scripts/rotate-archive-images.cjs` turns them from the
originals; the published files carry no EXIF, so no location data leaves the
phone. Re-run that script rather than editing the WebP by hand.

---

## Stock photography still in place

The remaining photographs are **licensed stock**, used as placeholders for
shots the foundation has not yet taken. Each frame carries a credit line
beneath it, and the licence requires that the credit stays with the image.

Files live in `site/public/images/` as pre-optimised WebP (max 1600px, quality
78), served straight from the CDN — `next/image` is unoptimised, so no image
transformation quota is consumed. The registry that wires them into the
pages is `site/lib/images.ts` — replacing a file and updating its credit there
is the whole job.

| File | Subject | Author | Licence | Source |
|---|---|---|---|---|
| `hero-children.webp` | Children outdoors | 3ch310n 123 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Amazing_african_children.jpg) |
| `inclusive-sport.webp` | Inclusive football match | Myousry6666 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Football_for_all.jpg) |
| `tailor-workshop.webp` | A tailor at her machine | Maina Pat Mbae | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_tailor_at_her_workshop.jpg) |
| `tailoring-unit.webp` | Mobile tailoring unit | — | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%22Mobile_Tailoring_Unit_in_Salem%27.jpg) |
| `carpentry.webp` | Chairs made in a community workshop | Martin Hipangwa | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_man_manufacturing_wooden_chairs_in_community_workshop_in_Olympia,Windhoek_01.jpg) |
| `market-women.webp` | Women selling vegetables | Minette Lontsie | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Women_in_a_market_selling_vegetables.jpg) |
| `market-bafia.webp` | Market at Bafia, Cameroon | Bediong | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vegetable_Market_Scene_in_Bafia_-_Cameroon.jpg) |
| `farm-rain.webp` | Farmland in the rainy season | Simbanematick | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Agriculture_en_saison_de_pluie_saison.jpg) |
| `agroforest.webp` | Agroforestry at Tayap | — | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Agrofor%C3%AAts_de_Tayap.jpg) |
| `poultry-farm.webp` | Poultry farm | Olga Ernst | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Poultry_farm,_South_Africa.jpg) |
| `vocational-studio.webp` | Vocational training studio | IICD | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Recording_studio_at_Chawama_vocational_training_centre_(5349241600).jpg) |
| `business-plan.webp` | A business plan being worked through | Ed Hawkesworth / DFID | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hatching_a_(business)_plan_(10692692005).jpg) |
| `youth-working.webp` | A young worker | Kani Beat | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ado_en_plein_travaux_p01.jpg) |
| `bridge-sanaga.webp` | The bridge over the Sanaga | Sosojam | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pont_sur_la_Sanaga.JPG) |
| `yaounde-city.webp` | Yaoundé | Kateregga1 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Views_of_Yaounde_Cameroon_05.jpg) |
| `yaounde-night.webp` | Yaoundé at night | Shaowu Fan | CC BY 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bastos_under_the_moon.jpg) |

## Fonts

- **Archivo** — SIL Open Font License 1.1 — <https://fonts.google.com/specimen/Archivo>
- **Instrument Serif** — SIL Open Font License 1.1 — <https://fonts.google.com/specimen/Instrument+Serif>

Both are self-hosted by the site through `next/font`, so no request ever
leaves the site for a font.

## When the real photography arrives

1. Drop the file in `site/public/images/` as WebP, max 1600px on the long edge, quality 78.
2. Replace the entry in `site/lib/images.ts` — path, alt text (both languages) and credit.
3. Update the caption copy in `site/lib/i18n.ts` or `site/lib/pages.ts` if the caption changes.
4. Update the table above.

Consent releases are required for any identifiable person, especially persons
with disabilities and children. The alt text must describe what is actually
in the frame, and the caption must not claim a place, person or date that the
photograph does not show.
