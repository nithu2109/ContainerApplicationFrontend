import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import "./alertsTable.css";

function Alertstable() {
  const [logFile, setLogFile] = useState(null);
  const [alerts, setAlerts] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setLogFile(file);
  };

  const handleSubmit = () => {
    if (!logFile) return;

    // Simulate API response
    const mockData = [
      { id: 1, type: "SQL Injection", severity: "High", date: "2025-04-08" },
      { id: 2, type: "XSS Attempt", severity: "Medium", date: "2025-04-07" },
      { id: 3, type: "Login Failure", severity: "Low", date: "2025-04-06" },
    ];

    setTimeout(() => {
      setAlerts(mockData);
    }, 1000);
  };

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "High":
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
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="form-card shadow-lg p-4 rounded bg-white">
                <h3 className="text-center mb-4">🚨 Alert Monitoring</h3>

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
                    disabled={!logFile}
                  >
                    Submit Log File
                  </button>
                </div>

                {/* Alert Table */}
                {alerts.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Type</th>
                          <th>Severity</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alerts.map((alert) => (
                          <tr key={alert.id}>
                            <td>{alert.id}</td>
                            <td>{alert.type}</td>
                            <td className={getSeverityStyle(alert.severity)}>
                              {alert.severity}
                            </td>
                            <td>{alert.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center">
                    No alerts to display. Please upload a log file.
                  </p>
                )}
              </div>
            </div>
          </div>
          <NewFooter />
        </div>
      </main>
    </>
  );
}

export default Alertstable;
