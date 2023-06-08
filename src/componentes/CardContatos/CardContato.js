import React from "react";
import "./CardContato.css";

function CardContato({ nome, descricao, email, telefone }) {
  return (
    <div className="CardContato"> 
      <div className="card-content"></div>
      <div className="card-nome">
        <h3 style={{ fontSize: '16px' }}>{nome}</h3>
      </div>
      <div className="card-descricao">
        <h4 style={{ fontSize: '14px' }}>{descricao}</h4>
      </div>
      <div className="card-email">
      <a href={`mailto:${email}`} id="email">{email}</a>
      </div>
      {telefone && ( 
        <div className="card-telefone">
          <a href={`tel:${telefone}`} id="telefone">{telefone}</a>
        </div>
      )}
    </div>
  );
}

export default CardContato;

