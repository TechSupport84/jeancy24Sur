import React from 'react';
import '../styles/SuccessApplication.css'; 
import { FaCheckCircle } from 'react-icons/fa'; 

function SuccessApplication() {
  return (
    <div className="success-container">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />
        <h1 className="success-title">Application Submitted!</h1>
        <p className="success-message">
          Thank you for applying! We have received your application successfully. 
          Our team will review it and get back to you shortly.
        </p>
        <button className="success-button" onClick={() => window.location.href = '/'}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default SuccessApplication;
