import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCheck, FaFileAlt, FaTimes } from 'react-icons/fa';
import './solicitacoesLista.css'; // Importar o arquivo CSS

const SolicitacoesLista = () => {
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

  const handleAprovar = async (id) => {
    try {
      await axios.post(`http://localhost:8080/${id}/aceitar`);
      const updatedSolicitacoes = solicitacoes.map((solicitacao) => {
        if (solicitacao.id === id) {
          return { ...solicitacao, status: 'ACEITO' };
        }
        return solicitacao;
      });
      setSolicitacoes(updatedSolicitacoes);
    } catch (error) {
      console.error('Erro ao aprovar solicitação:', error);
    }
  };

  const handleRejeitar = async (id) => {
    try {
      await axios.post(`http://localhost:8080/${id}/rejeitar`);
      const updatedSolicitacoes = solicitacoes.map((solicitacao) => {
        if (solicitacao.id === id) {
          return { ...solicitacao, status: 'REJEITADO' };
        }
        return solicitacao;
      });
      setSolicitacoes(updatedSolicitacoes);
    } catch (error) {
      console.error('Erro ao rejeitar solicitação:', error);
    }
  };

  const handleVerDocumento = (conteudo) => {
    window.open(`http://localhost:8080/files/${conteudo}`, '_blank'); // Abrir o conteúdo em uma nova guia
  };

  return (
    <div className="solicitacoes-lista"> {/* Adicionando a classe CSS */}
      <h2>Lista de Submissão de Artigos</h2>
      <ul>
        {solicitacoes.map((solicitacao) => (
          <li key={solicitacao.id}>
            <div>
              <strong>Autor:</strong> {solicitacao.autor}
            </div>
            <div>
              <strong>Título:</strong> {solicitacao.titulo}
            </div>
            <div>
              <strong>Categoria:</strong> {solicitacao.categoria}
            </div>
            <div>
              <strong>Status:</strong> {solicitacao.status}
            </div>
            {solicitacao.status === 'PENDENTE' && (
              <div className='buttons'>
                <button className="aprovar" onClick={() => handleAprovar(solicitacao.id)}>
                  <FaCheck className="icon" /> Aprovar
                </button>
                
                <button className="ver-documento" onClick={() => handleVerDocumento(solicitacao.conteudo)}>
                  <FaFileAlt className="icon" /> Ver Documento
                </button>

                <button className="rejeitar" onClick={() => handleRejeitar(solicitacao.id)}>
                  <FaTimes className="icon" /> Rejeitar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolicitacoesLista;
