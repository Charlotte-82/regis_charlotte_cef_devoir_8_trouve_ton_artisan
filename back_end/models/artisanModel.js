const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "artisan",
  {
    artisan_nom: { type: DataTypes.STRING, allowNull: false },
    artisan_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    artisan_site: { type: DataTypes.STRING },
    artisan_apropos: { type: DataTypes.TEXT },
    artisan_note: {
      type: DataTypes.DECIMAL(3, 1),
      validate: { min: 0.0, max: 5.0 },
    },
    artisan_top: { type: DataTypes.BOOLEAN, defaultValue: false },
    specialite_libelle: { type: DataTypes.STRING },
    ville_nom: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    tableName: "artisan",
  }
);

module.exports = Artisan;
