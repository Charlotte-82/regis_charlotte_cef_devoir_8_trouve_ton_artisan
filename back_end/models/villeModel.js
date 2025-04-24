const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Ville = sequelize.define(
  "ville",
  {
    ville_nom: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    tableName: "ville",
  }
);

module.exports = Ville;
