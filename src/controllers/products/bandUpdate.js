const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const { name, categoryId, phrase, dateFounded, dateEnded, totalShows, nextShows, history, resume } = req.body;

    db.Band.findByPk(id)
        .then(band => {
            if (req.files.image && existsSync(`./public/images/bands/${band.image}`)) {
                unlinkSync(`./public/images/bands/${band.image}`);
            }
            if (req.files.image && Array.isArray(band.mainImage)) {
                band.mainImage.forEach(mainImage => {
                    if (existsSync(`./public/images/bands/${mainImage.file}`)) {
                        unlinkSync(`./public/images/bands/${mainImage.file}`);
                    }
                });
            }

            db.Category.findAll()
                .then(categories => {
                    db.Band.update(
                        {
                            name: name.trim(),
                            history,
                            mainImage: req.files.mainImage ? req.files.mainImage[0].filename : (Array.isArray(band.mainImage) ? band.mainImage[0].file : null),
                            image: req.files.image ? req.files.image[0].filename : band.image,
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
                        if (req.files.mainImage || req.files.image) {
                            const deleteImagePromises = [];

                            function deleteFiles(files) {
                                files.forEach(file => {
                                    if (existsSync(`./public/images/bands/${file.file}`)) {
                                        deleteImagePromises.push(new Promise(resolve => {
                                            unlinkSync(`./public/images/bands/${file.file}`);
                                            resolve();
                                        }));
                                    }
                                });
                            }

                            if (Array.isArray(band.mainImage)) {
                                deleteFiles(band.mainImage);
                            }

                            deleteFiles(band.image);

                            Promise.all(deleteImagePromises).then(() => {
                                return res.redirect('/users/admin');
                            });
                        } else {
                            return res.redirect('/users/admin');
                        }
                    });
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
};