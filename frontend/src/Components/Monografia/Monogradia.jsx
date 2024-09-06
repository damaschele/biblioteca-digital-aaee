import { ArrowRight } from '@mui/icons-material';
import { FaGlobe, FaLaptopCode, FaMoneyBillWave } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import bg1 from "../../assets/bg1.jpg";
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './monografia.css';

export default function MonografiaPagina() {
  return (
    <>
      <Nav />
      <div className="container monografia">
        <div className="container-image">
          <img src={bg1} alt="" />
        </div>
        <div className="container-controller">
          <div className="conatiner-controller-text">
            <h2>Monografias</h2>
            <p>Segue uma descrição das secções relativas aos cursos de Engenharia Informática,
              Relações Internacionais, Direito e Economia e Gestão Estratégica, destacando os principais temas abordados em cada uma delas.
            </p>
            <div className="container-form-text">
              <div className="container-card-m">
                <i><FaLaptopCode /></i>
                <h4>Engenharia Informática</h4>
                <div className="card-descr">
                  <span><br></br><i><ArrowRight /></i> Desenvolvimento de Software.</span>
                  <span><br></br> <i><ArrowRight /></i> Redes de Computadores e Segurança Cibernética.</span>
                  <span><br></br> <i><ArrowRight /></i>  Inteligência Artificial e Computação em Nuvem.</span>
                </div>
              </div>

              <div className="container-card-m">
                <i><FaGlobe /></i>
                <h4>Relações Internacionais</h4>
                <div className="card-descr">
                <span><br></br><i><ArrowRight /></i> Diplomacia e Negociações Internacionais.</span>
                <span><br></br><i><ArrowRight /></i> Economia Global e Desenvolvimento Sustentável.</span>
                <span><br></br><i><ArrowRight /></i> Direitos Humanos e Cooperação Internacional.</span>
                </div>
              </div>

              <div className="container-card-m">
                <i><FaMoneyBillWave /></i>
                <h4>Economia e Gestão</h4>
                <div className="card-descr">
                    <span><br></br><i><ArrowRight /></i>  Análise Econômica e Política Monetária.</span>
                    <span><br></br><i><ArrowRight /></i>  Gestão de Recursos Humanos e Estratégias Empresariais.</span>
                    <span><br></br><i><ArrowRight /></i>  Finanças Corporativas e Mercado Financeiro.</span>
                </div>
              </div>

              <div className="container-card-m">
                <i><MdGavel /></i>
                <h4>Direito</h4>
                <div className="card-descr">
                    <span className='span-1'><i><ArrowRight /></i> Direito Constitucional e Direitos Humanos.</span>
                    <br></br><span className='span-2'><i><ArrowRight /></i> Direito Penal e Criminologia.</span>
                    <br></br><span className='span-3'><i><ArrowRight /></i> Direito Civil e Comercial.</span>
                    <br></br><span className='span-4'><i><ArrowRight /></i> Direito Ambiental e Sustentabilidade.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aux-content">
        </div>
        {/* <UserList />
        <Chat /> */}
      </div>
      <div className="footer-contact">
        <Footer />
      </div>
    </>
  )
}
