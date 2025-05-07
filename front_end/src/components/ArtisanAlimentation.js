import { useEffect, useState } from "react";
import { getArtisansParCategorie } from "../services/artisansServices";

function ArtisansAlim() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    getArtisansParCategorie("alimentation")
      .then((res) => setArtisans(res.data))
      .catch((err) =>
        console.error("Erreur lors du chargement des artisans :", err)
      );
  }, []);

  return (
    <div>
      <hr className="hrTitre2" style={{ marginLeft: "5em" }} />
      <h2 style={{ marginLeft: "2.5em" }}>
        Artisans de la catégorie "Alimentation"
      </h2>
      {artisans.length === 0 ? (
        <p style={{ marginLeft: "5em" }}>Aucun artisan trouvé.</p>
      ) : (
        artisans.map((artisan) => (
          <div key={artisan.id} style={{ marginBottom: "20px" }}>
            <h3>{artisan.nom}</h3>
            <p>{artisan.apropos}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ArtisansAlim;
