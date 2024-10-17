import "./Home.css";
import "../../assets/fonts/fonts.css";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-image-wrapper">
        <img src="/home.png" alt="Adote um pet" />
      </div>
      <div className="home-content">
        <h1>Adote um pet e crie uma nova atmosfera de amor</h1>
        <p>
          Adote um pet e transforme sua vida: além de ganhar um novo amigo fiel,
          você contribui para a proteção dos animais, reduzindo o número de
          abandonos e promovendo a felicidade em sua casa. Experimente o amor
          incondicional e a alegria que só um companheiro peludo pode trazer!
        </p>
        <div className="home-buttons">
          <button>Adote Agora</button>
          <button>Cadastre um Pet</button>
        </div>
      </div>
    </section>
  );
}
export default Home;
