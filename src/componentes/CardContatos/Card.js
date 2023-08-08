import React from "react";
import "./Card.css";

function Card({nome, descricao, email, destaque}) {
  const cardClasses = destaque ? "CardDestaque" : "Card";
  return (
    <div className={cardClasses}> 
      <h3 className="nome">{nome}</h3>
      <p className="descricao">{descricao}</p>
      <a className="email" href={`mailto:${email}`} id="email">{email}</a>
    </div>
  );
}

export default Card;

