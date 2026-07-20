import { useEffect, useRef, useState } from 'react'
import { nav } from '../data/site'
import Logo from './Logo'
import Socials from './Socials'
import MobileDrawer from './MobileDrawer'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef(null)
  const close = () => setDrawerOpen(false)

  // While the dropdown is open: Esc closes it, and a tap/click outside the
  // header closes it too. No scroll-lock — the page stays scrollable.
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) close()
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [drawerOpen])

  return (
    <nav ref={navRef}>
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
          aria-controls="drawer"
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <MobileDrawer open={drawerOpen} onClose={close} />
    </nav>
  )
}
