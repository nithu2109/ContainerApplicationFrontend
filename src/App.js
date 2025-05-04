import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import UserForm from "./components/userform";
import ComplianceTable from "./components/compliancetable";
import Sign_in from "./components/sign_in";
import Sign_up from "./components/sign_up";
import MonitoringDataTable from "./components/monitoringtable";
import VulnerabilityData from "./components/vulnerabilitytable";
import Alertstable from "./components/alertstable";
import { AuthProvider } from "./components/AuthContext";

export const App=()=> {
  const [isAuthenticated,setIsAuthenticated]=useState(true);
  const loginHandler=()=>{
    setIsAuthenticated(true);
  }
  const logoutHandler=()=>{
    setIsAuthenticated(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign_in onLogin={loginHandler}/> } />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/logout" element={<Sign_in onLogin={logoutHandler} />} />
        <Route path="/components/dashboard" element={<Dashboard />} />
        <Route
            path="/components/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/sign_in" />
            }
          />
        <Route
            path="/components/create-project"
            element={
              isAuthenticated ? <UserForm /> : <Navigate to="/sign_in" />
            }
          />
          <Route
            path="/components/Monitoring"
            element={
              isAuthenticated ? <MonitoringDataTable /> : <Navigate to="/sign_in" />
            }
          />
          <Route
            path="/components/vulnerability"
            element={
              isAuthenticated ? <VulnerabilityData /> : <Navigate to="/sign_in" />
            }
          />
          <Route
            path="/components/compliance"
            element={
              isAuthenticated ? <ComplianceTable /> : <Navigate to="/sign_in" />
            }
          />  
          <Route
            path="/components/alerts"
            element={
              isAuthenticated ? <Alertstable /> : <Navigate to="/sign_in" />
            }
          />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
