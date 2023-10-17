const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, price,  discount, description, exclusive, band, type} = req.body
        db.Product.create({
        name : name.trim(),
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive,
        bandId : band,
        typeId : type
        })
        .then(merche => {
        if(req.files.length){
            const images = req.files.map(file => {
            return {
                file: file.filename,
                main : index === 0 ? true : false,
                productId : merche.id,
                }
            })
            db.Image.bulkcreate(images, {
            validate : true
            })
            .then(response => console.log(response))
        }
        return res.redirect('/admin');
        })
        .catch(error => console.log(error))



    }else {

        if(req.files.length){
        req.files.forEach(file => {
        
        
        existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
       });
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
        genres,
        bands
            });
        })
        .catch (error => console.log(error))





    }
}