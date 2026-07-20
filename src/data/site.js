// Site-wide content & config — single source for chrome and copy.
// Real details from CONTENT.md. Items marked PLACEHOLDER need Aare's real words.

export const brand = {
  name: 'Aarekunle Photography',
  photographer: 'Aare Fuad',
  location: 'Ibadan, Oyo State — available to travel',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
  // Features section: NOT built yet — may be added later (see CONTENT.md).
]

// Real links from CONTENT.md (tracking params stripped). LinkedIn dropped.
export const socials = [
  { label: 'IG', name: 'Instagram', href: 'https://www.instagram.com/aarekunlephotography' },
  { label: 'FB', name: 'Facebook', href: 'https://www.facebook.com/share/1Yqu96ZusL/?mibextid=wwXIfr' },
  { label: 'X', name: 'X (Twitter)', href: 'https://x.com/aare_a_' },
  { label: 'PX', name: 'Pixieset', href: 'https://aarekunlephotography.pixieset.com/' },
]

export const contact = {
  email: 'Aarephotography1@gmail.com',
  phone: '0915 771 6451',
  phoneTel: '+2349157716451',
  pixieset: 'https://aarekunlephotography.pixieset.com/',
}

// #01–#04 in the hero. THESE REPLACE the mockup's specialties (CONTENT.md).
export const specialties = [
  { num: '#01', label: 'Documentary' },
  { num: '#02', label: 'Weddings' },
  { num: '#03', label: 'Shows & Events' },
  { num: '#04', label: 'Personal' },
]

// "What I do" cards — top 3 of the four real categories. Images reuse the
// first frame of each category so nothing is hardcoded elsewhere.
export const services = [
  {
    title: 'Documentary',
    blurb: 'Tracing a life and legacy, framed through the culture and heritage of the Southwest.',
    image: '/images/work/documentary/documentary-01.webp',
  },
  {
    title: 'Weddings',
    blurb: 'Moments of happiness and joy from couples, families and well-wishers.',
    image: '/images/work/weddings/weddings-01.webp',
  },
  {
    title: 'Shows & Events',
    blurb: 'The energy, and the celebrities, of live shows and events.',
    image: '/images/work/shows-events/shows-events-01.webp',
  },
]

// PLACEHOLDER — confirm real process; ₦ pricing removed per CONTENT.md.
export const processSteps = [
  {
    num: '01',
    title: 'Enquire & plan',
    body: 'Tell me about your day, event or idea. We hop on a short call, lock the date and shape the creative direction together.',
    note: 'Free consultation',
  },
  {
    num: '02',
    title: 'The shoot',
    body: 'I show up early, direct gently, and shoot documentary-first — so you get real moments, not stiff poses.',
    note: 'Half-day & full-day sessions',
  },
  {
    num: '03',
    title: 'Delivery',
    body: 'A curated, colour-graded online gallery within 14 days, with print-ready files and full usage rights included.',
    note: 'Full usage rights included',
  },
]

// PLACEHOLDER — dummy quotes kept until real client testimonials arrive.
export const testimonials = [
  {
    quote: 'Aare made our wedding day feel calm and cinematic. The photos still make us smile every time.',
    name: 'Amara O.',
    role: 'Bride, Lagos',
  },
  {
    quote: 'Sharp eye, effortless direction, zero drama. Our event coverage was exactly the story we wanted told.',
    name: 'David K.',
    role: 'Event Lead',
  },
  {
    quote: 'The documentary series completely captured the spirit of the campaign. Honest and unmistakably ours.',
    name: 'Sofia R.',
    role: 'Creative Director',
  },
]
