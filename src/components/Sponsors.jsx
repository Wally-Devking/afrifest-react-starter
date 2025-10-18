import '../styles/sponsors.css'

export default function Sponsors() {
  return (
    <>
      <section
        className="tear-img tear-top"
        style={{ "--tear-h": "48px", zIndex: "1", background: "#6b1e00" }}
      ></section>

      <section className="sponsors-section py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4 mt-4">
              <h3 className="section-title">Our Sponsors</h3>
            </div>
          </div>

          {/* Use the Bootstrap grid for layout; each col holds a uniform logo-box */}
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/log9.jpg" alt="Sponsor 1" className="sponsor-logo" />
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/BB.jpg" alt="Sponsor 4" className="sponsor-logo" />
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/mel.png" alt="Sponsor 2" className="sponsor-logo" />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/EE.jpg" alt="Sponsor 6" className="sponsor-logo" />
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/CC.jpg" alt="Sponsor 3" className="sponsor-logo" />
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="logo-box">
                <img src="/images/frugs.png" alt="Sponsor 5" className="sponsor-logo" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
