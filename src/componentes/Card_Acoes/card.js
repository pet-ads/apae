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


/*<div className="btn">
<button>
<a>
    View More
</a>
</button>
</div>

.btn{
    display: flex;
    justify-content: center;
}

.btn button{
    padding: 0.5rem;
    background-color: aqua;
    border: none;
    transition: 0.2s;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.btn:hover{
    background-color: rgba(27, 156, 252, 0.1);
    transform: scale(1.1);
}

a{
    text-transform: uppercase;
    color: blueviolet;
    text-decoration: none;
    font-weight: bold;

}*/