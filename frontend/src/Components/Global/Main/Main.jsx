/* eslint-disable react/prop-types */

import NotFound from "../../../Pages/NotFound/NotFound";
import Monografia from '../Monografia/Monografia';
import PageTitle from '../PageTitle/PageTitle';
import PaginaPrincipal from '../PaginaPricipal/PaginaPrincipal';
import Publicacoes from '../Publicacoes/Publicacoes';
import RegistrarUsuario from '../Registrar/RegistrarUsuario';
import Dashboard from '../dashboard/Dashboard';
import './main.css';

const Main = ({ currentPage }) => {

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Registrar':
        return <RegistrarUsuario />;

      case 'Pagina Principal':
        return <PaginaPrincipal/>;

      case 'Publicações':
        return <Publicacoes />

      case 'Monografia':
        return <Monografia />

      default:
        return <NotFound />;
    }
  };

  return (
    <main id="main" className="main">
      <PageTitle page={currentPage} />
      {renderPage()}
    </main>
  );
};

export default Main;
