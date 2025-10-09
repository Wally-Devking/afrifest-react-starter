// src/components/GalleryReels.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/gallery.css";

const REEL_URLS = [
  "https://www.instagram.com/p/DOyuOYSgdJH/",
  "https://www.instagram.com/p/DPhOq7-Fb4J/",
  "https://www.instagram.com/p/DPTe30-jLNe/",
  "https://www.instagram.com/p/DOjM_wIEUYg/",
  "https://www.instagram.com/p/DPTo55vjOUW/",
  "https://www.instagram.com/p/DOv8PL-jD8J/",
  "https://www.instagram.com/p/DOber4-jbm2/", 
  "https://www.instagram.com/p/DPX1Y3xj4tJ/",
  "https://www.instagram.com/p/DOEkArLDFKx/",
  "https://www.instagram.com/p/DN020oGWE8L/",
  "https://www.instagram.com/p/DNqjc69M9NA/",
  "https://www.instagram.com/p/DNoPpPwMQbA/",
  "https://www.instagram.com/p/DOeDZFQidoZ/",
];

function loadInstagramEmbedScriptOnce() {
  if (window.instgrm) return; // already loaded
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.instagram.com/embed.js";
  document.body.appendChild(s);
}

export default function GalleryReels() {
  useEffect(() => {
    loadInstagramEmbedScriptOnce();
    // Process embeds after first render (and again if the script loads slightly later)
    const t = setTimeout(() => window.instgrm?.Embeds?.process(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Visual Journey</h2>
      <p className="gallery-subtitle">WE HAVE DONE IT OVER THE YEARS – VISIT OUR IG PAGE FOR MORE.</p>

      <div className="gallery-slider">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          navigation
          loop
          coverflowEffect={{ rotate: 30, 
            stretch: 0, 
            depth: 150, 
            modifier: 1, 
            slideShadows: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {REEL_URLS.map((url) => (
            <SwiperSlide className="gallery-slide" key={url}>
              {/* Instagram official embed blockquote */}
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                // recommended inline styles from IG docs, adjust width via CSS if needed
                style={{
                  background: "#ffffffff",
                  border: 0,
                  borderRadius: "50px",
                  boxShadow: "0 0 1px rgba(0, 0, 0, 0.68), 0 1px 10px rgba(0, 0, 0, 0.54)",
                  margin: 0,
                  minWidth: 220,
                  maxWidth: 340,
                  width: "100%",
                }}
              />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
