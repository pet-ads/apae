import React from 'react';
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';
import burguerIcon from './burguericon.png';

function MenuNav({ scrollToSection }) {
  return (
    <div className={styles.component_container}>
      <div className={styles.img_container}>
        <img src={logo} alt="Logo do IFSP e APAE" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("projeto")}>Projeto</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("turmas")}>Turmas</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("equipe")}>Equipe</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("acoes")}>Ações</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("contato")}>Contato</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("blog")}>Blog</button>
          </li>

          <button className={styles.hamburguer_menu}>
            <img src={burguerIcon} alt="Botão de Menu" />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNav;



