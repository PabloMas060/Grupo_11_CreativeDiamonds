const db = require('../../database/models')

module.exports = (req, res) => {

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