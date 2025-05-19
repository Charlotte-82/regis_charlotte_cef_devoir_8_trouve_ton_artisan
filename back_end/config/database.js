const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tta_bdd",
  "admin",
  "PalpatineMeilleurChien2019!",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
