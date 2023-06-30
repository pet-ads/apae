import React from "react";
import "./CardContato.css";

function CardContato({ nome, descricao, email, telefone }) {
  const abrirWhatsApp = ()  => {
    const numero = telefone.replace(/\(|\)|-|\s/g, '');
    const numerocomdd = `55${numero}`;
    const url = `https://api.whatsapp.com/send?phone=${numerocomdd}`;
    window.open(url);
    
  };
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
          <a href="#" id="telefone"  onClick={abrirWhatsApp}>{telefone}</a>
        </div>
      )}
    </div>
  );
}

export default CardContato;

