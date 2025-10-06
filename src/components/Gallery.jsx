import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/gallery.css'

const slides = [
  // 'src/assets/images/b1.jpg',
  // 'src/assets/images/b2.jpg',
  // 'src/assets/images/b3.jpg',
  // 'src/assets/images/b4.jpg',
  // 'src/assets/images/b5.jpg',
  // 'src/assets/images/b6.jpg',
   'src/assets/images/Afri-fest-east-27.jpg',
  'src/assets/images/Afri-fest-east-181.jpg',
  'src/assets/images/Afri-fest-east-195.jpg',
  'src/assets/images/afri-fest-east-206.jpg',
  'src/assets/images/afri-fest-east-229.jpg',
  'src/assets/images/afri-fest-east-297.jpg',
  'src/assets/images/afri-fest-east-310.jpg',
  'src/assets/images/afri-fest-east-313.jpg',
  'src/assets/images/afri-fest-east-399.jpg',
  'src/assets/images/afri-fest-east-310.jpg',
  'src/assets/images/afri-fest-east-408.jpg',
  'src/assets/images/afri-fest-east-442.jpg',
  'src/assets/images/afri-fest-east-470.jpg',
]

export default function Gallery(){
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Visual Journey</h2>
      <p className="gallery-subtitle">WE HAVE DONE IT OVER THE YEARS - VISIT OUR IG PAGE FOR MORE.</p>

      <div className="gallery-slider">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          coverflowEffect={{ rotate:30, stretch:0, depth:200, modifier:1, slideShadows:true }}
          autoplay={{ delay:2500, disableOnInteraction:false }}
          pagination={{ clickable:true }}
          navigation
        >
          {slides.map((src,idx)=>(
            <SwiperSlide className="gallery-slide" key={idx}>
              <img src={src} alt={`Slide ${idx+1}`} />
              <div className="gallery-caption"><b>Afri-fest East 2025</b></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
