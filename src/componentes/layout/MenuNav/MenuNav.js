import { Link } from "react-router-dom";
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';

function MenuNav(){
    return(

        <nav className={styles.nav_container}>
            <a className={styles.nav_link}><Link to="/">Home</Link></a>
            <a className={styles.nav_link}><Link to="/Projeto">Projeto</Link></a>
            <a className={styles.nav_link}><Link to="/Turmas">Turmas</Link></a>
            <a className={styles.nav_link}><Link to="/Monitores">Monitores</Link></a>
            <a className={styles.nav_link}><Link to="/Acoes">Ações</Link></a>
            <a className={styles.nav_link}><Link to="/Blog">Blog</Link></a>
            <a className={styles.nav_link}><Link to="/Contato">Contato</Link></a>
            <div className={styles.vertical_line}></div>
            <img src={logo} alt="Logo do IFSP e APAE" />
        </nav>
        /*
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Projeto">Projeto</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Turmas">Turmas</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Monitores">Monitores</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Acoes">Ações</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Blog">Blog</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Contato">Contato</Link>
            </li>
        </ul>*/
    )
}
export default MenuNav
