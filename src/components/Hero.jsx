import "../styles/hero.css";
import afrivid_mp4 from "../assets/video/afrivid.mp4";
import { useEffect, useState, useRef } from "react";

/*
  This version expects Slide images in public root:
  public/Slide1.jpg, public/Slide2.jpg, ... public/Slide6.jpg
  If your images are in public/images/, change paths to "/images/Slide1.jpg" etc.
*/
const desktopSlides = [
  "/images/Slide1.jpg",
  "/images/Slide2.jpg",
  "/images/Slide3.jpg",
  "/images/Slide4.jpg",
  "/images/Slide5.jpg",
  "/images/Slide7.jpg",
  "/images/Slide8.jpg",
  "/images/Slide9.jpg",
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* desktop carousel */}
      <div className="background-carousel desktop-only" aria-hidden={false}>
        <ImageCarousel slides={desktopSlides} interval={4500} />
      </div>

      {/* mobile video */}
      <video
        className="hero-video mobile-only"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden={true}
      >
        <source src={afrivid_mp4} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Experience Africa Like Never Before</h2>
          <h2>
            <span className="accent">Culture • Music • Food • Heritage</span>
          </h2>
          <h3>
            Chapelfield Gardens, Norwich: <span className="date">15th August 2026</span>
          </h3>

         <button
            className="hero-btn"
            type="button"
            onClick={() => window.open(
              "https://www.eventbrite.co.uk/o/few-good-men-52207984483",
              "_blank",
              "noopener,noreferrer"
            )}
            
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ImageCarousel ---------------------- */
function ImageCarousel({ slides = [], interval = 2000 }) { // faster: 2000ms (2s)
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    startAuto();
    return stopAuto;
  }, [slides.length, interval]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function startAuto() {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
  }
  function stopAuto() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  if (!slides || slides.length === 0) {
    return (
      <div className="carousel placeholder">
        <div style={{ padding: 24, color: "#ffffff" }}>No slides found</div>
      </div>
    );
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero images"
    >
      <ul
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <li
            key={i}
            className={`carousel-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <img src={src} alt={`Hero slide ${i + 1}`} loading="lazy" />
          </li>
        ))}
      </ul>

      <button
        className="carousel-arrow carousel-arrow--left"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className="carousel-arrow carousel-arrow--right"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-indicators centered" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-ind ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
