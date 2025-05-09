import React from "react";
import Chevron from "../assets/images/chevron-droit.png";
import ArtisansParSpe from "../components/artisanParSpe";

function ServPage() {
  return (
    <div>
      {/* début entête */}
      <div style={{ marginTop: "1em" }}>
        {/* chemin emprunté par l'utilisateur depuis la page d'accueil */}
        <a href="/">Accueil</a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        <a href="/categoriepage">Catégorie</a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        <a href="/servpage">Services</a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>

        {/* titre page */}
        <h1>Services</h1>
      </div>
      {/* fin entête */}
      <ArtisansParSpe categorie="services" />
    </div>
  );
}

export default ServPage;
