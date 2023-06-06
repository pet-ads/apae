import React from 'react';
import styles from "./Footer.module.css"

function Footer({ scrollToSection }) {
  return (
    <div className={styles.footer}>
      <nav className="Footer">
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
            <button onClick={() => scrollToSection("equipe")}>Monitores</button>
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
        </ul>
      </nav>
      <p className={styles.p}>Desenvolvido com ♥ por PET/ADS-IFSP São Carlos</p>
    </div>
  );
}

export default Footer
