const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tta_bdd",
  "administrateur",
  "MotDePasseUltraSecure123!",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
