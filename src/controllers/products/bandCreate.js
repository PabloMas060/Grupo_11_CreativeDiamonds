const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, history, dateFounded,  totalShows, nextShows, resume, phrase, category} = req.body

        db.Product.create({
        name : name.trim(),
        history : history.trim(),
        mainImage: req.files.image ? req.files.image[0].filename : null,
        dateFounded: dateFounded.trim(),
        totalShows : totalShows.trim(),
        nextShows : nextShows.trim(),
        resume: resume.trim(),
        phrase: phrase.trim(),
        categoryId : category,
        
        
        })
        .then(band => {
            if (req.files.images) {
                    return res.redirect('/admin/addBand');
                }
            })
        .catch(error => console.log(error))
    


    } else {
        if(req.files.length){
            req.files.forEach(file => {
                existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
            });
        }
    }
    



    db.Category.findAll({
        order: ['name']
    })
    .then((categories) => {
        return res.render("AddBand", {
            categories,
            errors : errors.mapped(),
            old : req.body
        });
    })
    .catch((error) => {
        console.log(error);
        
    })





    }
