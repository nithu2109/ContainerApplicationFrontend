import React from "react";
import { Link } from "react-router-dom";
import "./NewSidebar.css";

const Sidebar = ({ activePage }) => {
  return (
    <aside id="sidenav-main" className="sidebar">
      {/* <div className="sidebar-header">
        <Link to="/" className="brand">
          <img src="../assets/img/logo5.png" alt="Logo" className="logo" />
          <span>Container Security</span>
        </Link>
      </div> */}

      <ul className="nav-links">
        <li className={activePage === "dashboard" ? "active" : ""}>
          <Link to="/components/dashboard">Dashboard</Link>
        </li>
        <li className={activePage === "userform" ? "active" : ""}>
          <Link to="/components/create-project">Upload Project</Link>
        </li>
        <li className={activePage === "monitoring" ? "active" : ""}>
          <Link to="/components/monitoring">Monitoring</Link>
        </li>
        <li className={activePage === "vulnerability" ? "active" : ""}>
          <Link to="/components/vulnerability">Vulnerability</Link>
        </li>
        <li className={activePage === "compliance" ? "active" : ""}>
          <Link to="/components/compliancetable">Compliance</Link>
        </li>
        <li className={activePage === "alert" ? "active" : ""}>
          <Link to="/components/alerts">Alerts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
