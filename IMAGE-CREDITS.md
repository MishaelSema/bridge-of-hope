# Image credits

Every photograph on the site is currently **licensed stock**, used as a
placeholder until the foundation's own photography arrives. Each frame carries
a credit line beneath it, and the licence requires that the credit stays with
the image.

Files live in `site/public/images/`. The registry that wires them into the
pages is `site/lib/images.ts` — replacing a file and updating its credit there
is the whole job.

| File | Subject | Author | Licence | Source |
|---|---|---|---|---|
| `hero-children.jpg` | Children outdoors | 3ch310n 123 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Amazing_african_children.jpg) |
| `inclusive-sport.jpg` | Inclusive football match | Myousry6666 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Football_for_all.jpg) |
| `tailor-workshop.jpg` | A tailor at her machine | Maina Pat Mbae | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_tailor_at_her_workshop.jpg) |
| `tailoring-unit.jpg` | Mobile tailoring unit | — | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%22Mobile_Tailoring_Unit_in_Salem%27.jpg) |
| `carpentry.jpg` | Chairs made in a community workshop | Martin Hipangwa | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_man_manufacturing_wooden_chairs_in_community_workshop_in_Olympia,Windhoek_01.jpg) |
| `market-women.jpg` | Women selling vegetables | Minette Lontsie | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Women_in_a_market_selling_vegetables.jpg) |
| `market-bafia.jpg` | Market at Bafia, Cameroon | Bediong | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vegetable_Market_Scene_in_Bafia_-_Cameroon.jpg) |
| `farm-rain.jpg` | Farmland in the rainy season | Simbanematick | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Agriculture_en_saison_de_pluie_saison.jpg) |
| `agroforest.jpg` | Agroforestry at Tayap | — | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Agrofor%C3%AAts_de_Tayap.jpg) |
| `poultry-farm.jpg` | Poultry farm | Olga Ernst | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Poultry_farm,_South_Africa.jpg) |
| `vocational-studio.jpg` | Vocational training studio | IICD | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Recording_studio_at_Chawama_vocational_training_centre_(5349241600).jpg) |
| `business-plan.jpg` | A business plan being worked through | Ed Hawkesworth / DFID | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hatching_a_(business)_plan_(10692692005).jpg) |
| `youth-working.jpg` | A young worker | Kani Beat | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ado_en_plein_travaux_p01.jpg) |
| `bridge-sanaga.jpg` | The bridge over the Sanaga | Sosojam | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pont_sur_la_Sanaga.JPG) |
| `yaounde-city.jpg` | Yaoundé | Kateregga1 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Views_of_Yaounde_Cameroon_05.jpg) |
| `yaounde-night.jpg` | Yaoundé at night | Shaowu Fan | CC BY 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bastos_under_the_moon.jpg) |

## Fonts

- **Archivo** — SIL Open Font License 1.1 — <https://fonts.google.com/specimen/Archivo>
- **Instrument Serif** — SIL Open Font License 1.1 — <https://fonts.google.com/specimen/Instrument+Serif>
- **Archivo Black** (social cards) — SIL Open Font License 1.1 — <https://fonts.google.com/specimen/Archivo+Black>

## When the real photography arrives

1. Drop the file in `site/public/images/` with a clear name.
2. Replace the entry in `site/lib/images.ts` — path, alt text (both languages) and credit.
3. Update the caption copy in `site/lib/i18n.ts` or `site/lib/pages.ts` if the caption changes.
4. Update the table above.

Consent releases are required for any identifiable person, especially persons
with disabilities and children. The alt text must describe what is actually
in the frame, and the caption must not claim a place, person or date that the
photograph does not show.
