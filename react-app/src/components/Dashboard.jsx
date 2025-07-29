import React, { useState } from 'react';
import Welcome from "./Welcome";
import Register from "./modals/Register"; 
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  const handleOpenRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <>
      {!isAuthenticated ? (
        <>
          <Welcome onOpenRegister={handleOpenRegister} />
          {showRegister && <Register showModal={showRegister} onClose={handleCloseRegister} />}
        </>
      ) : (
        <div className="container p-0">
          <div className="card shadow p-4">
            <h2 className="mb-3 text-primary">Tableau de Bord</h2>
            <p>Bienvenue dans votre espace personnel.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
