import React from 'react';
import styles from "./Footer.module.css"
function Footer({ scrollToSection }) {
  return (
    <div className={styles.footer}>
      <nav className="Footer">
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li className={styles.item}>
            <a href="#projeto" onClick={() => scrollToSection("projeto")}>Projeto</a>
          </li>
          <li className={styles.item}>
            <a href="#turmas" onClick={() => scrollToSection("turmas")}>Turmas</a>
          </li>
          <li  className={styles.item}>
            <a href="#monitores" onClick={() => scrollToSection("monitores")}>Monitores</a>
          </li>
          <li  className={styles.item}>
            <a href="#acoes" onClick={() => scrollToSection("acoes")}>Ações</a>
          </li>
          <li  className={styles.item}>
            <a href="#blog" onClick={() => scrollToSection("blog")}>Blog</a>
          </li>
          <li  className={styles.item}>
            <a href="#contato" onClick={() => scrollToSection("contato")}>Contato</a>
          </li>
        </ul>
      </nav>
      <p className={styles.p}>Desenvolvido ♥ por PET/ADS-IFSP São Carlos</p>
    </div>
  );
}

export default Footer;
