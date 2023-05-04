import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
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
  return (
    <Router>
      <MenuNav />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <Home />
              <Element name='projeto'>
                <Projeto />
              </Element>
              <Element name='turmas'>
                <Turmas />
              </Element>
              <Element name='monitores'>
                <Monitores />
              </Element>
              <Element name='acoes'>
                <Acoes />
              </Element>
              <Element name='blog'>
                <Blog />
              </Element>
            </div>
          }
        />
        <Route path='/contato' element={<Contato />} />
        <Route path='/projeto' element={<Projeto />} />
        <Route path='/turmas' element={<Turmas />} />
        <Route path='/monitores' element={<Monitores />} />
        <Route path='/acoes' element={<Acoes />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
