import "./Adopt.css";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import data from "../../data/pets.json";

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(data);
  }, []);

  return (
    <section className="adopt-container" id="home">
      <div className="adopt-title">
        <h2>Três motivos para você Adotar</h2>
        <hr />
      </div>
      <div className="adopt-reasons">
        <div className="adopt-reason-card">
          <p>
            <span>Ganhe um Amigo Leal.</span> Adotar um pet é mais do que dar um
            lar a um animal. Você ganha um amigo fiel, que estará ao seu lado
            nos momentos bons e ruins. A companhia de um pet pode diminuir o
            estresse, aumentar sua felicidade e trazer muita alegria para o dia
            a dia.
          </p>
        </div>
        <div className="adopt-reason-card">
          <p>
            <span>Salve uma Vida.</span> Ao adotar um pet, você não apenas ganha
            um novo amigo, mas também salva uma vida. Milhares de animais estão
            em abrigos, esperando por uma chance de ter um lar amoroso. Ao
            adotar, você faz a diferença na vida de um animal que realmente
            precisa de você.
          </p>
        </div>
        <div className="adopt-reason-card">
          <p>
            <span>Melhore Sua Saúde.</span> Estudos mostram que a convivência
            com pets pode trazer benefícios à saúde, como reduzir a pressão
            arterial, melhorar o humor e aumentar a atividade física. Um pet não
            só enche sua casa de amor, mas também ajuda a manter você mais
            saudável e ativo.
          </p>
        </div>
      </div>
      <div className="adopt-title">
        <h2>Novos Peludos Esperando por Você</h2>
        <hr className="adopt-title-line" />
      </div>
      <div className="adopt-pets-container">
        {pets.slice(-4).map((pet) => (
          <Card
            key={pet.id}
            foto={pet.foto}
            nome={pet.nome}
            tipo={pet.tipo}
            idade={pet.idade}
            porte={pet.porte}
            className={"adopt-pet-card"}
          />
        ))}
      </div>
      <div className="adopt-btn-container">
        <Link className="adopt-btn-link" to="/catalogo-pets">
          <button className="adopt-btn"> Conheça Todos os Nossos Pets</button>
        </Link>
      </div>
    </section>
  );
}
export default Adopt;
