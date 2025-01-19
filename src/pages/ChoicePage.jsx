import React from 'react';
import '../styles/ChoicePage.css';
import ButtonAction from '../components/ButtonAction';
import { useNavigate } from 'react-router-dom';
import CustomerSupportPage from '../helpers/CustomerSupportPage';

function ShoicePage() {
  const navigate = useNavigate();
  return (
    <div className="choice-page-container">
      <div className="header-screen">
        <h1>Choice</h1>

        <div className="ads">
          <div className="ad-slide">
            <span>Change your life, your business now!</span>
          </div>
          <div className="ad-slide">
            <span>Boost your online presence today!</span>
          </div>
          <div className="ad-slide">
            <span>Join the digital revolution with our services!</span>
          </div>
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
