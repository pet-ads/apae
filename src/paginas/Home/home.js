import "./home.css";
import React from 'react';
import Banner from './banner.png';

export default function Home({scrollToSection, closedMenuHeight}) {
    return (
        <div>

            <section className="home-container">

                <div className="img-home">
                    <img src={Banner} alt="Img_Home" />
                </div>

                <div className="container-titulo-and-button">

                    <p className="home-titulo">Atuando pela inclusão digital: uma parceria entre o IFSP e a APAE</p>

                    <div className="div-button-home">
                        <button classname="button-home" onClick={() => scrollToSection("projeto", closedMenuHeight)}>Conheça o Projeto</button>
                    </div>

                </div>

            </section>

        </div>
    )
}
