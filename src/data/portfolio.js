// Portfolio content — single source for WorkShowcase + Lightbox (see CLAUDE.md).
// Shape: [{ category, blurb, images: [{ src, alt }] }]
// Image paths point at public/images/ for now; swap to a CDN later by
// changing `src` here only — components must not hardcode paths.

export const portfolio = [
  {
    category: 'Documentary',
    blurb: 'Summarising the life of a gubernatorial aspirant in Oyo State.',
    images: [
      { src: '/images/work/documentary/documentary-01.webp', alt: 'Documentary 1' },
      { src: '/images/work/documentary/documentary-02.webp', alt: 'Documentary 2' },
      { src: '/images/work/documentary/documentary-03.webp', alt: 'Documentary 3' },
      { src: '/images/work/documentary/documentary-04.webp', alt: 'Documentary 4' },
      { src: '/images/work/documentary/documentary-05.webp', alt: 'Documentary 5' },
    ],
  },
  {
    category: 'Weddings',
    blurb:
      'A documentary of moments of happiness and joy from the couples, families and well-wishers.',
    images: [
      { src: '/images/work/weddings/weddings-01.webp', alt: 'Wedding 1' },
      { src: '/images/work/weddings/weddings-02.webp', alt: 'Wedding 2' },
      { src: '/images/work/weddings/weddings-03.webp', alt: 'Wedding 3' },
    ],
  },
  {
    category: 'Shows & Events',
    blurb: 'Captures of the celebrities in shows and events.',
    images: [
      { src: '/images/work/shows-events/shows-events-01.webp', alt: 'Shows & Events 1' },
      { src: '/images/work/shows-events/shows-events-02.webp', alt: 'Shows & Events 2' },
      { src: '/images/work/shows-events/shows-events-03.webp', alt: 'Shows & Events 3' },
      { src: '/images/work/shows-events/shows-events-04.webp', alt: 'Shows & Events 4' },
    ],
  },
  {
    category: 'Personal',
    blurb: 'Studio and outdoor snapshots capturing moments.',
    images: [
      { src: '/images/work/personal/personal-01.webp', alt: 'Personal 1' },
      { src: '/images/work/personal/personal-02.webp', alt: 'Personal 2' },
      { src: '/images/work/personal/personal-03.webp', alt: 'Personal 3' },
      { src: '/images/work/personal/personal-04.webp', alt: 'Personal 4' },
    ],
  },
]

export default portfolio
