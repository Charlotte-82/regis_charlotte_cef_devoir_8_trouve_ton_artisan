const artisanService = require("../services/artisanServices");

exports.getArtisans = async (req, res) => {
  try {
    const { categorie } = req.query;

    let artisans;

    if (categorie) {
      artisans = await artisanService.getArtisansParCategorie(categorie);
    } else {
      artisans = await artisanService.getTousArtisans();
    }

    res.status(200).json(artisans);
  } catch (err) {
    console.error("Erreur lors de la récupération des artisans :", err);
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

exports.getTopArtisans = async (req, res) => {
  try {
    const topArtisans = await artisanService.fetchTopArtisans();
    console.log("Résultat reçu dans le contrôleur :", topArtisans);
    res.json({ data: topArtisans });
  } catch (error) {
    console.error("Erreur dans getTopArtisans :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
