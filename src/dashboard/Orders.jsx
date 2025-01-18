import React, { useEffect, useState } from 'react';
import { API_URL } from '../screens/Api_Url';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import '../styles/Orders.css'; // Add custom styles for table

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user, token } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const getOrders = async () => {
      try {
        await axios
          .get(`${API_URL}/order/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setOrders(response.data.orders);
            console.log(response.data);
          });
      } catch (error) {
        setError('Error occurred');
      }
    };

    getOrders();
  }, [token]);

  return (
    <div className="orders-container">
      <h1>Orders</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Description</th>
            <th>Site Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6">No orders available</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.username}</td>
                <td>{order.email}</td>
                <td>{order.description}</td>
                <td>{order.siteName || 'N/A'}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
