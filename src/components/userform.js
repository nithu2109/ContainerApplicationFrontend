import React, { useState, useRef, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewFooter from "./NewFooter";
import { Link } from "react-router-dom";
import NewSidebar from "./NewSidebar";
import { AuthContext } from "./AuthContext";

function UserForm() {
  const [projectName, setProjectName] = useState("");
  const zipFileRef = useRef(null);
  const dockerFileRef = useRef(null);
  const composeFileRef = useRef(null);
  const [securityChecks, setSecurityChecks] = useState({
    vulnerabilityScan: false,
    complianceCheck: false,
    runtimeAnalysis: false,
  });
  const [error, setError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const { email } = useContext(AuthContext);

  const handleSecurityCheckChange = (e) => {
    setSecurityChecks({
      ...securityChecks,
      [e.target.id]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !projectName ||
      !zipFileRef.current.files[0] ||
      !dockerFileRef.current.files[0] ||
      !composeFileRef.current.files[0]
    ) {
      setError("Project name and all three files are required!");
      return;
    }

    const hasAnySecurityCheckEnabled = Object.values(securityChecks).some(
      (value) => value
    );
    if (!hasAnySecurityCheckEnabled) {
      setError("One of the security checks is required");
      return;
    }

    // Mock API Response: Pretend validation passed and upload succeeded
    setTimeout(() => {
      setsuccessMsg("Project submitted successfully!");
      setError("");
    }, 1000);
  };

  return (
    <>
      <NewSidebar activePage="userform" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Upload Project</h6>
                  </div>
                </div>
                <div className="card-body px-4 pb-2">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label>Project Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Upload Zip File</label>
                      <input type="file" className="form-control" ref={zipFileRef} />
                    </div>
                    <div className="mb-3">
                      <label>Upload Dockerfile</label>
                      <input type="file" className="form-control" ref={dockerFileRef} />
                    </div>
                    <div className="mb-3">
                      <label>Upload Docker Compose File</label>
                      <input type="file" className="form-control" ref={composeFileRef} />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="vulnerabilityScan"
                        checked={securityChecks.vulnerabilityScan}
                        onChange={handleSecurityCheckChange}
                      />
                      <label className="form-check-label">Vulnerability Scan</label>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="complianceCheck"
                        checked={securityChecks.complianceCheck}
                        onChange={handleSecurityCheckChange}
                      />
                      <label className="form-check-label">Compliance Check</label>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="runtimeAnalysis"
                        checked={securityChecks.runtimeAnalysis}
                        onChange={handleSecurityCheckChange}
                      />
                      <label className="form-check-label">Runtime Analysis</label>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMsg && <div className="alert alert-success">{successMsg}</div>}
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
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

export default UserForm;
