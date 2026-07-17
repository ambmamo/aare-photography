import { useEffect } from 'react'

// Full-screen photo viewer. Controlled by App:
// - state: { images, title, index } when open, or null when closed
// - onClose(), onNavigate(nextIndex)
// Keyboard: Esc closes, ←/→ navigate. Click outside the image closes.
export default function Lightbox({ state, onClose, onNavigate }) {
  const open = state !== null

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onNavigate(state.index + 1)
      else if (e.key === 'ArrowLeft') onNavigate(state.index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, state, onClose, onNavigate])

  const current = open ? state.images[state.index] : null

  return (
    <div
      className={`lightbox ${open ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button className="lb-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button
        className="lb-nav lb-prev"
        aria-label="Previous"
        onClick={() => onNavigate(state.index - 1)}
      >
        ←
      </button>
      {current && <img src={current.src} alt={current.alt} />}
      <button
        className="lb-nav lb-next"
        aria-label="Next"
        onClick={() => onNavigate(state.index + 1)}
      >
        →
      </button>
      {open && (
        <div className="lb-caption">
          {state.title} — {state.index + 1} / {state.images.length}
        </div>
      )}
    </div>
  )
}
