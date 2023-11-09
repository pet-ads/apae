import React, { useEffect, useState } from "react";
import "./projeto.css"
import Imagem1 from "./labapae1.jpeg";
import Imagem2 from "./labapae2.jpeg";

export default function Projeto(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <section className="container">

            <div className="projeto__titulo">
                <p className="titulo">Sobre nós</p>
            </div>

            <div className="projeto__conteudo">
                <div className="projeto__imagens">
                    <img src={Imagem1} alt="Alunos tendo aula de informática."/>
                    <img src={Imagem2} alt="Alunos tendo aula de informática."/>
                </div>
                
                <div className="div-descricao">
          <p className="projeto__descricao">
            {windowWidth > 480 ? (
              "A ideia do projeto surgiu após a professora Célia, docente do IFSP, atuar como voluntária em um evento beneficente para levantar fundos à APAE no segundo semestre de 2016. Desde então, após visitas e conversas com os coordenadores da APAE, nasce o projeto de dar aulas de informática para os alunos."
            ) : (
              "O projeto nasceu quando a professora Célia, docente do IFSP, se envolveu como voluntária em um evento beneficente em 2016. Após diálogos com a APAE, surgiu a iniciativa de oferecer aulas de informática aos alunos. O objetivo é capacitar pessoas com deficiência intelectual, promovendo inclusão digital e social. Além de facilitar a entrada no mercado de trabalho, o projeto eleva a autoestima dos alunos. A parceria entre IFSP e APAE é reconhecida em congressos e revistas, incluindo a do Napne."
            )}
          </p>
          <p className="projeto__descricao">
            {windowWidth > 480 ? (
              "O objetivo geral é proporcionar a pessoas com deficiência intelectual a familiarização e o aprimoramento de conhecimentos em informática, contribuindo para a sua inclusão digital e, consequentemente, sua inclusão social. Não somente o projeto tem auxiliado na inserção no mercado de trabalho, mas também tem melhorado a autoestima dos alunos. O empreendimento em parceria com o IFSP e a APAE tem sido divulgado em diversos congressos e em revistas, como a do Napne."
            ) : (
              "" 
            )}
          </p>
        </div>


                
            </div>
        </section> 
    )
}
