import '../styles/marquee.css';

const texts = [
  'We Are Afri-fest',
  'Next Event Loading... 15th August 2026',
  'Dont Miss Out!!!',
  'Come Let Us Celebrate Africa Together',
  'Ticket On Sale Now',
];

export default function Marquee() {
  const items = [...texts, ...texts]; // seamless loop

  return (
    <section className="marquee" aria-label="Announcements">
      <div className="marquee__fade marquee__fade--left" aria-hidden="true" />
      <div className="marquee__track">
        {items.map((text, i) => (
          <div
            className={`marquee__item ${text === 'Ticket On Sale Now' ? 'marquee__item--alert' : ''}`}
            key={i}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="marquee__fade marquee__fade--right" aria-hidden="true" />
    </section>
  );
}
