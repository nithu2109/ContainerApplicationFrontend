import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";
import "./compliancetable.css";

function ComplianceTable() {
  const [complianceData, setComplianceData] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setComplianceData([
        {
          id: 1,
          check: "Avoid root user in Dockerfile",
          result: "Failed",
          description: "Container runs as root",
          fixHint: "Add USER instruction",
        },
        {
          id: 2,
          check: "Use COPY instead of ADD",
          result: "Pass",
          description: "Best practice for Dockerfile",
          fixHint: "-",
        },
        {
          id: 3,
          check: "Limit container capabilities",
          result: "Failed",
          description: "Too many kernel capabilities granted",
          fixHint: "Use --cap-drop=ALL",
        },
      ]);
    }, 500);
  }, []);

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
              CIS Benchmark or OpenSCAP Results:
            </p>
            <div className="table-responsive">
              <table className="table compliance-table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Check</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Fix Hint</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.check}</td>
                      <td className={item.result === "Pass" ? "text-success" : "text-danger"}>
                        {item.result === "Pass" ? "✅ Pass" : "❌ Failed"}
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
                  ))}
                </tbody>
              </table>
              {complianceData.length === 0 && (
                <p className="text-muted">No compliance results to show.</p>
              )}
            </div>
          </div>
        </Container>
        <NewFooter />
      </main>
    </>
  );
}

export default ComplianceTable;
