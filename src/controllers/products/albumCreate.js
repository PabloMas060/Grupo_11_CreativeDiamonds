const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {title, discography, year, price,  discount, description, exclusive, band, genre} = req.body
        db.Product.create({
        title : title.trim(),
        discography : discography.trim(),
        year,
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive,
        bandId : band,
        genreId : genre,
        image : req.file ? req.file.filename : null
        })
        .then(album => {
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
    
    const genres = db.Genre.findAll({
        order : ['name']
    });

    const bands = db.Band.findAll({
        order : ['name']
    });
    Promise.all([genres, bands])
        .then(([genres, bands]) => {
            return res.render("albumAdd", {
        genres,
        bands
            });
        })
        .catch (error => console.log(error))





    }
