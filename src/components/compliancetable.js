import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";
import "./compliancetable.css";
import { useNavigate } from "react-router-dom";

function ComplianceTable() {
  const [complianceData, setComplianceData] = useState([]);
  const [scanningMessage, setScanningMessage] = useState("");
  const { email } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/');
      return;
    }

    const fetchComplianceData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/compliance-data?email=${email}`);
        const data = await response.json();

        if (Array.isArray(data.data) && data.data.length > 0) {
          const now = new Date();

          // Filter only entries with timestamp older than 6 hours
          const filteredData = data.data.filter(item => {
            const entryTime = new Date(item.detected_at);
            const diffHours = (now - entryTime) / (1000 * 60 * 60);
            return diffHours >= 6;
          });

          if (filteredData.length > 0) {
            const formattedData = filteredData.map(item => ({
              id: item.id || "N/A",
              check: item.check || "N/A",
              result: item.result || "N/A",
              description: item.description || "N/A",
              fixHint: item.fixHint || "-"
            }));
            setComplianceData(formattedData);
            setScanningMessage("");
          } else {
            setComplianceData([]);
            setScanningMessage("Scanning is in progress... Please check back later.");
          }
        } else {
          setComplianceData([]);
          setScanningMessage("No compliance results to show.");
        }
      } catch (error) {
        console.error("Error fetching compliance data:", error);
        setComplianceData([]);
        setScanningMessage("Error fetching compliance data.");
      }
    };

    fetchComplianceData();
  }, [email, navigate]);

  return (
    <>
      <NewSidebar activePage="compliance" />
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
          <div className="compliance-container shadow rounded p-4">
            <h4 className="mb-3 fw-bold">📋 Compliance</h4>
            <p className="mb-4 text-muted">
              CIS Benchmark Results:
            </p>
            <div className="table-responsive">
              <table className="table compliance-table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Check</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Fix Hint</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceData.length > 0 ? (
                    complianceData.map(item => (
                      <tr key={item.id}>
                        <td>{item.check}</td>
                        <td className={item.result === "Pass" ? "text-success" : "text-danger"}>
                          {item.result}
                        </td>
                        <td>{item.description}</td>
                        <td>
                          {item.fixHint.includes("--") ? (
                            <code>{item.fixHint}</code>
                          ) : item.fixHint.includes("USER") ? (
                            <>
                              Add <code>USER</code> instruction
                            </>
                          ) : (
                            item.fixHint
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">
                        {scanningMessage}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default ComplianceTable;
