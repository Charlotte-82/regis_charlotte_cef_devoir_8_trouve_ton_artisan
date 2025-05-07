const Artisan = require("../models/artisanModel");
const Specialite = require("../models/specialiteModel");
const Ville = require("../models/villeModel");
const Categorie = require("../models/categorieModel");
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");

Artisan.belongsTo(Specialite, { foreignKey: "Id_specialite" });
Artisan.belongsTo(Ville, { foreignKey: "Id_ville" });

exports.creerArtisanAvecRelations = async (data) => {
  //   return await Artisan.create(data);
  // };
  const {
    artisan_nom,
    artisan_email,
    artisan_site,
    artisan_apropos,
    artisan_note,
    artisan_top,
    specialite_libelle,
    ville_nom,
  } = data;

  const specialiteTrouvee = await Specialite.findOne({
    where: { specialite_libelle: specialite_libelle },
  });

  if (!specialiteTrouvee) {
    throw new Error(
      "Cette spécialité n'existe pas. Il faut d'abord créer la nouvelle spécialité puis créer le nouvel utilisateur."
    );
  }

  const [villeTrouvee] = await Ville.findOrCreate({
    where: { ville_nom: ville_nom },
  });

  const nouvelArtisan = await Artisan.create({
    artisan_nom,
    artisan_email,
    artisan_site,
    artisan_apropos,
    artisan_note,
    artisan_top,
    Id_specialite: specialiteTrouvee.Id_specialite,
    Id_ville: villeTrouvee.Id_ville,
  });

  return nouvelArtisan;
};

exports.getTousArtisans = async () => {
  return await Artisan.findAll({
    include: [
      {
        model: Specialite,
        attributes: ["specialite_libelle"],
        include: [
          {
            model: Categorie,
            attributes: ["categorie_libelle"],
          },
        ],
      },
      { model: Ville, attributes: ["ville_nom"] },
    ],
  });
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

exports.fetchTopArtisans = async () => {
  const sql = `
    SELECT 
      a.artisan_image AS image,
      a.artisan_nom AS nom,
      a.artisan_note AS note,
      s.specialite_libelle AS specialite,
      v.ville_nom AS ville
    FROM artisan a
    JOIN specialite s ON a.Id_specialite = s.Id_specialite
    JOIN ville v ON a.Id_ville = v.Id_ville
    WHERE a.artisan_top = true
    ORDER BY a.artisan_note DESC
    LIMIT 3
  `;

  try {
    const results = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });

    return results;
  } catch (error) {
    console.error("Erreur SQL brute :", error);
    return [];
  }
};
