import '../styles/marquee.css';

const texts = [
  'We Are Afri-fest',
  'Next Event Loading... 15th August 2026',
  "Don't Miss Out!!!",
  'Be a Sponsor | Partner',
  'Come Let Us Celebrate Africa Together',
  'Ticket Now On Sale',

];

export default function Marquee() {
  const items = [...texts, ...texts]; // seamless loop

  return (
    <section className="marquee" aria-label="Announcements">
      <div className="marquee__fade marquee__fade--left" aria-hidden="true" />
      <div className="marquee__track">
        {items.map((text, i) => (
          <div
className={`marquee__item ${text === 'Ticket Now On Sale' ? 'marquee__item--alert' : ''}`}

          >
            {text}
          </div>
        ))}
      </div>
      <div className="marquee__fade marquee__fade--right" aria-hidden="true" />
    </section>
  );
}
