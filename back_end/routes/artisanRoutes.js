const express = require("express");
const router = express.Router();
const artisanControllers = require("../controllers/artisanControllers");

router.post("/", artisanControllers.creerArtisan);
router.get("/", artisanControllers.getArtisans);

module.exports = router;
