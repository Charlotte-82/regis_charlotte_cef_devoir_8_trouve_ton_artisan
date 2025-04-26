const express = require("express");
const router = express.Router();
const categorieControllers = require("../controllers/categorieControllers");

router.post("/", categorieControllers.creerCategorie);
router.get("/", categorieControllers.getCategories);
router.get("/:id", categorieControllers.getCategorieById);
router.delete("/:id", categorieControllers.deleteCategorie);
router.patch("/:id", categorieControllers.updateCategorie);

module.exports = router;
