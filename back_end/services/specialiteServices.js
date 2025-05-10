const Categorie = require("../models/categorieModel");
const Specialite = require("../models/specialiteModel");

exports.getToutesSpecialites = async () => {
  return await Specialite.findAll();
};

exports.getSpecialiteById = async (id) => {
  return await Specialite.findByPk(id);
};
