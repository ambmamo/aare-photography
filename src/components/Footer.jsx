import { nav, brand } from '../data/site'
import Logo from './Logo'
import Socials from './Socials'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="foot-grid">
        <Logo />
        <div className="foot-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Socials />
      </div>
      <div className="foot-bottom">
        © {year} {brand.name} · <span>{brand.photographer}</span> · Ibadan, Nigeria
      </div>
    </footer>
  )
}
