import React from "react";
import './card.css';

function Card({title,imageUrl,body}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="imgcard" src={imageUrl} alt='imgg'/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3 className="titulo-card">{title}</h3>
                </div>
                <div className="card-body">
                    <p className="paragrafo-card">{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
