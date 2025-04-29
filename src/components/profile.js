import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewFooter from "./NewFooter";

export class Profile extends Component {
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
            <Link className="navbar-brand m-0" to="/" target="_blank">
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
                  <span className="nav-link-text ms-1">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white " to="/components/userform">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">description</i>
                </div>
                <span className="nav-link-text ms-1">User Form</span>
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="/components/monitoring">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">monitor</i>
                  </div>
                  <span className="nav-link-text ms-1">Monitering</span>
                </Link>
              </li><li className="nav-item">
                <Link className="nav-link text-white " to="/components/vulnerability">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">security</i>
                  </div>
                  <span className="nav-link-text ms-1">Vulnerability</span>
                </Link>
              </li><li className="nav-item">
                <Link className="nav-link text-white " to="/components/compliance">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">grading</i>
                  </div>
                  <span className="nav-link-text ms-1">Compliance</span>
                </Link>
              </li><li className="nav-item">
                <Link className="nav-link text-white " to="/components/alerts">
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
                <Link className="nav-link text-white active bg-gradient-primary " to="/components/profile">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <span className="nav-link-text ms-1">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="/components/sign_in">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">login</i>
                  </div>
                  <span className="nav-link-text ms-1">Sign In</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="/components/sign_up">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">assignment</i>
                  </div>
                  <span className="nav-link-text ms-1">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
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
                    Profile
                  </li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Profile</h6>
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
          <div className="container-fluid px-2 px-md-4">
            <div
              className="page-header min-height-300 border-radius-xl mt-4"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              }}
            >
              <span className="mask  bg-gradient-primary  opacity-6" />
            </div>
            <div className="card card-body mx-3 mx-md-4 mt-n6">
              <div className="row gx-4 mb-2">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src="../assets/img/tam-7.jpg"
                      alt="profile_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">Team-8</h5>
                    <p className="mb-0 font-weight-normal text-sm">
                      Group of AOS
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0">
                    <ul className="nav nav-pills nav-fill p-1" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link mb-0 px-0 py-1 active "
                          data-bs-toggle="tab"
                          href="javascript:;"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="material-icons text-lg position-relative">
                            home
                          </i>
                          <span className="ms-1">App</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link mb-0 px-0 py-1 "
                          data-bs-toggle="tab"
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="material-icons text-lg position-relative">
                            email
                          </i>
                          <span className="ms-1">Messages</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link mb-0 px-0 py-1 "
                          data-bs-toggle="tab"
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="material-icons text-lg position-relative">
                            settings
                          </i>
                          <span className="ms-1">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Platform Settings</h6>
                      </div>
                      <div className="card-body p-3">
                        <h6 className="text-uppercase text-body text-xs font-weight-bolder">
                          Account
                        </h6>
                        <ul className="list-group">
                          <li className="list-group-item border-0 px-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                defaultChecked
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                Email me when someone follows me
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item border-0 px-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault1"
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault1"
                              >
                                Email me when someone answers on my post
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item border-0 px-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault2"
                                defaultChecked
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault2"
                              >
                                Email me when someone mentions me
                              </label>
                            </div>
                          </li>
                        </ul>
                        <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">
                          Application
                        </h6>
                        <ul className="list-group">
                          <li className="list-group-item border-0 px-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault3"
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault3"
                              >
                                New launches and projects
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item border-0 px-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault4"
                                defaultChecked
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault4"
                              >
                                Monthly product updates
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item border-0 px-0 pb-0">
                            <div className="form-check form-switch ps-0">
                              <input
                                className="form-check-input ms-auto"
                                type="checkbox"
                                id="flexSwitchCheckDefault5"
                              />
                              <label
                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                htmlFor="flexSwitchCheckDefault5"
                              >
                                Subscribe to newsletter
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div className="card-header pb-0 p-3">
                        <div className="row">
                          <div className="col-md-8 d-flex align-items-center">
                            <h6 className="mb-0">Profile Information</h6>
                          </div>
                          <div className="col-md-4 text-end">
                            <a href="javascript:;">
                              <i
                                className="fas fa-user-edit text-secondary text-sm"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit Profile"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <p className="text-sm">
                          Hi, We'are team 8. If you can’t decide,
                          the answer is no. If two equally difficult paths,
                          choose the one more painful in the short term (pain
                          avoidance is creating an illusion of equality).
                        </p>
                        <hr className="horizontal gray-light my-4" />
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                            <strong className="text-dark">Full Name:</strong>{" "}
                            &nbsp; Shubham Patel
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">Mobile:</strong>{" "}
                            &nbsp; (361) 563 0339
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">Email:</strong> &nbsp;
                            spatel34@islander.tamucc.edu
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">Location:</strong>{" "}
                            &nbsp; Corpus Christi Texas, USA
                          </li>
                          <li className="list-group-item border-0 ps-0 pb-0">
                            <strong className="text-dark text-sm">
                              Social:
                            </strong>{" "}
                            &nbsp;
                            <a
                              className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                              href="javascript:;"
                            >
                              <i className="fab fa-facebook fa-lg" />
                            </a>
                            <a
                              className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                              href="javascript:;"
                            >
                              <i className="fab fa-twitter fa-lg" />
                            </a>
                            <a
                              className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                              href="javascript:;"
                            >
                              <i className="fab fa-instagram fa-lg" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Conversations</h6>
                      </div>
                      <div className="card-body p-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div className="avatar me-3">
                              <img
                                src="../assets/img/team-4.jpg"
                                alt="kal"
                                className="border-radius-lg shadow"
                              />
                            </div>
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Shubh Rana</h6>
                              <p className="mb-0 text-xs">
                                Hi! I need more information..
                              </p>
                            </div>
                            <a
                              className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                              href="javascript:;"
                            >
                              Reply
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewFooter />
        </div>
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
                  <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
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
      </>
    );
  }
}

export default Profile;
