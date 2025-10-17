import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/merch.css'


const items = [
  // { src: '/images/afe2.jpg', name: 'Afrifest Polo',     tag: 'New',      link: 'https://lasgidi.co.uk/product/classic-unisex-pullover-hoodie-2/' },
  { src: '/images/afe1.jpg', name: 'Afrifest Top',      tag: 'New',      link: 'https://lasgidi.co.uk/product/classic-unisex-pullover-hoodie/' },
  { src: '/images/afe3.jpg', name: 'Las Gidi Bag',      tag: 'Limited',  link: 'https://lasgidi.co.uk/product/classic-tote-bag-3/' },
  { src: '/images/afe4.jpg', name: 'Afrifest T-shirt',  tag: 'Hot',      link: 'https://lasgidi.co.uk/product/organic-in-conversion-unisex-t-shirt/' },
  { src: '/images/afe5.jpg', name: 'Afrifest Bag',      tag: 'Limited',  link: 'https://lasgidi.co.uk/product/classic-tote-bag-2/' }, // removed leading '/'
  { src: '/images/afe6.webp',name: 'Afrifest Hoodie',   tag: 'Limited',  link: 'https://lasgidi.co.uk/product/classic-unisex-pullover-hoodie-gildan-18500/' },
];



export default function Merch(){
  return (
    <><section className="merch-section2">
      <div className="merch-header">
        <h2 className="merch-title">Get the Merch</h2>
        <p className="merch-subtitle">Stay vibrant with our exclusive brand merch</p>
      </div>

      <div className="merch-slider2">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          cursor="pointer"
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          speed={650}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 14 },
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 4, spaceBetween: 20 }
          }}
        >
          {items.map((it, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // make sure Swiper doesn't swallow the click
              >
                <div className="merch-item2">
                  {it.tag && <span className="merch-badge" aria-hidden="true">{it.tag}</span>}
                  <div className="merch-image-wrap">
                    <img src={it.src} alt={it.name} loading="lazy" />
                  </div>
                  <p className="item-name">{it.name}</p>
                  <div className="merch-cta-row" aria-hidden="true"></div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*
          <div className="events-btn-wrapper">
            <a
              href="https://www.tiktok.com/@lagos_night_uk?_t=ZN-90EqrWrlYd4&_r=1"
              target="_blank" rel="noreferrer"
              className="hero-btn"
            >
              Get Merch
            </a>
          </div> */}

    </section><section className="tear-img tear-top" style={{ "--tear-h": "48px", zindex: "1", background: "#ffb730ff" }}>
      </section></>
  )
}
    

