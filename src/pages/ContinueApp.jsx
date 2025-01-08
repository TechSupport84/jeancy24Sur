import React from 'react';
import '../styles/ContinueApp.css';

function ContinueApp() {
  return (
    <div className="continue-app-container">
      <div className="header-screen">
        <h1>Complete Application</h1>
      </div>
      <div className="question">
        <span>Do you have a company in Marketing?</span>
      </div>
      <form className="continue-form">
        <div className="container-field">
          <label htmlFor="yes">Yes</label>
          <input type="checkbox" id="yes" name="marketing-company" />
          <label htmlFor="no">No</label>
          <input type="checkbox" id="no" name="marketing-company" />
        </div>
        <div className="business-description">
          <span>Describe any business you want or are running.</span>
          <textarea
            name="business-description"
            id="business-description"
            placeholder="Describe any"
          ></textarea>
        </div>
        <div className="confirmation">
          <label htmlFor="confirm">
            <input type="checkbox" id="confirm" />
            <span>
              For Jeancy24Sur to confirm your application, you have to pay this fee to enroll and subscribe to the company.
            </span>
          </label>
        </div>
        <div className="subscribe-button">
          <button type="submit">$50 Subscribe Now</button>
        </div>
      </form>
    </div>
  );
}

export default ContinueApp;
