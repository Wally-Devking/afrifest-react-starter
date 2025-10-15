import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/contact.css";
import Marquee from "./Marquee";
import Sponsors from "./Sponsors";
import Partners from "./Partners";
import Events from "./Events";
import contact_jpg from "/images/contact.jpg";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkapoez";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: form.subject || "New message from Afrifest contact form",
          _replyto: form.email,                  // lets Formspree set reply-to
          form_source: "Afrifest Contact page",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("Message sent! We’ll get back to you shortly.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        // Show Formspree validation messages if present
        const msg =
          data?.errors?.map((e) => e.message).join("\n") ||
          "Error sending message. Please try again later.";
        alert(msg);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Marquee />
      <Navbar />

      <main className="contact">
        <header className="contact__hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you — questions, partnerships, press, and more.</p>
          </div>
        </header>

        <section className="container contact__grid">
          <aside className="contact__image" aria-hidden="true">
            <img src={contact_jpg} alt="Contact" />
          </aside>

          <div className="contact__panel">
            {/* Native fallback: action+method ensure the form still submits without JS */}
            <form
              className="contact-form"
              onSubmit={onSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
            >
              {/* Honeypot to reduce spam */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} />

              <div className="form-row">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={onChange}
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <div className="form-row">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Message Subject"
                  value={form.subject}
                  onChange={onChange}
                />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={onChange}
                />
              </div>

              {/* Optional hidden subject for the non-JS fallback */}
              <input type="hidden" name="_subject" value={form.subject || "Afrifest Contact Form"} />

              <div className="form-actions">
                <button className="btn btn--primary" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                <input type="hidden" name="_next" value="https://theafrifest.com/thanks" />

              </div>
            </form>
          </div>
        </section>
      </main>

      <Events />
      <Sponsors />
      <Partners />
      <Footer />
    </>
  );
}
