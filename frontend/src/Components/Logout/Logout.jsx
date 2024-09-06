/* eslint-disable react/prop-types */
import axios from 'axios';
import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './logout.css';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username'); 

    console.log(username)

    if (token && username) {
      axios.post('http://localhost:8080/logout', { username }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('Logout bem-sucedido:', response.data);
        onLogout();  // Chame a função de recarregamento aqui
      })
      .catch(error => {
        console.error('Erro ao fazer logout:', error);
      });
    }

    // Limpar os dados do localStorage
    // localStorage.removeItem('token');
    // localStorage.removeItem('role');
    // localStorage.removeItem('username');

    // Redirecionar para a página de login
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className='logout-button btn-primary'>
      <span><i><BiLogOutCircle /></i></span>
    </button>
  );
}

export default Logout;
