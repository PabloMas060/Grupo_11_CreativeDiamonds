const { check, body } = require('express-validator');

module.exports = [
    check('title')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 2,
            max: 255
        }).withMessage('La cantidad de caracteres debe ser entre 2 y 255'),
    check('artist')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('price')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isDecimal().withMessage('El precio debe ser un número válido'),
    check('format')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('discographic')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('genre')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('year')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isNumeric().withMessage('Sólo se admiten números'),
    check('description')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isLength({
        min:20,
        max: 500
    }).withMessage('La cantidad de caracteres admitidos es entre 20 y 500'),
    body('mainImage')
        .custom((value, {req}) => {
            if(req.file) {
                return true
            }
            return false
        }).withMessage('La imagen principal es obligatoria')
]