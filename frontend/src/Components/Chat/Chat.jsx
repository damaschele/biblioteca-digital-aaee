import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
const Chat = ({ selectedUser }) => {
  const { userId } = useParams();
  const [mensagens, setMensagens] = useState([]);
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');

  useEffect(() => {
    const fetchMensagens = async () => {
      const response = await axios.get(`http://localhost:8080/mensagens/${userId}`);
      setMensagens(response.data);
    };
    fetchMensagens();
  }, [userId]);

  const enviarMensagem = async (e) => {
    e.preventDefault();
    const mensagem = { autor, conteudo, timestamp: new Date().toISOString(), destinatario: userId };
    await axios.post('http://localhost:8080/mensagens', mensagem);
    setMensagens([...mensagens, mensagem]);
    setConteudo('');
  };

  return (
    <div>
      <div className="mensagens">
        {mensagens.map((msg, index) => (
          <div key={index}>
            <strong>{msg.autor}:</strong> {msg.conteudo}
          </div>
        ))}
      </div>
      <form onSubmit={enviarMensagem}>
        <input 
          type="text" 
          value={autor} 
          onChange={(e) => setAutor(e.target.value)} 
          placeholder="Seu nome" 
          required 
        />
        <input 
          type="text" 
          value={conteudo} 
          onChange={(e) => setConteudo(e.target.value)} 
          placeholder="Digite sua mensagem" 
          required 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
