import axios from 'axios'; // Certifique-se de importar axios
import { useState } from 'react';
import './solicitacoesFormularios.css';

// eslint-disable-next-line react/prop-types
const SolicitacaoFormulario = ({ onClose }) => {
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [conteudo, setConteudo] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleFileChange = (event) => {
    setConteudo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('autor', autor);
    formData.append('titulo', titulo);
    formData.append('categoria', categoria);
    formData.append('conteudo', conteudo);

    try {
      await axios.post('http://localhost:8080/criar-solicitacao', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setAutor('');
      setTitulo('');
      setCategoria('');
      setConteudo(null);
      onClose(); // Fechar o formulário após o envio bem-sucedido
    } catch (error) {
      console.error('Erro ao criar solicitação:', error);
      setMensagem('Erro ao criar solicitação.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="solicitacao-formulario">
        <h5>Formulário de Solicitação</h5>
        {mensagem && (
          <p className={mensagem.includes('sucesso') ? 'mensagem-sucesso' : 'mensagem-erro'}>
            {mensagem}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            Autor:
            <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
          </label>
          <label>
            Título:
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </label>
          <label className='categoria'>
            Categoria:
            <select name="categoria" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
              <option value="">Selecione uma categoria</option>
              <option value="Artigos Científicos">Artigos Científicos</option>
              <option value="Palestra">Palestra</option>
              <option value="Projectos de Pesquisa">Projectos de Pesquisa</option>
              <option value="Jornadas Científicas">Jornadas Científicas</option>
            </select>
          </label>
          <label>
            Conteúdo:
            <input type="file" onChange={handleFileChange} required />
          </label>
          <button type="submit">Enviar Solicitação</button>
        </form>
      </div>
    </div>
  );
};

export default SolicitacaoFormulario;
