import { useEffect, useState } from 'react'
import { nav } from '../data/site'
import Logo from './Logo'
import Socials from './Socials'
import MobileDrawer from './MobileDrawer'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const close = () => setDrawerOpen(false)

  // Esc closes the mobile drawer.
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  return (
    <>
      <nav>
        <Logo />
        <div className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <Socials />
          <a href="#contact" className="btn btn-accent">
            Get in touch <span className="btn-arrow">→</span>
          </a>
          <button
            className={`burger ${drawerOpen ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <MobileDrawer open={drawerOpen} onClose={close} />
    </>
  )
}
