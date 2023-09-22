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

  const handleMenuItemClick = (sectionId) => {
    setLinkState(false);
    scrollToSection(sectionId, closedMenuHeight);
  };

  return (
    <div ref={menuNavRef} className={styles.component_container}>
      <div className={styles.img_container}>
        <img src={logo} alt="Logo do IFSP e APAE" className={styles.logo} />
      </div>

      <nav>
        <ul className={toggleListExpand}>
          <button className={styles.hamburguer_menu} onClick={openMenu}>
            <img src={burguerIcon} alt="Botão de Menu" />
          </button>

          <div className={toggleLinksExpand}>
            <Item name="Home" section="home" scrollToSection={() => handleMenuItemClick("home")} />
            <Item name="Projeto" section="projeto" scrollToSection={() => handleMenuItemClick("projeto")} />
            <Item name="Turmas" section="turmas" scrollToSection={() => handleMenuItemClick("turmas")} />
            <Item name="Equipe" section="equipe" scrollToSection={() => handleMenuItemClick("equipe")} />
            <Item name="Ações" section="acoes" scrollToSection={() => handleMenuItemClick("acoes")} />
            <Item name="Contato" section="contato" scrollToSection={() => handleMenuItemClick("contato")} />
            <Item name="Blog" section="blog" scrollToSection={() => handleMenuItemClick("blog")} />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNav;





