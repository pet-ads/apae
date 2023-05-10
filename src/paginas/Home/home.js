import "./home.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Home() {
    return(
        <body>
            <section className="home-container">
                <div className="home-titulo-principal-container">
                    <h1 className="home-titulo-principal">Atuando pela inclusão digital: uma parceria entre o IFSP e a APAE</h1>
                </div>
                <button className="button-home">Conheça o projeto</button>
                <div className="img-home">
                    <img src= "imagem-home-apae.jpg" alt="Img_Home"/>
                </div>
            </section>
        </body>
    )
}