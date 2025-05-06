import { useEffect, useState } from "react";
import { getArtisansAlimentation } from "../services/AlimentationPageServices";

function ListeArtisanAlimentation() {
  const [artisansAlim, setArtisansAlim] = useState([]);

  useEffect(() => {
    getArtisansAlimentation()
      .then((res) => setArtisansAlim(res.data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div>
      {artisansAlim.map((item) => (
        <div key={item.id}>
          <h3>{item.titre}</h3>
          <p>{item.texte}</p>
        </div>
      ))}
    </div>
  );
}

export default ListeArtisanAlimentation;
