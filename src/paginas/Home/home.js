import "./home.css";
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './bannner.png';

export default function Home({ scrollToSection }) {
    return(
        <div>
            <section className="home-container">

                <div className="titulo-button-banner">

                    <div className="titulo-button">
                        <h1 className="home-titulo">Atuando pela inclusão digital: uma parceria entre o IFSP <br/> e a APAE</h1>
                        <button className="button-home" onClick={() => scrollToSection("projeto")}>Conheça o Projeto</button>

                    </div>

                    <div className="img-home">
                        <img src={Banner} alt="Img_Home"/>

                    </div>

                </div>

            </section>
        </div>
    )  
}
