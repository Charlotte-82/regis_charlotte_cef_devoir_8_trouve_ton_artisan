const specialiteService = require("../services/specialiteServices");

exports.creerSpecialite = async (req, res) => {
  try {
    const nouvelleSpecialite = await specialiteService.creerSpecialite(
      req.body
    );
    res.status(201).json(nouvelleSpecialite);
  } catch (err) {
    console.error("La spécialité n'a pas pu être créée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

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

exports.updateSpecialite = async (req, res) => {
  try {
    const specialite = await specialiteService.updateSpecialite();
    res.status(200).json(specialite);
  } catch (err) {
    console.error(
      "Les informations de la spécialité n'ont pas été modifiées :",
      err
    );
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.deleteSpecialite = async (req, res) => {
  try {
    const specialite = await specialiteService.deleteSpecialite();
    res.status(200).json(specialite);
  } catch (err) {
    console.error("La spécialité n'a pas pu être effacée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
