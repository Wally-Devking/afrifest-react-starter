import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/contact.css";
import Marquee from "./Marquee";
import Sponsors from "./Sponsors";
import Partners from "./Partners";
import Events from "./Events";
import contact_jpg from "/images/contact.jpg";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/send_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: new URLSearchParams(form).toString(),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (err) {
      alert("Error sending message. Please try again later.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Marquee />

      <main className="contact">
        {/* Header band */}
        <header className="contact__hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you — questions, partnerships, press, and more.</p>
          </div>
        </header>

        {/* Two-column layout */}
        <section className="container contact__grid">
          <aside className="contact__image" aria-hidden="true">
            <img src={contact_jpg} alt="contact image" />
          </aside>

          {/* Right: Form */}
          <div className="contact__panel">
            <form className="contact-form" onSubmit={onSubmit}>
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

              <div className="form-actions">
                <button className="btn btn--primary" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>
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
