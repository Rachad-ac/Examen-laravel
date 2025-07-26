import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "../components/login";
import Register from "./Register"; 
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);
  
  const handleOpenRegister = () => {
    setShowLoginModal(false);
    setShowRegister(true);
  };
  
  const handleCloseRegister = () => setShowRegister(false);
  const handleLogoutSubmit = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light px-3 py-3 shadow-sm">
        <div className="d-flex align-items-center">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Rechercher..."
            aria-label="Search"
            style={{ width: "550px" }}
          />
        </div>
        <div className="d-flex align-items-center">
          <span className="px-2 py-3 bg-light mx-2 rounded-circle text-center shadow-sm">
            <FaUser size={25} color="black" className="rounded-circle mx-3 my-1" />
          </span>
          {isAuthenticated ? (
            <button className="btn btn-warning text-light" onClick={handleLogoutSubmit}>
              <FaSignOutAlt title="Déconnexion" color="red" /> Se déconnecter
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleLoginClick}>
              <FaSignInAlt title="Connexion" color="green" /> Se connecter
            </button>
          )}
        </div>
      </nav>

      <Login 
        showModal={showLoginModal}
        onClose={handleCloseLogin}
        onOpenRegister={handleOpenRegister}
      />

      <Register
        showModal={showRegister}
        onClose={handleCloseRegister}
        onOpenLogin={() => {
          setShowRegister(false);
          setShowLoginModal(true);
        }}
      />

    </>
  );
}

export default Header;