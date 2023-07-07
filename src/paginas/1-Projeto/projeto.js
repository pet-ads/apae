import "./projeto.css"
import Imagem1 from "./labapae1.jpeg";
import Imagem2 from "./labapae2.jpeg";

export default function Projeto(){
    return(
        <section className="projeto-container">

            <div className="projeto-titulo-container">
                <h3>Sobre nós</h3>
            </div>

            <div className="conteudo">
                <div className="img-container">
                    <img src={Imagem1} alt="Alunos tendo aula de informática."/>
                    <img src={Imagem2} alt="Alunos tendo aula de informática."/>
                </div>
                
                <div className="descricao-projeto">
                    <p className="texto-proj">A ideia do projeto surgiu após a professora Célia, docente do IFSP, atuar como voluntária em um evento beneficiente para levantar fundos à APAE no segundo semestre de 2016.
                        Desde então, após visitas e conversas com os coordenadores da APAE, nasce o projeto de dar aulas de informática para os alunos.
                    </p>

                    <p className="texto-proj">O objetivo geral é proporcionar a pessoas com deficiência intelectual a familiarização e o aprimoramento de conhecimentos em informática,
                        contribuindo para a sua inclusão digital e, consequentemente, sua inclusão social. 
                    </p>

                    <p className="texto-proj">
                    Não somente o projeto tem auxiliado na inserção no mercado de trabalho,
                        mas também tem melhorado a autoestima dos alunos. O empreedimento em parceria com o IFSP e a APAE tem sido divulgado em diversos congressos e em revistas,
                        como a do Napne.
                    </p>
                </div>

            </div>
        </section> 
    )
}
