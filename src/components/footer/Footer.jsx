import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saksham</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="Projects" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/velocityvortex_"
            className="footer__social-link"
            targer="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saksham-sharma-07656524b/"
            className="footer__social-link"
            targer="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Anonymous096"
            className="footer__social-link"
            targer="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; SakshamSharma. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
