const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El campo nombre es obligatorio')
    .custom((value, { req }) => {
        console.log('Valor del campo nombre:', value);
        return true; 
    })
];