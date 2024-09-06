import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { navLinks, navRight } from '../../Data/Data';
import Logo from '../../assets/aaee.png';
import SolicitacaoFormulario from '../Global/Submissao/SolicitacaoFormulario';
import './Nav.css';

export default function Nav() {
    const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);
    const [showSolicitacaoForm, setShowSolicitacaoForm] = useState(false); // Estado para controlar a exibição do formulário de solicitação
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    //const navigate = useNavigate();

    const handleLogout = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const toggleSolicitacaoForm = () => {
        setShowSolicitacaoForm(!showSolicitacaoForm); // Alternar a exibição do formulário de solicitação
    };

    if (innerWidth < 1024) {
        window.addEventListener('scroll', () => {
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinksShowing(false);
        });
        window.addEventListener('scroll', () => {
            document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
            setIsNavLinksShowing(false);
        });
    }

    return (
        <nav>
            <div className="container nav-container">
                {/* ...............Logo.................. */}
                <Link to={'/siteprincipal'} className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>

                {/* ...............Nav-Links.................. */}
                <ul className={`nav-links ${isNavLinksShowing ? 'navinksShow' : 'navLinksHide'}`}>
                    {
                        navLinks.map(({ name, path }, index) => (
                            <li key={index}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* ...............Nav-Right.................. */}
                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => {
                            if (item.id === 3) {  // Verifica se é o item de logout
                                // return (
                                //     // <Logout key={index} onLogout={handleLogout} />
                                // );
                            } else if (item.id === 2) { // Verifica se é o segundo item do link right
                                return (
                                    <button key={index} className='management-icons' onClick={toggleSolicitacaoForm}>
                                        <item.icon />
                                    </button>
                                );
                            } else {
                                return (
                                    <Link key={index} className='management-icons' to={item.link}>
                                        <item.icon />
                                    </Link>
                                );
                            }
                        })
                    }

                    <button className='menu-button' onClick={() => setIsNavLinksShowing(!isNavLinksShowing)}>
                        {
                            !isNavLinksShowing ? <TbMenuDeep /> : <IoCloseOutline />
                        }
                    </button>
                </div>
            </div>

            {/* Componente do formulário de solicitação */}
            {showSolicitacaoForm && <SolicitacaoFormulario onClose={toggleSolicitacaoForm} />}
        </nav>
    );
}
