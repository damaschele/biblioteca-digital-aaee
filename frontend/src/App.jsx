import { useState } from 'react';
import './App.css';
import DashboardPrincipal from './Components/Dashboard/DashboardPrincipal.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Artigos from './Components/Artigos/Artigos.jsx';
import withAuth from './Components/Auth/withAuth.jsx';
import Autorizados from './Components/Autorization/Autorizados.jsx';
import CategoryMenu from './Components/Categoria/CategoryMenu.jsx';
import DetalhesLivros from './Components/Categoria/DetalhesLivros.jsx';
import VisualizadorPDF from './Components/Categoria/VisualizadorPDF.jsx';
import Contactos from './Components/Contactos/Contactos.jsx';
import Faq from './Components/FAQ/Faq.jsx';
import Monografia from './Components/Global/Monografia/Monografia.jsx';
import SolicitacaoFormulario from './Components/Global/Submissao/SolicitacaoFormulario.jsx';
import Logout from './Components/Logout/Logout.jsx';
import MonografiaPagina from './Components/Monografia/Monogradia.jsx';
import PerfilUtilizador from './Components/PerfilUtilizador/PerfilUtilizador.jsx';
import SitePrincipal from './Components/SitePrincipal/SitePrincipa.jsx';
import Sobrenos from './Components/sobre/Sobrenos.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';

function App() {
  const usuario = {
    codigo: 0,
    email: '',
    username: '',
    password: '',
    role: 'default'
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [objUsuario, setObjUsuario] = useState(usuario);

  const aoDigitar = (e) => {
    setObjUsuario({ ...objUsuario, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido !== null && retorno_convertido.mensagem) {
          const mensagem = retorno_convertido.mensagem;
          window.alert(mensagem.replace(/['"]+/g, ''));
        } else {
          window.alert("Usuário cadastrado com sucesso..!");
        }
      })
      .catch(error => console.error('Erro ao cadastrar usuário:', error));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login botao={btnCadastrar} eventoTecladoLogin={aoDigitar} />
    },
    {
      path: '/register',
      element: <Register botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} />
    },
    {
      path: '/dashboardprincipal',
      element: withAuth(DashboardPrincipal)()
    },
    {
      path: '/naoautorizado',
      element: withAuth(Autorizados)()
    },
    {
      path: '/dashboardprincipal/dashboard',
      element: withAuth()()
    },
    {
      path: '/siteprincipal',
      element: withAuth(SitePrincipal)()
    },
    {
      path: '/siteprincipal/artigos',
      element: withAuth(Artigos)()
    },
    {
      path: '/siteprincipal/faq',
      element: withAuth(Faq)()
    },
    {
      path: '/siteprincipal/sobre',
      element: withAuth(Sobrenos)()
    },
    {
      path: '/siteprincipal/monografia',
      element: withAuth(Monografia)()
    },
    {
      path: '/siteprincipal/monografiaPagina',
      element: withAuth(MonografiaPagina)()
    },
    {
      path: '/siteprincipal/solicitacoesFormulario',
      element: withAuth(SolicitacaoFormulario)()
    },
    {
      path: '/siteprincipal/categoria',
      element: withAuth(CategoryMenu)()
    },
    {
      path: '/siteprincipal/contactos',
      element: withAuth(Contactos)()
    },
    {
      path: '/DetalhesLivros/:id',
      element: withAuth(DetalhesLivros)()
    },
    {
      path: '/siteprincipal/perfilUtilizador',
      element: withAuth(PerfilUtilizador)()
    },
    {
      path: '/VisualizadorPDF/:id',
      element: withAuth(VisualizadorPDF)()
    },
    {
      path: '/logout',
      element: withAuth(Logout)()
    },
    {
      path: '/login',
      element: withAuth(Login)()
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
