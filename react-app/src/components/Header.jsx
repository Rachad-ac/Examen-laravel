import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import Login from "./modals/user-modal/Login";
import Register from "./modals/user-modal/Register"; 
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(false);
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
          <h3 className=" fw-bold mt-1 mb-1 py-1 px-3 text-primary">R-PROJECT</h3>) :
          (null)}
        </div>
        <div className="d-flex align-items-center">
          {isAuthenticated ? (
          <span className="p-2 bg-light mx-0 rounded-circle text-center shadow-sm">
            <FaUser size={20} color="black" className="rounded-circle  " />
          </span>) : (<p></p>)
          }
          {isAuthenticated ? (
            
            <button
              className="btn btn-outline-danger  btn-sm mx-4 py-1 px-3"
              onClick={handleLogoutSubmit}
              disabled={loading}
              aria-label="Se déconnecter"
            >
              <FaSignOutAlt title="Déconnexion" color="red" className='mx-1'/> 
              {" "}
              {loading ? "Deconnexion..." : "Se déconnecter"}
            </button>
          ) : (
            <button
              className="btn btn-outline-primary btn-sm mx-4 py-1 px-3"
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
