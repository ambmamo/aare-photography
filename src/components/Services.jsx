import { services } from '../data/site'
import Reveal from './Reveal'

// "What I do" — three service cards (top 3 categories). All four categories
// live in the Work carousel below.
export default function Services() {
  return (
    <Reveal as="section" className="whatido">
      <div className="head">
        <span className="eyebrow">What I do</span>
        <h2>What I obsess over</h2>
        <p>Distinct genres, one consistent standard. Pick a service and see the work behind it.</p>
      </div>
      <div className="cards">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <img src={s.image} alt={s.title} />
            <div className="card-body">
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
              <a href="#work" className="btn btn-outline-dark">
                See works <span className="arr">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
