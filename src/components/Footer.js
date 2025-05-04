import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 mb-lg-0 mb-4 text-center text-lg-start">
            <div className="footer-text">
              © , made by
              <span className="footer-author">Team 1</span>
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.tamucc.edu/"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TAMUCC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
