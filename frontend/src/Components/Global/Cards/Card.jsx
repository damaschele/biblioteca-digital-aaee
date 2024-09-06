import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import './card.css';

function Card() {
  const [cards, setCards] = useState([]);
  const [book, setBooks] = useState([]);
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/listar-solicitacao');
        setSolicitacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar solicitações:', error);
      }
    };

    fetchSolicitacoes();
  }, []);

  const fetData = () => {
    axios.get('http://localhost:8080/listar')
      .then(res => {
        setCards(res.data);
      })
  }

  useEffect(() => {
    fetData();
  }, []);

  const livros = () => {
    axios.get('http://localhost:8080/listar-livros')
      .then(res => {
        setBooks(res.data);
      })
  }

  useEffect(() => {
    livros();
  }, []);

  const formatPercentage = (value) => {
    return value.toFixed(1);
  }

  return (
    <div className="col-xxl-4 col-md-6 container-card">
      <div className="card info-card cliente-card">
        <div className="card-body">
          <label className="card-title">
            Utilizadores <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-person"></i>
            </div>
            <div className="ps-3">
              <h6>
                {cards.length}
              </h6>
              <span
                className={
                  `${cards.length > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`
                }
              >
                {formatPercentage(cards.length > 0 ? cards.length * 0.1 : -cards.length * 0.1)}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {cards.length > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card solicitacoes-card">
        <div className="card-body">
          <label className="card-title">
            Solicitações <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-question"></i>
            </div>
            <div className="ps-3">
              <h6>
                {solicitacoes.length}
              </h6>
              <span
                className={
                  `${solicitacoes.length > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`
                }
              >
                {formatPercentage(solicitacoes.length > 0 ? solicitacoes.length * 0.1 : -solicitacoes.length * 0.1)}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {solicitacoes.length > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card emprestimo-card">
        <div className="card-body">
          <label className="card-title">
            Publicações <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-file-text"></i>
            </div>
            <div className="ps-3">
              <h6>
                5
              </h6>
              <span
                className={
                  `${solicitacoes.length > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`
                }
              >
                {formatPercentage(solicitacoes.length > 0 ? solicitacoes.length * 0.1 : -solicitacoes.length * 0.1)}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {solicitacoes.length > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card info-card livros">
        <div className="card-body">
          <label className="card-title">
            Livros <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-book"></i>
            </div>
            <div className="ps-3">
              <h6>
                {book.length}
              </h6>
              <span
                className={
                  `${book.length > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`
                }
              >
                {formatPercentage(book.length > 0 ? book.length * 0.1 : -book.length * 0.1)}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {book.length > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
