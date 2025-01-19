import React from 'react';
import '../styles/Footer.css'; // Make sure to create and link the CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content right-content">
        Get Services from <a href='www.jeancy24sur.com'> www.jeancy24Sur.com</a> 
      </div>
      <div className="footer-content middle-content">
        Contact Us: <a href='mailto:trainingtech84@gmail.com'>Email</a>
      </div>
      <div className="footer-content left-content">
        @2025 powered by jeancy24Sur.com LLC
      </div>
    </footer>
  );
}

export default Footer;
