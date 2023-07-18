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
      <h3 className="card-nome">{nome}</h3>
      <p className="card-descricao">{descricao}</p>
      <a className="card-email" href={`mailto:${email}`} id="email">{email}</a>
      {telefone && ( 
        <a className="card-telefone" href="#" id="telefone" onClick={abrirWhatsApp}>{telefone}</a>
      )}  
    </div>
  );
}

export default CardContato;

