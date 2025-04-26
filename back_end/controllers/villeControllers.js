const villeService = require("../services/villeServices");

exports.creerVille = async (req, res) => {
  try {
    const nouvelleVille = await villeService.creerVille(req.body);
    res.status(201).json(nouvelleVille);
  } catch (err) {
    console.error("La ville n'a pas pu être créée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

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

exports.updateVille = async (req, res) => {
  try {
    const ville = await villeService.updateVille();
    res.status(200).json(ville);
  } catch (err) {
    console.error(
      "Les informations de la ville n'ont pas été modifiées :",
      err
    );
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.deleteVille = async (req, res) => {
  try {
    const ville = await villeService.deleteVille();
    res.status(200).json(ville);
  } catch (err) {
    console.error("La ville n'a pas pu être effacée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
