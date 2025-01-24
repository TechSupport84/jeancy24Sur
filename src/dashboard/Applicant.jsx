import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Applicant.css";
import { API_URL, API_URL_image } from "../screens/Api_Url";
import { useAuth } from "../context/AuthContext";

function Applicant() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, token } = useAuth();

  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await axios.get(`${API_URL}/application/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.applications)
        setApplications(response.data.applications || []);
       
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch applicants");
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, [token,applications ]);

  if (loading) {
    return <p className="loading">Loading applicants...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="applicant-container">
      <h2 className="applicant-title">Applicants</h2>
      <div className="applicant-list">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div key={application.id} className="applicant-card">
              <div className="applicant-details">
                <p><strong>ID:</strong> {application.id}</p>
                <p><strong>Username:</strong> {application.username}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Education Field:</strong> {application.educationField}</p>
                <p><strong>Programming Language:</strong> {application.programmingLanguage}</p>
                <p><strong>Additional Info:</strong> {application.additionalField}</p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href={application.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application.link}
                  </a>
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(application.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(application.updatedAt).toLocaleString()}
                </p>
              </div>
              <button
                className="view-cv-button"
                onClick={() =>
                  window.open(
                    `${API_URL_image}/${application.image}`,
                    "_blank"
                  )
                }
              >
                View CV
              </button>
              <embed
                src={`${API_URL_image}/${application.image}`}
                type="application/pdf"
                width="100%"
                height="400px"
                className="applicant-pdf"
              />
            </div>
          ))
        ) : (
          <p className="no-applicants">No applicants found.</p>
        )}
      </div>
    </div>
  );
}

export default Applicant;
