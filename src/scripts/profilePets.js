const containerCardsProfile = document.querySelector(".container-cards");
const containerProfile = document.querySelector(".container-profile");

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

    card.innerHTML = `
        <div class="img">
            <img alt="Foto de ${pet.nome}" src="${pet.foto}" />
        </div>
        <h3>Tipo: ${pet.tipo}</h3>
        <p>Nome: ${pet.nome}</p>
        <p>Sexo: ${pet.sexo}</p>
        <p>Idade: ${pet.idade} anos</p>
        <p>Porte: ${pet.porte}</p>
        <button class="btn-view-profile">Ver Perfil</button>
    `;

    containerCardsProfile.appendChild(card);

    const viewProfileButton = card.querySelector(".btn-view-profile");
    viewProfileButton.addEventListener("click", () => showPetProfile(pet));
  });
}

function showPetProfile(pet) {
  const profileContent = `
    <div class="profile-content">
      <div class="img-profile">
        <img alt="Foto de ${pet.nome}" src="${pet.foto}" />
      </div>
      <h3>Nome do pet: ${pet.nome}</h3>
      <p>${pet.descricao}</p>
      <video src="${pet.video}" controls>
        Seu navegador não suporta vídeos.
      </video>
      <button class="btn-back">Voltar</button>
    </div>
  `;

  containerProfile.innerHTML = profileContent;
  containerProfile.style.display = "flex";

  // BOTAO PARA FECHAR MODAL
  const backButton = containerProfile.querySelector(".btn-back");
  backButton.addEventListener("click", () => {
    closeModal();
  });
  //FECHAR MODAL CLICANDO FORA
  containerProfile.addEventListener("click", (event) => {
    if (event.target === containerProfile) {
      closeModal();
    }
  });
}

function closeModal() {
  containerProfile.style.display = "none";
}

fetchPets();
