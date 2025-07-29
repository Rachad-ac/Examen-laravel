import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start shadow-sm mt-auto">
      <div className="container p-4">
        <div className="row">

          {/* À propos */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">À propos</h5>
            <p className="text-muted">
              Notre application vous aide à gérer vos projets, tâches et équipe
              avec efficacité. Simple, rapide et collaborative.
            </p>
          </div>

          {/* Liens rapides 
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Liens rapides</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/dashboard" className="text-decoration-none text-muted">Tableau de bord</a></li>
              <li><a href="/login" className="text-decoration-none text-muted">Connexion</a></li>
              <li><a href="/register" className="text-decoration-none text-muted">Inscription</a></li>
            </ul>
          </div>
          */}

          {/* Réseaux sociaux */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Suivez-nous</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li><a href="#" className="text-muted"><i className="fab fa-facebook fa-lg"></i></a></li>
              <li><a href="#" className="text-muted"><i className="fab fa-twitter fa-lg"></i></a></li>
              <li><a href="#" className="text-muted"><i className="fab fa-linkedin fa-lg"></i></a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-primary text-white">
        © {year} Examen Laravel - Gestion Projets. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
