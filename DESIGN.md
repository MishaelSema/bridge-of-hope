---
name: Bridge of Hope
description: A two-page editorial spread — warm paper, photogravure ink, one live red, didone display type against geometric sans text.
colors:
  paper: "#f6f1e7"
  paper-deep: "#efe8da"
  ink: "#1c1a17"
  grey: "#67635c"
  rule: "#d3cabb"
  live: "#a32127"
  plate-base: "#b8b2a6"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni MT, Times New Roman, serif"
    fontSize: "clamp(3rem, 7.4vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  page-title:
    fontFamily: "Bodoni Moda, Didot, Bodoni MT, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni MT, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bodoni Moda, Didot, Bodoni MT, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Bodoni Moda, Didot, Bodoni MT, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  caption:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  label:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  container-sm: "20px"
  tight: "12px"
  cell: "24px"
  stack: "32px"
  container: "40px"
  gutter-inset: "56px"
  page: "64px"
  spread: "80px"
  page-lg: "96px"
  spread-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.live}"
    textColor: "{colors.paper}"
    typography: "label"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  link-action:
    textColor: "{colors.live}"
    rounded: "{rounded.none}"
    padding: "0"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "body"
    rounded: "{rounded.none}"
    padding: "12px 0"
---

# Design System: Bridge of Hope

## Overview

**Creative North Star: "The Brodovitch Spread"**

Bridge of Hope is a two-page editorial spread, not a landing page. The world is Alexey Brodovitch's Harper's Bazaar: warm white paper under charcoal photogravure ink, full-bleed plates that run to the seam, and exactly one live element in lipstick red. Every section is a pose on the left page answered by evidence on the right, with a single hairline gutter holding the beat between them. The claim/evidence turn — not a card grid — is the system's core unit; a new screen is built by composing spreads, not by stacking components.

Density is sparse and asymmetric. Text is ragged-right, set in narrow measures around plates and rules; whitespace is the paper itself. The structural vocabulary is deliberately starved: hairline rules, 1px grid seams, ranked captions, and the didone at display size. No cards with fills or shadows, no rounded corners, no icon tiles, no second accent color. Depth comes from tonal banding of the paper and the photographic gradient inside a plate.

Imagery is the photogravure plate: a graded grey field with press grain and a ranked caption naming the photograph that belongs there, until the foundation supplies its own. This is product truth — no stock photograph of strangers stands in for the foundation's own people. Motion is one authored moment: plates rise into their frames as the spread turns, scroll-keyed and fully disabled under reduced motion; content is never gated behind animation. WCAG 2.2 AA is a brand requirement and constrains the palette outright.

**Key Characteristics:**
- The spread: two equal pages split by a 1px gutter seam; claim left, evidence right
- Six-color palette — warm paper ground, ink text, and a single live red reserved for one action or one urgent figure per view
- Bodoni Moda at display sizes only; Jost for every word that is read, every caption and every control
- Zero radius, zero shadow; structure drawn with hairlines and 1px grid seams
- Every figure carries a provenance line; every plate carries a ranked caption, in AA-tested grey
- Plates are the only animated element; everything else is still

## Colors

The palette is warm paper under ink with one red that must stay rare; all six tokens are defined once in the project's theme block and nothing else may be introduced.

### Primary
- **Live Red** (`colors.live`): the one action and the one urgent figure. It appears as the closing CTA, the hero action link, the funding-ask figure (the 600M XAF row), form error text, and the global focus ring. 6.65:1 on paper. It is never a background field, never decoration, never a heading color.

