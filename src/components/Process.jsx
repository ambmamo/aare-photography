import { processSteps } from '../data/site'
import Reveal from './Reveal'

// "How it works" — three steps. Copy is PLACEHOLDER (CONTENT.md); ₦ pricing removed.
export default function Process() {
  return (
    <Reveal as="section" className="process" id="process">
      <div className="head">
        <span className="eyebrow">How it works</span>
        <h2>Three steps to your story</h2>
        <p>No mystery, no chaos. A simple process from first message to final gallery.</p>
      </div>
      <div className="steps">
        {processSteps.map((s) => (
          <div className="step" key={s.num}>
            <div className="s-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="s-note">{s.note}</div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
