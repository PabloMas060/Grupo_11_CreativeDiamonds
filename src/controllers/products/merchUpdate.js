const { validationResult } = require('express-validator');
const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');


module.exports = async (req, res) => {

    const errors = validationResult(req);
    const id = req.params.id;
    const { name, price, discount, bandId, typeId, exlusive, description } = req.body;

    if (errors.isEmpty()) {


        db.Merch.findByPk(id)
            .then((merch) => {
                db.Type.findAll()
                    .then(types => {
                        db.Band.findAll()
                            .then(bands => {
                                db.Merch.update(
                                    {
                                        name: name.trim(),
                                        price,
                                        discount: discount ? discount : 0,
                                        bandId,
                                        typeId,
                                        exclusive: exlusive === true ? 1 : 0,
                                        description: description.trim(),
                                        image: req.file ? req.file.filename : merch.image
                                    },
                                    {
                                        where: { id }
                                    }
                                ).then(merch => {
                                    if (req.file && req.file.image && existsSync(`./public/images/merch/${merch.image}`)) {
                                        unlinkSync(`./public/images/merch/${merch.image}`)
                                    }

                                    return res.redirect('/users/admin')
                                })
                            })
                    })
            })
            .catch(error => console.log(error))

    } else {
        const types = db.Type.findAll()
        const bands = db.Band.findAll()
        const merch = db.Merch.findByPk(id)

        Promise.all([types, bands, merch])
            .then(([types, bands, merch]) => {
                return res.render('./admin/editMerch', {
                    types,
                    bands,
                    merch,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
    }





}