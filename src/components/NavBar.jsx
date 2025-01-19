import React from 'react';
import "../styles/NavBar.css";
import { useNavigate, Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FaComments } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <header>
      <nav className='nav-container'>
        <div className="logo" onClick={() => navigate("/")}>
          <img src='/jeancy24Sur.com.png' alt='Logo' />
          <span className='four-two'>24/24h</span>
        </div>

        <ul className='middle-item'>
          <li><a href='/'>Service</a></li>
          <li><a href='/partenariat'>Partenariat</a></li>
        </ul>

        <ul className='left-item'>
          {user && user.role === "admin" && (
            <li><a href='/Dashboard'>Dashboard</a></li>
          )}
        </ul>

        <ul className='right-item'>
          {user && (
            <>
              <li className="nav-item">
                <a href="#" className="username-link">Hello, {user.username} !</a>
              </li>

            </>
          )}
            <li className='nav-item'>
             <Link to="/forum" >
              <FaComments className="forum-icon" /> Forum
              </Link>
              </li>
          {user || token ? (
            <li><a href='/logout' onClick={handleLogout}>Logout</a></li>
          ) : (
            <li><a href='/Login'>Login</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
