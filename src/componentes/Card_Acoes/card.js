import React from "react";
import './card.css';

function Card({ title, imageUrl, body, handleOpenModal, cardId }) {
    return (
        <div className="card-container">

            <div className="image-container">
                <img className="imgcard" src={imageUrl} alt='img'/>
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3 className="titulo-card">{title}</h3>
                </div>
                
                <div className="card-body">
                    <p className="descricao">{body}</p>
                </div>
            </div>

            <div className="div-button">
                <button onClick={() => handleOpenModal(cardId)}>Galeria de Fotos</button>
            </div>

        </div>
    )
}

export default Card;