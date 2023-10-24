const db = require('../../database/models');
module.exports = (req, res) => {

    db.Band.findByPk(req.params.id)
    .then(band => {
        res.render('./admin/bandDelete', { band });
    });
}