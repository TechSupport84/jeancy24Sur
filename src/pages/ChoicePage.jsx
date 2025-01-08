import React from 'react';
import '../styles/ChoicePage.css';
import ButtonAction from '../components/ButtonAction';
import { useNavigate } from 'react-router-dom';

function ShoicePage() {
  const navigate = useNavigate();
  return (
    <div className="choice-page-container">
      <div className="header-screen">
        <h1>Choice</h1>
        <div className="ads">
          <span>Change your life, your business now!</span>
        </div>
        <div className="container-question">
          <span>Want to get one of our services?</span>

          <div className="button-container">
            <ButtonAction title={"Get Web"} onClick={() => navigate("/getWeb")} />
          </div>
          <div className="separator"></div>
          <div className="button-container">
            <ButtonAction title={"Get Mobile"} onClick={() => navigate("/getMobile")} />
          </div>
          <div className="separator"></div>
          <div className="button-container">
            <ButtonAction title={"Get E-commerce"} onClick={() => navigate("/getEcommerce")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoicePage;
