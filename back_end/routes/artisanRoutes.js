const express = require("express");
const router = express.Router();
const artisanControllers = require("../controllers/artisanControllers");

router.get("/", artisanControllers.getArtisans);
router.get("/top", artisanControllers.getTopArtisans);
router.get("/:id", artisanControllers.getArtisanById);

module.exports = router;
