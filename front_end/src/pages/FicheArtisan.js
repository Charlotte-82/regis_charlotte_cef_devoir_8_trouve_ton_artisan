import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtisanById } from "../services/artisansServices";
import FicheDetails from "../components/FicheDetails";
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

  console.log("Objet artisan passé à FicheDetails :", artisan);

  return (
    <div className="container mt-4">
      <FicheDetails artisan={artisan} />
      <hr />
      <FormulaireContact artisanNom={artisan.artisan_nom} />
    </div>
  );
}

export default FicheArtisan;
