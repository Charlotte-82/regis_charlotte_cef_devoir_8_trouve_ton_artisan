const express = require("express");
const router = express.Router();
const artisanControllers = require("../controllers/artisanControllers");

router.post("/", artisanControllers.creerArtisan);
router.get("/", artisanControllers.getArtisans);
router.get("/:id", artisanControllers.getArtisanById);
router.delete("/:id", artisanControllers.deleteArtisan);
router.patch("/:id", artisanControllers.updateArtisan);

module.exports = router;
