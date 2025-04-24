const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "Artisan",
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
    top: { type: DataTypes.BOOLEAN, defaultValue: false },
    specialite: { type: DataTypes.STRING },
    ville: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    tableName: "artisan",
  }
);

module.exports = Artisan;
