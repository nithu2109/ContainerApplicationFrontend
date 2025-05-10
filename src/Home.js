import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <div>
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
                CONTAINER 
                SECURITY
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
                  className="nav-link text-white active bg-gradient-primary"
                  to="/components/dashboard"
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
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
                <Link className="nav-link text-white " to="/components/profile">
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
                    Dashboard
                  </li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Dashboard</h6>
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
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body font-weight-bold px-0"
                    >
                      <i className="fa fa-user me-sm-1" />
                      <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="iconNavbarSidenav"
                    >
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item px-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0">
                      <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                    </a>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bell cursor-pointer" />
                    </a>
                    <ul
                      className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="./assets/img/team-2.jpg"
                                className="avatar avatar-sm  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New message
                                </span>{" "}
                                from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="./assets/img/small-logos/logo-spotify.svg"
                                className="avatar avatar-sm bg-gradient-dark  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New album
                                </span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        />
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">monitor</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Monitering
                      </p>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        Average Uptime: 2 days
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-danger shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">security</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Vulnerability
                      </p>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">
                        Total Vulnerability: 5
                      </span>
                  
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">grading</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Compliance
                      </p>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        Compliance Status: OK
                      </span>{" "}
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">radar</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">Alerts</p>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        0{" Alerts"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <Footer />
        </main>
      </div>
    </>
  );
}

export function Smokedata(){
  const[data,setData]=useState([]);
  const apifetch=()=>{
      fetch('https://react-test-01.000webhostapp.com/smokesensordata.php')
      .then((Response)=>Response.json())
      .then((json)=>{

        setData(json.smoke)

      });
  } ;

  useEffect(()=>{
    apifetch();
    const interval= setInterval(()=>{
      apifetch();
    },5000);
  
    return()=> clearInterval(interval);
  },[]);

  return(
    <>
      {
        data.slice(0,1).map((mydata)=>{
            return ((mydata.SMOKE_VALUE))
        })
      }
    </>  
  )
        }

        export function Flamedata(){
          const[data,setData]=useState([]);
          const apifetch=()=>{
              fetch('https://react-test-01.000webhostapp.com/flamesensordata.php')
              .then((Response)=>Response.json())
              .then((json)=>{
        
                setData(json.flame)
        
              });
          } ;
        
          useEffect(()=>{
            apifetch();
            const interval= setInterval(()=>{
              apifetch();
            },5000);
          
            return()=> clearInterval(interval);
          },[]);
        
          return(
            <>

              {
               data.slice(0,1).map((mydata)=>{
                return ((mydata.FLAME_VALUE))
            })

             } 
            </>  
          )
        }

        export  function Ldrdata(){
          const[data,setData]=useState([]);
          const apifetch=()=>{
              fetch('https://react-test-01.000webhostapp.com/ldrdata.php')
              .then((Response)=>Response.json())
              .then((json)=>{
        
                setData(json.ldr)
        
              });
          } ;
        
          useEffect(()=>{
            apifetch();
            const interval= setInterval(()=>{
              apifetch();
            },5000);
          
            return()=> clearInterval(interval);
          },[]);
        
          return(
            <>
            
            {
               data.slice(0,1).map((mydata)=>{
                return ((mydata.LDR_VALUE))
            })

             } 
         
            </>  
          )
        }

        export  function Irdata(){
          const[data,setData]=useState([]);
          const apifetch=()=>{
              fetch('https://react-test-01.000webhostapp.com/irdata.php')
              .then((Response)=>Response.json())
              .then((json)=>{
        
                setData(json.ir)
        
              });
          } ;
        
          useEffect(()=>{
            apifetch();
            const interval= setInterval(()=>{
              apifetch();
            },5000);
          
            return()=> clearInterval(interval);
          },[]);
        
          return(
            <>
              {
               data.slice(0,1).map((mydata)=>{
                return ((mydata.IR_VALUE))
            })

             } 
            </>  
          )
        }
export default Home;
