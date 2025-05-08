const Artisan = require("./artisanModel");
const Specialite = require("./specialiteModel");
const Categorie = require("./categorieModel");
const Ville = require("./villeModel");

// Associations
Categorie.hasMany(Specialite, { foreignKey: "Id_categorie" });
Specialite.belongsTo(Categorie, { foreignKey: "Id_categorie" });

Specialite.hasMany(Artisan, { foreignKey: "Id_specialite" });
Artisan.belongsTo(Specialite, { foreignKey: "Id_specialite" });

Ville.hasMany(Artisan, { foreignKey: "Id_ville" });
Artisan.belongsTo(Ville, { foreignKey: "Id_ville" });

// Exporter tous les modèles
module.exports = {
  Artisan,
  Specialite,
  Categorie,
};
