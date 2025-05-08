const express = require("express");
const router = express.Router();
const artisanControllers = require("../controllers/artisanControllers");
// const { isAdmin } = require("../middlewares/adminAuth");
// const { validateArtisan } = require("../middlewares/artisanValidator");
// const { handleValidation } = require("../middlewares/handleValidation");

// router.post(
//   "/",
//   isAdmin,
//   validateArtisan,
//   handleValidation,
//   artisanControllers.creerArtisan
// );
// router.delete(
//   "/:id",
//   isAdmin,
//   validateArtisan,
//   handleValidation,
//   artisanControllers.deleteArtisan
// );
// router.patch(
//   "/:id",
//   isAdmin,
//   validateArtisan,
//   handleValidation,
//   artisanControllers.updateArtisan
// );

router.get("/", artisanControllers.getArtisans);
router.get("/top", artisanControllers.getTopArtisans);
router.get("/:id", artisanControllers.getArtisanById);

module.exports = router;
