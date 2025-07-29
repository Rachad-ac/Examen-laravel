import React from "react";
import { FaRocket, FaUsers, FaProjectDiagram} from "react-icons/fa";
import Footer from "./Footer";

function Welcome({onOpenRegister}) {

  return (
    <div className="container-fluid p-0">
      {/* Section Hero */}
      <section className="bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div>
          <h1 className="display-3 fw-bold">Bienvenue sur notre plateforme</h1>
          <p className="lead mt-3">
            Gérez vos projets et vos tâches en toute simplicité avec notre application.
          </p>
          <button
            type="button"
            className="btn btn-light btn-lg mt-4 shadow"
            onClick={onOpenRegister}
            
          >
            <FaRocket className="me-2" /> Commencer maintenant
          </button>
        </div>
      </section>

      {/* Section Services */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <div className="card-body">
                <FaProjectDiagram size={50} className="text-primary mb-3" />
                <h5 className="card-title">Gestion de projets</h5>
                <p className="card-text">
                  Créez, organisez et suivez vos projets en quelques clics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <div className="card-body">
                <FaUsers size={50} className="text-primary mb-3" />
                <h5 className="card-title">Collaboration</h5>
                <p className="card-text">
                  Invitez votre équipe et travaillez ensemble efficacement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <div className="card-body">
                <FaRocket size={50} className="text-primary mb-3" />
                <h5 className="card-title">Productivité</h5>
                <p className="card-text">
                  Suivez vos tâches et atteignez vos objectifs plus vite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="bg-light text-center py-5 mb-3">
        <h2 className="fw-bold">Prêt à commencer ?</h2>
        <p className="mt-3">Inscrivez-vous dès maintenant et découvrez toutes nos fonctionnalités.</p>
        <button
          type="button"
          className="btn btn-primary btn-lg mt-3 py-1 px-5"
          onClick={onOpenRegister}
        >
        S'inscrire
        </button>
      </section>

      <section className="bg-light text-center py-0">
        <Footer/>
      </section>
    </div>
  );
}

export default Welcome;
