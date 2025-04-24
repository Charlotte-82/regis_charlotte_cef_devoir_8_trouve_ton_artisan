const Artisan = require("../models/artisanModel");

exports.creerArtisan = async (data) => {
  return await Artisan.create(data);
};

exports.getTousArtisans = async () => {
  return await Artisan.findAll();
};
