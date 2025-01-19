import React from 'react';
import ButtonAction from '../components/ButtonAction';
import { BiUpArrowCircle } from 'react-icons/bi';
import '../styles/Partenariat.css';
import { useNavigate } from 'react-router-dom';

function Partenariat() {
  const navigate = useNavigate();
  
  return (
    <div className="partenariat-container">
      <div className="header-screen">
        <h1 className="title">Partenariat</h1>
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
          <ButtonAction title="Confirm " onClick={() => navigate("/continueApp")} />
          <BiUpArrowCircle className="arrow-icon" />
        </div>
      </form>

      <div className="panel-container">
        <div className="panel">
          <h2>Why Partner with Jeancy24Sur?</h2>
          <p>Join us to unlock numerous business opportunities, grow your brand, and reach a wider audience.</p>
        </div>
      </div>

      <div className="ads-container">
        <div className="ad-banner ad-banner-1">
          <h3>Promote Your Business with Us!</h3>
        </div>
        <div className="ad-banner ad-banner-2">
          <h3>Exclusive Offers for Partners</h3>
        </div>
      </div>
    </div>
  );
}

export default Partenariat;
