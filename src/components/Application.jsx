import React, { useState } from "react";
import GoogleAd from "../app/GoogleAd";
import "../styles/Application.css";
import axios from "axios";
import { API_URL } from "../screens/Api_Url";
import { useNavigate } from "react-router-dom";

function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
}

function Application() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [educationField, setEducationField] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState([]);
  const [image, setImage] = useState(null);
  const [additionalField, setAdditionalField] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage ]= useState("")
  const navigation = useNavigate()

  // Handle file upload
  const pickUpFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return setError("No file selected. Please choose a file.");
    }

    const allowedFormats = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedFormats.includes(file.type)) {
      return setError("Invalid file format. Please upload a PDF or Word document.");
    }

    setError(""); // Clear previous errors
    setImage(file);
  };

  const handleProgrammingLanguageChange = (e) => {
    const { options } = e.target;
    const selectedLanguages = Array.from(options).filter((opt) => opt.selected).map((opt) => opt.value);
    setProgrammingLanguage(selectedLanguages);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!username || !email || !educationField || programmingLanguage.length === 0 || !image || !additionalField || !link) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("educationField", educationField);
      formData.append("programmingLanguage", programmingLanguage.join(", "));
      formData.append("image", image);
      formData.append("additionalField", additionalField);
      formData.append("link", link);

      // Submit the form data
      const response = await axios.post(`${API_URL}/application/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form submitted successfully:", response.data);
      setMessage("Application submitted successfully!");

      // Reset form fields
      setUsername("");
      setEmail("");
      setEducationField("");
      setProgrammingLanguage([]);
      setImage(null);
      setAdditionalField("");
      setLink("");
      document.getElementById("cv").value = ""; // Reset file input
      setError(""); // Clear any previous errors

     //navigatio
     navigation("/success-app")
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      setError("An error occurred while submitting your application. Please try again.");
    }
  };

  return (
    <div className="application-container">
      <main className="application-content">
        <section className="application-details">
          <h2>Application Details</h2>
          <p>Welcome to the application section. Here, you can find various details about the application process and other relevant information.</p>
        </section>

        <section className="application-form">
          <h2>Apply Now</h2>
          {message && (
            <div className="success-message">
              {message}
            </div>
          )}
          {/* Error Message */}
          <ErrorMessage message={error} />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={username}
                placeholder="Enter your name"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="education-field">Education Field</label>
              <select
                id="education-field"
                name="education-field"
                value={educationField}
                required
                onChange={(e) => setEducationField(e.target.value)}
              >
                <option value="">Select your education field</option>
                <option value="computer-science">Computer Science</option>
                <option value="software-development">Software Development</option>
                <option value="information-technology">Information Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="programming-languages">
                Programming Languages <small>(Ctrl/Cmd + Click to select multiple)</small>
              </label>
              <select
                id="programming-languages"
                name="programming-languages"
                multiple
                required
                value={programmingLanguage}
                onChange={handleProgrammingLanguageChange}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="React">React</option>
                <option value="react-native">React-native</option>
                <option value="django">Django</option>
                <option value="nodejs">Node js</option>
                <option value="c#">C#</option>
                <option value="c++">C++</option>
                <option value="php">PHP</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cv">Upload CV</label>
              <input
                type="file"
                id="cv"
                name="image"
                accept=".pdf,.doc,.docx"
                required
                onChange={pickUpFile}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cover-letter">Record a short video (1 to 2 minutes) using Loom or any other platform, and paste the link here. </label>
              <input
                type="url"
                id="cover-letter"
                value={link}
                name="link"
                placeholder="Paste a Loom link or a Video link"
                required
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Informations *</label>
              <textarea
                id="message"
                name="message"
                value={additionalField}
                placeholder="Enter your message"
                rows="5"
                onChange={(e) => setAdditionalField(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
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
