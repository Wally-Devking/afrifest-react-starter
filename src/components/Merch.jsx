import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/merch.css'

const items = [
  { src:'/src/assets/images/ppa.jpeg', name:'Afrifest Polo',    tag:'New' },
  { src:'/src/assets/images/ppb.jpeg', name:'Afrifest Cap',     tag:'Best Seller' },
  { src:'/src/assets/images/ppc.jpeg', name:'Las Gidi Polo',    tag:'Limited' },
  { src:'/src/assets/images/ppd.jpeg', name:'Afrifest T-shirt', tag:'Hot' },
  { src:'/src/assets/images/ppe.jpeg', name:'Afrifest Mask',    tag:'Limited' },
  { src:'/src/assets/images/ppf.jpeg', name:'Afrifest Hoodie',  tag:'New' },
]

export default function Merch(){
  return (
    <section className="merch-section2">
      <div className="merch-header">
        <h2 className="merch-title">Get the Merch</h2>
        <p className="merch-subtitle">STAY VIBRANT WITH OUR EXCLUSIVE BRAND MERCH</p>
      </div>

      <div className="merch-slider2">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          grabCursor
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay:3500, disableOnInteraction:false }}
          pagination={{ clickable:true }}
          navigation
          loop
          speed={650}
          breakpoints={{
            0:    { slidesPerView:1.2, spaceBetween:14 },
            480:  { slidesPerView:2,   spaceBetween:16 },
            768:  { slidesPerView:3,   spaceBetween:18 },
            1024: { slidesPerView:4,   spaceBetween:20 }
          }}
        >
          {items.map((it,idx)=>(
            <SwiperSlide key={idx}>
              <div className="merch-item2">
                {it.tag && <span className="merch-badge" aria-hidden="true">{it.tag}</span>}
                <div className="merch-image-wrap">
                  <img src={it.src} alt={it.name} loading="lazy" />
                </div>
                <p className="item-name">{it.name}</p>
                <div className="merch-cta-row" aria-hidden="true">
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="events-btn-wrapper">
        <a
          href="https://www.tiktok.com/@lagos_night_uk?_t=ZN-90EqrWrlYd4&_r=1"
          target="_blank" rel="noreferrer"
          className="hero-btn"
        >
          Get Merch
        </a>
      </div>
    </section>
  )
}
