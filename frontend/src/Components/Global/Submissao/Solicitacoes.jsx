import axios from 'axios';
import { useState } from 'react';
import "./solicitacoesFormularios.css";

const CriarSolicitacao = () => {
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [arquivo, setArquivo] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleFileChange = (event) => {
    setArquivo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('autor', autor);
    formData.append('titulo', titulo);
    formData.append('conteudo', conteudo);
    formData.append('arquivo', arquivo);

    try {
      await axios.post('http://localhost:8080/criar-solicitacao', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMensagem('Solicitação criada com sucesso.');
      setAutor('');
      setTitulo('');
      setConteudo('');
      setArquivo(null);
    } catch (error) {
      console.error('Erro ao criar solicitação:', error);
      setMensagem('Erro ao criar solicitação.');
    }
  };

  return (
    <div>
      <h2>Criar Solicitação</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Autor:
          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
        </label>
        <br />
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </label>
        <br />
        <label>
          Conteúdo:
          <textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} required />
        </label>
        <br />
        <label>
          Arquivo:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <br />
        <button type="submit">Enviar Solicitação</button>
      </form>
    </div>
  );
};

export default CriarSolicitacao;
