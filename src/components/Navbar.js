import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Reuse sidebar CSS for consistent styling

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* App Name or Logo */}
        <a className="brand" href="#">
          Container Security
        </a>

        <div className="navbar-right">
          <span className="navbar-text">Hi User1</span>
          <button
            className="logout-button"
            onClick={() => navigate('/')}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// // import './Navbar.css'; 

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
//       <div className="container-fluid">
//         {/* App Name or Logo */}
//         <a className="navbar-brand" href="#">
//           Container Security
//         </a>

//         {/* Collapsible for mobile view (optional) */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
//           <span className="navbar-text me-3">
//             Hi User1
//           </span>
//           <button className="btn btn-outline-danger" onClick={() => alert("Logging out...")}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
