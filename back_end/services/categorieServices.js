const Categorie = require("../models/categorieModel");

exports.creerCategorie = async (data) => {
  return await Categorie.create(data);
};

exports.getToutesCategories = async () => {
  return await Categorie.findAll();
};

exports.getCategorieById = async (id) => {
  return await Categorie.findByPk(id);
};

exports.updateCategorie = async (id, data) => {
  const categorie = await Categorie.findByPk(id);
  if (!categorie) return null;
  return await categorie.update(data);
};

exports.deleteCategorie = async (id) => {
  const categorie = await Categorie.findByPk(id);
  if (!categorie) return null;
  await categorie.destroy();
  return categorie;
};
