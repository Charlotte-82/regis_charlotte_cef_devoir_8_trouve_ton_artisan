const Categorie = require("../models/categorieModel");
const Specialite = require("../models/specialiteModel");

exports.creerSpecialite = async ({ specialite_libelle, categorie_libelle }) => {
  const categorie = await Categorie.findOne({
    where: { categorie_libelle },
  });

  console.log("Catégorie trouvée :", categorie?.dataValues);

  if (!categorie) {
    throw new Error("Cette catégorie n'existe pas. Créez-la d'abord.");
  }

  const nouvelleSpecialite = await Specialite.create({
    specialite_libelle,
    Id_categorie: categorie.Id_categorie,
  });

  return nouvelleSpecialite;
};

exports.getToutesSpecialites = async () => {
  return await Specialite.findAll();
};

exports.getSpecialiteById = async (id) => {
  return await Specialite.findByPk(id);
};

exports.updateSpecialite = async (id, data) => {
  const specialite = await Specialite.findByPk(id);
  if (!specialite) return null;
  return await specialite.update(data);
};

exports.deleteSpecialite = async (id) => {
  const specialite = await Specialite.findByPk(id);
  if (!specialite) return null;
  await specialite.destroy();
  return specialite;
};
