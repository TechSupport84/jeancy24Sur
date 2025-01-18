import React from 'react';
import "../styles/NavBar.css";
import { useNavigate } from 'react-router-dom';
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
        {user && (
       <li className="nav-item">
          <a href="#" className="username-link">{user.username}</a>
        </li>
      )}

          <li><a href='contact'>Contact Us</a></li>
          {user || token ? ( // Check if the user is logged in or if a token exists
            <>
              <li><a href='/logout' onClick={handleLogout}>Logout</a></li>
            </>
          ) : (
            <li><a href='/Login'>Login</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
