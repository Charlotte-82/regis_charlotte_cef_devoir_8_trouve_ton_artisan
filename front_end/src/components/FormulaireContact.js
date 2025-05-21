import { useState } from "react";

function FormulaireContact({ artisanNom, artisanEmail }) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          destinataire: artisanEmail,
        }),
      });

      if (response.ok) {
        setEnvoiReussi(true);
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          objet: "",
          message: "",
        });
      } else {
        console.error("Erreur lors de l'envoi du message");
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }
  };

  return (
    <div className="mt-5">
      <hr className="hrTitre2"></hr>
      <h2>
        Contactez l’artisan <strong>{artisanNom}</strong>
      </h2>

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

          <div className="radioOption">
            <input type="radio" name="contact" className="radioFormulaire" />
            <label className="labelRadio">Je veux être contacté par mail</label>
          </div>

          <div className="radioOption">
            <input type="radio" name="contact" className="radioFormulaire" />
            <label className="labelRadio">
              Je veux être contacté par téléphone
            </label>
          </div>
        </div>

        <button type="submit" className="boutonBasPage">
          Demander un devis
        </button>
      </form>
    </div>
  );
}

export default FormulaireContact;
