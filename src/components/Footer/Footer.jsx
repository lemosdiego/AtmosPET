// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-description">
          <h2>AtmosPet</h2>
          <p className="footer-text">
            A AtmosPet é uma organização dedicada a encontrar lares amorosos
            para animais abandonados. Nosso objetivo é promover a adoção
            responsável e conscientizar a sociedade sobre o cuidado e a proteção
            dos pets.
          </p>
        </div>
        <nav className="footer-menu-main">
          <p className="footer-menu-title">Menu</p>
          <ul className="footer-menu-list">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#adocao">Adote</a>
            </li>
            <li>
              <a href="#guia">Guias</a>
            </li>
            <li>
              <a href="#historys">Inspirações</a>
            </li>
            <li>
              <a href="#hero">Herói da vez</a>
            </li>
          </ul>
        </nav>
        <nav className="footer-menu-help">
          <p className="footer-menu-title">Ajude um Pet</p>
          <ul className="footer-help-list">
            <li>
              <a href="">Seja um herói</a>
            </li>
            <li>
              <a href="">Adote um pet</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-social-media">
        <div className="social-media-icon">
          <img src="/src/assets/icons/face.svg" alt="Facebook" />
        </div>
        <div className="social-media-icon">
          <img src="/src/assets/icons/insta.svg" alt="Instagram" />
        </div>
        <div className="social-media-icon">
          <img src="/src/assets/icons/youtube.svg" alt="YouTube" />
        </div>
      </div>
      <hr />
      <p className="footer-author">
        © 2024 AtmosPet. Desenvolvido por Washington Lemos
      </p>
    </footer>
  );
}

export default Footer;
