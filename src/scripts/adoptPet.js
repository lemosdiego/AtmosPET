const petContainer = document.querySelector(".pet-container-cards");
const prevButton = document.querySelector(".prev-icon");
const nextButton = document.querySelector(".next-icon");

let currentScrollPosition = 0;
const autoScrollInterval = 3000;
let autoScroll;
let pets = []; // Variável para armazenar os dados dos pets

// Função para buscar os dados dos pets
async function fetchPets() {
  try {
    const response = await fetch("/src/data/pets.json"); // Caminho para o seu pets.json
    pets = await response.json();
    renderPetCards(); // Chama a função para renderizar os cards após a busca
  } catch (error) {
    console.error("Erro ao buscar os pets:", error);
  }
}

// Função para renderizar os cards dos pets
function renderPetCards() {
  petContainer.innerHTML = "";
  pets.forEach((pet) => {
    const petCardDiv = document.createElement("div");
    petCardDiv.className = "cards";

    const buttonClass =
      pet.statusAdocao === "Disponível" ? "disponivel" : "processo-adocao";
    const disabledAttr = pet.statusAdocao !== "Disponível" ? "disabled" : "";

    petCardDiv.innerHTML = `
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
    petContainer.appendChild(petCardDiv);
  });
}

function showNextPet() {
  const cardWidth = petContainer.clientWidth / 3;
  currentScrollPosition += cardWidth;

  if (currentScrollPosition >= petContainer.scrollWidth) {
    currentScrollPosition = 0;
  }

  petContainer.scrollTo({ left: currentScrollPosition, behavior: "smooth" });
}

function showPreviousPet() {
  const cardWidth = petContainer.clientWidth / 3;
  currentScrollPosition -= cardWidth;

  if (currentScrollPosition < 0) {
    currentScrollPosition = petContainer.scrollWidth - petContainer.clientWidth;
  }

  petContainer.scrollTo({ left: currentScrollPosition, behavior: "smooth" });
}

function startAutoScroll() {
  autoScroll = setInterval(showNextPet, autoScrollInterval);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

nextButton.addEventListener("click", () => {
  showNextPet();
  stopAutoScroll();
  startAutoScroll();
});

prevButton.addEventListener("click", () => {
  showPreviousPet();
  stopAutoScroll();
  startAutoScroll();
});

// Inicia a busca dos pets e renderiza os cards
fetchPets();
startAutoScroll();
