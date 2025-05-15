// const Ville = require("../models/villeModel");
// const { Artisan, Ville, Specialite, Categorie, Sequelize } = require('../models');

const Artisan = require("../models/artisanModel");
const Specialite = require("../models/specialiteModel");
const Ville = require("../models/villeModel");
const Categorie = require("../models/categorieModel");
// const { QueryTypes } = require("sequelize");
const { Sequelize } = require("sequelize");
// const sequelize = require("../config/database");

exports.getToutesVilles = async () => {
  return await Ville.findAll();
};

exports.getVilleById = async (id) => {
  return await Ville.findByPk(id);
};

exports.getVillesBySpecialite = async (specialiteLibelle) => {
  console.log("Recherche des villes pour la spécialité :", specialiteLibelle);

  return await Ville.findAll({
    include: [
      {
        model: Artisan,
        required: true,
        include: [
          {
            model: Specialite,
            where: {
              specialite_libelle: specialiteLibelle,
            },
          },
        ],
      },
    ],
    attributes: ["Id_ville", "ville_nom"],
    group: ["ville.Id_ville"], // éviter les doublons
  });
};
