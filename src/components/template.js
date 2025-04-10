import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewFooter from "./NewFooter";

export class Template extends Component {
  render() {
    return (
      <>
          <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
            id="sidenav-main"
          >
            <div className="sidenav-header">
              <i
                className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
              />
              <Link
                className="navbar-brand m-0"
                to="/"
                target="_blank"
              >
                <img
                  src="../assets/img/logo5.png"
                  className="navbar-brand-img h-100"
                  alt="main_logo"
                />
                <span className="ms-1 font-weight-bold text-white">
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
                    className="nav-link text-white "
                    to="/components/dashboard"
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">dashboard</i>
                    </div>
                    <span className="nav-link-text ms-1">First page</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white "
                    to="/components/tables"
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">table_view</i>
                    </div>
                    <span className="nav-link-text ms-1">Second Page</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="sidenav-footer position-absolute w-100 bottom-0 ">
              <div className="mx-3">
                <Link
                  className="btn bg-gradient-primary mt-4 w-100"
                  to="/"
                  type="button"
                >
                  Upgrade to pro
                </Link>
              </div>
            </div> */}
          </aside>
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            {/* Navbar */}
            <nav
              className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
              id="navbarBlur"
              navbar-scroll="true"
            >
              <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li className="breadcrumb-item text-sm">
                      <a className="opacity-5 text-dark" href="javascript:;">
                        Pages
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-sm text-dark active"
                      aria-current="page"
                    >
                      Template
                    </li>
                  </ol>
                  <h6 className="font-weight-bolder mb-0">Template</h6>
                </nav>
                <div
                  className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                  id="navbar"
                >
                  <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                    <div className="input-group input-group-outline">
                      <label className="form-label">Type here...</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {/* End Navbar */}
            <div className="container-fluid py-4">
              <div className="row min-vh-80 h-100">
                <div className="col-12"></div>
              </div>
              <NewFooter />
            </div>
          </main>
          <div className="fixed-plugin">
            <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
              <i className="material-icons py-2">settings</i>
            </a>
            <div className="card shadow-lg">
              <div className="card-header pb-0 pt-3">
                <div className="float-start">
                  <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                  <p>See our dashboard options.</p>
                </div>
                <div className="float-end mt-4">
                  <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                    <i className="material-icons">clear</i>
                  </button>
                </div>
                {/* End Toggle Button */}
              </div>
              <hr className="horizontal dark my-1" />
              <div className="card-body pt-sm-3 pt-0">
                {/* Sidebar Backgrounds */}
                <div>
                  <h6 className="mb-0">Sidebar Colors</h6>
                </div>
                <a
                  href="javascript:void(0)"
                  className="switch-trigger background-color"
                >
                  <div className="badge-colors my-2 text-start">
                    <span
                      className="badge filter bg-gradient-primary active"
                      data-color="primary"
                      onclick="sidebarColor(this)"
                    />
                    <span
                      className="badge filter bg-gradient-dark"
                      data-color="dark"
                      onclick="sidebarColor(this)"
                    />
                    <span
                      className="badge filter bg-gradient-info"
                      data-color="info"
                      onclick="sidebarColor(this)"
                    />
                    <span
                      className="badge filter bg-gradient-success"
                      data-color="success"
                      onclick="sidebarColor(this)"
                    />
                    <span
                      className="badge filter bg-gradient-warning"
                      data-color="warning"
                      onclick="sidebarColor(this)"
                    />
                    <span
                      className="badge filter bg-gradient-danger"
                      data-color="danger"
                      onclick="sidebarColor(this)"
                    />
                  </div>
                </a>
                {/* Sidenav Type */}
                <div className="mt-3">
                  <h6 className="mb-0">Sidenav Type</h6>
                  <p className="text-sm">
                    Choose between 2 different sidenav types.
                  </p>
                </div>
                <div className="d-flex">
                  <button
                    className="btn bg-gradient-dark px-3 mb-2 active"
                    data-class="bg-gradient-dark"
                    onclick="sidebarType(this)"
                  >
                    Dark
                  </button>
                  <button
                    className="btn bg-gradient-dark px-3 mb-2 ms-2"
                    data-class="bg-transparent"
                    onclick="sidebarType(this)"
                  >
                    Transparent
                  </button>
                  <button
                    className="btn bg-gradient-dark px-3 mb-2 ms-2"
                    data-class="bg-white"
                    onclick="sidebarType(this)"
                  >
                    White
                  </button>
                </div>
                <p className="text-sm d-xl-none d-block mt-2">
                  You can change the sidenav type just on desktop view.
                </p>
                {/* Navbar Fixed */}
                <div className="mt-3 d-flex">
                  <h6 className="mb-0">Navbar Fixed</h6>
                  <div className="form-check form-switch ps-0 ms-auto my-auto">
                    <input
                      className="form-check-input mt-1 ms-auto"
                      type="checkbox"
                      id="navbarFixed"
                      onclick="navbarFixed(this)"
                    />
                  </div>
                </div>
                <hr className="horizontal dark my-3" />
                <div className="mt-2 d-flex">
                  <h6 className="mb-0">Light / Dark</h6>
                  <div className="form-check form-switch ps-0 ms-auto my-auto">
                    <input
                      className="form-check-input mt-1 ms-auto"
                      type="checkbox"
                      id="dark-version"
                      onclick="darkMode(this)"
                    />
                  </div>
                </div>
                <hr className="horizontal dark my-sm-4" />
                <a className="btn btn-outline-dark w-100" href>
                  View documentation
                </a>
                <div className="w-100 text-center">
                  <a
                    className="github-button"
                    href="https://github.com/creativetimofficial/material-dashboard"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star creativetimofficial/material-dashboard on GitHub"
                  >
                    Star
                  </a>
                  <h6 className="mt-3">Thank you for sharing!</h6>
                  <a
                    href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                    className="btn btn-dark mb-0 me-2"
                    target="_blank"
                  >
                    <i className="fab fa-twitter me-1" aria-hidden="true" />{" "}
                    Tweet
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
                    className="btn btn-dark mb-0 me-2"
                    target="_blank"
                  >
                    <i
                      className="fab fa-facebook-square me-1"
                      aria-hidden="true"
                    />{" "}
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*   Core JS Files   */}
          {/* Github buttons */}
          {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
      </>
    );
  }
}

export default Template;
