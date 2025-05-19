import { useState } from "react";

function FormulaireContact({ artisanNom }) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  const [envoiReussi, setEnvoiReussi] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation d'envoi (tu pourrais brancher ici un service mail)
    console.log("Message envoyé à", artisanNom);
    console.log("Contenu :", formData);

    setEnvoiReussi(true);
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <div className="mt-5">
      <h3>
        Contactez l’artisan <strong>{artisanNom}</strong>
      </h3>

      {envoiReussi && (
        <div className="alert alert-success">
          Votre message a bien été envoyé !
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3 formulaireContact">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Votre nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="objet" className="form-label">
            L'objet de votre message
          </label>
          <input
            type="text"
            id="objet"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Décrivez votre projet
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="boutonBasPage">
          Demander un devis
        </button>
      </form>
    </div>
  );
}

export default FormulaireContact;
