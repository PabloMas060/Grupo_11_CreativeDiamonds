const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, price,  discount, description, exclusive, band, type} = req.body
        db.Merch.create({
        name : name.trim(),
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive,
        bandId : band,
        typeId : type,
        image : req.file ? req.file.filename : null
        })
        .then(merch => {
            if (req.file) {
                    return res.redirect('/admin');
                }
            })
        .catch(error => console.log(error))
    


    } else {
        if (req.file) {
            const routeImage = './public/images/' + req.file.filename;
    
            if (existsSync(routeImage)) {
                unlinkSync(routeImage);
            }
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
        bands
            });
        })
        .catch (error => console.log(error))





    }