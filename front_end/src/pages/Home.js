import React from "react";
import "../assets/css/Home.css";
import Chevron from "../assets/images/chevron-droit.png";
import ArtisanMains from "../assets/images/ArtisanMains.jpg";

function Home() {
  return (
    <div style={{ marginTop: "1em" }}>
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
          <h2>Fonctionnement du site</h2>
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
          <button className="boutonDecouvrir">
            Découvrir
            <i className="bi bi-arrow-right" style={{ marginLeft: "2em" }}></i>
          </button>
        </div>
        <span>
          <img
            src={ArtisanMains}
            alt="mains d'artisan tenant un rabot et travaillant le bois"
            className="imageHome1"
          ></img>
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-start px-3 py-2">
        <div
          className="d-flex flex-column justify-items-start align-items-start"
          style={{ marginLeft: "5em" }}
        >
          <hr className="hrTitre2" />
          <h2>Artisans du mois</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
