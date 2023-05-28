import "./home.css";
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <section className="home-container">
            <div className="img-home">
                <img src="./imagem-home.apae.jpg" alt="Img_Home"/>
            </div>

        <div className="home-titulo-principal-container">
            <h1 className="home-titulo-principal">Atuando pela inclusão digital: uma parceria entre o IFSP e a APAE</h1>
        </div>
        
        <Link to="/projeto" className="button-home" as="button">Conheça o projeto</Link>
            </section>
        </div>
    )  
}
