import '../styles/map.css'

export default function MapSection(){
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h2>
                  NEXT AFRI-FEST EVENT LOCATION
                  <small style={{ fontSize: '15px', fontWeight: 'normal', display: 'block' }}>(15th August 2026)</small>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="tear-img tear-top" style={{ "--tear-h": "38px", background: "#ffffff" }}>
        <div className="contact-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4843.764727303595!2d1.2868782794380729!3d52.6259699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3e3d09661a1%3A0x53592086e5d4e456!2sChapelfield%20Gardens%2C%20Coburg%20St%2C%20Norwich%20NR1%203BF%2C%20UK!5e0!3m2!1sen!2sng!4v1711142510740!5m2!1sen!2sng"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
