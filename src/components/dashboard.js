import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/');
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/get-dashboard-context', { email });
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchVulnerabilityCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-vulnerabilities?email=${email}&filter_after_6_hours=true`);
        setVulnerabilityCount(response.data.data.length);
      } catch (error) {
        console.error("Error fetching vulnerability count:", error);
      }
    };

    fetchDashboardData();
    fetchVulnerabilityCount();
  }, [email, navigate]);

  return (
    <>
      <NewSidebar activePage="dashboard" />
      <Navbar />
      <main
        className="main-content"
        style={{ marginLeft: "250px", paddingTop: "70px", backgroundColor: "#ffffff", minHeight: "100vh" }}
      >
        <div className="d-flex align-items-center justify-content-center flex-column" style={{ minHeight: "calc(100vh - 120px)", padding: "4rem", color: "#1e1e2f" }}>
          <h1 className="text-center mb-4">Welcome</h1>

          <div className="card shadow-sm p-4 rounded" style={{ width: "100%", maxWidth: "800px" }}>
            <h5 className="mb-3 fw-bold">Dashboard Metrics</h5>

            {loading ? (
              <p>Loading dashboard metrics...</p>
            ) : dashboardData && dashboardData.up_time !== "N/A" ? (
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Uptime</td>
                    <td>{dashboardData.up_time}</td>
                  </tr>
                  <tr>
                    <td>Compliance Status</td>
                    <td>{dashboardData.compliance_status}</td>
                  </tr>
                  <tr>
                    <td>Alerts</td>
                    <td>{dashboardData.alerts}</td>
                  </tr>
                  <tr>
                    <td>Vulnerabilities Found</td>
                    <td>{vulnerabilityCount}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-center">
                <p style={{ fontSize: "18px", fontWeight: "500", color: "#555" }}>
                  No project data found.
                </p>
                <p style={{ fontSize: "16px", color: "#888" }}>
                  Upload your first project to see container metrics and insights!
                </p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Dashboard;