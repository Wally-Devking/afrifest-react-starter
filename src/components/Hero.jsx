import '../styles/hero.css'


export default function Hero(){
  return (
    <section className="hero-section">
      <video className="background-video desktop-video" autoPlay muted loop playsInline>
        <source src="/src/assets/video/afrivid.mp4" type="video/mp4" />
      </video>
      <video className="background-video mobile-video" autoPlay muted loop playsInline>
        <source src="/video/afrimobillll.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <h2>Experience Africa Like Never Before</h2>
        <p><span className="accent">Culture • Music • Food • Heritage</span></p>
        <h3>Chapelfield Gardens, Norwich: <span className="date">15th August 2026</span></h3>
        <a href="https://www.eventbrite.co.uk/o/few-good-men-52207984483" target='blank' className="hero-btn">Buy Tickets</a>
      </div>
    </section>
  )
}
