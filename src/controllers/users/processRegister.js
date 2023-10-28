const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcrypt');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { first_name, last_name, email, password } = req.body;

        db.Address.create({
            address: null,
            country: null,
            city: null,
            province: null,
            zipcode: null,
        })
        .then(address => {
            db.User.create({
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                email: email.trim(),
                password: hashSync(password, 10),
                rolId: 2,
                addressId: address.id,
                identificatorId: null 
            })
            .then(user => {
                return res.redirect('/');
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    } else {
        return res.redirect('/users/register', {
            old: req.body,
            errors: errors.mapped()
        });
    }
};
