/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './ActiveUsersList.css'; // Create this CSS file for styling

const ActiveUsersList = ({ refreshTrigger }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActiveUsers = () => {
    setLoading(true);
    fetch('http://localhost:8080/usuarios-ativos')
      .then(response => response.json())
      .then(data => {
        setActiveUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching active users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchActiveUsers();
  }, [refreshTrigger]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="active-users-list">
      <h4>Utilizadores Activos</h4>
      <ul>
        {activeUsers.map(user => (
          <li key={user.codigo}>
            <span className="active-dot"></span>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsersList;
