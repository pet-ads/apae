import React from 'react';
import styles from "./Footer.module.css"
function Footer({ scrollToSection }) {
  return (
    <nav className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
        </li>
        <li>
          <a href="#projeto" onClick={() => scrollToSection("projeto")}>Projeto</a>
        </li>
        <li>
          <a href="#turmas" onClick={() => scrollToSection("turmas")}>Turmas</a>
        </li>
        <li>
          <a href="#monitores" onClick={() => scrollToSection("monitores")}>Monitores</a>
        </li>
        <li>
          <a href="#acoes" onClick={() => scrollToSection("acoes")}>Ações</a>
        </li>
        <li>
          <a href="#blog" onClick={() => scrollToSection("blog")}>Blog</a>
        </li>
        <li>
          <a href="#contato" onClick={() => scrollToSection("contato")}>Contato</a>
        </li>
      </ul>
      <p className={styles.p}>Desenvolvido ♥ por PET/ADS-IFSP São Carlos</p>
    </nav>
  );
}

export default Footer;
