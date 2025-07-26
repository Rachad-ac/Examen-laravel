// src/components/Layout.jsx
import React from 'react';
import Navbar from './navbar';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="d-flex ">
      <Navbar />
      <div className="flex-grow-1 " >
        <Header />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
