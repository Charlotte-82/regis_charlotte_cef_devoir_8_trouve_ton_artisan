const Artisan = require("../models/artisanModel");

exports.creerArtisan = async (data) => {
  return await Artisan.create(data);
};

exports.getTousArtisans = async () => {
  return await Artisan.findAll();
};

exports.getArtisanById = async (id) => {
  return await Artisan.findByPk(id);
};

exports.updateArtisan = async (id, data) => {
  const artisan = await Artisan.findByPk(id);
  if (!artisan) return null;
  return await artisan.update(data);
};

exports.deleteArtisan = async (id) => {
  const artisan = await Artisan.findByPk(id);
  if (!artisan) return null;
  await artisan.destroy();
  return artisan;
};
