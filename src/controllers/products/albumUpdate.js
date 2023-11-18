const { validationResult } = require('express-validator');
const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');

module.exports = (req, res) => {

    const errors = validationResult(req);
    const id = req.params.id;

    if (errors.isEmpty()) {
        const { title, discography, year, price, discount, bandId, genreId, exclusive, description } = req.body;

        db.Album.findByPk(id)
            .then(album => {
                db.Genre.findAll()
                    .then(genres => {
                        db.Band.findAll()
                            .then(bands => {
                                db.Album.update(
                                    {
                                        title: title.trim(),
                                        discography: discography.trim(),
                                        year,
                                        price,
                                        discount: discount ? discount : 0,
                                        bandId,
                                        genreId,
                                        exclusive: exclusive === true ? 1 : 0,
                                        description: description.trim(),
                                        image: req.file ? req.file.filename : album.image
                                    },
                                    {
                                        where: {
                                            id
                                        }
                                    }
                                ).then((album) => {
                                    if (req.file && req.file.image && existsSync(`./public/images/albums/${album.image}`)) {
                                        unlinkSync(`./public/images/albums/${album.image}`)
                                    }
                                    return res.redirect('/users/admin')
                                })
                            })
                    })
            })
            .catch(error => console.log(error))


    } else {
        const genres = db.Genre.findAll()
        const bands = db.Band.findAll()
        const album = db.Album.findByPk(id)

        Promise.all([genres, bands, album])
            .then(([genres, bands, album]) => {
                return res.render('./admin/editAlbum', {
                    genres,
                    bands,
                    album,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
    }

};