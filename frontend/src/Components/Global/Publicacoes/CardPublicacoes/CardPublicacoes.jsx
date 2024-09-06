// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './cardPublicacoes.css';

export default function CardPublicacoes() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="col-xxl-4 col-md-6 container-card">
      <div className="card info-card cliente-card">
        <div className="card-body">
          <label className="card-title">
            Artigos <span>| Científicos</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-file-text"></i>
            </div>
            <div className="ps-3">
              <h6>13</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={() => openModal('Artigos Científicos Form')}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card info-card solicitacoes-card">
        <div className="card-body">
          <label className="card-title">Palestra</label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-file-text"></i>
            </div>
            <div className="ps-3">
              <h6>12</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={() => openModal('Palestra Form')}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card info-card emprestimo-card">
        <div className="card-body">
          <label className="card-title">
            Projectos <span>de Pesquisa</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-file-text"></i>
            </div>
            <div className="ps-3">
              <h6>0</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={() => openModal('Projectos de Pesquisa Form')}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card info-card livros">
        <div className="card-body">
          <label className="card-title">
            Jornadas <span>Científicas</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-file-text"></i>
            </div>
            <div className="ps-3">
              <h6>12</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={() => openModal('Jornadas Científicas Form')}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal content={modalContent} closeModal={closeModal} />
      )}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Modal({ content, closeModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário, incluindo o arquivo PDF.
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h5>{content}</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome:</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição:</label>
            <textarea className="form-control" required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Submeter Ficheiro (PDF):</label>
            <input type="file" className="form-control" accept=".pdf" required />
          </div>
          <div className="btn-class">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>

            <button className="btn btn-secondary" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
