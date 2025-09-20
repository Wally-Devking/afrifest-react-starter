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
        <p><span className="accent">Culture • Music • Fashion • Heritage</span></p>
        <h3>Chapelfield Gardens 20St Norwich UK: <span className="date">12th July 2026</span></h3>
        <a href="#tickets" className="hero-btn">Buy Tickets</a>
      </div>
    </section>
  )
}
