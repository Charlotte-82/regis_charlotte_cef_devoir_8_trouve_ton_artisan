import { useEffect, useState } from "react";
import { getArtisansTop } from "../services/artisansServices";

function TopArtisans() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    getArtisansTop().then((res) => {
      console.log("Réponse complète :", res);
      setArtisans(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {Array.isArray(artisans) &&
          artisans.map((a, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm mb-4">
                {a.image && (
                  <img
                    src={a.image}
                    alt={`Portrait de ${a.nom}`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h3 className="card-title">{a.nom}</h3>
                  <h4 className="card-subtitle mb-2 text-muted">
                    {a.specialite} — {a.ville}
                  </h4>

                  <p>
                    <strong>Note :</strong> {a.note}/5
                  </p>
                  {a.site && (
                    <a
                      href={a.site}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site web
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        {artisans.length === 0 && (
          <p>Aucun artisan à afficher pour le moment.</p>
        )}
      </div>
    </div>
  );
}

export default TopArtisans;
