const Category = require('../../database/models/Category')

const addAlbum = (req, res) => {
    Category.findAll()
        .then(categories => {
            return res.render('./admin/addAlbum', { categories });
        })
        .catch(error => {
            console.log(error); 
        });
};

module.exports = {
    addAlbum,
};