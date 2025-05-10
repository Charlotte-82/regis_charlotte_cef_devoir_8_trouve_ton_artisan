const villeService = require("../services/villeServices");

exports.getVilles = async (req, res) => {
  try {
    const villes = await artisanService.getToutesVilles();
    res.status(200).json(villes);
  } catch (err) {
    console.error("Aucune ville n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getVilleById = async (req, res) => {
  try {
    const ville = await villeService.getVilleById();
    res.status(200).json(ville);
  } catch (err) {
    console.error("Aucune ville n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
