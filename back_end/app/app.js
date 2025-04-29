const express = require("express");
const app = express();
const sequelize = require("../config/database");
require("../models");
const artisanRoutes = require("../routes/artisanRoutes");
const villeRoutes = require("../routes/villeRoutes");
const specialiteRoutes = require("../routes/specialiteRoutes");
const categorieRoutes = require("../routes/categorieRoutes");

app.use(express.json());
app.use("/api/artisans", artisanRoutes);
app.use("/api/villes", villeRoutes);
app.use("/api/specialites", specialiteRoutes);
app.use("/api/categories", categorieRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("La base de données est connectée");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`Le serveur est lancé sur http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Erreur de démarrage serveur :", error);
  }
})();
