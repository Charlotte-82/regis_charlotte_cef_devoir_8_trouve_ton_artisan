const Ville = require("../models/villeModel");

exports.creerVille = async (data) => {
  return await Ville.create(data);
};

exports.getToutesVilles = async () => {
  return await Ville.findAll();
};

exports.getVilleById = async (id) => {
  return await Ville.findByPk(id);
};

exports.updateVille = async (id, data) => {
  const ville = await Ville.findByPk(id);
  if (!ville) return null;
  return await ville.update(data);
};

exports.deleteVille = async (id) => {
  const ville = await Ville.findByPk(id);
  if (!ville) return null;
  await ville.destroy();
  return ville;
};
