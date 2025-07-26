import React, { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Login({ showModal, onClose, onOpenRegister }) {
  const { login: contextLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

  try {
    await contextLogin({ email, password }); 
    setEmail("");    
    setPassword("");
    onClose();
    navigate("/"); 
  } catch (err) {
    setError(err?.response?.data?.message || err.message || "Identifiants incorrects");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show fade" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Connexion</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLoginSubmit} autoComplete="off">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mt-3 text-center">
                  <small>
                    Besoin d'un compte ?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-success text-decoration-none"
                      onClick={onOpenRegister}
                    >
                      S'inscrire
                    </button>
                  </small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Annuler
              </button>
              <button
                className="btn btn-primary"
                onClick={handleLoginSubmit}
                disabled={loading}
              >
                <FaSignInAlt title="Connexion" color="green" />
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
