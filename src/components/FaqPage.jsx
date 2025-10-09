import { useState } from "react";
import "../styles/faq.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Events from "./Events";
import Sponsors from "./Sponsors";
import Partners from "./Partners";

export default function FaqPage() {
  const [open, setOpen] = useState(-1);
  const faqs = [
    { q: "What time do gates open?", a: "Doors typically open late morning; main performances begin mid-afternoon. Final schedule will be posted ahead of the event." },
    { q: "Can I bring children and strollers?", a: "Absolutely. There are family-friendly zones and accessible paths. Under-18s must be accompanied by an adult." },
    { q: "Are outside food and drinks allowed?", a: "Sealed water bottles are fine. We encourage you to explore our curated African food vendors and beverage partners on site." },
    { q: "Is there parking?", a: "Limited parking may be available near the venue. We recommend public transport or rideshare for convenience." },
    { q: "Do you offer refunds?", a: "Tickets are generally non-refundable. In the event of postponement, tickets remain valid for the new date." },
    { q: "How can brands partner or sponsor?", a: "Visit the Partners section on the home page to submit a partnership form. Our team will get back to you quickly." }
  ];

  return (
        <>
        <Navbar /> 

    <main className="faq-page container">

      <header className="faq-page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to plan an unforgettable Afrifest experience.</p>
      </header>

      <section className="faq-list" role="list">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div className="faq-item" role="listitem" key={i}>
              <button
                className="faq-q"
                aria-expanded={expanded}
                aria-controls={`faqp-a-${i}`}
                id={`faqp-q-${i}`}
                onClick={() => setOpen(expanded ? -1 : i)}
                type="button"
              >
                <span>{item.q}</span>
                <span className={`chev ${expanded ? "open" : ""}`} aria-hidden="true">⌄</span>
              </button>
              <div
                id={`faqp-a-${i}`}
                className="faq-a"
                role="region"
                aria-labelledby={`faqp-q-${i}`}
                hidden={!expanded}
              >
                <p>{item.a}</p>
              </div>
              
            </div>
            
          );
        })}
      </section>

    </main>
      <Events />
      <Sponsors />
      <Partners />  
      <Footer />  

    </>
  );

}
