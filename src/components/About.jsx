import { useEffect, useRef } from 'react'
import '../styles/about.css'
import Child_jpg from "/images/Child.jpg";
import mask_jpg from "/images/mask.jpg";
import b3_jpg from "/images/b3.jpg";
import legs_jpg from "/images/legs.jpg";


export default function About(){
  const counterRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(()=>{
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          animateCounter(counterRef.current, 5000, 4000)
          observer.disconnect()
        }
      })
    })
    if(sectionRef.current) observer.observe(sectionRef.current)
    return ()=>observer.disconnect()
  },[])

  function animateCounter(el, target, duration){
    let start = 0
    const inc = target / (duration/16)
    const int = setInterval(()=>{
      start += inc
      if(start >= target){ start = target; clearInterval(int) }
      el.textContent = Math.floor(start)
    },16)
  }

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <h2>Who We Are</h2>
          <p><strong>Afri-Fest East</strong> is the first-of-its kind and largest Afrocentric summer event in East Anglia.
          We aim to fill a noticeable gap in the outdoor entertainment space, catering to a diverse audience.</p>
          <p>Our goal is to promote and celebrate African culture through music, food, and dance, ultimately improving cohesion and integration with various communities in East Anglia.</p>
          <p>Our event will include live performances from artists, engaging kid’s activities, workshops, and African-inspired cuisine. Afri-Fest also offers unique opportunities to promote both local, small, and medium-scale businesses.</p>

          <div className="shop-btn">

            
          <div className="participants-section" ref={sectionRef}>
            <div className="counter-wrapper">
              <span id="participants-counter" ref={counterRef} className="counter">0</span>
              <span className="plus">+</span>
              <span className="label">Participants</span>
            </div>
          </div>
          </div>
        </div>

        <div className="mosaic" aria-label="Our community in action">
          <img src={Child_jpg} alt="Festival colors" />
          <img src={mask_jpg} alt="Traditional heritage" />
          <img src={b3_jpg} alt="Youth engagement" />
          <img src={legs_jpg} alt="Community support" />
        </div>
      </div>

{/* above wave */}
       <svg className="partners-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C280,200 560,0 840,80 C1080,145 1260,150 1440,110 L1440,220 L0,220 Z" />
        </svg>
    </section>
  )
}
