// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("no-scroll", !menuOpen);
  };

  const closeMenuOnClickLink = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <button
        className={`menu-button ${menuOpen ? "hidden" : "open-icon"}`}
        aria-label="Open menu"
        onClick={toggleMenu}
      >
        <img src="/public/menu.svg" alt="Open" />
      </button>

      <div className="logo">
        <img src="/public/AUmigos&MIAUmigos.png" alt="Logo" />
      </div>

      <nav className={`navigation ${menuOpen ? "open" : "closed"}`}>
        <button
          className={`menu-button ${menuOpen ? "close-icon" : "hidden"}`}
          aria-label="Close menu"
          onClick={toggleMenu}
        >
          <img src="/public/close.svg" alt="Close" />
        </button>
        <ul className="navigation-list">
          <li>
            <Link className="link" to="/" onClick={closeMenuOnClickLink}>
              Início
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="sobre-nos"
              onClick={closeMenuOnClickLink}
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/catalogo-pets"
              onClick={closeMenuOnClickLink}
            >
              Adote
            </Link>
          </li>
          <li>
            <a href="#historys" className="link" onClick={closeMenuOnClickLink}>
              Inspirações
            </a>
          </li>
          <li>
            <a href="#hero" className="link" onClick={closeMenuOnClickLink}>
              Torne-se um Herói
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-buttons-container">
        {/* Add your authentication buttons here if necessary */}
      </div>
    </header>
  );
}

export default Header;
