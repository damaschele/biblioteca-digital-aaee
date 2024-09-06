import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './detalhesLivros.css'; // Arquivo CSS para personalizações adicionais

function DetalhesLivros() {
  const { id } = useParams();
  const [livroEsperado, setLivro] = useState(null);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/livros-detalhes/${id}`);
        setLivro(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do livro:', error);
      }
    };

    fetchLivro();
  }, [id]);

  if (!livroEsperado) {
    return <p>Carregando...</p>;
  }

  const imagemUrl = `http://localhost:8080/files/${livroEsperado.foto}`;
  const manualUrl = `http://localhost:8080/files/${livroEsperado.livro}`;

  const abrirManual = () => {
    if (livroEsperado.livro) {
      window.open(manualUrl, '_blank');
    } else {
      alert('Manual não disponível.');
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={imagemUrl} alt={livroEsperado.titulo} className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{livroEsperado.titulo}</h2>
            <p className="mb-3"><strong>Autor:</strong> {livroEsperado.autor}</p>
            <p className="mb-4"><strong>Descrição:</strong> {livroEsperado.descricao}</p>
            <button className="btn btn-primary btn-lg" onClick={abrirManual}>Ler Online</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetalhesLivros;
