// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Dashboard from "./Dashboard";
import { useAuth } from "../context/AuthContext";

function Layout({ children }) {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <>
          <div className="d-flex vh-100 overflow-hidden" >
            <div className="flex-grow-1 d-flex flex-column">
              <Header />
              <div
                className="flex-grow-1 p-3 overflow-auto bg-light"
                style={{ minHeight: 0 }}
              >
                {!isAuthenticated ? <Dashboard /> : children}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex vh-100 overflow-hidden" >
          <Navbar />
          <div className="flex-grow-1 d-flex flex-column">
            <Header />
            <div
              className="flex-grow-1 p-3 overflow-auto bg-light"
              style={{ minHeight: 0 }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
