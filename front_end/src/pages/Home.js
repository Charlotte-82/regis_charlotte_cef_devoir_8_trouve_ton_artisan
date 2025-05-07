import React from "react";
import "../assets/css/Home.css";
import Chevron from "../assets/images/chevron-droit.png";
import TopArtisans from "../components/ArtisanTop";

function Home() {
  return (
    <div style={{ marginTop: "1em" }}>
      <div className="banner"></div>

      <a
        href="/"
        style={{ color: "#0074c7", marginLeft: "1em", textDecoration: "none" }}
      >
        Accueil
      </a>
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      <h1>La Plateforme de recherche d'un artisan de votre région</h1>
      <div className="d-flex justify-content-between align-items-start px-3 py-2">
        <div
          className="d-flex flex-column justify-items-start align-items-start"
          style={{ marginLeft: "5em" }}
        >
          <hr className="hrTitre2" />
          <h2>Comment trouver votre artisan ?</h2>
          <p
            style={{
              fontSize: "larger",
              marginRight: "5em",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            Sur cette plateforme, la région Auvergne-Rhône-Alpes a réuni tous
            les talentueux artisans. Choisissez un métier selon vos besoins, une
            localité et expliquez votre projet pour le voir devenir réalité !
          </p>
          <p
            style={{
              fontSize: "larger",
              marginRight: "5em",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            1. Choisissez la catégorie d’artisanat dans le menu.
          </p>
          <p
            style={{
              fontSize: "larger",
              marginRight: "5em",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            2. Choisissez un artisan selon sa spécialité.
          </p>
          <p
            style={{
              fontSize: "larger",
              marginRight: "5em",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            3. Contactez-le via le formulaire de contact.
          </p>
          <p
            style={{
              fontSize: "larger",
              marginRight: "5em",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            {" "}
            4. Une réponse vous sera apportée sous 48h.
          </p>
          <button className="boutonDecouvrir">
            <a
              href="/categoriepage"
              style={{ textDecoration: "none", color: "#00497c" }}
            >
              Rechercher un artisan
            </a>
            <i className="bi bi-arrow-right" style={{ marginLeft: "2em" }}></i>
          </button>
        </div>
      </div>

      <hr className="hrTitre2" style={{ marginLeft: "6em" }} />
      <h2 style={{ marginLeft: "3em" }}>Artisans du mois</h2>

      <TopArtisans />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      >
        <button className="boutonBasPage">
          <a
            href="/categoriepage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Voir tous les artisans
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
