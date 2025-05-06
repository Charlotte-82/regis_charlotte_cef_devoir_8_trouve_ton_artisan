import React from "react";
import "../assets/css/Home.css";
import Chevron from "../assets/images/chevron-droit.png";
import ArtisanMains from "../assets/images/ArtisanMains.jpg";
import Boulanger from "../assets/images/boulanger.jpg";
import Chauffe from "../assets/images/chauffagiste.jpg";
import Chocolat from "../assets/images/chocolaterie.jpg";

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

      <hr className="hrTitre2" style={{ marginLeft: "6em" }} />
      <h2 style={{ marginLeft: "3em" }}>Artisans du mois</h2>

      <div
        className="d-flex justify-content-between px-3 py-4"
        style={{ gap: "20px" }}
      >
        {/* Top Artisan 1 */}
        <div
          className="d-flex flex-column p-3"
          style={{ width: "30%", height: "35em" }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              height: "100px",
            }}
          >
            <img
              src={Boulanger}
              alt="mains de boulanger qui tiennent une baguette"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginRight: "20px",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "220%",
                left: "60px",
                height: "7em",
                width: "89%",
                borderLeft: "solid 2px #0074c7",
                zIndex: 2,
              }}
            >
              <h3
                style={{
                  zIndex: 1,
                  textAlign: "right",
                  paddingTop: "3em",
                  color: "#00497c",
                }}
              >
                Au Pain Chaud
              </h3>
              <p>À propos</p>
              <button className="boutonDecouvrir">
                Découvrir
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "2em" }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Top Artisan 2 */}
        <div className="d-flex flex-column p-3" style={{ width: "30%" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              height: "100px",
            }}
          >
            <img
              src={Chauffe}
              alt="mains de chauffagiste qui règle une chaudière"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginRight: "20px",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "220%",
                left: "60px",
                height: "7em",
                width: "89%",
                borderLeft: "solid 2px #0074c7",
                zIndex: 2,
              }}
            >
              <h3
                style={{
                  zIndex: 1,
                  textAlign: "right",
                  paddingTop: "3em",
                  color: "#00497c",
                }}
              >
                Orville Salmons
              </h3>
              <p>À propos</p>
              <button className="boutonDecouvrir">
                Découvrir
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "2em" }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Top Artisan 3 */}
        <div className="d-flex flex-column p-3" style={{ width: "30%" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              height: "100px",
            }}
          >
            <img
              src={Chocolat}
              alt="mains de chocolatier qui saupoudre des brisures de noisette sur une tablette"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginRight: "20px",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "220%",
                left: "60px",
                height: "7em",
                width: "89%",
                borderLeft: "solid 2px #0074c7",
                zIndex: 2,
              }}
            >
              <h3
                style={{
                  zIndex: 1,
                  textAlign: "right",
                  paddingTop: "3em",
                  color: "#00497c",
                }}
              >
                Chocolaterie Labbé
              </h3>
              <p>À propos</p>
              <button className="boutonDecouvrir">
                Découvrir
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "2em" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
