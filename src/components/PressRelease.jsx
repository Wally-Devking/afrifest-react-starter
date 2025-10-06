import '../styles/pressrelease.css';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sponsors from './Sponsors.jsx';
import Partners from './Partners.jsx';
import Marquee from './Marquee.jsx';
import Event from './Events.jsx';

export default function PressRelease() {
  return (
    <main className="press">
      <Navbar />
      <Marquee />
      <div className="press-container">
        {/* LEFT: sidebar card */}
        <aside className="press-aside">
          <div className="press-card">
            <h1 className="press-title">PRESS RELEASE</h1>

            <section className="aside-section">
              <h2 className="aside-heading">KEY POINTS:</h2>
              <ul className="aside-list">
                <li>A fun family day event with lots of kid’s activities and learning opportunities of the rich African culture.</li>
                <li>A unique event and first of its kind in East Anglia celebrating African Culture and inclusivity through dance, visual arts and live performances.</li>
                <li>Featuring the renowned music group NSG and BIEN (Sauti Sol) taking centre stage, alongside other UK African / Afrobeats artists.</li>
                <li>Enjoy a diverse selection of authentic African cuisine.</li>
              </ul>
            </section>

            <section className="aside-section">
              <h2 className="aside-heading">PRESS PHOTOS:</h2>
              <p>Please find photos included in email</p>
            </section>

            <section className="aside-section">
              <h2 className="aside-heading">ARTISTS BIOGRAPHY:</h2>
              <ul className="aside-links">
                <li><a href="#!">NSG Music</a></li>
                <li><a href="#!">Obase Aboli</a></li>
                <li><a href="#!">Bantu Arts</a></li>
                <li><a href="#!">Zong Zing Allstars</a></li>
                <li><a href="#!">Sefo Kanuteh</a></li>
              </ul>
            </section>

            <section className="aside-section">
              <h2 className="aside-heading">LINKS:</h2>
              <ul className="aside-links">
                <li><a href="https://theafrifest.com" target="_blank" rel="noreferrer">Afri-Fest Website</a></li>
              </ul>
            </section>

            <section className="aside-section">
              <h2 className="aside-heading">CONTACTS:</h2>
              <ul className="aside-links">
                <li>Sam Apeh - 07511 546210</li>
                <li><a href="mailto:admin@fewgoodmen.co.uk">admin@fewgoodmen.co.uk</a></li>
                <li><a href="#!" target="_blank" rel="noreferrer">YouTube Channel</a></li>
                <li><a href="#!" target="_blank" rel="noreferrer">Instagram: @afrifest_east</a></li>
                <li><a href="#!" target="_blank" rel="noreferrer">Facebook: @Afri-Fest East</a></li>
              </ul>
            </section>
          </div>
        </aside>

        {/* RIGHT: article */}
        <article className="press-body">
          <h2 className="article-title">
            AFRI-FEST EAST; Expanding East Anglia’s leading festival for African music, performance & culture
          </h2>

          <p><strong>Date:</strong> Saturday 16<sup>th</sup> August 2025</p>
          <p><strong>Venue:</strong> Chapelfield Gardens Norwich</p>

          <p>Afri-Fest East is set to ignite Norwich with a vibrant celebration of African culture, music, and culinary delights!</p>

          <p>
            Get ready for an explosion of vibrant culture, electrifying rhythms, and mouthwatering flavours as Afri-Fest East returns to Chapelfield Gardens, Norwich, on Saturday, August 16th, 2025. The festival is supported by Art Council England and Norfolk Community Foundation, as part of the 2025 UK/Kenya season of culture in collaboration with the British Council and Africa Centre London.
          </p>

          <p>
            This year, award-winning Kenyan artist BIEN (Sauti Sol) will bring East African flair to the Norwich stage, alongside UK Afrobeats stars including NSG. Also featured: Nella Rose, TONIGHT, and Corleone, etc. DJ sets by DJ Laz, Tashera, Muwa, and Sushi.
          </p>

          <p>
            <strong>Daytime events</strong> include live African music from Congo’s Zong Zing All Stars, storytelling by Usifu Jalloh, and dance/drum showcases. Kids can enjoy face painting, games (ludo, ayo, chess), and a dedicated play area.
          </p>

          <p><strong>Evening sessions</strong> transform the venue into a high-energy Afrobeat celebration, with live sets and a vibrant crowd.</p>

          <p><strong>Food:</strong> Authentic African cuisine from all regions. A mix of hot and cold dishes, including both alcoholic and non-alcoholic options.</p>

          <p>Don’t miss this unique East Anglian celebration of African heritage, performance, and unity.</p>

          <h3 className="info-title">INFO / TICKETS:</h3>
          <p>Saturday 16th August, 11:00am – 10pm</p>
          <p>Tickets: Kids go free. Teenagers £15. Adults from £25</p>
          <p><a className="eventbrite" href="#!" target="_blank" rel="noreferrer">Get Tickets on Eventbrite</a></p>
        </article>
      </div>

      <Event />
      <Sponsors />
      <Partners />
      <Footer />
    </main>
  );
}
