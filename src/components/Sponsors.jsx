import '../styles/sponsors.css'

export default function Sponsors(){
  return (
    <section className="sponsors-section py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4 mt-4">
            <h3 className="section-title">Our Sponsors</h3>
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/BB.jpg" alt="Sponsor 1" className="sponsor-logo img-fluid" />
          </div>
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/mel.png" alt="Sponsor 2" className="sponsor-logo img-fluid" />
          </div>
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/CC.jpg" alt="Sponsor 3" className="sponsor-logo img-fluid" />
          </div>
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/log9.jpg" alt="Sponsor 4" className="sponsor-logo img-fluid" />
          </div>
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/frugs.png" alt="Sponsor 5" className="sponsor-logo img-fluid" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <img src="/images/DD.jpg" alt="Partner 3" className="partner-logo img-fluid" />
          </div>
          <div className="col-6 col-md-2 col-lg-2 text-center">
            <img src="/images/EE.jpg" alt="Sponsor 6" className="sponsor-logo img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
