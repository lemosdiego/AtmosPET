const containerCardsProfile = document.querySelector(".container-cards");
1;
async function fetchPets() {
  try {
    const response = await fetch("/src/data/pets.json");
    const pets = await response.json();
    renderPetCardsProfile(pets);
  } catch (error) {
    console.error("Erro ao buscar os pets:", error);
  }
}

function renderPetCardsProfile(pets) {
  containerCardsProfile.innerHTML = "";
  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "cards";

    const buttonClass =
      pet.statusAdocao === "Disponível" ? "btn-available" : "btn-process";
    const disabledAttr = pet.statusAdocao !== "Disponível" ? "disabled" : "";

    card.innerHTML = `
        <div class="img">
            <img alt="Foto de ${pet.nome}" src="${pet.foto}" />
        </div>
        <h3>Tipo: ${pet.tipo}</h3>
        <p>Nome: ${pet.nome}</p>
        <p>Sexo: ${pet.sexo}</p>
        <p>Idade: ${pet.idade} anos</p>
        <p>Porte: ${pet.porte}</p>
        <button class="${buttonClass}" ${disabledAttr}>
            ${pet.statusAdocao}
        </button>
    `;

    containerCardsProfile.appendChild(card);
  });
}

// Inicia a busca dos pets e renderiza os cards
fetchPets();
