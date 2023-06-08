import React from 'react';
import styles from "./Footer.module.css"

function Footer({ scrollToSection }) {
  return (
    <div className={styles.footer}>
      <nav className={styles.navfooter}>
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
      <div className={styles.textofooter}>
        <p className={styles.paragrafo}>Desenvolvido com ♥ por PET/ADS @ </p>
        <a className={styles.linkifsp} href='https://portais.ifsp.edu.br/scl/'>IFSP São Carlos</a>
      </div>
    </div>
  );
}

export default Footer
