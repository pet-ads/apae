import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/Home';
import Projeto from './paginas/1-Projeto/Projeto';
import Turmas from './paginas/2-Turmas/Turmas';
import Monitores from './paginas/3-Monitores/Monitores';
import Acoes from './paginas/4-Acoes/Acoes';
import Blog from './paginas/5-Blog/Blog';
import Contato from './paginas/6-Contato/Contato';
import MenuNav from './componentes/layout/MenuNav';
import Footer from './componentes/layout/Footer';


function App() {
  return (
    <Router>
      <MenuNav></MenuNav>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/Projeto' element={<Projeto></Projeto>} />
      <Route path='/Turmas' element={<Turmas></Turmas>} />
      <Route path='/Monitores' element={<Monitores></Monitores>} />
      <Route path='/Acoes' element={<Acoes></Acoes>} />
      <Route path='/Blog' element={<Blog></Blog>} />
      <Route path='/Contato' element={<Contato></Contato>} />
    </Routes>
    <Footer></Footer>
    </Router>
  );
}

export default App;
