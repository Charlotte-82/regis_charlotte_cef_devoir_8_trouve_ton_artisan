const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categorie = sequelize.define(
  "categorie",
  {
    categorie_libelle: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    tableName: "categorie",
  }
);

module.exports = Categorie;
