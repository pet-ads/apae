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
        <p>{email}</p>
      </div>
      {telefone && ( 
        <div className="card-telefone">
          <p>{telefone}</p>
        </div>
      )}
    </div>
  );
}

export default CardContato;

