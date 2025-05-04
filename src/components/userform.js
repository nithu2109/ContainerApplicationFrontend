import React, { useState } from "react";
import NewSidebar from "./NewSidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./userform.css"; // your original css
import axios from 'axios';

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
  
  const email = localStorage.getItem('userEmail');
  const [error, setError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSecurityCheckChange = (e) => {
    setSecurityChecks({ ...securityChecks, [e.target.id]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !zipFile || !dockerFile || !composeFile) {
      setError("Project name and all three files are required!");
      return;
    }

    setLoading(true);
    setError("");
    setsuccessMsg("");

    try {
      const formData = new FormData();
      formData.append("projectName", projectName);
      formData.append("email", email);
      formData.append("zipFile", zipFile);
      formData.append("dockerFile", dockerFile);
      formData.append("composeFile", composeFile);

      await axios.post('http://localhost:8000/upload', formData);

      setsuccessMsg("Project submitted successfully!");
      setProjectName("");
      setZipFile(null);
      setDockerFile(null);
      setComposeFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NewSidebar activePage="userform" />
      <Navbar />
      <main className="main-content" style={{ marginLeft: "250px", paddingTop: "70px", backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <div className="d-flex align-items-center justify-content-center" style={{ padding: "0.5rem 2rem" }}>
          <form className="form-container" onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "600px" }}>
            <h2 className="text-center fw-bold mb-4">Submit Your Project</h2>

            <div className="mb-3">
              <label className="form-label fw-bold">Project Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Zip File</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setZipFile(e.target.files[0])}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Dockerfile</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setDockerFile(e.target.files[0])}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Compose File</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setComposeFile(e.target.files[0])}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold d-block">Security Checks</label>
              <div className="d-flex flex-wrap gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="vulnerabilityScan"
                    checked={securityChecks.vulnerabilityScan}
                    onChange={handleSecurityCheckChange}
                  />
                  <label className="form-check-label" htmlFor="vulnerabilityScan">
                    Vulnerability Scan
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="complianceCheck"
                    checked={securityChecks.complianceCheck}
                    onChange={handleSecurityCheckChange}
                  />
                  <label className="form-check-label" htmlFor="complianceCheck">
                    Compliance Check
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="runtimeAnalysis"
                    checked={securityChecks.runtimeAnalysis}
                    onChange={handleSecurityCheckChange}
                  />
                  <label className="form-check-label" htmlFor="runtimeAnalysis">
                    Runtime Analysis
                  </label>
                </div>
              </div>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMsg && <div className="alert alert-success">{successMsg}</div>}

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5 py-2">
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default UserForm;
