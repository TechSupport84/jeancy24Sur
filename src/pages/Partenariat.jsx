import React from 'react';
import ButtonAction from '../components/ButtonAction';
import { BiUpArrowCircle } from 'react-icons/bi';
import '../styles/Partenariat.css';
import { useNavigate } from 'react-router-dom';

function Partenariat() {
    const navigate = useNavigate()
  return (
    <div className="partenariat-container">
      <div className="header-screen">
        <h1>Partenariat</h1>
      </div>
      <span className="subtitle">Want to become Jeancy24Sur's Partner?</span>

      <form className="partenariat-form">
        <div className="input-group">
          <input type="email" placeholder="Your email address" />
          <input type="text" placeholder="Your name" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="What is your business domain?" />
          <input type="text" placeholder="Why do you want to join Jeancy24Sur?" />
        </div>
        <div className="button-arrow">
          <ButtonAction title="Continue" onClick={()=>navigate("/continueApp")} />
          <BiUpArrowCircle className="arrow-icon" />
        </div>
      </form>
    </div>
  );
}

export default Partenariat;
