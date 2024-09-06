import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const UserList = ({ setSelectedUser }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await axios.get('http://localhost:8080/usuarios-ativos');
      setUsuarios(response.data);
    };
    fetchUsuarios();
  }, []);

  return (
    <div className="user-list">
      <h3>Usuários Ativos</h3>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            <Link to={`/chat/${user.id}`} onClick={() => setSelectedUser(user)}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
