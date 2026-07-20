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
import { portfolio } from './data/portfolio'

export default function App() {
  // Lightbox state lives here so any carousel can open it and it renders once.
  // null = closed; otherwise { images, title, index }.
  const [lightbox, setLightbox] = useState(null)

  // Active Work category, controlled here so a "See works" card can deep-link
  // to the matching panel (activate it) and then scroll the section into view.
  const [workCategory, setWorkCategory] = useState(0)

  const selectWorkCategory = useCallback((categoryTitle) => {
    const i = portfolio.findIndex((c) => c.category === categoryTitle)
    if (i >= 0) setWorkCategory(i)
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

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
        <Services onSelectCategory={selectWorkCategory} />
        <WorkShowcase
          onOpen={openLightbox}
          lightboxOpen={lightbox !== null}
          active={workCategory}
          onActiveChange={setWorkCategory}
        />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <Lightbox state={lightbox} onClose={closeLightbox} onNavigate={navigateLightbox} />
    </>
  )
}
