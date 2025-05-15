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
            <div className="col-md-4 d-flex justify-content-around" key={index}>
              <div className="card mb-4" style={{ border: "none" }}>
                {a.image && (
                  <img
                    src={a.image}
                    alt={`Portrait de ${a.nom}`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h3
                    className="card-title"
                    style={{
                      textAlign: "right",
                      borderLeft: "solid 1px #0074c7",
                      marginLeft: "1em",
                    }}
                  >
                    {a.nom}
                  </h3>
                  <h4
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      textAlign: "right",
                      fontSize: "medium",
                      marginLeft: "2em",
                    }}
                  >
                    {a.specialite} — {a.ville}
                  </h4>

                  <p>
                    <strong>Note :</strong> {a.note}/5
                  </p>
                  <p>{a.apropos}</p>
                </div>
                <a href="/ficheartisan/:id">
                  <button className="boutonDecouvrir">
                    Découvrir
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginLeft: "2em" }}
                    ></i>
                  </button>
                </a>
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
