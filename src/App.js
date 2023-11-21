import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './componentes/layout/Footer/Footer.js';
import MenuNav from './componentes/layout/MenuNav/MenuNav.js';
import Projeto from './paginas/1-Projeto/projeto';
import Turmas from './paginas/2-Turmas/turmas';
import Equipe from './paginas/3-Equipe/equipe';
import Acoes from './paginas/4-Acoes/acoes';
import Blog from './paginas/5-Blog/blog';
import Contato from './paginas/6-Contato/contato';
import Home from './paginas/Home/home';
import './App.css';

function App() {
  const menuNavRef = useRef(null);
  const [closedMenuHeight, setClosedMenuHeight] = useState(0);
  const [listState] = useState(false);

  useEffect(() => {
    if (!listState) {
      setClosedMenuHeight(menuNavRef.current.clientHeight);
    }
  }, [listState, menuNavRef]);

  // const calculatePadding = (sectionId) => {
  //   const windowHeight = window.innerHeight;
  //   const windowWidth = window.innerWidth;
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const elementHeight = element.clientHeight;
  //     let padding;
  //     if (sectionId === 'home') {
  //       padding = ((windowHeight - elementHeight + closedMenuHeight) / 2);
  //     } else if (windowWidth < windowHeight) {
  //       if (sectionId === 'turmas' || sectionId === 'equipe') {
  //         padding = ((windowHeight - (2 * element.clientHeight) - closedMenuHeight) / 3);
  //       }
  //     } else {
  //       padding = ((windowHeight - elementHeight - closedMenuHeight) / 2);
  //     }

  //     return padding;
  //   }
  //   return 0;
  // };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const elementHeight = element.clientHeight;
    const windowHeight = window.innerHeight;
    let padding = 0;
    if (element) {
      let ySet = element.offsetTop - closedMenuHeight;
      window.scroll({ top: ySet, behavior: 'smooth' });
      if(sectionId !== 'home'){
       padding = ((windowHeight - elementHeight - closedMenuHeight) / 2);
      }
      else{
       padding = ((windowHeight - elementHeight + closedMenuHeight) / 2);
      }
      console.log(sectionId,padding);
    }
  };

  // useEffect(() => {
  //   const sectionIds = ['home', 'projeto', 'turmas', 'equipe', 'acoes', 'contato', 'blog'];

  //   const addPaddingToSection = (sectionId) => {
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       const windowHeight = window.innerHeight;
  //       const windowWidth = window.innerWidth;
  //       const padding = calculatePadding(sectionId);
  //       if (sectionId === 'blog') {
  //         element.style.paddingTop = `5%`;
  //         element.style.paddingBottom = `5%`;
  //       } else if (sectionId === 'equipe') {
  //         if (windowWidth < windowHeight) {
  //           element.style.paddingTop = `0`;
  //           element.style.paddingBottom = `${padding}px`;
  //         } else {
  //           element.style.paddingTop = `${padding}px`;
  //           element.style.paddingBottom = `${padding}px`;
  //         }
  //       } else if (padding > 0) {
  //         element.style.paddingTop = `${padding}px`;
  //         element.style.paddingBottom = `${padding}px`;
  //       } else {
  //         element.style.paddingTop = `10%`;
  //         element.style.paddingBottom = `10%`;
  //         console.log("nao cabe na pagina", element);
  //       }
  //     }
  //   };

  //   const addPaddingToSections = () => {
  //     sectionIds.forEach((sectionId) => {
  //       addPaddingToSection(sectionId);
  //     });
  //   };

  //   window.addEventListener("load", addPaddingToSections);

  //   return () => {
  //     window.removeEventListener("load", addPaddingToSections);
  //   };
  // }, [closedMenuHeight, calculatePadding]);

  return (
    <div>
      <div>
        <MenuNav
          scrollToSection={scrollToSection}
          menuNavRef={menuNavRef}
          closedMenuHeight={closedMenuHeight}
          listState={listState}
        />
      </div>

      <Router>
        <div id="ancoras">
          <section id="home">
            <Home scrollToSection={() => scrollToSection("projeto")} closedMenuHeight={0} />
          </section>

          <section id="projeto">
            <Projeto />
          </section>

          <section id="turmas">
            <Turmas />
          </section>

          <section id="equipe">
            <Equipe />
          </section>

          <section id="acoes">
            <Acoes />
          </section>

          <section id="contato">
            <Contato />
          </section>

          <section id="blog">
            <Blog />
          </section>
        </div>

        <div id="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
