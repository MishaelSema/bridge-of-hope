---
name: Bridge of Hope
description: "The foundation's deep teal, one living green, warm paper light. Heavy grotesque for anything shouted, light serif for anything human. Every photograph screened into a single duotone that lets its colour through on hover."
colors:
  ink: "#053a52"
  ink-deep: "#022634"
  ink-soft: "#0e4158"
  mint: "#7fd6a9"
  mint-deep: "#2f8f66"
  green-ink: "#14654a"
  sand: "#f6f3ec"
  paper: "#ffffff"
  slate: "#5b6675"
  mist: "#e2e5e8"
  fog: "#aeb6bf"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 8.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 5.2vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.85rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.4rem, 3.4vw, 2.4rem)"
    fontStyle: "italic"
    fontWeight: 400
    lineHeight: 1.22
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  tight: "12px"
  cell: "24px"
  stack: "32px"
  container: "40px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    typography: "label"
    rounded: "{rounded.none}"
    padding: "17px 30px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "1px solid rgba(12, 26, 39, 0.35)"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  frame:
    backgroundColor: "{colors.ink}"
    backgroundImage: "linear-gradient(165deg, #0f4a63 0%, #053a52 55%, #022634 100%)"
  card:
    backgroundColor: "{colors.paper}"
    boxShadow: "0 18px 44px -26px rgba(7, 18, 28, 0.55)"
---

# Design System: Bridge of Hope

## Overview

**Creative North Star: "The Harbour"**

Bridge of Hope speaks in the register of a harbour: deep teal water, one signal green, photographs screened to a single blue-green duotone so that no two images fight each other, and a heavy grotesque that shouts only when it means to. Everything is built mobile first — a phone is the primary instrument of a foundation whose beneficiaries read on small screens — and the layout widens from there without changing its mind.

The system is deliberately simple to apply: three grounds (teal, white, warm sand), one green, one type family for everything that is read and one light serif for the one thing that should feel human, and a single rule that no heading ever gets a kicker above it.

**Key characteristics:**
- **Mobile first, always.** Every layout is written for 390px and widened at `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- **Three grounds.** Teal for the hero and the footer, white for reading, warm sand for banding. The green is the only accent and it means "act here".
- **One accent, used as action.** Green fills the primary button, the rule above a live heading, and the calling section. It is never decoration.
- **No eyebrow headings.** A heading stands alone. Small uppercase text is a label, a caption or a credit — never a kicker announcing the heading below it.
- **No icon set.** The only marks are a two-line menu button drawn in CSS, a text arrow on links, and a mint rule. No emoji, no icon font, no decorative glyphs.
- **Photography is duotoned** and returns to full colour on hover.
- **Sharp corners.** Radius is 0 everywhere.

## Colors

### Primary
- **Live Green** (`colors.mint`, `#7fd6a9`): the act. Primary buttons, the rule above a live heading, the calling section. On teal it reads at very high contrast; it is never used as small text on white.
- **Green Ink** (`colors.green-ink`, `#14654a`): green as small text on light grounds — figure labels, small links. 5.4:1 on white.

### Neutral
- **Ink** (`colors.ink`, `#0c1a27`): every dark ground and every headline. Also the hover fill for the mint button.
- **Ink Deep** (`colors.ink-deep`, `#07121c`): the ground behind photography.
- **Sand** (`colors.sand`, `#f6f3ec`): the warm band that separates two white sections.
- **Paper** (`colors.paper`): white — the reading ground, the card surface, the text on teal and on green.
- **Slate** (`colors.slate`, `#5b6675`): muted text on light grounds. 5.9:1 on white.
- **Fog** (`colors.fog`, `#aeb6bf`): muted text on teal. 8.1:1 on ink.
- **Mist** (`colors.mist`, `#e2e5e8`): hairlines on light grounds.

### Named Rules
**The One Green Rule.** Green marks the thing to do. It appears on one action and one heading rule per view. The calling section may take green as a full ground; nothing else does.

## Typography

**Display & body:** Archivo (variable, 400–800), with system fallbacks.
**Quote:** Instrument Serif, italic only.

**Character:** a tight, heavy grotesque for statements and a humanist serif for the founder's words. The sans carries every word meant to be read; the serif appears exactly once per page, on a quote.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 8.6vw, 6rem)`, 0.96, -0.03em, uppercase): the hero statement.
- **Heading** (800, `clamp(1.9rem, 5.2vw, 3.4rem)`, 1.02, -0.02em, uppercase): section claims and inner-page titles.
- **Subhead** (800, `clamp(1.25rem, 2.6vw, 1.85rem)`, 1.15): card and list titles.
- **Quote** (Instrument Serif italic, `clamp(1.4rem, 3.4vw, 2.4rem)`, 1.22): pull quotes and the founder's words.
- **Lead** (400, 1.02rem, 1.72): the paragraph under a page title, 56–64ch.
- **Body** (400, 1rem, 1.75): running text, 54–64ch.
- **Label** (600, 0.72rem, 0.16em, uppercase): navigation, buttons, the small line under a title.
- **Caption** (400, 0.72rem, 0.06em): photo captions and credits.

