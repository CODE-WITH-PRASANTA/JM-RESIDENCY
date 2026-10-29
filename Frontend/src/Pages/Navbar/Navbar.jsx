import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/JM Residency Logo.png"; // adjust path if needed
import "./Navbar.css";

const NAV_LINKS = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "About", to: "/about" },
  { id: 3, label: "Rooms & Suites", to: "/rooms" },
  { id: 4, label: "Services", to: "/services" },
  { id: 5, label: "Offers", to: "/offers" },
  { id: 6, label: "Gallery", to: "/gallery" },
  { id: 7, label: "Happy Clients", to: "/clients" },
  { id: 8, label: "FAQ", to: "/faq" },
  { id: 9, label: "News", to: "/news" },
  { id: 10, label: "Contact", to: "/contact" },
];

const PHONE_HREF = "tel:+910000000000";
const PHONE_TEXT = "+91 00000 00000";
const EMAIL = "info@jmresidency.com";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1200 && setIsOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`jm-navbar ${isScrolled ? "jm-navbar--scrolled" : ""}`}>
      {/* ===== Top Bar ===== */}
      <div className="jm-navbar__topbar">
        <div className="jm-navbar__container jm-navbar__topbar-inner">
          <div className="jm-navbar__topbar-contact">
            <a href={PHONE_HREF} className="jm-navbar__topbar-link">
              <FaPhoneAlt className="jm-navbar__topbar-icon" />
              <span>{PHONE_TEXT}</span>
            </a>
            <span className="jm-navbar__topbar-divider" aria-hidden="true" />
            <a href={`mailto:${EMAIL}`} className="jm-navbar__topbar-link jm-navbar__topbar-link--email">
              <FaEnvelope className="jm-navbar__topbar-icon" />
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="jm-navbar__topbar-social">
            <a href="#!" aria-label="Facebook" className="jm-navbar__social-link"><FaFacebookF /></a>
            <a href="#!" aria-label="Instagram" className="jm-navbar__social-link"><FaInstagram /></a>
            <a href="#!" aria-label="WhatsApp" className="jm-navbar__social-link"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* ===== Main Bar ===== */}
      <div className="jm-navbar__main">
        <div className="jm-navbar__container jm-navbar__main-inner">
          {/* Brand */}
          <NavLink
            to="/"
            className="jm-navbar__brand"
            onClick={closeMenu}
            aria-label="JM Residency Guest House - Home"
          >
            <span className="jm-navbar__logo-wrap">
              <img
                src={logo}
                alt="JM Residency Guest House"
                className="jm-navbar__logo"
                decoding="async"
              />
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="jm-navbar__menu" aria-label="Primary">
            <ul className="jm-navbar__list">
              {NAV_LINKS.map((item) => (
                <li key={item.id} className="jm-navbar__item">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `jm-navbar__link ${isActive ? "jm-navbar__link--active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="jm-navbar__actions">
            <NavLink to="/contact" className="jm-navbar__cta">
              Book Now
            </NavLink>
            <button
              type="button"
              className="jm-navbar__toggle"
              onClick={() => setIsOpen((p) => !p)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Overlay ===== */}
      <div
        className={`jm-navbar__overlay ${isOpen ? "jm-navbar__overlay--show" : ""}`}
        onClick={closeMenu}
      />

      {/* ===== Mobile Drawer ===== */}
      <aside
        className={`jm-navbar__drawer ${isOpen ? "jm-navbar__drawer--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="jm-navbar__drawer-head">
          <span className="jm-navbar__drawer-logo-wrap">
            <img src={logo} alt="JM Residency Guest House" className="jm-navbar__drawer-logo" />
          </span>
          <button
            type="button"
            className="jm-navbar__drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <ul className="jm-navbar__drawer-list">
          {NAV_LINKS.map((item) => (
            <li key={item.id} className="jm-navbar__drawer-item">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `jm-navbar__drawer-link ${isActive ? "jm-navbar__drawer-link--active" : ""}`
                }
              >
                <span className="jm-navbar__drawer-num">{String(item.id).padStart(2, "0")}</span>
                <span className="jm-navbar__drawer-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="jm-navbar__drawer-footer">
          <NavLink to="/contact" className="jm-navbar__drawer-cta" onClick={closeMenu}>
            Book Your Stay
          </NavLink>
          <a href={PHONE_HREF} className="jm-navbar__drawer-contact">
            <FaPhoneAlt /> <span>{PHONE_TEXT}</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="jm-navbar__drawer-contact">
            <FaEnvelope /> <span>{EMAIL}</span>
          </a>
          <div className="jm-navbar__drawer-social">
            <a href="#!" aria-label="Facebook" className="jm-navbar__social-link"><FaFacebookF /></a>
            <a href="#!" aria-label="Instagram" className="jm-navbar__social-link"><FaInstagram /></a>
            <a href="#!" aria-label="WhatsApp" className="jm-navbar__social-link"><FaWhatsapp /></a>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;