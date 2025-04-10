import React, { useEffect, useState, useContext } from "react";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const [projectsExist, setProjectsExist] = useState(false);
  const { email } = useContext(AuthContext);
  const [up_time, setUpTime] = useState(0);
  const [vulnerability, setVulnerability] = useState(0);
  const [compliance_status, setComplianceStatus] = useState("OK");
  const [alerts, setAlerts] = useState(0);
  useEffect(() => {
    // Mocking backend data
    setTimeout(() => {
      setProjectsExist(true);
      setUpTime(99.8);
      setVulnerability(7);
      setComplianceStatus("Warning");
      setAlerts(3);
    }, 1000);
  }, []);

  return (
    <>
      <NewSidebar activePage="dashboard" />
      <Navbar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Uptime</p>
                        <h5 className="font-weight-bolder">{up_time}%</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Vulnerabilities</p>
                        <h5 className="font-weight-bolder">{vulnerability}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Compliance</p>
                        <h5 className="font-weight-bolder">{compliance_status}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Alerts</p>
                        <h5 className="font-weight-bolder">{alerts}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewFooter />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
