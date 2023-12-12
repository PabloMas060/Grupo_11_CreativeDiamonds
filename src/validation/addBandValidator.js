const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 2,
            max: 255
        }).withMessage('La cantidad de caracteres debe ser entre 2 y 255'),
    check('categoryId')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('history')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('dateFounded')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isNumeric().withMessage('El dato de fundacion debe ser un número válido'),
    check('totalShows')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isNumeric().withMessage('La cantidad de shows debe ser un número válido'),
    check('resume')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('description')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La cantidad de caracteres admitidos es entre 20 y 500'),
   /*  body('image')
        .custom((value, { req }) => {
            if (req.files && req.files.image) {
                return true;
            }
            return false;
        })
        .withMessage('La imagen de la portada de la banda es obligatoria'),
    body('mainImage')
        .custom((value, { req }) => {
            if (req.files && req.files.images) {
                return true;
            }
            return false;
        })
        .withMessage('El logo de la banda es obligatorio') */
]