const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await db.User.findByPk(id, {
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
        });
        return res.render('editProfile', {
            user,
        });
    } catch (error) {
        return console.log(error);
    }
}
