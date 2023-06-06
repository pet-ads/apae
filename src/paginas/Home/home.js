import "./home.css";
import React from 'react';


function Home({ scrollToSection }) {
    return(
        <section className="home-container">
            <div className="img-home">
                <img src="./imagem-home.apae.jpg" alt="Img_Home"/>
            </div>

            <div className="home-titulo-principal-container">
                <h1 className="home-titulo-principal">Atuando pela inclusão digital: uma parceria entre o IFSP e a APAE</h1>
            </div>

            <button className="button-home" onClick={() => scrollToSection("projeto")}>Conheça o projeto</button>
        </section>
    );  
}

export default Home;

