import "./Home.scss";
import "../../assets/fonts/fonts.css";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-contents-box">
        <figure className="home-image-wrapper">
          <img src="/home.png" alt="Adote um pet" />
        </figure>
        <div className="home-content">
          <h1>AUmigos & MIAUmigos</h1>
          <h2>Seu melhor amigo espera por você!</h2>
          <p>
            Adote um pet e transforme sua vida! Ao ganhar um novo amigo fiel,
            você ajuda na proteção dos animais, reduzindo abandonos e trazendo
            felicidade para sua casa. Experimente o amor incondicional e a
            alegria que um companheiro peludo pode proporcionar!
          </p>
          <div className="home-buttons">
            <button>Adote Agora</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
