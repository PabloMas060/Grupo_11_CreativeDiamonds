const db = require('../../database/models')

module.exports = (req, res) => {

    const merchs = db.Merch.findAll({
        where: {
            bandId: req.params.id
        }
    })
    const albums = db.Album.findAll({
        where: {
            bandId: req.params.id
        }
    })
    const type = db.Type.findAll()

    const band = db.Band.findByPk(req.params.id)

    Promise.all([merchs, albums, type, band])
        .then(([merchs, albums, type, band]) => {
            if (!band) {
                return res.send('Banda no encontrada')
            }
            return res.render('artistDetail', {
                merchs,
                albums,
                type,
                band
            })
        })
        .catch(error => console.log(error))



}