### Neutral
- **Paper** (`colors.paper`): the ground of every page and the fill of every ruled cell; also the text color on ink surfaces (button labels, plate caption bar).
- **Paper Deep** (`colors.paper-deep`): a tonal step used only to band a whole section — the closing ask, the record banner, the gift section — signaling "this section is different" without a box.
- **Ink** (`colors.ink`): all body and display text; also the hover/pressed fill for buttons, the strengthened input underline on focus, and the inverted selection color.
- **Grey** (`colors.grey`): captions, provenance, legal and secondary lines. 5.31:1 on paper (4.9:1 on paper-deep) — this value was set by the AA requirement and is a floor, not a stylistic choice; no lighter grey may replace it.
- **Rule** (`colors.rule`): every hairline, every grid seam, the gutter gradient itself. Structural only, never text.
- **Plate Base** (`colors.plate-base`): the base of the photogravure field; the plate itself grades through photographic greys (light `#a9a396` → mid `#8f8b83` → dark `#6f6a61`) under a multiply grain overlay.

### Named Rules
**The One Red Rule.** Live red appears on at most one action or one urgent figure per view. Its rarity is the point: the eye that finds the red has found the thing to do. Focus rings and form errors are permitted in red because they, too, are the live element of the moment.

## Typography

**Display Font:** Bodoni Moda (with Didot, Bodoni MT, Times New Roman fallbacks)
**Body Font:** Jost (with Futura, Century Gothic, system-ui fallbacks)
**Label/Mono Font:** Jost, tracked and uppercase — no monospace exists in this system.

**Character:** The historic Didot/Futura pairing: a high-contrast didone that only ever appears at display size, against a warm geometric sans that carries every readable word. The didone poses; the sans answers.

### Hierarchy
- **Display** (400, `clamp(3rem, 7.4vw, 5.75rem)`, line-height 1.02, tracking -0.02em): the foundation name on the opening spread; capped at ~12ch so it breaks ragged.
- **Page title** (400, `clamp(2.4rem, 5.2vw, 4.25rem)`, 1.02, -0.02em): the single `h1` of every inner page, capped at 15ch.
- **Headline** (400, `clamp(1.9rem, 3.6vw, 3rem)`, 1.02, -0.02em): the claim posed on the left page of each home spread; 14–20ch.
- **Title** (400, `clamp(1.75rem, 3.2vw, 2.6rem)`, 1.02, -0.02em): section headings on inner pages; 16–18ch.
- **Figure** (400, `clamp(2.6rem, 5vw, 3.75rem)`, line-height 1): impact numbers and record rows — didone numerals at near-display scale. (The inner Record page runs the same figure a shade smaller, clamping to 3.6rem; recorded drift, not a second role.)
- **Lead** (400, 1.05rem, 1.7): the one paragraph under a page title; 58ch.
- **Body** (400, 1rem, 1.75): all running text, 54–62ch max measure; a secondary step at 0.95rem (1.7) carries list bodies and card copy.
- **Caption / label** (400, 0.72rem, 1.5, tracking 0.14em, uppercase): ranked lines under plates and figures, form labels, column heads — always in Grey.
- **Control label** (400, 0.8rem, 1.5, tracking 0.16em, uppercase): button text. Nav links sit at 0.82–0.86rem with 0.06em tracking.

Below the ramp, two small display steps appear in single placements (list-item titles at 1.55→1.75rem, quote/card heads clamping ~1.5–2.25rem); treat them as title-scale variants, not new roles.

### Named Rules
**The Didone-at-Display Rule.** Bodoni Moda is used only at headline scale and above — h1s, section claims, figures, the wordmark, pull quotes. Every word meant to be read is Jost. A paragraph never sets in the didone.
**The Ranked Caption Rule.** Anything that would need an eyebrow elsewhere — a plate, a figure, a column, a form field — gets a ranked caption line instead: uppercase, tracked 0.14em, small, in Grey, with its numeral zero-padded (`01`, `02`). Captions annotate; they never announce above a heading as a kicker.

## Layout

**Container:** 1600px max, 20px side padding on small screens, 40px from `md` (768px) up.

**The spread grid:** `1fr — 1px — 1fr` with a real 1px gutter column carrying the seam; the left page is inset 56px from the seam, the right page likewise (56px). Founder and gift spreads use the asymmetric variant (`1.35fr — 1px — 0.9fr` / `1.1fr — 1px — 0.9fr`). Below `md` the gutter disappears and pages stack single-column with a 40px gap.

