const db = require('../../database/models');

module.exports = (req, res) => {
    
        db.Band.findAll()
        .then((bands) => {
            return res.render('artists',{
                bands
            })
        })


}