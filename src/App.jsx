import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import LogoStrip from './components/LogoStrip' // "Featured on" — hidden until real outlets exist (CONTENT.md)
import About from './components/About'
import Services from './components/Services'
import WorkShowcase from './components/WorkShowcase'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { brand } from './data/site'

export default function App() {
  // Lightbox state lives here so any carousel can open it and it renders once.
  // null = closed; otherwise { images, title, index }.
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((images, title, index) => {
    setLightbox({ images, title, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const navigateLightbox = useCallback((next) => {
    setLightbox((lb) => {
      if (!lb) return lb
      const len = lb.images.length
      return { ...lb, index: (next + len) % len }
    })
  }, [])

  return (
    <>
      <div className="topbar">
        Now booking sessions — {brand.location}
      </div>

      <div className="wrap">
        <Navbar />
        <Hero />
        {/* <LogoStrip /> — Features/"featured on" section may be added later */}
        <About />
        <Services />
        <WorkShowcase onOpen={openLightbox} lightboxOpen={lightbox !== null} />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <Lightbox state={lightbox} onClose={closeLightbox} onNavigate={navigateLightbox} />
    </>
  )
}
