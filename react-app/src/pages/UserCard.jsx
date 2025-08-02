import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserApi from "../api/UserApi";

const UserCard = ({onOpenRegister}) => {
  const { user, token } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !token) {
      navigate("/login", { state: { from: "/users" }, replace: true });
      return;
    }

    if (user.role !== "admin") {
      alert("Accès refusé. Réservé aux administrateurs.");
      navigate("/", { replace: true });
      return;
    }

    UserApi.getAllUsers()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.error("Erreur récupération utilisateurs :", err);
        setError("Impossible de charger les utilisateurs.");
      });
  }, [user, token, navigate]);

  const handleEdit = (id) => {
    alert(`Modifier utilisateur ID ${id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
    if (confirm) {
      alert(`Supprimer utilisateur ID ${id}`);
      // Ici : suppression API + mise à jour state
    }
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-0 py-0">
        <h2 className="text-primary fw-bold">Liste des utilisateurs</h2>
        <button
          className="btn btn-primary"
          onClick={onOpenRegister}
        >
          + Ajouter
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive mt-2 vh-100">
        <table className="table bg-primary table-hover table-bordered shadow-sm rounded py-5 mb-5">
          <thead className="bg-primary text-white text-center">
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Date création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-muted">
                  Chargemment.... 
                </td>
              </tr>
            )}
            {users.map((u, i) => (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span
                    className={`badge ${
                      u.role === "admin" ? "text-success" : "text-warning"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
                <td>{new Date(u.created_at).toLocaleDateString()}</td>
                <td>
                  {/* Dropdown Actions */}
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      id={`dropdownMenuButton${u.id}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`dropdownMenuButton${u.id}`}
                    >
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(u.id)}
                        >
                          Modifier
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(u.id)}
                        >
                          Supprimer
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCard;
