import { useEffect, useState } from "react";
import { getArtisansParCategorie } from "../services/artisansServices";
import { Link } from "react-router-dom";

function ArtisansParSpe({ categorie }) {
  const [groupes, setGroupes] = useState({});

  useEffect(() => {
    getArtisansParCategorie(categorie)
      .then((res) => {
        console.log("Réponse reçue du back :", res.data);

        if (!Array.isArray(res.data)) {
          console.warn("La réponse n'est pas un tableau :", res.data);
          return;
        }

        const data = res.data;
        const artisanTri = {};

        data.forEach((artisan) => {
          console.log("Artisan reçu :", artisan);

          const specialite = artisan.specialite_libelle || "Autre";

          if (!artisanTri[specialite]) {
            artisanTri[specialite] = [];
          }

          artisanTri[specialite].push(artisan);
        });

        setGroupes(artisanTri);
      })
      .catch((err) =>
        console.error("Erreur lors du chargement des artisans :", err)
      );
  }, [categorie]);

  return (
    <div className="container mt-4" style={{ marginLeft: "3em" }}>
      <h2>Artisans de la catégorie « {categorie} »</h2>

      {Object.keys(groupes).length === 0 ? (
        <p>Aucun artisan trouvé ou en cours de chargement.</p>
      ) : (
        Object.entries(groupes).map(([specialite, artisans]) => (
          <div key={specialite} className="mb-4">
            <h3>{specialite}</h3>

            <div className="row flex-wrap justify-content-between">
              {artisans.map((artisan) => {
                console.log("artisan :", artisan);

                return (
                  <div
                    key={artisan.Id_artisan || artisan.id || Math.random()}
                    className="col-12 col-md-6 col-lg-4 mb-4"
                  >
                    <div
                      className="card h-100 p-3 shadow-sm"
                      style={{
                        backgroundColor: "#f1f8fc",
                        border: "solid #0074c7 2px",
                      }}
                    >
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link
                            to={`/ficheartisan/${artisan.Id_artisan}`}
                            className="text-decoration-none text-dark"
                          >
                            {artisan.artisan_nom || "Nom inconnu"}
                          </Link>{" "}
                          <small>
                            {" "}
                            / {artisan.ville_nom || "Non renseignée"}
                          </small>
                        </h4>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          {artisan.artisan_note}/5
                        </div>
                        <p className="card-text">
                          {artisan.artisan_apropos || "Pas de description."}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ArtisansParSpe;
