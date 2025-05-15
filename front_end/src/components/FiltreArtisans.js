import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecialitesByCategorie } from "../services/specialitesServices";
import { getVillesBySpecialite } from "../services/villesServices";
import { getArtisansFiltres } from "../services/artisansServices";

function FiltreArtisans() {
  const { categorie } = useParams();
  const [specialites, setSpecialites] = useState([]);
  const [villes, setVilles] = useState([]);
  const [specialiteChoisie, setSpecialiteChoisie] = useState("");
  const [villeChoisie, setVilleChoisie] = useState("");
  const [artisans, setArtisans] = useState([]);

  console.log("Catégorie reçue depuis l'URL :", categorie);

  // Récupérer les spécialités à partir de la catégorie
  useEffect(() => {
    if (categorie) {
      getSpecialitesByCategorie(categorie)
        .then((data) => setSpecialites(data))
        .catch(console.error);
    }
  }, [categorie]);

  // Récupérer les villes quand une spécialité est choisie
  useEffect(() => {
    if (specialiteChoisie) {
      getVillesBySpecialite(specialiteChoisie)
        .then((data) => setVilles(data))
        .catch(console.error);
    } else {
      setVilles([]);
      setVilleChoisie("");
    }
  }, [specialiteChoisie]);

  // Fonction pour rechercher les artisans
  const handleRecherche = () => {
    if (specialiteChoisie && villeChoisie) {
      getArtisansFiltres(specialiteChoisie, villeChoisie)
        .then((data) => setArtisans(data))
        .catch(console.error);
    }
  };

  const getImageParCategorie = (categorie) => {
    switch (categorie.toLowerCase()) {
      case "alimentation":
        return "/images/categories/alimentation.jpg";
      case "batiment":
        return "/images/categories/batiment.jpg";
      case "services":
        return "/images/categories/services.jpg";
      case "fabrication":
        return "/images/categories/fabrication.jpg";
      default:
        return "/images/categories/default.jpg";
    }
  };

  return (
    <div className="container mt-4">
      <hr className="hrTitre2" />
      <h2>Recherchez un artisan près de chez vous</h2>

      {/* Sélecteur de spécialité */}
      <div className="row" style={{ marginBottom: "2em" }}>
        <div className="col" style={{ width: "50%" }}>
          <label>Sélectionnez la spécialité</label>
          <select
            className="form-select"
            value={specialiteChoisie}
            onChange={(e) => setSpecialiteChoisie(e.target.value)}
          >
            <option value=""></option>
            {specialites.map((s) => (
              <option key={s.Id_specialite} value={s.specialite_libelle}>
                {s.specialite_libelle}
              </option>
            ))}
          </select>

          {/* Sélecteur de ville */}
          <label>Sélectionnez la localité</label>

          <select
            className="form-select"
            value={villeChoisie}
            onChange={(e) => setVilleChoisie(e.target.value)}
            disabled={!specialiteChoisie}
          >
            <option value=""></option>
            {villes.map((v) => (
              <option key={v.Id_ville} value={v.ville_nom}>
                {v.ville_nom}
              </option>
            ))}
          </select>

          <button
            className="boutonRecherche"
            onClick={handleRecherche}
            disabled={!specialiteChoisie || !villeChoisie}
          >
            Rechercher
          </button>
        </div>
        <div className="row" style={{ width: "50%" }}>
          <img
            src={getImageParCategorie(categorie)}
            alt={categorie}
            className="img-fluid"
            style={{
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      {/* Résultats */}
      <div>
        {artisans.length === 0 ? (
          <p style={{ visibility: "hidden" }}>Aucun artisan trouvé.</p>
        ) : (
          artisans.map((a) => (
            <div key={a.Id_artisan}>
              <h5 className="resultatRecherche">{a.artisan_nom}</h5>

              <p style={{ width: "50%" }}>{a.artisan_apropos}</p>
              <a href="/ficheartisan/:id">
                <button
                  className="boutonDecouvrir"
                  style={{ marginBottom: "2em" }}
                >
                  Découvrir
                  <i
                    className="bi bi-arrow-right"
                    style={{ marginLeft: "2em" }}
                  ></i>
                </button>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FiltreArtisans;
