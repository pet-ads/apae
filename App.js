import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './paginas/Home/home';
import Projeto from './paginas/1-Projeto/projeto';
import Turmas from './paginas/2-Turmas/turmas';
import Monitores from './paginas/3-Monitores/monitores';
import Acoes from './paginas/4-Acoes/acoes';
import Blog from './paginas/5-Blog/blog';
import Contato from './paginas/6-Contato/contato';
import MenuNav from './componentes/layout/MenuNav';
import Footer from './componentes/layout/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div>
        <MenuNav scrollToSection={scrollToSection} />
      </div>

      <div id="ancoras">
        <section id="home">
          <Home />
        </section>

        <section id="projeto">
          <Projeto />
        </section>

        <section id="turmas">
          <Turmas />
        </section>

        <section id="monitores">
          <Monitores />
        </section>

        <section id="acoes">
          <Acoes />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contato">
          <Contato />
        </section>
      </div>

      <div>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </Router>
  );
}

export default App;

