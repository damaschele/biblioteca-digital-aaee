import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import SolicitacoesLista from '../Submissao/SolicitacoesLista';
import '../dashboard/dashboard.css';
import CardPrincipal from "./Cards/CardPrincipal";
import TabelaLivros from "./Cards/TabelaLivros";

function PaginaPrincipal() {
  const [livros, setLivros] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingLivro, setEditingLivro] = useState(null);

  const listarLivros = () => {
    axios.get('http://localhost:8080/listar-livros')
      .then(res => {
        setLivros(res.data);
      })
      .catch(err => {
        console.error("Erro ao buscar dados:", err);
      });
  };

  const handleEdit = (livro) => {
    setEditingLivro(livro);
    setShowModal(true);
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/remover-livros/${id}`);
      listarLivros();
    } catch (error) {
      console.error("Ocorreu um erro ao remover o livro. Por favor, tente novamente.");
    }
  };

  useEffect(() => {
    listarLivros();
  }, []);

  return (
    <section className='pagina section'>
      <div className="row poit" style={{marginTop: "-10rem"}}>
      <div className="col-lg-8">
        <CardPrincipal
          setLivros={setLivros}
          setEditingLivro={setEditingLivro}
          setShowModal={setShowModal}
          listarLivros={listarLivros}
        />

        <TabelaLivros
          livros={livros}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
        </div>
        <div className="col-lg-4">
          <SolicitacoesLista />
        </div>
      </div>
    </section>
  );
}

export default PaginaPrincipal;
