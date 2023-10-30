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

  const calculatePadding = (sectionId, isHome) => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById(sectionId);
    if (element) {
      const elementHeight = element.clientHeight;
      let padding;

      if (isHome) {
        padding = ((windowHeight - elementHeight + closedMenuHeight) / 2);
      } else {
        padding = ((windowHeight - elementHeight - closedMenuHeight) / 2);
      }

      return padding;
    }
    return 0;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      let ySet = element.offsetTop - closedMenuHeight;
      window.scroll({ top: ySet, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'projeto', 'turmas', 'equipe', 'acoes', 'contato', 'blog'];

    const addPaddingToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const isHome = sectionId === 'home';
        const padding = calculatePadding(sectionId, isHome);
        if (padding > 0) {
          element.style.paddingTop = `${padding}px`;
          element.style.paddingBottom = `${padding}px`;
        } else {
          element.style.paddingTop = `10%`;
          element.style.paddingBottom = `10%`;
        }
      }
    };

    const addPaddingToSections = () => {
      sectionIds.forEach((sectionId) => {
        addPaddingToSection(sectionId);
      });
    };

    window.addEventListener("load", addPaddingToSections);

    return () => {
      window.removeEventListener("load", addPaddingToSections);
    };
  }, [closedMenuHeight]);

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
