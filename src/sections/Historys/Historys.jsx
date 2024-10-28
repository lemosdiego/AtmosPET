// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Historys.scss";

function Historys() {
  const stories = [
    {
      id: 1,
      foto: "/src/assets/avatar/avatar1.svg",
      nome: "Débora Almeida",
      description:
        "Adotar o Thor mudou minha vida. Ele trouxe alegria e momentos de paz que eu nem sabia que precisava. Sou grata à AUmigos & MIAUmigos por esse incrível companheiro!",
    },
    {
      id: 2,
      foto: "/src/assets/avatar/avatar2.svg",
      nome: "Carlos Mendes",
      description:
        "Sempre tive receio de adotar, mas o Simba, através da AUmigos & MIAUmigos, encaixou-se perfeitamente na minha rotina. Agora, minha casa é mais completa com ele.",
    },
    {
      id: 3,
      foto: "/src/assets/avatar/avatar3.svg",
      nome: "Mariana Costa",
      description:
        "Adotar a Nina foi a melhor decisão. Ela me ajudou a superar uma fase difícil e, juntas, nos curamos. Obrigada, AUmigos & MIAUmigos, por transformar a minha vida e a da Nina!",
    },
    {
      id: 4,
      foto: "/src/assets/avatar/avatar4.svg",
      nome: "João Pedro",
      description:
        "A AUmigos & MIAUmigos me ajudou a encontrar o Max, meu dog adotado. Ele trouxe muita alegria para minha casa e se tornou meu fiel companheiro. Não imagino mais minha vida sem ele!",
    },
  ];

  return (
    <section className="stories-container" id="stories">
      <div className="stories-title">
        <h2>Confira histórias inspiradoras</h2>
        <hr />
      </div>
      <div className="stories-box-container">
        <div className="stories-description">
          <p>
            Descubra como a AUmigos & MIAUmigos transformou a vida de famílias e
            seus novos melhores amigos! Cada adoção é uma história de amor e
            companheirismo, trazendo felicidade e novas perspectivas para quem
            abre o coração a um pet.
          </p>
        </div>
        <div className="stories-cards-container">
          {stories.map((story) => (
            <div className="stories-card" key={story.id}>
              <div className="card-stories-title">
                <img src={story.foto} alt={story.nome} />
                <h3>{story.nome}</h3>
              </div>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Historys;
