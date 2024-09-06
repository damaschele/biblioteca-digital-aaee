import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/2a.jpg';
import "../Artigos/tableDocumento.css";

const documentos = [
  {
    dataPublicacao: '2024-05-26',
    tema: 'Guerra Cibernética em Moçambique: Desafios e Perspectivas',
    autor: 'William Fazil e Frank Guimarães',
    tipoDocumento: 'Artigo Científico',
    linkDocumento: '/pdfs/O uso.pdf'
  },
  {
    dataPublicacao: '2023-10-26',
    tema: 'O Nascimento de uma nova Jihad Virtual, Realidade ou Ficçao?',
    autor: 'António, Almeida José',
    tipoDocumento: 'Artigo Científico',
    linkDocumento: '/pdfs/Guerra.pdf'
  },
  {
    dataPublicacao: '2022-10-11',
    tema: 'História da Segurança de Moçambique',
    autor: 'Nunes, Carlos Miguel',
    tipoDocumento: 'Palestra',
    linkDocumento: '/pdfs/Palestra.pdf'
  },
  {
    dataPublicacao: '2023-10-11',
    tema: 'O uso do Ciberespaço para a obtençao do Poder no Cenário Internacional durante o Inicio do seculo XXXI',
    autor: 'Chele, Damas Alfredo',
    tipoDocumento: 'Artigo Cientifico',
    linkDocumento: '/pdfs/O uso.pdf'
  },
  {
    dataPublicacao: '2024-10-11',
    tema: 'Guerra no Ciberespaço: Preparo e emprego do Exército ',
    autor: 'Pinto, Nelson Pedro',
    tipoDocumento: 'Projecto de Pesquisa',
    linkDocumento: '/pdfs/Guerra.pdf'
  },
  {
    dataPublicacao: '2022-10-11',
    tema: 'Terroristas e Internet: Novas ameaças do século XXI',
    autor: 'Quimbine, Crispen Gabriel',
    tipoDocumento: 'Projecto de Pesquisa',
    linkDocumento: '/pdfs/Terroristas.pdf'
  },
  {
    dataPublicacao: '2022-10-11',
    tema: 'Da Espionagem a Ciberespionagem: Um novo campo de Batalha',
    autor: 'António, Almeida José',
    tipoDocumento: 'Artigo Cientifico',
    linkDocumento: '/pdfs/Espionagem.pdf'
  },
];

// Função para remover acentos
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const TabelaDocumentos = () => {
  //const navigate = useNavigate();
  const [documentoSelecionado, setDocumentoSelecionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDocumentoClick = (documentoIndex) => {
    setDocumentoSelecionado(documentoIndex);
  };

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

  const filteredDocuments = documentos.filter((documento) =>
    removeAccents(documento.tema.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
    removeAccents(documento.autor.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
    removeAccents(documento.dataPublicacao.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
    removeAccents(documento.tipoDocumento.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
  );
  return (
    <div className="container">

      <div className="container-image-bg ">
      <h3 className="titulo-tabela">Repositório de Estudos Científicos</h3>
  <p>
    O Repositório de Estudos Científicos é uma plataforma dedicada à divulgação e partilha de 
    <br></br>documentos científicos e pesquisas. Aqui, você encontrará uma ampla variedade de estudos 
    <br></br>abordando diversos temas, desde ciência e tecnologia até ciências sociais e humanidades.
  </p>
            <img src={bg} alt="" />
      </div>
      
      <div className="text-center">    
        <div className="input-group mb-5">
          <input
            type="text"
            className="search-bar" 
            placeholder="Buscar no Repositório..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover custom-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Data de Publicação</th>
              <th scope="col">Tema</th>
              <th scope="col">Autor</th>
              <th scope="col">Tipo de Documento</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((documento, index) => (
                <tr key={index} onClick={() => handleDocumentoClick(index)}>
                  <td>{documento.dataPublicacao}</td>
                  <td>
                    <Link to="#">
                      {documento.tema}
                    </Link>
                  </td>
                  <td>{documento.autor}</td>
                  <td>{documento.tipoDocumento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-results">Ficheiro não encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {documentoSelecionado !== null && (
        <div className="modal-backdrop fade show" />
      )}
      {documentoSelecionado !== null && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="div title-content">
                <h5 className="modal-title">{documentos[documentoSelecionado].tema}</h5>
                </div>
                <button type="button" className="close" aria-label="Close" onClick={() => setDocumentoSelecionado(null)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className='model-body-card'>
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                      fileUrl={documentos[documentoSelecionado].linkDocumento}
                      onContextMenu={(event) => {
                        event.preventDefault();
                      }}
                    />
                  </Worker>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="mt-5 pt-3 border-top">
        <div className="footer-text d-flex justify-content-end">
          <span>Sistema Integrado de Repositórios da AAEE</span>
        </div>
      </footer>
    </div>
  );
};

export default TabelaDocumentos;