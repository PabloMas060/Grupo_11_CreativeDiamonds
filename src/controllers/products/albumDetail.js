const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;

    const album = db.Album.findByPk(id)

        .then(album => {
        if (!album) {
            return res.send('Album no encontrado');
        }
        return res.render('albumDetail', {
        album
        });
    })
        .catch(error => console.log(error));
}