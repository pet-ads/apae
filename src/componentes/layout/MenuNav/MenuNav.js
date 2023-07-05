import React, { useState } from 'react';
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';
import burguerIcon from './burguericon.png';
import Item from './Item/ItemNav';

function MenuNav({ scrollToSection }) {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.component_container}>

      <div className={styles.img_container}>
        <img src={logo} alt="Logo do IFSP e APAE" className={styles.logo} />
      </div>

      <nav>

        <ul className={styles.list}>

          <button className={styles.hamburguer_menu} onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          }}>
            <img src={burguerIcon} alt="Botão de Menu" />
          </button>

          <div className={styles.links}>
            <Item section="Home" scrollToSection={scrollToSection}/>
            <Item section="Projeto" scrollToSection={scrollToSection}/>
            <Item section="Turmas" scrollToSection={scrollToSection}/>
            <Item section="Equipe" scrollToSection={scrollToSection}/>
            <Item section="Ações" scrollToSection={scrollToSection}/>
            <Item section="Blog" scrollToSection={scrollToSection}/>
          </div>

        </ul>

      </nav>

    </div>
    
  );
}

export default MenuNav;



