import '../styles/events.css'

export default function Events(){
  return (
    <section className="events-section" id="events">
      <div className="container">
        <div className="events-header">
          <h2>Featured Highlights</h2>
          <p>Experience the vibrant mix of African culture, tradition, and creativity at Afrifest.</p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <img src="https://img.icons8.com/ios-filled/100/dancing.png" alt="Dance" />
            <h3>Music</h3>
            <p>Showcasing African rhythm and movement.</p>
          </div>
          <div className="event-card">
            <img src="/images/culture.jpeg" alt="Culture" />
            <h3>Culture</h3>
            <p>Heritage from across Africa.</p>
          </div>
          <div className="event-card">
            <img src="https://img.icons8.com/ios-filled/100/paint-palette.png" alt="Arts" />
            <h3>Arts</h3>
            <p>From Spoken words, Poetry, Poems, Paintings & crafts.</p>
          </div>
          <div className="event-card">
            <img src="https://img.icons8.com/ios-filled/100/restaurant.png" alt="Food" />
            <h3>Food</h3>
            <p>Taste authentic African delicacies.</p>
          </div>
          <div className="event-card">
            <img src="https://img.icons8.com/ios-filled/100/theatre-mask.png" alt="Masquerade" />
            <h3>Masquerade</h3>
            <p>Traditional displays of art, mystery, and performance.</p>
          </div>
          <div className="event-card">
            <img src="/images/games.png" alt="Games" />
            <h3>Games</h3>
            <p>Fun, interactive African games for all ages to enjoy.</p>
            
          </div>
          </div>

      {/* Centered Button */}
        <div className="events-btn-wrapper">
          <a href="https://www.eventbrite.co.uk/o/few-good-men-52207984483" target="blank" className="hero-btn">Buy Tickets</a>
        </div>
      </div>
    </section>
    )
}
