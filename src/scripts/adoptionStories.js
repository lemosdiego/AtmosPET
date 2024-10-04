const historys = [
  {
    id: 1,
    foto: "assets/avatar/avatar1.svg",
    nome: "Débora Almeida",
    description:
      "Adotar o Thor mudou minha vida. Ele trouxe alegria e momentos de paz que eu nem sabia que precisava. Sou grata à AtmosPET por esse incrível companheiro!",
  },
  {
    id: 2,
    foto: "assets/avatar//avatar2.svg",
    nome: "Carlos Mendes",
    description:
      "Sempre tive receio de adotar, mas o Simba, através da AtmosPET, encaixou-se perfeitamente na minha rotina. Agora, minha casa é mais completa com ele.",
  },
  {
    id: 3,
    foto: "assets/avatar//avatar3.svg",
    nome: "Mariana Costa",
    description:
      "Adotar a Nina foi a melhor decisão. Ela me ajudou a superar uma fase difícil e, juntas, nos curamos. Obrigada, AtmosPET, por transformar minha vida!",
  },
  {
    id: 4,
    foto: "assets/avatar//avatar4.svg",
    nome: "João Pedro",
    description:
      "A AtmosPET me ajudou a encontrar o Max, meu cachorro adotado. Ele trouxe muita alegria para minha casa e se tornou meu fiel companheiro. Não imagino mais minha vida sem ele!",
  },
];

const containerCardsHistorys = document.querySelector(
  ".container-cards-historys"
);

historys.forEach((history) => {
  const cardHistory = document.createElement("div");
  cardHistory.className = "card-historys";

  cardHistory.innerHTML = `
      <div class="img-perfil">
          <img src="${history.foto}" alt="Foto de ${history.nome}" />
      </div>
          <h3>${history.nome}</h3>
          <p>${history.description}</p>
      `;
  containerCardsHistorys.appendChild(cardHistory);
});
