import "./Historys.css";

function Historys() {
  const stories = [
    {
      id: 1,
      foto: "/src/assets/avatar/avatar1.svg",
      nome: "Débora Almeida",
      description:
        "Adotar o Thor mudou minha vida. Ele trouxe alegria e momentos de paz que eu nem sabia que precisava. Sou grata à AtmosPET por esse incrível companheiro!",
    },
    {
      id: 2,
      foto: "/src/assets/avatar/avatar2.svg",
      nome: "Carlos Mendes",
      description:
        "Sempre tive receio de adotar, mas o Simba, através da AtmosPET, encaixou-se perfeitamente na minha rotina. Agora, minha casa é mais completa com ele.",
    },
    {
      id: 3,
      foto: "/src/assets/avatar/avatar3.svg",
      nome: "Mariana Costa",
      description:
        "Adotar a Nina foi a melhor decisão. Ela me ajudou a superar uma fase difícil e, juntas, nos curamos. Obrigada, AtmosPET, por transformar a minha vida e a da nina!",
    },
    {
      id: 4,
      foto: "/src/assets/avatar/avatar4.svg",
      nome: "João Pedro",
      description:
        "A AtmosPET me ajudou a encontrar o Max, meu dog adotado. Ele trouxe muita alegria para minha casa e se tornou meu fiel companheiro. Não imagino mais minha vida sem ele!",
    },
  ];

  return (
    <section className="stories-container" id="stories">
      <div className="stories-container-title">
        <h2>Confira histórias inspiradoras</h2>
        <hr />
      </div>
      <p className="stories-description">
        Descubra como a AtmosPET transformou a vida de pessoas e seus novos
        companheiros. Cada adoção é uma história de amor, carinho e uma vida
        cheia de alegria. Veja como nossos pets trouxeram felicidade e novas
        perspectivas para seus tutores!
      </p>
      <div className="stories-cards-container">
        {stories.map((story) => (
          <div className="stories-card" key={story.id}>
            <img src={story.foto} alt={story.nome} />
            <h3>{story.nome}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Historys;
