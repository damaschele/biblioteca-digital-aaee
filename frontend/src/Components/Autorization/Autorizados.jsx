import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Autorizados.css';

export default function Autorizados() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifique se o usuário tem privilégios
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.role !== 'default') {
      navigate('/');
    } else {
      setUser(userData);
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="autorizados-container">
      <h1>Bem-vindo, {user.name}!</h1>
      <p>
        Você ainda não possui privilégios completos sobre o sistema. 
        Entre em contato com o administrador para mais informações.
      </p>
      <button className="contact-button">Contactar Administrador</button>
    </div>
  );
}
