import React, { useState } from 'react';
import ButtonAction from '../components/ButtonAction';
import "../styles/GetMobile.css";
import BackArrowButton from '../components/BackArrowButton';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../screens/Api_Url';
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function GetMobile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [siteName, setSiteName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { user, token } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value); // This is the correct way to handle selection change
  };

  const handledCreateCommand = async (e) => {
    e.preventDefault();
    try {
      if (!username || !email || !description || !siteName) {
        return setError('All fields are required.');
      }
      await axios.post(
        `${API_URL}/order/create`,
        {
          username,
          email,
          description,
          siteName,
          siteDomain: selectedOption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsername("");
      setEmail(" ");
      setDescription("");
      setSiteName(" ");
      setSelectedOption(" ");
      console.log('Order created!');
      setMessage('Thank you, your command has been placed successfully. One of our Customer support will contact you shortly.');
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setMessage(''); 
    }
  };

  const handleInputChange = () => {
    if (error) setError('');
    if (message) setMessage('');  // Clear error when user starts typing again
  };

  return (
    <div className="get-web-container">
      <div className="header-screen">
        <BackArrowButton onClick={() => navigate('/')} />
        <h1>Pay and get a Mobile App </h1>
        <div className="ads"></div>
      </div>

      <form className="get-web-form" onSubmit={handledCreateCommand}>
      {message && (
          <div className="success-message">
            <span>{message}</span>
          </div>
        )}
        <div className="two-left-input">
          <input
            type="text"
            value={siteName}
            onChange={(e) => {
              setSiteName(e.target.value);
              handleInputChange();
            }}
            placeholder="Your App Name  "
          />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
            placeholder="Your email"
          />
        </div>

        <div className="two-middle-input">
          <textarea
            placeholder="Describe your Mobile App ."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              handleInputChange();
            }}
          />
          <div className="checkbox-group">
            <label htmlFor="domain-selection">Do you have a domain?</label>
            <select
              id="domain-selection"
              value={selectedOption}
              onChange={handleSelectionChange} 
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="two-middle-input">
          <div className="two-left-input">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
              placeholder="Type your Username"
            />
          </div>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <div className="policy-content">
          <input type="checkbox" id="policy" />
          <span>
            Once you finish your order, one of our agents will reach out to you.
          </span>
        </div>

        <ButtonAction title="Confirm Now" />
      </form>
    </div>
  );
}

export default GetMobile;
