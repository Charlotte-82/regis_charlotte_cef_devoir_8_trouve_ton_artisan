const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Specialite = sequelize.define(
  "specialite",
  {
    specialite_libelle: { type: DataTypes.STRING, allowNull: false },
    categorie_libelle: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    tableName: "specialite",
  }
);

module.exports = Specialite;
