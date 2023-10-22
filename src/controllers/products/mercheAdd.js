const db = require('../../database/models')

module.exports = (req, res) => {

    const types = db.Type.findAll({
        order : ['name']
    });

    const bands = db.Band.findAll({
        order : ['name']
    });
    Promise.all([types, bands])
        .then(([types, bands]) => {
            return res.render("./admin/addMerch", {
        types,
        bands
            });
        })
        .catch (error => console.log(error))    
        
        


    }