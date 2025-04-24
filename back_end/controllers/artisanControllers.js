const artisanService = require("../services/artisanServices");

exports.creerArtisan = async (req, res) => {
  try {
    const nouvelArtisan = await artisanService.creerArtisan(req.body);
    res.status(201).json(nouvelArtisan);
  } catch (err) {
    console.error("L'artisan n'a pas pu être créé :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTousArtisans();
    res.status(200).json(artisans);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
