const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const merchs = db.Merch.findAll({
        where: {
            bandId: id
        }
    });
    const albums = db.Album.findAll({
        where: {
            bandId: id
        }
    });
    const type = db.Type.findAll();

    const band = db.Band.findByPk(id);

    Promise.all([merchs, albums, type, band])
        .then(([merchs, albums, type, band]) => {
            if (!band) {
                return res.send('Banda no encontrada');
            }
            return res.render('artistDetail', {
                id,
                merchs,
                albums,
                type,
                band
            });
        })
        .catch(error => console.log(error));
}