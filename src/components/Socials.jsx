import { socials } from '../data/site'

// Real social links (opens in a new tab). Labels are the 2-letter marks.
export default function Socials({ className = 'socials' }) {
  return (
    <div className={className}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
        >
          {s.label}
        </a>
      ))}
    </div>
  )
}
