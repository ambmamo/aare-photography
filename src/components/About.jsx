import Reveal from './Reveal'

// About — portrait + bio. Copy is PLACEHOLDER (CONTENT.md): swap for Aare's
// real words (years of experience, style, what drives him) before launch.
export default function About({ image = '/images/about/about.webp' }) {
  return (
    <Reveal as="section" className="about" id="about">
      <div className="about-img">
        <img src={image} alt="Aare Fuad" />
      </div>
      <div className="about-copy">
        <span className="eyebrow">About me</span>
        <h2>Hi, I'm Aare!</h2>
        <p>
          For years I've been chasing light across streets, celebrations and studios in
          Ibadan and beyond — building a body of work that's equal parts documentary honesty
          and quiet emotion.
        </p>
        <p>
          Whether it's a wedding, a live show or a long-form documentary, my job is the same:
          turn a fleeting moment into something you'll want to keep forever.
        </p>
        <div className="about-sign">— Aare Fuad</div>
      </div>
    </Reveal>
  )
}
