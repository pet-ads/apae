import "./blog.css";
import img_blog from "../5-Blog/blogger.png";

export default function Blog(){
    return(
        <section className="blog-container">
            <p className="paragrafo-blog">As atividades dos alunos são feitas semanalmente. Acesse o seguinte link para vê-las:</p> 
            <div className="imagem-blog">
                <a href="https://inclusaoifspsc.blogspot.com/">
                    <img src={img_blog} className="imagem-link-blog"></img>
                </a>
            </div>
            
        </section>
    )
}
