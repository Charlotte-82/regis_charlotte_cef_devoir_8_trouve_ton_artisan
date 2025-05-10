const Ville = require("../models/villeModel");

exports.getToutesVilles = async () => {
  return await Ville.findAll();
};

exports.getVilleById = async (id) => {
  return await Ville.findByPk(id);
};
