import { testimonials } from '../data/site'
import Reveal from './Reveal'

// Dark panel. Quotes are PLACEHOLDER (CONTENT.md) until real ones arrive.
// Avatars use initials for now so we don't ship stock/placeholder faces.
const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Testimonials() {
  return (
    <Reveal as="section" className="testi">
      <div className="center">
        <span className="eyebrow">Kind words</span>
        <h2>People I work with</h2>
        <p>The best compliment is a client who comes back.</p>
      </div>
      <div className="t-cards">
        {testimonials.map((t) => (
          <div className="t-card" key={t.name}>
            <div className="stars">★★★★★</div>
            <div className="quote">“{t.quote}”</div>
            <div className="t-person">
              <div className="t-avatar" aria-hidden="true">
                {initials(t.name)}
              </div>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
