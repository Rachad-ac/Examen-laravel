import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import  UserApi  from "../../../api/UserApi"; 

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
    const { data } = await UserApi.register({
      name,
      email,
      password,
      password_confirmation,
    });

    console.log("Réponse register :", data); // Debug

    // Récupérer le token et l'utilisateur
    const { user, token } = data;

    // Appeler la fonction login de ton AuthContext
    login(user, token);

    // Réinitialiser les champs
    setName("");
    setEmail("");
    setPassword("");
    setPassword_confirmation("");

    if (onClose) onClose();
  } catch (err) {
    const errorData = err.response?.data;
    if (errorData?.errors) {
      const firstKey = Object.keys(errorData.errors)[0];
      setError(errorData.errors[firstKey][0]);
    } else {
      setError(errorData?.message || "Erreur d'inscription");
    }
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
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={onClose}>
                    Annuler
                  </button>
                  <button type="submit" className="btn btn-success" disabled={loading}>
                    {loading ? "Création..." : "Créer le compte"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
