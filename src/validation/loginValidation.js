const { check } = require('express-validator');
const { readJSON } = require("../data/index");
const bcrypt = require('bcrypt'); 

const validateLogin = [
    check('email').isEmail().withMessage('Email no es válido'),
    check('password').notEmpty().withMessage('Contraseña es obligatoria')
        .custom((value, { req }) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email);

            if (!user || !bcrypt.compareSync(value, user.password)) {
                throw new Error('Credenciales incorrectas');
            }

            return true;
        }),
];

module.exports = validateLogin;
