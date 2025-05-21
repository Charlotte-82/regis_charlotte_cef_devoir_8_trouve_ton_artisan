import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtisanById } from "../services/artisansServices";
import FormulaireContact from "../components/FormulaireContact";
import Chevron from "../assets/images/chevron-droit.png";

function FicheArtisan() {
  const { id } = useParams();

  console.log("ID reçu dans URL :", id);

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    console.log("Appel API avec l'ID :", id);
    getArtisanById(id)
      .then((res) => {
        console.log("Réponse du back :", res);
        setArtisan(res);
      })
      .catch((err) => console.error("Erreur API :", err));
  }, [id]);

  if (!artisan) return <p>Chargement...</p>;

  console.log("Objet artisan :", artisan);

  const noteEtoile = (note) => {
    const etoiles = [];
    const arrondi = Math.round(note * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= arrondi) {
        etoiles.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i - 0.5 === arrondi) {
        etoiles.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        etoiles.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }

    return etoiles;
  };

  return (
    <div className="container mt-4">
      <a href="/" className="lienChemin">
        Accueil
      </a>
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      <a href="/categoriepage" className="lienChemin">
        Catégorie
      </a>
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      <a
        href={`/par-categorie/${artisan?.specialite?.specialite_libelle}`}
        className="lienChemin"
      >
        {artisan?.specialite?.specialite_libelle}
      </a>{" "}
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      <a href={`/ficheartisan/${artisan?.id_artisan}`} className="lienChemin">
        {artisan?.artisan_nom}
      </a>{" "}
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      <div>
        <h1>{artisan?.artisan_nom}</h1>
        <hr className="hrTitre2"></hr>
        <h2>{artisan?.specialite?.specialite_libelle || "Non renseignée"}</h2>
        <div className="row">
          <div className="col colonneImage">
            <img
              src={artisan?.artisan_image}
              alt={artisan?.artisan_nom}
              className="imageFiche"
            />
          </div>
          <div className="col colonneVille">
            <p>
              <strong>Ville :</strong>{" "}
              {artisan?.ville?.ville_nom || "Non renseignée"}
            </p>

            <p>{artisan?.artisan_apropos}</p>
            <p>
              <strong>Note :</strong> {noteEtoile(Number(artisan.artisan_note))}
              ({artisan?.artisan_note}/5){" "}
            </p>
            <div className="d-flex align-items-center"></div>

            {artisan?.artisan_site && (
              <p>
                <a href={artisan.artisan_site} target="_blank" rel="noreferrer">
                  <button className="boutonDecouvrir">
                    Aller sur le site de cet artisan
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginLeft: "2em" }}
                    ></i>
                  </button>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      <FormulaireContact artisanNom={artisan.artisan_nom} />
    </div>
  );
}

export default FicheArtisan;
