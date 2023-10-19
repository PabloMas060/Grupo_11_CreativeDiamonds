const db = require('../../database/models')

module.exports = (req, res) => {

    const band = db.Band.findByPk({
        where : {
            id: req.params.id
        }
    })
    const albums = db.Album.findAll({
        include : [
            {
                association : 'band',
                include : [
                    {
                        all: true
                    }
                ]
            }
        ]
    })
    const merchs = db.Merch.findAll({
        include : [
            {
                association : 'band',
                include : [
                    {
                        all: true
                    }
                ]
            }
        ]
    })
    Promise.all([band,albums,merchs])
        .then(([band,albums,merchs]) => {
            return res.render('artistDetail', {
                band,
                albums,
                merchs
            })
        })

    }