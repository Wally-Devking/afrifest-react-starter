import '../styles/pressrelease.css'
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sponsors from './Sponsors.jsx';
import Partners from './Partners.jsx';

export default function PressRelease() {
  return (
    <main>
      <Navbar />
      
      <h1>PRESS RELEASE</h1>

      <section>
        <h2>KEY POINTS:</h2>
        <ul>
          <li>A fun family day event with lots of kid’s activities and learning opportunities of the rich African culture.</li>
          <li>A unique event and first of its kind in East Anglia celebrating African Culture and inclusivity through dance, visual arts and live performances.</li>
          <li>Featuring the renowned music group NSG and BIEN (Sauti Sol) taking centre stage, alongside other UK African / Afrobeats artists.</li>
          <li>Enjoy a diverse selection of authentic African cuisine.</li>
        </ul>
      </section>

      <section>
        <h2>PRESS PHOTOS:</h2>
        <p>Please find photos included in email</p>
      </section>

      <section>
        <h2>ARTISTS BIOGRAPHY:</h2>
        <ul>
          <li>NSG Music</li>
          <li>Obase Aboli</li>
          <li>Bantu Arts</li>
          <li>Zong Zing Allstars</li>
          <li>Sefo Kanuteh</li>
        </ul>
      </section>

      <section>
        <h2>LINKS:</h2>
        <ul>
          <li><a href="https://theafrifest.com" target="_blank" rel="noreferrer">Afri-Fest Website</a></li>
        </ul>
      </section>

      <section>
        <h2>CONTACTS:</h2>
        <ul>
          <li>Sam Apeh - 07511 546210</li>
          <li><a href="mailto:admin@fewgoodmen.co.uk">admin@fewgoodmen.co.uk</a></li>
          <li><a href="#" target="_blank" rel="noreferrer">YouTube Channel</a></li>
          <li><a href="#" target="_blank" rel="noreferrer">Instagram: @afrifest_east</a></li>
          <li><a href="#" target="_blank" rel="noreferrer">Facebook: @Afri-Fest East</a></li>
        </ul>
      </section>

      <article>
        <h2>AFRI-FEST EAST; Expanding East Anglia’s leading festival for African music, performance & culture</h2>
        <p><strong>Date:</strong> Saturday 16th August 2025</p>
        <p><strong>Venue:</strong> Chapelfield Gardens Norwich</p>

        <p>Afri-Fest East is set to ignite Norwich with a vibrant celebration of African culture, music, and culinary delights!</p>

        <p>
          Get ready for an explosion of vibrant culture, electrifying rhythms, and mouthwatering flavours as Afri-Fest East returns to Chapelfield Gardens,
          Norwich, on Saturday, August 16th, 2025. The festival is supported by Art Council England and Norfolk Community Foundation, as part of the 2025
          UK/Kenya season of culture in collaboration with the British Council and Africa Centre London.
        </p>

        <p>
          This year, award-winning Kenyan artist BIEN (Sauti Sol) will bring East African flair to the Norwich stage, alongside UK Afrobeats stars including NSG.
          Also featured: Nella Rose, TONIGHT, and Corleone, etc. DJ sets by DJ Laz, Tashera, Muwa, and Sushi.
        </p>

        <p>
          Daytime events include live African music from Congo’s Zong Zing All Stars, storytelling by Usifu Jalloh, and dance/drum showcases. Kids can enjoy
          face painting, games (ludo, ayo, chess), and a dedicated play area.
        </p>

        <p>Evening sessions transform the venue into a high-energy Afrobeat celebration, with live sets and a vibrant crowd.</p>

        <p><strong>Food:</strong> Authentic African cuisine from all regions. A mix of hot and cold dishes, including both alcoholic and non-alcoholic options.</p>

        <p>Don’t miss this unique East Anglian celebration of African heritage, performance, and unity.</p>

        <h3>INFO / TICKETS:</h3>
        <p>Saturday 16th August, 11:00am – 10pm</p>
        <p>Tickets: Kids go free. Teenagers £15. Adults from £25</p>
        <p><a href="#" target="_blank" rel="noreferrer">Get Tickets on Eventbrite</a></p>
      </article>
      <>
      <Sponsors />
      <Partners />
      <Footer />
      </>
   
  
    </main>

  );
}
