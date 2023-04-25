import { Link } from "react-router-dom";
import styles from './MenuNav.module.css';

function MenuNav(){
    return(
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
        </ul>
    )
}
export default MenuNav
