import "./home.css";
import React from 'react';
import Banner from './banner.png';


export default function Home({scrollToSection, closedMenuHeight}) {
    return (
        <div>

            <section className="home-container">

                <div className="img-home">
                    <img src={Banner} alt="Logo do Projeto - Símbolo da neurodivergência sobre uma mão e três pessoas ao fundo"/>
                </div>

                <div className="container-titulo-and-button">

                    <p className="home-titulo">Atuando pela inclusão digital: uma parceria entre o IFSP e a APAE</p>

                    <div className="div-button-home">
                        <button className="button-home-projeto" onClick={() => scrollToSection("projeto", closedMenuHeight)}>Conheça o Projeto</button>
                        <a href="https://www.youtube.com/watch?v=LFMaYR4owGQ" className="fake-button-home-video" >Veja nosso vídeo</a>
                    </div>
                </div>

            </section>

        </div>
    )
}
