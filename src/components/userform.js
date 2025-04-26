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
    setSecurityChecks({ ...securityChecks, [e.target.id]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !zipFile || !dockerFile || !composeFile) {
      setError("❌ Project name and all three files are required!");
      return;
    }

    setLoading(true);
    setError("");
    setsuccessMsg("");

    try {
      const formData = new FormData();
      formData.append("projectName", projectName);
      formData.append("email", localStorage.getItem("userEmail"));
      formData.append("zipFile", zipFile);
      formData.append("dockerFile", dockerFile);
      formData.append("composeFile", composeFile);

      console.log("📤 Submitting project:", {
        projectName,
        email: localStorage.getItem("userEmail"),
        zipFileName: zipFile?.name,
        dockerFileName: dockerFile?.name,
        composeFileName: composeFile?.name,
      });

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      console.log("📧 Sending email to backend:", email);

      const result = await response.json();
      console.log("✅ Server response:", result);

      if (response.ok) {
        setsuccessMsg("🚀 Project submitted successfully!");
        setProjectName("");
        setZipFile(null);
        setDockerFile(null);
        setComposeFile(null);
      } else {
        setError(result.error || "❌ Failed to upload project. Please try again.");
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      setError("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NewSidebar activePage="userform" />
      <Navbar />
      <main className="main-content" style={{ marginLeft: "250px", backgroundColor: "#fff", minHeight: "100vh" }}>
        <div className="d-flex align-items-center justify-content-center" style={{ padding: "4rem 1rem" }}>
          <div className="form-card">
            <h3 className="text-center mb-4 fw-bold">📦 Submit Your Project</h3>
            <form onSubmit={handleSubmit}>
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

              {[
                { label: "📁 Upload Zip File", file: zipFile, setFile: setZipFile },
                { label: "🐳 Upload Dockerfile", file: dockerFile, setFile: setDockerFile },
                { label: "🧩 Upload Compose File", file: composeFile, setFile: setComposeFile },
              ].map(({ label, file, setFile }, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label fw-bold">{label}</label>
                  <div className="d-flex gap-2">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    {file && (
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => setFile(null)}>
                        ❌
                      </button>
                    )}
                  </div>
                  {file && <small className="text-muted">{file.name}</small>}
                </div>
              ))}

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
                <button type="submit" className="btn btn-primary px-5 py-2">
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <NewFooter />
      </main>
    </>
  );
}

export default UserForm;
