import React from "react";
import "./card-contatos.css";
import '../card_geral .css';

function Card({nome, descricao, email, destaque}) {
  const cardClasses = destaque ? "CardDestaque" : "Card";
  return (
    <div className={cardClasses}>
      <p className="nome">{nome}</p>
      <p className="descricao-card">{descricao}</p>
      <div className="div-button">
        <button onClick={() => window.location.href = `mailto:${email}`} id="email">Enviar E-mail</button>
    </div>
    </div>
  );
}

export default Card;

