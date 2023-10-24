import "./blog.css";
import img_blog from "../5-Blog/blogger.png";

export default function Blog(){
    return(
        <section className="container">
            <div className ="conteudo-geral">

                <p className="paragrafo-blog">As atividades dos alunos são realizadas semanalmente. <br />Acesse nosso <b>blog</b> para saber mais:</p>

                <div className="imagem-blog">
                    <a className="blog" href="https://inclusaoifspsc.blogspot.com/">
                        <img src={img_blog} alt ="blog" className="imagem-link-blog"></img>
                    </a>
                </div>
                
            </div>
            
        </section>
    )
}
