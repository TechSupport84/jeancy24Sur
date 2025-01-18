import React, { useState } from 'react';
import ButtonAction from '../components/ButtonAction';
import "../styles/GetWeb.css";
import BackArrowButton from '../components/BackArrowButton';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../screens/Api_Url';
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function GetWeb() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [siteName, setSiteName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { user, token } = useAuth();
  const [error, setError] = useState('');

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
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = () => {
    if (error) setError(''); // Clear error when user starts typing again
  };

  return (
    <div className="get-web-container">
      <div className="header-screen">
        <BackArrowButton onClick={() => navigate('/')} />
        <h1>Get Web</h1>
        <div className="ads"></div>
      </div>

      <form className="get-web-form" onSubmit={handledCreateCommand}>
        <div className="two-left-input">
          <input
            type="text"
            value={siteName}
            onChange={(e) => {
              setSiteName(e.target.value);
              handleInputChange();
            }}
            placeholder="Site name"
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
            placeholder="Describe your site content."
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

export default GetWeb;
