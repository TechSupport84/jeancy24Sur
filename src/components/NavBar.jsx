import React from 'react';
import "../styles/NavBar.css";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()
  return (
    <header>
      <nav className='nav-container'>
        <div className="logo" onClick={()=>navigate("/")}>
          <img src='/jeancy24Sur.com.png' alt='Logo' />
          <span className='four-two'>24/24h</span>
        </div>
 
        <ul className='middle-item'>
          <li><a href='/'>Service</a></li>
          <li><a href='/partenariat'>Partenariat</a></li>
        </ul>
        <ul className='left-item'>
          <li><a href='contact'>Contact Us</a></li>
          <li><a href='/Register'>Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

