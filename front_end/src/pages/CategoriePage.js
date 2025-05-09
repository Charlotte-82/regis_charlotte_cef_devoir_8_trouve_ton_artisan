import React from "react";
import AlimCat from "../assets/images/alimentationCat.jpg";
import FabCat from "../assets/images/fabricationCat.jpg";
import BatCat from "../assets/images/batimentCat.jpg";
import ServCat from "../assets/images/servicesCat.jpg";
import Chevron from "../assets/images/chevron-droit.png";

function CategoriePage() {
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

        {/* titre page */}
        <h1>Catégories d'artisanat</h1>
      </div>
      {/* fin entête */}
      {/* début contenu page catégorie */}
      <div
        className="d-flex justify-content-around px-3 py-4"
        style={{ gap: "20px" }}
      >
        {/* catégorie 1 Alimentation */}
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 className="card-title">Alimentation</h2>
            <button className="boutonDecouvrir">
              <a href="/alimpage">Découvrir</a>
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: "2em" }}
              ></i>
            </button>
          </div>
          <img
            src={AlimCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>

        {/* catégorie 2 Fabrication */}
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 className="card-title">Fabrication</h2>
            <button className="boutonDecouvrir">
              <a href="/fabpage">Découvrir</a>
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: "2em" }}
              ></i>
            </button>
          </div>
          <img
            src={FabCat}
            class="card-img-top"
            alt="un atelier composé d'un bureau surlequl se trouvent un ordinateur et différentes machines et derrière le mur est recouvert d'un étagères pleine de différents matériaux"
          />
        </div>
      </div>

      {/* catégorie 3 Bâtiment */}
      <div
        className="d-flex justify-content-around px-3 py-4"
        style={{ gap: "20px" }}
      >
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 className="card-title">Bâtiment</h2>
            <button className="boutonDecouvrir">
              <a href="/batpage">Découvrir</a>
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: "2em" }}
              ></i>
            </button>
          </div>
          <img
            src={BatCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>

        {/* catégorie 4 Services */}
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 className="card-title">Services</h2>
            <button className="boutonDecouvrir">
              <a href="/servpage">Découvrir</a>
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: "2em" }}
              ></i>
            </button>
          </div>
          <img
            src={ServCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriePage;
