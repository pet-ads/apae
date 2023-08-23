import React, { useRef } from 'react'; 
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

  const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      let ordinate = element.offsetTop - menuNavRef.current.clientHeight;
      window.scroll({ top: ordinate, behavior: 'smooth' });
  };

  return (
    <div>
      <div>
        <MenuNav scrollToSection={scrollToSection} menuNavRef={menuNavRef} />
      </div>

      <Router>
        <div id="ancoras">
          <section id="home">
            <Home scrollToSection={scrollToSection} menuNavRef={menuNavRef} />
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

          <section id="footer">
            <Footer />
          </section>

        </div>
      </Router>

    </div>
  );
}

export default App;
