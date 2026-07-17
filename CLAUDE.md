# Chris Portfolio — Photographer Website

A photographer portfolio site, converted from `photographer-portfolio.html` (design mockup, source of truth for layout, colours, and interactions).

## Stack
- Vite + React (JavaScript, not TypeScript unless I ask)
- Plain CSS or CSS Modules — do NOT rewrite the styling in Tailwind or any CSS framework
- No new npm dependencies without asking me first and explaining why

## Design tokens (from the mockup)
- Background cream `#f6f1e7`, deeper panel `#efe8da`, card `#fffdf8`
- Borders `#e0d7c6`
- Ink/text `#1c1a16`, muted `#7c7466`, muted-2 `#a39a89`
- Accent burnt orange `#e8501a`, deep `#c33f10`
- Dark panels (hero/testimonials) `#171512`, `#211e1a`
- Fonts: Syne (display/headings, 600–800), Inter (body), Instrument Serif (italic accents)

## Component structure
Data-driven where possible:
- Navbar + MobileDrawer (hamburger below 900px)
- Hero (portrait as right-anchored background image, gradient overlay, #01–#04 specialties)
- LogoStrip ("featured on")
- About
- Services ("What I do" — 3 cards)
- WorkShowcase (outer carousel of subsections/categories, driven by tabs)
  - PhotoCarousel (reusable inner carousel — arrows, dots, counter, swipe, wrap-around)
- Process ("How it works" — 3 steps)
- Testimonials
- Contact (email input + CTA)
- Footer
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