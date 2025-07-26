// src/components/Layout.jsx
import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import Welcome from "./Welcome";
import { useAuth } from "../context/AuthContext";

function Layout({ children }) {
  const { isAuthenticated } = useAuth(); // Récupère l'état de connexion

  return (
    <div className="d-flex">
      <Navbar />
      <div className="flex-grow-1">
        <Header />
        <div className="p-4">
          {!isAuthenticated ? <Welcome /> : children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
