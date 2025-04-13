import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import "./monitoringtable.css";

function MonitoringDataTable() {
  const [events, setEvents] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          container: "nginx-dev",
          eventType: "Suspicious Write",
          description: "Unexpected file write in /etc/passwd",
          timestamp: "2025-04-12 18:00",
          severity: "High",
        },
        {
          id: 2,
          container: "api-service",
          eventType: "Network Access",
          description: "Outbound connection on unknown port",
          timestamp: "2025-04-12 18:03",
          severity: "Critical",
        },
      ]);
    }, 500);
  }, []);

  const getRowClass = (severity) => {
    switch (severity) {
      case "Critical":
        return "row-critical";
      case "High":
        return "row-high";
      default:
        return "";
    }
  };

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
        <div className="monitoring-wrapper">
          <div className="monitoring-card">
            <h5 className="monitoring-title">📊 Monitoring Container Data</h5>
            <div className="table-responsive">
              <table className="monitoring-table">
                <thead>
                  <tr>
                    <th>Container</th>
                    <th>Event Type</th>
                    <th>Description</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className={getRowClass(event.severity)}>
                      <td>{event.container}</td>
                      <td>{event.eventType}</td>
                      <td>{event.description}</td>
                      <td>{event.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {events.length === 0 && (
                <p className="text-muted text-center mt-3">No events to display.</p>
              )}
            </div>
          </div>
        </div>
        <NewFooter />
      </main>
    </>
  );
}

export default MonitoringDataTable;
