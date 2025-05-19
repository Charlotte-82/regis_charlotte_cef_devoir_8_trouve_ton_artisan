import FiltreArtisan from "../components/FiltreArtisans";
import Chevron from "../assets/images/chevron-droit.png";
import { useParams } from "react-router-dom";

function Recherche() {
  const { categorie } = useParams(); // Récupérer le nom de la catégorie depuis l'URL
  console.log("Nom de la catégorie :", categorie);

  return (
    <div>
      {/* début entête */}
      <div style={{ marginTop: "1em" }}>
        {/* chemin emprunté par l'utilisateur depuis la page d'accueil */}
        <a href="/" style={{ color: "#0074c7" }}>
          Accueil
        </a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        <a href="/categoriepage" style={{ color: "#0074c7" }}>
          Catégorie
        </a>
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        <a href={`/par-categorie/${categorie}`} style={{ color: "#0074c7" }}>
          {categorie}
        </a>{" "}
        <span>
          <img
            src={Chevron}
            alt="icône de chevron vers la droite"
            className="chevronMenu"
          ></img>
        </span>
        {/* titre page */}
        <h1>Artisans de la catégorie : {categorie}</h1>{" "}
      </div>
      {/* fin entête */}

      <FiltreArtisan categorieLibelle={categorie} />
    </div>
  );
}

export default Recherche;
