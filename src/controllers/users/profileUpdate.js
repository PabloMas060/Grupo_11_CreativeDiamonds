const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { first_name, last_name, nick_name, state, about, address, country, city, province, zipcode, identificator  } = req.body;

        const addressData = {
            address: address.trim(),
            country: country.trim(),
            city: city.trim(),
            province: province.trim(),
            zipcode: zipcode,
        };

        db.User.findByPk(req.session.userLogin.id, {
            include: [{
                model: db.Address,
                as: 'address',
            }]
        })
        .then(user => {
            if (user.address) {
                return db.Address.update(addressData, {
                    where: {
                        id: user.address.id,
                    }
                });
            }
        })
        .then(() => {
            return db.User.update(
                {
                    first_name: first_name.trim(),
                    last_name: last_name.trim(),
                    nick_name: nick_name.trim(),
                    state: state.trim(),
                    about: about.trim(),
                    identificatorId: identificator,
                },
                {
                    where: {
                        id: req.session.userLogin.id,
                    },
                }
            );
        })
        .then(() => {
            return res.redirect('/');
        })
        .catch(error => console.log(error));
    } else {
        db.User.findByPk(req.session.userLogin.id)
            .then(user => {
                return res.render('profile', {
                    ...user.dataValues,
                    errors: errors.mapped(),
                });
            })
            .catch(error => console.log(error));
    } 
};
