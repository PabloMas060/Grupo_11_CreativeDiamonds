const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcrypt');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { first_name, last_name, email, password } = req.body;

        db.User.create({
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email: email.trim(),
            password: hashSync(password, 10),
            rolId: 2,
            addressId: null,
            identificatorId: null,
            faceId: 1,
            headId: 1,
            bustId: 1,
            hatId: 1
        })
        .then(user => {
            return res.redirect('/');
        })
        .catch(error => {
            console.log(error);});
    } else {
        return res.redirect(500, '/users/register');
    }
};
