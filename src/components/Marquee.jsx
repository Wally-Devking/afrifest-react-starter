import '../styles/marquee.css';

const texts = [
  'We Are Afri-fest',
  'Next Event Loading... 15th August 2026',
  'Dont Miss Out!!!',
  'Come Let Us Celebrate Africa Together',
];

export default function Marquee() {
  // Duplicate the array so it loops seamlessly
  const items = [...texts, ...texts];

  return (
    <section className="marquee" aria-label="Announcements">
      <div className="marquee__fade marquee__fade--left" aria-hidden="true" />
      <div className="marquee__track">
        {items.map((text, i) => (
          <div className="marquee__item" key={i}>
            {text}
          </div>
        ))}
      </div>
      <div className="marquee__fade marquee__fade--right" aria-hidden="true" />
    </section>
  );
}
