const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, history, dateFounded,  totalShows, nextShows, resume, phrase, categoryId} = req.body

        db.Band.create({
        name : name.trim(),
        history : history.trim(),
        mainImage: req.files.image ? req.files.image[0].filename : [],
        image: req.files.images ? req.files.images[0].filename : [],
        dateFounded: dateFounded.trim(),
        totalShows : totalShows.trim(),
        nextShows : nextShows.trim(),
        resume: resume.trim(),
        phrase: phrase.trim(),
        categoryId
        
        
        })
        .then(band => {
            if (req.files.images) {
                    return res.redirect('/users/admin');
                }
            })
        .catch(error => console.log(error))
    


    } else {
        if(req.files.length){
            req.files.forEach(file => {
                existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
            });
        }
  
    



    db.Category.findAll({
        order: ['name']
    })
    .then((categories) => {
        return res.render("./admin/addBand", {
            categories,
            errors : errors.mapped(),
            old : req.body
        });
    })
    .catch((error) => {
        console.log(error);
        
    })
}




    }
