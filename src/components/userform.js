import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import NewFooter from "./NewFooter";
import "./userform.css";

function UserForm() {
  const [projectName, setProjectName] = useState("");
  const [zipFile, setZipFile] = useState(null);
  const [dockerFile, setDockerFile] = useState(null);
  const [composeFile, setComposeFile] = useState(null);
  const [securityChecks, setSecurityChecks] = useState({
    vulnerabilityScan: false,
    complianceCheck: false,
    runtimeAnalysis: false,
  });
  const [error, setError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { email } = useContext(AuthContext);

  const handleSecurityCheckChange = (e) => {
    setSecurityChecks({
      ...securityChecks,
      [e.target.id]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !zipFile || !dockerFile || !composeFile) {
      setError("Project name and all three files are required!");
      return;
    }

    const hasAnySecurityCheckEnabled = Object.values(securityChecks).some(value => value);
    if (!hasAnySecurityCheckEnabled) {
      setError("At least one of the security checks is required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setsuccessMsg("🚀 Project submitted successfully!");
      setError("");
    }, 1500);
  };

  return (
    <>
      <NewSidebar activePage="userform" />
      <Navbar />
      <main
        className="main-content d-flex align-items-center justify-content-center"
        style={{
          marginLeft: "250px",
          backgroundColor: "#ffffff",
          height: "100vh",
          padding: "0 20px",
          overflow: "hidden",
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <div className="form-card">
                <h3 className="text-center mb-4">📦 Submit Your Project</h3>
                <form onSubmit={handleSubmit}>
                  {/* Project Name */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">🔤 Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter project name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>

                  {/* Zip File */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">📁 Upload Zip File</label>
                    <div className="d-flex gap-2">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setZipFile(e.target.files[0])}
                      />
                      {zipFile && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => setZipFile(null)}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                    {zipFile && <small className="text-muted">{zipFile.name}</small>}
                  </div>

                  {/* Dockerfile */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">🐳 Upload Dockerfile</label>
                    <div className="d-flex gap-2">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setDockerFile(e.target.files[0])}
                      />
                      {dockerFile && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => setDockerFile(null)}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                    {dockerFile && <small className="text-muted">{dockerFile.name}</small>}
                  </div>

                  {/* Compose File */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">🧩 Upload Compose File</label>
                    <div className="d-flex gap-2">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setComposeFile(e.target.files[0])}
                      />
                      {composeFile && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => setComposeFile(null)}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                    {composeFile && <small className="text-muted">{composeFile.name}</small>}
                  </div>

                  {/* Security Checks */}
                  <div className="mb-3">
                    <label className="form-label fw-bold d-block">🛡️ Security Checks</label>
                    <div className="d-flex flex-wrap gap-4">
                      {["vulnerabilityScan", "complianceCheck", "runtimeAnalysis"].map((key) => (
                        <div className="form-check" key={key}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={key}
                            checked={securityChecks[key]}
                            onChange={handleSecurityCheckChange}
                          />
                          <label className="form-check-label">
                            {key === "vulnerabilityScan"
                              ? "Vulnerability Scan"
                              : key === "complianceCheck"
                              ? "Compliance Check"
                              : "Runtime Analysis"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}
                  {successMsg && <div className="alert alert-success">{successMsg}</div>}

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">
                      {loading ? "Uploading..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <NewFooter />
        </div>
      </main>
    </>
  );
}

export default UserForm;
