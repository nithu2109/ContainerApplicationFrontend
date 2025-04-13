import React, { useContext } from "react";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  // const { email } = useContext(AuthContext);

  return (
    <>
      <NewSidebar activePage="dashboard" />
      <Navbar />
      <main
        className="main-content"
        style={{ marginLeft: "250px", paddingTop: "5px", backgroundColor: "#ffffff", minHeight: "100vh" }}
      >
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{
            minHeight: "calc(100vh - 120px)",
            padding: "4rem",
            color: "#1e1e2f",
          }}
        >
          <h1 className="text-place">Welcome User</h1>

          {/* 📊 Metrics Table */}
          <div className="card shadow-sm p-4 rounded" style={{ width: "100%", maxWidth: "800px" }}>
            <h5 className="mb-3 fw-bold">📈 Dashboard Metrics</h5>
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Metric</th>
                  <th>Value Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Projects Uploaded</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Total Containers Scanned</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Total Vulnerabilities Found</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Compliance Pass Rate</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>Open Alerts (Critical/Warning)</td>
                  <td>2 Critical, 5 Warnings</td>
                </tr>
                <tr>
                  <td>Last Scan Date</td>
                  <td>2025-04-12, 6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <NewFooter />
      </main>
    </>
  );
}

export default Dashboard;
