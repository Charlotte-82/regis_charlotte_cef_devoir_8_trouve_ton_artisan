const express = require("express");
const router = express.Router();
const villeControllers = require("../controllers/villeControllers");

router.get("/", villeControllers.getVilles);
router.get("/:id", villeControllers.getVilleById);

module.exports = router;
