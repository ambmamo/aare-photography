import { useEffect, useRef, useState } from 'react'

// Scroll-reveal wrapper — mirrors the mockup's IntersectionObserver behaviour.
// Adds `.in` once the element scrolls into view (then stops observing).
// prefers-reduced-motion is handled in CSS (.reveal shows immediately).
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setInView(true)
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
