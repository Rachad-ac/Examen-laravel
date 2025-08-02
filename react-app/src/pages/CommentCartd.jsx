import React, { useEffect, useState } from "react";
import CommentApi from "../api/commentApi";

const CommentCard = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    CommentApi.index()
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error("Erreur récupération des commentaires :", err);
        setError("Impossible de charger les commentaires.");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Commentaires</h4>

      {error && <div className="alert alert-danger">{error}</div>}
      {comments.length === 0 && <p className="text-muted">Aucun commentaire pour le moment.</p>}

      <div className="d-flex flex-wrap gap-3 justify-content-start">
        {comments.map((comment) => (
          <div
            className="card shadow-sm p-3"
            key={comment.id}
            style={{
              width: "250px",
              height: "220px",
              borderRadius: "12px",
              flex: "0 0 auto",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div className="d-flex flex-column h-100">
              <div className="mb-2">
                <h6 className="fw-bold mb-1 text-primary">{comment.name}</h6>
                <p className="mb-2" style={{ fontSize: "0.9rem", flexGrow: 1 }}>
                  {comment.comment.length > 100
                    ? comment.comment.slice(0, 97) + "..."
                    : comment.comment}
                </p>
              </div>
              <small className="text-muted mt-auto">
                {new Date(comment.created_at).toLocaleString()}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCard;
