import { useEffect, useState } from "react";
import { getArtisansParCategorie } from "../services/artisansServices";

function ArtisansParSpe({ categorie }) {
  const [groupes, setGroupes] = useState({});

  useEffect(() => {
    getArtisansParCategorie(categorie)
      .then((res) => {
        console.log("Réponse reçue :", res.data);
        const data = res.data;

        const artisanTri = {};

        data.forEach((artisan) => {
          const specialite = artisan.Specialite?.specialite_libelle || "Autre";

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
    <div className="container mt-4">
      <h2>Artisans de la catégorie "{categorie}"</h2>
      {Object.keys(groupes).length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : (
        Object.entries(groupes).map(([specialite, artisans]) => (
          <div key={specialite} className="mb-4">
            <h3>{specialite}</h3>
            {artisans.map((artisan) => (
              <div key={artisan.Id_artisan} className="mb-2">
                <h5>{artisan.artisan_nom}</h5>
                <p>{artisan.artisan_apropos}</p>
                <small>Ville : {artisan.Ville?.ville_nom}</small>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default ArtisansParSpe;
