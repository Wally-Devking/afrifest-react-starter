import React, { useState, useRef, useEffect } from "react";
import "../styles/Partnersection.css";
import footerlogo_png from "../assets/images/footerlogo.png";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgobnvj";


export default function PartnersSection({
  title = "Become a Sponsor | Partner",
  subtitle = `Help us celebrate African culture in the UK while growing your brand with our real community impact.
  Look, There is still a slot for you to fill!`,
  
  ctaText = "Click to Join Us",
  onSubmit,
  logoGrid = [],
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (open && firstFieldRef.current) firstFieldRef.current.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);



const handleSubmit = async (e) => {
  e.preventDefault();

  const formEl = e.target;
  const data = Object.fromEntries(new FormData(formEl).entries());
  if (typeof data.consent !== "undefined") data.consent = true;

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data,
        _subject: "Afrifest Partners form",
        form_source: "Afrifest Partners modal"
      })
    });

    if (res.ok) {
      onSubmit && onSubmit(data);
      alert("Thanks! We’ll get back to you shortly.");
      formEl.reset();
      setOpen(false);
    } else {
      const err = await res.json().catch(() => ({}));
      const msg = err?.errors?.[0]?.message || "Error sending message. Please try again later.";
      alert(msg);
    }
  } catch (error) {
    console.error(error);
    alert("Error sending message. Please try again later.");
  }
};


  return (
    <section className="partners-wrap" id="partners">
      <div className="partners-hero">
        <div className="partners-inner">
          <span className="eyebrow">Put your brand at the heart of Afrifest.</span>
          <h2 className="partners-title">{title}</h2>
          <p className="partners-lead">{subtitle}</p>

          <button className="partners-cta" type="button" onClick={() => setOpen(true)}>
            {ctaText}
          </button>
        </div>

        {/* Right-side collage (desktop). Keep or replace with your tiles */}
        <div className="partners-collage">
          <div className="collage-grid">
            <div className="tile tile-center"><span className="pepper" aria-hidden="true"><img src={footerlogo_png} alt="" /></span></div>
            {(logoGrid.length ? logoGrid : defaultTiles).map((t, i) => (
              <div className="tile" key={i}><img src={t.src} alt={t.alt} loading="lazy" /></div>
            ))}
          </div>
        </div>

        {/* Mobile single image on the right (optional) */}
        {/* <div className="mobile-tile"><img src="/images/afrifest-logo.png" alt="" /></div> */}

        <svg className="partners-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C280,200 560,0 840,80 C1080,145 1260,150 1440,110 L1440,220 L0,220 Z" />
        </svg>
      </div>


      {open && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partnerFormTitle"
          ref={dialogRef}
          onMouseDown={(e) => { if (e.target === dialogRef.current) setOpen(false); }}
        >
          <div className="modal">
            <button className="modal-close" aria-label="Close form" onClick={() => setOpen(false)}>×</button>
            <h3 id="partnerFormTitle">Sponsor|Partner with Afrifest</h3>
            <p className="modal-sub">Tell us a bit about your brand and goals. We’ll be in touch ASAP.</p>

            <form onSubmit={handleSubmit} className="form-grid">
              <label>Full Name*<input ref={firstFieldRef} type="text" name="name" required /></label>
              <label>Company / Brand*<input type="text" name="company" required /></label>
              <label>Email*<input type="email" name="email" required /></label>
              <label>Phone / WhatsApp<input type="tel" name="phone" /></label>
              <label className="full">
                Partnership Type*
                <select name="type" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Title Sponsor</option><option>Gold Sponsor</option>
                  <option>Silver Sponsor</option><option>Community Partner</option>
                  <option>Media Partner</option><option>Vendor / On-site Activation</option>
                </select>
              </label>
              <label className="full">What would you like to achieve?
                <textarea name="message" rows="4" placeholder="Share objectives, audience, budget range, ideas…" />
              </label>
              <label className="checkbox full">
                <input type="checkbox" name="consent" defaultChecked /> I agree to be contacted about Afrifest partnership opportunities.
              </label>
              <button type="submit" className="partners-cta full">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

const defaultTiles = [
  { src: "/src/assets/images/parA.jpg", alt: "Smiling woman" },
  { src: "/src/assets/images/parB.jpg", alt: "Woman with juice" },
  { src: "/src/assets/images/parC.jpg", alt: "chicken hands" },
  { src: "/src/assets/images/parD.jpg", alt: "serving man" },
  { src: "/src/assets/images/parE.jpg", alt: "2 woman" 

  },
  { src: "/src/assets/images/parF.jpg", alt: "Man in black" },
  { src: "/src/assets/images/parG.jpg", alt: "Woman in teal" },
];
