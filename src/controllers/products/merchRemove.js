const db = require('../../database/models');
module.exports = (req, res) => {

    db.Merch.findByPk(req.params.id)
    .then(merch => {
        res.render('./admin/merchDelete', { merch });
    });
}