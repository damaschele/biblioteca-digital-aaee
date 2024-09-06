import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound/NotFound';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Galeria from '../Components/Galeria/Galeria';
import Artigos from '../Components/Artigos/Artigos';
import Sobrenos from '../Components/sobre/Sobrenos';

export default function Router() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<div><Home /></div>} />
      <Route path='/categoria' element={<div><Galeria /></div>} />
      <Route path='/siteprincipal/artigos' element={<div><Artigos /></div>} />
      <Route path='/siteprincipal/*' element={<SitePrincipalRoutes />} />
      <Route path='/siteprincipal/sobre' element={<div><Sobrenos /></div>}/>
      <Route path='*' element={<div><NotFound /></div>} />
    </Routes>
    <Footer />
  </>
  );
}

function SitePrincipalRoutes() {
  return (
    <Routes>
      <Route path='/siteprincipal' element={<div><Artigos /></div>} />
      <Route path='/siteprincipal/artigos' element={<div><Artigos /></div>} />
      <Route path='/siteprincipal/sobre' element={<div><Sobrenos /></div>}/>
    </Routes>
  );
}
