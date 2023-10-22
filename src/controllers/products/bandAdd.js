const db = require('../../database/models');

module.exports = (req, res) => {
    db.Category.findAll({
        order: ['name']
    })
    .then((categories) => {
        return res.render("AddBand", {
            categories,
        });
    })
    .catch((error) => {
        console.log(error);
        
    });
};
