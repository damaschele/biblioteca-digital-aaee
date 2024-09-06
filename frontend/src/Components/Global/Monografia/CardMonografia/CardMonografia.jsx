import { FaGlobe, FaLaptopCode, FaMoneyBillWave } from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import './cardMonografia.css';

export default function CardMonografia() {
  return (
    <div className="col-xxl-4 col-md-6 container-card">
      <div className="card info-card cliente-card">
        <div className="card-body">
          <label className="card-title">
            Engenharia <span>| Informatica</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i><FaLaptopCode /></i>
            </div>
            <div className="ps-3">
              <h6>
                13
              </h6>
              <span className="text-muted small pt-2 ps-1">
               <button className="btn-card">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card solicitacoes-card">
        <div className="card-body">
          <label className="card-title">
            Relações <span>Internacionais</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i><FaGlobe /></i>
            </div>
            <div className="ps-3">
              <h6>
                12
              </h6>
              <span className="text-muted small pt-2 ps-1">
              <button className="btn-card">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card emprestimo-card">
        <div className="card-body">
          <label className="card-title">
            Direito <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i><MdGavel /></i>
            </div>
            <div className="ps-3">
              <h6>
                0
              </h6>
              <span className="text-muted small pt-2 ps-1">
              <button className="btn-card">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card livros">
        <div className="card-body">
          <label className="card-title">
            Economia <span>| e Gestão</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i><FaMoneyBillWave /></i>
            </div>
            <div className="ps-3">
              <h6>
                12
              </h6>
              <span className="text-muted small pt-2 ps-1">
              <button className="btn-card">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
