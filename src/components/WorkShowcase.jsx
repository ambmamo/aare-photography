import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import PhotoCarousel from './PhotoCarousel'

// Outer carousel: tabs switch between category panels (Documentary, Weddings,
// Shows & Events, Personal). Each panel holds a reusable PhotoCarousel.
// The active category is controlled by App so "See works" cards can deep-link
// straight to the matching panel.
export default function WorkShowcase({ onOpen, lightboxOpen, active, onActiveChange }) {
  const setActive = onActiveChange

  return (
    <Reveal as="section" className="gallery" id="work">
      <div className="sec-head">
        <h2>
          Selected <em>work</em>
        </h2>
        <p>A curated slice across documentary, weddings, shows &amp; events, and the personal projects in between.</p>
      </div>

      <div className="work-tabs">
        {portfolio.map((cat, i) => (
          <button
            key={cat.category}
            className={`work-tab ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="outer-carousel">
        <div
          className="outer-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {portfolio.map((cat, i) => (
            <div className="work-panel" key={cat.category} aria-hidden={i !== active}>
              <div className="panel-head">
                <h3>
                  <span>{`#0${i + 1}`}</span>
                  {cat.category}
                </h3>
                <p>{cat.blurb}</p>
              </div>
              <PhotoCarousel
                images={cat.images}
                title={cat.category}
                onOpen={onOpen}
                keyboardEnabled={i === active && !lightboxOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
