const express = require("express");
const router = express.Router();
const specialiteControllers = require("../controllers/specialiteControllers");

router.post("/", specialiteControllers.creerSpecialite);
router.get("/", specialiteControllers.getSpecialites);
router.get("/:id", specialiteControllers.getSpecialiteById);
router.delete("/:id", specialiteControllers.deleteSpecialite);
router.patch("/:id", specialiteControllers.updateSpecialite);

module.exports = router;
