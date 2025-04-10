import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "react-bootstrap";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";

function Alertstable() {
  const [logFile, setLogFile] = useState(null);
  const [errors, setErrors] = useState([]);
  const [alertsTable, setAlertsTable] = useState([]);
  const [alertsCard, setAlertsCard] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogFile(file);
      // Call API to analyze the log file
      analyzeLogFile(file);
    }
  };

  // Function to analyze log file by calling the API
  const analyzeLogFile = async (file) => {
    // Mock data to simulate API response
    const mockData = {
      alertsTable: [
        { id: 1, type: "SQL Injection", severity: "High", date: "2025-04-08" },
        { id: 2, type: "XSS Attempt", severity: "Medium", date: "2025-04-07" },
        { id: 3, type: "Login Failure", severity: "Low", date: "2025-04-06" },
      ],
      alertsCard: null,
    };
  
    // Simulate loading delay
    setTimeout(() => {
      setAlertsTable(mockData.alertsTable);
      setAlertsCard(mockData.alertsCard);
    }, 1000);
  };
  
  // };
  return (
    <>
      <NewSidebar activePage="alert" />
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
                  Tables
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Tables</h6>
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
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Alerts Details
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  {/* File Upload Section */}
                  <div className="mb-4 container">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".log,.txt"
                      className="form-control"
                    />
                  </div>
                  <div className="table-responsive p-0">
                    {alertsTable.length > 0 ? (
                      <AlertsData alertsTable={alertsTable} />
                    ) : (
                      <p className="container">No alerts available to display.</p>
                    )}
                  </div>
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

// const columns = [
//     {
//       dataField : 'IR_ID',
//       text : 'IR ID'
//     },
//     {
//       dataField : 'DEVICE_ID',
//       text : 'DEVICE ID'
//     },
//     {
//         dataField : 'COUNT',
//         text : 'COUNT'
//       },
//     {
//       dataField : 'IR_VALUE',
//       text : 'IR VALUE'
//     },
//     {
//       dataField : 'READING_TIME',
//       text : 'READING TIME'
//     },
//   ];

function AlertsData({ alertsTable }) {
  const columns = [
    { dataField: "id", text: "Alert ID" },
    { dataField: "type", text: "Type" },
    {
      dataField: "severity",
      text: "Severity",
      formatter: (cell) => {
        let severityClass = "";
        switch (cell) {
          case "High":
            severityClass = "text-danger";
            break;
          case "Medium":
            severityClass = "text-warning";
            break;
          case "Critical":
            severityClass = "text-danger";
            break;
          case "Low":
            severityClass = "text-success";
            break;
          case "Info":
            severityClass = "text-success";
            break;
          case "Debug":
            severityClass = "text-warning";
            break;
          default:
            break;
        }
        return <span className={severityClass}>{cell}</span>;
      },
    },
    { dataField: "date", text: "Date" },
  ];

  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={alertsTable}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <BootstrapTable
              {...props.baseProps}
              striped
              hover
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
}

export default Alertstable;
