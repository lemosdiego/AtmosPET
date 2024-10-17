// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Funções para abrir e fechar o menu
  const openMenu = () => {
    setMenuOpen(true);
    if (window.innerWidth <= 1024) {
      document.body.classList.add("no-scroll");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  // Verifica a largura da tela e ajusta a visibilidade do menu
  const checkMenuVisibility = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  // Detecta a rolagem da página para alterar a aparência do cabeçalho
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // useEffect para ajustar o comportamento do menu ao redimensionar e rolar a página
  useEffect(() => {
    window.addEventListener("resize", checkMenuVisibility);
    window.addEventListener("scroll", handleScroll);

    // Verifica a visibilidade inicial do menu
    checkMenuVisibility();

    // Remove event listeners quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkMenuVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <button
        className={`menu-button open-icon ${menuOpen ? "hidden" : ""}`}
        aria-label="Open menu"
        onClick={openMenu}
      >
        <img src="/menu.svg" alt="Open" />
      </button>
      <div className="logo">
        <img src="/AtmosPet.png" alt="Logo" className="logo-icon" />
      </div>
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <button
          className={`menu-button close-icon ${menuOpen ? "" : "hidden"}`}
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <img src="/close.svg" alt="Close" />
        </button>
        <ul className="navigation-list">
          <li>
            <Link to="/" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <hr />
          <li>
            <Link to="sobre-nos" onClick={closeMenu}>
              Quem somos
            </Link>
          </li>
          <li>
            <Link to="/catalogo-pets" onClick={closeMenu}>
              Adote
            </Link>
          </li>
          <li>
            <a href="#historys" onClick={closeMenu}>
              Inspirações
            </a>
          </li>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Torne-se um Herói
            </a>
          </li>
          <hr />
        </ul>
      </nav>

      <section className="auth-buttons" id="authButtons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Sign Up</button>
        </Link>
      </section>
      <aside
        className="profile-section"
        id="profileIcon"
        style={{ display: "none" }}
      >
        <img src="/assets/images/profile.svg" alt="Profile" />
        <button
          id="logoutButton"
          style={{ display: "none" }}
          aria-label="Logout"
        >
          <img src="/assets/images/logout.svg" alt="Logout" />
        </button>
      </aside>
    </header>
  );
}

export default Header;
