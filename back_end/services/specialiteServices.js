const Specialite = require("../models/specialiteModel");

exports.creerSpecialite = async (data) => {
  return await Specialite.create(data);
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
