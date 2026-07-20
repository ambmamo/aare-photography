import { contact } from '../data/site'
import Reveal from './Reveal'

// Contact — a single mailto CTA (no form, no backend). Clicking opens the
// visitor's mail client pre-addressed to Aare with a ready subject line.
// Real email/phone from CONTENT.md; Pixieset link offered as "view full galleries".
const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Photography enquiry')}`

export default function Contact() {
  return (
    <Reveal as="section" className="contact" id="contact">
      <span className="eyebrow">Let's create</span>
      <h2>
        Have a story <em>worth telling?</em>
      </h2>
      <p>Tell me about the shoot — your email app opens with a message ready to send. I reply to every genuine enquiry within 48 hours.</p>
      <a href={mailto} className="btn btn-accent contact-cta">
        Send me an email <span className="btn-arrow">→</span>
      </a>
      <div className="contact-meta">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
      </div>
      <div className="contact-gallery">
        <a
          href={contact.pixieset}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark"
        >
          View full galleries <span className="arr">→</span>
        </a>
      </div>
    </Reveal>
  )
}
