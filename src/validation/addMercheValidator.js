const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 2,
            max: 255
        }).withMessage('La cantidad de caracteres debe ser entre 2 y 255'),

    check('price')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isDecimal().withMessage('El precio debe ser un número válido'),

    check('discount')
        .isNumeric().withMessage('Sólo se admiten números'),
    check('bandId')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('typeId')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('description')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La cantidad de caracteres admitidos es entre 20 y 500'),
 /*    body('image')
        .custom((value, { req }) => {
            if (req.file) {
                return true
            }
            return false
        }).withMessage('La imagen principal es obligatoria') */
]