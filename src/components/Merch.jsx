import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/merch.css'

const items = [
  { src:'/src/assets/images/m1.jpg', name:'Afrifest Polo' },
  { src:'/src/assets/images/m2.jpg', name:'Afrifest Cap' },
  { src:'src/assets/images/m1.jpg', name:'Las Gidi Polo' },
  { src:'src/assets/images/m4.jpg', name:'Afrifest T-shirt' },
  { src:'src/assets/images/m1.jpg', name:'Afrifest Mask' },
  { src:'src/assets/images/m6.jpg', name:'Afrifest Hoodie' },
]

export default function Merch(){
  return (
    <section className="merch-section2">
      <h2 className="merch-title">Get the Merch</h2>
      <p className="merch-subtitle">STAY VIBRANT WITH OUR EXCLUSIVE BRAND MERCH</p>

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
          breakpoints={{
            0: { slidesPerView:1.2 },
            480: { slidesPerView:2 },
            768: { slidesPerView:3 },
            1024: { slidesPerView:4 }
          }}
        >
          {items.map((it,idx)=>(
            <SwiperSlide key={idx}>
              <div className="merch-item2">
                <img src={it.src} alt={it.name} />
                <p className="item-name">{it.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="shop-btn">
        <a href="https://gelato.com" target="_blank" rel="noreferrer">Shop on Lasgidi</a>
      </div>
    </section>
  )
}
