import React from "react";
import AlimCat from "../assets/images/alimentationCat.jpg";
import FabCat from "../assets/images/fabricationCat.jpg";
import BatCat from "../assets/images/batimentCat.jpg";
import ServCat from "../assets/images/servicesCat.jpg";
import Chevron from "../assets/images/chevron-droit.png";

function CategoriePage() {
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
        <h1>Catégories d'artisanat</h1>
      </div>
      <div
        className="d-flex justify-content-around px-3 py-4"
        style={{ gap: "20px" }}
      >
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 class="card-title" style={{ color: "#00497c" }}>
              Alimentation
            </h2>
            <button className="boutonDecouvrir">
              <a
                href="/alimpage"
                style={{ textDecoration: "none", color: "#00497c" }}
              >
                Découvrir
              </a>
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

        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 class="card-title" style={{ color: "#00497c" }}>
              Fabrication
            </h2>
            <button className="boutonDecouvrir">
              Découvrir
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

      <div
        className="d-flex justify-content-around px-3 py-4"
        style={{ gap: "20px" }}
      >
        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 class="card-title" style={{ color: "#00497c" }}>
              Bâtiment
            </h2>
            <button className="boutonDecouvrir">
              Découvrir
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

        <div class="card" style={{ width: "35%", border: "none" }}>
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2 class="card-title" style={{ color: "#00497c" }}>
              Services
            </h2>
            <button className="boutonDecouvrir">
              Découvrir
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
