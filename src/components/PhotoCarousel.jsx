import { useEffect, useRef, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

// Reusable inner carousel: arrows, dots, counter, swipe, wrap-around.
// - images: [{ src, alt }]
// - title: category name (passed to the lightbox caption)
// - onOpen(images, title, index): opens the lightbox
// - keyboardEnabled: when true, ←/→ navigate this carousel (owner ensures only
//   the visible panel with no lightbox open gets this)
export default function PhotoCarousel({ images, title, onOpen, keyboardEnabled = false }) {
  const [idx, setIdx] = useState(0)
  const count = images.length
  const startX = useRef(null)

  const go = (i) => setIdx((i + count) % count)

  useEffect(() => {
    if (!keyboardEnabled) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(idx + 1)
      else if (e.key === 'ArrowLeft') go(idx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [keyboardEnabled, idx, count])

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const dx = e.changedTouches[0].clientX - startX.current
    if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1))
    startX.current = null
  }

  return (
    <>
      <div
        className="inner-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="inner-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              className="inner-slide"
              key={img.src}
              onClick={() => onOpen(images, title, i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${title} photo ${i + 1} full screen`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onOpen(images, title, i)
                }
              }}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
        <button
          className="car-btn car-prev"
          aria-label="Previous photo"
          onClick={() => go(idx - 1)}
        >
          ←
        </button>
        <button
          className="car-btn car-next"
          aria-label="Next photo"
          onClick={() => go(idx + 1)}
        >
          →
        </button>
      </div>
      <div className="car-footer">
        <div className="dots">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`dot ${i === idx ? 'active' : ''}`}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="slide-count">
          {pad(idx + 1)} / {pad(count)}
        </div>
      </div>
    </>
  )
}
