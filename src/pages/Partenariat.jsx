import React, { useEffect, useState } from 'react';
import ButtonAction from '../components/ButtonAction';
import { BiUpArrowCircle } from 'react-icons/bi';
import '../styles/Partenariat.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../screens/Api_Url';
import axios from 'axios';

function Partenariat() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bussinessDomain ,setBussinessDomain] = useState("")
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("")
  const [error, setError]  =useState("");

  

  const handleCreatePartenariat =async(e)=>{
    e.preventDefault();
    try {
      
      if(!username ||!email ||!bussinessDomain ||!goal)
      {
        return setError("All  fields are required to continue ")
      }
      await axios.post(`${API_URL}/partenariat/create`,{
        username,
        email,
        bussinessDomain,
        goal
      })
      setUsername("");
      setEmail("");
      setBussinessDomain("");
      setGoal("")
      setMessage('Thank you, your Demand to be on of our partner  has been placed successfully. One of our Customer support will contact you shortly via your email.');
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setMessage('');
    }
  }

  const handleInputChange = () => {
    if (error) setError('');
    if (message) setMessage(''); // Clear message when the user starts typing again
  };
  return (
    <div className="partenariat-container">
      <div className="header-screen">
        <h1 className="title">Partenariat</h1>
      </div>
      <span className="subtitle">Want to become Jeancy24Sur's Partner?</span>

      <form className="partenariat-form" onSubmit={handleCreatePartenariat}>

      {message && (
          <div className="success-message">
            <span>{message}</span>
          </div>
        )}
        
        <div className="input-group">
        <input type="text" placeholder="Your name"  value={username}  onChange={(e)=>{setUsername(e.target.value), handleInputChange()}}/>
          <input type="email" placeholder="Your email address" value={email} onChange={(e)=>{ setEmail(e.target.value), handleInputChange();}} />
        
        </div>
        <div className="input-group">
          <input type="text" placeholder="What is your business domain?" value={bussinessDomain} onChange={(e)=>{setBussinessDomain(e.target.value), handleInputChange()}}/>
          <input type="text" placeholder="Why do you want to join Jeancy24Sur?" value={goal} onChange={(e)=>{setGoal(e.target.value), handleInputChange()}} />
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <div className="button-arrow">
          <ButtonAction title="Confirm " />
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
