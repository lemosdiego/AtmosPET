import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-title-container">
        <h2>Quer ser um Herói?</h2>
        <hr />
      </div>
      <p className="hero-description">
        Você pode fazer a diferença na vida de muitos animais! Ao adotar um
        deles, você se torna um verdadeiro herói, oferecendo amor e uma nova
        chance de vida. Além da adoção, sua ajuda pode vir de várias formas:
        divulgando nosso trabalho ou fazendo uma doação. Cada contribuição é
        essencial para continuarmos resgatando e cuidando de animais em situação
        de vulnerabilidade.
      </p>
      <p className="hero-description">
        Junte-se a nós! Adote, compartilhe nossa causa com seus amigos ou faça
        uma doação para que possamos salvar ainda mais vidas. Juntos, podemos
        construir um futuro melhor e mais cheio de amor para esses seres que
        tanto precisam!
      </p>
      <div className="hero-buttons-container">
        <Link to="/catalogo-pets" className="hero-button-link">
          Encontre um Amigo
        </Link>
        <a href="" className="hero-button-link">
          Compartilhe a Causa
        </a>
        <a href="" className="hero-button-link">
          Doe e Salve Vidas
        </a>
      </div>
    </section>
  );
}
export default Hero;
