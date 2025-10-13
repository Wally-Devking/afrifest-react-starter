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
    { q: "Can I buy tickets at the door?", a: "Yes! Tickets at the door will be sold at a slight premium. So, we encourage buying your tickets prior to the event." },
    { q: "Can I bring children and strollers?", a: "Absolutely. There are family-friendly zones and accessible paths. Under-18s must be accompanied by an adult." },
    { q: "Can I bring food and Drinks to the event?", a: "Food and drinks are not allowed into the event. We have a selection of food and drink vendors providing a selection of African food and drinks. You will be refused entry if you bring food/drinks. " },
    { q: "Is there parking?", a: "Limited parking may be available near the venue. We recommend public transport or rideshare for convenience." },
    { q: "Do you offer refunds?", a: "Tickets are generally non-refundable. In the event of postponement, tickets remain valid for the new date." },
    { q: "Do I need an ID to attend the event?", a: "No! You will not be required to present ID on entry. However, if you are lucky to look under 25, you will be required to present proof of identity (e.g. Drivers Licence, Passport etc.) to purchase alcohol." },
    { q: "Is there a dress code for the event?", a: "No! There is no dress code required to attend the event. However, if you would like to share your culture on the day or be selected as best dressed on the day, then please come in your native attire." },
    { q: "How much do kids under 12 have to pay for tickets?", a: "Kids aged under 12 years old do not have to pay to attend. Just turn up at the event and have a memorable family time." },
    { q: "When does the after party start?", a: "Doors to the After Party opens at 10.30pm and runs until 3am, 17th August." },
    { q: "Are dogs allowed?", a: "Unfortunately, due to limited space, dogs are not allowed at the event this year." }
  ];

  return (
        <>
        <Navbar /> 

    <main className="faq-page-container">

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
