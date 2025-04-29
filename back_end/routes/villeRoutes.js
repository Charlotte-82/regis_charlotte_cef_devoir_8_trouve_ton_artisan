const express = require("express");
const router = express.Router();
const villeControllers = require("../controllers/villeControllers");

router.post("/", villeControllers.creerVille);
router.get("/", villeControllers.getVilles);
router.get("/:id", villeControllers.getVilleById);
router.delete("/:id", villeControllers.deleteVille);
router.patch("/:id", villeControllers.updateVille);

module.exports = router;
