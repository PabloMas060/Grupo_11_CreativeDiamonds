const { validationResult } = require('express-validator');
const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');

module.exports = (req, res) => {

    const errors = validationResult(req);
    const id = req.params.id;
    const { name, categoryId, phrase, dateFounded, dateEnded, totalShows, nextShows, history, resume } = req.body;
    if (errors.isEmpty()) {

        db.Band.findByPk(id)
            .then(band => {
                db.Category.findAll()
                    .then(categories => {
                        db.Band.update(
                            {
                                name: name.trim(),
                                history,
                                mainImage: req.files.length ? req.files.filename[0] : band.mainImage,
                                image: req.files.length ? req.files.filename[0] : band.image,
                                dateFounded,
                                dateEnded: dateEnded ? dateEnded : null,
                                totalShows,
                                nextShows,
                                resume,
                                phrase,
                                categoryId
                            },
                            {
                                where: {
                                    id
                                }
                            }

                        ).then(() => {
                            if (req.files.image && existsSync(`./public/images/bands/${band.mainImage}`)) {
                                unlinkSync(`./public/images/bands/${band.mainImage}`);
                                if (req.files.images && existsSync(`./public/images/bands${band.image}`)) {
                                    unlinkSync(`./public/images/bands/${band.image}`)
                                }

                            } else {

                                return res.redirect('/users/admin');
                            }
                        });
                    })
                    .catch(error => console.log(error));
            })
    } else {
        const categories = db.Category.findAll()
        const band = db.Band.findByPk(id)
        Promise.all([categories, band])
            .then(([categories, band]) => {
                return res.render('./admin/editBand', {
                    categories,
                    band,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
    }


};