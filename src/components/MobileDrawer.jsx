import { nav } from '../data/site'
import Socials from './Socials'

// Compact dropdown panel from the header (below 900px). Rendered inside the
// sticky <nav> so it anchors under the header. It does NOT lock body scroll —
// the visitor can keep scrolling the page while it's open. Open state, Esc, and
// outside-tap close are handled in Navbar.
export default function MobileDrawer({ open, onClose }) {
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
