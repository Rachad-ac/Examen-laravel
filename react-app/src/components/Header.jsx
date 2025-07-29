import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import Login from "./modals/Login";
import Register from "./modals/Register"; 
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogoutSubmit = () => {
    logout();
    navigate("/login");
  };

  const handleSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light px-3 py-3 shadow-sm">
        <div className="d-flex align-items-center text-center">
           {!isAuthenticated ? (
          <h3 className="mb-3 py-1 px-3 text-primary">R-PROJECT</h3>) :
          (null)}
        </div>
        <div className="d-flex align-items-center">
          {isAuthenticated ? (
          <span className="p-3 bg-light mx-2 rounded-circle text-center shadow-sm">
            <FaUser size={20} color="black" className="rounded-circle  " />
          </span>) : (<p></p>)
          }
          {isAuthenticated ? (
            
            <button
              className="btn btn-warning text-light mx-3"
              onClick={handleLogoutSubmit}
              aria-label="Se déconnecter"
            >
              <FaSignOutAlt title="Déconnexion" color="red" className='mx-1'/> Se déconnecter
            </button>
          ) : (
            <button
              className="btn btn-primary mx-3"
              onClick={() => setShowLoginModal(true)}
              aria-label="Se connecter"
            >
              <FaSignInAlt title="Connexion" color="green" className='mx-1'/> Se connecter
            </button>
          )}
        </div>
      </nav>

      <Login 
        showModal={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onOpenRegister={handleSwitchToRegister}
      />

      <Register
        showModal={showRegister}
        onClose={() => setShowRegister(false)}
        onOpenLogin={handleSwitchToLogin}
      />
    </>
  );
}

export default Header;
