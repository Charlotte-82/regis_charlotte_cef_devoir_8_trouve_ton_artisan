import React from "react";
import Chevron from "../assets/images/chevron-droit.png";

function AlimPage() {
  return (
    <div>
      <div style={{ marginTop: "1em" }}>
        <a
          href="/"
          style={{
            color: "#0074c7",
            marginLeft: "1em",
            textDecoration: "none",
          }}
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
        <a
          href="/categoriepage"
          style={{
            color: "#0074c7",
            marginLeft: "1em",
            textDecoration: "none",
          }}
        >
          Catégorie
        </a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        <h1>Catégorie d'artisanat</h1>
      </div>
    </div>
  );
}
export default AlimPage;
