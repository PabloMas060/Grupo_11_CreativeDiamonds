const db = require('../../database/models');

module.exports = (req, res) => {
    db.User.findByPk(req.session.userLogin.id, {
        include: [
            {
                model: db.Address,
                as: 'address',
            },
            {
                model: db.Identificator, 
                as: 'identificator', 
            },
            {
                model: db.Face, 
                as: 'face', 
            },
            {
                model: db.Head,
                as: 'head', 
            },
            {
                model: db.Bust, 
                as: 'bust',
            },
            {
                model: db.Hat,
                as: 'hat', 
            },
        ],
    })
        .then(user => {
            return res.render('profile', {
                user: user,
            });
        })
        .catch(error => console.log(error));
};
