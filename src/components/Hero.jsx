import '../styles/hero.css'
import afrivid_mp4 from "../assets/video/afrivid.mp4";

export default function Hero(){
  return (
    <section className="hero-section">
      <video className="background-video desktop-video" autoPlay muted loop playsInline>
        <source src={afrivid_mp4} type="video/mp4" />
      </video>
      <video className="background-video mobile-video" autoPlay muted loop playsInline>
        <source src="/video/afrimobillll.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h2>Experience Africa Like Never Before</h2>
        <h2><span className="accent">Culture • Music • Food • Heritage</span></h2>
        <h3>Chapelfield Gardens, Norwich: <span className="date">15th August 2026</span></h3>

        <div className="hero-actions" role="group" aria-label="Primary actions">
          <a href="https://www.eventbrite.co.uk/o/few-good-men-52207984483" target="_blank" rel="noopener noreferrer" className="hero-btn">Buy Tickets</a>
 {/* <a
  href="#partners"
  className="hero-btn2"
  onClick={(e) => {
    e.preventDefault();
    // 2) scroll to the section
    document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Become a Sponsor
</a>         */}
</div> 
      </div>
    </section>
  )
}
