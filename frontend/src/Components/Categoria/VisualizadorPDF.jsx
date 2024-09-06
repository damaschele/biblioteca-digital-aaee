import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import infodir from './CatImagens/Dir/info';
import eco from './CatImagens/Economia/econo';
import ciber from './CatImagens/informatica/cib';

// Categorias
const categoriasInformatica = ciber.cib;
const categoriasDireito = infodir.info;
const categoriasEconomia = eco.econo;

// Listagem de todos os livros com IDs formatados corretamente
const allBooks = [
  ...categoriasDireito.map((livro, index) => ({ ...livro, id: `direito_${index}` })),
  ...categoriasInformatica.map((livro, index) => ({ ...livro, id: `informatica_${index}` })),
  ...categoriasEconomia.map((livro, index) => ({ ...livro, id: `economia_${index}` }))
];

const VisualizadorPDF = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar o livro correspondente ao ID
  const livro = allBooks.find(book => book.id === id);

  // Prevenir cópia de texto e colagem
  useEffect(() => {
    const handleCopyPaste = (event) => {
      event.preventDefault();
      alert('A cópia de texto está desativada.');
    };

    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);

    return () => {
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
    };
  }, []);

  if (!livro) {
    return <div style={{ marginTop: '5rem', textAlign: 'center' }}>Livro não encontrado</div>;
  }

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="d-flex flex-row align-items-start">
        <AiOutlineArrowLeft onClick={() => navigate(-1)} className="back-arrow" /> {/* Ícone de seta para voltar */}
        <div style={{ width: '100%', height: '100vh', userSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={`http://localhost:8080/files/${livro.pdfUrl}`} />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default VisualizadorPDF;
