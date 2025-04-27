const { body } = require("express-validator");

exports.validateArtisan = [
  body("nom").isString().notEmpty().withMessage("Le nom est obligatoire"),
  body("email").isEmail().withMessage("Email invalide"),
  body("note")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("La note doit être entre 0 et 5"),
  body("top").optional().isBoolean().withMessage("Top doit être un booléen"),
  body("site").optional().isURL().withMessage("Site doit être une URL valide"),
  body("specialite").optional().isString(),
  body("ville").optional().isString(),
  body("aPropos").optional().isString(),
];
