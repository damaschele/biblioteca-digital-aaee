import axios from 'axios';
import { useEffect, useState } from 'react';
import { PiSlideshow } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import './card.css';

function CardPrincipal() {
  const [showModal, setShowModal] = useState(false);
  const [tituloLivro, setTituloLivro] = useState('');
  const [descricaoLivro, setDescricaoLivro] = useState('');
  const [fotoLivro, setFotoLivro] = useState(null);
  const [livro, setLivro] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]); // Novo estado para categorias
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [verLivros, setVerLivros] = useState([]);
  const [solicitacoes, setSolicitacoes] = useState([]);

  const handleCadastrarLivro = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTituloLivro('');
    setDescricaoLivro('');
    setFotoLivro(null);
    setLivro(null);
    setCategoria(''); // Limpar categoria selecionada
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!tituloLivro || !descricaoLivro || !fotoLivro || !livro || !categoria) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }
  
    try {
      setLoading(true);
  
      const formData = new FormData();
      formData.append('titulo', tituloLivro);
      formData.append('descricao', descricaoLivro);
      formData.append('foto', fotoLivro);
      formData.append('livro', livro);
      formData.append('categoriaId', categoria); // Enviar o ID da categoria
  
      const response = await axios.post('http://localhost:8080/cadastrar-livros', formData);
      console.log('Livro cadastrado:', response.data);
  
      setSuccessMessage("Livro cadastrado com sucesso!");
      setErrorMessage('');
      listarLivros();
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
      setErrorMessage("Ocorreu um erro ao cadastrar o livro. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  

  // Função para buscar a lista de livros
  const listarLivros = () => {
    axios.get('http://localhost:8080/listar-livros')
      .then(res => {
        setVerLivros(res.data);
      })
      .catch(err => {
        console.error("Erro ao buscar dados:", err);
      });
  };

  // Função para buscar categorias
  const listarCategorias = () => {
    axios.get('http://localhost:8080/categorias')
      .then(res => {
        setCategorias(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error("Erro ao buscar categorias:", err);
      });
  };

  useEffect(() => {
    listarLivros();
    listarCategorias(); // Buscar categorias quando o componente é montado
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/siteprincipal');
  };

  const listarSolicitacoes = () => {
    axios.get('http://localhost:8080/listar-solicitacao')
      .then(res => {
        setSolicitacoes(res.data); // Atualiza o estado com os dados recebidos
      })
      .catch(err => {
        console.error("Erro ao buscar dados:", err); // Exibe erro no console se a requisição falhar
      });
  };

  // useEffect para chamar listarSolicitacoes quando o componente é montado
  useEffect(() => {
    listarSolicitacoes();
  }, []); // [] indica que o efeito só será executado uma vez após a montagem do componente

  return (
    <div className="col-xxl-4 col-md-6 container-card">
      <div className="card info-card cliente-card">
        <div className="card-body">
          <label className="card-title">
            Slide <span>| Existentes</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i><PiSlideshow /></i>
            </div>
            <div className="ps-3">
              <h6>{verLivros.length}</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card">Cadastrar</button>
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
              <h6>{verLivros.length}</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={handleCadastrarLivro}>Cadastrar</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card info-card emprestimo-card">
        <div className="card-body">
          <label className="card-title">
            Ir para <span>| Site Principal</span>
          </label>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-globe"></i>
            </div>
            <div className="ps-3">
              <h6>1</h6>
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card" onClick={handleClick}>
                  Ir
                </button>
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
              <span className="text-muted small pt-2 ps-1">
                <button className="btn-card">Responder</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="overlay" onClick={handleCloseModal}>
          <div className="formulario-cadastro" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-formulario" onClick={handleCloseModal}>
              <i className='bi bi-x'></i>
            </button>
            <h4>Formulário de Cadastro de Livro</h4>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="tituloLivro" className="form-label">Título do Livro</label>
                <input type="text" className="form-control" id="tituloLivro" value={tituloLivro} onChange={(e) => setTituloLivro(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descricaoLivro" className="form-label">Descrição</label>
                <textarea className="form-control" id="descricaoLivro" rows="3" value={descricaoLivro} onChange={(e) => setDescricaoLivro(e.target.value)}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="fotoLivro" className="form-label">Foto</label>
                <input type="file" className="form-control" accept="image/*" id="fotoLivro" onChange={(e) => setFotoLivro(e.target.files[0])} />
              </div>
              <div className="mb-3">
                <label htmlFor="livro" className="form-label">Livro (PDF)</label>
                <input type="file" className="form-control" accept=".pdf" id="livro" onChange={(e) => setLivro(e.target.files[0])} />
              </div>
              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoria</label>
                <select id="categoria" className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value="">Selecione uma categoria</option>
                  {categorias.map(c => (
                    <option key={c.id} value={c.id}>{c.nome}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
          </div>
        </div>
      )}
      {loading && <p>Enviando arquivo...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default CardPrincipal;
