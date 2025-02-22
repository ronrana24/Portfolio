import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">&lt;Rahul Rana/&gt;</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">
          {/* Using target="_blank" with rel="noopener noreferrer" for security reasons */}
          <a 
            href="https://www.instagram.com/soumyajiitttt/" 
            className="footer__social-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a 
            href="https://x.com/Soumyajiitt" 
            className="footer__social-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a 
            href="https://github.com/soumyajiitt" 
            className="footer__social-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Rahul Rana. All rights reserved.</span>
      </div>
    </footer>
  );
};
