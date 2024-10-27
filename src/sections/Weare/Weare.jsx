// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Weare.css";

function Weare() {
  return (
    <section className="container-about">
      <div className="about-description">
        <div className="subtitle">
          <h2>Quem Somos</h2>
          <hr />
        </div>
        <p>
          Na AtmosPET, acreditamos que a adoção de um animal de estimação é mais
          do que apenas trazer um novo membro para casa; é uma oportunidade de
          transformar vidas. Fundada por amantes de animais, nossa missão é
          conectar pets resgatados a lares amorosos, proporcionando um futuro
          melhor tanto para os animais quanto para suas famílias.
        </p>
        <div className="subtitle">
          <h3>Nossa História</h3>
          <hr />
        </div>
        <p>
          A AtmosPET surgiu da paixão por animais e do desejo de ajudar aqueles
          que mais precisam. Desde o início, temos trabalhado incansavelmente
          para resgatar, cuidar e promover a adoção de pets abandonados ou em
          situações de vulnerabilidade. Com uma equipe dedicada e voluntários
          apaixonados, realizamos eventos, campanhas de conscientização e
          parcerias com abrigos locais.
        </p>
        <div className="subtitle">
          <h3>O Que Fazemos</h3>
          <hr />
        </div>
        <p>
          Oferecemos um espaço seguro e acolhedor onde as pessoas podem conhecer
          nossos pets disponíveis para adoção. Cada animal é cuidadosamente
          avaliado e recebe todos os cuidados veterinários necessários,
          incluindo vacinação e castração. Trabalhamos para garantir que cada
          adoção seja uma experiência positiva e duradoura.
        </p>
        <div className="subtitle">
          <h3>Nossos Valores</h3>
          <hr />
        </div>
        <p>
          Na AtmosPET, acreditamos firmemente no compromisso de fazer a
          diferença na vida dos animais e de seus tutores. Empatia é a essência
          do nosso trabalho; cada animal tem uma história única e merece amor e
          respeito. Além disso, promovemos a educação e a conscientização sobre
          a importância da adoção responsável e do cuidado com os pets, buscando
          sempre criar um ambiente em que tanto os animais quanto as pessoas
          possam prosperar juntos
        </p>
        <div className="subtitle">
          <h3>Junte-se a Nós</h3>
          <hr />
        </div>
        <p>
          Se você está pensando em adotar, ou mesmo se deseja contribuir de
          outras formas, a AtmosPET é o lugar certo para você. Juntos, podemos
          criar um mundo onde cada pet tenha um lar amoroso e seguro.
        </p>
      </div>
      <div className="about-img">
        <div className="image">
          <img src="/public/backgroundAbou.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Weare;
