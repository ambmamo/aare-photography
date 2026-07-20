import { FaInstagram, FaFacebookF, FaXTwitter, FaImages } from 'react-icons/fa6'
import { socials } from '../data/site'

// Map each social (by name) to its brand glyph. Pixieset has no brand icon,
// so it uses a gallery/photos glyph — still a labelled link via aria-label.
const iconFor = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  'X (Twitter)': FaXTwitter,
  Pixieset: FaImages,
}

// Real social links (opens in a new tab). Icons inherit colour + size from CSS.
export default function Socials({ className = 'socials' }) {
  return (
    <div className={className}>
      {socials.map((s) => {
        const Icon = iconFor[s.name]
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
          >
            {Icon ? <Icon aria-hidden="true" /> : s.label}
          </a>
        )
      })}
    </div>
  )
}
