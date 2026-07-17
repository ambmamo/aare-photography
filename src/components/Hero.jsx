import { specialties } from '../data/site'

// Hero — portrait as a right-anchored background layer with gradient overlay.
// The image path is a prop so it stays swappable (CDN later); CSS reads it via
// the --hero-img custom property, so no path is hardcoded in the stylesheet.
export default function Hero({ image = '/images/Hero/hero.webp' }) {
  return (
    <header className="hero" id="home">
      <div className="hero-main" style={{ '--hero-img': `url('${image}')` }}>
        <div className="hero-copy">
          <span className="eyebrow" style={{ color: '#ffb392' }}>
            Hey, I'm Aare
          </span>
          {/* PLACEHOLDER heading/tagline — confirm with Aare (CONTENT.md) */}
          <h1 className="disp">
            Photographer
            <br />
            &amp; Visual
            <br />
            Storyteller
          </h1>
          <div className="hero-tag">
            <strong>Every frame tells a story.</strong>
            From first light to final frame, I capture moments that connect and last.
          </div>
          <a href="#work" className="btn btn-accent">
            See my work <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
      <div className="specialties">
        {specialties.map((s) => (
          <div className="spec" key={s.num}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  )
}
