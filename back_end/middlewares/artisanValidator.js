const { body } = require("express-validator");

exports.validateArtisan = [
  body("artisan_nom")
    .isString()
    .notEmpty()
    .withMessage("Le nom est obligatoire"),
  body("artisan_email").isEmail().withMessage("Email invalide"),
  body("artisan_note")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("La note doit être entre 0 et 5"),
  body("artisan_top")
    .optional()
    .isBoolean()
    .withMessage("Top doit être un booléen"),
  body("artisan_site")
    .optional()
    .isURL()
    .withMessage("Site doit être une URL valide"),
  body("specialite_libelle").optional().isString(),
  body("ville_nom").optional().isString(),
  body("artisan_apropos").optional().isString(),
];
