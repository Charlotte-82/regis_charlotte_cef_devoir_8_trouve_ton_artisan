import { useEffect, useState } from "react";
import { getArtisansParCategorie } from "../services/artisansServices";

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
    <div className="container mt-4" style={{ marginLeft: "2em" }}>
      <h2>Artisans de la catégorie « {categorie} »</h2>

      {Object.keys(groupes).length === 0 ? (
        <p>Aucun artisan trouvé ou en cours de chargement.</p>
      ) : (
        Object.entries(groupes).map(([specialite, artisans]) => (
          <div key={specialite} className="mb-4">
            <h3>{specialite}</h3>

            {artisans.map((artisan) => (
              <div
                key={artisan.Id_artisan || artisan.id || Math.random()}
                className="card mb-3 p-3 shadow-sm"
                style={{
                  backgroundColor: "#f1f8fc",
                  border: "solid #0074c7 2px",
                }}
              >
                <div class="row">
                  <img
                    src={artisan.artisan_image}
                    style={{ height: "6em", width: "8em" }}
                  />
                  <div class="col">
                    <h4>
                      {artisan.artisan_nom || "Nom inconnu"}
                      <small> / {artisan.ville_nom || "Non renseignée"}</small>
                    </h4>
                    <p>{artisan.artisan_apropos || "Pas de description."}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default ArtisansParSpe;
