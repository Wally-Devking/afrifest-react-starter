import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Merch from './components/Merch.jsx'
import Events from './components/Events.jsx'
import Parallax from './components/Parallax.jsx'
import MapSection from './components/MapSection.jsx'
import Sponsors from './components/Sponsors.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Merch />
      <Events />
      <Marquee />
      <Parallax />
      <MapSection />
      <Sponsors />
      <Partners />
      <Footer />
    </>
  )
}