**Section rhythm:** sections are separated by a single top hairline — never by a background box. Inner pages run `py-16 → md:py-24` (64 → 96px); home spreads run `py-20 → md:py-28` (80 → 112px), with the closing ask opening to 128px on desktop. Within a section: heading → body 32px, body → provenance 12px, list rows 24px vertical.

**First viewport:** the opening spread fills the viewport below the header (`min-h: 100dvh − 4rem`); plate on the left page bleeding to the gutter, name and mission on the right, one red action at its foot. Below `md`, the plate becomes a 46vh band and the text follows.

**Dividing dense content:** figure and value grids are not card rows — they are cells divided by 1px gaps over the Rule color (`gap-px` on a rule-colored grid), so the hairline does the work a border would.

**Chrome:** sticky header, 56px tall on mobile / 64px on desktop, hairline bottom rule, paper at 90% with a 2px backdrop blur. Footer: hairline top rule, 4-column grid at `lg` (`1.2fr 1fr 1fr 0.8fr`), 2 columns at `md`, stacked below.

**Responsive ladder:** `sm` 640px, `md` 768px, `lg` 1024px. Progressive disclosure: nav links reveal at `md`/`lg`, the spread collapses to a stack below `md`, grids step 1 → 2 → 4 columns.

### Named Rules
**The Gutter Rule.** On desktop every claim is posed on the left page and its evidence answers on the right, across the 1px seam; body text never crosses the gutter and the seam never renders as a line between stacked mobile pages.

## Elevation & Depth

This system is flat. No `box-shadow` exists anywhere in the build — depth is conveyed by three other means: tonal banding (a whole section stepping from Paper to Paper Deep), the photographic gradient and grain inside a plate, and hairline rules that separate without enclosing. The single exception to transparency is the sticky header's 2px backdrop blur, which reads as paper held slightly off the page. Focus is a 2px solid Live Red outline offset 3px; selection inverts to Ink on Paper.

### Named Rules
**The Flat Page Rule.** Surfaces are flat at rest and flat under interaction. Hover changes color or opacity (200ms), never elevation. If a future component needs a shadow to be legible, the component is wrong, not the system.

## Shapes

Every corner in this system is sharp — radius is 0px on buttons, inputs, panels, plates, menus, and grid cells alike. Borders are hairlines: 1px in Rule for structure (sections, list rows, menus, table-like seams) and 1px in Ink for interactive commitment (outline buttons). The gutter's only geometry is a 1px column whose gradient fades out at both ends. Plates clip their content (`overflow: hidden`) so the grain and gradient terminate hard at the frame; the caption bar overlays the plate's foot rather than sitting outside it.

### Named Rules
**The Hairline Rule.** Structure is drawn, never boxed: sections, nav, footer, list rows and menu items are separated by 1px rules; dense grids divide with 1px gaps over the Rule color. A container never gains a stroke, fill, or radius to look like a card.

## Components

Buttons are stamped, links are underlined, fields are ruled — the same hairline-and-ink language at every scale.

### Buttons
- **Shape:** perfectly rectangular (radius 0), no shadow.
- **Primary:** Live Red fill, Paper label, padding 16px 32px, Jost uppercase at 0.8rem / 0.16em tracking. Used for the one commit action of a section (write to the foundation; form submit).
- **Hover / Focus:** fill steps to Ink over 200ms (both `:hover` and `:focus-visible`); disabled sits at 60% opacity. Focus never relies on color alone — the global 2px red outline remains available.
- **Outline:** transparent fill, 1px Ink border, Ink label, padding 12px 24px, uppercase 0.8rem / 0.14em; hover and focus fill Ink with Paper label. This is the secondary/tertiary tier (involvement cells).

