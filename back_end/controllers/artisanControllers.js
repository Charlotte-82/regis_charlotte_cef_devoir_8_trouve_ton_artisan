const artisanService = require("../services/artisanServices");

// exports.creerArtisan = async (req, res) => {
//   try {
//     const nouvelArtisan = await artisanService.creerArtisanAvecRelations(
//       req.body
//     );
//     res.status(201).json(nouvelArtisan);
//   } catch (err) {
//     console.error("L'artisan n'a pas pu être créé :", err);
//     res.status(500).json({ message: "Erreur serveur", erreur: err.message });
//   }
// };

exports.creerArtisan = async (req, res) => {
  try {
    const nouvelArtisan = await artisanService.creerArtisanAvecRelations(
      req.body
    );
    res.status(201).json(nouvelArtisan);
  } catch (err) {
    console.error("L'artisan n'a pas pu être créé :", err);

    // Si le message vient d’une erreur métier connue :
    if (err.message.includes("Cette spécialité n'existe pas")) {
      return res.status(400).json({ message: err.message });
    }

    // Sinon, erreur serveur par défaut
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTousArtisans();
    res.status(200).json(artisans);
  } catch (err) {
    console.error("Aucun artisan n'a été trouvé :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await artisanService.getArtisanById();
    res.status(200).json(artisan);
  } catch (err) {
    console.error("Aucun artisan n'a été trouvé :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.updateArtisan = async (req, res) => {
  try {
    const artisan = await artisanService.updateArtisan();
    res.status(200).json(artisan);
  } catch (err) {
    console.error(
      "Les informations de l'artisan n'ont pas été modifiées :",
      err
    );
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.deleteArtisan = async (req, res) => {
  try {
    const artisan = await artisanService.deleteArtisan();
    res.status(200).json(artisan);
  } catch (err) {
    console.error("L'artisan n'a pas pu être effacé :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
