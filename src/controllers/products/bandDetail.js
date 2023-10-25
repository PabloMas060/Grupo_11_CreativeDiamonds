const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const types = db.Type.findAll()
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

    Promise.all([types,merchs, albums, type, band])
        .then(([types,merchs, albums, type, band]) => {
            if (!band) {
                return res.send('Banda no encontrada');
            }
            return res.render('artistDetail', {
                id,
                types,
                merchs,
                albums,
                type,
                band
            });
        })
        .catch(error => console.log(error));
}