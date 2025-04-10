import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "react-bootstrap";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import NewFooter from "./NewFooter";
import NewSidebar from "./NewSidebar";
import { AuthContext } from "./AuthContext";

function ComplianceTable() {
  const [projectsExist, setProjectsExist] = useState(false);
  const [complianceTable, setComplianceTable] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    // Simulate mock compliance results
    setTimeout(() => {
      setProjectsExist(true);
      setComplianceTable([
        { id: 1, control: "CIS-1.1", status: "Fail", date: "2025-04-08" },
        { id: 2, control: "CIS-1.2", status: "Pass", date: "2025-04-07" },
        { id: 3, control: "PCI-DSS 2.1", status: "Fail", date: "2025-04-06" },
      ]);
    }, 1000);
  }, []);

  const columns = [
    { dataField: "id", text: "Compliance ID" },
    { dataField: "control", text: "Control" },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell) => {
        const statusClass = cell === "Pass" ? "text-success" : "text-danger";
        return <span className={statusClass}>{cell}</span>;
      },
    },
    { dataField: "date", text: "Date" },
  ];

  return (
    <>
      <NewSidebar activePage="compliance" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg "  style={{ marginLeft: "250px" }}>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Compliance Table
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    {projectsExist && complianceTable.length > 0 ? (
                      <Container>
                        <ToolkitProvider
                          keyField="id"
                          data={complianceTable}
                          columns={columns}
                          search
                        >
                          {(props) => (
                            <div>
                              <BootstrapTable
                                {...props.baseProps}
                                striped
                                hover
                                pagination={paginationFactory()}
                              />
                            </div>
                          )}
                        </ToolkitProvider>
                      </Container>
                    ) : (
                      <p className="container">No compliance results to display.</p>
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

export default ComplianceTable;