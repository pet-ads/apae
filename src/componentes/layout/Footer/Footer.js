import React from 'react';
import styles from "./Footer.module.css"

function Footer() {
  
  return (
    <div className={styles.footer}>
      <div className={styles.textofooter}>
        <p className={styles.paragrafo}>Desenvolvido com ♥ por </p>
        <a className={styles.linkifsp} href="http://petads.paginas.scl.ifsp.edu.br/">PET/ADS @ </a>
        <a className={styles.linkifsp} href='https://portais.ifsp.edu.br/scl/'>IFSP São Carlos</a>
      </div>
    </div>
  );
}

export default Footer;