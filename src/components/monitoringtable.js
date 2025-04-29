import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import "./monitoringtable.css";
import { useNavigate } from "react-router-dom";

function MonitoringDataTable() {
  const { email } = useContext(AuthContext);
  const [monitoringData, setMonitoringData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/');
      return;
    }

    const fetchMonitoringData = async () => {
      try {
        console.log("📧 Sending email to backend", email);

        const response = await fetch(`http://localhost:8000/monitoring-data?email=${email}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();
        console.log("📦 Monitoring Data fetched:", result);
        setMonitoringData(result.data);
      } catch (error) {
        console.error("❌ Failed to fetch monitoring data:", error);
      }
    };

    fetchMonitoringData();
  }, [email, navigate]);

  return (
    <>
      <NewSidebar activePage="monitoring" />
      <Navbar />
      <main
        className="main-content"
        style={{
          marginLeft: "250px",
          paddingTop: "70px",
          backgroundColor: "#ffffff",
          minHeight: "100vh",
        }}
      >
        <Container>
          <div className="monitoring-wrapper">
            <div className="monitoring-card">
              <h5 className="monitoring-title">📊 Monitoring Metrics</h5>
              <div className="table-responsive">
                <table className="monitoring-table table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Container</th>
                      <th>Event Type</th>
                      <th>Description</th>
                      <th>Severity</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monitoringData.length > 0 ? (
                      monitoringData.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.container}</td>
                          <td>{item.eventType}</td>
                          <td>{item.description}</td>
                          <td>{item.severity}</td>
                          <td>{item.timestamp}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No monitoring data yet. Please upload a project.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
        <NewFooter />
      </main>
    </>
  );
}

export default MonitoringDataTable;
