import '../styles/partners.css'

export default function Partners(){
  return (
    <section className="partners-section py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h3 className="section-title">Our Partners</h3>
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <img src="src/assets/images/afk.png" alt="Partner 1" className="partner-logo img-fluid" style={{width:'300px', height:'150px'}} />
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <img src="/src/assets/images/log3.jpg" alt="Partner 2" className="partner-logo img-fluid" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <img src="src/assets/images/DD.jpg" alt="Partner 3" className="partner-logo img-fluid" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <img src="src/assets/images/AA.jpg" alt="Partner 4" className="partner-logo img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
