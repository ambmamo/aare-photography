# Aare Photography — Site Content

Content source of truth for the site. Business: **Aare Photography**. Photographer: **Aare Fuad**.

> NOTE: Copy marked _(placeholder — expand)_ is written to fill the layout. Replace with Aare's real words before launch.

## Brand
- Business name: **Aare Photography**
- Photographer: **Aare Fuad**
- Logo text: `aare.photography` (or "Aare Photography" — confirm preference)

## Navigation
Home · About · Work · Process · Contact
- **Features section: NOT built yet. Comment it out in the code with a note that it may be added later** (see instruction at bottom).

## Hero
- Eyebrow: "Hey, I'm Aare"
- Heading: Photographer & Visual Storyteller  _(placeholder — confirm tagline)_
- Sub-tag strong line: "Every frame tells a story." _(placeholder — expand)_
- Sub-tag body: Short one/two-line intro. _(placeholder — expand)_
- Specialties (#01–#04) — THESE REPLACE the old ones:
  - #01 Documentary
  - #02 Weddings
  - #03 Shows & Events
  - #04 Personal

## About ("Hi, I'm Aare!")
_(placeholder — expand with Aare's real bio: years of experience, style, what drives him.)_
Suggested 2 short paragraphs + signature "— Aare Fuad".

## Services / "What I do" cards
Use the four real categories (or pick the top 3 for the cards; the full four live in the Work carousel):
- **Documentary** — Long-form visual stories that follow a life or a cause.
- **Weddings** — Moments of happiness and joy from couples, families and well-wishers.
- **Shows & Events** — The energy, and the celebrities, of live shows and events.
- **Personal** — Studio and outdoor snapshots capturing everyday moments.

## Work (carousel categories + blurbs)
Drives `src/data/portfolio.js`. Structure: `[{ category, blurb, images: [...] }]`.

1. **Documentary** — "Summarising the life of a gubernatorial aspirant in Oyo State." _(expand: add subject/year if shareable.)_
2. **Weddings** — "A documentary of moments of happiness and joy from the couples, families and well-wishers."
3. **Shows & Events** — "Captures of the celebrities in shows and events."
4. **Personal** — "Studio and outdoor snapshots capturing moments."

## Process ("How it works")
_(placeholder — confirm real process & pricing. Current mockup steps:)_
1. Enquire & plan
2. The shoot
3. Delivery
> Remove the ₦ pricing hints until Aare confirms real figures.

## Testimonials
_(placeholder — need real client names + quotes. Leave mockup dummies until provided.)_

## Contact
- Prompt: "Have a story worth telling?"
- Email input + send CTA
- Socials: FB / IG / IN / PT — _(provide real handles/links.)_

## Featured / logo strip
_(placeholder — only include real publications/brands Aare has worked with. If none yet, comment this section out too.)_

---

# Image Folder Structure

All images start in `public/images/` (swappable to a CDN later — see CLAUDE.md).
Optimise before adding: max ~2000px wide, compressed, prefer `.webp` where possible.



### Social links
- Facebook: https://www.facebook.com/share/1Yqu96ZusL/?mibextid=wwXIfr
- Instagram: https://www.instagram.com/aarekunlephotography
- X (Twitter): https://x.com/aare_a_
- Pixieset (existing client galleries / portfolio): https://aarekunlephotography.pixieset.com/

### Contact details
- Phone: 0915 771 6451  (tel: +2349157716451)
- Email: Aarephotography1@gmail.com
- Location: Ibadan, Oyo State — available to travel

### Tagline (from live profile)
"Portraits · Fashion · Event — Ibadan, available to travel" _(reference; adapt to the site's Documentary / Weddings / Shows & Events / Personal categories)_

---

# BUILD NOTES (for Claude Code)
- Footer/nav social icons (currently placeholder FB/IG/IN/PT) → replace with the 4 real links above. Suggested set: **Instagram, Facebook, X, Pixieset**. Drop "IN" (LinkedIn) — no profile provided.
- Instagram and X links: I've stripped tracking params (`igsh`, `utm_source`, `?s=11`) for clean canonical URLs. Use these cleaned versions.
- Contact section: wire the real email into the CTA (mailto or form endpoint later) and add the phone number.
- The Pixieset gallery is a strong "View full galleries" link — consider a button in the Work or Contact section pointing to it, separate from the social icons.