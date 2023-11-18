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
    check('phrase')
        .notEmpty().withMessage('Éste campo es obligatorio'),
        check('dateFounded')
        .notEmpty().withMessage('Éste campo es obligatorio'),
        check('totalShows')
        .notEmpty().withMessage('Éste campo es obligatorio'),
        check('nextShows')
        .notEmpty().withMessage('Éste campo es obligatorio'),
        check('history')
        .notEmpty().withMessage('Éste campo es obligatorio'),
        check('resume')
        .notEmpty().withMessage('Éste campo es obligatorio'),
    
]