import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/aaee.png';
import "./login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', { username, password });
      console.log('Login response:', response.data); // Adiciona um log para verificar a estrutura da resposta
      const { token, role, user } = response.data;

      if (!token || !role || !user) {
        setMessage('Dados de resposta inválidos');
        console.error('Dados de resposta inválidos:', response.data);
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User data stored:', user);

      if (role === "admin") {
        navigate("/dashboardprincipal");
      } else if(role === "Estudante" || role === "Funcionario"){
        navigate("/siteprincipal");
      } else {
        navigate("/naoautorizado");
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMessage('Credenciais inválidas');
    }
  };

  return (
    <div className='container container_login'>
      <div className="login">
        <div className="login_imag">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login-container">
          <h2>Login</h2>
          {message && <p className="error-message">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <button type="submit" className='button'>Login</button>
            </div>
            <div className='register-link'>
              Don't have an account? <a href="/register">Register here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
