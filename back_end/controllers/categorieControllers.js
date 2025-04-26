const categorieService = require("../services/categorieServices");

exports.creerCategorie = async (req, res) => {
  try {
    const nouvelleCategorie = await categorieService.creerCategorie(req.body);
    res.status(201).json(nouvelleCategorie);
  } catch (err) {
    console.error("La catégorie n'a pas pu être créée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await categorieService.getToutesCategories();
    res.status(200).json(categories);
  } catch (err) {
    console.error("Aucune catégorie n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await categorieService.getCategorieById();
    res.status(200).json(categorie);
  } catch (err) {
    console.error("Aucune catégorie n'a été trouvée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.updateCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.updateCategorie();
    res.status(200).json(categorie);
  } catch (err) {
    console.error(
      "Les informations de la catégorie n'ont pas été modifiées :",
      err
    );
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};

exports.deleteCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.deleteCategorie();
    res.status(200).json(categorie);
  } catch (err) {
    console.error("La categorie n'a pas pu être effacée :", err);
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
};
