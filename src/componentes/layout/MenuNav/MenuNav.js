import React, { useState, useEffect } from 'react';
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';
import burguerIcon from './burguericon.png';
import Item from './Item/ItemNav';

function MenuNav({ scrollToSection, menuNavRef, closedMenuHeight, listState }) {
  const [linkState, setLinkState] = useState(false);


  const toggleListExpand = listState ? styles.list_expanded : styles.list;
  const toggleLinksExpand = linkState ? styles.links_expanded : styles.links;

  const openMenu = () => {
    setLinkState(prevLinkState => !prevLinkState);
  };

  return (
    <div className={styles.component_container}>
      <div ref={menuNavRef} className={styles.img_container}>
        <img src={logo} alt="Logo do IFSP e APAE" className={styles.logo} />
      </div>

      <nav>
        <ul className={toggleListExpand}>
          <button className={styles.hamburguer_menu} onClick={openMenu}>
            <img src={burguerIcon} alt="Botão de Menu" />
          </button>

          <div className={toggleLinksExpand}>
            <Item name="Home" section="home" scrollToSection={() => scrollToSection("home", closedMenuHeight)} />
            <Item name="Projeto" section="projeto" scrollToSection={() => scrollToSection("projeto", closedMenuHeight)} />
            <Item name="Turmas" section="turmas" scrollToSection={() => scrollToSection("turmas", closedMenuHeight)} />
            <Item name="Equipe" section="equipe" scrollToSection={() => scrollToSection("equipe", closedMenuHeight)} />
            <Item name="Ações" section="acoes" scrollToSection={() => scrollToSection("acoes", closedMenuHeight)} />
            <Item name="Contato" section="contato" scrollToSection={() => scrollToSection("contato", closedMenuHeight)} />
            <Item name="Blog" section="blog" scrollToSection={() => scrollToSection("blog", closedMenuHeight)} />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNav;






