import React from 'react';
import './Local.css';

function Local({nome, descricao, src}){
    return(
        <div className="LocalContainer">
            <div className="informacoes">
                <h3 className="nome-local">{nome}</h3>
                <p className="descricao-local">{descricao}</p>
            </div>
            <div className="mapa">
                <iframe src={src}></iframe>
            </div>
            
            
        </div>
    )
}
export default Local;

