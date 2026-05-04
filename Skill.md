---
name: roofguard-website
description: Build guideline for the RoofGuard marketing site — a Utah-based business that applies protective clear coatings to asphalt shingle roofs to delay replacement.
---

# RoofGuard Website Build Guide

This document is the source of truth for building the RoofGuard marketing site. Translate it directly into components, copy, and layout. Defer to this doc over instinct when they conflict.

---

## 1. Brand Positioning

**Core message:** Avoid premature roof replacement.

**Value prop:** Extend the life of your existing asphalt shingle roof for a fraction of the cost of replacement.

**Tone:** Direct, practical, confident. Not salesy. No "revolutionary" language, no hype, no fluff.

**The Utah angle (use this — it's the strongest "why now"):**
Utah's high elevation and 220+ sunny days a year mean roofs here take more UV punishment than the national average. Asphalt shingles dry out, lose granules, and crack years earlier than manufacturer ratings predict. Add 100°F summer-to-winter temperature swings and the freeze/thaw cycle, and most Wasatch Front roofs are aging on a fast timeline. RoofGuard is built for that climate.

This angle should appear in the hero subhead, the problem section, and at least one social ad. It is the local credibility hook that separates RoofGuard from a generic national pitch.

---

## 2. Color System

| Role             | Name           | Hex      | Usage                            |
|------------------|----------------|----------|----------------------------------|
| Background Dark  | Charcoal       | #1C1F24  | Hero, bold sections              |
| Accent           | Burnt Copper   | #C46A2D  | Highlights, borders, emphasis    |
| Light Background | Sandstone      | #E7D8C9  | Page background, soft sections   |
| Trust Accent     | Slate Blue     | #4A6A7F  | Secondary UI, final CTA bg       |
| CTA              | Signal Green   | #3FA34D  | Buttons only                     |

**Usage rules (enforce these):**
- Green is reserved for actions. Never use it as a background, decorative element, or text color outside buttons.
- Copper is for emphasis — borders, key numbers, single emphasis words. Never run copper across full sentences.
- Slate Blue is structural. Use sparingly.
- Never combine all four accents in one section. Pick one accent per section in addition to the base.

**Suggested neutrals for body text and UI chrome:** white (#FFFFFF), off-white (#FAFAF7), and a muted text gray (#3A3D42) for body copy on light backgrounds.

---

## 3. Typography

**Headlines — Oswald** (fallback: Arial Narrow, sans-serif)
- Hero headline: ALL CAPS, tight letter spacing (-0.01em to -0.02em)
- Section headers: ALL CAPS Oswald
- Weight: 600–700 for hero, 500 for sections

**Body — Inter** (fallback: Arial, sans-serif)
- Base: 16–18px
- Line height: 1.5–1.6
- Weight: 400 for body, 600 for emphasized inline text

**Emphasis rules:**
- Bold key dollar figures: **$20,000**
- Use copper color sparingly for one or two emphasis words per paragraph maximum
- Never bold + color the same word — pick one

---

## 4. Site Structure

Build as a single long-scroll landing page. Sticky header with logo + phone number on the right. Sections in this order:

### 4.1 Hero
- Background: Charcoal
- Layout: left-aligned on desktop, centered on mobile
- Headline: `AVOID A $20,000 ROOF REPLACEMENT`
- Subhead: `Utah's UV and freeze/thaw cycles wear out asphalt shingles years before they should fail. Our protective coating extends roof life and delays costly replacement.`
- Primary CTA (Green, solid): `Get a Free Estimate`
- Secondary CTA (Outline, copper border): `See If Your Roof Qualifies`
- Optional trust strip below CTAs: `Serving the Wasatch Front` + small icons or short text (BBB, years in business, etc. — only include if true)

### 4.2 Cost Comparison (the conversion engine)
- Background: White
- Layout: 2-column comparison cards, equal height
- Left card (muted): "Replace Roof" — $15,000–$25,000 — 15–20 year lifespan — typical full tear-off
- Right card (copper border, slight elevation): "RoofGuard Treatment" — $2,000–$5,000 — Adds 5–10 years — applied in 1–2 days
- Below cards: one-line caption — `Same roof. A fraction of the cost. Years of added life.`

This section is the conversion engine. It should be visually dominant and easy to screenshot.

### 4.3 Problem Section
- Background: Sandstone
- Headline: `MOST UTAH ROOFS FAIL EARLIER THAN THEY SHOULD`
- Bullets:
  - High-altitude UV dries out shingles and breaks down asphalt binders
  - Granule loss accelerates with each freeze/thaw cycle
  - Cracking and curling shingles let water in — leaks follow
- Closing line (copper emphasis on "slow"): `We slow that process down.`

### 4.4 How It Works
- Background: White
- 3 steps, horizontal on desktop, stacked on mobile:
  1. **Inspect & prepare** — We assess the roof and clean the surface
  2. **Apply protective coating** — Sprayed evenly across all shingles
  3. **Cure into a durable barrier** — Bonds to existing shingles, no tear-off
- Keep copy under 12 words per step. No jargon.

### 4.5 Qualification Section
- Background: Sandstone or white (alternate from previous)
- Headline: `IS ROOFGUARD RIGHT FOR YOU?`
- Bullets (frame as a self-check):
  - Your roof is aging but not actively leaking
  - You want to delay a full replacement by 5–10 years
  - You want a cost-effective option that protects your investment
- Inline CTA (copper outline button): `Get a Free Roof Assessment`

### 4.6 Trust / Local Credibility (NEW — recommended addition)
- Background: White
- Short section establishing the Utah-based, local angle
- Possible elements (use what's true):
  - "Based in [city], serving the Wasatch Front from Ogden to Provo"
  - Years in business / number of roofs treated
  - Licensed and insured in Utah
  - One short customer quote if available
- This section is where the local moat lives. Don't skip it.

### 4.7 FAQ (NEW — recommended addition)
- Background: Sandstone
- Accordion or simple Q&A list. Address the objections that kill conversions:
  - Will this void my shingle manufacturer's warranty?
  - How long does the coating actually last?
  - What if my roof is already leaking?
  - Is this just paint?
  - How does it hold up under Utah snow?
- Keep answers to 1–3 sentences. Direct, no hedging.

### 4.8 Final CTA
- Background: Slate Blue
- Headline: `FIND OUT IF YOUR ROOF QUALIFIES`
- Sub: `Free assessment. No pressure. We'll tell you honestly if your roof is a candidate.`
- Button (Green): `Get My Estimate`
- Phone number displayed prominently below button — door-hanger recipients call, they don't fill forms

### 4.9 Footer
- Charcoal background
- Logo, phone, email, service area, license number
- No social links unless they're active and on-brand

---

## 5. Components (Reusable)

- **CTA Button (primary)** — Green background, white text, no shadow, slight rounded corners (4–6px), bold weight
- **CTA Button (secondary)** — Transparent with copper border and copper text
- **Comparison Card** — White card, 1px border, copper border + subtle elevation when "highlighted" variant
- **Section Header** — Oswald, all caps, tight tracking, optional copper underline rule
- **Bullet List** — Copper bullet marker or simple checkmark, Inter body, generous line spacing
- **Sticky Header** — Logo left, phone right, transparent over hero then solid charcoal on scroll

---

## 6. Imagery

**Do:**
- Real Utah roofs and homes — suburban Wasatch Front aesthetic
- Tight shots of weathered shingles vs. coated shingles (before/after)
- Photos with strong directional light (we sell sun damage protection — show the sun)
- Crew-at-work shots if available

**Don't:**
- Stock photos of "happy families"
- Generic suburban houses with palm trees or non-Utah landscapes
- Heavy gradients, drop shadows, or visual noise
- Icon-heavy layouts

If real photos aren't available at launch, use a single hero photo and leave other image slots blank rather than filling with stock. Empty space is better than wrong imagery.

---

## 7. Copy Principles

**Lead with:**
- Cost avoided (dollars)
- Time extended (years)
- Practical benefit (protect investment, delay replacement)

**Avoid:**
- Overpromising ("permanent," "lifetime," "guaranteed forever")
- Technical jargon (polymer chemistry, elastomeric, etc. — unless on a spec page)
- Marketing clichés ("revolutionary," "game-changing," "best-in-class")

**Numbers should be specific.** "$20,000" beats "tens of thousands." "5–10 years" beats "years of extra life."

---

## 8. Layout & Visual Style Rules

- Strong contrast over decoration
- Generous vertical spacing between sections (96–128px desktop, 64px mobile)
- Max content width ~1200px, narrower (640–720px) for text-heavy sections
- Mobile-first — door-hanger recipients arrive on phones. Hero must be readable and the CTA must be tappable above the fold on a 375px viewport.
- One CTA per section. Don't compete with yourself.

---

## 9. Build Notes & Suggested Adjustments

A few recommendations beyond the original design doc:

1. **Add a phone number everywhere.** This audience converts by phone, not form. Sticky header, hero, mid-page, footer.
2. **Consider a 3-question qualification quiz** in place of (or alongside) a contact form: roof age, current condition, ZIP code. Lower friction than a form, gives the user a sense of "qualifying."
3. **Local SEO matters here.** Build with city/region keywords (Salt Lake, Utah County, Davis, Weber, Wasatch Front) in headings and meta. Plan for a Google Business Profile from day one.
4. **Door hanger and site should share visuals.** When someone gets the flyer and lands on the site, the headline, color, and hero image should feel like the same thing. Build the flyer hero photo and the website hero photo as one asset.
5. **No live chat, no popups, no exit-intent modals.** They contradict the brand tone (direct, not salesy).
6. **Performance budget:** target sub-2s load on 4G. This is a contractor site — fast and clear beats fancy.

---

## 10. Out of Scope (V1)

- Online booking / scheduling
- Customer login / account area
- Blog (can be added in V2 for SEO)
- Multi-language support
- E-commerce
