const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {title, discography, year, price,  discount, description, exclusive, bandId, genreId} = req.body
        db.Album.create({
        title : title.trim(),
        discography : discography.trim(),
        year,
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive: exclusive === true ? 1 : 0,
        bandId,
        genreId,
        image : req.file ? req.file.filename : null
        })
        .then(album => {
            if (req.file) {
                    return res.redirect('/users/admin');
                }
            })
        .catch(error => console.log(error))
    


    } else {
        if (req.file) {
            const routeImage = './public/images/albums/' + req.file.filename;
    
            if (existsSync(routeImage)) {
                unlinkSync(routeImage);
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
            return res.render("./admin/addAlbum", {
        genres,
        bands,
        errors : errors.mapped(),
        old : req.body
            });
        })
        .catch (error => console.log(error))
    }




    }
