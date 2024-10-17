import "./Guide.css";
import "../../assets/fonts/fonts.css";

function Guide() {
  return (
    <section className="container-guide" id="guia">
      <div className="guia-adopt">
        <div className="descricao">
          <h2 id="guia-adocao">Passo a Passo da Adoção de Pets</h2>
          <hr />
          <p>
            Adotar um pet é um ato de amor! Neste guia, você encontrará as
            etapas essenciais para facilitar sua jornada de adoção, desde o
            cadastro até a chegada do seu novo amigo. Siga nosso passo a passo e
            descubra como é gratificante essa nova jornada.
          </p>
        </div>
        <div className="video">
          <video src="/video/guiaAdocao1.mp4" controls muted></video>
        </div>
      </div>
      <div className="guia-cadastro">
        <div className="descricao">
          <h2 id="guia-cadastro">Guia de Cadastro de Pets</h2>
          <hr />
          <p>
            Se você precisa de assistência para cadastrar um pet e permitir que
            outras pessoas tenham a oportunidade de adotá-lo, estamos aqui para
            guiá-lo em cada etapa do processo. Juntos, podemos encontrar um lar
            amoroso para seu amigo peludo!
          </p>
        </div>
        <div className="video">
          <video src="/video/guiaCadastro.mp4" controls muted></video>
        </div>
      </div>
    </section>
  );
}
export default Guide;
