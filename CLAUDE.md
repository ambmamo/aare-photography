# Aarekunle Photography — Photographer Website

A photographer portfolio site for **Aarekunle Photography** (photographer: **Aare Fuad**), converted from `photographer-portfolio.html` (design mockup, source of truth for layout, colours, and interactions). Content source of truth is `CONTENT.md`.

## Stack
- Vite + React (JavaScript, not TypeScript unless I ask)
- Plain CSS or CSS Modules — do NOT rewrite the styling in Tailwind or any CSS framework
- No new npm dependencies without asking me first and explaining why
- Current deps: `react`, `react-dom`, `react-icons` (brand social glyphs in `Socials`)

## Design tokens (from the mockup)
- Background cream `#f6f1e7`, deeper panel `#efe8da`, card `#fffdf8`
- Borders `#e0d7c6`
- Ink/text `#1c1a16`, muted `#7c7466`, muted-2 `#a39a89`
- Accent burnt orange `#e8501a`, deep `#c33f10`
- Dark panels (hero/testimonials) `#171512`, `#211e1a`
- Fonts:
  - Fraunces (H1/H2/H3 headings) — applied via the `--font-head` token in `:root`; change it there to restyle all headings at once
  - Syne (logo wordmark, spec numbers, slide counters, drawer/nav marks — NOT headings)
  - Inter (body/UI text)
  - Instrument Serif (italic accents — the "work" in "Selected work", the "— Aare Fuad" signature)

## Component structure
Data-driven where possible:
- Navbar + MobileDrawer (below 900px: sticky header + compact dropdown panel — NOT a full-screen overlay, does NOT lock page scroll; closes on link click, Esc, or outside tap). Desktop nav is separate — don't restyle it.
- Hero (portrait as right-anchored background image, gradient overlay, #01–#04 specialties)
- LogoStrip ("featured on") — currently commented out in `App.jsx` until real outlets exist (see CONTENT.md)
- About
- Services ("What I do" — 3 cards). "See works" deep-links into the matching WorkShowcase category (via `onSelectCategory` → active-category state in `App`), not just the default panel.
- WorkShowcase (outer carousel of subsections/categories, driven by tabs; active category is controlled by `App`)
  - PhotoCarousel (reusable inner carousel — arrows, dots, counter, swipe, wrap-around; "click any photo to enlarge" hint opens the Lightbox)
- Process ("How it works" — 3 steps)
- Testimonials
- Contact (mailto-only CTA — opens the visitor's mail client pre-addressed to Aare with subject "Photography enquiry"; no form/backend)
- Footer
- Socials (react-icons brand glyphs — Instagram/Facebook/X; Pixieset uses a gallery icon; shared by Navbar, MobileDrawer, Footer)
- Lightbox (full-screen photo viewer — arrows, caption, Esc/arrow keys, click-outside close)

## Data
- Portfolio content lives in `src/data/portfolio.js` — array of `{ category, blurb, images: [...] }`
- Both WorkShowcase and Lightbox read from this. Adding a photo = adding to the array.

## Images
- Start in `public/images/`, referenced by URL/path passed as props.
- Build image components so the source is swappable — I may move to a CDN (Cloudinary) later. Do NOT hardcode paths deep inside components.

## Interaction / a11y rules
- Minimal, subtle animations only — no bounces or extravagant motion
- Respect `prefers-reduced-motion` (kill transitions when set)
- Keyboard support on carousels and lightbox
- Focus styles on all interactive elements
- Mobile-first responsive; test down to 380px width

## Git workflow
- Commit in logical chunks with clear messages
- Push to `origin main` after meaningful progress
- Ask before force-pushing or rewriting history