import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import petsData from "../../data/pets.json";
import "./Catalog.css"; // Supondo que o JSON esteja em petsData.json

function Catalog() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Simulando a busca de dados
    setPets(petsData); // Defina o estado com os dados do arquivo JSON
  }, []);

  return (
    <div className="container-catalog">
      <div className="title-catalog">
        <h2>Encontre seu novo amigo</h2>
        <hr />
      </div>
      <div className="form">
        <form action="">
          <select id="animal" name="animal">
            <option value="" disabled selected hidden>
              Animal
            </option>
            <option value="Gato">Gato</option>
            <option value="cachorro">Cachorro</option>
          </select>

          <select id="sexo" name="sexo">
            <option value="" disabled selected hidden>
              Sexo
            </option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>

          <select id="idade" name="idade">
            <option value="" disabled selected hidden>
              Idade
            </option>
            <option value="filhote">Filhote</option>
            <option value="adulto">Adulto</option>
            <option value="idoso">Idoso</option>
          </select>

          <select id="porte" name="porte">
            <option value="" disabled selected hidden>
              Porte
            </option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
          <button className="button-form">Buscar</button>
        </form>
      </div>
      <div className="container-cards-catalog">
        {pets.map((pet) => (
          <Card
            key={pet.id}
            foto={pet.foto}
            nome={pet.nome}
            tipo={pet.tipo}
            idade={pet.idade}
            porte={pet.porte}
            statusAdocao={pet.statusAdocao}
            className={"card-catalog"}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
