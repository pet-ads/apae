import React, { useState, useEffect } from 'react';
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';
import burguerIcon from './burguericon.png';
import Item from './Item/ItemNav';

function MenuNav({ scrollToSection, menuNavRef }) {
  const [listState, setListState] = useState(false);
  const [linkState, setLinkState] = useState(false);
  const [closedMenuHeight, setClosedMenuHeight] = useState(0);

  useEffect(() => {
    if (!listState) {
      setClosedMenuHeight(menuNavRef.current.clientHeight);
    }
  }, [listState, menuNavRef]);

  const toggleListExpand = listState ? styles.list_expanded : styles.list;
  const toggleLinksExpand = linkState ? styles.links_expanded : styles.links;

  const openMenu = () => {
    setListState(prevListState => !prevListState);
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
            <Item name="Home" section="home" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Projeto" section="projeto" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Turmas" section="turmas" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Equipe" section="equipe" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Ações" section="acoes" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Contato" section="contato" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>
            <Item name="Blog" section="blog" scrollToSection={sectionId => scrollToSection(sectionId, closedMenuHeight)}/>

          </div>

        </ul>

      </nav>

    </div>
    
  );
}

export default MenuNav;





