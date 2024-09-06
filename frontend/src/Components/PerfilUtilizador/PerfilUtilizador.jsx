import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import header from '../../assets/header-img.jpg';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './perfilUtilizador.css';

const PerfilUtilizador = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    role: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setUserData({
            username: user.username,
            email: user.email,
            role: user.role,
            password: user.password // Incluir a senha apenas se for necessário (não recomendado por segurança)
          });
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      console.error('User not found');
      return;
    }

    try {
      await axios.post('http://localhost:8080/logout', { username: user.username });
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      await axios.put('http://localhost:8080/alterar', userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Dados atualizados:', userData);
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  return (
    <>
    <Nav />
    <div className="container">
      <div className="header-imag">
        <img src={header} alt="" />
      </div>
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Perfil do Utilizador</h1>
          </div>
          <h4></h4>
          <form onSubmit={handleSubmit} className="edit-form-user">
          
            <div className="item-form">
            <div className="mb-3">
              <label className="form-label">
                Username:
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email:
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button onClick={handleLogout} className="btn btn-danger w-100"><span>Logout</span></button>
            </div>
            <div className="item-form">
            <div className="mb-3">
              <label className="form-label">
                Role:
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password:
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100"><span>Salvar Alterações</span></button>
            
            </div>
          </form>
        </main>
      </div> 
    </div>
    <div className="footer-content">
    <Footer />
    </div>
    </>
  );
};

export default PerfilUtilizador;
