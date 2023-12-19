const { check } = require('express-validator');
const { readJSON } = require("../data/index");

const profileValidation = [
    check('first_name').notEmpty().withMessage('Nombre es obligatorio'),
    check('last_name').notEmpty().withMessage('Apellido es obligatorio'),
    check('nick_name').notEmpty().withMessage('Nickname  es obligatorio'),
    check('about')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isLength({
        min: 20,
        max: 500
    }).withMessage('La cantidad de caracteres admitidos es entre 20 y 500'),
    check('zipcode')
        .isNumeric().withMessage('Sólo caracteres numéricos')
        .isLength({
            min: 2,
            max: 8
        }).withMessage('La cantidad de caracteres admitidos es entre 2 y 8'),

];

module.exports = profileValidation