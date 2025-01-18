import React, { useState } from 'react';
import '../styles/Login.css';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    if (!email || !password) {
      return setError('Both email and password are required!');
    }

    try {
      await login(email, password);
      console.log('Login successful:', email);
      navigate('/');  // Navigate to home page after login success
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>} 
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="auth-link-container">
        <p className="auth-link-text">Don't have an account?</p>
        <Link to="/Register" className="auth-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
