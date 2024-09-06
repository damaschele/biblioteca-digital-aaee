/* eslint-disable react/prop-types */
import { navList } from '../../../Data/Data';
import Navitem from "../NavToll/NavItem";
import './sidebar.css';

const SideBar = ({ changePage }) => {
    const handlePageChange = (pageName) => {
        changePage(pageName);
    };

    return (
        <aside id='sidebar' className='sidebar'>
            <ul className='sidebar-nav' id='sidebar-nav'>
                <li className="nav-item" onClick={() => handlePageChange('Dashboard')}>
                    <a href="#dashboard" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => handlePageChange('Registrar')}>
                    <a href="#registrar" className="nav-link">
                    <i className="bi bi-person"></i>
                        <span>Utilizadores</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => handlePageChange('Monografia')}>
                    <a href="#monografia" className="nav-link">
                    <i className="bi bi-file-text"></i>
                        <span>Monografia</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => handlePageChange('Publicações')}>
                    <a href="#publicacoes" className="nav-link">
                    <i className="bi bi-book"></i>
                        <span>Publicações</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => handlePageChange('Page3')}>
                    <a href="#page3" className="nav-link">
                    <i className="bi bi-file-earmark-text"></i>
                        <span>Relatórios</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => handlePageChange('Pagina Principal')}>
                    <a href="#paginaPrincipal" className="nav-link">
                    <i className="bi bi-globe"></i>
                        <span>Página inicial</span>
                    </a>
                </li>
                <li className="nav-heading">Pages</li>
                {navList.map((nav) => (
                    <Navitem key={nav._id} nav={nav} />
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;

