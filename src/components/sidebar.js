import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";


function Sidebar({ activePage }) {
  const [projectsExist, setProjectsExist] = useState(false); // Tracks if projects exist
  const { email } = useContext(AuthContext);

  useEffect(() => {
    // Replace this with your actual API call or logic to check for projects
    fetch(`http://localhost:8000/projects?email=${encodeURIComponent(email)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess) {
          setProjectsExist(true); // Projects exist
        } else {
          setProjectsExist(false); // No projects
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setProjectsExist(false); // Default to false if there's an error
      });
  }, []);

  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical  border-black border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
        style={{
          width: '250px',
          zIndex: 1000,
          border: '12px solid red', // Change color/width as needed
        }}
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <Link className="navbar-brand m-0" to="/" target="_blank">
            <img
              src="../assets/img/logo5.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold">
              CONTAINER SECURITY
            </span>
          </Link>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto  max-height-vh-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link text-black ${
                  activePage === "dashboard" ? "active bg-gradient-primary" : ""
                }`}
                to="/components/dashboard"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  activePage === "userform" ? "active bg-gradient-primary" : ""
                }`}
                to="/components/create-project"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">description</i>
                </div>
                <span className="nav-link-text ms-1">Create Project</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  activePage === "monitoring"
                    ? "active bg-gradient-primary"
                    : ""
                }`}
                to="/components/monitoring"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">monitor</i>
                </div>
                <span className="nav-link-text ms-1">Monitoring</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  activePage === "vulnerability"
                    ? "active bg-gradient-primary"
                    : ""
                }`}
                to="/components/vulnerability"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">security</i>
                </div>
                <span className="nav-link-text ms-1">Vulnerability</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  activePage === "compliance"
                    ? "active bg-gradient-primary"
                    : ""
                }`}
                to="/components/compliancetable"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">grading</i>
                </div>
                <span className="nav-link-text ms-1">Compliance</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  activePage === "alert" ? "active bg-gradient-primary" : ""
                }`}
                to="/components/alerts"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">radar</i>
                </div>
                <span className="nav-link-text ms-1">Alerts</span>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="/components/profile">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="/logout">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">logout</i>
                </div>
                <span className="nav-link-text ms-1">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
