import { useEffect } from 'react'
import { nav } from '../data/site'
import Socials from './Socials'

// Full-screen mobile nav (below 900px). Open state + Esc handling live in
// Navbar; this just renders and locks body scroll while open.
export default function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className={`drawer ${open ? 'open' : ''}`} id="drawer">
      {nav.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
      <Socials />
    </div>
  )
}
