import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <span
          className="brand"
          onClick={() => navigate('/components/dashboard')}
          style={{ cursor: 'pointer' }}
        >
          Container Security
        </span>

        <div className="navbar-right">
          <span className="navbar-text">Hi {email}</span>
          <button
            className="logout-button"
            onClick={() => {
              localStorage.removeItem('userEmail');
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
