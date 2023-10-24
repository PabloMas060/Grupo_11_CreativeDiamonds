const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isLength({
            min: 2,
            max: 255
        }).withMessage('La cantidad de caracteres debe ser entre 2 y 255'),
    check('category')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('history')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('dateFounded')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isNumeric().withMessage('El dato de fundacion debe ser un número válido'),
    check('dateEnded')
        .isNumeric().withMessage('Éste campo es obligatorio'),
    check('totalShows')
        .notEmpty().withMessage('Éste campo es obligatorio').bail()
        .isNumeric().withMessage('La cantidad de shows debe ser un número válido'),
    check('nextShows')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    check('resume')
    .notEmpty().withMessage('Éste campo es obligatorio'),
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