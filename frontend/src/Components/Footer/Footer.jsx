import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../Data/Data';
import Logo from '../../assets/aaee.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_inf">
        <div className="footer_logo">
          <img src={Logo} alt="..." />
          <h5>Academia de Altos Estudos Estratégicos</h5>
          <p>Instituição de Ensino Superior </p>
        </div>
        <div className="footer_links">
          <h5>Links Rapidos</h5>
          <ul className='nav-links'>
            {
              navLinks.map(({ name, path }, index) => {
                return (
                  <li key={index} className='li'>
                    <NavLink to={path} className={({ isActive }) => {
                      isActive ? 'active' : ''
                    }}>
                      {name}
                    </NavLink>
                  </li>
                )
              })
            }

          </ul>
        </div>
        <div className="footer_faq">
          <h5>F.A.Qs</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere minus officia reprehenderit ex explicabo accusantium natus, 
            distinctio hic perspiciatis repellat voluptatibus necessitatibus nam 
            labore sit amet cum modi ipsa aspernatur accusamus consequatur quaerat. 
            Adipisci, possimus?</p>
        </div>
        <div className="footer_contact">
          <h5>Contactos</h5>
          <span><FiPhone /> +21 744 000 031</span>
          <span><FiMail /> informatica@aaee.ac.mz</span>
          <span><FiMapPin /> Maluana, Maputo</span>
        </div>
        

      </div>
      <div className="footer_copy">
        <hr />
        Copyright © 2024 Academia de Altos Estudos Estratégicos | Todos os direitos reservados.
      </div>
    </div>
  )
}
