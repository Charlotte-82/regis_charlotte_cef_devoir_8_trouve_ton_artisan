import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtisanById } from "../services/artisansServices";
import FormulaireContact from "../components/FormulaireContact";

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
    const arrondi = Math.round(note * 2) / 2; // arrondi à 0.5 près

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
      <div>
        <h2>{artisan?.artisan_nom}</h2>
        <div className="row">
          <div className="col">
            <img
              src={artisan?.artisan_image}
              alt={artisan?.artisan_nom}
              className="imageFiche"
            />
          </div>
          <div className="col" style={{ alignContent: "center" }}>
            <p>
              <strong>Ville :</strong>{" "}
              {artisan?.ville?.ville_nom || "Non renseignée"}
            </p>
            <p>
              <strong>Spécialité :</strong>{" "}
              {artisan?.specialite?.specialite_libelle || "Non renseignée"}
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
      <hr />
      <FormulaireContact artisanNom={artisan.artisan_nom} />
    </div>
  );
}

export default FicheArtisan;
