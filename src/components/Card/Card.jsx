// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ foto, nome, tipo, idade, porte, className, statusAdocao }) {
  return (
    <div className={`Card ${className}`}>
      <div className="img">
        <img src={foto} alt={nome} />
      </div>
      <div className="description">
        <h2>{nome}</h2>
        <p>{tipo}</p>
        <p>{idade}</p>
        <p>Porte: {porte}</p>
        <button
          className={`status-button ${
            statusAdocao === "Disponível" ? "available" : "adoption"
          }`}
          disabled={statusAdocao === "Aguardando"} // Desabilita o botão
        >
          {statusAdocao}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  foto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  idade: PropTypes.string.isRequired,
  porte: PropTypes.string.isRequired,
  className: PropTypes.string,
  statusAdocao: PropTypes.string.isRequired,
};

Card.defaultProps = {
  className: "", // Valor padrão
};

export default Card;
