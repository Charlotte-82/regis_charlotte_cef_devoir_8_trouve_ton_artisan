function FicheDetails({ artisan }) {
  return (
    <div>
      <img src={artisan?.artisan_image} alt={artisan?.artisan_nom} />
      <h2>{artisan?.artisan_nom}</h2>
      <p>
        <strong>Ville :</strong> {artisan?.Ville?.ville_nom || "Non renseignée"}
      </p>
      <p>
        <strong>Spécialité :</strong>{" "}
        {artisan?.Specialite?.specialite_libelle || "Non renseignée"}
      </p>
      <p>
        <strong>Description :</strong> {artisan?.artisan_apropos}
      </p>
      <p>
        <strong>Note :</strong> {artisan?.artisan_note}/5
      </p>
      {artisan?.artisan_site && (
        <p>
          <a href={artisan.artisan_site} target="_blank" rel="noreferrer">
            Site web
          </a>
        </p>
      )}
    </div>
  );
}

export default FicheDetails;
