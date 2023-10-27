const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    return res.render('update-profile');

   
   /* const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { first_name, last_name, nick_name, state, about } = req.body;

        db.User.update(
            {
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                nick_name: nick_name.trim(),
                state: state.trim(),
                about: about.trim(),
            },
            {
                where: {
                    id: req.session.userLogin.id,
                },
            }
        )
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
    } */
};
