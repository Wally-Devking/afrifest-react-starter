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
    <>
  <section className="tear-img tear-top" style={{ "--tear-h": "78px", zIndex: "1", background: "#070301ff" }}></section>

      <section className="about" id="about">

        <div className="about-inner">
        <div>
<h2>Who we are: </h2>

<p>Afri-Fest East is the largest Afrocentric summer event in East Anglia. We are the summer destination to experience the continent's rich heritage and vibrant contemporary spirit.</p>

<h2>Our Mission</h2>

<p>Our mission is to enthusiastically promote and celebrate African culture, its roots and evolving global influence. We do this through music, innovative cuisine, and captivating modern live performances. Our ultimate goal is to improve cohesion and integration among the various communities across East Anglia by creating a space for shared contemporary celebration. </p>

<h2>What to Expect</h2>

 <p>The festival features a dynamic lineup that includes live performances from cutting-edge artists, engaging kids' activities, hands-on workshops, exhibitions, an artisan market and authentic African street food. Afri-Fest also serves as a valuable platform, offering unique promotional opportunities for small, and medium-scale businesses, national and international brands looking to connect with a culturally rich audience.</p>

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
    </>
  )
}
