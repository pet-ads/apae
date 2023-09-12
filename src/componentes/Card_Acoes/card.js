import React from "react";
import './card.css';
import CustomModal from "../Modal/modal.js"


function Card({title,imageUrl,body}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="imgcard" src={imageUrl} alt='img'/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3 className="titulo-card">{title}</h3>
                </div>
                <div className="card-body">
                    <p className="paragrafo-card">{body}</p>
                </div>
            </div>
            <div className="card-modal">
                <CustomModal></CustomModal>
            </div>
        </div>
    )
}

export default Card;
