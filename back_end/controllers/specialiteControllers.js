const specialiteService = require("../services/specialiteServices");

exports.getSpecialites = async (req, res) => {
  try {
    const specialites = await specialiteService.getToutesSpecialites();
    res.status(200).json(specialites);
  } catch (err) {
    console.error("Aucune spécialité n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getSpecialiteById = async (req, res) => {
  try {
    const specialite = await specialiteService.getSpecialiteById();
    res.status(200).json(specialite);
  } catch (err) {
    console.error("Aucune spécialité n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
