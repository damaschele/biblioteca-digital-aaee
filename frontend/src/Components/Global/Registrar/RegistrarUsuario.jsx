import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import './registarUsuario.css';

function RegistrarUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    password: '',
    role: ''
  });

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

  const handleShowAll = () => {
    setShowAll(true);
  }

  const handleAlterar = (usuario) => {
    setSelectedUser(usuario);
    setShowEditForm(true);
  }

  const handleRemover = (codigo) => {
    const confirmarRemover = window.confirm("Tem certeza que deseja remover este usuário?");
    if (confirmarRemover) {
      axios.delete(`http://localhost:8080/remover/${codigo}`)
        .then(res => {
          setMessage("Usuário removido com sucesso", res.data);
          fetchData();
        })
        .catch(error => {
          console.error('Erro ao remover usuário:', error);
        });
    }
  }

  const handleEditar = () => {
    axios.put(`http://localhost:8080/alterar`, selectedUser)
      .then(res => {
        setMessage("Usuário alterado com sucesso", res.data);
        fetchData();
      })
      .catch(error => {
        console.error('Erro ao alterar usuário:', error);
      });
  }

  const handleAdicionar = () => {
    axios.post(`http://localhost:8080/cadastrar`, newUser)
      .then(res => {
        setMessage("Usuário adicionado com sucesso", res.data);
        fetchData();
        setShowAddForm(false);
        setNewUser({
          email: '',
          username: '',
          password: '',
          role: ''
        });
      })
      .catch(error => {
        console.error('Erro ao adicionar usuário:', error);
      });
  }

  return (
    <>
      <div className="registrar">
        <div className="card info-card cliente-card">
          <div className="card-body">
            <label className="card-title">
              Utilizadores <span>| Existentes</span>
            </label>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-person"></i>
              </div>
              <div className="ps-3">
                <h6>
                  {usuarios.length}
                </h6>
                <span className="text-muted small pt-2 ps-1">
                  <button className="btn-card" onClick={() => setShowAddForm(true)}><AiOutlinePlus /></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabela-register">
        {message && <div className="message">{message}</div>}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Nome do utilizador</th>
              <th>Senha</th>
              <th>Perfil</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={usuario.id} style={selectedUser === usuario ? { backgroundColor: 'lightgreen' } : null}>
                <td>{index + 1}</td>
                <td>{usuario.email}</td>
                <td>{usuario.username}</td>
                <td>{usuario.password}</td>
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
            <input type="email" required value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
            <input type="text" required value={selectedUser.username} onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })} />
            <input type="password" required value={selectedUser.password} onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })} />
            <input type="text" required value={selectedUser.role} onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })} />
            <button onClick={handleEditar} className='btn-alterar'>Salvar</button>
          </div>
        )}
        {showAddForm && (
          <div className="add-form">
            <div className="close-icon" onClick={() => setShowAddForm(false)}>
              <IoMdClose />
            </div>
            <h5>Adicionar Utilizador</h5>
            <input type="email" required value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="Email" />
            <input type="text" required value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} placeholder="Nome" />
            <input type="password" required value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} placeholder="Senha" />
            <input type="text" required value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} placeholder="Papel" />
            <button onClick={handleAdicionar} className='btn-adicionar'>Adicionar</button>
          </div>
        )}
      </div>
    </>
  )
}

export default RegistrarUsuario;
