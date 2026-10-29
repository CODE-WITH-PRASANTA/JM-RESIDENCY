import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleRight,
  FaArrowUp,
  FaDirections,
} from "react-icons/fa";
import logo from "../../assets/JM Residency Logo.png"; // adjust path if needed
import "./Footer.css";

const QUICK_LINKS = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "About", to: "/about" },
  { id: 3, label: "Rooms & Suites", to: "/rooms" },
  { id: 4, label: "Services", to: "/services" },
  { id: 5, label: "Offers", to: "/offers" },
];

const EXPLORE_LINKS = [
  { id: 6, label: "Gallery", to: "/gallery" },
  { id: 7, label: "Happy Clients", to: "/clients" },
  { id: 8, label: "FAQ", to: "/faq" },
  { id: 9, label: "News", to: "/news" },
  { id: 10, label: "Contact", to: "/contact" },
];

const PHONE_HREF = "tel:+910000000000";
const PHONE_TEXT = "+91 00000 00000";
const EMAIL = "info@jmresidency.com";
const ADDRESS = "JM Residency Guest House, Your Street Address, City, State - 000000";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const jumpTop = () => window.scrollTo({ top: 0, behavior: "auto" });

  const renderLinks = (links) =>
    links.map((item) => (
      <li key={item.id} className="jm-footer__item">
        <NavLink to={item.to} end={item.to === "/"} className="jm-footer__link" onClick={jumpTop}>
          <FaAngleRight className="jm-footer__link-icon" />
          <span className="jm-footer__link-text">{item.label}</span>
        </NavLink>
      </li>
    ));

  return (
    <footer className="jm-footer">
      {/* ===== CTA Band ===== */}
      <section className="jm-footer__cta">
        <div className="jm-footer__container jm-footer__cta-inner">
          <div className="jm-footer__cta-content">
            <span className="jm-footer__cta-tag">Guest House</span>
            <h2 className="jm-footer__cta-title">Ready for a peaceful &amp; comfortable stay?</h2>
            <p className="jm-footer__cta-text">
              Book your room with JM Residency and enjoy warm hospitality, clean rooms and a
              relaxing atmosphere.
            </p>
          </div>
          <div className="jm-footer__cta-actions">
            <NavLink to="/contact" className="jm-footer__cta-btn" onClick={jumpTop}>
              Book Your Stay
            </NavLink>
            <a href={PHONE_HREF} className="jm-footer__cta-call">
              <FaPhoneAlt /> <span>{PHONE_TEXT}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Main Footer ===== */}
      <div className="jm-footer__main">
        <div className="jm-footer__container jm-footer__grid">
          {/* Brand */}
          <div className="jm-footer__col jm-footer__brand">
            <NavLink
              to="/"
              className="jm-footer__brand-card"
              onClick={jumpTop}
              aria-label="JM Residency Guest House - Home"
            >
              <span className="jm-footer__logo-wrap">
                <img src={logo} alt="JM Residency Guest House" className="jm-footer__logo" />
              </span>
            </NavLink>

            <p className="jm-footer__about">
              A calm and welcoming guest house inspired by Odisha's rich heritage. Comfortable
              rooms, caring service and a stay you will remember.
            </p>

            <div className="jm-footer__social">
              <a href="#!" aria-label="Facebook" className="jm-footer__social-link"><FaFacebookF /></a>
              <a href="#!" aria-label="Instagram" className="jm-footer__social-link"><FaInstagram /></a>
              <a href="#!" aria-label="WhatsApp" className="jm-footer__social-link"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="jm-footer__col jm-footer__nav" aria-label="Quick links">
            <h3 className="jm-footer__title">Quick Links</h3>
            <ul className="jm-footer__list">{renderLinks(QUICK_LINKS)}</ul>
          </nav>

          {/* Explore */}
          <nav className="jm-footer__col jm-footer__nav" aria-label="Explore">
            <h3 className="jm-footer__title">Explore</h3>
            <ul className="jm-footer__list">{renderLinks(EXPLORE_LINKS)}</ul>
          </nav>

          {/* Contact */}
          <div className="jm-footer__col jm-footer__contact">
            <h3 className="jm-footer__title">Get In Touch</h3>
            <ul className="jm-footer__contact-list">
              <li className="jm-footer__contact-item">
                <span className="jm-footer__contact-icon"><FaMapMarkerAlt /></span>
                <span className="jm-footer__contact-text">{ADDRESS}</span>
              </li>
              <li className="jm-footer__contact-item">
                <span className="jm-footer__contact-icon"><FaPhoneAlt /></span>
                <a href={PHONE_HREF} className="jm-footer__contact-text">{PHONE_TEXT}</a>
              </li>
              <li className="jm-footer__contact-item">
                <span className="jm-footer__contact-icon"><FaEnvelope /></span>
                <a href={`mailto:${EMAIL}`} className="jm-footer__contact-text">{EMAIL}</a>
              </li>
              <li className="jm-footer__contact-item">
                <span className="jm-footer__contact-icon"><FaClock /></span>
                <span className="jm-footer__contact-text">Reception open 24 x 7</span>
              </li>
            </ul>

            <a href="#!" className="jm-footer__directions">
              <FaDirections /> <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="jm-footer__bottom">
        <div className="jm-footer__container jm-footer__bottom-inner">
          <p className="jm-footer__copy">
            &copy; {year} <strong>JM Residency Guest House</strong>. All rights reserved.
          </p>

          <ul className="jm-footer__legal">
            <li className="jm-footer__legal-item">
              <NavLink to="/privacy-policy" className="jm-footer__legal-link" onClick={jumpTop}>
                Privacy Policy
              </NavLink>
            </li>
            <li className="jm-footer__legal-item">
              <NavLink to="/terms" className="jm-footer__legal-link" onClick={jumpTop}>
                Terms &amp; Conditions
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className="jm-footer__top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;