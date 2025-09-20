import '../styles/footer.css'

export default function Footer(){
  return (
    <footer className="footer text-light">
      <div className="container">
        <div className="row align-items-start text-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Lagos Night</a></li>
              <li><a href="#">Lasgidi</a></li>
              <li><a href="#">FewGoodMen</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="footer-title">Connect</h5>
            <div className="social-icons">
              <a href="mailto:info@yourdomain.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-md-4 text-md-end text-center">
            <img src="src/assets/images/Afri-fest-logo-black.png" alt="Afri-Fest East" className="footer-logo mb-3" />
            <p className="footer-text small mb-0">Celebrating authentic African taste and culture</p>
          </div>
        </div>

        <hr className="footer-divider my-3" />

        <div className="text-center">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} Few Good Men Ltd. | Developed by{' '}
            <a href="https://wa.me/+2348061631123" target="_blank" rel="noreferrer" className="dev-link">WallyDev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
