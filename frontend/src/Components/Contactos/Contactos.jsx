import { BsEnvelopeAt } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import bg1 from "../../assets/bg1.jpg";
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './contactos.css';

export default function Contactos() {
  return (
    <>
      {/* <div className="top-nav"> */}
      <Nav />
      {/* </div> */}
      <div className="container contact">
        <div className="container-image">
          <img src={bg1} alt="" />
        </div>
        <div className="container-controller">
          <div className="conatiner-controller-text">
            <h2>Entre em contacto</h2>
            <p>Estamos sempre disponíveis para ajudar. Se você precisar de assistência, suporte
            técnico ou simplesmente quiser compartilhar seus pensamentos conosco, não hesite em nos enviar uma mensagem.
              <br></br>Estamos ansiosos para ouvir de você e faremos o possível para responder o mais rápido possível.</p>
            <div className="container-form-text">
              <div className="container-form">
                <div className="form-title">
                  <h3>Mandar mensagem</h3>
                </div>
                <form>
                  <div className="form-block init">
                    <div className="item-form">
                      <label>Email</label>
                      <input type="email" required />
                    </div>
                    <div className="item-form">
                      <label>Nome</label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="form-block sec-init">
                    <div className="item-form">
                      <label>Assunto(Opcional)</label>
                      <input type="text" required />
                    </div>
                    <div className="item-form">
                      <label>Mensage</label>
                      <textarea required></textarea>
                    </div>
                    <div className="item-form">
                      <button type="submit" className="btn-contact"><i className="bi bi-send"></i></button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="container-text">
                <h4>Informação de Contacos</h4>
                <div className="text-item">
                  <i><IoLocationOutline /></i>
                  <span>Maputo, Maluana</span>
                </div>
                <div className="text-item">
                  <i><BsEnvelopeAt /></i>
                  <span>informatica@aaee.ac.mz</span>
                </div>
                <div className="text-item">
                  <i><MdLocalPhone /></i>
                  <span>+21 744 000 031</span>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="aux-content">
        </div>
      </div>
      <div className="footer-contact">
        <Footer />
      </div>
    </>
  )
}
