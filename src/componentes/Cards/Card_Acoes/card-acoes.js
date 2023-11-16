import React from "react";
import './card-acoes.css';
import '../card_geral .css';

function Card({ title, imageUrl, body, handleOpenModal, cardId }) {
    return (
        <div className="Card">

        <div className = "img-titulo-body-container">
            <div>
                <img className="imgcard" src={imageUrl} alt='img'/>
            </div>

                <div className="card-title">
                    <p className="titulo-card">{title}</p>
                </div>
                
                <div className="card-body">
                    <p className="paragrafo-card">{body}</p>
                </div>
        </div>
            <div className="div-button">
                <button onClick={() => handleOpenModal(cardId)}>Galeria de Fotos</button>
            </div>
        </div>
    )
}

export default Card;