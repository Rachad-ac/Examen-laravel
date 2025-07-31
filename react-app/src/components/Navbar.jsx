// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTachometerAlt, FaProjectDiagram, FaUsers, FaComments, FaTasks } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm " >
      {/* Sidebar */}
      <div
        className="sidebar bg-light shadow-sm vh-100 px-0 py-1 transition-all"
        style={{
          width: isOpen ? '240px' : '60px',
          overflow: 'hidden',
          transition: 'width 0.3s ease',
        }}
      >
        

        {/* Bouton Toggle */}
        <div className="d-flex justify-content-between align-items-center px-3 py-3 mb-4 shadow-sm w-100">
          {isOpen &&
          <h3 className="mb-0  text-primary">R-PROJECT</h3>
          }
          
          <button className="btn mx-1 " onClick={toggleSidebar} aria-label="Ouvrir le menu">
            <FaBars size={20} />
          </button>
        </div>
          
        {isOpen && (
          <>
            <ul className="nav flex-column mx-2"> 
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/">
                  <FaTachometerAlt className="me-2 text-primary" /> Dashboard
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/projets">
                  {isOpen &&<FaProjectDiagram className="me-2 text-primary" />} Projets
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/utilisateurs">
                  <FaUsers className="me-2 text-primary" /> Utilisateurs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/commentaires">
                  <FaComments className="me-2 text-primary" /> Commentaires
                </Link>
              </li>
              <li className="nav-item mb-2 text-primary">
                <Link className="nav-link text-black d-flex align-items-center" to="/taches">
                  <FaTasks className="me-2 text-primary" /> Tâches
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
