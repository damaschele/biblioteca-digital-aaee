import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./tabela.css";

function Tabela() {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [perfil, setPerfil] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:8080/listar')
      .then(res => {
        setUsuarios(res.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAlterar = (usuario) => {
    setSelectedUser(usuario);
    setShowEditForm(true);
  }

  const perflUsuario = () => {
    axios.get('http://localhost:8080/listar-perfil')
      .then(res => {
        setPerfil(res.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }

  useEffect(() => {
    perflUsuario();
  }, []);

  const handleRemover = (codigo) => {
    const confirmarRemover = window.confirm("Tem certeza que deseja remover este usuário?");
    if (confirmarRemover) {
      axios.delete(`http://localhost:8080/remover/${codigo}`)
        .then(res => {
          setMessage("Usuário removido com sucesso");
          fetchData();
        })
        .catch(error => {
          console.error('Erro ao remover usuário:', error);
        });
    }
  }

  const handleEditar = () => {
    console.log('Dados a serem enviados para alteração:', selectedUser);

    axios.put(`http://localhost:8080/alterar`, selectedUser)
      .then(res => {
        console.log('Resposta da alteração:', res.data);
        setMessage("Usuário alterado com sucesso");
        setShowEditForm(false);
        fetchData();
      })
      .catch(error => {
        console.error('Erro ao alterar usuário:', error);
      });
  }

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    console.log('Role selecionado:', newRole);
    setSelectedUser((prevUser) => ({
      ...prevUser,
      role: newRole
    }));
    console.log('Estado de selectedUser após atualização:', { ...selectedUser, role: newRole });
  };

  return (
    <>
      <div className="registrar">
      </div>
      <div className="tabela-register">
        {message && <div className="message">{message}</div>}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Nome do utilizador</th>
              <th>Nome Completo</th>
              <th>Perfil</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={usuario.id} style={selectedUser === usuario ? { backgroundColor: 'lightgreen' } : null}>
                <td>{index + 1}</td>
                <td>{usuario.email}</td>
                <td>{usuario.username}</td>
                <td>{usuario.firstName} {usuario.lastName}</td>
                <td>{usuario.role}</td>
                <td className='acao'>
                  <button onClick={() => handleAlterar(usuario)} className='editar'><MdEditNote /></button>
                  <button onClick={() => handleRemover(usuario.codigo)} className='remover'><RiDeleteBin5Line /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showEditForm && selectedUser && (
          <div className="edit-form">
            <div className="close-icon" onClick={() => setShowEditForm(false)}>
              <IoMdClose />
            </div>
            <h5>Editar Utilizador</h5>

            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                required
                value={selectedUser.firstName || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                required
                value={selectedUser.lastName || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                value={selectedUser.email || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                value={selectedUser.username || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                value={selectedUser.password || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                required
                onChange={(e) => setSelectedUser({ ...selectedUser, confirmPassword: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                value={selectedUser.phone || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                required
                value={selectedUser.role || ''}
                onChange={handleRoleChange}
              >
                {perfil.map((perfis) => (
                  <option key={perfis.id} value={perfis.nome}>
                    {perfis.nome}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={handleEditar} className='btn-alterar'>Salvar</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Tabela;
