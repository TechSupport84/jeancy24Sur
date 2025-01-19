import React from 'react';
import GoogleAd from '../app/GoogleAd';
import '../styles/Application.css';

function Application() {
  return (
    <div className="application-container">
      <main className="application-content">
        <section className="application-details">
          <h2>Application Details</h2>
          <p>Welcome to the application section. Here, you can find various details about the application process and other relevant information.</p>
        </section>
        
        <section className="application-form">
          <h2>Apply Now</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="education-field">Education Field</label>
              <select id="education-field" name="education-field" required>
                <option value="">Select your education field</option>
                <option value="computer-science">Computer Science</option>
                <option value="software-development">Software Development</option>
                <option value="information-technology">Information Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="programming-languages">Programming Languages</label>
              <select id="programming-languages" name="programming-languages" multiple required>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c++">C++</option>
                <option value="php">PHP</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cv">Upload CV</label>
              <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="form-group">
              <label htmlFor="cover-letter">Upload Cover Letter</label>
              <input type="file" id="cover-letter" name="cover-letter" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
        
        <section className="application-ad">
          <GoogleAd />
        </section>
      </main>
      
      <footer className="application-footer">
        <p>&copy; 2025 Jeancy Mpoyi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Application;
