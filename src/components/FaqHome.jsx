import { useState } from "react";
import { Link } from "react-router-dom"; // if not using a router, see note below
import "../styles/faq.css";

export default function FaqHome({ seeMoreTo = "/faq" }) {
  const [open, setOpen] = useState(0); // first item open by default; set to -1 to start closed

  const faqs = [
    {
      q: "When and where is Afrifest?",
      a: "Afrifest returns next summer in the UK with a full day of music, food, dance, art and cultural showcases. The exact venue, Chapelfield Gardens, Norwich: 15th August 2026."
    },
    {
      q: "Is Afrifest family-friendly?",
      a: "Yes. Afrifest is designed for everyone—kids, teens, adults and elders—with family zones, security, games, learning spaces, and accessible facilities."
    },
    {
      q: "How do I buy tickets?",
      a: "Tickets are available online via Eventbrite. Early bird and group bundles sell out fast—secure yours early to avoid missing out."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2 className="faq-title">FAQ</h2>
        <p className="faq-subtitle">Quick answers for first-time and returning guests.</p>
      </div>

      <div className="faq-list" role="list">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div className="faq-item" role="listitem" key={i}>
              <button
                className="faq-q"
                aria-expanded={expanded}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(expanded ? -1 : i)}
                type="button"
              >
                <span>{item.q}</span>
                <span className={`chev ${expanded ? "open" : ""}`} aria-hidden="true">⌄</span>
              </button>

              <div
                id={`faq-a-${i}`}
                className="faq-a"
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={!expanded}
              >
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-actions">
        <Link to={seeMoreTo} className="">See all FAQs</Link>
        {/* If you're not using React Router, replace the Link with:
            <a href="/faq" className="hero-btn">See all FAQs</a>
        */}
      </div>
    </section>
  );
}
