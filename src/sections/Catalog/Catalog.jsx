import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import petsData from "../../data/pets.json";
import "./Catalog.css";

function Catalog() {
  const [pets, setPets] = useState(petsData); // Inicializa o estado com os dados do JSON
  const [filters, setFilters] = useState({
    animal: "",
    sexo: "",
    idade: "",
    porte: "",
  });

  useEffect(() => {
    setPets(petsData);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Lógica para filtrar os pets com base nos filtros
    const filteredPets = petsData.filter((pet) => {
      return (
        (filters.animal === "" || pet.tipo === filters.animal) &&
        (filters.sexo === "" || pet.sexo === filters.sexo) &&
        (filters.idade === "" || pet.idade === filters.idade) &&
        (filters.porte === "" || pet.porte === filters.porte)
      );
    });
    setPets(filteredPets);
  };

  return (
    <div className="container-catalog">
      <div className="title-catalog">
        <h2>Encontre seu novo amigo</h2>
        <hr />
      </div>
      <div className="form">
        <form onSubmit={handleSearch}>
          <select id="animal" name="animal" onChange={handleFilterChange}>
            <option value="" disabled hidden>
              Animal
            </option>
            <option value="Gato">Gato</option>
            <option value="Cachorro">Cachorro</option>
          </select>

          <select id="sexo" name="sexo" onChange={handleFilterChange}>
            <option value="" disabled hidden>
              Sexo
            </option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>

          <select id="idade" name="idade" onChange={handleFilterChange}>
            <option value="" disabled hidden>
              Idade
            </option>
            <option value="filhote">Filhote</option>
            <option value="adulto">Adulto</option>
            <option value="idoso">Idoso</option>
          </select>

          <select id="porte" name="porte" onChange={handleFilterChange}>
            <option value="" disabled hidden>
              Porte
            </option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
          <button className="button-form" type="submit">
            Buscar
          </button>
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
