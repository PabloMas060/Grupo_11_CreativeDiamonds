const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, price,  discount, description, exclusive, bandId, typeId} = req.body
        db.Merch.create({
        name : name.trim(),
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive: exclusive === true ? 1 : 0,
        bandId,
        typeId,
        image : req.file ? req.file.filename : null
        })
        .then(merch => {
            if (req.file) {
                    return res.redirect('/users/admin');
                }
            })
        .catch(error => console.log(error))
    


    } else {
        if (req.file) {
            const routeImage = './public/images/merch/' + req.file.filename;
    
            if (existsSync(routeImage)) {
                unlinkSync(routeImage);
            }
        }
    
    
    const types = db.Type.findAll({
        order : ['name']
    });

    const bands = db.Band.findAll({
        order : ['name']
    });
    Promise.all([types, bands])
        .then(([types, bands]) => {
            return res.render("mercheAdd", {
        types,
        bands,
        errors : errors.mapped(),
        old : req.body
            });
        })
        .catch (error => console.log(error))

    }



    }