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
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar bg-light shadow-sm vh-100 px-3 py-3 transition-all"
        style={{
          width: isOpen ? '240px' : '60px',
          overflow: 'hidden',
          transition: 'width 0.3s ease',
        }}
      >
        {/* Bouton Toggle */}
        <button
          className="btn btn-outline-secondary mb-3 w-100 d-flex align-items-center justify-content-center"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Contenu Sidebar */}
        {isOpen && (
          <>
            <h3 className="mb-4 py-2">R-PROJECT</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/">
                  <FaTachometerAlt className="me-2" /> Dashboard
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/projets">
                  <FaProjectDiagram className="me-2" /> Projets
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/utilisateurs">
                  <FaUsers className="me-2" /> Utilisateurs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/commentaires">
                  <FaComments className="me-2" /> Commentaires
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-black d-flex align-items-center" to="/taches">
                  <FaTasks className="me-2" /> Tâches
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
