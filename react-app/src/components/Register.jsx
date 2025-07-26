import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { register } from "../api/axiosInstance";

function Register({ showModal, onClose, onOpenLogin }) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await register({
        name,
        email,
        password,
        password_confirmation,
      });
      login(data.user || { email });

      setName("");
      setEmail("");
      setPassword("");
      setPassword_confirmation("");

      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Erreur d'inscription");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show fade" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Créer un compte</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleRegister} autoComplete="off">
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
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

                <div className="mb-3">
                  <label className="form-label">Confirmation Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mt-3 text-center">
                  <small>
                    Déjà inscrit ?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-primary text-decoration-none"
                      onClick={onOpenLogin}
                    >
                      Se connecter
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
                className="btn btn-success"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Création..." : "Créer le compte"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
