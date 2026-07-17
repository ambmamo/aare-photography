import { useState } from 'react'
import { contact } from '../data/site'
import Reveal from './Reveal'

// Contact — email capture wired to a mailto (no backend yet). The visitor's
// address is folded into the message body so Aare can reply directly.
// Real email/phone from CONTENT.md; Pixieset link offered as "view full galleries".
export default function Contact() {
  const [email, setEmail] = useState('')

  const mailto = () => {
    const subject = encodeURIComponent('New enquiry from aare.photography')
    const body = encodeURIComponent(
      `Hi Aare,\n\nI'd like to talk about a shoot.\n\nReply to: ${email || '(add your email)'}\n`
    )
    return `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <Reveal as="section" className="contact" id="contact">
      <span className="eyebrow">Let's create</span>
      <h2>
        Have a story <em>worth telling?</em>
      </h2>
      <p>Drop your email and tell me about the shoot. I reply to every genuine enquiry within 48 hours.</p>
      <div className="contact-form">
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your email address"
        />
        <a href={mailto()} className="btn btn-accent">
          Send message <span className="btn-arrow">→</span>
        </a>
      </div>
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