### Named Rules
**The No-Eyebrow Rule.** Nothing small and uppercase may sit directly above a heading. A label may sit below a title, beside a figure, or inside a list row — never as a kicker.
**The One Serif Rule.** Instrument Serif appears only for quoted speech. One per page, at most.

## Layout

**Container:** 1400px max, 20px side padding on mobile, 32px from `md`.

**Grounds:** teal → white → sand → white → green → teal (footer). The reading order alternates so that no two white sections touch.

**First viewport:** the hero fills `92svh` on mobile and `96svh` from `md`; the title, the mission line and the two actions sit on the ground of the photograph; the three cards break out of it by 48–80px.

**Section rhythm:** `py-16` → `md:py-24` on inner pages; `py-20` → `md:py-28` on the home page.

**Responsive ladder:** `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Grids step 1 → 2 → 3 → 4 columns. The header grows its link set as the screen grows (3 links at `md`, 4 at `lg`, 6 at `xl`); the full set always lives in the menu panel.

### Named Rules
**The Mobile-First Rule.** A layout is written for 390px and widened. Any rule that only exists above `md` is a convenience, never a requirement — every page is complete at 390px with no horizontal scroll.

## Elevation & Depth

Depth is carried by the photograph and the card, not by decoration.

- **Cards** are white on the page ground with a single soft shadow (`0 18px 44px -26px rgba(7,18,28,.55)`) that deepens on hover while the card lifts 6px.
- **Photographs** sit on the teal gradient ground, screened, washed and grained.
- **Sections** change ground instead of gaining a border.

### Named Rules
**The Flat Page Rule.** Sections never gain a stroke or a floating box to look like a card. If a section needs a container, the container is the grid.

## Shapes

Every corner is sharp. Buttons, cards, frames and panels are all radius 0. Structure is drawn with 1px rules in `mist` on light grounds and `rgba(255,255,255,.10)` on teal.

## Components

### Buttons
- **Shape:** rectangular, no radius, no shadow, `17px 30px` padding.
- **Primary (mint):** green ground, ink label. Hover → white ground.
- **Ink:** teal ground, paper label. Hover → green ground.
- **White:** paper ground, ink label. Hover → ink ground. Used on the green calling section.
- **Outline:** transparent with a 1px ink border; hover fills with ink and inverts the label. On teal, `btn-outline-light` uses a paper border.
- **Focus:** a 2px mint outline at 3px offset, everywhere.

### Links
- **Action link:** a hairline under uppercase text, thickening to full current colour on hover, often with a trailing `→`.
- **Quiet link:** a 1px underline at 28% opacity, strengthening on hover. Used in the footer and in lists.

### The Frame (photography)
A `figure` with a teal gradient ground; the image is desaturated and screened onto that ground, washed with a top-to-bottom gradient for legibility, and finished with press grain. On hover the duotone releases: the filter clears, the blend returns to normal, the opacity rises to full, and the image scales 4% over 900ms. Frames can be given `tone="colour"` to skip the treatment entirely.

### The Menu Panel
A full-screen teal panel: the wordmark, eight numbered links in display type, the primary action, the contact details and the language switch. The button that opens it is two lines drawn in CSS (no glyph, no icon font). The panel locks the page behind it and closes on Escape.

### The Page Hero
An inner page opens with a band of photography (`46vh` mobile, `64vh` from `md`), the page title set over it in paper, a mint rule above the title, and the lead beneath the band on white.

### The Hero Slideshow
The opening screen carries one statement and four photographs that cycle
beneath it — the people, the market, the land, the city. Slides cross-fade over
1600ms, advance every seven seconds, pause while the pointer rests on the
frame, and stop entirely for visitors who ask for reduced motion. Only the
active slide and the one after it are loaded. The markers are four thin bars
in the lower right, each a button with a spoken label; there is no arrow, no
counter and no icon.

## Do's and Don'ts

### Do:
- **Do** write mobile first and widen.
- **Do** keep green to one action and one rule per view.
- **Do** set headings in the heavy grotesque, in uppercase, with tight tracking.
- **Do** give every photograph a caption and a credit line.
- **Do** let photographs return to colour on hover.
- **Do** cap measures: display 16–20ch, body 54–64ch, lead 56–64ch, captions 70ch.
- **Do** keep the focus ring, the skip link and the menu panel working at every width.

### Don't:
- **Don't** put an eyebrow, a kicker or a small uppercase line above a heading.
- **Don't** add an icon library, emoji, or decorative glyphs. The menu button is two CSS lines; links use a text arrow.
- **Don't** introduce a second accent colour, a gradient brand fill, or rounded corners.
- **Don't** present a stock photograph as the foundation's own people without the caption saying it is a placeholder.
- **Don't** let a section cross the width without a ground change or a rule.
- **Don't** hide content behind animation, and never gate content on motion.
