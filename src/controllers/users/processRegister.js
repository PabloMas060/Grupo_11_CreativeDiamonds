const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('register', { errors: errors.mapped(), old:req.body});
        }
        
        const { first_name, last_name, email, password } = req.body;
        console.log(first_name, last_name, email, password);
        // Crea el usuario en la base de datos
        const user = await db.User.create({
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
        });

        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return res.status(500).render('error', { error: 'Internal Server Error' });
    }
};
