import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import "./alertsTable.css";
import { useNavigate } from "react-router-dom";

function Alertstable() {
  const [logFile, setLogFile] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    if (!email) {
      navigate('/');
    }
  }, [email, navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogFile(file);
      setAlerts([]);
      setSubmitted(false);
    }
  };

  const handleSubmit = async () => {
    if (!logFile || submitted) return;

    setLoading(true);

    try {
      // Upload file first to backend
      const formData = new FormData();
      formData.append('alerts_log_file', logFile);
      formData.append('email', email);

      const uploadResponse = await fetch('http://localhost:8000/uploadLogs', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload log file.');
      }

      console.log('✅ Log file uploaded to database');

      // Fetch alerts after upload
      const alertsResponse = await fetch("http://localhost:8000/alerts");
      if (!alertsResponse.ok) {
        throw new Error("Failed to fetch alerts");
      }

      const data = await alertsResponse.json();
      setAlerts(data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error during alerts upload/fetch:", error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "High":
      case "Critical":
        return "text-danger fw-bold";
      case "Medium":
        return "text-warning fw-bold";
      case "Low":
        return "text-success";
      default:
        return "text-muted";
    }
  };

  return (
    <>
      <NewSidebar activePage="alert" />
      <Navbar />
      <main
        className="main-content"
        style={{
          marginLeft: "250px",
          paddingTop: "60px",
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          paddingBottom: "40px",
        }}
      >
        <Container className="py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="form-card shadow-lg p-4 rounded bg-white">
                <h3 className="text-center mb-4">Alert Monitoring</h3>

                {/* File Upload */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <input
                    type="file"
                    accept=".log,.txt"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={!logFile || submitted}
                  >
                    {loading ? "Loading..." : submitted ? "Submitted" : "Submit Log File"}
                  </button>
                </div>
                
                {alerts.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead className="table-light">
                        <tr>
                          <th>Type</th>
                          <th>Severity</th>
                          </tr>
                          </thead>
                          <tbody>
                            {alerts.map((alert, index) => (
                              <tr key={index}>
                                <td>{alert.type}</td>
                                <td className={getSeverityStyle(alert.severity)}>
                                  {alert.severity}
                                </td>
                              </tr>
                                ))}
                          </tbody>
                    </table>
                  </div>
                ) : (
  <p className="text-muted text-center">
    No alerts to display. Please upload a log file and click submit.
  </p>
)}

              </div>
            </div>
          </div>
          <Footer />
        </Container>
      </main>
    </>
  );
}

export default Alertstable;
