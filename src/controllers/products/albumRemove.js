const db = require('../../database/models');

module.exports = (req, res) => {

    db.Album.findByPk(req.params.id)
    .then(album => {
        res.render('./admin/albumDelete', { album });
    });
}
