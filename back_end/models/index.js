const Artisan = require("./artisanModel");
const Specialite = require("./specialiteModel");
const Categorie = require("./categorieModel");

// Associations
Categorie.hasMany(Specialite, { foreignKey: "Id_categorie" });
Specialite.belongsTo(Categorie, { foreignKey: "Id_categorie" });

Specialite.hasMany(Artisan, { foreignKey: "Id_specialite" });
Artisan.belongsTo(Specialite, { foreignKey: "Id_specialite" });

// Exporter tous les modèles
module.exports = {
  Artisan,
  Specialite,
  Categorie,
};