### Links
- **Action link (red):** Live Red text at 0.95rem, 0.04em tracking, hover fades to 70% opacity; may carry a trailing directional mark underlined in the same hairline. Reserved for the one action in a view.
- **Underline link:** Ink text with a 1px Ink-at-25% underline that strengthens to full Ink on hover; footer lists use an offset underline instead. Nav links are bare — no underline, hover simply resolves Grey to Ink over 200ms.

### Inputs / Fields
- **Style:** no box. A single bottom rule (1px Rule) under transparent background, 12px vertical padding, 1rem Ink text, Grey placeholder; label sits above in caption style (uppercase, tracked, Grey).
- **Focus:** the bottom rule darkens to Ink (200ms); fields suppress the default outline in favor of this border shift, which remains clearly visible for keyboard users.
- **Error:** caption-adjacent text at 0.82rem, uppercase, 0.06em tracking, Live Red, announced via `role="alert"`; `aria-invalid` on the field. Success replaces the form with a bordered status line.

### Navigation
- **Style:** sticky hairline bar — wordmark in the didone (1.05 → 1.2rem), links in Jost at 0.82–0.86rem / 0.06em, evenly gapped; language switch in Grey resolving to Ink.
- **Mobile:** a native disclosure menu (`<summary>` reading "Menu") opening a right-aligned Paper panel with a 1px Rule border; items are full-width rows divided by hairlines. No hamburger glyph, no icon set.

### Photogravure Plate (signature)
The system's image unit and the only animated element. A figure filling its column (46vh minimum on mobile, full column on desktop), built from Plate Base graded by two radial light/shadow fields and a near-vertical linear gradient (light → mid → dark), overlaid with a multiply fractal-noise grain at 50% opacity. A ranked caption bar sits across the foot — Paper text on Ink at 60%, hairline of Paper at 40% above it. As the page scrolls, the plate rises 18px and resolves from 35% to full opacity (`cubic-bezier(0.16, 1, 0.3, 1)`, scroll-driven `view()` timeline, entry 4% → cover 26%). The animation lives only inside `@supports (animation-timeline: view())` + `prefers-reduced-motion: no-preference`; without either, the plate is simply there.

### Gutter (signature)
A 1px column spanning the spread's height, painted with a gradient that fades to transparent at both ends (Rule color from 12% to 88%), `aria-hidden`, hidden below `md`. It is the seam every spread turns on.

### Provenance
A caption-styled line, 12px below any figure, capped at 52ch, naming the source or the honest status of the number above it. Every figure on this site carries one.

## Do's and Don'ts

### Do:
- **Do** keep Live Red to one action or one urgent figure per view; focus rings and errors may also carry it.
- **Do** separate sections with a single top hairline and dense grids with 1px gaps over the Rule color — never with boxes.
- **Do** cap every measure: display 12–20ch, body 54–62ch, lead 58ch, provenance 52ch, plate captions 70ch.
- **Do** set the didone only at display scale and Jost for everything read; keep body line-height near 1.75 and display leading at 1.02 with -0.02em tracking.
- **Do** give every figure a provenance line and every plate a ranked caption in Grey — the AA value (5.31:1) is the floor for caption text.
- **Do** signal section change by stepping the ground to Paper Deep, and interactive state by color/opacity over 200ms.
- **Do** keep content fully visible without animation: reveal effects only behind `@supports` + reduced-motion guards, and keep the skip link and 2px red focus ring working everywhere.

### Don't:
- **Don't** introduce a second accent color, a gradient brand fill, or any red beyond the One Red Rule.
- **Don't** add rounded corners, box-shadows, elevation hovers, or card containers with fills and strokes — this world has none.
- **Don't** add an icon library, icon tiles, or emoji; directional and menu affordances are text and hairlines.
- **Don't** set running text, captions, or controls in the didone, and don't lighten Grey below the AA-tested value to make a layout quieter.
- **Don't** fill a plate with stock photography of strangers — plates stay plates until the foundation's own photography arrives.
- **Don't** let copy cross the gutter, and don't render the seam as a divider on stacked mobile layouts.
