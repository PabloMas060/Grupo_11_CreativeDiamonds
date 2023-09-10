const { check } = require('express-validator');
const { readJSON } = require("../data/index");

const validateRegistration = [
    check('firstName').notEmpty().withMessage('Nombre es obligatorio'),
    check('lastName').notEmpty().withMessage('Apellido es obligatorio'),
    check('email').isEmail().withMessage('Email no es válido')
    .custom((value) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === value);
        if(user){
            return false
        }
        return true
    }).withMessage('El email ya se encuentra registrado'),
    check('password').notEmpty().withMessage('Contraseña es obligatoria'),
    check('confirmPassword')
        .custom((value, { req }) => value === req.body.password).withMessage('Confirmación de contraseña no coincide'),
];

module.exports = validateRegistration