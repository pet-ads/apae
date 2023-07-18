import React, { useState } from 'react';
import styles from './MenuNav.module.css';
import logo from './logo_navheader.png';
import burguerIcon from './burguericon.png';
import Item from './Item/ItemNav';

function MenuNav({ scrollToSection }) {

  const [listState, setListState] = useState(false);
  const [linkState, setLinkState] = useState(false);

  function openMenu(){
    setListState(listState => !listState); 
    setLinkState(linkState => !linkState);
  }

  let toggleListExpand = listState ? styles.list_expanded : styles.list;
  let toggleLinksExpand = linkState ? styles.links_expanded : styles.links;

  return (
    <div className={styles.component_container}>

      <div className={styles.img_container}>
        <img src={logo} alt="Logo do IFSP e APAE" className={styles.logo} />
      </div>

      <nav>

        <ul className={toggleListExpand}>

          <button className={styles.hamburguer_menu} onClick={openMenu}>
            <img src={burguerIcon} alt="Botão de Menu" />
          </button>

          <div className={toggleLinksExpand}>
            <Item name="Home" section="home" scrollToSection={scrollToSection}/>
            <Item name="Projeto" section="projeto" scrollToSection={scrollToSection}/>
            <Item name="Turmas" section="turmas" scrollToSection={scrollToSection}/>
            <Item name="Equipe" section="equipe" scrollToSection={scrollToSection}/>
            <Item name="Ações" section="acoes" scrollToSection={scrollToSection}/>
            <Item name="Contato" section="contato" scrollToSection={scrollToSection}/>
            <Item name="Blog" section="blog" scrollToSection={scrollToSection}/>
          </div>

        </ul>

      </nav>

    </div>
    
  );
}

export default MenuNav;



