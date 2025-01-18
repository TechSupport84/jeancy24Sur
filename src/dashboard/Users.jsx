import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { API_URL } from '../screens/Api_Url';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import '../styles/Users.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Users() {
  const [users, setUsers] = useState([]);
  const { user, token } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        setError('Error occurred');
      }
    };

    getUsers();
  }, [token]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/auth/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      setError('Error occurred while deleting user');
    }
  };

  // Calculate user statistics
  const totalUsers = users.length;
  const roleStats = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const chartData = {
    labels: Object.keys(roleStats),
    datasets: [
      {
        data: Object.values(roleStats),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Customize colors as needed
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h1>Users</h1>
      {error && <p className="error">{error}</p>}
      <p>Total Users: {totalUsers}</p>
      <div className="role-stats">
        {Object.entries(roleStats).map(([role, count]) => (
          <p key={role}>
            {role.charAt(0).toUpperCase() + role.slice(1)}: {count}
          </p>
        ))}
      </div>
      {user.role === 'admin' && (
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Country</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
    </div>
  );
}

export default Users;
